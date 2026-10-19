#!/usr/bin/env python3
"""Build Oxford cards from the checked-in CEFR list and Russian glossary.

The six original topic files are kept as-is. Run this script, then `node build.js`.
"""

import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
SOURCE = "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf"


def read_tsv(path):
    with path.open(encoding="utf-8-sig", newline="") as stream:
        return list(csv.DictReader(stream, delimiter="\t"))


def words(value):
    return set(value.split())


# The first six topics were already published; their IDs, translations and examples
# are intentionally stable. Additional words are grouped by meaning where possible.
TOPICS = [
    ("Еда и напитки", "Еда и продукты", "food drink meal breakfast lunch dinner vegetable fruit meat fish chicken potato tomato banana orange lemon egg bread cheese milk butter rice sugar salt pepper soup salad sandwich pasta pizza cake chocolate coffee tea juice beer wine water bottle cup glass dish plate bowl spoon fork knife kitchen restaurant cook cooking recipe taste hungry thirsty sweet fresh ingredient onion apple bean beef biscuit cereal cream diet flour garlic grape honey ice ice-cream jam nut oil pie pork snack strawberry tea yoghurt yogurt"),
    ("Дом и быт", "Дом и вещи", "home house room bedroom bathroom apartment flat building door window wall floor roof ceiling stairs stair step furniture table chair desk bed sofa couch shelf cupboard drawer carpet curtain mirror lamp light key lock garden yard garage housework tidy clean wash laundry soap towel shower bath toilet sink fridge refrigerator oven stove freezer heat heating electricity electrical television tv radio device tool machine repair fix broken basket box bag clock watch pillow sheet blanket"),
    ("Люди и семья", "Семья и отношения", "family mother father parent son daughter child children baby brother sister husband wife marriage married wedding relative aunt uncle cousin grandmother grandfather grandparent friend friendship boyfriend girlfriend neighbour neighbor relationship love partner person people man woman boy girl adult teenager teen youth birth born age elderly old young single divorce pregnant"),
    ("Люди и семья", "Тело и здоровье", "body head face eye ear nose mouth tooth teeth tongue neck shoulder arm hand finger leg foot feet knee back stomach heart brain blood skin hair health healthy ill sick disease illness pain painful injury injured medicine medical doctor nurse hospital patient dentist treatment cure drug fever cold virus vaccine exercise sleep tired stress mental physical breathe breath"),
    ("Учёба и работа", "Учёба", "school classroom class lesson student pupil teacher education educational university college course subject study learn learning teach homework exam examination test grade mark degree certificate qualification lecture library book page chapter text read write reading writing paper pen pencil dictionary language grammar word sentence question answer research knowledge skill training practice practise"),
    ("Учёба и работа", "Работа и профессии", "work job career profession professional worker employee employer employment business company office manager management boss colleague staff team meeting project task duty responsibility salary wage earn hire interview apply application experience expert engineer engineering scientist science artist actor actress musician journalist lawyer police officer farmer cook driver pilot waiter waitress customer client service industry factory production"),
    ("Город и путешествия", "Город и места", "city town village street road path square park bridge station airport port hotel hostel museum cinema theatre theater shop store market bank restaurant cafe bar hospital church library university school office factory farm centre center place area region country capital neighborhood neighbourhood location address building"),
    ("Город и путешествия", "Поездки и транспорт", "travel trip journey holiday vacation tour tourist visit visitor transport transportation traffic car bus train plane flight airport bicycle bike cycle motorcycle vehicle taxi ticket passenger driver drive ride walk route map journey destination luggage suitcase passport visa boat ship ferry road motorway highway parking park platform railway travel abroad arrive arrival depart departure leave return delay distance direction north south east west left right straight turn"),
    ("Природа и мир", "Животные и растения", "animal bird cat dog horse cow pig sheep goat chicken duck fish insect bee butterfly spider snake mouse rat bear lion tiger elephant monkey rabbit pet wild wildlife plant flower tree grass leaf leaves root seed forest wood jungle garden crop agriculture agricultural nature natural"),
    ("Природа и мир", "Погода и окружающая среда", "weather sun sunny rain rainy snow snowy wind windy cloud cloudy storm thunder temperature hot warm cold cool climate climate-change environment environmental pollution recycle recycling renewable energy earth world planet ocean sea river lake beach mountain hill valley island desert land field ground sky air fire water ice flood drought earthquake disaster"),
    ("Общество и культура", "Общество и государство", "society social community public government state country nation national international global politics political politician president prime minister minister parliament election vote voter law legal court judge crime criminal prison police army war peace military human right rights freedom equality gender race religion religious church tradition traditional culture cultural history historical population citizen policy rule regulation organization organisation charity poverty rich poor"),
    ("Общество и культура", "Искусство и развлечения", "art artist artistic music musician musical song sing singer band concert theatre theater cinema film movie actor actress acting performance perform dance dancing book novel poem poetry literature author writer painting paint picture photograph photo photography camera video television tv series episode game play sport football soccer basketball tennis swimming swim running run competition match win winner lose prize award hobby leisure fun entertainment party festival celebration celebrate"),
    ("Деньги и покупки", "Покупки и цены", "money cash coin bank account payment pay price cost expensive cheap discount sale sell buy purchase shop shopping store market supermarket customer consumer product item goods brand bill receipt tax budget income salary wage finance financial economy economic debt loan credit profit loss invest investment value worth afford"),
    ("Техника и связь", "Технологии и интернет", "technology technological computer laptop tablet smartphone phone telephone mobile internet online website web app application software hardware program programming code data digital email message text network social-media media platform system device screen keyboard mouse file document download upload search click link password user account AI artificial-intelligence machine robot electronic electric electricity Wi-Fi™ podcast"),
    ("Наука и измерения", "Наука и числа", "science scientific scientist research experiment laboratory lab discovery discover evidence theory fact information knowledge data analysis analyse analyze method process result number digit figure count amount total sum average percent percentage per cent half quarter double measure measurement length height width weight size distance speed degree temperature time minute hour second date day week month year century"),
    ("Время и порядок", "Время и частота", "today tomorrow yesterday morning afternoon evening night midnight noon weekend Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July August September October November December early late soon now then before after during while since until already yet still again always never often usually sometimes rarely frequently daily weekly recently immediately finally first last next previous future past present moment period"),
]

