import re
from pathlib import Path

root = Path(r"c:/Users/hp/OneDrive/Desktop/backup/New folder (2) - Copy")
pattern = re.compile(r"\n\s*grammar:\s*\[[\s\S]*?(?=\n\s*microChecks:|\n\s*// ====================================\n\s*// PRACTICE|\n\s*practice:)")

replacements = {}

replacements["js/lessons/preIntermediate/workstudy.js"] = r'''
  grammar: [
        {
            id: "indirect_object",
            title: "Indirect Object (لـ)",
            short: "Use لـ to show who receives the action.",
            description:
                `In spoken Arabic, we use لـ (la-) before the person who receives the action.
It can sound like la / li and often attaches to pronouns.

Pattern:
Verb + thing + لـ + person.`,
            table: {
                title: "Common Patterns",
                headers: ["Arabic Pattern", "Arabeezy", "English", "Usage"],
                rows: [
                    ["بـعطي + شي + لـ + شخص", "ba3Ti + shi + la + shakhs", "give + something + to", "Work/study"],
                    ["ببعت + شي + لـ + شخص", "bib3at + shi + la + shakhs", "send + something + to", "Messages"],
                    ["بشرح + شي + لـ + شخص", "bishra7 + shi + la + shakhs", "explain + something + to", "Class"],
                    ["بقول + شي + لـ + شخص", "bi2ool + shi + la + shakhs", "say + something + to", "Advice"]
                ]
            },
            examples: [
                { ar: "بشرح الدرس للطلاب", arabeezy: "bishra7 ed-dars lil-Tullaab", en: "He explains the lesson to the students." },
                { ar: "ببعت الإيميل للأستاذ", arabeezy: "bib3at el-email lil-ustaz", en: "She sends the email to the teacher." },
                { ar: "بعطي الكتاب لصاحبي", arabeezy: "ba3Ti el-kitaab la-Sa7bi", en: "I give the book to my friend." },
                { ar: "بقول النصيحة إلك", arabeezy: "bi2ool en-naSee7a ilik", en: "I give you (f) advice." },
                { ar: "بشرحلك بسرعة", arabeezy: "bishra7lak bisur3a", en: "I explain to you quickly." }
            ],
            teacherNotes:
                `Spoken often shortens "la" into -lak/-lik suffixes.
MSA keeps full li/ila forms.
Focus on meaning before spelling.
Keep nouns and people simple.`,
            commonMistakes: [
                "Dropping لـ before the person",
                "Putting لـ before the object",
                "Using formal إلى in casual speech"
            ],
            functionalUse: "Use this when you give, send, explain, or say something to someone."
        },
        {
            id: "telling_time",
            title: "Telling the Time (الساعة)",
            short: "Use الساعة + number to tell time.",
            description:
                `Time is said with الساعة + number.
You can add ونص (half) or وربع (quarter).
For 15 before the next hour: الساعة ستة إلا ربع.

Use الساعة + number for clock time.`,
            table: {
                title: "Time Patterns",
                headers: ["Arabic Pattern", "Arabeezy", "English", "Usage"],
                rows: [
                    ["الساعة + رقم", "es-sa3a + raqam", "It’s (time)", "Exact time"],
                    ["الساعة + رقم ونص", "es-sa3a + raqam w nos", "half past", "30 min"],
                    ["الساعة + رقم وربع", "es-sa3a + raqam w rob3", "quarter past", "15 min"],
                    ["الساعة + رقم إلا ربع", "es-sa3a + raqam illa rob3", "quarter to", "45 min" ]
                ]
            },
            examples: [
                { ar: "الساعة خمسة", arabeezy: "es-sa3a khamsa", en: "It’s five." },
                { ar: "الساعة خمسة ونص", arabeezy: "es-sa3a khamsa w nos", en: "It’s 5:30." },
                { ar: "الساعة خمسة وربع", arabeezy: "es-sa3a khamsa w rob3", en: "It’s 5:15." },
                { ar: "الساعة ستة إلا ربع", arabeezy: "es-sa3a sitta illa rob3", en: "It’s 5:45." },
                { ar: "الساعة تسعة، عندي محاضرة", arabeezy: "es-sa3a tis3a, 3indi mu7aDarah", en: "It’s nine, I have a lecture." }
            ],
            teacherNotes:
                `Spoken keeps one simple pattern; MSA uses more formal time phrases.
Say time often in class to build fluency.
Use real schedules and daily routines.
Keep numbers consistent with learner level.`,
            commonMistakes: [
                "Forgetting الساعة",
                "Mixing ordinal numbers with time",
                "Confusing إلا ربع with وربع"
            ],
            functionalUse: "Use this for schedules, meetings, work hours, and class times."
        }
    ],
'''

