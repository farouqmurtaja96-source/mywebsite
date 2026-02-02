import re
from pathlib import Path

root = Path(r"c:/Users/hp/OneDrive/Desktop/backup/New folder (2) - Copy")
pattern = re.compile(r"\n\s*grammar:\s*\[[\s\S]*?(?=\n\s*microChecks:|\n\s*// ====================================\n\s*// PRACTICE|\n\s*practice:)")

replacements = {}

replacements["js/lessons/intermediate/opinions.js"] = r'''
  grammar: [
        {
            id: "conditional",
            title: "Conditional (إذا)",
            short: "Use إذا to say “if”.",
            description:
                `If-conditions in spoken Arabic usually start with إذا.
It connects a condition to a result.

Pattern:
إذا + clause, then result.`,
            table: {
                title: "Conditional Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["إذا + فعل", "iza + verb", "if + verb", "Condition"],
                    ["إذا + جملة", "iza + clause", "if + clause", "Result"],
                    ["إذا + اسم", "iza + noun", "if + situation", "Opinion"],
                    ["إذا بدك", "iza biddak", "if you want", "Suggestion"]
                ]
            },
            examples: [
                { ar: "إذا بدك رأيي، هاد أحسن", arabeezy: "iza biddak ra2yi, haad a7san", en: "If you want my opinion, this is better." },
                { ar: "إذا الجو منيح، بنطلع", arabeezy: "iza el-jaww mnee7, bnitla3", en: "If the weather is good, we go out." },
                { ar: "إذا ما في وقت، بنأجل", arabeezy: "iza ma fi wa2t, bni2ajjel", en: "If there’s no time, we postpone." },
                { ar: "إذا بتحب، بنغيّر", arabeezy: "iza bte7ibb, bnighayyer", en: "If you like, we change." },
                { ar: "إذا فكرت هيك، غلط", arabeezy: "iza fakkart heek, ghalat", en: "If you think like that, it’s wrong." }
            ],
            teacherNotes:
                `MSA may use formal particles; spoken favors إذا.
Keep results in present tense.
Use real choices and opinions.
Avoid complex conditional structures.`,
            commonMistakes: [
                "Skipping إذا",
                "Using future tense after إذا",
                "Mixing لو with إذا"
            ],
            functionalUse: "Use this to give advice, preferences, and conditions."
        },
        {
            id: "pronoun_emphasis",
            title: "Pronoun Emphasis (أنا بالذات / هو لحاله)",
            short: "Use emphasis to highlight who you mean.",
            description:
                `Spoken Arabic uses extra words to emphasize the subject.
Common phrases: أنا بالذات, هو لحاله, هي بالذات.

Use these to stress contrast or focus.`,
            table: {
                title: "Emphasis Examples",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["أنا بفضّل", "ana bfaDDil", "I prefer", "Emphasis"],
                    ["إنتَ مش أنا", "inta, mish ana", "You, not me", "Contrast"],
                    ["هو لحاله", "howwa la7aalo", "He alone", "Focus"],
                    ["هي بالذات", "hiyye bel-dhaat", "She in particular", "Focus"],
                    ["أنا بالذات", "ana bel-dhaat", "Me in particular", "Focus"]
                ]
            },
            examples: [
                { ar: "أنا بحب القهوة", arabeezy: "ana b7ibb el-2ahwe", en: "I like coffee (me)." },
                { ar: "إنت بتحب الشاي", arabeezy: "inta bte7ibb esh-shay", en: "You like tea." },
                { ar: "هو مش أنا", arabeezy: "howwa mish ana", en: "He, not me." },
                { ar: "هي بالذات أحسن", arabeezy: "hiyye bel-dhaat a7san", en: "She in particular is better." },
                { ar: "أنا بفضّل هيك", arabeezy: "ana bfaDDil heek", en: "I prefer it like this." }
            ],
            teacherNotes:
                `MSA uses formal emphasis particles; spoken uses simple phrases.
Teach contrast with أنا/إنت first.
Use clear gestures and context.
Keep examples in daily opinions.`,
            commonMistakes: [
                "Overusing emphasis in every sentence",
                "Mixing pronoun gender",
                "Using formal phrases like إنني"
            ],
            functionalUse: "Use this when you want to highlight who is speaking or being described."
        }
    ],
'''

