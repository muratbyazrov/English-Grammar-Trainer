#!/usr/bin/env python3
"""Extract grammar exercises + answer key into questions.js for the browser app.

Structure expected:
  books/
    A1/
      <any name>.pdf        — exercises PDF (the one that is NOT ответы.pdf)
      ответы.pdf            — answer key
    A2/
      ...
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader

BOOKS_DIR = Path(__file__).resolve().parents[1] / "books"
OUT_FILE = Path(__file__).resolve().parents[1] / "questions.js"

QUESTION_RE = re.compile(
    r"(\d+)\.\s*(.*?)\s*a\)\s*(.*?)\s*b\)\s*(.*?)\s*c\)\s*(.*?)(?=(?:\n\s*\d+\.)|\Z)",
    re.S,
)


def read_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    joined = "\n".join((page.extract_text() or "") for page in reader.pages)
    joined = joined.replace("\u00a0", " ")
    joined = re.sub(r"\n+", "\n", joined)
    return joined


def clean_text(value: str) -> str:
    value = " ".join(value.split())
    value = value.replace("\u2019", "'").replace("`", "'")
    value = value.replace("\u2026", "...")
    value = re.sub(r"([A-Za-z])\s*'\s*([A-Za-z])", r"\1'\2", value)
    # Merge only isolated single-letter sequences (OCR artifact: "s e n t" → "sent")
    # Uses 3+ single letters in a row to avoid merging real words like "her a" → "hera"
    value = re.sub(r"\b([A-Za-z])( [A-Za-z]){2,}\b", lambda m: m.group().replace(" ", ""), value)
    value = re.sub(r"\s+([.,!?;:])", r"\1", value)
    return value.strip()


def parse_answers(answer_text: str) -> dict[int, str]:
    return {int(num): letter for num, letter in re.findall(r"(\d+)\.([abc])", answer_text)}


def is_valid_card(prompt: str, options: dict[str, str], answer: str) -> bool:
    fields = [prompt, options["a"], options["b"], options["c"], answer]

    if any(not field for field in fields):
        return False

    if any(len(field) > 120 for field in fields):
        return False

    if any(re.search(r"\d+\.|[abc]\)", value) for value in options.values()):
        return False

    if re.search(r"\b(Answers|Exercises|Table of contents)\b", " ".join(fields), re.I):
        return False

    return True


def parse_questions(exercise_text: str, answers: dict[int, str]) -> list[dict]:
    result: list[dict] = []

    for match in QUESTION_RE.finditer(exercise_text):
        q_id = int(match.group(1))
        prompt = clean_text(match.group(2))
        a_opt = clean_text(match.group(3))
        b_opt = clean_text(match.group(4))
        c_opt = clean_text(match.group(5))

        letter = answers.get(q_id)
        if letter is None:
            continue

        options = {"a": a_opt, "b": b_opt, "c": c_opt}
        answer = options.get(letter, "")
        if not is_valid_card(prompt, options, answer):
            continue

        result.append(
            {
                "id": q_id,
                "prompt": prompt,
                "options": options,
                "correctOption": letter,
                "answer": answer,
            }
        )

    result.sort(key=lambda item: item["id"])
    return result


def process_level(level_dir: Path) -> list[dict]:
    answers_pdf = level_dir / "ответы.pdf"
    if not answers_pdf.exists():
        print(f"  Skipping {level_dir.name}: ответы.pdf not found")
        return []

    exercises_pdfs = [p for p in level_dir.glob("*.pdf") if p.name != "ответы.pdf"]
    if not exercises_pdfs:
        print(f"  Skipping {level_dir.name}: no exercises PDF found")
        return []

    exercises_pdf = exercises_pdfs[0]
    print(f"  {level_dir.name}: {exercises_pdf.name} + ответы.pdf")

    exercise_text = read_text(exercises_pdf)
    answer_text = read_text(answers_pdf)
    answers = parse_answers(answer_text)
    return parse_questions(exercise_text, answers)


def main() -> None:
    levels = sorted(d for d in BOOKS_DIR.iterdir() if d.is_dir())
    if not levels:
        print(f"No level folders found in {BOOKS_DIR}")
        return

    all_levels: dict[str, list[dict]] = {}
    for level_dir in levels:
        questions = process_level(level_dir)
        if questions:
            all_levels[level_dir.name] = questions
            print(f"  → {len(questions)} questions")

    payload = "window.GRAMMAR_QUESTIONS = " + json.dumps(all_levels, ensure_ascii=False) + ";\n"
    OUT_FILE.write_text(payload, encoding="utf-8")
    print(f"\nWrote {sum(len(q) for q in all_levels.values())} questions "
          f"across {len(all_levels)} level(s) to {OUT_FILE}")


if __name__ == "__main__":
    main()