replacements["js/lessons/preIntermediate/health.js"] = r'''
  grammar: [
        {
            id: "negation_present",
            title: "Negation (Present System)",
            short: "Use ما...ش with verbs, and مش with adjectives.",
            description:
                `Spoken Palestinian Arabic uses ما + verb + ش for present negation.
With adjectives and nouns, we use مش.
For existence, use ما في.

Patterns:
ما + فعل + ش / مش + صفة / ما في + اسم.`,
            table: {
                title: "Negation Patterns",
                headers: ["Arabic Pattern", "Arabeezy", "English", "Usage"],
                rows: [
                    ["ما + فعل + ش", "ma + verb + sh", "don’t/doesn’t", "Verbs"],
                    ["مش + صفة", "mish + adjective", "not + adj", "States"],
                    ["ما في + اسم", "ma fi + noun", "there isn’t", "Existence"],
                    ["ما بدي", "ma biddi", "I don’t want", "Refusal"]
                ]
            },
            examples: [
                { ar: "أنا ما بحس حالي منيح", arabeezy: "ana ma b7iss 7aali mnee7", en: "I don’t feel well." },
                { ar: "إنت ما بتنام منيح", arabeezy: "inta ma btnam mnee7", en: "You don’t sleep well." },
                { ar: "هي مش تعبانة", arabeezy: "hiyye mish ta3baaneh", en: "She is not tired." },
                { ar: "ما في دكتور هون", arabeezy: "ma fi doktor hoon", en: "There isn’t a doctor here." },
                { ar: "أنا ما بدي دوا", arabeezy: "ana ma biddi dawa", en: "I don’t want medicine." }
            ],
            teacherNotes:
                `Spoken uses ما...ش more than MSA.
Teach مش with adjectives early.
Use short, daily-health sentences.
Avoid heavy grammar terms.`,
            commonMistakes: [
                "Dropping ش in ما...ش",
                "Using مش with verbs",
                "Forgetting ما in negation"
            ],
            functionalUse: "Use this to say what you don’t do, don’t feel, or what doesn’t exist."
        },
        {
            id: "adjectives_health",
            title: "Adjectives for Health (تعبان/مريض/منيح)",
            short: "Use simple adjectives to describe how you feel.",
            description:
                `Health in spoken Arabic is often described with adjectives.
Many adjectives have a masculine and feminine form.

Use them with pronouns and simple sentences.`,
            table: {
                title: "Common Health Adjectives",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["تعبان / تعبانة", "ta3ban / ta3baaneh", "tired", "General"],
                    ["مريض / مريضة", "mareeD / mareeDa", "sick", "Health"],
                    ["منيح / منيحة", "mnee7 / mnee7a", "fine", "Recovery"],
                    ["دوخان", "dookhaan", "dizzy", "Symptom"]
                ]
            },
            examples: [
                { ar: "أنا تعبان اليوم", arabeezy: "ana ta3ban el-yom", en: "I’m tired today." },
                { ar: "هي مريضة", arabeezy: "hiyye mareeDa", en: "She is sick." },
                { ar: "إنتِ منيحة؟", arabeezy: "inti mnee7a?", en: "Are you okay? (f)" },
                { ar: "هو مش منيح", arabeezy: "howwa mish mnee7", en: "He is not okay." },
                { ar: "أنا عندي دوخان", arabeezy: "ana 3indi dookhaan", en: "I feel dizzy." }
            ],
            teacherNotes:
                `Spoken uses adjectives directly without "to be".
MSA often sounds more formal with different adjective choices.
Emphasize gender endings in context.
Keep examples short and personal.`,
            commonMistakes: [
                "Mixing masculine/feminine forms",
                "Adding a verb like \"am\"",
                "Using formal MSA words in speech"
            ],
            functionalUse: "Use this when talking about health, energy, or symptoms in daily life."
        }
    ],
'''