replacements["js/lessons/intermediate/Complaints.js"] = r'''
  grammar: [
        {
            id: "past_tense",
            title: "Past Tense (Simple Conjugation)",
            short: "Add endings to talk about finished actions.",
            description:
                `Past tense in spoken Arabic is built by adding endings to the verb stem.
The base is usually for هو, and you add endings for other pronouns.

Use it for actions that already happened.`,
            table: {
                title: "Past Endings (كتب)",
                headers: ["Arabic", "Arabeezy", "English", "Ending"],
                rows: [
                    ["أنا كتبت", "ana katabt", "I wrote", "-t"],
                    ["إنتَ كتبت", "inta katabt", "You wrote (m)", "-t"],
                    ["إنتِ كتبتي", "inti katabti", "You wrote (f)", "-ti"],
                    ["هو كتب", "howwa katab", "He wrote", "base"],
                    ["هي كتبت", "hiyye katabit", "She wrote", "-it"]
                ]
            },
            examples: [
                { ar: "أنا حكيت مع الدكتور", arabeezy: "ana 7akeet ma3 ed-doktor", en: "I spoke with the doctor." },
                { ar: "إنت اشتكيت؟", arabeezy: "inta eshtakeet?", en: "Did you complain?" },
                { ar: "إنتِ رحتي عالعيادة", arabeezy: "inti ru7ti 3al-3iyaade", en: "You went to the clinic. (f)" },
                { ar: "هو اتأخر", arabeezy: "howwa et2a55ar", en: "He was late." },
                { ar: "هي تعبت مبارح", arabeezy: "hiyye ta3bit mbaare7", en: "She got tired yesterday." }
            ],
            teacherNotes:
                `Spoken uses simpler past forms than MSA.
Avoid heavy verb patterns at first.
Use daily complaint scenarios.
Practice with one verb family.`,
            commonMistakes: [
                "Mixing present and past endings",
                "Forgetting feminine -ti",
                "Using MSA pronunciation"
            ],
            functionalUse: "Use this when describing complaints or problems that already happened."
        },
        {
            id: "negation_past",
            title: "Negation (Past) ما...ش",
            short: "Use ما + past + ش to say something didn’t happen.",
            description:
                `To negate past actions, use ما + verb + ش.
This is the main spoken pattern for past negation.

Pattern:
ما + past verb + ش.`,
            table: {
                title: "Past Negation Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["ما رحتش", "ma ru7tish", "I didn’t go", "Past negation"],
                    ["ما حكاش", "ma 7akish", "He didn’t speak", "Male"],
                    ["ما كتبتش", "ma katabtish", "I didn’t write", "-t"],
                    ["ما سمعتش", "ma simi3tish", "I didn’t hear", "Complaint"],
                    ["ما كانش", "ma kaansh", "There wasn’t", "Existence" ]
                ]
            },
            examples: [
                { ar: "أنا ما رحتش عالشغل", arabeezy: "ana ma ru7tish 3ash-shoghl", en: "I didn’t go to work." },
                { ar: "هو ما سمعش الكلام", arabeezy: "howwa ma simi3sh el-kalaam", en: "He didn’t listen." },
                { ar: "إنتِ ما حكيتش معي", arabeezy: "inti ma 7akeetish ma3i", en: "You didn’t talk to me. (f)" },
                { ar: "إنتِ ما اتصلتيش مبارح", arabeezy: "inti ma itSallitish mbaare7", en: "You didn’t call yesterday. (f)" },
                { ar: "ما كانش في موعد", arabeezy: "ma kaansh fi maw3ed", en: "There wasn’t an appointment." }
            ],
            teacherNotes:
                `Spoken uses ما...ش consistently for past negation.
MSA often uses لم + مضارع.
Keep it spoken and practical.
Use complaints and service situations.`,
            commonMistakes: [
                "Using مش with past verbs",
                "Placing ش in the wrong spot",
                "Forgetting ما at the start"
            ],
            functionalUse: "Use this to say what didn’t happen in past situations."
        }
    ],
'''

