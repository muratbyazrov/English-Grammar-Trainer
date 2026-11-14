const test = require('node:test');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

test('Oxford generator matches complete part-of-speech markers including combined forms', () => {
  execFileSync('python3', ['-c', `
from scripts.oxford.build_oxford import topic_for

cases = [
    ('also', 'adv.', 'Описание и оценка', 'Обстоятельства A–E'),
    ('else', 'adv., n.', 'Описание и оценка', 'Обстоятельства A–E'),
    ('fast', 'adj., adv.', 'Описание и оценка', 'Признаки F–J'),
    ('fast', 'adj./adv.', 'Описание и оценка', 'Признаки F–J'),
    ('close', 'n., adj./adv.', 'Описание и оценка', 'Признаки A–E'),
    ('act', 'n., v.', 'Действия и изменения', 'Глаголы A–E'),
    ('work', 'v., adv.', 'Действия и изменения', 'Глаголы U–Z'),
    ('have', 'auxiliary v.', 'Действия и изменения', 'Глаголы F–J'),
    ('shall', 'modal v.', 'Грамматика и связки', 'Модальные глаголы'),
    ('the', 'definite article', 'Грамматика и связки', 'Артикли и определители'),
    ('a', 'indefinite article', 'Грамматика и связки', 'Артикли и определители'),
    ('any', 'det./pron., adv.', 'Грамматика и связки', 'Артикли и определители'),
    ('across', 'adv./prep.', 'Грамматика и связки', 'Предлоги и направления'),
]
for word, pos, topic, subtopic in cases:
    actual = topic_for(word, pos, {})
    assert actual == (topic, subtopic), (word, pos, actual)
assert topic_for('today', 'adv.', {'today': ('Время и порядок', 'Время и частота')}) == ('Время и порядок', 'Время и частота')
`], { cwd: path.resolve(__dirname, '..'), stdio: 'pipe' });
});
