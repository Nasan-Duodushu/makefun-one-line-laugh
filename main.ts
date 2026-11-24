// The One-Line Laugh entry: writes one funny line to entry.txt in the output directory.
// One sentence, an everyday truth, and the surprise saved for the end.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Nobody warns you that adulthood is just converting your bucket list into a grocery list, then treating in-stock oat milk like a lottery win.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
