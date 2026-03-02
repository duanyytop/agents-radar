/**
 * Notification dispatcher — sends digest summaries to Slack, Discord, Telegram.
 * All channels use native fetch(), zero extra dependencies.
 */

import type { RadarConfig } from "./config.ts";

export interface DigestNotification {
  dateStr: string;
  reports: Array<{
    label: string;
    emoji: string;
    issueUrl?: string;
    summary: string; // 2-3 sentence highlight
  }>;
  pagesUrl: string;
}

async function notifySlack(webhookUrl: string, n: DigestNotification): Promise<void> {
  const text = n.reports
    .map((r) => `${r.emoji} *${r.label}*\n${r.summary}${r.issueUrl ? `\n<${r.issueUrl}|查看完整报告>` : ""}`)
    .join("\n\n");

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `📡 agents-radar ${n.dateStr} 日报已更新\n\n${text}\n\n<${n.pagesUrl}|在线阅读>`,
    }),
  });
}

async function notifyDiscord(webhookUrl: string, n: DigestNotification): Promise<void> {
  const description = n.reports.map((r) => `${r.emoji} **${r.label}**\n${r.summary}`).join("\n\n");

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          title: `📡 ${n.dateStr} AI 生态日报`,
          description,
          url: n.pagesUrl,
          color: 0xe8a03d,
          footer: { text: "agents-radar" },
        },
      ],
    }),
  });
}

async function notifyTelegram(botToken: string, chatId: string, n: DigestNotification): Promise<void> {
  const text = [
    `📡 *${n.dateStr} AI 生态日报*`,
    "",
    ...n.reports.map((r) => `${r.emoji} *${r.label}*\n${r.summary}`),
    "",
    `[在线阅读](${n.pagesUrl})`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown", disable_web_page_preview: true }),
  });
}

export async function sendNotifications(config: RadarConfig, notification: DigestNotification): Promise<void> {
  const tasks: Promise<void>[] = [];

  if (config.notifications.slack.enabled) {
    const url = process.env["SLACK_WEBHOOK_URL"];
    if (url) tasks.push(notifySlack(url, notification).catch((e) => console.error(`  [notify/slack]`, e)));
  }

  if (config.notifications.discord.enabled) {
    const url = process.env["DISCORD_WEBHOOK_URL"];
    if (url) tasks.push(notifyDiscord(url, notification).catch((e) => console.error(`  [notify/discord]`, e)));
  }

  if (config.notifications.telegram.enabled) {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    const chatId = process.env["TELEGRAM_CHAT_ID"];
    if (token && chatId)
      tasks.push(notifyTelegram(token, chatId, notification).catch((e) => console.error(`  [notify/telegram]`, e)));
  }

  if (tasks.length > 0) {
    await Promise.allSettled(tasks);
    console.log(`  [notify] Sent ${tasks.length} notification(s)`);
  }
}