replacements["js/lessons/intermediate/plans.js"] = r'''
  grammar: [
        {
            id: "past_want_have",
            title: "Past of Want/Have (كان بدي / كان عندي)",
            short: "Use كان + بدي/عندي for past wants and possession.",
            description:
                `To talk about past wants, use كان/كنت + بدي.
To talk about past possession, use كان/كنت + عندي.

Pattern:
كان/كنت + بدي / عندي.`,
            table: {
                title: "Past Want/Have",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["كنت بدي", "kunt biddi", "I wanted", "Past want"],
                    ["كان بدّو", "kaan bidd-o", "He wanted", "Male"],
                    ["كانت بدّها", "kaanit bidd-ha", "She wanted", "Female"],
                    ["كان عندي", "kaan 3indi", "I had", "Past have"],
                    ["كان عندها", "kaanit 3inda", "She had", "Past have" ]
                ]
            },
            examples: [
                { ar: "كنت بدي أزور غزة", arabeezy: "kunt biddi azuur ghazze", en: "I wanted to visit Gaza." },
                { ar: "كان بدّو يسافر", arabeezy: "kaan bidd-o ysaafir", en: "He wanted to travel." },
                { ar: "كانت بدّها تدرس", arabeezy: "kaanit bidd-ha tdros", en: "She wanted to study." },
                { ar: "كان عندي وقت", arabeezy: "kaan 3indi wa2t", en: "I had time." },
                { ar: "كنت بدي قهوة", arabeezy: "kunt biddi 2ahwe", en: "I wanted coffee." }
            ],
            teacherNotes:
                `Spoken uses كان + بدي/عندي; MSA uses different verbs.
Keep the structure fixed and simple.
Use everyday wants and needs.
Avoid complex verb forms.`,
            commonMistakes: [
                "Using بدي for past situations",
                "Dropping كان/كنت",
                "Mixing gender in بدّو/بدّها"
            ],
            functionalUse: "Use this to describe past desires or what someone had."
        },
        {
            id: "future_intention",
            title: "Future Intention (رح + فعل)",
            short: "رح shows future plans.",
            description:
                `In spoken Arabic, رح marks future intention.
It goes before the verb.

رح + فعل = future plan.`,
            table: {
                title: "Future Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["رح أروح", "ra7 aruu7", "I will go", "Plan"],
                    ["رح تروح", "ra7 truu7", "You will go", "Second person"],
                    ["رح ييجي", "ra7 yiiji", "He will come", "Male"],
                    ["رح تيجي", "ra7 tiiji", "She will come", "Female"],
                    ["رح نطلع", "ra7 niTla3", "We will go out", "Group" ]
                ]
            },
            examples: [
                { ar: "رح أزور أهلي", arabeezy: "ra7 azuur ahli", en: "I will visit my family." },
                { ar: "رح تروح عالشغل بكير", arabeezy: "ra7 truu7 3ash-shoghl bakkeer", en: "You will go to work early." },
                { ar: "رح يبلّش الدرس بكرا", arabeezy: "ra7 yballish ed-dars bukra", en: "The lesson will start tomorrow." },
                { ar: "رح نطلع مشوار", arabeezy: "ra7 niTla3 mshwaar", en: "We will go out." },
                { ar: "رح تيجي صاحبتك", arabeezy: "ra7 tiiji Sa7bitik", en: "Your friend will come." }
            ],
            teacherNotes:
                `Spoken uses رح more than MSA سوف.
Keep verbs in present form after رح.
Use plans and schedules for practice.
Avoid using رح with past time.`,
            commonMistakes: [
                "Using رح with past time",
                "Dropping رح in future statements",
                "Mixing MSA سوف with spoken"
            ],
            functionalUse: "Use this to talk about plans, intentions, and upcoming actions."
        }
    ],
'''

