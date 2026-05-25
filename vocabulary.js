window.VOCABULARY_DATA = [
  {
    "topic": "Backend & APIs",
    "words": [
      {
        "id": 1,
        "word": "expose",
        "translation": "открывать наружу (endpoint, port)",
        "example": "We expose a REST endpoint at /users.",
        "sentenceTranslation": "Мы открываем наружу REST-эндпоинт по адресу /users.",
        "gapExample": "We ___ a REST endpoint at /users.",
        "answer": "expose"
      },
      {
        "id": 2,
        "word": "consume",
        "translation": "потреблять / вызывать (API, service)",
        "example": "The frontend consumes our API.",
        "sentenceTranslation": "Фронтенд использует / вызывает наш API.",
        "gapExample": "The frontend ___ our API.",
        "answer": "consumes"
      },
      {
        "id": 3,
        "word": "handle",
        "translation": "обрабатывать (request, error, event)",
        "example": "This middleware handles authentication.",
        "sentenceTranslation": "Этот middleware обрабатывает аутентификацию.",
        "gapExample": "This middleware ___ authentication.",
        "answer": "handles"
      },
      {
        "id": 4,
        "word": "parse",
        "translation": "разобрать / распарсить",
        "example": "We parse the request body before validation.",
        "sentenceTranslation": "Мы парсим / разбираем тело запроса перед валидацией.",
        "gapExample": "We ___ the request body before validation.",
        "answer": "parse"
      },
      {
        "id": 5,
        "word": "serialize / deserialize",
        "translation": "сериализовать / десериализовать",
        "example": "The response is serialized to JSON.",
        "sentenceTranslation": "Ответ сериализуется в JSON.",
        "gapExample": "The response is ___ to JSON.",
        "answer": "serialized"
      },
      {
        "id": 6,
        "word": "paginate",
        "translation": "разбивать на страницы",
        "example": "The endpoint paginates results using limit and offset.",
        "sentenceTranslation": "Эндпоинт разбивает результаты на страницы с помощью limit и offset.",
        "gapExample": "The endpoint ___ results using limit and offset.",
        "answer": "paginates"
      },
      {
        "id": 7,
        "word": "throttle / rate-limit",
        "translation": "ограничивать количество запросов",
        "example": "We throttle requests to 100 per minute.",
        "sentenceTranslation": "Мы ограничиваем количество запросов до 100 в минуту.",
        "gapExample": "We ___ requests to 100 per minute.",
        "answer": "throttle"
      },
      {
        "id": 8,
        "word": "authenticate / authorize",
        "translation": "аутентифицировать vs авторизовать",
        "example": "First we authenticate, then authorize.",
        "sentenceTranslation": "Сначала мы аутентифицируем, затем авторизуем.",
        "gapExample": "First we ___, then authorize.",
        "answer": "authenticate"
      },
      {
        "id": 9,
        "word": "validate",
        "translation": "проверять (данные, схему, параметры)",
        "example": "Always validate the payload before hitting the DB.",
        "sentenceTranslation": "Всегда валидируй / проверяй payload перед обращением к базе данных.",
        "gapExample": "Always ___ the payload before hitting the DB.",
        "answer": "validate"
      },
      {
        "id": 10,
        "word": "propagate",
        "translation": "пробрасывать (error, event)",
        "example": "The error propagates up the middleware chain.",
        "sentenceTranslation": "Ошибка пробрасывается вверх по цепочке middleware.",
        "gapExample": "The error ___ up the middleware chain.",
        "answer": "propagates"
      },
      {
        "id": 11,
        "word": "intercept",
        "translation": "перехватывать (request, response)",
        "example": "We intercept every request to log the trace ID.",
        "sentenceTranslation": "Мы перехватываем каждый запрос, чтобы записать trace ID в лог.",
        "gapExample": "We ___ every request to log the trace ID.",
        "answer": "intercept"
      },
      {
        "id": 12,
        "word": "offload",
        "translation": "передавать задачу (в очередь, воркер)",
        "example": "We offload email sending to a background queue.",
        "sentenceTranslation": "Мы передаём задачу отправки писем в фоновую очередь.",
        "gapExample": "We ___ email sending to a background queue.",
        "answer": "offload"
      },
      {
        "id": 13,
        "word": "payload",
        "translation": "тело запроса / передаваемые данные",
        "example": "The payload includes user ID and preferences.",
        "sentenceTranslation": "Тело запроса содержит ID пользователя и настройки.",
        "gapExample": "The ___ includes user ID and preferences.",
        "answer": "payload"
      },
      {
        "id": 14,
        "word": "middleware",
        "translation": "промежуточный обработчик",
        "example": "Auth middleware runs before the route handler.",
        "sentenceTranslation": "Промежуточный обработчик аутентификации выполняется перед обработчиком маршрута.",
        "gapExample": "Auth ___ runs before the route handler.",
        "answer": "middleware"
      },
      {
        "id": 15,
        "word": "idempotency",
        "translation": "идемпотентность",
        "example": "Use PUT for idempotency — it's safe to retry.",
        "sentenceTranslation": "Используй PUT для идемпотентности: такой запрос безопасно повторять.",
        "gapExample": "Use PUT for ___ — it's safe to retry.",
        "answer": "idempotency"
      },
      {
        "id": 16,
        "word": "latency",
        "translation": "задержка (время между запросом и ответом)",
        "example": "P99 latency is under 200ms.",
        "sentenceTranslation": "Задержка P99 меньше 200 мс.",
        "gapExample": "P99 ___ is under 200ms.",
        "answer": "latency"
      },
      {
        "id": 17,
        "word": "throughput",
        "translation": "пропускная способность",
        "example": "Higher throughput means the system handles more requests per second.",
        "sentenceTranslation": "Более высокая пропускная способность означает, что система обрабатывает больше запросов в секунду.",
        "gapExample": "Higher ___ means the system handles more requests per second.",
        "answer": "throughput"
      },
      {
        "id": 18,
        "word": "contract",
        "translation": "API-контракт / соглашение об интерфейсе",
        "example": "We shouldn't break the API contract without versioning.",
        "sentenceTranslation": "Нельзя ломать API-контракт без версионирования.",
        "gapExample": "We shouldn't break the API ___ without versioning.",
        "answer": "contract"
      },
      {
        "id": 19,
        "word": "backward compatibility",
        "translation": "обратная совместимость",
        "example": "This change breaks backward compatibility.",
        "sentenceTranslation": "Это изменение нарушает обратную совместимость.",
        "gapExample": "This change breaks ___.",
        "answer": "backward compatibility"
      },
      {
        "id": 20,
        "word": "bottleneck",
        "translation": "узкое место",
        "example": "The DB query is the bottleneck here.",
        "sentenceTranslation": "Запрос к базе данных здесь является узким местом.",
        "gapExample": "The DB query is the ___ here.",
        "answer": "bottleneck"
      },
      {
        "id": 21,
        "word": "race condition",
        "translation": "состояние гонки",
        "example": "Two requests hit the same record — classic race condition.",
        "sentenceTranslation": "Два запроса попали в одну и ту же запись: классическое состояние гонки.",
        "gapExample": "Two requests hit the same record — classic ___.",
        "answer": "race condition"
      },
      {
        "id": 22,
        "word": "retry logic",
        "translation": "логика повторных попыток",
        "example": "We added retry logic with exponential backoff.",
        "sentenceTranslation": "Мы добавили логику повторных попыток с экспоненциальной задержкой.",
        "gapExample": "We added ___ with exponential backoff.",
        "answer": "retry logic"
      },
      {
        "id": 23,
        "word": "graceful degradation",
        "translation": "корректная деградация при сбое",
        "example": "If the cache is down, we fall back — graceful degradation.",
        "sentenceTranslation": "Если кэш недоступен, мы переключаемся на запасной вариант: это корректная деградация.",
        "gapExample": "If the cache is down, we fall back — ___.",
        "answer": "graceful degradation"
      },
      {
        "id": 24,
        "word": "circuit breaker",
        "translation": "паттерн остановки вызовов к упавшему сервису",
        "example": "The circuit breaker opens after 5 consecutive failures.",
        "sentenceTranslation": "Circuit breaker открывается и останавливает вызовы после 5 ошибок подряд.",
        "gapExample": "The ___ opens after 5 consecutive failures.",
        "answer": "circuit breaker"
      },
      {
        "id": 25,
        "word": "under the hood",
        "translation": "внутри / как устроено на самом деле",
        "example": "Under the hood, it uses a connection pool.",
        "sentenceTranslation": "Внутри, под капотом, он использует пул соединений.",
        "gapExample": "___, it uses a connection pool.",
        "answer": "Under the hood"
      },
      {
        "id": 26,
        "word": "downstream / upstream",
        "translation": "сервисы ниже/выше по цепочке",
        "example": "The failure in the downstream service caused a timeout.",
        "sentenceTranslation": "Сбой в downstream-сервисе ниже по цепочке вызвал таймаут.",
        "gapExample": "The failure in the ___ service caused a timeout.",
        "answer": "downstream"
      },
      {
        "id": 27,
        "word": "happy path",
        "translation": "успешный сценарий без ошибок",
        "example": "The happy path works; edge cases are the issue.",
        "sentenceTranslation": "Успешный сценарий без ошибок работает; проблема в пограничных случаях.",
        "gapExample": "The ___ works; edge cases are the issue.",
        "answer": "happy path"
      },
      {
        "id": 28,
        "word": "edge case",
        "translation": "граничный / нетипичный случай",
        "example": "What if the list is empty? That's an edge case.",
        "sentenceTranslation": "А что, если список пустой? Это пограничный случай.",
        "gapExample": "What if the list is empty? That's an ___.",
        "answer": "edge case"
      },
      {
        "id": 29,
        "word": "fall back to",
        "translation": "переключиться на запасной вариант",
        "example": "If Redis is down, we fall back to the database.",
        "sentenceTranslation": "Если Redis недоступен, мы переключаемся на базу данных.",
        "gapExample": "If Redis is down, we ___ the database.",
        "answer": "fall back to"
      },
      {
        "id": 30,
        "word": "tie into",
        "translation": "интегрироваться с (системой)",
        "example": "This service ties into the notification system.",
        "sentenceTranslation": "Этот сервис интегрируется с системой уведомлений.",
        "gapExample": "This service ___ the notification system.",
        "answer": "ties into"
      },
      {
        "id": 31,
        "word": "spin up",
        "translation": "запустить / поднять (сервер, контейнер)",
        "example": "We spin up a new instance during peak load.",
        "sentenceTranslation": "Мы запускаем / поднимаем новый инстанс во время пиковой нагрузки.",
        "gapExample": "We ___ a new instance during peak load.",
        "answer": "spin up"
      }
    ]
  },
  {
    "topic": "Standup & meetings",
    "words": [
      {
        "id": 32,
        "word": "to be in progress",
        "translation": "в работе / делаю прямо сейчас",
        "example": "The auth refactor is still in progress.",
        "sentenceTranslation": "Рефакторинг аутентификации всё ещё в работе.",
        "gapExample": "The auth refactor is still ___.",
        "answer": "in progress"
      },
      {
        "id": 33,
        "word": "to pick up a ticket",
        "translation": "взять задачу в работу",
        "example": "I picked up the caching ticket this morning.",
        "sentenceTranslation": "Сегодня утром я взял в работу задачу по кэшированию.",
        "gapExample": "I ___ the caching ticket this morning.",
        "answer": "picked up"
      },
      {
        "id": 34,
        "word": "to wrap up",
        "translation": "заканчивать, завершать",
        "example": "I'm wrapping up the API integration today.",
        "sentenceTranslation": "Сегодня я завершаю интеграцию API.",
        "gapExample": "I'm ___ the API integration today.",
        "answer": "wrapping up"
      },
      {
        "id": 35,
        "word": "to push to review",
        "translation": "отправить на ревью",
        "example": "I pushed the PR to review — waiting for feedback.",
        "sentenceTranslation": "Я отправил PR на ревью и жду обратной связи.",
        "gapExample": "I ___ the PR to review — waiting for feedback.",
        "answer": "pushed"
      },
      {
        "id": 36,
        "word": "to address comments",
        "translation": "обработать, исправить по комментариям",
        "example": "I addressed review comments, should be mergeable now.",
        "sentenceTranslation": "Я обработал / исправил комментарии с ревью, теперь должно быть можно мержить.",
        "gapExample": "I ___ review comments, should be mergeable now.",
        "answer": "addressed"
      },
      {
        "id": 37,
        "word": "to land",
        "translation": "влить / смержить изменение (a PR/change)",
        "example": "The fix landed in main yesterday.",
        "sentenceTranslation": "Вчера фикс влили в main / он попал в main.",
        "gapExample": "The fix ___ in main yesterday.",
        "answer": "landed"
      },
      {
        "id": 38,
        "word": "to roll out",
        "translation": "выкатить / деплоить постепенно",
        "example": "We're rolling out the endpoint to 10% of users.",
        "sentenceTranslation": "Мы постепенно выкатываем эндпоинт на 10% пользователей.",
        "gapExample": "We're ___ the endpoint to 10% of users.",
        "answer": "rolling out"
      },
      {
        "id": 39,
        "word": "to circle back",
        "translation": "вернуться к теме позже",
        "example": "Let's circle back to this after the standup.",
        "sentenceTranslation": "Давай вернёмся к этому после стендапа.",
        "gapExample": "Let's ___ to this after the standup.",
        "answer": "circle back"
      },
      {
        "id": 40,
        "word": "on track",
        "translation": "всё идёт по плану",
        "example": "The migration is on track for Friday.",
        "sentenceTranslation": "Миграция идёт по плану к пятнице.",
        "gapExample": "The migration is ___ for Friday.",
        "answer": "on track"
      },
      {
        "id": 41,
        "word": "to spike on",
        "translation": "провести быстрое исследование",
        "example": "I'll spike on the Kafka integration today.",
        "sentenceTranslation": "Сегодня я проведу быстрое исследование по интеграции с Kafka.",
        "gapExample": "I'll ___ the Kafka integration today.",
        "answer": "spike on"
      },
      {
        "id": 42,
        "word": "blocker",
        "translation": "то, что мешает двигаться дальше",
        "example": "I have a blocker — waiting on access to prod logs.",
        "sentenceTranslation": "У меня блокер: жду доступ к production-логам.",
        "gapExample": "I have a ___ — waiting on access to prod logs.",
        "answer": "blocker"
      },
      {
        "id": 43,
        "word": "to be blocked on",
        "translation": "быть заблокированным чем-то",
        "example": "I'm blocked on the design decision from last week.",
        "sentenceTranslation": "Я заблокирован решением по дизайну с прошлой недели.",
        "gapExample": "I'm ___ the design decision from last week.",
        "answer": "blocked on"
      },
      {
        "id": 44,
        "word": "to unblock",
        "translation": "разблокировать / помочь с блокером",
        "example": "Can someone unblock me on the DB permissions?",
        "sentenceTranslation": "Может кто-нибудь разблокировать меня по правам доступа к базе данных?",
        "gapExample": "Can someone ___ me on the DB permissions?",
        "answer": "unblock"
      },
      {
        "id": 45,
        "word": "dependency",
        "translation": "зависимость от другой задачи / команды",
        "example": "This ticket has a dependency on the infra team.",
        "sentenceTranslation": "Эта задача зависит от infra-команды.",
        "gapExample": "This ticket has a ___ on the infra team.",
        "answer": "dependency"
      },
      {
        "id": 46,
        "word": "to get stuck",
        "translation": "застрять, не продвигаться",
        "example": "I got stuck on the serialization issue.",
        "sentenceTranslation": "Я застрял на проблеме с сериализацией.",
        "gapExample": "I ___ on the serialization issue.",
        "answer": "got stuck"
      },
      {
        "id": 47,
        "word": "to flag",
        "translation": "обратить внимание / поднять проблему",
        "example": "I want to flag a potential issue with the migration.",
        "sentenceTranslation": "Я хочу обратить внимание на потенциальную проблему с миграцией.",
        "gapExample": "I want to ___ a potential issue with the migration.",
        "answer": "flag"
      },
      {
        "id": 48,
        "word": "to raise a concern",
        "translation": "высказать беспокойство / сомнение",
        "example": "I want to raise a concern about the deadline.",
        "sentenceTranslation": "Я хочу высказать опасение по поводу дедлайна.",
        "gapExample": "I want to ___ about the deadline.",
        "answer": "raise a concern"
      },
      {
        "id": 49,
        "word": "to sync with",
        "translation": "скоординироваться / созвониться",
        "example": "I'll sync with Anna on the schema design.",
        "sentenceTranslation": "Я скоординируюсь / синхронизируюсь с Анной по дизайну схемы.",
        "gapExample": "I'll ___ Anna on the schema design.",
        "answer": "sync with"
      },
      {
        "id": 50,
        "word": "to pair on",
        "translation": "работать вместе над задачей",
        "example": "Can we pair on this? It's getting complex.",
        "sentenceTranslation": "Можем поработать вместе над этим в паре? Задача становится сложной.",
        "gapExample": "Can we ___ this? It's getting complex.",
        "answer": "pair on"
      },
      {
        "id": 51,
        "word": "to hand off",
        "translation": "передать задачу другому",
        "example": "I'm handing off the ticket to Mike while I'm on leave.",
        "sentenceTranslation": "Я передаю задачу Майку, пока я в отпуске.",
        "gapExample": "I'm ___ the ticket to Mike while I'm on leave.",
        "answer": "handing off"
      },
      {
        "id": 52,
        "word": "to loop in",
        "translation": "включить кого-то в обсуждение",
        "example": "Let's loop in the security team before we deploy.",
        "sentenceTranslation": "Давай подключим команду безопасности перед деплоем.",
        "gapExample": "Let's ___ the security team before we deploy.",
        "answer": "loop in"
      },
      {
        "id": 53,
        "word": "to take offline",
        "translation": "обсудить отдельно, не на звонке",
        "example": "Good question — let's take that offline.",
        "sentenceTranslation": "Хороший вопрос, давай вынесем это из звонка и обсудим отдельно.",
        "gapExample": "Good question — let's take that ___.",
        "answer": "offline"
      },
      {
        "id": 54,
        "word": "heads-up",
        "translation": "предварительное уведомление",
        "example": "Just a heads-up — I'll be OOO on Thursday.",
        "sentenceTranslation": "Просто короткое предупреждение: в четверг я буду вне офиса.",
        "gapExample": "Just a ___ — I'll be OOO on Thursday.",
        "answer": "heads-up"
      },
      {
        "id": 55,
        "word": "OOO (out of office)",
        "translation": "вне офиса / недоступен",
        "example": "I'm OOO Monday, back Tuesday.",
        "sentenceTranslation": "В понедельник я вне офиса, вернусь во вторник.",
        "gapExample": "I'm ___ Monday, back Tuesday.",
        "answer": "OOO"
      },
      {
        "id": 56,
        "word": "roughly / approximately",
        "translation": "примерно (без точных обязательств)",
        "example": "Roughly two days, depending on the review.",
        "sentenceTranslation": "Примерно два дня, в зависимости от ревью.",
        "gapExample": "___ two days, depending on the review.",
        "answer": "Roughly"
      },
      {
        "id": 57,
        "word": "it depends on",
        "translation": "зависит от — для оценки сроков",
        "example": "It depends on how complex the edge cases are.",
        "sentenceTranslation": "Это зависит от того, насколько сложные пограничные случаи.",
        "gapExample": "___ how complex the edge cases are.",
        "answer": "It depends on"
      },
      {
        "id": 58,
        "word": "I'll need to look into it",
        "translation": "нужно разобраться перед ответом",
        "example": "I'll need to look into it before giving an estimate.",
        "sentenceTranslation": "Мне нужно будет разобраться в этом, прежде чем дать оценку.",
        "gapExample": "I'll need to ___ before giving an estimate.",
        "answer": "look into it"
      },
      {
        "id": 59,
        "word": "as far as I know",
        "translation": "насколько мне известно",
        "example": "As far as I know, the staging deploy is fine.",
        "sentenceTranslation": "Насколько мне известно, деплой на staging прошёл нормально.",
        "gapExample": "___, the staging deploy is fine.",
        "answer": "As far as I know"
      },
      {
        "id": 60,
        "word": "to give a rough estimate",
        "translation": "дать примерную оценку",
        "example": "I can give a rough estimate — maybe 3–5 days.",
        "sentenceTranslation": "Я могу дать примерную оценку: возможно, 3-5 дней.",
        "gapExample": "I can ___ — maybe 3–5 days.",
        "answer": "give a rough estimate"
      },
      {
        "id": 61,
        "word": "might / could",
        "translation": "снижает категоричность высказывания",
        "example": "This might take longer than expected.",
        "sentenceTranslation": "Это может занять больше времени, чем ожидалось.",
        "gapExample": "This ___ take longer than expected.",
        "answer": "might"
      }
    ]
  }
];