FUNCTION_TOPICS = {
    "article": ("Грамматика и связки", "Артикли и определители"),
    "det.": ("Грамматика и связки", "Артикли и определители"),
    "pron.": ("Грамматика и связки", "Местоимения"),
    "prep.": ("Грамматика и связки", "Предлоги и направления"),
    "conj.": ("Грамматика и связки", "Связки и союзы"),
    "modal": ("Грамматика и связки", "Модальные глаголы"),
    "number": ("Наука и измерения", "Числа и количества"),
    "ordinal": ("Наука и измерения", "Числа и количества"),
    "exclam.": ("Грамматика и связки", "Междометия"),
}

POS_RU = {
    "n.": "сущ.", "v.": "гл.", "adj.": "прил.", "adv.": "нареч.",
    "prep.": "предл.", "pron.": "мест.", "conj.": "союз", "det.": "опред.",
    "modal": "мод. гл.", "article": "артикль", "number": "числ.",
    "ordinal": "порядк. числ.", "exclam.": "межд.", "auxiliary": "вспом. гл.",
    "infinitive marker": "частица", "modal v.": "мод. гл.",
    "auxiliary v.": "вспом. гл.", "indefinite article": "артикль",
}


def parts(pos):
    return [item.strip() for item in re.split(r"[,/]\s*", pos) if item.strip()]


def topic_for(word, pos, semantic):
    key = word.lower()
    if key in semantic:
        return semantic[key]
    for marker, topic in FUNCTION_TOPICS.items():
        if marker in pos:
            return topic
    letter = word[0].upper() if word and word[0].isascii() else "A"
    if letter <= "E":
        band = "A–E"
    elif letter <= "J":
        band = "F–J"
    elif letter <= "O":
        band = "K–O"
    elif letter <= "T":
        band = "P–T"
    else:
        band = "U–Z"
    if "v." in pos:
        return ("Действия и изменения", f"Глаголы {band}")
    if "adj." in pos:
        return ("Описание и оценка", f"Признаки {band}")
    if "adv." in pos:
        return ("Описание и оценка", f"Обстоятельства {band}")
    return ("Идеи и понятия", f"Слова {band}")


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "item"


