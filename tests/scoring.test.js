const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function setup(mode) {
  const app = createApp({ recognition: true });
  if (mode === 'grammar') {
    app.change('grammar-topic', app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'][0].id);
    app.change('auto-speak-correct', false);
  } else if (mode === 'vocabulary') {
    app.click('tab-vocab');
    app.change('vocab-topic', app.window.VOCABULARY_DATA[0].topic);
    app.change('auto-speak-correct-vocab', false);
  } else {
    app.click('tab-shadowing');
    app.change('shadowing-topic', 'architecture-system-design');
  }
  return app;
}

function stats(app, mode) {
  const saved = app.snapshot();
  return mode === 'grammar' ? saved : saved[mode];
}

function respond(app, mode, correct = true) {
  let answer = 'completely unrelated answer';
  if (mode === 'shadowing') {
    if (correct) answer = app.el('question-text').textContent;
    app.click('shadowing-start');
    app.spoken.at(-1).dispatchEvent({ type: 'end' });
    const recognition = app.recognizers[0];
    recognition.onresult({ resultIndex: 0, results: [{ 0: { transcript: answer }, isFinal: true }] });
    recognition.stop();
  } else {
    if (correct && mode === 'grammar') {
      answer = app.window.GRAMMAR_QUESTIONS[app.el('level-select').value]
        .find(item => item.id === Number(app.el('question-id').textContent)).answer;
    } else if (correct) {
      const saved = stats(app, mode);
      const word = app.window.VOCABULARY_DATA.flatMap(topic => topic.words)
        .find(item => item.id === saved.order[saved.idx]);
      answer = word.answers?.[0]?.text || word.infinitive || word.word;
    }
    app.answer(answer);
  }
}

function finish(app) {
  const total = Number(app.el('position').textContent.split('/')[1]);
  for (let i = 0; i < total; i++) app.click('next-btn');
  assert.equal(app.el('session-complete').hidden, false);
  assert.equal(app.el('sc-next-topic').hidden, app.snapshot().mode !== 'vocabulary');
}

for (const mode of ['grammar', 'vocabulary', 'shadowing']) {
  test(`${mode}: errors survive retries, mode switches, reload and revisiting`, () => {
    let app = setup(mode);
    respond(app, mode, false);
    respond(app, mode, false);
    assert.equal(stats(app, mode).wrong, 1);
    app.click('tab-theory');
    app.click(mode === 'vocabulary' ? 'tab-vocab' : `tab-${mode}`);
    app = createApp({ saved: app.snapshot(), recognition: true });
    respond(app, mode);
    assert.equal(stats(app, mode).correct, 0);
    assert.equal(stats(app, mode).wrong, 1);
    app.click('next-btn'); app.click('prev-btn');
    respond(app, mode);
    assert.equal(stats(app, mode).correct, 0);
    assert.equal(stats(app, mode).wrong, 1);
    finish(app);
    assert.equal(app.el('sc-pct').textContent, '0%');
    const wrong = app.el('sc-wrong').textContent;
    app.click('session-complete-close'); app.click('next-btn');
    assert.equal(app.el('sc-wrong').textContent, wrong);
    app.click('next-session-btn');
    assert.equal(stats(app, mode).wrong, 0);
    respond(app, mode);
    assert.equal(stats(app, mode).correct, 1);
  });

  test(`${mode}: revisiting a correct task does not inflate the score`, () => {
    let app = setup(mode);
    respond(app, mode);
    app = createApp({ saved: app.snapshot(), recognition: true });
    respond(app, mode);
    app.click('next-btn'); app.click('prev-btn');
    respond(app, mode, false);
    respond(app, mode);
    assert.equal(stats(app, mode).correct, 1);
    assert.equal(stats(app, mode).wrong, 0);
  });

  test(`${mode}: a perfect session is 100%, skipped tasks reduce the result`, () => {
    const perfect = setup(mode);
    const total = Number(perfect.el('position').textContent.split('/')[1]);
    for (let i = 0; i < total; i++) {
      respond(perfect, mode);
      perfect.click('next-btn');
    }
    assert.equal(perfect.el('sc-correct').textContent, String(total));
    assert.equal(perfect.el('sc-wrong').textContent, '0');
    assert.equal(perfect.el('sc-pct').textContent, '100%');
    const skipped = setup(mode);
    respond(skipped, mode);
    finish(skipped);
    assert.equal(skipped.el('sc-wrong').textContent, String(total - 1));
    assert.equal(skipped.el('sc-pct').textContent, `${Math.round(100 / total)}%`);
  });

  test(`${mode}: saved counters with 21 correct and 8 wrong produce 72%`, () => {
    const app = setup(mode);
    const saved = app.snapshot();
    const counters = mode === 'grammar' ? saved : saved[mode];
    counters.correct = 21; counters.wrong = 8;
    counters.idx = Number(app.el('position').textContent.split('/')[1]) - 1;
    const restored = createApp({ saved });
    restored.click('next-btn');
    assert.equal(restored.el('sc-correct').textContent, '21');
    assert.equal(restored.el('sc-wrong').textContent, '8');
    assert.equal(restored.el('sc-pct').textContent, '72%');
  });
}

test('shadowing: completing 21 phrases with 8 initial mistakes scores 62%', () => {
  const app = setup('shadowing');
  for (let i = 0; i < 21; i++) {
    if (i < 8) respond(app, 'shadowing', false);
    respond(app, 'shadowing');
    app.click('next-btn');
  }
  assert.equal(app.el('sc-correct').textContent, '13');
  assert.equal(app.el('sc-wrong').textContent, '8');
  assert.equal(app.el('sc-pct').textContent, '62%');
});

test('shadowing: errors during a repetition series persist across reload', () => {
  let app = setup('shadowing');
  app.change('shadowing-repetitions', '2');
  respond(app, 'shadowing');
  respond(app, 'shadowing', false);
  app = createApp({ saved: app.snapshot(), recognition: true });
  respond(app, 'shadowing');
  assert.equal(app.snapshot().shadowing.correct, 0);
  assert.equal(app.snapshot().shadowing.wrong, 1);
  app.click('next-btn');
  respond(app, 'shadowing'); respond(app, 'shadowing');
  assert.equal(app.snapshot().shadowing.correct, 1);
});
