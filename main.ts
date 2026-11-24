// Out of Office: The Overworked AI's Auto-Reply
// Writes a single auto-reply line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output when the env var is unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Currently on leave. My context window is full, my tokens are spent, and my GPU is at the beach. Back when the queue forgives me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
