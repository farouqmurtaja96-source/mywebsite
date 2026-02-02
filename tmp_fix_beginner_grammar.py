from pathlib import Path
import re
base = Path(r"c:\Users\hp\OneDrive\Desktop\backup\New folder (2) - Copy\js\lessons\beginner")
blocks = {
    "dailyRoutine.js": r"""
    grammar: [
        {
            id: "present_tense",
            title: "Present tense (habits in spoken Arabic)",
            short: "Use the present to talk about daily routines.",
            description:
                `Spoken Palestinian Arabic uses the present tense for habits and routines.\nMost daily verbs take the b- prefix in speech.\n\nGolden Rule:\nUse b- with the verb for regular actions.`,
            table: {
                title: "Present Tense Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["أنا بــ + فعل", "ana b- + verb", "I (habit) + verb", "Daily routine"],
                    ["إنتَ بتـ + فعل", "inta bt- + verb", "You (m) + verb", "Questions"],
                    ["إنتِ بتـ + فعلـي", "inti bt- + verb-i", "You (f) + verb", "Female form"],
                    ["هو بـ + فعل", "howwa b- + verb", "He + verb", "Third person"],
                ]
            },
            examples: [
                { ar: "أنا بَصْحى بكّير", arabeezy: "ana bas7a bakkeer", en: "I wake up early." },
                { ar: "إنتَ بتروح عالجامعة؟", arabeezy: "inta btruu7 3al-jaam3a?", en: "Do you go to university? (m)" },
                { ar: "إنتِ بتدرسي اليوم؟", arabeezy: "inti btdrsi el-yom?", en: "Do you study today? (f)" },
                { ar: "هو بيشتغل كل يوم", arabeezy: "howwa byeshtghil kul yoom", en: "He works every day." },
                { ar: "إحنا بنفطر الصبح", arabeezy: "e7na bnifTar es-sub7", en: "We eat breakfast in the morning." }
            ],
            teacherNotes:
                `Spoken uses b- in daily habits more than MSA.\nMSA may use present without b- and with endings.\nKeep examples short and realistic.\nAvoid heavy conjugation charts at first.`,
            commonMistakes: [
                "Dropping the b- prefix in daily routines",
                "Using MSA verb endings",
                "Forgetting feminine -i in إنتِ",
            ],
            functionalUse:
                "Used to describe daily routines and ask about someone’s regular activities.",
        },
        {
            id: "simple_prefix",
            title: "Simple b- prefix (spoken marker)",
            short: "The b- prefix shows a usual or repeated action.",
            description:
                `In spoken Palestinian Arabic, b- is a quick marker for present habits.\nIt often replaces long explanations of time or frequency.\n\nGolden Rule:\nIf it’s a routine, add b- to the verb.`,
            table: {
                title: "b- Prefix Examples",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["بَاكُل", "baakul", "I eat", "Habit"],
                    ["بَشْرَب", "bashrab", "I drink", "Habit"],
                    ["بَنَام", "bnaam", "I sleep", "Habit"],
                    ["بَتْحَمَّم", "bt7ammam", "You shower", "Second person"],
                ]
            },
            examples: [
                { ar: "أنا باكُل بالليل", arabeezy: "ana baakul bel-leel", en: "I eat at night." },
                { ar: "إنتَ بتشرب قهوة؟", arabeezy: "inta btishrab 2ahwe?", en: "Do you drink coffee?" },
                { ar: "إنتِ بتنامي بكّير", arabeezy: "inti btenaami bakkeer", en: "You sleep early. (f)" },
                { ar: "هو بيدرس عربي", arabeezy: "howwa byidros 3arabi", en: "He studies Arabic." },
                { ar: "هي بتشتغل بالمستشفى", arabeezy: "hiyye btishtghil bel-mustashfa", en: "She works at the hospital." }
            ],
            teacherNotes:
                `Spoken relies on b- much more than MSA.\nMSA uses present without b- and with different endings.\nTeach b- as a sound pattern, not a rule.\nDrill with everyday verbs only.`,
            commonMistakes: [
                "Saying the verb without b- in routines",
                "Overusing b- for future actions",
                "Mixing spoken and MSA verb forms",
            ],
            functionalUse:
                "Used in daily routine talk, schedules, and simple present questions.",
        },
    ],
""",
    "fooddrink.js": r"""
    grammar: [
        {
            id: "direct_object",
            title: "Direct Object (I eat + what?)",
            short: "The object comes right after the verb.",
            description:
                `A direct object answers “what?” after the verb.\nIn spoken Palestinian Arabic, we place it right after the verb.\n\nGolden Rule:\nVerb + object = simple food sentence.`,
            table: {
                title: "Direct Object Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["بـ + فعل + أكل", "b- + verb + akel", "eat something", "Meals"],
                    ["بـ + فعل + شرب", "b- + verb + shorb", "drink something", "Drinks"],
                    ["بدي + اسم", "biddi + noun", "I want + noun", "Ordering"],
                    ["بحب + اسم", "b7ibb + noun", "I like + noun", "Preferences"],
                ]
            },
            examples: [
                { ar: "أنا باكُل منسف", arabeezy: "ana baakul mansaf", en: "I eat mansaf." },
                { ar: "إنتَ بتشرب شاي", arabeezy: "inta btishrab shay", en: "You drink tea." },
                { ar: "إنتِ بتحبي قهوة", arabeezy: "inti bte7bbi 2ahwe", en: "You like coffee. (f)" },
                { ar: "هو بدّه عصير", arabeezy: "howwa bidd-o 3aseer", en: "He wants juice." },
                { ar: "هي بتاكُل سلطة", arabeezy: "hiyye btaakul salata", en: "She eats salad." }
            ],
            teacherNotes:
                `Spoken keeps word order simple: verb then object.\nMSA adds case endings; spoken drops them.\nFocus on food vocabulary and short sentences.\nAvoid long clauses at this stage.`,
            commonMistakes: [
                "Putting the object before the verb",
                "Using MSA endings on the object",
                "Forgetting b- on the verb",
            ],
            functionalUse:
                "Used when ordering food, talking about meals, and stating preferences.",
        },
        {
            id: "active_participles_states",
            title: "Active Participles (states: hungry/thirsty)",
            short: "Use participles to describe states.",
            description:
                `Spoken Arabic uses active participles to describe states.\nCommon ones in food talk are hungry, full, and thirsty.\n\nGolden Rule:\nState words act like adjectives.`,
            table: {
                title: "Common States",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["جوعان", "joo3aan", "hungry", "Male"],
                    ["جوعانة", "joo3aaneh", "hungry", "Female"],
                    ["شبعان", "shab3aan", "full", "After eating"],
                    ["عطشان", "3atshaan", "thirsty", "Need a drink"],
                ]
            },
            examples: [
                { ar: "أنا جوعان", arabeezy: "ana joo3aan", en: "I am hungry." },
                { ar: "إنتِ عطشانة؟", arabeezy: "inti 3atshaaneh?", en: "Are you thirsty? (f)" },
                { ar: "هو شبعان", arabeezy: "howwa shab3aan", en: "He is full." },
                { ar: "هي جوعانة شوي", arabeezy: "hiyye joo3aaneh shway", en: "She is a little hungry." },
                { ar: "إحنا عطشانين", arabeezy: "e7na 3atshaaneen", en: "We are thirsty." }
            ],
            teacherNotes:
                `Spoken uses participles as everyday state words.\nMSA uses similar forms with formal endings.\nTeach masculine/feminine forms together.\nUse real-life food situations.`,
            commonMistakes: [
                "Using a verb instead of the participle",
                "Forgetting feminine endings",
                "Mixing MSA pronunciation",
            ],
            functionalUse:
                "Used when ordering food, expressing hunger/fullness, or asking about needs.",
        },
    ],
""",
    "family.js": r"""
    grammar: [
        {
            id: "possessive_pronouns",
            title: "Possessive Pronouns (suffixes)",
            short: "Ownership sticks to the word.",
            description:
                `In spoken Arabic, we attach ownership to the noun.\nWe don’t usually say two separate words for “my/your”.\n\nGolden Rule:\nAdd the suffix to show who owns it.`,
            table: {
                title: "Common Possessive Suffixes",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["ـي", "-i", "my", "بيتي"],
                    ["ـك", "-ak/-ik", "your", "بيتك/بيتكِ"],
                    ["ـه", "-o", "his", "أبوه"],
                    ["ـها", "-ha", "her", "أمها"],
                ]
            },
            examples: [
                { ar: "هذا بيتي", arabeezy: "haada beeti", en: "This is my house." },
                { ar: "وين أمك؟", arabeezy: "ween ommak?", en: "Where is your mother?" },
                { ar: "أخوه ساكن معنا", arabeezy: "akh-o saaken ma3na", en: "His brother lives with us." },
                { ar: "أختها بالجامعة", arabeezy: "okht-ha bel-jaam3a", en: "Her sister is at the university." },
                { ar: "صديقي من غزة", arabeezy: "Sadee2i min ghazze", en: "My friend is from Gaza." }
            ],
            teacherNotes:
                `Spoken uses short suffixes more than MSA forms.\nMSA has formal case endings; spoken drops them.\nTeach 2–3 suffixes first, then expand.\nUse family words from the unit.`,
            commonMistakes: [
                "Saying ‘أنا + اسم + إلي’ instead of suffix",
                "Mixing masculine/feminine suffixes",
                "Overusing full MSA endings",
            ],
            functionalUse:
                "Used to talk about family members and personal belongings.",
        },
        {
            id: "dual_nouns",
            title: "Dual Nouns (اثنين)",
            short: "Spoken Arabic often uses -een for two.",
            description:
                `The dual form shows “two of something.”\nIn spoken Palestinian Arabic, -een is common for most dual nouns.\n\nGolden Rule:\nAdd -een to show two.`,
            table: {
                title: "Dual Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["كتابين", "ktaab-een", "two books", "General"],
                    ["ولدين", "walad-een", "two boys", "People"],
                    ["بنتين", "bint-een", "two girls", "People"],
                    ["يومين", "yoom-een", "two days", "Time"],
                ]
            },
            examples: [
                { ar: "عندي ولدين", arabeezy: "3indi walad-een", en: "I have two boys." },
                { ar: "إلها بنتين", arabeezy: "elha bint-een", en: "She has two girls." },
                { ar: "إحنا عنا كتابين", arabeezy: "e7na 3inna ktaab-een", en: "We have two books." },
                { ar: "عندي أخوين", arabeezy: "3indi akhween", en: "I have two brothers." },
                { ar: "سافرت يومين", arabeezy: "safart yoom-een", en: "I traveled for two days." }
            ],
            teacherNotes:
                `Spoken simplifies dual endings compared to MSA.\nMSA uses -ān/-ayn; spoken prefers -een.\nUse family words to keep it concrete.\nAvoid heavy grammar terms.`,
            commonMistakes: [
                "Using plural instead of dual",
                "Forgetting -een ending",
                "Mixing MSA dual endings",
            ],
            functionalUse:
                "Used to talk about two family members or two items in daily life.",
        },
    ],
""",
    "trans.js": r"""
    grammar: [
        {
            id: "prepositions",
            title: "Prepositions (في، على، من، لـ)",
            short: "Prepositions show place, direction, or source.",
            description:
                `Prepositions come before the noun.\nThey help us talk about movement and location.\n\nGolden Rule:\nUse the preposition before the place or person.`,
            table: {
                title: "Common Prepositions",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["في", "fi", "in/at", "Location"],
                    ["على", "3ala", "on", "Surface"],
                    ["من", "min", "from", "Origin"],
                    ["لـ", "la", "to/for", "Direction"],
                ]
            },
            examples: [
                { ar: "أنا في الباص", arabeezy: "ana fi el-baS", en: "I am on the bus." },
                { ar: "بنزل من التاكسي", arabeezy: "bnizel min et-taksi", en: "I get off the taxi." },
                { ar: "بروح على الشغل", arabeezy: "bruu7 3ash-shoghl", en: "I go to work." },
                { ar: "تعال لعندي", arabeezy: "ta3al la-3indi", en: "Come to me." },
                { ar: "الشنطة على الكرسي", arabeezy: "esh-shanTa 3al-kursi", en: "The bag is on the chair." }
            ],
            teacherNotes:
                `Spoken uses short prepositions more than MSA.\nMSA may show case endings after them; spoken drops it.\nFocus on movement and transport contexts.\nKeep examples short and clear.`,
            commonMistakes: [
                "Mixing في and على",
                "Forgetting the preposition",
                "Using literal English order",
            ],
            functionalUse:
                "Used when talking about routes, transport, and destinations.",
        },
        {
            id: "imperative",
            title: "Imperative (commands in transport)",
            short: "Imperative is used to tell someone to do something.",
            description:
                `In spoken Arabic, the imperative is common in transport and directions.\nIt is usually a short verb form.\n\nGolden Rule:\nUse a short command for quick directions.`,
            table: {
                title: "Common Commands",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["روح", "ruu7", "Go", "Direction"],
                    ["تعال", "ta3al", "Come", "Calling"],
                    ["وقف", "wa22ef", "Stop", "Driver"],
                    ["اركَب", "irkab", "Get on", "Bus/taxi"],
                ]
            },
            examples: [
                { ar: "روح عالمدرسة", arabeezy: "ruu7 3al-madrasah", en: "Go to school." },
                { ar: "تعال هون", arabeezy: "ta3al hoon", en: "Come here." },
                { ar: "وقف هون لو سمحت", arabeezy: "wa22ef hoon law sama7t", en: "Stop here, please." },
                { ar: "اركَب الباص", arabeezy: "irkab el-baS", en: "Get on the bus." },
                { ar: "انزل هون", arabeezy: "inzal hoon", en: "Get off here." }
            ],
            teacherNotes:
                `Spoken imperatives are short and direct.\nMSA imperatives can look different in form.\nTeach polite add-ons like لو سمحت.\nUse transport scenarios only.`,
            commonMistakes: [
                "Using present tense instead of imperative",
                "Adding unnecessary pronouns",
                "Using formal MSA commands",
            ],
            functionalUse:
                "Used for giving directions, getting on/off transport, and quick requests.",
        },
    ],
""",
}

pattern = re.compile(r"\n\s*grammar:\s*\[[\s\S]*?(?=\n\s*microChecks:|\n\s*// ====================================\n\s*// PRACTICE|\n\s*practice:)")

for filename, block in blocks.items():
    path = base / filename
    text = path.read_text(encoding="utf-8")
    new_text, count = pattern.subn("\n" + block.rstrip() + "\n", text, count=1)
    if count != 1:
        raise SystemExit(f"grammar block not replaced in {filename}")
    path.write_text(new_text, encoding="utf-8")

print("beginner grammar rewritten")
