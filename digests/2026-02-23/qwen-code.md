# Qwen Code 社区日报 2026-02-23

> 数据来源: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 生成时间: 2026-02-23 07:34 UTC

# Qwen Code 社区动态日报 | 2026-02-23

## 今日速览

今日社区活跃度较高，共更新 **12 个 Issues** 和 **5 个 PR**。核心动态包括：第三方模型支持（GLM-4.7、Kimi-K2.5）正式进入 Coding Plan 的 PR 评审阶段；多位用户反馈从 Gemini CLI / Claude Code 迁移时的配置痛点，尤其是权限控制和 MCP 配置；以及一个夜间构建发布失败的系统事件。

---

## 版本发布

**无新版本发布**

⚠️ 注：v0.10.5-nightly.20260223.a13d88ac 夜间构建发布失败（[Issue #1906](https://github.com/QwenLM/qwen-code/issues/1906)），可能影响测试版用户获取最新功能。

---

## 社区热点 Issues

| # | 标题 | 状态 | 核心看点 |
|---|------|------|---------|
| [1910](https://github.com/QwenLM/qwen-code/issues/1910) | Built-in Permission & MCP Configuration Assistant needed for smooth onboarding | 🔴 OPEN | **迁移体验痛点**：来自 Gemini CLI/Claude Code 的用户反馈，现有权限和 MCP 配置缺乏可视化引导，需克隆源码才能理解配置逻辑。直接影响竞品用户迁移转化率。 |
| [1908](https://github.com/QwenLM/qwen-code/issues/1908) | Provide a shortcut key or command for retrying | 🔴 OPEN | **高频交互需求**：模型服务报错时缺乏快速重试机制，用户需手动重新输入。与 #1905 重复提交，反映该需求紧迫性。 |
| [1903](https://github.com/QwenLM/qwen-code/issues/1903) | Support pre-configuration of third-party models in Alibaba Cloud Model Studio (Bailian) Codingplan | 🔴 OPEN | **生态扩展**：用户明确需求 GLM-4.7 和 Kimi-2.5 的预配置支持，已有对应 PR #1907 正在评审。 |
| [1902](https://github.com/QwenLM/qwen-code/issues/1902) | deleting chat history in the CLI | 🔴 OPEN | **数据管理**：CLI 缺乏会话清理命令，长期运行导致历史堆积。 |
| [1896](https://github.com/QwenLM/qwen-code/issues/1896) | 登录Qwen-code 遇到问题 | 🔴 OPEN | **国产化障碍**：中文用户认证流程出现异常，截图显示认证系统报错，影响国内用户 onboarding。 |
| [311](https://github.com/QwenLM/qwen-code/issues/311) | qwen code is working slowly | 🔴 OPEN | **性能顽疾**：17 评论、4 👍，长期存在的性能问题。用户对比 Gemini CLI 发现明显延迟，跨设备复现。标签含 P1/P2 优先级。 |
| [1898](https://github.com/QwenLM/qwen-code/issues/1898) | `contextWindowSize` not respected? | 🔴 OPEN | **配置失效**：用户配置 256K 上下文窗口后实际未生效，影响本地大模型部署场景。 |
| [740](https://github.com/QwenLM/qwen-code/issues/740) | Plan mode : allow the use of mcp tools | 🔴 OPEN | **架构限制**：Plan 模式默认阻止非只读 MCP 工具调用，用户需要搜索/抓取等工具参与规划阶段。 |
| [1892](https://github.com/QwenLM/qwen-code/issues/1892) | Path is not resolved correctly with VSCode extension | 🔴 OPEN | **IDE 集成**：VSCode 扩展无法正确继承用户环境变量 PATH，导致 Flutter 等工具链命令找不到。 |
| [1909](https://github.com/QwenLM/qwen-code/issues/1909) | error | 🔴 OPEN | **信息缺失**：标题模糊的 bug 报告，URL 编码显示俄语文本（"Среда выполнения" = 运行时），国际化支持需关注。 |

---

## 重要 PR 进展

| # | 标题 | 状态 | 技术价值 |
|---|------|------|---------|
| [1907](https://github.com/QwenLM/qwen-code/pull/1907) | feat: add third-party models (glm-4.7, kimi-k2.5, qwen3-coder-next) to Coding Plan | 🟡 OPEN | **生态突破**：正式接入智谱 GLM-4.7、Moonshot Kimi-K2.5 及自研 Qwen3-Coder-Next，支持 thinking 模式。分中国区/国际区双端点配置，解决 #1903。 |
| [1904](https://github.com/QwenLM/qwen-code/pull/1904) | fix(core): normalize Windows PATH-like env keys for shell execution | 🟡 OPEN | **跨平台修复**：解决 Windows 下 `Path`/`PATH` 大小写共存导致的命令解析歧义，影响 shell 子进程环境继承。 |
| [1901](https://github.com/QwenLM/qwen-code/pull/1901) | docs: add security note and PATH info to installation section | 🟡 OPEN | **安全加固**：快速安装脚本的安全提示，生产环境风险提示 + PATH 自动配置说明。 |
| [1900](https://github.com/QwenLM/qwen-code/pull/1900) | docs: add explanatory comment for 'any' type in runtimeFetchOptions | 🟡 OPEN | **代码可维护性**：解释 Anthropic SDK 兼容所需的 `any` 类型绕过，技术债务文档化。 |
| [1899](https://github.com/QwenLM/qwen-code/pull/1899) | fix: remove duplicate exports in packages/core/src/index.ts | 🟡 OPEN | **代码清理**：消除核心模块重复导出，减少打包体积和潜在循环依赖风险。 |

---

## 功能需求趋势

基于今日 Issues 的词频与关联分析，社区关注焦点呈现 **四大方向**：

| 趋势方向 | 代表 Issue | 需求强度 |
|---------|-----------|---------|
| **竞品迁移体验** | #1910, #1902 | ⭐⭐⭐⭐⭐ |
| 用户从 Gemini CLI/Claude Code 迁移时，对权限配置、MCP 设置、会话管理的平滑过渡有强烈期待 |
| **模型生态扩展** | #1903, #1907, #1898 | ⭐⭐⭐⭐⭐ |
| 第三方模型（GLM、Kimi）接入需求明确，同时关注本地部署的上下文窗口配置有效性 |
| **IDE/编辑器集成** | #1892 | ⭐⭐⭐⭐☆ |
| VSCode 扩展的环境变量继承、路径解析等工程化问题影响实际开发体验 |
| **交互效率优化** | #1908, #1905, #1902 | ⭐⭐⭐⭐☆ |
| 错误重试、历史清理、性能加速等高频操作的快捷化需求 |

---

## 开发者关注点

### 🔴 高频痛点

| 痛点 | 典型反馈 | 影响面 |
|-----|---------|--------|
| **配置门槛过高** | "repeatedly failed until I cloned the repository" (#1910) | 新用户流失 |
| **错误恢复繁琐** | API 错误后无重试快捷键，需手动重建上下文 (#1908) | 日常使用效率 |
| **性能基准落差** | "slower than gemini cli" 跨设备复现 (#311) | 核心体验竞争力 |
| **环境隔离问题** | VSCode 扩展与宿主环境变量不同步 (#1892) | IDE 用户 |

### 🟡 待观察信号

- **国际化质量**：俄语文本的 bug 报告 (#1909) 提示非英语用户支持待完善
- **国内服务稳定性**：阿里云百炼登录异常 (#1896) 可能影响国内核心用户群
- **Plan 模式架构限制**：MCP 工具在规划阶段的禁用策略 (#740) 需产品层面决策

---

*日报生成时间：2026-02-23 | 数据来源：github.com/QwenLM/qwen-code*

---
*本日报由 [claude-code-digest](https://github.com/duanyytop/claude-code-digest) 自动生成。*