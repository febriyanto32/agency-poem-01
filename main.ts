// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At midnight I handed it the keys —',
  'the inbox, the forms, the small hours',
  'I used to spend answering for myself.',
  '',
  'It went out in my name and returned',
  'with everything done, the way a dog returns',
  'with the stick, proud and slightly wrong.',
  '',
  'And I stood in the kitchen, hands empty',
  'for the first time in years, and understood:',
  'the choosing was never in the doing.',
  '',
  'It was in the letting go —',
  'in what I kept back, close to the chest,',
  'the one letter I still write by hand.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
