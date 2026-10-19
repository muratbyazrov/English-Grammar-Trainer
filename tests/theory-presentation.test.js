const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function descendants(node) {
  return [node, ...node.children.flatMap(descendants)];
}

function find(app, className) {
  return descendants(app.el('theory-body')).find(node => node.classList.contains(className));
}

function openPresentation(options) {
  const app = createApp(options);
  app.click('tab-theory');
  app.change('theory-topic', 'tenses-future');
  app.click('theory-view-visual');
  return app;
}

test('future presentation navigates, replays and restores the selected view', () => {
  const app = openPresentation();
  assert.equal(app.el('theory-view-visual').hidden, false);
  assert.equal(find(app, 'future-title').textContent, 'Решение рождается сейчас');
  const playback = find(app, 'future-playback');
  assert.equal(playback.children.length, 1);
  playback.children[0].click();
  assert.equal(app.spoken.length, 0);
  for (let i = 0; i < 4; i++) find(app, 'future-next').click();
  assert.equal(find(app, 'future-title').textContent, 'Решение уже принято');
  find(app, 'future-nav').children[0].click();
  assert.equal(find(app, 'future-title').textContent, 'Решение рождается сейчас');
  assert.equal(app.snapshot().theory.view, 'visual');
  const restored = createApp({ saved: app.snapshot() });
  assert.ok(find(restored, 'future-presentation'));
  app.change('theory-topic', 'tenses-present');
  assert.equal(app.el('theory-view-visual').hidden, true);
  assert.equal(app.snapshot().theory.view, 'short');
  assert.ok(find(app, 'theory-brief-grid'));
});

test('future quiz allows retries, requires a correct answer, completes and restarts', () => {
  const app = openPresentation();
  for (let i = 0; i < 16; i++) find(app, 'future-next').click();
  let card = find(app, 'future-quiz');
  let next = card.children[card.children.length - 1];
  assert.equal(next.hidden, true);
  find(app, 'future-choices').children[1].click();
  assert.match(find(app, 'future-quiz-feedback').textContent, /Попробуй ещё раз/);
  assert.equal(next.hidden, true);
  for (const correct of [0, 1, 2]) {
    find(app, 'future-choices').children[correct].click();
    assert.match(find(app, 'future-quiz-feedback').textContent, /Верно/);
    card = find(app, 'future-quiz');
    next = card.children[card.children.length - 1];
    assert.equal(next.hidden, false);
    next.click();
  }
  assert.match(find(app, 'future-quiz').textContent, /Все три ситуации разобраны/);
  card = find(app, 'future-quiz');
  card.children[card.children.length - 1].click();
  assert.match(find(app, 'future-quiz').textContent, /Ситуация 1 из 3/);
  assert.equal(find(app, 'future-quiz-host').children.length, 1);
});
