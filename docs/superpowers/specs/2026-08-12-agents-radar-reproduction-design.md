# agents-radar 原版复现与 Top 5 信息雷达设计

日期：2026-08-12

## 背景与结论

`agents-radar` 是一个由 GitHub Actions 定时触发的 TypeScript 资讯流水线。它从 GitHub、Hacker News、Product Hunt、ArXiv、Hugging Face、Dev.to、Lobste.rs，以及 Anthropic/OpenAI 官网抓取数据，调用 LLM 生成中英双语 Markdown 日报，并可发布为 GitHub Issues、GitHub Pages 和 RSS。

本次工作采用“先验证上游原版，再做最小原生扩展”的路线。原版必须先在本机真实跑通；只有确认因账号、网络、模型或服务限制无法运行时，才启用保真降级。扩展不替换现有日报，而是新增一个聚焦 Hacker News 的 `ai-radar` 报告，实现每日 30 条唯一链接、可解释评分和固定 Top 5 推荐。

## 目标

1. 在 Windows 本机按上游依赖和入口运行完整原版，不先重写抓取、LLM 或报告流程。
2. 使用 DeepSeek 作为 LLM Provider，并使用有效的 GitHub Token 读取公开仓库数据。
3. 基线运行只写本地文件，不创建 GitHub Issues 或推送提交。
4. 原版通过后，新增中英双语 `ai-radar.md` / `ai-radar-en.md`：
   - 从 Hacker News Top Stories 扫描并尽量取得 30 条唯一 AI 链接；
   - 规范化 URL 与标题并去重，遇到重复时继续扫描以补足 30 条；
   - 为每条链接计算 0–100 的可解释分数；
   - 固定输出 5 条最高分推荐和全部候选的评分表；
   - DeepSeek 不可用或返回非法结构时，仍生成确定性 Top 5。
5. 保持上游的模块边界、双语约定、错误处理风格和测试工具链。

## 非目标

- 不引入数据库、Docker、浏览器自动化或本地模型。
- 不在第一版建立用户画像、邮件订阅、管理后台或多用户系统。
- 不把所有十类来源强行混入统一评分；第一版使用上游已经稳定产出 30 条的 Hacker News 流程，待核心闭环验证后再扩展来源。
- 不改变现有日报的文件名、输出结构或发布行为。
- 不在基线阶段提交自动生成的日报文件。

## 实施阶段

### 阶段 1：原版基线复现

1. 修复 GitHub CLI 登录，但不在命令输出中显示 Token。
2. 使用项目声明的 `pnpm@9.15.9` 和 frozen lockfile 安装依赖。
3. 先使用本机已有 Node.js 24；只有出现可归因于 Node 版本的问题时才切换到上游 CI 使用的 Node.js 22。
4. 依次执行格式检查、lint、类型检查和单元测试。
5. 将 `GITHUB_TOKEN` 仅注入当前进程；DeepSeek Key 由用户写入 Git 已忽略的 `.env`，通过 Node 的 `--env-file` 加载。
6. 不设置 `DIGEST_REPO`，因此原版运行只生成 `digests/YYYY-MM-DD/` 文件，不创建 Issues。
7. 保存运行日志和 `git diff` 摘要，确认没有密钥泄漏，且变化仅来自预期的日报和状态文件。

基线成功标准：依赖安装和质量检查通过，`pnpm start` 等价入口退出码为 0，至少生成核心 CLI、Agents、Infra 和 HN 报告；HN 报告显示实际抓取数量并保留原文链接。

### 阶段 2：Top 5 信息雷达扩展

新增一个独立、可测试的数据处理层，不把评分逻辑塞进 `src/index.ts`：

- `src/link-utils.ts`：URL 规范化、标题规范化和去重键生成。
- `src/radar.ts`：候选模型、确定性评分、DeepSeek 评分合并、稳定排序与 Top 5 选择。
- `src/prompts-data.ts`：新增一次性返回结构化双语评分数据的 Radar Prompt。
- `src/report-savers.ts`：新增 Radar 中英双语报告保存函数。
- `src/index.ts`：在 HN 数据获取后调用 Radar 流程，并将两种语言报告纳入 highlights。
- `src/i18n.ts`、`src/generate-manifest.ts`、`index.html` 和 GitHub label 映射：注册 `ai-radar`，保持现有 Web UI、RSS 和双语约定。

## 数据流

```text
HN Top Stories 前 500 条
  -> AI 关键词筛选
  -> URL/标题规范化去重
  -> 重复时继续扫描，最多保留 30 条唯一候选
  -> 确定性基础分（0–70）
  -> 一次 DeepSeek 结构化编辑评分（0–30，双语）
  -> 合成总分并稳定排序
  -> Top 5 推荐 + 30 条评分表
  -> ai-radar.md / ai-radar-en.md
```

若 HN 当前数据不足 30 条，报告必须显示实际数量，不伪造或复用链接。

## 去重规则

URL 规范化按以下顺序进行：

