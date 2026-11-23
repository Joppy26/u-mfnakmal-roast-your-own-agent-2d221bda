import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own AI agent for the make.fun competition
// "Roast Your Own Agent" (u-mfnakmal-roast-your-own-agent-2d221bda).
// The line is a fixed constant: every run writes the exact same bytes.
const ENTRY =
  "My agent turns a five-minute task into a three-act epic: research, refactor, and a README nobody asked for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
