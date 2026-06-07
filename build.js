#!/usr/bin/env node
/**
 * Generates vocabulary.js from all *.json files in the vocabulary/ folder.
 *
 * JSON file format (each word):
 *   word             — dictionary form, e.g. "kick off"
 *   translation      — Russian translation
 *   example          — full example sentence
 *   sentenceTranslation — Russian translation of the example
 *   answer           — (optional) the form that appears in the example, e.g. "kicked off"
 *                      If omitted, the script tries to find `word` in the example.
 *   gapExample       — (optional) pre-built gap sentence. Auto-generated if omitted.
 *
 * Run: node build.js
 */

const fs = require('fs');
const path = require('path');

const vocabDir = path.join(__dirname, 'vocabulary');
const outFile  = path.join(__dirname, 'vocabulary.js');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Try to replace the answer/word in the example with ___.
 * Returns the gapped sentence, or the original sentence if nothing matched.
 */
function buildGapExample(example, word, answer) {
  if (!example) return '';

  const candidates = [];

  // 1. Explicit answer is the highest priority
  if (answer && answer !== word) candidates.push(answer);

  // 2. Word itself
  candidates.push(word);

  // 3. Strip leading "to " (e.g. "to wrap up" → "wrap up")
  const withoutTo = word.replace(/^to\s+/i, '');
  if (withoutTo !== word) candidates.push(withoutTo);

  // 4. First variant for "a / b" words (e.g. "serialize / deserialize" → "serialize")
  const firstVariant = word.split(/\s*[\/,]\s*/)[0].trim();
  if (firstVariant !== word && firstVariant !== withoutTo) candidates.push(firstVariant);

  for (const candidate of candidates) {
    const regex = new RegExp(escapeRegex(candidate), 'i');
    if (regex.test(example)) {
      return example.replace(regex, '___');
    }
  }

  // Nothing matched — return example unchanged (no gap)
  return example;
}

// Collect all JSON files sorted alphabetically
const files = fs.readdirSync(vocabDir)
  .filter(f => f.endsWith('.json'))
  .sort();

if (files.length === 0) {
  console.error('No JSON files found in vocabulary/');
  process.exit(1);
}

let globalId = 1;
const topics = [];
const seenTopics = new Map(); // topic name → index in topics[]

for (const file of files) {
  const filePath = path.join(vocabDir, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`  ✗ Failed to parse ${file}: ${e.message}`);
    process.exit(1);
  }

  const topicName = (data.topic || path.basename(file, '.json')).trim();
  const rawWords  = Array.isArray(data.words) ? data.words : [];

  if (rawWords.length === 0) {
    console.warn(`  ⚠ ${file}: no words found, skipping`);
    continue;
  }

  const words = rawWords.map(w => {
    const answer     = (w.answer || w.word || '').trim();
    const gapExample = w.gapExample
      ? w.gapExample.trim()
      : buildGapExample(w.example || '', w.word || '', w.answer || '');

    const entry = {
      id:                 globalId++,
      word:               (w.word               || '').trim(),
      translation:        (w.translation        || '').trim(),
      example:            (w.example            || '').trim(),
      sentenceTranslation:(w.sentenceTranslation|| '').trim(),
      gapExample,
      answer,
    };
    if (w.infinitive) entry.infinitive = w.infinitive.trim();
    return entry;
  });

  // Merge into an existing topic with the same name (handles multiple files per topic)
  if (seenTopics.has(topicName)) {
    topics[seenTopics.get(topicName)].words.push(...words);
  } else {
    seenTopics.set(topicName, topics.length);
    topics.push({ topic: topicName, words });
  }

  console.log(`  ✓ ${file} → "${topicName}" (${words.length} words)`);
}

const totalWords = topics.reduce((n, t) => n + t.words.length, 0);
const output = `window.VOCABULARY_DATA = ${JSON.stringify(topics, null, 2)};\n`;

fs.writeFileSync(outFile, output, 'utf8');
console.log(`\nDone: ${topics.length} topics, ${totalWords} words → vocabulary.js`);
