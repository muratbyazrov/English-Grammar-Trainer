window.Trainer = window.Trainer || {};
window.Trainer.createFuturePresentation = function () {
  const scenes = [
    {
      tab: 'Will', kind: 'decision', title: 'Решение рождается сейчас', form: 'will + V1',
      context: '«Билд упал!» — «Я проверю логи».',
      moments: ['Плана не было', 'Решаю сейчас', 'Проверю логи'],
      words: [['I', 'subject'], ['will', 'aux'], ['check', 'verb'], ['the logs.', 'rest']],
      translation: 'Я проверю логи.',
      formNote: 'V1 — глагол в начальной форме',
    },
    {
      tab: 'Going to', kind: 'intention', title: 'Решение уже принято', form: 'am / is / are + going to + V1',
      context: 'Вчера решили добавить индекс. Сегодня говорим о плане.',
      moments: ['Вчера решили', 'Уже собираемся', 'Добавим индекс'],
      words: [['We', 'subject'], ['are going to', 'aux'], ['add', 'verb'], ['an index.', 'rest']],
      translation: 'Мы собираемся добавить индекс.',
      formNote: 'Собираемся сделать',
    },
    {
      tab: 'Договорённость', kind: 'arrangement', title: 'План уже организован', form: 'am / is / are + V-ing',
      context: 'Команда согласовала деплой на сегодня, 22:00.',
      moments: ['Согласовали время', 'Запись в календаре', 'Сегодня в 22:00'],
      words: [['We', 'subject'], ['are', 'aux'], ['deploying', 'verb'], ['tonight.', 'rest']],
      translation: 'Мы деплоим сегодня вечером.',
      formNote: 'Уже договорились',
    },
    {
      tab: 'Процесс', kind: 'process', title: 'Заглянем в будущий момент', form: 'will + be + V-ing',
      context: 'Миграция с 02:00 до 04:00. Что будет в 03:00?',
      moments: ['Сейчас', '02:00 · старт', '04:00 · конец'],
      words: [['The migration', 'subject'], ['will be', 'aux'], ['running', 'verb'], ['at 3am.', 'rest']],
      translation: 'В 3 утра миграция будет выполняться.',
      formNote: 'Будет в процессе',
    },
    { tab: 'Проверка', kind: 'quiz', title: 'Теперь выбери смысл', context: 'Три короткие ситуации — по одной на экране.' },
  ];
  const questions = [
    {
      prompt: 'Только что узнал об ошибке и сразу предлагаешь помощь.',
      answers: ['I’ll check the logs.', 'I’m going to check the logs.', 'I’ll be checking the logs at 3am.'],
      correct: 0, explanation: 'Здесь подчёркиваем решение сейчас: will + check.',
    },
    {
      prompt: 'Вчера решили добавить индекс. Подчеркни намерение.',
      answers: ['We’ll be adding an index at 3am.', 'We’re going to add an index.', 'We’ve already added an index.'],
      correct: 1, explanation: 'Решили раньше → are going to + add.',
    },
    {
      prompt: 'Миграция идёт с 02:00 до 04:00. Что будет происходить в 03:00?',
      answers: ['The migration will start at 3am.', 'The migration is going to start at 3am.', 'The migration will be running at 3am.'],
      correct: 2, explanation: 'В 03:00 действие будет в процессе: will + be + running.',
    },
  ];
  let current = 0;
  let slide = 0;
  let quizIndex = 0;
  let quizComplete = false;

  function element(tag, className, text, parent) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    if (parent) parent.appendChild(node);
    return node;
  }

  function button(text, className, parent, action) {
    const node = element('button', className, text, parent);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
  }

  function renderQuiz(parent, focusQuestion = false) {
    parent.textContent = '';
    const card = element('div', 'future-quiz', undefined, parent);
    if (quizComplete) {
      element('p', 'future-kicker', 'Все три ситуации разобраны', card);
      element('h4', '', 'Сначала смысл — потом форма', card);
      element('p', '', 'Решаю сейчас → will. Уже собираюсь → going to. Договорились → Present Continuous. Процесс в будущий момент → Future Continuous.', card);
      button('Пройти ещё раз', '', card, () => {
        quizIndex = 0;
        quizComplete = false;
        renderQuiz(parent, true);
      });
      return;
    }
    const question = questions[quizIndex];
    element('p', 'future-kicker', `Ситуация ${quizIndex + 1} из ${questions.length}`, card);
    const heading = element('h4', '', question.prompt, card);
    heading.tabIndex = -1;
    if (focusQuestion) heading.focus();
    const choices = element('div', 'future-choices', undefined, card);
    const feedback = element('p', 'future-quiz-feedback', '', card);
    feedback.setAttribute('role', 'status');
    const next = button(quizIndex === questions.length - 1 ? 'Завершить проверку' : 'Следующая ситуация →', '', card, () => {
      if (quizIndex === questions.length - 1) quizComplete = true;
      else quizIndex += 1;
      renderQuiz(parent, true);
    });
    next.hidden = true;
    const answerButtons = question.answers.map((answer, index) => button(answer, 'future-choice', choices, () => {
      const correct = index === question.correct;
      feedback.textContent = correct ? `Верно. ${question.explanation}` : 'Попробуй ещё раз: решение сейчас, готовый план или процесс?';
      feedback.className = `future-quiz-feedback ${correct ? 'future-feedback--correct' : 'future-feedback--retry'}`;
      if (correct) {
        answerButtons.forEach((choice) => { choice.disabled = true; });
        answerButtons[index].classList.add('future-choice--correct');
        next.hidden = false;
        next.focus();
      }
    }));
  }

  function render(parent, focusScene = false) {
    parent.textContent = '';
    const scene = scenes[current];
    const root = element('section', 'future-presentation', undefined, parent);
    root.setAttribute('aria-label', 'Будущее время: наглядный урок');
    const names = ['Will', 'Going to', 'Present Continuous', 'Future Continuous', 'Проверка'];
    const label = element('p', 'future-topic-label', names[current], root);
    label.tabIndex = -1;
    if (focusScene) label.focus();

    if (scene.kind === 'quiz') {
      renderQuiz(element('div', 'future-quiz-host', undefined, root));
    } else {
      const stage = element('div', `future-stage future-stage--${scene.kind}`, undefined, root);
      const intro = element('div', 'future-frame future-frame--intro', undefined, stage);
      intro.hidden = slide !== 0;
      const title = element('h3', 'future-title', scene.title, intro);
      title.tabIndex = -1;

      const situation = element('div', 'future-frame future-frame--situation', undefined, stage);
      situation.hidden = slide !== 1;
      element('p', 'future-context', scene.context, situation);
      if (scene.kind === 'process') {
        const interval = element('div', 'future-interval', undefined, situation);
        element('span', '', '02:00', interval);
        const bar = element('div', 'future-process-bar', undefined, interval);
        element('span', 'future-process-fill', '', bar).setAttribute('aria-hidden', 'true');
        element('strong', 'future-process-probe', '03:00 · в процессе', bar);
        element('span', '', '04:00', interval);
      } else {
        const timeline = element('div', 'future-timeline', undefined, situation);
        scene.moments.forEach((moment, index) => {
          const point = element('div', `future-moment future-moment--${index}`, undefined, timeline);
          element('span', 'future-time-label', ['Раньше', 'Сейчас', 'Потом'][index], point);
          element('span', 'future-time-dot', '', point).setAttribute('aria-hidden', 'true');
          element('strong', 'future-time-event', moment, point);
        });
        element('div', 'future-trace', undefined, timeline).setAttribute('aria-hidden', 'true');
      }

      const formula = element('div', 'future-frame future-frame--formula', undefined, stage);
      formula.hidden = slide !== 2;
      element('p', 'future-formula', scene.form, formula);
      element('p', 'future-form-note', scene.formNote, formula);

      const example = element('div', 'future-frame future-frame--example', undefined, stage);
      example.hidden = slide !== 3;
      element('p', 'future-formula future-formula--small', scene.form, example);
      const sentence = element('div', 'future-sentence', undefined, example);
      sentence.setAttribute('role', 'img');
      sentence.setAttribute('aria-label', scene.words.map(([word]) => word).join(' '));
      scene.words.forEach(([word, role], index) => {
        const token = element('span', `future-word future-word--${role}`, word, sentence);
        token.style.animationDelay = `${0.2 + index * 0.35}s`;
        token.setAttribute('aria-hidden', 'true');
      });
      element('p', 'future-translation', scene.translation, example);
    }

    const nav = element('div', 'future-nav', undefined, root);
    const prev = button('← Назад', '', nav, () => {
      if (scene.kind !== 'quiz' && slide > 0) slide -= 1;
      else {
        current -= 1;
        slide = 3;
      }
      render(parent, true);
    });
    prev.disabled = current === 0 && slide === 0;
    const position = element('div', 'future-position', undefined, nav);
    const count = element('span', 'future-count', `${slide + 1} / 4`, position);
    count.hidden = scene.kind === 'quiz';
    count.setAttribute('aria-label', `Слайд ${slide + 1} из 4`);
    if (scene.kind !== 'quiz') {
      const playback = element('div', 'future-playback', undefined, position);
      const replay = button('↻', '', playback, () => {
        const stage = root.querySelector('.future-stage');
        // Replay just the current slide; navigation remains manual.
        stage.classList.add('future-stage--reset');
        void stage.offsetWidth;
        stage.classList.remove('future-stage--reset');
      });
      replay.setAttribute('aria-label', 'Повторить слайд');
      replay.title = 'Повторить слайд';
    }
    const nextText = scene.kind === 'quiz' ? 'К началу ↻'
      : slide < 3 ? 'Далее →'
      : current === scenes.length - 2 ? 'К проверке →' : 'Следующая форма →';
    button(nextText, 'future-next', nav, () => {
      if (scene.kind !== 'quiz' && slide < 3) slide += 1;
      else {
        current = current === scenes.length - 1 ? 0 : current + 1;
        slide = 0;
      }
      render(parent, true);
    });
  }

  return { render };
};
