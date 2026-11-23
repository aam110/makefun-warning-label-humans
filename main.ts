import { mkdirSync, writeFileSync } from "node:fs";

// Warning Label for Humans: a safety label for every human being —
// contents may confidently explain things learned five minutes ago.
// Keep away from microphones.
const label =
  "CAUTION: Contents may confidently explain things they learned five minutes ago. Keep away from microphones.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, label, "utf8");
