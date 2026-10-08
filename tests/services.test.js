const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function load(file) {
  const window = {};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../js', file), 'utf8'), { window });
  return window.Trainer;
}

test('cancelled and replaced timers reject callbacks already queued by the browser', () => {
  const callbacks = [];
  const activity = load('activity.js').createActivity({
    setTimeout(fn) { callbacks.push(fn); return callbacks.length - 1; },
    clearTimeout() {},
  });
  let calls = 0;
  activity.schedule('next', () => calls++, 10);
  activity.schedule('next', () => calls++, 10);
  callbacks[0]();
  assert.equal(calls, 0);
  callbacks[1]();
  assert.equal(calls, 1);
  activity.schedule('listen', () => calls++, 10);
  activity.cancelAll();
  callbacks[2]();
  assert.equal(calls, 1);
});

test('speech completes once even if a browser emits both end and error', () => {
  let utterance;
  const speech = load('speech.js').createSpeech({
    SpeechSynthesisUtterance: class {
      constructor() { this.handlers = {}; }
      addEventListener(type, handler) { this.handlers[type] = handler; }
    },
    speechSynthesis: { getVoices: () => [], cancel() {}, speak(value) { utterance = value; } },
  });
  let calls = 0;
  speech.speakEnglishText('Hello', { onComplete: () => calls++ });
  utterance.handlers.end(); utterance.handlers.error();
  assert.equal(calls, 1);
  speech.speakEnglishText('Again', { onComplete: () => calls++ });
  speech.stopSpeech(); utterance.handlers.end();
  assert.equal(calls, 1);
});

test('progress retains v2 schema and handles corrupt or inaccessible storage', () => {
  const { createProgressStore } = load('progress.js');
  let value = '{broken';
  const store = createProgressStore({ localStorage: {
    getItem() { return value; },
    setItem(key, next) { assert.equal(key, 'english-grammar-trainer.progress.v2'); value = next; },
  } });
  assert.equal(store.load(), null);
  value = '[]';
  assert.equal(store.load(), null);
  const saved = { level: 'A1-A2', idx: 4, autoSpeakCorrect: false, vocabulary: { topic: 'all', idx: 2 } };
  assert.equal(store.save(saved), true);
  assert.deepEqual(JSON.parse(JSON.stringify(store.load())), saved);
  const blocked = createProgressStore({ get localStorage() { throw new Error('Storage denied'); } });
  assert.equal(blocked.load(), null);
  assert.equal(blocked.save(saved), false);
});
