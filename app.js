(function () {
  const STORAGE_KEY = "english-grammar-trainer.progress.v2";
  const AUTO_NEXT_DELAY_MS = 450;
  const DEFAULT_ANSWER_PLACEHOLDER = "Например: helps";
  const EMPTY_ENTER_SPEAK_PLACEHOLDER = "Нажмите Enter еще раз, чтобы озвучить";

  const allLevels = (window.GRAMMAR_QUESTIONS && typeof window.GRAMMAR_QUESTIONS === "object" && !Array.isArray(window.GRAMMAR_QUESTIONS))
    ? window.GRAMMAR_QUESTIONS
    : {};
  const levelNames = Object.keys(allLevels).sort();
  let currentMode = 'grammar';
  const vocabTopics = (window.VOCABULARY_DATA && Array.isArray(window.VOCABULARY_DATA)) ? window.VOCABULARY_DATA : [];
  const ALL_GRAMMAR_TOPICS_VALUE = "all";
  const GRAMMAR_TOPICS = {
    "A1-A2": [
      { id: "present-simple-positive", title: "Present Simple: утверждения", from: 1, to: 20 },
      { id: "present-simple-negative", title: "Present Simple: отрицания", from: 21, to: 40 },
      { id: "present-simple-yes-no", title: "Present Simple: общие вопросы", from: 41, to: 70 },
      { id: "present-simple-special", title: "Present Simple: специальные вопросы", from: 71, to: 90 },
      { id: "to-be-present", title: "To be: am/is/are", from: 91, to: 170 },
      { id: "past-simple-irregular", title: "Past Simple: неправильные глаголы", from: 171, to: 307 },
      { id: "to-be-past", title: "To be: was/were", from: 308, to: 390 },
      { id: "future-simple", title: "Future Simple: will/won't", from: 391, to: 420 },
      { id: "present-continuous", title: "Present Continuous", from: 421, to: 510 },
      { id: "present-simple-vs-continuous", title: "Present Simple vs Continuous", from: 511, to: 570 },
      { id: "so-such", title: "So / such", from: 571, to: 607 },
      { id: "verb-patterns-like-want", title: "Verb patterns: want / would like / like", from: 608, to: 680 },
      { id: "have-have-got", title: "Have / have got", from: 681, to: 730 },
      { id: "modals-can-must", title: "Modal verbs: can / must", from: 731, to: 809 },
      { id: "have-to-could-may", title: "Have to / could / may", from: 810, to: 910 },
      { id: "passive-present", title: "Passive Voice: Present Simple", from: 911, to: 1011 },
      { id: "passive-past", title: "Passive Voice: Past Simple", from: 1012, to: 1061 },
      { id: "passive-future", title: "Passive Voice: Future Simple", from: 1062, to: 1111 },
      { id: "time-clauses", title: "Time clauses: when / after / before", from: 1112, to: 1162 },
      { id: "conditionals", title: "Conditionals: if-clauses", from: 1163, to: 1213 },
      { id: "imperatives-there-be", title: "Imperatives + there is/are", from: 1214, to: 1263 },
      { id: "there-will-be-going-to", title: "There will be / going to", from: 1264, to: 1414 },
      { id: "make-do-short-answers", title: "Make / do + short answers", from: 1415, to: 1666 },
      { id: "pronouns-possessives", title: "Pronouns and possessives", from: 1667, to: 1716 },
      { id: "quantifiers", title: "Quantifiers: many / much / few / little", from: 1717, to: 1878 },
      { id: "adjectives-adverbs", title: "Adjectives and adverbs", from: 1879, to: 1928 },
      { id: "comparatives", title: "Comparatives", from: 1929, to: 1978 },
      { id: "superlatives", title: "Superlatives", from: 1979, to: 2026 },
      { id: "object-possessive-pronouns", title: "Object and possessive pronouns", from: 2027, to: 2076 },
      { id: "articles-time-prepositions", title: "Articles + time prepositions", from: 2077, to: 2176 },
      { id: "adjective-prepositions", title: "Prepositions after adjectives and verbs", from: 2177, to: 2228 },
      { id: "tag-questions-present", title: "Tag questions: present", from: 2229, to: 2329 },
      { id: "tag-questions-past", title: "Tag questions: past", from: 2330, to: 2379 },
      { id: "tag-questions-have-modals", title: "Tag questions: have got / modals", from: 2380, to: 2450 },
      { id: "infinitive-gerund", title: "Infinitive and gerund", from: 2451, to: 2499 },
    ],
  };
  const QUESTION_TRANSLATION_OVERRIDES = {
    "A1-A2:232": "Я отправил ей любовную записку.",
  };
  const THEORY_TOPICS = [
    {
      id: "due-to",
      title: "Due to",
      subtitle: "из-за, вследствие чего-то",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Due to объясняет причину. После него обычно стоит существительное или verb + ing, но не полноценное предложение с подлежащим и глаголом.",
            "Можно ставить в начале предложения или в середине: Due to high load, the service crashed. The service crashed due to high load.",
          ],
        },
        {
          title: "Структура",
          examples: [
            ["due to high load", "из-за высокой нагрузки"],
            ["due to increasing traffic", "из-за растущего трафика"],
            ["because the load increased", "когда нужна полная причина-предложение"],
          ],
        },
        {
          title: "Типичные tech-контексты",
          items: [
            "The deploy failed due to failing tests.",
            "Latency spiked due to a sudden traffic increase.",
            "The query slowed down due to missing indexes.",
            "The incident lasted longer due to poor monitoring.",
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Сервис упал из-за неправильной конфигурации.",
            "CPU usage вырос из-за утечки памяти.",
            "Миграция заняла много времени из-за недостатка документации.",
          ],
        },
      ],
    },
    {
      id: "whether-if",
      title: "Whether / if",
      subtitle: "ли после know, check, ask, wonder, tell, see",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Whether и if переводятся как «ли», когда мы говорим о проверке, знании или сомнении.",
            "После whether/if порядок слов как в обычном утверждении, а не как в вопросе.",
          ],
        },
        {
          title: "Структура",
          examples: [
            ["Tell me whether the service is working.", "Скажи, работает ли сервис."],
            ["I don't know if the PR is ready.", "Я не знаю, готов ли PR."],
            ["Can you check whether the tests are passing?", "Можешь проверить, проходят ли тесты?"],
          ],
        },
        {
          title: "Не путай с if = если",
          items: [
            "If the build passes, we deploy. Здесь if означает «если».",
            "I don't know if the build passes. Здесь if означает «ли».",
            "Подсказка: если можно подставить «является ли это правдой, что», это whether/if = «ли».",
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Я не знаю, смержили ли уже PR.",
            "Проверь, проходят ли тесты после последнего деплоя.",
            "Я не уверен, восстановился ли сервис после инцидента.",
          ],
        },
      ],
    },
    {
      id: "manage-to",
      title: "Manage to",
      subtitle: "удалось, получилось сделать что-то непростое",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Manage to подчеркивает, что действие получилось сделать, хотя это было непросто или неочевидно.",
            "Структура всегда одна: manage to + infinitive.",
          ],
        },
        {
          title: "Сравнение",
          examples: [
            ["We managed to deploy before the deadline.", "Успели задеплоить, хотя было непросто."],
            ["We were able to deploy before the deadline.", "Нейтральный факт: смогли."],
            ["We could deploy before the deadline.", "Была такая возможность."],
          ],
        },
        {
          title: "Правильные формы",
          items: [
            "managed to fix",
            "didn't manage to reproduce",
            "did you manage to find",
            "managed fixing - неправильно",
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Нам удалось предотвратить отказ, откатив конфиг.",
            "Тебе удалось оценить масштаб проблемы до incident call?",
            "Команде не удалось воспроизвести проблему под нагрузкой.",
          ],
        },
      ],
    },
    {
      id: "aware-of",
      title: "Aware of",
      subtitle: "знать о чем-то, быть в курсе, осознавать",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Aware of звучит чуть формальнее, чем know, и часто используется для рисков, проблем, инцидентов и важных изменений.",
            "После aware всегда нужен предлог of.",
          ],
        },
        {
          title: "Структура",
          examples: [
            ["Are you aware of the issue?", "Ты в курсе проблемы?"],
            ["We're aware of the outage.", "Мы в курсе отказа."],
            ["I wasn't aware of the config change.", "Я не знал об изменении конфига."],
          ],
        },
        {
          title: "Три частых контекста",
          items: [
            "be aware of - быть в курсе прямо сейчас.",
            "become aware of - узнать, обнаружить.",
            "make someone aware of - уведомить, поставить в известность.",
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Все в курсе инцидента?",
            "Мы узнали о проблеме через мониторинг.",
            "Я хочу поставить команду в известность об этом риске до деплоя.",
          ],
        },
      ],
    },
    {
      id: "worth",
      title: "Worth",
      subtitle: "стоит, заслуживает, имеет смысл",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Worth выражает ценность или смысл действия: стоит ли это усилий, времени, риска или денег.",
            "После worth часто стоит существительное, verb + ing или заменяющее it, когда конкретное существительное уже понятно из контекста.",
          ],
        },
        {
          title: "1. Be worth + noun",
          examples: [
            ["It's worth the effort.", "Это стоит усилий."],
            ["It's worth the risk.", "Это стоит риска."],
            ["It's not worth the time.", "Это не стоит времени."],
          ],
        },
        {
          title: "2. Be worth + verb-ing",
          items: [
            "После worth всегда используем -ing, а не инфинитив.",
            "Правильно: worth doing.",
            "Неправильно: worth to do.",
          ],
          examples: [
            ["It's worth trying.", "Стоит попробовать."],
            ["It's worth investigating.", "Стоит расследовать."],
            ["It's not worth fixing.", "Не стоит чинить."],
          ],
        },
        {
          title: "3. Be worth it",
          items: [
            "Когда нет конкретного существительного, используем it.",
          ],
          examples: [
            ["It sounds complicated, but it's worth it.", "Звучит сложно, но оно того стоит."],
            ["Is it worth it?", "Оно того стоит?"],
          ],
        },
        {
          title: "Полезные расширения",
          examples: [
            ["This technical debt is worth months of work to fix.", "worth + число: стоит в денежном или временном смысле."],
            ["It's a worthwhile refactoring.", "Worthwhile - прилагательное: полезный, стоящий."],
            ["This is a minor bug - it's not worth fixing right now.", "Not worth it / not worth doing - не стоит."],
          ],
        },
        {
          title: "В IT-контексте",
          items: [
            "It's worth analyzing the execution plan before optimizing.",
            "Is it worth adding an index on this column?",
            "The migration is complex, but it's worth it - we get much better performance.",
            "It's not worth introducing a new dependency for such a small feature.",
            "This is worth discussing in the next standup.",
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Стоит проанализировать план выполнения перед тем, как добавлять индекс.",
            "Это сложная миграция, но она того стоит - производительность значительно улучшится.",
            "Этот баг незначительный - не стоит его чинить прямо сейчас.",
            "Стоит обсудить проблему с блокировками на следующем стендапе.",
          ],
        },
      ],
    },
    {
      id: "subject-questions",
      title: "Вопросы к подлежащему",
      subtitle: "who / what как тот, кто выполняет действие",
      sections: [
        {
          title: "Главная идея",
          items: [
            "В обычном вопросе мы спрашиваем про действие или обстоятельство: нужен вспомогательный глагол и обратный порядок слов.",
            "Если вопрос про того, кто или что совершает действие, вспомогательный глагол обычно не нужен. Порядок слов прямой, как в утверждении; в Present Simple часто используется форма 3 лица единственного числа.",
          ],
          examples: [
            ["What did you deploy?", "Обычный вопрос: что ты задеплоил?"],
            ["What are you fixing?", "Обычный вопрос: что ты чинишь?"],
            ["Who triggered the alert?", "Вопрос к подлежащему: кто вызвал алерт?"],
            ["What broke the build?", "Вопрос к подлежащему: что сломало билд?"],
          ],
        },
        {
          title: "Сравнение по временам",
          examples: [
            ["Present Simple: What do you monitor?", "Who monitors this service?"],
            ["Past Simple: What did you revert?", "Who reverted the config?"],
            ["Present Continuous: What are you fixing?", "What is causing the issue?"],
            ["Present Perfect: What have you pushed?", "Who has pushed to main?"],
            ["To be - Present: What is the root cause?", "Who is on-call tonight?"],
            ["To be - Past: What was the workaround?", "Who was the incident commander?"],
          ],
        },
        {
          title: "Present Perfect",
          items: [
            "В Present Perfect вспомогательный has остается, потому что он часть самой формы, а не отдельная вопросительная конструкция.",
          ],
          examples: [
            ["Who has pushed to main?", "Кто запушил в main?"],
            ["What has caused the outage?", "Что вызвало отказ?"],
          ],
        },
        {
          title: "Составьте два вопроса",
          items: [
            "The config change triggered the alert. What / ? Who / ?",
            "Alex pushed a hotfix to production at 3am. Who / ? What / Alex / push?",
            "The unoptimized query caused the outage. What / caused? What / the team / find?",
            "The on-call engineer reverted the config. Who / reverted? What / the on-call engineer / revert?",
            "Something is blocking the deploy right now. What / blocking? What / you / fix?",
            "A memory leak caused the issue. What / caused? What / the team / find?",
            "The traffic spike broke the service last night. What / broke? What / you / notice?",
            "Alex owns this incident. Who / owns? What / Alex / own?",
          ],
        },
      ],
    },
    {
      id: "passive-voice-table",
      title: "Passive Voice: таблица",
      subtitle: "когда важно действие и результат, а не исполнитель",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Passive Voice нужен, когда объект получает действие: индекс создается, схема обновляется, запрос выполняется.",
            "Общая структура: be в нужном времени + V-ed / past participle.",
            "Исполнителя можно добавить через by, но в IT-контексте его часто опускают, если он не важен.",
          ],
        },
        {
          title: "Времена и структура",
          examples: [
            ["Present Simple: is / are + V-ed", "The query is executed automatically."],
            ["Past Simple: was / were + V-ed", "The config was reverted after the incident."],
            ["Present Continuous: is / are + being + V-ed", "The migration is being tested right now."],
            ["Past Continuous: was / were + being + V-ed", "The service was being monitored when it crashed."],
            ["Present Perfect: has / have + been + V-ed", "The PR has been reviewed already."],
            ["Past Perfect: had + been + V-ed", "The index had been dropped before we noticed."],
            ["Future Simple: will + be + V-ed", "The schema will be updated next sprint."],
            ["Modal verbs: modal + be + V-ed", "The transaction should be rolled back immediately."],
          ],
        },
        {
          title: "Модальные - отдельно, часто используются",
          examples: [
            ["should be", "The lock should be released after the transaction."],
            ["must be", "All queries must be validated before execution."],
            ["can be", "The migration can be rolled back if something breaks."],
            ["might be", "The deadlock might be caused by the batch job."],
            ["needs to be", "The index needs to be created before deploy."],
          ],
        },
        {
          title: "Упражнение 1 - переделайте в пассив",
          items: [
            "Postgres rolled back the transaction automatically.",
            "The team dropped the index by mistake during the migration.",
            "Someone has already reviewed the execution plan.",
            "We are currently testing the migration on staging.",
            "Alex optimized the query and reduced latency by 40%.",
            "The system had already committed the transaction before the error occurred.",
            "We will update the schema next sprint.",
            "Someone must fix the constraint violation before we deploy.",
            "The team is running the migration without downtime.",
            "We should acquire the lock before modifying the row.",
          ],
        },
        {
          title: "Упражнение 2 - перевод на английский: пассив",
          items: [
            "Индекс был создан на столбце user_id, чтобы ускорить запросы.",
            "Транзакция была откачена из-за нарушения ограничения.",
            "Схема будет обновлена на следующей неделе без остановки сервиса.",
            "План выполнения сейчас анализируется - мы ищем последовательный перебор.",
            "Строка должна быть заблокирована перед изменением, чтобы избежать взаимной блокировки.",
            "Миграция уже была протестирована на стейджинге до деплоя.",
            "Все запросы должны быть оптимизированы перед релизом.",
            "Соединение было получено из пула, но так и не освобождено.",
          ],
        },
      ],
    },
    {
      id: "get-v-ed",
      title: "Get + V-ed",
      subtitle: "разговорный аналог пассивного залога с оттенком события или результата",
      sections: [
        {
          title: "Главная идея",
          items: [
            "Get + past participle означает, что что-то происходит с подлежащим, часто неожиданно или в результате чьих-то действий.",
            "В IT это звучит естественно в устной речи: на стендапах, incident calls и в чате.",
          ],
          examples: [
            ["The deploy got reverted.", "The deploy was reverted."],
            ["The PR got merged.", "The PR was merged."],
          ],
        },
        {
          title: "Чем отличается от to be + past participle",
          items: [
            "To be - нейтрально, формально, описательно: The transaction was rolled back.",
            "Get - разговорно, динамично, часто с оттенком неожиданности или результата: The transaction got rolled back.",
          ],
        },
        {
          title: "Структура",
          items: [
            "get + past participle - всегда правильная форма глагола.",
            "Правильно: got merged, got reverted, got blocked, got paged.",
            "Неправильно: got merge, got revert.",
          ],
        },
        {
          title: "Часто с рефлексивным значением",
          items: [
            "Иногда get + V-ed означает, что подлежащее само попало в ситуацию.",
          ],
          examples: [
            ["I got paged at 3am.", "меня подняли в 3 ночи"],
            ["We got blocked on the infra dependency.", "мы застряли из-за зависимости"],
            ["The service got overloaded.", "сервис перегрузился"],
          ],
        },
        {
          title: "В IT-контексте",
          items: [
            "The PR finally got merged after three rounds of review.",
            "The config got reverted and the service recovered.",
            "We got paged during the night - the database got overloaded.",
            "The migration got rolled back because of a constraint violation.",
            "The query got optimized and latency dropped significantly.",
            "I got blocked on this for two days.",
            "The index got dropped accidentally during the migration.",
          ],
        },
        {
          title: "Упражнение - замените пассив на get + V-ed",
          items: [
            "The PR was finally merged after three rounds of review.",
            "The config was reverted and the service recovered immediately.",
            "The migration was rolled back because of a constraint violation.",
            "The index was dropped accidentally during the migration.",
            "The on-call engineer was paged at 3am when the database went down.",
          ],
        },
      ],
    },
  ];
  const LISTENING_TOPICS = [
    {
      id: "small-words",
      title: "Small Words",
      items: [
        "So, as far as I know, it should be fine by the end of the day.",
        "I just want to flag that it might take a bit longer than we thought.",
        "Let me look into it and I'll get back to you in a bit.",
        "Yeah, I'm still kind of stuck on it, but I think I'm close.",
        "So I went ahead and pushed it to review. Let me know what you think.",
        "I mean, it depends on what we find once we dig into it.",
        "I'll try to wrap it up today, but I can't promise it'll be done by end of day.",
        "So just a heads-up, I might need a bit of help with this one.",
        "I think the best thing to do is to loop in the infra team and go from there.",
        "OK, so I looked into it and it turns out it's a bit more complex than I thought.",
      ],
    },
    {
      id: "incident-call",
      title: "Incident Call",
      items: [
        "Can you jump on a call? The service is down and we need all hands on.",
        "I'm not sure if it's a sev one yet. Let me pull up the logs and check.",
        "As far as I know, the on-call engineer is already looking into it.",
        "So we rolled it back and it looks like it's starting to stabilize.",
        "Can you give us a quick update on what's going on right now?",
        "I think we need to narrow it down a bit more before we push a hotfix.",
        "It turns out the root cause was a config change we pushed earlier today.",
        "So we applied a workaround for now. We'll do a proper fix in the morning.",
        "I want to make sure we do a blameless postmortem and figure out how to prevent this.",
      ],
    },
    {
      id: "standup",
      title: "Standup",
      items: [
        "Alex picked up the migration ticket on Monday but got stuck on a dependency.",
        "He flagged it straight away, but we still haven't managed to unblock him.",
        "Masha is wrapping up the API refactor.",
        "She pushed it to review yesterday and addressed most of the comments.",
        "It should be mergeable by end of day.",
        "Dan raised a concern about the deadline.",
        "His rough estimate is four to five days, but it depends on the edge cases.",
        "We decided to take that discussion offline after the standup.",
      ],
    },
    {
      id: "backend",
      title: "Backend/API",
      items: [
        "Our service exposes a REST API that the frontend team consumes to get data.",
        "Every request goes through middleware that intercepts it and validates the authentication token.",
        "We always validate the payload before it hits the database.",
        "Heavy tasks like sending emails are offloaded to a background queue.",
        "Last week we discovered a bottleneck.",
        "A database query was slowing down the whole service under high load.",
        "We added retry logic with exponential backoff.",
        "If the cache goes down, the service falls back to the database.",
      ],
    },
    {
      id: "database",
      title: "Database",
      items: [
        "Moving it to Postgres gives us persistence and makes it much easier to scale horizontally.",
        "The plan is to introduce a migration to create the new tables.",
        "We'll create indexes on the columns we query most frequently.",
        "I want to analyze the execution plan for the heaviest queries before we go live.",
        "We need to handle transactions carefully.",
        "We should always acquire locks in the same order to avoid deadlocks.",
        "If anything goes wrong, we roll back the transaction and the schema stays consistent.",
      ],
    },
  ];

  function fixBrokenWordSpacing(value) {
    return String(value || "")
      .replace(/\bandI\b/g, "and I")
      .replace(/\bshea\b/gi, "she a")
      .replace(/\btimesa month\b/gi, "times a month");
  }

  function sanitizeQuestion(question) {
    if (!question || typeof question !== "object") return question;

    const options = question.options && typeof question.options === "object"
      ? Object.fromEntries(
          Object.entries(question.options).map(([key, value]) => [key, fixBrokenWordSpacing(value)])
        )
      : question.options;

    return {
      ...question,
      prompt: fixBrokenWordSpacing(question.prompt),
      answer: fixBrokenWordSpacing(question.answer),
      options,
    };
  }

  Object.keys(allLevels).forEach((level) => {
    const questions = allLevels[level];
    if (!Array.isArray(questions)) return;
    allLevels[level] = questions.map(sanitizeQuestion);
  });

  const refs = {
    levelSelect: document.getElementById("level-select"),
    grammarTopic: document.getElementById("grammar-topic"),
    newSession: document.getElementById("new-session"),
    position: document.getElementById("position"),
    correctCount: document.getElementById("correct-count"),
    wrongCount: document.getElementById("wrong-count"),
    questionId: document.getElementById("question-id"),
    questionText: document.getElementById("question-text"),
    questionTranslation: document.getElementById("question-translation"),
    speakWordBtn: document.getElementById("speak-word-btn"),
    answerInput: document.getElementById("answer-input"),
    checkBtn: document.getElementById("check-btn"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    autoSpeakCorrect: document.getElementById("auto-speak-correct"),
    feedback: document.getElementById("feedback"),
    hint: document.getElementById("hint"),
    optionA: document.getElementById("option-a"),
    optionB: document.getElementById("option-b"),
    optionC: document.getElementById("option-c"),
    sessionComplete: document.getElementById("session-complete"),
    scCorrect: document.getElementById("sc-correct"),
    scWrong: document.getElementById("sc-wrong"),
    scPct: document.getElementById("sc-pct"),
    scCloseBtn: document.getElementById("session-complete-close"),
    nextSessionBtn: document.getElementById("next-session-btn"),
    tabGrammar: document.getElementById('tab-grammar'),
    tabTheory: document.getElementById('tab-theory'),
    tabVocab: document.getElementById('tab-vocab'),
    tabListening: document.getElementById('tab-listening'),
    controlsGrammar: document.getElementById('controls-grammar'),
    controlsTheory: document.getElementById('controls-theory'),
    controlsVocab: document.getElementById('controls-vocab'),
    controlsListening: document.getElementById('controls-listening'),
    theoryTopic: document.getElementById('theory-topic'),
    vocabTopic: document.getElementById('vocab-topic'),
    vocabShowList: document.getElementById('vocab-show-list'),
    vocabNewSession: document.getElementById('vocab-new-session'),
    autoSpeakCorrectVocab: document.getElementById('auto-speak-correct-vocab'),
    listeningTopic: document.getElementById('listening-topic'),
    listeningRate: document.getElementById('listening-rate'),
    listeningAutoNext: document.getElementById('listening-auto-next'),
    listeningNewSession: document.getElementById('listening-new-session'),
    listeningActions: document.getElementById('listening-actions'),
    listenBtn: document.getElementById('listen-btn'),
    listeningFirstWord: document.getElementById('listening-first-word'),
    listeningGaps: document.getElementById('listening-gaps'),
    listeningShowText: document.getElementById('listening-show-text'),
    vocabTabGroup: document.getElementById('vocab-tab-group'),
    optionsSection: document.getElementById('options-section'),
    questionMeta: document.getElementById('question-meta'),
    vocabModeLabel: document.getElementById('vocab-mode-label'),
    statsSection: document.getElementById('stats-section'),
    cardContent: document.getElementById('card-content'),
    theoryPanel: document.getElementById('theory-panel'),
    theoryTitle: document.getElementById('theory-title'),
    theoryBody: document.getElementById('theory-body'),
    vocabListOverlay: document.getElementById('vocab-list-overlay'),
    vocabListTitle: document.getElementById('vocab-list-title'),
    vocabListSubtitle: document.getElementById('vocab-list-subtitle'),
    vocabListBody: document.getElementById('vocab-list-body'),
    vocabListClose: document.getElementById('vocab-list-close'),
  };

  const card = document.querySelector(".card");

  function makeAudioCtx() {
    return new (window.AudioContext || window.webkitAudioContext)();
  }

  function playBell(ctx, freq, startTime, volume = 0.07) {
    [1, 2.76].forEach((ratio, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq * ratio;
      const vol = volume / (i + 1);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(vol, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.9);
      osc.start(startTime);
      osc.stop(startTime + 0.9);
    });
  }

  function playCorrectSound() {
    try {
      const ctx = makeAudioCtx();
      [[659.25, 0], [830.61, 0.14], [987.77, 0.28]].forEach(([freq, delay]) => {
        playBell(ctx, freq, ctx.currentTime + delay);
      });
    } catch (_) {}
  }

  function playWrongSound() {
    try {
      const ctx = makeAudioCtx();
      [[300, 0], [250, 0.2]].forEach(([freq, delay]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        osc.frequency.linearRampToValueAtTime(freq * 0.82, ctx.currentTime + delay + 0.2);
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.35);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.35);
      });
    } catch (_) {}
  }

  function flashCorrect() {
    card.classList.remove("correct-flash");
    void card.offsetWidth; // reflow to restart animation
    card.classList.add("correct-flash");
    card.addEventListener("animationend", () => card.classList.remove("correct-flash"), { once: true });
  }

  const state = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    autoNextTimer: null,
    translationCache: new Map(),
    sentenceTranslationRequestId: 0,
    selectedSentenceForSpeech: "",
    speechVoices: [],
    autoSpeakCorrect: true,
    speechPlaybackToken: 0,
    emptyVocabEnterPromptIdx: -1,
  };

  const vocabState = { session: [], idx: 0, correct: 0, wrong: 0, checkedCurrent: false, wrongCounted: false };
  const listeningState = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    hintLevel: 0,
  };

  function asNumber(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/^[\s.,!?;:"'\u201c\u201d\u2018\u2019()\-]+|[\s.,!?;:"'\u201c\u201d\u2018\u2019()\-]+$/g, "")
      .trim();
  }

  function answerOptionsFromText(target) {
    return String(target || "")
      .split("/")
      .map((part, index) => ({
        text: part.trim(),
        weight: index === 0 ? 1 : 0.8,
      }))
      .filter((item) => item.text);
  }

  function answerOptionsForVocabItem(item) {
    if (item && Array.isArray(item.answers) && item.answers.length) {
      return item.answers
        .map((answer, index) => ({
          text: String((answer && answer.text) || "").trim(),
          weight: Number.isFinite(Number(answer && answer.weight))
            ? Number(answer.weight)
            : (index === 0 ? 1 : 0.8),
        }))
        .filter((answer) => answer.text);
    }

    return answerOptionsFromText((item && (item.infinitive || item.word)) || "");
  }

  function primaryAnswerText(options) {
    return (Array.isArray(options) && options[0] && options[0].text) || "";
  }

  function getAnswerMatch(userNorm, targetNorm, answerOptions) {
    const comparable = (s) => String(s || "").replace(/[-\s]+/g, " ").trim();
    const comparableUser = comparable(userNorm);
    const comparableTarget = comparable(targetNorm);

    const options = Array.isArray(answerOptions) && answerOptions.length
      ? answerOptions
      : answerOptionsFromText(targetNorm);
    const primaryAnswer = primaryAnswerText(options) || targetNorm;

    if (options.length > 1) {
      const matchedIndex = options.findIndex((option) => {
        const optionNorm = normalize(option.text);
        return userNorm === optionNorm || comparableUser === comparable(optionNorm);
      });

      if (matchedIndex !== -1) {
        return {
          matched: true,
          isAlternative: matchedIndex > 0,
          primaryAnswer,
          weight: options[matchedIndex].weight,
        };
      }
    }

    if (userNorm === targetNorm || comparableUser === comparableTarget) {
      return { matched: true, isAlternative: false, primaryAnswer, weight: 1 };
    }

    // Скобки в ответе — необязательная часть. "to fire" принимается для "to fire (an alert)".
    const withoutParens = normalize(targetNorm.replace(/\s*\(.*$/, ""));
    if (withoutParens && (userNorm === withoutParens || comparableUser === comparable(withoutParens))) {
      return { matched: true, isAlternative: false, primaryAnswer: withoutParens, weight: 1 };
    }

    const isMultiWordTarget = comparableTarget.split(" ").filter(Boolean).length > 1;
    const isSingleWordUser = comparableUser.split(" ").filter(Boolean).length === 1;
    if (isMultiWordTarget && isSingleWordUser) {
      return { matched: false, isAlternative: false, primaryAnswer, weight: 0 };
    }

    return { matched: false, isAlternative: false, primaryAnswer, weight: 0 };
  }

  function isAnswerMatch(userNorm, targetNorm) {
    return getAnswerMatch(userNorm, targetNorm).matched;
  }

  function shuffleItems(items) {
    const shuffled = items.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function currentLevel() {
    return refs.levelSelect.value;
  }

  function questionTranslationOverride(question, level = currentLevel()) {
    if (!question || typeof question.id !== "number") return "";
    return QUESTION_TRANSLATION_OVERRIDES[`${level}:${question.id}`] || "";
  }

  function orderedQuestionsForLevel(level) {
    const src = allLevels[level];
    if (!Array.isArray(src)) return [];
    return src.slice().sort((a, b) => a.id - b.id);
  }

  function grammarTopicsForLevel(level) {
    const topics = GRAMMAR_TOPICS[level] || [];
    const questions = orderedQuestionsForLevel(level);
    if (!questions.length) return [];

    return topics
      .map((topic) => {
        const count = questions.filter((q) => q.id >= topic.from && q.id <= topic.to).length;
        return { ...topic, count };
      })
      .filter((topic) => topic.count > 0);
  }

  function currentGrammarTopic() {
    return refs.grammarTopic.value || ALL_GRAMMAR_TOPICS_VALUE;
  }

  function selectedGrammarTopicForLevel(level = currentLevel()) {
    const topicId = currentGrammarTopic();
    if (topicId === ALL_GRAMMAR_TOPICS_VALUE) return null;
    return grammarTopicsForLevel(level).find((topic) => topic.id === topicId) || null;
  }

  function questionsForCurrentGrammarTopic(level = currentLevel()) {
    const questions = orderedQuestionsForLevel(level);
    const topic = selectedGrammarTopicForLevel(level);
    if (!topic) return questions;
    return questions.filter((q) => q.id >= topic.from && q.id <= topic.to);
  }

  function ensureGrammarTopicOptions(level = currentLevel(), preferredValue = refs.grammarTopic.value) {
    const previous = preferredValue || ALL_GRAMMAR_TOPICS_VALUE;
    refs.grammarTopic.innerHTML = "";

    const allOpt = document.createElement("option");
    allOpt.value = ALL_GRAMMAR_TOPICS_VALUE;
    allOpt.textContent = "Все темы";
    refs.grammarTopic.appendChild(allOpt);

    grammarTopicsForLevel(level).forEach((topic) => {
      const opt = document.createElement("option");
      opt.value = topic.id;
      opt.textContent = `${topic.title} (${topic.count})`;
      refs.grammarTopic.appendChild(opt);
    });

    const hasPrevious = Array.from(refs.grammarTopic.options).some((opt) => opt.value === previous);
    refs.grammarTopic.value = hasPrevious ? previous : ALL_GRAMMAR_TOPICS_VALUE;
  }

  function pickSession() {
    return questionsForCurrentGrammarTopic();
  }

  function setFeedback(text, ok) {
    refs.feedback.textContent = text;
    refs.feedback.classList.remove("ok", "bad");
    if (ok === true) {
      refs.feedback.classList.add("ok");
    }
    if (ok === false) {
      refs.feedback.classList.add("bad");
    }
  }

  function saveProgress() {
    try {
      const payload = {
        mode: currentMode,
        level: currentLevel(),
        grammarTopic: currentGrammarTopic(),
        autoSpeakCorrect: state.autoSpeakCorrect,
        idx: state.idx,
        correct: state.correct,
        wrong: state.wrong,
        vocabulary: {
          topic: refs.vocabTopic.value,
          autoSpeakCorrect: refs.autoSpeakCorrectVocab.checked,
          order: vocabState.session.map((item) => item && item.id).filter((id) => id != null),
          idx: vocabState.idx,
          correct: vocabState.correct,
          wrong: vocabState.wrong,
        },
        listening: {
          topic: refs.listeningTopic.value,
          rate: refs.listeningRate.value,
          autoNext: refs.listeningAutoNext.checked,
          order: listeningState.session.map((item) => item && item.id).filter((id) => id != null),
          idx: listeningState.idx,
          correct: listeningState.correct,
          wrong: listeningState.wrong,
        },
        theory: {
          topic: refs.theoryTopic.value,
        },
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (_error) {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }

  function clearAutoNextTimer() {
    if (state.autoNextTimer) {
      window.clearTimeout(state.autoNextTimer);
      state.autoNextTimer = null;
    }
    stopSpeech();
  }

  function restoreProgress() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return false;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return false;
      }

      const level = parsed.level && allLevels[parsed.level] ? parsed.level : levelNames[0];
      if (level) refs.levelSelect.value = level;
      ensureGrammarTopicOptions(level, parsed.grammarTopic);
      const session = questionsForCurrentGrammarTopic(level);

      if (!session.length) {
        return false;
      }

      const idx = Math.max(0, Math.min(asNumber(parsed.idx, 0), session.length - 1));
      const correct = Math.max(0, asNumber(parsed.correct, 0));
      const wrong = Math.max(0, asNumber(parsed.wrong, 0));
      state.autoSpeakCorrect = parsed.autoSpeakCorrect !== false;
      refs.autoSpeakCorrect.checked = state.autoSpeakCorrect;

      state.session = session;
      state.idx = idx;
      state.correct = correct;
      state.wrong = wrong;
      restoreVocabProgress(parsed.vocabulary);
      restoreListeningProgress(parsed.listening);
      restoreTheoryProgress(parsed.theory);
      if (parsed.mode === 'vocabulary' || parsed.mode === 'theory' || parsed.mode === 'listening') {
        currentMode = parsed.mode;
      }
      return true;
    } catch (_error) {
      return false;
    }
  }

  function currentQuestion() {
    return state.session[state.idx] || null;
  }

  function displayPrompt(prompt) {
    return String(prompt || "").replace(/\.{3,}/g, (match, offset, source) => {
      const prevChar = offset > 0 ? source[offset - 1] : "";
      const nextChar = source[offset + match.length] || "";
      const needsSpaceBefore = /[A-Za-z0-9'"]/.test(prevChar);
      const needsSpaceAfter = /[A-Za-z0-9'"]/.test(nextChar);
      return `${needsSpaceBefore ? " " : ""}____${needsSpaceAfter ? " " : ""}`;
    });
  }

  function fillPromptWithAnswer(prompt, answer) {
    const basePrompt = String(prompt || "").trim();
    const resolvedAnswer = String(answer || "").trim();
    if (!basePrompt || !resolvedAnswer) return basePrompt;
    if (/\.{3,}/.test(basePrompt)) {
      return basePrompt.replace(/\.{3,}/g, (match, offset, source) => {
        const prevChar = offset > 0 ? source[offset - 1] : "";
        const nextChar = source[offset + match.length] || "";
        const needsSpaceBefore = /[A-Za-z0-9'"]/.test(prevChar);
        const needsSpaceAfter = /[A-Za-z0-9'"]/.test(nextChar);
        return `${needsSpaceBefore ? " " : ""}${resolvedAnswer}${needsSpaceAfter ? " " : ""}`;
      });
    }
    return basePrompt;
  }

  function renderQuestionText(prompt) {
    refs.questionText.textContent = displayPrompt(prompt);
  }

  function setQuestionTranslation(text) {
    refs.questionTranslation.textContent = text;
  }

  function setSelectedSentenceForSpeech(sentence) {
    const normalized = String(sentence || "").trim();
    state.selectedSentenceForSpeech = normalized;
    refs.speakWordBtn.disabled = !normalized;
  }

  function buildEnglishUtterance(text, options = {}) {
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      return null;
    }

    const normalized = String(text || "").trim();
    if (!normalized) return null;

    const utterance = new window.SpeechSynthesisUtterance(normalized);
    const voices = state.speechVoices.length ? state.speechVoices : window.speechSynthesis.getVoices();
    const preferredVoice = pickPreferredEnglishVoice(voices);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }
    utterance.rate = Number.isFinite(Number(options.rate)) ? Number(options.rate) : 0.9;
    utterance.pitch = 1;
    return utterance;
  }

  function stopSpeech() {
    state.speechPlaybackToken += 1;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function speakEnglishText(text, { onComplete, rate } = {}) {
    const utterance = buildEnglishUtterance(text, { rate });
    if (!utterance) {
      return false;
    }

    const token = state.speechPlaybackToken + 1;
    state.speechPlaybackToken = token;

    const finish = () => {
      if (token !== state.speechPlaybackToken) return;
      if (typeof onComplete === "function") {
        onComplete();
      }
    };

    utterance.addEventListener("end", finish, { once: true });
    utterance.addEventListener("error", finish, { once: true });

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function refreshSpeechVoices() {
    if (!("speechSynthesis" in window)) {
      state.speechVoices = [];
      return;
    }
    state.speechVoices = window.speechSynthesis.getVoices() || [];
  }

  function pickPreferredEnglishVoice(voices) {
    if (!Array.isArray(voices) || !voices.length) return null;

    const preferredNamePattern = /(Google US English|Samantha|Alex|Daniel|Karen|Moira|Tessa|Serena|Jenny|Aria|Guy|Libby)/i;
    const lowQualityPattern = /(eSpeak|compact|festival|pico|robot)/i;

    const candidates = voices
      .filter((voice) => /^en[-_]/i.test(voice.lang || ""))
      .map((voice) => {
        let score = 0;
        if (/^en[-_]US/i.test(voice.lang || "")) score += 50;
        if (/^en[-_]GB/i.test(voice.lang || "")) score += 40;
        if (voice.localService) score += 8;
        if (preferredNamePattern.test(voice.name || "")) score += 25;
        if (/(Neural|Natural|Enhanced|Premium)/i.test(voice.name || "")) score += 12;
        if (lowQualityPattern.test(voice.name || "")) score -= 30;
        return { voice, score };
      })
      .sort((a, b) => b.score - a.score);

    return candidates.length ? candidates[0].voice : null;
  }

  function speakSelectedSentence() {
    const sentence = state.selectedSentenceForSpeech;
    if (!sentence) return;

    const started = speakEnglishText(sentence, {
      rate: currentMode === 'listening' ? refs.listeningRate.value : undefined,
    });
    if (!started) {
      setQuestionTranslation("Озвучка недоступна в этом браузере.");
    }
  }

  function extractSentenceTranslation(payload) {
    if (payload && Array.isArray(payload.sentences)) {
      return payload.sentences
        .map((item) => String((item && item.trans) || "").trim())
        .filter(Boolean)
        .join(" ")
        .trim();
    }

    if (Array.isArray(payload) && Array.isArray(payload[0])) {
      return payload[0]
        .map((chunk) => (Array.isArray(chunk) ? String(chunk[0] || "") : ""))
        .join("")
        .trim();
    }

    return "";
  }

  async function fetchTranslationPayload(text) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&dt=bd&dj=1&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Translation request failed: ${response.status}`);
    }
    return response.json();
  }

  async function getSentenceTranslation(sentence) {
    const cacheKey = `sentence:${sentence}`;
    const cached = state.translationCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const payload = await fetchTranslationPayload(sentence);
    const translated = extractSentenceTranslation(payload);
    if (translated) {
      state.translationCache.set(cacheKey, translated);
    }
    return translated;
  }

  async function showQuestionTranslation(question) {
    const resolvedPrompt = fillPromptWithAnswer(question && question.prompt, question && question.answer);
    setSelectedSentenceForSpeech(resolvedPrompt);
    if (!resolvedPrompt) {
      setQuestionTranslation("");
      return;
    }

    const overrideTranslation = questionTranslationOverride(question);
    if (overrideTranslation) {
      setQuestionTranslation(overrideTranslation);
      return;
    }

    if (question && typeof question.translation === "string" && question.translation.trim()) {
      setQuestionTranslation(question.translation.trim());
      return;
    }

    const reqId = state.sentenceTranslationRequestId + 1;
    state.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("Перевожу предложение...");

    try {
      const translated = await getSentenceTranslation(resolvedPrompt);
      if (reqId !== state.sentenceTranslationRequestId) return;
      if (!translated) {
        setQuestionTranslation("Не нашел перевод предложения.");
        return;
      }
      setQuestionTranslation(translated);
    } catch (_error) {
      if (reqId !== state.sentenceTranslationRequestId) return;
      setQuestionTranslation("Не удалось получить перевод предложения. Проверь интернет.");
    }
  }

  async function showVocabSentenceTranslation(item) {
    const sentence = item && item.example ? item.example : "";
    setSelectedSentenceForSpeech(sentence);
    if (!sentence) {
      setQuestionTranslation("");
      return;
    }

    const formatVocabTranslation = (translation) => {
      const sentenceTranslation = String(translation || "").trim();
      const wordTranslation = String((item && item.translation) || "").trim();
      if (!sentenceTranslation) return "";
      return wordTranslation ? `${sentenceTranslation} (${wordTranslation})` : sentenceTranslation;
    };

    if (item && typeof item.sentenceTranslation === "string" && item.sentenceTranslation.trim()) {
      setQuestionTranslation(formatVocabTranslation(item.sentenceTranslation));
      return;
    }

    const reqId = state.sentenceTranslationRequestId + 1;
    state.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("Перевожу предложение...");

    try {
      const translated = await getSentenceTranslation(sentence);
      if (reqId !== state.sentenceTranslationRequestId || currentMode !== 'vocabulary') return;
      if (!translated) {
        setQuestionTranslation("Не нашел перевод предложения.");
        return;
      }
      setQuestionTranslation(formatVocabTranslation(translated));
    } catch (_error) {
      if (reqId !== state.sentenceTranslationRequestId || currentMode !== 'vocabulary') return;
      setQuestionTranslation("Не удалось получить перевод предложения. Проверь интернет.");
    }
  }

  function hideSessionComplete() {
    refs.sessionComplete.hidden = true;
  }

  function queueNextQuestionAfterCorrect(question) {
    clearAutoNextTimer();

    const resolvedPrompt = fillPromptWithAnswer(question && question.prompt, question && question.answer);
    if (state.autoSpeakCorrect && resolvedPrompt) {
      const started = speakEnglishText(resolvedPrompt, {
        onComplete: () => {
          nextQuestion();
          saveProgress();
        },
      });
      if (started) {
        return;
      }
    }

    state.autoNextTimer = window.setTimeout(() => {
      state.autoNextTimer = null;
      nextQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  function pickVocabSession() {
    const topicValue = refs.vocabTopic.value;
    if (topicValue === 'all') {
      return vocabTopics.flatMap(t => shuffleItems(t.words || []));
    } else {
      const topic = vocabTopics.find(t => t.topic === topicValue);
      return shuffleItems(topic ? (topic.words || []) : []);
    }
  }

  function vocabWordsForTopicValue(topicValue) {
    if (topicValue === 'all') {
      return vocabTopics.flatMap(t => t.words || []);
    }
    const topic = vocabTopics.find(t => t.topic === topicValue);
    return topic ? (topic.words || []).slice() : [];
  }

  function currentVocabTopicTitle(topicValue = refs.vocabTopic.value) {
    return topicValue === 'all' ? 'Все темы' : topicValue;
  }

  function appendVocabListItem(parent, item, index) {
    const row = document.createElement('article');
    row.className = 'vocab-list-item';

    const number = document.createElement('span');
    number.className = 'vocab-list-number';
    number.textContent = String(index + 1);

    const content = document.createElement('div');
    content.className = 'vocab-list-item-content';

    const word = document.createElement('div');
    word.className = 'vocab-list-word';
    word.textContent = String((item && (item.word || item.infinitive || item.answer)) || '').trim() || 'Без слова';

    const translation = document.createElement('div');
    translation.className = 'vocab-list-translation';
    translation.textContent = String((item && item.translation) || '').trim();

    content.appendChild(word);
    if (translation.textContent) {
      content.appendChild(translation);
    }

    if (item && item.example) {
      const example = document.createElement('div');
      example.className = 'vocab-list-example';
      example.textContent = item.example;
      content.appendChild(example);
    }

    row.appendChild(number);
    row.appendChild(content);
    parent.appendChild(row);
  }

  function showVocabList() {
    ensureVocabTopicOptions();
    const topicValue = refs.vocabTopic.value;
    const words = vocabWordsForTopicValue(topicValue);

    refs.vocabListTitle.textContent = 'Список слов';
    refs.vocabListSubtitle.textContent = `${currentVocabTopicTitle(topicValue)} · ${words.length} слов`;
    refs.vocabListBody.innerHTML = '';

    if (!words.length) {
      const empty = document.createElement('p');
      empty.className = 'vocab-list-empty';
      empty.textContent = 'В этой теме пока нет слов.';
      refs.vocabListBody.appendChild(empty);
    } else {
      words.forEach((item, index) => appendVocabListItem(refs.vocabListBody, item, index));
    }

    refs.vocabListOverlay.hidden = false;
    refs.vocabListClose.focus();
  }

  function hideVocabList() {
    refs.vocabListOverlay.hidden = true;
  }

  function restoreVocabSessionFromOrder(order, topicValue) {
    if (!Array.isArray(order) || !order.length) return [];

    const wordsById = new Map(
      vocabWordsForTopicValue(topicValue)
        .filter((item) => item && item.id != null)
        .map((item) => [String(item.id), item])
    );
    const restored = order
      .map((id) => wordsById.get(String(id)))
      .filter(Boolean);

    return restored.length === wordsById.size ? restored : [];
  }

  function ensureVocabTopicOptions() {
    if (refs.vocabTopic.options.length > 0) return;

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Все темы';
    refs.vocabTopic.appendChild(allOpt);
    vocabTopics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.topic;
      opt.textContent = t.topic;
      refs.vocabTopic.appendChild(opt);
    });
  }

  function restoreVocabProgress(saved) {
    ensureVocabTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.vocabTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.vocabTopic.value = topicValue;
    }

    refs.autoSpeakCorrectVocab.checked = saved.autoSpeakCorrect !== false;

    vocabState.session = restoreVocabSessionFromOrder(saved.order, refs.vocabTopic.value);
    if (!vocabState.session.length) {
      vocabState.session = pickVocabSession();
    }
    vocabState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, vocabState.session.length - 1)));
    vocabState.correct = Math.max(0, asNumber(saved.correct, 0));
    vocabState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(vocabState.session.length);
  }

  function renderVocab() {
    hideSessionComplete();
    stopSpeech();
    state.sentenceTranslationRequestId += 1;

    const w = vocabState.session[vocabState.idx];
    if (!w) {
      refs.questionText.textContent = 'Слова не найдены.';
      refs.questionTranslation.textContent = '';
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${vocabState.idx + 1} / ${vocabState.session.length}`;
    refs.correctCount.textContent = String(vocabState.correct);
    refs.wrongCount.textContent = String(vocabState.wrong);

    refs.vocabModeLabel.textContent = 'Переведите на английский';
    refs.speakWordBtn.textContent = 'Озвучить предложение';
    renderQuestionText(w.translation);
    setSelectedSentenceForSpeech(primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word);
    refs.questionTranslation.classList.remove('vocab-hint');
    setQuestionTranslation('');

    refs.answerInput.value = '';
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
    refs.answerInput.focus();
    setFeedback('', null);
    vocabState.checkedCurrent = false;
    vocabState.wrongCounted = false;
  }

  function checkVocabAnswer() {
    const w = vocabState.session[vocabState.idx];
    if (!w || vocabState.checkedCurrent) return;

    const user = normalize(refs.answerInput.value);
    if (!user) {
      setFeedback('Сначала впиши ответ.', false);
      return;
    }

    const wordOptions = answerOptionsForVocabItem(w);
    const wordTarget = primaryAnswerText(wordOptions) || w.infinitive || w.word;
    const target = normalize(wordTarget);
    const match = getAnswerMatch(user, target, wordOptions);
    if (match.matched) {
      if (!vocabState.wrongCounted) {
        vocabState.correct += 1;
        refs.correctCount.textContent = String(vocabState.correct);
      }
      vocabState.checkedCurrent = true;
      playCorrectSound();
      flashCorrect();
      setFeedback(match.isAlternative ? `Верно! (а можно еще: ${match.primaryAnswer})` : 'Верно!', true);
      saveProgress();
      queueVocabNextAfterCorrect(w);
    } else {
      if (!vocabState.wrongCounted) {
        vocabState.wrong += 1;
        vocabState.wrongCounted = true;
        refs.wrongCount.textContent = String(vocabState.wrong);
      }
      playWrongSound();
      const correctAnswer = primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word;
      setFeedback('Почти. Правильный ответ: ' + correctAnswer, false);
      refs.answerInput.value = '';
      refs.answerInput.focus();
      saveProgress();
    }
  }

  function nextVocabQuestion() {
    if (!vocabState.session.length) return;
    vocabState.idx += 1;
    if (vocabState.idx >= vocabState.session.length) {
      vocabState.idx = vocabState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }
    renderVocab();
    saveProgress();
  }

  function queueVocabNextAfterCorrect(w) {
    clearAutoNextTimer();
    const textToSpeak = primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word;
    if (state.autoSpeakCorrect && textToSpeak) {
      const started = speakEnglishText(textToSpeak, {
        onComplete: () => {
          nextVocabQuestion();
          saveProgress();
        },
      });
      if (started) return;
    }
    state.autoNextTimer = window.setTimeout(() => {
      state.autoNextTimer = null;
      nextVocabQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  function allListeningItemsForTopicValue(topicValue) {
    const topics = topicValue === 'all'
      ? LISTENING_TOPICS
      : LISTENING_TOPICS.filter((topic) => topic.id === topicValue);

    return topics.flatMap((topic) =>
      (topic.items || []).map((text, index) => ({
        id: `${topic.id}:${index}`,
        topicId: topic.id,
        topicTitle: topic.title,
        text,
      }))
    );
  }

  function pickListeningSession() {
    return shuffleItems(allListeningItemsForTopicValue(refs.listeningTopic.value || 'all'));
  }

  function restoreListeningSessionFromOrder(order, topicValue) {
    if (!Array.isArray(order) || !order.length) return [];

    const itemsById = new Map(
      allListeningItemsForTopicValue(topicValue || 'all').map((item) => [String(item.id), item])
    );
    const restored = order
      .map((id) => itemsById.get(String(id)))
      .filter(Boolean);

    return restored.length === itemsById.size ? restored : [];
  }

  function ensureListeningTopicOptions() {
    if (refs.listeningTopic.options.length > 0) return;

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Все темы';
    refs.listeningTopic.appendChild(allOpt);

    LISTENING_TOPICS.forEach((topic) => {
      const opt = document.createElement('option');
      opt.value = topic.id;
      opt.textContent = topic.title;
      refs.listeningTopic.appendChild(opt);
    });
  }

  function restoreListeningProgress(saved) {
    ensureListeningTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.listeningTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.listeningTopic.value = topicValue;
    }

    const rate = String(saved.rate || "0.85");
    const hasRate = Array.from(refs.listeningRate.options).some((opt) => opt.value === rate);
    refs.listeningRate.value = hasRate ? rate : "0.85";
    refs.listeningAutoNext.checked = saved.autoNext === true;

    listeningState.session = restoreListeningSessionFromOrder(saved.order, refs.listeningTopic.value);
    if (!listeningState.session.length) {
      listeningState.session = pickListeningSession();
    }
    listeningState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, listeningState.session.length - 1)));
    listeningState.correct = Math.max(0, asNumber(saved.correct, 0));
    listeningState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(listeningState.session.length);
  }

  function currentListeningItem() {
    return listeningState.session[listeningState.idx] || null;
  }

  function listeningWords(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/sev one/g, "sev1")
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/[^a-z0-9']+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function listeningWordTokens(text) {
    const normalized = expandListeningContractions(String(text || "").replace(/\bsev one\b/gi, "sev1"));
    return (normalized.match(/[A-Za-zА-Яа-я0-9']+/g) || [])
      .map((word) => ({ text: word, norm: normalizeListeningWord(word) }))
      .filter((word) => word.norm);
  }

  function expandListeningContractions(text) {
    return String(text || "")
      .replace(/\bI'm\b/gi, "I am")
      .replace(/\byou're\b/gi, "you are")
      .replace(/\bhe's\b/gi, "he is")
      .replace(/\bshe's\b/gi, "she is")
      .replace(/\bit's\b/gi, "it is")
      .replace(/\bwe're\b/gi, "we are")
      .replace(/\bthey're\b/gi, "they are")
      .replace(/\bI'll\b/gi, "I will")
      .replace(/\byou'll\b/gi, "you will")
      .replace(/\bhe'll\b/gi, "he will")
      .replace(/\bshe'll\b/gi, "she will")
      .replace(/\bit'll\b/gi, "it will")
      .replace(/\bwe'll\b/gi, "we will")
      .replace(/\bthey'll\b/gi, "they will")
      .replace(/\bI've\b/gi, "I have")
      .replace(/\byou've\b/gi, "you have")
      .replace(/\bwe've\b/gi, "we have")
      .replace(/\bthey've\b/gi, "they have")
      .replace(/\bdon't\b/gi, "do not")
      .replace(/\bdoesn't\b/gi, "does not")
      .replace(/\bdidn't\b/gi, "did not")
      .replace(/\bcan't\b/gi, "can not")
      .replace(/\bwon't\b/gi, "will not")
      .replace(/\bhaven't\b/gi, "have not")
      .replace(/\bhasn't\b/gi, "has not")
      .replace(/\bhadn't\b/gi, "had not")
      .replace(/\bisn't\b/gi, "is not")
      .replace(/\baren't\b/gi, "are not")
      .replace(/\bwasn't\b/gi, "was not")
      .replace(/\bweren't\b/gi, "were not")
      .replace(/\bshouldn't\b/gi, "should not")
      .replace(/\bcouldn't\b/gi, "could not")
      .replace(/\bwouldn't\b/gi, "would not");
  }

  function normalizeListeningWord(word) {
    const latinLookalikes = {
      а: "a",
      е: "e",
      о: "o",
      р: "p",
      с: "c",
      х: "x",
      у: "y",
      к: "k",
      А: "a",
      Е: "e",
      О: "o",
      Р: "p",
      С: "c",
      Х: "x",
      У: "y",
      К: "k",
    };

    return String(word || "")
      .replace(/[аеорсхукАЕОРСХУК]/g, (char) => latinLookalikes[char] || char)
      .toLowerCase()
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/[^a-z0-9']+/g, "")
      .trim();
  }

  function compareListeningAnswer(userText, targetText) {
    const userWords = listeningWordTokens(userText);
    const targetWords = listeningWordTokens(targetText);
    const rows = targetWords.length + 1;
    const cols = userWords.length + 1;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i += 1) dp[i][0] = i;
    for (let j = 0; j < cols; j += 1) dp[0][j] = j;

    for (let i = 1; i < rows; i += 1) {
      for (let j = 1; j < cols; j += 1) {
        const cost = targetWords[i - 1].norm === userWords[j - 1].norm ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    const targetMarks = [];
    let i = targetWords.length;
    let j = userWords.length;

    while (i > 0 || j > 0) {
      if (
        i > 0 &&
        j > 0 &&
        dp[i][j] === dp[i - 1][j - 1] + (targetWords[i - 1].norm === userWords[j - 1].norm ? 0 : 1)
      ) {
        targetMarks.unshift({
          word: targetWords[i - 1].text,
          ok: targetWords[i - 1].norm === userWords[j - 1].norm,
          heard: userWords[j - 1].text,
        });
        i -= 1;
        j -= 1;
      } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        targetMarks.unshift({ word: targetWords[i - 1].text, ok: false, heard: "" });
        i -= 1;
      } else {
        j -= 1;
      }
    }

    const matched = targetMarks.filter((mark) => mark.ok).length;
    const accuracy = targetWords.length ? matched / targetWords.length : 0;
    return { matched, total: targetWords.length, accuracy, targetMarks };
  }

  function renderListeningDiff(result) {
    const parts = result.targetMarks.map((mark) => {
      const cls = mark.ok ? "listening-word listening-word--ok" : "listening-word listening-word--miss";
      return `<span class="${cls}">${mark.word}</span>`;
    });
    refs.hint.innerHTML = `<span class="listening-diff">${parts.join(" ")}</span>`;
  }

  function maskedListeningText(text, revealEvery = 3) {
    return String(text || "")
      .split(/\s+/)
      .map((word, index) => {
        const clean = word.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
        if (!clean) return word;
        if (index % revealEvery === 0 || clean.length <= 2) return word;
        return word.replace(/[A-Za-z0-9']/g, "_");
      })
      .join(" ");
  }

  function speakCurrentListeningItem() {
    const item = currentListeningItem();
    if (!item) return;
    const started = speakEnglishText(item.text, { rate: refs.listeningRate.value });
    if (!started) {
      setFeedback("Озвучка недоступна в этом браузере.", false);
    }
  }

  function renderListening() {
    hideSessionComplete();
    stopSpeech();
    state.sentenceTranslationRequestId += 1;

    const item = currentListeningItem();
    if (!item) {
      refs.questionText.textContent = "Фразы не найдены.";
      setQuestionTranslation("");
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${listeningState.idx + 1} / ${listeningState.session.length}`;
    refs.correctCount.textContent = String(listeningState.correct);
    refs.wrongCount.textContent = String(listeningState.wrong);
    refs.vocabModeLabel.textContent = "Слушайте и запишите фразу";
    refs.speakWordBtn.textContent = "Повторить фразу";
    refs.questionText.textContent = "Нажмите «Слушать» и напишите, что услышали.";
    setQuestionTranslation(`${item.topicTitle} · ${Math.round(Number(refs.listeningRate.value) * 100)}% speed`);
    setSelectedSentenceForSpeech(item.text);

    refs.answerInput.value = "";
    refs.answerInput.placeholder = "Напишите услышанную фразу";
    refs.answerInput.focus();
    refs.hint.textContent = "";
    setFeedback("", null);
    listeningState.checkedCurrent = false;
    listeningState.wrongCounted = false;
    listeningState.hintLevel = 0;

    window.setTimeout(speakCurrentListeningItem, 120);
  }

  function checkListeningAnswer() {
    const item = currentListeningItem();
    if (!item) return;

    const user = refs.answerInput.value.trim();
    if (!user) {
      refs.listenBtn.click();
      return;
    }

    const result = compareListeningAnswer(user, item.text);
    const pct = Math.round(result.accuracy * 100);
    const passed = result.accuracy >= 0.82;
    const wasChecked = listeningState.checkedCurrent;

    if (passed) {
      if (!wasChecked && !listeningState.wrongCounted) {
        listeningState.correct += 1;
        refs.correctCount.textContent = String(listeningState.correct);
      }
      listeningState.checkedCurrent = true;
      playCorrectSound();
      flashCorrect();
      setFeedback(`Хорошо! Понял ${pct}% слов.`, true);
      renderListeningDiff(result);
      if (!wasChecked && refs.listeningAutoNext.checked) {
        state.autoNextTimer = window.setTimeout(() => {
          state.autoNextTimer = null;
          nextListeningQuestion();
          saveProgress();
        }, 1200);
      }
    } else {
      if (!wasChecked && !listeningState.wrongCounted) {
        listeningState.wrong += 1;
        listeningState.wrongCounted = true;
        refs.wrongCount.textContent = String(listeningState.wrong);
      }
      playWrongSound();
      setFeedback("Красным подсвечены места, где текст отличается от ответа.", false);
      renderListeningDiff(result);
    }

    saveProgress();
  }

  function nextListeningQuestion() {
    if (!listeningState.session.length) return;
    clearAutoNextTimer();
    listeningState.idx += 1;
    if (listeningState.idx >= listeningState.session.length) {
      listeningState.idx = listeningState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }
    renderListening();
    saveProgress();
  }

  function previousListeningQuestion() {
    if (listeningState.idx <= 0) return;
    clearAutoNextTimer();
    listeningState.idx -= 1;
    renderListening();
    saveProgress();
  }

  function showListeningHint(level) {
    const item = currentListeningItem();
    if (!item) return;
    listeningState.hintLevel = level;

    if (listeningState.hintLevel === 1) {
      const firstWord = listeningWords(item.text)[0] || "";
      refs.hint.textContent = firstWord ? `Первое слово: ${firstWord}` : "";
    } else if (listeningState.hintLevel === 2) {
      refs.hint.textContent = maskedListeningText(item.text);
    } else {
      refs.hint.textContent = item.text;
    }
  }

  function ensureTheoryTopicOptions() {
    if (refs.theoryTopic.options.length > 0) return;

    THEORY_TOPICS.forEach((topic) => {
      const opt = document.createElement('option');
      opt.value = topic.id;
      opt.textContent = topic.title;
      refs.theoryTopic.appendChild(opt);
    });
  }

  function restoreTheoryProgress(saved) {
    ensureTheoryTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.theoryTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.theoryTopic.value = topicValue;
      return true;
    }
    return false;
  }

  function appendTheoryList(parent, items) {
    const list = document.createElement('ul');
    list.className = 'theory-list';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    parent.appendChild(list);
  }

  function appendTheoryExamples(parent, examples) {
    const list = document.createElement('div');
    list.className = 'theory-examples';
    examples.forEach(([english, russian]) => {
      const row = document.createElement('div');
      row.className = 'theory-example';

      const phrase = document.createElement('div');
      phrase.className = 'theory-example-en';
      phrase.textContent = english;

      const translation = document.createElement('div');
      translation.className = 'theory-example-ru';
      translation.textContent = russian;

      row.appendChild(phrase);
      row.appendChild(translation);
      list.appendChild(row);
    });
    parent.appendChild(list);
  }

  function renderTheory() {
    hideSessionComplete();
    clearAutoNextTimer();
    ensureTheoryTopicOptions();

    const topic = THEORY_TOPICS.find((item) => item.id === refs.theoryTopic.value) || THEORY_TOPICS[0];
    if (!topic) {
      refs.theoryTitle.textContent = 'Теория не найдена';
      refs.theoryBody.textContent = '';
      return;
    }

    refs.theoryTopic.value = topic.id;
    refs.theoryTitle.textContent = topic.title;
    refs.theoryBody.innerHTML = '';

    if (topic.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'theory-subtitle';
      subtitle.textContent = topic.subtitle;
      refs.theoryBody.appendChild(subtitle);
    }

    topic.sections.forEach((section) => {
      const block = document.createElement('section');
      block.className = 'theory-section';

      const heading = document.createElement('h3');
      heading.textContent = section.title;
      block.appendChild(heading);

      if (section.items) appendTheoryList(block, section.items);
      if (section.examples) appendTheoryExamples(block, section.examples);

      refs.theoryBody.appendChild(block);
    });
  }

  function switchMode(mode) {
    currentMode = mode;
    refs.tabGrammar.classList.toggle('mode-tab--active', mode === 'grammar');
    refs.tabTheory.classList.toggle('mode-tab--active', mode === 'theory');
    refs.tabVocab.classList.toggle('mode-tab--active', mode === 'vocabulary');
    refs.tabListening.classList.toggle('mode-tab--active', mode === 'listening');
    refs.vocabTabGroup.classList.toggle('vocab-active', mode === 'vocabulary');
    refs.controlsGrammar.hidden = mode !== 'grammar';
    refs.controlsTheory.hidden = mode !== 'theory';
    refs.controlsVocab.hidden = mode !== 'vocabulary';
    refs.controlsListening.hidden = mode !== 'listening';
    refs.statsSection.hidden = mode === 'theory';
    refs.cardContent.hidden = mode === 'theory';
    refs.theoryPanel.hidden = mode !== 'theory';
    refs.optionsSection.hidden = mode !== 'grammar';
    refs.questionMeta.hidden = mode !== 'grammar';
    refs.vocabModeLabel.hidden = mode !== 'vocabulary' && mode !== 'listening';
    refs.listeningActions.hidden = mode !== 'listening';
    refs.speakWordBtn.hidden = mode === 'listening';

    if (mode === 'theory') {
      renderTheory();
    } else if (mode === 'vocabulary') {
      ensureVocabTopicOptions();
      state.autoSpeakCorrect = refs.autoSpeakCorrectVocab.checked;
      if (!vocabState.session.length) {
        vocabState.session = pickVocabSession();
        vocabState.idx = 0;
        vocabState.correct = 0;
        vocabState.wrong = 0;
      }
      renderVocab();
    } else if (mode === 'listening') {
      ensureListeningTopicOptions();
      if (!listeningState.session.length) {
        listeningState.session = pickListeningSession();
        listeningState.idx = 0;
        listeningState.correct = 0;
        listeningState.wrong = 0;
      }
      refs.questionTranslation.classList.remove('vocab-hint');
      renderListening();
    } else {
      refs.questionTranslation.classList.remove('vocab-hint');
      render();
    }
    saveProgress();
  }

  function render() {
    hideSessionComplete();
    stopSpeech();
    state.sentenceTranslationRequestId += 1;

    const q = currentQuestion();
    if (!q) {
      refs.questionText.textContent = "Вопросы не найдены.";
      setQuestionTranslation("");
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${state.idx + 1} / ${state.session.length}`;
    refs.correctCount.textContent = String(state.correct);
    refs.wrongCount.textContent = String(state.wrong);
    refs.questionId.textContent = String(q.id);
    refs.speakWordBtn.textContent = 'Озвучить предложение';
    renderQuestionText(q.prompt);
    setQuestionTranslation("");
    setSelectedSentenceForSpeech(fillPromptWithAnswer(q.prompt, q.answer));
    refs.optionA.textContent = `a) ${q.options.a}`;
    refs.optionB.textContent = `b) ${q.options.b}`;
    refs.optionC.textContent = `c) ${q.options.c}`;

    refs.answerInput.value = "";
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
    refs.answerInput.focus();
    refs.hint.textContent = "";
    setFeedback("", null);
    state.checkedCurrent = false;
    state.wrongCounted = false;
    void showQuestionTranslation(q);
  }

  function showSessionComplete() {
    const stats = currentMode === 'vocabulary'
      ? vocabState
      : (currentMode === 'listening' ? listeningState : state);
    const total = stats.session.length;
    const correct = stats.correct;
    const missed = Math.max(0, total - stats.correct - stats.wrong);
    if (missed > 0) {
      stats.wrong += missed;
    }
    const wrong = stats.wrong;
    const pct = total > 0 ? Math.min(100, Math.max(0, Math.round((correct / total) * 100))) : 0;

    // Обновляем стат-бар
    refs.position.textContent = `${total} / ${total}`;
    refs.correctCount.textContent = String(correct);
    refs.wrongCount.textContent = String(wrong);

    // Заполняем попап
    refs.scCorrect.textContent = String(correct);
    refs.scWrong.textContent = String(wrong);
    refs.scPct.textContent = pct + "%";

    // Показываем с перезапуском анимации
    hideSessionComplete();
    void refs.sessionComplete.offsetWidth;
    refs.sessionComplete.hidden = false;
  }

  function nextQuestion() {
    if (!state.session.length) {
      return;
    }

    state.idx += 1;
    if (state.idx >= state.session.length) {
      state.idx = state.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }

    render();
  }

  refs.newSession.addEventListener("click", () => {
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  refs.checkBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { checkVocabAnswer(); return; }
    if (currentMode === 'listening') { checkListeningAnswer(); return; }
    const q = currentQuestion();
    if (!q || state.checkedCurrent) {
      return;
    }

    const user = normalize(refs.answerInput.value);
    const target = normalize(q.answer);

    if (!user) {
      setFeedback("Сначала впиши ответ.", false);
      return;
    }

    if (isAnswerMatch(user, target)) {
      if (!state.wrongCounted) {
        state.correct += 1;
        refs.correctCount.textContent = String(state.correct);
      }
      state.checkedCurrent = true;
      setFeedback("Верно!", true);
      playCorrectSound();
      flashCorrect();
      queueNextQuestionAfterCorrect(q);
    } else {
      if (!state.wrongCounted) {
        state.wrong += 1;
        state.wrongCounted = true;
        refs.wrongCount.textContent = String(state.wrong);
      }
      setFeedback(`Почти. Правильный ответ: ${q.answer}`, false);
      playWrongSound();
      refs.answerInput.value = '';
      refs.answerInput.focus();
    }

    saveProgress();
  });


  refs.prevBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') {
      clearAutoNextTimer();
      vocabState.idx = Math.max(0, vocabState.idx - 1);
      renderVocab();
      saveProgress();
      return;
    }
    if (currentMode === 'listening') {
      previousListeningQuestion();
      return;
    }
    if (state.idx <= 0) return;
    clearAutoNextTimer();
    state.idx -= 1;
    render();
    saveProgress();
  });

  refs.nextBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { nextVocabQuestion(); return; }
    if (currentMode === 'listening') { nextListeningQuestion(); return; }
    clearAutoNextTimer();
    nextQuestion();
    saveProgress();
  });

  refs.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (currentMode === 'listening' && !normalize(refs.answerInput.value)) {
        event.preventDefault();
        refs.listenBtn.click();
        return;
      }
      if (currentMode === 'vocabulary' && !normalize(refs.answerInput.value)) {
        const shouldSpeak =
          vocabState.idx === state.emptyVocabEnterPromptIdx &&
          refs.answerInput.placeholder === EMPTY_ENTER_SPEAK_PLACEHOLDER;

        if (shouldSpeak) {
          event.preventDefault();
          speakSelectedSentence();
          return;
        }

        state.emptyVocabEnterPromptIdx = vocabState.idx;
        refs.answerInput.placeholder = EMPTY_ENTER_SPEAK_PLACEHOLDER;
        event.preventDefault();
        return;
      } else {
        state.emptyVocabEnterPromptIdx = -1;
        refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
      }
      refs.checkBtn.click();
    }
  });

  refs.answerInput.addEventListener("input", () => {
    state.emptyVocabEnterPromptIdx = -1;
    refs.answerInput.placeholder = currentMode === 'listening'
      ? "Напишите услышанную фразу"
      : DEFAULT_ANSWER_PLACEHOLDER;
  });

  refs.speakWordBtn.addEventListener("click", () => {
    speakSelectedSentence();
  });

  refs.autoSpeakCorrect.addEventListener("change", () => {
    state.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    saveProgress();
  });

  if ("speechSynthesis" in window) {
    refreshSpeechVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
  }

  refs.nextSessionBtn.addEventListener("click", () => {
    hideSessionComplete();
    clearAutoNextTimer();
    if (currentMode === 'vocabulary') {
      vocabState.session = pickVocabSession();
      vocabState.idx = 0;
      vocabState.correct = 0;
      vocabState.wrong = 0;
      renderVocab();
      saveProgress();
      return;
    }
    if (currentMode === 'listening') {
      listeningState.session = pickListeningSession();
      listeningState.idx = 0;
      listeningState.correct = 0;
      listeningState.wrong = 0;
      renderListening();
      saveProgress();
      return;
    }
    refs.newSession.click();
  });

  refs.scCloseBtn.addEventListener("click", () => {
    hideSessionComplete();
  });

  refs.tabGrammar.addEventListener('click', () => switchMode('grammar'));
  refs.tabTheory.addEventListener('click', () => switchMode('theory'));
  refs.tabVocab.addEventListener('click', () => switchMode('vocabulary'));
  refs.tabListening.addEventListener('click', () => switchMode('listening'));

  refs.vocabNewSession.addEventListener('click', () => {
    clearAutoNextTimer();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.vocabShowList.addEventListener('click', () => {
    showVocabList();
  });

  refs.vocabListClose.addEventListener('click', () => {
    hideVocabList();
  });

  refs.vocabListOverlay.addEventListener('click', (event) => {
    if (event.target === refs.vocabListOverlay) {
      hideVocabList();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !refs.vocabListOverlay.hidden) {
      hideVocabList();
    }
  });

  refs.autoSpeakCorrectVocab.addEventListener('change', () => {
    state.autoSpeakCorrect = refs.autoSpeakCorrectVocab.checked;
    saveProgress();
  });

  refs.vocabTopic.addEventListener('change', () => {
    clearAutoNextTimer();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.listenBtn.addEventListener('click', () => {
    speakCurrentListeningItem();
  });

  refs.listeningFirstWord.addEventListener('click', () => {
    showListeningHint(1);
  });

  refs.listeningGaps.addEventListener('click', () => {
    showListeningHint(2);
  });

  refs.listeningShowText.addEventListener('click', () => {
    showListeningHint(3);
  });

  refs.listeningNewSession.addEventListener('click', () => {
    clearAutoNextTimer();
    ensureListeningTopicOptions();
    listeningState.session = pickListeningSession();
    listeningState.idx = 0;
    listeningState.correct = 0;
    listeningState.wrong = 0;
    renderListening();
    saveProgress();
  });

  refs.listeningTopic.addEventListener('change', () => {
    clearAutoNextTimer();
    listeningState.session = pickListeningSession();
    listeningState.idx = 0;
    listeningState.correct = 0;
    listeningState.wrong = 0;
    renderListening();
    saveProgress();
  });

  refs.listeningRate.addEventListener('change', () => {
    saveProgress();
    speakCurrentListeningItem();
  });

  refs.listeningAutoNext.addEventListener('change', () => {
    saveProgress();
  });

  refs.theoryTopic.addEventListener('change', () => {
    renderTheory();
    saveProgress();
  });

  if (!levelNames.length) {
    refs.questionText.textContent =
      "Не удалось загрузить вопросы. Проверь, что рядом есть файл questions.js.";
    refs.checkBtn.disabled = true;
    refs.nextBtn.disabled = true;
    return;
  }

  levelNames.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    refs.levelSelect.appendChild(opt);
  });

  refs.levelSelect.addEventListener("change", () => {
    clearAutoNextTimer();
    ensureGrammarTopicOptions(currentLevel());
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  refs.grammarTopic.addEventListener("change", () => {
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  ensureTheoryTopicOptions();
  ensureGrammarTopicOptions(levelNames[0]);
  const restored = restoreProgress();
  if (!restored) {
    state.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    state.session = pickSession();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    ensureListeningTopicOptions();
    listeningState.session = pickListeningSession();
    saveProgress();
  }
  if (currentMode === 'theory') {
    switchMode('theory');
  } else if (currentMode === 'vocabulary') {
    switchMode('vocabulary');
  } else if (currentMode === 'listening') {
    switchMode('listening');
  } else {
    switchMode('grammar');
  }
})();
