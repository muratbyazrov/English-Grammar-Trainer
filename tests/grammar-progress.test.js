const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function descendants(node) {
  return [node, ...node.children.flatMap(descendants)];
}

function card(app, topic) {
  return descendants(app.el('grammar-topic-groups')).find(node => node.dataset.topicValue === topic);
}

function segments(app, topic) {
  const button = card(app, topic);
  assert.ok(button, `Missing grammar topic ${topic}`);
  return ['correct', 'wrong'].map(outcome =>
    button.querySelector(`.vocab-topic-progress-fill--${outcome}`).style.width);
}

function start() {
  const app = createApp();
  app.change('auto-speak-correct', false);
  const level = app.el('level-select').value;
  const topic = app.window.TrainerData.GRAMMAR_TOPICS[level][0];
  app.change('grammar-topic', topic.id);
  return { app, level, topic };
}

function answerCorrectly(app) {
  const question = app.window.GRAMMAR_QUESTIONS[app.el('level-select').value]
    .find(item => item.id === Number(app.el('question-id').textContent));
  app.answer(question.answer);
}

test('grammar topic bars show correct, wrong and unanswered portions, including all topics', () => {
  const { app, level, topic } = start();
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['0%', '0%']);
  app.click('grammar-topic-close');
  answerCorrectly(app);
  app.click('next-btn');
  app.answer('completely unrelated answer');
  app.click('grammar-topic-trigger');
  const total = app.window.GRAMMAR_QUESTIONS[level].filter(q => q.id >= topic.from && q.id <= topic.to).length;
  assert.deepEqual(segments(app, topic.id), [`${100 / total}%`, `${100 / total}%`]);
  assert.match(card(app, topic.id).textContent, /Пройдено 2 из 20 · 10%/);
  assert.match(card(app, topic.id).attributes['aria-label'], /Верно: 1\. Ошибок: 1\. Не пройдено: 18/);
  const levelTotal = app.window.GRAMMAR_QUESTIONS[level].length;
  assert.deepEqual(segments(app, 'all'), [`${1 / levelTotal * 100}%`, `${1 / levelTotal * 100}%`]);
  assert.deepEqual(segments(app, app.window.TrainerData.GRAMMAR_TOPICS[level][1].id), ['0%', '0%']);
});

test('grammar history survives retries, mode switches, reload and restart; a new clean answer updates red to green', () => {
  let { app, level, topic } = start();
  const questionId = app.el('question-id').textContent;
  app.answer('completely unrelated answer');
  answerCorrectly(app);
  assert.equal(app.snapshot().grammarProgress[`${level}:${questionId}`], 'wrong');
  app.click('tab-vocab');
  app.click('tab-grammar');
  app = createApp({ saved: app.snapshot() });
  assert.equal(app.snapshot().grammarProgress[`${level}:${questionId}`], 'wrong');
  app.click('new-session');
  assert.equal(app.snapshot().wrong, 0);
  assert.equal(app.snapshot().grammarProgress[`${level}:${questionId}`], 'wrong');
  answerCorrectly(app);
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['5%', '0%']);
  assert.equal(app.snapshot().grammarProgress[`${level}:${questionId}`], 'correct');
  app.click('grammar-topic-close');
  app.click('new-session');
  app.answer('completely unrelated answer');
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['0%', '5%']);
});

test('grammar history persists across topics and separates identical question IDs in different levels', () => {
  let { app, level, topic } = start();
  answerCorrectly(app);
  const nextTopic = app.window.TrainerData.GRAMMAR_TOPICS[level][1];
  app.change('grammar-topic', nextTopic.id);
  app.answer('completely unrelated answer');
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['5%', '0%']);
  assert.deepEqual(segments(app, nextTopic.id), ['0%', '5%']);
  app.click('grammar-topic-close');
  const otherLevel = 'B1';
  const grammar = { ...app.window.GRAMMAR_QUESTIONS, [otherLevel]: [app.window.GRAMMAR_QUESTIONS[level][0]] };
  app = createApp({ saved: app.snapshot(), grammar });
  app.change('level-select', otherLevel);
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, 'all'), ['0%', '0%']);
  app.click('grammar-topic-close');
  app.answer('completely unrelated answer');
  const otherId = app.el('question-id').textContent;
  assert.equal(app.snapshot().grammarProgress[`${otherLevel}:${otherId}`], 'wrong');
  app.change('level-select', level);
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['5%', '0%']);
  assert.deepEqual(segments(app, nextTopic.id), ['0%', '5%']);
});

test('grammar restores known legacy results, drops invalid history and does not invent results from counters', () => {
  const { app, level, topic } = start();
  answerCorrectly(app);
  app.click('next-btn');
  app.answer('completely unrelated answer');
  const saved = app.snapshot();
  delete saved.grammarProgress;
  let restored = createApp({ saved });
  assert.equal(restored.snapshot().idx, saved.idx);
  assert.equal(restored.snapshot().correct, saved.correct);
  assert.equal(restored.snapshot().wrong, saved.wrong);
  restored.click('grammar-topic-trigger');
  assert.deepEqual(segments(restored, topic.id), ['5%', '5%']);
  saved.grammarProgress = { [`${level}:1`]: 'correct', [`${level}:2`]: 'wrong', [`${level}:3`]: 'invalid', 'unknown:1': 'wrong', [`${level}:999999`]: 'correct' };
  restored = createApp({ saved });
  assert.deepEqual(Object.keys(restored.snapshot().grammarProgress).sort(), [`${level}:1`, `${level}:2`]);
  saved.outcomes = {};
  delete saved.grammarProgress;
  restored = createApp({ saved });
  restored.click('grammar-topic-trigger');
  assert.deepEqual(segments(restored, topic.id), ['0%', '0%']);
});

test('navigation and finishing leave unattempted questions grey, including after reload', () => {
  let { app, topic } = start();
  app.answer('');
  assert.deepEqual(app.snapshot().grammarProgress, {});
  answerCorrectly(app);
  app.click('next-btn');
  app.click('next-btn');
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['5%', '0%']);
  app.click('grammar-topic-close');
  for (let index = 2; index < 20; index++) app.click('next-btn');
  assert.equal(app.el('session-complete').hidden, false);
  app.click('session-complete-close');
  app.click('next-btn');
  assert.equal(app.snapshot().correct, 1);
  assert.equal(app.snapshot().wrong, 19);
  assert.equal(Object.keys(app.snapshot().grammarProgress).length, 1);
  app = createApp({ saved: app.snapshot() });
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['5%', '0%']);
  assert.match(card(app, topic.id).textContent, /Пройдено 1 из 20 · 5%/);
});

test('a fully answered topic reaches 100% and repeated navigation does not inflate progress', () => {
  let { app, topic } = start();
  for (let index = 0; index < 20; index++) {
    answerCorrectly(app);
    app.click('next-btn');
  }
  app.click('session-complete-close');
  app.click('next-btn');
  app = createApp({ saved: app.snapshot() });
  assert.equal(Object.keys(app.snapshot().grammarProgress).length, 20);
  app.click('grammar-topic-trigger');
  assert.deepEqual(segments(app, topic.id), ['100%', '0%']);
  assert.match(card(app, topic.id).textContent, /Пройдено 20 из 20 · 100%/);
});
