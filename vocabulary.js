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
        "translation": "во время, в процессе",
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
    "topic": "Стендап и IT-коммуникация",
    "words": [
      {
        "id": 113,
        "word": "kick off / start",
        "translation": "начинать / дать старт",
        "example": "Let's kick off our standup meeting.",
        "sentenceTranslation": "Давайте начнём наш стендап",
        "answer": "kick off / start",
        "infinitive": "to kick off / to start",
        "answers": [
          {
            "text": "to kick off",
            "weight": 1
          },
          {
            "text": "to start",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 114,
        "word": "run into",
        "translation": "столкнуться с (проблемой)",
        "example": "I've run into some issues with the database migration.",
        "sentenceTranslation": "Я столкнулся с проблемами при миграции базы данных",
        "answer": "run into",
        "infinitive": "to run into",
        "answers": [
          {
            "text": "to run into",
            "weight": 1
          }
        ]
      },
      {
        "id": 115,
        "word": "dig deeper / look deeper",
        "translation": "копнуть глубже / разобраться подробнее",
        "example": "I think I need to dig deeper into our service logs.",
        "sentenceTranslation": "Думаю, мне нужно глубже разобраться в логах нашего сервиса",
        "answer": "dig deeper / look deeper",
        "infinitive": "to dig deeper / to look deeper",
        "answers": [
          {
            "text": "to dig deeper",
            "weight": 1
          },
          {
            "text": "to look deeper",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 116,
        "word": "further / in more detail",
        "translation": "дальше / подробнее / глубже",
        "example": "I might need to discuss it further with the team.",
        "sentenceTranslation": "Возможно, мне нужно обсудить это подробнее с командой",
        "answer": "further / in more detail",
        "answers": [
          {
            "text": "further",
            "weight": 1
          },
          {
            "text": "in more detail",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 117,
        "word": "clarification / explanation",
        "translation": "уточнение / разъяснение",
        "example": "I've been waiting for some clarification on the requirements.",
        "sentenceTranslation": "Я ждал уточнений по требованиям",
        "answer": "clarification / explanation",
        "answers": [
          {
            "text": "clarification",
            "weight": 1
          },
          {
            "text": "explanation",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 118,
        "word": "swamped",
        "translation": "завален (делами / задачами)",
        "example": "I've been swamped with meetings all morning.",
        "sentenceTranslation": "Меня всё утро заваливало встречами",
        "answer": "swamped",
        "answers": [
          {
            "text": "swamped",
            "weight": 1
          }
        ]
      },
      {
        "id": 119,
        "word": "tricky / challenging",
        "translation": "сложный / коварный / непростой",
        "example": "This edge case turned out to be quite tricky.",
        "sentenceTranslation": "Этот граничный случай оказался довольно коварным",
        "answer": "tricky / challenging",
        "answers": [
          {
            "text": "tricky",
            "weight": 1
          },
          {
            "text": "challenging",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 120,
        "word": "mention",
        "translation": "упомянуть / сказать",
        "example": "I wanted to mention that the deploy is scheduled for tonight.",
        "sentenceTranslation": "Хотел упомянуть, что деплой запланирован на сегодня вечером",
        "answer": "mention",
        "infinitive": "to mention",
        "answers": [
          {
            "text": "to mention",
            "weight": 1
          }
        ]
      },
      {
        "id": 121,
        "word": "suppose / think",
        "translation": "предполагать / думать",
        "example": "I suppose we should discuss this in a separate call.",
        "sentenceTranslation": "Думаю, нам стоит обсудить это на отдельном звонке",
        "answer": "suppose / think",
        "infinitive": "to suppose / to think",
        "answers": [
          {
            "text": "to suppose",
            "weight": 1
          },
          {
            "text": "to think",
            "weight": 0.8
          }
        ]
      },
      {
        "id": 122,
        "word": "bring up / raise",
        "translation": "поднять (тему) / упомянуть",
        "example": "I wanted to bring up a concern about the API performance.",
        "sentenceTranslation": "Хотел поднять вопрос о производительности API",
        "answer": "bring up / raise",
        "infinitive": "to bring up / to raise",
        "answers": [
          {
            "text": "to bring up",
            "weight": 1
          },
          {
            "text": "to raise",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 123,
        "word": "implement",
        "translation": "реализовывать / внедрять",
        "example": "Yesterday I was implementing the new authentication flow.",
        "sentenceTranslation": "Вчера я реализовывал новый флоу авторизации",
        "answer": "implement",
        "infinitive": "to implement",
        "answers": [
          {
            "text": "to implement",
            "weight": 1
          }
        ]
      },
      {
        "id": 124,
        "word": "properly / correctly",
        "translation": "правильно / корректно / должным образом",
        "example": "The service doesn't handle errors properly yet.",
        "sentenceTranslation": "Сервис пока не обрабатывает ошибки корректно",
        "answer": "properly / correctly",
        "answers": [
          {
            "text": "properly",
            "weight": 1
          },
          {
            "text": "correctly",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 125,
        "word": "causing / leading to",
        "translation": "вызывающий / приводящий к",
        "example": "It's causing inconsistencies in the UI.",
        "sentenceTranslation": "Это вызывает несоответствия в интерфейсе",
        "answer": "causing / leading to",
        "infinitive": "to cause / to lead to",
        "answers": [
          {
            "text": "to cause",
            "weight": 1
          },
          {
            "text": "to lead to",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 126,
        "word": "dealing with / handling",
        "translation": "справляться с / иметь дело с",
        "example": "I'm currently dealing with a race condition in the payment service.",
        "sentenceTranslation": "Сейчас я разбираюсь с гонкой состояний в сервисе платежей",
        "answer": "dealing with / handling",
        "infinitive": "to deal with / to handle",
        "answers": [
          {
            "text": "to deal with",
            "weight": 1
          },
          {
            "text": "to handle",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 127,
        "word": "concerning / worrying",
        "translation": "тревожный / вызывающий беспокойство",
        "example": "That latency spike sounds concerning.",
        "sentenceTranslation": "Этот всплеск задержки звучит тревожно",
        "answer": "concerning / worrying",
        "answers": [
          {
            "text": "concerning",
            "weight": 1
          },
          {
            "text": "worrying",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 128,
        "word": "leads",
        "translation": "зацепки / наводки",
        "example": "Do you have any leads on the cause of the bug?",
        "sentenceTranslation": "Есть ли у тебя какие-нибудь зацепки по причине бага?",
        "answer": "leads",
        "answers": [
          {
            "text": "leads",
            "weight": 1
          }
        ]
      },
      {
        "id": 129,
        "word": "suspect",
        "translation": "подозревать / предполагать",
        "example": "I suspect it's a caching issue on the backend.",
        "sentenceTranslation": "Подозреваю, что это проблема с кешированием на бэкенде",
        "answer": "suspect",
        "infinitive": "to suspect",
        "answers": [
          {
            "text": "to suspect",
            "weight": 1
          }
        ]
      },
      {
        "id": 130,
        "word": "particularly / especially",
        "translation": "особенно / в частности",
        "example": "The performance is bad, particularly under high load.",
        "sentenceTranslation": "Производительность плохая, особенно под высокой нагрузкой",
        "answer": "particularly / especially",
        "answers": [
          {
            "text": "particularly",
            "weight": 1
          },
          {
            "text": "especially",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 131,
        "word": "rapidly / quickly",
        "translation": "быстро / стремительно",
        "example": "The number of errors is growing rapidly.",
        "sentenceTranslation": "Количество ошибок растёт стремительно",
        "answer": "rapidly / quickly",
        "answers": [
          {
            "text": "rapidly",
            "weight": 1
          },
          {
            "text": "quickly",
            "weight": 0.85
          }
        ]
      },
      {
        "id": 132,
        "word": "behind schedule",
        "translation": "отстаём от графика / с опозданием",
        "example": "We're a bit behind schedule due to the unexpected bug.",
        "sentenceTranslation": "Мы немного отстаём от графика из-за неожиданного бага",
        "answer": "behind schedule",
        "answers": [
          {
            "text": "behind schedule",
            "weight": 1
          }
        ]
      },
      {
        "id": 133,
        "word": "follow up",
        "translation": "вернуться (к вопросу) / проследить",
        "example": "I'll follow up with the DevOps team about the deployment issue.",
        "sentenceTranslation": "Я вернусь к вопросу с командой DevOps по поводу проблемы с деплоем",
        "answer": "follow up",
        "infinitive": "to follow up",
        "answers": [
          {
            "text": "to follow up",
            "weight": 1
          }
        ]
      },
      {
        "id": 134,
        "word": "reach out / contact",
        "translation": "обратиться / связаться",
        "example": "I'll reach out to the backend team for help.",
        "sentenceTranslation": "Я обращусь за помощью к бэкенд-команде",
        "answer": "reach out / contact",
        "infinitive": "to reach out / to contact",
        "answers": [
          {
            "text": "to reach out",
            "weight": 1
          },
          {
            "text": "to contact",
            "weight": 0.9
          }
        ]
      },
      {
        "id": 135,
        "word": "sync up",
        "translation": "синхронизироваться / созвониться",
        "example": "Let's sync up after the standup to discuss the architecture.",
        "sentenceTranslation": "Давайте созвонимся после стендапа, чтобы обсудить архитектуру",
        "answer": "sync up",
        "infinitive": "to sync up",
        "answers": [
          {
            "text": "to sync up",
            "weight": 1
          }
        ]
      },
      {
        "id": 136,
        "word": "estimate",
        "translation": "оценка (времени) / оценивать",
        "example": "My estimate for this task is two days.",
        "sentenceTranslation": "Моя оценка по этой задаче — два дня",
        "answer": "estimate",
        "infinitive": "to estimate",
        "answers": [
          {
            "text": "to estimate",
            "weight": 1
          }
        ]
      },
      {
        "id": 137,
        "word": "pending",
        "translation": "ожидает / в ожидании",
        "example": "The PR is pending review from the senior dev.",
        "sentenceTranslation": "Пулл-реквест ожидает ревью от синьора",
        "answer": "pending",
        "answers": [
          {
            "text": "pending",
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
        "id": 138,
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
        "id": 139,
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
        "id": 140,
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
        "id": 141,
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
        "id": 142,
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
        "id": 143,
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
        "id": 144,
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
        "id": 145,
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
        "id": 146,
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
        "id": 147,
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
        "id": 148,
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
        "id": 149,
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
        "id": 150,
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
        "id": 151,
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
        "id": 152,
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
        "id": 153,
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
        "id": 154,
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
        "id": 155,
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
        "id": 156,
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
        "id": 157,
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
        "id": 158,
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
        "id": 159,
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
        "id": 160,
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
        "id": 161,
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
        "id": 162,
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
        "id": 163,
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
        "id": 164,
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
        "id": 165,
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
        "id": 166,
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
        "id": 167,
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
        "id": 168,
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
        "id": 169,
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
        "id": 170,
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
        "id": 171,
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
        "id": 172,
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
        "id": 173,
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
        "id": 174,
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
        "id": 175,
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
        "id": 176,
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
        "id": 177,
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
        "id": 178,
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
        "id": 179,
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
        "id": 180,
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
        "id": 181,
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
        "id": 182,
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
        "id": 183,
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
        "id": 184,
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
        "id": 185,
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
        "id": 186,
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
        "id": 187,
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
        "id": 188,
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
        "id": 189,
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
        "id": 190,
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
        "id": 191,
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
        "id": 192,
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
        "id": 193,
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
        "id": 194,
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
        "id": 195,
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
        "id": 196,
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
        "id": 197,
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
        "id": 198,
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
  }
];