replacements["js/lessons/intermediate/hobbies.js"] = r'''
  grammar: [
        {
            id: "dual_nouns_review",
            title: "Dual Nouns Review (ـين)",
            short: "Use ـين to say two of something.",
            description:
                `The dual form shows exactly two items.
In spoken Arabic, we usually add ـين to the noun.

Use it for time, objects, and hobbies.`,
            table: {
                title: "Dual Examples",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["ساعتين", "saa3teen", "two hours", "Time"],
                    ["مرتين", "marrteen", "two times", "Frequency"],
                    ["كتابين", "ktaab-een", "two books", "Objects"],
                    ["فلمين", "film-een", "two movies", "Hobbies"],
                    ["لعبتين", "la3bteen", "two games", "Leisure"]
                ]
            },
            examples: [
                { ar: "بتفرج على فلمين بالأسبوع", arabeezy: "btifarraj 3ala film-een bel-usboo3", en: "I watch two movies a week." },
                { ar: "بتمرن ساعتين", arabeezy: "btimarrin saa3teen", en: "I train for two hours." },
                { ar: "بقرأ كتابين بالشهر", arabeezy: "ba2ra ktaab-een bish-shahr", en: "I read two books a month." },
                { ar: "بروح مرتين عالنادي", arabeezy: "bruu7 marrteen 3an-naadi", en: "I go to the gym twice." },
                { ar: "عندي لعبتين مفضّلتين", arabeezy: "3indi la3bteen mufaDDalteen", en: "I have two favorite games." }
            ],
            teacherNotes:
                `Spoken uses ـين without case endings.
MSA has dual with different endings.
Keep nouns common and daily.
Practice with time and hobbies.`,
            commonMistakes: [
                "Using plural instead of dual",
                "Dropping ـين",
                "Overusing dual with large numbers"
            ],
            functionalUse: "Use this when you talk about exactly two items or times."
        },
        {
            id: "imperative_advanced",
            title: "Imperative (Advanced Use)",
            short: "Use commands for suggestions and instructions.",
            description:
                `Imperatives are used for advice, suggestions, and polite requests.
Negative commands often use لا + فعل.

Use short, friendly commands in daily speech.`,
            table: {
                title: "Common Imperatives",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["لا تنسى", "la tensa", "Don’t forget", "Negative"],
                    ["جرّب", "jarreb", "Try", "Suggestion"],
                    ["احكي", "i7ki", "Speak", "Instruction"],
                    ["لو سمحت", "law sama7t", "Please", "Polite"],
                    ["لا تحكي", "la t7ki", "Don’t speak", "Negative" ]
                ]
            },
            examples: [
                { ar: "لا تنسى تجيب الكرة", arabeezy: "la tensa tjeeb el-kora", en: "Don’t forget to bring the ball." },
                { ar: "جرّب تعزف هالأغنية", arabeezy: "jarreb t3azef hal-ughniyye", en: "Try to play this song." },
                { ar: "احكي عربي معنا", arabeezy: "i7ki 3arabi ma3na", en: "Speak Arabic with us." },
                { ar: "لو سمحت تعال بكير", arabeezy: "law sama7t ta3al bakkeer", en: "Please come early." },
                { ar: "لا تحكي بصوت عالي", arabeezy: "la t7ki biSout 3aali", en: "Don’t speak loudly." }
            ],
            teacherNotes:
                `Spoken keeps commands short; MSA uses formal imperative forms.
Teach negative لا + فعل clearly.
Use polite requests for real-life context.
Practice with classroom routines.`,
            commonMistakes: [
                "Forgetting لا in negative commands",
                "Using past tense for commands",
                "Overusing formal MSA phrases"
            ],
            functionalUse: "Use this to give instructions, suggestions, and polite requests."
        }
    ],
'''

