window.VOCABULARY_DATA = [
  {
    "topic": "Code Review и технические обсуждения",
    "words": [
      {
        "id": 1,
        "word": "to allow / to permit",
        "translation": "позволять, разрешать",
        "example": "This flag allows the client to retry failed requests.",
        "sentenceTranslation": "Этот флаг позволяет клиенту повторять упавшие запросы.",
        "answer": "allow",
        "answers": [
          {
            "text": "to allow",
            "weight": 1
          },
          {
            "text": "to permit",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 2,
        "word": "average",
        "translation": "среднее значение / средний",
        "example": "The average response time increased after the deploy.",
        "sentenceTranslation": "Среднее время ответа выросло после деплоя.",
        "answer": "average",
        "answers": [
          {
            "text": "average",
            "weight": 1
          }
        ]
      },
      {
        "id": 3,
        "word": "significantly / substantially",
        "translation": "значительно, существенно",
        "example": "Memory usage dropped significantly after the refactoring.",
        "sentenceTranslation": "Потребление памяти значительно снизилось после рефакторинга.",
        "answer": "significantly",
        "answers": [
          {
            "text": "significantly",
            "weight": 1
          },
          {
            "text": "substantially",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 4,
        "word": "overall",
        "translation": "в целом, в общем",
        "example": "Overall, the approach looks solid to me.",
        "sentenceTranslation": "В целом подход мне кажется надёжным.",
        "answer": "overall",
        "answers": [
          {
            "text": "overall",
            "weight": 1
          }
        ]
      },
      {
        "id": 5,
        "word": "obviously / clearly",
        "translation": "очевидно, явно",
        "example": "Obviously, we need to handle the error case here.",
        "sentenceTranslation": "Очевидно, нам нужно обработать случай с ошибкой здесь.",
        "answer": "obviously",
        "answers": [
          {
            "text": "obviously",
            "weight": 1
          },
          {
            "text": "clearly",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 6,
        "word": "inevitable",
        "translation": "неизбежный, неминуемый",
        "example": "Some downtime during the migration is inevitable.",
        "sentenceTranslation": "Некоторый простой во время миграции неизбежен.",
        "answer": "inevitable",
        "answers": [
          {
            "text": "inevitable",
            "weight": 1
          }
        ]
      },
      {
        "id": 7,
        "word": "to determine",
        "translation": "определять, выяснять",
        "example": "We need to determine the root cause before deploying a fix.",
        "sentenceTranslation": "Нам нужно определить первопричину, прежде чем деплоить фикс.",
        "answer": "determine",
        "answers": [
          {
            "text": "to determine",
            "weight": 1
          }
        ]
      },
      {
        "id": 8,
        "word": "lack of / absence of",
        "translation": "нехватка, отсутствие",
        "example": "The bug was caused by a lack of input validation.",
        "sentenceTranslation": "Баг был вызван отсутствием валидации входных данных.",
        "answer": "lack of",
        "answers": [
          {
            "text": "lack of",
            "weight": 1
          },
          {
            "text": "absence of",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 9,
        "word": "approach",
        "translation": "подход, способ решения",
        "example": "I'm not sure this approach scales well under load.",
        "sentenceTranslation": "Не уверен, что этот подход хорошо масштабируется под нагрузкой.",
        "answer": "approach",
        "answers": [
          {
            "text": "approach",
            "weight": 1
          }
        ]
      },
      {
        "id": 10,
        "word": "to address / to resolve",
        "translation": "устранять, исправлять, решать (проблему)",
        "example": "I'll address the performance concern in the next PR.",
        "sentenceTranslation": "Я устраню проблему с производительностью в следующем PR.",
        "answer": "address",
        "answers": [
          {
            "text": "to address",
            "weight": 1
          },
          {
            "text": "to resolve",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 11,
        "word": "comments",
        "translation": "комментарии (на ревью)",
        "example": "I left some comments about error handling in the diff.",
        "sentenceTranslation": "Я оставил несколько комментариев по обработке ошибок в диффе.",
        "answer": "comments",
        "answers": [
          {
            "text": "comments",
            "weight": 1
          }
        ]
      },
      {
        "id": 12,
        "word": "refactoring",
        "translation": "рефакторинг — улучшение кода без изменения поведения",
        "example": "This refactoring makes the logic much easier to follow.",
        "sentenceTranslation": "Этот рефакторинг делает логику значительно проще для понимания.",
        "answer": "refactoring",
        "answers": [
          {
            "text": "refactoring",
            "weight": 1
          }
        ]
      },
      {
        "id": 13,
        "word": "concern / worry",
        "translation": "опасение, беспокойство (по поводу чего-то)",
        "example": "My main concern is the lack of monitoring for this service.",
        "sentenceTranslation": "Моё главное опасение — это отсутствие мониторинга для этого сервиса.",
        "answer": "concern",
        "answers": [
          {
            "text": "concern",
            "weight": 1
          },
          {
            "text": "worry",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 14,
        "word": "client",
        "translation": "клиент (сервиса или библиотеки)",
        "example": "The client retries up to three times before giving up.",
        "sentenceTranslation": "Клиент делает до трёх повторных попыток, прежде чем сдаться.",
        "answer": "client",
        "answers": [
          {
            "text": "client",
            "weight": 1
          }
        ]
      },
      {
        "id": 15,
        "word": "monitoring",
        "translation": "мониторинг — наблюдение за состоянием системы",
        "example": "We should add monitoring before rolling this out to prod.",
        "sentenceTranslation": "Нам стоит добавить мониторинг перед выкаткой этого в прод.",
        "answer": "monitoring",
        "answers": [
          {
            "text": "monitoring",
            "weight": 1
          }
        ]
      },
      {
        "id": 16,
        "word": "during",
        "translation": "во время, в течение",
        "example": "Several errors occurred during the load test.",
        "sentenceTranslation": "Во время нагрузочного теста возникло несколько ошибок.",
        "answer": "during",
        "answers": [
          {
            "text": "during",
            "weight": 1
          }
        ]
      },
      {
        "id": 17,
        "word": "usage / consumption",
        "translation": "использование, потребление (ресурсов)",
        "example": "CPU usage spiked during the batch job.",
        "sentenceTranslation": "Потребление CPU резко выросло во время batch-задачи.",
        "answer": "usage",
        "answers": [
          {
            "text": "usage",
            "weight": 1
          },
          {
            "text": "consumption",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 18,
        "word": "to recover",
        "translation": "восстанавливаться (после сбоя)",
        "example": "The service should recover automatically after a restart.",
        "sentenceTranslation": "Сервис должен автоматически восстанавливаться после перезапуска.",
        "answer": "recover",
        "answers": [
          {
            "text": "to recover",
            "weight": 1
          }
        ]
      }
    ]
  },
  {
    "topic": "Databases и PostgreSQL",
    "words": [
      {
        "id": 19,
        "word": "schema",
        "translation": "схема — структура базы данных",
        "example": "We updated the schema to add a new column for user preferences.",
        "sentenceTranslation": "Мы обновили схему, чтобы добавить новый столбец для пользовательских настроек.",
        "answer": "schema",
        "answers": [
          {
            "text": "schema",
            "weight": 1
          }
        ]
      },
      {
        "id": 20,
        "word": "row / record",
        "translation": "строка / запись",
        "example": "We lock the row before updating it to avoid conflicts.",
        "sentenceTranslation": "Мы блокируем строку перед обновлением, чтобы избежать конфликтов.",
        "answer": "row",
        "answers": [
          {
            "text": "row",
            "weight": 1
          },
          {
            "text": "record",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 21,
        "word": "constraint",
        "translation": "ограничение — правило целостности данных",
        "example": "The foreign key constraint prevents orphaned records.",
        "sentenceTranslation": "Ограничение внешнего ключа предотвращает осиротевшие записи.",
        "answer": "constraint",
        "answers": [
          {
            "text": "constraint",
            "weight": 1
          }
        ]
      },
      {
        "id": 22,
        "word": "foreign key",
        "translation": "внешний ключ — ссылка на другую таблицу",
        "example": "We added a foreign key to link orders to users.",
        "sentenceTranslation": "Мы добавили внешний ключ, чтобы связать заказы с пользователями.",
        "answer": "foreign key",
        "answers": [
          {
            "text": "foreign key",
            "weight": 1
          }
        ]
      },
      {
        "id": 23,
        "word": "primary key",
        "translation": "первичный ключ — уникальный идентификатор строки",
        "example": "We use UUID as the primary key instead of a sequential integer.",
        "sentenceTranslation": "Мы используем UUID как первичный ключ вместо последовательного целого числа.",
        "answer": "primary key",
        "answers": [
          {
            "text": "primary key",
            "weight": 1
          }
        ]
      },
      {
        "id": 24,
        "word": "nullable",
        "translation": "может быть NULL — значение необязательно",
        "example": "The phone column is nullable — not all users provide it.",
        "sentenceTranslation": "Столбец phone может быть NULL: не все пользователи его указывают.",
        "answer": "nullable",
        "answers": [
          {
            "text": "nullable",
            "weight": 1
          }
        ]
      },
      {
        "id": 25,
        "word": "sequence",
        "translation": "последовательность — генерирует уникальные числа",
        "example": "We use a sequence to auto-increment the ID column.",
        "sentenceTranslation": "Мы используем последовательность, чтобы автоматически увеличивать столбец ID.",
        "answer": "sequence",
        "answers": [
          {
            "text": "sequence",
            "weight": 1
          }
        ]
      },
      {
        "id": 26,
        "word": "index",
        "translation": "индекс — ускоряет поиск по таблице",
        "example": "Adding an index on user_id cut query time in half.",
        "sentenceTranslation": "Добавление индекса по user_id сократило время запроса вдвое.",
        "answer": "index",
        "answers": [
          {
            "text": "index",
            "weight": 1
          }
        ]
      },
      {
        "id": 27,
        "word": "execution plan",
        "translation": "план выполнения (запроса)",
        "example": "We analyzed the execution plan and found a sequential scan.",
        "sentenceTranslation": "Мы проанализировали план выполнения и нашли последовательное сканирование.",
        "answer": "execution plan",
        "answers": [
          {
            "text": "execution plan",
            "weight": 1
          }
        ]
      },
      {
        "id": 28,
        "word": "sequential scan",
        "translation": "полный перебор (таблицы) — медленно",
        "example": "The query was doing a sequential scan on 10 million rows.",
        "sentenceTranslation": "Запрос выполнял последовательное сканирование по 10 миллионам строк.",
        "answer": "sequential scan",
        "answers": [
          {
            "text": "sequential scan",
            "weight": 1
          }
        ]
      },
      {
        "id": 29,
        "word": "index scan",
        "translation": "поиск по индексу — быстро",
        "example": "After adding the index, Postgres switched to an index scan.",
        "sentenceTranslation": "После добавления индекса Postgres переключился на сканирование по индексу.",
        "answer": "index scan",
        "answers": [
          {
            "text": "index scan",
            "weight": 1
          }
        ]
      },
      {
        "id": 30,
        "word": "query",
        "translation": "запрос (к базе данных)",
        "example": "This query is too slow — it needs to be optimized.",
        "sentenceTranslation": "Этот запрос слишком медленный: его нужно оптимизировать.",
        "answer": "query",
        "answers": [
          {
            "text": "query",
            "weight": 1
          }
        ]
      },
      {
        "id": 31,
        "word": "transaction",
        "translation": "транзакция — группа операций как одно целое",
        "example": "We wrap both updates in a transaction to keep data consistent.",
        "sentenceTranslation": "Мы оборачиваем оба обновления в транзакцию, чтобы сохранить данные согласованными.",
        "answer": "transaction",
        "answers": [
          {
            "text": "transaction",
            "weight": 1
          }
        ]
      },
      {
        "id": 32,
        "word": "lock",
        "translation": "блокировка (строки или таблицы)",
        "example": "The lock prevents other transactions from modifying the row.",
        "sentenceTranslation": "Блокировка не дает другим транзакциям изменять эту строку.",
        "answer": "lock",
        "answers": [
          {
            "text": "lock",
            "weight": 1
          }
        ]
      },
      {
        "id": 33,
        "word": "deadlock",
        "translation": "взаимная блокировка — два процесса ждут друг друга",
        "example": "We got a deadlock — two transactions were waiting on each other.",
        "sentenceTranslation": "Мы получили взаимную блокировку: две транзакции ждали друг друга.",
        "answer": "deadlock",
        "answers": [
          {
            "text": "deadlock",
            "weight": 1
          }
        ]
      },
      {
        "id": 34,
        "word": "rollback",
        "translation": "откат (транзакции при ошибке)",
        "example": "The transaction failed and Postgres rolled it back automatically.",
        "sentenceTranslation": "Транзакция завершилась ошибкой, и Postgres автоматически откатил ее.",
        "answer": "rolled it back",
        "answers": [
          {
            "text": "rollback",
            "weight": 1
          }
        ]
      },
      {
        "id": 35,
        "word": "commit a transaction",
        "translation": "зафиксировать транзакцию — сохранить изменения",
        "example": "We commit the transaction only after all updates succeed.",
        "sentenceTranslation": "Мы фиксируем транзакцию только после того, как все обновления успешно выполнены.",
        "answer": "commit",
        "infinitive": "to commit a transaction",
        "answers": [
          {
            "text": "to commit a transaction",
            "weight": 1
          },
          {
            "text": "to commit the transaction",
            "weight": 0.95
          },
          {
            "text": "to commit",
            "weight": 0.9
          },
          {
            "text": "commit",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 36,
        "word": "isolation level",
        "translation": "уровень изоляции (транзакций)",
        "example": "We use read committed isolation level to avoid dirty reads.",
        "sentenceTranslation": "Мы используем уровень изоляции read committed, чтобы избежать грязных чтений.",
        "answer": "isolation level",
        "answers": [
          {
            "text": "isolation level",
            "weight": 1
          }
        ]
      },
      {
        "id": 37,
        "word": "replication",
        "translation": "репликация — копирование данных на другой сервер",
        "example": "We set up replication to improve read performance and reliability.",
        "sentenceTranslation": "Мы настроили репликацию, чтобы улучшить производительность чтения и надежность.",
        "answer": "replication",
        "answers": [
          {
            "text": "replication",
            "weight": 1
          }
        ]
      },
      {
        "id": 38,
        "word": "migration",
        "translation": "миграция — изменение структуры базы данных",
        "example": "We wrote a migration to add the new column without downtime.",
        "sentenceTranslation": "Мы написали миграцию, чтобы добавить новый столбец без простоя.",
        "answer": "migration",
        "answers": [
          {
            "text": "migration",
            "weight": 1
          }
        ]
      },
      {
        "id": 39,
        "word": "join",
        "translation": "объединение (таблиц по условию)",
        "example": "We're using a left join to include users without orders.",
        "sentenceTranslation": "Мы используем left join, чтобы включить пользователей без заказов.",
        "answer": "join",
        "answers": [
          {
            "text": "join",
            "weight": 1
          }
        ]
      },
      {
        "id": 40,
        "word": "run / execute a query",
        "translation": "выполнить запрос",
        "example": "I ran the query on the replica to avoid hitting the primary.",
        "sentenceTranslation": "Я выполнил запрос на реплике, чтобы не обращаться к primary-базе.",
        "answer": "ran the query",
        "infinitive": "to run a query / to execute a query",
        "answers": [
          {
            "text": "to run a query",
            "weight": 1
          },
          {
            "text": "to execute a query",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 41,
        "word": "optimize a query",
        "translation": "оптимизировать запрос",
        "example": "We optimized the query and response time dropped by 60%.",
        "sentenceTranslation": "Мы оптимизировали запрос, и время ответа снизилось на 60%.",
        "answer": "optimized the query",
        "infinitive": "to optimize a query",
        "answers": [
          {
            "text": "to optimize a query",
            "weight": 1
          }
        ]
      },
      {
        "id": 42,
        "word": "analyze the execution plan",
        "translation": "проанализировать план выполнения",
        "example": "Run EXPLAIN ANALYZE to see the execution plan before optimizing.",
        "sentenceTranslation": "Запусти EXPLAIN ANALYZE, чтобы увидеть план выполнения перед оптимизацией.",
        "answer": "analyze the execution plan",
        "infinitive": "to analyze the execution plan",
        "answers": [
          {
            "text": "to analyze the execution plan",
            "weight": 1
          }
        ]
      },
      {
        "id": 43,
        "word": "lock a row",
        "translation": "заблокировать строку",
        "example": "We lock the row with SELECT FOR UPDATE before modifying it.",
        "sentenceTranslation": "Мы блокируем строку через SELECT FOR UPDATE перед ее изменением.",
        "answer": "lock the row",
        "infinitive": "to lock a row",
        "answers": [
          {
            "text": "to lock a row",
            "weight": 1
          }
        ]
      },
      {
        "id": 44,
        "word": "acquire / obtain",
        "translation": "получить / захватить — используется с lock, connection, resource",
        "example": "We need to acquire a lock before updating the record.",
        "sentenceTranslation": "Нам нужно захватить блокировку перед обновлением записи.",
        "answer": "acquire / obtain",
        "infinitive": "to acquire / to obtain",
        "answers": [
          {
            "text": "to acquire",
            "weight": 1
          },
          {
            "text": "to obtain",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 45,
        "word": "avoid a deadlock",
        "translation": "избежать взаимной блокировки",
        "example": "To avoid deadlocks, always acquire locks in the same order.",
        "sentenceTranslation": "Чтобы избежать взаимных блокировок, всегда захватывай блокировки в одном и том же порядке.",
        "answer": "avoid deadlocks",
        "infinitive": "to avoid a deadlock",
        "answers": [
          {
            "text": "to avoid a deadlock",
            "weight": 1
          }
        ]
      },
      {
        "id": 46,
        "word": "handle a transaction",
        "translation": "управлять транзакцией",
        "example": "We handle transactions at the service level, not in the query.",
        "sentenceTranslation": "Мы управляем транзакциями на уровне сервиса, а не внутри запроса.",
        "answer": "handle transactions",
        "infinitive": "to handle a transaction",
        "answers": [
          {
            "text": "to handle a transaction",
            "weight": 1
          }
        ]
      },
      {
        "id": 47,
        "word": "roll back a transaction",
        "translation": "откатить транзакцию",
        "example": "If any step fails, we roll back the entire transaction.",
        "sentenceTranslation": "Если любой шаг завершается ошибкой, мы откатываем всю транзакцию.",
        "answer": "roll back",
        "infinitive": "to roll back a transaction",
        "answers": [
          {
            "text": "to roll back a transaction",
            "weight": 1
          }
        ]
      },
      {
        "id": 48,
        "word": "hit the database",
        "translation": "обратиться к базе данных",
        "example": "Every request hits the database — we need to add caching.",
        "sentenceTranslation": "Каждый запрос обращается к базе данных: нам нужно добавить кэширование.",
        "answer": "hits the database",
        "infinitive": "to hit the database",
        "answers": [
          {
            "text": "to hit the database",
            "weight": 1
          }
        ]
      },
      {
        "id": 49,
        "word": "put pressure on the database",
        "translation": "создавать нагрузку на базу данных",
        "example": "These batch jobs put a lot of pressure on the database during peak hours.",
        "sentenceTranslation": "Эти пакетные задачи создают большую нагрузку на базу данных в часы пик.",
        "answer": "put a lot of pressure on the database",
        "infinitive": "to put pressure on the database",
        "answers": [
          {
            "text": "to put pressure on the database",
            "weight": 1
          }
        ]
      },
      {
        "id": 50,
        "word": "run out of connections",
        "translation": "исчерпать пул соединений",
        "example": "We ran out of connections under high load — connection pooling fixed it.",
        "sentenceTranslation": "При высокой нагрузке у нас закончились соединения, и пул соединений это исправил.",
        "answer": "ran out of connections",
        "infinitive": "to run out of connections",
        "answers": [
          {
            "text": "to run out of connections",
            "weight": 1
          }
        ]
      },
      {
        "id": 51,
        "word": "introduce a migration",
        "translation": "добавить миграцию",
        "example": "We introduced a migration to rename the column without breaking the API.",
        "sentenceTranslation": "Мы добавили миграцию, чтобы переименовать столбец, не ломая API.",
        "answer": "introduced a migration",
        "infinitive": "to introduce a migration",
        "answers": [
          {
            "text": "to introduce a migration",
            "weight": 1
          }
        ]
      },
      {
        "id": 52,
        "word": "run without downtime",
        "translation": "выполнить без остановки сервиса",
        "example": "The migration needs to run without downtime — we have to be careful.",
        "sentenceTranslation": "Миграция должна выполниться без простоя сервиса, поэтому нужно быть осторожными.",
        "answer": "run without downtime",
        "infinitive": "to run without downtime",
        "answers": [
          {
            "text": "to run without downtime",
            "weight": 1
          }
        ]
      },
      {
        "id": 53,
        "word": "walk through / go through",
        "translation": "пошагово разобрать / провести по шагам",
        "example": "Can you walk me through the migration plan before we run it on production?",
        "sentenceTranslation": "Можешь пошагово провести меня по плану миграции перед запуском на проде?",
        "answer": "walk me through",
        "infinitive": "to walk through / to go through",
        "answers": [
          {
            "text": "to walk through",
            "weight": 1
          },
          {
            "text": "to go through",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 54,
        "word": "proposal / suggestion",
        "translation": "предложение / вариант решения",
        "example": "The proposal is to add an index first and then backfill the new column gradually.",
        "sentenceTranslation": "Предложение такое: сначала добавить индекс, а затем постепенно заполнить новый столбец.",
        "answer": "proposal",
        "answers": [
          {
            "text": "proposal",
            "weight": 1
          },
          {
            "text": "suggestion",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 55,
        "word": "reliability",
        "translation": "надежность",
        "example": "Replication improves reliability because we can fail over to another database node.",
        "sentenceTranslation": "Репликация повышает надежность, потому что мы можем переключиться на другой узел базы данных.",
        "answer": "reliability",
        "answers": [
          {
            "text": "reliability",
            "weight": 1
          }
        ]
      },
      {
        "id": 56,
        "word": "persistence",
        "translation": "сохранение данных / постоянное хранение",
        "example": "Postgres handles persistence, so the data survives service restarts.",
        "sentenceTranslation": "Postgres отвечает за постоянное хранение, поэтому данные сохраняются после перезапусков сервиса.",
        "answer": "persistence",
        "answers": [
          {
            "text": "persistence",
            "weight": 1
          }
        ]
      },
      {
        "id": 57,
        "word": "gradually",
        "translation": "постепенно",
        "example": "We will roll out the schema change gradually to reduce the risk.",
        "sentenceTranslation": "Мы будем выкатывать изменение схемы постепенно, чтобы снизить риск.",
        "answer": "gradually",
        "answers": [
          {
            "text": "gradually",
            "weight": 1
          }
        ]
      },
      {
        "id": 58,
        "word": "makes sense / sounds reasonable",
        "translation": "имеет смысл / звучит логично",
        "example": "It makes sense to add the constraint after we clean up the invalid rows.",
        "sentenceTranslation": "Имеет смысл добавить ограничение после того, как мы очистим некорректные строки.",
        "answer": "makes sense",
        "answers": [
          {
            "text": "makes sense",
            "weight": 1
          },
          {
            "text": "sounds reasonable",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 59,
        "word": "go live / launch",
        "translation": "выйти в прод / запуститься для пользователей",
        "example": "The migration can go live once the rollback plan is ready.",
        "sentenceTranslation": "Миграция может выйти в прод, когда план отката будет готов.",
        "answer": "go live",
        "infinitive": "to go live / to launch",
        "answers": [
          {
            "text": "to go live",
            "weight": 1
          },
          {
            "text": "to launch",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 60,
        "word": "end up with smth",
        "translation": "в итоге получить что-то",
        "example": "If we skip validation, we may end up with inconsistent data.",
        "sentenceTranslation": "Если мы пропустим валидацию, мы можем в итоге получить несогласованные данные.",
        "answer": "end up with",
        "infinitive": "to end up with something",
        "answers": [
          {
            "text": "to end up with something",
            "weight": 1
          }
        ]
      },
      {
        "id": 61,
        "word": "a fair point / a valid point",
        "translation": "справедливое замечание / резонный аргумент",
        "example": "That's a fair point: adding the index during peak hours could put pressure on the database.",
        "sentenceTranslation": "Это справедливое замечание: добавление индекса в часы пик может создать нагрузку на базу данных.",
        "answer": "a fair point",
        "answers": [
          {
            "text": "a fair point",
            "weight": 1
          },
          {
            "text": "a valid point",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 62,
        "word": "constraint violation",
        "translation": "нарушение ограничения",
        "example": "The insert failed because of a constraint violation on the user_id column.",
        "sentenceTranslation": "Вставка завершилась ошибкой из-за нарушения ограничения на столбце user_id.",
        "answer": "constraint violation",
        "answers": [
          {
            "text": "constraint violation",
            "weight": 1
          }
        ]
      }
    ]
  },
  {
    "topic": "Инциденты и инцидент-коллы",
    "words": [
      {
        "id": 63,
        "word": "alert",
        "translation": "уведомление о проблеме",
        "example": "We got an alert about a high error rate at 11am.",
        "sentenceTranslation": "Мы получили уведомление о высоком уровне ошибок в 11 утра",
        "answer": "alert",
        "answers": [
          {
            "text": "alert",
            "weight": 1
          }
        ]
      },
      {
        "id": 64,
        "word": "fire an alert",
        "translation": "вызвать / сгенерировать алерт",
        "example": "The monitoring rule fired an alert when the error rate went above 5%.",
        "sentenceTranslation": "Правило мониторинга вызвало алерт, когда уровень ошибок превысил 5%",
        "answer": "fire an alert",
        "infinitive": "to fire an alert",
        "answers": [
          {
            "text": "to fire an alert",
            "weight": 1
          }
        ]
      },
      {
        "id": 65,
        "word": "page someone",
        "translation": "вызвать дежурного",
        "example": "The on-call engineer got paged at 3am.",
        "sentenceTranslation": "Дежурного инженера вызвали в 3 часа ночи",
        "answer": "page someone",
        "infinitive": "to page someone",
        "answers": [
          {
            "text": "to page someone",
            "weight": 1
          }
        ]
      },
      {
        "id": 66,
        "word": "on-call",
        "translation": "дежурный инженер",
        "example": "Who is on-call this week?",
        "sentenceTranslation": "Кто дежурит на этой неделе?",
        "answer": "on-call",
        "answers": [
          {
            "text": "on-call",
            "weight": 1
          }
        ]
      },
      {
        "id": 67,
        "word": "outage / downtime",
        "translation": "отказ, недоступность сервиса",
        "example": "We had a 20-minute outage last night.",
        "sentenceTranslation": "Прошлой ночью у нас был 20-минутный отказ сервиса",
        "answer": "outage / downtime",
        "answers": [
          {
            "text": "outage",
            "weight": 1
          },
          {
            "text": "downtime",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 68,
        "word": "incident call / bridge",
        "translation": "экстренный звонок команды во время инцидента",
        "example": "Can everyone jump on the incident call?",
        "sentenceTranslation": "Все могут подключиться к инцидент-коллу?",
        "answer": "incident call / bridge",
        "answers": [
          {
            "text": "incident call",
            "weight": 1
          },
          {
            "text": "bridge",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 69,
        "word": "jump on a call / join a call",
        "translation": "быстро подключиться к звонку",
        "example": "We need everyone to jump on a call right now.",
        "sentenceTranslation": "Нам нужно, чтобы все прямо сейчас подключились к звонку",
        "answer": "jump on a call / join a call",
        "infinitive": "to jump on a call / to join a call",
        "answers": [
          {
            "text": "to jump on a call",
            "weight": 1
          },
          {
            "text": "to join a call",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 70,
        "word": "incident commander",
        "translation": "ведущий инцидент — координирует команду",
        "example": "The incident commander assigns tasks and tracks progress.",
        "sentenceTranslation": "Ведущий инцидент распределяет задачи и следит за прогрессом",
        "answer": "incident commander",
        "answers": [
          {
            "text": "incident commander",
            "weight": 1
          }
        ]
      },
      {
        "id": 71,
        "word": "own the incident",
        "translation": "взять ответственность за инцидент",
        "example": "Alex is owning this incident — he's coordinating everything.",
        "sentenceTranslation": "Алекс ведёт этот инцидент — он координирует всё",
        "answer": "own the incident",
        "infinitive": "to own the incident",
        "answers": [
          {
            "text": "to own the incident",
            "weight": 1
          }
        ]
      },
      {
        "id": 72,
        "word": "status update",
        "translation": "обновление о статусе",
        "example": "Can you give us a quick status update?",
        "sentenceTranslation": "Можешь дать нам краткое обновление по статусу?",
        "answer": "status update",
        "answers": [
          {
            "text": "status update",
            "weight": 1
          }
        ]
      },
      {
        "id": 73,
        "word": "assess the impact",
        "translation": "оценить масштаб проблемы",
        "example": "First we need to assess the impact — how many users are affected?",
        "sentenceTranslation": "Сначала нам нужно оценить масштаб — сколько пользователей пострадало?",
        "answer": "assess the impact",
        "infinitive": "to assess the impact",
        "answers": [
          {
            "text": "to assess the impact",
            "weight": 1
          }
        ]
      },
      {
        "id": 74,
        "word": "affected users",
        "translation": "пострадавшие пользователи",
        "example": "About 20% of users are affected by the outage.",
        "sentenceTranslation": "Около 20% пользователей пострадали от отказа сервиса",
        "answer": "affected users",
        "answers": [
          {
            "text": "affected users",
            "weight": 1
          }
        ]
      },
      {
        "id": 75,
        "word": "severity",
        "translation": "серьёзность / уровень инцидента (sev1, sev2)",
        "example": "This is a sev1 — the whole service is down.",
        "sentenceTranslation": "Это sev1 — весь сервис лежит",
        "answer": "severity",
        "answers": [
          {
            "text": "severity",
            "weight": 1
          }
        ]
      },
      {
        "id": 76,
        "word": "narrow down / narrow it down",
        "translation": "сузить (круг поиска причины)",
        "example": "We're trying to narrow down where exactly it's failing.",
        "sentenceTranslation": "Мы пытаемся сузить круг поиска — где именно происходит сбой",
        "answer": "narrow down / narrow it down",
        "infinitive": "to narrow down / to narrow it down",
        "answers": [
          {
            "text": "to narrow down",
            "weight": 1
          },
          {
            "text": "to narrow it down",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 77,
        "word": "reproduce",
        "translation": "воспроизвести (проблему)",
        "example": "Can anyone reproduce this locally?",
        "sentenceTranslation": "Кто-нибудь может воспроизвести это локально?",
        "answer": "reproduce",
        "infinitive": "to reproduce",
        "answers": [
          {
            "text": "to reproduce",
            "weight": 1
          }
        ]
      },
      {
        "id": 78,
        "word": "root cause",
        "translation": "корневая причина",
        "example": "The root cause was an unoptimized query under high load.",
        "sentenceTranslation": "Корневой причиной был неоптимизированный запрос при высокой нагрузке",
        "answer": "root cause",
        "answers": [
          {
            "text": "root cause",
            "weight": 1
          }
        ]
      },
      {
        "id": 79,
        "word": "roll back",
        "translation": "откатить (изменения)",
        "example": "We decided to roll back to the previous version.",
        "sentenceTranslation": "Мы решили откатиться до предыдущей версии",
        "answer": "roll back",
        "infinitive": "to roll back",
        "answers": [
          {
            "text": "to roll back",
            "weight": 1
          }
        ]
      },
      {
        "id": 80,
        "word": "revert",
        "translation": "отменить (изменения в коде или конфиге)",
        "example": "I reverted the config change and the service recovered.",
        "sentenceTranslation": "Я откатил изменение конфига, и сервис восстановился",
        "answer": "revert",
        "infinitive": "to revert",
        "answers": [
          {
            "text": "to revert",
            "weight": 1
          }
        ]
      },
      {
        "id": 81,
        "word": "hotfix / emergency fix",
        "translation": "срочный фикс в продакшен",
        "example": "We pushed a hotfix and error rate dropped immediately.",
        "sentenceTranslation": "Мы залили хотфикс, и уровень ошибок сразу упал",
        "answer": "hotfix / emergency fix",
        "answers": [
          {
            "text": "hotfix",
            "weight": 1
          },
          {
            "text": "emergency fix",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 82,
        "word": "workaround / temporary fix",
        "translation": "временное решение, не финальное",
        "example": "We applied a workaround for now — proper fix comes tomorrow.",
        "sentenceTranslation": "Пока мы применили временное решение — нормальный фикс будет завтра",
        "answer": "workaround / temporary fix",
        "answers": [
          {
            "text": "workaround",
            "weight": 1
          },
          {
            "text": "temporary fix",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 83,
        "word": "mitigate",
        "translation": "снизить (последствия), частично решить (проблему)",
        "example": "We mitigated the issue by adding more pods.",
        "sentenceTranslation": "Мы снизили последствия, добавив больше подов",
        "answer": "mitigate",
        "infinitive": "to mitigate",
        "answers": [
          {
            "text": "to mitigate",
            "weight": 1
          }
        ]
      },
      {
        "id": 84,
        "word": "recover",
        "translation": "восстановиться (после сбоя)",
        "example": "The service recovered within 10 minutes after the rollback.",
        "sentenceTranslation": "Сервис восстановился в течение 10 минут после отката",
        "answer": "recover",
        "infinitive": "to recover",
        "answers": [
          {
            "text": "to recover",
            "weight": 1
          }
        ]
      },
      {
        "id": 85,
        "word": "stabilize",
        "translation": "стабилизироваться",
        "example": "Latency stabilized after we scaled out.",
        "sentenceTranslation": "Задержка стабилизировалась после масштабирования",
        "answer": "stabilize",
        "infinitive": "to stabilize",
        "answers": [
          {
            "text": "to stabilize",
            "weight": 1
          }
        ]
      },
      {
        "id": 86,
        "word": "postmortem / post-incident review",
        "translation": "разбор инцидента после его закрытия",
        "example": "We'll do a postmortem tomorrow to go over what happened.",
        "sentenceTranslation": "Завтра проведём постмортем, чтобы разобрать, что произошло",
        "answer": "postmortem / post-incident review",
        "answers": [
          {
            "text": "postmortem",
            "weight": 1
          },
          {
            "text": "post-incident review",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 87,
        "word": "timeline",
        "translation": "хронология — что когда произошло",
        "example": "Can you put together a timeline of the incident?",
        "sentenceTranslation": "Можешь составить хронологию инцидента?",
        "answer": "timeline",
        "answers": [
          {
            "text": "timeline",
            "weight": 1
          }
        ]
      },
      {
        "id": 88,
        "word": "contributing factor",
        "translation": "сопутствующий фактор — не главная причина",
        "example": "Lack of monitoring was a contributing factor.",
        "sentenceTranslation": "Отсутствие мониторинга было сопутствующим фактором",
        "answer": "contributing factor",
        "answers": [
          {
            "text": "contributing factor",
            "weight": 1
          }
        ]
      },
      {
        "id": 89,
        "word": "action item",
        "translation": "конкретное действие по итогам разбора",
        "example": "The main action item is to add better alerting.",
        "sentenceTranslation": "Главный action item — добавить более качественный алертинг",
        "answer": "action item",
        "answers": [
          {
            "text": "action item",
            "weight": 1
          }
        ]
      },
      {
        "id": 90,
        "word": "prevent / avoid",
        "translation": "предотвратить",
        "example": "What can we do to prevent this from happening again?",
        "sentenceTranslation": "Что мы можем сделать, чтобы предотвратить повторение?",
        "answer": "prevent / avoid",
        "infinitive": "to prevent / to avoid",
        "answers": [
          {
            "text": "to prevent",
            "weight": 1
          },
          {
            "text": "to avoid",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 91,
        "word": "blameless",
        "translation": "без обвинений — культура разбора без поиска виноватых",
        "example": "Our postmortems are blameless — we focus on systems, not people.",
        "sentenceTranslation": "Наши постмортемы проходят без обвинений — мы фокусируемся на системах, а не на людях",
        "answer": "blameless",
        "answers": [
          {
            "text": "blameless",
            "weight": 1
          }
        ]
      }
    ]
  },
  {
    "topic": "Еда и напитки",
    "words": [
      {
        "id": "oxford:menu:noun",
        "word": "menu",
        "translation": "меню",
        "example": "",
        "sentenceTranslation": "",
        "answer": "menu",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "menu",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:coffee:noun",
        "word": "coffee",
        "translation": "кофе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coffee",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "coffee",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:tea:noun",
        "word": "tea",
        "translation": "чай",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tea",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "tea",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:juice:noun",
        "word": "juice",
        "translation": "сок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "juice",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "juice",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:cup:noun",
        "word": "cup",
        "translation": "чашка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cup",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "cup",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:glass:noun",
        "word": "glass",
        "translation": "стакан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "glass",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "glass",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bill:noun",
        "word": "bill",
        "translation": "счёт (в кафе)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bill",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bill",
            "weight": 1
          },
          {
            "text": "check",
            "weight": 0.9
          }
        ]
      },
      {
        "id": "oxford:order:verb",
        "word": "order",
        "translation": "заказывать (еду или напиток)",
        "example": "I want to order a sandwich.",
        "sentenceTranslation": "Я хочу заказать сэндвич.",
        "answer": "order",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "order",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:pay:verb",
        "word": "pay",
        "translation": "платить",
        "example": "Can I pay by card?",
        "sentenceTranslation": "Можно заплатить картой?",
        "answer": "pay",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "pay",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:hungry:adjective",
        "word": "hungry",
        "translation": "голодный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hungry",
        "level": "A1",
        "partOfSpeech": "прил.",
        "answers": [
          {
            "text": "hungry",
            "weight": 1
          }
        ]
      }
    ],
    "id": "oxford-cafe",
    "collection": "Oxford 3000",
    "subtopic": "В кафе",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Город и путешествия",
    "words": [
      {
        "id": "oxford:street:noun",
        "word": "street",
        "translation": "улица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "street",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "street",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:road:noun",
        "word": "road",
        "translation": "дорога (для транспорта)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "road",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "road",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:map:noun",
        "word": "map",
        "translation": "карта (местности)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "map",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "map",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:left:adverb",
        "word": "left",
        "translation": "налево",
        "example": "",
        "sentenceTranslation": "",
        "answer": "left",
        "level": "A1",
        "partOfSpeech": "нареч.",
        "answers": [
          {
            "text": "left",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:right:adverb",
        "word": "right",
        "translation": "направо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "right",
        "level": "A1",
        "partOfSpeech": "нареч.",
        "answers": [
          {
            "text": "right",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:near:preposition",
        "word": "near",
        "translation": "рядом с, недалеко от",
        "example": "We live near the park.",
        "sentenceTranslation": "Мы живём рядом с парком.",
        "answer": "near",
        "level": "A1",
        "partOfSpeech": "предл.",
        "answers": [
          {
            "text": "near",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:hotel:noun",
        "word": "hotel",
        "translation": "отель, гостиница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hotel",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "hotel",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bank:noun",
        "word": "bank",
        "translation": "банк (финансовое учреждение)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bank",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bank",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:shop:noun",
        "word": "shop",
        "translation": "магазин",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shop",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "shop",
            "weight": 1
          },
          {
            "text": "store",
            "weight": 0.9
          }
        ]
      },
      {
        "id": "oxford:park:noun",
        "word": "park",
        "translation": "парк",
        "example": "",
        "sentenceTranslation": "",
        "answer": "park",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "park",
            "weight": 1
          }
        ]
      }
    ],
    "id": "oxford-city",
    "collection": "Oxford 3000",
    "subtopic": "Места и направления",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Еда и напитки",
    "words": [
      {
        "id": "oxford:apple:noun",
        "word": "apple",
        "translation": "яблоко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apple",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "apple",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bread:noun",
        "word": "bread",
        "translation": "хлеб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bread",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bread",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:milk:noun",
        "word": "milk",
        "translation": "молоко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "milk",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "milk",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:water:noun",
        "word": "water",
        "translation": "вода",
        "example": "",
        "sentenceTranslation": "",
        "answer": "water",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "water",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:egg:noun",
        "word": "egg",
        "translation": "яйцо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "egg",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "egg",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:cheese:noun",
        "word": "cheese",
        "translation": "сыр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cheese",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "cheese",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:rice:noun",
        "word": "rice",
        "translation": "рис",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rice",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "rice",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:meat:noun",
        "word": "meat",
        "translation": "мясо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meat",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "meat",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:potato:noun",
        "word": "potato",
        "translation": "картофель, картофелина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "potato",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "potato",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:vegetable:noun",
        "word": "vegetable",
        "translation": "овощ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vegetable",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "vegetable",
            "weight": 1
          }
        ]
      }
    ],
    "id": "oxford-food",
    "collection": "Oxford 3000",
    "subtopic": "Продукты",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Повседневная жизнь",
    "words": [
      {
        "id": "oxford:house:noun",
        "word": "house",
        "translation": "дом (здание)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "house",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "house",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:room:noun",
        "word": "room",
        "translation": "комната",
        "example": "",
        "sentenceTranslation": "",
        "answer": "room",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "room",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:kitchen:noun",
        "word": "kitchen",
        "translation": "кухня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kitchen",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "kitchen",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bathroom:noun",
        "word": "bathroom",
        "translation": "ванная комната",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bathroom",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bathroom",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:door:noun",
        "word": "door",
        "translation": "дверь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "door",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "door",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:window:noun",
        "word": "window",
        "translation": "окно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "window",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "window",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bed:noun",
        "word": "bed",
        "translation": "кровать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bed",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bed",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:chair:noun",
        "word": "chair",
        "translation": "стул",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chair",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "chair",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:table:noun",
        "word": "table",
        "translation": "стол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "table",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "table",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:key:noun",
        "word": "key",
        "translation": "ключ (от двери)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "key",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "key",
            "weight": 1
          }
        ]
      }
    ],
    "id": "oxford-home",
    "collection": "Oxford 3000",
    "subtopic": "Дом и вещи",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Повседневная жизнь",
    "words": [
      {
        "id": "oxford:morning:noun",
        "word": "morning",
        "translation": "утро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "morning",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "morning",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:evening:noun",
        "word": "evening",
        "translation": "вечер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "evening",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "evening",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:night:noun",
        "word": "night",
        "translation": "ночь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "night",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "night",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:breakfast:noun",
        "word": "breakfast",
        "translation": "завтрак",
        "example": "",
        "sentenceTranslation": "",
        "answer": "breakfast",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "breakfast",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:lunch:noun",
        "word": "lunch",
        "translation": "обед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lunch",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "lunch",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:dinner:noun",
        "word": "dinner",
        "translation": "ужин",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dinner",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "dinner",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:sleep:verb",
        "word": "sleep",
        "translation": "спать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sleep",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "sleep",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:wash:verb",
        "word": "wash",
        "translation": "мыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wash",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "wash",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:work:verb",
        "word": "work",
        "translation": "работать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "work",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "work",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:relax:verb",
        "word": "relax",
        "translation": "расслабляться, отдыхать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relax",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "relax",
            "weight": 1
          },
          {
            "text": "rest",
            "weight": 0.9
          }
        ]
      }
    ],
    "id": "oxford-routine",
    "collection": "Oxford 3000",
    "subtopic": "Распорядок дня",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Город и путешествия",
    "words": [
      {
        "id": "oxford:bus:noun",
        "word": "bus",
        "translation": "автобус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bus",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bus",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:train:noun",
        "word": "train",
        "translation": "поезд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "train",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "train",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:car:noun",
        "word": "car",
        "translation": "автомобиль, машина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "car",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "car",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:taxi:noun",
        "word": "taxi",
        "translation": "такси",
        "example": "",
        "sentenceTranslation": "",
        "answer": "taxi",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "taxi",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:bicycle:noun",
        "word": "bicycle",
        "translation": "велосипед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bicycle",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "bicycle",
            "weight": 1
          },
          {
            "text": "bike",
            "weight": 0.9
          }
        ]
      },
      {
        "id": "oxford:plane:noun",
        "word": "plane",
        "translation": "самолёт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plane",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "plane",
            "weight": 1
          },
          {
            "text": "airplane",
            "weight": 0.9
          },
          {
            "text": "aeroplane",
            "weight": 0.9
          }
        ]
      },
      {
        "id": "oxford:ticket:noun",
        "word": "ticket",
        "translation": "билет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ticket",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "ticket",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:station:noun",
        "word": "station",
        "translation": "станция, вокзал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "station",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "station",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:airport:noun",
        "word": "airport",
        "translation": "аэропорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "airport",
        "level": "A1",
        "partOfSpeech": "сущ.",
        "answers": [
          {
            "text": "airport",
            "weight": 1
          }
        ]
      },
      {
        "id": "oxford:travel:verb",
        "word": "travel",
        "translation": "путешествовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "travel",
        "level": "A1",
        "partOfSpeech": "гл.",
        "answers": [
          {
            "text": "travel",
            "weight": 1
          }
        ]
      }
    ],
    "id": "oxford-transport",
    "collection": "Oxford 3000",
    "subtopic": "Транспорт",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Время и порядок",
    "words": [
      {
        "id": "oxford:after:prep:a1",
        "word": "after",
        "translation": "после",
        "example": "",
        "sentenceTranslation": "",
        "answer": "after",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:after:conj-adv:a2",
        "word": "after",
        "translation": "после",
        "example": "",
        "sentenceTranslation": "",
        "answer": "after",
        "level": "A2",
        "partOfSpeech": "союз, нареч."
      },
      {
        "id": "oxford:afternoon:n:a1",
        "word": "afternoon",
        "translation": "вторая половина дня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "afternoon",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:again:adv:a1",
        "word": "again",
        "translation": "снова",
        "example": "",
        "sentenceTranslation": "",
        "answer": "again",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:already:adv:a2",
        "word": "already",
        "translation": "уже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "already",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:always:adv:a1",
        "word": "always",
        "translation": "всегда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "always",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:april:n:a1",
        "word": "April",
        "translation": "апрель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "April",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:august:n:a1",
        "word": "August",
        "translation": "август",
        "example": "",
        "sentenceTranslation": "",
        "answer": "August",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:before:prep:a1",
        "word": "before",
        "translation": "раньше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "before",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:before:conj-adv:a2",
        "word": "before",
        "translation": "раньше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "before",
        "level": "A2",
        "partOfSpeech": "союз, нареч."
      },
      {
        "id": "oxford:daily:adj:a2",
        "word": "daily",
        "translation": "ежедневный; ежедневно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "daily",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:daily:adv:b1",
        "word": "daily",
        "translation": "ежедневный; ежедневно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "daily",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:december:n:a1",
        "word": "December",
        "translation": "декабрь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "December",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:during:prep:a1",
        "word": "during",
        "translation": "во время",
        "example": "",
        "sentenceTranslation": "",
        "answer": "during",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:early:adj-adv:a1",
        "word": "early",
        "translation": "ранний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "early",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:february:n:a1",
        "word": "February",
        "translation": "февраль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "February",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:finally:adv:a2",
        "word": "finally",
        "translation": "наконец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finally",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:first:det-number-adv:a1",
        "word": "first",
        "translation": "первый; сначала",
        "example": "",
        "sentenceTranslation": "",
        "answer": "first",
        "level": "A1",
        "partOfSpeech": "опред., числ., нареч."
      },
      {
        "id": "oxford:first:n:a2",
        "word": "first",
        "translation": "первый; сначала",
        "example": "",
        "sentenceTranslation": "",
        "answer": "first",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:frequently:adv:b1",
        "word": "frequently",
        "translation": "часто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frequently",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:friday:n:a1",
        "word": "Friday",
        "translation": "пятница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Friday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:future:n:a1",
        "word": "future",
        "translation": "будущее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "future",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:future:adj:a2",
        "word": "future",
        "translation": "будущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "future",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:immediately:adv:a2",
        "word": "immediately",
        "translation": "немедленно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "immediately",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:january:n:a1",
        "word": "January",
        "translation": "январь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "January",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:july:n:a1",
        "word": "July",
        "translation": "июль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "July",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:june:n:a1",
        "word": "June",
        "translation": "июнь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "June",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:last:det:a1",
        "word": "last",
        "translation": "последний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "last",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:last:adv-n:a2",
        "word": "last",
        "translation": "последний; последнее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "last",
        "level": "A2",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:last:v:a2:2",
        "word": "last",
        "translation": "длиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "last",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:late:adj-adv:a1",
        "word": "late",
        "translation": "поздно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "late",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:march:n:a1",
        "word": "March",
        "translation": "март",
        "example": "",
        "sentenceTranslation": "",
        "answer": "March",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:may:n:a1",
        "word": "May",
        "translation": "май",
        "example": "",
        "sentenceTranslation": "",
        "answer": "May",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:may:modal-v:a2",
        "word": "may",
        "translation": "мочь; возможно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "may",
        "level": "A2",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:midnight:n:a1",
        "word": "midnight",
        "translation": "полночь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "midnight",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:moment:n:a1",
        "word": "moment",
        "translation": "момент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "moment",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:monday:n:a1",
        "word": "Monday",
        "translation": "понедельник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Monday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:never:adv:a1",
        "word": "never",
        "translation": "никогда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "never",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:next:adj-adv:a1",
        "word": "next",
        "translation": "следующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "next",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:next:n:b1",
        "word": "next",
        "translation": "следующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "next",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:november:n:a1",
        "word": "November",
        "translation": "ноябрь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "November",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:now:adv:a1",
        "word": "now",
        "translation": "сейчас",
        "example": "",
        "sentenceTranslation": "",
        "answer": "now",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:now:conj:b1",
        "word": "now",
        "translation": "сейчас",
        "example": "",
        "sentenceTranslation": "",
        "answer": "now",
        "level": "B1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:october:n:a1",
        "word": "October",
        "translation": "октябрь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "October",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:often:adv:a1",
        "word": "often",
        "translation": "часто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "often",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:past:adj-n-prep:a1",
        "word": "past",
        "translation": "прошлое; прошлый; мимо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "past",
        "level": "A1",
        "partOfSpeech": "прил., сущ., предл."
      },
      {
        "id": "oxford:past:adv:a2",
        "word": "past",
        "translation": "прошлое",
        "example": "",
        "sentenceTranslation": "",
        "answer": "past",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:period:n:a1",
        "word": "period",
        "translation": "период",
        "example": "",
        "sentenceTranslation": "",
        "answer": "period",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:present:adj-n:a1",
        "word": "present",
        "translation": "настоящий; присутствующий; подарок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "present",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:present:v:a2",
        "word": "present",
        "translation": "представлять; вручать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "present",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:previous:adj:b1",
        "word": "previous",
        "translation": "предыдущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "previous",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rarely:adv:b1",
        "word": "rarely",
        "translation": "редко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rarely",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:recently:adv:a2",
        "word": "recently",
        "translation": "недавно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recently",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:saturday:n:a1",
        "word": "Saturday",
        "translation": "суббота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Saturday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:september:n:a1",
        "word": "September",
        "translation": "сентябрь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "September",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:since:prep-conj:a2",
        "word": "since",
        "translation": "с; с тех пор как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "since",
        "level": "A2",
        "partOfSpeech": "предл., союз"
      },
      {
        "id": "oxford:since:adv:b1",
        "word": "since",
        "translation": "с; с тех пор как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "since",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:sometimes:adv:a1",
        "word": "sometimes",
        "translation": "иногда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sometimes",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:soon:adv:a1",
        "word": "soon",
        "translation": "скоро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soon",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:still:adv:a1",
        "word": "still",
        "translation": "все еще",
        "example": "",
        "sentenceTranslation": "",
        "answer": "still",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:still:adj:b1",
        "word": "still",
        "translation": "неподвижный; тихий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "still",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sunday:n:a1",
        "word": "Sunday",
        "translation": "воскресенье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Sunday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:then:adv:a1",
        "word": "then",
        "translation": "тогда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "then",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:thursday:n:a1",
        "word": "Thursday",
        "translation": "четверг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Thursday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:today:adv-n:a1",
        "word": "today",
        "translation": "сегодня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "today",
        "level": "A1",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:tomorrow:adv-n:a1",
        "word": "tomorrow",
        "translation": "завтра",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tomorrow",
        "level": "A1",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:tuesday:n:a1",
        "word": "Tuesday",
        "translation": "вторник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Tuesday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:until:conj-prep:a1",
        "word": "until",
        "translation": "пока",
        "example": "",
        "sentenceTranslation": "",
        "answer": "until",
        "level": "A1",
        "partOfSpeech": "союз, предл."
      },
      {
        "id": "oxford:usually:adv:a1",
        "word": "usually",
        "translation": "обычно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "usually",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:wednesday:n:a1",
        "word": "Wednesday",
        "translation": "среда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Wednesday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:weekend:n:a1",
        "word": "weekend",
        "translation": "выходные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weekend",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:while:conj:a2",
        "word": "while",
        "translation": "пока; в то время как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "while",
        "level": "A2",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:while:n:b1",
        "word": "while",
        "translation": "пока; в то время как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "while",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:yesterday:adv-n:a1",
        "word": "yesterday",
        "translation": "вчера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yesterday",
        "level": "A1",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:yet:adv:a2",
        "word": "yet",
        "translation": "еще",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yet",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:yet:conj:b2",
        "word": "yet",
        "translation": "еще",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yet",
        "level": "B2",
        "partOfSpeech": "союз"
      }
    ],
    "id": "oxford-extra-01",
    "collection": "Oxford 3000",
    "subtopic": "Время и частота",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Город и путешествия",
    "words": [
      {
        "id": "oxford:address:n:a1",
        "word": "address",
        "translation": "адрес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "address",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:address:v:b2",
        "word": "address",
        "translation": "обращаться к; рассматривать вопрос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "address",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:area:n:a1",
        "word": "area",
        "translation": "площадь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "area",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bank:n:b1",
        "word": "bank",
        "translation": "банк",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bank",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bar:n:a1",
        "word": "bar",
        "translation": "бар; перекладина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bar",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bar:v:b2",
        "word": "bar",
        "translation": "преграждать; запрещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bar",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bridge:n:a2",
        "word": "bridge",
        "translation": "мост",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bridge",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cafe:n:a1",
        "word": "cafe",
        "translation": "кафе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cafe",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:capital:n-adj:a1",
        "word": "capital",
        "translation": "столица; заглавная буква; главный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "capital",
        "level": "A1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:centre:n:a1",
        "word": "centre",
        "translation": "центр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "centre",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:centre:v:b1",
        "word": "centre",
        "translation": "сосредоточивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "centre",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:church:n:a2",
        "word": "church",
        "translation": "церковь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "church",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cinema:n:a1",
        "word": "cinema",
        "translation": "кино",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cinema",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:city:n:a1",
        "word": "city",
        "translation": "город",
        "example": "",
        "sentenceTranslation": "",
        "answer": "city",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:country:n:a1",
        "word": "country",
        "translation": "страна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "country",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:farm:n:a1",
        "word": "farm",
        "translation": "ферма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "farm",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:farm:v:a2",
        "word": "farm",
        "translation": "заниматься сельским хозяйством",
        "example": "",
        "sentenceTranslation": "",
        "answer": "farm",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:location:n:b1",
        "word": "location",
        "translation": "местоположение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "location",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:market:n:a1",
        "word": "market",
        "translation": "рынок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "market",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:market:v:b1",
        "word": "market",
        "translation": "продавать; продвигать на рынке",
        "example": "",
        "sentenceTranslation": "",
        "answer": "market",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:museum:n:a1",
        "word": "museum",
        "translation": "музей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "museum",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:neighbourhood:n:b1",
        "word": "neighbourhood",
        "translation": "окрестности",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neighbourhood",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:path:n:b1",
        "word": "path",
        "translation": "путь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "path",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:place:n:a1",
        "word": "place",
        "translation": "место",
        "example": "",
        "sentenceTranslation": "",
        "answer": "place",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:place:v:b1",
        "word": "place",
        "translation": "помещать; размещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "place",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:port:n:b1",
        "word": "port",
        "translation": "порт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "port",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:region:n:a2",
        "word": "region",
        "translation": "регион",
        "example": "",
        "sentenceTranslation": "",
        "answer": "region",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:square:adj-n:a2",
        "word": "square",
        "translation": "квадрат; квадратный; площадь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "square",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:store:n:a2",
        "word": "store",
        "translation": "магазин; запас",
        "example": "",
        "sentenceTranslation": "",
        "answer": "store",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:store:v:b1",
        "word": "store",
        "translation": "хранить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "store",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:theatre:n:a1",
        "word": "theatre",
        "translation": "театр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "theatre",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:town:n:a1",
        "word": "town",
        "translation": "город",
        "example": "",
        "sentenceTranslation": "",
        "answer": "town",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:village:n:a1",
        "word": "village",
        "translation": "деревня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "village",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-02",
    "collection": "Oxford 3000",
    "subtopic": "Город и места",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Город и путешествия",
    "words": [
      {
        "id": "oxford:abroad:adv:a2",
        "word": "abroad",
        "translation": "за границей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "abroad",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:arrival:n:b1",
        "word": "arrival",
        "translation": "прибытие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arrival",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:arrive:v:a1",
        "word": "arrive",
        "translation": "прибыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arrive",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bike:n:a1",
        "word": "bike",
        "translation": "велосипед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bike",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:boat:n:a1",
        "word": "boat",
        "translation": "лодка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boat",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cycle:n-v:a2",
        "word": "cycle",
        "translation": "цикл; ездить на велосипеде",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cycle",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:delay:v-n:b2",
        "word": "delay",
        "translation": "задержка; задерживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "delay",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:departure:n:b1",
        "word": "departure",
        "translation": "отъезд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "departure",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:destination:n:b1",
        "word": "destination",
        "translation": "пункт назначения",
        "example": "",
        "sentenceTranslation": "",
        "answer": "destination",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:direction:n:a2",
        "word": "direction",
        "translation": "направление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "direction",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:distance:n:a2",
        "word": "distance",
        "translation": "расстояние",
        "example": "",
        "sentenceTranslation": "",
        "answer": "distance",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drive:v:a1",
        "word": "drive",
        "translation": "водить машину; ехать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drive",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:drive:n:a2",
        "word": "drive",
        "translation": "поездка на машине",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drive",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:east:n-adj-adv:a1",
        "word": "east",
        "translation": "восток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "east",
        "level": "A1",
        "partOfSpeech": "сущ., прил., нареч."
      },
      {
        "id": "oxford:flight:n:a1",
        "word": "flight",
        "translation": "полет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flight",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:holiday:n:a1",
        "word": "holiday",
        "translation": "праздник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "holiday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:journey:n:a1",
        "word": "journey",
        "translation": "путешествие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "journey",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leave:v:a1",
        "word": "leave",
        "translation": "уходить; оставлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leave",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:leave:n:b2",
        "word": "leave",
        "translation": "отпуск; разрешение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leave",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:map:v:b2",
        "word": "map",
        "translation": "наносить на карту",
        "example": "",
        "sentenceTranslation": "",
        "answer": "map",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:motorcycle:n:a2",
        "word": "motorcycle",
        "translation": "мотоцикл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "motorcycle",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:north:n-adj-adv:a1",
        "word": "north",
        "translation": "север",
        "example": "",
        "sentenceTranslation": "",
        "answer": "north",
        "level": "A1",
        "partOfSpeech": "сущ., прил., нареч."
      },
      {
        "id": "oxford:parking:n:a2",
        "word": "parking",
        "translation": "парковка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "parking",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:passenger:n:a2",
        "word": "passenger",
        "translation": "пассажир",
        "example": "",
        "sentenceTranslation": "",
        "answer": "passenger",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:passport:n:a1",
        "word": "passport",
        "translation": "паспорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "passport",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:platform:n:a2",
        "word": "platform",
        "translation": "платформа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "platform",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:railway:n:a2",
        "word": "railway",
        "translation": "железная дорога",
        "example": "",
        "sentenceTranslation": "",
        "answer": "railway",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:return:v-n:a1",
        "word": "return",
        "translation": "возвращение; возвращаться; возвращать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "return",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:ride:v:a1",
        "word": "ride",
        "translation": "ехать верхом; кататься",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ride",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ride:n:a2",
        "word": "ride",
        "translation": "поездка; катание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ride",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:route:n:a2",
        "word": "route",
        "translation": "маршрут",
        "example": "",
        "sentenceTranslation": "",
        "answer": "route",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ship:n:a2",
        "word": "ship",
        "translation": "корабль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ship",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ship:v:b2",
        "word": "ship",
        "translation": "перевозить; отправлять груз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ship",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:south:n-adj-adv:a1",
        "word": "south",
        "translation": "юг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "south",
        "level": "A1",
        "partOfSpeech": "сущ., прил., нареч."
      },
      {
        "id": "oxford:straight:adv-adj:a2",
        "word": "straight",
        "translation": "прямой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "straight",
        "level": "A2",
        "partOfSpeech": "нареч., прил."
      },
      {
        "id": "oxford:tour:n:a2",
        "word": "tour",
        "translation": "тур; экскурсия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tour",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tour:v:b1",
        "word": "tour",
        "translation": "совершать поездку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tour",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:tourist:n:a1",
        "word": "tourist",
        "translation": "турист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tourist",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:traffic:n:a1",
        "word": "traffic",
        "translation": "трафик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "traffic",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:train:v:a2",
        "word": "train",
        "translation": "тренировать; обучать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "train",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:transport:n:a2",
        "word": "transport",
        "translation": "транспорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "transport",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:transport:v:b1",
        "word": "transport",
        "translation": "перевозить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "transport",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:trip:n:a1",
        "word": "trip",
        "translation": "поездка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trip",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trip:v:b2",
        "word": "trip",
        "translation": "спотыкаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trip",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:turn:v-n:a1",
        "word": "turn",
        "translation": "поворот; очередь; поворачивать; превращаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "turn",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:vacation:n:a1",
        "word": "vacation",
        "translation": "отпуск",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vacation",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:vehicle:n:a2",
        "word": "vehicle",
        "translation": "транспортное средство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vehicle",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:visit:v-n:a1",
        "word": "visit",
        "translation": "визит; посещение; посещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "visit",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:visitor:n:a1",
        "word": "visitor",
        "translation": "посетитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "visitor",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:walk:v-n:a1",
        "word": "walk",
        "translation": "прогулка; ходить; гулять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "walk",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:west:n-adj-adv:a1",
        "word": "west",
        "translation": "запад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "west",
        "level": "A1",
        "partOfSpeech": "сущ., прил., нареч."
      }
    ],
    "id": "oxford-extra-03",
    "collection": "Oxford 3000",
    "subtopic": "Поездки и транспорт",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:a-an:indefinite-article:a1",
        "word": "a / an",
        "translation": "неопределённый артикль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "a / an",
        "level": "A1",
        "partOfSpeech": "артикль",
        "answers": [
          {
            "text": "a",
            "weight": 1
          },
          {
            "text": "an",
            "weight": 0.8
          }
        ]
      },
      {
        "id": "oxford:all:det-pron:a1",
        "word": "all",
        "translation": "весь; все",
        "example": "",
        "sentenceTranslation": "",
        "answer": "all",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:an:indefinite-article:a1",
        "word": "an",
        "translation": "неопределённый артикль перед гласным звуком",
        "example": "",
        "sentenceTranslation": "",
        "answer": "an",
        "level": "A1",
        "partOfSpeech": "артикль"
      },
      {
        "id": "oxford:another:det-pron:a1",
        "word": "another",
        "translation": "другой; ещё один",
        "example": "",
        "sentenceTranslation": "",
        "answer": "another",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:any:det-pron:a1",
        "word": "any",
        "translation": "любой; какой-либо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "any",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:both:det-pron:a1",
        "word": "both",
        "translation": "оба; обе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "both",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:dozen:n-det:b2",
        "word": "dozen",
        "translation": "дюжина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dozen",
        "level": "B2",
        "partOfSpeech": "сущ., опред."
      },
      {
        "id": "oxford:each:det-pron-adv:a1",
        "word": "each",
        "translation": "каждый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "each",
        "level": "A1",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:either:det-pron-adv:a2",
        "word": "either",
        "translation": "любой из двух; тоже не",
        "example": "",
        "sentenceTranslation": "",
        "answer": "either",
        "level": "A2",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:enough:det-pron-adv:a1",
        "word": "enough",
        "translation": "достаточно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enough",
        "level": "A1",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:every:det:a1",
        "word": "every",
        "translation": "каждый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "every",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:few:det-adj-pron:a1",
        "word": "few",
        "translation": "немногие; мало",
        "example": "",
        "sentenceTranslation": "",
        "answer": "few",
        "level": "A1",
        "partOfSpeech": "опред., прил., мест."
      },
      {
        "id": "oxford:her:pron-det:a1",
        "word": "her",
        "translation": "её; ей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "her",
        "level": "A1",
        "partOfSpeech": "мест., опред."
      },
      {
        "id": "oxford:his:det:a1",
        "word": "his",
        "translation": "его",
        "example": "",
        "sentenceTranslation": "",
        "answer": "his",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:its:det:a1",
        "word": "its",
        "translation": "его; её (о предмете)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "its",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:least:det-pron-adv:a2",
        "word": "least",
        "translation": "минимум",
        "example": "",
        "sentenceTranslation": "",
        "answer": "least",
        "level": "A2",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:less:det-pron-adv:a2",
        "word": "less",
        "translation": "меньше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "less",
        "level": "A2",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:little:adj-det-pron:a1",
        "word": "little",
        "translation": "маленький",
        "example": "",
        "sentenceTranslation": "",
        "answer": "little",
        "level": "A1",
        "partOfSpeech": "прил., опред., мест."
      },
      {
        "id": "oxford:lot:pron-det-adv:a1",
        "word": "lot",
        "translation": "много",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lot",
        "level": "A1",
        "partOfSpeech": "мест., опред., нареч."
      },
      {
        "id": "oxford:many:det-pron:a1",
        "word": "many",
        "translation": "много",
        "example": "",
        "sentenceTranslation": "",
        "answer": "many",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:more:det-pron-adv:a1",
        "word": "more",
        "translation": "больше; более",
        "example": "",
        "sentenceTranslation": "",
        "answer": "more",
        "level": "A1",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:most:det-pron-adv:a1",
        "word": "most",
        "translation": "большинство; самый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "most",
        "level": "A1",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:much:det-pron-adv:a1",
        "word": "much",
        "translation": "много; очень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "much",
        "level": "A1",
        "partOfSpeech": "опред., мест., нареч."
      },
      {
        "id": "oxford:my:det:a1",
        "word": "my",
        "translation": "мой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "my",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:neither:det-pron:a2",
        "word": "neither",
        "translation": "ни один из двух",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neither",
        "level": "A2",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:no:exclam-det:a1",
        "word": "no",
        "translation": "нет; никакой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "no",
        "level": "A1",
        "partOfSpeech": "межд., опред."
      },
      {
        "id": "oxford:one:number-det-pron:a1",
        "word": "one",
        "translation": "один",
        "example": "",
        "sentenceTranslation": "",
        "answer": "one",
        "level": "A1",
        "partOfSpeech": "числ., опред., мест."
      },
      {
        "id": "oxford:our:det:a1",
        "word": "our",
        "translation": "наш",
        "example": "",
        "sentenceTranslation": "",
        "answer": "our",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:several:det-pron:a2",
        "word": "several",
        "translation": "несколько",
        "example": "",
        "sentenceTranslation": "",
        "answer": "several",
        "level": "A2",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:some:det-pron:a1",
        "word": "some",
        "translation": "некоторый; немного",
        "example": "",
        "sentenceTranslation": "",
        "answer": "some",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:such:det-pron:a2",
        "word": "such",
        "translation": "такой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "such",
        "level": "A2",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:that:det-pron-conj:a1",
        "word": "that",
        "translation": "тот; что",
        "example": "",
        "sentenceTranslation": "",
        "answer": "that",
        "level": "A1",
        "partOfSpeech": "опред., мест., союз"
      },
      {
        "id": "oxford:the:definite-article:a1",
        "word": "the",
        "translation": "определённый артикль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "the",
        "level": "A1",
        "partOfSpeech": "definite article"
      },
      {
        "id": "oxford:their:det:a1",
        "word": "their",
        "translation": "их",
        "example": "",
        "sentenceTranslation": "",
        "answer": "their",
        "level": "A1",
        "partOfSpeech": "опред."
      },
      {
        "id": "oxford:this:det-pron:a1",
        "word": "this",
        "translation": "этот; это",
        "example": "",
        "sentenceTranslation": "",
        "answer": "this",
        "level": "A1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:what:pron-det:a1",
        "word": "what",
        "translation": "что; какой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "what",
        "level": "A1",
        "partOfSpeech": "мест., опред."
      },
      {
        "id": "oxford:whatever:det-pron:b1",
        "word": "whatever",
        "translation": "что угодно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whatever",
        "level": "B1",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:which:pron-det:a1",
        "word": "which",
        "translation": "который; какой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "which",
        "level": "A1",
        "partOfSpeech": "мест., опред."
      },
      {
        "id": "oxford:whose:det-pron:a2",
        "word": "whose",
        "translation": "чей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whose",
        "level": "A2",
        "partOfSpeech": "опред., мест."
      },
      {
        "id": "oxford:your:det:a1",
        "word": "your",
        "translation": "твой; ваш",
        "example": "",
        "sentenceTranslation": "",
        "answer": "your",
        "level": "A1",
        "partOfSpeech": "опред."
      }
    ],
    "id": "oxford-extra-04",
    "collection": "Oxford 3000",
    "subtopic": "Артикли и определители",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:ah:exclam:a2",
        "word": "ah",
        "translation": "ах",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ah",
        "level": "A2",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:all-right:adj-adv-exclam:a2",
        "word": "all right",
        "translation": "все в порядке",
        "example": "",
        "sentenceTranslation": "",
        "answer": "all right",
        "level": "A2",
        "partOfSpeech": "прил., нареч., межд."
      },
      {
        "id": "oxford:attention:n-exclam:a2",
        "word": "attention",
        "translation": "внимание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attention",
        "level": "A2",
        "partOfSpeech": "сущ., межд."
      },
      {
        "id": "oxford:bye:exclam:a1",
        "word": "bye",
        "translation": "пока",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bye",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:dear:exclam:a2",
        "word": "dear",
        "translation": "дорогой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dear",
        "level": "A2",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:goodbye:exclam-n:a1",
        "word": "goodbye",
        "translation": "до свидания",
        "example": "",
        "sentenceTranslation": "",
        "answer": "goodbye",
        "level": "A1",
        "partOfSpeech": "межд., сущ."
      },
      {
        "id": "oxford:hello:exclam-n:a1",
        "word": "hello",
        "translation": "привет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hello",
        "level": "A1",
        "partOfSpeech": "межд., сущ."
      },
      {
        "id": "oxford:hey:exclam:a1",
        "word": "hey",
        "translation": "эй",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hey",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:hi:exclam:a1",
        "word": "hi",
        "translation": "привет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hi",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:oh:exclam:a1",
        "word": "oh",
        "translation": "ох",
        "example": "",
        "sentenceTranslation": "",
        "answer": "oh",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:ok:exclam-adj-adv:a1",
        "word": "OK",
        "translation": "ОК",
        "example": "",
        "sentenceTranslation": "",
        "answer": "OK",
        "level": "A1",
        "partOfSpeech": "межд., прил., нареч."
      },
      {
        "id": "oxford:please:exclam:a1",
        "word": "please",
        "translation": "пожалуйста",
        "example": "",
        "sentenceTranslation": "",
        "answer": "please",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:sorry:adj-exclam:a1",
        "word": "sorry",
        "translation": "извини",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sorry",
        "level": "A1",
        "partOfSpeech": "прил., межд."
      },
      {
        "id": "oxford:thanks:exclam-n:a1",
        "word": "thanks",
        "translation": "спасибо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thanks",
        "level": "A1",
        "partOfSpeech": "межд., сущ."
      },
      {
        "id": "oxford:welcome:exclam-v-adj:a1",
        "word": "welcome",
        "translation": "приветствовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "welcome",
        "level": "A1",
        "partOfSpeech": "межд., гл., прил."
      },
      {
        "id": "oxford:well:adv-adj-exclam:a1",
        "word": "well",
        "translation": "ну",
        "example": "",
        "sentenceTranslation": "",
        "answer": "well",
        "level": "A1",
        "partOfSpeech": "нареч., прил., межд."
      },
      {
        "id": "oxford:wow:exclam:a2",
        "word": "wow",
        "translation": "вау",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wow",
        "level": "A2",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:yeah:exclam:a1",
        "word": "yeah",
        "translation": "да",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yeah",
        "level": "A1",
        "partOfSpeech": "межд."
      },
      {
        "id": "oxford:yes:exclam:a1",
        "word": "yes",
        "translation": "да",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yes",
        "level": "A1",
        "partOfSpeech": "межд."
      }
    ],
    "id": "oxford-extra-05",
    "collection": "Oxford 3000",
    "subtopic": "Междометия",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:anybody:pron:a2",
        "word": "anybody",
        "translation": "кто-нибудь; любой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anybody",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:anyone:pron:a1",
        "word": "anyone",
        "translation": "кто-нибудь; любой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anyone",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:anything:pron:a1",
        "word": "anything",
        "translation": "что-нибудь; всё что угодно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anything",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:anywhere:adv-pron:a2",
        "word": "anywhere",
        "translation": "где угодно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anywhere",
        "level": "A2",
        "partOfSpeech": "нареч., мест."
      },
      {
        "id": "oxford:everybody:pron:a1",
        "word": "everybody",
        "translation": "все",
        "example": "",
        "sentenceTranslation": "",
        "answer": "everybody",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:everyone:pron:a1",
        "word": "everyone",
        "translation": "все",
        "example": "",
        "sentenceTranslation": "",
        "answer": "everyone",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:everything:pron:a1",
        "word": "everything",
        "translation": "всё",
        "example": "",
        "sentenceTranslation": "",
        "answer": "everything",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:he:pron:a1",
        "word": "he",
        "translation": "он",
        "example": "",
        "sentenceTranslation": "",
        "answer": "he",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:hers:pron:a2",
        "word": "hers",
        "translation": "ее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hers",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:herself:pron:a2",
        "word": "herself",
        "translation": "сама",
        "example": "",
        "sentenceTranslation": "",
        "answer": "herself",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:him:pron:a1",
        "word": "him",
        "translation": "его; ему",
        "example": "",
        "sentenceTranslation": "",
        "answer": "him",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:himself:pron:a2",
        "word": "himself",
        "translation": "сам",
        "example": "",
        "sentenceTranslation": "",
        "answer": "himself",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:his:pron:a2",
        "word": "his",
        "translation": "его",
        "example": "",
        "sentenceTranslation": "",
        "answer": "his",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:i:pron:a1",
        "word": "I",
        "translation": "я",
        "example": "",
        "sentenceTranslation": "",
        "answer": "I",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:it:pron:a1",
        "word": "it",
        "translation": "оно; это",
        "example": "",
        "sentenceTranslation": "",
        "answer": "it",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:itself:pron:a2",
        "word": "itself",
        "translation": "сам",
        "example": "",
        "sentenceTranslation": "",
        "answer": "itself",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:me:pron:a1",
        "word": "me",
        "translation": "я",
        "example": "",
        "sentenceTranslation": "",
        "answer": "me",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:mine:pron:a2",
        "word": "mine",
        "translation": "мой; моя; моё",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mine",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:myself:pron:a2",
        "word": "myself",
        "translation": "я сам",
        "example": "",
        "sentenceTranslation": "",
        "answer": "myself",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:no-one:pron:a1",
        "word": "no one",
        "translation": "никто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "no one",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:nobody:pron:a1",
        "word": "nobody",
        "translation": "никто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nobody",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:none:pron:a2",
        "word": "none",
        "translation": "ни один; ничто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "none",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:nothing:pron:a1",
        "word": "nothing",
        "translation": "ничего",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nothing",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:other:adj-pron:a1",
        "word": "other",
        "translation": "другой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "other",
        "level": "A1",
        "partOfSpeech": "прил., мест."
      },
      {
        "id": "oxford:ours:pron:b1",
        "word": "ours",
        "translation": "наш; наша; наше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ours",
        "level": "B1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:ourselves:pron:a2",
        "word": "ourselves",
        "translation": "мы сами",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ourselves",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:own:adj-pron:a1",
        "word": "own",
        "translation": "собственный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "own",
        "level": "A1",
        "partOfSpeech": "прил., мест."
      },
      {
        "id": "oxford:plenty:pron:b1",
        "word": "plenty",
        "translation": "много",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plenty",
        "level": "B1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:same:adj-pron-adv:a1",
        "word": "same",
        "translation": "тот же; одинаковый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "same",
        "level": "A1",
        "partOfSpeech": "прил., мест., нареч."
      },
      {
        "id": "oxford:she:pron:a1",
        "word": "she",
        "translation": "она",
        "example": "",
        "sentenceTranslation": "",
        "answer": "she",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:somebody:pron:a1",
        "word": "somebody",
        "translation": "кто-то",
        "example": "",
        "sentenceTranslation": "",
        "answer": "somebody",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:someone:pron:a1",
        "word": "someone",
        "translation": "кто-то",
        "example": "",
        "sentenceTranslation": "",
        "answer": "someone",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:something:pron:a1",
        "word": "something",
        "translation": "что-то",
        "example": "",
        "sentenceTranslation": "",
        "answer": "something",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:somewhere:adv-pron:a2",
        "word": "somewhere",
        "translation": "где-то",
        "example": "",
        "sentenceTranslation": "",
        "answer": "somewhere",
        "level": "A2",
        "partOfSpeech": "нареч., мест."
      },
      {
        "id": "oxford:theirs:pron:b1",
        "word": "theirs",
        "translation": "их",
        "example": "",
        "sentenceTranslation": "",
        "answer": "theirs",
        "level": "B1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:them:pron:a1",
        "word": "them",
        "translation": "их; им",
        "example": "",
        "sentenceTranslation": "",
        "answer": "them",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:themselves:pron:a2",
        "word": "themselves",
        "translation": "сами",
        "example": "",
        "sentenceTranslation": "",
        "answer": "themselves",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:they:pron:a1",
        "word": "they",
        "translation": "они",
        "example": "",
        "sentenceTranslation": "",
        "answer": "they",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:us:pron:a1",
        "word": "us",
        "translation": "мы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "us",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:we:pron:a1",
        "word": "we",
        "translation": "мы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "we",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:when:adv-pron-conj:a1",
        "word": "when",
        "translation": "когда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "when",
        "level": "A1",
        "partOfSpeech": "нареч., мест., союз"
      },
      {
        "id": "oxford:who:pron:a1",
        "word": "who",
        "translation": "кто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "who",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:whom:pron:b2",
        "word": "whom",
        "translation": "кого",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whom",
        "level": "B2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:you:pron:a1",
        "word": "you",
        "translation": "ты; вы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "you",
        "level": "A1",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:yours:pron:a2",
        "word": "yours",
        "translation": "твой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yours",
        "level": "A2",
        "partOfSpeech": "мест."
      },
      {
        "id": "oxford:yourself:pron:a1",
        "word": "yourself",
        "translation": "себя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yourself",
        "level": "A1",
        "partOfSpeech": "мест."
      }
    ],
    "id": "oxford-extra-06",
    "collection": "Oxford 3000",
    "subtopic": "Местоимения",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:can:modal-v:a1",
        "word": "can",
        "translation": "мочь; уметь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "can",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:cannot:modal-v:a1",
        "word": "cannot",
        "translation": "не мочь; не иметь возможности",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cannot",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:could:modal-v:a1",
        "word": "could",
        "translation": "мог бы; мог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "could",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:have-to:modal-v:a1",
        "word": "have to",
        "translation": "придется",
        "example": "",
        "sentenceTranslation": "",
        "answer": "have to",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:might:modal-v:a2",
        "word": "might",
        "translation": "может быть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "might",
        "level": "A2",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:must:modal-v:a1",
        "word": "must",
        "translation": "должен; обязательно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "must",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:need:modal-v:b1",
        "word": "need",
        "translation": "необходимость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "need",
        "level": "B1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:ought:modal-v:b1",
        "word": "ought",
        "translation": "должен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ought",
        "level": "B1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:shall:modal-v:a2",
        "word": "shall",
        "translation": "должен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shall",
        "level": "A2",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:should:modal-v:a1",
        "word": "should",
        "translation": "следует; должен бы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "should",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:used-to:modal-v:a2",
        "word": "used to",
        "translation": "раньше (об обычном действии)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "used to",
        "level": "A2",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:will:modal-v:a1",
        "word": "will",
        "translation": "буду; будет (будущее время)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "will",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      },
      {
        "id": "oxford:would:modal-v:a1",
        "word": "would",
        "translation": "бы; хотел бы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "would",
        "level": "A1",
        "partOfSpeech": "мод. гл."
      }
    ],
    "id": "oxford-extra-07",
    "collection": "Oxford 3000",
    "subtopic": "Модальные глаголы",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:about:prep-adv:a1",
        "word": "about",
        "translation": "о",
        "example": "",
        "sentenceTranslation": "",
        "answer": "about",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:above:prep-adv:a1",
        "word": "above",
        "translation": "выше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "above",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:according-to:prep:a2",
        "word": "according to",
        "translation": "согласно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "according to",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:across:prep-adv:a1",
        "word": "across",
        "translation": "через",
        "example": "",
        "sentenceTranslation": "",
        "answer": "across",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:against:prep:a2",
        "word": "against",
        "translation": "против",
        "example": "",
        "sentenceTranslation": "",
        "answer": "against",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:along:prep-adv:a2",
        "word": "along",
        "translation": "вдоль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "along",
        "level": "A2",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:among:prep:a2",
        "word": "among",
        "translation": "среди",
        "example": "",
        "sentenceTranslation": "",
        "answer": "among",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:around:prep-adv:a1",
        "word": "around",
        "translation": "вокруг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "around",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:as:prep:a1",
        "word": "as",
        "translation": "как; поскольку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "as",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:at:prep:a1",
        "word": "at",
        "translation": "в; у; на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "at",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:because-of:prep:a1",
        "word": "because of",
        "translation": "из-за",
        "example": "",
        "sentenceTranslation": "",
        "answer": "because of",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:behind:prep-adv:a1",
        "word": "behind",
        "translation": "позади",
        "example": "",
        "sentenceTranslation": "",
        "answer": "behind",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:below:adv-prep:a1",
        "word": "below",
        "translation": "ниже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "below",
        "level": "A1",
        "partOfSpeech": "нареч., предл."
      },
      {
        "id": "oxford:between:prep:a1",
        "word": "between",
        "translation": "между",
        "example": "",
        "sentenceTranslation": "",
        "answer": "between",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:beyond:prep-adv:b2",
        "word": "beyond",
        "translation": "за пределами",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beyond",
        "level": "B2",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:but:prep:b2",
        "word": "but",
        "translation": "но; кроме",
        "example": "",
        "sentenceTranslation": "",
        "answer": "but",
        "level": "B2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:by:prep:a1",
        "word": "by",
        "translation": "у; возле; с помощью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "by",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:despite:prep:b1",
        "word": "despite",
        "translation": "несмотря на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "despite",
        "level": "B1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:down:adv-prep:a1",
        "word": "down",
        "translation": "вниз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "down",
        "level": "A1",
        "partOfSpeech": "нареч., предл."
      },
      {
        "id": "oxford:except:prep:a2",
        "word": "except",
        "translation": "кроме",
        "example": "",
        "sentenceTranslation": "",
        "answer": "except",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:following:prep:b2",
        "word": "following",
        "translation": "следующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "following",
        "level": "B2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:for:prep:a1",
        "word": "for",
        "translation": "для; в течение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "for",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:from:prep:a1",
        "word": "from",
        "translation": "из; от",
        "example": "",
        "sentenceTranslation": "",
        "answer": "from",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:in:prep-adv:a1",
        "word": "in",
        "translation": "в",
        "example": "",
        "sentenceTranslation": "",
        "answer": "in",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:including:prep:a2",
        "word": "including",
        "translation": "в том числе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "including",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:inside:prep-adv-n-adj:a2",
        "word": "inside",
        "translation": "внутри",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inside",
        "level": "A2",
        "partOfSpeech": "предл., нареч., сущ., прил."
      },
      {
        "id": "oxford:instead-of:prep:a2",
        "word": "instead of",
        "translation": "вместо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instead of",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:into:prep:a1",
        "word": "into",
        "translation": "внутрь; в",
        "example": "",
        "sentenceTranslation": "",
        "answer": "into",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:like:prep:a1",
        "word": "like",
        "translation": "нравится",
        "example": "",
        "sentenceTranslation": "",
        "answer": "like",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:next-to:prep:a1",
        "word": "next to",
        "translation": "рядом с",
        "example": "",
        "sentenceTranslation": "",
        "answer": "next to",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:of:prep:a1",
        "word": "of",
        "translation": "из; принадлежность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "of",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:off:adv-prep:a1",
        "word": "off",
        "translation": "выкл.",
        "example": "",
        "sentenceTranslation": "",
        "answer": "off",
        "level": "A1",
        "partOfSpeech": "нареч., предл."
      },
      {
        "id": "oxford:on:prep-adv:a1",
        "word": "on",
        "translation": "на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "on",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:onto:prep:a2",
        "word": "onto",
        "translation": "на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "onto",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:opposite:adj-n-prep-adv:a1",
        "word": "opposite",
        "translation": "напротив",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opposite",
        "level": "A1",
        "partOfSpeech": "прил., сущ., предл., нареч."
      },
      {
        "id": "oxford:out:adv-prep:a1",
        "word": "out",
        "translation": "из",
        "example": "",
        "sentenceTranslation": "",
        "answer": "out",
        "level": "A1",
        "partOfSpeech": "нареч., предл."
      },
      {
        "id": "oxford:outside:prep-n-adj:a2",
        "word": "outside",
        "translation": "снаружи",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outside",
        "level": "A2",
        "partOfSpeech": "предл., сущ., прил."
      },
      {
        "id": "oxford:over:prep-adv:a1",
        "word": "over",
        "translation": "закончилось",
        "example": "",
        "sentenceTranslation": "",
        "answer": "over",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:plus:prep:b1",
        "word": "plus",
        "translation": "плюс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plus",
        "level": "B1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:round:adj-adv-prep:a2",
        "word": "round",
        "translation": "круглый; вокруг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "round",
        "level": "A2",
        "partOfSpeech": "прил., нареч., предл."
      },
      {
        "id": "oxford:through:prep-adv:a1",
        "word": "through",
        "translation": "через; сквозь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "through",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:throughout:prep-adv:b1",
        "word": "throughout",
        "translation": "повсюду",
        "example": "",
        "sentenceTranslation": "",
        "answer": "throughout",
        "level": "B1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:till:conj-prep:b1",
        "word": "till",
        "translation": "до",
        "example": "",
        "sentenceTranslation": "",
        "answer": "till",
        "level": "B1",
        "partOfSpeech": "союз, предл."
      },
      {
        "id": "oxford:to:prep-infinitive-marker:a1",
        "word": "to",
        "translation": "к; в; частица инфинитива",
        "example": "",
        "sentenceTranslation": "",
        "answer": "to",
        "level": "A1",
        "partOfSpeech": "предл., частица"
      },
      {
        "id": "oxford:towards:prep:a2",
        "word": "towards",
        "translation": "к",
        "example": "",
        "sentenceTranslation": "",
        "answer": "towards",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:under:prep-adv:a1",
        "word": "under",
        "translation": "под",
        "example": "",
        "sentenceTranslation": "",
        "answer": "under",
        "level": "A1",
        "partOfSpeech": "предл., нареч."
      },
      {
        "id": "oxford:unlike:prep:b1",
        "word": "unlike",
        "translation": "в отличие от",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unlike",
        "level": "B1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:up:adv-prep:a1",
        "word": "up",
        "translation": "вверх",
        "example": "",
        "sentenceTranslation": "",
        "answer": "up",
        "level": "A1",
        "partOfSpeech": "нареч., предл."
      },
      {
        "id": "oxford:upon:prep:b2",
        "word": "upon",
        "translation": "на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upon",
        "level": "B2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:via:prep:b2",
        "word": "via",
        "translation": "через",
        "example": "",
        "sentenceTranslation": "",
        "answer": "via",
        "level": "B2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:with:prep:a1",
        "word": "with",
        "translation": "с",
        "example": "",
        "sentenceTranslation": "",
        "answer": "with",
        "level": "A1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:within:prep:b1",
        "word": "within",
        "translation": "внутри",
        "example": "",
        "sentenceTranslation": "",
        "answer": "within",
        "level": "B1",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:without:prep:a1",
        "word": "without",
        "translation": "без",
        "example": "",
        "sentenceTranslation": "",
        "answer": "without",
        "level": "A1",
        "partOfSpeech": "предл."
      }
    ],
    "id": "oxford-extra-08",
    "collection": "Oxford 3000",
    "subtopic": "Предлоги и направления",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Грамматика и связки",
    "words": [
      {
        "id": "oxford:although:conj:a2",
        "word": "although",
        "translation": "хотя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "although",
        "level": "A2",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:and:conj:a1",
        "word": "and",
        "translation": "и",
        "example": "",
        "sentenceTranslation": "",
        "answer": "and",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:as:adv-conj:a2",
        "word": "as",
        "translation": "как; поскольку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "as",
        "level": "A2",
        "partOfSpeech": "нареч., союз"
      },
      {
        "id": "oxford:because:conj:a1",
        "word": "because",
        "translation": "потому что",
        "example": "",
        "sentenceTranslation": "",
        "answer": "because",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:but:conj:a1",
        "word": "but",
        "translation": "но; кроме",
        "example": "",
        "sentenceTranslation": "",
        "answer": "but",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:except:conj:b1",
        "word": "except",
        "translation": "кроме",
        "example": "",
        "sentenceTranslation": "",
        "answer": "except",
        "level": "B1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:however:conj:b2",
        "word": "however",
        "translation": "однако",
        "example": "",
        "sentenceTranslation": "",
        "answer": "however",
        "level": "B2",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:if:conj:a1",
        "word": "if",
        "translation": "если",
        "example": "",
        "sentenceTranslation": "",
        "answer": "if",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:nor:conj-adv:b1",
        "word": "nor",
        "translation": "ни",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nor",
        "level": "B1",
        "partOfSpeech": "союз, нареч."
      },
      {
        "id": "oxford:once:conj:b1",
        "word": "once",
        "translation": "как только",
        "example": "",
        "sentenceTranslation": "",
        "answer": "once",
        "level": "B1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:or:conj:a1",
        "word": "or",
        "translation": "или",
        "example": "",
        "sentenceTranslation": "",
        "answer": "or",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:plus:adj-n-conj:b2",
        "word": "plus",
        "translation": "плюс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plus",
        "level": "B2",
        "partOfSpeech": "прил., сущ., союз"
      },
      {
        "id": "oxford:so:adv-conj:a1",
        "word": "so",
        "translation": "так",
        "example": "",
        "sentenceTranslation": "",
        "answer": "so",
        "level": "A1",
        "partOfSpeech": "нареч., союз"
      },
      {
        "id": "oxford:than:conj:a1",
        "word": "than",
        "translation": "чем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "than",
        "level": "A1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:though:conj-adv:b1",
        "word": "though",
        "translation": "хотя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "though",
        "level": "B1",
        "partOfSpeech": "союз, нареч."
      },
      {
        "id": "oxford:unless:conj:b1",
        "word": "unless",
        "translation": "если только",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unless",
        "level": "B1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:whenever:conj:b1",
        "word": "whenever",
        "translation": "всякий раз, когда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whenever",
        "level": "B1",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:where:adv-conj:a1",
        "word": "where",
        "translation": "где; куда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "where",
        "level": "A1",
        "partOfSpeech": "нареч., союз"
      },
      {
        "id": "oxford:whereas:conj:b2",
        "word": "whereas",
        "translation": "тогда как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whereas",
        "level": "B2",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:wherever:conj:b2",
        "word": "wherever",
        "translation": "где угодно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wherever",
        "level": "B2",
        "partOfSpeech": "союз"
      },
      {
        "id": "oxford:whether:conj:b1",
        "word": "whether",
        "translation": "ли",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whether",
        "level": "B1",
        "partOfSpeech": "союз"
      }
    ],
    "id": "oxford-extra-09",
    "collection": "Oxford 3000",
    "subtopic": "Связки и союзы",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Действия и изменения",
    "words": [
      {
        "id": "oxford:abandon:v:b2",
        "word": "abandon",
        "translation": "оставить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "abandon",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:absolutely:adv:b1",
        "word": "absolutely",
        "translation": "абсолютно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "absolutely",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:accept:v:a2",
        "word": "accept",
        "translation": "принять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accept",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:access:n-v:b1",
        "word": "access",
        "translation": "доступ; получать доступ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "access",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:accompany:v:b2",
        "word": "accompany",
        "translation": "сопровождать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accompany",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:accuse:v:b2",
        "word": "accuse",
        "translation": "обвинять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accuse",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:achieve:v:a2",
        "word": "achieve",
        "translation": "достичь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "achieve",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:acknowledge:v:b2",
        "word": "acknowledge",
        "translation": "признать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "acknowledge",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:acquire:v:b2",
        "word": "acquire",
        "translation": "приобретать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "acquire",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:act:v:a2",
        "word": "act",
        "translation": "действовать; играть роль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "act",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:actually:adv:a2",
        "word": "actually",
        "translation": "на самом деле",
        "example": "",
        "sentenceTranslation": "",
        "answer": "actually",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:adapt:v:b2",
        "word": "adapt",
        "translation": "адаптироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "adapt",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:add:v:a1",
        "word": "add",
        "translation": "добавить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "add",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:admire:v:b1",
        "word": "admire",
        "translation": "восхищаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "admire",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:admit:v:b1",
        "word": "admit",
        "translation": "признать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "admit",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:adopt:v:b2",
        "word": "adopt",
        "translation": "принять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "adopt",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:advance:n-v-adj:b2",
        "word": "advance",
        "translation": "продвижение; продвигаться; предварительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advance",
        "level": "B2",
        "partOfSpeech": "сущ., гл., прил."
      },
      {
        "id": "oxford:advertise:v:a2",
        "word": "advertise",
        "translation": "рекламировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advertise",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:advise:v:b1",
        "word": "advise",
        "translation": "советовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advise",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:affect:v:a2",
        "word": "affect",
        "translation": "влиять на",
        "example": "",
        "sentenceTranslation": "",
        "answer": "affect",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:afterwards:adv:b2",
        "word": "afterwards",
        "translation": "потом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "afterwards",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:ago:adv:a1",
        "word": "ago",
        "translation": "назад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ago",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:agree:v:a1",
        "word": "agree",
        "translation": "соглашаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "agree",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ahead:adv:b1",
        "word": "ahead",
        "translation": "впереди",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ahead",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:aid:n-v:b2",
        "word": "aid",
        "translation": "помощь; помогать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aid",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:aim:v-n:b1",
        "word": "aim",
        "translation": "цель; стремиться; целиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aim",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:alarm:v:b2",
        "word": "alarm",
        "translation": "тревожить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alarm",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:all:adv:a2",
        "word": "all",
        "translation": "весь; все",
        "example": "",
        "sentenceTranslation": "",
        "answer": "all",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:allow:v:a2",
        "word": "allow",
        "translation": "разрешить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "allow",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:almost:adv:a2",
        "word": "almost",
        "translation": "почти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "almost",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:alone:adj-adv:a2",
        "word": "alone",
        "translation": "один; в одиночестве",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alone",
        "level": "A2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:also:adv:a1",
        "word": "also",
        "translation": "также",
        "example": "",
        "sentenceTranslation": "",
        "answer": "also",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:alter:v:b2",
        "word": "alter",
        "translation": "изменить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alter",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:announce:v:b1",
        "word": "announce",
        "translation": "объявить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "announce",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:annoy:v:b1",
        "word": "annoy",
        "translation": "раздражать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "annoy",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:any:adv:a2",
        "word": "any",
        "translation": "любой; какой-либо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "any",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:any-more:adv:a2",
        "word": "any more",
        "translation": "больше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "any more",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:anyway:adv:a2",
        "word": "anyway",
        "translation": "в любом случае",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anyway",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:apart:adv:b1",
        "word": "apart",
        "translation": "отдельно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apart",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:apologize:v:b1",
        "word": "apologize",
        "translation": "извиниться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apologize",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:apparently:adv:b2",
        "word": "apparently",
        "translation": "видимо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apparently",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:appeal:n-v:b2",
        "word": "appeal",
        "translation": "призыв; привлекательность; апелляция; обращаться с просьбой; привлекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appeal",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:appear:v:a2",
        "word": "appear",
        "translation": "появиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appear",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:appreciate:v:b1",
        "word": "appreciate",
        "translation": "ценить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appreciate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:approach:n-v:b2",
        "word": "approach",
        "translation": "подход; приближаться; подходить к вопросу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "approach",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:approve:v:b2",
        "word": "approve",
        "translation": "одобрять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "approve",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:approximately:adv:b1",
        "word": "approximately",
        "translation": "примерно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "approximately",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:argue:v:a2",
        "word": "argue",
        "translation": "спорить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "argue",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:arise:v:b2",
        "word": "arise",
        "translation": "возникать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arise",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:arrange:v:a2",
        "word": "arrange",
        "translation": "устроить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arrange",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:arrest:v-n:b1",
        "word": "arrest",
        "translation": "арест; арестовывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arrest",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:ask:v:a1",
        "word": "ask",
        "translation": "спросить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ask",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:assess:v:b2",
        "word": "assess",
        "translation": "оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assess",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:assist:v:b1",
        "word": "assist",
        "translation": "помогать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assist",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:associate:v:b2",
        "word": "associate",
        "translation": "связывать; ассоциировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "associate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:assume:v:b2",
        "word": "assume",
        "translation": "предположить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assume",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:attach:v:b1",
        "word": "attach",
        "translation": "прикрепить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attach",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:attack:n-v:a2",
        "word": "attack",
        "translation": "нападение; нападать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attack",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:attempt:n-v:b2",
        "word": "attempt",
        "translation": "попытка; пытаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attempt",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:attend:v:a2",
        "word": "attend",
        "translation": "присутствовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attend",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:attract:v:b1",
        "word": "attract",
        "translation": "привлекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attract",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:avoid:v:a2",
        "word": "avoid",
        "translation": "избегать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "avoid",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:away:adv:a1",
        "word": "away",
        "translation": "прочь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "away",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:backwards:adv:b1",
        "word": "backwards",
        "translation": "назад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "backwards",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:badly:adv:a2",
        "word": "badly",
        "translation": "плохо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "badly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:bake:v:b1",
        "word": "bake",
        "translation": "выпекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bake",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:balance:n-v:b1",
        "word": "balance",
        "translation": "равновесие; баланс; уравновешивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "balance",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:ban:v-n:b1",
        "word": "ban",
        "translation": "запрет; запрещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ban",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:base:n-v:b1",
        "word": "base",
        "translation": "основа; база; основывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "base",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:basically:adv:b2",
        "word": "basically",
        "translation": "в основном",
        "example": "",
        "sentenceTranslation": "",
        "answer": "basically",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:battle:v:b2",
        "word": "battle",
        "translation": "бороться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "battle",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:be:v-auxiliary-v:a1",
        "word": "be",
        "translation": "быть; находиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "be",
        "level": "A1",
        "partOfSpeech": "гл., вспом. гл."
      },
      {
        "id": "oxford:beat:v:b1",
        "word": "beat",
        "translation": "бить; побеждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beat",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:become:v:a1",
        "word": "become",
        "translation": "стать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "become",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:beg:v:b2",
        "word": "beg",
        "translation": "просить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beg",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:begin:v:a1",
        "word": "begin",
        "translation": "начать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "begin",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:behave:v:a2",
        "word": "behave",
        "translation": "вести себя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "behave",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:believe:v:a1",
        "word": "believe",
        "translation": "верить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "believe",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:belong:v:a2",
        "word": "belong",
        "translation": "принадлежать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "belong",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bend:v-n:b1",
        "word": "bend",
        "translation": "изгиб; сгибать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bend",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:benefit:v:b1",
        "word": "benefit",
        "translation": "приносить пользу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "benefit",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:best:adv-n:a2",
        "word": "best",
        "translation": "лучший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "best",
        "level": "A2",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:bet:v-n:b2",
        "word": "bet",
        "translation": "ставка; пари; держать пари",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bet",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:better:adv:a2",
        "word": "better",
        "translation": "лучше; более хороший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "better",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:between:adv:a2",
        "word": "between",
        "translation": "между",
        "example": "",
        "sentenceTranslation": "",
        "answer": "between",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:bite:v-n:b1",
        "word": "bite",
        "translation": "укус; кусать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bite",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:blame:v-n:b2",
        "word": "blame",
        "translation": "вина; винить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blame",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:block:n-v:b1",
        "word": "block",
        "translation": "блок; квартал; блокировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "block",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:blow:v:a2",
        "word": "blow",
        "translation": "дуть; сдувать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blow",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:board:v:b1",
        "word": "board",
        "translation": "садиться на транспорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "board",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:boil:v:a2",
        "word": "boil",
        "translation": "варить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boil",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bomb:n-v:b1",
        "word": "bomb",
        "translation": "бомба; бомбить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bomb",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:border:v:b2",
        "word": "border",
        "translation": "граничить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "border",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:borrow:v:a2",
        "word": "borrow",
        "translation": "брать взаймы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "borrow",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bother:v:b1",
        "word": "bother",
        "translation": "беспокоить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bother",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:break:v-n:a1",
        "word": "break",
        "translation": "перерыв; поломка; ломать; нарушать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "break",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:bring:v:a1",
        "word": "bring",
        "translation": "принести",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bring",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:broadcast:v-n:b2",
        "word": "broadcast",
        "translation": "трансляция; транслировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "broadcast",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:brush:v-n:a2",
        "word": "brush",
        "translation": "щётка; кисть; чистить щёткой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brush",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:build:v:a1",
        "word": "build",
        "translation": "строить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "build",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:burn:v:a2",
        "word": "burn",
        "translation": "гореть; сжигать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "burn",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bury:v:b1",
        "word": "bury",
        "translation": "хоронить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bury",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:by:adv:b1",
        "word": "by",
        "translation": "у; возле; с помощью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "by",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:calculate:v:b2",
        "word": "calculate",
        "translation": "вычислить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "calculate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:call:v-n:a1",
        "word": "call",
        "translation": "звонок; вызов; звонить; называть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "call",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:calm:adj-v-n:b1",
        "word": "calm",
        "translation": "спокойный; спокойствие; успокаивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "calm",
        "level": "B1",
        "partOfSpeech": "прил., гл., сущ."
      },
      {
        "id": "oxford:camp:n-v:a2",
        "word": "camp",
        "translation": "лагерь; жить в палатке",
        "example": "",
        "sentenceTranslation": "",
        "answer": "camp",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:campaign:n-v:b1",
        "word": "campaign",
        "translation": "кампания; проводить кампанию",
        "example": "",
        "sentenceTranslation": "",
        "answer": "campaign",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:cancel:v:b2",
        "word": "cancel",
        "translation": "отменить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cancel",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:capture:v-n:b2",
        "word": "capture",
        "translation": "захват; захватывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "capture",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:care:n-v:a2",
        "word": "care",
        "translation": "забота; уход; заботиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "care",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:carefully:adv:a2",
        "word": "carefully",
        "translation": "тщательно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "carefully",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:carry:v:a1",
        "word": "carry",
        "translation": "нести",
        "example": "",
        "sentenceTranslation": "",
        "answer": "carry",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cast:n-v:b2",
        "word": "cast",
        "translation": "актёрский состав; бросать; распределять роли",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cast",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:catch:v:a2",
        "word": "catch",
        "translation": "ловить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "catch",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cause:n-v:a2",
        "word": "cause",
        "translation": "причина; вызывать; быть причиной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cause",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:certainly:adv:a2",
        "word": "certainly",
        "translation": "конечно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "certainly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:chain:v:b2",
        "word": "chain",
        "translation": "приковывать цепью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chain",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:challenge:v:b2",
        "word": "challenge",
        "translation": "бросать вызов; оспаривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "challenge",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:change:v-n:a1",
        "word": "change",
        "translation": "изменение; сдача; менять; изменяться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "change",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:charge:n-v:b1",
        "word": "charge",
        "translation": "плата; обвинение; заряд; взимать плату; обвинять; заряжать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "charge",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:chart:v:b2",
        "word": "chart",
        "translation": "составлять диаграмму",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chart",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:chat:v-n:a2",
        "word": "chat",
        "translation": "беседа; чат; болтать; общаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chat",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:cheat:v-n:b1",
        "word": "cheat",
        "translation": "обманщик; обманывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cheat",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:check:v:a1",
        "word": "check",
        "translation": "проверять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "check",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:choose:v:a1",
        "word": "choose",
        "translation": "выбирать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "choose",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:circle:n-v:a2",
        "word": "circle",
        "translation": "круг; кружить; обводить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "circle",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:cite:v:b2",
        "word": "cite",
        "translation": "цитировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cite",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:claim:v-n:b1",
        "word": "claim",
        "translation": "утверждение; требование; утверждать; требовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "claim",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:clear:v:b1",
        "word": "clear",
        "translation": "очищать; прояснять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clear",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:clearly:adv:a2",
        "word": "clearly",
        "translation": "ясно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clearly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:climb:v:a1",
        "word": "climb",
        "translation": "подниматься; взбираться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "climb",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:close:v:a1",
        "word": "close",
        "translation": "закрывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "close",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:close:adv:b1",
        "word": "close",
        "translation": "близко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "close",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:closely:adv:b2",
        "word": "closely",
        "translation": "внимательно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "closely",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:coach:v:b1",
        "word": "coach",
        "translation": "тренировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coach",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:collapse:v-n:b2",
        "word": "collapse",
        "translation": "обвал; крах; обрушиваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "collapse",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:collect:v:a2",
        "word": "collect",
        "translation": "собирать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "collect",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:combine:v:b1",
        "word": "combine",
        "translation": "объединить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "combine",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:come:v:a1",
        "word": "come",
        "translation": "приходить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "come",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:comfort:n-v:b2",
        "word": "comfort",
        "translation": "комфорт; утешение; утешать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comfort",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:command:n-v:b2",
        "word": "command",
        "translation": "команда; приказ; приказывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "command",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:comment:v:b1",
        "word": "comment",
        "translation": "комментировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comment",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:commission:n-v:b2",
        "word": "commission",
        "translation": "комиссия; заказ; заказывать работу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "commission",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:commit:v:b1",
        "word": "commit",
        "translation": "совершить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "commit",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:commonly:adv:b2",
        "word": "commonly",
        "translation": "обычно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "commonly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:communicate:v:a2",
        "word": "communicate",
        "translation": "общаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "communicate",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:compare:v:a1",
        "word": "compare",
        "translation": "сравнивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "compare",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:compete:v:a2",
        "word": "compete",
        "translation": "конкурировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "compete",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:complain:v:a2",
        "word": "complain",
        "translation": "жаловаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complain",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:complete:adj-v:a1",
        "word": "complete",
        "translation": "полный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complete",
        "level": "A1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:completely:adv:a2",
        "word": "completely",
        "translation": "полностью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "completely",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:concentrate:v:b1",
        "word": "concentrate",
        "translation": "сконцентрироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concentrate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:concern:n-v:b2",
        "word": "concern",
        "translation": "беспокойство; вопрос; касаться; беспокоить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concern",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:conclude:v:b1",
        "word": "conclude",
        "translation": "заключать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conclude",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:conduct:v-n:b2",
        "word": "conduct",
        "translation": "поведение; проводить; руководить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conduct",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:confirm:v:b1",
        "word": "confirm",
        "translation": "подтвердить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confirm",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:conflict:n-v:b2",
        "word": "conflict",
        "translation": "конфликт; противоречить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conflict",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:confuse:v:b1",
        "word": "confuse",
        "translation": "путать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confuse",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:connect:v:a2",
        "word": "connect",
        "translation": "подключить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "connect",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:consider:v:a2",
        "word": "consider",
        "translation": "рассмотреть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consider",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:consist:v:b1",
        "word": "consist",
        "translation": "состоять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consist",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:constantly:adv:b2",
        "word": "constantly",
        "translation": "постоянно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "constantly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:construct:v:b2",
        "word": "construct",
        "translation": "построить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "construct",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:consume:v:b1",
        "word": "consume",
        "translation": "потреблять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consume",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:contact:n-v:b1",
        "word": "contact",
        "translation": "контакт; связь; связываться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contact",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:contain:v:a2",
        "word": "contain",
        "translation": "содержать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contain",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:contest:n-v:b2",
        "word": "contest",
        "translation": "конкурс; состязание; оспаривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contest",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:continue:v:a2",
        "word": "continue",
        "translation": "продолжать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "continue",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:contract:n-v:b2",
        "word": "contract",
        "translation": "договор; сокращаться; заключать договор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contract",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:contrast:n-v:b1",
        "word": "contrast",
        "translation": "контраст; различие; сопоставлять; противопоставлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contrast",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:contribute:v:b2",
        "word": "contribute",
        "translation": "внести свой вклад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contribute",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:control:n-v:a2",
        "word": "control",
        "translation": "контроль; управление; контролировать; управлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "control",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:convert:v:b2",
        "word": "convert",
        "translation": "конвертировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "convert",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:convince:v:b1",
        "word": "convince",
        "translation": "убеждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "convince",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:copy:n-v:a2",
        "word": "copy",
        "translation": "копия; экземпляр; копировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "copy",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:correct:adj-v:a1",
        "word": "correct",
        "translation": "правильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "correct",
        "level": "A1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:correctly:adv:a2",
        "word": "correctly",
        "translation": "правильно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "correctly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:cover:v:a2",
        "word": "cover",
        "translation": "покрывать; освещать тему",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cover",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:crash:n-v:b2",
        "word": "crash",
        "translation": "авария; сбой; разбиваться; давать сбой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crash",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:create:v:a1",
        "word": "create",
        "translation": "создавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "create",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:criticize:v:b2",
        "word": "criticize",
        "translation": "критиковать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "criticize",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cross:v-n:a2",
        "word": "cross",
        "translation": "крест; пересекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cross",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:cry:v:a2",
        "word": "cry",
        "translation": "плакать; кричать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cry",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:currently:adv:b1",
        "word": "currently",
        "translation": "в настоящее время",
        "example": "",
        "sentenceTranslation": "",
        "answer": "currently",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:curve:n-v:b2",
        "word": "curve",
        "translation": "кривая; изгиб; изгибаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "curve",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:cut:v:a1",
        "word": "cut",
        "translation": "резать; сокращать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cut",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:damage:n-v:b1",
        "word": "damage",
        "translation": "ущерб; повреждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "damage",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:deal:v:a2",
        "word": "deal",
        "translation": "иметь дело; раздавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deal",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:debate:n-v:b2",
        "word": "debate",
        "translation": "дебаты; обсуждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "debate",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:decide:v:a1",
        "word": "decide",
        "translation": "решить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decide",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:declare:v:b2",
        "word": "declare",
        "translation": "объявить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "declare",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:decline:v-n:b2",
        "word": "decline",
        "translation": "снижение; упадок; снижаться; отказываться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decline",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:decorate:v:b1",
        "word": "decorate",
        "translation": "украшать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decorate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:decrease:v-n:b2",
        "word": "decrease",
        "translation": "уменьшение; уменьшать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decrease",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:deep:adv:b1",
        "word": "deep",
        "translation": "глубокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deep",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:deeply:adv:b2",
        "word": "deeply",
        "translation": "глубоко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deeply",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:defeat:v-n:b2",
        "word": "defeat",
        "translation": "поражение; побеждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "defeat",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:defend:v:b2",
        "word": "defend",
        "translation": "защищать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "defend",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:define:v:b1",
        "word": "define",
        "translation": "определить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "define",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:definitely:adv:a2",
        "word": "definitely",
        "translation": "определенно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "definitely",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:deliberately:adv:b2",
        "word": "deliberately",
        "translation": "намеренно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deliberately",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:delight:v-n:b2",
        "word": "delight",
        "translation": "восторг; восхищать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "delight",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:deliver:v:b1",
        "word": "deliver",
        "translation": "доставить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deliver",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:demand:n-v:b2",
        "word": "demand",
        "translation": "спрос; требование; требовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "demand",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:demonstrate:v:b2",
        "word": "demonstrate",
        "translation": "продемонстрировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "demonstrate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:deny:v:b2",
        "word": "deny",
        "translation": "отрицать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deny",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:depend:v:a2",
        "word": "depend",
        "translation": "зависеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "depend",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:describe:v:a1",
        "word": "describe",
        "translation": "описать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "describe",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:deserve:v:b2",
        "word": "deserve",
        "translation": "заслуживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deserve",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:design:n-v:a1",
        "word": "design",
        "translation": "дизайн; проект; проектировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "design",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:desire:n-v:b2",
        "word": "desire",
        "translation": "желание; желать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "desire",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:destroy:v:a2",
        "word": "destroy",
        "translation": "уничтожить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "destroy",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:detail:v:b2",
        "word": "detail",
        "translation": "подробно описывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "detail",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:detect:v:b2",
        "word": "detect",
        "translation": "обнаружить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "detect",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:determine:v:b1",
        "word": "determine",
        "translation": "определить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "determine",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:develop:v:a2",
        "word": "develop",
        "translation": "развивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "develop",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:die:v:a1",
        "word": "die",
        "translation": "умереть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "die",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:differently:adv:a2",
        "word": "differently",
        "translation": "по-другому",
        "example": "",
        "sentenceTranslation": "",
        "answer": "differently",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:dig:v:b2",
        "word": "dig",
        "translation": "копать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dig",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:direct:v-adv:b1",
        "word": "direct",
        "translation": "прямой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "direct",
        "level": "B1",
        "partOfSpeech": "гл., нареч."
      },
      {
        "id": "oxford:directly:adv:b1",
        "word": "directly",
        "translation": "напрямую",
        "example": "",
        "sentenceTranslation": "",
        "answer": "directly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:disagree:v:a2",
        "word": "disagree",
        "translation": "не соглашаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disagree",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:disappear:v:a2",
        "word": "disappear",
        "translation": "исчезнуть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disappear",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:discuss:v:a1",
        "word": "discuss",
        "translation": "обсудить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discuss",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:dislike:v-n:b1",
        "word": "dislike",
        "translation": "неприязнь; не любить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dislike",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:dismiss:v:b2",
        "word": "dismiss",
        "translation": "уволить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dismiss",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:display:v-n:b2",
        "word": "display",
        "translation": "экран; показ; показывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "display",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:distribute:v:b2",
        "word": "distribute",
        "translation": "распространять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "distribute",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:divide:v:b1",
        "word": "divide",
        "translation": "делить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "divide",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:do:v-auxiliary-v:a1",
        "word": "do",
        "translation": "делать; вспомогательный глагол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "do",
        "level": "A1",
        "partOfSpeech": "гл., вспом. гл."
      },
      {
        "id": "oxford:dominate:v:b2",
        "word": "dominate",
        "translation": "доминировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dominate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:donate:v:b1",
        "word": "donate",
        "translation": "пожертвовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "donate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:doubt:n-v:b1",
        "word": "doubt",
        "translation": "сомнение; сомневаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "doubt",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:downstairs:adv:a1",
        "word": "downstairs",
        "translation": "внизу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "downstairs",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:downwards:adv:b2",
        "word": "downwards",
        "translation": "вниз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "downwards",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:draft:n-v:b2",
        "word": "draft",
        "translation": "черновик; проект; составлять черновик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "draft",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:drag:v:b2",
        "word": "drag",
        "translation": "перетащить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drag",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:draw:v:a1",
        "word": "draw",
        "translation": "рисовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "draw",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:dream:n-v:a2",
        "word": "dream",
        "translation": "сон; мечта; мечтать; видеть сны",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dream",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:dress:n-v:a1",
        "word": "dress",
        "translation": "платье; одеваться; одевать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dress",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:drop:v:a2",
        "word": "drop",
        "translation": "ронять; падать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drop",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:dry:adj-v:a2",
        "word": "dry",
        "translation": "сухой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dry",
        "level": "A2",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:easily:adv:a2",
        "word": "easily",
        "translation": "легко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "easily",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:eat:v:a1",
        "word": "eat",
        "translation": "есть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eat",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:edit:v:b2",
        "word": "edit",
        "translation": "редактировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "edit",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:educate:v:b1",
        "word": "educate",
        "translation": "обучать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "educate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:effectively:adv:b1",
        "word": "effectively",
        "translation": "эффективно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "effectively",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:elect:v:b2",
        "word": "elect",
        "translation": "выбирать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "elect",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:else:adv:a1",
        "word": "else",
        "translation": "еще",
        "example": "",
        "sentenceTranslation": "",
        "answer": "else",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:elsewhere:adv:b2",
        "word": "elsewhere",
        "translation": "в другом месте",
        "example": "",
        "sentenceTranslation": "",
        "answer": "elsewhere",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:emerge:v:b2",
        "word": "emerge",
        "translation": "появляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emerge",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:emphasize:v:b2",
        "word": "emphasize",
        "translation": "подчеркивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emphasize",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:employ:v:a2",
        "word": "employ",
        "translation": "нанимать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "employ",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:empty:v:b1",
        "word": "empty",
        "translation": "опустошать; освобождать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "empty",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:enable:v:b2",
        "word": "enable",
        "translation": "включить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enable",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:encounter:v-n:b2",
        "word": "encounter",
        "translation": "встреча; столкновение; сталкиваться с",
        "example": "",
        "sentenceTranslation": "",
        "answer": "encounter",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:encourage:v:b1",
        "word": "encourage",
        "translation": "поощрять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "encourage",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:end:n-v:a1",
        "word": "end",
        "translation": "конец; заканчивать; заканчиваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "end",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:engage:v:b2",
        "word": "engage",
        "translation": "заниматься",
        "example": "",
        "sentenceTranslation": "",
        "answer": "engage",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:enhance:v:b2",
        "word": "enhance",
        "translation": "улучшить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enhance",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:enjoy:v:a1",
        "word": "enjoy",
        "translation": "наслаждаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enjoy",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ensure:v:b2",
        "word": "ensure",
        "translation": "обеспечить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ensure",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:enter:v:a2",
        "word": "enter",
        "translation": "войти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enter",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:entertain:v:b1",
        "word": "entertain",
        "translation": "развлекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entertain",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:entirely:adv:b2",
        "word": "entirely",
        "translation": "полностью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entirely",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:equal:adj-v:b1",
        "word": "equal",
        "translation": "равняться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "equal",
        "level": "B1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:equally:adv:b1",
        "word": "equally",
        "translation": "поровну",
        "example": "",
        "sentenceTranslation": "",
        "answer": "equally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:escape:v-n:b1",
        "word": "escape",
        "translation": "побег; убегать; избегать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "escape",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:especially:adv:a2",
        "word": "especially",
        "translation": "особенно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "especially",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:establish:v:b2",
        "word": "establish",
        "translation": "установить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "establish",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:estimate:v-n:b2",
        "word": "estimate",
        "translation": "оценка; смета; оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "estimate",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:evaluate:v:b2",
        "word": "evaluate",
        "translation": "оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "evaluate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:even:adv:a1",
        "word": "even",
        "translation": "даже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "even",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:eventually:adv:b1",
        "word": "eventually",
        "translation": "в конце концов",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eventually",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:ever:adv:a1",
        "word": "ever",
        "translation": "когда-либо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ever",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:everywhere:adv:a2",
        "word": "everywhere",
        "translation": "везде",
        "example": "",
        "sentenceTranslation": "",
        "answer": "everywhere",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:exactly:adv:a2",
        "word": "exactly",
        "translation": "точно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exactly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:examine:v:b1",
        "word": "examine",
        "translation": "исследовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "examine",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:exchange:n-v:b1",
        "word": "exchange",
        "translation": "обмен; обменивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exchange",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:excuse:n-v:b2",
        "word": "excuse",
        "translation": "оправдание; извинять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "excuse",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:exist:v:a2",
        "word": "exist",
        "translation": "существовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exist",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:expand:v:b1",
        "word": "expand",
        "translation": "расширять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expand",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:expect:v:a2",
        "word": "expect",
        "translation": "ожидать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expect",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:explain:v:a1",
        "word": "explain",
        "translation": "объяснить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "explain",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:explode:v:b1",
        "word": "explode",
        "translation": "взорваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "explode",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:explore:v:b1",
        "word": "explore",
        "translation": "исследовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "explore",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:export:n-v:b1",
        "word": "export",
        "translation": "экспорт; экспортировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "export",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:expose:v:b2",
        "word": "expose",
        "translation": "разоблачить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expose",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:express:v:a2",
        "word": "express",
        "translation": "выражать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "express",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:extend:v:b2",
        "word": "extend",
        "translation": "расширять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extend",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:extra:n-adv:b1",
        "word": "extra",
        "translation": "дополнительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extra",
        "level": "B1",
        "partOfSpeech": "сущ., нареч."
      },
      {
        "id": "oxford:extremely:adv:a2",
        "word": "extremely",
        "translation": "чрезвычайно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extremely",
        "level": "A2",
        "partOfSpeech": "нареч."
      }
    ],
    "id": "oxford-extra-10",
    "collection": "Oxford 3000",
    "subtopic": "Глаголы A–E",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Действия и изменения",
    "words": [
      {
        "id": "oxford:fail:v:a2",
        "word": "fail",
        "translation": "потерпеть неудачу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fail",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fairly:adv:b1",
        "word": "fairly",
        "translation": "довольно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fairly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:fall:v:a1",
        "word": "fall",
        "translation": "падать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fall",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fancy:v-adj:b1",
        "word": "fancy",
        "translation": "причудливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fancy",
        "level": "B1",
        "partOfSpeech": "гл., прил."
      },
      {
        "id": "oxford:far:adv:a1",
        "word": "far",
        "translation": "далёкий; далеко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "far",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:fast:adj-adv:a1",
        "word": "fast",
        "translation": "быстро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fast",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:fasten:v:b1",
        "word": "fasten",
        "translation": "закрепить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fasten",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:favour:v:b2",
        "word": "favour",
        "translation": "предпочитать; поддерживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "favour",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fear:v:b1",
        "word": "fear",
        "translation": "бояться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fear",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:feature:v:b1",
        "word": "feature",
        "translation": "представлять; включать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feature",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:feed:v:a2",
        "word": "feed",
        "translation": "кормить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feed",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:feel:v:a1",
        "word": "feel",
        "translation": "чувствовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feel",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fight:v-n:a2",
        "word": "fight",
        "translation": "драка; борьба; драться; бороться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fight",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:fill:v:a1",
        "word": "fill",
        "translation": "заполнить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fill",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:find:v:a1",
        "word": "find",
        "translation": "найти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "find",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:finish:v:a1",
        "word": "finish",
        "translation": "заканчивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finish",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:firstly:adv:a2",
        "word": "firstly",
        "translation": "во-первых",
        "example": "",
        "sentenceTranslation": "",
        "answer": "firstly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:fit:v-adj:a2",
        "word": "fit",
        "translation": "подходит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fit",
        "level": "A2",
        "partOfSpeech": "гл., прил."
      },
      {
        "id": "oxford:flash:n-v:b2",
        "word": "flash",
        "translation": "вспышка; вспыхивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flash",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:float:v:b2",
        "word": "float",
        "translation": "плавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "float",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:flow:v-n:b1",
        "word": "flow",
        "translation": "поток; течь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flow",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:fly:v:a1",
        "word": "fly",
        "translation": "летать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fly",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:focus:v-n:a2",
        "word": "focus",
        "translation": "внимание; фокус; сосредотачиваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "focus",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:fold:v:b1",
        "word": "fold",
        "translation": "складывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fold",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:follow:v:a1",
        "word": "follow",
        "translation": "следовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "follow",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:force:n-v:b1",
        "word": "force",
        "translation": "сила; заставлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "force",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:forever:adv:b1",
        "word": "forever",
        "translation": "навсегда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forever",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:forget:v:a1",
        "word": "forget",
        "translation": "забыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forget",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:forgive:v:b2",
        "word": "forgive",
        "translation": "прости",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forgive",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:form:n-v:a1",
        "word": "form",
        "translation": "форма; бланк; образовывать; формировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "form",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:fortunately:adv:a2",
        "word": "fortunately",
        "translation": "к счастью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fortunately",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:forward:adv:a2",
        "word": "forward",
        "translation": "вперед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forward",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:found:v:b2",
        "word": "found",
        "translation": "основывать; учреждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "found",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:frame:n-v:b1",
        "word": "frame",
        "translation": "рамка; каркас; обрамлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frame",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:free:adv:a2",
        "word": "free",
        "translation": "свободный; бесплатный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "free",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:free:v:b2",
        "word": "free",
        "translation": "освобождать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "free",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:freeze:v:b1",
        "word": "freeze",
        "translation": "заморозить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "freeze",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:frighten:v:b1",
        "word": "frighten",
        "translation": "пугать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frighten",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fry:v:b1",
        "word": "fry",
        "translation": "жарить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fry",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fuel:v:b2",
        "word": "fuel",
        "translation": "подпитывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fuel",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fully:adv:b2",
        "word": "fully",
        "translation": "полностью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fully",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:function:v:b2",
        "word": "function",
        "translation": "функционировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "function",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fund:n-v:b2",
        "word": "fund",
        "translation": "фонд; финансировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fund",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:further:adv:b1",
        "word": "further",
        "translation": "дальше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "further",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:furthermore:adv:b2",
        "word": "furthermore",
        "translation": "кроме того",
        "example": "",
        "sentenceTranslation": "",
        "answer": "furthermore",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:gain:v-n:b2",
        "word": "gain",
        "translation": "выгода; прирост; получать; приобретать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gain",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:gather:v:b1",
        "word": "gather",
        "translation": "собрать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gather",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:generally:adv:b1",
        "word": "generally",
        "translation": "вообще",
        "example": "",
        "sentenceTranslation": "",
        "answer": "generally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:generate:v:b2",
        "word": "generate",
        "translation": "генерировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "generate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:get:v:a1",
        "word": "get",
        "translation": "получать; становиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "get",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:give:v:a1",
        "word": "give",
        "translation": "дать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "give",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:go:v:a1",
        "word": "go",
        "translation": "идти; ехать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "go",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:govern:v:b2",
        "word": "govern",
        "translation": "управлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "govern",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:grab:v:b2",
        "word": "grab",
        "translation": "схватить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grab",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:gradually:adv:b2",
        "word": "gradually",
        "translation": "постепенно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gradually",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:graduate:n-v:b1",
        "word": "graduate",
        "translation": "выпускник; оканчивать учебное заведение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "graduate",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:grant:v-n:b2",
        "word": "grant",
        "translation": "грант; предоставлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grant",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:greet:v:a2",
        "word": "greet",
        "translation": "приветствовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "greet",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:grow:v:a1",
        "word": "grow",
        "translation": "расти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grow",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:guarantee:v-n:b2",
        "word": "guarantee",
        "translation": "гарантия; гарантировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guarantee",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:guard:n-v:b1",
        "word": "guard",
        "translation": "охранник; охранять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guard",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:guess:v-n:a1",
        "word": "guess",
        "translation": "догадка; угадывать; предполагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guess",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:guide:n-v:a2",
        "word": "guide",
        "translation": "гид; руководство; направлять; руководить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guide",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:handle:v-n:b2",
        "word": "handle",
        "translation": "ручка; рукоятка; справляться с; обращаться с",
        "example": "",
        "sentenceTranslation": "",
        "answer": "handle",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:hang:v:b1",
        "word": "hang",
        "translation": "повесить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hang",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:happen:v:a1",
        "word": "happen",
        "translation": "случиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "happen",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:happily:adv:a2",
        "word": "happily",
        "translation": "счастливо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "happily",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:hard:adj-adv:a1",
        "word": "hard",
        "translation": "тяжело",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hard",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:hardly:adv:b1",
        "word": "hardly",
        "translation": "вряд ли",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hardly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:harm:n-v:b2",
        "word": "harm",
        "translation": "вред; вредить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "harm",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:hate:v:a1",
        "word": "hate",
        "translation": "ненавидеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hate",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:have:v:a1",
        "word": "have",
        "translation": "иметь; вспомогательный глагол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "have",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:have:auxiliary-v:a2",
        "word": "have",
        "translation": "иметь; вспомогательный глагол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "have",
        "level": "A2",
        "partOfSpeech": "вспом. гл."
      },
      {
        "id": "oxford:hear:v:a1",
        "word": "hear",
        "translation": "слышать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hear",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:heavily:adv:b1",
        "word": "heavily",
        "translation": "сильно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heavily",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:help:v-n:a1",
        "word": "help",
        "translation": "помощь; помогать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "help",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:here:adv:a1",
        "word": "here",
        "translation": "здесь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "here",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:hesitate:v:b2",
        "word": "hesitate",
        "translation": "колебаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hesitate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:hide:v:a2",
        "word": "hide",
        "translation": "спрятать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hide",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:high:adv:a2",
        "word": "high",
        "translation": "высокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "high",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:highlight:v-n:b1",
        "word": "highlight",
        "translation": "главный момент; выделять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "highlight",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:highly:adv:b1",
        "word": "highly",
        "translation": "весьма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "highly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:hike:n-v:a2",
        "word": "hike",
        "translation": "пеший поход; ходить в поход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hike",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:hit:v-n:a2",
        "word": "hit",
        "translation": "удар; хит; ударять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hit",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:hold:v:a2",
        "word": "hold",
        "translation": "держать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hold",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:honour:n-v:b2",
        "word": "honour",
        "translation": "честь; чтить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "honour",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:hope:v:a1",
        "word": "hope",
        "translation": "надеяться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hope",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:host:v:b2",
        "word": "host",
        "translation": "принимать гостей; проводить мероприятие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "host",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:how:adv:a1",
        "word": "how",
        "translation": "как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "how",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:however:adv:a1",
        "word": "however",
        "translation": "однако",
        "example": "",
        "sentenceTranslation": "",
        "answer": "however",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:hunt:v:b1",
        "word": "hunt",
        "translation": "охотиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hunt",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:hurry:n-v:b1",
        "word": "hurry",
        "translation": "спешка; спешить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hurry",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:hurt:v-adj:a2",
        "word": "hurt",
        "translation": "причинять боль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hurt",
        "level": "A2",
        "partOfSpeech": "гл., прил."
      },
      {
        "id": "oxford:identify:v:a2",
        "word": "identify",
        "translation": "идентифицировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "identify",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ignore:v:b1",
        "word": "ignore",
        "translation": "игнорировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ignore",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:illustrate:v:b2",
        "word": "illustrate",
        "translation": "иллюстрировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "illustrate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:imagine:v:a1",
        "word": "imagine",
        "translation": "представлять себе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "imagine",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:impact:n-v:b1",
        "word": "impact",
        "translation": "влияние; удар; влиять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impact",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:imply:v:b2",
        "word": "imply",
        "translation": "подразумевать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "imply",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:import:n-v:b1",
        "word": "import",
        "translation": "импорт; импортировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "import",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:impose:v:b2",
        "word": "impose",
        "translation": "навязывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impose",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:impress:v:b2",
        "word": "impress",
        "translation": "произвести впечатление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impress",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:improve:v:a1",
        "word": "improve",
        "translation": "улучшить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "improve",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:include:v:a1",
        "word": "include",
        "translation": "включать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "include",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:increase:v-n:a2",
        "word": "increase",
        "translation": "увеличение; увеличивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "increase",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:increasingly:adv:b2",
        "word": "increasingly",
        "translation": "все больше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "increasingly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:incredibly:adv:b1",
        "word": "incredibly",
        "translation": "невероятно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "incredibly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:indeed:adv:b1",
        "word": "indeed",
        "translation": "действительно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "indeed",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:indicate:v:b1",
        "word": "indicate",
        "translation": "указать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "indicate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:indoors:adv:b1",
        "word": "indoors",
        "translation": "в помещении",
        "example": "",
        "sentenceTranslation": "",
        "answer": "indoors",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:influence:n-v:b1",
        "word": "influence",
        "translation": "влияние; влиять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "influence",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:inform:v:b2",
        "word": "inform",
        "translation": "информировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inform",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:initially:adv:b2",
        "word": "initially",
        "translation": "изначально",
        "example": "",
        "sentenceTranslation": "",
        "answer": "initially",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:injure:v:b1",
        "word": "injure",
        "translation": "ранить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "injure",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:insist:v:b2",
        "word": "insist",
        "translation": "настаивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "insist",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:inspire:v:b2",
        "word": "inspire",
        "translation": "вдохновлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inspire",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:install:v:b2",
        "word": "install",
        "translation": "установить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "install",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:instead:adv:a2",
        "word": "instead",
        "translation": "вместо этого",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instead",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:intend:v:b1",
        "word": "intend",
        "translation": "намереваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intend",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:interest:n-v:a1",
        "word": "interest",
        "translation": "интерес; проценты; интересовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interest",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:interpret:v:b2",
        "word": "interpret",
        "translation": "интерпретировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interpret",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:interrupt:v:b2",
        "word": "interrupt",
        "translation": "прерывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interrupt",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:introduce:v:a1",
        "word": "introduce",
        "translation": "представить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "introduce",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:invent:v:a2",
        "word": "invent",
        "translation": "изобретать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "invent",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:investigate:v:b1",
        "word": "investigate",
        "translation": "исследовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "investigate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:invite:v:a2",
        "word": "invite",
        "translation": "пригласить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "invite",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:involve:v:a2",
        "word": "involve",
        "translation": "вовлекать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "involve",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:iron:n-v:b1",
        "word": "iron",
        "translation": "железо; утюг; гладить утюгом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "iron",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:issue:v:b2",
        "word": "issue",
        "translation": "выпускать; выдавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "issue",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:join:v:a1",
        "word": "join",
        "translation": "присоединиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "join",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:joke:n-v:a2",
        "word": "joke",
        "translation": "шутка; шутить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "joke",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:jump:v-n:a2",
        "word": "jump",
        "translation": "прыжок; прыгать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jump",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:just:adv:a1",
        "word": "just",
        "translation": "просто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "just",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:justify:v:b2",
        "word": "justify",
        "translation": "оправдывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "justify",
        "level": "B2",
        "partOfSpeech": "гл."
      }
    ],
    "id": "oxford-extra-11",
    "collection": "Oxford 3000",
    "subtopic": "Глаголы F–J",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Действия и изменения",
    "words": [
      {
        "id": "oxford:keep:v:a1",
        "word": "keep",
        "translation": "держать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "keep",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:kick:v-n:b1",
        "word": "kick",
        "translation": "удар ногой; пинать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kick",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:kill:v:a2",
        "word": "kill",
        "translation": "убить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kill",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:kiss:v-n:b1",
        "word": "kiss",
        "translation": "поцелуй; целовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kiss",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:knock:v:a2",
        "word": "knock",
        "translation": "стучать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "knock",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:know:v:a1",
        "word": "know",
        "translation": "знать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "know",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:label:n-v:b1",
        "word": "label",
        "translation": "этикетка; наклеивать этикетку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "label",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:lack:n-v:b1",
        "word": "lack",
        "translation": "нехватка; испытывать недостаток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lack",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:largely:adv:b2",
        "word": "largely",
        "translation": "в основном",
        "example": "",
        "sentenceTranslation": "",
        "answer": "largely",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:later:adv:a1",
        "word": "later",
        "translation": "позже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "later",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:laugh:v-n:a1",
        "word": "laugh",
        "translation": "смех; смеяться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "laugh",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:launch:v-n:b2",
        "word": "launch",
        "translation": "запуск; запускать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "launch",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:lay:v:b1",
        "word": "lay",
        "translation": "лежать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lay",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lead:v:a2",
        "word": "lead",
        "translation": "вести; руководить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lead",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lean:v:b2",
        "word": "lean",
        "translation": "наклоняться; прислоняться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lean",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lend:v:a2",
        "word": "lend",
        "translation": "одолжить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lend",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:let:v:a1",
        "word": "let",
        "translation": "пусть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "let",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:level:v:b2",
        "word": "level",
        "translation": "выравнивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "level",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lie:v:a1",
        "word": "lie",
        "translation": "лежать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lie",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lie:v-n:b1",
        "word": "lie",
        "translation": "ложь; лгать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lie",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:lift:v-n:a2",
        "word": "lift",
        "translation": "лифт; подъём; поднимать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lift",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:like:v:a1:2",
        "word": "like",
        "translation": "нравиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "like",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:limit:n-v:b1",
        "word": "limit",
        "translation": "предел; ограничивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "limit",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:line:v:b2",
        "word": "line",
        "translation": "выстраиваться вдоль; выстилать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "line",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:list:n-v:a1",
        "word": "list",
        "translation": "список; перечислять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "list",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:listen:v:a1",
        "word": "listen",
        "translation": "слушать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "listen",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:little:adv:a2",
        "word": "little",
        "translation": "маленький",
        "example": "",
        "sentenceTranslation": "",
        "answer": "little",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:live:v:a1",
        "word": "live",
        "translation": "жить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "live",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:live:adj-adv:b1",
        "word": "live",
        "translation": "живой; в прямом эфире",
        "example": "",
        "sentenceTranslation": "",
        "answer": "live",
        "level": "B1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:load:n-v:b2",
        "word": "load",
        "translation": "груз; нагрузка; загружать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "load",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:locate:v:b1",
        "word": "locate",
        "translation": "найти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "locate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:long:adj-adv:a1",
        "word": "long",
        "translation": "длинный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "long",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:long-term:adj-adv:b2",
        "word": "long-term",
        "translation": "долгосрочный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "long-term",
        "level": "B2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:look:v:a1",
        "word": "look",
        "translation": "смотреть; выглядеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "look",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:loud:adj-adv:a2",
        "word": "loud",
        "translation": "громкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "loud",
        "level": "A2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:loudly:adv:a2",
        "word": "loudly",
        "translation": "громко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "loudly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:low:adj-adv:a2",
        "word": "low",
        "translation": "низкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "low",
        "level": "A2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:lower:v:b2",
        "word": "lower",
        "translation": "понижать; опускать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lower",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mail:n-v:a2",
        "word": "mail",
        "translation": "почта; отправлять по почте",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mail",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:mainly:adv:b1",
        "word": "mainly",
        "translation": "главным образом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mainly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:maintain:v:b2",
        "word": "maintain",
        "translation": "поддерживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "maintain",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:make:v:a1",
        "word": "make",
        "translation": "делать; создавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "make",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:manage:v:a2",
        "word": "manage",
        "translation": "управлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "manage",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:marry:v:a2",
        "word": "marry",
        "translation": "жениться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "marry",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:master:n-v:b2",
        "word": "master",
        "translation": "мастер; хозяин; овладевать навыком",
        "example": "",
        "sentenceTranslation": "",
        "answer": "master",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:matter:n-v:a2",
        "word": "matter",
        "translation": "вопрос; дело; вещество; иметь значение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "matter",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:maybe:adv:a1",
        "word": "maybe",
        "translation": "может быть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "maybe",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:mean:v:a1",
        "word": "mean",
        "translation": "значить; иметь в виду",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mean",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:meanwhile:adv:b1",
        "word": "meanwhile",
        "translation": "тем временем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meanwhile",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:meet:v:a1",
        "word": "meet",
        "translation": "встретиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meet",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:melt:v:b2",
        "word": "melt",
        "translation": "таять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "melt",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mention:v:a2",
        "word": "mention",
        "translation": "упоминать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mention",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mind:n-v:a2",
        "word": "mind",
        "translation": "ум; сознание; возражать; обращать внимание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mind",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:miss:v:a1",
        "word": "miss",
        "translation": "пропустить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "miss",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mistake:v:b2",
        "word": "mistake",
        "translation": "ошибочно принимать за",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mistake",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mix:v-n:b1",
        "word": "mix",
        "translation": "смесь; смешивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mix",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:model:v:b2",
        "word": "model",
        "translation": "моделировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "model",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:modify:v:b2",
        "word": "modify",
        "translation": "изменить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "modify",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:monitor:n-v:b2",
        "word": "monitor",
        "translation": "монитор; наблюдать; контролировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "monitor",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:mostly:adv:a2",
        "word": "mostly",
        "translation": "в основном",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mostly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:mount:v:b2",
        "word": "mount",
        "translation": "монтировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mount",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:move:v:a1",
        "word": "move",
        "translation": "двигать; переезжать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "move",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:multiply:v:b2",
        "word": "multiply",
        "translation": "умножать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "multiply",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:murder:n-v:b1",
        "word": "murder",
        "translation": "убийство; убивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "murder",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:name:n-v:a1",
        "word": "name",
        "translation": "имя; название; называть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "name",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:narrow:v:b2",
        "word": "narrow",
        "translation": "сужать; сужаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "narrow",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:naturally:adv:b1",
        "word": "naturally",
        "translation": "естественно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "naturally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:nearly:adv:a2",
        "word": "nearly",
        "translation": "почти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nearly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:necessarily:adv:b1",
        "word": "necessarily",
        "translation": "обязательно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "necessarily",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:need:v:a1",
        "word": "need",
        "translation": "нуждаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "need",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:neither:adv:b1",
        "word": "neither",
        "translation": "ни один из двух",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neither",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:nevertheless:adv:b2",
        "word": "nevertheless",
        "translation": "тем не менее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nevertheless",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:normally:adv:a2",
        "word": "normally",
        "translation": "обычно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "normally",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:not:adv:a1",
        "word": "not",
        "translation": "не",
        "example": "",
        "sentenceTranslation": "",
        "answer": "not",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:note:v:b1",
        "word": "note",
        "translation": "замечать; отмечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "note",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:notice:v-n:a2",
        "word": "notice",
        "translation": "уведомление; объявление; замечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "notice",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:nowhere:adv:a2",
        "word": "nowhere",
        "translation": "нигде",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nowhere",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:obey:v:b2",
        "word": "obey",
        "translation": "подчиняться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "obey",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:object:v:b2",
        "word": "object",
        "translation": "возражать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "object",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:observe:v:b2",
        "word": "observe",
        "translation": "наблюдать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "observe",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:obtain:v:b2",
        "word": "obtain",
        "translation": "получить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "obtain",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:obviously:adv:b1",
        "word": "obviously",
        "translation": "очевидно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "obviously",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:occasionally:adv:b2",
        "word": "occasionally",
        "translation": "иногда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "occasionally",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:occur:v:b1",
        "word": "occur",
        "translation": "происходить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "occur",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:offend:v:b2",
        "word": "offend",
        "translation": "оскорбить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "offend",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:offer:v-n:a2",
        "word": "offer",
        "translation": "предложение; предлагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "offer",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:once:adv:a1",
        "word": "once",
        "translation": "однажды",
        "example": "",
        "sentenceTranslation": "",
        "answer": "once",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:only:adj-adv:a1",
        "word": "only",
        "translation": "только; единственный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "only",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:open:adj-v:a1",
        "word": "open",
        "translation": "открыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "open",
        "level": "A1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:operate:v:b2",
        "word": "operate",
        "translation": "действовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "operate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:oppose:v:b2",
        "word": "oppose",
        "translation": "выступать против",
        "example": "",
        "sentenceTranslation": "",
        "answer": "oppose",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:organize:v:a2",
        "word": "organize",
        "translation": "организовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "organize",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:originally:adv:b1",
        "word": "originally",
        "translation": "изначально",
        "example": "",
        "sentenceTranslation": "",
        "answer": "originally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:otherwise:adv:b2",
        "word": "otherwise",
        "translation": "иначе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "otherwise",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:outdoors:adv:b1",
        "word": "outdoors",
        "translation": "на открытом воздухе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outdoors",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:outline:n-v:b2",
        "word": "outline",
        "translation": "контур; краткое изложение; кратко излагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outline",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:outside:adv:a1",
        "word": "outside",
        "translation": "снаружи",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outside",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:overall:adj-adv:b2",
        "word": "overall",
        "translation": "в целом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "overall",
        "level": "B2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:owe:v:b2",
        "word": "owe",
        "translation": "должен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "owe",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:own:v:a2",
        "word": "own",
        "translation": "владеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "own",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:o-clock:adv:a1",
        "word": "o’clock",
        "translation": "час",
        "example": "",
        "sentenceTranslation": "",
        "answer": "o’clock",
        "level": "A1",
        "partOfSpeech": "нареч."
      }
    ],
    "id": "oxford-extra-12",
    "collection": "Oxford 3000",
    "subtopic": "Глаголы K–O",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Действия и изменения",
    "words": [
      {
        "id": "oxford:pace:n-v:b2",
        "word": "pace",
        "translation": "темп; шаг; мерить шагами",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pace",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pack:v:a2",
        "word": "pack",
        "translation": "упаковывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pack",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:package:v:b2",
        "word": "package",
        "translation": "упаковывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "package",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:participate:v:b1",
        "word": "participate",
        "translation": "участвовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "participate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:particularly:adv:b1",
        "word": "particularly",
        "translation": "особенно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "particularly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:partly:adv:b2",
        "word": "partly",
        "translation": "частично",
        "example": "",
        "sentenceTranslation": "",
        "answer": "partly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:pass:v:a2",
        "word": "pass",
        "translation": "проходить; передавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pass",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:per-cent:n-adj-adv:a2",
        "word": "per cent",
        "translation": "процент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "per cent",
        "level": "A2",
        "partOfSpeech": "сущ., прил., нареч."
      },
      {
        "id": "oxford:perfectly:adv:b1",
        "word": "perfectly",
        "translation": "идеально",
        "example": "",
        "sentenceTranslation": "",
        "answer": "perfectly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:perhaps:adv:a2",
        "word": "perhaps",
        "translation": "возможно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "perhaps",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:permit:v-n:b2",
        "word": "permit",
        "translation": "разрешение; пропуск; разрешать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "permit",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:personally:adv:b1",
        "word": "personally",
        "translation": "лично",
        "example": "",
        "sentenceTranslation": "",
        "answer": "personally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:persuade:v:b1",
        "word": "persuade",
        "translation": "убеждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "persuade",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pick:v:a2",
        "word": "pick",
        "translation": "выбирать; срывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pick",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pile:n-v:b2",
        "word": "pile",
        "translation": "куча; складывать кучей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pile",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pin:n-v:b1",
        "word": "pin",
        "translation": "булавка; прикалывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pin",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:plan:n-v:a1",
        "word": "plan",
        "translation": "план; планировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plan",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:please:v:a2",
        "word": "please",
        "translation": "радовать; угождать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "please",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:plot:v:b2",
        "word": "plot",
        "translation": "замышлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plot",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:point:v:b1",
        "word": "point",
        "translation": "указывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "point",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:poison:n-v:b1",
        "word": "poison",
        "translation": "яд; отравлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poison",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pose:v:b2",
        "word": "pose",
        "translation": "представлять; позировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pose",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:position:v:b2",
        "word": "position",
        "translation": "располагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "position",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:possess:v:b2",
        "word": "possess",
        "translation": "обладать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "possess",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:possibly:adv:b1",
        "word": "possibly",
        "translation": "возможно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "possibly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:post:n-v:a1",
        "word": "post",
        "translation": "почта; публикация; должность; отправлять по почте; публиковать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "post",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pour:v:b1",
        "word": "pour",
        "translation": "налить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pour",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:power:v:b2",
        "word": "power",
        "translation": "снабжать энергией",
        "example": "",
        "sentenceTranslation": "",
        "answer": "power",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:praise:n-v:b2",
        "word": "praise",
        "translation": "похвала; хвалить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "praise",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pray:v:b1",
        "word": "pray",
        "translation": "молиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pray",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:predict:v:a2",
        "word": "predict",
        "translation": "предсказать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "predict",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:prefer:v:a1",
        "word": "prefer",
        "translation": "предпочитать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prefer",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:prepare:v:a1",
        "word": "prepare",
        "translation": "подготовить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prepare",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:preserve:v:b2",
        "word": "preserve",
        "translation": "сохранять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "preserve",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:press:n-v:b1",
        "word": "press",
        "translation": "пресса; печатный станок; нажимать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "press",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:pretend:v:b1",
        "word": "pretend",
        "translation": "притворяться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pretend",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pretty:adj-adv:a1",
        "word": "pretty",
        "translation": "красивая",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pretty",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:prevent:v:a2",
        "word": "prevent",
        "translation": "предотвратить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prevent",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:previously:adv:b1",
        "word": "previously",
        "translation": "ранее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "previously",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:print:v:a2",
        "word": "print",
        "translation": "печатать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "print",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:probably:adv:a1",
        "word": "probably",
        "translation": "вероятно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "probably",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:produce:v:a2",
        "word": "produce",
        "translation": "производить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "produce",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:progress:v:b2",
        "word": "progress",
        "translation": "продвигаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "progress",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:promise:v-n:a2",
        "word": "promise",
        "translation": "обещание; обещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "promise",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:promote:v:b1",
        "word": "promote",
        "translation": "продвигать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "promote",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pronounce:v:a2",
        "word": "pronounce",
        "translation": "произносить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pronounce",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:properly:adv:b1",
        "word": "properly",
        "translation": "должным образом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "properly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:propose:v:b2",
        "word": "propose",
        "translation": "предлагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "propose",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:protect:v:a2",
        "word": "protect",
        "translation": "защищать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "protect",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:protest:n-v:b1",
        "word": "protest",
        "translation": "протест; протестовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "protest",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:prove:v:b1",
        "word": "prove",
        "translation": "доказать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prove",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:provide:v:a2",
        "word": "provide",
        "translation": "обеспечить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "provide",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:publish:v:a2",
        "word": "publish",
        "translation": "публиковать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "publish",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pull:v:a2",
        "word": "pull",
        "translation": "тянуть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pull",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:punish:v:b1",
        "word": "punish",
        "translation": "наказывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "punish",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pursue:v:b2",
        "word": "pursue",
        "translation": "преследовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pursue",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:push:v:a2",
        "word": "push",
        "translation": "толкать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "push",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:put:v:a1",
        "word": "put",
        "translation": "положить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "put",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:qualify:v:b1",
        "word": "qualify",
        "translation": "квалифицироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "qualify",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:queue:n-v:b1",
        "word": "queue",
        "translation": "очередь; стоять в очереди",
        "example": "",
        "sentenceTranslation": "",
        "answer": "queue",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:quickly:adv:a1",
        "word": "quickly",
        "translation": "быстро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quickly",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:quietly:adv:a2",
        "word": "quietly",
        "translation": "тихо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quietly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:quit:v:b1",
        "word": "quit",
        "translation": "уйти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quit",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:quite:adv:a1",
        "word": "quite",
        "translation": "вполне",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quite",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:quote:v-n:b1",
        "word": "quote",
        "translation": "цитата; расценка; цитировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quote",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:raise:v:a2",
        "word": "raise",
        "translation": "поднять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "raise",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:range:v:b2",
        "word": "range",
        "translation": "варьироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "range",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rank:n-v:b2",
        "word": "rank",
        "translation": "ранг; звание; ранжировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rank",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:rapidly:adv:b2",
        "word": "rapidly",
        "translation": "быстро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rapidly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:rate:v:b2",
        "word": "rate",
        "translation": "оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rate",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rather:adv:a2",
        "word": "rather",
        "translation": "скорее",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rather",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:reach:v:a2",
        "word": "reach",
        "translation": "достигать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reach",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:react:v:a2",
        "word": "react",
        "translation": "реагировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "react",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:realize:v:a2",
        "word": "realize",
        "translation": "осознавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "realize",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:really:adv:a1",
        "word": "really",
        "translation": "действительно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "really",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:recall:v:b2",
        "word": "recall",
        "translation": "вспомнить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recall",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:receive:v:a2",
        "word": "receive",
        "translation": "получать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "receive",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:recognize:v:a2",
        "word": "recognize",
        "translation": "признать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recognize",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:recommend:v:a2",
        "word": "recommend",
        "translation": "рекомендовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recommend",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:record:n-v:a2",
        "word": "record",
        "translation": "запись; рекорд; записывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "record",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:recover:v:b2",
        "word": "recover",
        "translation": "выздоравливать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recover",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reduce:v:a2",
        "word": "reduce",
        "translation": "уменьшить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reduce",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:refer:v:a2",
        "word": "refer",
        "translation": "обратиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "refer",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reflect:v:b1",
        "word": "reflect",
        "translation": "отражать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reflect",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:refuse:v:a2",
        "word": "refuse",
        "translation": "отказаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "refuse",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:regard:v-n:b2",
        "word": "regard",
        "translation": "уважение; внимание; считать; рассматривать как",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regard",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:register:v-n:b2",
        "word": "register",
        "translation": "реестр; журнал; регистрироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "register",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:regret:v-n:b2",
        "word": "regret",
        "translation": "сожаление; сожалеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regret",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:regularly:adv:b1",
        "word": "regularly",
        "translation": "регулярно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regularly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:reject:v:b1",
        "word": "reject",
        "translation": "отклонить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reject",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:relate:v:b1",
        "word": "relate",
        "translation": "относиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:relatively:adv:b2",
        "word": "relatively",
        "translation": "относительно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relatively",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:release:v-n:b1",
        "word": "release",
        "translation": "выпуск; освобождение; выпускать; освобождать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "release",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:rely:v:b2",
        "word": "rely",
        "translation": "полагаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rely",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:remain:v:b1",
        "word": "remain",
        "translation": "оставаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remain",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:remark:n-v:b2",
        "word": "remark",
        "translation": "замечание; замечать; высказываться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remark",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:remember:v:a1",
        "word": "remember",
        "translation": "помнить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remember",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:remind:v:b1",
        "word": "remind",
        "translation": "напомнить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remind",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:remove:v:a2",
        "word": "remove",
        "translation": "удалить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remove",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rent:n-v:b1",
        "word": "rent",
        "translation": "аренда; арендная плата; арендовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rent",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:repeat:v:a1",
        "word": "repeat",
        "translation": "повторять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "repeat",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:replace:v:a2",
        "word": "replace",
        "translation": "заменить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "replace",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reply:v-n:a2",
        "word": "reply",
        "translation": "ответ; отвечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reply",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:report:v:a2",
        "word": "report",
        "translation": "сообщать; докладывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "report",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:represent:v:b1",
        "word": "represent",
        "translation": "представлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "represent",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:request:v:b1",
        "word": "request",
        "translation": "просить; запрашивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "request",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:require:v:b1",
        "word": "require",
        "translation": "требовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "require",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rescue:v-n:b2",
        "word": "rescue",
        "translation": "спасение; спасать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rescue",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:reserve:n-v:b2",
        "word": "reserve",
        "translation": "резерв; запас; резервировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reserve",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:resist:v:b2",
        "word": "resist",
        "translation": "сопротивляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "resist",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:resolve:v:b2",
        "word": "resolve",
        "translation": "решить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "resolve",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:respect:n-v:b1",
        "word": "respect",
        "translation": "уважение; уважать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "respect",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:respond:v:a2",
        "word": "respond",
        "translation": "ответить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "respond",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rest:n-v:a2:2",
        "word": "rest",
        "translation": "отдых; остаток; отдыхать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rest",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:retain:v:b2",
        "word": "retain",
        "translation": "сохранить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "retain",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:retire:v:b1",
        "word": "retire",
        "translation": "выйти на пенсию",
        "example": "",
        "sentenceTranslation": "",
        "answer": "retire",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reveal:v:b2",
        "word": "reveal",
        "translation": "раскрыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reveal",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:review:n-v:a2",
        "word": "review",
        "translation": "обзор; отзыв; рассматривать; рецензировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "review",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:revise:v:b1",
        "word": "revise",
        "translation": "пересматривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "revise",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reward:n-v:b2",
        "word": "reward",
        "translation": "награда; награждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reward",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:rid:v:b2",
        "word": "rid",
        "translation": "избавить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rid",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ring:v:a2:2",
        "word": "ring",
        "translation": "звонить; звенеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ring",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rise:v:a2",
        "word": "rise",
        "translation": "подниматься; возрастать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rise",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:risk:n-v:b1",
        "word": "risk",
        "translation": "риск; рисковать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "risk",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:roll:v-n:b1",
        "word": "roll",
        "translation": "рулон; булочка; катить; скатывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "roll",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:rub:v:b2",
        "word": "rub",
        "translation": "тереть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rub",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:rush:v-n:b2",
        "word": "rush",
        "translation": "спешка; наплыв; спешить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rush",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:sadly:adv:a2",
        "word": "sadly",
        "translation": "к сожалению",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sadly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:sail:v:a2",
        "word": "sail",
        "translation": "плыть под парусом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sail",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sample:v:b2",
        "word": "sample",
        "translation": "пробовать; брать образец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sample",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:satisfy:v:b2",
        "word": "satisfy",
        "translation": "удовлетворить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "satisfy",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:save:v:a2",
        "word": "save",
        "translation": "сохранить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "save",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:say:v:a1",
        "word": "say",
        "translation": "сказать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "say",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:scan:v:b1",
        "word": "scan",
        "translation": "сканировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scan",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:schedule:v:b2",
        "word": "schedule",
        "translation": "планировать по времени",
        "example": "",
        "sentenceTranslation": "",
        "answer": "schedule",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:score:v-n:a2",
        "word": "score",
        "translation": "счёт; балл; набирать очки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "score",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:scream:v-n:b2",
        "word": "scream",
        "translation": "крик; кричать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scream",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:seat:v:b2",
        "word": "seat",
        "translation": "усаживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seat",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:secondly:adv:a2",
        "word": "secondly",
        "translation": "во-вторых",
        "example": "",
        "sentenceTranslation": "",
        "answer": "secondly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:secure:v-adj:b2",
        "word": "secure",
        "translation": "безопасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "secure",
        "level": "B2",
        "partOfSpeech": "гл., прил."
      },
      {
        "id": "oxford:see:v:a1",
        "word": "see",
        "translation": "увидеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "see",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:seek:v:b2",
        "word": "seek",
        "translation": "искать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seek",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:seem:v:a2",
        "word": "seem",
        "translation": "казаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seem",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:select:v:b2",
        "word": "select",
        "translation": "выбрать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "select",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:send:v:a1",
        "word": "send",
        "translation": "отправить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "send",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sense:v:b2",
        "word": "sense",
        "translation": "чувствовать; ощущать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sense",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:separate:v:b1",
        "word": "separate",
        "translation": "разделять; отделять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "separate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:seriously:adv:b1",
        "word": "seriously",
        "translation": "серьезно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seriously",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:serve:v:a2",
        "word": "serve",
        "translation": "служить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "serve",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:set:v:b1",
        "word": "set",
        "translation": "ставить; устанавливать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "set",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:settle:v:b2",
        "word": "settle",
        "translation": "урегулировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "settle",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shake:v:a2",
        "word": "shake",
        "translation": "трясти",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shake",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shape:v:b2",
        "word": "shape",
        "translation": "придавать форму",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shape",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:share:v:a1",
        "word": "share",
        "translation": "делиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "share",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shelter:n-v:b2",
        "word": "shelter",
        "translation": "убежище; укрывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shelter",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:shift:v:b2",
        "word": "shift",
        "translation": "сдвигать; менять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shift",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shine:v:b1",
        "word": "shine",
        "translation": "сиять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shine",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shock:n-v:b2",
        "word": "shock",
        "translation": "шок; потрясать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shock",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:shoot:v:b1",
        "word": "shoot",
        "translation": "стрелять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shoot",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shout:v-n:a2",
        "word": "shout",
        "translation": "крик; кричать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shout",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:show:v-n:a1",
        "word": "show",
        "translation": "шоу; представление; показывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "show",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:shut:v-adj:a2",
        "word": "shut",
        "translation": "закрыть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shut",
        "level": "A2",
        "partOfSpeech": "гл., прил."
      },
      {
        "id": "oxford:sign:n-v:a2",
        "word": "sign",
        "translation": "знак; вывеска; подписывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sign",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:signal:n-v:b1",
        "word": "signal",
        "translation": "сигнал; подавать сигнал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "signal",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:significantly:adv:b2",
        "word": "significantly",
        "translation": "значительно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "significantly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:similarly:adv:b1",
        "word": "similarly",
        "translation": "аналогично",
        "example": "",
        "sentenceTranslation": "",
        "answer": "similarly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:simply:adv:b1",
        "word": "simply",
        "translation": "просто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "simply",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:sit:v:a1",
        "word": "sit",
        "translation": "сидеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sit",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:ski:v-adj-n:a2",
        "word": "ski",
        "translation": "лыжа; лыжный; кататься на лыжах",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ski",
        "level": "A2",
        "partOfSpeech": "гл., прил., сущ."
      },
      {
        "id": "oxford:slice:n-v:b1",
        "word": "slice",
        "translation": "ломтик; нарезать ломтиками",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slice",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:slide:v-n:b2",
        "word": "slide",
        "translation": "слайд; горка; скользить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slide",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:slightly:adv:b1",
        "word": "slightly",
        "translation": "слегка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slightly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:slip:v:b2",
        "word": "slip",
        "translation": "скользить; поскользнуться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slip",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:slope:n-v:b2",
        "word": "slope",
        "translation": "склон; иметь уклон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slope",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:slow:v:b1",
        "word": "slow",
        "translation": "замедлять; замедляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slow",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:slowly:adv:a2",
        "word": "slowly",
        "translation": "медленно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slowly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:smell:v-n:a2",
        "word": "smell",
        "translation": "запах; пахнуть; нюхать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smell",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:smile:v-n:a2",
        "word": "smile",
        "translation": "улыбка; улыбаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smile",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:smoke:n-v:a2",
        "word": "smoke",
        "translation": "дым; курить; дымить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smoke",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:solve:v:a2",
        "word": "solve",
        "translation": "решить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "solve",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:somewhat:adv:b2",
        "word": "somewhat",
        "translation": "несколько",
        "example": "",
        "sentenceTranslation": "",
        "answer": "somewhat",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:sort:v:b1",
        "word": "sort",
        "translation": "сортировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sort",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sound:n-v:a1",
        "word": "sound",
        "translation": "звук; звучать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sound",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:speak:v:a1",
        "word": "speak",
        "translation": "говорить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "speak",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:specifically:adv:b1",
        "word": "specifically",
        "translation": "конкретно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "specifically",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:spell:v:a1",
        "word": "spell",
        "translation": "произносить по буквам; писать по буквам",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spell",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:spend:v:a1",
        "word": "spend",
        "translation": "тратить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spend",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:split:v-n:b2",
        "word": "split",
        "translation": "раскол; разделять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "split",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:sponsor:v-n:b2",
        "word": "sponsor",
        "translation": "спонсор; спонсировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sponsor",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:spot:v:b2",
        "word": "spot",
        "translation": "замечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spot",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:spread:v:b1",
        "word": "spread",
        "translation": "распространять; намазывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spread",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:spring:v:b1",
        "word": "spring",
        "translation": "прыгать; возникать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spring",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stage:v:b2",
        "word": "stage",
        "translation": "ставить спектакль; устраивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stage",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stand:v:a1",
        "word": "stand",
        "translation": "стоять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stand",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:star:v:a2",
        "word": "star",
        "translation": "сниматься в главной роли",
        "example": "",
        "sentenceTranslation": "",
        "answer": "star",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stare:v:b2",
        "word": "stare",
        "translation": "смотреть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stare",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:start:v:a1",
        "word": "start",
        "translation": "начинать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "start",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stay:v:a1",
        "word": "stay",
        "translation": "оставаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stay",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:steal:v:a2",
        "word": "steal",
        "translation": "украсть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "steal",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stick:v:b1",
        "word": "stick",
        "translation": "приклеивать; застревать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stick",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:stop:v-n:a1",
        "word": "stop",
        "translation": "остановка; останавливать; останавливаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stop",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:stretch:v-n:b2",
        "word": "stretch",
        "translation": "отрезок; растяжка; растягивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stretch",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:strike:v-n:b2",
        "word": "strike",
        "translation": "забастовка; удар; ударять; бастовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strike",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:strongly:adv:b1",
        "word": "strongly",
        "translation": "сильно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strongly",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:structure:v:b2",
        "word": "structure",
        "translation": "структурировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "structure",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:struggle:v-n:b2",
        "word": "struggle",
        "translation": "борьба; бороться; с трудом справляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "struggle",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:stuff:v:b2",
        "word": "stuff",
        "translation": "набивать; заполнять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stuff",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:submit:v:b2",
        "word": "submit",
        "translation": "отправить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "submit",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:succeed:v:a2",
        "word": "succeed",
        "translation": "добиться успеха",
        "example": "",
        "sentenceTranslation": "",
        "answer": "succeed",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:successfully:adv:b1",
        "word": "successfully",
        "translation": "успешно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "successfully",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:suddenly:adv:a2",
        "word": "suddenly",
        "translation": "внезапно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suddenly",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:suffer:v:b1",
        "word": "suffer",
        "translation": "страдать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suffer",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:suggest:v:a2",
        "word": "suggest",
        "translation": "предложить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suggest",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:suit:v:b1",
        "word": "suit",
        "translation": "подходить; устраивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suit",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:summarize:v:b1",
        "word": "summarize",
        "translation": "подвести итог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "summarize",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:supply:n-v:b1",
        "word": "supply",
        "translation": "запас; поставка; снабжать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "supply",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:support:v-n:a2",
        "word": "support",
        "translation": "поддержка; поддерживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "support",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:suppose:v:a2",
        "word": "suppose",
        "translation": "предполагать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suppose",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sure:adv:a2",
        "word": "sure",
        "translation": "уверенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sure",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:surely:adv:b1",
        "word": "surely",
        "translation": "конечно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surely",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:surprise:n-v:a2",
        "word": "surprise",
        "translation": "сюрприз; удивление; удивлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surprise",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:surround:v:b2",
        "word": "surround",
        "translation": "окружать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surround",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:survey:v:b2",
        "word": "survey",
        "translation": "проводить опрос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "survey",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:survive:v:b1",
        "word": "survive",
        "translation": "выжить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "survive",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:suspect:v-n:b2",
        "word": "suspect",
        "translation": "подозреваемый; подозревать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suspect",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:swear:v:b2",
        "word": "swear",
        "translation": "ругаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "swear",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sweep:v:b2",
        "word": "sweep",
        "translation": "подметать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sweep",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:switch:v:b1",
        "word": "switch",
        "translation": "переключать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "switch",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:take:v:a1",
        "word": "take",
        "translation": "взять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "take",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:talk:v:a1",
        "word": "talk",
        "translation": "разговаривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "talk",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:target:v:b2",
        "word": "target",
        "translation": "нацеливаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "target",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:tear:v-n:b2",
        "word": "tear",
        "translation": "слеза; разрыв; рвать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tear",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:tell:v:a1",
        "word": "tell",
        "translation": "рассказать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tell",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:tend:v:b1",
        "word": "tend",
        "translation": "склоняться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tend",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:term:v:b2",
        "word": "term",
        "translation": "называть; обозначать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "term",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:thank:v:a1",
        "word": "thank",
        "translation": "благодарить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thank",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:that:adv:b1",
        "word": "that",
        "translation": "тот; что",
        "example": "",
        "sentenceTranslation": "",
        "answer": "that",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:there:adv:a1",
        "word": "there",
        "translation": "там; здесь есть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "there",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:therefore:adv:b1",
        "word": "therefore",
        "translation": "поэтому",
        "example": "",
        "sentenceTranslation": "",
        "answer": "therefore",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:think:v:a1",
        "word": "think",
        "translation": "думать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "think",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:this:adv:b1",
        "word": "this",
        "translation": "этот; это",
        "example": "",
        "sentenceTranslation": "",
        "answer": "this",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:threaten:v:b2",
        "word": "threaten",
        "translation": "угрожать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "threaten",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:throw:v:a2",
        "word": "throw",
        "translation": "бросить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "throw",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:thus:adv:b2",
        "word": "thus",
        "translation": "таким образом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thus",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:tie:v-n:a2",
        "word": "tie",
        "translation": "галстук; связь; ничья; завязывать; связывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tie",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:tip:v:b1",
        "word": "tip",
        "translation": "наклонять; давать чаевые",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tip",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:title:v:b2",
        "word": "title",
        "translation": "озаглавливать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "title",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:together:adv:a1",
        "word": "together",
        "translation": "вместе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "together",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:tonight:adv-n:a1",
        "word": "tonight",
        "translation": "сегодня вечером",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tonight",
        "level": "A1",
        "partOfSpeech": "нареч., сущ."
      },
      {
        "id": "oxford:too:adv:a1",
        "word": "too",
        "translation": "тоже; слишком",
        "example": "",
        "sentenceTranslation": "",
        "answer": "too",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:totally:adv:b1",
        "word": "totally",
        "translation": "полностью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "totally",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:touch:v:a2",
        "word": "touch",
        "translation": "трогать; касаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "touch",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:track:v:b2",
        "word": "track",
        "translation": "отслеживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "track",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:trade:n-v:b1",
        "word": "trade",
        "translation": "торговля; торговать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trade",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:transfer:v-n:b2",
        "word": "transfer",
        "translation": "перевод; перемещение; переносить; переводить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "transfer",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:transform:v:b2",
        "word": "transform",
        "translation": "трансформировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "transform",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:translate:v:b1",
        "word": "translate",
        "translation": "перевести",
        "example": "",
        "sentenceTranslation": "",
        "answer": "translate",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:treat:v:b1",
        "word": "treat",
        "translation": "лечить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "treat",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:trick:n-v:b1",
        "word": "trick",
        "translation": "трюк; уловка; обманывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trick",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:trouble:v:b2",
        "word": "trouble",
        "translation": "беспокоить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trouble",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:truly:adv:b2",
        "word": "truly",
        "translation": "действительно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "truly",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:trust:n-v:b2",
        "word": "trust",
        "translation": "доверие; доверять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trust",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:try:v:a1",
        "word": "try",
        "translation": "пытаться; пробовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "try",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:twice:adv:a1",
        "word": "twice",
        "translation": "дважды",
        "example": "",
        "sentenceTranslation": "",
        "answer": "twice",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:type:v:b1",
        "word": "type",
        "translation": "печатать на клавиатуре",
        "example": "",
        "sentenceTranslation": "",
        "answer": "type",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:typically:adv:b1",
        "word": "typically",
        "translation": "обычно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "typically",
        "level": "B1",
        "partOfSpeech": "нареч."
      }
    ],
    "id": "oxford-extra-13",
    "collection": "Oxford 3000",
    "subtopic": "Глаголы P–T",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Действия и изменения",
    "words": [
      {
        "id": "oxford:ultimately:adv:b2",
        "word": "ultimately",
        "translation": "в конечном итоге",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ultimately",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:underground:adj-adv:a2",
        "word": "underground",
        "translation": "под землей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "underground",
        "level": "A2",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:understand:v:a1",
        "word": "understand",
        "translation": "понять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "understand",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:unfortunately:adv:a2",
        "word": "unfortunately",
        "translation": "к сожалению",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unfortunately",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:update:v-n:b1",
        "word": "update",
        "translation": "обновление; обновлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "update",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:upset:adj-v:b1",
        "word": "upset",
        "translation": "расстроен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upset",
        "level": "B1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:upstairs:adv:a1",
        "word": "upstairs",
        "translation": "наверху",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upstairs",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:upwards:adv:b2",
        "word": "upwards",
        "translation": "вверх",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upwards",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:urge:v:b2",
        "word": "urge",
        "translation": "призывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "urge",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:use:v:a1",
        "word": "use",
        "translation": "использовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "use",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:vary:v:b2",
        "word": "vary",
        "translation": "варьироваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vary",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:very:adv:a1",
        "word": "very",
        "translation": "очень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "very",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:view:v:b1",
        "word": "view",
        "translation": "рассматривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "view",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:volunteer:n-v:b1",
        "word": "volunteer",
        "translation": "доброволец; вызываться добровольцем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "volunteer",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:wait:v:a1",
        "word": "wait",
        "translation": "ждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wait",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:wake:v:a1",
        "word": "wake",
        "translation": "просыпаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wake",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:want:v:a1",
        "word": "want",
        "translation": "хотеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "want",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:warn:v:b1",
        "word": "warn",
        "translation": "предупреждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "warn",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:waste:n-v-adj:b1",
        "word": "waste",
        "translation": "отходы; трата; напрасный; тратить впустую",
        "example": "",
        "sentenceTranslation": "",
        "answer": "waste",
        "level": "B1",
        "partOfSpeech": "сущ., гл., прил."
      },
      {
        "id": "oxford:wave:v:b1",
        "word": "wave",
        "translation": "махать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wave",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:way:adv:b2",
        "word": "way",
        "translation": "путь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "way",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:wear:v:a1",
        "word": "wear",
        "translation": "носить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wear",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:weigh:v:b1",
        "word": "weigh",
        "translation": "взвешивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weigh",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:why:adv:a1",
        "word": "why",
        "translation": "почему",
        "example": "",
        "sentenceTranslation": "",
        "answer": "why",
        "level": "A1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:widely:adv:b2",
        "word": "widely",
        "translation": "широко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "widely",
        "level": "B2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:wish:v-n:a2",
        "word": "wish",
        "translation": "желание; желать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wish",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:witness:n-v:b2",
        "word": "witness",
        "translation": "свидетель; быть свидетелем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "witness",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:wonder:v-n:b1",
        "word": "wonder",
        "translation": "удивление; чудо; интересоваться; удивляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wonder",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:worldwide:adj-adv:b1",
        "word": "worldwide",
        "translation": "по всему миру",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worldwide",
        "level": "B1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:worry:v:a2",
        "word": "worry",
        "translation": "беспокоиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worry",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:worse:adv:b1",
        "word": "worse",
        "translation": "хуже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worse",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:worst:adv:b1",
        "word": "worst",
        "translation": "худший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worst",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:wound:n-v:b2",
        "word": "wound",
        "translation": "рана; ранить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wound",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:wrap:v:b2",
        "word": "wrap",
        "translation": "обернуть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wrap",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:wrong:adv:b1",
        "word": "wrong",
        "translation": "неправильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wrong",
        "level": "B1",
        "partOfSpeech": "нареч."
      }
    ],
    "id": "oxford-extra-14",
    "collection": "Oxford 3000",
    "subtopic": "Глаголы U–Z",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Деньги и покупки",
    "words": [
      {
        "id": "oxford:account:n:b1",
        "word": "account",
        "translation": "счёт; отчёт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "account",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:account:v:b2",
        "word": "account",
        "translation": "объяснять; составлять долю",
        "example": "",
        "sentenceTranslation": "",
        "answer": "account",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:afford:v:b1",
        "word": "afford",
        "translation": "позволить себе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "afford",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bill:v:b2",
        "word": "bill",
        "translation": "выставлять счёт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bill",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:brand:n-v:b1",
        "word": "brand",
        "translation": "бренд; марка; клеймить; давать название",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brand",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:budget:n:b2",
        "word": "budget",
        "translation": "бюджет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "budget",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:buy:v:a1",
        "word": "buy",
        "translation": "купить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "buy",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cash:n:a2",
        "word": "cash",
        "translation": "наличные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cash",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cheap:adj:a1",
        "word": "cheap",
        "translation": "дешёвый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cheap",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:cheap:adv:b1",
        "word": "cheap",
        "translation": "дешёвый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cheap",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:coin:n:b1",
        "word": "coin",
        "translation": "монета",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coin",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:consumer:n:b1",
        "word": "consumer",
        "translation": "потребитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consumer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cost:n-v:a1",
        "word": "cost",
        "translation": "стоимость; стоить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cost",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:credit:n:a2",
        "word": "credit",
        "translation": "кредит; заслуга",
        "example": "",
        "sentenceTranslation": "",
        "answer": "credit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:credit:v:b2",
        "word": "credit",
        "translation": "приписывать заслугу; зачислять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "credit",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:debt:n:b2",
        "word": "debt",
        "translation": "долг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "debt",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:discount:n:b1",
        "word": "discount",
        "translation": "скидка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discount",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:discount:v:b2",
        "word": "discount",
        "translation": "делать скидку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discount",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:economic:adj:b1",
        "word": "economic",
        "translation": "экономический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "economic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:economy:n:b1",
        "word": "economy",
        "translation": "экономика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "economy",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:expensive:adj:a1",
        "word": "expensive",
        "translation": "дорогой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expensive",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:finance:n-v:b2",
        "word": "finance",
        "translation": "финансы; финансировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finance",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:financial:adj:b1",
        "word": "financial",
        "translation": "финансовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "financial",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:goods:n:b1",
        "word": "goods",
        "translation": "товары",
        "example": "",
        "sentenceTranslation": "",
        "answer": "goods",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:income:n:b2",
        "word": "income",
        "translation": "доход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "income",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:invest:v:b1",
        "word": "invest",
        "translation": "инвестировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "invest",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:investment:n:b2",
        "word": "investment",
        "translation": "инвестиции",
        "example": "",
        "sentenceTranslation": "",
        "answer": "investment",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:item:n:a2",
        "word": "item",
        "translation": "предмет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "item",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:loan:n:b2",
        "word": "loan",
        "translation": "кредит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "loan",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:loss:n:b1",
        "word": "loss",
        "translation": "потеря",
        "example": "",
        "sentenceTranslation": "",
        "answer": "loss",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:money:n:a1",
        "word": "money",
        "translation": "деньги",
        "example": "",
        "sentenceTranslation": "",
        "answer": "money",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pay:n:a2",
        "word": "pay",
        "translation": "оплата; зарплата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pay",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:payment:n:b1",
        "word": "payment",
        "translation": "оплата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "payment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:price:n:a1",
        "word": "price",
        "translation": "цена",
        "example": "",
        "sentenceTranslation": "",
        "answer": "price",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:price:v:b2",
        "word": "price",
        "translation": "назначать цену",
        "example": "",
        "sentenceTranslation": "",
        "answer": "price",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:product:n:a1",
        "word": "product",
        "translation": "продукт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "product",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:profit:n:b1",
        "word": "profit",
        "translation": "прибыль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "profit",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:purchase:n-v:b2",
        "word": "purchase",
        "translation": "покупка; покупать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "purchase",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:receipt:n:b1",
        "word": "receipt",
        "translation": "квитанция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "receipt",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sale:n:a2",
        "word": "sale",
        "translation": "продажа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sale",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sell:v:a1",
        "word": "sell",
        "translation": "продать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sell",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:shopping:n:a1",
        "word": "shopping",
        "translation": "шоппинг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shopping",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:supermarket:n:a1",
        "word": "supermarket",
        "translation": "супермаркет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "supermarket",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tax:n-v:b1",
        "word": "tax",
        "translation": "налог; облагать налогом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tax",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:value:n:b1",
        "word": "value",
        "translation": "ценность; значение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "value",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:value:v:b2",
        "word": "value",
        "translation": "ценить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "value",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:worth:adj:b1",
        "word": "worth",
        "translation": "стоит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worth",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:worth:n:b2",
        "word": "worth",
        "translation": "стоит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worth",
        "level": "B2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-15",
    "collection": "Oxford 3000",
    "subtopic": "Покупки и цены",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Дом и быт",
    "words": [
      {
        "id": "oxford:apartment:n:a1",
        "word": "apartment",
        "translation": "квартира",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apartment",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bag:n:a1",
        "word": "bag",
        "translation": "сумка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bag",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bath:n:a1",
        "word": "bath",
        "translation": "ванна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bath",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bedroom:n:a1",
        "word": "bedroom",
        "translation": "спальня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bedroom",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:box:n:a1",
        "word": "box",
        "translation": "коробка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "box",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:broken:adj:a2",
        "word": "broken",
        "translation": "сломанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "broken",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:building:n:a1",
        "word": "building",
        "translation": "здание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "building",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:carpet:n:a2",
        "word": "carpet",
        "translation": "ковер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "carpet",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ceiling:n:b1",
        "word": "ceiling",
        "translation": "потолок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ceiling",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chair:v:b2",
        "word": "chair",
        "translation": "председательствовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chair",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:clean:adj-v:a1",
        "word": "clean",
        "translation": "чистый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clean",
        "level": "A1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:clock:n:a1",
        "word": "clock",
        "translation": "часы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clock",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cupboard:n:a2",
        "word": "cupboard",
        "translation": "шкаф",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cupboard",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:curtain:n:b1",
        "word": "curtain",
        "translation": "занавес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "curtain",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:desk:n:a1",
        "word": "desk",
        "translation": "стол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "desk",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:device:n:a2",
        "word": "device",
        "translation": "устройство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "device",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:electrical:adj:a2",
        "word": "electrical",
        "translation": "электрический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "electrical",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:electricity:n:a2",
        "word": "electricity",
        "translation": "электричество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "electricity",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fix:v:a2",
        "word": "fix",
        "translation": "чинить; исправлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fix",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fix:n:b2",
        "word": "fix",
        "translation": "решение проблемы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fix",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flat:n:a1",
        "word": "flat",
        "translation": "квартира",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flat",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flat:adj:a2",
        "word": "flat",
        "translation": "плоский; ровный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flat",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:floor:n:a1",
        "word": "floor",
        "translation": "пол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "floor",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fridge:n:a2",
        "word": "fridge",
        "translation": "холодильник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fridge",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:furniture:n:a2",
        "word": "furniture",
        "translation": "мебель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "furniture",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:garage:n:b1",
        "word": "garage",
        "translation": "гараж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "garage",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:garden:n:a1",
        "word": "garden",
        "translation": "сад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "garden",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:heat:n-v:a2",
        "word": "heat",
        "translation": "тепло; жара; нагревать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heat",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:heating:n:b1",
        "word": "heating",
        "translation": "отопление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heating",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:home:n-adv:a1",
        "word": "home",
        "translation": "дом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "home",
        "level": "A1",
        "partOfSpeech": "сущ., нареч."
      },
      {
        "id": "oxford:home:adj:a2",
        "word": "home",
        "translation": "домашний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "home",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:house:v:b2",
        "word": "house",
        "translation": "размещать; предоставлять жильё",
        "example": "",
        "sentenceTranslation": "",
        "answer": "house",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:key:v:b1",
        "word": "key",
        "translation": "вводить с клавиатуры",
        "example": "",
        "sentenceTranslation": "",
        "answer": "key",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lamp:n:a2",
        "word": "lamp",
        "translation": "лампа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lamp",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:light:n-adj:a1",
        "word": "light",
        "translation": "свет; освещённый; светлый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "light",
        "level": "A1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:light:adj:a2:2",
        "word": "light",
        "translation": "лёгкий (не тяжёлый)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "light",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:light:v:a2",
        "word": "light",
        "translation": "зажигать; освещать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "light",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:lock:v-n:a2",
        "word": "lock",
        "translation": "замок; запирать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lock",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:machine:n:a1",
        "word": "machine",
        "translation": "машина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "machine",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mirror:n:a2",
        "word": "mirror",
        "translation": "зеркало",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mirror",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:oven:n:a2",
        "word": "oven",
        "translation": "духовка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "oven",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:radio:n:a1",
        "word": "radio",
        "translation": "радио",
        "example": "",
        "sentenceTranslation": "",
        "answer": "radio",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:repair:v:a2",
        "word": "repair",
        "translation": "ремонтировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "repair",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:repair:n:b1",
        "word": "repair",
        "translation": "ремонт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "repair",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:roof:n:a2",
        "word": "roof",
        "translation": "крыша",
        "example": "",
        "sentenceTranslation": "",
        "answer": "roof",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sheet:n:a2",
        "word": "sheet",
        "translation": "лист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sheet",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shelf:n:b1",
        "word": "shelf",
        "translation": "полка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shelf",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shower:n:a1",
        "word": "shower",
        "translation": "душ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shower",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sink:v:b1",
        "word": "sink",
        "translation": "тонуть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sink",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:soap:n:a2",
        "word": "soap",
        "translation": "мыло",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soap",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stair:n:a2",
        "word": "stair",
        "translation": "лестница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stair",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:step:n:a2",
        "word": "step",
        "translation": "шаг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "step",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:step:v:b2",
        "word": "step",
        "translation": "шагать; ступать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "step",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:television:n:a1",
        "word": "television",
        "translation": "телевидение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "television",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tidy:adj-v:a2",
        "word": "tidy",
        "translation": "аккуратный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tidy",
        "level": "A2",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:toilet:n:a1",
        "word": "toilet",
        "translation": "туалет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "toilet",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tool:n:a2",
        "word": "tool",
        "translation": "инструмент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tool",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:towel:n:a2",
        "word": "towel",
        "translation": "полотенце",
        "example": "",
        "sentenceTranslation": "",
        "answer": "towel",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tv:n:a1",
        "word": "TV",
        "translation": "ТВ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "TV",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wall:n:a1",
        "word": "wall",
        "translation": "стена",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wall",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wash:n:a2",
        "word": "wash",
        "translation": "мытьё; стирка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wash",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:watch:v-n:a1",
        "word": "watch",
        "translation": "наручные часы; смотреть; наблюдать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "watch",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:yard:n:b1",
        "word": "yard",
        "translation": "двор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yard",
        "level": "B1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-16",
    "collection": "Oxford 3000",
    "subtopic": "Дом и вещи",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Еда и напитки",
    "words": [
      {
        "id": "oxford:banana:n:a1",
        "word": "banana",
        "translation": "банан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "banana",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bean:n:a2",
        "word": "bean",
        "translation": "боб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bean",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beef:n:a2",
        "word": "beef",
        "translation": "говядина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beef",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beer:n:a1",
        "word": "beer",
        "translation": "пиво",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:biscuit:n:a2",
        "word": "biscuit",
        "translation": "бисквит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "biscuit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bottle:n:a1",
        "word": "bottle",
        "translation": "бутылка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bottle",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bowl:n:a2",
        "word": "bowl",
        "translation": "чаша",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bowl",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:butter:n:a1",
        "word": "butter",
        "translation": "сливочное масло",
        "example": "",
        "sentenceTranslation": "",
        "answer": "butter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cake:n:a1",
        "word": "cake",
        "translation": "торт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cake",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chicken:n:a1",
        "word": "chicken",
        "translation": "курица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chicken",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chocolate:n:a1",
        "word": "chocolate",
        "translation": "шоколад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chocolate",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cook:v:a1",
        "word": "cook",
        "translation": "готовить еду",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cook",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cook:n:a2",
        "word": "cook",
        "translation": "повар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cook",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cooking:n:a1",
        "word": "cooking",
        "translation": "приготовление пищи",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cooking",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cream:n:a1",
        "word": "cream",
        "translation": "крем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cream",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cream:adj:b1",
        "word": "cream",
        "translation": "кремовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cream",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:diet:n:a1",
        "word": "diet",
        "translation": "диета",
        "example": "",
        "sentenceTranslation": "",
        "answer": "diet",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dish:n:a1",
        "word": "dish",
        "translation": "блюдо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dish",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drink:n-v:a1",
        "word": "drink",
        "translation": "напиток; пить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drink",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:fish:n:a1",
        "word": "fish",
        "translation": "рыба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fish",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fish:v:a2",
        "word": "fish",
        "translation": "ловить рыбу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fish",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:flour:n:b1",
        "word": "flour",
        "translation": "мука",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flour",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:food:n:a1",
        "word": "food",
        "translation": "еда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "food",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fork:n:a2",
        "word": "fork",
        "translation": "вилка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fork",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fresh:adj:a2",
        "word": "fresh",
        "translation": "свежий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fresh",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fruit:n:a1",
        "word": "fruit",
        "translation": "фрукты",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fruit",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ice:n:a1",
        "word": "ice",
        "translation": "лед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ice",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ingredient:n:b1",
        "word": "ingredient",
        "translation": "ингредиент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ingredient",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:jam:n:a2",
        "word": "jam",
        "translation": "варенье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jam",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:knife:n:a2",
        "word": "knife",
        "translation": "нож",
        "example": "",
        "sentenceTranslation": "",
        "answer": "knife",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lemon:n:a2",
        "word": "lemon",
        "translation": "лимон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lemon",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:meal:n:a1",
        "word": "meal",
        "translation": "еда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meal",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nut:n:a2",
        "word": "nut",
        "translation": "орех",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nut",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:oil:n:a2",
        "word": "oil",
        "translation": "масло",
        "example": "",
        "sentenceTranslation": "",
        "answer": "oil",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:onion:n:a1",
        "word": "onion",
        "translation": "лук",
        "example": "",
        "sentenceTranslation": "",
        "answer": "onion",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:orange:n-adj:a1",
        "word": "orange",
        "translation": "оранжевый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "orange",
        "level": "A1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:pepper:n:a1",
        "word": "pepper",
        "translation": "перец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pepper",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pizza:n:a1",
        "word": "pizza",
        "translation": "пицца",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pizza",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:plate:n:a2",
        "word": "plate",
        "translation": "тарелка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plate",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:recipe:n:a2",
        "word": "recipe",
        "translation": "рецепт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recipe",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:restaurant:n:a1",
        "word": "restaurant",
        "translation": "ресторан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "restaurant",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:salad:n:a1",
        "word": "salad",
        "translation": "салат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "salad",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:salt:n:a1",
        "word": "salt",
        "translation": "соль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "salt",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sandwich:n:a1",
        "word": "sandwich",
        "translation": "бутерброд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sandwich",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:soup:n:a1",
        "word": "soup",
        "translation": "суп",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soup",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spoon:n:a2",
        "word": "spoon",
        "translation": "ложка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spoon",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sugar:n:a1",
        "word": "sugar",
        "translation": "сахар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sugar",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sweet:adj-n:a2",
        "word": "sweet",
        "translation": "сладкий; сладость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sweet",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:taste:n-v:a2",
        "word": "taste",
        "translation": "вкус; пробовать на вкус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "taste",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:thirsty:adj:a1",
        "word": "thirsty",
        "translation": "жаждущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thirsty",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:tomato:n:a1",
        "word": "tomato",
        "translation": "помидор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tomato",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:water:v:b1",
        "word": "water",
        "translation": "поливать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "water",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:wine:n:a1",
        "word": "wine",
        "translation": "вино",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wine",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-17",
    "collection": "Oxford 3000",
    "subtopic": "Еда и продукты",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Идеи и понятия",
    "words": [
      {
        "id": "oxford:ability:n:a2",
        "word": "ability",
        "translation": "способность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ability",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:academic:n:b2",
        "word": "academic",
        "translation": "академический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "academic",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:accident:n:a2",
        "word": "accident",
        "translation": "несчастный случай",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accident",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:accommodation:n:b1",
        "word": "accommodation",
        "translation": "размещение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accommodation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:achievement:n:b1",
        "word": "achievement",
        "translation": "достижение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "achievement",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:act:n:b1",
        "word": "act",
        "translation": "действие; поступок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "act",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:action:n:a1",
        "word": "action",
        "translation": "действие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "action",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:activity:n:a1",
        "word": "activity",
        "translation": "деятельность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "activity",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ad:n:b1",
        "word": "ad",
        "translation": "реклама",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ad",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:addition:n:b1",
        "word": "addition",
        "translation": "дополнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "addition",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:administration:n:b2",
        "word": "administration",
        "translation": "администрация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "administration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:advantage:n:a2",
        "word": "advantage",
        "translation": "преимущество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advantage",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:adventure:n:a2",
        "word": "adventure",
        "translation": "приключение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "adventure",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:advertisement:n:a2",
        "word": "advertisement",
        "translation": "реклама",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advertisement",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:advertising:n:a2",
        "word": "advertising",
        "translation": "реклама",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advertising",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:advice:n:a1",
        "word": "advice",
        "translation": "совет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advice",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:affair:n:b2",
        "word": "affair",
        "translation": "дело",
        "example": "",
        "sentenceTranslation": "",
        "answer": "affair",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:agency:n:b2",
        "word": "agency",
        "translation": "агентство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "agency",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:agenda:n:b2",
        "word": "agenda",
        "translation": "повестка дня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "agenda",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:agent:n:b1",
        "word": "agent",
        "translation": "агент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "agent",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:agreement:n:b1",
        "word": "agreement",
        "translation": "соглашение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "agreement",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:aircraft:n:b2",
        "word": "aircraft",
        "translation": "самолет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aircraft",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:airline:n:a2",
        "word": "airline",
        "translation": "авиакомпания",
        "example": "",
        "sentenceTranslation": "",
        "answer": "airline",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:alarm:n:b1",
        "word": "alarm",
        "translation": "тревога; сигнализация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alarm",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:album:n:b1",
        "word": "album",
        "translation": "альбом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "album",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:alcohol:n:b1",
        "word": "alcohol",
        "translation": "алкоголь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alcohol",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:alternative:n:a2",
        "word": "alternative",
        "translation": "альтернатива",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alternative",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ambition:n:b1",
        "word": "ambition",
        "translation": "амбиции",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ambition",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:anger:n:b2",
        "word": "anger",
        "translation": "гнев",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anger",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:angle:n:b2",
        "word": "angle",
        "translation": "угол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "angle",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ankle:n:a2",
        "word": "ankle",
        "translation": "лодыжка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ankle",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:anniversary:n:b2",
        "word": "anniversary",
        "translation": "юбилей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anniversary",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:announcement:n:b1",
        "word": "announcement",
        "translation": "объявление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "announcement",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:appearance:n:a2",
        "word": "appearance",
        "translation": "внешний вид",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appearance",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:appointment:n:b1",
        "word": "appointment",
        "translation": "назначение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appointment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:approval:n:b2",
        "word": "approval",
        "translation": "одобрение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "approval",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:architect:n:a2",
        "word": "architect",
        "translation": "архитектор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "architect",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:architecture:n:a2",
        "word": "architecture",
        "translation": "архитектура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "architecture",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:argument:n:a2",
        "word": "argument",
        "translation": "аргумент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "argument",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:arms:n:b2",
        "word": "arms",
        "translation": "оружие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arms",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:arrangement:n:a2",
        "word": "arrangement",
        "translation": "расположение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arrangement",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:article:n:a1",
        "word": "article",
        "translation": "статья",
        "example": "",
        "sentenceTranslation": "",
        "answer": "article",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:aspect:n:b2",
        "word": "aspect",
        "translation": "аспект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aspect",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:assessment:n:b2",
        "word": "assessment",
        "translation": "оценка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assessment",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:assignment:n:b1",
        "word": "assignment",
        "translation": "задание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assignment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:association:n:b2",
        "word": "association",
        "translation": "ассоциация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "association",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:athlete:n:a2",
        "word": "athlete",
        "translation": "спортсмен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "athlete",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:atmosphere:n:b1",
        "word": "atmosphere",
        "translation": "атмосфера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "atmosphere",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:attitude:n:b1",
        "word": "attitude",
        "translation": "отношение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attitude",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:attraction:n:b1",
        "word": "attraction",
        "translation": "аттракцион",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attraction",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:audience:n:a2",
        "word": "audience",
        "translation": "аудитория",
        "example": "",
        "sentenceTranslation": "",
        "answer": "audience",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:authority:n:b1",
        "word": "authority",
        "translation": "авторитет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "authority",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:autumn:n:a1",
        "word": "autumn",
        "translation": "осень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "autumn",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:background:n:a2",
        "word": "background",
        "translation": "фон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "background",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bacteria:n:b2",
        "word": "bacteria",
        "translation": "бактерии",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bacteria",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ball:n:a1",
        "word": "ball",
        "translation": "мяч",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ball",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:barrier:n:b2",
        "word": "barrier",
        "translation": "барьер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "barrier",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:baseball:n:a2",
        "word": "baseball",
        "translation": "бейсбол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "baseball",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:basis:n:b1",
        "word": "basis",
        "translation": "основа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "basis",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:battery:n:b1",
        "word": "battery",
        "translation": "батарея",
        "example": "",
        "sentenceTranslation": "",
        "answer": "battery",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:battle:n:b1",
        "word": "battle",
        "translation": "битва",
        "example": "",
        "sentenceTranslation": "",
        "answer": "battle",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beat:n:b2",
        "word": "beat",
        "translation": "ритм; удар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beat",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beauty:n:b1",
        "word": "beauty",
        "translation": "красота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beauty",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beginning:n:a1",
        "word": "beginning",
        "translation": "начало",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beginning",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:behaviour:n:a2",
        "word": "behaviour",
        "translation": "поведение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "behaviour",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:being:n:b2",
        "word": "being",
        "translation": "будучи",
        "example": "",
        "sentenceTranslation": "",
        "answer": "being",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:belief:n:b1",
        "word": "belief",
        "translation": "вера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "belief",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bell:n:b1",
        "word": "bell",
        "translation": "колокол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bell",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:belt:n:a2",
        "word": "belt",
        "translation": "ремень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "belt",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:benefit:n:a2",
        "word": "benefit",
        "translation": "польза; преимущество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "benefit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:better:n:b1",
        "word": "better",
        "translation": "лучше; более хороший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "better",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bin:n:a2",
        "word": "bin",
        "translation": "мусорное ведро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bin",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:biology:n:a2",
        "word": "biology",
        "translation": "биология",
        "example": "",
        "sentenceTranslation": "",
        "answer": "biology",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:birthday:n:a1",
        "word": "birthday",
        "translation": "день рождения",
        "example": "",
        "sentenceTranslation": "",
        "answer": "birthday",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bit:n:a2",
        "word": "bit",
        "translation": "немного",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:blog:n:a1",
        "word": "blog",
        "translation": "блог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blog",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:board:n:a2",
        "word": "board",
        "translation": "доска; совет директоров",
        "example": "",
        "sentenceTranslation": "",
        "answer": "board",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bond:n:b2",
        "word": "bond",
        "translation": "облигация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bond",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bone:n:a2",
        "word": "bone",
        "translation": "кость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bone",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:boot:n:a1",
        "word": "boot",
        "translation": "ботинок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boot",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:border:n:b1",
        "word": "border",
        "translation": "граница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "border",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:branch:n:b1",
        "word": "branch",
        "translation": "филиал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "branch",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:breast:n:b2",
        "word": "breast",
        "translation": "грудь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "breast",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:breathing:n:b1",
        "word": "breathing",
        "translation": "дыхание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "breathing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bride:n:b1",
        "word": "bride",
        "translation": "невеста",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bride",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bubble:n:b1",
        "word": "bubble",
        "translation": "пузырь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bubble",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bullet:n:b2",
        "word": "bullet",
        "translation": "пуля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bullet",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bunch:n:b2",
        "word": "bunch",
        "translation": "связка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bunch",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:burn:n:b2",
        "word": "burn",
        "translation": "ожог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "burn",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bush:n:b2",
        "word": "bush",
        "translation": "куст",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bush",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:businessman:n:a2",
        "word": "businessman",
        "translation": "бизнесмен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "businessman",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:button:n:a2",
        "word": "button",
        "translation": "кнопка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "button",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cable:n:b2",
        "word": "cable",
        "translation": "кабель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cable",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:camping:n:a2",
        "word": "camping",
        "translation": "кемпинг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "camping",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:campus:n:b1",
        "word": "campus",
        "translation": "кампус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "campus",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:can:n:a2",
        "word": "can",
        "translation": "консервная банка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "can",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cancer:n:b2",
        "word": "cancer",
        "translation": "рак",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cancer",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:candidate:n:b1",
        "word": "candidate",
        "translation": "кандидат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "candidate",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cap:n:b1",
        "word": "cap",
        "translation": "кепка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cap",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:capacity:n:b2",
        "word": "capacity",
        "translation": "емкость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "capacity",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:captain:n:b1",
        "word": "captain",
        "translation": "капитан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "captain",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:card:n:a1",
        "word": "card",
        "translation": "карта",
        "example": "",
        "sentenceTranslation": "",
        "answer": "card",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:carrot:n:a1",
        "word": "carrot",
        "translation": "морковь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "carrot",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cartoon:n:a2",
        "word": "cartoon",
        "translation": "мультфильм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cartoon",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:case:n:a2",
        "word": "case",
        "translation": "дело",
        "example": "",
        "sentenceTranslation": "",
        "answer": "case",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:castle:n:a2",
        "word": "castle",
        "translation": "замок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "castle",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:catch:n:b2",
        "word": "catch",
        "translation": "улов; подвох",
        "example": "",
        "sentenceTranslation": "",
        "answer": "catch",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:category:n:b1",
        "word": "category",
        "translation": "категория",
        "example": "",
        "sentenceTranslation": "",
        "answer": "category",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:celebrity:n:a2",
        "word": "celebrity",
        "translation": "знаменитость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "celebrity",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cell:n:b2",
        "word": "cell",
        "translation": "клетка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cell",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ceremony:n:b1",
        "word": "ceremony",
        "translation": "церемония",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ceremony",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chain:n:b1",
        "word": "chain",
        "translation": "цепь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chain",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:challenge:n:b1",
        "word": "challenge",
        "translation": "вызов; сложная задача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "challenge",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:champion:n:b1",
        "word": "champion",
        "translation": "чемпион",
        "example": "",
        "sentenceTranslation": "",
        "answer": "champion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chance:n:a2",
        "word": "chance",
        "translation": "шанс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chance",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:channel:n:b1",
        "word": "channel",
        "translation": "канал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "channel",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:character:n:a2",
        "word": "character",
        "translation": "персонаж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "character",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chart:n:a1",
        "word": "chart",
        "translation": "диаграмма; таблица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chart",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:check:n:a2",
        "word": "check",
        "translation": "проверка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "check",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chef:n:a2",
        "word": "chef",
        "translation": "повар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chef",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chemistry:n:a2",
        "word": "chemistry",
        "translation": "химия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chemistry",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chest:n:b1",
        "word": "chest",
        "translation": "грудь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chest",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:childhood:n:b1",
        "word": "childhood",
        "translation": "детство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "childhood",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:chip:n:a2",
        "word": "chip",
        "translation": "чип",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chip",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:choice:n:a2",
        "word": "choice",
        "translation": "выбор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "choice",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cigarette:n:a2",
        "word": "cigarette",
        "translation": "сигарета",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cigarette",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:circumstance:n:b2",
        "word": "circumstance",
        "translation": "обстоятельство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "circumstance",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:clause:n:b1",
        "word": "clause",
        "translation": "пункт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clause",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:climb:n:b1",
        "word": "climb",
        "translation": "подъём",
        "example": "",
        "sentenceTranslation": "",
        "answer": "climb",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:close:n:b2",
        "word": "close",
        "translation": "конец; завершение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "close",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cloth:n:b1",
        "word": "cloth",
        "translation": "ткань",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cloth",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:clothes:n:a1",
        "word": "clothes",
        "translation": "одежда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clothes",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:clothing:n:a2",
        "word": "clothing",
        "translation": "одежда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clothing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:club:n:a1",
        "word": "club",
        "translation": "клуб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "club",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:clue:n:b1",
        "word": "clue",
        "translation": "подсказка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clue",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:coach:n:a2",
        "word": "coach",
        "translation": "тренер; междугородний автобус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coach",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:coal:n:b1",
        "word": "coal",
        "translation": "уголь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coal",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:coast:n:a2",
        "word": "coast",
        "translation": "побережье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coast",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:coat:n:a1",
        "word": "coat",
        "translation": "пальто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coat",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:collection:n:b1",
        "word": "collection",
        "translation": "коллекция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "collection",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:colour:n:a1",
        "word": "colour",
        "translation": "цвет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "colour",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:column:n:a2",
        "word": "column",
        "translation": "столбец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "column",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:combination:n:b2",
        "word": "combination",
        "translation": "комбинация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "combination",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:comedy:n:a2",
        "word": "comedy",
        "translation": "комедия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comedy",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:comment:n:a2",
        "word": "comment",
        "translation": "комментарий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comment",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:commitment:n:b2",
        "word": "commitment",
        "translation": "обязательство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "commitment",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:committee:n:b2",
        "word": "committee",
        "translation": "комитет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "committee",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:communication:n:b1",
        "word": "communication",
        "translation": "общение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "communication",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:comparison:n:b1",
        "word": "comparison",
        "translation": "сравнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comparison",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:competitor:n:b1",
        "word": "competitor",
        "translation": "конкурент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "competitor",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:complaint:n:b1",
        "word": "complaint",
        "translation": "жалоба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complaint",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:complex:n:b2",
        "word": "complex",
        "translation": "сложный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complex",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:component:n:b2",
        "word": "component",
        "translation": "компонент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "component",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:concentration:n:b2",
        "word": "concentration",
        "translation": "концентрация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concentration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:concept:n:b2",
        "word": "concept",
        "translation": "концепция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concept",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:conclusion:n:b1",
        "word": "conclusion",
        "translation": "заключение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conclusion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:condition:n:a2",
        "word": "condition",
        "translation": "состояние",
        "example": "",
        "sentenceTranslation": "",
        "answer": "condition",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:conference:n:a2",
        "word": "conference",
        "translation": "конференция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conference",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:confidence:n:b2",
        "word": "confidence",
        "translation": "уверенность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confidence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:connection:n:b1",
        "word": "connection",
        "translation": "соединение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "connection",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:consequence:n:b1",
        "word": "consequence",
        "translation": "следствие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consequence",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:consideration:n:b2",
        "word": "consideration",
        "translation": "рассмотрение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consideration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:construction:n:b2",
        "word": "construction",
        "translation": "строительство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "construction",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:container:n:b1",
        "word": "container",
        "translation": "контейнер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "container",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:content:n:b1",
        "word": "content",
        "translation": "содержание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "content",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:context:n:a2",
        "word": "context",
        "translation": "контекст",
        "example": "",
        "sentenceTranslation": "",
        "answer": "context",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:continent:n:a2",
        "word": "continent",
        "translation": "континент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "continent",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:contribution:n:b2",
        "word": "contribution",
        "translation": "вклад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contribution",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:conversation:n:a1",
        "word": "conversation",
        "translation": "разговор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conversation",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cooker:n:a2",
        "word": "cooker",
        "translation": "плита",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cooker",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:corner:n:a2",
        "word": "corner",
        "translation": "угол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "corner",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:costume:n:b1",
        "word": "costume",
        "translation": "костюм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "costume",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cottage:n:b1",
        "word": "cottage",
        "translation": "коттедж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cottage",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cotton:n:b1",
        "word": "cotton",
        "translation": "хлопок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cotton",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:council:n:b2",
        "word": "council",
        "translation": "совет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "council",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:countryside:n:b1",
        "word": "countryside",
        "translation": "сельская местность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "countryside",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:county:n:b2",
        "word": "county",
        "translation": "графство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "county",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:couple:n:a2",
        "word": "couple",
        "translation": "пара",
        "example": "",
        "sentenceTranslation": "",
        "answer": "couple",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:courage:n:b2",
        "word": "courage",
        "translation": "смелость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "courage",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cover:n:b1",
        "word": "cover",
        "translation": "обложка; покрытие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cover",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:creation:n:b2",
        "word": "creation",
        "translation": "создание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "creation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:creature:n:b2",
        "word": "creature",
        "translation": "существо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "creature",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:crew:n:b2",
        "word": "crew",
        "translation": "экипаж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crew",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:crisis:n:b2",
        "word": "crisis",
        "translation": "кризис",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crisis",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:criterion:n:b2",
        "word": "criterion",
        "translation": "критерий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "criterion",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:critic:n:b2",
        "word": "critic",
        "translation": "критик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "critic",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:criticism:n:b2",
        "word": "criticism",
        "translation": "критика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "criticism",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:crowd:n:a2",
        "word": "crowd",
        "translation": "толпа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crowd",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cry:n:b2",
        "word": "cry",
        "translation": "крик; плач",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cry",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:currency:n:b1",
        "word": "currency",
        "translation": "валюта",
        "example": "",
        "sentenceTranslation": "",
        "answer": "currency",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:current:n:b2",
        "word": "current",
        "translation": "текущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "current",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:custom:n:b1",
        "word": "custom",
        "translation": "обычай",
        "example": "",
        "sentenceTranslation": "",
        "answer": "custom",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cut:n:b1",
        "word": "cut",
        "translation": "порез; сокращение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cut",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dad:n:a1",
        "word": "dad",
        "translation": "папа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dad",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dancer:n:a1",
        "word": "dancer",
        "translation": "танцор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dancer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:danger:n:a2",
        "word": "danger",
        "translation": "опасность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "danger",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dark:n:a2",
        "word": "dark",
        "translation": "тёмный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dark",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:deal:n:b1",
        "word": "deal",
        "translation": "сделка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deal",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:death:n:a2",
        "word": "death",
        "translation": "смерть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "death",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:decade:n:b1",
        "word": "decade",
        "translation": "десятилетие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decade",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:decision:n:a2",
        "word": "decision",
        "translation": "решение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decision",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:decoration:n:b2",
        "word": "decoration",
        "translation": "украшение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decoration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:defence:n:b2",
        "word": "defence",
        "translation": "защита",
        "example": "",
        "sentenceTranslation": "",
        "answer": "defence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:definition:n:b1",
        "word": "definition",
        "translation": "определение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "definition",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:delivery:n:b2",
        "word": "delivery",
        "translation": "доставка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "delivery",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:department:n:a2",
        "word": "department",
        "translation": "отдел",
        "example": "",
        "sentenceTranslation": "",
        "answer": "department",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:depth:n:b2",
        "word": "depth",
        "translation": "глубина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "depth",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:description:n:a1",
        "word": "description",
        "translation": "описание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "description",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:designer:n:a2",
        "word": "designer",
        "translation": "дизайнер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "designer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dessert:n:a2",
        "word": "dessert",
        "translation": "десерт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dessert",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:detail:n:a1",
        "word": "detail",
        "translation": "деталь; подробность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "detail",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:detective:n:a2",
        "word": "detective",
        "translation": "детектив",
        "example": "",
        "sentenceTranslation": "",
        "answer": "detective",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:development:n:b1",
        "word": "development",
        "translation": "развитие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "development",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:diagram:n:b1",
        "word": "diagram",
        "translation": "диаграмма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "diagram",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dialogue:n:a1",
        "word": "dialogue",
        "translation": "диалог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dialogue",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:diamond:n:b1",
        "word": "diamond",
        "translation": "алмаз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "diamond",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:diary:n:a2",
        "word": "diary",
        "translation": "дневник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "diary",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:difference:n:a1",
        "word": "difference",
        "translation": "разница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "difference",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:difficulty:n:b1",
        "word": "difficulty",
        "translation": "трудность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "difficulty",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:director:n:a2",
        "word": "director",
        "translation": "директор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "director",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dirt:n:b1",
        "word": "dirt",
        "translation": "грязь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dirt",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:disadvantage:n:b1",
        "word": "disadvantage",
        "translation": "недостаток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disadvantage",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:discipline:n:b2",
        "word": "discipline",
        "translation": "дисциплина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discipline",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:discussion:n:a2",
        "word": "discussion",
        "translation": "обсуждение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discussion",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:distribution:n:b2",
        "word": "distribution",
        "translation": "распространение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "distribution",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:district:n:b2",
        "word": "district",
        "translation": "район",
        "example": "",
        "sentenceTranslation": "",
        "answer": "district",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:divide:n:b2",
        "word": "divide",
        "translation": "разделение; раскол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "divide",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:division:n:b2",
        "word": "division",
        "translation": "дивизия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "division",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:documentary:n:b1",
        "word": "documentary",
        "translation": "документальный фильм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "documentary",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dollar:n:a1",
        "word": "dollar",
        "translation": "доллар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dollar",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drama:n:a2",
        "word": "drama",
        "translation": "драма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drama",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drawing:n:a2",
        "word": "drawing",
        "translation": "рисунок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drawing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:driving:n:a2",
        "word": "driving",
        "translation": "вождение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "driving",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drop:n:b1",
        "word": "drop",
        "translation": "капля; падение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drop",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drum:n:b1",
        "word": "drum",
        "translation": "барабан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drum",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dust:n:b1",
        "word": "dust",
        "translation": "пыль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dust",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:edge:n:b1",
        "word": "edge",
        "translation": "край",
        "example": "",
        "sentenceTranslation": "",
        "answer": "edge",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:edition:n:b2",
        "word": "edition",
        "translation": "издание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "edition",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:editor:n:b1",
        "word": "editor",
        "translation": "редактор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "editor",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:effect:n:a2",
        "word": "effect",
        "translation": "эффект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "effect",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:effort:n:b1",
        "word": "effort",
        "translation": "усилие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "effort",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:element:n:b1",
        "word": "element",
        "translation": "элемент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "element",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:emergency:n:b1",
        "word": "emergency",
        "translation": "чрезвычайная ситуация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emergency",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:emotion:n:b1",
        "word": "emotion",
        "translation": "эмоция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emotion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:emphasis:n:b2",
        "word": "emphasis",
        "translation": "акцент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emphasis",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ending:n:a2",
        "word": "ending",
        "translation": "окончание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ending",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:enemy:n:b1",
        "word": "enemy",
        "translation": "враг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enemy",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:engine:n:a2",
        "word": "engine",
        "translation": "двигатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "engine",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:enquiry:n:b2",
        "word": "enquiry",
        "translation": "запрос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enquiry",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:enthusiasm:n:b2",
        "word": "enthusiasm",
        "translation": "энтузиазм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enthusiasm",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:entrance:n:b1",
        "word": "entrance",
        "translation": "вход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entrance",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:entry:n:b1",
        "word": "entry",
        "translation": "запись",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entry",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:equal:n:b2",
        "word": "equal",
        "translation": "равный по положению",
        "example": "",
        "sentenceTranslation": "",
        "answer": "equal",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:equipment:n:a2",
        "word": "equipment",
        "translation": "оборудование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "equipment",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:error:n:a2",
        "word": "error",
        "translation": "ошибка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "error",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:essay:n:a2",
        "word": "essay",
        "translation": "эссе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "essay",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:estate:n:b2",
        "word": "estate",
        "translation": "поместье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "estate",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:euro:n:a1",
        "word": "euro",
        "translation": "евро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "euro",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:event:n:a1",
        "word": "event",
        "translation": "событие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "event",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:example:n:a1",
        "word": "example",
        "translation": "пример",
        "example": "",
        "sentenceTranslation": "",
        "answer": "example",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:excitement:n:b1",
        "word": "excitement",
        "translation": "волнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "excitement",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:exhibition:n:b1",
        "word": "exhibition",
        "translation": "выставка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exhibition",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:existence:n:b2",
        "word": "existence",
        "translation": "существование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "existence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:expectation:n:b2",
        "word": "expectation",
        "translation": "ожидание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expectation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:expedition:n:b1",
        "word": "expedition",
        "translation": "экспедиция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expedition",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:expense:n:b2",
        "word": "expense",
        "translation": "расходы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expense",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:explanation:n:a2",
        "word": "explanation",
        "translation": "объяснение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "explanation",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:exploration:n:b2",
        "word": "exploration",
        "translation": "разведка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exploration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:explosion:n:b1",
        "word": "explosion",
        "translation": "взрыв",
        "example": "",
        "sentenceTranslation": "",
        "answer": "explosion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:expression:n:a2",
        "word": "expression",
        "translation": "выражение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expression",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:extent:n:b2",
        "word": "extent",
        "translation": "степень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extent",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:extreme:n:b2",
        "word": "extreme",
        "translation": "крайний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extreme",
        "level": "B2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-18",
    "collection": "Oxford 3000",
    "subtopic": "Слова A–E",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Идеи и понятия",
    "words": [
      {
        "id": "oxford:facility:n:b2",
        "word": "facility",
        "translation": "объект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "facility",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:factor:n:a2",
        "word": "factor",
        "translation": "фактор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "factor",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:failure:n:b2",
        "word": "failure",
        "translation": "неудача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "failure",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:faith:n:b2",
        "word": "faith",
        "translation": "вера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "faith",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fall:n:a2",
        "word": "fall",
        "translation": "падение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fall",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fan:n:a2",
        "word": "fan",
        "translation": "вентилятор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fan",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:farming:n:a2",
        "word": "farming",
        "translation": "сельское хозяйство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "farming",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fashion:n:a2",
        "word": "fashion",
        "translation": "мода",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fashion",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fat:n:a2",
        "word": "fat",
        "translation": "толстый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fat",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fault:n:b2",
        "word": "fault",
        "translation": "вина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fault",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:favour:n:b1",
        "word": "favour",
        "translation": "одолжение; благосклонность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "favour",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fear:n:a2",
        "word": "fear",
        "translation": "страх",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fear",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feather:n:b2",
        "word": "feather",
        "translation": "перо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feather",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feature:n:a2",
        "word": "feature",
        "translation": "особенность; характерная черта",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feature",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fee:n:b2",
        "word": "fee",
        "translation": "плата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fee",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feed:n:b2",
        "word": "feed",
        "translation": "корм; подача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feed",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feedback:n:b2",
        "word": "feedback",
        "translation": "обратная связь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feedback",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feel:n:b2",
        "word": "feel",
        "translation": "ощущение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feel",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:feeling:n:a1",
        "word": "feeling",
        "translation": "чувство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "feeling",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fence:n:b1",
        "word": "fence",
        "translation": "забор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fence",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fiction:n:a2",
        "word": "fiction",
        "translation": "фантастика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fiction",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fighting:n:b1",
        "word": "fighting",
        "translation": "борьба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fighting",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:final:n:a2",
        "word": "final",
        "translation": "финальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "final",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:finding:n:b2",
        "word": "finding",
        "translation": "нахождение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finding",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:finish:n:a2",
        "word": "finish",
        "translation": "конец; финиш",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finish",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:firm:n:b2",
        "word": "firm",
        "translation": "фирма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "firm",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fishing:n:a2",
        "word": "fishing",
        "translation": "рыбалка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fishing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fitness:n:b1",
        "word": "fitness",
        "translation": "фитнес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fitness",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flag:n:b1",
        "word": "flag",
        "translation": "флаг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flag",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flame:n:b2",
        "word": "flame",
        "translation": "пламя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flame",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flu:n:a2",
        "word": "flu",
        "translation": "грипп",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flu",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fly:n:a2",
        "word": "fly",
        "translation": "муха",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fly",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fold:n:b2",
        "word": "fold",
        "translation": "складка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fold",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:following:n:b1",
        "word": "following",
        "translation": "следующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "following",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fortune:n:b2",
        "word": "fortune",
        "translation": "удача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fortune",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:frequency:n:b2",
        "word": "frequency",
        "translation": "частота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frequency",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:frog:n:a2",
        "word": "frog",
        "translation": "лягушка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frog",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fuel:n:b1",
        "word": "fuel",
        "translation": "топливо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fuel",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:function:n:b1",
        "word": "function",
        "translation": "функция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "function",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:funding:n:b2",
        "word": "funding",
        "translation": "финансирование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "funding",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fur:n:b1",
        "word": "fur",
        "translation": "мех",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fur",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gallery:n:a2",
        "word": "gallery",
        "translation": "галерея",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gallery",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gang:n:b2",
        "word": "gang",
        "translation": "банда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gang",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gap:n:a2",
        "word": "gap",
        "translation": "разрыв",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gap",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gas:n:a2",
        "word": "gas",
        "translation": "газ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gas",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gate:n:a2",
        "word": "gate",
        "translation": "ворота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gate",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:generation:n:b1",
        "word": "generation",
        "translation": "поколение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "generation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:genre:n:b2",
        "word": "genre",
        "translation": "жанр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "genre",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:geography:n:a1",
        "word": "geography",
        "translation": "география",
        "example": "",
        "sentenceTranslation": "",
        "answer": "geography",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ghost:n:b1",
        "word": "ghost",
        "translation": "призрак",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ghost",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gift:n:a2",
        "word": "gift",
        "translation": "подарок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gift",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:glove:n:b1",
        "word": "glove",
        "translation": "перчатка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "glove",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:go:n:b1",
        "word": "go",
        "translation": "попытка; очередь действовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "go",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:goal:n:a2",
        "word": "goal",
        "translation": "цель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "goal",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:god:n:a2",
        "word": "god",
        "translation": "бог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "god",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:golf:n:a2",
        "word": "golf",
        "translation": "гольф",
        "example": "",
        "sentenceTranslation": "",
        "answer": "golf",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:good:n:a2",
        "word": "good",
        "translation": "хороший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "good",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grain:n:b1",
        "word": "grain",
        "translation": "зерно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grain",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:group:n:a1",
        "word": "group",
        "translation": "группа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "group",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:growth:n:b1",
        "word": "growth",
        "translation": "рост",
        "example": "",
        "sentenceTranslation": "",
        "answer": "growth",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:guest:n:a2",
        "word": "guest",
        "translation": "гость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guest",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:guitar:n:a1",
        "word": "guitar",
        "translation": "гитара",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guitar",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gun:n:a2",
        "word": "gun",
        "translation": "пистолет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gun",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:guy:n:a2",
        "word": "guy",
        "translation": "парень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guy",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gym:n:a1",
        "word": "gym",
        "translation": "тренажерный зал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gym",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:habit:n:a2",
        "word": "habit",
        "translation": "привычка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "habit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hall:n:a2",
        "word": "hall",
        "translation": "зал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hall",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:happiness:n:b1",
        "word": "happiness",
        "translation": "счастье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "happiness",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hat:n:a1",
        "word": "hat",
        "translation": "шляпа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hat",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hate:n:b1",
        "word": "hate",
        "translation": "ненависть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hate",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:headache:n:a2",
        "word": "headache",
        "translation": "головная боль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "headache",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:headline:n:b1",
        "word": "headline",
        "translation": "заголовок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "headline",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hearing:n:b2",
        "word": "hearing",
        "translation": "слушание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hearing",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:heaven:n:b2",
        "word": "heaven",
        "translation": "небеса",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heaven",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:heel:n:b2",
        "word": "heel",
        "translation": "каблук",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heel",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:helicopter:n:b1",
        "word": "helicopter",
        "translation": "вертолет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "helicopter",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hell:n:b2",
        "word": "hell",
        "translation": "ад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hell",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hero:n:a2",
        "word": "hero",
        "translation": "герой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hero",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:high:n:b2",
        "word": "high",
        "translation": "высокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "high",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hockey:n:a2",
        "word": "hockey",
        "translation": "хоккей",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hockey",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hold:n:b2",
        "word": "hold",
        "translation": "захват; удержание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hold",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hole:n:a2",
        "word": "hole",
        "translation": "дыра",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hole",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hope:n:a2",
        "word": "hope",
        "translation": "надежда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hope",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:horror:n:b1",
        "word": "horror",
        "translation": "ужас",
        "example": "",
        "sentenceTranslation": "",
        "answer": "horror",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:host:n:b1",
        "word": "host",
        "translation": "хозяин; ведущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "host",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:household:n:b2",
        "word": "household",
        "translation": "домашнее хозяйство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "household",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:housing:n:b2",
        "word": "housing",
        "translation": "жилье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "housing",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:humour:n:b2",
        "word": "humour",
        "translation": "юмор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "humour",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hunt:n:b2",
        "word": "hunt",
        "translation": "охота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hunt",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hunting:n:b2",
        "word": "hunting",
        "translation": "охота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hunting",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hurricane:n:b1",
        "word": "hurricane",
        "translation": "ураган",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hurricane",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hurt:n:b2",
        "word": "hurt",
        "translation": "боль; обида",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hurt",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ice-cream:n:a1",
        "word": "ice cream",
        "translation": "мороженое",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ice cream",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:idea:n:a1",
        "word": "idea",
        "translation": "идея",
        "example": "",
        "sentenceTranslation": "",
        "answer": "idea",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ideal:n:b2",
        "word": "ideal",
        "translation": "идеальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ideal",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:identity:n:b1",
        "word": "identity",
        "translation": "личность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "identity",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:illustration:n:b2",
        "word": "illustration",
        "translation": "иллюстрация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "illustration",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:image:n:a2",
        "word": "image",
        "translation": "изображение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "image",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:imagination:n:b2",
        "word": "imagination",
        "translation": "воображение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "imagination",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:immigrant:n:b1",
        "word": "immigrant",
        "translation": "иммигрант",
        "example": "",
        "sentenceTranslation": "",
        "answer": "immigrant",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:importance:n:b1",
        "word": "importance",
        "translation": "важность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "importance",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:impression:n:b1",
        "word": "impression",
        "translation": "впечатление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impression",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:improvement:n:b1",
        "word": "improvement",
        "translation": "улучшение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "improvement",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:inch:n:b2",
        "word": "inch",
        "translation": "дюйм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inch",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:incident:n:b2",
        "word": "incident",
        "translation": "инцидент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "incident",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:infection:n:b2",
        "word": "infection",
        "translation": "инфекция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "infection",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:initiative:n:b2",
        "word": "initiative",
        "translation": "инициатива",
        "example": "",
        "sentenceTranslation": "",
        "answer": "initiative",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:inquiry:n:b2",
        "word": "inquiry",
        "translation": "запрос; расследование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inquiry",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:insight:n:b2",
        "word": "insight",
        "translation": "понимание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "insight",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:instance:n:b2",
        "word": "instance",
        "translation": "экземпляр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instance",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:institute:n:b2",
        "word": "institute",
        "translation": "институт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "institute",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:institution:n:b2",
        "word": "institution",
        "translation": "учреждение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "institution",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:instruction:n:a2",
        "word": "instruction",
        "translation": "инструкция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instruction",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:instructor:n:a2",
        "word": "instructor",
        "translation": "инструктор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instructor",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:instrument:n:a2",
        "word": "instrument",
        "translation": "инструмент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "instrument",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:insurance:n:b2",
        "word": "insurance",
        "translation": "страхование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "insurance",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:intelligence:n:b1",
        "word": "intelligence",
        "translation": "интеллект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intelligence",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:intention:n:b1",
        "word": "intention",
        "translation": "намерение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intention",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:introduction:n:a2",
        "word": "introduction",
        "translation": "введение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "introduction",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:invention:n:a2",
        "word": "invention",
        "translation": "изобретение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "invention",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:investigation:n:b2",
        "word": "investigation",
        "translation": "расследование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "investigation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:invitation:n:a2",
        "word": "invitation",
        "translation": "приглашение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "invitation",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:issue:n:b1",
        "word": "issue",
        "translation": "вопрос; проблема; выпуск",
        "example": "",
        "sentenceTranslation": "",
        "answer": "issue",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:it:n:b1",
        "word": "IT",
        "translation": "ИТ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "IT",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:jacket:n:a1",
        "word": "jacket",
        "translation": "куртка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jacket",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:jazz:n:a2",
        "word": "jazz",
        "translation": "джаз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jazz",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:jeans:n:a1",
        "word": "jeans",
        "translation": "джинсы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jeans",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:jewellery:n:a2",
        "word": "jewellery",
        "translation": "ювелирные изделия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "jewellery",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:journal:n:b1",
        "word": "journal",
        "translation": "журнал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "journal",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:joy:n:b2",
        "word": "joy",
        "translation": "радость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "joy",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:judgement:n:b2",
        "word": "judgement",
        "translation": "суждение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "judgement",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:justice:n:b2",
        "word": "justice",
        "translation": "справедливость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "justice",
        "level": "B2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-19",
    "collection": "Oxford 3000",
    "subtopic": "Слова F–J",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Идеи и понятия",
    "words": [
      {
        "id": "oxford:kid:n:a2",
        "word": "kid",
        "translation": "малыш",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kid",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:killing:n:b1",
        "word": "killing",
        "translation": "убийство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "killing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:kilometre:n:a1",
        "word": "kilometre",
        "translation": "километр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kilometre",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:kind:n:a1",
        "word": "kind",
        "translation": "добрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kind",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:king:n:a2",
        "word": "king",
        "translation": "король",
        "example": "",
        "sentenceTranslation": "",
        "answer": "king",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:knock:n:b1",
        "word": "knock",
        "translation": "стук",
        "example": "",
        "sentenceTranslation": "",
        "answer": "knock",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:labour:n:b2",
        "word": "labour",
        "translation": "труд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "labour",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lady:n:a2",
        "word": "lady",
        "translation": "леди",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lady",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:landscape:n:b2",
        "word": "landscape",
        "translation": "пейзаж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "landscape",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:latest:n:b2",
        "word": "latest",
        "translation": "последний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "latest",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:laughter:n:a2",
        "word": "laughter",
        "translation": "смех",
        "example": "",
        "sentenceTranslation": "",
        "answer": "laughter",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:layer:n:b1",
        "word": "layer",
        "translation": "слой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "layer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lead:n:b1",
        "word": "lead",
        "translation": "лидерство; преимущество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lead",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leader:n:a2",
        "word": "leader",
        "translation": "лидер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leader",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leadership:n:b2",
        "word": "leadership",
        "translation": "лидерство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leadership",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:league:n:b2",
        "word": "league",
        "translation": "лига",
        "example": "",
        "sentenceTranslation": "",
        "answer": "league",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leather:n:b1",
        "word": "leather",
        "translation": "кожа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leather",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:letter:n:a1",
        "word": "letter",
        "translation": "письмо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "letter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:level:n:a2",
        "word": "level",
        "translation": "уровень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "level",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:licence:n:b2",
        "word": "licence",
        "translation": "лицензия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "licence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:life:n:a1",
        "word": "life",
        "translation": "жизнь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "life",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lifestyle:n:a2",
        "word": "lifestyle",
        "translation": "образ жизни",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lifestyle",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:like:n:b1",
        "word": "like",
        "translation": "предпочтение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "like",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:line:n:a1",
        "word": "line",
        "translation": "линия; очередь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "line",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lip:n:b1",
        "word": "lip",
        "translation": "губа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lip",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:listener:n:a2",
        "word": "listener",
        "translation": "слушатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "listener",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:local:n:b1",
        "word": "local",
        "translation": "местный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "local",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:look:n:a2",
        "word": "look",
        "translation": "взгляд; внешний вид",
        "example": "",
        "sentenceTranslation": "",
        "answer": "look",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lord:n:b2",
        "word": "lord",
        "translation": "лорд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lord",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lorry:n:a2",
        "word": "lorry",
        "translation": "грузовик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lorry",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:low:n:b2",
        "word": "low",
        "translation": "низкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "low",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:luck:n:a2",
        "word": "luck",
        "translation": "удача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "luck",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lung:n:b2",
        "word": "lung",
        "translation": "легкое",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lung",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:luxury:n:b1",
        "word": "luxury",
        "translation": "роскошь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "luxury",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:magazine:n:a1",
        "word": "magazine",
        "translation": "журнал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "magazine",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:majority:n:b2",
        "word": "majority",
        "translation": "большинство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "majority",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:make:n:b2",
        "word": "make",
        "translation": "марка; производитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "make",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mall:n:b1",
        "word": "mall",
        "translation": "торговый центр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mall",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:manner:n:a2",
        "word": "manner",
        "translation": "манера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "manner",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:marketing:n:b1",
        "word": "marketing",
        "translation": "маркетинг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "marketing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:material:n:a2",
        "word": "material",
        "translation": "материал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "material",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mathematics:n:a2",
        "word": "mathematics",
        "translation": "математика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mathematics",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:maths:n:a2",
        "word": "maths",
        "translation": "математика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "maths",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:meaning:n:a1",
        "word": "meaning",
        "translation": "смысл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meaning",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:means:n:b2",
        "word": "means",
        "translation": "означает",
        "example": "",
        "sentenceTranslation": "",
        "answer": "means",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:medium:n:b2",
        "word": "medium",
        "translation": "средний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "medium",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:member:n:a1",
        "word": "member",
        "translation": "член",
        "example": "",
        "sentenceTranslation": "",
        "answer": "member",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:memory:n:a2",
        "word": "memory",
        "translation": "память",
        "example": "",
        "sentenceTranslation": "",
        "answer": "memory",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mention:n:b1",
        "word": "mention",
        "translation": "упоминание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mention",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mess:n:b1",
        "word": "mess",
        "translation": "беспорядок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mess",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:metal:n:a2",
        "word": "metal",
        "translation": "металл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "metal",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:metre:n:a1",
        "word": "metre",
        "translation": "метр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "metre",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mile:n:a1",
        "word": "mile",
        "translation": "миля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mile",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mine:n:b1",
        "word": "mine",
        "translation": "мой; моя; моё",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mine",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mineral:n:b2",
        "word": "mineral",
        "translation": "минерал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mineral",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:minority:n:b2",
        "word": "minority",
        "translation": "меньшинство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "minority",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mission:n:b2",
        "word": "mission",
        "translation": "миссия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mission",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mistake:n:a1",
        "word": "mistake",
        "translation": "ошибка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mistake",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mixture:n:b1",
        "word": "mixture",
        "translation": "смесь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mixture",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:model:n:a1",
        "word": "model",
        "translation": "модель; образец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "model",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mood:n:b1",
        "word": "mood",
        "translation": "настроение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mood",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:moon:n:a2",
        "word": "moon",
        "translation": "луна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "moon",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:move:n:b1",
        "word": "move",
        "translation": "движение; переезд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "move",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:movement:n:a2",
        "word": "movement",
        "translation": "движение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "movement",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mud:n:b1",
        "word": "mud",
        "translation": "грязь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mud",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mum:n:a1",
        "word": "mum",
        "translation": "мама",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mum",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:muscle:n:b1",
        "word": "muscle",
        "translation": "мышца",
        "example": "",
        "sentenceTranslation": "",
        "answer": "muscle",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mystery:n:b1",
        "word": "mystery",
        "translation": "тайна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mystery",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nail:n:b1",
        "word": "nail",
        "translation": "гвоздь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nail",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:need:n:a2",
        "word": "need",
        "translation": "необходимость; потребность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "need",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:needle:n:b1",
        "word": "needle",
        "translation": "игла",
        "example": "",
        "sentenceTranslation": "",
        "answer": "needle",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:negative:n:b2",
        "word": "negative",
        "translation": "отрицательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "negative",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nerve:n:b2",
        "word": "nerve",
        "translation": "нерв",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nerve",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:net:n:b1",
        "word": "net",
        "translation": "сеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "net",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:news:n:a1",
        "word": "news",
        "translation": "новости",
        "example": "",
        "sentenceTranslation": "",
        "answer": "news",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:newspaper:n:a1",
        "word": "newspaper",
        "translation": "газета",
        "example": "",
        "sentenceTranslation": "",
        "answer": "newspaper",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nightmare:n:b2",
        "word": "nightmare",
        "translation": "кошмар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nightmare",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:noise:n:a2",
        "word": "noise",
        "translation": "шум",
        "example": "",
        "sentenceTranslation": "",
        "answer": "noise",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:normal:n:b1",
        "word": "normal",
        "translation": "нормальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "normal",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:note:n:a1",
        "word": "note",
        "translation": "записка; заметка; нота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "note",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:notion:n:b2",
        "word": "notion",
        "translation": "понятие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "notion",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:object:n:a1",
        "word": "object",
        "translation": "предмет; объект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "object",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:obligation:n:b2",
        "word": "obligation",
        "translation": "обязательство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "obligation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:observation:n:b2",
        "word": "observation",
        "translation": "наблюдение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "observation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:occasion:n:b1",
        "word": "occasion",
        "translation": "повод",
        "example": "",
        "sentenceTranslation": "",
        "answer": "occasion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:offence:n:b2",
        "word": "offence",
        "translation": "преступление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "offence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:official:n:b2",
        "word": "official",
        "translation": "чиновник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "official",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:opening:n:b2",
        "word": "opening",
        "translation": "открытие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opening",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:operation:n:b1",
        "word": "operation",
        "translation": "операция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "operation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:opinion:n:a1",
        "word": "opinion",
        "translation": "мнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opinion",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:opponent:n:b2",
        "word": "opponent",
        "translation": "противник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opponent",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:opportunity:n:a2",
        "word": "opportunity",
        "translation": "возможность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opportunity",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:opposition:n:b2",
        "word": "opposition",
        "translation": "оппозиция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opposition",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:option:n:a2",
        "word": "option",
        "translation": "вариант",
        "example": "",
        "sentenceTranslation": "",
        "answer": "option",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:organ:n:b2",
        "word": "organ",
        "translation": "орган",
        "example": "",
        "sentenceTranslation": "",
        "answer": "organ",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:organizer:n:b1",
        "word": "organizer",
        "translation": "организатор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "organizer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:origin:n:b2",
        "word": "origin",
        "translation": "происхождение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "origin",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:original:n:b1",
        "word": "original",
        "translation": "оригинальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "original",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:outcome:n:b2",
        "word": "outcome",
        "translation": "результат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outcome",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:owner:n:a2",
        "word": "owner",
        "translation": "владелец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "owner",
        "level": "A2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-20",
    "collection": "Oxford 3000",
    "subtopic": "Слова K–O",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Идеи и понятия",
    "words": [
      {
        "id": "oxford:pack:n:b1",
        "word": "pack",
        "translation": "пачка; упаковка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pack",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:package:n:b1",
        "word": "package",
        "translation": "пакет; упаковка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "package",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:painter:n:a2",
        "word": "painter",
        "translation": "художник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "painter",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pair:n:a1",
        "word": "pair",
        "translation": "пара",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pair",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:palace:n:a2",
        "word": "palace",
        "translation": "дворец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "palace",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pan:n:b1",
        "word": "pan",
        "translation": "кастрюля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pan",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:panel:n:b2",
        "word": "panel",
        "translation": "панель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "panel",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pants:n:a2",
        "word": "pants",
        "translation": "брюки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pants",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:paragraph:n:a1",
        "word": "paragraph",
        "translation": "абзац",
        "example": "",
        "sentenceTranslation": "",
        "answer": "paragraph",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:part:n:a1",
        "word": "part",
        "translation": "часть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "part",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:participant:n:b2",
        "word": "participant",
        "translation": "участник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "participant",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pass:n:b1",
        "word": "pass",
        "translation": "пропуск; проход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pass",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:passage:n:b2",
        "word": "passage",
        "translation": "проход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "passage",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:passion:n:b1",
        "word": "passion",
        "translation": "страсть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "passion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pattern:n:a2",
        "word": "pattern",
        "translation": "узор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pattern",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:penny:n:a2",
        "word": "penny",
        "translation": "пенни",
        "example": "",
        "sentenceTranslation": "",
        "answer": "penny",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pension:n:b2",
        "word": "pension",
        "translation": "пенсия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pension",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:permission:n:a2",
        "word": "permission",
        "translation": "разрешение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "permission",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:personality:n:a2",
        "word": "personality",
        "translation": "личность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "personality",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:perspective:n:b2",
        "word": "perspective",
        "translation": "перспектива",
        "example": "",
        "sentenceTranslation": "",
        "answer": "perspective",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:petrol:n:a2",
        "word": "petrol",
        "translation": "бензин",
        "example": "",
        "sentenceTranslation": "",
        "answer": "petrol",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:phase:n:b2",
        "word": "phase",
        "translation": "фаза",
        "example": "",
        "sentenceTranslation": "",
        "answer": "phase",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:phenomenon:n:b2",
        "word": "phenomenon",
        "translation": "явление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "phenomenon",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:philosophy:n:b2",
        "word": "philosophy",
        "translation": "философия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "philosophy",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:photographer:n:b1",
        "word": "photographer",
        "translation": "фотограф",
        "example": "",
        "sentenceTranslation": "",
        "answer": "photographer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:phrase:n:a1",
        "word": "phrase",
        "translation": "фраза",
        "example": "",
        "sentenceTranslation": "",
        "answer": "phrase",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:physics:n:a2",
        "word": "physics",
        "translation": "физика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "physics",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:piano:n:a1",
        "word": "piano",
        "translation": "фортепиано",
        "example": "",
        "sentenceTranslation": "",
        "answer": "piano",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pick:n:b2",
        "word": "pick",
        "translation": "выбор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pick",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:piece:n:a1",
        "word": "piece",
        "translation": "кусок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "piece",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pipe:n:b1",
        "word": "pipe",
        "translation": "труба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pipe",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pitch:n:b2",
        "word": "pitch",
        "translation": "шаг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pitch",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:planning:n:b1",
        "word": "planning",
        "translation": "планирование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "planning",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:player:n:a1",
        "word": "player",
        "translation": "игрок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "player",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pleasure:n:b1",
        "word": "pleasure",
        "translation": "удовольствие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pleasure",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:plot:n:b1",
        "word": "plot",
        "translation": "сюжет; заговор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plot",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pocket:n:a2",
        "word": "pocket",
        "translation": "карман",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pocket",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:poet:n:b1",
        "word": "poet",
        "translation": "поэт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poet",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:point:n:a1",
        "word": "point",
        "translation": "точка; пункт; смысл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "point",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pool:n:a1",
        "word": "pool",
        "translation": "бассейн",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pool",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:popularity:n:b2",
        "word": "popularity",
        "translation": "популярность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "popularity",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:portrait:n:b1",
        "word": "portrait",
        "translation": "портрет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "portrait",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:position:n:a2",
        "word": "position",
        "translation": "положение; должность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "position",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:positive:n:b2",
        "word": "positive",
        "translation": "позитивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "positive",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:possession:n:a2",
        "word": "possession",
        "translation": "владение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "possession",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:possibility:n:a2",
        "word": "possibility",
        "translation": "возможность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "possibility",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:poster:n:a2",
        "word": "poster",
        "translation": "плакат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poster",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pot:n:b1",
        "word": "pot",
        "translation": "горшок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pot",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pound:n:a1",
        "word": "pound",
        "translation": "фунт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pound",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:powder:n:b1",
        "word": "powder",
        "translation": "порошок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "powder",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:power:n:a2",
        "word": "power",
        "translation": "власть; сила; мощность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "power",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prayer:n:b1",
        "word": "prayer",
        "translation": "молитва",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prayer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prediction:n:b1",
        "word": "prediction",
        "translation": "предсказание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prediction",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:preparation:n:b2",
        "word": "preparation",
        "translation": "подготовка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "preparation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:presence:n:b2",
        "word": "presence",
        "translation": "присутствие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "presence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:presentation:n:b1",
        "word": "presentation",
        "translation": "презентация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "presentation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pressure:n:b1",
        "word": "pressure",
        "translation": "давление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pressure",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:priest:n:b1",
        "word": "priest",
        "translation": "священник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "priest",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prince:n:b1",
        "word": "prince",
        "translation": "принц",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prince",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:princess:n:b1",
        "word": "princess",
        "translation": "принцесса",
        "example": "",
        "sentenceTranslation": "",
        "answer": "princess",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:principle:n:b2",
        "word": "principle",
        "translation": "принцип",
        "example": "",
        "sentenceTranslation": "",
        "answer": "principle",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:print:n:b2",
        "word": "print",
        "translation": "отпечаток; печать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "print",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:printer:n:a2",
        "word": "printer",
        "translation": "принтер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "printer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:printing:n:b1",
        "word": "printing",
        "translation": "печать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "printing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:priority:n:b2",
        "word": "priority",
        "translation": "приоритет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "priority",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prisoner:n:b1",
        "word": "prisoner",
        "translation": "заключенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prisoner",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:privacy:n:b2",
        "word": "privacy",
        "translation": "конфиденциальность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "privacy",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:problem:n:a1",
        "word": "problem",
        "translation": "проблема",
        "example": "",
        "sentenceTranslation": "",
        "answer": "problem",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:procedure:n:b2",
        "word": "procedure",
        "translation": "процедура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "procedure",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:produce:n:b2",
        "word": "produce",
        "translation": "продукция; сельхозпродукты",
        "example": "",
        "sentenceTranslation": "",
        "answer": "produce",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:producer:n:b1",
        "word": "producer",
        "translation": "продюсер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "producer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:professor:n:a2",
        "word": "professor",
        "translation": "профессор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "professor",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:profile:n:a2",
        "word": "profile",
        "translation": "профиль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "profile",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:programme:n:a1",
        "word": "programme",
        "translation": "программа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "programme",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:progress:n:a2",
        "word": "progress",
        "translation": "прогресс; продвижение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "progress",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:proof:n:b2",
        "word": "proof",
        "translation": "доказательство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "proof",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:property:n:b1",
        "word": "property",
        "translation": "собственность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "property",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:proposal:n:b2",
        "word": "proposal",
        "translation": "предложение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "proposal",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prospect:n:b2",
        "word": "prospect",
        "translation": "перспектива",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prospect",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:protection:n:b2",
        "word": "protection",
        "translation": "защита",
        "example": "",
        "sentenceTranslation": "",
        "answer": "protection",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:psychologist:n:b2",
        "word": "psychologist",
        "translation": "психолог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "psychologist",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:psychology:n:b2",
        "word": "psychology",
        "translation": "психология",
        "example": "",
        "sentenceTranslation": "",
        "answer": "psychology",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pub:n:a2",
        "word": "pub",
        "translation": "паб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pub",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:publication:n:b2",
        "word": "publication",
        "translation": "публикация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "publication",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pull:n:b1",
        "word": "pull",
        "translation": "тяга; рывок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pull",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:punishment:n:b1",
        "word": "punishment",
        "translation": "наказание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "punishment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:purpose:n:a2",
        "word": "purpose",
        "translation": "цель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "purpose",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:push:n:b1",
        "word": "push",
        "translation": "толчок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "push",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:quality:n:a2",
        "word": "quality",
        "translation": "качество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quality",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:quantity:n:a2",
        "word": "quantity",
        "translation": "количество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quantity",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:queen:n:a2",
        "word": "queen",
        "translation": "королева",
        "example": "",
        "sentenceTranslation": "",
        "answer": "queen",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:quotation:n:b1",
        "word": "quotation",
        "translation": "цитата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quotation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:racing:n:b1",
        "word": "racing",
        "translation": "гонки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "racing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:range:n:b1",
        "word": "range",
        "translation": "диапазон; ассортимент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "range",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rate:n:a2",
        "word": "rate",
        "translation": "темп; ставка; показатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rate",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reach:n:b2",
        "word": "reach",
        "translation": "досягаемость; охват",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reach",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reaction:n:b1",
        "word": "reaction",
        "translation": "реакция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reaction",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reader:n:a1",
        "word": "reader",
        "translation": "читатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reader",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reality:n:b1",
        "word": "reality",
        "translation": "реальность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reality",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reason:n:a1",
        "word": "reason",
        "translation": "причина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reason",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reception:n:a2",
        "word": "reception",
        "translation": "прием",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reception",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:recommendation:n:b1",
        "word": "recommendation",
        "translation": "рекомендация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recommendation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:recording:n:a2",
        "word": "recording",
        "translation": "запись",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recording",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reduction:n:b2",
        "word": "reduction",
        "translation": "сокращение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reduction",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reference:n:b1",
        "word": "reference",
        "translation": "ссылка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reference",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:relation:n:b1",
        "word": "relation",
        "translation": "отношение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:relief:n:b2",
        "word": "relief",
        "translation": "облегчение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relief",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:repeat:n:b1",
        "word": "repeat",
        "translation": "повтор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "repeat",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:report:n:a1",
        "word": "report",
        "translation": "отчёт; сообщение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "report",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reporter:n:a2",
        "word": "reporter",
        "translation": "репортер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reporter",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reputation:n:b2",
        "word": "reputation",
        "translation": "репутация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reputation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:request:n:a2",
        "word": "request",
        "translation": "запрос; просьба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "request",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:requirement:n:b2",
        "word": "requirement",
        "translation": "требование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "requirement",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:researcher:n:a2",
        "word": "researcher",
        "translation": "исследователь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "researcher",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:reservation:n:b1",
        "word": "reservation",
        "translation": "бронирование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reservation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:resort:n:b2",
        "word": "resort",
        "translation": "курорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "resort",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:resource:n:b1",
        "word": "resource",
        "translation": "ресурс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "resource",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:response:n:a2",
        "word": "response",
        "translation": "ответ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "response",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rest:n:a2",
        "word": "rest",
        "translation": "отдых; остаток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rest",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:revolution:n:b2",
        "word": "revolution",
        "translation": "революция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "revolution",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rhythm:n:b2",
        "word": "rhythm",
        "translation": "ритм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rhythm",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ring:n:a2",
        "word": "ring",
        "translation": "кольцо; звонок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ring",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ring:n:b1",
        "word": "ring",
        "translation": "кольцо; звонок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ring",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rise:n:b1",
        "word": "rise",
        "translation": "рост; подъём",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rise",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rock:n:a2",
        "word": "rock",
        "translation": "рок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rock",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rock:n:a2:2",
        "word": "rock",
        "translation": "рок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rock",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:role:n:a2",
        "word": "role",
        "translation": "роль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "role",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rope:n:b1",
        "word": "rope",
        "translation": "веревка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rope",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:round:n:b2",
        "word": "round",
        "translation": "круглый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "round",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:routine:n:a1",
        "word": "routine",
        "translation": "рутина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "routine",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:row:n:b1",
        "word": "row",
        "translation": "строка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "row",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rubbish:n:a2",
        "word": "rubbish",
        "translation": "мусор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rubbish",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rugby:n:b1",
        "word": "rugby",
        "translation": "регби",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rugby",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:runner:n:a2",
        "word": "runner",
        "translation": "бегун",
        "example": "",
        "sentenceTranslation": "",
        "answer": "runner",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:safety:n:b1",
        "word": "safety",
        "translation": "безопасность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "safety",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sail:n:b1",
        "word": "sail",
        "translation": "парус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sail",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sailing:n:a2",
        "word": "sailing",
        "translation": "парусный спорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sailing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sailor:n:b1",
        "word": "sailor",
        "translation": "матрос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sailor",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sample:n:b1",
        "word": "sample",
        "translation": "образец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sample",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sand:n:b1",
        "word": "sand",
        "translation": "песок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sand",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:satellite:n:b2",
        "word": "satellite",
        "translation": "спутник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "satellite",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sauce:n:a2",
        "word": "sauce",
        "translation": "соус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sauce",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:saving:n:b2",
        "word": "saving",
        "translation": "экономия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "saving",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:scale:n:b2",
        "word": "scale",
        "translation": "масштаб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scale",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:scene:n:a2",
        "word": "scene",
        "translation": "сцена",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scene",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:schedule:n:a2",
        "word": "schedule",
        "translation": "расписание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "schedule",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:scheme:n:b2",
        "word": "scheme",
        "translation": "схема",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scheme",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:script:n:b1",
        "word": "script",
        "translation": "сценарий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "script",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:season:n:a2",
        "word": "season",
        "translation": "сезон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "season",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:seat:n:a2",
        "word": "seat",
        "translation": "сиденье; место",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seat",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:secretary:n:a2",
        "word": "secretary",
        "translation": "секретарь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "secretary",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:section:n:a1",
        "word": "section",
        "translation": "раздел",
        "example": "",
        "sentenceTranslation": "",
        "answer": "section",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sector:n:b2",
        "word": "sector",
        "translation": "сектор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sector",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:security:n:b1",
        "word": "security",
        "translation": "безопасность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "security",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:selection:n:b2",
        "word": "selection",
        "translation": "выбор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "selection",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:self:n:b2",
        "word": "self",
        "translation": "сам",
        "example": "",
        "sentenceTranslation": "",
        "answer": "self",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sense:n:a2",
        "word": "sense",
        "translation": "чувство; смысл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sense",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sequence:n:b2",
        "word": "sequence",
        "translation": "последовательность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sequence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:servant:n:b1",
        "word": "servant",
        "translation": "слуга",
        "example": "",
        "sentenceTranslation": "",
        "answer": "servant",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:session:n:b2",
        "word": "session",
        "translation": "сессия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "session",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:set:n:b1:2",
        "word": "set",
        "translation": "набор; комплект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "set",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:setting:n:b1",
        "word": "setting",
        "translation": "установка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "setting",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sex:n:b1",
        "word": "sex",
        "translation": "секс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sex",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shade:n:b2",
        "word": "shade",
        "translation": "тень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shade",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shadow:n:b2",
        "word": "shadow",
        "translation": "тень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shadow",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shake:n:b1",
        "word": "shake",
        "translation": "встряхивание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shake",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shame:n:b2",
        "word": "shame",
        "translation": "позор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shame",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shape:n:a2",
        "word": "shape",
        "translation": "форма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shape",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:share:n:b1",
        "word": "share",
        "translation": "доля; акция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "share",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shell:n:b1",
        "word": "shell",
        "translation": "оболочка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shell",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shift:n:b1",
        "word": "shift",
        "translation": "смена; сдвиг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shift",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shirt:n:a1",
        "word": "shirt",
        "translation": "рубашка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shirt",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shoe:n:a1",
        "word": "shoe",
        "translation": "туфля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shoe",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shooting:n:b2",
        "word": "shooting",
        "translation": "стрельба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shooting",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:shot:n:b2",
        "word": "shot",
        "translation": "выстрел",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shot",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:side:n:a2",
        "word": "side",
        "translation": "сторона",
        "example": "",
        "sentenceTranslation": "",
        "answer": "side",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sight:n:b1",
        "word": "sight",
        "translation": "взгляд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sight",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:silence:n:b2",
        "word": "silence",
        "translation": "тишина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "silence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:silk:n:b2",
        "word": "silk",
        "translation": "шелк",
        "example": "",
        "sentenceTranslation": "",
        "answer": "silk",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:similarity:n:b1",
        "word": "similarity",
        "translation": "сходство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "similarity",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:singing:n:a2",
        "word": "singing",
        "translation": "пение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "singing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sir:n:a2",
        "word": "sir",
        "translation": "сэр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sir",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:site:n:a2",
        "word": "site",
        "translation": "сайт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "site",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:situation:n:a1",
        "word": "situation",
        "translation": "ситуация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "situation",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:skiing:n:a2",
        "word": "skiing",
        "translation": "катание на лыжах",
        "example": "",
        "sentenceTranslation": "",
        "answer": "skiing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:skirt:n:a1",
        "word": "skirt",
        "translation": "юбка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "skirt",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:smoking:n:a2",
        "word": "smoking",
        "translation": "курение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smoking",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sock:n:a2",
        "word": "sock",
        "translation": "носок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sock",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:soil:n:b1",
        "word": "soil",
        "translation": "почва",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soil",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:soldier:n:a2",
        "word": "soldier",
        "translation": "солдат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soldier",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:solution:n:a2",
        "word": "solution",
        "translation": "решение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "solution",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sort:n:a2",
        "word": "sort",
        "translation": "вид; сорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sort",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:soul:n:b2",
        "word": "soul",
        "translation": "душа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soul",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:source:n:a2",
        "word": "source",
        "translation": "источник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "source",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:space:n:a1",
        "word": "space",
        "translation": "пространство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "space",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:speaker:n:a2",
        "word": "speaker",
        "translation": "оратор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "speaker",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:species:n:b2",
        "word": "species",
        "translation": "вид",
        "example": "",
        "sentenceTranslation": "",
        "answer": "species",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:speech:n:a2",
        "word": "speech",
        "translation": "речь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "speech",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spelling:n:a1",
        "word": "spelling",
        "translation": "правописание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spelling",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spending:n:b1",
        "word": "spending",
        "translation": "расходы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spending",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spirit:n:b1",
        "word": "spirit",
        "translation": "дух",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spirit",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spot:n:b1",
        "word": "spot",
        "translation": "пятно; место",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spot",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spread:n:b2",
        "word": "spread",
        "translation": "распространение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spread",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spring:n:a1",
        "word": "spring",
        "translation": "весна; пружина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spring",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stadium:n:b1",
        "word": "stadium",
        "translation": "стадион",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stadium",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stage:n:a2",
        "word": "stage",
        "translation": "сцена; этап",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stage",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stamp:n:a2",
        "word": "stamp",
        "translation": "штамп",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stamp",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stand:n:b2",
        "word": "stand",
        "translation": "стенд; позиция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stand",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:star:n:a1",
        "word": "star",
        "translation": "звезда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "star",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:start:n:a2",
        "word": "start",
        "translation": "начало; старт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "start",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:statement:n:a1",
        "word": "statement",
        "translation": "заявление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "statement",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:statistic:n:b1",
        "word": "statistic",
        "translation": "статистика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "statistic",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:statue:n:b1",
        "word": "statue",
        "translation": "статуя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "statue",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:status:n:b2",
        "word": "status",
        "translation": "статус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "status",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stay:n:a2",
        "word": "stay",
        "translation": "пребывание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stay",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:steel:n:b2",
        "word": "steel",
        "translation": "сталь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "steel",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stick:n:b1:2",
        "word": "stick",
        "translation": "палка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stick",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stock:n:b2",
        "word": "stock",
        "translation": "запас",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stock",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stone:n:a2",
        "word": "stone",
        "translation": "камень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stone",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:story:n:a1",
        "word": "story",
        "translation": "история",
        "example": "",
        "sentenceTranslation": "",
        "answer": "story",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stranger:n:b1",
        "word": "stranger",
        "translation": "незнакомец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stranger",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:strategy:n:a2",
        "word": "strategy",
        "translation": "стратегия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strategy",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stream:n:b2",
        "word": "stream",
        "translation": "поток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stream",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:strength:n:b1",
        "word": "strength",
        "translation": "сила",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strength",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:string:n:b1",
        "word": "string",
        "translation": "строка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "string",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:structure:n:a2",
        "word": "structure",
        "translation": "структура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "structure",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:studio:n:b1",
        "word": "studio",
        "translation": "студия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "studio",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stuff:n:b1",
        "word": "stuff",
        "translation": "вещи; материал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stuff",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:style:n:a1",
        "word": "style",
        "translation": "стиль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "style",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:substance:n:b1",
        "word": "substance",
        "translation": "вещество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "substance",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:success:n:a1",
        "word": "success",
        "translation": "успех",
        "example": "",
        "sentenceTranslation": "",
        "answer": "success",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:suggestion:n:a2",
        "word": "suggestion",
        "translation": "предложение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suggestion",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:suit:n:a2",
        "word": "suit",
        "translation": "костюм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:summary:n:b1",
        "word": "summary",
        "translation": "резюме",
        "example": "",
        "sentenceTranslation": "",
        "answer": "summary",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:summer:n:a1",
        "word": "summer",
        "translation": "лето",
        "example": "",
        "sentenceTranslation": "",
        "answer": "summer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:supporter:n:b1",
        "word": "supporter",
        "translation": "сторонник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "supporter",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:surface:n:b1",
        "word": "surface",
        "translation": "поверхность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surface",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:surgery:n:b2",
        "word": "surgery",
        "translation": "хирургия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surgery",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:survey:n:a2",
        "word": "survey",
        "translation": "опрос; обзор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "survey",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sweater:n:a1",
        "word": "sweater",
        "translation": "свитер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sweater",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:switch:n:b2",
        "word": "switch",
        "translation": "выключатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "switch",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:symbol:n:a2",
        "word": "symbol",
        "translation": "символ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "symbol",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sympathy:n:b2",
        "word": "sympathy",
        "translation": "симпатия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sympathy",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:symptom:n:b1",
        "word": "symptom",
        "translation": "симптом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "symptom",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:t-shirt:n:a1",
        "word": "T-shirt",
        "translation": "футболка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "T-shirt",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tail:n:b1",
        "word": "tail",
        "translation": "хвост",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tail",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tale:n:b2",
        "word": "tale",
        "translation": "сказка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tale",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:talent:n:b1",
        "word": "talent",
        "translation": "талант",
        "example": "",
        "sentenceTranslation": "",
        "answer": "talent",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:talk:n:a2",
        "word": "talk",
        "translation": "разговор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "talk",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tank:n:b2",
        "word": "tank",
        "translation": "танк",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tank",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:target:n:a2",
        "word": "target",
        "translation": "цель; мишень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "target",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:teaching:n:a2",
        "word": "teaching",
        "translation": "преподавание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "teaching",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tear:n:b2:2",
        "word": "tear",
        "translation": "слеза; разрыв",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tear",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:technique:n:b1",
        "word": "technique",
        "translation": "техника",
        "example": "",
        "sentenceTranslation": "",
        "answer": "technique",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tent:n:b1",
        "word": "tent",
        "translation": "палатка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tent",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:term:n:a2",
        "word": "term",
        "translation": "термин; срок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "term",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:theme:n:b1",
        "word": "theme",
        "translation": "тема",
        "example": "",
        "sentenceTranslation": "",
        "answer": "theme",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:therapy:n:b2",
        "word": "therapy",
        "translation": "терапия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "therapy",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:thief:n:a2",
        "word": "thief",
        "translation": "вор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thief",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:thing:n:a1",
        "word": "thing",
        "translation": "вещь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thing",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:thinking:n:a2",
        "word": "thinking",
        "translation": "мышление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thinking",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:third:n:a2",
        "word": "third",
        "translation": "третий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "third",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:thought:n:a2",
        "word": "thought",
        "translation": "мысль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thought",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:threat:n:b2",
        "word": "threat",
        "translation": "угроза",
        "example": "",
        "sentenceTranslation": "",
        "answer": "threat",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:throat:n:b1",
        "word": "throat",
        "translation": "горло",
        "example": "",
        "sentenceTranslation": "",
        "answer": "throat",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tin:n:b1",
        "word": "tin",
        "translation": "олово",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tin",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tip:n:a2",
        "word": "tip",
        "translation": "кончик; совет; чаевые",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tip",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:title:n:a1",
        "word": "title",
        "translation": "название; титул",
        "example": "",
        "sentenceTranslation": "",
        "answer": "title",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:toe:n:b1",
        "word": "toe",
        "translation": "палец ноги",
        "example": "",
        "sentenceTranslation": "",
        "answer": "toe",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tone:n:b2",
        "word": "tone",
        "translation": "тон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tone",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:topic:n:a1",
        "word": "topic",
        "translation": "тема",
        "example": "",
        "sentenceTranslation": "",
        "answer": "topic",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:touch:n:b1",
        "word": "touch",
        "translation": "прикосновение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "touch",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tourism:n:a2",
        "word": "tourism",
        "translation": "туризм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tourism",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tower:n:a2",
        "word": "tower",
        "translation": "башня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tower",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:track:n:a2",
        "word": "track",
        "translation": "след; дорожка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "track",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trainer:n:a2",
        "word": "trainer",
        "translation": "тренер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trainer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:transition:n:b2",
        "word": "transition",
        "translation": "переход",
        "example": "",
        "sentenceTranslation": "",
        "answer": "transition",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:translation:n:b1",
        "word": "translation",
        "translation": "перевод",
        "example": "",
        "sentenceTranslation": "",
        "answer": "translation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:traveller:n:a2",
        "word": "traveller",
        "translation": "путешественник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "traveller",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trend:n:b1",
        "word": "trend",
        "translation": "тенденция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trend",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trial:n:b2",
        "word": "trial",
        "translation": "испытание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trial",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trouble:n:a2",
        "word": "trouble",
        "translation": "проблема; неприятности",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trouble",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:trousers:n:a1",
        "word": "trousers",
        "translation": "брюки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "trousers",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:truck:n:a2",
        "word": "truck",
        "translation": "грузовик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "truck",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:truth:n:b1",
        "word": "truth",
        "translation": "правда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "truth",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:try:n:b2",
        "word": "try",
        "translation": "попытка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "try",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tube:n:b1",
        "word": "tube",
        "translation": "трубка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tube",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tune:n:b2",
        "word": "tune",
        "translation": "настраивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tune",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tunnel:n:b2",
        "word": "tunnel",
        "translation": "туннель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tunnel",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:type:n:a1",
        "word": "type",
        "translation": "тип; вид",
        "example": "",
        "sentenceTranslation": "",
        "answer": "type",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tyre:n:b1",
        "word": "tyre",
        "translation": "шина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tyre",
        "level": "B1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-21",
    "collection": "Oxford 3000",
    "subtopic": "Слова P–T",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Идеи и понятия",
    "words": [
      {
        "id": "oxford:umbrella:n:a1",
        "word": "umbrella",
        "translation": "зонтик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "umbrella",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:understanding:n:a2",
        "word": "understanding",
        "translation": "понимание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "understanding",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:underwear:n:b1",
        "word": "underwear",
        "translation": "нижнее белье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "underwear",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:unemployment:n:b1",
        "word": "unemployment",
        "translation": "безработица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unemployment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:uniform:n:a2",
        "word": "uniform",
        "translation": "униформа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "uniform",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:union:n:b1",
        "word": "union",
        "translation": "союз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "union",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:unit:n:a2",
        "word": "unit",
        "translation": "единица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unit",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:universe:n:b2",
        "word": "universe",
        "translation": "вселенная",
        "example": "",
        "sentenceTranslation": "",
        "answer": "universe",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:use:n:a2",
        "word": "use",
        "translation": "использование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "use",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:van:n:a2",
        "word": "van",
        "translation": "фургон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "van",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:variety:n:a2",
        "word": "variety",
        "translation": "разнообразие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "variety",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:venue:n:b2",
        "word": "venue",
        "translation": "место проведения",
        "example": "",
        "sentenceTranslation": "",
        "answer": "venue",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:version:n:b1",
        "word": "version",
        "translation": "версия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "version",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:victim:n:b1",
        "word": "victim",
        "translation": "жертва",
        "example": "",
        "sentenceTranslation": "",
        "answer": "victim",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:victory:n:b2",
        "word": "victory",
        "translation": "победа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "victory",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:view:n:a2",
        "word": "view",
        "translation": "вид; мнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "view",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:viewer:n:b1",
        "word": "viewer",
        "translation": "зритель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "viewer",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:violence:n:b2",
        "word": "violence",
        "translation": "насилие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "violence",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:vision:n:b2",
        "word": "vision",
        "translation": "видение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vision",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:vitamin:n:b2",
        "word": "vitamin",
        "translation": "витамин",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vitamin",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:voice:n:a2",
        "word": "voice",
        "translation": "голос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "voice",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:volume:n:b2",
        "word": "volume",
        "translation": "объем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "volume",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wait:n:a2",
        "word": "wait",
        "translation": "ожидание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wait",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:warning:n:b1",
        "word": "warning",
        "translation": "предупреждение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "warning",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:washing:n:a2",
        "word": "washing",
        "translation": "стирка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "washing",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wave:n:a2",
        "word": "wave",
        "translation": "волна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wave",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:way:n:a1",
        "word": "way",
        "translation": "путь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "way",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:weakness:n:b2",
        "word": "weakness",
        "translation": "слабость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weakness",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wealth:n:b2",
        "word": "wealth",
        "translation": "богатство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wealth",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:weapon:n:b1",
        "word": "weapon",
        "translation": "оружие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weapon",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:welcome:n:a2",
        "word": "welcome",
        "translation": "приветствие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "welcome",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:well-being:n:b2",
        "word": "well-being",
        "translation": "благополучие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "well-being",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wheel:n:a2",
        "word": "wheel",
        "translation": "колесо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wheel",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:whole:n:b1",
        "word": "whole",
        "translation": "целый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whole",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:will:n:b1",
        "word": "will",
        "translation": "буду; будет (будущее время)",
        "example": "",
        "sentenceTranslation": "",
        "answer": "will",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wing:n:b1",
        "word": "wing",
        "translation": "крыло",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wing",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:winter:n:a1",
        "word": "winter",
        "translation": "зима",
        "example": "",
        "sentenceTranslation": "",
        "answer": "winter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wire:n:b2",
        "word": "wire",
        "translation": "проволока",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wire",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wool:n:b1",
        "word": "wool",
        "translation": "шерсть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wool",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:worry:n:b1",
        "word": "worry",
        "translation": "беспокойство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worry",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:worse:n:b2",
        "word": "worse",
        "translation": "хуже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worse",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:worst:n:b2",
        "word": "worst",
        "translation": "худший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worst",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wrong:n:b2",
        "word": "wrong",
        "translation": "неправильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wrong",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:zone:n:b2",
        "word": "zone",
        "translation": "зона",
        "example": "",
        "sentenceTranslation": "",
        "answer": "zone",
        "level": "B2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-22",
    "collection": "Oxford 3000",
    "subtopic": "Слова U–Z",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Люди и семья",
    "words": [
      {
        "id": "oxford:adult:n:a1",
        "word": "adult",
        "translation": "взрослый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "adult",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:adult:adj:a2",
        "word": "adult",
        "translation": "взрослый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "adult",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:age:n:a1",
        "word": "age",
        "translation": "возраст",
        "example": "",
        "sentenceTranslation": "",
        "answer": "age",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:age:v:b1",
        "word": "age",
        "translation": "стареть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "age",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:aunt:n:a1",
        "word": "aunt",
        "translation": "тетя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aunt",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:baby:n:a1",
        "word": "baby",
        "translation": "детка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "baby",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:birth:n:a2",
        "word": "birth",
        "translation": "рождение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "birth",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:born:v:a1",
        "word": "born",
        "translation": "родился",
        "example": "",
        "sentenceTranslation": "",
        "answer": "born",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:boy:n:a1",
        "word": "boy",
        "translation": "мальчик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boy",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:boyfriend:n:a1",
        "word": "boyfriend",
        "translation": "парень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boyfriend",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:brother:n:a1",
        "word": "brother",
        "translation": "брат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brother",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:child:n:a1",
        "word": "child",
        "translation": "ребенок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "child",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cousin:n:a1",
        "word": "cousin",
        "translation": "двоюродный брат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cousin",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:daughter:n:a1",
        "word": "daughter",
        "translation": "дочь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "daughter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:elderly:adj:b2",
        "word": "elderly",
        "translation": "пожилой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "elderly",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:family:n-adj:a1",
        "word": "family",
        "translation": "семья; семейный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "family",
        "level": "A1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:father:n:a1",
        "word": "father",
        "translation": "отец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "father",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:friend:n:a1",
        "word": "friend",
        "translation": "друг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "friend",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:friendship:n:b1",
        "word": "friendship",
        "translation": "дружба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "friendship",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:girl:n:a1",
        "word": "girl",
        "translation": "девушка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "girl",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:girlfriend:n:a1",
        "word": "girlfriend",
        "translation": "подруга",
        "example": "",
        "sentenceTranslation": "",
        "answer": "girlfriend",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grandfather:n:a1",
        "word": "grandfather",
        "translation": "дедушка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grandfather",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grandmother:n:a1",
        "word": "grandmother",
        "translation": "бабушка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grandmother",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grandparent:n:a1",
        "word": "grandparent",
        "translation": "дедушка и бабушка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grandparent",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:husband:n:a1",
        "word": "husband",
        "translation": "муж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "husband",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:love:n-v:a1",
        "word": "love",
        "translation": "любовь; любить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "love",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:man:n:a1",
        "word": "man",
        "translation": "мужчина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "man",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:marriage:n:b1",
        "word": "marriage",
        "translation": "брак",
        "example": "",
        "sentenceTranslation": "",
        "answer": "marriage",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:married:adj:a1",
        "word": "married",
        "translation": "женат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "married",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:mother:n:a1",
        "word": "mother",
        "translation": "мать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mother",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:neighbour:n:a1",
        "word": "neighbour",
        "translation": "сосед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neighbour",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:old:adj:a1",
        "word": "old",
        "translation": "старый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "old",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:parent:n:a1",
        "word": "parent",
        "translation": "родитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "parent",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:partner:n:a1",
        "word": "partner",
        "translation": "партнер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "partner",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:people:n:a1",
        "word": "people",
        "translation": "люди",
        "example": "",
        "sentenceTranslation": "",
        "answer": "people",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:person:n:a1",
        "word": "person",
        "translation": "человек",
        "example": "",
        "sentenceTranslation": "",
        "answer": "person",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pregnant:adj:b2",
        "word": "pregnant",
        "translation": "беременная",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pregnant",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:relationship:n:a2",
        "word": "relationship",
        "translation": "отношения",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relationship",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:relative:adj-n:b1",
        "word": "relative",
        "translation": "родственник; относительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relative",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:single:adj-n:a2",
        "word": "single",
        "translation": "один; одинокий; одиночный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "single",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:sister:n:a1",
        "word": "sister",
        "translation": "сестра",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sister",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:son:n:a1",
        "word": "son",
        "translation": "сын",
        "example": "",
        "sentenceTranslation": "",
        "answer": "son",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:teenager:n:a1",
        "word": "teenager",
        "translation": "подросток",
        "example": "",
        "sentenceTranslation": "",
        "answer": "teenager",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:uncle:n:a1",
        "word": "uncle",
        "translation": "дядя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "uncle",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wedding:n:a2",
        "word": "wedding",
        "translation": "свадьба",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wedding",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wife:n:a1",
        "word": "wife",
        "translation": "жена",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wife",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:woman:n:a1",
        "word": "woman",
        "translation": "женщина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "woman",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:young:adj:a1",
        "word": "young",
        "translation": "молодой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "young",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:young:n:b1",
        "word": "young",
        "translation": "молодой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "young",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:youth:n:b1",
        "word": "youth",
        "translation": "молодежь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "youth",
        "level": "B1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-23",
    "collection": "Oxford 3000",
    "subtopic": "Семья и отношения",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Люди и семья",
    "words": [
      {
        "id": "oxford:arm:n:a1",
        "word": "arm",
        "translation": "рука",
        "example": "",
        "sentenceTranslation": "",
        "answer": "arm",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:back:n-adv:a1",
        "word": "back",
        "translation": "спина; задняя часть; назад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "back",
        "level": "A1",
        "partOfSpeech": "сущ., нареч."
      },
      {
        "id": "oxford:back:adj:a2",
        "word": "back",
        "translation": "задний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "back",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:back:v:b2",
        "word": "back",
        "translation": "поддерживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "back",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:blood:n:a2",
        "word": "blood",
        "translation": "кровь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blood",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:body:n:a1",
        "word": "body",
        "translation": "тело",
        "example": "",
        "sentenceTranslation": "",
        "answer": "body",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:brain:n:a2",
        "word": "brain",
        "translation": "мозг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brain",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:breath:n:b2",
        "word": "breath",
        "translation": "дыхание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "breath",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:breathe:v:b1",
        "word": "breathe",
        "translation": "дышать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "breathe",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cold:adj-n:a1",
        "word": "cold",
        "translation": "холодный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cold",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:cure:v-n:b2",
        "word": "cure",
        "translation": "лекарство; излечение; лечить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cure",
        "level": "B2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:dentist:n:a2",
        "word": "dentist",
        "translation": "дантист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dentist",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:disease:n:a2",
        "word": "disease",
        "translation": "болезнь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disease",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:doctor:n:a1",
        "word": "doctor",
        "translation": "врач",
        "example": "",
        "sentenceTranslation": "",
        "answer": "doctor",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:drug:n:a2",
        "word": "drug",
        "translation": "наркотик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drug",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ear:n:a1",
        "word": "ear",
        "translation": "ухо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ear",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:exercise:n-v:a1",
        "word": "exercise",
        "translation": "упражнение; упражняться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exercise",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:eye:n:a1",
        "word": "eye",
        "translation": "глаз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eye",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:face:n:a1",
        "word": "face",
        "translation": "лицо; поверхность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "face",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:face:v:b1",
        "word": "face",
        "translation": "сталкиваться с; быть обращённым к",
        "example": "",
        "sentenceTranslation": "",
        "answer": "face",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:finger:n:a2",
        "word": "finger",
        "translation": "палец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "finger",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:foot:n:a1",
        "word": "foot",
        "translation": "нога",
        "example": "",
        "sentenceTranslation": "",
        "answer": "foot",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hair:n:a1",
        "word": "hair",
        "translation": "волосы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hair",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hand:n:a1",
        "word": "hand",
        "translation": "кисть руки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hand",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hand:v:b1",
        "word": "hand",
        "translation": "передавать в руки",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hand",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:head:n:a1",
        "word": "head",
        "translation": "голова; руководитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "head",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:head:v:b1",
        "word": "head",
        "translation": "возглавлять; направляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "head",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:health:n:a1",
        "word": "health",
        "translation": "здоровье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "health",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:healthy:adj:a1",
        "word": "healthy",
        "translation": "здоровый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "healthy",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:heart:n:a2",
        "word": "heart",
        "translation": "сердце",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heart",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hospital:n:a1",
        "word": "hospital",
        "translation": "больница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hospital",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ill:adj:a2",
        "word": "ill",
        "translation": "болен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ill",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:illness:n:a2",
        "word": "illness",
        "translation": "болезнь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "illness",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:injured:adj:b1",
        "word": "injured",
        "translation": "раненый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "injured",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:injury:n:a2",
        "word": "injury",
        "translation": "травма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "injury",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:knee:n:a2",
        "word": "knee",
        "translation": "колено",
        "example": "",
        "sentenceTranslation": "",
        "answer": "knee",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leg:n:a1",
        "word": "leg",
        "translation": "нога",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leg",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:medical:adj:a2",
        "word": "medical",
        "translation": "медицинский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "medical",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:medicine:n:a2",
        "word": "medicine",
        "translation": "медицина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "medicine",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mental:adj:b1",
        "word": "mental",
        "translation": "умственный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mental",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:mouth:n:a1",
        "word": "mouth",
        "translation": "рот",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mouth",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:neck:n:a2",
        "word": "neck",
        "translation": "шея",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neck",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nose:n:a1",
        "word": "nose",
        "translation": "нос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nose",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nurse:n:a1",
        "word": "nurse",
        "translation": "медсестра",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nurse",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pain:n:a2",
        "word": "pain",
        "translation": "боль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pain",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:painful:adj:b1",
        "word": "painful",
        "translation": "болезненный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "painful",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:patient:n:a2",
        "word": "patient",
        "translation": "пациент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "patient",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:patient:adj:b2",
        "word": "patient",
        "translation": "терпеливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "patient",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:physical:adj:a2",
        "word": "physical",
        "translation": "физический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "physical",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:shoulder:n:a2",
        "word": "shoulder",
        "translation": "плечо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shoulder",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sick:adj:a1",
        "word": "sick",
        "translation": "больной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sick",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:skin:n:a2",
        "word": "skin",
        "translation": "кожа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "skin",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sleep:n:a2",
        "word": "sleep",
        "translation": "сон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sleep",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stomach:n:a2",
        "word": "stomach",
        "translation": "желудок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stomach",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:stress:n-v:a2",
        "word": "stress",
        "translation": "стресс; ударение; подчёркивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stress",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:tired:adj:a1",
        "word": "tired",
        "translation": "устал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tired",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:tongue:n:b1",
        "word": "tongue",
        "translation": "язык",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tongue",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tooth:n:a1",
        "word": "tooth",
        "translation": "зуб",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tooth",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:treatment:n:b1",
        "word": "treatment",
        "translation": "лечение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "treatment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:vaccine:n:b2",
        "word": "vaccine",
        "translation": "вакцина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vaccine",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:virus:n:a2",
        "word": "virus",
        "translation": "вирус",
        "example": "",
        "sentenceTranslation": "",
        "answer": "virus",
        "level": "A2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-24",
    "collection": "Oxford 3000",
    "subtopic": "Тело и здоровье",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Наука и измерения",
    "words": [
      {
        "id": "oxford:amount:n:a2",
        "word": "amount",
        "translation": "количество; сумма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "amount",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:amount:v:b2",
        "word": "amount",
        "translation": "составлять сумму",
        "example": "",
        "sentenceTranslation": "",
        "answer": "amount",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:analyse:v:b1",
        "word": "analyse",
        "translation": "анализировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "analyse",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:analysis:n:b1",
        "word": "analysis",
        "translation": "анализ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "analysis",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:average:adj-n:a2",
        "word": "average",
        "translation": "средний; среднее значение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "average",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:average:v:b1",
        "word": "average",
        "translation": "составлять в среднем",
        "example": "",
        "sentenceTranslation": "",
        "answer": "average",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:cent:n:a1",
        "word": "cent",
        "translation": "цент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cent",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:century:n:a1",
        "word": "century",
        "translation": "век",
        "example": "",
        "sentenceTranslation": "",
        "answer": "century",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:count:v:a2",
        "word": "count",
        "translation": "считать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "count",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:count:n:b1",
        "word": "count",
        "translation": "подсчёт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "count",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:date:n:a1",
        "word": "date",
        "translation": "дата; свидание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "date",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:date:v:b2",
        "word": "date",
        "translation": "встречаться; датировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "date",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:day:n:a1",
        "word": "day",
        "translation": "день",
        "example": "",
        "sentenceTranslation": "",
        "answer": "day",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:discover:v:a2",
        "word": "discover",
        "translation": "обнаружить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discover",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:discovery:n:a2",
        "word": "discovery",
        "translation": "открытие",
        "example": "",
        "sentenceTranslation": "",
        "answer": "discovery",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:double:adj-det-pron-v:a2",
        "word": "double",
        "translation": "двойной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "double",
        "level": "A2",
        "partOfSpeech": "прил., опред., мест., гл."
      },
      {
        "id": "oxford:double:adv:b1",
        "word": "double",
        "translation": "двойной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "double",
        "level": "B1",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:evidence:n:a2",
        "word": "evidence",
        "translation": "доказательство; свидетельство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "evidence",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:experiment:n:a2",
        "word": "experiment",
        "translation": "эксперимент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "experiment",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:experiment:v:b1",
        "word": "experiment",
        "translation": "экспериментировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "experiment",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:fact:n:a1",
        "word": "fact",
        "translation": "факт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fact",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:figure:n:a2",
        "word": "figure",
        "translation": "цифра; фигура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "figure",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:figure:v:b2",
        "word": "figure",
        "translation": "полагать; вычислять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "figure",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:half:n-det-pron:a1",
        "word": "half",
        "translation": "половина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "half",
        "level": "A1",
        "partOfSpeech": "сущ., опред., мест."
      },
      {
        "id": "oxford:half:adv:a2",
        "word": "half",
        "translation": "половина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "half",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:height:n:a2",
        "word": "height",
        "translation": "высота",
        "example": "",
        "sentenceTranslation": "",
        "answer": "height",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hour:n:a1",
        "word": "hour",
        "translation": "час",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hour",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:information:n:a1",
        "word": "information",
        "translation": "информация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "information",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lab:n:a2",
        "word": "lab",
        "translation": "лаборатория",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lab",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:laboratory:n:b1",
        "word": "laboratory",
        "translation": "лаборатория",
        "example": "",
        "sentenceTranslation": "",
        "answer": "laboratory",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:length:n:b1",
        "word": "length",
        "translation": "длина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "length",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:measure:v-n:b1",
        "word": "measure",
        "translation": "мера; измерять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "measure",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:measurement:n:b2",
        "word": "measurement",
        "translation": "измерение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "measurement",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:method:n:a2",
        "word": "method",
        "translation": "метод",
        "example": "",
        "sentenceTranslation": "",
        "answer": "method",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:minute:n:a1",
        "word": "minute",
        "translation": "минута",
        "example": "",
        "sentenceTranslation": "",
        "answer": "minute",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:month:n:a1",
        "word": "month",
        "translation": "месяц",
        "example": "",
        "sentenceTranslation": "",
        "answer": "month",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:number:n:a1",
        "word": "number",
        "translation": "число; номер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "number",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:number:v:a2",
        "word": "number",
        "translation": "нумеровать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "number",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:per:prep:a2",
        "word": "per",
        "translation": "за",
        "example": "",
        "sentenceTranslation": "",
        "answer": "per",
        "level": "A2",
        "partOfSpeech": "предл."
      },
      {
        "id": "oxford:percentage:n:b1",
        "word": "percentage",
        "translation": "процент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "percentage",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:process:n:a2",
        "word": "process",
        "translation": "процесс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "process",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:process:v:b2",
        "word": "process",
        "translation": "обрабатывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "process",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:quarter:n:a1",
        "word": "quarter",
        "translation": "квартал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quarter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:result:n:a1",
        "word": "result",
        "translation": "результат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "result",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:result:v:b1",
        "word": "result",
        "translation": "приводить к результату",
        "example": "",
        "sentenceTranslation": "",
        "answer": "result",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:scientific:adj:b1",
        "word": "scientific",
        "translation": "научный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scientific",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:second:det-number:a1",
        "word": "second",
        "translation": "второй",
        "example": "",
        "sentenceTranslation": "",
        "answer": "second",
        "level": "A1",
        "partOfSpeech": "опред., числ."
      },
      {
        "id": "oxford:second:n:a1:2",
        "word": "second",
        "translation": "второй",
        "example": "",
        "sentenceTranslation": "",
        "answer": "second",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:second:adv:a2",
        "word": "second",
        "translation": "второй",
        "example": "",
        "sentenceTranslation": "",
        "answer": "second",
        "level": "A2",
        "partOfSpeech": "нареч."
      },
      {
        "id": "oxford:size:n:a2",
        "word": "size",
        "translation": "размер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "size",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:speed:n:a2",
        "word": "speed",
        "translation": "скорость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "speed",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:speed:v:b2",
        "word": "speed",
        "translation": "мчаться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "speed",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:sum:n-v:b2",
        "word": "sum",
        "translation": "сумма; суммировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sum",
        "level": "B2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:theory:n:b1",
        "word": "theory",
        "translation": "теория",
        "example": "",
        "sentenceTranslation": "",
        "answer": "theory",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:time:n:a1",
        "word": "time",
        "translation": "время",
        "example": "",
        "sentenceTranslation": "",
        "answer": "time",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:time:v:b2",
        "word": "time",
        "translation": "засекать время",
        "example": "",
        "sentenceTranslation": "",
        "answer": "time",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:total:adj-n:b1",
        "word": "total",
        "translation": "общий; итог",
        "example": "",
        "sentenceTranslation": "",
        "answer": "total",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:week:n:a1",
        "word": "week",
        "translation": "неделя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "week",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:weight:n:a2",
        "word": "weight",
        "translation": "вес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weight",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:year:n:a1",
        "word": "year",
        "translation": "год",
        "example": "",
        "sentenceTranslation": "",
        "answer": "year",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-25",
    "collection": "Oxford 3000",
    "subtopic": "Наука и числа",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Наука и измерения",
    "words": [
      {
        "id": "oxford:billion:number:a2",
        "word": "billion",
        "translation": "миллиард",
        "example": "",
        "sentenceTranslation": "",
        "answer": "billion",
        "level": "A2",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:eight:number:a1",
        "word": "eight",
        "translation": "восемь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eight",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:eighteen:number:a1",
        "word": "eighteen",
        "translation": "восемнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eighteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:eighty:number:a1",
        "word": "eighty",
        "translation": "восемьдесят",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eighty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:eleven:number:a1",
        "word": "eleven",
        "translation": "одиннадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eleven",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:fifteen:number:a1",
        "word": "fifteen",
        "translation": "пятнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fifteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:fifth:number:a1",
        "word": "fifth",
        "translation": "пятый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fifth",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:fifty:number:a1",
        "word": "fifty",
        "translation": "пятьдесят",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fifty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:five:number:a1",
        "word": "five",
        "translation": "пять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "five",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:forty:number:a1",
        "word": "forty",
        "translation": "сорок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:four:number:a1",
        "word": "four",
        "translation": "четыре",
        "example": "",
        "sentenceTranslation": "",
        "answer": "four",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:fourteen:number:a1",
        "word": "fourteen",
        "translation": "четырнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fourteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:fourth:number:a1",
        "word": "fourth",
        "translation": "четвертый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fourth",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:hundred:number:a1",
        "word": "hundred",
        "translation": "сто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hundred",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:million:number:a1",
        "word": "million",
        "translation": "миллион",
        "example": "",
        "sentenceTranslation": "",
        "answer": "million",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:nine:number:a1",
        "word": "nine",
        "translation": "девять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nine",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:nineteen:number:a1",
        "word": "nineteen",
        "translation": "девятнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nineteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:ninety:number:a1",
        "word": "ninety",
        "translation": "девяносто",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ninety",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:seven:number:a1",
        "word": "seven",
        "translation": "семь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seven",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:seventeen:number:a1",
        "word": "seventeen",
        "translation": "семнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seventeen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:seventy:number:a1",
        "word": "seventy",
        "translation": "семьдесят",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seventy",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:six:number:a1",
        "word": "six",
        "translation": "шесть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "six",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:sixteen:number:a1",
        "word": "sixteen",
        "translation": "шестнадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sixteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:sixty:number:a1",
        "word": "sixty",
        "translation": "шестьдесят",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sixty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:ten:number:a1",
        "word": "ten",
        "translation": "десять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ten",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:third:number:a1",
        "word": "third",
        "translation": "третий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "third",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:thirteen:number:a1",
        "word": "thirteen",
        "translation": "тринадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thirteen",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:thirty:number:a1",
        "word": "thirty",
        "translation": "тридцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thirty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:thousand:number:a1",
        "word": "thousand",
        "translation": "тысяча",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thousand",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:three:number:a1",
        "word": "three",
        "translation": "три",
        "example": "",
        "sentenceTranslation": "",
        "answer": "three",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:twelve:number:a1",
        "word": "twelve",
        "translation": "двенадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "twelve",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:twenty:number:a1",
        "word": "twenty",
        "translation": "двадцать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "twenty",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:two:number:a1",
        "word": "two",
        "translation": "два",
        "example": "",
        "sentenceTranslation": "",
        "answer": "two",
        "level": "A1",
        "partOfSpeech": "числ."
      },
      {
        "id": "oxford:zero:number:a2",
        "word": "zero",
        "translation": "ноль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "zero",
        "level": "A2",
        "partOfSpeech": "числ."
      }
    ],
    "id": "oxford-extra-26",
    "collection": "Oxford 3000",
    "subtopic": "Числа и количества",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Общество и культура",
    "words": [
      {
        "id": "oxford:art:n:a1",
        "word": "art",
        "translation": "искусство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "art",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:artistic:adj:b2",
        "word": "artistic",
        "translation": "художественный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "artistic",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:author:n:a2",
        "word": "author",
        "translation": "автор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "author",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:award:n:a2",
        "word": "award",
        "translation": "награда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "award",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:award:v:b1",
        "word": "award",
        "translation": "награждать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "award",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:band:n:a1",
        "word": "band",
        "translation": "группа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "band",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:basketball:n:a2",
        "word": "basketball",
        "translation": "баскетбол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "basketball",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:camera:n:a1",
        "word": "camera",
        "translation": "камера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "camera",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:celebrate:v:a2",
        "word": "celebrate",
        "translation": "праздновать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "celebrate",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:celebration:n:b1",
        "word": "celebration",
        "translation": "праздник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "celebration",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:competition:n:a2",
        "word": "competition",
        "translation": "конкуренция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "competition",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:concert:n:a1",
        "word": "concert",
        "translation": "концерт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concert",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dance:n-v:a1",
        "word": "dance",
        "translation": "танец; танцевать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dance",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:dancing:n:a1",
        "word": "dancing",
        "translation": "танцы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dancing",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:entertainment:n:b1",
        "word": "entertainment",
        "translation": "развлечение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entertainment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:episode:n:b1",
        "word": "episode",
        "translation": "эпизод",
        "example": "",
        "sentenceTranslation": "",
        "answer": "episode",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:festival:n:a1",
        "word": "festival",
        "translation": "фестиваль",
        "example": "",
        "sentenceTranslation": "",
        "answer": "festival",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:film:n:a1",
        "word": "film",
        "translation": "фильм; плёнка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "film",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:film:v:a2",
        "word": "film",
        "translation": "снимать фильм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "film",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:football:n:a1",
        "word": "football",
        "translation": "футбол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "football",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fun:n:a1",
        "word": "fun",
        "translation": "веселье",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fun",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fun:adj:a2",
        "word": "fun",
        "translation": "весёлый; забавный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fun",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:game:n:a1",
        "word": "game",
        "translation": "игра",
        "example": "",
        "sentenceTranslation": "",
        "answer": "game",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hobby:n:a1",
        "word": "hobby",
        "translation": "хобби",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hobby",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leisure:n:b1",
        "word": "leisure",
        "translation": "досуг",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leisure",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:literature:n:b1",
        "word": "literature",
        "translation": "литература",
        "example": "",
        "sentenceTranslation": "",
        "answer": "literature",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lose:v:a1",
        "word": "lose",
        "translation": "проиграть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lose",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:match:n-v:a1",
        "word": "match",
        "translation": "матч; соответствие; соответствовать; подбирать пару",
        "example": "",
        "sentenceTranslation": "",
        "answer": "match",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:movie:n:a1",
        "word": "movie",
        "translation": "фильм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "movie",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:music:n:a1",
        "word": "music",
        "translation": "музыка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "music",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:musical:adj:a2",
        "word": "musical",
        "translation": "музыкальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "musical",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:musical:n:b1",
        "word": "musical",
        "translation": "мюзикл",
        "example": "",
        "sentenceTranslation": "",
        "answer": "musical",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:novel:n:a2",
        "word": "novel",
        "translation": "роман",
        "example": "",
        "sentenceTranslation": "",
        "answer": "novel",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:paint:v-n:a1",
        "word": "paint",
        "translation": "краска; красить; рисовать красками",
        "example": "",
        "sentenceTranslation": "",
        "answer": "paint",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:painting:n:a1",
        "word": "painting",
        "translation": "живопись",
        "example": "",
        "sentenceTranslation": "",
        "answer": "painting",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:party:n:a1",
        "word": "party",
        "translation": "вечеринка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "party",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:perform:v:a2",
        "word": "perform",
        "translation": "выполнять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "perform",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:performance:n:b1",
        "word": "performance",
        "translation": "производительность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "performance",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:photo:n:a1",
        "word": "photo",
        "translation": "фото",
        "example": "",
        "sentenceTranslation": "",
        "answer": "photo",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:photograph:n:a1",
        "word": "photograph",
        "translation": "фотография",
        "example": "",
        "sentenceTranslation": "",
        "answer": "photograph",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:photograph:v:a2",
        "word": "photograph",
        "translation": "фотографировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "photograph",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:photography:n:b1",
        "word": "photography",
        "translation": "фотография",
        "example": "",
        "sentenceTranslation": "",
        "answer": "photography",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:picture:n:a1",
        "word": "picture",
        "translation": "картина; изображение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "picture",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:picture:v:b2",
        "word": "picture",
        "translation": "представлять себе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "picture",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:play:v-n:a1",
        "word": "play",
        "translation": "игра; пьеса; играть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "play",
        "level": "A1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:poem:n:b1",
        "word": "poem",
        "translation": "стихотворение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poem",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:poetry:n:b1",
        "word": "poetry",
        "translation": "поэзия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poetry",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prize:n:a2",
        "word": "prize",
        "translation": "приз",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prize",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:run:v:a1",
        "word": "run",
        "translation": "бежать; управлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "run",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:run:n:a2",
        "word": "run",
        "translation": "бег; пробежка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "run",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:running:n:a2",
        "word": "running",
        "translation": "бег",
        "example": "",
        "sentenceTranslation": "",
        "answer": "running",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:series:n:a2",
        "word": "series",
        "translation": "серия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "series",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sing:v:a1",
        "word": "sing",
        "translation": "петь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sing",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:singer:n:a1",
        "word": "singer",
        "translation": "певец",
        "example": "",
        "sentenceTranslation": "",
        "answer": "singer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:soccer:n:a2",
        "word": "soccer",
        "translation": "футбол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soccer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:song:n:a1",
        "word": "song",
        "translation": "песня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "song",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sport:n:a1",
        "word": "sport",
        "translation": "спорт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sport",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:swim:v:a1",
        "word": "swim",
        "translation": "плавать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "swim",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:swim:n:b1",
        "word": "swim",
        "translation": "плавание; заплыв",
        "example": "",
        "sentenceTranslation": "",
        "answer": "swim",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:swimming:n:a1",
        "word": "swimming",
        "translation": "плавание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "swimming",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tennis:n:a1",
        "word": "tennis",
        "translation": "теннис",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tennis",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:video:n:a1",
        "word": "video",
        "translation": "видео",
        "example": "",
        "sentenceTranslation": "",
        "answer": "video",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:win:v:a1",
        "word": "win",
        "translation": "побеждать; выигрывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "win",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:win:n:b1",
        "word": "win",
        "translation": "победа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "win",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:winner:n:a2",
        "word": "winner",
        "translation": "победитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "winner",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:writer:n:a1",
        "word": "writer",
        "translation": "писатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "writer",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-27",
    "collection": "Oxford 3000",
    "subtopic": "Искусство и развлечения",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Общество и культура",
    "words": [
      {
        "id": "oxford:army:n:a2",
        "word": "army",
        "translation": "армия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "army",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:charity:n:a2",
        "word": "charity",
        "translation": "благотворительность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "charity",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:citizen:n:b2",
        "word": "citizen",
        "translation": "гражданин",
        "example": "",
        "sentenceTranslation": "",
        "answer": "citizen",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:community:n:a2",
        "word": "community",
        "translation": "сообщество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "community",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:court:n:b1",
        "word": "court",
        "translation": "суд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "court",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:crime:n:a2",
        "word": "crime",
        "translation": "преступление",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crime",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:criminal:n:a2",
        "word": "criminal",
        "translation": "преступник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "criminal",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:criminal:adj:b1",
        "word": "criminal",
        "translation": "преступный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "criminal",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:cultural:adj:b1",
        "word": "cultural",
        "translation": "культурный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cultural",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:culture:n:a1",
        "word": "culture",
        "translation": "культура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "culture",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:election:n:b1",
        "word": "election",
        "translation": "выборы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "election",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:freedom:n:b2",
        "word": "freedom",
        "translation": "свобода",
        "example": "",
        "sentenceTranslation": "",
        "answer": "freedom",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:gender:n:b2",
        "word": "gender",
        "translation": "гендер; пол",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gender",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:global:adj:b1",
        "word": "global",
        "translation": "глобальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "global",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:government:n:a2",
        "word": "government",
        "translation": "правительство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "government",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:historical:adj:b1",
        "word": "historical",
        "translation": "исторический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "historical",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:history:n:a1",
        "word": "history",
        "translation": "история",
        "example": "",
        "sentenceTranslation": "",
        "answer": "history",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:human:adj-n:a2",
        "word": "human",
        "translation": "человек; человеческий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "human",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:international:adj:a2",
        "word": "international",
        "translation": "международный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "international",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:judge:n-v:b1",
        "word": "judge",
        "translation": "судья; судить; оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "judge",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:law:n:a2",
        "word": "law",
        "translation": "закон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "law",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:legal:adj:b1",
        "word": "legal",
        "translation": "юридический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "legal",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:military:adj-n:b2",
        "word": "military",
        "translation": "военный; вооружённые силы",
        "example": "",
        "sentenceTranslation": "",
        "answer": "military",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:minister:n:b2",
        "word": "minister",
        "translation": "министр",
        "example": "",
        "sentenceTranslation": "",
        "answer": "minister",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:nation:n:b1",
        "word": "nation",
        "translation": "нация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nation",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:national:adj:a2",
        "word": "national",
        "translation": "национальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "national",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:national:n:b2",
        "word": "national",
        "translation": "национальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "national",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:organization:n:a2",
        "word": "organization",
        "translation": "организация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "organization",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:parliament:n:b2",
        "word": "parliament",
        "translation": "парламент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "parliament",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:peace:n:a2",
        "word": "peace",
        "translation": "мир",
        "example": "",
        "sentenceTranslation": "",
        "answer": "peace",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:policy:n:b1",
        "word": "policy",
        "translation": "политика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "policy",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:political:adj:b1",
        "word": "political",
        "translation": "политический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "political",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:politician:n:b1",
        "word": "politician",
        "translation": "политик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "politician",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:politics:n:b1",
        "word": "politics",
        "translation": "политика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "politics",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:poor:adj:a1",
        "word": "poor",
        "translation": "бедный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poor",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:population:n:a2",
        "word": "population",
        "translation": "население",
        "example": "",
        "sentenceTranslation": "",
        "answer": "population",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:poverty:n:b1",
        "word": "poverty",
        "translation": "бедность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poverty",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:president:n:a2",
        "word": "president",
        "translation": "президент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "president",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:prime:adj:b2",
        "word": "prime",
        "translation": "главный; основной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prime",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:prison:n:a2",
        "word": "prison",
        "translation": "тюрьма",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prison",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:public:adj-n:a2",
        "word": "public",
        "translation": "общественный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "public",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:race:n-v:a2",
        "word": "race",
        "translation": "гонка; раса; соревноваться в скорости",
        "example": "",
        "sentenceTranslation": "",
        "answer": "race",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:race:n:b1",
        "word": "race",
        "translation": "гонка; раса",
        "example": "",
        "sentenceTranslation": "",
        "answer": "race",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:regulation:n:b2",
        "word": "regulation",
        "translation": "регулирование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regulation",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:religion:n:b1",
        "word": "religion",
        "translation": "религия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "religion",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:religious:adj:b1",
        "word": "religious",
        "translation": "религиозный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "religious",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rich:adj:a1",
        "word": "rich",
        "translation": "богатый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rich",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rule:n:a1",
        "word": "rule",
        "translation": "правило",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rule",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rule:v:b1",
        "word": "rule",
        "translation": "править; управлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rule",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:social:adj:a2",
        "word": "social",
        "translation": "социальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "social",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:society:n:a2",
        "word": "society",
        "translation": "общество",
        "example": "",
        "sentenceTranslation": "",
        "answer": "society",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:state:n:a2",
        "word": "state",
        "translation": "состояние; государство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "state",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:state:adj-v:b1",
        "word": "state",
        "translation": "заявлять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "state",
        "level": "B1",
        "partOfSpeech": "прил., гл."
      },
      {
        "id": "oxford:tradition:n:a2",
        "word": "tradition",
        "translation": "традиция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tradition",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:traditional:adj:a2",
        "word": "traditional",
        "translation": "традиционный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "traditional",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:vote:n-v:b1",
        "word": "vote",
        "translation": "голос на выборах; голосовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vote",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:war:n:a2",
        "word": "war",
        "translation": "война",
        "example": "",
        "sentenceTranslation": "",
        "answer": "war",
        "level": "A2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-28",
    "collection": "Oxford 3000",
    "subtopic": "Общество и государство",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Описание и оценка",
    "words": [
      {
        "id": "oxford:able:adj:a2",
        "word": "able",
        "translation": "способный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "able",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:about:adj:b1",
        "word": "about",
        "translation": "примерно; около",
        "example": "",
        "sentenceTranslation": "",
        "answer": "about",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:absolute:adj:b2",
        "word": "absolute",
        "translation": "абсолютный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "absolute",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:academic:adj:b1",
        "word": "academic",
        "translation": "академический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "academic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:acceptable:adj:b2",
        "word": "acceptable",
        "translation": "приемлемый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "acceptable",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:accurate:adj:b2",
        "word": "accurate",
        "translation": "точный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "accurate",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:active:adj:a2",
        "word": "active",
        "translation": "активный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "active",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:actual:adj:b2",
        "word": "actual",
        "translation": "фактический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "actual",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:additional:adj:b2",
        "word": "additional",
        "translation": "дополнительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "additional",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:advanced:adj:b1",
        "word": "advanced",
        "translation": "продвинутый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "advanced",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:afraid:adj:a1",
        "word": "afraid",
        "translation": "испуганный; боящийся",
        "example": "",
        "sentenceTranslation": "",
        "answer": "afraid",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:aged:adj:b1",
        "word": "aged",
        "translation": "в возрасте; пожилой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aged",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:aggressive:adj:b2",
        "word": "aggressive",
        "translation": "агрессивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aggressive",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:alcoholic:adj:b1",
        "word": "alcoholic",
        "translation": "алкоголик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alcoholic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:alive:adj:a2",
        "word": "alive",
        "translation": "жив",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alive",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:alternative:adj:b1",
        "word": "alternative",
        "translation": "альтернативный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "alternative",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:amazed:adj:b1",
        "word": "amazed",
        "translation": "поражен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "amazed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:amazing:adj:a1",
        "word": "amazing",
        "translation": "удивительный; потрясающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "amazing",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ambitious:adj:b1",
        "word": "ambitious",
        "translation": "амбициозный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ambitious",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ancient:adj:a2",
        "word": "ancient",
        "translation": "древний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ancient",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:angry:adj:a1",
        "word": "angry",
        "translation": "злой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "angry",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:annoyed:adj:b1",
        "word": "annoyed",
        "translation": "раздраженный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "annoyed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:annoying:adj:b1",
        "word": "annoying",
        "translation": "раздражающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "annoying",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:annual:adj:b2",
        "word": "annual",
        "translation": "ежегодный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "annual",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:anxious:adj:b2",
        "word": "anxious",
        "translation": "тревожный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "anxious",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:apparent:adj:b2",
        "word": "apparent",
        "translation": "очевидный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apparent",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:appropriate:adj:b2",
        "word": "appropriate",
        "translation": "соответствующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "appropriate",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:armed:adj:b2",
        "word": "armed",
        "translation": "вооруженный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "armed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:artificial:adj:b2",
        "word": "artificial",
        "translation": "искусственный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "artificial",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ashamed:adj:b2",
        "word": "ashamed",
        "translation": "пристыженный; испытывающий стыд",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ashamed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:asleep:adj:a2",
        "word": "asleep",
        "translation": "спит",
        "example": "",
        "sentenceTranslation": "",
        "answer": "asleep",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:assistant:n-adj:a2",
        "word": "assistant",
        "translation": "помощник; вспомогательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "assistant",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:associated:adj:b2",
        "word": "associated",
        "translation": "связанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "associated",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:attractive:adj:a2",
        "word": "attractive",
        "translation": "привлекательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "attractive",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:audio:n-adj:a2",
        "word": "audio",
        "translation": "аудио; звуковой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "audio",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:available:adj:a2",
        "word": "available",
        "translation": "доступен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "available",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:aware:adj:b1",
        "word": "aware",
        "translation": "осознающий; осведомлённый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "aware",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:awful:adj:a2",
        "word": "awful",
        "translation": "ужасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "awful",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:bad:adj:a1",
        "word": "bad",
        "translation": "плохой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bad",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:based:adj:a2",
        "word": "based",
        "translation": "основанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "based",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:basic:adj:b1",
        "word": "basic",
        "translation": "базовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "basic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:beautiful:adj:a1",
        "word": "beautiful",
        "translation": "красивый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beautiful",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:bent:adj:b2",
        "word": "bent",
        "translation": "согнутый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bent",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:best:adj:a1",
        "word": "best",
        "translation": "лучший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "best",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:better:adj:a1",
        "word": "better",
        "translation": "лучше; более хороший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "better",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:big:adj:a1",
        "word": "big",
        "translation": "большой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "big",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:bitter:adj:b2",
        "word": "bitter",
        "translation": "горький",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bitter",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:black:adj-n:a1",
        "word": "black",
        "translation": "черный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "black",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:blind:adj:b2",
        "word": "blind",
        "translation": "слепой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blind",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:blonde:adj:a1",
        "word": "blonde",
        "translation": "светловолосый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blonde",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:blue:adj-n:a1",
        "word": "blue",
        "translation": "синий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "blue",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:bored:adj:a1",
        "word": "bored",
        "translation": "скучающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bored",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:boring:adj:a1",
        "word": "boring",
        "translation": "скучный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boring",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:bottom:n-adj:a2",
        "word": "bottom",
        "translation": "дно; нижний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bottom",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:brave:adj:b1",
        "word": "brave",
        "translation": "храбрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brave",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:brief:adj:b2",
        "word": "brief",
        "translation": "краткий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brief",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:bright:adj:a2",
        "word": "bright",
        "translation": "яркий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bright",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:brilliant:adj:a2",
        "word": "brilliant",
        "translation": "блестящий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brilliant",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:broad:adj:b2",
        "word": "broad",
        "translation": "широкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "broad",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:brown:adj-n:a1",
        "word": "brown",
        "translation": "коричневый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "brown",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:busy:adj:a1",
        "word": "busy",
        "translation": "занят",
        "example": "",
        "sentenceTranslation": "",
        "answer": "busy",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:capable:adj:b2",
        "word": "capable",
        "translation": "способный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "capable",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:careful:adj:a2",
        "word": "careful",
        "translation": "осторожный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "careful",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:careless:adj:b1",
        "word": "careless",
        "translation": "неосторожный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "careless",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:central:adj:b1",
        "word": "central",
        "translation": "центральный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "central",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:certain:adj:a2",
        "word": "certain",
        "translation": "уверенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "certain",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:characteristic:n-adj:b2",
        "word": "characteristic",
        "translation": "характеристика; характерный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "characteristic",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:cheerful:adj:b1",
        "word": "cheerful",
        "translation": "веселый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cheerful",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:chemical:adj-n:b1",
        "word": "chemical",
        "translation": "химическое вещество; химический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chemical",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:chief:adj-n:b2",
        "word": "chief",
        "translation": "начальник; главный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chief",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:civil:adj:b2",
        "word": "civil",
        "translation": "гражданский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "civil",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:classic:adj-n:b2",
        "word": "classic",
        "translation": "классический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "classic",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:classical:adj:a2",
        "word": "classical",
        "translation": "классический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "classical",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:clear:adj:a2",
        "word": "clear",
        "translation": "ясный; понятный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clear",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:clever:adj:a2",
        "word": "clever",
        "translation": "умный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "clever",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:close:adj:a2",
        "word": "close",
        "translation": "близкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "close",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:closed:adj:a2",
        "word": "closed",
        "translation": "закрытый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "closed",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:coloured:adj:b1",
        "word": "coloured",
        "translation": "цветной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "coloured",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:comfortable:adj:a2",
        "word": "comfortable",
        "translation": "удобный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "comfortable",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:commercial:adj-n:b1",
        "word": "commercial",
        "translation": "коммерческий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "commercial",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:common:adj:a1",
        "word": "common",
        "translation": "общий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "common",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:competitive:adj:b1",
        "word": "competitive",
        "translation": "конкурентоспособный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "competitive",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:complex:adj:b1",
        "word": "complex",
        "translation": "сложный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complex",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:complicated:adj:b2",
        "word": "complicated",
        "translation": "сложный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "complicated",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:concerned:adj:b2",
        "word": "concerned",
        "translation": "заинтересованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "concerned",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:confident:adj:b1",
        "word": "confident",
        "translation": "уверенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confident",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:confused:adj:b1",
        "word": "confused",
        "translation": "смущенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confused",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:confusing:adj:b2",
        "word": "confusing",
        "translation": "сбивающий с толку",
        "example": "",
        "sentenceTranslation": "",
        "answer": "confusing",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:connected:adj:a2",
        "word": "connected",
        "translation": "подключен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "connected",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:conscious:adj:b2",
        "word": "conscious",
        "translation": "сознательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conscious",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:conservative:adj-n:b2",
        "word": "conservative",
        "translation": "консервативный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "conservative",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:consistent:adj:b2",
        "word": "consistent",
        "translation": "последовательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "consistent",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:constant:adj:b2",
        "word": "constant",
        "translation": "постоянный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "constant",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:contemporary:adj:b2",
        "word": "contemporary",
        "translation": "современный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "contemporary",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:continuous:adj:b1",
        "word": "continuous",
        "translation": "непрерывный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "continuous",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:convenient:adj:b1",
        "word": "convenient",
        "translation": "удобный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "convenient",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:convinced:adj:b2",
        "word": "convinced",
        "translation": "убежденный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "convinced",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:core:n-adj:b2",
        "word": "core",
        "translation": "ядро; основной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "core",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:corporate:adj:b2",
        "word": "corporate",
        "translation": "корпоративный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "corporate",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:covered:adj:b1",
        "word": "covered",
        "translation": "покрытый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "covered",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:crazy:adj:a2",
        "word": "crazy",
        "translation": "сумасшедший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crazy",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:creative:adj:a2",
        "word": "creative",
        "translation": "творческий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "creative",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:critical:adj:b2",
        "word": "critical",
        "translation": "критический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "critical",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:crowded:adj:a2",
        "word": "crowded",
        "translation": "многолюдный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crowded",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:crucial:adj:b2",
        "word": "crucial",
        "translation": "решающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crucial",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:cruel:adj:b1",
        "word": "cruel",
        "translation": "жестокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cruel",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:curly:adj:a2",
        "word": "curly",
        "translation": "кудрявый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "curly",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:current:adj:b1",
        "word": "current",
        "translation": "текущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "current",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:curved:adj:b2",
        "word": "curved",
        "translation": "изогнутый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "curved",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dangerous:adj:a1",
        "word": "dangerous",
        "translation": "опасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dangerous",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dark:adj:a1",
        "word": "dark",
        "translation": "тёмный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dark",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dead:adj:a2",
        "word": "dead",
        "translation": "мертвый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dead",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dear:adj:a1",
        "word": "dear",
        "translation": "дорогой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dear",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:decent:adj:b2",
        "word": "decent",
        "translation": "приличный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "decent",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:deep:adj:a2",
        "word": "deep",
        "translation": "глубокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deep",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:definite:adj:b1",
        "word": "definite",
        "translation": "определенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "definite",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:deliberate:adj:b2",
        "word": "deliberate",
        "translation": "преднамеренный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "deliberate",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:delicious:adj:a1",
        "word": "delicious",
        "translation": "вкусный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "delicious",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:delighted:adj:b2",
        "word": "delighted",
        "translation": "в восторге",
        "example": "",
        "sentenceTranslation": "",
        "answer": "delighted",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:depressed:adj:b2",
        "word": "depressed",
        "translation": "депрессивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "depressed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:depressing:adj:b2",
        "word": "depressing",
        "translation": "удручающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "depressing",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:desperate:adj:b2",
        "word": "desperate",
        "translation": "отчаянный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "desperate",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:detailed:adj:b2",
        "word": "detailed",
        "translation": "подробный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "detailed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:determined:adj:b1",
        "word": "determined",
        "translation": "решительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "determined",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:different:adj:a1",
        "word": "different",
        "translation": "разные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "different",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:difficult:adj:a1",
        "word": "difficult",
        "translation": "трудный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "difficult",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:direct:adj:a2",
        "word": "direct",
        "translation": "прямой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "direct",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dirty:adj:a1",
        "word": "dirty",
        "translation": "грязный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dirty",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:disappointed:adj:b1",
        "word": "disappointed",
        "translation": "разочарован",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disappointed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:disappointing:adj:b1",
        "word": "disappointing",
        "translation": "разочаровывающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disappointing",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dishonest:adj:b2",
        "word": "dishonest",
        "translation": "нечестный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dishonest",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:divorced:adj:a2",
        "word": "divorced",
        "translation": "в разводе",
        "example": "",
        "sentenceTranslation": "",
        "answer": "divorced",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:domestic:adj:b2",
        "word": "domestic",
        "translation": "внутренний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "domestic",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:downstairs:adj:a2",
        "word": "downstairs",
        "translation": "внизу",
        "example": "",
        "sentenceTranslation": "",
        "answer": "downstairs",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dramatic:adj:b2",
        "word": "dramatic",
        "translation": "драматический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dramatic",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:dressed:adj:b1",
        "word": "dressed",
        "translation": "одет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dressed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:drunk:adj:b1",
        "word": "drunk",
        "translation": "пьяный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "drunk",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:due:adj:b1",
        "word": "due",
        "translation": "должный; ожидаемый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "due",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:eastern:adj:b1",
        "word": "eastern",
        "translation": "восточный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "eastern",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:easy:adj:a1",
        "word": "easy",
        "translation": "лёгкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "easy",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:educated:adj:b1",
        "word": "educated",
        "translation": "образованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "educated",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:effective:adj:b1",
        "word": "effective",
        "translation": "эффективный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "effective",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:efficient:adj:b2",
        "word": "efficient",
        "translation": "эффективный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "efficient",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:embarrassed:adj:b1",
        "word": "embarrassed",
        "translation": "смущенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "embarrassed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:embarrassing:adj:b1",
        "word": "embarrassing",
        "translation": "смущающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "embarrassing",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:emotional:adj:b2",
        "word": "emotional",
        "translation": "эмоциональный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "emotional",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:empty:adj:a2",
        "word": "empty",
        "translation": "пустой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "empty",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:engaged:adj:b1",
        "word": "engaged",
        "translation": "помолвлен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "engaged",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:enormous:adj:a2",
        "word": "enormous",
        "translation": "огромный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enormous",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:enthusiastic:adj:b2",
        "word": "enthusiastic",
        "translation": "восторженный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "enthusiastic",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:entire:adj:b2",
        "word": "entire",
        "translation": "весь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "entire",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:essential:adj:b1",
        "word": "essential",
        "translation": "существенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "essential",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ethical:adj:b2",
        "word": "ethical",
        "translation": "этический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ethical",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:even:adj:b2",
        "word": "even",
        "translation": "ровный; одинаковый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "even",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:everyday:adj:a2",
        "word": "everyday",
        "translation": "каждый день",
        "example": "",
        "sentenceTranslation": "",
        "answer": "everyday",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:evil:adj-n:b2",
        "word": "evil",
        "translation": "зло; злой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "evil",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:exact:adj:a2",
        "word": "exact",
        "translation": "точный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exact",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:excellent:adj:a2",
        "word": "excellent",
        "translation": "отличный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "excellent",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:excited:adj:a1",
        "word": "excited",
        "translation": "взволнованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "excited",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:exciting:adj:a1",
        "word": "exciting",
        "translation": "захватывающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exciting",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:executive:n-adj:b2",
        "word": "executive",
        "translation": "руководитель; исполнительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "executive",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:expected:adj:b1",
        "word": "expected",
        "translation": "ожидаемый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expected",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:experienced:adj:b1",
        "word": "experienced",
        "translation": "опытный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "experienced",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:external:adj:b2",
        "word": "external",
        "translation": "внешний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "external",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:extra:adj:a1",
        "word": "extra",
        "translation": "дополнительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extra",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:extraordinary:adj:b2",
        "word": "extraordinary",
        "translation": "необыкновенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extraordinary",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:extreme:adj:a2",
        "word": "extreme",
        "translation": "крайний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "extreme",
        "level": "A2",
        "partOfSpeech": "прил."
      }
    ],
    "id": "oxford-extra-29",
    "collection": "Oxford 3000",
    "subtopic": "Признаки A–E",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Описание и оценка",
    "words": [
      {
        "id": "oxford:fair:adj:a2",
        "word": "fair",
        "translation": "справедливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fair",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:false:adj:a1",
        "word": "false",
        "translation": "ложный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "false",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:familiar:adj:b1",
        "word": "familiar",
        "translation": "знакомый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "familiar",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:famous:adj:a1",
        "word": "famous",
        "translation": "знаменитый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "famous",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fantastic:adj:a1",
        "word": "fantastic",
        "translation": "фантастический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fantastic",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:far:adj:b1",
        "word": "far",
        "translation": "далёкий; далеко",
        "example": "",
        "sentenceTranslation": "",
        "answer": "far",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fascinating:adj:b1",
        "word": "fascinating",
        "translation": "увлекательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fascinating",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fashionable:adj:b1",
        "word": "fashionable",
        "translation": "модный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fashionable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fat:adj:a1",
        "word": "fat",
        "translation": "толстый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fat",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:favourite:adj-n:a1",
        "word": "favourite",
        "translation": "любимый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "favourite",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:fellow:adj:b2",
        "word": "fellow",
        "translation": "товарищ; коллега",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fellow",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:female:adj-n:a2",
        "word": "female",
        "translation": "женщина; женский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "female",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:final:adj:a1",
        "word": "final",
        "translation": "финальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "final",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fine:adj:a1",
        "word": "fine",
        "translation": "хороший; в порядке",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fine",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fixed:adj:b1",
        "word": "fixed",
        "translation": "фиксированный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fixed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:flexible:adj:b2",
        "word": "flexible",
        "translation": "гибкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flexible",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:flying:n-adj:a2",
        "word": "flying",
        "translation": "летающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flying",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:folding:adj:b2",
        "word": "folding",
        "translation": "складной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "folding",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:folk:n-adj:b1",
        "word": "folk",
        "translation": "народный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "folk",
        "level": "B1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:following:adj:a2",
        "word": "following",
        "translation": "следующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "following",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:foreign:adj:a2",
        "word": "foreign",
        "translation": "иностранный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "foreign",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:formal:adj:a2",
        "word": "formal",
        "translation": "формальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "formal",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:former:adj:b2",
        "word": "former",
        "translation": "бывший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "former",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:forward:adj:b2",
        "word": "forward",
        "translation": "вперед",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forward",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:free:adj:a1",
        "word": "free",
        "translation": "свободный; бесплатный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "free",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:friendly:adj:a1",
        "word": "friendly",
        "translation": "дружелюбный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "friendly",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:frightened:adj:b1",
        "word": "frightened",
        "translation": "испуганный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frightened",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:frightening:adj:b1",
        "word": "frightening",
        "translation": "пугающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frightening",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:front:n-adj:a1",
        "word": "front",
        "translation": "передняя часть; передний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "front",
        "level": "A1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:frozen:adj:b1",
        "word": "frozen",
        "translation": "замороженный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "frozen",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:full:adj:a1",
        "word": "full",
        "translation": "полный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "full",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:fundamental:adj:b2",
        "word": "fundamental",
        "translation": "фундаментальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fundamental",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:funny:adj:a1",
        "word": "funny",
        "translation": "смешной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "funny",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:further:adj:a2",
        "word": "further",
        "translation": "дальше",
        "example": "",
        "sentenceTranslation": "",
        "answer": "further",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:general:adj:a2",
        "word": "general",
        "translation": "общий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "general",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:generous:adj:b1",
        "word": "generous",
        "translation": "щедрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "generous",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:gentle:adj:b1",
        "word": "gentle",
        "translation": "нежный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gentle",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:giant:adj-n:b1",
        "word": "giant",
        "translation": "гигант; гигантский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "giant",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:glad:adj:b1",
        "word": "glad",
        "translation": "рад",
        "example": "",
        "sentenceTranslation": "",
        "answer": "glad",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:gold:n-adj:a2",
        "word": "gold",
        "translation": "золото; золотой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "gold",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:good:adj:a1",
        "word": "good",
        "translation": "хороший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "good",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:grand:adj:b2",
        "word": "grand",
        "translation": "грандиозный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grand",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:grateful:adj:b1",
        "word": "grateful",
        "translation": "благодарен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grateful",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:great:adj:a1",
        "word": "great",
        "translation": "отличный; великий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "great",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:green:adj-n:a1",
        "word": "green",
        "translation": "зеленый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "green",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:grey:adj-n:a1",
        "word": "grey",
        "translation": "серый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grey",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:guilty:adj:b1",
        "word": "guilty",
        "translation": "виновен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "guilty",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:happy:adj:a1",
        "word": "happy",
        "translation": "счастливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "happy",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:harmful:adj:b2",
        "word": "harmful",
        "translation": "вредный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "harmful",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:heavy:adj:a2",
        "word": "heavy",
        "translation": "тяжелый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "heavy",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:helpful:adj:a2",
        "word": "helpful",
        "translation": "полезный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "helpful",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:high:adj:a1",
        "word": "high",
        "translation": "высокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "high",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:historic:adj:b1",
        "word": "historic",
        "translation": "исторический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "historic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:hollow:adj:b2",
        "word": "hollow",
        "translation": "полый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hollow",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:holy:adj:b2",
        "word": "holy",
        "translation": "святой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "holy",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:honest:adj:b1",
        "word": "honest",
        "translation": "честный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "honest",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:horrible:adj:b1",
        "word": "horrible",
        "translation": "ужасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "horrible",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:huge:adj:a2",
        "word": "huge",
        "translation": "огромный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "huge",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:humorous:adj:b2",
        "word": "humorous",
        "translation": "юмористический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "humorous",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ideal:adj:a2",
        "word": "ideal",
        "translation": "идеальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ideal",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:illegal:adj:b1",
        "word": "illegal",
        "translation": "незаконный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "illegal",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:imaginary:adj:b1",
        "word": "imaginary",
        "translation": "воображаемый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "imaginary",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:immediate:adj:b1",
        "word": "immediate",
        "translation": "немедленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "immediate",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:impatient:adj:b2",
        "word": "impatient",
        "translation": "нетерпеливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impatient",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:important:adj:a1",
        "word": "important",
        "translation": "важный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "important",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:impossible:adj:a2",
        "word": "impossible",
        "translation": "невозможный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impossible",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:impressed:adj:b2",
        "word": "impressed",
        "translation": "впечатлен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impressed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:impressive:adj:b1",
        "word": "impressive",
        "translation": "впечатляющий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "impressive",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:included:adj:a2",
        "word": "included",
        "translation": "включённый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "included",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:incredible:adj:a2",
        "word": "incredible",
        "translation": "невероятный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "incredible",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:independent:adj:a2",
        "word": "independent",
        "translation": "независимый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "independent",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:indirect:adj:b1",
        "word": "indirect",
        "translation": "косвенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "indirect",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:individual:n-adj:a2",
        "word": "individual",
        "translation": "человек; отдельный; индивидуальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "individual",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:indoor:adj:b1",
        "word": "indoor",
        "translation": "крытый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "indoor",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:industrial:adj:b2",
        "word": "industrial",
        "translation": "промышленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "industrial",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:informal:adj:a2",
        "word": "informal",
        "translation": "неофициальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "informal",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:initial:adj:b2",
        "word": "initial",
        "translation": "начальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "initial",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:inner:adj:b2",
        "word": "inner",
        "translation": "внутренний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "inner",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:innocent:adj:b1",
        "word": "innocent",
        "translation": "невинный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "innocent",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:intelligent:adj:a2",
        "word": "intelligent",
        "translation": "умный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intelligent",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:intended:adj:b2",
        "word": "intended",
        "translation": "предназначенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intended",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:intense:adj:b2",
        "word": "intense",
        "translation": "интенсивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "intense",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:interested:adj:a1",
        "word": "interested",
        "translation": "заинтересованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interested",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:interesting:adj:a1",
        "word": "interesting",
        "translation": "интересный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interesting",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:internal:adj:b2",
        "word": "internal",
        "translation": "внутренний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "internal",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:involved:adj:b1",
        "word": "involved",
        "translation": "вовлеченный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "involved",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:junior:adj:b2",
        "word": "junior",
        "translation": "младший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "junior",
        "level": "B2",
        "partOfSpeech": "прил."
      }
    ],
    "id": "oxford-extra-30",
    "collection": "Oxford 3000",
    "subtopic": "Признаки F–J",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Описание и оценка",
    "words": [
      {
        "id": "oxford:keen:adj:b1",
        "word": "keen",
        "translation": "увлеченный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "keen",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:kind:adj:b1",
        "word": "kind",
        "translation": "добрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "kind",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:large:adj:a1",
        "word": "large",
        "translation": "большой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "large",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:later:adj:a2",
        "word": "later",
        "translation": "более поздний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "later",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:latest:adj:b1",
        "word": "latest",
        "translation": "последний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "latest",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:lazy:adj:a2",
        "word": "lazy",
        "translation": "ленивый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lazy",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:leading:adj:b1",
        "word": "leading",
        "translation": "ведущий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leading",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:level:adj:b1",
        "word": "level",
        "translation": "ровный; горизонтальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "level",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:likely:adj:a2",
        "word": "likely",
        "translation": "вероятный; вероятно",
        "example": "",
        "sentenceTranslation": "",
        "answer": "likely",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:limited:adj:b2",
        "word": "limited",
        "translation": "ограниченный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "limited",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:liquid:n-adj:b1",
        "word": "liquid",
        "translation": "жидкость; жидкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "liquid",
        "level": "B1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:lively:adj:b2",
        "word": "lively",
        "translation": "живой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lively",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:living:adj-n:b1",
        "word": "living",
        "translation": "живой; проживание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "living",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:local:adj:a1",
        "word": "local",
        "translation": "местный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "local",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:located:adj:b1",
        "word": "located",
        "translation": "расположен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "located",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:logical:adj:b2",
        "word": "logical",
        "translation": "логичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "logical",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:lonely:adj:b1",
        "word": "lonely",
        "translation": "одинокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lonely",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:loose:adj:b2",
        "word": "loose",
        "translation": "свободный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "loose",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:lost:adj:a2",
        "word": "lost",
        "translation": "потерянный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lost",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:lovely:adj:a2",
        "word": "lovely",
        "translation": "прекрасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lovely",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:lucky:adj:a2",
        "word": "lucky",
        "translation": "удачливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lucky",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:mad:adj:b1",
        "word": "mad",
        "translation": "безумный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mad",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:magic:n-adj:b1",
        "word": "magic",
        "translation": "магия; волшебный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "magic",
        "level": "B1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:main:adj:a1",
        "word": "main",
        "translation": "главный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "main",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:major:adj:a2",
        "word": "major",
        "translation": "крупный; важный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "major",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:male:adj-n:a2",
        "word": "male",
        "translation": "мужчина; мужской",
        "example": "",
        "sentenceTranslation": "",
        "answer": "male",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:mass:n-adj:b2",
        "word": "mass",
        "translation": "масса; массовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mass",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:massive:adj:b2",
        "word": "massive",
        "translation": "массивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "massive",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:matching:adj:b2",
        "word": "matching",
        "translation": "соответствующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "matching",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:material:adj:b2",
        "word": "material",
        "translation": "существенный; материальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "material",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:maximum:adj-n:b2",
        "word": "maximum",
        "translation": "максимум; максимальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "maximum",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:medium:adj:b1",
        "word": "medium",
        "translation": "средний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "medium",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:middle:n-adj:a2",
        "word": "middle",
        "translation": "середина; средний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "middle",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:mild:adj:b1",
        "word": "mild",
        "translation": "мягкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mild",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:minimum:adj-n:b2",
        "word": "minimum",
        "translation": "минимум; минимальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "minimum",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:minor:adj:b2",
        "word": "minor",
        "translation": "несовершеннолетний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "minor",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:missing:adj:a2",
        "word": "missing",
        "translation": "отсутствует",
        "example": "",
        "sentenceTranslation": "",
        "answer": "missing",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:mixed:adj:b2",
        "word": "mixed",
        "translation": "смешанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mixed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:modern:adj:a1",
        "word": "modern",
        "translation": "современный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "modern",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:moral:adj-n:b2",
        "word": "moral",
        "translation": "моральный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "moral",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:motor:n-adj:b2",
        "word": "motor",
        "translation": "мотор; моторный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "motor",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:multiple:adj:b2",
        "word": "multiple",
        "translation": "множественный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "multiple",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:mysterious:adj:b2",
        "word": "mysterious",
        "translation": "загадочный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mysterious",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:narrative:n-adj:b1",
        "word": "narrative",
        "translation": "повествование; повествовательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "narrative",
        "level": "B1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:narrow:adj:a2",
        "word": "narrow",
        "translation": "узкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "narrow",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:native:adj-n:b1",
        "word": "native",
        "translation": "уроженец; родной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "native",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:neat:adj:b2",
        "word": "neat",
        "translation": "аккуратный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "neat",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:necessary:adj:a2",
        "word": "necessary",
        "translation": "необходимый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "necessary",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:negative:adj:a1",
        "word": "negative",
        "translation": "отрицательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "negative",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:nervous:adj:a2",
        "word": "nervous",
        "translation": "нервный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nervous",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:new:adj:a1",
        "word": "new",
        "translation": "новый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "new",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:nice:adj:a1",
        "word": "nice",
        "translation": "приятный; милый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nice",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:noisy:adj:a2",
        "word": "noisy",
        "translation": "шумный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "noisy",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:normal:adj:a2",
        "word": "normal",
        "translation": "нормальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "normal",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:northern:adj:b1",
        "word": "northern",
        "translation": "северный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "northern",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:nuclear:adj:b1",
        "word": "nuclear",
        "translation": "ядерный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nuclear",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:numerous:adj:b2",
        "word": "numerous",
        "translation": "многочисленные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "numerous",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:objective:n-adj:b2",
        "word": "objective",
        "translation": "цель; объективный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "objective",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:obvious:adj:b1",
        "word": "obvious",
        "translation": "очевидный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "obvious",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:odd:adj:b1",
        "word": "odd",
        "translation": "странный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "odd",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:offensive:adj:b2",
        "word": "offensive",
        "translation": "оскорбительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "offensive",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:official:adj:b1",
        "word": "official",
        "translation": "официальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "official",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:old-fashioned:adj:b1",
        "word": "old-fashioned",
        "translation": "старомодный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "old-fashioned",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:opposed:adj:b2",
        "word": "opposed",
        "translation": "против",
        "example": "",
        "sentenceTranslation": "",
        "answer": "opposed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ordinary:adj:a2",
        "word": "ordinary",
        "translation": "обычный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ordinary",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:organized:adj:b1",
        "word": "organized",
        "translation": "организованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "organized",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:original:adj:a2",
        "word": "original",
        "translation": "оригинальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "original",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:outdoor:adj:b1",
        "word": "outdoor",
        "translation": "открытый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outdoor",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:outer:adj:b2",
        "word": "outer",
        "translation": "внешний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "outer",
        "level": "B2",
        "partOfSpeech": "прил."
      }
    ],
    "id": "oxford-extra-31",
    "collection": "Oxford 3000",
    "subtopic": "Признаки K–O",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Описание и оценка",
    "words": [
      {
        "id": "oxford:pale:adj:b1",
        "word": "pale",
        "translation": "бледный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pale",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:particular:adj:a2",
        "word": "particular",
        "translation": "конкретный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "particular",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:peaceful:adj:b1",
        "word": "peaceful",
        "translation": "мирный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "peaceful",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:perfect:adj:a1",
        "word": "perfect",
        "translation": "идеальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "perfect",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:permanent:adj:b2",
        "word": "permanent",
        "translation": "постоянный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "permanent",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:personal:adj:a1",
        "word": "personal",
        "translation": "личный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "personal",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:pink:adj-n:a1",
        "word": "pink",
        "translation": "розовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pink",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:plain:adj:b2",
        "word": "plain",
        "translation": "простой; однотонный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plain",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:plastic:n-adj:a2",
        "word": "plastic",
        "translation": "пластик; пластиковый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plastic",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:pleasant:adj:b1",
        "word": "pleasant",
        "translation": "приятный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pleasant",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:pleased:adj:a2",
        "word": "pleased",
        "translation": "доволен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pleased",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:pointed:adj:b2",
        "word": "pointed",
        "translation": "заостренный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pointed",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:poisonous:adj:b1",
        "word": "poisonous",
        "translation": "ядовитый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "poisonous",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:polite:adj:a2",
        "word": "polite",
        "translation": "вежливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "polite",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:pop:n-adj:a2",
        "word": "pop",
        "translation": "поп",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pop",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:popular:adj:a1",
        "word": "popular",
        "translation": "популярный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "popular",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:positive:adj:a1",
        "word": "positive",
        "translation": "позитивный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "positive",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:possible:adj:a1",
        "word": "possible",
        "translation": "возможный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "possible",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:potential:adj-n:b2",
        "word": "potential",
        "translation": "потенциал; потенциальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "potential",
        "level": "B2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:powerful:adj:b1",
        "word": "powerful",
        "translation": "мощный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "powerful",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:practical:adj:b1",
        "word": "practical",
        "translation": "практичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "practical",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:prepared:adj:b1",
        "word": "prepared",
        "translation": "подготовленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "prepared",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:primary:adj:b1",
        "word": "primary",
        "translation": "первичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "primary",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:private:adj:b1",
        "word": "private",
        "translation": "частный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "private",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:proper:adj:b1",
        "word": "proper",
        "translation": "надлежащий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "proper",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:proud:adj:b1",
        "word": "proud",
        "translation": "гордый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "proud",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:pure:adj:b2",
        "word": "pure",
        "translation": "чистый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pure",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:purple:adj-n:a1",
        "word": "purple",
        "translation": "фиолетовый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "purple",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:qualified:adj:b1",
        "word": "qualified",
        "translation": "квалифицированный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "qualified",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:quick:adj:a1",
        "word": "quick",
        "translation": "быстрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quick",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:quiet:adj:a1",
        "word": "quiet",
        "translation": "тихий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "quiet",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rapid:adj:b2",
        "word": "rapid",
        "translation": "быстрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rapid",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rare:adj:b1",
        "word": "rare",
        "translation": "редкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rare",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:raw:adj:b2",
        "word": "raw",
        "translation": "сырой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "raw",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:ready:adj:a1",
        "word": "ready",
        "translation": "готов",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ready",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:real:adj:a1",
        "word": "real",
        "translation": "настоящий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "real",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:realistic:adj:b2",
        "word": "realistic",
        "translation": "реалистичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "realistic",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:reasonable:adj:b2",
        "word": "reasonable",
        "translation": "разумный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reasonable",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:recent:adj:a2",
        "word": "recent",
        "translation": "недавний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recent",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:red:adj-n:a1",
        "word": "red",
        "translation": "красный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "red",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:regional:adj:b2",
        "word": "regional",
        "translation": "региональный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regional",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:regular:adj:a2",
        "word": "regular",
        "translation": "регулярный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "regular",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:related:adj:b1",
        "word": "related",
        "translation": "связанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "related",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:relaxed:adj:b1",
        "word": "relaxed",
        "translation": "расслабленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relaxed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:relaxing:adj:b1",
        "word": "relaxing",
        "translation": "расслабляющий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relaxing",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:relevant:adj:b2",
        "word": "relevant",
        "translation": "актуальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "relevant",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:reliable:adj:b1",
        "word": "reliable",
        "translation": "надежный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reliable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:remote:adj:b1",
        "word": "remote",
        "translation": "удаленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "remote",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:repeated:adj:b1",
        "word": "repeated",
        "translation": "повторенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "repeated",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:representative:n-adj:b2",
        "word": "representative",
        "translation": "представитель; представительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "representative",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:resident:n-adj:b2",
        "word": "resident",
        "translation": "житель; постоянно проживающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "resident",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:responsible:adj:b1",
        "word": "responsible",
        "translation": "ответственный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "responsible",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:retired:adj:b1",
        "word": "retired",
        "translation": "вышедший на пенсию",
        "example": "",
        "sentenceTranslation": "",
        "answer": "retired",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:romantic:adj:b1",
        "word": "romantic",
        "translation": "романтический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "romantic",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rough:adj:b1",
        "word": "rough",
        "translation": "грубый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rough",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:routine:adj:b2",
        "word": "routine",
        "translation": "обычный; повседневный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "routine",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:royal:adj:b1",
        "word": "royal",
        "translation": "королевский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "royal",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rubber:n-adj:b2",
        "word": "rubber",
        "translation": "резина; резиновый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rubber",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:rude:adj:a2",
        "word": "rude",
        "translation": "грубый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rude",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:rural:adj:b2",
        "word": "rural",
        "translation": "сельский",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rural",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sad:adj:a1",
        "word": "sad",
        "translation": "грустный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sad",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:safe:adj:a2",
        "word": "safe",
        "translation": "безопасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "safe",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:satisfied:adj:b2",
        "word": "satisfied",
        "translation": "удовлетворен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "satisfied",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:scared:adj:a2",
        "word": "scared",
        "translation": "напуган",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scared",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:scary:adj:a2",
        "word": "scary",
        "translation": "страшный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scary",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:secondary:adj:b1",
        "word": "secondary",
        "translation": "вторичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "secondary",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:secret:adj-n:a2",
        "word": "secret",
        "translation": "секрет; тайный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "secret",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:senior:adj:b2",
        "word": "senior",
        "translation": "старший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "senior",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sensible:adj:b1",
        "word": "sensible",
        "translation": "разумный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sensible",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sensitive:adj:b2",
        "word": "sensitive",
        "translation": "чувствительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sensitive",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:separate:adj:a2",
        "word": "separate",
        "translation": "отдельный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "separate",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:serious:adj:a2",
        "word": "serious",
        "translation": "серьезный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "serious",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:severe:adj:b2",
        "word": "severe",
        "translation": "суровый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "severe",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sexual:adj:b1",
        "word": "sexual",
        "translation": "сексуальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sexual",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:shallow:adj:b2",
        "word": "shallow",
        "translation": "мелкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shallow",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sharp:adj:b1",
        "word": "sharp",
        "translation": "острый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sharp",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:shiny:adj:b1",
        "word": "shiny",
        "translation": "блестящий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shiny",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:shocked:adj:b2",
        "word": "shocked",
        "translation": "шокирован",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shocked",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:short:adj:a1",
        "word": "short",
        "translation": "короткий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "short",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:shy:adj:b1",
        "word": "shy",
        "translation": "застенчивый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "shy",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:significant:adj:b2",
        "word": "significant",
        "translation": "значительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "significant",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:silent:adj:b1",
        "word": "silent",
        "translation": "тихий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "silent",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:silly:adj:b1",
        "word": "silly",
        "translation": "глупый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "silly",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:silver:n-adj:a2",
        "word": "silver",
        "translation": "серебро; серебряный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "silver",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:similar:adj:a1",
        "word": "similar",
        "translation": "похожий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "similar",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:simple:adj:a2",
        "word": "simple",
        "translation": "простой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "simple",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sincere:adj:b2",
        "word": "sincere",
        "translation": "искренний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sincere",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:slight:adj:b2",
        "word": "slight",
        "translation": "легкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slight",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:slow:adj:a1",
        "word": "slow",
        "translation": "медленный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "slow",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:small:adj:a1",
        "word": "small",
        "translation": "маленький",
        "example": "",
        "sentenceTranslation": "",
        "answer": "small",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:smart:adj:b1",
        "word": "smart",
        "translation": "умный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smart",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:smooth:adj:b1",
        "word": "smooth",
        "translation": "гладкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smooth",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:soft:adj:a2",
        "word": "soft",
        "translation": "мягкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "soft",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:solar:adj:b2",
        "word": "solar",
        "translation": "солнечный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "solar",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:solid:adj-n:b1",
        "word": "solid",
        "translation": "твердый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "solid",
        "level": "B1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:southern:adj:b1",
        "word": "southern",
        "translation": "южный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "southern",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:special:adj:a1",
        "word": "special",
        "translation": "особенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "special",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:specialist:n-adj:b2",
        "word": "specialist",
        "translation": "специалист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "specialist",
        "level": "B2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:specific:adj:a2",
        "word": "specific",
        "translation": "конкретный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "specific",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:spicy:adj:b1",
        "word": "spicy",
        "translation": "пряный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spicy",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:spiritual:adj:b2",
        "word": "spiritual",
        "translation": "духовный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spiritual",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:spoken:adj:b1",
        "word": "spoken",
        "translation": "разговорный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spoken",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:stable:adj:b2",
        "word": "stable",
        "translation": "стабильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stable",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:standard:n-adj:b1",
        "word": "standard",
        "translation": "стандарт; стандартный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "standard",
        "level": "B1",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:steady:adj:b2",
        "word": "steady",
        "translation": "устойчивый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "steady",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:steep:adj:b2",
        "word": "steep",
        "translation": "крутой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "steep",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sticky:adj:b2",
        "word": "sticky",
        "translation": "липкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sticky",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:strange:adj:a2",
        "word": "strange",
        "translation": "странный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strange",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:strict:adj:b2",
        "word": "strict",
        "translation": "строгий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strict",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:strong:adj:a1",
        "word": "strong",
        "translation": "сильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "strong",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:stupid:adj:a2",
        "word": "stupid",
        "translation": "глупый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "stupid",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:successful:adj:a2",
        "word": "successful",
        "translation": "успешный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "successful",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sudden:adj:b1",
        "word": "sudden",
        "translation": "внезапный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sudden",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:suitable:adj:b1",
        "word": "suitable",
        "translation": "подходящий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "suitable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:sure:adj:a1",
        "word": "sure",
        "translation": "уверенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sure",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:surprised:adj:a2",
        "word": "surprised",
        "translation": "удивлен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surprised",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:surprising:adj:a2",
        "word": "surprising",
        "translation": "удивительный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surprising",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:surrounding:adj:b2",
        "word": "surrounding",
        "translation": "окружающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "surrounding",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:talented:adj:b1",
        "word": "talented",
        "translation": "талантливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "talented",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:tall:adj:a1",
        "word": "tall",
        "translation": "высокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tall",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:technical:adj:b1",
        "word": "technical",
        "translation": "технический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "technical",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:teenage:adj:a2",
        "word": "teenage",
        "translation": "подростковый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "teenage",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:temporary:adj:b2",
        "word": "temporary",
        "translation": "временный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "temporary",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:terrible:adj:a1",
        "word": "terrible",
        "translation": "ужасный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "terrible",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:thick:adj:a2",
        "word": "thick",
        "translation": "толстый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thick",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:thin:adj:a2",
        "word": "thin",
        "translation": "тонкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "thin",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:tight:adj:b1",
        "word": "tight",
        "translation": "тугой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tight",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:tiny:adj:b1",
        "word": "tiny",
        "translation": "крошечный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tiny",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:top:n-adj:a2",
        "word": "top",
        "translation": "верх; верхний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "top",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:tough:adj:b2",
        "word": "tough",
        "translation": "жесткий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tough",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:toy:n-adj:a2",
        "word": "toy",
        "translation": "игрушка; игрушечный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "toy",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:tropical:adj:b2",
        "word": "tropical",
        "translation": "тропический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tropical",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:true:adj:a1",
        "word": "true",
        "translation": "правдивый; верный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "true",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:twin:n-adj:a2",
        "word": "twin",
        "translation": "близнец; двойной",
        "example": "",
        "sentenceTranslation": "",
        "answer": "twin",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:typical:adj:a2",
        "word": "typical",
        "translation": "типичный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "typical",
        "level": "A2",
        "partOfSpeech": "прил."
      }
    ],
    "id": "oxford-extra-32",
    "collection": "Oxford 3000",
    "subtopic": "Признаки P–T",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Описание и оценка",
    "words": [
      {
        "id": "oxford:ugly:adj:b1",
        "word": "ugly",
        "translation": "уродливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ugly",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unable:adj:b1",
        "word": "unable",
        "translation": "неспособен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:uncomfortable:adj:b1",
        "word": "uncomfortable",
        "translation": "неудобный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "uncomfortable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unconscious:adj:b2",
        "word": "unconscious",
        "translation": "без сознания",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unconscious",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unemployed:adj:b1",
        "word": "unemployed",
        "translation": "безработный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unemployed",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unexpected:adj:b2",
        "word": "unexpected",
        "translation": "неожиданный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unexpected",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unfair:adj:b1",
        "word": "unfair",
        "translation": "несправедливый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unfair",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unhappy:adj:a2",
        "word": "unhappy",
        "translation": "несчастный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unhappy",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unique:adj:b2",
        "word": "unique",
        "translation": "уникальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unique",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:united:adj:a2",
        "word": "united",
        "translation": "объединенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "united",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unknown:adj:b2",
        "word": "unknown",
        "translation": "неизвестный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unknown",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unlikely:adj:b1",
        "word": "unlikely",
        "translation": "маловероятный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unlikely",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unnecessary:adj:b1",
        "word": "unnecessary",
        "translation": "ненужный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unnecessary",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unpleasant:adj:b1",
        "word": "unpleasant",
        "translation": "неприятный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unpleasant",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:unusual:adj:a2",
        "word": "unusual",
        "translation": "необычный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "unusual",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:upper:adj:b2",
        "word": "upper",
        "translation": "верхний",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upper",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:upstairs:adj:a2",
        "word": "upstairs",
        "translation": "наверху",
        "example": "",
        "sentenceTranslation": "",
        "answer": "upstairs",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:urban:adj:b2",
        "word": "urban",
        "translation": "городской",
        "example": "",
        "sentenceTranslation": "",
        "answer": "urban",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:used:adj:b1",
        "word": "used",
        "translation": "использованный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "used",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:used-to:adj:b1",
        "word": "used to",
        "translation": "привыкший к",
        "example": "",
        "sentenceTranslation": "",
        "answer": "used to",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:useful:adj:a1",
        "word": "useful",
        "translation": "полезный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "useful",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:usual:adj:a2",
        "word": "usual",
        "translation": "обычный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "usual",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:valuable:adj:b1",
        "word": "valuable",
        "translation": "ценный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "valuable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:various:adj:b1",
        "word": "various",
        "translation": "различные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "various",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:vast:adj:b2",
        "word": "vast",
        "translation": "огромный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vast",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:very:adj:b2",
        "word": "very",
        "translation": "очень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "very",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:violent:adj:b1",
        "word": "violent",
        "translation": "жестокий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "violent",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:virtual:adj:b2",
        "word": "virtual",
        "translation": "виртуальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "virtual",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:visual:adj:b2",
        "word": "visual",
        "translation": "визуальный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "visual",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:vital:adj:b2",
        "word": "vital",
        "translation": "жизненно важный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "vital",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:weak:adj:a2",
        "word": "weak",
        "translation": "слабый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weak",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wealthy:adj:b2",
        "word": "wealthy",
        "translation": "богатый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wealthy",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:western:adj:b1",
        "word": "western",
        "translation": "западный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "western",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wet:adj:a2",
        "word": "wet",
        "translation": "мокрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wet",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:white:adj-n:a1",
        "word": "white",
        "translation": "белый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "white",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:whole:adj:a2",
        "word": "whole",
        "translation": "целый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "whole",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wide:adj:a2",
        "word": "wide",
        "translation": "широкий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wide",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:willing:adj:b2",
        "word": "willing",
        "translation": "желающий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "willing",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wise:adj:b2",
        "word": "wise",
        "translation": "мудрый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wise",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wonderful:adj:a1",
        "word": "wonderful",
        "translation": "замечательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wonderful",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wooden:adj:a2",
        "word": "wooden",
        "translation": "деревянный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wooden",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:working:adj:a2",
        "word": "working",
        "translation": "рабочий; действующий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "working",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:worried:adj:a2",
        "word": "worried",
        "translation": "обеспокоенный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worried",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:worse:adj:a2",
        "word": "worse",
        "translation": "хуже",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worse",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:worst:adj:a2",
        "word": "worst",
        "translation": "худший",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worst",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:written:adj:b1",
        "word": "written",
        "translation": "письменный; написанный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "written",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wrong:adj:a1",
        "word": "wrong",
        "translation": "неправильный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wrong",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:yellow:adj-n:a1",
        "word": "yellow",
        "translation": "желтый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "yellow",
        "level": "A1",
        "partOfSpeech": "прил., сущ."
      }
    ],
    "id": "oxford-extra-33",
    "collection": "Oxford 3000",
    "subtopic": "Признаки U–Z",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Природа и мир",
    "words": [
      {
        "id": "oxford:animal:n:a1",
        "word": "animal",
        "translation": "животное",
        "example": "",
        "sentenceTranslation": "",
        "answer": "animal",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bear:n:a2",
        "word": "bear",
        "translation": "медведь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bear",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bear:v:b2",
        "word": "bear",
        "translation": "терпеть; нести",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bear",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:bee:n:b1",
        "word": "bee",
        "translation": "пчела",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bee",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:bird:n:a1",
        "word": "bird",
        "translation": "птица",
        "example": "",
        "sentenceTranslation": "",
        "answer": "bird",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cat:n:a1",
        "word": "cat",
        "translation": "кот",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cat",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cow:n:a1",
        "word": "cow",
        "translation": "корова",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cow",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:crop:n:b2",
        "word": "crop",
        "translation": "урожай",
        "example": "",
        "sentenceTranslation": "",
        "answer": "crop",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dog:n:a1",
        "word": "dog",
        "translation": "собака",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dog",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:elephant:n:a1",
        "word": "elephant",
        "translation": "слон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "elephant",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:flower:n:a1",
        "word": "flower",
        "translation": "цветок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flower",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:forest:n:a2",
        "word": "forest",
        "translation": "лес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "forest",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grass:n:a2",
        "word": "grass",
        "translation": "трава",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grass",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:horse:n:a1",
        "word": "horse",
        "translation": "лошадь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "horse",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:insect:n:a2",
        "word": "insect",
        "translation": "насекомое",
        "example": "",
        "sentenceTranslation": "",
        "answer": "insect",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:leaf:n:b1",
        "word": "leaf",
        "translation": "лист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "leaf",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lion:n:a1",
        "word": "lion",
        "translation": "лев",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lion",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:monkey:n:a2",
        "word": "monkey",
        "translation": "обезьяна",
        "example": "",
        "sentenceTranslation": "",
        "answer": "monkey",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mouse:n:a1",
        "word": "mouse",
        "translation": "мышь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mouse",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:natural:adj:a1",
        "word": "natural",
        "translation": "естественный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "natural",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:nature:n:a2",
        "word": "nature",
        "translation": "природа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "nature",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pet:n:a2",
        "word": "pet",
        "translation": "домашнее животное",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pet",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pig:n:a1",
        "word": "pig",
        "translation": "свинья",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pig",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:plant:n:a1",
        "word": "plant",
        "translation": "растение; завод",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plant",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:plant:v:a2",
        "word": "plant",
        "translation": "сажать растения",
        "example": "",
        "sentenceTranslation": "",
        "answer": "plant",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:root:n:b2",
        "word": "root",
        "translation": "корень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "root",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:seed:n:b1",
        "word": "seed",
        "translation": "семя",
        "example": "",
        "sentenceTranslation": "",
        "answer": "seed",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sheep:n:a1",
        "word": "sheep",
        "translation": "овца",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sheep",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:snake:n:a1",
        "word": "snake",
        "translation": "змея",
        "example": "",
        "sentenceTranslation": "",
        "answer": "snake",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:spider:n:a2",
        "word": "spider",
        "translation": "паук",
        "example": "",
        "sentenceTranslation": "",
        "answer": "spider",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tree:n:a1",
        "word": "tree",
        "translation": "дерево",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tree",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wild:adj:a2",
        "word": "wild",
        "translation": "дикий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wild",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:wildlife:n:b2",
        "word": "wildlife",
        "translation": "дикая природа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wildlife",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wood:n:a2",
        "word": "wood",
        "translation": "дерево",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wood",
        "level": "A2",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-34",
    "collection": "Oxford 3000",
    "subtopic": "Животные и растения",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Природа и мир",
    "words": [
      {
        "id": "oxford:air:n:a1",
        "word": "air",
        "translation": "воздух",
        "example": "",
        "sentenceTranslation": "",
        "answer": "air",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:beach:n:a1",
        "word": "beach",
        "translation": "пляж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "beach",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:climate:n:a2",
        "word": "climate",
        "translation": "климат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "climate",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cloud:n:a2",
        "word": "cloud",
        "translation": "облако",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cloud",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:cool:adj:a1",
        "word": "cool",
        "translation": "прохладный; классный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cool",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:cool:v:b1",
        "word": "cool",
        "translation": "охлаждать; остывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "cool",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:desert:n:a2",
        "word": "desert",
        "translation": "пустыня",
        "example": "",
        "sentenceTranslation": "",
        "answer": "desert",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:desert:v:b2",
        "word": "desert",
        "translation": "покидать; бросать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "desert",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:disaster:n:a2",
        "word": "disaster",
        "translation": "катастрофа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "disaster",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:earth:n:a2",
        "word": "earth",
        "translation": "земля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "earth",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:earthquake:n:b1",
        "word": "earthquake",
        "translation": "землетрясение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "earthquake",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:energy:n:a2",
        "word": "energy",
        "translation": "энергия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "energy",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:environment:n:a2",
        "word": "environment",
        "translation": "окружающая среда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "environment",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:environmental:adj:b1",
        "word": "environmental",
        "translation": "экологический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "environmental",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:field:n:a2",
        "word": "field",
        "translation": "поле",
        "example": "",
        "sentenceTranslation": "",
        "answer": "field",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fire:n:a1",
        "word": "fire",
        "translation": "огонь; пожар",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fire",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:fire:v:b1",
        "word": "fire",
        "translation": "стрелять; увольнять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "fire",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:flood:n-v:b1",
        "word": "flood",
        "translation": "наводнение; затоплять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "flood",
        "level": "B1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:ground:n:a2",
        "word": "ground",
        "translation": "земля",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ground",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hill:n:a2",
        "word": "hill",
        "translation": "холм",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hill",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hot:adj:a1",
        "word": "hot",
        "translation": "горячий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hot",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:island:n:a1",
        "word": "island",
        "translation": "остров",
        "example": "",
        "sentenceTranslation": "",
        "answer": "island",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lake:n:a2",
        "word": "lake",
        "translation": "озеро",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lake",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:land:n:a1",
        "word": "land",
        "translation": "земля; суша",
        "example": "",
        "sentenceTranslation": "",
        "answer": "land",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:land:v:a2",
        "word": "land",
        "translation": "приземляться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "land",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:mountain:n:a1",
        "word": "mountain",
        "translation": "гора",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mountain",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:ocean:n:a2",
        "word": "ocean",
        "translation": "океан",
        "example": "",
        "sentenceTranslation": "",
        "answer": "ocean",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:planet:n:a2",
        "word": "planet",
        "translation": "планета",
        "example": "",
        "sentenceTranslation": "",
        "answer": "planet",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pollution:n:a2",
        "word": "pollution",
        "translation": "загрязнение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pollution",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:rain:n-v:a1",
        "word": "rain",
        "translation": "дождь; идти о дожде",
        "example": "",
        "sentenceTranslation": "",
        "answer": "rain",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:recycle:v:a2",
        "word": "recycle",
        "translation": "перерабатывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "recycle",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:renewable:adj:b1",
        "word": "renewable",
        "translation": "возобновляемый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "renewable",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:river:n:a1",
        "word": "river",
        "translation": "река",
        "example": "",
        "sentenceTranslation": "",
        "answer": "river",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sea:n:a1",
        "word": "sea",
        "translation": "море",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sea",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sky:n:a2",
        "word": "sky",
        "translation": "небо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sky",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:snow:n-v:a1",
        "word": "snow",
        "translation": "снег; идти о снеге",
        "example": "",
        "sentenceTranslation": "",
        "answer": "snow",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:storm:n-v:a2",
        "word": "storm",
        "translation": "буря; шторм; брать штурмом",
        "example": "",
        "sentenceTranslation": "",
        "answer": "storm",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:sun:n:a1",
        "word": "sun",
        "translation": "солнце",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sun",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sunny:adj:a1",
        "word": "sunny",
        "translation": "солнечный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sunny",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:temperature:n:a2",
        "word": "temperature",
        "translation": "температура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "temperature",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:valley:n:a2",
        "word": "valley",
        "translation": "долина",
        "example": "",
        "sentenceTranslation": "",
        "answer": "valley",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:warm:adj:a1",
        "word": "warm",
        "translation": "теплый",
        "example": "",
        "sentenceTranslation": "",
        "answer": "warm",
        "level": "A1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:warm:v:b1",
        "word": "warm",
        "translation": "согревать; нагреваться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "warm",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:weather:n:a1",
        "word": "weather",
        "translation": "погода",
        "example": "",
        "sentenceTranslation": "",
        "answer": "weather",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wind:n:a2",
        "word": "wind",
        "translation": "ветер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wind",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wind:v:b2",
        "word": "wind",
        "translation": "заводить; наматывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wind",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:world:n:a1",
        "word": "world",
        "translation": "мир",
        "example": "",
        "sentenceTranslation": "",
        "answer": "world",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-35",
    "collection": "Oxford 3000",
    "subtopic": "Погода и окружающая среда",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Техника и связь",
    "words": [
      {
        "id": "oxford:ai:n:b1",
        "word": "AI",
        "translation": "искусственный интеллект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "AI",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:app:n:a2",
        "word": "app",
        "translation": "приложение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "app",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:click:v-n:b1",
        "word": "click",
        "translation": "щелчок; щёлкать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "click",
        "level": "B1",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:code:n:a2",
        "word": "code",
        "translation": "код",
        "example": "",
        "sentenceTranslation": "",
        "answer": "code",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:computer:n:a1",
        "word": "computer",
        "translation": "компьютер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "computer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:data:n:a2",
        "word": "data",
        "translation": "данные",
        "example": "",
        "sentenceTranslation": "",
        "answer": "data",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:digital:adj:a2",
        "word": "digital",
        "translation": "цифровой",
        "example": "",
        "sentenceTranslation": "",
        "answer": "digital",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:document:n:a2",
        "word": "document",
        "translation": "документ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "document",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:document:v:b2",
        "word": "document",
        "translation": "документировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "document",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:download:v-n:a2",
        "word": "download",
        "translation": "загрузка; скачанный файл; скачивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "download",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:electric:adj:a2",
        "word": "electric",
        "translation": "электрический",
        "example": "",
        "sentenceTranslation": "",
        "answer": "electric",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:electronic:adj:a2",
        "word": "electronic",
        "translation": "электронный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "electronic",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:email:n-v:a1",
        "word": "email",
        "translation": "электронное письмо; писать по электронной почте",
        "example": "",
        "sentenceTranslation": "",
        "answer": "email",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:file:n:b1",
        "word": "file",
        "translation": "файл; папка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "file",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:file:v:b2",
        "word": "file",
        "translation": "подавать документ; систематизировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "file",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:internet:n:a1",
        "word": "internet",
        "translation": "интернет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "internet",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:keyboard:n:b1",
        "word": "keyboard",
        "translation": "клавиатура",
        "example": "",
        "sentenceTranslation": "",
        "answer": "keyboard",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:laptop:n:a2",
        "word": "laptop",
        "translation": "ноутбук",
        "example": "",
        "sentenceTranslation": "",
        "answer": "laptop",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:link:n-v:a2",
        "word": "link",
        "translation": "ссылка; связь; связывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "link",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:media:n:a2",
        "word": "media",
        "translation": "СМИ",
        "example": "",
        "sentenceTranslation": "",
        "answer": "media",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:message:n:a1",
        "word": "message",
        "translation": "сообщение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "message",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mobile:adj-n:a2",
        "word": "mobile",
        "translation": "мобильный; мобильный телефон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mobile",
        "level": "A2",
        "partOfSpeech": "прил., сущ."
      },
      {
        "id": "oxford:network:n:a2",
        "word": "network",
        "translation": "сеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "network",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:online:adj-adv:a1",
        "word": "online",
        "translation": "онлайн",
        "example": "",
        "sentenceTranslation": "",
        "answer": "online",
        "level": "A1",
        "partOfSpeech": "прил., нареч."
      },
      {
        "id": "oxford:phone:n-v:a1",
        "word": "phone",
        "translation": "телефон; звонить по телефону",
        "example": "",
        "sentenceTranslation": "",
        "answer": "phone",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:podcast:n:b1",
        "word": "podcast",
        "translation": "подкаст",
        "example": "",
        "sentenceTranslation": "",
        "answer": "podcast",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:program:n:a2",
        "word": "program",
        "translation": "компьютерная программа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "program",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:program:v:b1",
        "word": "program",
        "translation": "программировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "program",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:robot:n:b1",
        "word": "robot",
        "translation": "робот",
        "example": "",
        "sentenceTranslation": "",
        "answer": "robot",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:screen:n:a2",
        "word": "screen",
        "translation": "экран",
        "example": "",
        "sentenceTranslation": "",
        "answer": "screen",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:screen:v:b2",
        "word": "screen",
        "translation": "показывать на экране; проверять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "screen",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:search:n-v:a2",
        "word": "search",
        "translation": "поиск; искать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "search",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:smartphone:n:a2",
        "word": "smartphone",
        "translation": "смартфон",
        "example": "",
        "sentenceTranslation": "",
        "answer": "smartphone",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:software:n:b1",
        "word": "software",
        "translation": "программное обеспечение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "software",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:system:n:a2",
        "word": "system",
        "translation": "система",
        "example": "",
        "sentenceTranslation": "",
        "answer": "system",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:tablet:n:a2",
        "word": "tablet",
        "translation": "планшет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "tablet",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:technology:n:a2",
        "word": "technology",
        "translation": "технология",
        "example": "",
        "sentenceTranslation": "",
        "answer": "technology",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:telephone:n-v:a1",
        "word": "telephone",
        "translation": "телефон; звонить по телефону",
        "example": "",
        "sentenceTranslation": "",
        "answer": "telephone",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:user:n:a2",
        "word": "user",
        "translation": "пользователь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "user",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:web:n:a2",
        "word": "web",
        "translation": "сеть",
        "example": "",
        "sentenceTranslation": "",
        "answer": "web",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:website:n:a1",
        "word": "website",
        "translation": "веб-сайт",
        "example": "",
        "sentenceTranslation": "",
        "answer": "website",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wi-fi:n:b1",
        "word": "Wi-Fi™",
        "translation": "вай-фай",
        "example": "",
        "sentenceTranslation": "",
        "answer": "Wi-Fi™",
        "level": "B1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-36",
    "collection": "Oxford 3000",
    "subtopic": "Технологии и интернет",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Учёба и работа",
    "words": [
      {
        "id": "oxford:actor:n:a1",
        "word": "actor",
        "translation": "актер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "actor",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:actress:n:a1",
        "word": "actress",
        "translation": "актриса",
        "example": "",
        "sentenceTranslation": "",
        "answer": "actress",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:application:n:b1",
        "word": "application",
        "translation": "приложение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "application",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:apply:v:a2",
        "word": "apply",
        "translation": "применять",
        "example": "",
        "sentenceTranslation": "",
        "answer": "apply",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:artist:n:a1",
        "word": "artist",
        "translation": "художник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "artist",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:boss:n:a2",
        "word": "boss",
        "translation": "босс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "boss",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:business:n:a1",
        "word": "business",
        "translation": "бизнес",
        "example": "",
        "sentenceTranslation": "",
        "answer": "business",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:career:n:a1",
        "word": "career",
        "translation": "карьера",
        "example": "",
        "sentenceTranslation": "",
        "answer": "career",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:client:n:b1",
        "word": "client",
        "translation": "клиент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "client",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:colleague:n:a2",
        "word": "colleague",
        "translation": "коллега",
        "example": "",
        "sentenceTranslation": "",
        "answer": "colleague",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:company:n:a1",
        "word": "company",
        "translation": "компания",
        "example": "",
        "sentenceTranslation": "",
        "answer": "company",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:customer:n:a1",
        "word": "customer",
        "translation": "клиент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "customer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:driver:n:a1",
        "word": "driver",
        "translation": "водитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "driver",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:duty:n:b1",
        "word": "duty",
        "translation": "обязанность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "duty",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:earn:v:a2",
        "word": "earn",
        "translation": "зарабатывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "earn",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:employee:n:a2",
        "word": "employee",
        "translation": "сотрудник",
        "example": "",
        "sentenceTranslation": "",
        "answer": "employee",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:employer:n:a2",
        "word": "employer",
        "translation": "работодатель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "employer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:employment:n:b1",
        "word": "employment",
        "translation": "занятость",
        "example": "",
        "sentenceTranslation": "",
        "answer": "employment",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:engineer:n:a2",
        "word": "engineer",
        "translation": "инженер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "engineer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:engineering:n:b1",
        "word": "engineering",
        "translation": "инженерия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "engineering",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:experience:n:a2",
        "word": "experience",
        "translation": "опыт; переживание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "experience",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:experience:v:b1",
        "word": "experience",
        "translation": "испытывать; переживать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "experience",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:expert:n-adj:a2",
        "word": "expert",
        "translation": "эксперт; опытный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "expert",
        "level": "A2",
        "partOfSpeech": "сущ., прил."
      },
      {
        "id": "oxford:factory:n:a2",
        "word": "factory",
        "translation": "фабрика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "factory",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:farmer:n:a1",
        "word": "farmer",
        "translation": "фермер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "farmer",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:hire:v:b1",
        "word": "hire",
        "translation": "нанимать; брать напрокат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hire",
        "level": "B1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:hire:n:b2",
        "word": "hire",
        "translation": "наём; прокат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "hire",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:industry:n:a2",
        "word": "industry",
        "translation": "промышленность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "industry",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:interview:n-v:a1",
        "word": "interview",
        "translation": "собеседование; интервью; брать интервью",
        "example": "",
        "sentenceTranslation": "",
        "answer": "interview",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:job:n:a1",
        "word": "job",
        "translation": "работа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "job",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:journalist:n:a2",
        "word": "journalist",
        "translation": "журналист",
        "example": "",
        "sentenceTranslation": "",
        "answer": "journalist",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lawyer:n:a2",
        "word": "lawyer",
        "translation": "адвокат",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lawyer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:management:n:b1",
        "word": "management",
        "translation": "менеджмент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "management",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:manager:n:a2",
        "word": "manager",
        "translation": "менеджер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "manager",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:meeting:n:a1",
        "word": "meeting",
        "translation": "встреча",
        "example": "",
        "sentenceTranslation": "",
        "answer": "meeting",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:musician:n:a2",
        "word": "musician",
        "translation": "музыкант",
        "example": "",
        "sentenceTranslation": "",
        "answer": "musician",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:office:n:a1",
        "word": "office",
        "translation": "офис",
        "example": "",
        "sentenceTranslation": "",
        "answer": "office",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:officer:n:a2",
        "word": "officer",
        "translation": "офицер",
        "example": "",
        "sentenceTranslation": "",
        "answer": "officer",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pilot:n:a2",
        "word": "pilot",
        "translation": "пилот",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pilot",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:police:n:a1",
        "word": "police",
        "translation": "полиция",
        "example": "",
        "sentenceTranslation": "",
        "answer": "police",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:production:n:b1",
        "word": "production",
        "translation": "производство",
        "example": "",
        "sentenceTranslation": "",
        "answer": "production",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:profession:n:b1",
        "word": "profession",
        "translation": "профессия",
        "example": "",
        "sentenceTranslation": "",
        "answer": "profession",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:professional:adj:a2",
        "word": "professional",
        "translation": "профессиональный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "professional",
        "level": "A2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:professional:n:b2",
        "word": "professional",
        "translation": "профессиональный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "professional",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:project:n:a1",
        "word": "project",
        "translation": "проект",
        "example": "",
        "sentenceTranslation": "",
        "answer": "project",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:project:v:b2",
        "word": "project",
        "translation": "прогнозировать; проецировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "project",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:responsibility:n:b1",
        "word": "responsibility",
        "translation": "ответственность",
        "example": "",
        "sentenceTranslation": "",
        "answer": "responsibility",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:salary:n:a2",
        "word": "salary",
        "translation": "зарплата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "salary",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:science:n:a1",
        "word": "science",
        "translation": "наука",
        "example": "",
        "sentenceTranslation": "",
        "answer": "science",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:scientist:n:a1",
        "word": "scientist",
        "translation": "учёный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "scientist",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:service:n:a2",
        "word": "service",
        "translation": "услуга",
        "example": "",
        "sentenceTranslation": "",
        "answer": "service",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:staff:n:b1",
        "word": "staff",
        "translation": "персонал",
        "example": "",
        "sentenceTranslation": "",
        "answer": "staff",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:task:n:a2",
        "word": "task",
        "translation": "задача",
        "example": "",
        "sentenceTranslation": "",
        "answer": "task",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:team:n:a1",
        "word": "team",
        "translation": "команда",
        "example": "",
        "sentenceTranslation": "",
        "answer": "team",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:wage:n:b2",
        "word": "wage",
        "translation": "заработная плата",
        "example": "",
        "sentenceTranslation": "",
        "answer": "wage",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:waiter:n:a1",
        "word": "waiter",
        "translation": "официант",
        "example": "",
        "sentenceTranslation": "",
        "answer": "waiter",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:worker:n:a1",
        "word": "worker",
        "translation": "рабочий",
        "example": "",
        "sentenceTranslation": "",
        "answer": "worker",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-37",
    "collection": "Oxford 3000",
    "subtopic": "Работа и профессии",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Учёба и работа",
    "words": [
      {
        "id": "oxford:answer:n-v:a1",
        "word": "answer",
        "translation": "ответ; отвечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "answer",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:book:n:a1",
        "word": "book",
        "translation": "книга",
        "example": "",
        "sentenceTranslation": "",
        "answer": "book",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:book:v:a2",
        "word": "book",
        "translation": "бронировать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "book",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:chapter:n:b1",
        "word": "chapter",
        "translation": "глава",
        "example": "",
        "sentenceTranslation": "",
        "answer": "chapter",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:class:n:a1",
        "word": "class",
        "translation": "класс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "class",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:classroom:n:a1",
        "word": "classroom",
        "translation": "класс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "classroom",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:college:n:a1",
        "word": "college",
        "translation": "колледж",
        "example": "",
        "sentenceTranslation": "",
        "answer": "college",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:course:n:a1",
        "word": "course",
        "translation": "курс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "course",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:degree:n:a2",
        "word": "degree",
        "translation": "степень",
        "example": "",
        "sentenceTranslation": "",
        "answer": "degree",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:dictionary:n:a1",
        "word": "dictionary",
        "translation": "словарь",
        "example": "",
        "sentenceTranslation": "",
        "answer": "dictionary",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:education:n:a2",
        "word": "education",
        "translation": "образование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "education",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:educational:adj:b1",
        "word": "educational",
        "translation": "образовательный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "educational",
        "level": "B1",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:exam:n:a1",
        "word": "exam",
        "translation": "экзамен",
        "example": "",
        "sentenceTranslation": "",
        "answer": "exam",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:examination:n:b2",
        "word": "examination",
        "translation": "обследование",
        "example": "",
        "sentenceTranslation": "",
        "answer": "examination",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grade:n:b1",
        "word": "grade",
        "translation": "оценка; класс",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grade",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:grade:v:b2",
        "word": "grade",
        "translation": "оценивать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "grade",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:homework:n:a1",
        "word": "homework",
        "translation": "домашнее задание",
        "example": "",
        "sentenceTranslation": "",
        "answer": "homework",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:knowledge:n:a2",
        "word": "knowledge",
        "translation": "знания",
        "example": "",
        "sentenceTranslation": "",
        "answer": "knowledge",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:language:n:a1",
        "word": "language",
        "translation": "язык",
        "example": "",
        "sentenceTranslation": "",
        "answer": "language",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:learn:v:a1",
        "word": "learn",
        "translation": "учиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "learn",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:learning:n:a2",
        "word": "learning",
        "translation": "обучение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "learning",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:lecture:n-v:a2",
        "word": "lecture",
        "translation": "лекция; читать лекцию",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lecture",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:lesson:n:a1",
        "word": "lesson",
        "translation": "урок",
        "example": "",
        "sentenceTranslation": "",
        "answer": "lesson",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:library:n:a1",
        "word": "library",
        "translation": "библиотека",
        "example": "",
        "sentenceTranslation": "",
        "answer": "library",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:mark:v-n:a2",
        "word": "mark",
        "translation": "отметка; след; отмечать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "mark",
        "level": "A2",
        "partOfSpeech": "гл., сущ."
      },
      {
        "id": "oxford:page:n:a1",
        "word": "page",
        "translation": "страница",
        "example": "",
        "sentenceTranslation": "",
        "answer": "page",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:paper:n:a1",
        "word": "paper",
        "translation": "бумага",
        "example": "",
        "sentenceTranslation": "",
        "answer": "paper",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pen:n:a1",
        "word": "pen",
        "translation": "ручка",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pen",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:pencil:n:a1",
        "word": "pencil",
        "translation": "карандаш",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pencil",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:practice:n:a1",
        "word": "practice",
        "translation": "практика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "practice",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:practise:v:a1",
        "word": "practise",
        "translation": "практика",
        "example": "",
        "sentenceTranslation": "",
        "answer": "practise",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:pupil:n:b2",
        "word": "pupil",
        "translation": "ученик",
        "example": "",
        "sentenceTranslation": "",
        "answer": "pupil",
        "level": "B2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:qualification:n:b1",
        "word": "qualification",
        "translation": "квалификация",
        "example": "",
        "sentenceTranslation": "",
        "answer": "qualification",
        "level": "B1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:question:n:a1",
        "word": "question",
        "translation": "вопрос",
        "example": "",
        "sentenceTranslation": "",
        "answer": "question",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:question:v:a2",
        "word": "question",
        "translation": "спрашивать; подвергать сомнению",
        "example": "",
        "sentenceTranslation": "",
        "answer": "question",
        "level": "A2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:read:v:a1",
        "word": "read",
        "translation": "читать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "read",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:reading:n:a1",
        "word": "reading",
        "translation": "чтение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "reading",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:research:n-v:a2",
        "word": "research",
        "translation": "исследование; исследовать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "research",
        "level": "A2",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:school:n:a1",
        "word": "school",
        "translation": "школа",
        "example": "",
        "sentenceTranslation": "",
        "answer": "school",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sentence:n:a1",
        "word": "sentence",
        "translation": "предложение; приговор",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sentence",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:sentence:v:b2",
        "word": "sentence",
        "translation": "приговаривать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "sentence",
        "level": "B2",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:skill:n:a1",
        "word": "skill",
        "translation": "умение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "skill",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:student:n:a1",
        "word": "student",
        "translation": "студент",
        "example": "",
        "sentenceTranslation": "",
        "answer": "student",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:study:n-v:a1",
        "word": "study",
        "translation": "учёба; исследование; изучать; учиться",
        "example": "",
        "sentenceTranslation": "",
        "answer": "study",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:subject:n:a1",
        "word": "subject",
        "translation": "предмет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "subject",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:subject:adj:b2",
        "word": "subject",
        "translation": "подлежащий; подверженный",
        "example": "",
        "sentenceTranslation": "",
        "answer": "subject",
        "level": "B2",
        "partOfSpeech": "прил."
      },
      {
        "id": "oxford:teach:v:a1",
        "word": "teach",
        "translation": "учить",
        "example": "",
        "sentenceTranslation": "",
        "answer": "teach",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:teacher:n:a1",
        "word": "teacher",
        "translation": "учитель",
        "example": "",
        "sentenceTranslation": "",
        "answer": "teacher",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:test:n-v:a1",
        "word": "test",
        "translation": "тест; испытание; проверять; испытывать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "test",
        "level": "A1",
        "partOfSpeech": "сущ., гл."
      },
      {
        "id": "oxford:text:n:a1",
        "word": "text",
        "translation": "текст",
        "example": "",
        "sentenceTranslation": "",
        "answer": "text",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:training:n:a2",
        "word": "training",
        "translation": "обучение",
        "example": "",
        "sentenceTranslation": "",
        "answer": "training",
        "level": "A2",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:university:n:a1",
        "word": "university",
        "translation": "университет",
        "example": "",
        "sentenceTranslation": "",
        "answer": "university",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:word:n:a1",
        "word": "word",
        "translation": "слово",
        "example": "",
        "sentenceTranslation": "",
        "answer": "word",
        "level": "A1",
        "partOfSpeech": "сущ."
      },
      {
        "id": "oxford:write:v:a1",
        "word": "write",
        "translation": "писать",
        "example": "",
        "sentenceTranslation": "",
        "answer": "write",
        "level": "A1",
        "partOfSpeech": "гл."
      },
      {
        "id": "oxford:writing:n:a1",
        "word": "writing",
        "translation": "письмо",
        "example": "",
        "sentenceTranslation": "",
        "answer": "writing",
        "level": "A1",
        "partOfSpeech": "сущ."
      }
    ],
    "id": "oxford-extra-38",
    "collection": "Oxford 3000",
    "subtopic": "Учёба",
    "source": "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"
  },
  {
    "topic": "Производительность и масштабируемость",
    "words": [
      {
        "id": 92,
        "word": "response time",
        "translation": "время ответа (сервера)",
        "example": "Average response time increased after the migration.",
        "sentenceTranslation": "Среднее время ответа увеличилось после миграции.",
        "answer": "response time",
        "answers": [
          {
            "text": "response time",
            "weight": 1
          }
        ]
      },
      {
        "id": 93,
        "word": "error rate",
        "translation": "процент ошибочных запросов",
        "example": "The error rate spiked to 5% during peak traffic.",
        "sentenceTranslation": "Процент ошибочных запросов резко вырос до 5% во время пикового трафика.",
        "answer": "error rate",
        "answers": [
          {
            "text": "error rate",
            "weight": 1
          }
        ]
      },
      {
        "id": 94,
        "word": "p95 / p99",
        "translation": "95-й / 99-й перцентиль задержки",
        "example": "P99 latency is 800ms — that's too high for our use case.",
        "sentenceTranslation": "Задержка P99 составляет 800 мс — это слишком много для нашего сценария.",
        "answer": "P99",
        "answers": [
          {
            "text": "p95",
            "weight": 1
          },
          {
            "text": "p99",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 95,
        "word": "latency spike",
        "translation": "резкий скачок задержки",
        "example": "We saw latency spikes every time traffic went above 3k RPS.",
        "sentenceTranslation": "Мы видели резкие скачки задержки каждый раз, когда трафик превышал 3 тысячи запросов в секунду.",
        "answer": "latency spikes",
        "answers": [
          {
            "text": "latency spike",
            "weight": 1
          }
        ]
      },
      {
        "id": 96,
        "word": "memory leak",
        "translation": "утечка памяти",
        "example": "The service crashes every few hours — looks like a memory leak.",
        "sentenceTranslation": "Сервис падает каждые несколько часов — похоже на утечку памяти.",
        "answer": "memory leak",
        "answers": [
          {
            "text": "memory leak",
            "weight": 1
          }
        ]
      },
      {
        "id": 97,
        "word": "CPU spike",
        "translation": "резкий рост потребления CPU",
        "example": "There's a CPU spike every time the batch job runs.",
        "sentenceTranslation": "Резкий рост потребления CPU происходит каждый раз, когда запускается пакетная задача.",
        "answer": "CPU spike",
        "answers": [
          {
            "text": "CPU spike",
            "weight": 1
          }
        ]
      },
      {
        "id": 98,
        "word": "timeout / time-out",
        "translation": "превышение времени ожидания",
        "example": "Requests are timing out after 30 seconds — something is blocking.",
        "sentenceTranslation": "Запросы превышают время ожидания через 30 секунд — что-то блокирует выполнение.",
        "answer": "timing out",
        "answers": [
          {
            "text": "timeout",
            "weight": 1
          },
          {
            "text": "time-out",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 99,
        "word": "degraded performance",
        "translation": "ухудшение производительности",
        "example": "Users are reporting degraded performance during peak hours.",
        "sentenceTranslation": "Пользователи сообщают об ухудшении производительности в часы пик.",
        "answer": "degraded performance",
        "answers": [
          {
            "text": "degraded performance",
            "weight": 1
          }
        ]
      },
      {
        "id": 100,
        "word": "scale vertically",
        "translation": "вертикальное масштабирование — мощнее железо",
        "example": "We scaled vertically but it's not a long-term solution.",
        "sentenceTranslation": "Мы масштабировались вертикально, но это не долгосрочное решение.",
        "answer": "scaled vertically",
        "infinitive": "to scale vertically",
        "answers": [
          {
            "text": "to scale vertically",
            "weight": 1
          }
        ]
      },
      {
        "id": 101,
        "word": "scale horizontally",
        "translation": "горизонтальное масштабирование — больше инстансов",
        "example": "We scaled horizontally to three instances to handle the load.",
        "sentenceTranslation": "Мы масштабировались горизонтально до трёх инстансов, чтобы справиться с нагрузкой.",
        "answer": "scaled horizontally",
        "infinitive": "to scale horizontally",
        "answers": [
          {
            "text": "to scale horizontally",
            "weight": 1
          }
        ]
      },
      {
        "id": 102,
        "word": "autoscaling / auto-scaling",
        "translation": "автоматическое масштабирование (по нагрузке)",
        "example": "Autoscaling kicks in when CPU usage goes above 70%.",
        "sentenceTranslation": "Автоматическое масштабирование включается, когда использование CPU превышает 70%.",
        "answer": "autoscaling / auto-scaling",
        "answers": [
          {
            "text": "autoscaling",
            "weight": 1
          },
          {
            "text": "auto-scaling",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 103,
        "word": "peak load / peak traffic",
        "translation": "пиковая нагрузка",
        "example": "The service handles peak load without issues now.",
        "sentenceTranslation": "Теперь сервис справляется с пиковой нагрузкой без проблем.",
        "answer": "peak load",
        "answers": [
          {
            "text": "peak load",
            "weight": 1
          },
          {
            "text": "peak traffic",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 104,
        "word": "increase / go up",
        "translation": "расти, увеличиваться",
        "example": "Latency increased significantly after the last deploy.",
        "sentenceTranslation": "Задержка значительно выросла после последнего деплоя.",
        "answer": "increased",
        "infinitive": "to increase / to go up",
        "answers": [
          {
            "text": "to increase",
            "weight": 1
          },
          {
            "text": "to go up",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 105,
        "word": "decrease / go down / drop",
        "translation": "падать, снижаться",
        "example": "Response time dropped by 40% after we added caching.",
        "sentenceTranslation": "Время ответа снизилось на 40% после того, как мы добавили кэширование.",
        "answer": "dropped",
        "infinitive": "to decrease / to go down / to drop",
        "answers": [
          {
            "text": "to decrease",
            "weight": 1
          },
          {
            "text": "to go down",
            "weight": 0.9
          },
          {
            "text": "to drop",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 106,
        "word": "spike",
        "translation": "резко вырасти кратковременно",
        "example": "CPU usage spiked to 95% during the batch job.",
        "sentenceTranslation": "Использование CPU кратковременно выросло до 95% во время пакетной задачи.",
        "answer": "spiked",
        "infinitive": "to spike",
        "answers": [
          {
            "text": "to spike",
            "weight": 1
          }
        ]
      },
      {
        "id": 107,
        "word": "stabilize",
        "translation": "стабилизироваться",
        "example": "Latency stabilized after we restarted the service.",
        "sentenceTranslation": "Задержка стабилизировалась после того, как мы перезапустили сервис.",
        "answer": "stabilized",
        "infinitive": "to stabilize",
        "answers": [
          {
            "text": "to stabilize",
            "weight": 1
          }
        ]
      },
      {
        "id": 108,
        "word": "reduce",
        "translation": "снизить целенаправленно",
        "example": "We reduced memory usage by 30% after the optimization.",
        "sentenceTranslation": "Мы снизили использование памяти на 30% после оптимизации.",
        "answer": "reduced",
        "infinitive": "to reduce",
        "answers": [
          {
            "text": "to reduce",
            "weight": 1
          }
        ]
      },
      {
        "id": 109,
        "word": "improve / get better",
        "translation": "улучшить / улучшиться",
        "example": "Performance improved significantly after query optimization.",
        "sentenceTranslation": "Производительность значительно улучшилась после оптимизации запросов.",
        "answer": "improved",
        "infinitive": "to improve / to get better",
        "answers": [
          {
            "text": "to improve",
            "weight": 1
          },
          {
            "text": "to get better",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 110,
        "word": "degrade / get worse",
        "translation": "ухудшиться (о производительности)",
        "example": "Performance degrades under heavy load — we need to investigate.",
        "sentenceTranslation": "Производительность ухудшается при высокой нагрузке — нужно разобраться.",
        "answer": "degrades",
        "infinitive": "to degrade / to get worse",
        "answers": [
          {
            "text": "to degrade",
            "weight": 1
          },
          {
            "text": "to get worse",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 111,
        "word": "fluctuate / vary",
        "translation": "колебаться, быть нестабильным",
        "example": "Response times are fluctuating — something is inconsistent.",
        "sentenceTranslation": "Время ответа колеблется — что-то работает нестабильно.",
        "answer": "fluctuating",
        "infinitive": "to fluctuate / to vary",
        "answers": [
          {
            "text": "to fluctuate",
            "weight": 1
          },
          {
            "text": "to vary",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 112,
        "word": "recover",
        "translation": "восстановиться (после сбоя или деградации)",
        "example": "The service recovered automatically after the circuit breaker reset.",
        "sentenceTranslation": "Сервис автоматически восстановился после сброса circuit breaker.",
        "answer": "recovered",
        "infinitive": "to recover",
        "answers": [
          {
            "text": "to recover",
            "weight": 1
          }
        ]
      }
    ]
  },
  {
    "topic": "Бэкенд и API",
    "words": [
      {
        "id": 113,
        "word": "expose",
        "translation": "открывать наружу (endpoint, port)",
        "example": "We expose a REST endpoint at /users.",
        "sentenceTranslation": "Мы открываем наружу REST-эндпоинт по адресу /users.",
        "answer": "expose",
        "infinitive": "to expose",
        "answers": [
          {
            "text": "to expose",
            "weight": 1
          }
        ]
      },
      {
        "id": 114,
        "word": "consume / call",
        "translation": "потреблять / вызывать (API, service)",
        "example": "The frontend consumes our API.",
        "sentenceTranslation": "Фронтенд использует / вызывает наш API.",
        "answer": "consumes",
        "infinitive": "to consume / to call",
        "answers": [
          {
            "text": "to consume",
            "weight": 1
          },
          {
            "text": "to call",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 115,
        "word": "handle",
        "translation": "обрабатывать (request, error, event)",
        "example": "This middleware handles authentication.",
        "sentenceTranslation": "Этот middleware обрабатывает аутентификацию.",
        "answer": "handles",
        "infinitive": "to handle",
        "answers": [
          {
            "text": "to handle",
            "weight": 1
          }
        ]
      },
      {
        "id": 116,
        "word": "parse",
        "translation": "разобрать / распарсить",
        "example": "We parse the request body before validation.",
        "sentenceTranslation": "Мы парсим / разбираем тело запроса перед валидацией.",
        "answer": "parse",
        "infinitive": "to parse",
        "answers": [
          {
            "text": "to parse",
            "weight": 1
          }
        ]
      },
      {
        "id": 117,
        "word": "serialize / deserialize",
        "translation": "сериализовать / десериализовать",
        "example": "The response is serialized to JSON.",
        "sentenceTranslation": "Ответ сериализуется в JSON.",
        "answer": "serialized",
        "infinitive": "to serialize / to deserialize",
        "answers": [
          {
            "text": "to serialize",
            "weight": 1
          },
          {
            "text": "to deserialize",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 118,
        "word": "paginate",
        "translation": "разбивать на страницы",
        "example": "The endpoint paginates results using limit and offset.",
        "sentenceTranslation": "Эндпоинт разбивает результаты на страницы с помощью limit и offset.",
        "answer": "paginates",
        "infinitive": "to paginate",
        "answers": [
          {
            "text": "to paginate",
            "weight": 1
          }
        ]
      },
      {
        "id": 119,
        "word": "throttle / rate-limit",
        "translation": "ограничивать (количество запросов)",
        "example": "We throttle requests to 100 per minute.",
        "sentenceTranslation": "Мы ограничиваем количество запросов до 100 в минуту.",
        "answer": "throttle / rate-limit",
        "infinitive": "to throttle / to rate-limit",
        "answers": [
          {
            "text": "to throttle",
            "weight": 1
          },
          {
            "text": "to rate-limit",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 120,
        "word": "authenticate / authorize",
        "translation": "аутентифицировать vs авторизовать",
        "example": "First we authenticate, then authorize.",
        "sentenceTranslation": "Сначала мы аутентифицируем, затем авторизуем.",
        "answer": "authenticate / authorize",
        "infinitive": "to authenticate / to authorize",
        "answers": [
          {
            "text": "to authenticate",
            "weight": 1
          },
          {
            "text": "to authorize",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 121,
        "word": "validate / check",
        "translation": "проверять (данные, схему, параметры)",
        "example": "Always validate the payload before hitting the DB.",
        "sentenceTranslation": "Всегда валидируй / проверяй payload перед обращением к базе данных.",
        "answer": "validate / check",
        "infinitive": "to validate / to check",
        "answers": [
          {
            "text": "to validate",
            "weight": 1
          },
          {
            "text": "to check",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 122,
        "word": "propagate",
        "translation": "пробрасывать (error, event)",
        "example": "The error propagates up the middleware chain.",
        "sentenceTranslation": "Ошибка пробрасывается вверх по цепочке middleware.",
        "answer": "propagates",
        "infinitive": "to propagate",
        "answers": [
          {
            "text": "to propagate",
            "weight": 1
          }
        ]
      },
      {
        "id": 123,
        "word": "intercept",
        "translation": "перехватывать (request, response)",
        "example": "We intercept every request to log the trace ID.",
        "sentenceTranslation": "Мы перехватываем каждый запрос, чтобы записать trace ID в лог.",
        "answer": "intercept",
        "infinitive": "to intercept",
        "answers": [
          {
            "text": "to intercept",
            "weight": 1
          }
        ]
      },
      {
        "id": 124,
        "word": "offload",
        "translation": "передавать задачу (в очередь, воркер)",
        "example": "We offload email sending to a background queue.",
        "sentenceTranslation": "Мы передаём задачу отправки писем в фоновую очередь.",
        "answer": "offload",
        "infinitive": "to offload",
        "answers": [
          {
            "text": "to offload",
            "weight": 1
          }
        ]
      },
      {
        "id": 125,
        "word": "payload / request body",
        "translation": "тело запроса / передаваемые данные",
        "example": "The payload includes user ID and preferences.",
        "sentenceTranslation": "Тело запроса содержит ID пользователя и настройки.",
        "answer": "payload / request body",
        "answers": [
          {
            "text": "payload",
            "weight": 1
          },
          {
            "text": "request body",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 126,
        "word": "middleware",
        "translation": "промежуточный обработчик",
        "example": "Auth middleware runs before the route handler.",
        "sentenceTranslation": "Промежуточный обработчик аутентификации выполняется перед обработчиком маршрута.",
        "answer": "middleware",
        "answers": [
          {
            "text": "middleware",
            "weight": 1
          }
        ]
      },
      {
        "id": 127,
        "word": "idempotency",
        "translation": "идемпотентность",
        "example": "Use PUT for idempotency — it's safe to retry.",
        "sentenceTranslation": "Используй PUT для идемпотентности: такой запрос безопасно повторять.",
        "answer": "idempotency",
        "answers": [
          {
            "text": "idempotency",
            "weight": 1
          }
        ]
      },
      {
        "id": 128,
        "word": "latency",
        "translation": "задержка (время между запросом и ответом)",
        "example": "P99 latency is under 200ms.",
        "sentenceTranslation": "Задержка P99 меньше 200 мс.",
        "answer": "latency",
        "answers": [
          {
            "text": "latency",
            "weight": 1
          }
        ]
      },
      {
        "id": 129,
        "word": "throughput",
        "translation": "пропускная способность",
        "example": "Higher throughput means the system handles more requests per second.",
        "sentenceTranslation": "Более высокая пропускная способность означает, что система обрабатывает больше запросов в секунду.",
        "answer": "throughput",
        "answers": [
          {
            "text": "throughput",
            "weight": 1
          }
        ]
      },
      {
        "id": 130,
        "word": "contract / agreement",
        "translation": "API-контракт / соглашение об интерфейсе",
        "example": "We shouldn't break the API contract without versioning.",
        "sentenceTranslation": "Нельзя ломать API-контракт без версионирования.",
        "answer": "contract / agreement",
        "answers": [
          {
            "text": "contract",
            "weight": 1
          },
          {
            "text": "agreement",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 131,
        "word": "backward compatibility",
        "translation": "обратная совместимость",
        "example": "This change breaks backward compatibility.",
        "sentenceTranslation": "Это изменение нарушает обратную совместимость.",
        "answer": "backward compatibility",
        "answers": [
          {
            "text": "backward compatibility",
            "weight": 1
          }
        ]
      },
      {
        "id": 132,
        "word": "bottleneck",
        "translation": "узкое место",
        "example": "The DB query is the bottleneck here.",
        "sentenceTranslation": "Запрос к базе данных здесь является узким местом.",
        "answer": "bottleneck",
        "answers": [
          {
            "text": "bottleneck",
            "weight": 1
          }
        ]
      },
      {
        "id": 133,
        "word": "race condition",
        "translation": "состояние гонки",
        "example": "Two requests hit the same record — classic race condition.",
        "sentenceTranslation": "Два запроса попали в одну и ту же запись: классическое состояние гонки.",
        "answer": "race condition",
        "answers": [
          {
            "text": "race condition",
            "weight": 1
          }
        ]
      },
      {
        "id": 134,
        "word": "retry logic",
        "translation": "логика повторных попыток",
        "example": "We added retry logic with exponential backoff.",
        "sentenceTranslation": "Мы добавили логику повторных попыток с экспоненциальной задержкой.",
        "answer": "retry logic",
        "answers": [
          {
            "text": "retry logic",
            "weight": 1
          }
        ]
      },
      {
        "id": 135,
        "word": "graceful degradation",
        "translation": "корректная деградация (при сбое)",
        "example": "If the cache is down, we fall back — graceful degradation.",
        "sentenceTranslation": "Если кэш недоступен, мы переключаемся на запасной вариант: это корректная деградация.",
        "answer": "graceful degradation",
        "answers": [
          {
            "text": "graceful degradation",
            "weight": 1
          }
        ]
      },
      {
        "id": 136,
        "word": "circuit breaker",
        "translation": "паттерн остановки вызовов к упавшему сервису",
        "example": "The circuit breaker opens after 5 consecutive failures.",
        "sentenceTranslation": "Защитный механизм размыкает цепочку вызовов после 5 ошибок подряд.",
        "answer": "circuit breaker",
        "answers": [
          {
            "text": "circuit breaker",
            "weight": 1
          }
        ]
      },
      {
        "id": 137,
        "word": "under the hood / internally",
        "translation": "внутри / как устроено на самом деле",
        "example": "Under the hood, it uses a connection pool.",
        "sentenceTranslation": "Внутри, под капотом, он использует пул соединений.",
        "answer": "under the hood / internally",
        "answers": [
          {
            "text": "under the hood",
            "weight": 1
          },
          {
            "text": "internally",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 138,
        "word": "downstream / upstream",
        "translation": "сервисы ниже/выше по цепочке",
        "example": "The failure in the downstream service caused a timeout.",
        "sentenceTranslation": "Сбой в зависимом сервисе дальше по цепочке вызвал таймаут.",
        "answer": "downstream / upstream",
        "answers": [
          {
            "text": "downstream",
            "weight": 1
          },
          {
            "text": "upstream",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 139,
        "word": "happy path",
        "translation": "успешный сценарий без ошибок",
        "example": "The happy path works; edge cases are the issue.",
        "sentenceTranslation": "Успешный сценарий без ошибок работает; проблема в пограничных случаях.",
        "answer": "happy path",
        "answers": [
          {
            "text": "happy path",
            "weight": 1
          }
        ]
      },
      {
        "id": 140,
        "word": "edge case / corner case",
        "translation": "граничный / нетипичный случай",
        "example": "What if the list is empty? That's an edge case.",
        "sentenceTranslation": "А что, если список пустой? Это пограничный случай.",
        "answer": "edge case / corner case",
        "answers": [
          {
            "text": "edge case",
            "weight": 1
          },
          {
            "text": "corner case",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 141,
        "word": "fall back to",
        "translation": "переключиться на запасной вариант",
        "example": "If Redis is down, we fall back to the database.",
        "sentenceTranslation": "Если Redis недоступен, мы переключаемся на базу данных.",
        "answer": "fall back to",
        "infinitive": "to fall back to",
        "answers": [
          {
            "text": "to fall back to",
            "weight": 1
          }
        ]
      },
      {
        "id": 142,
        "word": "tie into",
        "translation": "интегрироваться с (системой)",
        "example": "This service ties into the notification system.",
        "sentenceTranslation": "Этот сервис интегрируется с системой уведомлений.",
        "answer": "ties into",
        "infinitive": "to tie into",
        "answers": [
          {
            "text": "to tie into",
            "weight": 1
          }
        ]
      },
      {
        "id": 143,
        "word": "spin up / start",
        "translation": "запустить / поднять (сервер, контейнер)",
        "example": "We spin up a new instance during peak load.",
        "sentenceTranslation": "Мы запускаем / поднимаем новый инстанс во время пиковой нагрузки.",
        "answer": "spin up / start",
        "infinitive": "to spin up / to start",
        "answers": [
          {
            "text": "to spin up",
            "weight": 1
          },
          {
            "text": "to start",
            "weight": 0.85
          }
        ]
      }
    ]
  },
  {
    "topic": "Стендап и митинги",
    "words": [
      {
        "id": 144,
        "word": "to be in progress",
        "translation": "в работе / делаю прямо сейчас",
        "example": "The auth refactor is still in progress.",
        "sentenceTranslation": "Рефакторинг аутентификации всё ещё в работе.",
        "answer": "in progress",
        "answers": [
          {
            "text": "to be in progress",
            "weight": 1
          }
        ]
      },
      {
        "id": 145,
        "word": "to pick up a ticket / to take a ticket",
        "translation": "взять задачу в работу",
        "example": "I picked up the caching ticket this morning.",
        "sentenceTranslation": "Сегодня утром я взял в работу задачу по кэшированию.",
        "answer": "picked up",
        "answers": [
          {
            "text": "to pick up a ticket",
            "weight": 1
          },
          {
            "text": "to take a ticket",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 146,
        "word": "to wrap up / to finish",
        "translation": "заканчивать, завершать",
        "example": "I'm wrapping up the API integration today.",
        "sentenceTranslation": "Сегодня я завершаю интеграцию API.",
        "answer": "wrapping up",
        "answers": [
          {
            "text": "to wrap up",
            "weight": 1
          },
          {
            "text": "to finish",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 147,
        "word": "to push to review / to send to review",
        "translation": "отправить на ревью",
        "example": "I pushed the PR to review — waiting for feedback.",
        "sentenceTranslation": "Я отправил PR на ревью и жду обратной связи.",
        "answer": "pushed",
        "answers": [
          {
            "text": "to push to review",
            "weight": 1
          },
          {
            "text": "to send to review",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 148,
        "word": "to address comments / to fix comments",
        "translation": "обработать, исправить по комментариям",
        "example": "I addressed review comments, should be mergeable now.",
        "sentenceTranslation": "Я обработал / исправил комментарии с ревью, теперь должно быть можно мержить.",
        "answer": "addressed",
        "answers": [
          {
            "text": "to address comments",
            "weight": 1
          },
          {
            "text": "to fix comments",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 149,
        "word": "to land / to merge",
        "translation": "влить / смержить изменение (a PR/change)",
        "example": "The fix landed in main yesterday.",
        "sentenceTranslation": "Вчера фикс влили в main / он попал в main.",
        "answer": "landed",
        "answers": [
          {
            "text": "to land",
            "weight": 1
          },
          {
            "text": "to merge",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 150,
        "word": "to roll out / to deploy",
        "translation": "выкатить / деплоить постепенно",
        "example": "We're rolling out the endpoint to 10% of users.",
        "sentenceTranslation": "Мы постепенно выкатываем эндпоинт на 10% пользователей.",
        "answer": "rolling out",
        "answers": [
          {
            "text": "to roll out",
            "weight": 1
          },
          {
            "text": "to deploy",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 151,
        "word": "to circle back / to return to",
        "translation": "вернуться к теме позже",
        "example": "Let's circle back to this after the standup.",
        "sentenceTranslation": "Давай вернёмся к этому после стендапа.",
        "answer": "circle back",
        "answers": [
          {
            "text": "to circle back",
            "weight": 1
          },
          {
            "text": "to return to",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 152,
        "word": "on track",
        "translation": "всё идёт по плану",
        "example": "The migration is on track for Friday.",
        "sentenceTranslation": "Миграция идёт по плану к пятнице.",
        "answer": "on track",
        "answers": [
          {
            "text": "on track",
            "weight": 1
          }
        ]
      },
      {
        "id": 153,
        "word": "to spike on",
        "translation": "провести быстрое исследование",
        "example": "I'll spike on the Kafka integration today.",
        "sentenceTranslation": "Сегодня я проведу быстрое исследование по интеграции с Kafka.",
        "answer": "spike on",
        "answers": [
          {
            "text": "to spike on",
            "weight": 1
          }
        ]
      },
      {
        "id": 154,
        "word": "blocker",
        "translation": "то, что мешает двигаться дальше",
        "example": "I have a blocker — waiting on access to prod logs.",
        "sentenceTranslation": "У меня блокер: жду доступ к production-логам.",
        "answer": "blocker",
        "answers": [
          {
            "text": "blocker",
            "weight": 1
          }
        ]
      },
      {
        "id": 155,
        "word": "to be blocked on",
        "translation": "быть заблокированным (чем-то)",
        "example": "I'm blocked on the design decision from last week.",
        "sentenceTranslation": "Я заблокирован решением по дизайну с прошлой недели.",
        "answer": "blocked on",
        "answers": [
          {
            "text": "to be blocked on",
            "weight": 1
          }
        ]
      },
      {
        "id": 156,
        "word": "to unblock / to remove a blocker",
        "translation": "разблокировать / помочь с блокером",
        "example": "Can someone unblock me on the DB permissions?",
        "sentenceTranslation": "Может кто-нибудь разблокировать меня по правам доступа к базе данных?",
        "answer": "unblock",
        "answers": [
          {
            "text": "to unblock",
            "weight": 1
          },
          {
            "text": "to remove a blocker",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 157,
        "word": "dependency",
        "translation": "зависимость (от другой задачи / команды)",
        "example": "This ticket has a dependency on the infra team.",
        "sentenceTranslation": "Эта задача зависит от infra-команды.",
        "answer": "dependency",
        "answers": [
          {
            "text": "dependency",
            "weight": 1
          }
        ]
      },
      {
        "id": 158,
        "word": "to get stuck",
        "translation": "застрять, не продвигаться",
        "example": "I got stuck on the serialization issue.",
        "sentenceTranslation": "Я застрял на проблеме с сериализацией.",
        "answer": "got stuck",
        "answers": [
          {
            "text": "to get stuck",
            "weight": 1
          }
        ]
      },
      {
        "id": 159,
        "word": "to flag / to raise",
        "translation": "обратить внимание / поднять проблему",
        "example": "I want to flag a potential issue with the migration.",
        "sentenceTranslation": "Я хочу обратить внимание на потенциальную проблему с миграцией.",
        "answer": "flag",
        "answers": [
          {
            "text": "to flag",
            "weight": 1
          },
          {
            "text": "to raise",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 160,
        "word": "to raise a concern / to express a concern",
        "translation": "высказать беспокойство / сомнение",
        "example": "I want to raise a concern about the deadline.",
        "sentenceTranslation": "Я хочу высказать опасение по поводу дедлайна.",
        "answer": "raise a concern",
        "answers": [
          {
            "text": "to raise a concern",
            "weight": 1
          },
          {
            "text": "to express a concern",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 161,
        "word": "to sync with / to coordinate with",
        "translation": "скоординироваться / созвониться",
        "example": "I'll sync with Anna on the schema design.",
        "sentenceTranslation": "Я скоординируюсь / синхронизируюсь с Анной по дизайну схемы.",
        "answer": "sync with",
        "answers": [
          {
            "text": "to sync with",
            "weight": 1
          },
          {
            "text": "to coordinate with",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 162,
        "word": "to pair on",
        "translation": "работать вместе (над задачей)",
        "example": "Can we pair on this? It's getting complex.",
        "sentenceTranslation": "Можем поработать вместе над этим в паре? Задача становится сложной.",
        "answer": "pair on",
        "answers": [
          {
            "text": "to pair on",
            "weight": 1
          }
        ]
      },
      {
        "id": 163,
        "word": "to hand off / to pass on",
        "translation": "передать (задачу другому)",
        "example": "I'm handing off the ticket to Mike while I'm on leave.",
        "sentenceTranslation": "Я передаю задачу Майку, пока я в отпуске.",
        "answer": "handing off",
        "answers": [
          {
            "text": "to hand off",
            "weight": 1
          },
          {
            "text": "to pass on",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 164,
        "word": "to loop in / to bring in",
        "translation": "включить (кого-то в обсуждение)",
        "example": "Let's loop in the security team before we deploy.",
        "sentenceTranslation": "Давай подключим команду безопасности перед деплоем.",
        "answer": "loop in",
        "answers": [
          {
            "text": "to loop in",
            "weight": 1
          },
          {
            "text": "to bring in",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 165,
        "word": "to take offline",
        "translation": "обсудить отдельно, не на звонке",
        "example": "Good question — let's take that offline.",
        "sentenceTranslation": "Хороший вопрос, давай вынесем это из звонка и обсудим отдельно.",
        "answer": "offline",
        "answers": [
          {
            "text": "to take offline",
            "weight": 1
          }
        ]
      },
      {
        "id": 166,
        "word": "heads-up",
        "translation": "предварительное уведомление",
        "example": "Just a heads-up — I'll be OOO on Thursday.",
        "sentenceTranslation": "Просто короткое предупреждение: в четверг я буду вне офиса.",
        "answer": "heads-up",
        "answers": [
          {
            "text": "heads-up",
            "weight": 1
          }
        ]
      },
      {
        "id": 167,
        "word": "OOO (out of office)",
        "translation": "вне офиса / недоступен",
        "example": "I'm OOO Monday, back Tuesday.",
        "sentenceTranslation": "В понедельник я вне офиса, вернусь во вторник.",
        "answer": "OOO",
        "answers": [
          {
            "text": "OOO (out of office)",
            "weight": 1
          }
        ]
      },
      {
        "id": 168,
        "word": "roughly / approximately",
        "translation": "примерно (без точных обязательств)",
        "example": "Roughly two days, depending on the review.",
        "sentenceTranslation": "Примерно два дня, в зависимости от ревью.",
        "answer": "roughly / approximately",
        "answers": [
          {
            "text": "roughly",
            "weight": 1
          },
          {
            "text": "approximately",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 169,
        "word": "it depends on",
        "translation": "зависит от — для оценки сроков",
        "example": "It depends on how complex the edge cases are.",
        "sentenceTranslation": "Это зависит от того, насколько сложные пограничные случаи.",
        "answer": "it depends on",
        "answers": [
          {
            "text": "it depends on",
            "weight": 1
          }
        ]
      },
      {
        "id": 170,
        "word": "I'll need to look into it",
        "translation": "нужно разобраться перед ответом",
        "example": "I'll need to look into it before giving an estimate.",
        "sentenceTranslation": "Мне нужно будет разобраться в этом, прежде чем дать оценку.",
        "answer": "look into it",
        "answers": [
          {
            "text": "I'll need to look into it",
            "weight": 1
          }
        ]
      },
      {
        "id": 171,
        "word": "as far as I know",
        "translation": "насколько мне известно",
        "example": "As far as I know, the staging deploy is fine.",
        "sentenceTranslation": "Насколько мне известно, деплой на staging прошёл нормально.",
        "answer": "as far as I know",
        "answers": [
          {
            "text": "as far as I know",
            "weight": 1
          }
        ]
      },
      {
        "id": 172,
        "word": "to give a rough estimate",
        "translation": "дать примерную оценку",
        "example": "I can give a rough estimate — maybe 3–5 days.",
        "sentenceTranslation": "Я могу дать примерную оценку: возможно, 3-5 дней.",
        "answer": "give a rough estimate",
        "answers": [
          {
            "text": "to give a rough estimate",
            "weight": 1
          }
        ]
      },
      {
        "id": 173,
        "word": "might / could",
        "translation": "снижает категоричность высказывания",
        "example": "This might take longer than expected.",
        "sentenceTranslation": "Это может занять больше времени, чем ожидалось.",
        "answer": "might / could",
        "answers": [
          {
            "text": "might",
            "weight": 1
          },
          {
            "text": "could",
            "weight": 0.95
          }
        ]
      }
    ]
  },
  {
    "topic": "Code Review: процесс и коммуникация",
    "words": [
      {
        "id": 174,
        "word": "pull request / PR",
        "translation": "запрос на вливание изменений",
        "example": "I opened a PR for the auth refactor — ready for review.",
        "sentenceTranslation": "Я открыл PR для рефакторинга авторизации — можно ревьюить.",
        "answer": "pull request / PR",
        "answers": [
          {
            "text": "pull request",
            "weight": 1
          },
          {
            "text": "PR",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 175,
        "word": "to leave a comment",
        "translation": "оставить комментарий",
        "example": "I left a few comments on the logic in the middleware section.",
        "sentenceTranslation": "Я оставил несколько комментариев к логике в разделе с middleware.",
        "answer": "to leave a comment",
        "answers": [
          {
            "text": "to leave a comment",
            "weight": 1
          }
        ]
      },
      {
        "id": 176,
        "word": "to address a comment",
        "translation": "обработать комментарий — исправить или ответить",
        "example": "I addressed all the comments — please take another look.",
        "sentenceTranslation": "Я обработал все комментарии — пожалуйста, посмотри ещё раз.",
        "answer": "to address a comment",
        "answers": [
          {
            "text": "to address a comment",
            "weight": 1
          }
        ]
      },
      {
        "id": 177,
        "word": "to request changes",
        "translation": "запросить изменения — блокирует мерж",
        "example": "I requested changes — there are a few things to fix first.",
        "sentenceTranslation": "Я запросил изменения — сначала нужно кое-что исправить.",
        "answer": "to request changes",
        "answers": [
          {
            "text": "to request changes",
            "weight": 1
          }
        ]
      },
      {
        "id": 178,
        "word": "easy to follow",
        "translation": "легко читается / понятно",
        "example": "The logic is easy to follow — good job on the naming.",
        "sentenceTranslation": "Логика легко читается — названия подобраны хорошо.",
        "answer": "easy to follow",
        "answers": [
          {
            "text": "easy to follow",
            "weight": 1
          }
        ]
      },
      {
        "id": 179,
        "word": "optional",
        "translation": "необязательно исправлять — на усмотрение автора",
        "example": "Optional: you could extract this into a helper function.",
        "sentenceTranslation": "Необязательно: можно вынести это во вспомогательную функцию.",
        "answer": "optional",
        "answers": [
          {
            "text": "optional",
            "weight": 1
          }
        ]
      },
      {
        "id": 180,
        "word": "alternatively...",
        "translation": "как вариант",
        "example": "Alternatively, we could use a map here instead of a loop.",
        "sentenceTranslation": "Как вариант, здесь можно использовать map вместо цикла.",
        "answer": "alternatively...",
        "answers": [
          {
            "text": "alternatively",
            "weight": 1
          }
        ]
      },
      {
        "id": 181,
        "word": "suggestion:",
        "translation": "предложение по улучшению — необязательная рекомендация",
        "example": "Suggestion: rename this variable to make it clearer.",
        "sentenceTranslation": "Предложение: переименовать эту переменную, чтобы её назначение было понятнее.",
        "answer": "suggestion:",
        "answers": [
          {
            "text": "suggestion",
            "weight": 1
          }
        ]
      },
      {
        "id": 182,
        "word": "done / fixed",
        "translation": "сделано / исправлено",
        "example": "Done — I renamed the variable as suggested.",
        "sentenceTranslation": "Готово — я переименовал переменную, как и предлагалось.",
        "answer": "done / fixed",
        "answers": [
          {
            "text": "done",
            "weight": 1
          },
          {
            "text": "fixed",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 183,
        "word": "good point",
        "translation": "хорошее замечание — согласен",
        "example": "Good point — I added error handling for that case.",
        "sentenceTranslation": "Хорошее замечание — я добавил обработку ошибки для этого случая.",
        "answer": "good point",
        "answers": [
          {
            "text": "good point",
            "weight": 1
          }
        ]
      },
      {
        "id": 184,
        "word": "LGTM",
        "translation": "LGTM — расшифруй аббревиатуру (выглядит хорошо, меня устраивает)",
        "example": "LGTM — approved.",
        "sentenceTranslation": "Выглядит хорошо — одобрено.",
        "answer": "LGTM",
        "answers": [
          {
            "text": "looks good to me",
            "weight": 1
          }
        ]
      },
      {
        "id": 185,
        "word": "WDYT",
        "translation": "WDYT — расшифруй аббревиатуру (что ты думаешь?)",
        "example": "WDYT about extracting this into a helper?",
        "sentenceTranslation": "Что думаешь насчёт того, чтобы вынести это во вспомогательную функцию?",
        "answer": "WDYT",
        "answers": [
          {
            "text": "what do you think",
            "weight": 1
          }
        ]
      },
      {
        "id": 186,
        "word": "AFAIK",
        "translation": "AFAIK — расшифруй аббревиатуру (насколько мне известно)",
        "example": "AFAIK this endpoint is not used anymore.",
        "sentenceTranslation": "Насколько мне известно, этот эндпоинт больше не используется.",
        "answer": "AFAIK",
        "answers": [
          {
            "text": "as far as I know",
            "weight": 1
          }
        ]
      },
      {
        "id": 187,
        "word": "IMO / IMHO",
        "translation": "IMO / IMHO — расшифруй одну из аббревиатур (по моему мнению / по моему скромному мнению)",
        "example": "IMO this is over-engineered for now.",
        "sentenceTranslation": "По моему мнению, на данный момент это чрезмерно усложнено.",
        "answer": "IMO / IMHO",
        "answers": [
          {
            "text": "in my opinion",
            "weight": 1
          },
          {
            "text": "in my humble opinion",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 188,
        "word": "TBH",
        "translation": "TBH — расшифруй аббревиатуру (честно говоря)",
        "example": "TBH I'm not sure this is the right approach.",
        "sentenceTranslation": "Честно говоря, я не уверен, что это правильный подход.",
        "answer": "TBH",
        "answers": [
          {
            "text": "to be honest",
            "weight": 1
          }
        ]
      },
      {
        "id": 189,
        "word": "NIT",
        "translation": "NIT — расшифруй аббревиатуру (мелкое замечание)",
        "example": "NIT: missing space after the comma.",
        "sentenceTranslation": "Мелкое замечание: после запятой отсутствует пробел.",
        "answer": "NIT",
        "answers": [
          {
            "text": "nitpick",
            "weight": 1
          }
        ]
      },
      {
        "id": 190,
        "word": "IDK",
        "translation": "IDK — расшифруй аббревиатуру (я не знаю)",
        "example": "IDK if this is the best place for this logic.",
        "sentenceTranslation": "Не знаю, лучшее ли это место для данной логики.",
        "answer": "IDK",
        "answers": [
          {
            "text": "I don't know",
            "weight": 1
          }
        ]
      },
      {
        "id": 191,
        "word": "FYI",
        "translation": "FYI — расшифруй аббревиатуру (к сведению)",
        "example": "FYI this method is deprecated in the new version.",
        "sentenceTranslation": "К сведению: в новой версии этот метод объявлен устаревшим.",
        "answer": "FYI",
        "answers": [
          {
            "text": "for your information",
            "weight": 1
          }
        ]
      },
      {
        "id": 192,
        "word": "WIP",
        "translation": "WIP — расшифруй аббревиатуру (работа в процессе)",
        "example": "WIP — not ready for review yet, just sharing for feedback.",
        "sentenceTranslation": "Работа ещё идёт — к ревью пока не готово, просто делюсь для обратной связи.",
        "answer": "WIP",
        "answers": [
          {
            "text": "work in progress",
            "weight": 1
          }
        ]
      },
      {
        "id": 193,
        "word": "RFC",
        "translation": "RFC — расшифруй аббревиатуру (запрос на комментарии)",
        "example": "RFC: thinking about restructuring this module — thoughts?",
        "sentenceTranslation": "Запрос на обратную связь: думаю о реструктуризации этого модуля — есть мысли?",
        "answer": "RFC",
        "answers": [
          {
            "text": "request for comments",
            "weight": 1
          }
        ]
      },
      {
        "id": 194,
        "word": "implement / implementation",
        "translation": "реализовывать / реализация",
        "example": "We should implement this in a separate module and keep the implementation simple.",
        "sentenceTranslation": "Нам следует реализовать это в отдельном модуле и сохранить реализацию простой.",
        "answer": "implement / implementation",
        "infinitive": "to implement",
        "answers": [
          {
            "text": "implement",
            "weight": 1
          },
          {
            "text": "implementation",
            "weight": 0.95
          }
        ]
      },
      {
        "id": 195,
        "word": "imply",
        "translation": "подразумевать, означать косвенно",
        "example": "This change would imply that all clients need to update.",
        "sentenceTranslation": "Это изменение будет подразумевать, что всем клиентам нужно обновиться.",
        "answer": "imply",
        "infinitive": "to imply",
        "answers": [
          {
            "text": "imply",
            "weight": 1
          }
        ]
      },
      {
        "id": 196,
        "word": "desirable",
        "translation": "желательный, предпочтительный",
        "example": "A smaller public API is desirable in this case.",
        "sentenceTranslation": "В этом случае желателен более компактный публичный API.",
        "answer": "desirable",
        "answers": [
          {
            "text": "desirable",
            "weight": 1
          }
        ]
      },
      {
        "id": 197,
        "word": "take into account",
        "translation": "принимать во внимание, учитывать",
        "example": "We should take backward compatibility into account.",
        "sentenceTranslation": "Нам следует учитывать обратную совместимость.",
        "answer": "take into account",
        "infinitive": "to take into account",
        "answers": [
          {
            "text": "take into account",
            "weight": 1
          }
        ]
      },
      {
        "id": 198,
        "word": "reach",
        "translation": "достигать, доходить до",
        "example": "This branch is never reached when the value is null.",
        "sentenceTranslation": "Эта ветка никогда не достигается, когда значение равно null.",
        "answer": "reach",
        "infinitive": "to reach",
        "answers": [
          {
            "text": "reach",
            "weight": 1
          }
        ]
      },
      {
        "id": 199,
        "word": "distinguish",
        "translation": "различать, отличать одно от другого",
        "example": "The method should distinguish between missing and invalid values.",
        "sentenceTranslation": "Метод должен различать отсутствующие и недопустимые значения.",
        "answer": "distinguish",
        "infinitive": "to distinguish",
        "answers": [
          {
            "text": "distinguish",
            "weight": 1
          }
        ]
      },
      {
        "id": 200,
        "word": "get rid of",
        "translation": "избавиться от, убрать",
        "example": "Can we get rid of this duplicated validation logic?",
        "sentenceTranslation": "Можем ли мы избавиться от этой дублирующейся логики валидации?",
        "answer": "get rid of",
        "infinitive": "to get rid of",
        "answers": [
          {
            "text": "get rid of",
            "weight": 1
          }
        ]
      },
      {
        "id": 201,
        "word": "explicit",
        "translation": "явный, однозначно указанный",
        "example": "Let's make the dependency explicit in the constructor.",
        "sentenceTranslation": "Давай явно укажем эту зависимость в конструкторе.",
        "answer": "explicit",
        "answers": [
          {
            "text": "explicit",
            "weight": 1
          }
        ]
      },
      {
        "id": 202,
        "word": "defer",
        "translation": "отложить, перенести на потом",
        "example": "We can defer this optimization until it becomes necessary.",
        "sentenceTranslation": "Мы можем отложить эту оптимизацию до тех пор, пока она не станет необходимой.",
        "answer": "defer",
        "infinitive": "to defer",
        "answers": [
          {
            "text": "defer",
            "weight": 1
          }
        ]
      },
      {
        "id": 203,
        "word": "extract",
        "translation": "извлечь, вынести в отдельную часть",
        "example": "I suggest we extract this logic into a helper function.",
        "sentenceTranslation": "Предлагаю вынести эту логику во вспомогательную функцию.",
        "answer": "extract",
        "infinitive": "to extract",
        "answers": [
          {
            "text": "extract",
            "weight": 1
          }
        ]
      }
    ]
  },
  {
    "topic": "Архитектура и системный дизайн",
    "words": [
      {
        "id": 204,
        "word": "monolith",
        "translation": "монолит — всё в одном приложении",
        "example": "We started with a monolith, but it became hard to scale.",
        "sentenceTranslation": "Мы начали с монолита, но его стало трудно масштабировать.",
        "answer": "monolith",
        "answers": [
          {
            "text": "monolith",
            "weight": 1
          }
        ]
      },
      {
        "id": 205,
        "word": "microservice",
        "translation": "микросервис — отдельный небольшой сервис",
        "example": "Each microservice owns its own database and logic.",
        "sentenceTranslation": "Каждый микросервис владеет собственной базой данных и логикой.",
        "answer": "microservice",
        "answers": [
          {
            "text": "microservice",
            "weight": 1
          }
        ]
      },
      {
        "id": 206,
        "word": "event-driven architecture",
        "translation": "событийно-управляемая архитектура",
        "example": "We use event-driven architecture to decouple services.",
        "sentenceTranslation": "Мы используем событийно-управляемую архитектуру, чтобы развязать сервисы.",
        "answer": "event-driven architecture",
        "answers": [
          {
            "text": "event-driven architecture",
            "weight": 1
          }
        ]
      },
      {
        "id": 207,
        "word": "message queue / message broker",
        "translation": "очередь сообщений / брокер сообщений",
        "example": "We use a message queue to decouple the producer from the consumer.",
        "sentenceTranslation": "Мы используем очередь сообщений, чтобы развязать производителя и потребителя.",
        "answer": "message queue",
        "answers": [
          {
            "text": "message queue",
            "weight": 1
          },
          {
            "text": "message broker",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 208,
        "word": "availability",
        "translation": "доступность — сервис работает, когда нужен",
        "example": "We target 99.9% availability — that's about 8 hours of downtime per year.",
        "sentenceTranslation": "Мы стремимся к доступности 99,9% — это около 8 часов простоя в год.",
        "answer": "availability",
        "answers": [
          {
            "text": "availability",
            "weight": 1
          }
        ]
      },
      {
        "id": 209,
        "word": "fault tolerance",
        "translation": "отказоустойчивость — система работает при сбоях",
        "example": "The system needs to be fault tolerant — one node going down shouldn't affect users.",
        "sentenceTranslation": "Система должна быть отказоустойчивой — отказ одного узла не должен влиять на пользователей.",
        "answer": "fault tolerant",
        "answers": [
          {
            "text": "fault tolerance",
            "weight": 1
          }
        ]
      },
      {
        "id": 210,
        "word": "redundancy",
        "translation": "избыточность — дублирование компонентов для надёжности",
        "example": "We added redundancy by running three instances in different availability zones.",
        "sentenceTranslation": "Мы добавили избыточность, запустив три инстанса в разных зонах доступности.",
        "answer": "redundancy",
        "answers": [
          {
            "text": "redundancy",
            "weight": 1
          }
        ]
      },
      {
        "id": 211,
        "word": "single point of failure",
        "translation": "единственная точка отказа",
        "example": "The database is a single point of failure — we need replication.",
        "sentenceTranslation": "База данных — единственная точка отказа, поэтому нам нужна репликация.",
        "answer": "single point of failure",
        "answers": [
          {
            "text": "single point of failure",
            "weight": 1
          }
        ]
      },
      {
        "id": 212,
        "word": "failover",
        "translation": "автоматическое переключение на резервный компонент",
        "example": "Failover kicks in automatically when the primary goes down.",
        "sentenceTranslation": "Переключение на резервный компонент срабатывает автоматически, когда основной компонент выходит из строя.",
        "answer": "Failover",
        "answers": [
          {
            "text": "failover",
            "weight": 1
          }
        ]
      },
      {
        "id": 213,
        "word": "consistency",
        "translation": "согласованность данных — все узлы видят одно и то же",
        "example": "Strong consistency is hard to achieve in a distributed system.",
        "sentenceTranslation": "Строгой согласованности трудно достичь в распределённой системе.",
        "answer": "consistency",
        "answers": [
          {
            "text": "consistency",
            "weight": 1
          }
        ]
      },
      {
        "id": 214,
        "word": "eventual consistency",
        "translation": "согласованность в конечном счёте — данные на разных узлах со временем приходят к одному состоянию",
        "example": "We use eventual consistency — reads might be slightly stale.",
        "sentenceTranslation": "Мы используем согласованность в конечном счёте — при чтении данные могут быть немного устаревшими.",
        "answer": "eventual consistency",
        "answers": [
          {
            "text": "eventual consistency",
            "weight": 1
          }
        ]
      },
      {
        "id": 215,
        "word": "CAP theorem",
        "translation": "теорема CAP — consistency, availability, partition tolerance",
        "example": "The CAP theorem says you can only guarantee two out of three properties.",
        "sentenceTranslation": "Теорема CAP гласит, что можно гарантировать только два свойства из трёх.",
        "answer": "CAP theorem",
        "answers": [
          {
            "text": "CAP theorem",
            "weight": 1
          }
        ]
      },
      {
        "id": 216,
        "word": "evolve",
        "translation": "развиваться, эволюционировать",
        "example": "The architecture evolved as the product and traffic grew.",
        "sentenceTranslation": "Архитектура развивалась по мере роста продукта и трафика.",
        "answer": "evolved",
        "infinitive": "to evolve",
        "answers": [
          {
            "text": "to evolve",
            "weight": 1
          }
        ]
      },
      {
        "id": 217,
        "word": "heavily",
        "translation": "сильно, в значительной степени",
        "example": "This service relies heavily on the database.",
        "sentenceTranslation": "Этот сервис сильно зависит от базы данных.",
        "answer": "heavily",
        "answers": [
          {
            "text": "heavily",
            "weight": 1
          }
        ]
      },
      {
        "id": 218,
        "word": "overhead",
        "translation": "накладные расходы, дополнительные издержки или сложность",
        "example": "Introducing microservices adds operational overhead.",
        "sentenceTranslation": "Внедрение микросервисов добавляет операционные накладные расходы.",
        "answer": "overhead",
        "answers": [
          {
            "text": "overhead",
            "weight": 1
          }
        ]
      },
      {
        "id": 219,
        "word": "downside",
        "translation": "недостаток, минус",
        "example": "The main downside of this approach is the additional complexity.",
        "sentenceTranslation": "Главный недостаток этого подхода — дополнительная сложность.",
        "answer": "downside",
        "answers": [
          {
            "text": "downside",
            "weight": 1
          }
        ]
      },
      {
        "id": 220,
        "word": "entire",
        "translation": "весь, целый",
        "example": "A failure in one component can affect the entire system.",
        "sentenceTranslation": "Сбой одного компонента может повлиять на всю систему.",
        "answer": "entire",
        "answers": [
          {
            "text": "entire",
            "weight": 1
          }
        ]
      },
      {
        "id": 221,
        "word": "outweigh",
        "translation": "перевешивать, быть важнее",
        "example": "The benefits outweigh the additional complexity.",
        "sentenceTranslation": "Преимущества перевешивают дополнительную сложность.",
        "answer": "outweigh",
        "infinitive": "to outweigh",
        "answers": [
          {
            "text": "to outweigh",
            "weight": 1
          }
        ]
      },
      {
        "id": 222,
        "word": "deal with",
        "translation": "разбираться с чем-либо, справляться, решать проблему",
        "example": "Distributed systems need to deal with partial failures.",
        "sentenceTranslation": "Распределённые системы должны справляться с частичными сбоями.",
        "answer": "deal with",
        "infinitive": "to deal with",
        "answers": [
          {
            "text": "to deal with",
            "weight": 1
          }
        ]
      },
      {
        "id": 223,
        "word": "resilience",
        "translation": "устойчивость к сбоям, способность восстанавливаться",
        "example": "Redundancy improves the system's resilience during outages.",
        "sentenceTranslation": "Избыточность повышает устойчивость системы во время сбоев.",
        "answer": "resilience",
        "answers": [
          {
            "text": "resilience",
            "weight": 1
          }
        ]
      },
      {
        "id": 224,
        "word": "gain",
        "translation": "получать, приобретать",
        "example": "We gain flexibility by decoupling the services.",
        "sentenceTranslation": "Мы получаем гибкость, разделяя сервисы.",
        "answer": "gain",
        "infinitive": "to gain",
        "answers": [
          {
            "text": "to gain",
            "weight": 1
          }
        ]
      },
      {
        "id": 225,
        "word": "boundaries",
        "translation": "границы",
        "example": "Clear service boundaries reduce coupling between teams.",
        "sentenceTranslation": "Чёткие границы сервисов уменьшают связанность между командами.",
        "answer": "boundaries",
        "answers": [
          {
            "text": "boundaries",
            "weight": 1
          }
        ]
      },
      {
        "id": 226,
        "word": "maturity",
        "translation": "зрелость системы, процесса или команды",
        "example": "The right architecture depends on the team's operational maturity.",
        "sentenceTranslation": "Подходящая архитектура зависит от операционной зрелости команды.",
        "answer": "maturity",
        "answers": [
          {
            "text": "maturity",
            "weight": 1
          }
        ]
      },
      {
        "id": 227,
        "word": "scalability",
        "translation": "масштабируемость — способность расти под нагрузкой",
        "example": "Scalability was the main reason we moved away from the monolith.",
        "sentenceTranslation": "Масштабируемость была главной причиной, по которой мы отказались от монолита.",
        "answer": "Scalability",
        "answers": [
          {
            "text": "scalability",
            "weight": 1
          }
        ]
      },
      {
        "id": 228,
        "word": "trade-off",
        "translation": "компромисс — выигрываешь в одном, теряешь в другом",
        "example": "There's always a trade-off between consistency and availability.",
        "sentenceTranslation": "Между согласованностью и доступностью всегда приходится искать компромисс.",
        "answer": "trade-off",
        "answers": [
          {
            "text": "trade-off",
            "weight": 1
          }
        ]
      },
      {
        "id": 229,
        "word": "approach",
        "translation": "подход — способ решения задачи",
        "example": "We went with a different approach — event-driven instead of synchronous calls.",
        "sentenceTranslation": "Мы выбрали другой подход — событийную модель вместо синхронных вызовов.",
        "answer": "approach",
        "answers": [
          {
            "text": "approach",
            "weight": 1
          }
        ]
      },
      {
        "id": 230,
        "word": "design",
        "translation": "архитектурное решение / дизайн системы",
        "example": "The current design doesn't handle failover well.",
        "sentenceTranslation": "В текущем архитектурном решении плохо реализовано переключение на резервный компонент.",
        "answer": "design",
        "answers": [
          {
            "text": "design",
            "weight": 1
          }
        ]
      },
      {
        "id": 231,
        "word": "implementation",
        "translation": "реализация — как это сделано на практике",
        "example": "The design is solid, but the implementation has some gaps.",
        "sentenceTranslation": "Архитектурное решение продуманное, но в реализации есть недочёты.",
        "answer": "implementation",
        "answers": [
          {
            "text": "implementation",
            "weight": 1
          }
        ]
      },
      {
        "id": 232,
        "word": "flow",
        "translation": "поток — как данные или запросы движутся через систему",
        "example": "Let me walk you through the request flow in this architecture.",
        "sentenceTranslation": "Давайте я покажу вам, как запрос проходит через эту архитектуру.",
        "answer": "flow",
        "answers": [
          {
            "text": "flow",
            "weight": 1
          }
        ]
      },
      {
        "id": 233,
        "word": "coupling / tight coupling",
        "translation": "связанность / сильная связанность",
        "example": "Tight coupling makes it hard to deploy services independently.",
        "sentenceTranslation": "Сильная связанность затрудняет независимое развёртывание сервисов.",
        "answer": "Tight coupling",
        "answers": [
          {
            "text": "coupling",
            "weight": 1
          },
          {
            "text": "tight coupling",
            "weight": 1
          }
        ]
      },
      {
        "id": 234,
        "word": "loose coupling",
        "translation": "слабая связанность — сервисы независимы друг от друга",
        "example": "We aim for loose coupling so teams can deploy independently.",
        "sentenceTranslation": "Мы стремимся к слабой связанности, чтобы команды могли независимо развёртывать свои сервисы.",
        "answer": "loose coupling",
        "answers": [
          {
            "text": "loose coupling",
            "weight": 1
          }
        ]
      },
      {
        "id": 235,
        "word": "dependency",
        "translation": "зависимость между компонентами",
        "example": "This service has a hard dependency on the auth service.",
        "sentenceTranslation": "Этот сервис жёстко зависит от сервиса аутентификации.",
        "answer": "dependency",
        "answers": [
          {
            "text": "dependency",
            "weight": 1
          }
        ]
      }
    ]
  }
];
