# English Grammar Trainer

Небольшое браузерное приложение для тренировки грамматики по вашим PDF.

## Что умеет

- вопросы идут по порядку, как в PDF (по номеру задания);
- показывает вопрос и ожидает ввод правильного слова/фразы;
- варианты `a/b/c` всегда отображаются на экране, как в книге;
- кнопка `Показать ответ` раскрывает правильный вариант;
- статистика по текущей сессии (верно/ошибок);
- прогресс автоматически сохраняется в `localStorage` и восстанавливается после перезагрузки страницы.

## Запуск

Откройте файл `index.html` в браузере или поднимите локальный сервер:

```bash
cd /Users/muratbiazrov/murat-develop/english-gram
python3 -m http.server 4173
```

Потом откройте:

- `http://localhost:4173/index.html`

## Пересборка базы вопросов из PDF

```bash
cd /Users/muratbiazrov/murat-develop/english-gram
python3 scripts/build_questions.py
```

Скрипт берёт:

- `english_grammar_exercises_with_answers_part_1.pdf`
- `ответы.pdf`

и обновляет `questions.js`.