replacements["js/lessons/intermediate/feelings.js"] = r'''
  grammar: [
        {
            id: "full_negation",
            title: "Full Negation System (ما...ش / مش / ما في)",
            short: "Use different patterns depending on the sentence type.",
            description:
                `Spoken Arabic uses different negation patterns.
Use ما + فعل + ش for actions, مش for adjectives/nouns, and ما في for existence.

Choose the pattern based on what you negate.`,
            table: {
                title: "Negation Patterns",
                headers: ["Arabic Pattern", "Arabeezy", "English", "Usage"],
                rows: [
                    ["ما + فعل + ش", "ma + verb + sh", "not (verb)", "Actions"],
                    ["مش + صفة", "mish + adjective", "not (adj)", "States"],
                    ["ما في + اسم", "ma fi + noun", "there isn’t", "Existence"],
                    ["مش أنا", "mish ana", "not me", "Emphasis"]
                ]
            },
            examples: [
                { ar: "أنا ما بحب الزحمة", arabeezy: "ana ma b7ibb ez-z7me", en: "I don’t like crowds." },
                { ar: "هو مش مبسوط", arabeezy: "howwa mish mabsuuT", en: "He isn’t happy." },
                { ar: "ما في أمل", arabeezy: "ma fi amal", en: "There isn’t hope." },
                { ar: "إنتِ ما بتناميش بكير", arabeezy: "inti ma btinaamish bakkeer", en: "You don’t sleep early. (f)" },
                { ar: "أنا مش زعلان", arabeezy: "ana mish za3laan", en: "I’m not upset." }
            ],
            teacherNotes:
                `Spoken uses ما...ش more than MSA.
Teach مش for adjectives early.
Use feelings and emotions as context.
Keep patterns clear and separated.`,
            commonMistakes: [
                "Using مش with verbs",
                "Forgetting ش in ما...ش",
                "Mixing patterns in one sentence"
            ],
            functionalUse: "Use this to express what you don’t do or how you don’t feel."
        },
        {
            id: "active_participles_emotions",
            title: "Active Participles (Emotional States)",
            short: "Use participles to describe feelings.",
            description:
                `Spoken Arabic often uses active participles to describe states.
They act like adjectives and change for gender.

Use them with pronouns to describe emotions.`,
            table: {
                title: "Common Emotions",
                headers: ["Arabic", "Arabeezy", "English", "Usage"],
                rows: [
                    ["مبسوط", "mabsuuT", "happy", "Male"],
                    ["مبسوطة", "mabsuuTa", "happy", "Female"],
                    ["زعلان", "za3laan", "upset", "Male"],
                    ["قلقان", "2al2aan", "anxious", "Male"],
                    ["متوتر", "mtawattar", "stressed", "General"]
                ]
            },
            examples: [
                { ar: "أنا مبسوط اليوم", arabeezy: "ana mabsuuT el-yom", en: "I’m happy today." },
                { ar: "هي مبسوطة", arabeezy: "hiyye mabsuuTa", en: "She is happy." },
                { ar: "هو زعلان", arabeezy: "howwa za3laan", en: "He is upset." },
                { ar: "إنت قلقان؟", arabeezy: "inta 2al2aan?", en: "Are you anxious?" },
                { ar: "أنا مش مبسوط", arabeezy: "ana mish mabsuuT", en: "I’m not happy." }
            ],
            teacherNotes:
                `Spoken uses participles more than MSA adjective phrases.
Focus on gender endings with real examples.
Use daily emotions and check-ins.
Avoid formal mental-health terms.`,
            commonMistakes: [
                "Mixing masculine/feminine forms",
                "Adding a verb like \"am\"",
                "Using formal MSA emotion words"
            ],
            functionalUse: "Use this to describe feelings, moods, and emotional states."
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

print("Updated intermediate files:", "\n- " + "\n- ".join(replacements.keys()))
