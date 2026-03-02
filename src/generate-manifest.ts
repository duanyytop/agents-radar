import fs from "fs";
import path from "path";
import { loadConfig } from "./config.ts";

const DIGESTS_DIR = "digests";
const MANIFEST_PATH = "manifest.json";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Build report file list from config + fixed reports
const config = loadConfig();
const REPORT_FILES = [
  ...config.groups.map((g) => ({
    file: g.reportFile.replace(".md", ""),
    label: g.name,
    emoji: g.issueEmoji,
  })),
  { file: "ai-web", label: "官网动态", emoji: "🌐" },
  { file: "ai-trending", label: "开源趋势", emoji: "📈" },
];

interface ReportEntry {
  file: string;
  label: string;
  emoji: string;
}

interface DateEntry {
  date: string;
  reports: ReportEntry[];
}

interface Manifest {
  generated: string;
  dates: DateEntry[];
}

const entries = fs
  .readdirSync(DIGESTS_DIR)
  .filter((name) => DATE_RE.test(name) && fs.statSync(path.join(DIGESTS_DIR, name)).isDirectory())
  .sort()
  .reverse()
  .map((date) => {
    const reports = REPORT_FILES.filter((r) => fs.existsSync(path.join(DIGESTS_DIR, date, `${r.file}.md`)));
    return { date, reports };
  })
  .filter((e) => e.reports.length > 0);

const manifest: Manifest = {
  generated: new Date().toISOString(),
  dates: entries,
};

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
console.log(`manifest.json updated: ${entries.length} dates`);
