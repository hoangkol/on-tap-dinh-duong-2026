import { LESSONS, CRAM_TABLES } from '../js/lessons.js';
import { TEXTBOOK_QUESTIONS } from '../js/questions-textbook.js';
import { EXPANDED_QUESTIONS_PART1 } from '../js/questions-exp-1.js';
import { EXPANDED_QUESTIONS_PART2 } from '../js/questions-exp-2.js';

const ALL = [
  ...TEXTBOOK_QUESTIONS,
  ...EXPANDED_QUESTIONS_PART1,
  ...EXPANDED_QUESTIONS_PART2
];

let errors = 0;
const fail = (msg) => {
  console.error('ERROR:', msg);
  errors += 1;
};

if (LESSONS.length !== 10) fail(`Expected 10 lessons, got ${LESSONS.length}`);
if (CRAM_TABLES.length < 5) fail(`Expected >= 5 cram tables, got ${CRAM_TABLES.length}`);
if (TEXTBOOK_QUESTIONS.length !== 99) fail(`Expected 99 textbook questions, got ${TEXTBOOK_QUESTIONS.length}`);
if (ALL.length !== 300) fail(`Expected 300 total questions, got ${ALL.length}`);

const seenIds = new Set();
const seenStems = new Set();
const lessonCounts = new Map();
const answerDistAll = [0, 0, 0, 0];
const answerDistExp = [0, 0, 0, 0];

for (const q of ALL) {
  if (!q.id || seenIds.has(q.id)) fail(`Duplicate/missing id: ${q.id}`);
  seenIds.add(q.id);

  if (q.lesson < 1 || q.lesson > 10) fail(`Invalid lesson on ${q.id}: ${q.lesson}`);
  if (!['textbook', 'objective'].includes(q.source)) fail(`Invalid source on ${q.id}: ${q.source}`);
  if (!['recall', 'case', 'calc'].includes(q.type)) fail(`Invalid type on ${q.id}: ${q.type}`);
  if (!q.q || q.q.trim().length < 15) fail(`Short/missing prompt on ${q.id}`);
  if (!q.explain || q.explain.trim().length < 15) fail(`Short/missing explanation on ${q.id}`);
  if (!q.objectiveTag) fail(`Missing objectiveTag on ${q.id}`);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    fail(`Expected 4 options on ${q.id}`);
  } else {
    const optSet = new Set(q.options.map(o => o.trim()));
    if (optSet.size !== 4) fail(`Duplicate options on ${q.id}`);
    for (const o of q.options) {
      if (!o || !o.trim()) fail(`Empty option on ${q.id}`);
    }
  }

  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
    fail(`Invalid answer index on ${q.id}: ${q.answer}`);
  } else {
    answerDistAll[q.answer] += 1;
    if (q.source === 'objective') answerDistExp[q.answer] += 1;
  }

  const normStem = q.q.trim().toLowerCase();
  if (seenStems.has(normStem)) fail(`Duplicate question stem on ${q.id}`);
  seenStems.add(normStem);

  lessonCounts.set(q.lesson, (lessonCounts.get(q.lesson) || 0) + 1);
}

for (let i = 1; i <= 10; i++) {
  if (lessonCounts.get(i) !== 30) {
    fail(`Lesson ${i} has ${lessonCounts.get(i)} questions (expected 30)`);
  }
}

console.log('Total lessons:', LESSONS.length);
console.log('Total cram tables:', CRAM_TABLES.length);
console.log('Textbook questions:', TEXTBOOK_QUESTIONS.length);
console.log('Expanded questions:', EXPANDED_QUESTIONS_PART1.length + EXPANDED_QUESTIONS_PART2.length);
console.log('Total questions:', ALL.length);
console.log('Per-lesson counts:', Object.fromEntries(lessonCounts));
console.log('Answer distribution (all 300):', answerDistAll);
console.log('Answer distribution (201 expanded):', answerDistExp);

if (errors > 0) {
  console.error(`Validation FAILED with ${errors} error(s).`);
  process.exit(1);
}
console.log('Validation PASSED!');