replacements["js/lessons/preIntermediate/shopping.js"] = r'''
  grammar: [
        {
            id: "numbers_basic",
            title: "Numbers (1–5)",
            short: "Use numbers for prices, quantity, and shopping.",
            description:
                `Numbers are used constantly in shops: price, amount, and count.
Keep the forms simple and spoken.

Use the number directly before the noun.`,
            table: {
                title: "Numbers",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["واحد", "waa7ed", "one", "1"],
                    ["اتنين", "itneen", "two", "2"],
                    ["تلاتة", "talaateh", "three", "3"],
                    ["أربعة", "arba3a", "four", "4"],
                    ["خمسة", "khamsa", "five", "5"]
                ]
            },
            examples: [
                { ar: "بدي واحد قهوة", arabeezy: "biddi waa7ed 2ahwe", en: "I want one coffee." },
                { ar: "عندي اتنين أولاد", arabeezy: "3indi itneen awlaad", en: "I have two kids." },
                { ar: "الكيلو بخمسة شواكل", arabeezy: "el-keelo bkhamsa shawaa2el", en: "The kilo is five shekels." },
                { ar: "تلاتة خبزات", arabeezy: "talaateh khubzaat", en: "Three breads." },
                { ar: "بدنا أربعة مي", arabeezy: "bidna arba3a may", en: "We want four waters." }
            ],
            teacherNotes:
                `Spoken forms are shorter than MSA (اتنين vs اثنان).
Keep price examples local and simple.
Use real items from the shop.
Avoid large numbers early.`,
            commonMistakes: [
                "Using formal MSA numbers",
                "Forgetting the noun after the number",
                "Mixing gender with low numbers too early"
            ],
            functionalUse: "Use this to ask for quantities and understand prices in shops."
        },
        {
            id: "ordinal_numbers",
            title: "Ordinal Numbers (الأول، التاني...)",
            short: "Use ordinals to show order or rank.",
            description:
                `Ordinals show order: first, second, third.
In spoken Arabic, we often use الأول / التاني / التالت / الرابع / الخامس.

Use them for floors, options, and order.`,
            table: {
                title: "Ordinals",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["الأول", "el-awwal", "first", "Order"],
                    ["التاني", "et-taani", "second", "Order"],
                    ["التالت", "et-taalet", "third", "Order"],
                    ["الرابع", "er-raabe3", "fourth", "Order"],
                    ["الخامس", "el-khaames", "fifth", "Order"]
                ]
            },
            examples: [
                { ar: "بدي الخيار الأول", arabeezy: "biddi el-khiyaar el-awwal", en: "I want the first option." },
                { ar: "الشقة بالطابق التاني", arabeezy: "esh-sha22a bit-Taabe2 et-taani", en: "The apartment is on the second floor." },
                { ar: "الطلب التالت جاهز", arabeezy: "et-Talab et-taalet jaahiz", en: "The third order is ready." },
                { ar: "خد المقاس الرابع", arabeezy: "khud el-ma2aas er-raabe3", en: "Take the fourth size." },
                { ar: "هاد خامس كتاب", arabeezy: "haad khaames kitaab", en: "This is the fifth book." }
            ],
            teacherNotes:
                `Spoken uses التاني/التالت more than MSA الثاني/الثالث.
Keep examples tied to shopping choices.
Explain floors and size options.
Avoid long ordinal lists.`,
            commonMistakes: [
                "Using MSA ordinals in speech",
                "Forgetting ال before the ordinal",
                "Mixing the ordinal with the counted noun"
            ],
            functionalUse: "Use this to choose options, describe order, and talk about floors."
        }
    ],
'''

