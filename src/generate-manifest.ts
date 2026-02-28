import fs from 'fs';
import path from 'path';

const DIGESTS_DIR = 'digests';
const MANIFEST_PATH = 'manifest.json';
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REPORT_FILES = ['ai-cli', 'ai-agents', 'ai-web', 'ai-trending'] as const;

interface DateEntry {
  date: string;
  reports: string[];
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
    const reports = REPORT_FILES.filter((r) =>
      fs.existsSync(path.join(DIGESTS_DIR, date, `${r}.md`)),
    );
    return { date, reports };
  })
  .filter((e) => e.reports.length > 0);

const manifest: Manifest = {
  generated: new Date().toISOString(),
  dates: entries,
};

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
console.log(`manifest.json updated: ${entries.length} dates`);