def translation_for(row, translations, noun_verbs, overrides):
    word, level, pos = row["word"], row["level"], row["pos"]
    for key in ((word, level, pos), (word, "*", pos), (word, level, ""), (word, "*", "")):
        if key in overrides:
            return overrides[key]
    candidates = translations.get(word, [])
    if not candidates:
        raise ValueError(f"Missing translation for {word!r} ({level})")
    # Prefer a matching level and part of speech. Some glossary rows combine levels.
    target_parts = set(parts(pos))
    def rank(item):
        source_parts = set(parts(item["Part of Speech"]))
        return (level in item["Level"].split(", "), len(target_parts & source_parts), -len(source_parts))
    chosen = max(candidates, key=rank)
    gloss = chosen["Russian"].strip()
    if word in noun_verbs:
        specific = noun_verbs[word]
        labels = [label for label in ("n.", "v.") if label in target_parts and specific.get(label)]
        if labels:
            gloss = "; ".join(specific[label] for label in labels)
    if not gloss or not re.search(r"[А-Яа-яЁё]", gloss):
        raise ValueError(f"Invalid translation for {word!r}: {gloss!r}")
    return gloss


def main():
    official = read_tsv(HERE / "sources/official.tsv")
    source_translations = read_tsv(HERE / "sources/translations.tsv")
    translations = defaultdict(list)
    for row in source_translations:
        translations[row["Word"].strip()].append(row)
    noun_verbs = {row["word"].strip(): row for row in read_tsv(HERE / "noun-verb-translations.tsv")}
    overrides = {(row["word"].strip(), row["level"].strip(), (row.get("pos") or "").strip()): row["translation"].strip()
                 for row in read_tsv(HERE / "translation-overrides.tsv")}
    seed = json.loads((HERE / "seed.json").read_text(encoding="utf-8"))
    seed_words = {(word["word"], word["level"]) for topic in seed for word in topic["words"]}
    semantic = {}
    for topic, subtopic, keys in TOPICS:
        for key in words(keys):
            semantic.setdefault(key.lower(), (topic, subtopic))
    grouped = defaultdict(list)
    ids = {word["id"] for topic in seed for word in topic["words"]}
    seen_records = Counter()
    for row in official:
        word, level = row["word"].strip(), row["level"].strip()
        record = (word, level)
        seen_records[record] += 1
        if record in seed_words and seen_records[record] == 1:
            continue
        pos = row["pos"].strip()
        display_word = word
        if word == "a, an":
            display_word = "a / an"
        translated = translation_for(row, translations, noun_verbs, overrides)
        pos_ru = ", ".join(dict.fromkeys(POS_RU.get(part, part) for part in parts(pos)))
        suffix = f":{seen_records[record]}" if seen_records[record] > 1 else ""
        card_id = f"oxford:{slug(word)}:{slug(pos)}:{level.lower()}{suffix}"
        if card_id in ids:
            raise ValueError(f"Duplicate ID {card_id}")
        ids.add(card_id)
        card = {"id": card_id, "word": display_word, "translation": translated,
                "answer": display_word, "level": level, "partOfSpeech": pos_ru}
        if word == "a, an":
            card["answers"] = ["a", "an"]
        grouped[topic_for(word, pos, semantic)].append(card)
    old_files = {path.name for path in (ROOT / "vocabulary").glob("oxford_z_*.json")}
    new_files = set()
    for (topic, subtopic), cards in grouped.items():
        cards.sort(key=lambda card: (card["word"].casefold(), card["level"], card["id"]))
        # Cyrillic titles need a stable ASCII filename; use a deterministic index.
        index = sorted(grouped).index((topic, subtopic)) + 1
        filename = f"oxford_z_{index:02d}.json"
        new_files.add(filename)
        payload = {"id": f"oxford-extra-{index:02d}", "collection": "Oxford 3000",
                   "topic": topic, "subtopic": subtopic, "source": SOURCE, "words": cards}
        (ROOT / "vocabulary" / filename).write_text(
            json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for filename in old_files - new_files:
        (ROOT / "vocabulary" / filename).unlink()
    all_cards = sum(len(group) for group in grouped.values()) + sum(len(t["words"]) for t in seed)
    print(f"Oxford: {len(official)} official entries, {all_cards} cards, {len(grouped) + len(seed)} subtopics")
    print("Levels:", dict(Counter(row["level"] for row in official)))


if __name__ == "__main__":
    main()