replacements["js/lessons/preIntermediate/weathersmalltalk.js"] = r'''
  grammar: [
        {
            id: "comparative",
            title: "Comparative (أكثر / أقل / أحسن)",
            short: "Compare two things with من.",
            description:
                `In spoken Arabic, we compare using أكثر / أقل / أحسن + من.
This is common in weather and daily opinions.

Pattern:
Comparative + من + second item.`,
            table: {
                title: "Common Comparatives",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["أكثر من", "aktar min", "more than", "Quantity"],
                    ["أقل من", "a2all min", "less than", "Quantity"],
                    ["أحسن من", "a7san min", "better than", "Quality"],
                    ["أسوأ من", "aswa2 min", "worse than", "Quality"]
                ]
            },
            examples: [
                { ar: "الجو اليوم أحسن من مبارح", arabeezy: "el-jaww el-yom a7san min mbaare7", en: "The weather today is better than yesterday." },
                { ar: "الشتا أكثر من السنة الماضية", arabeezy: "esh-sheta aktar min es-sane il-maDye", en: "The rain is more than last year." },
                { ar: "الحر أقل بالليل", arabeezy: "el-7arr a2all bel-leel", en: "The heat is less at night." },
                { ar: "هالنهار أسوأ من مبارح", arabeezy: "hal-nahaar aswa2 min mbaare7", en: "This day is worse than yesterday." },
                { ar: "الهوا أحسن من القعدة بالبيت", arabeezy: "el-hawa a7san min el-2a3de bel-beit", en: "Fresh air is better than staying at home." }
            ],
            teacherNotes:
                `MSA has formal comparative forms; spoken favors أحسن/أسوأ.
Practice with من consistently.
Use daily weather comparisons.
Keep sentences short.`,
            commonMistakes: [
                "Forgetting من",
                "Using formal MSA comparative words",
                "Mixing the order of items"
            ],
            functionalUse: "Use this to compare weather, prices, or feelings in small talk."
        },
        {
            id: "regular_plurals",
            title: "Regular Plurals (ـين / ـات)",
            short: "Use -ين for masculine, -ات for feminine and objects.",
            description:
                `Regular plurals are common in spoken Arabic.
Masculine human plurals often take -ين, and many feminine or object nouns take -ات.

Keep the pattern simple and spoken.`,
            table: {
                title: "Plural Examples",
                headers: ["Arabic", "Arabeezy", "English", "Pattern"],
                rows: [
                    ["مهندسين", "mohandseen", "engineers", "-een"],
                    ["معلمات", "mo3allmaat", "teachers (f)", "-aat"],
                    ["سيارات", "sayyaaraat", "cars", "-aat"],
                    ["لغات", "lughaat", "languages", "-aat"],
                    ["طلاب", "Tullaab", "students", "broken plural"]
                ]
            },
            examples: [
                { ar: "المهندسين بالشارع", arabeezy: "el-mohandseen besh-shaare3", en: "The engineers are in the street." },
                { ar: "في معلمات بالمدرسة", arabeezy: "fi mo3allmaat bel-madrasah", en: "There are teachers (f) in the school." },
                { ar: "السيارات كتيرة اليوم", arabeezy: "es-sayyaaraat kteereh el-yom", en: "The cars are many today." },
                { ar: "عندي لغات كتيرة", arabeezy: "3indi lughaat kteereh", en: "I have many languages." },
                { ar: "الطلاب كتيرين", arabeezy: "et-Tullaab kteereen", en: "The students are many." }
            ],
            teacherNotes:
                `Spoken uses regular plurals often, but many nouns are broken plurals.
MSA has more strict patterns.
Teach -ين/-ات first, then mention exceptions.
Use real classroom roles.`,
            commonMistakes: [
                "Overusing -ين with non-human nouns",
                "Forgetting vowel changes in broken plurals",
                "Mixing masculine/feminine plural endings"
            ],
            functionalUse: "Use this to describe groups of people or objects in daily talk."
        }
    ],
'''

