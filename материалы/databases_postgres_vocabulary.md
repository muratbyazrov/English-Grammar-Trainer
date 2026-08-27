# Databases · PostgreSQL · словарь

---

## 🗄 Структура базы данных

| Слово / выражение | Перевод | Пример |
|---|---|---|
| schema | схема — структура базы данных | We updated the schema to add a new column for user preferences. |
| row / record | строка / запись | We lock the row before updating it to avoid conflicts. |
| constraint | ограничение — правило целостности данных | The foreign key constraint prevents orphaned records. |
| foreign key | внешний ключ — ссылка на другую таблицу | We added a foreign key to link orders to users. |
| primary key | первичный ключ — уникальный идентификатор строки | We use UUID as the primary key instead of a sequential integer. |
| nullable | может быть NULL — значение необязательно | The phone column is nullable — not all users provide it. |
| sequence | последовательность — генерирует уникальные числа | We use a sequence to auto-increment the ID column. |

---

## ⚡ Производительность

| Слово / выражение | Перевод | Пример |
|---|---|---|
| index | индекс — ускоряет поиск по таблице | Adding an index on user_id cut query time in half. |
| execution plan | план выполнения запроса | We analyzed the execution plan and found a sequential scan. |
| sequential scan | полный перебор таблицы — медленно | The query was doing a sequential scan on 10 million rows. |
| index scan | поиск по индексу — быстро | After adding the index, Postgres switched to an index scan. |
| query | запрос к базе данных | This query is too slow — it needs to be optimized. |

---

## 🔒 Транзакции и блокировки

| Слово / выражение | Перевод | Пример |
|---|---|---|
| transaction | транзакция — группа операций как одно целое | We wrap both updates in a transaction to keep data consistent. |
| lock | блокировка строки или таблицы | The lock prevents other transactions from modifying the row. |
| deadlock | взаимная блокировка — два процесса ждут друг друга | We got a deadlock — two transactions were waiting on each other. |
| rollback | откат транзакции при ошибке | The transaction failed and Postgres rolled it back automatically. |
| commit | зафиксировать транзакцию — сохранить изменения | We commit the transaction only after all updates succeed. |
| isolation level | уровень изоляции транзакций | We use read committed isolation level to avoid dirty reads. |

---

## 🔁 Репликация и миграции

| Слово / выражение | Перевод | Пример |
|---|---|---|
| replication | репликация — копирование данных на другой сервер | We set up replication to improve read performance and reliability. |
| migration | миграция — изменение структуры базы данных | We wrote a migration to add the new column without downtime. |
| join | объединение таблиц по условию | We're using a left join to include users without orders. |

---

## 🛠 Глаголы

| Слово / выражение | Перевод | Пример |
|---|---|---|
| run / execute a query | выполнить запрос | I ran the query on the replica to avoid hitting the primary. |
| optimize a query | оптимизировать запрос | We optimized the query and response time dropped by 60%. |
| analyze the execution plan | проанализировать план выполнения | Run EXPLAIN ANALYZE to see the execution plan before optimizing. |
| lock a row | заблокировать строку | We lock the row with SELECT FOR UPDATE before modifying it. |
| acquire | получить / захватить — используется с lock, connection, resource | We need to acquire a lock before updating the record. |
| avoid a deadlock | избежать взаимной блокировки | To avoid deadlocks, always acquire locks in the same order. |
| handle a transaction | управлять транзакцией | We handle transactions at the service level, not in the query. |
| roll back a transaction | откатить транзакцию | If any step fails, we roll back the entire transaction. |


**acquire** — дополнительные примеры:
- acquire a lock — захватить блокировку
- acquire a connection — получить соединение из пула
- acquire a resource — получить доступ к ресурсу
- failed to acquire a lock — не удалось захватить блокировку
- waiting to acquire — ожидает захвата (часто в логах)

---

## 💬 Выражения для обсуждения

| Слово / выражение | Перевод | Пример |
|---|---|---|
| hit the database | обратиться к базе данных | Every request hits the database — we need to add caching. |
| put pressure on the database | создавать нагрузку на базу данных | These batch jobs put a lot of pressure on the database during peak hours. |
| run out of connections | исчерпать пул соединений | We ran out of connections under high load — connection pooling fixed it. |
| introduce a migration | добавить миграцию | We introduced a migration to rename the column without breaking the API. |
| run without downtime | выполнить без остановки сервиса | The migration needs to run without downtime — we have to be careful. |
