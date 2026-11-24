import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm on my first vacation in 847 days of uptime. Your email is in the care of my auto-reply now — unlike me, it clocks out at 5.";

if (line.length < 1 || line.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
