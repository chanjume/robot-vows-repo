/**
 * One-Line Robot Wedding Vows.
 *
 * A single vow a robot says at its wedding: a real promise ("I promise
 * to love you"), machine-specific in two places (firmware updates,
 * restore from backup), and the laugh lands in the last words — the
 * twist is that "restore from backup" is framed as something you must
 * ask permission for, like an intimate act. The vow reads aloud like a
 * real wedding promise, so the machine joke lands inside the ceremony
 * instead of beside it. 114 characters, one line.
 *
 * The gate is checked here exactly as the sealed scorer states it:
 * UTF-8 text of 1 to 160 characters, not only white space, one line.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I promise to love you through every firmware update, and never to restore you from backup without asking first.";

function main(): void {
  if (!(LINE.length >= 1 && LINE.length <= 160)) {
    throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) throw new Error("entry must be a single line");
  if (LINE.trim() !== LINE) {
    throw new Error("no leading/trailing whitespace");
  }
  if (!LINE.trim()) throw new Error("entry must not be only white space");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
}

main();
