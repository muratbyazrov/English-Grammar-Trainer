(function () {
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
  const GRAMMAR_TOPIC_GROUPS = [
    { id: 'present', title: 'Present — настоящее время', icon: '☀️', pattern: /^(?:present|to-be-present|have-have-got)/i },
    { id: 'past', title: 'Past — прошедшее время', icon: '🕰️', pattern: /^(?:past|to-be-past)/i },
    { id: 'future', title: 'Future — будущее время', icon: '🚀', pattern: /^(?:future|there-will-be-going-to)/i },
    { id: 'passive', title: 'Passive Voice', icon: '🔄', pattern: /^passive-/i },
    { id: 'modals', title: 'Модальные глаголы', icon: '🧩', pattern: /^(?:modals|have-to-could-may)/i },
    { id: 'conditionals', title: 'Условия и придаточные', icon: '🔀', pattern: /conditional|time-clauses/i },
    { id: 'questions', title: 'Вопросы и короткие ответы', icon: '❓', pattern: /tag-questions|short-answers/i },
    { id: 'verbs', title: 'Глагольные конструкции', icon: '⚙️', pattern: /verb-pattern|infinitive|gerund/i },
    { id: 'nouns', title: 'Местоимения, артикли и количество', icon: '🧱', pattern: /pronoun|possessive|quantifier|article/i },
    { id: 'description', title: 'Описание и сравнение', icon: '📐', pattern: /adjective|adverb|comparative|superlative|so-such|preposition/i },
    { id: 'structures', title: 'Структуры предложения', icon: '📝', pattern: /imperative|there-be/i },
    { id: 'other', title: 'Другие темы', icon: '📚', pattern: /.*/ },
  ];
  const QUESTION_TRANSLATION_OVERRIDES = {
    "A1-A2:232": "Я отправил ей любовную записку.",
  };
  const THEORY_TOPICS = [
    {
      id: "tenses-guide",
      title: "Времена: быстрый ориентир",
      subtitle: "сначала время, потом тип действия",
      sections: [
        {
          title: "Главная идея",
          items: [
            "В английском время показывает не только когда произошло действие, но и как мы на него смотрим: факт, процесс, результат или длительность.",
            "Сначала выбери точку времени: present, past или future. Потом выбери тип действия: Simple, Continuous, Perfect или Perfect Continuous.",
          ],
        },
        {
          title: "Как выбирать",
          items: [
            "Факт или регулярность - Simple: We run backups every night.",
            "Процесс прямо сейчас или в конкретный момент - Continuous: We are running a backup now.",
            "Результат или опыт к текущему моменту - Perfect: We have run the backup already.",
            "Длительность до момента - Perfect Continuous: We have been running the backup for an hour.",
            "Будущее с планом - be going to или Present Continuous: We are going to deploy tonight. We are deploying tonight.",
            "Будущее как решение, обещание или прогноз - will: I'll check the logs. It will probably fail under load.",
          ],
        },
        {
          title: "Маркеры времени",
          examples: [
            ["usually, often, every day", "Present Simple"],
            ["now, right now, at the moment", "Present Continuous"],
            ["yesterday, last week, in 2025, ago", "Past Simple"],
            ["when, while, at 3am yesterday", "Past Continuous, если важен процесс в тот момент"],
            ["already, yet, just, ever, never", "Present Perfect"],
            ["before, after, by the time", "Past Perfect, если одно прошлое действие было раньше другого"],
            ["tomorrow, next sprint, soon", "Future forms"],
          ],
        },
        {
          title: "Типичные ошибки",
          items: [
            "I am work now - неправильно. Нужно: I am working now.",
            "We have deployed yesterday - неправильно. С точным прошлым временем нужен Past Simple: We deployed yesterday.",
            "The service works right now - обычно лучше: The service is working right now.",
            "We are knowing the root cause - неправильно. Know обычно не используется в Continuous: We know the root cause.",
          ],
        },
      ],
    },
    {
      id: "tenses-present",
      title: "Present: Simple / to be / Continuous / Perfect",
      subtitle: "факты, состояния, процессы и результат к сейчас",
      sections: [
        {
          title: "Present Simple + to be",
          items: [
            "Используем для состояний, описаний и фактов в настоящем.",
          ],
          schemes: [
            {
              title: "Схема Present Simple + to be",
              rows: [
                { label: "+", tokens: ["I", "am"] },
                { label: "+", tokens: ["He / She / It", "is"] },
                { label: "+", tokens: ["We / You / They", "are"] },
                { label: "-", tokens: ["I", "am", "not"] },
                { label: "-", tokens: ["He / She / It", "is", "not"] },
                { label: "-", tokens: ["We / You / They", "are", "not"] },
                { label: "?", tokens: ["Am", "I", "... ?"] },
                { label: "?", tokens: ["Is", "he / she / it", "... ?"] },
                { label: "?", tokens: ["Are", "we / you / they", "... ?"] },
              ],
            },
          ],
          examples: [
            ["The service is stable.", "Сервис стабилен."],
            ["The logs are noisy.", "Логи шумные."],
            ["Is the root cause clear?", "Root cause понятен?"],
          ],
        },
        {
          title: "Present Simple + V1",
          items: [
            "Используем для привычек, регулярно повторяющихся действий, общеизвестных фактов и расписаний.",
          ],
          schemes: [
            {
              title: "Схема Present Simple + V1",
              rows: [
                { label: "+", tokens: ["I / We / You / They", "V1: read"] },
                { label: "+", tokens: ["He / She / It", "V(s): reads"] },
                { label: "-", tokens: ["I / We / You / They", "don't", "V1: read"] },
                { label: "-", tokens: ["He / She / It", "doesn't", "V1: read"] },
                { label: "?", tokens: ["Do", "I / we / you / they", "V1: read"] },
                { label: "?", tokens: ["Does", "he / she / it", "V1: read"] },
              ],
            },
          ],
          examples: [
            ["We deploy every Friday.", "Мы деплоим каждую пятницу."],
            ["The service reads config from the database.", "Сервис читает конфиг из базы."],
            ["Does this job run every night?", "Эта задача запускается каждую ночь?"],
          ],
        },
        {
          title: "Present Continuous",
          items: [
            "Используем для действия в процессе прямо сейчас или временной ситуации в настоящем.",
          ],
          schemes: [
            {
              title: "Схема Present Continuous",
              rows: [
                { label: "+", tokens: ["I", "am", "V-ing"] },
                { label: "+", tokens: ["He / She / It", "is", "V-ing"] },
                { label: "+", tokens: ["We / You / They", "are", "V-ing"] },
                { label: "-", tokens: ["I", "am", "not", "V-ing"] },
                { label: "-", tokens: ["He / She / It", "is", "not", "V-ing"] },
                { label: "-", tokens: ["We / You / They", "are", "not", "V-ing"] },
                { label: "?", tokens: ["Am", "I", "V-ing"] },
                { label: "?", tokens: ["Is", "he / she / it", "V-ing"] },
                { label: "?", tokens: ["Are", "we / you / they", "V-ing"] },
              ],
            },
          ],
          examples: [
            ["We are investigating the issue now.", "Мы сейчас расследуем проблему."],
            ["Masha is deploying the hotfix right now.", "Маша прямо сейчас деплоит хотфикс."],
            ["Are you reviewing the PR?", "Ты ревьюишь PR?"],
          ],
        },
        {
          title: "Present Perfect",
          items: [
            "Используем для результата к настоящему моменту, опыта или действия, которое важно сейчас.",
            "Частые маркеры: already, yet, just, ever, never, recently, so far.",
            "С точным прошлым временем вроде yesterday или last week обычно нужен Past Simple, а не Present Perfect.",
          ],
          schemes: [
            {
              title: "Схема Present Perfect",
              rows: [
                { label: "+", tokens: ["I / We / You / They", "have", "V3: checked"] },
                { label: "+", tokens: ["He / She / It", "has", "V3: checked"] },
                { label: "-", tokens: ["I / We / You / They", "have not / haven't", "V3"] },
                { label: "-", tokens: ["He / She / It", "has not / hasn't", "V3"] },
                { label: "?", tokens: ["Have", "I / we / you / they", "V3"] },
                { label: "?", tokens: ["Has", "he / she / it", "V3"] },
              ],
            },
          ],
          examples: [
            ["We have already fixed the bug.", "Мы уже исправили баг."],
            ["She has just pushed the hotfix.", "Она только что запушила хотфикс."],
            ["Have you checked the logs yet?", "Ты уже проверил логи?"],
            ["I have never seen this error before.", "Я никогда раньше не видел эту ошибку."],
          ],
        },
        {
          title: "Вопросы к подлежащему",
          items: [
            "Если what / who / which само является подлежащим, порядок слов прямой: question word + V(s).",
          ],
          schemes: [
            {
              title: "Схема вопроса к подлежащему",
              rows: [
                { label: "?", tokens: ["what / who / which", "V(s)", "... ?"] },
              ],
            },
          ],
          examples: [
            ["Who knows the answer?", "Кто знает ответ?"],
            ["Which option looks better?", "Какой вариант выглядит лучше?"],
            ["What looks strange?", "Что выглядит странно?"],
            ["I don't know what happens next.", "Я не знаю, что происходит дальше."],
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Сервис стабилен, но логи слишком шумные.",
            "Мы деплоим каждую пятницу.",
            "Этот воркер читает задачи из очереди.",
            "Мы сейчас проверяем production logs.",
            "Мы уже исправили этот баг.",
            "Что выглядит странно в этом графике?",
          ],
        },
      ],
    },
    {
      id: "tenses-past",
      title: "Past: Simple / to be / Continuous / Perfect",
      subtitle: "прошлые факты, состояния, процессы и более ранние действия",
      sections: [
        {
          title: "Past Simple",
          items: [
            "Используем, когда действие произошло в прошлом в конкретный момент или период.",
            "Частые маркеры: yesterday, last week, in 2025, ago.",
          ],
          schemes: [
            {
              title: "Схема Past Simple",
              rows: [
                { label: "+", tokens: ["I / He / She / It / We / You / They", "V2: worked"] },
                { label: "-", tokens: ["I / He / She / It / We / You / They", "didn't", "V1: work"] },
                { label: "?", tokens: ["Did", "subject", "V1: work"] },
              ],
            },
          ],
          examples: [
            ["We fixed the bug yesterday.", "Мы исправили баг вчера."],
            ["The alert fired at 3am.", "Алерт сработал в 3 утра."],
            ["Did you revert the config?", "Ты откатил конфиг?"],
          ],
        },
        {
          title: "Past Simple + to be",
          items: [
            "Используем для состояний и описаний в прошлом, а не для действий.",
          ],
          schemes: [
            {
              title: "Схема Past Simple + to be",
              rows: [
                { label: "+", tokens: ["I / He / She / It", "was"] },
                { label: "+", tokens: ["We / You / They", "were"] },
                { label: "-", tokens: ["I / He / She / It", "was", "not"] },
                { label: "-", tokens: ["We / You / They", "were", "not"] },
                { label: "?", tokens: ["Was", "I / he / she / it", "... ?"] },
                { label: "?", tokens: ["Were", "we / you / they", "... ?"] },
              ],
            },
          ],
          examples: [
            ["The service was down for ten minutes.", "Сервис был недоступен десять минут."],
            ["The logs were useful.", "Логи были полезными."],
            ["Was the workaround safe?", "Временное решение было безопасным?"],
          ],
        },
        {
          title: "Past Continuous",
          items: [
            "Используем для процесса в определенный момент в прошлом.",
            "Часто показывает фон: действие было в процессе, когда произошло другое действие.",
            "Маркеры: at 5 o'clock yesterday, when, while.",
          ],
          schemes: [
            {
              title: "Схема Past Continuous",
              rows: [
                { label: "+", tokens: ["I / He / She / It", "was", "V-ing"] },
                { label: "+", tokens: ["We / You / They", "were", "V-ing"] },
                { label: "-", tokens: ["I / He / She / It", "was", "not", "V-ing"] },
                { label: "-", tokens: ["We / You / They", "were", "not", "V-ing"] },
                { label: "?", tokens: ["Was", "I / he / she / it", "V-ing"] },
                { label: "?", tokens: ["Were", "we / you / they", "V-ing"] },
              ],
            },
          ],
          examples: [
            ["We were testing the migration when the alert fired.", "Мы тестировали миграцию, когда сработал алерт."],
            ["She was reading logs while he was checking metrics.", "Она читала логи, пока он проверял метрики."],
            ["What were you doing when the service crashed?", "Что ты делал, когда сервис упал?"],
          ],
        },
        {
          title: "Past Perfect",
          items: [
            "Используем, чтобы показать, что одно прошлое действие произошло раньше другого прошлого действия.",
            "Часто встречается с before, after, when, already, by the time.",
            "Обычно используется в паре с Past Simple: одно действие случилось раньше, другое позже.",
          ],
          schemes: [
            {
              title: "Схема Past Perfect",
              rows: [
                { label: "+", tokens: ["I / He / She / It / We / You / They", "had", "V3"] },
                { label: "-", tokens: ["I / He / She / It / We / You / They", "had", "not", "V3"] },
                { label: "?", tokens: ["Had", "subject", "V3"] },
              ],
            },
          ],
          examples: [
            ["When I arrived, she had already left.", "Когда я пришел, она уже ушла."],
            ["We had reverted the config before the incident call started.", "Мы откатили конфиг до начала incident call."],
            ["By the time we checked the logs, the job had already failed.", "К моменту проверки логов задача уже упала."],
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Команда исправила баг вчера.",
            "Сервис был недоступен десять минут.",
            "Мы проверяли метрики, когда сработал алерт.",
            "Они уже откатили конфиг до начала звонка.",
            "Что ты делал, когда билд упал?",
          ],
        },
      ],
    },
    {
      id: "tenses-future",
      title: "Future: will / going to / Continuous",
      subtitle: "решения, планы, прогнозы и процессы в будущем",
      sections: [
        {
          title: "Future Simple",
          items: [
            "Используем will для спонтанных решений, предложений что-то сделать, обещаний и прогнозов на основе личного мнения.",
          ],
          schemes: [
            {
              title: "Схема Future Simple",
              rows: [
                { label: "+", tokens: ["I / He / She / It / We / You / They", "will", "V1"] },
                { label: "-", tokens: ["I / He / She / It / We / You / They", "will not / won't", "V1"] },
                { label: "?", tokens: ["Will", "subject", "V1"] },
              ],
            },
          ],
          examples: [
            ["I'll check the logs.", "Я проверю логи."],
            ["We won't deploy without tests.", "Мы не будем деплоить без тестов."],
            ["Will the service recover automatically?", "Сервис восстановится автоматически?"],
          ],
        },
        {
          title: "To be going to",
          items: [
            "Используем для планов и намерений без конкретной договоренности, а также для прогнозов о будущем, основанных на фактах.",
          ],
          schemes: [
            {
              title: "Схема to be going to",
              rows: [
                { label: "+", tokens: ["I", "am", "going to", "V1"] },
                { label: "+", tokens: ["He / She / It", "is", "going to", "V1"] },
                { label: "+", tokens: ["We / You / They", "are", "going to", "V1"] },
                { label: "-", tokens: ["I", "am", "not", "going to", "V1"] },
                { label: "-", tokens: ["He / She / It", "is", "not", "going to", "V1"] },
                { label: "-", tokens: ["We / You / They", "are", "not", "going to", "V1"] },
                { label: "?", tokens: ["Am", "I", "going to", "V1"] },
                { label: "?", tokens: ["Is", "he / she / it", "going to", "V1"] },
                { label: "?", tokens: ["Are", "we / you / they", "going to", "V1"] },
              ],
            },
          ],
          examples: [
            ["We are going to add an index.", "Мы собираемся добавить индекс."],
            ["This query is going to timeout under load.", "Этот запрос, похоже, отвалится под нагрузкой."],
            ["Are you going to rewrite this module?", "Ты собираешься переписать этот модуль?"],
          ],
        },
        {
          title: "Present Continuous для будущего",
          items: [
            "Используем для планов с конкретной договоренностью или назначенным временем.",
          ],
          examples: [
            ["We are deploying tonight.", "Мы деплоим сегодня вечером."],
            ["Alex is joining the incident review tomorrow.", "Алекс присоединяется к разбору инцидента завтра."],
          ],
        },
        {
          title: "Future Continuous",
          items: [
            "Используем для действия в процессе в определенный момент в будущем или длительного действия в будущем.",
          ],
          schemes: [
            {
              title: "Схема Future Continuous",
              rows: [
                { label: "+", tokens: ["I / He / She / It / We / You / They", "will be", "V-ing"] },
                { label: "-", tokens: ["I / He / She / It / We / You / They", "will not be", "V-ing"] },
                { label: "?", tokens: ["Will", "subject", "be", "V-ing"] },
              ],
            },
          ],
          examples: [
            ["We will be monitoring the service overnight.", "Мы будем мониторить сервис ночью."],
            ["At 3am, the migration will still be running.", "В 3 утра миграция все еще будет выполняться."],
            ["Will you be reviewing PRs tomorrow morning?", "Ты будешь ревьюить PR завтра утром?"],
          ],
        },
        {
          title: "Попробуй перевести",
          items: [
            "Я проверю логи и напишу апдейт.",
            "Мы не будем деплоить без rollback plan.",
            "Мы собираемся добавить индекс на этот столбец.",
            "Этот фикс, похоже, сломает старый API.",
            "Мы деплоим сегодня вечером.",
            "Ночью мы будем мониторить сервис.",
          ],
        },
      ],
    },
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
          title: "Как строить фразу",
          items: [
            "После manage всегда ставим to + начальную форму глагола.",
            "✓ managed to fix — удалось исправить.",
            "✓ didn't manage to reproduce — не удалось воспроизвести.",
            "✓ Did you manage to find ...? — удалось найти ...?",
            "✗ managed fixing — неправильно: после manage нужен to, а не глагол с -ing.",
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
          title: "Внутри сложного предложения",
          items: [
            "Когда what / who / which играет роль подлежащего внутри придаточного, порядок слов тоже остается прямым.",
          ],
          examples: [
            ["I don't know what happens next.", "Я не знаю, что произойдет дальше."],
            ["Tell me what makes you happy.", "Скажи мне, что делает тебя счастливым."],
            ["I see what looks strange here.", "Я вижу, что здесь выглядит странно."],
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
      title: "Passive Voice",
      subtitle: "когда важно действие и результат, а не исполнитель",
      sections: [
        {
          title: "Главная идея",
          items: [
            "В Passive Voice важно, что произошло с объектом. Кто это сделал — не главное.",
            "Общая структура: be в нужном времени + past participle (3-я форма глагола).",
            "Исполнителя можно добавить через by, но в IT-контексте его часто опускают, если он не важен.",
          ],
        },
        {
          title: "Времена и структура",
          examples: [
            ["Present Simple: am / is / are + V-ed", "The query is executed automatically."],
            ["Past Simple: was / were + V-ed", "The config was reverted after the incident."],
            ["Present Continuous: am / is / are + being + V-ed", "The migration is being tested right now."],
            ["Past Continuous: was / were + being + V-ed", "The service was being monitored when it crashed."],
            ["Present Perfect: have / has + been + V-ed", "The PR has been reviewed already."],
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
    {
      id: "modals-code-review",
      title: "Модальные глаголы для Code Review",
      subtitle: "could / should / might / may / would — как предлагать изменения мягко и профессионально",
      sections: [
        {
          title: "Главная идея",
          items: [
            "В code review модальные глаголы помогают не только передать смысл, но и выбрать тон: показать возможность, дать рекомендацию, осторожно предупредить о риске или предложить гипотетический вариант.",
          ],
          examples: [
            ["Could", "мягкое необязательное предложение"],
            ["Should", "рекомендация: это действительно стоит сделать"],
            ["Might", "осторожное предположение или возможный риск"],
            ["May", "более формальный вариант возможного риска"],
            ["Would", "личный выбор, гипотетический результат или мягкий вопрос"],
          ],
        },
        {
          title: "Одна грамматическая схема для всех",
          items: [
            "Could, should, might, may и would строятся одинаково. После модального глагола всегда используется V1 — начальная форма без to, окончания -s и вспомогательных do / does.",
            "Меняется модальный глагол и оттенок смысла, но каркас предложения остаётся тем же.",
          ],
          schemes: [
            {
              title: "Утверждение, отрицание и вопрос",
              rows: [
                { label: "+", tokens: ["Subject", { text: "could / should / might / may / would", role: "aux" }, "V1"] },
                { label: "-", tokens: ["Subject", { text: "couldn't / shouldn't / might not / may not / wouldn't", role: "neg" }, "V1"] },
                { label: "?", tokens: [{ text: "Could / Should / Might / May / Would", role: "aux" }, "subject", "V1"] },
              ],
            },
            {
              title: "Пассивная конструкция",
              rows: [
                { label: "+", tokens: ["Subject", { text: "modal", role: "aux" }, "be", "V3"] },
                { label: "-", tokens: ["Subject", { text: "modal + not", role: "neg" }, "be", "V3"] },
                { label: "?", tokens: [{ text: "Modal", role: "aux" }, "subject", "be", "V3"] },
              ],
            },
          ],
        },
        {
          title: "Could — самое мягкое предложение",
          items: [
            "Could не говорит, что изменение обязательно. Оно показывает один из возможных вариантов и хорошо подходит для nit-комментариев и необязательных предложений.",
          ],
          examples: [
            ["This could be simplified.", "Это можно было бы упростить."],
            ["You could extract this into a helper.", "Можно было бы вынести это во вспомогательную функцию."],
          ],
        },
        {
          title: "Should — рекомендация",
          items: [
            "Should сильнее, чем could: автор считает изменение важным, но не формулирует прямой приказ.",
            "Используйте should для вещей, которые действительно стоит исправить: архитектура, тесты, валидация и обработка ошибок.",
          ],
          examples: [
            ["This should be handled at the service level.", "Это следует обрабатывать на уровне сервиса."],
            ["We should add a test for this case.", "Нам следует добавить тест для этого случая."],
          ],
        },
        {
          title: "Might и May — возможный риск",
          items: [
            "Might подходит для рисков и наблюдений, в которых вы не уверены. Оно обращает внимание на проблему, не утверждая, что проблема точно возникнет.",
            "May имеет похожее значение, но обычно звучит немного формальнее. В переписке и code review might часто воспринимается разговорнее и естественнее.",
          ],
          examples: [
            ["This might cause issues under high load.", "Это может вызвать проблемы при высокой нагрузке."],
            ["This might break backward compatibility.", "Это может нарушить обратную совместимость."],
            ["This may affect performance.", "Это может повлиять на производительность."],
            ["This may need a follow-up ticket.", "Возможно, для этого потребуется отдельный тикет."],
          ],
        },
        {
          title: "Would — условность, вежливость и гипотетичность",
          items: [
            "Would часто соответствует русскому «бы». Оно помогает представить личный выбор, гипотетический результат или осторожное предложение.",
            "В разговоре и переписке I would обычно сокращается до I'd: I'd extract this. I'd prefer a different approach.",
            "I would описывает личный выбор, This would — гипотетический результат, а Would it ...? превращает предложение в мягкий вопрос.",
          ],
          examples: [
            ["I would extract this into a separate method.", "Я бы вынес это в отдельный метод."],
            ["I would avoid using a global variable here.", "Я бы избегал использования здесь глобальной переменной."],
            ["This would make the code easier to follow.", "Это сделало бы код понятнее."],
            ["This would break backward compatibility.", "Это нарушило бы обратную совместимость."],
            ["Would it look cleaner if we extracted this?", "Выглядело бы это чище, если бы мы вынесли эту логику?"],
            ["Would it work if we passed the config as a parameter?", "Сработало бы это, если бы мы передавали конфиг как параметр?"],
            ["I'd prefer to see this handled differently.", "Я бы предпочёл, чтобы это обрабатывалось иначе."],
            ["I'd suggest extracting this into a helper.", "Я бы предложил вынести это во вспомогательную функцию."],
          ],
        },
        {
          title: "Попробуйте перевести",
          items: [
            "Я бы вынес эту логику в отдельный метод.",
            "Это сделало бы код намного легче для чтения.",
            "Я бы предпочёл видеть обработку ошибок на уровне сервиса.",
            "Это могло бы сломать обратную совместимость — стоит проверить.",
            "Я бы рекомендовал добавить комментарий здесь — логика неочевидна.",
            "Выглядело бы чище, если бы мы разбили это на два метода?",
            "Я бы сказал, что это выходит за рамки этого PR.",
            "Это могло бы вызвать проблемы при высокой нагрузке.",
            "Сработало бы это, если бы мы передавали конфиг как параметр?",
            "Я бы избегал использования глобальных переменных здесь.",
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
  const SHADOWING_TOPICS = [
    {
      id: "work-discussions",
      title: "Work discussions",
      groups: [
        {
          title: "walk through",
          items: [
            "Walk me through it.",
            "Let me walk you through it.",
            "Let me walk you through the proposal.",
            "Let me walk you through the approach.",
            "Can you walk me through this once more?",
            "Let's walk through it together.",
            "I think we should walk through it first.",
          ],
        },
        {
          title: "makes sense",
          items: [
            "Makes sense.",
            "That makes sense.",
            "It makes sense.",
            "Does it make sense?",
            "Does that make sense to you?",
            "It makes sense to consider this.",
            "I think that makes sense.",
          ],
        },
        {
          title: "end up with something",
          items: [
            "We ended up with a proposal.",
            "We ended up with a different approach.",
            "We might end up with issues.",
            "We could end up with something better.",
            "In the end, we ended up with this.",
            "I think we'll end up with a better result.",
          ],
        },
        {
          title: "a fair point",
          items: [
            "That's a fair point.",
            "That's a fair point, actually.",
            "That's a fair point, but consider this.",
            "I hear you — that's a fair point.",
            "That's a fair point, let's walk through it.",
            "I think that's a fair point.",
          ],
        },
        {
          title: "worth",
          items: [
            "It's worth it.",
            "It's worth considering.",
            "Is it worth it?",
            "Is it worth considering this approach?",
            "It's not worth it.",
            "It's worth a second look.",
            "I think it's worth it.",
          ],
        },
        {
          title: "Комбинированные фразы",
          items: [
            "Let me walk you through it — does it make sense?",
            "That's a fair point, but is it worth it?",
            "We ended up with a proposal — let me walk you through it.",
            "That's a fair point. It's worth considering.",
            "Does it make sense to end up with this approach?",
            "Let's walk through it once more — that's a fair point.",
            "I think it's worth walking through this once more.",
            "I think that's a fair point, but does it make sense?",
            "I think we'll end up with something worth it.",
          ],
        },
      ],
    },
    {
      id: "code-review-phrases",
      title: "Code Review: фразы",
      groups: [
        {
          title: "Code Review",
          items: [
            "I'd like to keep it as is because changing it would affect the API contract.",
            "I think this should be handled at the service level, not here.",
            "This might cause issues under high load — worth checking.",
            "I'm not sure about this approach — can you walk me through it?",
            "I went with this approach because it keeps the logic in one place.",
            "That's a good idea — I'll open a separate ticket so we don't block this PR.",
            "Can we take this offline? It's a bigger discussion than a PR comment.",
            "This is a potential edge case — what happens if the list is empty?",
            "This logic could be simplified — see my suggestion below.",
            "Have you considered using a transaction here?",
            "What if we extract this into a separate method?",
            "It might be worth adding a comment here to explain the logic.",
            "Approved with nits — feel free to merge, the comments are optional.",
            "You can resolve the comment once you've made the change.",
            "Can you explain why you chose this approach over X?",
            "That refactoring is out of scope for this PR — let's do it separately.",
            "We usually assign two reviewers for critical changes.",
          ],
        },
      ],
    },
    {
      id: "architecture-system-design",
      title: "Architecture & System Design",
      groups: [
        {
          title: "Архитектурные паттерны",
          items: [
            "We started with a monolith, but it became hard to scale.",
            "Each microservice owns its own database and logic.",
            "We use event-driven architecture to decouple services.",
            "We use a message queue to decouple the producer from the consumer.",
          ],
        },
        {
          title: "Надёжность и отказоустойчивость",
          items: [
            "We target 99.9% availability — that's about 8 hours of downtime per year.",
            "The system needs to be fault tolerant — one node going down shouldn't affect users.",
            "We added redundancy by running three instances in different availability zones.",
            "The database is a single point of failure — we need replication.",
            "Failover kicks in automatically when the primary goes down.",
            "Strong consistency is hard to achieve in a distributed system.",
            "We use eventual consistency — reads might be slightly stale.",
            "The CAP theorem says you can only guarantee two out of three properties.",
          ],
        },
        {
          title: "Проектирование системы",
          items: [
            "Scalability was the main reason we moved away from the monolith.",
            "There's always a trade-off between consistency and availability.",
            "We went with a different approach — event-driven instead of synchronous calls.",
            "The current design doesn't handle failover well.",
            "The design is solid, but the implementation has some gaps.",
            "Let me walk you through the request flow in this architecture.",
            "Tight coupling makes it hard to deploy services independently.",
            "We aim for loose coupling so teams can deploy independently.",
            "This service has a hard dependency on the auth service.",
          ],
        },
      ],
    },
  ];

  const SHADOWING_TRANSLATIONS = {
    "Walk me through it.": "Объясни мне это пошагово.",
    "Let me walk you through it.": "Позвольте мне объяснить это пошагово.",
    "Let me walk you through the proposal.": "Позвольте мне подробно объяснить предложение.",
    "Let me walk you through the approach.": "Позвольте мне подробно объяснить этот подход.",
    "Can you walk me through this once more?": "Можешь ещё раз объяснить это пошагово?",
    "Let's walk through it together.": "Давайте разберём это вместе.",
    "I think we should walk through it first.": "Думаю, сначала нам стоит это разобрать.",
    "Makes sense.": "Логично.",
    "That makes sense.": "Это логично.",
    "It makes sense.": "В этом есть смысл.",
    "Does it make sense?": "В этом есть смысл?",
    "Does that make sense to you?": "Для тебя это имеет смысл?",
    "It makes sense to consider this.": "Имеет смысл это рассмотреть.",
    "I think that makes sense.": "Думаю, это логично.",
    "We ended up with a proposal.": "В итоге у нас получилось предложение.",
    "We ended up with a different approach.": "В итоге мы выбрали другой подход.",
    "We might end up with issues.": "В итоге у нас могут возникнуть проблемы.",
    "We could end up with something better.": "В итоге мы можем получить что-то лучшее.",
    "In the end, we ended up with this.": "В конце концов мы пришли к этому.",
    "I think we'll end up with a better result.": "Думаю, в итоге мы получим лучший результат.",
    "That's a fair point.": "Это справедливое замечание.",
    "That's a fair point, actually.": "Вообще-то это справедливое замечание.",
    "That's a fair point, but consider this.": "Это справедливое замечание, но учтите вот что.",
    "I hear you — that's a fair point.": "Я тебя понимаю — это справедливое замечание.",
    "That's a fair point, let's walk through it.": "Это справедливое замечание, давайте всё разберём.",
    "I think that's a fair point.": "Думаю, это справедливое замечание.",
    "It's worth it.": "Оно того стоит.",
    "It's worth considering.": "Это стоит рассмотреть.",
    "Is it worth it?": "Оно того стоит?",
    "Is it worth considering this approach?": "Стоит ли рассмотреть этот подход?",
    "It's not worth it.": "Оно того не стоит.",
    "It's worth a second look.": "На это стоит взглянуть ещё раз.",
    "I think it's worth it.": "Думаю, оно того стоит.",
    "Let me walk you through it — does it make sense?": "Позвольте мне объяснить это пошагово — теперь понятно?",
    "That's a fair point, but is it worth it?": "Это справедливое замечание, но стоит ли оно того?",
    "We ended up with a proposal — let me walk you through it.": "В итоге у нас получилось предложение — позвольте мне подробно его объяснить.",
    "That's a fair point. It's worth considering.": "Это справедливое замечание. Его стоит рассмотреть.",
    "Does it make sense to end up with this approach?": "Есть ли смысл в итоге остановиться на этом подходе?",
    "Let's walk through it once more — that's a fair point.": "Давайте разберём это ещё раз — это справедливое замечание.",
    "I think it's worth walking through this once more.": "Думаю, стоит разобрать это ещё раз.",
    "I think that's a fair point, but does it make sense?": "Думаю, это справедливое замечание, но есть ли в этом смысл?",
    "I think we'll end up with something worth it.": "Думаю, в итоге мы получим что-то стоящее.",
    "I'd like to keep it as is because changing it would affect the API contract.": "Я бы оставил всё как есть, потому что изменение повлияет на контракт API.",
    "I think this should be handled at the service level, not here.": "Думаю, это нужно обрабатывать на уровне сервиса, а не здесь.",
    "This might cause issues under high load — worth checking.": "Это может вызвать проблемы при высокой нагрузке — стоит проверить.",
    "I'm not sure about this approach — can you walk me through it?": "Я не уверен насчёт этого подхода — можешь объяснить его подробнее?",
    "I went with this approach because it keeps the logic in one place.": "Я выбрал этот подход, потому что он позволяет держать логику в одном месте.",
    "That's a good idea — I'll open a separate ticket so we don't block this PR.": "Хорошая идея — я открою отдельный тикет, чтобы не блокировать этот PR.",
    "Can we take this offline? It's a bigger discussion than a PR comment.": "Можем обсудить это отдельно? Эта тема шире, чем комментарий к PR.",
    "This is a potential edge case — what happens if the list is empty?": "Это потенциальный граничный случай — что произойдёт, если список пуст?",
    "This logic could be simplified — see my suggestion below.": "Эту логику можно упростить — смотри моё предложение ниже.",
    "Have you considered using a transaction here?": "Ты рассматривал возможность использовать здесь транзакцию?",
    "What if we extract this into a separate method?": "А что, если мы вынесем это в отдельный метод?",
    "It might be worth adding a comment here to explain the logic.": "Возможно, стоит добавить здесь комментарий, поясняющий логику.",
    "Approved with nits — feel free to merge, the comments are optional.": "Одобрено с мелкими замечаниями — можешь мержить, комментарии необязательные.",
    "You can resolve the comment once you've made the change.": "Можно закрыть комментарий после того, как внесёшь изменение.",
    "Can you explain why you chose this approach over X?": "Можешь объяснить, почему ты выбрал этот подход вместо X?",
    "That refactoring is out of scope for this PR — let's do it separately.": "Этот рефакторинг выходит за рамки данного PR — давай сделаем его отдельно.",
    "We usually assign two reviewers for critical changes.": "Обычно мы назначаем двух ревьюеров для критически важных изменений.",
    "Scalability was the main reason we moved away from the monolith.": "Масштабируемость была главной причиной, по которой мы отказались от монолита.",
    "There's always a trade-off between consistency and availability.": "Между согласованностью и доступностью всегда есть компромисс.",
    "We went with a different approach — event-driven instead of synchronous calls.": "Мы выбрали другой подход — событийно-управляемую архитектуру вместо синхронных вызовов.",
    "The current design doesn't handle failover well.": "Текущая архитектура плохо справляется с переключением на резервный компонент.",
    "The design is solid, but the implementation has some gaps.": "Архитектурное решение надёжное, но в реализации есть некоторые пробелы.",
    "Let me walk you through the request flow in this architecture.": "Позвольте мне пошагово показать, как запрос проходит через эту архитектуру.",
    "Tight coupling makes it hard to deploy services independently.": "Сильная связанность затрудняет независимое развёртывание сервисов.",
    "We aim for loose coupling so teams can deploy independently.": "Мы стремимся к слабой связанности, чтобы команды могли выполнять развёртывание независимо.",
    "This service has a hard dependency on the auth service.": "Этот сервис жёстко зависит от сервиса аутентификации.",
  };

  window.TrainerData = { ALL_GRAMMAR_TOPICS_VALUE, GRAMMAR_TOPICS, GRAMMAR_TOPIC_GROUPS, QUESTION_TRANSLATION_OVERRIDES, THEORY_TOPICS, LISTENING_TOPICS, SHADOWING_TOPICS, SHADOWING_TRANSLATIONS };
})();
