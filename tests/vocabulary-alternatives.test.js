const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function start({ autoSpeak = false, speech = true } = {}) {
  const vocabulary = [{
    id: 'synonyms', collection: 'Oxford 3000', topic: 'Тест', subtopic: 'Синонимы',
    words: [
      {
        id: 'oxford:test:bike', word: 'bike', translation: 'велосипед',
        level: 'A1', partOfSpeech: 'сущ.',
        answers: [{ text: 'bike', weight: 1 }, { text: 'bicycle', weight: 1 }],
      },
      { id: 'oxford:test:car', word: 'car', translation: 'машина', level: 'A1', partOfSpeech: 'сущ.' },
    ],
  }];
  const saved = createApp({ vocabulary }).snapshot();
  saved.mode = 'vocabulary';
  Object.assign(saved.vocabulary, {
    topic: 'synonyms', order: ['oxford:test:bike', 'oxford:test:car'],
    idx: 0, autoSpeakCorrect: autoSpeak,
  });
  return createApp({ vocabulary, saved, speech });
}

function key(app, id, value, extra = {}) {
  let prevented = false;
  app.el(id).dispatchEvent({
    type: 'keydown', key: value, preventDefault() { prevented = true; }, ...extra,
  });
  return prevented;
}

test('answer Enter opens alternatives; a separate Enter advances exactly once and ignores held Enter', () => {
  const app = start();
  app.el('answer-input').value = 'bike';
  key(app, 'answer-input', 'Enter');
  assert.equal(app.el('vocab-alternatives-overlay').hidden, false);
  assert.equal(app.el('trainer-app').inert, true);
  assert.equal(app.el('vocab-alternatives-answer').textContent, 'Ваш ответ: bike');
  assert.equal(app.snapshot().vocabulary.idx, 0);
  assert.equal(key(app, 'vocab-alternatives-overlay', 'Enter', { repeat: true }), true);
  assert.equal(app.el('vocab-alternatives-overlay').hidden, false);
  assert.equal(key(app, 'vocab-alternatives-overlay', 'Tab'), true);
  assert.equal(key(app, 'vocab-alternatives-overlay', 'Enter'), true);
  assert.equal(app.el('vocab-alternatives-overlay').hidden, true);
  assert.equal(app.el('trainer-app').inert, false);
  assert.equal(app.snapshot().vocabulary.idx, 1);
  assert.equal(app.snapshot().vocabulary.correct, 1);
  const placeholder = app.el('answer-input').placeholder;
  assert.equal(key(app, 'answer-input', 'Enter', { repeat: true }), true);
  assert.equal(key(app, 'answer-input', 'Enter', { repeat: true }), true);
  assert.equal(app.el('answer-input').placeholder, placeholder);
  assert.equal(app.snapshot().vocabulary.wrong, 0);
  app.click('vocab-alternatives-continue');
  app.advance(10000);
  assert.equal(app.snapshot().vocabulary.idx, 1);
  assert.equal(app.el('session-complete').hidden, true);
});

test('neither speech end nor timers dismiss alternatives; button continues and cancels stale speech', () => {
  const app = start({ autoSpeak: true });
  app.answer('bicycle');
  const utterance = app.spoken.at(-1);
  assert.ok(utterance);
  utterance.dispatchEvent({ type: 'end' });
  app.advance(60000);
  assert.equal(app.snapshot().vocabulary.idx, 0);
  assert.equal(app.el('vocab-alternatives-overlay').hidden, false);
  app.click('vocab-alternatives-continue');
  assert.equal(app.snapshot().vocabulary.idx, 1);
  utterance.dispatchEvent({ type: 'error' });
  app.advance(10000);
  assert.equal(app.snapshot().vocabulary.idx, 1);
  assert.equal(app.el('session-complete').hidden, true);
});

test('alternatives still wait for confirmation when speech is unavailable', () => {
  const app = start({ autoSpeak: true, speech: false });
  app.answer('bike');
  app.advance(60000);
  assert.equal(app.el('vocab-alternatives-overlay').hidden, false);
  assert.equal(app.snapshot().vocabulary.idx, 0);
  app.click('vocab-alternatives-continue');
  assert.equal(app.snapshot().vocabulary.idx, 1);
});

test('mode and topic changes dismiss alternatives without an extra advance', () => {
  const app = start();
  app.answer('bike');
  app.click('tab-grammar');
  const snapshot = app.snapshot();
  assert.equal(app.el('vocab-alternatives-overlay').hidden, true);
  assert.equal(app.el('trainer-app').inert, false);
  app.click('vocab-alternatives-continue');
  app.advance(10000);
  assert.deepEqual(app.snapshot(), snapshot);
  const other = start();
  other.answer('bike');
  other.change('vocab-topic', 'synonyms');
  assert.equal(other.el('vocab-alternatives-overlay').hidden, true);
  assert.equal(other.el('trainer-app').inert, false);
  assert.equal(other.snapshot().vocabulary.idx, 0);
  assert.equal(other.snapshot().vocabulary.correct, 0);
  other.click('vocab-alternatives-continue');
  assert.equal(other.snapshot().vocabulary.idx, 0);
});

test('a single-answer word still advances automatically without a popup', () => {
  const app = start();
  app.click('next-btn');
  app.answer('car');
  assert.equal(app.el('vocab-alternatives-overlay').hidden, true);
  assert.equal(app.el('session-complete').hidden, true);
  app.advance(450);
  assert.equal(app.el('session-complete').hidden, false);
});