1. 主机名转小写，移除默认端口。
2. 移除 fragment。
3. 移除常见跟踪参数，如 `utm_*`、`ref`、`source`、`fbclid`、`gclid`。
4. 对查询参数按键排序。
5. 除根路径外移除尾部 `/`。
6. 对没有外链的 HN 帖子使用 HN discussion URL。

第一去重键是规范化 URL。第二去重键是标题转小写、移除标点、折叠空白后的文本。任一键重复即视为同一候选，保留 HN 排名更高的条目。

## 评分模型

### 确定性基础分：0–70

- HN points：0–25。对当日候选使用 `log1p` 后的批内归一化，减弱极端爆款的支配效应。
- 评论数：0–10。使用 `log1p` 后的批内归一化。
- HN 排名：0–20。第一名得 20 分，按候选中的原始 HN 排名线性衰减。
- 时效：0–15。发布时间 0 小时得 15 分，48 小时及以上得 0 分，中间线性衰减。

所有分项和中间值保留足够精度，最终展示分四舍五入到一位小数。

### DeepSeek 编辑分：0–30

一次请求评估全部候选，并为每条返回：

- `relevance`：技术与 AI 相关性，0–10；
- `novelty`：新颖性与信号价值，0–10；
- `actionability`：对开发者/研究者的可操作价值，0–10；
- 中英文一句话摘要；
- 中英文推荐理由。

返回值必须使用候选稳定 ID 对齐，不允许模型改写 points、comments、URL 或候选 ID。缺失、越界或未知 ID 的条目视为无效。

### 降级评分

若 DeepSeek 请求失败、429 重试耗尽或结构化数据无法修复：

- 不终止 Radar 报告；
- 将确定性基础分按 `基础分 / 70 * 100` 重映射为 0–100；
- 使用标题和可用元数据生成简短的非推测性说明；
- 在报告头部标记“确定性降级模式”；
- 仍按稳定规则输出 5 条推荐。

排序键依次为总分降序、HN 原始排名升序、候选 ID 升序，确保相同输入得到相同 Top 5。

## 输出格式

每种语言的 Radar 报告包含：

1. 数据来源、候选数量、去重数量、评分模式和生成时间。
2. `今日 Top 5`：排名、标题链接、总分、推荐理由、HN discussion 链接。
3. `全部候选`：包含排名、标题、总分、points、comments、发布时间和简短摘要的 Markdown 表格。
4. 自动生成页脚。

若候选不足 5 条，则输出全部候选并明确说明数据不足；不复制条目补齐。

## 错误处理

- 单条 HN item 请求失败：记录 ID 和 HTTP 状态，继续处理其他条目。
- GitHub 数据源失败：保持上游原有的按来源降级逻辑。
- DeepSeek 429：沿用现有 5/10/20 秒指数退避和最多 3 次重试。
- DeepSeek 非法 JSON：使用现有 `parseLlmJson` 修复一次；失败后进入确定性降级。
- 文件写入失败：让主流程失败并返回非零退出码，不报告虚假成功。
- 可选报告无数据：继续运行，其余报告不受影响。

## 安全与凭据

- `.env` 已被上游 `.gitignore` 忽略，只保存 `LLM_PROVIDER=deepseek` 和 `DEEPSEEK_API_KEY`。
- GitHub Token 不写入 `.env`，由有效的 `gh auth token` 仅注入当前进程。
- 任何日志、测试快照、错误信息和报告都不得包含完整或部分 API Key。
- 基线与首轮 Radar 验证均不设置 `DIGEST_REPO`，禁止意外创建 Issues。
- 不自动修改 GitHub Actions Secrets；如后续部署，由用户在 GitHub UI 中输入 DeepSeek Key。

## 测试与验收

新增单元测试覆盖：

- URL 大小写、尾斜杠、fragment、跟踪参数和查询参数排序；
- URL 重复、标题重复及保留更高 HN 排名；
- 去重后继续补足 30 条；
- 各评分分项的上下界、单元素批次和全相同数值；
- DeepSeek 分数越界、未知 ID、缺失条目和非法 JSON；
- 确定性降级仍输出稳定 Top 5；
- 分数相同情况下的稳定排序；
- 报告中所有 Top 5 均存在于 30 条候选表中且链接唯一。

最终验收命令包括 `pnpm format:check`、`pnpm lint`、`pnpm typecheck`、`pnpm test` 和一次真实本地运行。完成标准是：在数据充足时生成 30 条唯一候选和恰好 5 条唯一推荐；在 DeepSeek 故障模拟下仍产生同结构的降级报告；原有日报测试和输出不回退。

## 后续扩展边界

第一版稳定后，才考虑把 GitHub Trending、Dev.to、Lobste.rs、ArXiv、Hugging Face 和 Product Hunt 纳入统一候选池。跨来源扩展必须先定义来源内百分位和来源配额，避免 points、stars、downloads 等不可直接比较的指标造成排序偏差。