replacements["js/lessons/preIntermediate/apartment.js"] = r'''
  grammar: [
        {
            id: "there_is",
            title: "There is / There isn’t (في / ما في)",
            short: "Use في to say something exists.",
            description:
                `In spoken Arabic, في means “there is/are.”
For negation, use ما في.

في = there is, ما في = there isn’t.`,
            table: {
                title: "Existence Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["في + اسم", "fi + noun", "there is", "Existence"],
                    ["ما في + اسم", "ma fi + noun", "there isn’t", "Negation"],
                    ["في + رقم + اسم", "fi + number + noun", "there are", "Quantity"],
                    ["ما في ولا + اسم", "ma fi wala + noun", "there isn’t any", "Emphasis"]
                ]
            },
            examples: [
                { ar: "في شباك كبير", arabeezy: "fi shubbaak kbeer", en: "There is a big window." },
                { ar: "ما في مي", arabeezy: "ma fi may", en: "There isn’t water." },
                { ar: "في غرفتين", arabeezy: "fi ghorfteen", en: "There are two rooms." },
                { ar: "ما في ولا كرسي", arabeezy: "ma fi wala kursi", en: "There isn’t any chair." },
                { ar: "في مطبخ صغير", arabeezy: "fi maTba5 zghir", en: "There is a small kitchen." }
            ],
            teacherNotes:
                `Spoken uses في / ما في more than MSA يوجد/لا يوجد.
Keep it practical with home items.
Avoid formal structures early.
Use negative forms often.`,
            commonMistakes: [
                "Using يوجد in spoken",
                "Forgetting ما in negation",
                "Placing في after the noun"
            ],
            functionalUse: "Use this to describe what exists or doesn’t exist in a place."
        },
        {
            id: "prepositions_simple",
            title: "Prepositions (في، على، من، جنب، فوق)",
            short: "Use prepositions to show place and position.",
            description:
                `Prepositions show where something is.
In spoken Arabic, we use very common prepositions for location.

Focus on meaning, not case endings.`,
            table: {
                title: "Common Prepositions",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["في البيت", "fi el-beit", "in the house", "Location"],
                    ["على الطاولة", "3ala et-Taawle", "on the table", "Surface"],
                    ["من الغرفة", "min el-ghorfe", "from the room", "Origin"],
                    ["جنب الباب", "janb el-baab", "next to the door", "Position"],
                    ["فوق", "foog", "above", "Position"]
                ]
            },
            examples: [
                { ar: "الكرسي جنب الباب", arabeezy: "el-kursi janb el-baab", en: "The chair is next to the door." },
                { ar: "السرير في الغرفة", arabeezy: "es-sreer fi el-ghorfe", en: "The bed is in the room." },
                { ar: "الشنطة عالطاولة", arabeezy: "esh-shanTa 3al-Taawle", en: "The bag is on the table." },
                { ar: "الضو فوق", arabeezy: "eD-Daw foog", en: "The light is above." },
                { ar: "أنا من رام الله", arabeezy: "ana min Ramallah", en: "I’m from Ramallah." }
            ],
            teacherNotes:
                `MSA teaches مجرور after prepositions; spoken doesn’t mark it.
Use everyday home objects.
Repeat short location sentences.
Keep prepositions minimal.`,
            commonMistakes: [
                "Adding case endings in speech",
                "Mixing على and في",
                "Using formal لدى instead of عند"
            ],
            functionalUse: "Use this to describe rooms, furniture, and locations."
        }
    ],
'''

for rel_path, block in replacements.items():
    path = root / rel_path
    if not path.exists():
        raise SystemExit(f"Missing file: {path}")
    text = path.read_text(encoding="utf-8")
    new_text, count = pattern.subn("\n" + block, text, count=1)
    if count != 1:
        raise SystemExit(f"Pattern not found or multiple matches in {rel_path}: {count}")
    path.write_text(new_text, encoding="utf-8")

print("Updated preIntermediate files:", "\n- " + "\n- ".join(replacements.keys()))
