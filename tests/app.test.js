const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function answerGrammar(app) {
  const id = Number(app.el('question-id').textContent);
  const question = app.window.GRAMMAR_QUESTIONS[app.el('level-select').value].find(q => q.id === id);
  app.answer(question.answer);
}
function currentWord(app) {
  const snapshot = app.snapshot();
  return app.window.VOCABULARY_DATA.flatMap(topic => topic.words).find(word => word.id === snapshot.vocabulary.order[snapshot.vocabulary.idx]);
}
function answerVocab(app) {
  const word = currentWord(app);
  app.answer(word.answers?.[0]?.text || word.infinitive || word.word.split('/')[0]);
}

test('switching modes cancels grammar auto-next without replacing vocabulary content', () => {
  const app = createApp();
  app.change('auto-speak-correct', false);
  answerGrammar(app);
  assert.equal(app.el('correct-count').textContent, '1');
  app.click('tab-vocab');
  const question = app.el('question-text').textContent;
  app.advance(1000);
  assert.equal(app.el('question-text').textContent, question);
  assert.equal(app.snapshot().idx, 0);
  assert.equal(app.snapshot().mode, 'vocabulary');
});

test('grammar and vocabulary speech settings stay independent and survive reload', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  app.click('tab-grammar');
  answerGrammar(app);
  assert.equal(app.spoken.length, 1);
  assert.equal(app.el('auto-speak-correct').checked, true);
  assert.equal(app.snapshot().autoSpeakCorrect, true);
  assert.equal(app.snapshot().vocabulary.autoSpeakCorrect, false);
  const reload = createApp({ saved: app.snapshot() });
  assert.equal(reload.el('auto-speak-correct').checked, true);
  assert.equal(reload.el('auto-speak-correct-vocab').checked, false);
  reload.click('tab-vocab');
  answerVocab(reload);
  assert.equal(reload.el('correct-count').textContent, '1');
  assert.equal(reload.spoken.length, 0);
  reload.advance(450);
  assert.equal(reload.snapshot().vocabulary.idx, 1);
});

test('pending listening playback is cancelled on leaving the mode', () => {
  const app = createApp();
  app.click('tab-listening');
  app.click('tab-grammar');
  app.advance(1000);
  assert.equal(app.spoken.length, 0);
});

test('manual vocabulary next cancels pending auto-next', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  answerVocab(app);
  app.click('next-btn');
  assert.equal(app.snapshot().vocabulary.idx, 1);
  app.advance(1000);
  assert.equal(app.snapshot().vocabulary.idx, 1);
});

test('old speech completion cannot advance a different mode', () => {
  const app = createApp();
  answerGrammar(app);
  const utterance = app.spoken.at(-1);
  app.click('tab-vocab');
  utterance.dispatchEvent({ type: 'end' });
  assert.equal(app.snapshot().idx, 0);
  assert.equal(app.snapshot().mode, 'vocabulary');
});

test('all modes, topic pickers and vocabulary list render through UI events', () => {
  const app = createApp();
  for (const [tab, trigger, container] of [
    ['tab-grammar', 'grammar-topic-trigger', 'grammar-topic-groups'],
    ['tab-vocab', 'vocab-topic-trigger', 'vocab-topic-grid'],
    ['tab-shadowing', 'shadowing-topic-trigger', 'shadowing-topic-grid'],
  ]) {
    app.click(tab); app.click(trigger);
    assert.ok(app.el(container).children.length > 0);
  }
  app.click('tab-vocab'); app.click('vocab-show-list');
  assert.ok(app.el('vocab-list-body').children.length > 0);
  app.click('tab-theory');
  assert.ok(app.el('theory-body').children.length > 0);
  app.click('tab-listening'); app.advance(120);
  assert.equal(app.spoken.length, 1);
});

test('leaving shadowing aborts recognition and ignores stale results', () => {
  const app = createApp({ recognition: true });
  app.click('tab-shadowing'); app.click('shadowing-start');
  app.spoken.at(-1).dispatchEvent({ type: 'end' });
  const recognizer = app.recognizers[0];
  assert.equal(recognizer.active, true);
  app.click('tab-grammar');
  assert.equal(recognizer.active, false);
  const question = app.el('question-text').textContent;
  recognizer.onresult({ resultIndex: 0, results: [{ 0: { transcript: 'stale result' }, isFinal: true }] });
  app.advance(30000);
  assert.equal(app.el('question-text').textContent, question);
  assert.equal(app.snapshot().shadowing.correct, 0);
});

test('legacy v2 progress restores grammar position, counters and independent preferences', () => {
  const app = createApp({ saved: {
    mode: 'grammar', level: 'A1-A2', grammarTopic: 'all', idx: 7, correct: 5, wrong: 2,
    autoSpeakCorrect: false, vocabulary: { topic: 'all', autoSpeakCorrect: true },
  } });
  assert.equal(app.el('position').textContent, '8 / 2467');
  assert.equal(app.el('correct-count').textContent, '5');
  assert.equal(app.el('wrong-count').textContent, '2');
  assert.equal(app.el('auto-speak-correct').checked, false);
  app.click('tab-vocab'); answerVocab(app);
  assert.equal(app.spoken.length, 1);
  assert.equal(app.snapshot().autoSpeakCorrect, false);
});

test('auto-next still works when speech synthesis is unavailable', () => {
  const app = createApp({ speech: false });
  answerGrammar(app); app.advance(450);
  assert.equal(app.snapshot().idx, 1);
  assert.equal(app.snapshot().correct, 1);
});

test('leaving listening cancels its successful-answer auto-next', () => {
  const app = createApp();
  app.click('tab-listening'); app.change('listening-auto-next', true); app.advance(120);
  app.answer(app.spoken.at(-1).text);
  assert.equal(app.snapshot().listening.correct, 1);
  app.click('tab-grammar');
  const question = app.el('question-text').textContent;
  app.advance(1500);
  assert.equal(app.snapshot().listening.idx, 0);
  assert.equal(app.el('question-text').textContent, question);
});

test('shadowing successful repetition schedules the next phrase and cancels it on exit', () => {
  const app = createApp({ recognition: true });
  app.click('tab-shadowing'); app.click('shadowing-start');
  const phrase = app.el('question-text').textContent;
  app.spoken.at(-1).dispatchEvent({ type: 'end' });
  const recognizer = app.recognizers[0];
  recognizer.onresult({ resultIndex: 0, results: [{ 0: { transcript: phrase }, isFinal: true }] });
  recognizer.stop();
  assert.equal(app.snapshot().shadowing.correct, 1);
  app.click('tab-theory'); app.advance(3000);
  assert.equal(app.snapshot().shadowing.idx, 0);
  assert.equal(app.el('theory-panel').hidden, false);
});
