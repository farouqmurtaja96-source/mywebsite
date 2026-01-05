// ========================= CONSTANTS / KEYS =========================
const LS_STUDENTS_KEY = "pal_arabic_students";
const LS_LESSON_PREFIX = "pal_arabic_lesson_";
const LS_FONT_SIZE_KEY = "pal_arabic_font_size";
const LS_CUSTOM_UNITS_KEY = "pal_arabic_custom_units";
const LS_BACKUP_SETTINGS_KEY = "pal_arabic_backup_settings";
const LS_WHITEBOARD_PREFIX = "pal_arabic_whiteboard_";
const LS_USER_ROLE_KEY = "pal_arabic_user_role";

const LESSON_ID_GREETING = "Beginner-Greetings-L1";
const LESSON_ID_DAILY_ROUTINE = "Beginner-DailyRoutine-L1";
const LESSON_ID_FOOD_DRINK = "Beginner-FoodDrink-L1";
const LESSON_ID_FAMILY = "Beginner-Family-L1";
const LESSON_ID_TRANSPORT = "Beginner-Transportation-L1";

const LESSON_ID_WORK_STUDY = "PreInt-WorkStudy-L1";
const LESSON_ID_HEALTH = "PreInt-HealthEmergencies-L1";
const LESSON_ID_APARTMENT = "PreInt-ApartmentProblems-L1";
const LESSON_ID_SHOPPING = "PreInt-ShoppingPrices-L1";
const LESSON_ID_WEATHER = "PreInt-WeatherSmallTalk-L1";

const LESSON_ID_OPINIONS = "Intermediate-Opinions-L1";
const LESSON_ID_COMPLAINTS = "Intermediate-Complaints-L1";
const LESSON_ID_PLANS_FUTURE = "Intermediate-PlansFuture-L1";
const LESSON_ID_FEELINGS = "Intermediate-Feelings & Mental State";
const LESSON_ID_HOBBIES = "Intermediate-Hobbies-L1";

const BASE_PROGRESS_TEMPLATE = {
    overview: false,
    vocabulary: false,
    dialogue: false,
    grammar: false,
    practice: false,
    homework: false,
    review: false,
};

// ========================= DEFAULT LESSON DATA =========================
const defaultLessons = {

    [LESSON_ID_GREETING]: {
        meta: {
            level: "Beginner",
            unit: "Greetings",
            lessonTitle: "Unit 1 – Greetings & Introductions (Palestinian Arabic – Gaza)",
        },

        overview: {
            title: "Unit 1 – Greetings & Introductions",
            description:
                "In this creative and interactive unit, students discover how to greet, introduce themselves, and start small talk in Palestinian Arabic (Gaza style). The lesson connects greetings, feelings, basic identity questions, and classroom language to real-life situations so the student feels like they are entering a new world of communication.",
            goals: [
                "Use casual and polite Palestinian Arabic greetings naturally in real conversations.",
                "Ask and answer questions about name, where someone is from, and where they live.",
                "Use basic feeling words and understand when to use each one in context.",
                "Recognize when to use different greetings (morning, evening, religious, casual).",
                "Interact in a full conversation: greeting → small talk → introduction → polite closing.",
            ],
        },

        // ====================================
        // VOCABULARY (carefully curated)
        // ====================================
        vocabulary: {
            core: [
                // ====== GREETINGS & REPLIES ======
                {
                    id: "marhaba",
                    ar: "مَرْحَبَا",
                    en: "Hi / Hello",
                    enArabeezy: "marhaba",
                    hint:
                        "Very common, friendly greeting. You can use it any time of day with friends, classmates, or even teachers in a relaxed setting. Works for one person or a group (add يا جَمَاعَة).",
                    exampleAr: "مَرْحَبَا يَا جَمَاعَة، أَهْلًا فِيكُم فِي الدَّرْس.",
                    exampleEn: "Hi everyone, welcome to the lesson.",
                },
                {
                    id: "ahlan",
                    ar: "أَهْلًا",
                    en: "Hi / Hey",
                    enArabeezy: "ahlan",
                    hint:
                        "Short, warm reply to مَرْحَبَا or to call someone’s attention. Often used with a name: أَهْلًا يَا لِين.",
                    exampleAr: "مَرْحَبَا لِين. ـ أَهْلًا أُسْتَاذ.",
                    exampleEn: "Hi, Lynn. — Hey, teacher.",
                },
                {
                    id: "ahlan_wa_sahlan",
                    ar: "أَهْلًا وَسَهْلًا",
                    en: "Welcome",
                    enArabeezy: "ahlan_wa_sahlan",
                    hint:
                        "Very warm welcome for guests or new students. You can combine with فِيك / فِيكِي / فِيكُم to say ‘welcome to you’.",
                    exampleAr: "أَهْلًا وَسَهْلًا فِيكُم فِي كُورْس اللُّغَة الْعَرَبِيَّة.",
                    exampleEn: "Welcome to the Arabic language course.",
                },
                {
                    id: "salam",
                    ar: "السَّلَامُ عَلَيْكُمْ",
                    en: "Peace be upon you",
                    enArabeezy: "assalamu_3alaykum",
                    hint:
                        "More formal / religious greeting. Very common in Muslim contexts, in mosques, families, and respectful situations. Can be to one person or many.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ يَا شَبَاب.",
                    exampleEn: "Peace be upon you, guys.",
                },
                {
                    id: "salam_reply",
                    ar: "وَعَلَيْكُم السَّلَام",
                    en: "And peace be upon you",
                    enArabeezy: "wa_3alaykum_assalam",
                    hint:
                        "The standard reply to السَّلَامُ عَلَيْكُمْ. You must use it to answer that greeting politely.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ. ـ وَعَلَيْكُم السَّلَام.",
                    exampleEn: "Peace be upon you. — And peace be upon you.",
                },
                {
                    id: "sabah_el_kheir",
                    ar: "صَبَاح الْخِير",
                    en: "Good morning",
                    enArabeezy: "sabah_el_kheir",
                    hint:
                        "Used in the morning. Typical reply is صَبَاح النُّور. Often used with teachers, coworkers, or in class.",
                    exampleAr: "صَبَاح الْخِير يَا أُسْتَاذ.",
                    exampleEn: "Good morning, teacher.",
                },
                {
                    id: "sabah_el_noor",
                    ar: "صَبَاح النُّور",
                    en: "Good morning (reply)",
                    enArabeezy: "sabah_el_noor",
                    hint:
                        "Standard reply to صَبَاح الْخِير. Literally ‘morning of light’.",
                    exampleAr: "صَبَاح الْخِير. ـ صَبَاح النُّور.",
                    exampleEn: "Good morning. — Good morning.",
                },
                {
                    id: "masa_el_kheir",
                    ar: "مَسَا الْخِير",
                    en: "Good evening",
                    enArabeezy: "masa_el_kheir",
                    hint:
                        "Used in the evening or at night. Typical reply: مَسَا النُّور. Can be formal or casual.",
                    exampleAr: "مَسَا الْخِير يَا جِيرَان.",
                    exampleEn: "Good evening, neighbors.",
                },
                {
                    id: "masa_el_noor",
                    ar: "مَسَا النُّور",
                    en: "Good evening (reply)",
                    enArabeezy: "masa_el_noor",
                    hint:
                        "Standard reply to مَسَا الْخِير.",
                    exampleAr: "مَسَا الْخِير. ـ مَسَا النُّور.",
                    exampleEn: "Good evening. — Good evening.",
                },

                // ====== HOW ARE YOU & FEELINGS ======
                {
                    id: "kif_halak",
                    ar: "كِيف حَالَك؟",
                    en: "How are you?",
                    enArabeezy: "keef_halak / keef_halik",
                    hint:
                        "Base question ‘How are you?’. Forms: masc كِيف حَالَك؟ (kīf ḥalak), fem كِيف حَالِك؟ (kīf ḥalik), plural كِيف حَالْكُم؟ (kīf ḥalkum). Use after greeting to open small talk.",
                    exampleAr: "مَرْحَبَا، كِيف حَالَك الْيَوْم؟",
                    exampleEn: "Hi, how are you today?",
                },
                {
                    id: "mnee7",
                    ar: "مْنِيح",
                    en: "good / fine",
                    enArabeezy: "mnee7 / mnee7a",
                    hint:
                        "Very common positive answer. Forms: masc مْنِيح, fem مْنِيحَة, plural مْنَاح. Often followed by شُكْرًا.",
                    exampleAr: "أَنَا مْنِيحَة، شُكْرًا. وَإِنْتَ كِيف حَالَك؟",
                    exampleEn: "I’m good, thanks. And how are you?",
                },
                {
                    id: "maashi",
                    ar: "مَاشِي",
                    en: "okay / going along",
                    enArabeezy: "maashi",
                    hint:
                        "Neutral answer, literally ‘going’. Means ‘I’m okay / so-so’. Used when things are not perfect but fine.",
                    exampleAr: "الصِّدْقِي مَاشِي الْحَال، مَوْ مُمْتَاز بَسّ مِش سَيِّئ.",
                    exampleEn: "Honestly, things are okay, not great but not bad.",
                },
                {
                    id: "ta3ban",
                    ar: "تَعْبَان",
                    en: "tired / exhausted",
                    enArabeezy: "ta3ban / ta3baneh",
                    hint:
                        "Feeling word. Forms: masc تَعْبَان, fem تَعْبَانَة. Can be physical or mental tiredness.",
                    exampleAr: "الْيَوْم أَنَا تَعْبَان شْوَيّ مِن الدِّرَاسَة.",
                    exampleEn: "Today I’m a bit tired from studying.",
                },
                {
                    id: "mabsut",
                    ar: "مَبْسُوط",
                    en: "happy / pleased",
                    enArabeezy: "mabsut / mabsuta / mabsuTeen",
                    hint:
                        "Positive feeling. Forms: masc مَبْسُوط, fem مَبْسُوطَة, plural مَبْسُوطِين.",
                    exampleAr: "إِحْنَا مَبْسُوطِين إِنَّك مَعْنَا فِي الْكُورْس.",
                    exampleEn: "We’re happy that you’re with us in the course.",
                },

                // ====== IDENTITY & ORIGIN ======
                {
                    id: "shu_ismak",
                    ar: "شُو اِسْمَك؟",
                    en: "What’s your name?",
                    enArabeezy: "shu_ismak / shu_ismik",
                    hint:
                        "Basic identity question. Forms: masc شُو اِسْمَك؟ (shu ismak), fem شُو اِسْمِك؟ (shu ismik). Use it right after greeting.",
                    exampleAr: "مَرْحَبَا، شُو اِسْمَك إِنْتَ؟",
                    exampleEn: "Hi, what’s your name?",
                },
                {
                    id: "ana_ismi",
                    ar: "أَنَا اِسْمِي...",
                    en: "My name is…",
                    enArabeezy: "ana_ismi",
                    hint:
                        "Standard way to introduce your name. You can add your country or job after.",
                    exampleAr: "أَنَا اِسْمِي رُوبَا، أَنَا طَالْبَة عَرَبِي.",
                    exampleEn: "My name is Roba, I’m an Arabic student.",
                },
                {
                    id: "min_wen",
                    ar: "مِنْ وِين؟",
                    en: "Where are you from?",
                    enArabeezy: "min_wayn / min_wen",
                    hint:
                        "Origin question. With pronoun: مِنْ وِين إِنْتَ؟ / مِنْ وِين إِنْتِ؟. Used for country or city.",
                    exampleAr: "مِنْ وِين إِنْتِ أَصْلًا؟",
                    exampleEn: "Where are you originally from?",
                },
                {
                    id: "ana_min",
                    ar: "أَنَا مِنْ...",
                    en: "I am from…",
                    enArabeezy: "ana_min",
                    hint:
                        "Use with country or city: أَنَا مِنْ غَزَّة، أَنَا مِنْ أَلْمَانْيَا….",
                    exampleAr: "أَنَا مِنْ هُولَنْدَا، بَسّ بِحِبّ فِلَسْطِين.",
                    exampleEn: "I’m from the Netherlands, but I love Palestine.",
                },
                {
                    id: "wen_saken",
                    ar: "وِين سَاكِن؟",
                    en: "Where do you live?",
                    enArabeezy: "weyn_saken / weyn_sakneh",
                    hint:
                        "Talking about where you live now. Forms: masc وِين سَاكِن؟, fem وِين سَاكْنَة؟, plural وِين سَاكْنِين؟.",
                    exampleAr: "هَلَّقْ إِنْتِ وِين سَاكْنَة؟",
                    exampleEn: "Where do you live now?",
                },
                {
                    id: "ana_saken_fi",
                    ar: "أَنَا سَاكِن فِي...",
                    en: "I live in…",
                    enArabeezy: "ana_saken_fi / ana_sakneh_fi",
                    hint:
                        "Fem: أَنَا سَاكْنَة فِي…. Often combined with origin: أَنَا مِنْ… بَسّ أَنَا سَاكْن فِي….",
                    exampleAr: "أَنَا مِنْ كَنَدَا، بَسّ أَنَا سَاكْنَة فِي رَام اللّٰه.",
                    exampleEn: "I am from Canada, but I live in Ramallah.",
                },

                // ====== CLASSROOM & ROLE WORDS ======
                {
                    id: "talib",
                    ar: "طَالِب / طَالْبَة",
                    en: "student",
                    enArabeezy: "taleb / talbeh",
                    hint:
                        "Masc طَالِب, fem طَالْبَة. Used for school or university students.",
                    exampleAr: "أَنَا طَالْبَة عَرَبِي فِي الْجَامْعَة.",
                    exampleEn: "I am an Arabic student at the university.",
                },
                {
                    id: "ustaz",
                    ar: "أُسْتَاذ / أُسْتَاذَة",
                    en: "teacher",
                    enArabeezy: "ostaz / ostaze",
                    hint:
                        "Masc أُسْتَاذ, fem أُسْتَاذَة. You can call your teacher ‘أُسْتَاذ + name’.",
                    exampleAr: "مَرْحَبَا أُسْتَاذ، كِيف حَالَك الْيَوْم؟",
                    exampleEn: "Hi teacher, how are you today?",
                },
                {
                    id: "dars",
                    ar: "دَرْس",
                    en: "lesson / class",
                    enArabeezy: "dars",
                    hint:
                        "Used for a single lesson: دَرْس الْيَوْم = today’s lesson.",
                    exampleAr: "هَادَا أَوَّل دَرْس إِلْنَا فِي اللُّغَة الْعَرَبِيَّة.",
                    exampleEn: "This is our first lesson in Arabic.",
                },
                {
                    id: "lugha_arabi",
                    ar: "اللُّغَة الْعَرَبِيَّة",
                    en: "Arabic (language)",
                    enArabeezy: "ellugha_el3arabeyyeh",
                    hint:
                        "You can also say: عَرَبِي بس. Example: بَدْرُس عَرَبِي.",
                    exampleAr: "أَنَا بَدْرُس اللُّغَة الْعَرَبِيَّة أُونْلَايْن.",
                    exampleEn: "I study Arabic online.",
                },

                // ====== POLITENESS & CLOSING ======
                {
                    id: "shukran",
                    ar: "شُكْرًا",
                    en: "thank you",
                    enArabeezy: "shukran",
                    hint:
                        "Very common thanks. Stronger: شُكْرًا كْتِير = thank you very much.",
                    exampleAr: "شُكْرًا كْتِير عَلَى الدَّرْس الْيَوْم.",
                    exampleEn: "Thank you very much for the lesson today.",
                },
                {
                    id: "afwan",
                    ar: "عَفْوًا",
                    en: "you’re welcome",
                    enArabeezy: "3afwan",
                    hint:
                        "Standard reply to شُكْرًا. Can also lightly mean ‘excuse me’.",
                    exampleAr: "شُكْرًا أُسْتَاذ. ـ عَفْوًا، تِشَرَّفْنَا.",
                    exampleEn: "Thank you, teacher. — You’re welcome, it was a pleasure.",
                },
                {
                    id: "law_samaHt",
                    ar: "لَوْ سَمَحْت",
                    en: "please / excuse me",
                    enArabeezy: "law_sama7t / law_sama7ti",
                    hint:
                        "Polite way to ask for something: ‘please’. Fem لَوْ سَمَحْتِي, plural لَوْ سَمَحْتُوا.",
                    exampleAr: "لَوْ سَمَحْت، مُمْكِن تِحْكِي بُطِّيء شْوَيّ؟",
                    exampleEn: "Excuse me, can you speak a bit slowly?",
                },
                {
                    id: "ana_mesh_fahem",
                    ar: "أَنَا مِش فَاهِم",
                    en: "I don’t understand",
                    enArabeezy: "ana_mesh_fahem / ana_mesh_fahmeh",
                    hint:
                        "Masc أَنَا مِش فَاهِم, fem أَنَا مِش فَاهْمَة. Very useful in class and real life!",
                    exampleAr: "أَنَا مِش فَاهْمَة الْكَلِمَة، مُمْكِن تِشْرَح كَمَان مَرَّة؟",
                    exampleEn: "I don’t understand the word, can you explain again?",
                },
                {
                    id: "ma3_salaameh",
                    ar: "مَع السَّلَامَة",
                    en: "goodbye",
                    enArabeezy: "ma3_salaameh",
                    hint:
                        "Polite goodbye. Often used at the end of a call, visit, or lesson.",
                    exampleAr: "مَع السَّلَامَة، بَشُوفْك بُكْرَا.",
                    exampleEn: "Goodbye, I’ll see you tomorrow.",
                },
                {
                    id: "alla_ma3ak",
                    ar: "الله مَعَك",
                    en: "God be with you",
                    enArabeezy: "allah_ma3ak / allah_ma3ek",
                    hint:
                        "Common closing phrase. Fem: الله مَعِك, plural: الله مَعْكُم.",
                    exampleAr: "مَع السَّلَامَة، الله مَعِك.",
                    exampleEn: "Goodbye, God be with you.",
                },
                {
                    id: "yalla",
                    ar: "يَلَّا",
                    en: "come on / let’s go",
                    enArabeezy: "yalla",
                    hint:
                        "Very frequent word to start or finish something: ‘okay, let’s…’.",
                    exampleAr: "يَلَّا، نِبْدَا الدَّرْس الْأَوَّل.",
                    exampleEn: "Come on, let’s start the first lesson.",
                },
            ],

        },

        // ====================================
        // DIALOGUE (multi-scene, rich)
        // ====================================
        dialogue: {
            lines: [
                {
                    "speaker": "Teacher",
                    "ar": "مَرْحَبَا، أَهْلًا وَسَهْلًا فِي الدَّرْس!",
                    "en": "Hi, welcome to the lesson!"
                },
                {
                    "speaker": "Lina",
                    "ar": "مَرْحَبَا أُسْتَاذ.",
                    "en": "Hi, teacher."
                },
                {
                    "speaker": "Teacher",
                    "ar": "صَبَاح الْخِير، كِيفَك الْيَوْم؟",
                    "en": "Good morning, how are you today?"
                },
                {
                    "speaker": "Lina",
                    "ar": "أَنَا مْنِيحَة، شُكْرًا. وَإِنْتَ؟",
                    "en": "I’m good, thanks. And you?"
                },
                {
                    "speaker": "Teacher",
                    "ar": "أَنَا مْنِيح، الْحَمْدِلِلَّه.",
                    "en": "I’m good, praise be to God."
                },
                {
                    "speaker": "Teacher",
                    "ar": "شُو اِسْمِك؟",
                    "en": "What’s your name?"
                },
                {
                    "speaker": "Lina",
                    "ar": "أَنَا اِسْمِي لِينْ.",
                    "en": "My name is Lynn."
                },
                {
                    "speaker": "Teacher",
                    "ar": "فُرْصَة سَعِيدَة يَا لِينْ.",
                    "en": "Nice to meet you, Lynn."
                },
                {
                    "speaker": "Lina",
                    "ar": "تْشَرَّفْت فِيك أُسْتَاذ.",
                    "en": "Pleased to meet you, teacher."
                },
                {
                    "speaker": "Teacher",
                    "ar": "مِنْ وِين إِنْتِي أَصْلًا؟",
                    "en": "Where are you originally from?"
                },
                {
                    "speaker": "Lina",
                    "ar": "أَنَا مِنْ كَنَدَا.",
                    "en": "I’m from Canada."
                },
                {
                    "speaker": "Teacher",
                    "ar": "حِلُو! وَهَلَّقْ وِين سَاكْنَة؟",
                    "en": "Nice! And where do you live now?"
                },
                {
                    "speaker": "Lina",
                    "ar": "هَلَّقْ أَنَا سَاكْنَة فِي رَام اللّٰه.",
                    "en": "Now I live in Ramallah."
                },
                {
                    "speaker": "Lina",
                    "ar": "وَإِنْتَ مِنْ وِين؟",
                    "en": "And where are you from?"
                },
                {
                    "speaker": "Teacher",
                    "ar": "أَنَا مِنْ غَزَّة، بَسّ هَلَّقْ بَشْتِغِل فِي الْقُدْس.",
                    "en": "I’m from Gaza, but now I work in Jerusalem."
                },
                {
                    "speaker": "Teacher",
                    "ar": "إِنْتِي طَالْبَة وَلَّا بِتْشْتِغْلِي؟",
                    "en": "Are you a student or do you work?"
                },
                {
                    "speaker": "Lina",
                    "ar": "أَنَا طَالْبَة، بَدْرُس عَرَبِي وَإِنْجِلِيزِي.",
                    "en": "I’m a student, I study Arabic and English."
                },
                {
                    "speaker": "Teacher",
                    "ar": "حِلُو، أَنَا كَمَان أُسْتَاذ عَرَبِي.",
                    "en": "Nice, I’m also an Arabic teacher."
                },
                {
                    "speaker": "Lina",
                    "ar": "مَبْسُوطَة إِنِّي مَعَك فِي الدَّرْس.",
                    "en": "I’m happy to be in your class."
                },
                {
                    "speaker": "Teacher",
                    "ar": "وَإِحْنَا مَبْسُوطِين فِيك كَمَان.",
                    "en": "And we’re happy to have you too."
                },
                {
                    "speaker": "Adam",
                    "ar": "السَّلَامُ عَلَيْكُمْ يَا شَبَاب!",
                    "en": "Peace be upon you, everyone!"
                },
                {
                    "speaker": "Lina",
                    "ar": "وَعَلَيْكُم السَّلَام، مَرْحَبَا!",
                    "en": "And peace be upon you, hi!"
                },
                {
                    "speaker": "Teacher",
                    "ar": "كِيفْكُم الْيَوْم؟",
                    "en": "How are you all today?"
                },
                {
                    "speaker": "Adam",
                    "ar": "إِحْنَا مْنَاح، بَسّ شَوَيّ تَعْبَانِين.",
                    "en": "We’re fine, just a bit tired."
                },
                {
                    "speaker": "Sara",
                    "ar": "أَنَا مَبْسُوط إِنِّي بَدْرُس عَرَبِي مَعْكُم.",
                    "en": "I’m happy that I study Arabic with you all."
                },
                {
                    "speaker": "Teacher",
                    "ar": "طَيِّب يَلَّا، هَادَا كَانَ التَّعَارُف الْأَوَّل.",
                    "en": "Alright, this was our first introduction."
                },
                {
                    "speaker": "Teacher",
                    "ar": "مَع السَّلَامَة، مَا تِنْسُوا الْوَاجِب.",
                    "en": "Goodbye, don’t forget the homework."
                },
                {
                    "speaker": "Lina",
                    "ar": "مَع السَّلَامَة أُسْتَاذ، بِالتَّوْفِيق.",
                    "en": "Goodbye, teacher, good luck."
                },
                {
                    "speaker": "Adam",
                    "ar": "شُكْرًا، اِنْبِسِطُوا بِوَقْتْكُم الْيَوْم.",
                    "en": "Thank you, enjoy your time today."
                },
                {
                    "speaker": "Sara",
                    "ar": "مِش مُشْكِلَة، أَكِيد مَا مْنِنْسَى الْوَاجِب.",
                    "en": "No problem, we definitely won’t forget the homework."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR (creative, like a mini textbook)
        // ====================================
        grammar: [
            {
                id: "no_to_be_present",
                title: "No ‘to be’ in the present (I am / you are)",
                description:
                    "In Palestinian Arabic, there is no separate verb for ‘to be’ (am / is / are) in the present tense.\n\n" +
                    "You simply put the pronoun + adjective or noun:\n" +
                    "• أَنَا مْنِيح = I am good (masc).\n" +
                    "• أَنَا مْنِيحَة = I am good (fem).\n" +
                    "• هُوَّ تَعْبَان = He is tired.\n" +
                    "• هِيَّ مَبْسُوطَة = She is happy.\n" +
                    "• أَنَا طَالِب / أَنَا طَالْبَة = I am a student (m/f).\n\n" +
                    "We DO NOT say anything like ‘*أَنَا أَكُون مْنِيح’ in Palestinian Arabic.\n\n" +
                    "Think: English ‘am/are/is’ disappears in the present, but the meaning is still there.",
            },
            {
                id: "greeting_choices",
                title: "Choosing the right greeting: casual, polite, religious",
                description:
                    "Palestinian Arabic has several greeting types. Which one you choose depends on context:\n\n" +
                    "• مَرْحَبَا = very common, friendly, any time of day (like ‘hi’). You can use it almost everywhere.\n" +
                    "• أَهْلًا / أَهْلًا وَسَهْلًا = used to welcome someone, often when they arrive somewhere new (new city, new lesson, new home).\n" +
                    "• السَّلَامُ عَلَيْكُمْ = religious / formal, good for groups, families, and Muslim environments. Reply MUST be وَعَلَيْكُم السَّلَام.\n" +
                    "• صَبَاح الْخِير / صَبَاح النُّور = used in the morning.\n" +
                    "• مَسَا الْخِير / مَسَا النُّور = used in the evening.\n\n" +
                    "In many real situations, people combine:\n" +
                    "• السَّلَامُ عَلَيْكُمْ، مَرْحَبَا = Peace be upon you, hi.\n\n" +
                    "On Preply or in online lessons, مَرْحَبَا and صَبَاح الْخِير are very safe and natural choices.",
            },
            {
                id: "question_patterns",
                title: "Basic question patterns: name, origin, where you live",
                description:
                    "Three powerful questions for introductions:\n\n" +
                    "1) شُو اِسْمَك؟ = What’s your name?\n" +
                    "• Masc: شُو اِسْمَك؟ (shu ismak)\n" +
                    "• Fem: شُو اِسْمِك؟ (shu ismik)\n\n" +
                    "2) مِنْ وِين إِنْتَ/إِنْتِ؟ = Where are you from?\n" +
                    "• مِنْ وِين إِنْتَ؟ = Where are you from? (to a man)\n" +
                    "• مِنْ وِين إِنْتِ؟ = Where are you from? (to a woman)\n\n" +
                    "3) وِين سَاكِن / وِين سَاكْنَة؟ = Where do you live?\n" +
                    "• وِين سَاكِن؟ = Where do you live? (to a man)\n" +
                    "• وِين سَاكْنَة؟ = Where do you live? (to a woman)\n\n" +
                    "Typical answer combines origin + current place:\n" +
                    "• أَنَا مِنْ أَلْمَانْيَا، بَسّ أَنَا سَاكْنَة فِي رَام اللّٰه.\n" +
                    "  = I am from Germany, but I live in Ramallah.\n\n" +
                    "Once you master these three questions, you can start almost any friendly conversation.",
            },
            {
                id: "b_prefix_preview",
                title: "Preview: the «بـ» (b-) prefix for habits",
                description:
                    "You will see many verbs starting with «بـ» (b-). This usually marks a simple present / habit:\n\n" +
                    "• أَنَا بَدْرُس عَرَبِي = I study Arabic (regularly).\n" +
                    "• أَنَا بَشْتِغِل أُنْلَايْن = I work online.\n\n" +
                    "In this unit, you only need to recognize it. Later units will show full patterns for all persons.\n" +
                    "When you see بِـ at the beginning of a verb, think ‘this is something usually true or repeated’.",
            },
        ],

        // ====================================
        // PRACTICE (quiz + interactive role-plays)
        // ====================================
        practice: {
            quiz: [
                {
                    id: "greet_q1",
                    questionAr: "«مِنْ وِين إِنْتِ؟» مَعْنَاهَا:",
                    optionsEn: [
                        "What is your name? (to a female)",
                        "Where are you from? (to a female)",
                        "Where do you live now? (to a female)",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "greet_q2",
                    questionAr: "«أَنَا سَاكِن فِي غَزَّة» مَعْنَاهَا:",
                    optionsEn: [
                        "I am from Gaza.",
                        "I live in Gaza (male speaking).",
                        "I work in Gaza.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "greet_q3",
                    questionAr: "أَيّ تَعْبِير تِسْتَخْدِمُه لِلسَّلَام الدِّينِي الرَّسْمِي؟",
                    optionsEn: [
                        "مَرْحَبَا",
                        "صَبَاح الْخِير",
                        "السَّلَامُ عَلَيْكُمْ",
                    ],
                    correctIndex: 2,
                },
                {
                    id: "greet_q4",
                    questionAr: "«أَنَا مِش فَاهْمَة الْكَلِمَة» مَعْنَاهَا:",
                    optionsEn: [
                        "I don’t understand the word (female speaking).",
                        "I don’t like the word.",
                        "I can’t say the word.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "greet_q5",
                    questionAr: "لَمَّا حَدَا يِحْكِي «شُكْرًا كْتِير»، أَيّ رَدّ طَبِيعِي؟",
                    optionsEn: [
                        "Good morning.",
                        "You’re welcome.",
                        "See you yesterday.",
                    ],
                    correctIndex: 1,
                },
            ],

            rolePlays: [
                "Role-play 1: Student A is the teacher, Student B is new. A greets B (choose مَرْحَبَا أو السَّلَامُ عَلَيْكُمْ), asks about name, where B is from, and where B lives now. Then switch roles.",
                "Role-play 2: Two students meet in the morning in Gaza. Start with صَبَاح الْخِير / صَبَاح النُّور, ask كِيف حَالَك؟ and answer using مْنِيح / مَاشِي / تَعْبَان. Add at least one follow-up question about study or work.",
                "Role-play 3: At the end of an online lesson, say goodbye in a natural way. Use: شُكْرًا, مَع السَّلَامَة, الله مَعَك, and maybe يَلَّا. Try to make the goodbye sound friendly and not robotic.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 45–60 second self-introduction in Palestinian Arabic. Include: a greeting, your name, where you are from, where you live now, one feeling word (for example: مْنِيح / مَبْسُوط / تَعْبَان), and a natural closing such as مَع السَّلَامَة or الله مَعَك. Try to recycle at least 6 words from the vocabulary list.",
        },

        // ====================================
        // TEACHER NOTES (for you on Preply)
        // ====================================
        teacherNotes: {
            warmup: [
                "Start in English: explain that this unit is about real greetings and introductions that students can use from minute one in Palestine or online.",
                "Ask students how they usually say ‘hi’ in their own language, then connect it to مَرْحَبَا / السَّلَامُ عَلَيْكُمْ.",
                "Play a quick game: you say different times or places (morning, evening, mosque, Preply class) and the student chooses a suitable greeting.",
            ],
            vocabularySteps: [
                "Teach greetings in small groups (3–4 items) and always show when to use each one (time of day, casual vs formal).",
                "When teaching feelings, act them physically (tired, happy) and let the student guess the meaning before you confirm.",
                "Use the hints actively: ask students to notice masc/fem/plural forms but keep the entry as one main word.",
            ],
            dialogueSteps: [
                "First time: read the whole dialogue with natural speed while the student just listens.",
                "Second time: read line by line and let the student repeat (shadowing). Focus on rhythm and melody, not only words.",
                "Third time: hide the English and ask the student to tell you in English what is happening in each scene.",
                "Finally: have the student personalize the dialogue: change the countries, cities, and feelings but keep the structure.",
            ],
            practiceTips: [
                "Treat the quiz as conversation prompts, not a formal test. After each answer, ask a mini follow-up question.",
                "Encourage the student to answer questions about themselves using the same patterns from the dialogue.",
                "When the student says something slightly wrong but understandable, repeat it back in the correct way so they hear the model.",
            ],
            wrapup: [
                "End the lesson in Arabic using only words from this unit: greeting → small talk → goodbye.",
                "Ask the student to tell you: which greeting feels most natural to them and which one they want to practice more.",
                "Remind them of the homework and suggest that they send the recording before the next lesson so you can give feedback.",
            ],
            myNotes: "",
        },
    },




    [LESSON_ID_DAILY_ROUTINE]: {
        meta: {
            level: "Beginner",
            unit: "Daily Routine",
            lessonTitle: "Unit 3 – Daily Routine & Time",
        },

        overview: {
            title: "Unit 3 – Daily Routine & Time",
            description:
                "In this unit, students learn how to talk about their typical day in Palestinian Arabic: waking up, going to work or university, eating, studying, relaxing, and sleeping. They also learn basic time expressions (morning, afternoon, evening, clock hours) and high-frequency verbs with the b- prefix in real context.",
            goals: [
                "Describe a simple daily routine using high-frequency Palestinian Arabic verbs.",
                "Use the b- prefix to talk about habits and things you ‘usually’ do.",
                "Understand and use basic time expressions: morning, afternoon, evening, night.",
                "Ask and answer simple questions about what time you wake up, study, or sleep.",
                "Connect routines with the family and study/work life from previous units.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                {
                    "id": "baS7a",
                    "ar": "بَصْحَى",
                    "en": "I wake up",
                    "enArabeezy": "baS7a",
                    "hint": "Simple present with b- prefix for a habit.",
                    "exampleAr": "كُل يَوْم بَصْحَى السَّاعَة سِتِّة.",
                    "exampleEn": "Every day I wake up at six o’clock."
                },
                {
                    "id": "batghassal",
                    "ar": "بَغَسَّل",
                    "en": "I wash (my face / hands)",
                    "enArabeezy": "baghassal",
                    "hint": "Daily action after waking up.",
                    "exampleAr": "أَوَّل إِشِي بَغَسَّل وَجْهِي.",
                    "exampleEn": "The first thing I do is wash my face."
                },
                {
                    "id": "bat7ammam",
                    "ar": "بَتْحَمَّم",
                    "en": "I take a shower",
                    "enArabeezy": "bat7ammam",
                    "hint": "Common verb for showering.",
                    "exampleAr": "بَتْحَمَّم قَبِل مَا أَطْلَع.",
                    "exampleEn": "I shower before I go out."
                },
                {
                    "id": "bafTar",
                    "ar": "بَفْطَر",
                    "en": "I have breakfast",
                    "enArabeezy": "bafTar",
                    "hint": "",
                    "exampleAr": "بَعْد مَا بَصْحَى بَفْطَر.",
                    "exampleEn": "After I wake up, I have breakfast."
                },
                {
                    "id": "baakul",
                    "ar": "بَاكُل",
                    "en": "I eat",
                    "enArabeezy": "baakul",
                    "hint": "General verb for eating (lunch, dinner, etc.).",
                    "exampleAr": "بَاكُل الْغَدَا مَع أَهْلِي.",
                    "exampleEn": "I eat lunch with my family."
                },
                {
                    "id": "bashrab_ahwe",
                    "ar": "بَشْرَب قَهْوَة",
                    "en": "I drink coffee",
                    "enArabeezy": "bashrab_ahwe",
                    "hint": "Can change قَهْوَة to شَاي.",
                    "exampleAr": "كُل صَبَاح بَشْرَب قَهْوَة.",
                    "exampleEn": "Every morning I drink coffee."
                },
                {
                    "id": "baruu7_alshoghl",
                    "ar": "بَرُوح عَلَى الشُّغُل",
                    "en": "I go to work",
                    "enArabeezy": "baroo7_3al_shoghol",
                    "hint": "Use with شُغُل (work).",
                    "exampleAr": "بَرُوح عَلَى الشُّغُل السَّاعَة تَمَانْيَة.",
                    "exampleEn": "I go to work at eight o’clock."
                },
                {
                    "id": "baruu7_al_dars",
                    "ar": "بَرُوح عَلَى الدَّرْس",
                    "en": "I go to class / lesson",
                    "enArabeezy": "baroo7_3al_dars",
                    "hint": "Use with درس = lesson/class.",
                    "exampleAr": "بَرُوح عَلَى الدَّرْس بَعْد الضُّهُر.",
                    "exampleEn": "I go to class in the afternoon."
                },
                {
                    "id": "badros",
                    "ar": "بَدْرُس",
                    "en": "I study",
                    "enArabeezy": "badros",
                    "hint": "Habit: study Arabic, English, etc.",
                    "exampleAr": "بَدْرُس عَرَبِي كُل لَيْلَة.",
                    "exampleEn": "I study Arabic every night."
                },
                {
                    "id": "bashtaghel",
                    "ar": "بَشْتِغِل",
                    "en": "I work",
                    "enArabeezy": "bashteghil",
                    "hint": "General verb for working.",
                    "exampleAr": "بَشْتِغِل فِي مَكْتَب.",
                    "exampleEn": "I work in an office."
                },
                {
                    "id": "barja3",
                    "ar": "بَرْجَع",
                    "en": "I come back / I return",
                    "enArabeezy": "barja3",
                    "hint": "Used for returning home/work/etc.",
                    "exampleAr": "بَرْجَع عَلَى الْبَيْت السَّاعَة خَمْسَة.",
                    "exampleEn": "I come back home at five."
                },
                {
                    "id": "bartaa7",
                    "ar": "بَرْتَاح",
                    "en": "I rest / I relax",
                    "enArabeezy": "barta7",
                    "hint": "Rest after work or study.",
                    "exampleAr": "بَرْتَاح شَوَيّ بَعْد الشُّغُل.",
                    "exampleEn": "I rest a bit after work."
                },
                {
                    "id": "batfarraj",
                    "ar": "بَتْفَرَّج عَلَى...",
                    "en": "I watch (TV, series, etc.)",
                    "enArabeezy": "batfarraj_3ala",
                    "hint": "Use with TV, series, movies.",
                    "exampleAr": "بِالْمَسَا بَتْفَرَّج عَلَى مُسَلْسَل.",
                    "exampleEn": "In the evening I watch a series."
                },
                {
                    "id": "baqra",
                    "ar": "بَقْرَا",
                    "en": "I read",
                    "enArabeezy": "baqra",
                    "hint": "Books, articles, etc.",
                    "exampleAr": "أَحْيَانًا بَقْرَا كْتَاب قَبِل النَّوْم.",
                    "exampleEn": "Sometimes I read a book before sleeping."
                },
                {
                    "id": "banaam",
                    "ar": "بَنَام",
                    "en": "I sleep",
                    "enArabeezy": "banaam",
                    "hint": "Daily routine, end of the day.",
                    "exampleAr": "بَنَام مِتْأَخَّر فِي الْوِيكْإِنْد.",
                    "exampleEn": "I sleep late on the weekend."
                },
                {
                    "id": "banzel",
                    "ar": "بَنْزِل",
                    "en": "I go out / I leave (home)",
                    "enArabeezy": "banzel",
                    "hint": "Leave the house or go outside.",
                    "exampleAr": "بَنْزِل مِن الْبَيْت السَّاعَة تَمَانْيَة إِلَّا رُبِع.",
                    "exampleEn": "I leave the house at quarter to eight."
                },
                {
                    "id": "bajli",
                    "ar": "بَجْلِي الصُّحُون",
                    "en": "I wash the dishes",
                    "enArabeezy": "bajli_esSu7oon",
                    "hint": "Household chore.",
                    "exampleAr": "بَعْد الْغَدَا بَجْلِي الصُّحُون.",
                    "exampleEn": "After lunch I wash the dishes."
                },
                {
                    "id": "banaddaf",
                    "ar": "بَنَضَّف",
                    "en": "I clean",
                    "enArabeezy": "banaddaf",
                    "hint": "Can be house, room, etc.",
                    "exampleAr": "يَوْم الْجُمْعَة بَنَضَّف الْبَيْت.",
                    "exampleEn": "On Friday I clean the house."
                },
                {
                    "id": "baSalli",
                    "ar": "بَصَلِّي",
                    "en": "I pray",
                    "enArabeezy": "baSalli",
                    "hint": "Daily prayers in the routine.",
                    "exampleAr": "بَصَلِّي قَبِل مَا أَطْلَع.",
                    "exampleEn": "I pray before I go out."
                },
                {
                    "id": "fi_elsob7",
                    "ar": "فِي الصُّبْح",
                    "en": "In the morning",
                    "enArabeezy": "fi_esSob7",
                    "hint": "Time expression.",
                    "exampleAr": "فِي الصُّبْح بَصْحَى وَبَفْطَر.",
                    "exampleEn": "In the morning I wake up and have breakfast."
                },
                {
                    "id": "ba3d_elDohr",
                    "ar": "بَعْد الضُّهُر",
                    "en": "In the afternoon",
                    "enArabeezy": "ba3d_eDDohr",
                    "hint": "Time of day.",
                    "exampleAr": "بَعْد الضُّهُر بَرُوح عَلَى الدَّرْس.",
                    "exampleEn": "In the afternoon I go to class."
                },
                {
                    "id": "belmasa",
                    "ar": "بِالْمَسَا",
                    "en": "In the evening",
                    "enArabeezy": "belmasa",
                    "hint": "Evening time.",
                    "exampleAr": "بِالْمَسَا بَرْتَاح وَبَتْفَرَّج عَلَى تِلِفِزْيُون.",
                    "exampleEn": "In the evening I relax and watch TV."
                },
                {
                    "id": "kull_yom",
                    "ar": "كُل يَوْم",
                    "en": "Every day",
                    "enArabeezy": "kull_yom",
                    "hint": "Frequency adverb.",
                    "exampleAr": "كُل يَوْم بَصْحَى السَّاعَة سِتِّة.",
                    "exampleEn": "Every day I wake up at six."
                },
                {
                    "id": "ahyanan",
                    "ar": "أَحْيَانًا",
                    "en": "Sometimes",
                    "enArabeezy": "a7yanan",
                    "hint": "Frequency adverb.",
                    "exampleAr": "أَحْيَانًا بَقْرَا قَبِل مَا أَنَام.",
                    "exampleEn": "Sometimes I read before I sleep."
                },
                {
                    "id": "ghaleban",
                    "ar": "غَالِبًا",
                    "en": "Usually",
                    "enArabeezy": "ghaleban",
                    "hint": "Similar to ‘most of the time’.",
                    "exampleAr": "غَالِبًا بَشْرَب قَهْوَة بَعْد الْفْطُور.",
                    "exampleEn": "Usually I drink coffee after breakfast."
                },
                {
                    "id": "abl_ma",
                    "ar": "قَبِل مَا...",
                    "en": "Before (doing something)",
                    "enArabeezy": "abl_ma",
                    "hint": "Used before a verb.",
                    "exampleAr": "قَبِل مَا بَنْزِل بَفْطَر.",
                    "exampleEn": "Before I go out, I have breakfast."
                },
                {
                    "id": "ba3d_ma",
                    "ar": "بَعْد مَا...",
                    "en": "After (doing something)",
                    "enArabeezy": "ba3d_ma",
                    "hint": "Used before a verb.",
                    "exampleAr": "بَعْد مَا بَرْجَع بَرْتَاح شَوَيّ.",
                    "exampleEn": "After I come back, I rest a bit."
                },
                {
                    "id": "b3deen",
                    "ar": "بَعْدِين / بَعْدَيْن",
                    "en": "Then / after that",
                    "enArabeezy": "ba3deen",
                    "hint": "Used to link actions in a sequence.",
                    "exampleAr": "بَصْحَى، بَغَسَّل، بَعْدَيْن بَفْطَر.",
                    "exampleEn": "I wake up, wash, then have breakfast."
                },
                {
                    "id": "bakir",
                    "ar": "بَكِير",
                    "en": "Early",
                    "enArabeezy": "bakir",
                    "hint": "Opposite: مِتْأَخَّر (late).",
                    "exampleAr": "بَصْحَى بَكِير فِي أَيَّام الشُّغُل.",
                    "exampleEn": "I wake up early on work days."
                },
                {
                    "id": "mita2kher",
                    "ar": "مِتْأَخَّر",
                    "en": "Late",
                    "enArabeezy": "mita2kher",
                    "hint": "Sleeping late, arriving late.",
                    "exampleAr": "بَنَام مِتْأَخَّر فِي الْوِيكْإِنْد.",
                    "exampleEn": "I sleep late on the weekend."
                },
                {
                    "id": "binam_badri",
                    "ar": "بَنَام بَدْرِي",
                    "en": "I sleep early",
                    "enArabeezy": "banaam_badri",
                    "hint": "Useful contrast with مِتْأَخَّر.",
                    "exampleAr": "يَوْم الْإِمْتِحَان بَنَام بَدْرِي.",
                    "exampleEn": "On exam day I sleep early."
                }
            ],
            "extra": [
                {
                    "id": "btabbikh",
                    "ar": "بَطَبِّخ",
                    "en": "I cook",
                    "enArabeezy": "batabbekh",
                    "hint": "Home routine when cooking.",
                    "exampleAr": "مَرَّة فِي الْأُسْبُوع بَطَبِّخ أَكْل فِلَسْطِينِي.",
                    "exampleEn": "Once a week I cook Palestinian food."
                },
                {
                    "id": "bansa2",
                    "ar": "برتب الْغُرْفَة",
                    "en": "I tidy the room",
                    "enArabeezy": "bartattib_elghurfeh",
                    "hint": "Organize / straighten the room.",
                    "exampleAr": "قَبِل مَا أَطْلَع برتب الْغُرْفَة.",
                    "exampleEn": "Before I go out, I tidy the room."
                },
                {
                    "id": "bistarih_shway",
                    "ar": "بِسْتَرِيح شَوَيّ",
                    "en": "I take a little rest",
                    "enArabeezy": "bistariy7_shway",
                    "hint": "Alternative to بَرْتَاح شَوَيّ.",
                    "exampleAr": "بَعْد الشُّغُل بِسْتَرِيح شَوَيّ.",
                    "exampleEn": "After work I take a little rest."
                }
            ]
        },


        // ====================================
        // DIALOGUE (multi-scene day in lives)
        // ====================================
        dialogue: {
            "lines": [
                {
                    "speaker": "Lynn",
                    "ar": "صَبَاح الْخِير يَا كَرِيم.",
                    "en": "Good morning, Karim."
                },
                {
                    "speaker": "Karim",
                    "ar": "صَبَاح النُّور يَا لِينْ، كِيفَك الْيَوْم؟",
                    "en": "Good morning, Lynn, how are you today?"
                },
                {
                    "speaker": "Lynn",
                    "ar": "أَنَا مْنِيحَة، بَسّ شَوَيّ تَعْبَانَة.",
                    "en": "I’m good, just a bit tired."
                },
                {
                    "speaker": "Karim",
                    "ar": "لِيش تَعْبَانَة؟ كَانَ عِنْدِك شُغُل كْتِير؟",
                    "en": "Why are you tired? Did you have a lot of work?"
                },
                {
                    "speaker": "Lynn",
                    "ar": "لَا، بَسّ بَنَام مِتْأَخَّر كْتِير هَالْأَيَّام.",
                    "en": "No, but I sleep very late these days."
                },
                {
                    "speaker": "Karim",
                    "ar": "أَنَا بِالْعَكْس، بَنَام بَدْرِي وَبَصْحَى بَكِير.",
                    "en": "I’m the opposite, I sleep early and wake up early."
                },
                {
                    "speaker": "Lynn",
                    "ar": "كُل يَوْم بَتصْحَى السَّاعَة كَم؟",
                    "en": "Every day, what time do you wake up?"
                },
                {
                    "speaker": "Karim",
                    "ar": "بَصْحَى السَّاعَة سِتِّة، بَغَسَّل وَجْهِي، بَعْدَيْن بَفْطَر وَبَشْرَب قَهْوَة.",
                    "en": "I wake up at six, wash my face, then have breakfast and drink coffee."
                },
                {
                    "speaker": "Lynn",
                    "ar": "بَعْد مَا تِفْطَر شُو بِتْعْمِل؟",
                    "en": "After you have breakfast, what do you do?"
                },
                {
                    "speaker": "Karim",
                    "ar": "بَنْزِل مِن الْبَيْت السَّاعَة تَمَانْيَة إِلَّا رُبِع.",
                    "en": "I leave the house at quarter to eight."
                },
                {
                    "speaker": "Karim",
                    "ar": "بَرُوح عَلَى الشُّغُل بِالْبَاص.",
                    "en": "I go to work by bus."
                },
                {
                    "speaker": "Lynn",
                    "ar": "أَنَا بَرُوح عَلَى الدَّرْس بَعْد الضُّهُر.",
                    "en": "I go to class in the afternoon."
                },
                {
                    "speaker": "Lynn",
                    "ar": "فِي الصُّبْح بَدْرُس شَوَيّ فِي الْبَيْت.",
                    "en": "In the morning, I study a bit at home."
                },
                {
                    "speaker": "Karim",
                    "ar": "كُل يَوْم بَتدْرُسِي؟",
                    "en": "Do you study every day?"
                },
                {
                    "speaker": "Lynn",
                    "ar": "أَحْيَانًا بَدْرُس، أَحْيَانًا بَتْفَرَّج عَلَى مُسَلْسَل.",
                    "en": "Sometimes I study, sometimes I watch a series."
                },
                {
                    "speaker": "Karim",
                    "ar": "بَعْد الشُّغُل أَنَا بَرْجَع عَلَى الْبَيْت السَّاعَة خَمْسَة.",
                    "en": "After work I come back home at five."
                },
                {
                    "speaker": "Karim",
                    "ar": "بَرْتَاح شَوَيّ، بَعْدَيْن بتغدى مَع أَهْلِي.",
                    "en": "I rest a bit, then eat lunch with my family."
                },
                {
                    "speaker": "Lynn",
                    "ar": "أَنَا بتغدى بَعْد الضُّهُر بَرْضُه.",
                    "en": "I also eat lunch in the afternoon."
                },
                {
                    "speaker": "Lynn",
                    "ar": "بِالْمَسَا بَتْفَرَّج عَلَى فِيلِم أَوْ مُسَلْسَل.",
                    "en": "In the evening I watch a movie or a series."
                },
                {
                    "speaker": "Karim",
                    "ar": "أَنَا أَحْيَانًا بَقْرَا كْتَاب قَبِل مَا أَنَام.",
                    "en": "Sometimes I read a book before I sleep."
                },
                {
                    "speaker": "Lynn",
                    "ar": "بتلعب رِيَاضَة فِي نِهَايَة الْيَوْم؟",
                    "en": "Do you exercise at the end of the day?"
                },
                {
                    "speaker": "Karim",
                    "ar": "ثَلَاث مَرَّات فِي الْأُسْبُوع بلعب رِيَاضَة بَعْد الشُّغُل.",
                    "en": "Three times a week I exercise after work."
                },
                {
                    "speaker": "Karim",
                    "ar": "يَوْم الْجُمْعَة بَنَضَّف الْبَيْت برتب الْغُرْفَة.",
                    "en": "On Friday I clean the house and tidy the room."
                },
                {
                    "speaker": "Lynn",
                    "ar": "زي! يَوْم الْعُطْلَة بَنْضِّف وَبَجْلِي الصُّحُون.",
                    "en": "Same as me! On the day off I clean and wash the dishes."
                },
                {
                    "speaker": "Karim",
                    "ar": "طَيِّب، هَلَّقْ رح اشْتِغِل شَوَيّ قَبِل مَا أَطْلَع.",
                    "en": "Okay, now I’ll work a bit before I go out."
                },
                {
                    "speaker": "Lynn",
                    "ar": "حلو، بَتَمَنَّى لَك يَوْم مَوَفَّق.",
                    "en": "Nice, I wish you a successful day."
                },
                {
                    "speaker": "Karim",
                    "ar": "شُكْرًا، إِنْبِسِطِي بِيَوْمِك كَمَان.",
                    "en": "Thanks, enjoy your day too."
                },
                {
                    "speaker": "Lynn",
                    "ar": "مَع السَّلَامَة",
                    "en": "Goodbye"
                },
                {
                    "speaker": "Karim",
                    "ar": "مَع السَّلَامَة!",
                    "en": "Goodbye!"
                }
            ]
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "b_prefix",
                title: "The «بـ» (b-) prefix for habits and routines",
                description:
                    "In Palestinian Arabic, the b- prefix marks simple present, especially habits and routines.\n\n" +
                    "Compare:\n" +
                    "• صَحَى = he woke up (past)\n" +
                    "• بَصْحَى = I wake up (habit)\n\n" +
                    "Some common forms (I / you / he / she):\n" +
                    "• أَنَا بَصْحَى = I wake up\n" +
                    "• إِنْتَ بْتِصْحَى = you (m) wake up\n" +
                    "• إِنْتِ بْتِصْحِي = you (f) wake up\n" +
                    "• هُوَّ بِيِصْحَى = he wakes up\n" +
                    "• هِيَّ بْتِصْحَى = she wakes up\n\n" +
                    "Same pattern with other verbs:\n" +
                    "• بَشْرَب قَهْوَة كُلّ يَوْم = I drink coffee every day.\n" +
                    "• بَدْرُس عَرَبِي بَعْد الضُّهُر = I study Arabic in the afternoon.\n" +
                    "• بَنَام مِتْأَخِّر بِاللِّيل = I sleep late at night.\n\n" +
                    "Think: b- is like English ‘I usually… / I often… / I (do) … regularly’.",
            },
            {
                id: "time_position",
                title: "Where to put the time word in the sentence",
                description:
                    "Time words are flexible. You can put them at the beginning or the end of the sentence. Both are natural.\n\n" +
                    "Beginning:\n" +
                    "• كُلّ يَوْم الصُّبِح بَصْحَى السَّاعَة سَبْعَة.\n" +
                    "  = Every day in the morning I wake up at seven.\n\n" +
                    "End:\n" +
                    "• بَصْحَى السَّاعَة سَبْعَة كُلّ يَوْم.\n" +
                    "  = I wake up at seven every day.\n\n" +
                    "Palestinian Arabic often likes time at the beginning when you are telling a story:\n" +
                    "• أَوَّل إِشِي الصُّبِح… بَعْد الضُّهُر… بِالْعَشِي… بِاللِّيل…",
            },
            {
                id: "saa3a_clock",
                title: "Saying the hour with «السَّاعَة»",
                description:
                    "To say whole hours, use:\n\n" +
                    "• السَّاعَة وَاحْدَة = one o’clock\n" +
                    "• السَّاعَة اِثْنَيْن = two o’clock\n" +
                    "• السَّاعَة تَلَاتَة = three o’clock\n" +
                    "• السَّاعَة أَرْبَعَة = four o’clock\n" +
                    "• السَّاعَة خَمْسَة = five o’clock\n" +
                    "• السَّاعَة سِتَّة = six o’clock\n" +
                    "• السَّاعَة سَبْعَة = seven o’clock\n" +
                    "• السَّاعَة تَمْنْيَة = eight o’clock\n" +
                    "• السَّاعَة تِسْعَة = nine o’clock\n" +
                    "• السَّاعَة عَشَرَة = ten o’clock\n" +
                    "• السَّاعَة حْدَاش = eleven o’clock\n" +
                    "• السَّاعَة تِنِين عَشَر = twelve o’clock\n\n" +
                    "In this unit, we keep it simple (whole hours, + a few common phrases like ‘quarter to’), for example:\n" +
                    "• السَّاعَة سَبْعَة إِلَّا رُبِع = quarter to seven.",
            },
            {
                id: "frequency_words",
                title: "Frequency words: every day, usually, sometimes",
                description:
                    "Some very useful adverbs of frequency:\n\n" +
                    "• كُلّ يَوْم = every day\n" +
                    "• عَادَةً = usually\n" +
                    "• أَحْيَانًا = sometimes\n" +
                    "• مَرَّة فِي الأُسْبُوع = once a week\n" +
                    "• مَرَّتَيْن بِالْأُسْبُوع = twice a week\n\n" +
                    "Examples:\n" +
                    "• عَادَةً بَصْحَى بَكِّير، بَسّ مَرَّة فِي الأُسْبُوع بَنَام مِتْأَخِّر.\n" +
                    "  = Usually I wake up early, but once a week I sleep late.\n" +
                    "• كُلّ يَوْم بَدْرُس نُصّ سَاعَة عَرَبِي.\n" +
                    "  = Every day I study Arabic for half an hour.\n" +
                    "• أَحْيَانًا بَلْعَب رِيَاضَة بَعْد الضُّهُر.\n" +
                    "  = Sometimes I do sports in the afternoon.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "daily_q1",
                    questionAr: "«كُلّ يَوْم بَصْحَى السَّاعَة سَبْعَة» مَعْنَاهَا:",
                    optionsEn: [
                        "I wake up at seven every day.",
                        "I sleep at seven every day.",
                        "I eat at seven every day.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "daily_q2",
                    questionAr: "«بِالْعَشِي بَتْفَرَّج عَلَى مُسَلْسَل» مَعْنَاهَا:",
                    optionsEn: [
                        "In the evening I watch a series.",
                        "In the morning I watch a series.",
                        "In the evening I read a book.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "daily_q3",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘every day’؟",
                    optionsEn: [
                        "today",
                        "every day",
                        "sometimes",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "daily_q4",
                    questionAr: "«بَرُوح عَلَى الشُّغُل بَعْد الضُّهُر» مَعْنَاهَا:",
                    optionsEn: [
                        "I go to work in the afternoon.",
                        "I go to school in the afternoon.",
                        "I go to sleep in the afternoon.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "daily_q5",
                    questionAr: "«بَنَام مِتْأَخِّر بِاللِّيل» مَعْنَاهَا:",
                    optionsEn: [
                        "I sleep early at night.",
                        "I don’t sleep at night.",
                        "I sleep late at night.",
                    ],
                    correctIndex: 2,
                },
            ],

            rolePlays: [

                "Role-play 2: Student describes a ‘perfect day’ in Palestine: wake up time, breakfast, going out, meeting friends, evening activities. Try to use time words (الصُّبِح، بَعْد الضُّهُر، بِالْعَشِي، بِاللِّيل) and at least five routine verbs.",

            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second description of your daily routine in Palestinian Arabic. Start from waking up (الصُّبِح) and finish with sleeping (بِاللِّيل). Include: at least 4 time words (مثل: الصُّبِح، بَعْد الضُّهُر، بِالْعَشِي، الْيَوْم، كُلّ يَوْم) and at least 6 verbs with the b- prefix (بَصْحَى، بِفْطَر، بَرُوح، بَرْجَع، بَدْرُس، بَنَام…). Try to make it sound like a real story, not just a list.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Ask the student: ‘Are you a morning person or a night person?’ in English, then teach two mini-sentences in Arabic to describe each.",
                "Draw a simple horizontal timeline (morning → afternoon → evening → night) and let the student place Arabic labels on it.",
                "Elicit a few daily actions from the student in English, then map them to Arabic verbs one by one.",
            ],
            vocabularySteps: [
                "Teach time words first (الصُّبِح، بَعْد الضُّهُر، بِالْعَشِي، بِاللِّيل) and drill them with gestures or pictures.",
                "Introduce verbs in short chunks (wake up, eat, go, come back, study, sleep) and immediately connect them with time.",
                "Encourage the student to talk about their REAL day as soon as possible, even if they mix English and Arabic at first.",
            ],
            dialogueSteps: [
                "Use the dialogue as a model of three different lifestyles (Roba, Mark, Yara). Ask the student which one is closer to their routine.",
                "Have the student retell one character’s day in the third person: ‘Roba wakes up…, then she…’ using Arabic forms as much as possible.",
                "Then ask the student to retell their own day using the same structure and connectives like بَعْدِين and بَعْد الضُّهُر.",
            ],
            practiceTips: [
                "Focus correction on the b- prefix and the time words, not on every small detail.",
                "Use the quiz as a listening/reading check, then ask extra ‘why/when/how often’ questions to expand the answers.",
                "If the student is visual, ask them to draw their daily schedule and write small Arabic labels under each icon.",
            ],
            wrapup: [
                "End by summarizing the student’s routine in Arabic at a slightly higher level so they hear a ‘beautiful’ version of their own story.",
                "Ask them to choose one new habit they want to add in Arabic (for example: reading in Arabic every evening) and say it as a sentence.",
                "Remind them of the homework recording and suggest focusing on rhythm: time word → verb → small detail.",
            ],
            myNotes: "",
        },
    },
    // BEGINNER – UNIT 3: FOOD & DRINK – LESSON 1
    // ===============================
    [LESSON_ID_FOOD_DRINK]: {
        meta: {
            level: "Beginner",
            unit: "Food & Drink",
            lessonTitle: "Unit 4 – Food & Drink in Palestinian Arabic",
        },

        overview: {
            title: "Unit 4 – Food & Drink",
            description:
                "In this unit, students dive into Palestinian food and drink culture: basic foods, typical meals, how to say ‘I like / I prefer’, how to order in a café or restaurant, and how to talk about what they eat at home. The unit also highlights singular vs plural forms for common foods and drinks.",
            goals: [
                "Name common Palestinian foods and drinks and recognize their singular/plural forms.",
                "Use «بَحِبّ» and «بِفَضَّل» to express likes and preferences.",
                "Talk about typical breakfast, lunch, and dinner in Palestinian culture.",
                "Order food and drinks politely in a café or restaurant.",
                "Connect food habits with daily routine and family life from previous units.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== MEALS =====
                {
                    id: "fuToor",
                    ar: "فُطُور",
                    en: "breakfast",
                    enArabeezy: "fuToor",
                    hint: '',

                    exampleAr: "فُطُورِي عَادَةً بَسِيط: خُبِز، لَبَن، وَشَاي.",
                    exampleEn: "My breakfast is usually simple: bread, yogurt, and tea.",
                },
                {
                    id: "ghada",
                    ar: "غَدَا",
                    en: "lunch",
                    enArabeezy: "ghada",
                    hint:
                        "Main meal in many Palestinian families. Verb: بِتْغَدَّى = I have lunch.",
                    exampleAr: "أَهَمّ أَكْلَة فِي الْبَيْت هِيَّ الْغَدَا.",
                    exampleEn: "The most important meal at home is lunch.",
                },
                {
                    id: "3asha",
                    ar: "عَشَا",
                    en: "dinner / evening meal",
                    enArabeezy: "3asha",
                    hint:
                        "Evening meal. Verb: بِتْعَشَّى = I have dinner. Sometimes dinner is light (like tea and cheese).",
                    exampleAr: "بِالْعَشِي بِنِتْعَشَّى مَع بَعْض قُدَّام التِّلْفِزْيُون.",
                    exampleEn: "In the evening we have dinner together in front of the TV.",
                },

                // ===== BASIC FOODS =====
                {
                    id: "khobez",
                    ar: "خُبِز",
                    en: "bread",
                    enArabeezy: "khobez",
                    hint:
                        "Very common. Singular as a mass: خُبِز. You can also hear: رغِيف خُبِز = a loaf of bread.",
                    exampleAr: "مَا فِيش فُطُور بِلَا خُبِز فِي كْتِير بُيُوت.",
                    exampleEn: "In many homes there is no breakfast without bread.",
                },
                {
                    id: "jibneh",
                    ar: "جُبْنَة",
                    en: "cheese",
                    enArabeezy: "jibneh",
                    hint:
                        "",
                    exampleAr: "بِحِبّ جُبْنَة بَيْضَا مَع خُبِز سُخْن.",
                    exampleEn: "I like white cheese with warm bread.",
                },
                {
                    id: "zaytoon",
                    ar: "زَيْتُون",
                    en: "olives",
                    enArabeezy: "zaytoon",
                    hint:
                        "",
                    exampleAr: "فِلَسْطِين مَشْهُورَة بِالزَّيْتُون وَزَيْت الزَّيْتُون.",
                    exampleEn: "Palestine is famous for olives and olive oil.",
                },
                {
                    id: "zeit_zaytoon",
                    ar: "زَيْت زَيْتُون",
                    en: "olive oil",
                    enArabeezy: "zeit_zaytoon",
                    hint:
                        "Very basic ingredient in Palestinian food. Often eaten with bread and zaatar.",
                    exampleAr: "خُبِز مَع زَيْت زَيْتُون وَزَعْتَر فُطُور فِلَسْطِينِي كْتِير مَشْهُور.",
                    exampleEn: "Bread with olive oil and zaatar is a very famous Palestinian breakfast.",
                },
                {
                    id: "zeit_zaatar",
                    ar: "زَيْت وَزَعْتَر",
                    en: "olive oil & zaatar",
                    enArabeezy: "zeit_zaatar",
                    hint:
                        "Typical Palestinian breakfast item: bread dipped in olive oil and zaatar.",
                    exampleAr: "زَيْت وَزَعْتَر شَيْء مَشْهُور فِي فِلَسْطِين.",
                    exampleEn: "Olive oil and zaatar is famous in Palestine.",
                },
                {
                    id: "za3tar",
                    ar: "زَعْتَر",
                    en: "zaatar (thyme mix)",
                    enArabeezy: "za3tar",
                    hint:
                        "Herb mix (thyme, sesame, etc.). Usually eaten with bread and olive oil or on manaqeesh.",
                    exampleAr: "مَنَاقِيش زَعْتَر مَع شَاي مِن أَحْلَى الْأَشْيَاء.",
                    exampleEn: "Zaatar manaqeesh with tea is one of the best things.",
                },
                {
                    id: "hummus",
                    ar: "حُمُّص",
                    en: "hummus (chickpea dip)",
                    enArabeezy: "hummus",
                    hint:
                        "Very famous Middle Eastern food. Also means ‘chickpeas’ as beans.",
                    exampleAr: "حُمُّص مَع طَحِينَة أَكْلَة مَشْهُورَة فِي فِلَسْطِين.",
                    exampleEn: "Hummus with tahini is a famous dish in Palestine.",
                },
                {
                    id: "falafel",
                    ar: "فَلَافِل",
                    en: "falafel",
                    enArabeezy: "falafel",
                    hint:
                        "Deep-fried chickpea balls. Often eaten in a sandwich for breakfast or dinner.",
                    exampleAr: "كْتِير نَّاس بِفْطَرُوا سَنْدْوِيش فَلَافِل.",
                    exampleEn: "Many people have a falafel sandwich for breakfast.",
                },
                {
                    id: "maqlubeh",
                    ar: "مَقْلُوبِة",
                    en: "maqlubeh (upside-down rice dish)",
                    enArabeezy: "maqlubeh",
                    hint:
                        "Traditional Palestinian dish with rice, vegetables, and meat, flipped upside down.",
                    exampleAr: "مَقْلُوبِة جَاج مِن أَشْهَر أَكَلَات فِلَسْطِين.",
                    exampleEn: "Chicken maqlubeh is one of the most famous Palestinian dishes.",
                },
                {
                    id: "musakhan",
                    ar: "مُسَخَّن",
                    en: "musakhan (sumac chicken on bread)",
                    enArabeezy: "musakhan",
                    hint:
                        "Traditional Palestinian dish: bread, onion, sumac, and roasted chicken.",
                    exampleAr: "فِي الْمَوَاسِم بيعملوا مُسَخَّن لِلْعِيلَة كُلَّهَا.",
                    exampleEn: "During special seasons they make musakhan for the whole family.",
                },
                {
                    id: "salata",
                    ar: "سَلَطَة",
                    en: "salad",
                    enArabeezy: "salata",
                    hint:
                        "General word for salad. Plural سَلَطَات = types of salad.",
                    exampleAr: "مَع الْغَدَا دَائِمًا فِيه سَلَطَة.",
                    exampleEn: "There is always salad with lunch.",
                },
                {
                    id: "khodar",
                    ar: "خْضَار",
                    en: "vegetables",
                    enArabeezy: "khodar",
                    hint:
                        "",
                    exampleAr: "إِمِّي دَايْمًا بِتِسَوِّي خْضَار طَازَة مَع الْغَدَا.",
                    exampleEn: "My mom always prepares fresh vegetables with lunch.",
                },
                {
                    id: "fawakeh",
                    ar: "فَوَاكِه",
                    en: "fruits",
                    enArabeezy: "fawakeh",
                    hint:
                        "Plural. Singular type would be like تُفَّاحَة (apple), مَوْزَة (banana).",
                    exampleAr: "بَاكُل فَوَاكِه بَعْد الْغَدَا.",
                    exampleEn: "I eat fruits after lunch.",
                },
                {
                    id: "tuffaHa",
                    ar: "تُفَّاحَة",
                    en: "an apple",
                    enArabeezy: "tuffa7a",
                    hint:
                        "Plural: تُفَّاح. For ‘apples’ as a group: تُفَّاح.",
                    exampleAr: "بَحِبّ آكُل تُفَّاحَة الصُّبِح.",
                    exampleEn: "I like to eat an apple in the morning.",
                },
                {
                    id: "mozeh",
                    ar: "مَوْزَة",
                    en: "a banana",
                    enArabeezy: "mozeh",
                    hint:
                        "Plural: مَوْز. For many bananas: مَوْز كْتِير.",
                    exampleAr: "مَوْزَة صْغِيرَة أَحْسَن مِن حْلُو بَعْد الْأَكْل.",
                    exampleEn: "A small banana is better than dessert after food.",
                },
                {
                    id: "la7me",
                    ar: "لَحِم / لَحْمِة",
                    en: "meat",
                    enArabeezy: "la7me",
                    hint:
                        "Generic word for meat. You can say: لَحِم or لَحْمِة. Example: لَحِم جَاج (chicken), لَحِم بَقَرِي (beef).",
                    exampleAr: "مَا بَاكُل لَحِم كْتِير، أَكْثَر إِشِي دَجَاج.",
                    exampleEn: "I don’t eat a lot of meat, mostly chicken.",
                },
                {
                    id: "dajaj",
                    ar: "دَجَاج",
                    en: "chicken",
                    enArabeezy: "dajaj",
                    hint:
                        "دَجَاج = chicken (meat). For a whole chicken you can hear جَاجَة.",
                    exampleAr: "مَقْلُوبِة دَجَاج أَكْلَة مَفْضُولَة عِنْد نَّاس كْتِير.",
                    exampleEn: "Chicken maqlubeh is a favorite dish for many people.",
                },
                {
                    id: "samak",
                    ar: "سَمَك",
                    en: "fish",
                    enArabeezy: "samak",
                    hint:
                        "",
                    exampleAr: "فِي غَزَّة السَّمَك طَازَة وِكْتِير طَيِّب.",
                    exampleEn: "In Gaza, the fish is fresh and very tasty.",
                },
                {
                    id: "ruz",
                    ar: "رُزّ",
                    en: "rice",
                    enArabeezy: "rozz",
                    hint:
                        "Typically eaten with meat or chicken.",
                    exampleAr: "بَاكُل رُزّ مَع خُضَار.",
                    exampleEn: "I eat rice with vegetables.",
                },
                {
                    id: "batata",
                    ar: "بَطَاطَا",
                    en: "potatoes",
                    enArabeezy: "batata",
                    hint:
                        "Can be fried, baked, etc.",
                    exampleAr: "بَحِبّ بَطَاطَا مَقْلِيِّة.",
                    exampleEn: "I like fried potatoes.",
                },

                // ===== DRINKS =====
                {
                    id: "mayy",
                    ar: "مَيّ",
                    en: "water",
                    enArabeezy: "mayy",
                    hint:
                        "Very frequent. ‘I drink water’: بَشْرَب مَيّ.",
                    exampleAr: "لَازِم تِشْرَب مَيّ كْتِير خِلَال النَّهَار.",
                    exampleEn: "You need to drink a lot of water during the day.",
                },
                {
                    id: "ahweh",
                    ar: "قَهْوَة",
                    en: "coffee",
                    enArabeezy: "ahweh",
                    hint:
                        "",
                    exampleAr: "بَشْرَب قَهْوَة سَادَة الصُّبِح.",
                    exampleEn: "I drink black coffee in the morning.",
                },
                {
                    id: "shay",
                    ar: "شَاي",
                    en: "tea",
                    enArabeezy: "shay",
                    hint:
                        "Very common drink. شَاي أَخْضَر / أَسْوَد / مَع نَعْنَاع.",
                    exampleAr: "جَدَّتِي بِتِحِبّ شَاي مَع نَعْنَاع.",
                    exampleEn: "My grandmother loves tea with mint.",
                },
                {
                    id: "3asir",
                    ar: "عَصِير",
                    en: "juice",
                    enArabeezy: "3aSeer",
                    hint:
                        "Plural: عَصَايِر = juices (different kinds).",
                    exampleAr: "بِفَضَّل عَصِير بُرْتُقَال عَنْ كُولا.",
                    exampleEn: "I prefer orange juice over cola.",
                },

                // ===== SWEETS & DESSERTS =====
                {
                    id: "halaweeyat",
                    ar: "حَلَوِيَّات",
                    en: "sweets / desserts",
                    enArabeezy: "7alaweyyat",
                    hint:
                        "Plural noun. Singular general form: حَلْوِيّة. Includes cakes, Arabic sweets, etc.",
                    exampleAr: "بِحِبّ حَلَوِيَّات عَرَبِيَّة زَيّ كُنَافَة.",
                    exampleEn: "I like Arabic sweets like kunafa.",
                },
                {
                    id: "kunafeh",
                    ar: "كُنَافَة",
                    en: "kunafa (cheese pastry dessert)",
                    enArabeezy: "kunafeh",
                    hint:
                        "Traditional Middle Eastern dessert, very famous in Palestine.",
                    exampleAr: "كُنَافَة نَابُلْسِيَّة مَعْرُوفَة فِي كُلّ الدُّنْيَا.",
                    exampleEn: "Nabulsi kunafa is famous all over the world.",
                },

                // ===== GENERAL FOOD WORDS =====
                {
                    id: "akel",
                    ar: "أَكِل",
                    en: "food",
                    enArabeezy: "akel",
                    hint: "General word for ‘food’.",
                    exampleAr: "الْأَكِل الْفِلَسْطِينِي طَيِّب كْتِير.",
                    exampleEn: "Palestinian food is very tasty.",
                },
                {
                    id: "t3am",
                    ar: "طَعِم",
                    en: "taste (flavour)",
                    enArabeezy: "ta3am",
                    hint: "Used to talk about taste of food.",
                    exampleAr: "طَعِم الْأَكِل هُنَا مُمْتَاز.",
                    exampleEn: "The taste of the food here is excellent.",
                },

                // ===== FEELINGS & TASTE =====
                {
                    id: "j3an",
                    ar: "جُوعَان",
                    en: "hungry",
                    enArabeezy: "joo3an",
                    hint: "Masc: جُوعَان, fem: جُوعَانَة.",
                    exampleAr: "أَنَا جُوعَان، بَدِّي آكُل.",
                    exampleEn: "I’m hungry, I want to eat.",
                },
                {
                    id: "3atshan",
                    ar: "عَطْشَان",
                    en: "thirsty",
                    enArabeezy: "3atshan",
                    hint: "Masc: عَطْشَان, fem: عَطْشَانَة.",
                    exampleAr: "أَنَا عَطْشَان، بَدِّي مَيِّة.",
                    exampleEn: "I’m thirsty, I want water.",
                },
                {
                    id: "zaki",
                    ar: "زَكِي",
                    en: "tasty / delicious",
                    enArabeezy: "zaki",
                    hint: "Masc: زَكِي, fem: زَكِيِّة.",
                    exampleAr: "الْأَكِل هُونَا زَكِي كْتِير.",
                    exampleEn: "The food here is very tasty.",
                },
                {
                    id: "msh_zaki",
                    ar: "مِش زَكِي",
                    en: "not tasty",
                    enArabeezy: "mish_zaki",
                    hint: "Simple way to say you don’t like the taste.",
                    exampleAr: "صِرْصِير الْأَكِل الْيَوْم مِش زَكِي.",
                    exampleEn: "Honestly, today the food is not tasty.",
                },
                {
                    id: "bisho3or_juu3",
                    ar: "بِجُوع",
                    en: "I get hungry",
                    enArabeezy: "bijoo3",
                    hint:
                        "From جُوع = hunger. You can say كْتِير بِجُوع بَسُّرْعَة = I get hungry very fast.",
                    exampleAr: "بِجُوع بَعْد الْمُحَاضَرَة الطَّوِيلَة.",
                    exampleEn: "I get hungry after the long lecture.",
                },
                {
                    id: "bisho3or 3aTash",
                    ar: "بِعْطَش",
                    en: "I get thirsty",
                    enArabeezy: "bi3tash",
                    hint:
                        "From عَطَش = thirst. Opposite of بَشْرَب مَيّ.",
                    exampleAr: "فِي الصَّيْف بِعْطَش كْتِير، فَبَشْرَب مَيّ أَكْثَر.",
                    exampleEn: "In summer I get very thirsty, so I drink more water.",
                },

                // ===== VERBS ABOUT FOOD =====
                {
                    id: "ba7ebb",
                    ar: "بَحِبّ",
                    en: "I like / I love",
                    enArabeezy: "ba7ebb",
                    hint:
                        "From حَبّ = to love/like. Used for food, people, activities. For he/she: بِيِحِبّ / بِتِحِبّ.",
                    exampleAr: "بَحِبّ الأَكْل الْفِلَسْطِينِي كْتِير.",
                    exampleEn: "I really like Palestinian food.",
                },
                {
                    id: "ma_ba7ebb",
                    ar: "مَا بَحِبّ",
                    en: "I don’t like",
                    enArabeezy: "ma_ba7ebb",
                    hint: "Simple negation for ‘I don’t like’.",
                    exampleAr: "مَا بَحِبّ قَهْوَة قَوِيِّة.",
                    exampleEn: "I don’t like strong coffee.",
                },
                {
                    id: "ba7ebb_aktar",
                    ar: "بَحِبّ ... أَكْثَر",
                    en: "I like … more",
                    enArabeezy: "ba7ebb_aktar",
                    hint: "For preferences: comparing things.",
                    exampleAr: "بَحِبّ شَاي أَكْثَر مِن قَهْوَة.",
                    exampleEn: "I like tea more than coffee.",
                },
                {
                    id: "bifaDDil",
                    ar: "بِفَضَّل",
                    en: "I prefer",
                    enArabeezy: "bifaDDel",
                    hint:
                        "More specific than بَحِبّ. ‘I prefer X over Y’: بِفَضَّل … عَنْ …. ",
                    exampleAr: "بِفَضَّل السَّمَك عَنْ اللَّحِم.",
                    exampleEn: "I prefer fish over meat.",
                },
                {
                    id: "baTbokh",
                    ar: "بَطْبُخ",
                    en: "I cook",
                    enArabeezy: "baTbokh",
                    hint:
                        "From طَبَخ = to cook. For she cooks: بْتُطْبُخ، for he: بِيِطْبُخ.",
                    exampleAr: "أَحْيَانًا بَطْبُخ أَنَا، مَو دَايْمًا إِمِّي.",
                    exampleEn: "Sometimes I cook, not always my mom.",
                },
                {
                    id: "ba2mor",
                    ar: "بَطْلُب",
                    en: "I order (food/drink)",
                    enArabeezy: "baTlob",
                    hint:
                        "Spoken form for ‘I order’ (in café / restaurant): بَطْلُب قَهْوَة، بَطْلُب سَنْدْوِيش.",
                    exampleAr: "فِي الْمَقْهَى بَطْلُب قَهْوَة وَعَصِير.",
                    exampleEn: "At the café I order coffee and juice.",
                },
                {
                    id: "bajarrib",
                    ar: "بَجَرِّب",
                    en: "I try (food / something new)",
                    enArabeezy: "bajarrib",
                    hint:
                        "From جَرَّب = to try. Used a lot with new dishes: بَجَرِّب أَكْلَة جْدِيدَة.",
                    exampleAr: "لَمَّا أَسَافِر بَجَرِّب أَكْلَات مَحَلِّيَّة.",
                    exampleEn: "When I travel I try local dishes.",
                },
                {
                    id: "baddi",
                    ar: "بَدِّي",
                    en: "I want",
                    enArabeezy: "baddi",
                    hint: "Use with food/drink to order.",
                    exampleAr: "بَدِّي فَلَافِل وَعَصِير.",
                    exampleEn: "I want falafel and juice.",
                },
                {
                    id: "sho_bte7ebb",
                    ar: "شُو بْتِحِبّ تَاكُل؟",
                    en: "What do you like to eat?",
                    enArabeezy: "shu_bte7ebb_takol",
                    hint: "Used to ask about food preferences.",
                    exampleAr: "شُو بْتِحِبّ تَاكُل عَلَى الْغَدَا؟",
                    exampleEn: "What do you like to eat for lunch?",
                },

                // ===== CONTEXT EXPRESSIONS =====
                {
                    id: "fi_maT3am",
                    ar: "فِي مَطْعَم",
                    en: "in a restaurant",
                    enArabeezy: "fi_maT3am",
                    hint: "Place context for food.",
                    exampleAr: "بِنْقَعُد فِي مَطْعَم صَغِير قُرْب الْبَحَر.",
                    exampleEn: "We sit in a small restaurant near the sea.",
                },
                {
                    id: "3ala_el_bayt",
                    ar: "فِي الْبَيْت",
                    en: "at home",
                    enArabeezy: "fi_el_beit",
                    hint: "Home context.",
                    exampleAr: "غَالِبًا بَنَاكُل فِي الْبَيْت.",
                    exampleEn: "We usually eat at home.",
                },
            ],

            extra: [
                {
                    id: "ma7alli",
                    ar: "مَحَلّ",
                    en: "shop / place",
                    enArabeezy: "ma7all",
                    hint:
                        "Food context: مَحَلّ فَلَافِل، مَحَلّ فَوَاكِه…",
                    exampleAr: "فِي مَحَلّ فَلَافِل قَرِيب مِن بَيْتْنَا.",
                    exampleEn: "There is a falafel shop near our house.",
                },
                {
                    id: "mat3am",
                    ar: "مَطْعَم",
                    en: "restaurant",
                    enArabeezy: "maT3am",
                    hint:
                        "Plural: مَطَاعِم. A bit more formal than مَحَلّ.",
                    exampleAr: "رُحْنَا عَلَى مَطْعَم فِلَسْطِينِي فِي الْمَدِينَة.",
                    exampleEn: "We went to a Palestinian restaurant in the city.",
                },
                {
                    id: "ma2le",
                    ar: "مَقْلِي",
                    en: "fried",
                    enArabeezy: "ma2li",
                    hint:
                        "Adjective: مُقْرَمِش مَقْلِي = crispy fried.",
                    exampleAr: "فَلَافِل أَكْثَرُه أَكْلَة مَقْلِيَّة.",
                    exampleEn: "Falafel is mostly a fried food.",
                },
                {
                    id: "maTbukh",
                    ar: "مَطْبُوخ",
                    en: "cooked",
                    enArabeezy: "maTbukh",
                    hint:
                        "Opposite of raw. خْضَار مَطْبُوخَة = cooked vegetables.",
                    exampleAr: "بِفَضَّل خْضَار مَطْبُوخَة عَنْ المَقْلِيَّة.",
                    exampleEn: "I prefer cooked vegetables over fried ones.",
                },
                {
                    id: "7ilo",
                    ar: "حِلُو",
                    en: "sweet (taste)",
                    enArabeezy: "7ilo",
                    hint: "Also means ‘beautiful’, but here for taste.",
                    exampleAr: "الْحَلَا حِلُو بَسّ ثَقِيل شَوَيّ.",
                    exampleEn: "The dessert is sweet but a bit heavy.",
                },
                {
                    id: "m7ar",
                    ar: "حَارّ  ",
                    en: "spicy / hot (food)",
                    enArabeezy: "7arr",
                    hint: "Used for spicy food.",
                    exampleAr: "بَحِبّ الاكل الحارّ.",
                    exampleEn: "I like spicy food.",
                },
                {
                    id: "mal7",
                    ar: "مِلِح",
                    en: "salty",
                    enArabeezy: "melle7",
                    hint: "From مِلِح = salt.",
                    exampleAr: "هَادَا الطَّبَق مِلِح كْتِير.",
                    exampleEn: "This dish is too salty.",
                },
                {
                    id: "S7i",
                    ar: "صِحِّي",
                    en: "healthy",
                    enArabeezy: "Se77i",
                    hint: "Used for healthy food.",
                    exampleAr: "بِحَاوِل آكُل أَكِل صِحِّي.",
                    exampleEn: "I try to eat healthy food.",
                },
            ],
        },


        // ====================================
        // DIALOGUE (long café + home + culture)
        // ====================================
        dialogue: {
            lines: [
                {
                    "speaker": "رامي",
                    "ar": "مَرْحَبَا مَرْيَم، شُو أَكَلْتِي الْيَوْم عَلَى الْفْطُور؟",
                    "en": "Hi Maryam, what did you eat today for breakfast?"
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "صَبَاح الْخِير، أَكَلْت خُبِز مَع جِبْنِة وَزَيْت وَزَعْتَر.",
                    "en": "Good morning, I ate bread with cheese and olive oil with zaatar."
                },
                {
                    "speaker": "رامي",
                    "ar": "وَكَمَان قَهْوَة وَلَّا شَاي؟",
                    "en": "And also coffee or tea?"
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "بَشْرَب فِي الصُّبْح شَاي، مِش قَهْوَة.",
                    "en": "In the morning I drink tea, not coffee."
                },
                {
                    "speaker": "رامي",
                    "ar": "أَنَا بِالْعَكْس، بَشْرَب قَهْوَة كُل يَوْم.",
                    "en": "I’m the opposite, I drink coffee every day."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "أَحْيَانًا بَشْرَب عَصِير بُرْتُقَال كمان.",
                    "en": "Sometimes I drink orange juice too."
                },
                {
                    "speaker": "رامي",
                    "ar": "شُو بْتِحِب تَاكُلي عَلَى الْغَدَا؟",
                    "en": "What do you like to eat for lunch?"
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "بِحِبّ آكُل عَالغَدا دَجَاج وَرُزّ.",
                    "en": "I like to eat chicken and rice for lunch."
                },
                {
                    "speaker": "رامي",
                    "ar": "وَالْلَحْمِة؟",
                    "en": "And meat?"
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "بَحِبّ الَحْمِة بَسّ مِش كْتِير، أَكْثَر شِي بَحِبّ خُضَار وَفَوَاكِه.",
                    "en": "I like meat but not a lot; I like vegetables and fruit the most."
                },
                {
                    "speaker": "رامي",
                    "ar": "شُو أَكْتَر فَاكْهَة بِتْحِبّي؟",
                    "en": "Which fruit do you like the most?"
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "بَحِبّ تُفَّاح وَمَوِز، بَسّ مَا بَحِبّ بُرْتُقَال كْتِير.",
                    "en": "I like apples and bananas, but I don’t like oranges very much."
                },
                {
                    "speaker": "رامي",
                    "ar": "يَلَّا نُقْعُد فِي مَطْعَم صَغِير هُون.",
                    "en": "Come on, let’s sit in a small restaurant here."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "تمام، أَنَا جُوعَانَة كْتِير.",
                    "en": "ok, I’m very hungry."
                },
                {
                    "speaker": "سَامِي",
                    "ar": "أَهْلًا وَسَهْلًا، شُو بْتِحِبُّوا تَاكْلُوا؟",
                    "en": "Welcome, what would you like to eat?"
                },
                {
                    "speaker": "رامي",
                    "ar": "بَدِّي صَحْن فَلَافِل وَحُمُّص، مِن فَضْلَك.",
                    "en": "I want a plate of falafel and hummus, please."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "وَأَنَا بَدِّي سَلَطَة وَدْجَاج مَع رُزّ.",
                    "en": "And I want salad and chicken with rice."
                },
                {
                    "speaker": "سَامِي",
                    "ar": "طَيِّب، وَشُو بْتِحِبُّوا تِشْرَبُوا؟",
                    "en": "Okay, and what would you like to drink?"
                },
                {
                    "speaker": "رامي",
                    "ar": "أَنَا بَحِبّ قَهْوَة بَعْد الْأَكِل، هَلَّقْ بَدِّي مَيِّة.",
                    "en": "I like coffee after food; now I want water."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "أَنَا عَطْشَانَة، بَدِّي عَصِير بُرْتُقَال.",
                    "en": "I’m thirsty, I want orange juice."
                },
                {
                    "speaker": "سَامِي",
                    "ar": "زَيْ مَا بْتِحِبُّوا، صَحَّة وَعَافِيَة.",
                    "en": "As you like, bon appétit / enjoy."
                },
                {
                    "speaker": "رامي",
                    "ar": "الْفَلَافِل هُونَا زَكِي كْتِير.",
                    "en": "The falafel here is very tasty."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "صَحّ، بَسّ السَّلَطَة مالحة شَوَيّ.",
                    "en": "True, but the salad is a bit salty."
                },
                {
                    "speaker": "رامي",
                    "ar": "مَع هَيْك، الْغَدَا صِحِّي أَكْثَر مِن مَطَاعِم ثَانِيِة.",
                    "en": "Even so, this lunch is healthier than other restaurants."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "مُنِيح إِنُّه فِيه خُضَار وَفَوَاكِه عَلَى الْجَانِب.",
                    "en": "It’s good that there are vegetables and fruits on the side."
                },
                {
                    "speaker": "رامي",
                    "ar": "شُكْرًا كْتِير، الْأَكِل كَان زَكِي.",
                    "en": "Thank you very much, the food was delicious."
                },
                {
                    "speaker": "سَامِي",
                    "ar": "عَفْوَاً، تْشَرَّفْنَا فِيكُم.",
                    "en": "You’re welcome, pleased to have you."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "مَع السَّلَامَة، رَاح نِرْجَع مَرَّة ثَانِيِة.",
                    "en": "Goodbye, we’ll come back another time."
                },
                {
                    "speaker": "رامي",
                    "ar": "يَلَّا، اِنْبِسِطِي بِبَاقِي الْيَوْم.",
                    "en": "Come on, enjoy the rest of the day."
                },
                {
                    "speaker": "مَرْيَم",
                    "ar": "وَإِنْتَ كَمَان، بَشُوفَك بُكْرَا فِي الدَّرْس.",
                    "en": "You too, see you tomorrow in class."
                }
            ]
        },


        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "ba7ebb_bifaDDil",
                title: "«بَحِبّ» vs «بِفَضَّل» – like vs prefer",
                description:
                    "Two high-frequency verbs for opinions about food:\n\n" +
                    "• بَحِبّ = I like / I love\n" +
                    "  – بَحِبّ مَقْلُوبِة = I like maqlubeh.\n" +
                    "  – بَحِبّ قَهْوَة سَادَة = I like black coffee.\n\n" +
                    "• بِفَضَّل = I prefer\n" +
                    "  – بِفَضَّل السَّمَك عَنْ اللَّحِم = I prefer fish over meat.\n" +
                    "  – بِفَضَّل مَطْبُوخ عَنْ مَقْلِي = I prefer cooked food over fried.\n\n" +
                    "Pattern for comparison:\n" +
                    "• بِفَضَّل X عَنْ Y = I prefer X over Y.\n\n" +
                    "You can also use other persons:\n" +
                    "• هُوَّ بِيِحِبّ الْحَلَوِيَّات = He likes sweets.\n" +
                    "• هِيَّ بِتِفَضَّل شَاي = She prefers tea.",
            },
            {
                id: "food_plurals",
                title: "Singular vs plural for food words (apples, bananas, salads)",
                description:
                    "Many food words have a simple pattern for singular ~ plural.\n\n" +
                    "Examples:\n" +
                    "• تُفَّاحَة (an apple) → تُفَّاح (apples / apple as a group)\n" +
                    "  – بَاكُل تُفَّاحَة كُلّ يَوْم = I eat an apple every day.\n" +
                    "  – بَحِبّ تُفَّاح أَخْضَر = I like green apples.\n\n" +
                    "• مَوْزَة (a banana) → مَوْز (bananas)\n" +
                    "  – عِنْدِي مَوْزَة وَاحْدَة = I have one banana.\n" +
                    "  – بَاكُل مَوْز كْتِير = I eat a lot of bananas.\n\n" +
                    "• سَلَطَة (one salad) → سَلَطَات (different salads)\n" +
                    "  – سَلَطَة خُضَار = vegetable salad.\n" +
                    "  – فِي الْمَطْعَم سَلَطَات كْتِير = there are many salads in the restaurant.\n\n" +
                    "Some words are collective plurals by default:\n" +
                    "• خْضَار = vegetables (no singular normally).\n" +
                    "• فَوَاكِه = fruits.\n" +
                    "• زَيْتُون = olives.\n\n" +
                    "When teaching, you can mark: sg: تُفَّاحَة / pl: تُفَّاح inside the hint or on the board.",
            },
            {
                id: "ordering_politely",
                title: "Ordering politely: «بَطْلُب…» و«لَوْ سَمَحْت»",
                description:
                    "To order in a café or restaurant, you can use these patterns:\n\n" +
                    "• بَطْلُب قَهْوَة = I’ll order a coffee.\n" +
                    "• بَحِبّ قَهْوَة سَادَة لَوْ سَمَحْت = I’d like black coffee, please.\n\n" +
                    "Common polite phrases:\n" +
                    "• لَوْ سَمَحْت = please.\n" +
                    "• مِن فَضْلَك = please (more formal).\n\n" +
                    "Typical mini-dialogue:\n" +
                    "– شُو بْتِحِبّ تِشْرَب؟ = What would you like to drink?\n" +
                    "– بَحِبّ شَاي مَع نَعْنَاع لَوْ سَمَحْت. = I’d like tea with mint, please.\n\n" +
                    "Note: You can also use ‘بَدِّي’ (I want), but ‘بَحِبّ’ and ‘بَطْلُب’ sound softer and polite in many situations.",
            },
            {
                id: "hungry_thirsty",
                title: "Saying ‘I am hungry / thirsty’ and ‘I get hungry / thirsty’",
                description:
                    "Two useful pairs:\n\n" +
                    "State now:\n" +
                    "• أَنَا جُوْعَان / جُوْعَانَة = I am hungry (m/f).\n" +
                    "• أَنَا عَطْشَان / عَطْشَانَة = I am thirsty (m/f).\n\n" +
                    "Habit / tendency:\n" +
                    "• بِجُوع = I get hungry.\n" +
                    "• بِعْطَش = I get thirsty.\n\n" +
                    "Examples:\n" +
                    "• أَنَا جُوْعَان هَلَّقْ، بَدِّي آكُل إِشِي. = I’m hungry now, I want to eat something.\n" +
                    "• بِجُوع بَسُّرْعَة لَمَّا مَا بِفْطَر. = I get hungry quickly when I don’t have breakfast.\n" +
                    "• بِعْطَش فِي الصَّيْف أَكْثَر مِن الشِّتَا. = I get thirsty in summer more than in winter.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "food_q1",
                    questionAr: "«بِفَضَّل السَّمَك عَنْ اللَّحِم» مَعْنَاهَا:",
                    optionsEn: [
                        "I prefer meat over fish.",
                        "I prefer fish over meat.",
                        "I don’t eat fish or meat.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "food_q2",
                    questionAr: "«بَحِبّ مَقْلُوبِة كْتِير» مَعْنَاهَا:",
                    optionsEn: [
                        "I like maqlubeh a lot.",
                        "I cook maqlubeh a lot.",
                        "I don’t like maqlubeh.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "food_q3",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘fruits’؟",
                    optionsEn: [
                        "خْضَار",
                        "فَوَاكِه",
                        "حَلَوِيَّات",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "food_q4",
                    questionAr: "«بَطْلُب سَنْدْوِيش فَلَافِل» مَعْنَاهَا:",
                    optionsEn: [
                        "I cook a falafel sandwich.",
                        "I order a falafel sandwich.",
                        "I hate falafel sandwiches.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "food_q5",
                    questionAr: "«مَوْزَة» جَمْعْهَا الطَّبِيعِي:",
                    optionsEn: [
                        "مَوْز",
                        "مَوْزَات",
                        "مَيّ",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Café scene. Student A is the waiter (like Omar), Student B is the customer. A asks what B wants to drink and eat using Palestinian Arabic. B answers using «بَحِبّ»، «بِفَضَّل»، «بَطْلُب». Then switch roles.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second description of food and drink in your life in Palestinian Arabic. Include:\n" +
                "• What you usually eat for فُطُور، غَدَا، and عَشَا.\n" +
                "• At least 5 food words (for example: خُبِز، حُمُّص، سَلَطَة، فَوَاكِه، لَحِم، سَمَك).\n" +
                "• At least 3 drink words (for example: مَيّ، قَهْوَة، شَاي، عَصِير).\n" +
                "• Use both «بَحِبّ» and «بِفَضَّل» to talk about your preferences.\n" +
                "Try to sound like you are talking to a Palestinian friend, not reading a list.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start in English: ask the student about their favorite food in their own country, then teach them how to say it in Arabic if possible.",
                "Show pictures of Palestinian dishes (maqlubeh, musakhan, falafel, hummus) and let the student guess what they are before giving the names.",
                "Ask: ‘What do you eat for breakfast in your country?’ then map the answer into Arabic using the new vocabulary.",
            ],
            vocabularySteps: [
                "Group vocabulary by theme: breakfast foods, main dishes, vegetables/fruits, drinks, sweets.",
                "Highlight singular vs plural differences when needed (tuffaHa/tuffaH, mozeh/moz, salata/salatat) without going too deep into morphology.",
                "Use quick mini-games: ‘This or that?’ – you say two foods and the student answers quickly which one they prefer using «بِفَضَّل».",
            ],
            dialogueSteps: [
                "Act out the café scene with clear roles. First you model as both sides, then let the student play the customer and later the waiter.",
                "Pause during the dialogue to ask comprehension questions in English, then gradually move to simple Arabic questions.",
                "Encourage the student to personalise: change the orders, drinks, and dishes but keep the same structure and polite phrases.",
            ],
            practiceTips: [
                "Focus error correction on: the use of «بَحِبّ / بِفَضَّل», food word pronunciation, and singular/plural contrasts.",
                "Use the quiz not just for right/wrong but as a start for extra questions, like: ‘And you, do you also prefer fish over meat?’.",
                "If the student is shy, let them ‘invent’ a restaurant menu and then play ordering from it. This gives structure and makes it fun.",
            ],
            wrapup: [
                "End the lesson by summarising the student’s favourite Palestinian foods and drinks in Arabic, slightly upgrading their sentences.",
                "Ask the student to choose one Palestinian dish they want to try in real life and make one sentence in Arabic about it.",
                "Remind them of the homework recording and suggest they imagine they are explaining their food life to a Palestinian host family.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_FAMILY]: {
        meta: {
            level: "Beginner",
            unit: "Family",
            lessonTitle: "Unit 2 – Family & People",
        },

        overview: {
            title: "Unit 2 – Family & People",
            description:
                "In this unit, students explore how to talk about their family and people close to them in Palestinian Arabic. They learn key family words, how to say ‘I have…’, how to describe older/younger siblings, and how to talk about marital status in a simple, natural way.",
            goals: [
                "Name close family members and relatives in Palestinian Arabic.",
                "Use «عِنْدِي…» (I have…) to talk about family and people.",
                "Describe siblings and relatives using older/younger and basic adjectives.",
                "Ask and answer simple questions about family size and marital status.",
                "Participate in longer conversations about family in a natural, story-like way.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== FAMILY & HOUSEHOLD =====
                {
                    id: "3eileh",
                    ar: "عِيلَة",
                    en: "family",
                    enArabeezy: "3eileh",
                    hint:
                        "Common word for ‘family’. عِيلْتِي = my family. Often used for close family living together.",
                    exampleAr: "عِيلْتِي مَو كْبِيرَة، بَسّ كْتِير قَرِيبِين مِن بَعْض.",
                    exampleEn: "My family is not big, but we are very close to each other.",
                },
                {
                    id: "ahl",
                    ar: "أَهْل",
                    en: "family / parents (household)",
                    enArabeezy: "ahl",
                    hint:
                        "أَهْل can mean ‘family’ or specifically ‘parents’. أَهْلِي = my family / my parents.",
                    exampleAr: "أَهْلِي سَاكْنِين فِي غَزَّة.",
                    exampleEn: "My family lives in Gaza.",
                },
                {
                    id: "ahli",
                    ar: "أَهلي",
                    en: "my parents / my family",
                    enArabeezy: "ahli",
                    hint: "Possessive form from أَهْل. Can mean my parents or my household family.",
                    exampleAr: "ساكِن مَع أَهلي بِغَزّة.",
                    exampleEn: "I live with my family in Gaza.",
                },

                // ===== PARENTS =====
                {
                    id: "abuy",
                    ar: "أَبُوي",
                    en: "my father",
                    enArabeezy: "abuy",
                    hint:
                        "From أَب (father). أَبُوي = my father. For ‘his father’ you can hear أَبُوه، for ‘her father’ أَبُوهَا.",
                    exampleAr: "أَبُوي بِيِشْتِغِل مُهَنْدِس.",
                    exampleEn: "My father works as an engineer.",
                },
                {
                    id: "immi",
                    ar: "إِمّي",
                    en: "my mother",
                    enArabeezy: "immi",
                    hint:
                        "From أُمّ (mother). إِمِّي = my mother. You may also hear يَمَّا (mom) in spoken language.",
                    exampleAr: "إِمّي شَغّالة مُعَلِّمِة.",
                    exampleEn: "My mother works as a teacher.",
                },

                // ===== SIBLINGS & CHILDREN =====
                {
                    id: "akh",
                    ar: "أَخ",
                    en: "brother",
                    enArabeezy: "akh",
                    hint:
                        "أَخ = brother. أَخُوي = my brother. Plural: إِخْوَة = siblings/brothers.",
                    exampleAr: "عِنْدي أَخ أَكبَر مِنّي بِسِنِين.",
                    exampleEn: "I have a brother older than me by a few years.",
                },
                {
                    id: "okht",
                    ar: "أُخْت",
                    en: "sister",
                    enArabeezy: "okht",
                    hint:
                        "أُخْت = sister. أُخْتِي = my sister. Plural: أَخَوَات = sisters.",
                    exampleAr: "أُختي تِدرُس جَامْعَة.",
                    exampleEn: "My sister studies at university.",
                },
                {
                    id: "walad",
                    ar: "وَلَد",
                    en: "boy / son",
                    enArabeezy: "walad",
                    hint: "Can mean boy or son depending on context.",
                    exampleAr: "إِلهم وَلَد واحِد وَبِنْتَيْن.",
                    exampleEn: "They have one son and two daughters.",
                },
                {
                    id: "bint",
                    ar: "بِنْت",
                    en: "girl / daughter",
                    enArabeezy: "bint",
                    hint: "بِنْت = girl; can also mean ‘daughter’.",
                    exampleAr: "عِنْدُه بِنْت صْغيرَة كْتير.",
                    exampleEn: "He has a very young daughter.",
                },
                {
                    id: "walad_bint",
                    ar: "وَلَد / بِنْت",
                    en: "boy / girl (and son / daughter)",
                    enArabeezy: "walad_bint",
                    hint:
                        "وَلَد = boy or son (by context). بِنْت = girl or daughter. بِنْتِي = my daughter.",
                    exampleAr: "عِنْدُن وَلَد صْغِير وَبِنْت كْبِيرَة شْوَيّ.",
                    exampleEn: "They have a little boy and a slightly older girl.",
                },
                {
                    id: "tifl_atfal",
                    ar: "طِفِل / أَطْفَال",
                    en: "child / children",
                    enArabeezy: "tifl/atfal",
                    hint:
                        "طِفِل = child (singular). أَطْفَال = children. More neutral than وَلَد / بِنْت.",
                    exampleAr: "الْأَطْفَال بِيِلْعَبُوا بَرَّا الْبَيْت.",
                    exampleEn: "The children are playing outside the house.",
                },

                // ===== GRANDPARENTS =====
                {
                    id: "jaddi",
                    ar: "جَدّي",
                    en: "my grandfather",
                    enArabeezy: "jaddi",
                    hint: "Colloquial word for ‘my grandfather’.",
                    exampleAr: "جَدّي بِحِبّ يِقْعُد عَالبَحِر.",
                    exampleEn: "My grandfather likes to sit by the sea.",
                },
                {
                    id: "sidi",
                    ar: "سِيدِي",
                    en: "my grandfather",
                    enArabeezy: "sidi",
                    hint: "Another common word for ‘my grandfather’ in Palestinian Arabic.",
                    exampleAr: "سِيدِي لِسَّا عَايِش فِي الْقَرْيَة.",
                    exampleEn: "My grandfather still lives in the village.",
                },
                {
                    id: "sitti",
                    ar: "سِتّي",
                    en: "my grandmother",
                    enArabeezy: "sitti",
                    hint: "Colloquial and affectionate word for ‘my grandmother’.",
                    exampleAr: "سِتّي تِسْكُن قَريب مِنّا.",
                    exampleEn: "My grandmother lives near us.",
                },

                // ===== UNCLES, AUNTS & COUSINS =====
                {
                    id: "3ammo",
                    ar: "عَمّ",
                    en: "paternal uncle (father’s brother)",
                    enArabeezy: "3ammo",
                    hint: "عَمّ = father’s brother. عَمّي = my uncle (father’s side).",
                    exampleAr: "عَمّي عَندُه أَرْبَع وْلاد.",
                    exampleEn: "My paternal uncle has four children.",
                },
                {
                    id: "3ammeh",
                    ar: "عَمِّة",
                    en: "paternal aunt (father’s sister)",
                    enArabeezy: "3ammeh",
                    hint: "عَمِّة = father’s sister. عَمْتِي = my aunt (father’s side).",
                    exampleAr: "عَمْتِي زَارَتْنَا فِي غَزَّة أُسْبُوع.",
                    exampleEn: "My aunt visited us in Gaza for a week.",
                },
                {
                    id: "khal",
                    ar: "خَال",
                    en: "maternal uncle (mother’s brother)",
                    enArabeezy: "khal",
                    hint: "خَال = mother’s brother. خَالِي = my maternal uncle.",
                    exampleAr: "خَالِي ساكِن بِرامَ الله.",
                    exampleEn: "My maternal uncle lives in Ramallah.",
                },
                {
                    id: "khalah",
                    ar: "خَالَة",
                    en: "maternal aunt (mother’s sister)",
                    enArabeezy: "khalah",
                    hint: "خَالَة = mother’s sister. خَالْتِي = my maternal aunt.",
                    exampleAr: "خَالْتِي مِثْل إِمِّي تَقْرِيبًا.",
                    exampleEn: "My aunt is almost like my mother.",
                },
                {
                    id: "walad_3ammi",
                    ar: "وَلاد عَمّي",
                    en: "my cousins (paternal, males/mixed)",
                    enArabeezy: "walad_3ammi",
                    hint: "Male/mixed cousins on father’s side.",
                    exampleAr: "وَلاد عَمّي كْمان بِدْرِسوا هُون.",
                    exampleEn: "My cousins on my dad’s side also study here.",
                },
                {
                    id: "walad_khali",
                    ar: "وَلاد خالي",
                    en: "my cousins (maternal, males/mixed)",
                    enArabeezy: "walad_khali",
                    hint: "Male/mixed cousins on mother’s side.",
                    exampleAr: "وَلاد خالي يِسْكُنوا بَبَرِّة البَلَد.",
                    exampleEn: "My maternal cousins live outside the town.",
                },

                // ===== RELATIVES & PEOPLE =====
                {
                    id: "qarayeb",
                    ar: "قَرَايِب",
                    en: "relatives",
                    enArabeezy: "qarayeb",
                    hint:
                        "قَرَايِب = relatives (plural). Often used with إِلْنَا / إِلِّي: ‘we have relatives’.",
                    exampleAr: "إِلْنَا قَرَايِب فِي غَزَّة وَقَرَايِب فِي بَرَّا.",
                    exampleEn: "We have relatives in Gaza and relatives abroad.",
                },
                {
                    id: "3areeb",
                    ar: "قَريب / قَريبة",
                    en: "relative (m/f)",
                    enArabeezy: "qarib/qaribeh",
                    hint: "Generic word for one relative (male/female).",
                    exampleAr: "عِنْدنا قَرايِب كْثير بْبَرّا.",
                    exampleEn: "We have many relatives abroad.",
                },
                {
                    id: "nas",
                    ar: "نَاس",
                    en: "people",
                    enArabeezy: "nas",
                    hint: "General word for ‘people’.",
                    exampleAr: "النَّاس هَان طَيِّبِين وَبِيِحِبُّوا الضُّيُوف.",
                    exampleEn: "People here are kind and love guests.",
                },
                {
                    id: "jar_jiran",
                    ar: "جَار / جِيرَان",
                    en: "neighbor / neighbors",
                    enArabeezy: "jar/jiran",
                    hint:
                        "جَار = neighbor (singular). جِيرَان = neighbors (plural). Often used socially: neighbors like family.",
                    exampleAr: "جِيرَانَّا مِثْل الْعِيلَة، كُلّ يَوْم مَع بَعْض.",
                    exampleEn: "Our neighbors are like family; we’re together every day.",
                },

                // ===== AGE & COMPARISONS =====
                {
                    id: "akbar",
                    ar: "أَكبَر",
                    en: "older / biggest",
                    enArabeezy: "akbar",
                    hint: "Comparative: older / bigger. Often used with مِن.",
                    exampleAr: "هُوَّ أَكبَر وَلَد بِالعيلِة.",
                    exampleEn: "He is the oldest boy in the family.",
                },
                {
                    id: "asghar",
                    ar: "أَصغَر",
                    en: "younger / smallest",
                    enArabeezy: "asghar",
                    hint: "Comparative: younger / smaller.",
                    exampleAr: "أَنا أَصغَر واحِد بَيْن إِخْواني.",
                    exampleEn: "I’m the youngest among my siblings.",
                },
                {
                    id: "akbar_asghar",
                    ar: "أَكْبَر / أَصْغَر",
                    en: "older / younger",
                    enArabeezy: "akbar/asghar",
                    hint:
                        "Use with مِنِّي (than me) or مِنُّه / مِنَّهَا (than him/her). أَكْبَر مِنِّي = older than me. أَصْغَر مِنِّي = younger than me.",
                    exampleAr: "أُخْتِي أَكْبَر مِنِّي، وَأَخُوي أَصْغَر مِنِّي.",
                    exampleEn: "My sister is older than me, and my brother is younger than me.",
                },
                {
                    id: "kbeer_sgheer",
                    ar: "كْبِير / صْغِير",
                    en: "big / small (also old / young)",
                    enArabeezy: "kbir/sghir",
                    hint:
                        "For age or size. أَبُوي كْبِير بِالْعُمْر = my father is old. اِبْنِي صْغِير = my son is young.",
                    exampleAr: "سِتِّي كْبِيرَة بِالْعُمْر، بَسّ قَلْبْهَا صْغِير.",
                    exampleEn: "My grandma is old in age, but her heart is young.",
                },
                {
                    id: "2addi",
                    ar: "قَدّي",
                    en: "same age as me",
                    enArabeezy: "2addi",
                    hint: "Used for same age comparison.",
                    exampleAr: "أُختي تَقْريبًا قَدّي.",
                    exampleEn: "My sister is almost the same age as me.",
                },

                // ===== MARITAL STATUS =====
                {
                    id: "mutazawwij",
                    ar: "مِتجَوِّز / مِتجَوِّزة",
                    en: "married (m/f)",
                    enArabeezy: "mitjawwez/mitjawwzeh",
                    hint: "Marital status: married man/woman.",
                    exampleAr: "أُختي مِتجَوِّزة جْديد.",
                    exampleEn: "My sister recently got married.",
                },
                {
                    id: "3azzab",
                    ar: "عَزابي / عَزابيّة",
                    en: "single (unmarried, m/f)",
                    enArabeezy: "3azabi/3azabiyeh",
                    hint: "Not married.",
                    exampleAr: "أنا لِسّه عَزابي.",
                    exampleEn: "I’m still single.",
                },
                {
                    id: "makhtub",
                    ar: "خاطِب / مَخطوبة",
                    en: "engaged (m/f)",
                    enArabeezy: "khatib/makhtubeh",
                    hint: "Engaged to be married.",
                    exampleAr: "أُخوي خاطِب بِنْت مِن غَزّة.",
                    exampleEn: "My brother is engaged to a girl from Gaza.",
                },
                {
                    id: "maktub_ktabo",
                    ar: "مَكْتُوب كِتَابُه",
                    en: "engaged (Islamic contract)",
                    enArabeezy: "maktub_ktabo",
                    hint: "Expression for religious engagement/marriage contract. Fem: مَكْتُوب كِتَابْهَا.",
                    exampleAr: "بِنْت خَالْتِي مَكْتُوب كِتَابْهَا مِنْ سَنَة.",
                    exampleEn: "My aunt’s daughter has been engaged for a year.",
                },

                // ===== HAVE & LIVE WITH =====
                {
                    id: "3indi",
                    ar: "عِنْدي ...",
                    en: "I have ...",
                    enArabeezy: "3indi",
                    hint: "Used to say you have family members or things.",
                    exampleAr: "عِنْدي أُخ وَأُختَيْن.",
                    exampleEn: "I have one brother and two sisters.",
                },
                {
                    id: "ma_3indi",
                    ar: "مَا عِنْدي",
                    en: "I don’t have",
                    enArabeezy: "ma_3indi",
                    hint: "Negation of عِنْدي.",
                    exampleAr: "مَا عِنْدي أَطْفَال، بَسّ عِنْدي قِطَّة.",
                    exampleEn: "I don’t have children, but I have a cat.",
                },
                {
                    id: "saken_ma3",
                    ar: "ساكِن / ساكْنة مَع ...",
                    en: "living with (m/f) ...",
                    enArabeezy: "saken/sakneh_ma3",
                    hint: "Talking about who you live with.",
                    exampleAr: "أنا ساكْنة مَع أَهلي.",
                    exampleEn: "I live with my family.",
                },
            ],

            extra: [
                // ===== MORE STATUS & RELATIONS =====
                {
                    id: "mutallaq",
                    ar: "مَطَلَّق / مَطَلَّقَة",
                    en: "divorced (m/f)",
                    enArabeezy: "mutallaq/mutallaqa",
                    hint: "Marital status: divorced.",
                    exampleAr: "خالتي مَطَلَّقَة مِن سَنِين.",
                    exampleEn: "My aunt has been divorced for years.",
                },
                {
                    id: "armal",
                    ar: "أَرْمَل / أَرْمَلَة",
                    en: "widower / widow",
                    enArabeezy: "armal/armaleh",
                    hint: "Marital status.",
                    exampleAr: "جارتنا أَرْمَلَة.",
                    exampleEn: "Our neighbor is a widow.",
                },
                {
                    id: "7amay",
                    ar: "حَماي / حَمايِة",
                    en: "father-in-law / mother-in-law",
                    enArabeezy: "7amay/7amayeh",
                    hint: "Parents of a spouse.",
                    exampleAr: "حَماي وَحَمايِة بيسْكُنوا بِنَفْس البِنَايِة.",
                    exampleEn: "My in-laws live in the same building.",
                },
                {
                    id: "ta2riban",
                    ar: "تَقريبًا",
                    en: "approximately / almost",
                    enArabeezy: "ta2riban",
                    hint: "Useful with ages or numbers of siblings.",
                    exampleAr: "عيلِتْهُم تَقريبًا عَشَرَة نَفَر.",
                    exampleEn: "Their family is about ten people.",
                },
                {
                    id: "mutza3leen",
                    ar: "مُتْزاعْلين",
                    en: "not on good terms, upset with each other",
                    enArabeezy: "mitza3leen",
                    hint: "Talking about family problems.",
                    exampleAr: "هُمَّ مُتْزاعْلين مَع أَخُوهم.",
                    exampleEn: "They are not on good terms with their brother.",
                },

                // ===== FAMILY FEEL & TOGETHERNESS =====
                {
                    id: "ahl_ba3d",
                    ar: "أَهْل بَعْض",
                    en: "relatives / each other’s people",
                    enArabeezy: "ahl_ba3d",
                    hint: "Informal expression that means ‘we are relatives / close like family’.",
                    exampleAr: "مَو غُرْب، إِحْنَا أَهْل بَعْض.",
                    exampleEn: "We’re not strangers, we’re like relatives.",
                },
                {
                    id: "kulna_sawa",
                    ar: "كُلْنَا سَوَى",
                    en: "all of us together",
                    enArabeezy: "kulna_sawa",
                    hint:
                        "Nice expression when talking about family living or doing things together.",
                    exampleAr: "إِيَّام الْعِيد كُلْنَا سَوَى فِي بَيْت سِتِّي.",
                    exampleEn: "On the holiday days, all of us are together at my grandma’s house.",
                },
            ],
        },


        // ====================================
        // DIALOGUE (long, with real names)
        // ====================================
        "dialogue": {
            "lines": [
                {
                    "speaker": "Samer",
                    "ar": "مَسّا الخير يا ليلى، كِيفِك اليوم؟",
                    "en": "Good evening, Layla, how are you today?"
                },
                {
                    "speaker": "Layla",
                    "ar": "مَسّا النّور يا سامِر، الحَمْدِلله. وإِنْتَ كِيفَك؟",
                    "en": "Good evening, Samer, alhamdulillah. And how are you?"
                },
                {
                    "speaker": "Samer",
                    "ar": "تمام، شُكْرًا. اليوم الأُسْتاذة حَكَت عَن العيلِة، حَبيت أَسْأَلِك عَن عيلْتِك.",
                    "en": "I’m good, thanks. Today the teacher talked about family, I wanted to ask you about your family."
                },
                {
                    "speaker": "Layla",
                    "ar": "أَهلي ساكْنين هون بِغَزّة، وعيلِتْنا كْبيرَة.",
                    "en": "My family lives here in Gaza, and our family is big."
                },
                {
                    "speaker": "Samer",
                    "ar": "عِنْدِك إِخْوان وَإِخْوات كْثير؟",
                    "en": "Do you have many brothers and sisters?"
                },
                {
                    "speaker": "Layla",
                    "ar": "إي، عِنْدي أُخ أَكبَر مِنّي وَأُخت أَصغَر.",
                    "en": "Yes, I have an older brother and a younger sister."
                },
                {
                    "speaker": "Samer",
                    "ar": "أَخوك أَكبَر بِقَدّيش؟",
                    "en": "How much older is your brother?"
                },
                {
                    "speaker": "Layla",
                    "ar": "هُوَّ أَكبَر مِنّي تَقريبًا أَرْبَع سِنِين.",
                    "en": "He’s about four years older than me."
                },
                {
                    "speaker": "Samer",
                    "ar": "وأُختِك قَدّك ولا أَصغَر كْمان؟",
                    "en": "And is your sister your age or younger too?"
                },
                {
                    "speaker": "Layla",
                    "ar": "هيَّ أَصغَر، لِسّه بِالتّانَوِيّة.",
                    "en": "She’s younger, she’s still in high school."
                },
                {
                    "speaker": "Samer",
                    "ar": "تِسْكُنوا كِلْكُم مَع بَعْض؟",
                    "en": "Do you all live together?"
                },
                {
                    "speaker": "Layla",
                    "ar": "أَه، أنا ساكْنة مَع أَهلي: إِمّي، أَبوي، أُخوي، وَأُختي.",
                    "en": "Yes, I live with my family: my mother, father, brother and sister."
                },
                {
                    "speaker": "Samer",
                    "ar": "وجَدِّك وَسِتِّك ساكْنين قَريب مَنْكُم؟",
                    "en": "And do your grandfather and grandmother live near you?"
                },
                {
                    "speaker": "Layla",
                    "ar": "إي، جَدّي وَسِتّي ساكْنين فِي الحارَة الجَنْبنا.",
                    "en": "Yes, my grandfather and grandmother live in the neighborhood next to us."
                },
                {
                    "speaker": "Samer",
                    "ar": "حَلُو كْثير. أَنا عيلْتِي أَصْغَر، عِنْدي بَسّ أُخ واحِد.",
                    "en": "That’s really nice. My family is smaller, I only have one brother."
                },
                {
                    "speaker": "Layla",
                    "ar": "هُوَّ أَكبَر مِنَّك وَلّا أَصغَر؟",
                    "en": "Is he older than you or younger?"
                },
                {
                    "speaker": "Samer",
                    "ar": "هُوَّ تَقريبًا قَدّي، بِنْدَرُس نَفْس السَّنَة بِالجَامْعَة.",
                    "en": "He’s almost my age, we study the same year at the university."
                },
                {
                    "speaker": "Layla",
                    "ar": "أَهْلَك مِتجَوِّزين مِن زَمَان؟",
                    "en": "Have your parents been married for a long time?"
                },
                {
                    "speaker": "Samer",
                    "ar": "إي، أَبوي وَإِمّي مِتجَوِّزين مِن أَكْتَر مِن عِشْرين سَنِة.",
                    "en": "Yes, my dad and mom have been married for more than twenty years."
                },
                {
                    "speaker": "Layla",
                    "ar": "إخْوالِك وَعَمامِك ساكْنين هُون وَلّا بْبَرّا؟",
                    "en": "Do your maternal and paternal uncles live here or abroad?"
                },
                {
                    "speaker": "Samer",
                    "ar": "عِنْدي خال ساكِن هون، وَعَمّي ساكِن بْبَرّا البَلَد.",
                    "en": "I have an uncle on my mom’s side who lives here, and an uncle on my dad’s side who lives abroad."
                },
                {
                    "speaker": "Layla",
                    "ar": "شُو أَكْتَر حَدا قَريب عَلَيْك بِالعيلِة؟",
                    "en": "Who are you closest to in your family?"
                },
                {
                    "speaker": "Samer",
                    "ar": "صِراحَةً، أَقْرَب حَدا عَلَيَّ أُختي، بَنِحْكِي كْثير مَع بَعْض.",
                    "en": "Honestly, I’m closest to my sister, we talk a lot with each other."
                },
                {
                    "speaker": "Layla",
                    "ar": "حَلُو! إنْ شاءَ الله تِضَلّوا مِتْفاهْمين دَايْمًا.",
                    "en": "Nice! Inshallah you always stay in good understanding."
                }
            ]
        },


        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "3indi_have",
                title: "Using «عِنْدِي…» to say ‘I have…’",
                description:
                    "In Palestinian Arabic, «عِنْدِي» (ʕindi) is the basic way to say ‘I have’:\n\n" +
                    "• عِنْدِي أَخ وَأُخْت = I have a brother and a sister.\n" +
                    "• عِنْدِي عِيلَة كْبِيرَة = I have a big family.\n\n" +
                    "Other persons:\n" +
                    "• عِنْدَك (ʕindak) = you have (masc)\n" +
                    "• عِنْدِك (ʕindik) = you have (fem)\n" +
                    "• عِنْدُه (ʕindo) = he has\n" +
                    "• عِنْدْهَا (ʕindha) = she has\n" +
                    "• عِنْدْهُم (ʕindhom) = they have\n\n" +
                    "Negation uses «مَا» before it:\n" +
                    "• مَا عِنْدِي أَخَوَات = I don’t have sisters.\n" +
                    "• مَا عِنْدُه أَطْفَال = He doesn’t have children.\n\n" +
                    "You can combine with numbers and adjectives:\n" +
                    "• عِنْدِي أَخ وَاحِد بَسّ = I have only one brother.\n" +
                    "• عِنْدْهَا طِفْلَيْن صْغَار = She has two small children.",
            },
            {
                id: "possessive_family",
                title: "‘My father, my mother, my brother…’ endings",
                description:
                    "Family words often take special endings for ‘my’:\n\n" +
                    "• أَبُوي = my father (from أَب + و + ي)\n" +
                    "• إِمِّي = my mother (from أُمّ + ي)\n" +
                    "• أَخُوي = my brother (from أَخ + و + ي)\n" +
                    "• أُخْتِي = my sister (from أُخْت + ي)\n" +
                    "• سِتِّي = my grandma\n" +
                    "• سِيدِي = my grandpa\n\n" +
                    "Examples:\n" +
                    "• أَبُوي مُتْزَوِّج = My father is married.\n" +
                    "• إِمِّي فِي الْبَيْت = My mother is at home.\n" +
                    "• أَخُوي أَصْغَر مِنِّي = My brother is younger than me.\n" +
                    "• أُخْتِي كْبِيرَة = My sister is older.\n\n" +
                    "Notice: English uses a separate word ‘my’, but Palestinian Arabic usually uses an ending attached to the noun.",
            },
            {
                id: "comparatives_family",
                title: "Older / younger: «أَكْبَر مِنِّي» و«أَصْغَر مِنِّي»",
                description:
                    "To compare ages between you and a family member, Palestinian Arabic uses forms like:\n\n" +
                    "• أَكْبَر مِنِّي = older than me\n" +
                    "• أَصْغَر مِنِّي = younger than me\n\n" +
                    "Examples:\n" +
                    "• أَخُوي أَكْبَر مِنِّي بِسَنَتَيْن = My brother is two years older than me.\n" +
                    "• أُخْتِي أَصْغَر مِنِّي شْوَيّ = My sister is a bit younger than me.\n\n" +
                    "With other people:\n" +
                    "• هُوَّ أَكْبَر مِنَّهَا = He is older than her.\n" +
                    "• هِيَّ أَصْغَر مِنُّه = She is younger than him.\n\n" +
                    "You can mix this with عِنْدِي:\n" +
                    "• عِنْدِي أَخَيْن، وَاحِد أَكْبَر مِنِّي وَوَاحِد أَصْغَر مِنِّي.",
            },
            {
                id: "marital_status_family",
                title: "Talking about marital status: married, single, engaged",
                description:
                    "Some high-frequency words for marital status:\n\n" +
                    "• مُتْزَوِّج / مُتْزَوِّجَة = married (masc / fem)\n" +
                    "• عَزَّاب = single (unmarried man)\n" +
                    "• مَكْتُوب كِتَابُه / مَكْتُوب كِتَابْهَا = engaged (Islamic contract done)\n\n" +
                    "Examples:\n" +
                    "• أَخُوي الْكْبِير مُتْزَوِّج وَعِنْدُه أَطْفَال = My older brother is married and has children.\n" +
                    "• أُخْتِي لِسَّا مُش مُتْزَوِّجَة = My sister is not married yet.\n" +
                    "• هُوَّ عَزَّاب، مَا بَدُّه يِتْزَوَّج هَلَّقْ = He is single, he doesn’t want to get married now.\n" +
                    "• بِنْت خَالْتِي مَكْتُوب كِتَابْهَا = My aunt’s daughter is engaged.\n\n" +
                    "You’ll hear these a lot in real family conversations.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "fam_q1",
                    questionAr: "«عِنْدِي تَلَات إِخْوَة» مَعْنَاهَا:",
                    optionsEn: [
                        "I have three sisters.",
                        "I have three brothers.",
                        "I have three children.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "fam_q2",
                    questionAr: "«أَخُوي أَكْبَر مِنِّي» مَعْنَاهَا:",
                    optionsEn: [
                        "My brother is older than me.",
                        "My brother is younger than me.",
                        "My brother is the same age as me.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fam_q3",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘relatives’؟",
                    optionsEn: [
                        "neighbors",
                        "people",
                        "relatives",
                    ],
                    correctIndex: 2,
                },
                {
                    id: "fam_q4",
                    questionAr: "«هُوَّ عَزَّاب» مَعْنَاهَا:",
                    optionsEn: [
                        "He is married.",
                        "He is single (not married).",
                        "He is engaged.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "fam_q5",
                    questionAr: "«مَا عِنْدِي أَطْفَال» مَعْنَاهَا:",
                    optionsEn: [
                        "I don’t have children.",
                        "I don’t have siblings.",
                        "I have small children.",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 3: One student describes a big family gathering at grandma’s house (سِتِّي). Other students listen and then ask follow-up questions: «مَع مِين سَاكِن؟»، «مِنْ وِين قَرَايِبْكُمْ؟»، «النَّاس كْبِيرِين وَلَّا صْغَار؟».",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second story about your family in Palestinian Arabic. Mention: who lives in your house, how many brothers and sisters you have, who is older/younger than you, and if any of them are married, single, or engaged. Try to use at least 8 words from the vocabulary list and the structure «عِنْدِي…».",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "In English, explain that family is one of the easiest and richest topics to practice in any language.",
                "Draw a simple family tree on the screen or a paper and write Arabic words next to each person (أَبُوي، إِمِّي، أَخُوي، أُخْتِي…).",
                "Ask the student to tell you the equivalent words in their own language to make it personal.",
            ],
            vocabularySteps: [
                "Teach close family first (parents, siblings, grandparents), then extended family (uncles, aunts, relatives).",
                "Use lots of personalization: ask about the student’s real family as soon as they understand the word.",
                "Highlight the ‘my’ forms (أَبُوي، إِمِّي، أَخُوي…) and recycle them in almost every example.",
            ],
            dialogueSteps: [
                "Read the full dialogue as a story. Then ask the student: ‘Which family do you feel closest to, Roba’s, Mark’s, Yara’s, or Omar’s?’",
                "Pick one character (for example, Yara) and ask the student to retell her family story in their own words.",
                "Change the details: same structure but different numbers, countries, and marital status, so the student produces new language using the same pattern.",
            ],
            practiceTips: [
                "When a student answers with short English sentences, gently push them to try small Arabic pieces like «عِنْدِي أَخَيْن» even if the rest is in English.",
                "Use the quiz questions to open mini-conversations, not only A/B/C answers.",
                "If the student has a complicated family situation, let them invent a ‘fantasy family’ just for practice to keep it safe and comfortable.",
            ],
            wrapup: [
                "Ask the student to say 3–5 full sentences about their family only in Arabic, even if simple.",
                "Summarize their family in Arabic back to them, slightly upgraded, so they hear a natural model.",
                "Remind them of the homework and suggest they imagine telling their story to a Palestinian friend, not to the teacher.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_TRANSPORT]: {
        meta: {
            level: "Beginner",
            unit: "trans",
            lessonTitle: "Unit 5 – Transportation & Getting Around",
        },

        overview: {
            title: "Unit 5 – Transportation & Getting Around",
            description:
                "In this unit, students learn how to talk about transportation and moving around in Palestinian cities: buses, taxis, service (shared taxis), cars, walking, traffic, being late, and asking about directions and prices. The focus is on real phrases that students can use when visiting Palestine or talking to Palestinian friends about daily travel.",
            goals: [
                "Name common means of transportation in Palestinian Arabic.",
                "Use key verbs like ‘to ride’, ‘to drive’, ‘to arrive’, and ‘to be late’ in context.",
                "Ask and answer simple questions about how to go from place to place and how long it takes.",
                "Use real-life chunks for taking a taxi, bus, or service (shared taxi).",
                "Connect transportation with time and daily routine from previous units.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== GENERAL TRANSPORT =====
                {
                    id: "muwaSalat",
                    ar: "مُوَاصَلات",
                    en: "transportation, public transport",
                    enArabeezy: "muwaSalat",
                    hint: "General word for transportation / public transport.",
                    exampleAr: "اليوم المُوَاصَلات زَحْمَة كْتير.",
                    exampleEn: "Today the transportation is very crowded.",
                },

                // ===== TYPES OF TRANSPORT =====
                {
                    id: "sayyara",
                    ar: "سَيَّارَة",
                    en: "car",
                    enArabeezy: "sayyara",
                    hint:
                        "Plural: سَيَّارَات (cars). For ‘my car’: سَيَّارْتِي. Used for private cars and sometimes company cars.",
                    exampleAr: "أَخوي بِسوق سَيّارة الشُّرْكَة.",
                    exampleEn: "My brother drives the company car.",
                },
                {
                    id: "taxi",
                    ar: "تَكْسِي / تاكسي",
                    en: "taxi",
                    enArabeezy: "taxi",
                    hint:
                        "Very common word. Both spellings تَكْسِي / تاكسي are used. Plural: تَكَاسِي. Often yellow or white, used inside the city.",
                    exampleAr: "أَحْيانًا باخُد تاكسي لَمّا أكون مُسْتَعْجِل.",
                    exampleEn: "Sometimes I take a taxi when I’m in a hurry.",
                },
                {
                    id: "servis",
                    ar: "سِرْفِيس",
                    en: "service (shared taxi)",
                    enArabeezy: "servis",
                    hint:
                        "Shared taxi on a fixed route with a fixed price. Plural: سَرَافِيس. Close to the idea of سَيّارة أُجْرَة.",
                    exampleAr: "سِرْفِيس أَرْخَص مِن التَّكْسِي الْخَاصّ.",
                    exampleEn: "A service is cheaper than a private taxi.",
                },
                {
                    id: "buss",
                    ar: "بُصّ / باص",
                    en: "bus",
                    enArabeezy: "buss/bas",
                    hint:
                        "Spoken Palestinian pronunciation for ‘bus’. You may hear بُصّ or باص. Plural: بُصَّات.",
                    exampleAr: "فِي بُصّ بِيِرُوح مِن غَزَّة عَلَى رَام اللّٰه.",
                    exampleEn: "There is a bus that goes from Gaza to Ramallah.",
                },
                {
                    id: "baskaleet",
                    ar: "بَسكَلِيت",
                    en: "bicycle",
                    enArabeezy: "baskaleet",
                    hint: "Bike / bicycle, sometimes also درّاجة.",
                    exampleAr: "هوَّ بِحِبّ يِروح عَالجامعة بالبَسكَلِيت.",
                    exampleEn: "He likes to go to the university by bike.",
                },
                {
                    id: "qitar",
                    ar: "قِطار",
                    en: "train",
                    enArabeezy: "qitar",
                    hint: "Train. Used more for travel in countries that have trains.",
                    exampleAr: "رِكِبنا القِطار لَمّا كُنّا بِالأُرْدُن.",
                    exampleEn: "We took the train when we were in Jordan.",
                },
                {
                    id: "metro",
                    ar: "مِتْرو",
                    en: "metro / subway",
                    enArabeezy: "metro",
                    hint: "Underground / metro. Not in every city.",
                    exampleAr: "في مِدِن ثانِيَة في مِتْرو، مِش عَنا.",
                    exampleEn: "In other cities there is a metro, not here.",
                },

                // ===== PLACES & ROADS =====
                {
                    id: "ma7aTTa",
                    ar: "مَحَطَّة",
                    en: "station / stop",
                    enArabeezy: "ma7aTTa",
                    hint:
                        "General ‘station’: مَحَطَّة بُصّ = bus station; مَحَطَّة سِرْفِيس = service station.",
                    exampleAr: "بِنِسْتَنَّى فِي مَحَطَّة السِّرْفِيس.",
                    exampleEn: "We wait at the service station.",
                },
                {
                    id: "mawqif_basat",
                    ar: "مَوقِف باصات",
                    en: "bus stop",
                    enArabeezy: "mawqif_basat",
                    hint: "Place where buses stop to pick up passengers.",
                    exampleAr: "مَوقِف الباصات قُدّام الجامْعَة.",
                    exampleEn: "The bus stop is in front of the university.",
                },
                {
                    id: "shari3",
                    ar: "شَارِع",
                    en: "street / road",
                    enArabeezy: "shari3",
                    hint:
                        "Plural: شَوَارِع. شَارِع رَئِيسِي = main street; شَارِع ضَيِّق = narrow street.",
                    exampleAr: "الشَّوَارِع الْيَوْم مَلْيَانَة سَيَّارَات.",
                    exampleEn: "The streets today are full of cars.",
                },
                {
                    id: "kameen_benzin",
                    ar: "كَمين بْنَزين",
                    en: "gas station",
                    enArabeezy: "kameen_benzin",
                    hint: "Place to get fuel for cars and buses.",
                    exampleAr: "السَيّارة وَقَفَت قُدّام كَمين البْنَزين.",
                    exampleEn: "The car stopped in front of the gas station.",
                },
                {
                    id: "ishara",
                    ar: "إِشَارَة",
                    en: "traffic light (short form)",
                    enArabeezy: "ishara",
                    hint:
                        "إِشَارَة ضَوْ = traffic light. People just say: عِنْد الإِشَارَة.",
                    exampleAr: "التَّكْسِي وَقَف عِنْد الإِشَارَة الْحَمْرَا.",
                    exampleEn: "The taxi stopped at the red light.",
                },

                // ===== TRAFFIC & CROWD =====
                {
                    id: "z7meh",
                    ar: "زَحْمَة",
                    en: "traffic / crowd / traffic jam",
                    enArabeezy: "za7meh",
                    hint: "Used a lot for traffic jam: فِي زَحْمَة فِي الشَّارِع.",
                    exampleAr: "تَأَخَّرْت عَ الدَّرْس عَشَان فِي زَحْمَة.",
                    exampleEn: "I was late to the lesson because there was traffic.",
                },

                // ===== MOVEMENT VERBS / CHUNKS =====
                {
                    id: "barkab",
                    ar: "بَرْكَب",
                    en: "I ride / I get on (bus, car, taxi)",
                    enArabeezy: "barkab",
                    hint:
                        "From رِكِب = to ride. بَرْكَب تَكْسِي / بَرْكَب بُصّ / بَرْكَب سِرْفِيس.",
                    exampleAr: "كُلّ يَوْم بَرْكَب بُصّ عَلَى الْجَامْعَة.",
                    exampleEn: "Every day I take a bus to university.",
                },
                {
                    id: "rikib_yirkab",
                    ar: "رِكِب، يِركَب",
                    en: "to ride, get on (bus, taxi, etc.)",
                    enArabeezy: "rikib/yirkab",
                    hint: "Dictionary form of the verb ‘to ride / get on’.",
                    exampleAr: "يَلا نِركَب الباص، حَيِمْشي هَلَّق.",
                    exampleEn: "Let’s get on the bus, it’s about to leave now.",
                },
                {
                    id: "banzel",
                    ar: "بَنْزِل",
                    en: "I get off / I go down",
                    enArabeezy: "banzel",
                    hint:
                        "Used for getting off a bus/taxi or going down: بَنْزِل مِن التَّكْسِي.",
                    exampleAr: "بَنْزِل قُدَّام مَدْخَل الْجَامْعَة.",
                    exampleEn: "I get off in front of the university entrance.",
                },
                {
                    id: "nizil_yinzil",
                    ar: "نِزِل، يِنْزِل",
                    en: "to get off, get out (of a vehicle)",
                    enArabeezy: "nizil/yinzil",
                    hint: "Opposite of يركب ‘to get on’.",
                    exampleAr: "بِنْزِل قُدّام الجامْعَة، لَو سَمَحْت.",
                    exampleEn: "I get off in front of the university, please.",
                },
                {
                    id: "bsoog",
                    ar: "بَسُوق",
                    en: "I drive",
                    enArabeezy: "basooq",
                    hint: "From سَاق = to drive. بَسُوق سَيَّارَة / بَسُوق بُصّ.",
                    exampleAr: "أَبُوي بَسُوق سَيَّارَة صْغِيرَة.",
                    exampleEn: "My father drives a small car.",
                },
                {
                    id: "wasal_yowsal",
                    ar: "وِصِل، يوصَل",
                    en: "to arrive, reach",
                    enArabeezy: "wisel/yowsal",
                    hint: "Verb ‘to arrive’ at a place.",
                    exampleAr: "إِمْتَى وِصِل الباص عَالبلَد؟",
                    exampleEn: "When did the bus arrive in town?",
                },
                {
                    id: "bawsal",
                    ar: "بَوْصَل",
                    en: "I arrive / I reach",
                    enArabeezy: "bowsal",
                    hint:
                        "Common spoken form from وَصَل. بَوْصَل عَلَى الْبَيْت السَّاعَة تَمْنْيْة.",
                    exampleAr: "بَوْصَل عَلَى الشُّغُل بَعْد نُصّ سَاعَة.",
                    exampleEn: "I arrive at work after half an hour.",
                },
                {
                    id: "ra7_yiroo7",
                    ar: "راح، يِروح",
                    en: "to go",
                    enArabeezy: "ra7/yiroo7",
                    hint: "General verb ‘to go’ to a place.",
                    exampleAr: "كل يوم بِروح عَالجامْعَة عَالسّاعَة تْمانْيِة.",
                    exampleEn: "Every day I go to the university at eight o’clock.",
                },
                {
                    id: "tla3_yitla3",
                    ar: "طِلِع، يِطْلَع",
                    en: "to leave / depart (bus/taxi) or go up",
                    enArabeezy: "tli3/yitla3",
                    hint: "Also used like ‘the bus left / departed’.",
                    exampleAr: "الباص طِلِع، لَحِقْناه بِصُعوبَة.",
                    exampleEn: "The bus left; we caught it with difficulty.",
                },
                {
                    id: "yifoot_3a",
                    ar: "يِفوت عَـ...",
                    en: "to enter / go into ...",
                    enArabeezy: "yifoot_3a",
                    hint: "Used with places: bus or car going into a street.",
                    exampleAr: "الباص بِفوت عَشارِع ضَيِّق.",
                    exampleEn: "The bus goes into a narrow street.",
                },
                {
                    id: "bEta2akhar",
                    ar: "بِتْأَخَّر",
                    en: "I am late / I get late",
                    enArabeezy: "bita2akhar",
                    hint:
                        "From تَأَخَّر = to be late. مَا بِدِّي أِتْأَخَّر = I don’t want to be late.",
                    exampleAr: "لَمَّا فِي زَحْمَة بِنِتْأَخَّر كْتِير.",
                    exampleEn: "When there is traffic, we get very late.",
                },
                {
                    id: "bastanna",
                    ar: "بَسْتَنَّى",
                    en: "I wait",
                    enArabeezy: "bastanna",
                    hint:
                        "From اِسْتَنَّى = to wait. بَسْتَنَّى السِّرْفِيس / بَسْتَنَّى صَاحْبِي.",
                    exampleAr: "بَسْتَنَّى البُصّ مِن نُصّ سَاعَة.",
                    exampleEn: "I’ve been waiting for the bus for half an hour.",
                },
                {
                    id: "bna2el",
                    ar: "بَنْقِل",
                    en: "I move / I transport",
                    enArabeezy: "bna2el",
                    hint: "Used for moving people or things: سَيَّارَة بْتِنْقِل رُكَّاب.",
                    exampleAr: "السِّرْفِيس بْيِنْقِل نَّاس مِن مِنْطَقَة لِمِنْطَقَة.",
                    exampleEn: "The service transports people from one area to another.",
                },
                {
                    id: "bamshi",
                    ar: "بَمْشِي",
                    en: "I walk",
                    enArabeezy: "bamshi",
                    hint: "From مِشِي = walking. ‘On foot’: بَمْشِي عَلَى رِجْلَيّ.",
                    exampleAr: "لَمَّا الْمَسَافَة قَرِيبَة بَمْشِي مَا بَرْكَب.",
                    exampleEn: "When the distance is close, I walk and don’t take a vehicle.",
                },
                {
                    id: "bdaTTi3",
                    ar: "بَقَطِّع الشَّارِع",
                    en: "I cross the street",
                    enArabeezy: "ba2aTTi3_eshshari3",
                    hint:
                        "Chunk: بَقَطِّع الشَّارِع = I cross the street. Used a lot with traffic lights.",
                    exampleAr: "بَقَطِّع الشَّارِع لَمَّا الإِشَارَة خَضْرَا.",
                    exampleEn: "I cross the street when the light is green.",
                },

                // ===== DIRECTIONS =====
                {
                    id: "shmal",
                    ar: "شْمال",
                    en: "left",
                    enArabeezy: "shmal",
                    hint: "Direction: left.",
                    exampleAr: "خُد شْمال عَأوَّل لَفَّة.",
                    exampleEn: "Take a left at the first turn.",
                },
                {
                    id: "yameen",
                    ar: "يَمين",
                    en: "right",
                    enArabeezy: "yameen",
                    hint: "Direction: right.",
                    exampleAr: "بَعْدين خُد يَمين عَشارِع الكورنيش.",
                    exampleEn: "Then take a right onto the corniche street.",
                },
                {
                    id: "doghri",
                    ar: "دُغري",
                    en: "straight",
                    enArabeezy: "doghri",
                    hint: "Straight ahead.",
                    exampleAr: "ضَلّك مَاشي دُغري قُدّامَك.",
                    exampleEn: "Keep going straight ahead.",
                },
                {
                    id: "2uddamak",
                    ar: "قُدّامَك",
                    en: "in front of you / straight ahead",
                    enArabeezy: "2uddamak",
                    hint: "Used with directions and landmarks.",
                    exampleAr: "المَحَطّة قُدّامَك عَلْيامين.",
                    exampleEn: "The station is in front of you on the right.",
                },

                // ===== QUESTIONS & USEFUL CHUNKS =====
                {
                    id: "keef_arooh",
                    ar: "كِيف بَقْدَر أَرُوح عَلَى...؟",
                    en: "How can I go to…?",
                    enArabeezy: "keef_ba2dar_aroo7_3ala",
                    hint:
                        "Chunk for asking directions: كِيف بَقْدَر أَرُوح عَلَى الْجَامْعَة؟",
                    exampleAr: "كِيف بَقْدَر أَرُوح عَلَى مَحَطَّة البُصّ؟",
                    exampleEn: "How can I go to the bus station?",
                },
                {
                    id: "keef_bowsal_3a",
                    ar: "كيف بوْصَل عَـ...؟",
                    en: "How do I get to ...?",
                    enArabeezy: "keef_bowsal_3a",
                    hint: "Key phrase for asking directions.",
                    exampleAr: "كيف بوْصَل عَالمَحَطّة مِن هون؟",
                    exampleEn: "How do I get to the station from here?",
                },
                {
                    id: "b_kam",
                    ar: "بِكَم التَّكْسِي؟",
                    en: "How much is the taxi?",
                    enArabeezy: "bikam_it_taxi",
                    hint: "Chunk for price. You can change: بِكَم السِّرْفِيس؟",
                    exampleAr: "لَازِم تِسْأَل: بِكَم التَّكْسِي قَبْل مَا تَرْكَب.",
                    exampleEn: "You should ask ‘How much is the taxi?’ before you get in.",
                },
                {
                    id: "2addesh_el2ijra",
                    ar: "قَدّيش الأُجْرَة؟",
                    en: "How much is the fare?",
                    enArabeezy: "2addesh_el2ijreh",
                    hint: "Phrase for asking the price (fare) of bus/taxi/etc.",
                    exampleAr: "لَمّا تِرْكَب تاكسي، إسْأَل السَّوّاق: قَدّيش الأُجْرَة؟",
                    exampleEn: "When you take a taxi, ask the driver: How much is the fare?",
                },
                {
                    id: "adeysh_wa2t",
                    ar: "قَدِّيش بِيِأَخُد وَقْت؟",
                    en: "How long does it take?",
                    enArabeezy: "2addesh_bya5od_wa2t",
                    hint:
                        "Used for duration: قَدِّيش بِيِأَخُد وَقْت مِن غَزَّة لَرَام اللّٰه؟",
                    exampleAr: "قَدِّيش بِيِأَخُد وَقْت مِن الْبَيْت عَلَى الشُّغُل؟",
                    exampleEn: "How long does it take from home to work?",
                },
                {
                    id: "fi_mobashar",
                    ar: "فِي خَطّ مُبَاشِر؟",
                    en: "Is there a direct line?",
                    enArabeezy: "fi_5aTT_mobasher",
                    hint: "خَطّ = route / line. مُبَاشِر = direct (no change).",
                    exampleAr: "فِي خَطّ مُبَاشِر مِن هُون عَلَى الْجَامْعَة؟",
                    exampleEn: "Is there a direct line from here to the university?",
                },
                {
                    id: "bighayyir",
                    ar: "بِغَيِّر خَطّ",
                    en: "I change line / transfer",
                    enArabeezy: "bghayyir_5aTT",
                    hint:
                        "Chunk: بَغَيِّر خَطّ فِي الْمَحَطَّة. Useful when you change buses or services.",
                    exampleAr: "بَرْكَب سِرْفِيس وَبِغَيِّر خَطّ فِي الْوَسَط.",
                    exampleEn: "I take a service and change line in the city center.",
                },
            ],

            extra: [
                {
                    id: "rukkaab",
                    ar: "رُكَّاب",
                    en: "passengers",
                    enArabeezy: "rukkaab",
                    hint: "Plural only in practice. رَاكِب = passenger (singular).",
                    exampleAr: "السِّرْفِيس مَمْلِي رُكَّاب.",
                    exampleEn: "The service is full of passengers.",
                },
                {
                    id: "sawa2",
                    ar: "سَوَّاق",
                    en: "driver",
                    enArabeezy: "sawwa2",
                    hint: "From سَاق. سَوَّاق التَّكْسِي = taxi driver.",
                    exampleAr: "سَوَّاق التَّكْسِي كَان لَطِيف.",
                    exampleEn: "The taxi driver was kind.",
                },
                {
                    id: "maw2af",
                    ar: "مَوْقَف",
                    en: "parking / stop",
                    enArabeezy: "maw2af",
                    hint:
                        "مَوْقَف السَّيَّارَات = parking; مَوْقَف البُصّ = bus stop / stand.",
                    exampleAr: "بِسْتَنُّوا فِي مَوْقَف السَّيَّارَات.",
                    exampleEn: "They wait in the car park.",
                },
                {
                    id: "tafri3a",
                    ar: "تَفْرِيعَة",
                    en: "side street / turn-off",
                    enArabeezy: "tafri3a",
                    hint: "Useful word in giving directions.",
                    exampleAr: "خُد أَوَّل تَفْرِيعَة عَالشْمال.",
                    exampleEn: "Take the first side street on the left.",
                },
                {
                    id: "juwwa_barra",
                    ar: "جُوَّا / بَرّا",
                    en: "inside / outside",
                    enArabeezy: "juwwa/barra",
                    hint: "Location words often used with stations and vehicles.",
                    exampleAr: "إسْتَنّاني بَرّا مَحَطّة الباص.",
                    exampleEn: "Wait for me outside the bus station.",
                },
                {
                    id: "muta2akher",
                    ar: "مُتَأَخِّر",
                    en: "late (for transport / time)",
                    enArabeezy: "muta2akher",
                    hint: "Used for buses and people being late.",
                    exampleAr: "الباص كان مُتَأَخِّر نُصّ ساعَة.",
                    exampleEn: "The bus was half an hour late.",
                },
                {
                    id: "biwa22ef_hon",
                    ar: "بِوَقّف هون؟",
                    en: "Does it stop here?",
                    enArabeezy: "biwa22ef_hon",
                    hint: "Ask if a bus / service stops at this place.",
                    exampleAr: "إسْأَل حَدا: الباص لَلبَلَد بِوَقّف هون؟",
                    exampleEn: "Ask someone: Does the bus to town stop here?",
                },
                {
                    id: "3ala_l_za7meh",
                    ar: "عَلَى الزَّحْمَة",
                    en: "with the traffic / in heavy traffic",
                    enArabeezy: "3ala_iz_za7meh",
                    hint: "Chunk e.g. يَوْم الْخَمِيس كُلّ الإِشِي عَلَى الزَّحْمَة.",
                    exampleAr: "بَوْصَل بَعْد نُصّ سَاعَة، أَكِيد عَلَى الزَّحْمَة.",
                    exampleEn: "I arrive after half an hour, of course with traffic.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (multi-scene – from home to class)
        // ====================================
        "dialogue": {
            "lines": [
                {
                    "speaker": "Malek",
                    "ar": "لَو سَمَحْتي، كيف بوْصَل عَالجامْعَة مِن هان؟",
                    "en": "Excuse me, how do I get to the university from here?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "أكيد! إنت جديد بالمنطقة؟",
                    "en": "Of course! Are you new in the area?"
                },
                {
                    "speaker": "Malek",
                    "ar": "ايو، أوّل يوم إلي هان.",
                    "en": "Yes, it’s my first day here."
                },
                {
                    "speaker": "Rasha",
                    "ar": "ولا يهمّك. بتِرْكَب باص رَقم تْمانْيِة مِن مَوقِف الباصات.",
                    "en": "No worries. You take bus number 8 from the bus stop."
                },
                {
                    "speaker": "Malek",
                    "ar": "وين بَلاقي مَوقِف الباص بالْزَّبْط؟",
                    "en": "Where exactly can I find the bus stop?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "إمشِي دُغري قُدّامَك تقريبًا دَقِيقْتين، بَعْدين خُد يَمين.",
                    "en": "Walk straight ahead for about two minutes, then turn right."
                },
                {
                    "speaker": "Rasha",
                    "ar": "المَوقِف قُدّام مَحل الخُضرة، ما بِتِضِيع.",
                    "en": "The stop is in front of the vegetable store, you can’t miss it."
                },
                {
                    "speaker": "Malek",
                    "ar": "تمام. ولَمّا أركَب الباص، بِنْزِل قُدّام الجامْعَة؟",
                    "en": "Okay. And when I get on the bus, do I get off in front of the university?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "ايو، واحْكي لِلسَّوّاق: بدي انزل قُدّام الجامْعَة لو سَمَحْت.",
                    "en": "Yes, and tell the driver: I get off in front of the university, please."
                },
                {
                    "speaker": "Malek",
                    "ar": "قَدّيش بِيخُد وقت لما أوصَل؟",
                    "en": "How long does it take to get there?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "إِذا ما في زَحْمَة، تقريبًا رُبُع ساعَة.",
                    "en": "If there’s no traffic, about fifteen minutes."
                },
                {
                    "speaker": "Malek",
                    "ar": "وبِالنِّسْبَة لِوقْت الرَّجْعَة؟ نَفْس الباص؟",
                    "en": "And for coming back? The same bus?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "إي، في مَوقِف صْغير قُدّام الجامْعَة، بتركب مِن هُناك.",
                    "en": "Yes, there’s a small stop in front of the university, you get on from there."
                },
                {
                    "speaker": "Malek",
                    "ar": "لو حَبّيت آخُد تاكسي؟",
                    "en": "What if I want to take a taxi?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "بِزَبُط، بس التاكسي أَغْلى. إسأل السَّوّاق: قَدّيش بياخد لَلجامْعَة؟",
                    "en": "You can, but the taxi is more expensive. Ask the driver: How much is the fare to the university?"
                },
                {
                    "speaker": "Malek",
                    "ar": "في بَاصات غير رَقم تْمانْيِة؟",
                    "en": "Are there any other buses besides number 8?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "في رَقم عَشْرَة بيمُرّ قُدّام الجامْعَة كمان، بس بِيأخُد وقت أكْتَر.",
                    "en": "Bus number 10 also passes by the university, but it takes longer."
                },
                {
                    "speaker": "Malek",
                    "ar": "طيب لو ضِعت؟ في مكان معروف قريب مِن الجامْعَة؟",
                    "en": "Okay if I get lost? Is there a famous landmark near the university?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "إي، في مَكتَبَة كْبيرة قُدّام الباب الرَّئيسي، إسأل عَنها.",
                    "en": "Yes, there’s a big library in front of the main gate, ask about it."
                },
                {
                    "speaker": "Malek",
                    "ar": "وبالنِّسْبَة للباص… وين أَدْفَع الأُجْرَة؟",
                    "en": "And for the bus… where do I pay the fare?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "لِلسَّوّاق مُباشَرَةً. بَتِحكيلو وين بدّك تنزِل.",
                    "en": "To the driver directly. You just tell him where you want to get off."
                },
                {
                    "speaker": "Malek",
                    "ar": "قدّيش تقريبا الأجرة؟",
                    "en": "How much is the fare approximately?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "شي ٣ شيكِل أو ٤ حسب الطَّريق.",
                    "en": "Around 3 or 4 shekels depending on the route."
                },
                {
                    "speaker": "Malek",
                    "ar": "لو ما كان معي فِكَّة؟",
                    "en": "What if I don’t have change?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "السّوّاق بِصَرْف، بس أَحْسَن تْكُون جاهِز.",
                    "en": "The driver can give change, but it’s better to be prepared."
                },
                {
                    "speaker": "Malek",
                    "ar": "في مواعيد مُعَيَّنة لِلوَصول والرَّواح؟",
                    "en": "Are there specific timings for going and returning?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "الباصات بِتِمشي كُلّ رُبع ساعَة تقريبًا، خُصوصًا الصُّبح.",
                    "en": "Buses run about every 15 minutes, especially in the morning."
                },
                {
                    "speaker": "Malek",
                    "ar": "مُمْكِن أتأخّر لو طُلع مَليان؟",
                    "en": "Can I get delayed if the bus is full?"
                },
                {
                    "speaker": "Rasha",
                    "ar": "إي، بِصير كتير. أحيانًا لازم تِسْتَنّى اللي بعدُه.",
                    "en": "Yes, often. Sometimes you have to wait for the next one."
                },
                {
                    "speaker": "Malek",
                    "ar": "تمام فهمت عليكي.",
                    "en": "Okay, I understand."
                },
                {
                    "speaker": "Rasha",
                    "ar": "إذا بِدّك، أنا كمان بروح عالجامْعَة، بقدَر أخُدَك معي اليوم.",
                    "en": "If you want, I also go to the university, I can take you with me today."
                },
                {
                    "speaker": "Malek",
                    "ar": "والله تِسْلَمي! عنجد ساعدتيني.",
                    "en": "Wow thank you! You really helped me."
                },
                {
                    "speaker": "Rasha",
                    "ar": "وَلا يِهِمّك، وَصَلْنا! خلّينا نروح سَوّاً.",
                    "en": "You’re welcome, come on! Let’s go together."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "barkab_banzel",
                title: "«بَرْكَب» و«بَنْزِل» – get on vs get off",
                description:
                    "Two key everyday verbs:\n\n" +
                    "• بَرْكَب = I ride / I get on (a vehicle)\n" +
                    "  – بَرْكَب تَكْسِي = I take a taxi.\n" +
                    "  – بَرْكَب بُصّ كُلّ يَوْم = I take the bus every day.\n\n" +
                    "• بَنْزِل = I get off / I go down\n" +
                    "  – بَنْزِل مِن السِّرْفِيس قُدَّام الْجَامْعَة.\n" +
                    "  – بَنْزِل عِنْد الإِشَارَة التَّانِيَة.\n\n" +
                    "Think of them as a pair:\n" +
                    "• بَرْكَب مِن هُون، بَنْزِل هُنَاك. = I get on here, I get off there.",
            },
            {
                id: "bawsal_bEta2akhar",
                title: "«بَوْصَل» و«بِتْأَخَّر» – arriving and being late",
                description:
                    "Two high-frequency verbs related to time:\n\n" +
                    "• بَوْصَل = I arrive / I reach\n" +
                    "  – بَوْصَل عَلَى الْبَيْت السَّاعَة خَمْسَة. = I arrive home at five.\n" +
                    "  – بَوْصَل بَكِّير = I arrive early.\n\n" +
                    "• بِتْأَخَّر = I get late / I am late\n" +
                    "  – دَايْمًا بِتْأَخَّر لَمَّا فِي زَحْمَة. = I’m always late when there is traffic.\n\n" +
                    "You can combine them with time expressions from previous units:\n" +
                    "• بَوْصَل الصُّبِح بَكِّير، مَا بِتْأَخَّر عَلَى الشُّغُل. = I arrive early in the morning; I’m not late for work.",
            },
            {
                id: "how_long_how_much",
                title: "«قَدِّيش بِيِأَخُد وَقْت؟» و«بِكَم؟»",
                description:
                    "Two super useful chunks:\n\n" +
                    "1) Duration – قَدِّيش بِيِأَخُد وَقْت؟ = How long does it take?\n" +
                    "   – قَدِّيش بِيِأَخُد وَقْت مِن الْبَيْت عَلَى الْمَدْرَسَة؟\n" +
                    "   – بِيِأَخُد حَوَالِي نُصّ سَاعَة.\n\n" +
                    "2) Price – بِكَم…؟ = How much…?\n" +
                    "   – بِكَم التَّكْسِي مِن هُون عَلَى الْمَرْكَز؟\n" +
                    "   – بِكَم السِّرْفِيس لِلشَّخْص؟\n\n" +
                    "These two questions are enough for most real-life situations with transport in the city.",
            },
            {
                id: "walk_vs_transport",
                title: "Walking vs taking transport: «بَمْشِي» و«بَرْكَب»",
                description:
                    "Contrast between walking and using transport:\n\n" +
                    "• بَمْشِي = I walk\n" +
                    "  – لَمَّا الْمَسَافَة قَرِيبَة بَمْشِي. = When the distance is short, I walk.\n\n" +
                    "• بَرْكَب = I ride / I take transport\n" +
                    "  – لَمَّا الْمَسَافَة بَعِيدَة بَرْكَب بُصّ. = When the distance is far, I take a bus.\n\n" +
                    "You can combine with frequency words:\n" +
                    "• أَحْيَانًا بَمْشِي، أَحْيَانًا بَرْكَب سِرْفِيس. = Sometimes I walk, sometimes I take a service.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "trans_q1",
                    questionAr: "«بَرْكَب سِرْفِيس مِن الْحَارَة لِلْوَسَط» مَعْنَاهَا:",
                    optionsEn: [
                        "I walk from the neighborhood to the center.",
                        "I take a shared taxi from the neighborhood to the center.",
                        "I drive my car from the neighborhood to the center.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "trans_q2",
                    questionAr: "«فِي زَحْمَة فِي الشَّارِع» مَعْنَاهَا:",
                    optionsEn: [
                        "The street is empty.",
                        "There is a traffic jam in the street.",
                        "The street is closed.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "trans_q3",
                    questionAr: "أَيّ تَعْبِير تِسْتَخْدِمْه لِـ ‘How much is the taxi?’؟",
                    optionsEn: [
                        "قَدِّيش بِيِأَخُد وَقْت؟",
                        "بِكَم التَّكْسِي؟",
                        "فِي خَطّ مُبَاشِر؟",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "trans_q4",
                    questionAr: "«بَوْصَل بَكِّير» مَعْنَاهَا:",
                    optionsEn: [
                        "I arrive early.",
                        "I arrive late.",
                        "I get off the bus.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "trans_q5",
                    questionAr: "أَيّ كَلِمَة مَعْنَاهَا ‘bus’ فِي اللّهْجَة الْفِلَسْطِينِيَّة؟",
                    optionsEn: [
                        "بُصّ",
                        "سِرْفِيس",
                        "مَطْعَم",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Student A is a visitor in Gaza; Student B is a local friend. The visitor asks how to go from their house to the university using public transport. Use questions like «كِيف بَقْدَر أَرُوح عَلَى…؟», «قَدِّيش بِيِأَخُد وَقْت؟», «فِي خَطّ مُبَاشِر؟».",
                "Role-play 2: Café conversation about traffic. Two friends complain about «زَحْمَة» in the morning, who is often late, and which is better: walking or taking a bus/ service. They should use «بِتْأَخَّر»، «بَمْشِي»، «بَرْكَب»، and time words from the Daily Routine unit.",
                "Role-play 3: Service / taxi scene. Student A is the driver, Student B and C are passengers. They ask about price, place to get off, and time: «بِكَم التَّكْسِي؟», «بَنْزِل قُدَّام…», «قَدِّيش بِيِأَخُد وَقْت؟». Then switch roles.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second description in Palestinian Arabic about how you usually move around in your city. Include:\n" +
                "• At least 3 types of transport (for example: تَكْسِي، سِرْفِيس، بُصّ، سَيَّارَة، مَشْي).\n" +
                "• At least 3 movement verbs (for example: بَرْكَب، بَنْزِل، بَوْصَل، بِتْأَخَّر، بَمْشِي).\n" +
                "• One or two questions you would ask a driver or a local person (for example: «بِكَم التَّكْسِي؟», «قَدِّيش بِيِأَخُد وَقْت؟»).\n" +
                "Try to tell it like a story: from leaving the house until you arrive at your destination.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start in English: ask the student how they usually go to work/school in their city (car, bus, metro, walking), then map the answers into Arabic words.",
                "Draw a simple map (home → station → university) and elicit basic verbs in Arabic: ‘go’, ‘take’, ‘arrive’, ‘get off’.",
                "Ask if they have something similar to Palestinian ‘service’ in their country and explain what سِرْفِيس is.",
            ],
            vocabularySteps: [
                "Introduce transport types in a group (taxi, service, bus, car, walking) with simple icons or gestures.",
                "Teach movement verbs in pairs: بَرْكَب / بَنْزِل, بَوْصَل / بِتْأَخَّر, بَمْشِي / بَرْكَب, and practice them with arrows on the map.",
                "Use mini-drills with chunks like «بِكَم التَّكْسِي؟», «قَدِّيش بِيِأَخُد وَقْت؟» so they become automatic.",
            ],
            dialogueSteps: [
                "Act the big dialogue as a story first, then replay it as a role-play between you and the student.",
                "Pause and ask comprehension questions in English then gradually in Arabic (for example: «مِن وَيْن لَوَيْن؟», «كِيف رَاحُوا؟»).",
                "Encourage the student to change details (different city, different time, different price) while keeping the same basic structure.",
            ],
            practiceTips: [
                "Focus correction on key transport words and on the chunks for time and price, not on every grammar detail.",
                "If the student travels a lot, ask them to describe a real trip they took; if not, let them invent a ‘dream trip’ in Palestine.",
                "Use Google Maps or a simple drawn map to practice asking and giving directions using the new vocabulary.",
            ],
            wrapup: [
                "Summarise the student’s typical route in Arabic, slightly upgrading their language to give a strong model.",
                "Ask them which they prefer in general: walking or taking transport, and why, using «بِفَضَّل… عَنْ…» from the Food & Drink unit.",
                "Remind them of the homework and suggest they imagine they are explaining their route to a Palestinian taxi driver.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_WORK_STUDY]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Work & Study",
            lessonTitle: "Unit 6 – Work & Study in Palestinian Arabic",
        },

        overview: {
            title: "Unit 6 – Work & Study",
            description:
                "In this unit, students learn how to talk about their studies, their job (or future job), university or school life, subjects, exams, projects, and weekly schedule in Palestinian Arabic. The focus is on high-frequency verbs like ‘study, learn, work, teach, understand, finish’ and real-life dialogues between students and teachers.",
            goals: [
                "Talk about what and where they study using natural Palestinian Arabic chunks.",
                "Describe their job or future job, and part-time or online work.",
                "Use key verbs like: أَدْرُس، أَتْعَلَّم، أَشْتِغِل، أُدَرِّس، أَفْهَم، أَنْجَح.",
                "Ask and answer questions about timetable, classes, exams, and projects.",
                "Connect work & study with daily routine, time, and transportation from previous units.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== STUDENTS, PEOPLE & PLACES =====
                {
                    id: "taleb",
                    ar: "طالِب / طالْبِة",
                    en: "student (m/f)",
                    enArabeezy: "Taleb / Talbe",
                    hint: "Person who studies at school or university.",
                    exampleAr: "أنا طالْبَة جامْعِيّة.",
                    exampleEn: "I am a university student.",
                },
                {
                    id: "madraseh",
                    ar: "مَدْرَسَة",
                    en: "school",
                    enArabeezy: "madraseh",
                    hint:
                        "Plural: مَدَارِس. ‘My school’ = مَدْرَسْتِي. Used for primary / secondary school.",
                    exampleAr:
                        "أَخُوي لِسَّا فِي الْمَدْرَسَة، بْيِدْرُس صَفّ تَّاسِع.",
                    exampleEn: "My brother is still in school; he studies in ninth grade.",
                },
                {
                    id: "jame3a",
                    ar: "جَامْعَة",
                    en: "university",
                    enArabeezy: "jame3a",
                    hint:
                        "Plural: جَامْعَات. ‘My university’ = جَامْعْتِي. You can add the city name.",
                    exampleAr: "أَنَا بَدْرُس فِي جَامْعَة غَزَّة.",
                    exampleEn: "I study at Gaza University.",
                },
                {
                    id: "qism",
                    ar: "قِسْم",
                    en: "department",
                    enArabeezy: "qism",
                    hint:
                        "Plural: أَقْسَام. قِسْم الْهَنْدَسَة، قِسْم اللُّغَات، قِسْم الْحَاسُوب.",
                    exampleAr: "أَنَا فِي قِسْم الْهَنْدَسَة الْكَهْرَبَائِيَّة.",
                    exampleEn: "I am in the electrical engineering department.",
                },
                {
                    id: "maktab",
                    ar: "مَكْتَب",
                    en: "office / desk",
                    enArabeezy: "maktab",
                    hint: "Office at work or a desk.",
                    exampleAr: "بِشْتِغِل في مَكْتَب صْغير بِالشِّرْكَة.",
                    exampleEn: "I work in a small office at the company.",
                },
                {
                    id: "sherkeh",
                    ar: "شِرْكَة",
                    en: "company",
                    enArabeezy: "sherkeh",
                    hint: "Workplace, company.",
                    exampleAr: "أَبوي بِشْتِغِل في شِرْكَة خُصوصِيّة.",
                    exampleEn: "My father works in a private company.",
                },
                {
                    id: "mu3allem",
                    ar: "مُعَلِّم / مُعَلِّمَة",
                    en: "teacher (m/f)",
                    enArabeezy: "mu3allem / mu3allmeh",
                    hint:
                        "Spoken synonym of أُسْتَاذ. Used for school / institute teachers.",
                    exampleAr: "مُعَلِّمَة الرِّيَاضِيَّات كْتِير شَاطْرَة.",
                    exampleEn: "The math teacher is very good.",
                },
                {
                    id: "zamil",
                    ar: "زْمِيل / زْمِيلَة",
                    en: "classmate / colleague (m/f)",
                    enArabeezy: "zmiil / zmileh",
                    hint:
                        "Plural: زْمَلَا. Used for study or work colleagues.",
                    exampleAr:
                        "زْميلي في الشُّغُل بيساعِدْني كْثير.",
                    exampleEn: "My colleague at work helps me a lot.",
                },
                {
                    id: "mudir",
                    ar: "مُدِير / مُدِيرَة",
                    en: "manager / director",
                    enArabeezy: "mudiir / mudiireh",
                    hint: "Used in work or school context. Plural: مُدَرَا.",
                    exampleAr:
                        "مُدِير الشُّغُل عِنْدُه اِجْتِمَاع كُلّ يَوْم إِثْنَيْن.",
                    exampleEn:
                        "The manager at work has a meeting every Monday.",
                },
                {
                    id: "muwazzaf",
                    ar: "مُوَظَّف / مُوَظَّفِة",
                    en: "employee (m/f)",
                    enArabeezy: "muwazzaf / muwazzafeh",
                    hint: "Person who works in an office, bank, company, etc.",
                    exampleAr: "أُخوي مُوَظَّف في بَنْك.",
                    exampleEn: "My brother is an employee in a bank.",
                },
                {
                    id: "mohandes",
                    ar: "مُهَنْدِس / مُهَنْدِسَة",
                    en: "engineer (m/f)",
                    enArabeezy: "mohandes / mohandeseh",
                    hint: "Profession (software, civil, electrical…).",
                    exampleAr:
                        "بِدْرُس عَشان أَصير مُهَنْدِسَة بَرْمَجِيّات.",
                    exampleEn: "I study so I can become a software engineer.",
                },
                {
                    id: "mumarriD",
                    ar: "مُمَرِّض / مُمَرِّضَة",
                    en: "nurse (m/f)",
                    enArabeezy: "mumarriD / mumarriDa",
                    hint: "Health profession.",
                    exampleAr: "أُختي مُمَرِّضَة في مُسْتَشْفَى.",
                    exampleEn: "My sister is a nurse in a hospital.",
                },

                // ===== STUDY TOOLS & ACADEMIC THINGS =====
                {
                    id: "daftar",
                    ar: "دَفْتَر",
                    en: "notebook",
                    enArabeezy: "daftar",
                    hint: "Plural: دَفَاتِر. ‘My notebook’ = دَفْتَرِي.",
                    exampleAr:
                        "بَكْتُب مْلَاحَظَات فِي دَفْتَر خَاصّ لِكُلّ مَادَّة.",
                    exampleEn:
                        "I write notes in a special notebook for each subject.",
                },
                {
                    id: "qalam",
                    ar: "قَلَم",
                    en: "pen",
                    enArabeezy: "qalam",
                    hint:
                        "Plural: أَقْلَام. قَلَم رَصَاص = pencil, قَلَم حِبْر = ink pen.",
                    exampleAr: "دَايْمًا بَنْسَى قَلَمِي فِي الْقَاعَة.",
                    exampleEn: "I always forget my pen in the classroom.",
                },
                {
                    id: "kumbyuter",
                    ar: "كُمْبْيُوتِر / لَابْتُوب",
                    en: "computer / laptop",
                    enArabeezy: "kombyuter / laptop",
                    hint: "Used a lot for online study and work.",
                    exampleAr:
                        "بَدْرُس وَبَشْتِغِل أُونْلَايْن عَلَى اللَّابْتُوب.",
                    exampleEn: "I study and work online on the laptop.",
                },
                {
                    id: "mawdoo3",
                    ar: "مَوْضُوع",
                    en: "topic / subject (theme)",
                    enArabeezy: "mawDoo3",
                    hint:
                        "Plural: مَوَاضِيع. Used for essay topics, project topics, etc.",
                    exampleAr:
                        "الْيَوْم مَوْضُوع الدَّرْس هُوَّ الشُّغُل وَالدِّرَاسَة.",
                    exampleEn: "Today the lesson topic is work and study.",
                },
                {
                    id: "mawadd",
                    ar: "مَوَادّ",
                    en: "subjects (school/university)",
                    enArabeezy: "mawaadd",
                    hint:
                        "Plural word already. Singular مَادَّة = one subject / course.",
                    exampleAr: "عِنْدِي تَلَات مَوَادّ هَالْسِّمِسْتِر.",
                    exampleEn: "I have three subjects this semester.",
                },
                {
                    id: "imti7an",
                    ar: "اِمْتِحَان",
                    en: "exam / test",
                    enArabeezy: "imti7an",
                    hint:
                        "Plural: اِمْتِحَانَات. ‘final exam’ = اِمْتِحَان نِهَائِي.",
                    exampleAr: "الأُسْبوع الْجَاي عِنْدِي اِمْتِحَان مُهِمّ.",
                    exampleEn: "Next week I have an important exam.",
                },
                {
                    id: "wajeb",
                    ar: "وَاجِب",
                    en: "homework / assignment",
                    enArabeezy: "wajeb",
                    hint:
                        "Plural: وَاجْبَات. In spoken Arabic ‘homework’ is usually وَاجِب.",
                    exampleAr:
                        "الأُسْتَاذ بْيِعْطِينَا وَاجِب بَعْد كُلّ دَرْس.",
                    exampleEn: "The teacher gives us homework after every lesson.",
                },
                {
                    id: "mashroo3",
                    ar: "مَشْرُوع",
                    en: "project",
                    enArabeezy: "mashroo3",
                    hint:
                        "Plural: مَشَارِيع. مَشْرُوع تَّخَرُّج = graduation project.",
                    exampleAr:
                        "هَادَا أَوَّل مَشْرُوع بَسَوِّيه فِي الْجَامْعَة.",
                    exampleEn: "This is the first project I do at university.",
                },
                {
                    id: "mu7adara",
                    ar: "مُحاضَرَة",
                    en: "lecture / class session",
                    enArabeezy: "mu7aDara",
                    hint: "University / college lesson.",
                    exampleAr: "عندي مُحاضَرَة ساعَتَيْن اليوم.",
                    exampleEn: "I have a two-hour lecture today.",
                },
                {
                    id: "istira7a",
                    ar: "اِسْتِراحَة",
                    en: "break",
                    enArabeezy: "istira7a",
                    hint: "Pause from work or class.",
                    exampleAr:
                        "بِنْخُد اِسْتِراحَة صْغيرَة بَين المُحاضَرات.",
                    exampleEn: "We take a short break between the lectures.",
                },

                // ===== WORK & JOB WORDS =====
                {
                    id: "shoghol",
                    ar: "شُغُل",
                    en: "work / job",
                    enArabeezy: "shoghol",
                    hint:
                        "Can mean ‘work’ in general or a job. ‘I have work’: عِنْدِي شُغُل.",
                    exampleAr:
                        "بَشْتِغِل وَبَدْرُس فِي نَفْس الْوَقْت، عِنْدِي شُغُل جُزْئِي.",
                    exampleEn:
                        "I work and study at the same time; I have a part-time job.",
                },
                {
                    id: "wazifeh",
                    ar: "وَظِيفَة",
                    en: "job / position",
                    enArabeezy: "waZiifeh",
                    hint:
                        "Plural: وَظَايِف. More formal than شُغُل.",
                    exampleAr:
                        "الْكُلّ بِيِدَوِّر عَلَى وَظِيفَة مُنَاسْبَة بَعْد التَّخَرُّج.",
                    exampleEn:
                        "Everyone looks for a suitable job after graduation.",
                },
                {
                    id: "duwam",
                    ar: "دْوَام / دَوام",
                    en: "working hours / shift",
                    enArabeezy: "dawam",
                    hint: "دْوَام صَبَاحِي، دْوَام كَامِل، دْوَام جُزْئِي.",
                    exampleAr:
                        "دْوَام الشُّغُل مِن السَّاعَة تَمْنْيَة لِلسَّاعَة أَرْبَعَة.",
                    exampleEn: "Working hours are from eight to four.",
                },
                {
                    id: "dawam_kamel",
                    ar: "بِدَوَّام كامِل",
                    en: "full-time",
                    enArabeezy: "bidawwam_kamel",
                    hint: "Full-time work or study schedule.",
                    exampleAr: "أَبوي بِشْتِغِل بِدَوَّام كامِل.",
                    exampleEn: "My father works full-time.",
                },
                {
                    id: "dawam_joz2i",
                    ar: "دَوام جُزْئِي",
                    en: "part-time",
                    enArabeezy: "dawam_joz2i",
                    hint: "Part-time work or job.",
                    exampleAr: "أنا طالِب وبَشْتِغِل دَوام جُزْئِي.",
                    exampleEn: "I’m a student and I work part-time.",
                },

                // ===== STUDY & WORK VERBS =====
                {
                    id: "badros",
                    ar: "بَدْرُس",
                    en: "I study",
                    enArabeezy: "badros",
                    hint:
                        "From دَرَس = to study. Used with subject or field: بَدْرُس عَرَبِي / هَنْدَسَة / طِبّ.",
                    exampleAr: "بَدْرُس حَاسُوب فِي الْجَامْعَة.",
                    exampleEn: "I study computer science at university.",
                },
                {
                    id: "yidros",
                    ar: "يِدْرُس",
                    en: "to study",
                    enArabeezy: "yidros",
                    hint: "Dictionary verb form ‘to study’.",
                    exampleAr: "بَدْرُس كُمْبْيُوتِر سايِنْس.",
                    exampleEn: "I study computer science.",
                },
                {
                    id: "bat3allam",
                    ar: "بَتْعَلَّم",
                    en: "I learn",
                    enArabeezy: "bat3allam",
                    hint:
                        "From تَعَلَّم = to learn. More general than ‘study’.",
                    exampleAr:
                        "بَتْعَلَّم اللُّغَة الْعَرَبِيَّة وَاللُّغَة الإِنْجْلِيزِيَّة.",
                    exampleEn: "I am learning Arabic and English.",
                },
                {
                    id: "bas2al",
                    ar: "بَسْأَل",
                    en: "I ask (a question)",
                    enArabeezy: "bas2al",
                    hint:
                        "From سَأَل = to ask. Used a lot in class: بَسْأَل الأُسْتَاذ.",
                    exampleAr: "لَمَّا مَا أَفْهَم بَسْأَل الأُسْتَاذ.",
                    exampleEn: "When I don’t understand, I ask the teacher.",
                },
                {
                    id: "bafham",
                    ar: "بَفْهَم",
                    en: "I understand",
                    enArabeezy: "bafham",
                    hint:
                        "From فَهِم = to understand. Negative: مَا بَفْهَم.",
                    exampleAr:
                        "أَحْيَانًا بَفْهَم الدَّرْس، أَحْيَانًا بَحْتَاج تِّكْرَار.",
                    exampleEn:
                        "Sometimes I understand the lesson, sometimes I need repetition.",
                },
                {
                    id: "bakammel",
                    ar: "بَكَمِّل",
                    en: "I continue / I complete",
                    enArabeezy: "bakammel",
                    hint: "Chunk: بَكَمِّل دِرَاسَة، بَكَمِّل مَشْرُوع.",
                    exampleAr:
                        "بَكَمِّل مُسْتَوَى أَوَّل فِي اللُّغَة الْفِلَسْطِينِيَّة.",
                    exampleEn: "I am completing level one in Palestinian Arabic.",
                },
                {
                    id: "banja7",
                    ar: "بَنْجَح",
                    en: "I pass / I succeed",
                    enArabeezy: "banja7",
                    hint:
                        "Used with exams/subjects. Opposite: بَرْسُب = I fail.",
                    exampleAr: "بَنْجَح فِي الاِمْتِحَان إِذَا بَدْرُس مْنِيح.",
                    exampleEn: "I pass the exam if I study well.",
                },
                {
                    id: "barsob",
                    ar: "بَرْسُب",
                    en: "I fail (a subject / exam)",
                    enArabeezy: "barsob",
                    hint: "From رَسَب = to fail. Sensitive word, use carefully.",
                    exampleAr:
                        "مَا بَدِّي أَرْسُب، عَشَان هَيْك بَدْرُس كْتِير.",
                    exampleEn: "I don’t want to fail, so I study a lot.",
                },
                {
                    id: "bashteghil",
                    ar: "بَشْتِغِل",
                    en: "I work",
                    enArabeezy: "bashteghil",
                    hint:
                        "Spoken verb for ‘work’. Add where or how: بَشْتِغِل أُونْلَايْن، بَشْتِغِل فِي مَكْتَب.",
                    exampleAr:
                        "بَشْتِغِل مُدَرِّسَة جُزْئِيّ وَبَدْرُس كَمَان.",
                    exampleEn: "I work part-time as a teacher and study as well.",
                },
                {
                    id: "yishtaghel",
                    ar: "يِشْتِغِل",
                    en: "to work",
                    enArabeezy: "yishtaghel",
                    hint: "Dictionary verb form ‘to work’.",
                    exampleAr: "بَشْتِغِل جُزْئِي بَعْد الجامْعَة.",
                    exampleEn: "I work part-time after university.",
                },
                {
                    id: "badarreb",
                    ar: "بَدَرِّب",
                    en: "I train / I give training",
                    enArabeezy: "badarreb",
                    hint:
                        "From دَرَّب = to train. For giving courses/workshops.",
                    exampleAr:
                        "بَدَرِّب طُلَّاب أَجَانِب عَلَى اللُّغَة الْفِلَسْطِينِيَّة.",
                    exampleEn:
                        "I train foreign students in Palestinian Arabic.",
                },
                {
                    id: "badarris",
                    ar: "بَدَرِّس",
                    en: "I teach",
                    enArabeezy: "badarris",
                    hint:
                        "From دَرَّس = to teach. Teacher speaking about their job.",
                    exampleAr:
                        "أَنَا بَدَرِّس عَرَبِي لِطُلَّاب مِن دُوَل مُخْتَلِفَة.",
                    exampleEn:
                        "I teach Arabic to students from different countries.",
                },
                {
                    id: "yitkharraj",
                    ar: "يِتْخَرَّج",
                    en: "to graduate",
                    enArabeezy: "yitkharraj",
                    hint: "Finish university or school.",
                    exampleAr: "بَدّي أِتْخَرَّج السَّنِة الجاي.",
                    exampleEn: "I want to graduate next year.",
                },
            ],

            extra: [
                {
                    id: "youm_dirasah",
                    ar: "يَوْم دِرَاسَة",
                    en: "school / study day",
                    enArabeezy: "youm_diraseh",
                    hint: "Opposite: يَوْم إِجَازَة = day off.",
                    exampleAr: "الْخَمِيس عِنْدْنَا يَوْم دِرَاسَة طَوِيل.",
                    exampleEn: "On Thursday we have a long study day.",
                },
                {
                    id: "sabt_lakhmis",
                    ar: "مِن السَّبْت لِلْخَمِيس",
                    en: "from Saturday to Thursday",
                    enArabeezy: "min_issabt_lil5amiis",
                    hint:
                        "Typical study/work week in many Arab countries.",
                    exampleAr:
                        "بَدْرُس مِن السَّبْت لِلْخَمِيس وَالجُمُعَة إِجَازَة.",
                    exampleEn:
                        "I study from Saturday to Thursday and Friday is off.",
                },
                {
                    id: "mu3adal",
                    ar: "مُعَدَّل",
                    en: "average / GPA",
                    enArabeezy: "mu3addal",
                    hint: "Study context: مُعَدَّل عَالِي / مُنْخَفِض.",
                    exampleAr:
                        "بَدِّي مُعَدَّل عَالِي عَشَان أَلْقَى وَظِيفَة أَحْسَن.",
                    exampleEn:
                        "I want a high GPA so I can find a better job.",
                },
                {
                    id: "mahameh",
                    ar: "مَهَمّة",
                    en: "task",
                    enArabeezy: "mahameh",
                    hint: "Task at work or for a project.",
                    exampleAr:
                        "كُل يَوم المُدير بِعْطيهِم مَهَمّات جْديدة.",
                    exampleEn:
                        "Every day the manager gives them new tasks.",
                },
                {
                    id: "maw3ed",
                    ar: "مَوعِد",
                    en: "appointment / deadline",
                    enArabeezy: "maw3ed",
                    hint: "Time for a meeting or for submitting something.",
                    exampleAr: "مَوعِد تَسْليم المَشْروع بُكْرَة.",
                    exampleEn:
                        "The deadline for submitting the project is tomorrow.",
                },
                {
                    id: "lazem",
                    ar: "لازِم",
                    en: "must / have to",
                    enArabeezy: "lazem",
                    hint: "Used to express obligation.",
                    exampleAr:
                        "لازِم أَدْرُس كْثير لِلْاِمْتِحان.",
                    exampleEn: "I must study a lot for the exam.",
                },
                {
                    id: "ma_ba2dar",
                    ar: "ما بَقْدَر",
                    en: "I can’t / I’m not able",
                    enArabeezy: "ma_ba2dar",
                    hint:
                        "Used when you don’t have time, energy, or possibility.",
                    exampleAr:
                        "ما بَقْدَر أِطْلَع اليوم، عندي شُغُل.",
                    exampleEn: "I can’t go out today, I have work.",
                },
                {
                    id: "wa2t_faDi",
                    ar: "وَقْت فاضي",
                    en: "free time",
                    enArabeezy: "wa2t_faDi",
                    hint: "Time without work or study.",
                    exampleAr: "ما عِنْدي وَقْت فاضي اليوم.",
                    exampleEn: "I have no free time today.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE (class + project + work + future)
        // ====================================
        "dialogue": {
            "lines": [
                {
                    "speaker": "Majd",
                    "ar": "صَباح الخير يا سارة، كِيف دَوامِك اليوم؟",
                    "en": "Good morning, Sara, how is your schedule today?"
                },
                {
                    "speaker": "Sara",
                    "ar": "صَباح النّور يا مَجْد، دَوامي مَجْنون! عندي جامْعَة وَشُغُل.",
                    "en": "Good morning, Majd, my schedule is crazy! I have university and work."
                },
                {
                    "speaker": "Majd",
                    "ar": "جَدّ؟ وين بَشْتِغِلي؟",
                    "en": "Really? Where do you work?"
                },
                {
                    "speaker": "Sara",
                    "ar": "بَشْتِغِل دَوام جُزْئِي في مَكْتَب بِشِرْكَة صْغيرَة.",
                    "en": "I work part-time in an office at a small company."
                },
                {
                    "speaker": "Majd",
                    "ar": "وَقت قَدّيش الدَّوام؟",
                    "en": "How long are your work hours?"
                },
                {
                    "speaker": "Sara",
                    "ar": "مِن التّْنين لَلخَميس، مِن السّاعَة تْنين لَلْخَمْسَة.",
                    "en": "From Monday to Thursday, from two o’clock to five."
                },
                {
                    "speaker": "Majd",
                    "ar": "وطَبْعًا قبل هيك عَندِك مُحاضَرات بِالجامْعَة؟",
                    "en": "And of course before that you have lectures at the university?"
                },
                {
                    "speaker": "Sara",
                    "ar": "إي، الصُّبِح بَدْرُس، وبَعْدين بَروح عَالشُّغُل.",
                    "en": "Yes, in the morning I study, and then I go to work."
                },
                {
                    "speaker": "Majd",
                    "ar": "ما بِتْحِسّ إنّو ما عِنْدِك وَقْت فاضي؟",
                    "en": "Don’t you feel like you have no free time?"
                },
                {
                    "speaker": "Sara",
                    "ar": "صِراحَةً، نادِرًا بْلاقي وَقْت فاضي. لاِزِم أَدْرُس لِلْمَشْروع وِلْاِمْتِحانات كْمان.",
                    "en": "Honestly, I rarely find free time. I have to study for the project and for exams too."
                },
                {
                    "speaker": "Majd",
                    "ar": "وشُو مَجال الشُّغُل؟",
                    "en": "And what type of work is it?"
                },
                {
                    "speaker": "Sara",
                    "ar": "مُساعَدَة إِداريّة، بَطَبِّع أَوْراق، بِرُدّ عَالتّليفون، وَبَساعِد المُوَظَّفين.",
                    "en": "Administrative assistance: I print papers, answer the phone, and help the employees."
                },
                {
                    "speaker": "Majd",
                    "ar": "بِتْحِسّ إنّو الشُّغُل بيساعِدِك بِالدِّراسَة وَلّا بِتْعَبِك أكْتَر؟",
                    "en": "Do you feel that the job helps you with your studies, or does it just tire you out more?"
                },
                {
                    "speaker": "Sara",
                    "ar": "هُوَّ مُتْعِب، بَس كْمان بَتْعَلَّم مَهارات جْديدة.",
                    "en": "It’s tiring, but I also learn new skills."
                },
                {
                    "speaker": "Majd",
                    "ar": "أنا طالِب بَس، ما بَشْتِغِل هَلَّق. بس أَحْيانًا بَفَكِّر آخُد دَوام جُزْئِي.",
                    "en": "I’m only a student, I don’t work right now. But sometimes I think about taking a part-time job."
                },
                {
                    "speaker": "Sara",
                    "ar": "إذا بَدَّك تِشْتِغِل، لازم تِنَظِّم وَقْتَك مْنيح.",
                    "en": "If you want to work, you must organize your time well."
                },
                {
                    "speaker": "Majd",
                    "ar": "عَنْ قريب عنا اِمْتِحانات، صَعِب أَفَكِّر بِشُغُل هَلَّق.",
                    "en": "We have exams soon, it’s hard to think about work now."
                },
                {
                    "speaker": "Sara",
                    "ar": "مَزْبوط، الأَهَم هَلَّق الدِّراسَة. بَعْدين بِتْدَوِّر عَشُغُل مُناسِب.",
                    "en": "True, right now the most important thing is studying. Later you look for a suitable job."
                },
                {
                    "speaker": "Majd",
                    "ar": "إنْ شاءَ الله بَعْد ما أِتْخَرَّج أَلاقِي وَظِيفَة كْوَيْسِة.",
                    "en": "Inshallah after I graduate I’ll find a good job."
                },
                {
                    "speaker": "Sara",
                    "ar": "وأنا كْمان، خَلِّينا نِرْكِز عَالدِّراسَة هَلَّق.",
                    "en": "Me too; let’s focus on the studies for now."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "badros_bat3allam",
                title: "«بَدْرُس» vs «بَتْعَلَّم» – study vs learn",
                description:
                    "In Palestinian Arabic, both verbs are common:\n\n" +
                    "• بَدْرُس = I study (more formal / school-university context)\n" +
                    "  – بَدْرُس هَنْدَسَة فِي الْجَامْعَة.\n" +
                    "  – بَدْرُس ثَلَاث مَوَادّ هَالْسِّمِسْتِر.\n\n" +
                    "• بَتْعَلَّم = I learn (more general, includes self-study)\n" +
                    "  – بَتْعَلَّم فِلَسْطِينِي أُونْلَايْن.\n" +
                    "  – بَتْعَلَّم إِيطَالِيّ لِحَالِي.\n\n" +
                    "You can combine them:\n" +
                    "• بَدْرُس فِي الْجَامْعَة وَبَتْعَلَّم أُونْلَايْن كَمَان.\n" +
                    "  = I study at university and also learn online.",
            },
            {
                id: "andi_pattern",
                title: "Using «عِنْدِي» for ‘I have’ (exam, project, work)",
                description:
                    "Chunk «عِنْدِي» is used for ‘I have’ (possession or obligation):\n\n" +
                    "• عِنْدِي دَفْتَر جْدِيد. = I have a new notebook.\n" +
                    "• عِنْدِي اِمْتِحَان بُكْرَا. = I have an exam tomorrow.\n" +
                    "• عِنْدِي شُغُل جُزْئِيّ. = I have a part-time job.\n" +
                    "• عِنْدِي مَشْرُوع كْبِير هَالْسِّمِسْتِر. = I have a big project this semester.\n\n" +
                    "Negative:\n" +
                    "• مَا عِنْدِي وَقْت. = I don’t have time.\n" +
                    "• مَا عِنْدِي شُغُل هَلَّقْ. = I don’t have work now.",
            },
            {
                id: "future_exam",
                title: "Future with «رَح» + study context",
                description:
                    "A very common future marker is «رَح» before the verb:\n\n" +
                    "• رَح أَدْرُس بُكْرَا الصُّبِح. = I will study tomorrow morning.\n" +
                    "• رَح يِكُون عِنْدْنَا اِمْتِحَان الأُسْبُوع الْجَاي. = We will have an exam next week.\n" +
                    "• رَح أَخُد إِجَازَة بَعْد مَا أَخَلِّص مَشْرُوع. = I will take a holiday after I finish the project.\n\n" +
                    "In fast speech, ‘رَح’ can sound like ‘رَح / رَ’. For beginners, keep it clear: رَح + present verb.",
            },
            {
                id: "success_fail",
                title: "«بَنْجَح» vs «بَرْسُب» – pass vs fail",
                description:
                    "Two important verbs for exam results:\n\n" +
                    "• بَنْجَح = I pass / I succeed\n" +
                    "  – إِذَا بَدْرُس مْنِيح، بَنْجَح فِي الْمَادَّة.\n" +
                    "  – أَخُوي نَجَح فِي الْمُعَدَّل بِمُمتَاز.\n\n" +
                    "• بَرْسُب = I fail (and have to repeat)\n" +
                    "  – مَا بَدِّي أَرْسُب فِي وَلا مَادَّة.\n" +
                    "  – رَاح يِرْسُب إِذَا مَا بَيِدْرُس.\n\n" +
                    "You can connect them with ‘عَشَان’ (because):\n" +
                    "• بَنْجَح عَشَان بَدْرُس كُلّ يَوْم. = I pass because I study every day.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "ws_q1",
                    questionAr: "«بَدْرُس هَنْدَسَة فِي الْجَامْعَة» مَعْنَاهَا:",
                    optionsEn: [
                        "I teach engineering at the university.",
                        "I study engineering at the university.",
                        "I work in engineering at the university.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "ws_q2",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘exam’؟",
                    optionsEn: [
                        "مَشْرُوع",
                        "اِمْتِحَان",
                        "اِجْتِمَاع",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "ws_q3",
                    questionAr: "«عِنْدِي شُغُل جُزْئِيّ» مَعْنَاهَا:",
                    optionsEn: [
                        "I have a full-time job.",
                        "I have a part-time job.",
                        "I don’t have any job.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "ws_q4",
                    questionAr: "«بَنْجَح فِي الاِمْتِحَان إِذَا بَدْرُس مْنِيح» مَعْنَاهَا:",
                    optionsEn: [
                        "I pass the exam if I study well.",
                        "I fail the exam if I study well.",
                        "I don’t have an exam if I study well.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ws_q5",
                    questionAr: "أَيّ تَعْبِير مَعْنَاه ‘I learn Palestinian dialect online’؟",
                    optionsEn: [
                        "بَدْرُس فِلَسْطِينِي فِي الْمَدْرَسَة.",
                        "بَتْعَلَّم فِلَسْطِينِي أُونْلَايْن.",
                        "بَشْتِغِل فِلَسْطِينِي أُونْلَايْن.",
                    ],
                    correctIndex: 1,
                },
            ],

            rolePlays: [
                "Role-play 1: University introduction. Student A is the teacher; Student B is a new student. The teacher asks about name, what they study, in which university/department, and if they work as well. Student B answers using «بَدْرُس»، «بَتْعَلَّم»، «بَشْتِغِل»، and «عِنْدِي مَشْرُوع / اِمْتِحَان». Then switch roles.",
                "Role-play 2: Exam week. Two students talk about their subjects and exams: which one is easy, which one is difficult, how they study, and what they need to pass. They use «مَادَّة»، «مَوَادّ»، «اِمْتِحَان»، «بَنْجَح»، «بَرْسُب»، and time words (next week, tomorrow, today).",
                "Role-play 3: Future plans. Student A interviews Student B about their future after graduation: job they want, if they want a master’s, if they want to work online or in an office. Use «رَح» for future, «بِفَضَّل»، «وَظِيفَة»، and chunks like «بِصِدْق، بَدِّي…».",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second text in Palestinian Arabic about your work & study life. Include:\n" +
                "• What you study (or studied) and where (school / university / online).\n" +
                "• If you work now or want to work in the future (type of job / field).\n" +
                "• At least 4 study words (like: مَادَّة، مَوَادّ، اِمْتِحَان، مَشْرُوع، وَاجِب).\n" +
                "• At least 3 verbs from the unit (like: بَدْرُس، بَتْعَلَّم، بَشْتِغِل، بَفْهَم، بَنْجَح).\n" +
                "Try to tell it like a story: past (what you studied before), present (what you do now), and future (what you want to do).",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start by asking in English about the student’s real situation: Are you studying now? Working? Both? Then map the answers into Arabic using the new verbs.",
                "Write on the board two columns: STUDY and WORK. Let the student brainstorm words in English, then give or elicit the Palestinian Arabic equivalents.",
                "Ask the student about their most difficult subject and their favorite subject, then introduce the words مَادَّة / مَوَادّ / اِمْتِحَان.",
            ],
            vocabularySteps: [
                "Teach the study words in small groups: places (school, university, department), things (notebook, pen, laptop), and abstract words (exam, project, meeting).",
                "Highlight singular/plural inside the hints: مَادَّة / مَوَادّ, دَفْتَر / دَفَاتِر, اِمْتِحَان / اِمْتِحَانَات, then let the student make at least one plural sentence.",
                "Introduce the verb pairs clearly: بَدْرُس / بَتْعَلَّم, بَنْجَح / بَرْسُب, and practice with simple personalisation questions.",
            ],
            dialogueSteps: [
                "Use the dialogue as a script for real life: pause after each part and ask if it matches the student’s life or not.",
                "Let the student retell the dialogue in the first person: instead of Roba / Mark / Yara, they talk about themselves using the same structures.",
                "Encourage improvisation: change the field of study, type of job, number of subjects, but keep the grammatical frame.",
            ],
            practiceTips: [
                "Focus error correction on high-frequency chunks: «بَدْرُس»، «بَتْعَلَّم»، «عِنْدِي…»، «رَح…»، and on correct use of present vs future.",
                "When doing role-plays, allow the student to mix a bit of English if needed, but push them to keep all the key verbs and time words in Arabic.",
                "If the student has a real graduation project or job, use it as content: help them build 3–4 strong sentences they can really reuse.",
            ],
            wrapup: [
                "End the lesson by summarising the student’s work & study story in a ‘clean’ Palestinian Arabic version, so they hear a strong model of their own life.",
                "Ask the student to write 3 goals in Arabic for their study or work for the next six months using «بِدِّي» و«رَح».",
                "Remind them of the homework and suggest they imagine they are introducing themselves to a new teacher or manager in Palestine.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_HEALTH]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Health & Emergencies",
            lessonTitle: "Unit 7 – Health, Doctor & Emergencies",
        },

        overview: {
            title: "Unit 7 – Health & Emergencies",
            description:
                "In this unit, students learn how to talk about basic health problems, pain, feeling sick or tired, visiting the doctor or pharmacy, and describing simple emergencies in Palestinian Arabic. The focus is on high-frequency chunks like ‘I have a headache’, ‘It hurts here’, ‘I need a doctor’, and ‘Call an ambulance’.",
            goals: [
                "Describe basic health problems and symptoms in Palestinian Arabic.",
                "Use common verbs and chunks to say how they feel (tired, sick, in pain).",
                "Ask for help and say what they need in a clinic, hospital, or pharmacy.",
                "Handle simple emergency situations with clear, short sentences.",
                "Connect health with daily routine, work, and stress from previous units.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== GENERAL HEALTH =====
                {
                    id: "se7a",
                    ar: "صِحّة",
                    en: "health",
                    enArabeezy: "ṣiḥḥa / se77a",
                    hint:
                        "General word for health. صِحّة كْوَيْسِة = good health. Also used in toast: صَحّة! = cheers / to your health.",
                    exampleAr: "الصِّحّة أَهَمّ إِشي بِالحَياة.",
                    exampleEn: "Health is the most important thing in life.",
                },
                {
                    id: "marid",
                    ar: "مَريض / مَريضَة",
                    en: "sick person / patient (m/f)",
                    enArabeezy: "marīḍ / marīḍa",
                    hint: "Someone who is ill or a patient at the clinic or hospital.",
                    exampleAr: "المَريض لازم يِرْتاح كَم يَوم.",
                    exampleEn: "The patient needs to rest for a few days.",
                },
                {
                    id: "ta3ban",
                    ar: "تَعْبان / تَعْبانَة",
                    en: "tired, unwell (m/f)",
                    enArabeezy: "ta3bān / ta3bāna",
                    hint: "Can mean physically tired or not feeling well.",
                    exampleAr: "حاسِس حالي تَعْبان اليوم.",
                    exampleEn: "I feel unwell today.",
                },
                {
                    id: "salamtek",
                    ar: "سَلَامْتَك / سَلَامْتِك",
                    en: "get well soon",
                    enArabeezy: "salāmtak / salāmtik",
                    hint: "Masc: سَلَامْتَك, fem: سَلَامْتِك. Reply: الله يِسَلِّمَك.",
                    exampleAr: "سَلَامْتِك، إِنْ شَاءَ الله تِقُومِي بِالسَّلَامَة.",
                    exampleEn: "Get well soon, may you recover safely.",
                },

                // ===== PLACES & PEOPLE =====
                {
                    id: "mustashfa",
                    ar: "مُسْتَشْفَى",
                    en: "hospital",
                    enArabeezy: "mustashfa",
                    hint:
                        "Plural: مُسْتَشْفَيَات. Used for serious health problems or emergencies.",
                    exampleAr: "خَدّوه عَالمُسْتَشْفَى بَعْد الحادِث.",
                    exampleEn: "They took him to the hospital after the accident.",
                },
                {
                    id: "3yadeh",
                    ar: "عِيادَة",
                    en: "clinic / doctor’s office",
                    enArabeezy: "ʿiyādeh / 3yādeh",
                    hint:
                        "Smaller than a hospital. عِيادَة جِدْول = small clinic; عِيادَة جامْعِيّة = university clinic.",
                    exampleAr: "في عِيادَة جامْعِيّة جَوّا الجامْعَة.",
                    exampleEn: "There is a university clinic inside the campus.",
                },
                {
                    id: "saydaliyyeh",
                    ar: "صَيْدَلِيّة",
                    en: "pharmacy",
                    enArabeezy: "ṣaydaliyyeh / saydaliyyeh",
                    hint: "Place where you buy medicine. Plural: صَيْدَلِيّات.",
                    exampleAr: "لازِم نَمُرّ عَالصَّيْدَلِيّة نِشْتِري دَوا.",
                    exampleEn: "We need to pass by the pharmacy to buy medicine.",
                },
                {
                    id: "doktor",
                    ar: "دْكتور / دْكتورَة",
                    en: "doctor (m/f)",
                    enArabeezy: "doktōr / doktōra",
                    hint: "Medical doctor. Very common word in speech.",
                    exampleAr: "الدْكتور حَكى إنّو مِش شِي خَطير.",
                    exampleEn: "The doctor said it’s nothing serious.",
                },
                {
                    id: "mumarred",
                    ar: "مُمَرِّض / مُمَرِّضَة",
                    en: "nurse (m/f)",
                    enArabeezy: "mumarreḍ / mumarreḍa",
                    hint: "Nurse in hospital or clinic. Plural: مُمَرِّضِين.",
                    exampleAr: "المُمَرِّضَة أَخَدِت الضَّغِط.",
                    exampleEn: "The nurse took the blood pressure.",
                },
                {
                    id: "is3af",
                    ar: "إِسْعاف",
                    en: "ambulance / first aid",
                    enArabeezy: "isʿāf / is3āf",
                    hint:
                        "Can mean ambulance car or emergency medical help. يِتَّصِل عَالإِسْعاف = call an ambulance.",
                    exampleAr: "اتَّصِل بالإِسْعاف إذا الحَالِة خَطيرَة.",
                    exampleEn: "Call an ambulance if the situation is serious.",
                },
                {
                    id: "qism_taware2",
                    ar: "قِسْم طَوارِئ",
                    en: "emergency room",
                    enArabeezy: "ʾism ṭawāreʾ / qism tawāre2",
                    hint: "Emergency department in a hospital.",
                    exampleAr: "وَدّوه عَـقِسْم طَوارِئ بَسِرْعَة.",
                    exampleEn: "They took him quickly to the emergency room.",
                },

                // ===== MEDICINE & TREATMENT =====
                {
                    id: "dawa",
                    ar: "دَوا",
                    en: "medicine",
                    enArabeezy: "dawa",
                    hint: "General word for medicine. Plural: أَدْوِيَة.",
                    exampleAr: "بِأخُد الدَّوا مَرّتين في اليوم.",
                    exampleEn: "I take the medicine twice a day.",
                },
                {
                    id: "7abbeh",
                    ar: "حَبّة",
                    en: "pill / tablet",
                    enArabeezy: "ḥabbeh / habbeh",
                    hint: "One pill or tablet of medicine.",
                    exampleAr: "خُد حَبّة بَعْد الأَكِل.",
                    exampleEn: "Take a pill after food.",
                },
                {
                    id: "ibra",
                    ar: "إِبْرَة",
                    en: "injection / shot",
                    enArabeezy: "ʾibra / ibra",
                    hint: "Needle injection.",
                    exampleAr: "مُمْكِن تَأْخُد إِبْرَة لِتِنْزيل الحَرارَة.",
                    exampleEn: "You can take an injection to bring the fever down.",
                },
                {
                    id: "ba7taj_dawa",
                    ar: "بَحْتاج دَوا",
                    en: "I need medicine",
                    enArabeezy: "baḥtāj dawa / ba7taj dawa",
                    hint: "From اِحْتَاج = to need. Add ‘for’: دَوا لِلْكْحَة.",
                    exampleAr: "بَحْتاج دَوا لِلرَّشَح وِالكْحَة.",
                    exampleEn: "I need medicine for the cold and the cough.",
                },
                {
                    id: "ba7taj_doktor",
                    ar: "بَحْتاج دْكتور",
                    en: "I need a doctor",
                    enArabeezy: "ba7taj doktor",
                    hint: "Stronger: بَحْتاج دْكتور هَلّق = I need a doctor now.",
                    exampleAr: "هُوَّ تَعْبان كْتير، بَحْتاج دْكتور هَلّق.",
                    exampleEn: "He is very unwell; he needs a doctor now.",
                },
                {
                    id: "bakhod_dawa",
                    ar: "بَاخُد دَوا",
                    en: "I take medicine",
                    enArabeezy: "bākhod dawa / bakhod dawa",
                    hint: "Very common chunk: بَاخُد دَوا ثَلَاث مَرّات فِي الْيَوْم.",
                    exampleAr: "بَاخُد دَوا بَعْد الأَكِل.",
                    exampleEn: "I take medicine after food.",
                },
                {
                    id: "musakkin",
                    ar: "مُسَكِّن",
                    en: "painkiller",
                    enArabeezy: "musakkin",
                    hint: "Medicine to reduce pain.",
                    exampleAr: "أَعْطُوه مُسَكِّن خَفيف لِلْوَجَع.",
                    exampleEn: "They gave him a mild painkiller for the pain.",
                },

                // ===== SYMPTOMS & PAIN =====
                {
                    id: "waja3",
                    ar: "وَجَع",
                    en: "pain / ache",
                    enArabeezy: "wajaʿ / waja3",
                    hint: "General word: وَجَع راس, وَجَع بَطِن, وَجَع ضَهِر...",
                    exampleAr: "في وَجَع قَوي بِضْهَري.",
                    exampleEn: "There is strong pain in my back.",
                },
                {
                    id: "rasi_biwaja3ni",
                    ar: "راسي بيوجَعْني",
                    en: "my head hurts / I have a headache",
                    enArabeezy: "rāsi byūjaʿni / rasi biwaja3ni",
                    hint: "Pattern: body-part + بيوجَعْني.",
                    exampleAr: "راسي بيوجَعْني مِن الصُّبِح.",
                    exampleEn: "My head has been hurting since morning.",
                },
                {
                    id: "batni_biwaja3ni",
                    ar: "بَطْني بيوجَعْني",
                    en: "my stomach hurts",
                    enArabeezy: "baṭni byūjaʿni / batni biwaja3ni",
                    hint: "Same pattern for stomach.",
                    exampleAr: "بَطْني بيوجَعْني بَعْد الأَكِل.",
                    exampleEn: "My stomach hurts after eating.",
                },
                {
                    id: "zahri_biwaja3ni",
                    ar: "ضَهْري بيوجَعْني",
                    en: "my back hurts",
                    enArabeezy: "ẓahri byūjaʿni / dahri biwaja3ni",
                    hint: "Same pattern for back.",
                    exampleAr: "ضَهْري بيوجَعْني لَمّا أُقْعُد كْتير.",
                    exampleEn: "My back hurts when I sit for a long time.",
                },
                {
                    id: "7arara",
                    ar: "حَرارَة / سُخونَة",
                    en: "fever",
                    enArabeezy: "ḥarāra / sukhūna",
                    hint: "High temperature. عِنْدي حَرارَة = I have a fever.",
                    exampleAr: "حاسِس في حَرارَة، جِسْمي سُخن.",
                    exampleEn: "I feel feverish, my body is hot.",
                },
                {
                    id: "bard",
                    ar: "بَرِد / نَزْلَة بَرِد",
                    en: "a cold",
                    enArabeezy: "barid / nazlet bard",
                    hint: "Common cold / catching a cold.",
                    exampleAr: "مَعِي بَرِد مِن بَارِحَة.",
                    exampleEn: "I’ve had a cold since yesterday.",
                },
                {
                    id: "rashah",
                    ar: "رَشَح",
                    en: "runny nose / cold",
                    enArabeezy: "rashḥ / rashah",
                    hint: "Often used for cold and runny nose.",
                    exampleAr: "عِنْدي رَشَح وَأَنْفِي مْسَدود.",
                    exampleEn: "I have a cold and my nose is blocked.",
                },
                {
                    id: "flu",
                    ar: "إِنْفْلُوِنْزا",
                    en: "flu",
                    enArabeezy: "influenza / infloanza",
                    hint: "Stronger than a simple cold.",
                    exampleAr: "الدْكتور حَكالها إنّو مَعْها إِنْفْلُوِنْزا.",
                    exampleEn: "The doctor told her she has the flu.",
                },
                {
                    id: "ku7a",
                    ar: "كُحَّة",
                    en: "cough",
                    enArabeezy: "kuḥḥa / ku7a",
                    hint: "Cough (noun). Verb: بَكُحّ = I cough.",
                    exampleAr: "الكُحَّة ما راضْيِة تِرَوِّح.",
                    exampleEn: "The cough is not going away.",
                },
                {
                    id: "doukha",
                    ar: "دُوخَة",
                    en: "dizziness",
                    enArabeezy: "dūkha / doukha",
                    hint: "Feeling of spinning / lightheaded.",
                    exampleAr: "حَسّ حالُه في دُوخَة لَمّا وِقِف.",
                    exampleEn: "He felt dizzy when he stood up.",
                },
                {
                    id: "ma8aS",
                    ar: "مَغَص",
                    en: "cramp / stomach pain",
                    enArabeezy: "maʿʾaṣ / ma8aṣ",
                    hint: "Stomach cramp or sharp stomach pain.",
                    exampleAr: "مَغَص البَطن مْزْعِج كْتير.",
                    exampleEn: "Stomach cramps are very uncomfortable.",
                },

                // ===== SERIOUS / EMERGENCY SYMPTOMS =====
                {
                    id: "mighma_3alih",
                    ar: "مِغْمَى عَلَيْه",
                    en: "unconscious / fainted (m.)",
                    enArabeezy: "mighmā ʿaleyh / mighma 3aleih",
                    hint: "Used in emergencies when someone faints.",
                    exampleAr: "الشَّب مِغْمَى عَلَيْه عَلأَرْض.",
                    exampleEn: "The guy is unconscious on the ground.",
                },
                {
                    id: "biyenzef",
                    ar: "بِيِنزِف",
                    en: "he is bleeding",
                    enArabeezy: "biyinzif / biyenzef",
                    hint: "Present tense, used in emergencies.",
                    exampleAr: "إِيدُه بِيِنزِفَت دَم كْتير.",
                    exampleEn: "His hand is bleeding a lot.",
                },
                {
                    id: "ma_ba2dar_atnaffas",
                    ar: "ما بَقْدَر أَتْنَفَّس مْنيح",
                    en: "I can’t breathe well",
                    enArabeezy: "ma baʾdar atnaffas mneeḥ / ma ba2dar atnaffas mneeh",
                    hint: "Breathing problem, emergency symptom.",
                    exampleAr: "بِحِسّ إنّو ما بَقْدَر أَتْنَفَّس مْنيح.",
                    exampleEn: "I feel like I can’t breathe well.",
                },
                {
                    id: "ittasel_bil_is3af",
                    ar: "اِتَّصِل بالإِسْعاف",
                    en: "call an ambulance",
                    enArabeezy: "ittasil bil is3āf",
                    hint: "Imperative phrase in emergencies.",
                    exampleAr: "إذا الحالَة خَطيرَة، اِتَّصِل بالإِسْعاف طَوالي.",
                    exampleEn: "If it’s a serious condition, call the ambulance immediately.",
                },

                // ===== CONDITIONS & NUMBERS =====
                {
                    id: "Da3et",
                    ar: "ضَغِط",
                    en: "blood pressure",
                    enArabeezy: "ḍaġiṭ / Daġet",
                    hint: "Talk about high or low blood pressure.",
                    exampleAr: "اليوم الضَّغِط عَندُه عالي.",
                    exampleEn: "Today his blood pressure is high.",
                },
                {
                    id: "sukkar",
                    ar: "سُكَّر",
                    en: "diabetes / sugar level",
                    enArabeezy: "sukkar",
                    hint: "Used for sugar level and diabetes.",
                    exampleAr:
                        "جَدّي مَعُه سُكَّر ولازِم يِنْتَبِه عَالْأَكِل.",
                    exampleEn:
                        "My grandfather has diabetes and has to watch his food.",
                },
                {
                    id: "7asasseyyeh",
                    ar: "حَساسيّة",
                    en: "allergy",
                    enArabeezy: "ḥasāsiyyeh / 7asaseyyeh",
                    hint: "Allergy to food, medicine, dust, etc.",
                    exampleAr: "عِنْدي حَساسيّة مِن شِيَة أَدْوِيَة.",
                    exampleEn: "I have an allergy to some medicines.",
                },
                {
                    id: "ta2min_se7i",
                    ar: "تَأْمِين صِحّي",
                    en: "health insurance",
                    enArabeezy: "taʾmīn ṣiḥḥi / ta2miin se77i",
                    hint: "Insurance that covers medical costs.",
                    exampleAr: "التَّأْمِين الصِّحّي بِيغَطّي المُسْتَشْفَى.",
                    exampleEn: "The health insurance covers the hospital.",
                },

                // ===== ACCIDENTS & INJURIES =====
                {
                    id: "7adeth",
                    ar: "حادِث",
                    en: "accident",
                    enArabeezy: "ḥādeṯ / 7adeth",
                    hint: "Traffic accident or other incident.",
                    exampleAr: "صار حادِث قُرُب الجامْعَة.",
                    exampleEn: "There was an accident near the university.",
                },
                {
                    id: "jur7",
                    ar: "جُرْح",
                    en: "wound / injury",
                    enArabeezy: "jurḥ / jur7",
                    hint: "Cut or open wound.",
                    exampleAr: "الجُرْح مِش عَميق، بَس لازِم تَنْظيف.",
                    exampleEn: "The wound isn’t deep, but it needs cleaning.",
                },

                // ===== USEFUL CHUNKS =====
                {
                    id: "ba7es_hali",
                    ar: "بَحِسّ حالي ...",
                    en: "I feel (myself) ...",
                    enArabeezy: "baḥiss ḥāli ... / ba7es 7ali",
                    hint: "Followed by: تَعْبان, أَحْسَن, مَرِيض ...",
                    exampleAr: "اليوم بَحِسّ حالي أَفْضَل مِن امْبارِح.",
                    exampleEn: "Today I feel better than yesterday.",
                },
                {
                    id: "3indi_symptom",
                    ar: "عِنْدي ...",
                    en: "I have ... (symptom)",
                    enArabeezy: "ʿindi ... / 3indi ...",
                    hint: "Very useful: عِنْدي وَجَع راس، عِنْدي رَشَح، عِنْدي حَرارَة.",
                    exampleAr: "عِنْدي وَجَع راس وَرَشَح شْوَيّ.",
                    exampleEn: "I have a headache and a bit of a cold.",
                },
                {
                    id: "barta7",
                    ar: "بَرْتاح",
                    en: "I rest",
                    enArabeezy: "bartaḥ / barta7",
                    hint: "Used when sick or tired. From اِرْتاح.",
                    exampleAr:
                        "الدْكتور حَكى أَرْجَع عَلَبَيْت وَأَرْتاح يَوْمَيْن.",
                    exampleEn:
                        "The doctor told me to go home and rest for two days.",
                },
                {
                    id: "bimshi_el7al",
                    ar: "بِمْشي الحَال",
                    en: "it’s okay / I’ll manage",
                    enArabeezy: "bimshi l-ḥāl / bimshi el7al",
                    hint: "Used when it’s not too serious: ‘manageable’.",
                    exampleAr: "مَو كْتير وَجَع، بِمْشي الحَال.",
                    exampleEn: "It’s not very painful; I’ll manage.",
                },

                // ===== APPOINTMENTS & TESTS =====
                {
                    id: "maw3ed",
                    ar: "مَوْعِد",
                    en: "appointment",
                    enArabeezy: "mawʿid / maw3ed",
                    hint: "Time booked with a doctor or clinic.",
                    exampleAr: "عندي مَوْعِد عَالسّاعَة تْلاتَة.",
                    exampleEn: "I have an appointment at three o’clock.",
                },
                {
                    id: "natijit_fa7S",
                    ar: "نَتيجَة الفَحْص",
                    en: "test result",
                    enArabeezy: "natījit il-faḥṣ / natijet el-fa7s",
                    hint: "Result of blood test / lab test.",
                    exampleAr: "نَتيجَة الفَحْص بِتْطْلَع بُكْرَة.",
                    exampleEn: "The test result comes out tomorrow.",
                },
            ],

            extra: [
                {
                    id: "a3rad",
                    ar: "أَعْراض",
                    en: "symptoms",
                    enArabeezy: "aʿrāḍ / a3raḍ",
                    hint: "Signs of illness.",
                    exampleAr: "شُو الأَعْراض إلّي حاسِس فيها؟",
                    exampleEn: "What symptoms are you feeling?",
                },
                {
                    id: "tenaffos_3amiq",
                    ar: "تَنَفُّس عَميق",
                    en: "deep breathing",
                    enArabeezy: "tanaffus ʿamīq / tenaffos 3amiq",
                    hint: "Used in calming / first aid or anxiety situations.",
                    exampleAr: "خُد تَنَفُّس عَميق شْوي شْوي.",
                    exampleEn: "Take a deep breath slowly.",
                },
                {
                    id: "muraja3a",
                    ar: "مُراجَعَة",
                    en: "follow-up visit",
                    enArabeezy: "murājaʿa / muraja3a",
                    hint: "Check-up after the first visit.",
                    exampleAr:
                        "الدْكتور حَكى يِرْجَع عَالمُراجَعَة بَعْد أُسْبوع.",
                    exampleEn:
                        "The doctor said he should come back for a follow-up after a week.",
                },
                {
                    id: "man3_tibbi",
                    ar: "مَنْع طِبّي",
                    en: "medical restriction",
                    enArabeezy: "manʿ ṭibbi / man3 tibbi",
                    hint: "Not allowed because of a health reason.",
                    exampleAr: "عِنْدُه مَنْع طِبّي مِن الرِّياضَة القَوِيّة.",
                    exampleEn: "He has a medical restriction from intense sports.",
                },
                {
                    id: "7aleh_khaTireh",
                    ar: "حالَة خَطيرَة",
                    en: "serious condition",
                    enArabeezy: "ḥāle khāṭireh / 7aleh khaTireh",
                    hint: "Used for strong emergencies.",
                    exampleAr:
                        "إذا الحالَة خَطيرَة، اتَّصِل طَوالي بالإِسْعاف.",
                    exampleEn:
                        "If it’s a serious condition, call the ambulance immediately.",
                },
                {
                    id: "balashet_t5aff",
                    ar: "بَلَّشْت تِخَفّ",
                    en: "it started to get better",
                    enArabeezy: "ballashet tikhaf / balashet t5aff",
                    hint: "From خَفّ = to become lighter / less (pain or symptoms).",
                    exampleAr: "بَعْد الدَّوا الْوَجَع بَلَّشْ يِخَفّ.",
                    exampleEn: "After the medicine, the pain started to get better.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE (multi-scene: feeling sick → clinic → small emergency)
        // ====================================
        "dialogue": {
            "lines": [
                {
                    "speaker": "Hala",
                    "ar": "يا مِنى، وَجْهَك مِش مْريِح، كِيف حاسّة حالِك؟",
                    "en": "Mina, you don’t look well, how are you feeling?"
                },
                {
                    "speaker": "Mina",
                    "ar": "صِراحةً تَعْبانَة، راسي بيوجَعْني كْتير.",
                    "en": "Honestly, I’m tired, my head hurts a lot."
                },
                {
                    "speaker": "Hala",
                    "ar": "مِن أَمْتَى بادي الوَجَع؟",
                    "en": "Since when did the pain start?"
                },
                {
                    "speaker": "Mina",
                    "ar": "مِن بَارِحَة المَسَا، ومعي شْوَيِّة كُحَّة وَرَشَح.",
                    "en": "Since last night, and I have a bit of cough and a runny nose."
                },
                {
                    "speaker": "Hala",
                    "ar": "قِسْتِي الحَرارَة؟ حاسّة في سُخونَة؟",
                    "en": "Did you take your temperature? Do you feel feverish?"
                },
                {
                    "speaker": "Mina",
                    "ar": "إي، حَرارتي طالْعَة شْوَي، جِسْمي سُخن.",
                    "en": "Yes, my temperature is a bit high, my body is hot."
                },
                {
                    "speaker": "Hala",
                    "ar": "ما بِنْصَح تِضَلّي هيك، خَلِّينا نِنْزِل عَالعِيادَة الجَامْعِيّة.",
                    "en": "I don’t advise you to stay like this, let’s go down to the university clinic."
                },
                {
                    "speaker": "Mina",
                    "ar": "هَلَّق عِنّا مُحاضَرَة، ما بَقْدَر أَفَوِّتْها.",
                    "en": "We have a lecture now, I can’t miss it."
                },
                {
                    "speaker": "Hala",
                    "ar": "صِحِّتِك أَهَمّ، إذا حالْتِك ساءَت بيصير خَطير.",
                    "en": "Your health is more important, if your condition gets worse it could be serious."
                },
                {
                    "speaker": "Mina",
                    "ar": "مَعِك حَق، يَلّا نِروح عَالعِيادَة.",
                    "en": "You’re right, let’s go to the clinic."
                },
                {
                    "speaker": "Hala",
                    "ar": "شُوفي، هون مَكْتوب: عِيادَة الطّالِبين، مِنِفُوت؟",
                    "en": "Look, here it says: Student clinic, shall we go in?"
                },
                {
                    "speaker": "Mina",
                    "ar": "إي، بِس نِسْأَل أَوَّل عَن المَوْعِد.",
                    "en": "Yes, but let’s first ask about the appointment."
                },
                {
                    "speaker": "Nurse",
                    "ar": "مَسّا الخير، شُو المُشْكِلَة؟",
                    "en": "Good afternoon, what’s the problem?"
                },
                {
                    "speaker": "Hala",
                    "ar": "صاحْبْتي تَعْبانَة، راسْها بيوجَعْها ومعها حَرارَة.",
                    "en": "My friend is unwell, her head hurts and she has a fever."
                },
                {
                    "speaker": "Nurse",
                    "ar": "حَسَب الأَسْماء، في قُدّامْكُم طالِب واحِد بَس، اِسْتَنّوا شْوَي.",
                    "en": "According to the list, there’s only one student before you, please wait a bit."
                },
                {
                    "speaker": "Mina",
                    "ar": "حسّيت فَجْأَة بِدُوخَة شْوَي…",
                    "en": "I suddenly felt a bit dizzy…"
                },
                {
                    "speaker": "Hala",
                    "ar": "إِقْعُدي هون وخُدي تَنَفُّس عَميق، إذا حَسّيتي حالِك مِغْمَى عَلَيْك بِنادِي الإِسْعاف.",
                    "en": "Sit here and take deep breaths; if you feel like you’re going to faint I’ll call the ambulance."
                },
                {
                    "speaker": "Nurse",
                    "ar": "تْفَضَّلي، هَلَّق دَوْرِك عَالدْكتور.",
                    "en": "Come in, it’s your turn to see the doctor."
                },
                {
                    "speaker": "Doctor",
                    "ar": "مَسّا الخير، اِحْكيلي شْو الأَعْراض إلّي عِنْدِك.",
                    "en": "Good afternoon, tell me what symptoms you have."
                },
                {
                    "speaker": "Mina",
                    "ar": "راسي بيوجَعْني، معي كُحَّة وَرَشَح، وحاسّة في حَرارَة.",
                    "en": "My head hurts, I have a cough and runny nose, and I feel feverish."
                },
                {
                    "speaker": "Doctor",
                    "ar": "في وَجَع بِالبَطْن أَو مَغَص؟ في مَشاكِل بِالتَّنَفُّس؟",
                    "en": "Any stomach pain or cramps? Any breathing problems?"
                },
                {
                    "speaker": "Mina",
                    "ar": "لا، بَس تَعَب وَوَجَع راس، ما في مَشْكِلَة بِالتَّنَفُّس.",
                    "en": "No, just tiredness and a headache, no problem with breathing."
                },
                {
                    "speaker": "Doctor",
                    "ar": "حَسَب الحَرارَة والأَعْراض، شَكْلُه نَزْلَة بَرِد قَوِيّة أَو إِنْفْلُوِنْزا خَفيفَة.",
                    "en": "From the temperature and symptoms, it looks like a strong cold or a mild flu."
                },
                {
                    "speaker": "Doctor",
                    "ar": "لازِم تِرْتاحي كَم يَوم، تِشْرَبي ميّ وَسَوائِل دافْيِة وَتَأْخُدي مُسَكِّن وَدَوا للكُحَّة.",
                    "en": "You need to rest for a few days, drink water and warm fluids, and take a painkiller and cough medicine."
                },
                {
                    "speaker": "Mina",
                    "ar": "دْكتور، بِقْدَر أِكَمِّل مُحاضَراتي اليوْم؟",
                    "en": "Doctor, can I continue my lectures today?"
                },
                {
                    "speaker": "Doctor",
                    "ar": "أَحْسَن إنِّك تِرْوحي عَالبَيْت اليوم، الجِسِم بِحْتاج رَاحَة.",
                    "en": "It’s better if you go home today, your body needs rest."
                },
                {
                    "speaker": "Doctor",
                    "ar": "إذا حَسّيتي إنّو الحَرارَة طالْعَة كْتير أَو ما بَقْدَر تِتْنَفَّسي مْنيح، لازم تْروحي عَطَوارِئ أَو تِتَّصْلي بالإِسْعاف.",
                    "en": "If you feel your fever is very high or you can’t breathe well, you must go to the emergency room or call an ambulance."
                },
                {
                    "speaker": "Mina",
                    "ar": "طَيِّب، بِسَوّي مِثْل ما حَكَيت.",
                    "en": "Okay, I’ll do as you said."
                },
                {
                    "speaker": "Doctor",
                    "ar": "هاي الوَصْفَة، بتِقْدَري تَصْرْفي الدَّوا مِن أَيّ صَيْدَلِيّة.",
                    "en": "Here’s the prescription, you can get the medicine from any pharmacy."
                },
                {
                    "speaker": "Hala",
                    "ar": "شُو حَكَالك الدْكتور؟ الأُمور مُطَمْئِنَة؟",
                    "en": "What did the doctor tell you? Is everything reassuring?"
                },
                {
                    "speaker": "Mina",
                    "ar": "حَكى إنّو شَكْلُه بَرِد أَو إِنْفْلُوِنْزا، ولازِم رَاحَة وَدَوا.",
                    "en": "He said it looks like a cold or flu, and I need rest and medicine."
                },
                {
                    "speaker": "Hala",
                    "ar": "يَلّا نِمُرّ عَالصَّيْدَلِيّة، بَعْدين بَوَصِّلِك عَالبَيْت.",
                    "en": "Let’s pass by the pharmacy, then I’ll take you home."
                },
                {
                    "speaker": "Mina",
                    "ar": "مِشْكُورَة كْتير، عنْجَد ساعَدْتيني اليوم.",
                    "en": "Thank you so much, you really helped me today."
                },
                {
                    "speaker": "Hala",
                    "ar": "وَلا يِهُمِّك، المُهِم تْحِسِّي أَحْسَن، وإذا صار إِشي طارِئ اتَّصْلي فيّي طَوالي.",
                    "en": "Don’t mention it, the important thing is that you feel better; if anything urgent happens call me immediately."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "3indi_vs_biwaja3ni",
                title: "«عِنْدِي وَجَع رَاس» vs «رَاسِي بِوَجَعْنِي»",
                description:
                    "Two very natural ways to talk about pain:\n\n" +
                    "1) عِنْدِي + وَجَع + (part of body)\n" +
                    "   – عِنْدِي وَجَع رَاس = I have a headache.\n" +
                    "   – عِنْدِي وَجَع بَطِن = I have stomach pain.\n\n" +
                    "2) (part of body) + بِوَجَعْنِي\n" +
                    "   – رَاسِي بِوَجَعْنِي = My head hurts.\n" +
                    "   – ضَّهْرِي بِوَجَعْنِي = My back hurts.\n\n" +
                    "Both are correct and common. In real life, you can choose the one that feels easier.",
            },
            {
                id: "ba7es_hali_pattern",
                title: "«بَحِسّ حَالِي…» – talking about how you feel",
                description:
                    "The chunk «بَحِسّ حَالِي…» is super useful:\n\n" +
                    "• بَحِسّ حَالِي تَعْبَان. = I feel tired.\n" +
                    "• بَحِسّ حَالِي مَرِيض. = I feel sick.\n" +
                    "• بَحِسّ حَالِي أَفْضَل الْيَوْم. = I feel better today.\n\n" +
                    "You can also shorten it to «بَحِسّ إِنِّي…»:\n" +
                    "• بَحِسّ إِنِّي تَعْبَان بَسّ شْوَيّ. = I feel I’m a bit tired.",
            },
            {
                id: "need_chunk",
                title: "«بَحْتَاج…» – I need (doctor / medicine / help)",
                description:
                    "For health and emergencies, ‘need’ is important:\n\n" +
                    "• بَحْتَاج دِكْتُور. = I need a doctor.\n" +
                    "• بَحْتَاج دَّوَا لِلْكْحَة. = I need medicine for the cough.\n" +
                    "• بَحْتَاج مُسَاعَدَة. = I need help.\n\n" +
                    "Negative:\n" +
                    "• مَا بَحْتَاج مُسْتَشْفَى، بِمْشِي الْحَال. = I don’t need a hospital, it’s manageable.",
            },
            {
                id: "emergency_imperatives",
                title: "Useful imperatives in emergencies",
                description:
                    "In an emergency, short imperatives are important:\n\n" +
                    "• اِتَّصِل عَالإِسْعَاف! = Call an ambulance!\n" +
                    "• نَادِي الدِّكْتُور! = Call the doctor!\n" +
                    "• اِسْتَنَّى هُون! = Wait here!\n" +
                    "• مَا تِتْحَرَّك كْتِير! = Don’t move too much!\n\n" +
                    "Even if your grammar is not perfect, these chunks are enough to make people understand you quickly.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "health_q1",
                    questionAr: "«رَاسِي بِوَجَعْنِي» مَعْنَاهَا:",
                    optionsEn: [
                        "My head hurts.",
                        "My stomach hurts.",
                        "I have a cold.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "health_q2",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘pharmacy’؟",
                    optionsEn: [
                        "مُسْتَشْفَى",
                        "صَيْدَلِيَّة",
                        "عِيَادَة",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "health_q3",
                    questionAr: "«بَحْتَاج دِكْتُور هَلَّقْ» مَعْنَاهَا:",
                    optionsEn: [
                        "I need a doctor now.",
                        "I need to go to school now.",
                        "I want to sleep now.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "health_q4",
                    questionAr: "أَيّ تَعْبِير أَكْثَر طَبِيعِي لِـ ‘It hurts here’؟",
                    optionsEn: [
                        "عِنْدِي رَشَح.",
                        "بِوَجَعْنِي هُون.",
                        "بَحِسّ حَالِي أَفْضَل.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "health_q5",
                    questionAr: "«دُوخَة» مَعْنَاهَا:",
                    optionsEn: [
                        "dizziness",
                        "cough",
                        "fever",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Student feels sick in class. Teacher (A) asks simple questions in Palestinian Arabic about what’s wrong; Student (B) answers using «بَحِسّ حَالِي…», «عِنْدِي…», «رَاسِي بِوَجَعْنِي». Then switch roles.",
                "Role-play 2: At the clinic. Student A is the receptionist or doctor; Student B is the patient. The patient describes 2–3 symptoms and asks if the situation is serious. The doctor asks since when, if there is fever or cough, and suggests rest and medicine.",
                "Role-play 3: Small emergency in the street. Work with 2–3 characters: the injured person, a friend, and a bystander. They use short chunks like «اِتَّصِل عَالإِسْعَاف»، «سَلَامْتِك»، «فِيه دَم؟»، «بَحْتَاج دِكْتُور هَلَّقْ».",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second audio in Palestinian Arabic about a simple health situation in your life (real or imaginary). For example:\n" +
                "• A time when you had a cold or fever.\n" +
                "• A day you were very tired after work or study.\n" +
                "• A small accident (like falling on the stairs).\n\n" +
                "Use at least:\n" +
                "• 3 symptom words (for example: وَجَع رَاس، حَرَارَة، رَشَح، كْحَة، دُوخَة).\n" +
                "• 2 chunks with «عِنْدِي…» أو «بَحِسّ حَالِي…».\n" +
                "• 1 sentence about what you did: رُحْت عَلَى الدِّكْتُور، أَخَذْت دَّوَا، رِحْت عَلَى الْبَيْت وَرِحْت أَرْتَاح.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start in English and ask if the student is comfortable talking about health. Keep it light and focus on everyday things like colds, headaches, and being tired from study.",
                "Ask about the last time they had a simple cold or headache, then build 2–3 key sentences in Palestinian Arabic together.",
                "Explain that this unit is for language, not medical advice; the goal is to describe and ask for help clearly.",
            ],
            vocabularySteps: [
                "Group words by theme: places (hospital, clinic, pharmacy), people (doctor, nurse), symptoms (pain, fever, cough), and verbs (need, hurt, rest).",
                "Highlight the two main patterns for pain (عِنْدِي وَجَع… / …بِوَجَعْنِي) and practice them with different body parts.",
                "Keep masculine/feminine forms inside the hints and your oral examples, not as separate entries, so the student sees the system but doesn’t feel overwhelmed.",
            ],
            dialogueSteps: [
                "Act the class + clinic dialogue slowly, letting the student only listen first. Then, replay and pause to explain key chunks.",
                "Let the student play ‘the patient’ and you as ‘the doctor’, then switch roles and encourage them to improvise symptoms using the vocabulary.",
                "For the emergency part, keep it short and controlled; focus on strong, clear chunks like «اِتَّصِل عَالإِسْعَاف» and «بَحْتَاج دِكْتُور».",
            ],
            practiceTips: [
                "Correct gently, especially with health topics. Focus on making the message clear, not perfect grammar.",
                "Use simple gestures (pointing to head, stomach, back) to connect vocabulary with meaning without too much English.",
                "If the student seems anxious about health topics, keep more time on everyday things like being tired from exams or having a light cold.",
            ],
            wrapup: [
                "End with a short ‘doctor visit’ summary about the student, using their own information but in a clean Palestinian Arabic version.",
                "Ask the student to choose 3–5 chunks they feel are most useful for travel and write them in a small ‘emergency card’ (for example: «بَحْتَاج دِكْتُور», «رَاسِي بِوَجَعْنِي», «اِتَّصِل عَالإِسْعَاف»).",
                "Remind them of the homework and encourage them to treat it like a mini story, not a list of symptoms.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_APARTMENT]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Apartment & Problems",
            lessonTitle: "Unit 8 – Apartment, Neighbours & Problems",
        },

        overview: {
            title: "Unit 8 – Apartment & Problems",
            description:
                "In this unit, students learn how to describe their apartment, rooms, basic furniture, and common problems in a Palestinian building: water, electricity, internet, noise, humidity, and broken things. The focus is on real-life chunks for talking to a landlord, neighbours, and technicians.",
            goals: [
                "Describe their apartment and rooms in simple Palestinian Arabic.",
                "Use key words for basic furniture, building parts, and neighbours.",
                "Explain common problems like no water, no electricity, broken things, and noise.",
                "Use high-frequency verbs like ‘to rent, to pay, to fix, to break, to leak’ in context.",
                "Handle short phone calls and face-to-face complaints with polite chunks.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== APARTMENT & BUILDING =====
                {
                    id: "shaqqa",
                    ar: "شِقّة",
                    en: "apartment / flat",
                    enArabeezy: "shéʾa / shé2a",
                    hint:
                        "Plural: شِقَق / شُقَق. ‘my apartment’ = شِقْتي. Used for rented or owned flats.",
                    exampleAr: "بِسْكُن بِشِقّة قَريب مِن الجامْعَة.",
                    exampleEn: "I live in an apartment near the university.",
                },
                {
                    id: "3imara",
                    ar: "عِمارَة",
                    en: "building",
                    enArabeezy: "3imāra",
                    hint:
                        "Also بِنَاية in some areas. عِمارَة تَلات طَوابِق = a three-floor building.",
                    exampleAr: "العِمارَة قَديمَة بَس نْضيفَة.",
                    exampleEn: "The building is old but clean.",
                },
                {
                    id: "taba2",
                    ar: "طابِق",
                    en: "floor (1st, 2nd…)",
                    enArabeezy: "ṭābeʾ / ṭābe2",
                    hint:
                        "Level in the building. أَوَّل طابِق / تاني طابِق / طابِق أَرْضي.",
                    exampleAr: "الشِّقّة عَالطّابِق التّالِت.",
                    exampleEn: "The apartment is on the third floor.",
                },
                {
                    id: "sellem",
                    ar: "دَرَج / سِلِّم",
                    en: "stairs / staircase",
                    enArabeezy: "daraj / séllem",
                    hint:
                        "دَرَج = stairs in general, سِلِّم = staircase in a building.",
                    exampleAr: "لَمّا الأسانْسير خَرْبان، نِطْلَع عَالدَّرَج.",
                    exampleEn: "When the elevator is broken, we go up the stairs.",
                },
                {
                    id: "bab_el3imara",
                    ar: "باب العِمارَة",
                    en: "building door / entrance",
                    enArabeezy: "bāb il-3imāra",
                    hint: "Main entrance of the building.",
                    exampleAr: "باب العِمارَة مِش مْسَكَّر مْنيح.",
                    exampleEn: "The building door doesn’t close well.",
                },

                // ===== ROOMS =====
                {
                    id: "ghurfet_nawm",
                    ar: "غُرْفِة نَوْم",
                    en: "bedroom",
                    enArabeezy: "ghurfet nōm",
                    hint: "Short: غُرْفِة = room. Plural: غُرَف.",
                    exampleAr: "الشِّقّة فيها غُرْفِة نَوْم واحْدِة.",
                    exampleEn: "The apartment has one bedroom.",
                },
                {
                    id: "salon",
                    ar: "صالون",
                    en: "living room",
                    enArabeezy: "ṣālōn / salon",
                    hint: "Sitting room for guests and family.",
                    exampleAr: "بِنِقْعُد بِالصّالون نِتْفَرَّج عَالتِّلْفِزْيون.",
                    exampleEn: "We sit in the living room and watch TV.",
                },
                {
                    id: "matbakh",
                    ar: "مَطْبَخ",
                    en: "kitchen",
                    enArabeezy: "maṭbakh",
                    hint: "Room for cooking. Plural: مَطابِخ.",
                    exampleAr: "مَطْبَخ الشِّقّة صْغير بَس مُرَتَّب.",
                    exampleEn: "The apartment’s kitchen is small but tidy.",
                },
                {
                    id: "7ammam",
                    ar: "حَمّام",
                    en: "bathroom",
                    enArabeezy: "ḥammām / 7ammam",
                    hint: "Bathroom / toilet, depending on context.",
                    exampleAr: "الحَمّام في مَشْكِلَة بِالمَيّ.",
                    exampleEn: "There is a water problem in the bathroom.",
                },
                {
                    id: "balkon",
                    ar: "بَلكون / شُرْفَة",
                    en: "balcony",
                    enArabeezy: "balkōn / shurfa",
                    hint: "Outside space of the apartment (balcony).",
                    exampleAr: "بَحِبّ أَشْرَب قَهْوِة عَالبَلكون.",
                    exampleEn: "I like to drink coffee on the balcony.",
                },

                // ===== PEOPLE & MONEY =====
                {
                    id: "jar",
                    ar: "جار / جارَة",
                    en: "neighbor (m/f)",
                    enArabeezy: "jār / jāra",
                    hint: "Someone who lives next door or nearby. Plural: جيران.",
                    exampleAr: "جيرانّا طَيِّبين بَس صَوْتهم عالي أَحْيانا.",
                    exampleEn: "Our neighbors are nice but sometimes loud.",
                },
                {
                    id: "sa7eb_elbeit",
                    ar: "صاحِب البَيْت",
                    en: "landlord / owner",
                    enArabeezy: "ṣāḥeb il-bēt / sa7eb el-beit",
                    hint: "Owner of the apartment or house.",
                    exampleAr: "صاحِب البَيْت ساكِن في نَفْس العِمارَة.",
                    exampleEn: "The landlord lives in the same building.",
                },
                {
                    id: "ijar",
                    ar: "إيجار",
                    en: "rent",
                    enArabeezy: "ījār / ijar",
                    hint: "Money paid every month for the apartment.",
                    exampleAr: "إيجار الشِّقّة غالي شْوَي.",
                    exampleEn: "The apartment’s rent is a bit expensive.",
                },
                {
                    id: "fatora",
                    ar: "فاتورَة",
                    en: "bill",
                    enArabeezy: "fātūra / fatora",
                    hint: "General word, often for utilities.",
                    exampleAr: "لازِم أَدْفَع فاتورَة الشَّهِر هادا.",
                    exampleEn: "I have to pay this month’s bill.",
                },
                {
                    id: "fatora_kahraba",
                    ar: "فاتورَة كَهْرَبا",
                    en: "electricity bill",
                    enArabeezy: "fātūrat kahrabā",
                    hint: "Monthly bill for electricity.",
                    exampleAr: "فاتورَة الكَهْرَبا طِلْعِت عالْعادَة أَكْتَر.",
                    exampleEn: "The electricity bill came higher than usual.",
                },
                {
                    id: "fatora_mayy",
                    ar: "فاتورَة مَيّ",
                    en: "water bill",
                    enArabeezy: "fātūrat mayy",
                    hint: "Bill for water consumption.",
                    exampleAr: "فاتورَة المَيّ مِش مَشْمُولَة بِالإيجار.",
                    exampleEn: "The water bill is not included in the rent.",
                },

                // ===== DOORS, WINDOWS & KEYS =====
                {
                    id: "mifta7",
                    ar: "مِفْتاح",
                    en: "key",
                    enArabeezy: "miftaḥ / mifta7",
                    hint: "Key for the door, etc.",
                    exampleAr: "نِسيت المِفْتاح جُوّا الشِّقّة.",
                    exampleEn: "I forgot the key inside the apartment.",
                },
                {
                    id: "bab",
                    ar: "باب",
                    en: "door",
                    enArabeezy: "bāb",
                    hint: "Door of a room, apartment, or building.",
                    exampleAr: "باب البَلكون مِش مْسَكَّر مْنيح.",
                    exampleEn: "The balcony door doesn’t close well.",
                },
                {
                    id: "shubbak",
                    ar: "شُبّاك",
                    en: "window",
                    enArabeezy: "shubbāk / shubbak",
                    hint: "Window of a room.",
                    exampleAr: "الشُّبّاك مَكْسور وبدّه تَصْلِيح.",
                    exampleEn: "The window is broken and needs repair.",
                },

                // ===== UTILITIES & APPLIANCES =====
                {
                    id: "mayy",
                    ar: "مَيّ",
                    en: "water",
                    enArabeezy: "mayy",
                    hint: "Tap water / water in general.",
                    exampleAr: "المَيّ بِتِنْقِط مِن السَّقْف.",
                    exampleEn: "Water is dripping from the ceiling.",
                },
                {
                    id: "kahraba",
                    ar: "كَهْرَبا",
                    en: "electricity",
                    enArabeezy: "kahrabā / kahraba",
                    hint: "Power in the house. قَطْع كَهْرَبا = power cut.",
                    exampleAr: "الكَهْرَبا بِتِنْقِطِع كْثير بِهالْمَنطِقَة.",
                    exampleEn: "The electricity cuts off a lot in this area.",
                },
                {
                    id: "daw",
                    ar: "ضَوّ",
                    en: "light",
                    enArabeezy: "ḍaww / daw",
                    hint: "Electric light / lamp.",
                    exampleAr: "في ضَوّ مِش شَغّال بِالْمَمَرّ.",
                    exampleEn: "There is a light not working in the hallway.",
                },
                {
                    id: "ghassaleh",
                    ar: "غَسّالِة",
                    en: "washing machine",
                    enArabeezy: "ghassāle / ghassaleh",
                    hint: "Machine for washing clothes.",
                    exampleAr: "غَسّالِة الشِّقّة خَرْبانِة هالأَيام.",
                    exampleEn: "The apartment’s washing machine is broken these days.",
                },
                {
                    id: "tallajeh",
                    ar: "تَلّاجَة",
                    en: "fridge",
                    enArabeezy: "tallājeh",
                    hint: "Refrigerator.",
                    exampleAr: "التَّلّاجَة مَش مْبَرِّدَة مْنيح.",
                    exampleEn: "The fridge is not cooling well.",
                },
                {
                    id: "ghaz",
                    ar: "غَاز",
                    en: "gas (for cooking)",
                    enArabeezy: "ghāz / ghaz",
                    hint: "Gas cylinder or gas line.",
                    exampleAr: "قِنّينِة الغَاز فاضيِة، لازم نِغَيِّرْها.",
                    exampleEn: "The gas cylinder is empty; we need to change it.",
                },
                {
                    id: "furn",
                    ar: "فُرْن",
                    en: "oven",
                    enArabeezy: "furn",
                    hint: "For baking / cooking, gas or electric.",
                    exampleAr: "الفُرْن الكَهْرَبا خَرْبان اليوم.",
                    exampleEn: "The electric oven is broken today.",
                },
                {
                    id: "sakhan_mayy",
                    ar: "سَخّان مَيّ",
                    en: "water heater",
                    enArabeezy: "sakkhān mayy",
                    hint: "Heater for shower water.",
                    exampleAr: "السَّخّان مَش شَغّال، المَيّ بارْدِة.",
                    exampleEn: "The water heater is not working; the water is cold.",
                },
                {
                    id: "makyyef",
                    ar: "مِكيّف",
                    en: "air conditioner",
                    enArabeezy: "mikayyef / makyyef",
                    hint: "AC unit.",
                    exampleAr: "المِكيّف بِطَفّي لَمّا نِشَغِّل غَسّالِة.",
                    exampleEn: "The AC turns off when we turn on the washing machine.",
                },
                {
                    id: "maghsaleh",
                    ar: "مَغْسَلِة",
                    en: "sink (bathroom or kitchen)",
                    enArabeezy: "maghsaleh",
                    hint: "Basin for water.",
                    exampleAr: "المَغْسَلِة في الحَمّام مَسْدودَة.",
                    exampleEn: "The bathroom sink is blocked.",
                },
                {
                    id: "7anafiyeh",
                    ar: "حَنَفِيّة",
                    en: "tap / faucet",
                    enArabeezy: "ḥanafyyeh / 7anafiyeh",
                    hint: "Water tap.",
                    exampleAr: "الحَنَفِيّة بْتِخَرّ مَيّ طول الليل.",
                    exampleEn: "The tap drips water all night.",
                },
                {
                    id: "massdood",
                    ar: "مَسْدود",
                    en: "blocked / clogged",
                    enArabeezy: "masdūd / masdood",
                    hint: "Used for sink, toilet, drain, etc.",
                    exampleAr: "المَجْرى مَسْدود وبَدّه تَنْظيف.",
                    exampleEn: "The drain is blocked and needs cleaning.",
                },
                {
                    id: "beykhar_mayy",
                    ar: "بِيخَرّ مَيّ",
                    en: "it leaks water",
                    enArabeezy: "bikharr mayy / bey5ar mayy",
                    hint: "Used for tap, pipe, ceiling.",
                    exampleAr: "السَّقْف بِيخَرّ مَيّ لَمّا تِمْطُر.",
                    exampleEn: "The ceiling leaks when it rains.",
                },

                // ===== ELEVATOR, STAIRS & NOISE =====
                {
                    id: "mis3ad",
                    ar: "مِصْعَد / أسانْسير",
                    en: "elevator",
                    enArabeezy: "miṣʿad / asansēr",
                    hint: "Lift in the building.",
                    exampleAr: "المِصْعَد بْوِقَّف بِنُصّ الطّابِق أَحْيانًا.",
                    exampleEn: "The elevator sometimes stops between floors.",
                },
                {
                    id: "sawt_3ali",
                    ar: "صَوْت عالي",
                    en: "loud noise",
                    enArabeezy: "ṣōt ʿāli / sawt 3ali",
                    hint: "Used for neighbors, street, etc.",
                    exampleAr: "في صَوْت عالي مِن الجيران بِاللَّيْل.",
                    exampleEn: "There is loud noise from the neighbors at night.",
                },

                // ===== STATE OF THINGS =====
                {
                    id: "maksur",
                    ar: "مَكْسور",
                    en: "broken",
                    enArabeezy: "maksūr / maksour",
                    hint: "Physically broken (glass, door, window).",
                    exampleAr: "الشُّبّاك مَكْسور بِنُصّه.",
                    exampleEn: "The window is broken in the middle.",
                },
                {
                    id: "kharban",
                    ar: "خَرْبان",
                    en: "not working / out of order",
                    enArabeezy: "kharbān / kharban",
                    hint: "Device that doesn’t work.",
                    exampleAr: "الأسانْسير خَرْبان من أُسْبوع.",
                    exampleEn: "The elevator has been out of order for a week.",
                },
                {
                    id: "ma_bishtghil",
                    ar: "مَا بِشْتَغِل",
                    en: "it doesn’t work",
                    enArabeezy: "ma bishtghil",
                    hint:
                        "Used for any device: الضَّوّ مَا بِشْتَغِل، الغَسّالِة مَا بِتِشْتَغِل.",
                    exampleAr: "السَّخّان مَا بِشْتَغِل، المَيّ بارْدِة.",
                    exampleEn: "The water heater doesn’t work; the water is cold.",
                },

                // ===== VERBS & USEFUL CHUNKS =====
                {
                    id: "basta2jer",
                    ar: "بَسْتَأْجِر",
                    en: "I rent (an apartment)",
                    enArabeezy: "bastaʾjir / basta2jer",
                    hint:
                        "From اِسْتَأْجَر = to rent. بَسْتَأْجِر شِقّة فِي غَزّة.",
                    exampleAr: "هَادي أَوَّل مَرّة بَسْتَأْجِر شِقّة لَحالي.",
                    exampleEn: "This is the first time I rent an apartment by myself.",
                },
                {
                    id: "badfa3_ijar",
                    ar: "بَدْفَع الإيجار",
                    en: "I pay the rent",
                    enArabeezy: "badfaʿ il-ījār / badfa3 el-ijar",
                    hint: "Add time: كُلّ أَوَّل شَهِر / فِي نُصّ الشَّهِر.",
                    exampleAr: "بَدْفَع الإيجار أُونْلايْن.",
                    exampleEn: "I pay the rent online.",
                },
                {
                    id: "fi_mushkileh_fi",
                    ar: "في مُشْكِلَة في...",
                    en: "there is a problem with…",
                    enArabeezy: "fī mushkile fi...",
                    hint:
                        "Template: في مُشْكِلَة في المَيّ / في الضَوّ / في البَلكون...",
                    exampleAr: "في مُشْكِلَة في الإِنْتَرْنِت مِن امْبارِح.",
                    exampleEn: "There has been a problem with the internet since yesterday.",
                },
                {
                    id: "batwasal_ma3",
                    ar: "بَتْواصَل مَع...",
                    en: "I contact / get in touch with…",
                    enArabeezy: "batwāṣal maʿ...",
                    hint: "بَتْواصَل مَع صاحِب البَيْت / مَع الشِّرْكَة.",
                    exampleAr: "لَمّا في مُشْكِلَة بَتْواصَل مَع صاحِب البَيْت.",
                    exampleEn: "When there is a problem, I contact the landlord.",
                },
            ],

            extra: [
                {
                    id: "3a2d_ijar",
                    ar: "عَقْد إيجار",
                    en: "rental contract",
                    enArabeezy: "ʿaʾd ījār / 3a2d ijār",
                    hint: "Paper that explains rules, rent, and conditions.",
                    exampleAr: "عَقْد الإيجار مَكْتوب فيه كُلّ الشُّروط.",
                    exampleEn: "All the conditions are written in the rental contract.",
                },
                {
                    id: "shakwa",
                    ar: "شَكْوَى",
                    en: "complaint",
                    enArabeezy: "shakwā / shakwa",
                    hint: "Formal complaint to landlord or authority.",
                    exampleAr: "مُمْكِن نِقَدِّم شَكْوَى عَن الصَّوْت العالي.",
                    exampleEn: "We can file a complaint about the loud noise.",
                },
                {
                    id: "7ares_el3imara",
                    ar: "حارِس العِمارَة",
                    en: "building guard / caretaker",
                    enArabeezy: "ḥāres il-3imāra / 7ares el-3imara",
                    hint: "Person who looks after the building.",
                    exampleAr: "حارِس العِمارَة بِفَتِّح الباب وَبْيِنَظِّف الدَّرَج.",
                    exampleEn: "The building guard opens the door and cleans the stairs.",
                },
                {
                    id: "ratoobe",
                    ar: "رُطوبَة",
                    en: "humidity / damp",
                    enArabeezy: "ruṭūba / ratoobe",
                    hint: "Moisture on walls or in the air.",
                    exampleAr: "في رُطوبَة عَالحِيط بِغُرْفِة النَّوْم.",
                    exampleEn: "There is damp on the wall in the bedroom.",
                },
                {
                    id: "tedfi2a",
                    ar: "تِدْفِئَة",
                    en: "heating",
                    enArabeezy: "tidfiʾa / tedfi2a",
                    hint: "System for warming the house.",
                    exampleAr: "ما في تِدْفِئَة مْنيحَة بِالشِّتْوي.",
                    exampleEn: "There is no good heating in winter.",
                },
                {
                    id: "merwa7a",
                    ar: "مِرْوَحَة",
                    en: "fan",
                    enArabeezy: "mirwaḥa / merwa7a",
                    hint: "Ceiling or standing fan.",
                    exampleAr: "المِرْوَحَة أَسْهَل مِن المِكيّف لَلفاتورَة.",
                    exampleEn: "A fan is easier on the bill than the AC.",
                },
                {
                    id: "sakan_jdid",
                    ar: "سَكَن جْديد",
                    en: "new place / new apartment",
                    enArabeezy: "sakan jdid",
                    hint: "Used when someone has just moved.",
                    exampleAr: "رُوبَا نَقَلِت عَسَكَن جْديد قَريب مِن الجامْعَة.",
                    exampleEn: "Roba moved to a new place near the university.",
                },
                {
                    id: "mash7oun",
                    ar: "مَشْحون",
                    en: "charged (for electricity card / meter)",
                    enArabeezy: "mashḥūn / mash7oun",
                    hint: "Used for prepaid electricity meters.",
                    exampleAr: "نَسِينَا نِشْحَن العَدّاد، قَطَعِت الكَهْرَبا.",
                    exampleEn: "We forgot to charge the meter, the electricity went off.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE (moving in, problems, landlord & neighbour)
        // ====================================
        "dialogue": {
            "lines": [
                {
                    "speaker": "Rami",
                    "ar": "مَسّا الخير يا خالِد، نِقَلْت عَالشِّقّة الجْديدَة أَخِيرًا!",
                    "en": "Good evening, Khaled, I finally moved to the new apartment!"
                },
                {
                    "speaker": "Khaled",
                    "ar": "مَبْروك! شُو أَخْبار الشِّقّة؟ كْبيرَة وِلّا صْغيرَة؟",
                    "en": "Congratulations! How is the apartment? Big or small?"
                },
                {
                    "speaker": "Rami",
                    "ar": "مِش كْبيرَة بَس مْنيحَة، فيها غُرْفِة نَوْم واحْدِة، صالون، مَطْبَخ وَحَمّام.",
                    "en": "It’s not big but it’s nice; it has one bedroom, a living room, a kitchen and a bathroom."
                },
                {
                    "speaker": "Khaled",
                    "ar": "وعِندَك بَلكون كْمان وِلّا لا؟",
                    "en": "And do you also have a balcony or not?"
                },
                {
                    "speaker": "Rami",
                    "ar": "إي، في بَلكون صْغير عَطَريق الشّارِع الرّئيسي.",
                    "en": "Yes, there is a small balcony on the main street."
                },
                {
                    "speaker": "Khaled",
                    "ar": "عَأيّ طابِق الشِّقّة؟ العِمارَة في أسانْسير؟",
                    "en": "On which floor is the apartment? Does the building have an elevator?"
                },
                {
                    "speaker": "Rami",
                    "ar": "عَالطّابِق الرّابِع، وفي مِصْعَد، بَس خَرْبان أَحْيانًا.",
                    "en": "On the fourth floor, and there is an elevator, but it’s sometimes out of order."
                },
                {
                    "speaker": "Khaled",
                    "ar": "طَيِّب، قَدّيش الإيجار؟ شامِل فاتورَة مَيّ وَكَهْرَبا؟",
                    "en": "Okay, how much is the rent? Does it include water and electricity bills?"
                },
                {
                    "speaker": "Rami",
                    "ar": "الإيجار خَمِس مِيّة شِكِل، بَس فاتورَة المَيّ وَالكَهْرَبا عَلَيْنا.",
                    "en": "The rent is five hundred shekels, but the water and electricity bills are on us."
                },
                {
                    "speaker": "Khaled",
                    "ar": "والجيران؟ هاد السُّؤال المُهِم.",
                    "en": "And the neighbors? That’s the important question."
                },
                {
                    "speaker": "Rami",
                    "ar": "جارتي اللّي حَدِّي طَيِّبَة، بَس الجار اللّي فَوقنا صَوْته عالي بِاللَّيْل.",
                    "en": "My neighbor next door is nice, but the neighbor above us is loud at night."
                },
                {
                    "speaker": "Khaled",
                    "ar": "مُمْكِن تِحْكوا مَعُه بِهُدُوء أَو تِحْكوا مَع صاحِب البَيْت.",
                    "en": "You can talk to him calmly or talk to the landlord."
                },
                {
                    "speaker": "Rami",
                    "ar": "بِصْراحَة في مَشاكِل تانِيَة جَوّا الشِّقّة.",
                    "en": "Honestly, there are other problems inside the apartment."
                },
                {
                    "speaker": "Khaled",
                    "ar": "جَدّ؟ مِثْل إيش؟",
                    "en": "Really? Like what?"
                },
                {
                    "speaker": "Rami",
                    "ar": "المَغْسَلِة في الحَمّام مَسْدودَة، والمَيّ بْتِنْقِط مِن السَّقْف لَمّا أَفَتِّح الحَنَفِيّة.",
                    "en": "The sink in the bathroom is blocked and water drips from the ceiling when I open the tap."
                },
                {
                    "speaker": "Khaled",
                    "ar": "وَلا مَرّة حَكَيت لِصاحِب البَيْت عَن هالمَشاكِل؟",
                    "en": "Have you never told the landlord about these problems?"
                },
                {
                    "speaker": "Rami",
                    "ar": "لِأ، كُنِت مَشْغول بِالنَّقْل وَالاِمْتِحانات، بَس لازم أِتِّصِل فيه.",
                    "en": "No, I was busy with moving and exams, but I must call him."
                },
                {
                    "speaker": "Khaled",
                    "ar": "يَلّا نتِّصِل هَلَّق، أَفْضَل مِن بُكْرَة.",
                    "en": "Let’s call him now; better than tomorrow."
                },
                {
                    "speaker": "Rami",
                    "ar": "أُكَيْ، هَيْ بَتِّصِل... أَلو، مَسّا الخير يا أُسْتاذ سامِر، أنا المُسْتَأجِر الجْديد بالشِّقّة الرّابِعَة.",
                    "en": "Okay, I’m calling… Hello, good evening Mr. Samer, I’m the new tenant in the fourth-floor apartment."
                },
                {
                    "speaker": "Landlord",
                    "ar": "مَسّا النّور، أَهْلًا، أكِيد. شُو الأَخْبار؟ في مَشْكِلَة؟",
                    "en": "Good evening, welcome. Sure. What’s up? Is there a problem?"
                },
                {
                    "speaker": "Rami",
                    "ar": "إي صَراحَةً، في كَم مَشْكِلَة صْغيرَة: المَغْسَلِة في الحَمّام مَسْدودَة، والحَنَفِيّة بْتِخَرّ مَيّ طول الليل.",
                    "en": "Yes honestly, there are a few small problems: the bathroom sink is blocked and the tap leaks water all night."
                },
                {
                    "speaker": "Landlord",
                    "ar": "المَيّ بِتْوَقَّف تامًّا أَو بَس ضَعيفَة؟",
                    "en": "Does the water stop completely or is it just weak?"
                },
                {
                    "speaker": "Rami",
                    "ar": "المَيّ مَوْجودَة بَس المَجْرى مَسْدود، والمَيّ بِتِجْمَع عَالأَرْض.",
                    "en": "The water is there but the drain is blocked, and the water gathers on the floor."
                },
                {
                    "speaker": "Landlord",
                    "ar": "طَيِّب، بَبْعَت سَبّاك يِشوف المَشْكِلَة بُكْرَة الصُّبِح.",
                    "en": "Okay, I’ll send a plumber to check the problem tomorrow morning."
                },
                {
                    "speaker": "Rami",
                    "ar": "وكَمان في مَشْكِلَة بِالكَهْرَبا، لَمّا أَشَغِّل المِكيّف والغَسّالِة مَع بَعْض بِيِنْطْفي الضَّوّ.",
                    "en": "And there’s also a problem with the electricity; when I turn on the AC and the washing machine together, the lights go off."
                },
                {
                    "speaker": "Landlord",
                    "ar": "مُمْكِن المُفَتِّح (القاطِع) ضَعيف، بَجي أَنا اليَوم عَالمَسَا أَتْأَكَّد.",
                    "en": "Maybe the breaker is weak; I’ll come this evening to make sure."
                },
                {
                    "speaker": "Khaled",
                    "ar": "(بِهَمْس) اِسْأَلُه عَن الأسانْسير، ليش كْثير خَرْبان.",
                    "en": "(whispering) Ask him about the elevator, why it’s often broken."
                },
                {
                    "speaker": "Rami",
                    "ar": "كمان حَضْرِتَك، الأسانْسير بِيوقَف بِنُصّ الطّابِق أَحْيانًا، ومَرّة خِفْنا نِعْلَق جُوّاه.",
                    "en": "Also sir, the elevator sometimes stops between floors, and once we were afraid we’d get stuck inside."
                },
                {
                    "speaker": "Landlord",
                    "ar": "عارِف، العُمْرُه قَديم شْوَي، بَس في شِرْكَة صِيانَة حَتِجي هالأُسْبوع تِصَلِّحُه.",
                    "en": "I know, it’s a bit old, but a maintenance company is coming this week to fix it."
                },
                {
                    "speaker": "Rami",
                    "ar": "مِنِيح كْثير، شُكْرًا عَالاِهْتِمام.",
                    "en": "That’s very good, thank you for the attention."
                },
                {
                    "speaker": "Landlord",
                    "ar": "إذا في أيّ مَشْكِلَة تانيِة، بَعْتِلِّي رِسالَة أَو اِتِّصِل فيّي طَوالي.",
                    "en": "If there is any other problem, send me a message or call me immediately."
                },
                {
                    "speaker": "Rami",
                    "ar": "أَكِيد، مَع السَّلامَة.",
                    "en": "Of course, goodbye."
                },
                {
                    "speaker": "Khaled",
                    "ar": "طَيِّب، شُو حَكالَك صاحِب البَيْت؟",
                    "en": "Okay, what did the landlord tell you?"
                },
                {
                    "speaker": "Rami",
                    "ar": "قال بَبْعَت سَبّاك لِلْمَغْسَلِة والحَنَفِيّة، وبَجي هُوّ يِشوف الكَهْرَبا، وَالأسانْسير حَيِصَلِّحوه هالأُسْبوع.",
                    "en": "He said he’ll send a plumber for the sink and tap, and he’ll come himself to check the electricity, and the elevator will be fixed this week."
                },
                {
                    "speaker": "Khaled",
                    "ar": "مْنيح. أَحْسَن إِنَّك تِكْتِب كُل المَشاكِل عَوَرَقَة، حَتى ما تِنْسى شِي.",
                    "en": "Good. It’s better if you write all the problems on a paper so you don’t forget anything."
                },
                {
                    "speaker": "Rami",
                    "ar": "صَح، وعَندي عَقْد الإيجار مَكْتوب فيه إنّو هُمَّ مَسْؤولين يِصَلِّحوا الأَشْيَا الخَرْبانِة.",
                    "en": "Right, and in my rental contract it’s written that they’re responsible for fixing broken things."
                },
                {
                    "speaker": "Khaled",
                    "ar": "إذا ما رَدّوا بَعْدين، مُمْكِن تِقَدِّم شَكْوَى لِلْمَكْتَب تبَع الإيجار.",
                    "en": "If they don’t respond later, you can file a complaint at the rental office."
                },
                {
                    "speaker": "Rami",
                    "ar": "إن شاء الله ما نِوْصَل لَهالْمَرْحَلَة، بَس هَلَّق حاسِس الشِّقّة أَرْتاح بَعْد ما حَكَيْت.",
                    "en": "Inshallah we don’t reach that stage, but now I feel more comfortable about the apartment after talking."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "fi_mushkileh_pattern",
                title: "Using «فِي مُشْكِلَة فِي…» for apartment problems",
                description:
                    "A very simple and useful pattern for problems:\n\n" +
                    "• فِي مُشْكِلَة فِي الْمَيّ. = There is a problem with the water.\n" +
                    "• فِي مُشْكِلَة فِي الضَّوّ. = There is a problem with the light.\n" +
                    "• فِي مُشْكِلَة فِي البَلكُون. = There is a problem with the balcony.\n\n" +
                    "You can add time:\n" +
                    "• فِي مُشْكِلَة فِي الإِنْتَرْنِت مِن امْبَارِح. = There has been a problem with the internet since yesterday.",
            },
            {
                id: "ma_bishtghil_pattern",
                title: "«مَا بِشْتَغِل» – saying something doesn’t work",
                description:
                    "The chunk «مَا بِشْتَغِل» is used for any device or system:\n\n" +
                    "• الضَّوّ مَا بِشْتَغِل. = The light doesn’t work.\n" +
                    "• السِّخَّان مَا بِشْتَغِل. = The heater doesn’t work.\n" +
                    "• الإِنْتَرْنِت مَا بِشْتَغِل مْنِيح. = The internet doesn’t work well.\n\n" +
                    "You don’t need a complicated structure – this simple chunk is enough to make people understand you.",
            },
            {
                id: "maksoor_vs_bitzabbET",
                title: "«مَكْسُور» vs «بِزَبِّط» – broken vs fixed",
                description:
                    "Two important words for talking to a landlord or technician:\n\n" +
                    "• …مَكْسُور = … is broken (adjective)\n" +
                    "  – الشُّبَّاك مَكْسُور. = The window is broken.\n" +
                    "  – البَاب مَكْسُور. = The door is broken.\n\n" +
                    "• بِزَبِّط = he fixes (verb)\n" +
                    "  – حَدَا حَيِزَبِّط الْمُشْكِلَة. = Someone will fix the problem.\n" +
                    "  – مُمْكِن تِزَبِّط الضَّوّ؟ = Can you fix the light?\n\n" +
                    "You can combine them in one short story:\n" +
                    "«البَاب مَكْسُور، وَصَاحِب الْبَيْت حَكَى إِنُّه حَيِزَبِّط الْأُسْبُوع الْجَاي.»",
            },
            {
                id: "polite_complaints",
                title: "Polite complaints with «صَبَاح الْخِير» & «لَوْ سَمَحْت»",
                description:
                    "When complaining, short polite chunks make a big difference:\n\n" +
                    "• صَبَاح الْخِير، فِي مُشْكِلَة فِي… = Good morning, there is a problem with…\n" +
                    "• لَوْ سَمَحْت، مُمْكِن حَدَا يِجِي الْيَوْم؟ = Please, can someone come today?\n" +
                    "• مَا بَدِّي أُزْعِل حَدَا، بَسّ… = I don’t want to upset anyone, but…\n\n" +
                    "These phrases help you complain clearly but still sound polite and friendly.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "apt_q1",
                    questionAr: "«شَقَّة» مَعْنَاهَا:",
                    optionsEn: [
                        "building",
                        "apartment / flat",
                        "balcony",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "apt_q2",
                    questionAr: "أَيّ تَعْبِير أَكْثَر طَبِيعِي لِـ ‘There is a problem with the internet’؟",
                    optionsEn: [
                        "فِي مُشْكِلَة فِي الإِنْتَرْنِت.",
                        "مَا عِنْدِي شَقَّة.",
                        "بَدْفَع الإِيجَار.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "apt_q3",
                    questionAr: "«ضَوّ الْمَطْبَخ مَا بِشْتَغِل» مَعْنَاهَا:",
                    optionsEn: [
                        "The kitchen light doesn’t work.",
                        "The kitchen door is broken.",
                        "There is no kitchen.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "apt_q4",
                    questionAr: "«صَاحِب الْبَيْت» مَعْنَاهَا:",
                    optionsEn: [
                        "the neighbour",
                        "the landlord / owner",
                        "the plumber",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "apt_q5",
                    questionAr: "أَيّ كَلِمَة تُسْتَخْدَم لِـ ‘leak’؟",
                    optionsEn: [
                        "رُطُوبَة",
                        "تَسَرُّب",
                        "ضَجَّة",
                    ],
                    correctIndex: 1,
                },
            ],

            rolePlays: [
                "Role-play 1: Viewing an apartment. Student A is the landlord; Student B is the new tenant. They talk about number of rooms, balcony, rent, electricity, water, and internet. The tenant asks: «فِي كَهْرَبَا كْوَيِّس؟» «وَقَدِّيش الإِيجَار؟».",
                "Role-play 2: Calling the landlord about a problem. Student A calls Student B and explains that there is a problem with water, electricity, or a broken window using chunks like «فِي مُشْكِلَة فِي…», «…مَا بِشْتَغِل», «التَّسَرُّب زَاد». The landlord promises to send someone.",
                "Role-play 3: Talking to a noisy neighbour. Student A is the neighbour; Student B politely complains about noise using «صَبَاح / مَسَا الْخِير», «بِصِرَاحَة فِي ضَجَّة…», «مَا بَدِّي أُزْعِل حَدَا، بَسّ…». Then they agree on a solution.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second description in Palestinian Arabic about your apartment (real or imaginary) and one or two problems in it. Include:\n" +
                "• How many rooms, which floor, and if there is a balcony.\n" +
                "• At least 4 words from the unit (for example: شَقَّة، غُرْفَة نُّوم، صَالُون، مَطْبَخ، بَلكُون، جِيرَان، صَاحِب الْبَيْت).\n" +
                "• At least 2 problem sentences using «فِي مُشْكِلَة فِي…» أو «…مَا بِشْتَغِل».\n" +
                "• One or two polite sentences you would say to the landlord or neighbour.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start by asking the student in English about their current living situation (house, apartment, student dorm, living with family). Then move key words into Palestinian Arabic.",
                "Draw a simple apartment plan (bedroom + living room + kitchen + bathroom + balcony) and label it together in Arabic.",
                "Ask the student which ‘apartment problems’ exist in their city (electricity, water, internet…) and use that to introduce vocabulary.",
            ],
            vocabularySteps: [
                "Teach room names and basic furniture first so the student can build a mental picture of the apartment.",
                "Then introduce the ‘problems’ group as a separate chunk: water, electricity, leak, humidity, noise, broken things.",
                "Highlight and practise the patterns: «فِي مُشْكِلَة فِي…» and «…مَا بِشْتَغِل» with different items.",
            ],
            dialogueSteps: [
                "Act the ‘viewing apartment’ scene as if you are really renting to the student; let them change the numbers (floors, rent).",
                "For the complaint scenes, help the student sound polite but clear. Practise softening expressions like «بِصِرَاحَة»، «مَا بَدِّي أُزْعِل حَدَا بَسّ…».",
                "Encourage the student to adapt the dialogues to their real life (for example, real problems with internet or neighbours).",
            ],
            practiceTips: [
                "Focus on helping the student say short, strong sentences that they could actually use with a landlord or neighbour.",
                "Use small information-gap activities (for example: the teacher has the ‘problem list’ and the student has the ‘solution list’, and they must match them in Arabic).",
                "If the student lives with family, let them imagine a future apartment they want to rent and describe it.",
            ],
            wrapup: [
                "End by summarising the student’s ‘dream apartment plus one problem’ using very natural Palestinian chunks.",
                "Ask the student to write 3 sentences they would actually say to a landlord if there was a real problem in their apartment.",
                "Remind them of the homework and suggest they record it as if they are talking to a friend about their place.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_SHOPPING]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Shopping & Prices",
            lessonTitle: "Unit 9 – Shopping, Markets & Prices",
        },

        overview: {
            title: "Unit 9 – Shopping & Prices",
            description:
                "In this unit, students learn how to shop, ask about prices, bargain, and pay in Palestinian Arabic. The focus is on useful chunks like asking how much, saying it’s expensive or cheap, counting items, and dealing with markets, small shops, and online buying.",
            goals: [
                "Ask and answer about prices clearly and naturally.",
                "Use numbers, currency, and quantity words in real shopping situations.",
                "Express opinion about price: expensive, cheap, fair, too much.",
                "Practice bargaining with polite and effective phrases.",
                "Describe what they want to buy and how many, and handle payment.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== PLACES =====
                {
                    id: "dukkan",
                    ar: "دُكّان",
                    en: "corner shop / mini-market",
                    enArabeezy: "dukkān / dukkan",
                    hint:
                        "Small neighbourhood shop for basic groceries and stuff.",
                    exampleAr: "رُحْت عَالدُّكّان أَشْتِري خُبِز وَحْلِيب.",
                    exampleEn: "I went to the corner shop to buy bread and milk.",
                },
                {
                    id: "ma7al",
                    ar: "مَحَلّ",
                    en: "shop / store",
                    enArabeezy: "ma7all / maḥall",
                    hint:
                        "General word for any shop. Plural: مَحَلّات.",
                    exampleAr: "هَادَا أَحْسَن مَحَلّ أَوَاعِي بِالحَارَة.",
                    exampleEn: "This is the best clothes shop in the neighbourhood.",
                },
                {
                    id: "souk",
                    ar: "سُوق",
                    en: "market",
                    enArabeezy: "sūʾ / souq",
                    hint:
                        "Traditional market or big shopping street with many small shops.",
                    exampleAr: "بِنِنْزِل عَالسُّوق يَوْم الجُمعة.",
                    exampleEn: "We go down to the market on Friday.",
                },
                {
                    id: "supermarket",
                    ar: "سوبِرماركِت",
                    en: "supermarket",
                    enArabeezy: "supermarket",
                    hint:
                        "Big self-service grocery shop.",
                    exampleAr: "المَوارِد الكْبيرَة مِنِشتِريها مِن السوبِرماركِت.",
                    exampleEn: "We buy the big supplies from the supermarket.",
                },

                // ===== MONEY & PRICE =====
                {
                    id: "masari",
                    ar: "مَصاري",
                    en: "money (cash)",
                    enArabeezy: "maṣāri / masari",
                    hint:
                        "Very common Palestinian word for money in general.",
                    exampleAr: "مَعِي مَصاري شْوَيّ بَس.",
                    exampleEn: "I only have a little money.",
                },
                {
                    id: "se3er",
                    ar: "سِعِر",
                    en: "price",
                    enArabeezy: "siʿer / se3er",
                    hint: "How much something costs.",
                    exampleAr: "شُو السِّعِر هُون؟",
                    exampleEn: "What’s the price here?",
                },
                {
                    id: "addeish_hada",
                    ar: "قَدِّيش هَادَا؟",
                    en: "How much is this?",
                    enArabeezy: "addeish hāda? / 2addeish hada?",
                    hint:
                        "Most common way to ask the price of something you’re holding/pointing at.",
                    exampleAr: "قَدِّيش هَادَا، لَو سَمَحِت؟",
                    exampleEn: "How much is this, please?",
                },
                {
                    id: "ghali",
                    ar: "غالي",
                    en: "expensive",
                    enArabeezy: "ghāli / ghali",
                    hint:
                        "Masc: غالي, fem: غاليِة. Opposite of رخيص.",
                    exampleAr: "صَرَاحَةً هَادَا غالي شْوَيّ.",
                    exampleEn: "Honestly, this is a bit expensive.",
                },
                {
                    id: "rakhis",
                    ar: "رخيص",
                    en: "cheap / inexpensive",
                    enArabeezy: "rakhiṣ / rakhis",
                    hint:
                        "Masc: رخيص, fem: رخيصَة. Can be positive (good price) or negative (bad quality).",
                    exampleAr: "السِّعِر رخيص بَس الجَوْدَة عادي.",
                    exampleEn: "The price is cheap but the quality is average.",
                },
                {
                    id: "tanzeel",
                    ar: "تَنْزيلات",
                    en: "sale / discounts",
                    enArabeezy: "tanzīlāt / tanzeelat",
                    hint:
                        "Also خَصْم = discount. Shops write: تَنْزيلات كْبيرَة.",
                    exampleAr: "فِي تَنْزيلات عَلَى الأَوَاعِي هالأَيام.",
                    exampleEn: "There are sales on clothes these days.",
                },
                {
                    id: "khasm",
                    ar: "خَصْم",
                    en: "discount",
                    enArabeezy: "khaṣm / khasm",
                    hint: "Money taken off the original price.",
                    exampleAr: "فِيه خَصْم لِلطُلّاب؟",
                    exampleEn: "Is there a student discount?",
                },

                // ===== PAYMENT =====
                {
                    id: "kash",
                    ar: "كاش",
                    en: "cash",
                    enArabeezy: "cash",
                    hint:
                        "Pay with physical money, not card.",
                    exampleAr: "بِفَضَّل أَدْفَع كاش.",
                    exampleEn: "I prefer to pay in cash.",
                },
                {
                    id: "card",
                    ar: "كَرْت / كَرْد",
                    en: "bank card",
                    enArabeezy: "kart / card",
                    hint:
                        "Bank card / debit or credit.",
                    exampleAr: "مُمْكِن أَدْفَع بِالكَرْت؟",
                    exampleEn: "Can I pay by card?",
                },
                {
                    id: "atm",
                    ar: "صَرّاف آلي",
                    en: "ATM / cash machine",
                    enArabeezy: "ṣarrāf ʾāli / sarraf āli",
                    hint:
                        "Machine to withdraw money from your card.",
                    exampleAr: "فِيه صَرّاف آلي قُدّام المَحَلّ.",
                    exampleEn: "There is an ATM in front of the shop.",
                },
                {
                    id: "wasl",
                    ar: "وَصْل / بَوْن",
                    en: "receipt",
                    enArabeezy: "waṣl / bawn",
                    hint:
                        "Paper you get after paying. Useful if you want to return something.",
                    exampleAr: "خُد الوَصْل، يُمْكِن تْحْتَاجه بَعْدين.",
                    exampleEn: "Take the receipt, you might need it later.",
                },
                {
                    id: "fatora_shop",
                    ar: "فاتورَة",
                    en: "invoice / bill",
                    enArabeezy: "fātūra / fatora",
                    hint:
                        "More official than وَصْل, especially for big purchases or deliveries.",
                    exampleAr: "طَلَبْنَا فاتورَة رَسْمِيّة مِن الشِّرْكَة.",
                    exampleEn: "We asked for an official invoice from the company.",
                },

                // ===== ITEM DETAILS =====
                {
                    id: "no3",
                    ar: "نَوْع",
                    en: "type / kind",
                    enArabeezy: "nawʿ / no3",
                    hint:
                        "What kind: نوع القَمِيص، نوع القَهْوِة، نوع القِماش.",
                    exampleAr: "شُو نَوْع القِماش هَادَا؟",
                    exampleEn: "What type of fabric is this?",
                },
                {
                    id: "lawn",
                    ar: "لَوْن",
                    en: "color",
                    enArabeezy: "lawn",
                    hint:
                        "Plural: أَلْوان. Very common in clothes & shoes shopping.",
                    exampleAr: "عِنْدو أَلْوان تَانِيَة مِن نَفْس الموديل.",
                    exampleEn: "They have other colors of the same model.",
                },
                {
                    id: "7ajm",
                    ar: "حَجِم / مَقاس",
                    en: "size",
                    enArabeezy: "7ajm / maqās",
                    hint:
                        "حَجِم for general size, مَقاس for clothes & shoes.",
                    exampleAr: "مَقاس الحِذَاء كْبِير عَلَيّ شْوَيّ.",
                    exampleEn: "The shoe size is a bit big on me.",
                },
                {
                    id: "kilo",
                    ar: "كِيلو",
                    en: "kilo (kilogram)",
                    enArabeezy: "kilo",
                    hint:
                        "Used in markets for fruits, vegetables, etc.",
                    exampleAr: "بَدّي نُصّ كِيلو بَنادُورَة.",
                    exampleEn: "I want half a kilo of tomatoes.",
                },
                {
                    id: "era",
                    ar: "قِطْعَة",
                    en: "piece / item",
                    enArabeezy: "ʾiṭʿa / 2eṭ3a",
                    hint:
                        "One piece of something: clothes, cake, cheese…",
                    exampleAr: "بَدّي قِطْعَة كْمان مِن هَادَا النَّوْع.",
                    exampleEn: "I want one more piece of this type.",
                },

                // ===== VERBS & USEFUL CHUNKS =====
                {
                    id: "bashtiri",
                    ar: "بَشْتِري",
                    en: "I buy",
                    enArabeezy: "bashtiri",
                    hint:
                        "From اِشْتَرَى = to buy. Very frequent in shopping talk.",
                    exampleAr: "كْلّ مَرَّة بَطْلَع عَالسُّوق بَشْتِري إِشِيّات زْيادَة.",
                    exampleEn: "Every time I go to the market I buy extra things.",
                },
                {
                    id: "biybi3",
                    ar: "بِيِبيع",
                    en: "he sells",
                    enArabeezy: "biybīʿ / biybi3",
                    hint:
                        "From بَاع = to sell. For the shop or seller.",
                    exampleAr: "المَحَلّ بِيِبيع أَحْذِيَة وَشَنْط كْمَان.",
                    exampleEn: "The shop also sells shoes and bags.",
                },
                {
                    id: "baddi_ashtiri",
                    ar: "بَدّي أِشْتِري...",
                    en: "I want to buy...",
                    enArabeezy: "baddi ashtiri...",
                    hint:
                        "Good opener with the seller: بَدّي أِشْتِري بنْطَلُون / هَدِيّة...",
                    exampleAr: "بَدّي أِشْتِري هَدِيّة لِصْحِبْتي.",
                    exampleEn: "I want to buy a gift for my friend.",
                },
                {
                    id: "ana_bas_batfarraj",
                    ar: "أَنا بَس بَتْفَرَّج",
                    en: "I’m just looking",
                    enArabeezy: "ana bas batfarraj",
                    hint:
                        "Polite way to tell the seller you’re not ready to buy yet.",
                    exampleAr: "مِش مُجْبَرَة تِشْتِري، حَتّى لَو حَكِيتِيلُه: أَنا بَس بَتْفَرَّج.",
                    exampleEn: "You’re not obliged to buy, even if you tell him: I’m just looking.",
                },
                {
                    id: "3indak_ishi_tani",
                    ar: "عِنْدَك إِشِي تَانِي؟",
                    en: "Do you have something else?",
                    enArabeezy: "ʿindak ishi tāni? / 3indak ishi tani?",
                    hint:
                        "Useful to ask for another model / color / size.",
                    exampleAr: "عِنْدَك إِشِي تَانِي نَفْس المَقاس بَس لَوْن تَانِي؟",
                    exampleEn: "Do you have something else in the same size but a different color?",
                },
                {
                    id: "mumkin_tnazzel_shway",
                    ar: "مُمْكِن تْنَزِّل شْوَيّ؟",
                    en: "Can you make it a bit cheaper?",
                    enArabeezy: "mumkin tnazzel shway?",
                    hint:
                        "Common bargaining phrase in markets and some shops.",
                    exampleAr: "السِّعِر عالي، مُمْكِن تْنَزِّل شْوَيّ؟",
                    exampleEn: "The price is high, can you lower it a bit?",
                },
                {
                    id: "akher_se3er",
                    ar: "آخِر سِعِر؟",
                    en: "What’s your final price?",
                    enArabeezy: "ā5er se3er? / akher se3er?",
                    hint:
                        "Used in bargaining when you want the lowest price.",
                    exampleAr: "يَعْنِي هَادَا آخِر سِعِر وَلّا فِيه نْقَاص كْمَان؟",
                    exampleEn: "So is this your final price or can you go lower?",
                },
            ],

            extra: [
                {
                    id: "mizaniyyeh",
                    ar: "مِيزانِيّة",
                    en: "budget",
                    enArabeezy: "mīzāniyyeh / mizaniyyeh",
                    hint:
                        "Money you plan to spend.",
                    exampleAr: "مِيزانِيّتي لِلشوبينغ هالشَّهِر مَحْدودَة.",
                    exampleEn: "My shopping budget this month is limited.",
                },
                {
                    id: "safqa",
                    ar: "صَفْقَة / لُقْطَة",
                    en: "good deal / bargain",
                    enArabeezy: "ṣafʾa / loʾta / lo2ta",
                    hint:
                        "لُقْطَة = really good catch / bargain.",
                    exampleAr: "هَادِي لُقْطَة، السِّعِر كْتِير مْناسِب.",
                    exampleEn: "This is a steal, the price is very good.",
                },
                {
                    id: "istibdal",
                    ar: "اِسْتِبْدال",
                    en: "exchange (change an item)",
                    enArabeezy: "istibdāl / istibdal",
                    hint:
                        "Changing item for another one. Often with وَصْل.",
                    exampleAr: "مُمْكِن اِسْتِبْدال بِنَفْس السِّعِر بَس مَقاس تَانِي؟",
                    exampleEn: "Can I exchange it for the same price but a different size?",
                },
                {
                    id: "istirja3",
                    ar: "اِسْتِرْجاع",
                    en: "return (give back item)",
                    enArabeezy: "istirjāʿ / istirja3",
                    hint:
                        "Taking item back to the shop and getting money back.",
                    exampleAr: "السِّياسَة عِنْدْهُم مَا فِيه اِسْتِرْجاع، بَس اِسْتِبْدال.",
                    exampleEn: "Their policy has no returns, only exchanges.",
                },
                {
                    id: "3ard_khas",
                    ar: "عَرْض خَاصّ",
                    en: "special offer",
                    enArabeezy: "ʿarḍ khāṣṣ / 3ard khaṣ",
                    hint:
                        "Temporary promotion: 2 for 1, or cheaper price.",
                    exampleAr: "فِي عَرْض خَاصّ عَلَى الشَّمْبُو الْيَوْم.",
                    exampleEn: "There is a special offer on shampoo today.",
                },
                {
                    id: "khidmet_zaba2en",
                    ar: "خِدْمِة زَبائِن",
                    en: "customer service",
                    enArabeezy: "khidmet zabāʾen / khidmet zaba2en",
                    hint:
                        "Where you complain or ask for help with a purchase.",
                    exampleAr: "خِدْمِة الزَّبائِن فِي هالمَحَلّ مُمْتازَة.",
                    exampleEn: "Customer service in this shop is excellent.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE
        // ====================================
        dialogue: {
            lines: [
                {
                    "speaker": "Nader",
                    "ar": "مَسّا الخير يا يوسف، شُو أخْبارَك؟",
                    "en": "Good evening, Yousef, how are you?"
                },
                {
                    "speaker": "Yousef",
                    "ar": "مَسّا النّور، تَمام. اليوم عندي وَقْت أشتري شِي لِلحَفْلَة.",
                    "en": "Good evening, I’m fine. Today I have time to buy something for the party."
                },
                {
                    "speaker": "Nader",
                    "ar": "طَيّب، مُمْكِن نروح عَالدُّكّان القَريب، سَامِع إنّو في تنزيلات هالأُسْبوع.",
                    "en": "Okay, we can go to the nearby shop; I heard there are discounts this week."
                },
                {
                    "speaker": "Yousef",
                    "ar": "مُمْتاز، يِلّا نِروح.",
                    "en": "Great, let’s go."
                },
                {
                    "speaker": "Yousef",
                    "ar": "سَلام عَليكم، قَدّيش سِعِر هاد القَمِيص؟",
                    "en": "Peace be upon you, how much is this shirt?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "هَادَا بِخَمْسُمِيّة شِكِل.",
                    "en": "This one is five hundred shekels."
                },
                {
                    "speaker": "Nader",
                    "ar": "غالي شْوَي. مُمْكِن تِنَزِّل السِّعِر؟",
                    "en": "It’s a bit expensive. Can you lower the price?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "بِقْدَر أعمل لَكُم تَنزيل صْغير، خَلّيه أَرْبَعْمِيّة وَخَمْسِين.",
                    "en": "I can give you a small discount; let’s make it four hundred fifty."
                },
                {
                    "speaker": "Nader",
                    "ar": "وفي تَنزيلات تانيِة هالأُسْبوع عَالأغراض التّانْيِة؟",
                    "en": "And are there other discounts this week on the other items?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "إي، في تنزيلات عَالمُعْظَم، بَس هالقَمِيص من البِضاعَة الجْديدَة.",
                    "en": "Yes, there are discounts on most things, but this shirt is from the new stock."
                },
                {
                    "speaker": "Yousef",
                    "ar": "طَيّب، شُوف هاد القَمِيص التّاني، هُوّ أَرْخَص؟",
                    "en": "Okay, look at this other shirt, is it cheaper?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "إي، هَادَا أَرْخَص، سِعْرُه أَرْبَعْمِيّة شِكِل.",
                    "en": "Yes, this one is cheaper, its price is four hundred shekels."
                },
                {
                    "speaker": "Nader",
                    "ar": "مُمْكِن نِقارن الجَوْدَة بَيْن الإِثْنَيْن؟",
                    "en": "Can we compare the quality between the two?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "الأَوَّل جَوْدَتُه أَعْلَى والقماش أَغْلَى، بَس التّاني كْمان مْنيح لِلاِسْتِعْمال اليومي.",
                    "en": "The first has higher quality and more expensive fabric, but the second is also good for daily use."
                },
                {
                    "speaker": "Yousef",
                    "ar": "أنا مِيزانِيتي مَحْدودَة، بَدّي شِي مُمْكِن أَشتِريه وما يْكَسِّرني.",
                    "en": "My budget is limited, I want something I can buy without it breaking me."
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "مُمْكِن أعمل تَنزيل عَالتّاني، نِخَلّيه تْلَاتْمِيّة وَخَمْسِين إِذا بتاخُدُه هَلَّق.",
                    "en": "I can give a discount on the second one, we make it three hundred fifty if you take it now."
                },
                {
                    "speaker": "Nader",
                    "ar": "هَيك أَحْسَن. بَصِير تْلَاتْمِيّة وَخَمْسِين بِالدَّفْع عَالبِطاقَة (الكَرْد)؟",
                    "en": "That’s better. Will it still be three hundred fifty if we pay by card?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "بِالبِطاقَة في عَلَيْها رُسُوم وبِضِيف ضَرِيبَة صْغيرَة.",
                    "en": "With card there are fees and we add a small tax."
                },
                {
                    "speaker": "Yousef",
                    "ar": "قَدّيش تَقْريبًا الضَّرِيبَة والرُّسُوم؟",
                    "en": "Approximately how much are the tax and fees?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "تَقْريبًا خَمِسْطَعْش شِكِل زِيادَة.",
                    "en": "Around fifteen shekels extra."
                },
                {
                    "speaker": "Nader",
                    "ar": "طَيّب، مُمْكِن نَدْفَع كاش وتِضَلّ تْلَاتْمِيّة وَخَمْسِين بَس؟",
                    "en": "Okay, can we pay cash and keep it three hundred fifty only?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "إي، الكاش أَفْضَل، خَلّيه تْلَاتْمِيّة وَخَمْسِين كاش بِلَا زِيادَة.",
                    "en": "Yes, cash is better, let’s keep it three hundred fifty cash with no extra."
                },
                {
                    "speaker": "Yousef",
                    "ar": "لَو اشْتَرَيْنا شِي تاني مَعُه، مُمْكِن تِنَزِّل كْمان شْوَي؟",
                    "en": "If we buy something else with it, can you lower the price a bit more?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "إِذا أَخَدتوا كَم قِطْعَة، بِنِقْدَر نِعْمَل تَنزيل إِضافي عَالحِساب الكُلِّي.",
                    "en": "If you take a few items, we can give an additional discount on the total."
                },
                {
                    "speaker": "Nader",
                    "ar": "طَيّب، هَاد رِباط (كِرافِت) كْمان حْلُو. قَدّيش سِعْرُه؟",
                    "en": "Okay, this tie is also nice. How much is it?"
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "هَاد بِخَمْسين شِكِل، بَس إِذا مَع القَمِيص، بَعْطيكُم التّنتين بِتْلَاتْمِيّة وَتْسعِين.",
                    "en": "This is fifty shekels, but if it’s with the shirt, I’ll give you both for three hundred ninety."
                },
                {
                    "speaker": "Yousef",
                    "ar": "تْلَاتْمِيّة وَتْسعِين مْنيحَة، بِناسِب مِيزانِيتي.",
                    "en": "Three hundred ninety is good, it suits my budget."
                },
                {
                    "speaker": "Nader",
                    "ar": "مْوافِقين، مْنِخُد القَمِيص وَالرِّباط.",
                    "en": "We agree, we’ll take the shirt and the tie."
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "بَدّكُم كيس كْبير وَلّا صْغير؟",
                    "en": "Do you want a big bag or a small one?"
                },
                {
                    "speaker": "Nader",
                    "ar": "كيس صْغير بِكَفّي، شُكْرًا.",
                    "en": "A small bag is enough, thank you."
                },
                {
                    "speaker": "Shopkeeper",
                    "ar": "هاي الكيس، وهاي الفاتورَة، أَهْلًا وسَهْلًا فيكُم.",
                    "en": "Here is the bag, and here is the receipt, you’re most welcome."
                },
                {
                    "speaker": "Yousef",
                    "ar": "شُكْرًا إِلَك، الله يُعْطيك العافْيِة.",
                    "en": "Thank you, may God give you health."
                },
                {
                    "speaker": "Nader",
                    "ar": "يِلّا نِرْجَع عَالبَيْت وَنُجَرِّب القَمِيص، بِفْكِر يْطْلَع كْتير مُناسِب لِلحَفْلَة.",
                    "en": "Let’s go back home and try the shirt on; I think it will be very suitable for the party."
                },
                {
                    "speaker": "Yousef",
                    "ar": "إي، شَكْلُه أَحْلى إِشِي شُفْناه اليوم.",
                    "en": "Yes, it looks like the nicest thing we saw today."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "bikamm_phrase",
                title: "Asking price with بِكَم / بِكَم ...؟",
                description:
                    "Use the short question وَكَام or بِكَم to ask about price:\n\n" +
                    "• بِكَم هَادَا؟ = How much is this?\n" +
                    "• بِكَم بِالقَمِيص؟ = How much for the shirt?\n" +
                    "• بِكَم الكِيلُو؟ = How much per kilo?\n\n" +
                    "Very natural in markets and shops. Short, clear, and direct.",
            },
            {
                id: "kthir_shway_opinion",
                title: "Saying something is too expensive or a little cheap",
                description:
                    "Use simple adjectives and little modifiers:\n\n" +
                    "• غَالِي كْتِير = too expensive.\n" +
                    "• رَخِيص / مُنَاسِب = cheap or reasonable.\n" +
                    "• شْوَيّ = a bit. Combine: مُمْكِن تِنَاقِص شْوَيّ؟ = Can you reduce a bit?\n\n" +
                    "These phrases are enough to start bargaining politely.",
            },
            {
                id: "numbers_and_kilo",
                title: "Using numbers and measurements",
                description:
                    "Say the quantity first, then the item, or use a unit:\n\n" +
                    "• وَاحِد كِيلُو طَمَاطِم = one kilo of tomatoes.\n" +
                    "• اتْنَيْن خُبز = two breads.\n" +
                    "• تَلَاتَة كِيلُوهَات بَطَّاطَا = three kilos of potatoes.\n\n" +
                    "For shopping, this structure is enough to communicate what you want clearly.",
            },
            {
                id: "payment_chunk",
                title: "Paying with بَدْفَع and methods",
                description:
                    "Use بَدْفَع + payment method:\n\n" +
                    "• بَدْفَع نَقْد = I pay cash.\n" +
                    "• بَدْفَع مَعْ كَارْد = I pay with card.\n" +
                    "• بَدْفَع عِنْد التَّسْلِيم = I pay on delivery.\n\n" +
                    "Simple chunk, common in shops, markets, and online.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "shop_q1",
                    questionAr: "أَيّ تَعْبِير تَسْتَعْمِلُه لِـ ‘How much is this?’؟",
                    optionsEn: ["بِكَم هَادَا؟", "بَدْفَع هَادَا", "غَالِي كْتِير"],
                    correctIndex: 0,
                },
                {
                    id: "shop_q2",
                    questionAr: "مَعْنَى ‘غَالِي’ هُوَّ:",
                    optionsEn: ["cheap", "expensive", "beautiful"],
                    correctIndex: 1,
                },
                {
                    id: "shop_q3",
                    questionAr: "مَعْنَى ‘رَخِيص’ هُوَّ:",
                    optionsEn: ["cheap", "expensive", "small"],
                    correctIndex: 0,
                },
                {
                    id: "shop_q4",
                    questionAr: "أَيّ جُمْلَة تُسْتَعْمَل لِلْبَحْث عَنْ تَخْفِيض؟",
                    optionsEn: ["مَا بِشْتَغِل", "مُمْكِن نِنَاقِص شْوَيّ؟", "بَدْفَع كَارْد"],
                    correctIndex: 1,
                },
                {
                    id: "shop_q5",
                    questionAr: "مَعْنَى ‘كِيلُو’ هُوَّ:",
                    optionsEn: ["piece", "kilogram", "meter"],
                    correctIndex: 1,
                },
            ],

            rolePlays: [
                "Role-play 1: Market bargaining. Student A is the seller; Student B is the buyer. Buyer asks price, says it is too expensive, asks to reduce a bit, then pays. Use numbers for kilos or quantity.",
                "Role-play 2: Clothes shop. Buyer sees a shirt and asks price. Seller gives price; buyer requests discount politely; seller offers minor reduction. Buyer decides to buy or leave. Use polite phrases and numbers.",
                "Role-play 3: Online deal. Buyer asks for special student price. Seller gives discount. Buyer chooses payment method and says they will pay. Use chunk for online payment or cash on delivery.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second audio in Palestinian Arabic about a shopping experience. Include:\n" +
                "• What you bought and where (market, shop, online).\n" +
                "• The price and whether it was expensive or cheap.\n" +
                "• Use at least 3 numbers or measurements, and mention the currency.\n" +
                "• Include one bargaining sentence or a polite request for a discount.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start by asking the student what they usually buy when they go out: snacks, clothes, phone credit, etc.",
                "Show a picture of a small market stall or a shop and ask them to name items in English; then translate into Palestinian Arabic and add a price.",
            ],
            vocabularySteps: [
                "Teach key price and money words first: بِكَم؟, شِيكِل, غَالِي, رَخِيص, مُنَاسِب.",
                "Then add numbers and quantities: وَاحِد, اتْنَيْن, تَلَاتَة, كِيلُو. Practice with real items or drawings.",
                "Add verbs and chunks in small sets: بَدْفَع, بِيِعْنُوهُ, بِنَاقِص, بِيِعْطِي. Use them with a single item to reinforce.",
            ],
            dialogueSteps: [
                "Use Scene 1 and Scene 2 scripts as role-play scripts. Let the student act as seller and buyer in both sequences.",
                "Encourage imitation of polite phrases; repeat the bargaining line a few times until it feels natural.",
                "Adapt numbers and items to match the student’s real market or shop experience.",
            ],
            practiceTips: [
                "If the student seems shy to bargain, start with a very small reduction example and praise them for trying.",
                "Point out tiny wins: even reducing three shekels is a success; it builds confidence.",
                "Use short timed drills: student asks price, seller answers; switch quickly between roles.",
            ],
            wrapup: [
                "Summarize the main chunks and numbers on a small list the student can screenshot or copy.",
                "Ask the student to write 2–3 items they will buy this week with prices, even if imaginary.",
                "Remind them of homework and that the audio can be about a real or imagined shopping trip.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:هان وصلنا
    [LESSON_ID_WEATHER]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Weather & Small Talk",
            lessonTitle: "Unit 10 – Weather & Small Talk",
        },

        overview: {
            title: "Unit 10 – Weather & Small Talk",
            description:
                "In this unit, students learn how to talk about the weather in the present, past, and future, and how to use weather as a natural way to start friendly small talk in Palestinian Arabic.",
            goals: [
                "Describe basic weather conditions (hot, cold, windy, rainy, humid).",
                "Talk about weather in different cities and seasons.",
                "Use small talk to start and continue light conversations.",
                "Use past/future to say how the weather was or will be.",
                "Express personal opinions about weather they like or hate.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== BASIC WEATHER WORDS =====
                {
                    id: "el_jaww",
                    ar: "الجَوّ",
                    en: "the weather",
                    enArabeezy: "el-jaww",
                    hint: "Most common word for ‘weather’ in Palestinian Arabic.",
                    exampleAr: "اليوم الجَوّ حِلُو.",
                    exampleEn: "The weather is nice today.",
                },
                {
                    id: "taqs",
                    ar: "طَقْس",
                    en: "weather / climate",
                    enArabeezy: "taʔs / ta2s",
                    hint: "More formal than الجَوّ, used in news or apps.",
                    exampleAr: "بَشوف الطَّقْس قَبِل ما أَطْلَع.",
                    exampleEn: "I check the weather before I go out.",
                },
                {
                    id: "bared",
                    ar: "بَرْد",
                    en: "cold (weather)",
                    enArabeezy: "bard",
                    hint: "‘There is cold’: في بَرْد اليوم.",
                    exampleAr: "فِي بَرْد قَوِي بِاللَّيْل.",
                    exampleEn: "It’s very cold at night.",
                },
                {
                    id: "shawb",
                    ar: "شُوب",
                    en: "heat / hot weather",
                    enArabeezy: "shob",
                    hint: "Used for hot weather, not for spicy food!",
                    exampleAr: "الدُّنْيا شُوب هالأَيام.",
                    exampleEn: "It’s really hot these days.",
                },
                {
                    id: "daafi",
                    ar: "دَافِي",
                    en: "warm",
                    enArabeezy: "daafi",
                    hint: "Masc: دَافِي، fem: دَافْيَة.",
                    exampleAr: "الجَوّ دَافِي وَمُرِيح اليوم.",
                    exampleEn: "The weather is warm and comfortable today.",
                },
                {
                    id: "mureeh",
                    ar: "مُرِيح",
                    en: "comfortable (weather)",
                    enArabeezy: "muree7",
                    hint: "Not too hot, not too cold.",
                    exampleAr: "الجَوّ مُرِيح، مْناسِب لِلْطِّلْعَة.",
                    exampleEn: "The weather is comfortable, good for going out.",
                },
                {
                    id: "rtoubeh",
                    ar: "رُطُوبَة",
                    en: "humidity",
                    enArabeezy: "ruṭoobe / rotoobe",
                    hint: "Very common in coastal cities.",
                    exampleAr: "الرُّطُوبَة عَالْآخِر بِالصَّيْف.",
                    exampleEn: "The humidity is extreme in summer.",
                },

                // ===== SUN / CLOUD / RAIN =====
                {
                    id: "shams",
                    ar: "شَمِس",
                    en: "sun",
                    enArabeezy: "shamis / shams",
                    hint: "Everyday word for sun.",
                    exampleAr: "الشَّمِس قَوِيّة، لَبْسِة نَظّارَة؟",
                    exampleEn: "The sun is strong, are you wearing sunglasses?",
                },
                {
                    id: "mshammes",
                    ar: "مْشَمَّس",
                    en: "sunny",
                    enArabeezy: "mshammes",
                    hint: "From شمس. Sunny day.",
                    exampleAr: "بُكْرَا مْشَمَّس، مْنِطْلَع نِتْمَشّى؟",
                    exampleEn: "Tomorrow is sunny, shall we go for a walk?",
                },
                {
                    id: "ghem",
                    ar: "غَيْم",
                    en: "cloud",
                    enArabeezy: "gheim / gheym",
                    hint: "Cloud itself; for ‘clouds’: غيوم.",
                    exampleAr: "في غَيْم كْتير بالسَّما.",
                    exampleEn: "There are a lot of clouds in the sky.",
                },
                {
                    id: "mghayyam",
                    ar: "مْغَيَّم",
                    en: "cloudy / overcast",
                    enArabeezy: "mghayyam",
                    hint: "Sky full of clouds.",
                    exampleAr: "السَّما مْغَيَّمَة اليوم.",
                    exampleEn: "The sky is cloudy today.",
                },
                {
                    id: "matar",
                    ar: "مَطَر",
                    en: "rain",
                    enArabeezy: "maTar / matar",
                    hint: "There is rain: في مَطَر.",
                    exampleAr: "أَحْلَى شِي لَمّا يِنْزِل مَطَر.",
                    exampleEn: "The nicest thing is when it rains.",
                },
                {
                    id: "btemTor",
                    ar: "بْتِمْطِر",
                    en: "it’s raining",
                    enArabeezy: "btemTor / btimTor",
                    hint: "Present tense ‘to rain’.",
                    exampleAr: "بَرّا بْتِمْطِر، خُد شَمْسِيّة.",
                    exampleEn: "It’s raining outside, take an umbrella.",
                },
                {
                    id: "shamseyyeh",
                    ar: "شَمْسِيّة",
                    en: "umbrella",
                    enArabeezy: "shamseyyeh",
                    hint: "Literally ‘sun-thing’, used for rain umbrella too.",
                    exampleAr: "وين الشَّمْسِيّة تَبَعِتَك؟",
                    exampleEn: "Where’s your umbrella?",
                },
                {
                    id: "ri7",
                    ar: "رِيح",
                    en: "wind",
                    enArabeezy: "ree7",
                    hint: "Strong wind: رِيح قَوِيّة.",
                    exampleAr: "الرِّيح قَوِيّة، سَكِّر الشُّبّاك.",
                    exampleEn: "The wind is strong, close the window.",
                },
                {
                    id: "3asefeh",
                    ar: "عَاصْفَة",
                    en: "storm",
                    enArabeezy: "3aaSfeh / ʿaasfeh",
                    hint: "Wind + strong rain = عاصفة.",
                    exampleAr: "اللَّيْلِة في عَاصْفَة، مَنْضَلّ فِي الْبَيْت.",
                    exampleEn: "Tonight there’s a storm, we’ll stay home.",
                },
                {
                    id: "talj",
                    ar: "تَلْج",
                    en: "snow",
                    enArabeezy: "talj",
                    hint: "Not very common in many cities, but known.",
                    exampleAr: "نَزَل تَلْج بِاللَّيْل.",
                    exampleEn: "It snowed last night.",
                },
                {
                    id: "dababb",
                    ar: "ضَباب",
                    en: "fog",
                    enArabeezy: "dabāb / dabaab",
                    hint: "Low visibility, especially in morning.",
                    exampleAr: "في ضَباب عَالطَّرِيق، اسْوُق هَداوِي.",
                    exampleEn: "There’s fog on the road, drive slowly.",
                },

                // ===== TEMPERATURE & SEASONS =====
                {
                    id: "darajet_el7arara",
                    ar: "دَرَجَة الحَرارَة",
                    en: "temperature",
                    enArabeezy: "darajet el-7arāra",
                    hint: "Literally ‘degree of heat’.",
                    exampleAr: "دَرَجَة الحَرارَة اليوم حَوالَي عِشْرين.",
                    exampleEn: "The temperature today is around twenty.",
                },
                {
                    id: "ta7t_el_sefr",
                    ar: "تَحْت الصِّفِر",
                    en: "below zero",
                    enArabeezy: "ta7t es-sefr",
                    hint: "Very cold weather.",
                    exampleAr: "بِهالْبَلَد الحَرارَة تَحْت الصِّفِر بِالشِّتَا.",
                    exampleEn: "In this country the temperature is below zero in winter.",
                },
                {
                    id: "abrad_min",
                    ar: "أَبْرَد مِن...",
                    en: "colder than...",
                    enArabeezy: "abrad min...",
                    hint: "Comparative: اليوم أَبْرَد مِن امبارِح.",
                    exampleAr: "اليوم أَبْرَد مِن امْبارِح.",
                    exampleEn: "Today is colder than yesterday.",
                },
                {
                    id: "fasl",
                    ar: "فَصِل",
                    en: "season",
                    enArabeezy: "faSl / faSel",
                    hint: "Plural: فُصُول.",
                    exampleAr: "شُو أَحْلَى فَصِل عِنْدَك؟",
                    exampleEn: "What’s your favourite season?",
                },
                {
                    id: "seif",
                    ar: "صَيْف",
                    en: "summer",
                    enArabeezy: "Seyf / seif",
                    hint: "",
                    exampleAr: "مَا بَحِبّ الصَّيْف، الشُّوب بِجَنِّن.",
                    exampleEn: "I don’t like summer, the heat is crazy.",
                },
                {
                    id: "sheta",
                    ar: "شِتَا",
                    en: "winter",
                    enArabeezy: "sheta",
                    hint: "",
                    exampleAr: "بِالشِّتَا بَلْبِس أَواعي ثَقِيلَة.",
                    exampleEn: "In winter I wear heavy clothes.",
                },
                {
                    id: "rabee3",
                    ar: "رَبِيع",
                    en: "spring",
                    enArabeezy: "rabee3",
                    hint: "",
                    exampleAr: "الرَّبِيع فَصِل مُناسِب لِلْمَشِي.",
                    exampleEn: "Spring is a good season for walking.",
                },
                {
                    id: "kharif",
                    ar: "خَرِيف",
                    en: "autumn / fall",
                    enArabeezy: "kharif",
                    hint: "",
                    exampleAr: "بِالخَرِيف الوَرَق بْيُوقَع مِن الشَّجَر.",
                    exampleEn: "In autumn the leaves fall from the trees.",
                },

                // ===== CLOTHES & DAILY TALK =====
                {
                    id: "jaket",
                    ar: "جاكِت",
                    en: "jacket",
                    enArabeezy: "jaket",
                    hint: "Used for any light/medium jacket.",
                    exampleAr: "لا تِنْسى الجاكِت، بَرّا بَرْد.",
                    exampleEn: "Don’t forget your jacket, it’s cold outside.",
                },
                {
                    id: "awa3i_2teeleh",
                    ar: "أَواعِي ثَقِيلَة",
                    en: "heavy clothes",
                    enArabeezy: "awa3i ta2eeleh",
                    hint: "Winter clothes: jackets, sweaters…",
                    exampleAr: "طَلَّعْنا الأَواعِي الثَّقِيلَة لِلشِّتَا.",
                    exampleEn: "We took out the heavy clothes for winter.",
                },
                {
                    id: "mblall",
                    ar: "مُبْتَلّ",
                    en: "wet (from rain)",
                    enArabeezy: "mobtall / mobtall",
                    hint: "Used for clothes, ground, hair…",
                    exampleAr: "رَجَعْت مُبْتَلّ مِن المَطَر.",
                    exampleEn: "I came back soaked from the rain.",
                },

                // ===== SMALL TALK CHUNKS =====
                {
                    id: "keef_el_jaww_3andak",
                    ar: "كِيف الجَوّ عِنْدَك؟",
                    en: "How’s the weather where you are?",
                    enArabeezy: "keef el-jaww 3andak?",
                    hint: "Perfect opener for small talk.",
                    exampleAr: "كِيف الجَوّ عِنْدَك اليَوْم؟",
                    exampleEn: "How’s the weather where you are today?",
                },
                {
                    id: "el_jaww_mnasib",
                    ar: "الجَوّ مْناسِب لِلْطِّلْعَة.",
                    en: "The weather is good for going out.",
                    enArabeezy: "el-jaww mnasib lil-ṭal3a",
                    hint: "Nice positive comment about the day.",
                    exampleAr: "اليوم الجَوّ مْناسِب لِلْطِّلْعَة عَالبَحِر.",
                    exampleEn: "Today the weather is good for going out to the beach.",
                },
                {
                    id: "ma_bastahmel_el_shob",
                    ar: "مَا بَسْتَحْمِل الشُّوب.",
                    en: "I can’t stand the heat.",
                    enArabeezy: "ma basta7mel esh-shob",
                    hint: "Strong opinion about weather.",
                    exampleAr: "صَرَاحَةً، مَا بَسْتَحْمِل الشُّوب.",
                    exampleEn: "Honestly, I can’t stand the heat.",
                },
                {
                    id: "b7eb_el_matar",
                    ar: "بَحِبّ المَطَر.",
                    en: "I love the rain.",
                    enArabeezy: "ba7ebb el-matar",
                    hint: "",
                    exampleAr: "بَحِبّ المَطَر، بْحِسّ الجَوّ أَهْدَى.",
                    exampleEn: "I love the rain; I feel the weather is calmer.",
                },
                {
                    id: "t2lib_saree3",
                    ar: "الجَوّ بْيِقْلِب سَرِيع.",
                    en: "The weather changes quickly.",
                    enArabeezy: "el-jaww byi2leb saree3",
                    hint: "Use for spring or unstable days.",
                    exampleAr: "بِالرَّبِيع الجَوّ بْيِقْلِب سَرِيع.",
                    exampleEn: "In spring the weather changes quickly.",
                },
            ],

            extra: [
                {
                    id: "hawa_nashef",
                    ar: "هَوا ناشِف",
                    en: "dry air",
                    enArabeezy: "hawa nashef",
                    hint: "Opposite of humid air.",
                    exampleAr: "بِالْجَبَل الهَوا ناشِف أَكْثَر.",
                    exampleEn: "In the mountains the air is drier.",
                },
                {
                    id: "hawa_m5noq",
                    ar: "هَوا مْخْنُوق",
                    en: "stuffy air",
                    enArabeezy: "hawa mkhnooʔ / mkhno2",
                    hint: "Air feels heavy or polluted.",
                    exampleAr: "الجَوّ مْخْنُوق جُوّا، اِفْتَح الشُّبّاك شْوَيّ.",
                    exampleEn: "The air inside feels stuffy, open the window a bit.",
                },
                {
                    id: "nashret_ta2s",
                    ar: "نَشْرَة طَقْس",
                    en: "weather report / forecast",
                    enArabeezy: "nashret ta2s",
                    hint: "Like on TV or apps.",
                    exampleAr: "شُفْت نَشْرَة الطَّقْس قَبِل ما تْسافِرِي؟",
                    exampleEn: "Did you check the weather report before you travelled?",
                },
                {
                    id: "dardashe_3an_el_jaww",
                    ar: "دَرْدَشَة عَن الجَوّ",
                    en: "small talk about the weather",
                    enArabeezy: "dardashe 3an el-jaww",
                    hint: "Talking about the weather just to start a conversation.",
                    exampleAr: "أَحْيَانًا مِنْبَلِّش الدَّرْس بِدَرْدَشَة عَن الجَوّ.",
                    exampleEn: "Sometimes we start the lesson with small talk about the weather.",
                },
                {
                    id: "nashaf_el_matar",
                    ar: "المَطَر نَشَف",
                    en: "the rain dried up / stopped",
                    enArabeezy: "el-matar nashaf",
                    hint: "Colloquial way to say the rain has stopped.",
                    exampleAr: "المَطَر نَشَف، يَلّا نِطْلَع.",
                    exampleEn: "The rain has stopped, let’s go out.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE (3 LONG SCENES)
        // ====================================
        dialogue: {
            "lines": [
                {
                    "speaker": "Lina",
                    "ar": "صَباح الخير! كِيف الجَوّ بُرا؟",
                    "en": "Good morning! How’s the weather outside?"
                },
                {
                    "speaker": "Rania",
                    "ar": "صَباح النّور! مِشْمِس وشُوب شْوَي.",
                    "en": "Good morning! Sunny and a bit hot."
                },
                {
                    "speaker": "Lina",
                    "ar": "بِفَكِّر نِطْلَع نِتْمَشّى.",
                    "en": "I think we should go for a walk."
                },
                {
                    "speaker": "Rania",
                    "ar": "مُمْكِن، بَس إحْتِمال تِنْزَل مَطَر بَعْد الضُّهُر.",
                    "en": "Maybe, but it might rain this afternoon."
                },
                {
                    "speaker": "Lina",
                    "ar": "عَفْكَرَة، شُوب تْحِبّي أكْتَر؟ الصَّيف ولا الشِّتا؟",
                    "en": "By the way, what do you like more? Summer or winter?"
                },
                {
                    "speaker": "Rania",
                    "ar": "بِصِراحَة الشِّتا. بَحبّ الجَوّ البَارِد.",
                    "en": "Honestly winter. I love the cold weather."
                },
                {
                    "speaker": "Lina",
                    "ar": "أنا العَكْس! بَحبّ الصَّيف والبحَر.",
                    "en": "I’m the opposite! I love summer and the beach."
                },
                {
                    "speaker": "Rania",
                    "ar": "كُلّ فَصْل إِلُه جَمالُه.",
                    "en": "Every season has its beauty."
                },
                {
                    "speaker": "Lina",
                    "ar": "إحْتِمال نِشوف ثَلْج هَالسَّنَة؟",
                    "en": "Maybe we’ll see snow this year?"
                },
                {
                    "speaker": "Rania",
                    "ar": "إذا الحَرارَة نَزَلَت تَحْت الصّفِر، أكيد!",
                    "en": "If the temperature drops below zero, for sure!"
                },
                {
                    "speaker": "Lina",
                    "ar": "شُو خَبَرِك بِالجامْعَة؟",
                    "en": "How’s everything at university?"
                },
                {
                    "speaker": "Rania",
                    "ar": "تَمام، بُدرس كْتير. وإنتي؟",
                    "en": "Good, studying a lot. And you?"
                },
                {
                    "speaker": "Lina",
                    "ar": "نَفْس الإِشي، بَس عِنْدي وِقْت لَلدَّرْدَشَة!",
                    "en": "Same thing, but I have time for chatting!"
                },
                {
                    "speaker": "Rania",
                    "ar": "دَردَشة الطَّقْس أَسْهَل دَردَشة!",
                    "en": "Weather talk is the easiest small talk!"
                },
                {
                    "speaker": "Lina",
                    "ar": "إسْمَعي! الهَوا قَوِيّ. نِلبُس جاكِت؟",
                    "en": "Listen! The wind is strong. Should we wear jackets?"
                },
                {
                    "speaker": "Rania",
                    "ar": "إي، خُدي جاكِت وأَواعي ثَقيلَة.",
                    "en": "Yes, take a jacket and heavy clothes."
                },
                {
                    "speaker": "Lina",
                    "ar": "الجَوّ اتْقَلَّب سَرِيع!",
                    "en": "The weather changed quickly!"
                },
                {
                    "speaker": "Rania",
                    "ar": "إحْتِمال مُؤَقَّت.",
                    "en": "Maybe it’s temporary."
                },
                {
                    "speaker": "Lina",
                    "ar": "مِنِسْتَنى شْوَي؟ بَرْكي نَشّف مَطَر.",
                    "en": "Shall we wait a bit? Maybe the rain stops."
                },
                {
                    "speaker": "Rania",
                    "ar": "طَيِّب. نِتْفَرَّج عَالتَّقْس.",
                    "en": "Okay. Let’s check the forecast."
                },
                {
                    "speaker": "Lina",
                    "ar": "لَو ضَلّ الجَوّ مُرِيح، مِنْعَمِل وَقْت حِلْو عَالبَحَر.",
                    "en": "If the weather stays nice, we’ll have a good time at the beach."
                },
                {
                    "speaker": "Rania",
                    "ar": "وأَنا جاهْزَة دايمًا للبَحَر!",
                    "en": "And I am always ready for the beach!"
                },
                {
                    "speaker": "Lina",
                    "ar": "إذِن يَلّا نِخَطِّط لبُكْرَة.",
                    "en": "Then let’s plan for tomorrow."
                },
                {
                    "speaker": "Rania",
                    "ar": "مُوافْقَة! بْنِتَّفِق بَعْد المَسَا.",
                    "en": "Deal! We’ll confirm in the evening."
                },
                {
                    "speaker": "Lina",
                    "ar": "شُكْرًا عَل الدَّردَشَة.",
                    "en": "Thanks for the chat."
                },
                {
                    "speaker": "Rania",
                    "ar": "وَلا يِهِمِّك! الطَّقْس بْجَمِّع القْلوب.",
                    "en": "No problem! The weather brings hearts together!"
                },
                {
                    "speaker": "Lina",
                    "ar": "مَع السَّلامَة!",
                    "en": "Goodbye!"
                },
                {
                    "speaker": "Rania",
                    "ar": "مع السَّلامَة!",
                    "en": "Goodbye!"
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR – NEW FOCUS
        // ====================================
        grammar: [
            {
                id: "fi_plus_noun",
                title: "Using «فِي + اسم» to say “There is/there are” (for weather)",
                description:
                    "In Palestinian Arabic, you often use «فِي» (fi) + noun to say ‘there is/are’:\n\n" +
                    "• فِي مَطَر = There is rain / It’s raining.\n" +
                    "• فِي شُوب = It’s hot.\n" +
                    "• فِي بَرْد = It’s cold.\n" +
                    "• فِي رُطُوبَة = It’s humid.\n\n" +
                    "This is very simple and very common. You don’t need a verb ‘to be’ in the present.",
            },
            {
                id: "kan_weather",
                title: "Past weather with «كان» (it was…)",
                description:
                    "To talk about how the weather was, use «كان» (kān):\n\n" +
                    "• امْبَارِح كان الجَوّ دَافِي. = Yesterday the weather was warm.\n" +
                    "• بِلَّيْل كان فِي مَطَر كْتِير. = At night there was a lot of rain.\n" +
                    "• فِي الشِّتَا السَّابِق كان فِي تَلْج. = Last winter there was snow.\n\n" +
                    "Pattern: كان + الجَوّ + صِفَة / كان فِي + noun.",
            },
            {
                id: "ra7_weather",
                title: "Future weather with «رَح» (it will be…)",
                description:
                    "To talk about how the weather will be, use «رَح» (raḥ):\n\n" +
                    "• بُكْرَا رَح يِكُون الجَوّ مْشَمَّس. = Tomorrow the weather will be sunny.\n" +
                    "• رَح تِمْطِر بَعْد شْوَيّ. = It will rain later.\n" +
                    "• بِالشِّتَا الجَّاي رَح يِكُون فِي بَرْد أَكْثَر. = Next winter it will be colder.\n\n" +
                    "Pattern: رَح يِكُون + الجَوّ + صِفَة or رَح + verb (like تِمْطِر).",
            },
            {
                id: "opinion_weather",
                title: "Expressing opinion about weather with «بَحِبّ / مَا بَحِبّ»",
                description:
                    "Very useful pattern for small talk:\n\n" +
                    "• بَحِبّ الشِّتَا. = I like winter.\n" +
                    "• مَا بَحِبّ الشُّوب. = I don’t like heat.\n" +
                    "• مَا بَسْتَحْمِل البَرْد. = I can’t stand the cold.\n" +
                    "• بَحِبّ لَمَّا يِنْزِل مَطَر. = I like it when it rains.\n\n" +
                    "You can add ‘honestly’: صَرَاحَةً، مَا بَحِبّ الشِّتَا.",
            },
            {
                id: "small_talk_connectors",
                title: "Keeping small talk alive: «عَنْ جَدّ؟»، «وَالله»، «بَرْضُه»",
                description:
                    "These small words make your small talk sound natural:\n\n" +
                    "• عَنْ جَدّ؟ = Really? (shows interest, asks for more)\n" +
                    "• وَالله… = Honestly… / I swear… (adds emotion)\n" +
                    "Example mini-dialogue:\n" +
                    "– اليَوْم الجَوّ بَرْد كْتِير.\n" +
                    "– عَنْ جَدّ؟ عِنَّا دَافِي شْوَيّ.\n",

            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "weather_q1",
                    questionAr: "«فِي مَطَر» مَعْنَاهَا:",
                    optionsEn: [
                        "There is rain / It’s raining.",
                        "There is wind.",
                        "It is sunny.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "weather_q2",
                    questionAr: "أَيّ جُمْلَة تَعْبِّر عَن الماضي؟",
                    optionsEn: [
                        "بُكْرَا رَح يِكُون الجَوّ حِلُو.",
                        "امْبَارِح كان الجَوّ بَرْد.",
                        "اليَوْم الجَوّ دَافِي.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "weather_q3",
                    questionAr: "«مَا بَسْتَحْمِل الشُّوب» مَعْنَاهَا:",
                    optionsEn: [
                        "I can’t stand the heat.",
                        "I love the heat.",
                        "The heat is normal.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "weather_q4",
                    questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘humid’؟",
                    optionsEn: [
                        "رُطُوبَة",
                        "شُوب",
                        "تَلْج",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "weather_q5",
                    questionAr: "أَيّ عِبَارَة طَبِيعِيّة لِبِدَايَة small talk؟",
                    optionsEn: [
                        "كِيف الجَوّ عِنْدَك؟",
                        "بَدِّي أَشْتَرِي مُوبَايِل.",
                        "فِين أَقْرَب مُسْتَشْفَى؟",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Two classmates meet in the morning at the university entrance. They talk about today’s weather, what it was like yesterday (كان…), and what it will be like tomorrow (رَح…). They also say which season they like or hate and why.",
                "Role-play 2: Two strangers stand in a bus stop or elevator. They start with a weather comment, then use small talk connectors like «عَنْ جَدّ؟», «وَالله», «بَرْضُه» to keep the conversation going for 6–8 lines.",
                "Role-play 3: Video call between two cities with different climate (e.g. Gaza & Ramallah / Gaza & Europe). Each one describes the weather now, last week, and next week using «فِي + noun», «كان», and «رَح يِكُون».",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Record a 60–90 second audio in Palestinian Arabic where you:\n" +
                "1. Describe the weather today where you are (use at least 4 key words like: مَطَر، شُوب، بَرْد، رُطُوبَة، مْشَمَّس، مْغَيَّم).\n" +
                "2. Say how the weather was last week using «كان» (for example: امْبَارِح كان الجَوّ…).\n" +
                "3. Say how you think the weather will be next week using «رَح» (for example: رَح يِكُون الجَوّ…).\n" +
                "4. Share your personal opinion about which season you like most and why, using «بَحِبّ / مَا بَحِبّ / مَا بَسْتَحْمِل…».",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start by asking in English: ‘What’s the weather like today where you are?’ Then slowly move into Arabic with key chunks: «الجَوّ…»، «فِي مَطَر»، «فِي شُوب».",
                "If possible, show a live picture (or describe it) and ask the student to repeat weather sentences after you.",
            ],
            vocabularySteps: [
                "Group vocabulary: (1) base words: بَرْد، شُوب، مَطَر، رُطُوبَة؛ (2) adjectives: دَافِي، مْغَيَّم، مْرَتَّب؛ (3) seasons: رَبِيع، صَيْف، شِتَا، خَرِيف.",
                "Practice the «فِي + noun» pattern with many examples so the student feels it’s easy: فِي مَطَر، فِي بَرْد، فِي غُبَار…",
                "Then add opinion chunks: بَحِبّ…, مَا بَحِبّ…, مَا بَسْتَحْمِل…",
            ],
            dialogueSteps: [
                "Act Scene 1 with the student: you are Lynn, they are Roba, then switch roles and change details (other city, other season).",
                "For Scene 2, focus on rhythm of small talk; encourage using «عَنْ جَدّ؟», «وَالله» naturally, not as ‘hard grammar’.",
                "Scene 3 is great for online lessons: ask the student to really compare their weather with yours.",
            ],
            practiceTips: [
                "Don’t over-correct grammar during small talk; focus on flow, confidence, and chunks.",
                "If the student is shy, give them 3–4 ready-made questions to ask about weather and mood.",
                "Use quick mini-drills: you say a city and season, student makes 1–2 sentences about the weather there.",
            ],
            wrapup: [
                "At the end, build with the student a mini ‘Weather & Small Talk’ script they can reuse at the start of future lessons.",
                "Ask the student to choose their top 5 favourite chunks from the unit, write them in their notebook, and use at least one at the beginning of the next class.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_OPINIONS]: {
        meta: {
            level: "Intermediate",
            unit: "Opinions",
            lessonTitle: "Unit 11 – Opinions & Preferences",
        },

        overview: {
            title: "Unit 11 – Opinions & Preferences",
            description:
                "In this unit, students learn how to give opinions, agree and disagree politely, and talk about what they like or prefer in Palestinian Arabic. The focus is on natural chunks they can reuse in any topic: food, weather, places, people, and study.",
            goals: [
                "Express simple opinions about things they like and dislike.",
                "Use key opinion chunks like ‘in my opinion’, ‘I think’, ‘honestly’.",
                "Agree and disagree politely using softening expressions.",
                "Give short reasons to support their opinion.",
                "Keep a friendly conversation going using opinion questions.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== BASE OPINION WORDS =====
                {
                    id: "ra2y",
                    ar: "رَأْي",
                    en: "opinion",
                    enArabeezy: "ra2y",
                    hint: "Plural: آراء (aaraa’). ‘my opinion’ = رَأْيِي.",
                    exampleAr: "رَأْيِك مُهِمّ.",
                    exampleEn: "Your opinion is important.",
                },
                {
                    id: "bira2yi",
                    ar: "بِرَأْيِي",
                    en: "in my opinion",
                    enArabeezy: "bi-ra2yi",
                    hint: "Very useful starter for giving opinions.",
                    exampleAr: "بِرَأْيِي، هَادَا الكُورْس مْفِيد.",
                    exampleEn: "In my opinion, this course is useful.",
                },
                {
                    id: "bi3tiqadi",
                    ar: "بِاعْتِقَادِي",
                    en: "I believe / I think",
                    enArabeezy: "bi-e3teqādi",
                    hint: "Slightly more formal than بِرَأْيِي.",
                    exampleAr: "بِاعْتِقَادِي المَوْضوع مِش هَالْقَدّ خَطِير.",
                    exampleEn: "I believe the issue is not that serious.",
                },
                {
                    id: "bil_nisbe_ili",
                    ar: "بالنِّسْبَة إِلِي",
                    en: "for me / from my point of view",
                    enArabeezy: "bil-nisbe ʾe-li",
                    hint: "Good to show that it’s a personal view.",
                    exampleAr: "بالنِّسْبَة إِلِي، الشُّغُل مَع الدِّراسَة مُتْعِب.",
                    exampleEn: "For me, working while studying is tiring.",
                },
                {
                    id: "bafakker",
                    ar: "بَفَكِّر",
                    en: "I think",
                    enArabeezy: "bafakker",
                    hint: "Also ‘I’m thinking’, but very common for opinions.",
                    exampleAr: "بَفَكِّر المَوْضوع سَهْل.",
                    exampleEn: "I think the topic is easy.",
                },
                {
                    id: "ba7ess",
                    ar: "بَحِسّ",
                    en: "I feel / I have the feeling",
                    enArabeezy: "ba7ess",
                    hint: "Used for emotional or soft opinions.",
                    exampleAr: "بَحِسّ الفِكْرَة حِلْوَة بَسّ مِش مُنَظَّمَة.",
                    exampleEn: "I feel the idea is nice but not organized.",
                },
                {
                    id: "beshuf",
                    ar: "بَشُوف",
                    en: "I see / my view is",
                    enArabeezy: "bashuf",
                    hint: "Spoken way to share your view: ‘the way I see it’.",
                    exampleAr: "أَنَا بَشُوف إِنُّه الأَفْضَل نِبْدَى بَسِيط.",
                    exampleEn: "I see that it’s better to start simple.",
                },
                {
                    id: "saraha",
                    ar: "صَرَاحَةً",
                    en: "honestly / to be honest",
                    enArabeezy: "Sara7a",
                    hint: "Good for softening a strong opinion (بِصَرَاحَة / صراحة).",
                    exampleAr: "صَرَاحَةً، مَا عَجَبْنِي الفِلْم.",
                    exampleEn: "Honestly, I didn’t like the movie.",
                },
                {
                    id: "3an_jad",
                    ar: "عَنْ جَدّ؟",
                    en: "Really?",
                    enArabeezy: "ʿan jad?",
                    hint: "Shows interest or surprise about someone’s opinion.",
                    exampleAr: "عَنْ جَدّ؟ أَنَا العَكْس تَمَامًا.",
                    exampleEn: "Really? I’m the complete opposite.",
                },

                // ===== LIKE / DISLIKE / PREFERENCE =====
                {
                    id: "ba7ebb",
                    ar: "بَحِبّ",
                    en: "I like / I love",
                    enArabeezy: "ba7ebb",
                    hint: "Use with nouns or verbs.",
                    exampleAr: "بَحِبّ اللُّغَات وَبَحِبّ أَتْعَلَّم جْدِيد.",
                    exampleEn: "I like languages and I like learning new things.",
                },
                {
                    id: "ma_ba7ebb",
                    ar: "مَا بَحِبّ",
                    en: "I don’t like",
                    enArabeezy: "ma ba7ebb",
                    hint: "Polite way to say you don’t like something.",
                    exampleAr: "مَا بَحِبّ الأَفْلَام الطَّوِيلَة.",
                    exampleEn: "I don’t like long movies.",
                },
                {
                    id: "baftadel",
                    ar: "بَفَضَّل",
                    en: "I prefer",
                    enArabeezy: "bafaDDel",
                    hint: "Use when choosing between options.",
                    exampleAr: "بَفَضَّل أَتْعَلَّم وَاحِد عَ وَاحِد بَدَل مَرَّة وَاحْدَة.",
                    exampleEn: "I prefer to learn one by one instead of all at once.",
                },
                {
                    id: "mesh_kteer",
                    ar: "مِش كْتِير",
                    en: "not very / not really",
                    enArabeezy: "mish kteer",
                    hint: "Soft way to say you don’t like something.",
                    exampleAr: "مِش كْتِير بَحِبّ القَهْوِة بِدُون سُكَّر.",
                    exampleEn: "I don’t really like coffee without sugar.",
                },
                {
                    id: "abadan",
                    ar: "أَبَدًا",
                    en: "at all / never (in this context)",
                    enArabeezy: "abadan",
                    hint: "Comes with a negative verb.",
                    exampleAr: "مَا بَحِبّ الرُّطُوبَة أَبَدًا.",
                    exampleEn: "I don’t like humidity at all.",
                },
                {
                    id: "kwayyes",
                    ar: "كْوَيِّس",
                    en: "good / okay",
                    enArabeezy: "kwayyes",
                    hint: "Basic evaluation word: good / fine.",
                    exampleAr: "الكُورْس كْوَيِّس بَسّ مُمْكِن يِكُون أَفْضَل.",
                    exampleEn: "The course is good but it could be better.",
                },
                {
                    id: "3adi",
                    ar: "عَادِي",
                    en: "normal / it’s okay",
                    enArabeezy: "3adi",
                    hint: "Use when something is ‘so-so’.",
                    exampleAr: "الفِلْم عَادِي، لَا كْتِير حِلُو وَلَا سَيِّئ.",
                    exampleEn: "The movie is okay, not very good and not bad.",
                },
                {
                    id: "momtaz",
                    ar: "مُمْتَاز",
                    en: "excellent",
                    enArabeezy: "momtāz",
                    hint: "Stronger than ‘good’.",
                    exampleAr: "الدَّرْس اليَوْم مُمْتَاز.",
                    exampleEn: "Today’s lesson is excellent.",
                },
                {
                    id: "sayye2",
                    ar: "سَيِّئ",
                    en: "bad",
                    enArabeezy: "sayyeʾ",
                    hint: "Stronger negative opinion.",
                    exampleAr: "الخِدْمَة فِي هَادَا المَحَلّ سَيِّئَة.",
                    exampleEn: "The service in this shop is bad.",
                },
                {
                    id: "momil",
                    ar: "مُمْل",
                    en: "boring",
                    enArabeezy: "momell",
                    hint: "Negative quality for classes / movies / work…",
                    exampleAr: "الصُّفُوف أُونلايْن أَحْيَانًا مُمْلِّة.",
                    exampleEn: "Online classes are sometimes boring.",
                },
                {
                    id: "mofid",
                    ar: "مُفِيد",
                    en: "useful",
                    enArabeezy: "mufeid",
                    hint: "Positive value word.",
                    exampleAr: "الكَوْرْسات أُونلايْن مُفِيدَة لِكْتِير نَاس.",
                    exampleEn: "Online courses are useful for many people.",
                },
                {
                    id: "khaTeer",
                    ar: "خَطِير",
                    en: "serious / dangerous",
                    enArabeezy: "khaTeer",
                    hint: "For issues, not just physical danger.",
                    exampleAr: "الإِدْمَان عَالسوشال ميديا مَوْضوع خَطِير.",
                    exampleEn: "Addiction to social media is a serious issue.",
                },

                // ===== AGREE / DISAGREE =====
                {
                    id: "bwaafe2",
                    ar: "بْوَافِق",
                    en: "I agree",
                    enArabeezy: "bwaafeʾ",
                    hint: "From وَافَق = to agree.",
                    exampleAr: "بْوَافِق مَعَك مِيِّة بِالْمِيِّة.",
                    exampleEn: "I agree with you 100%.",
                },
                {
                    id: "ma_bwaafe2",
                    ar: "مَا بْوَافِق",
                    en: "I don’t agree",
                    enArabeezy: "ma bwaafeʾ",
                    hint: "Can be softened with صَرَاحَةً / شْوَيّ.",
                    exampleAr: "صَرَاحَةً، مَا بْوَافِق عَلَى هَادَا الرَّأْي.",
                    exampleEn: "Honestly, I don’t agree with this opinion.",
                },
                {
                    id: "mumkin_a5talef",
                    ar: "مُمْكِن أَخْتِلِف مَعَك",
                    en: "can I disagree with you (polite)",
                    enArabeezy: "mumkin a5talef ma3ak",
                    hint: "Very polite way to disagree.",
                    exampleAr: "مُمْكِن أَخْتِلِف مَعَك بِهالنُّقْطَة شْوَي؟",
                    exampleEn: "Can I disagree with you a bit on this point?",
                },
                {
                    id: "ma3ak_ha2",
                    ar: "مَعَك حَقّ",
                    en: "you’re right",
                    enArabeezy: "ma3ak 7aʾ",
                    hint: "Very common in daily speech.",
                    exampleAr: "مَعَك حَقّ، المَوْضوع بِحْتاج وَقْت.",
                    exampleEn: "You’re right, the topic needs time.",
                },
                {
                    id: "la2_mish_mit2akked",
                    ar: "لَأ، مِش مِتْأَكِّد",
                    en: "no, I’m not sure",
                    enArabeezy: "la2, mish mit2akked",
                    hint: "Used to show doubt about information (change ending for fem).",
                    exampleAr: "لَأ، مِش مِتْأَكِّد مِن هالمَعْلُومِة.",
                    exampleEn: "No, I’m not sure about this information.",
                },
                {
                    id: "la2_bel3aks",
                    ar: "لَأ، بْالعَكْس",
                    en: "no, on the contrary",
                    enArabeezy: "la2, bil-3aks",
                    hint: "Strong disagreement but can be said in a friendly tone.",
                    exampleAr: "لَأ، بْالعَكْس، هُوَّ كْثير مُفِيد.",
                    exampleEn: "No, on the contrary, it’s very useful.",
                },

                // ===== REASONS & CONNECTORS =====
                {
                    id: "la2anno",
                    ar: "لَأَنُّه",
                    en: "because",
                    enArabeezy: "la2anno",
                    hint: "Key connector for giving reasons.",
                    exampleAr: "بَحِبّ الشِّتَا لَأَنُّه الجَوّ هَادِي.",
                    exampleEn: "I like winter because the weather is calm.",
                },
                {
                    id: "3ashan_heik",
                    ar: "عَشَان هَيْك",
                    en: "that’s why / so",
                    enArabeezy: "3ashān heek",
                    hint: "Good for explaining the result.",
                    exampleAr: "الدَّرْس طَوِيل، عَشَان هَيْك بَدِّينَا بِكِّير.",
                    exampleEn: "The lesson is long, that’s why we started early.",
                },
                {
                    id: "ya3ni",
                    ar: "يَعْنِي",
                    en: "I mean / like / you know",
                    enArabeezy: "ya3ni",
                    hint: "Very common filler in Palestinian Arabic.",
                    exampleAr: "يَعْنِي، الدَّرْس مْفِيد بَسّ فِيه مَعْلُومَات كْتِير.",
                    exampleEn: "I mean, the lesson is useful but it has a lot of information.",
                },
                {
                    id: "tab3an",
                    ar: "طَبْعًا",
                    en: "of course",
                    enArabeezy: "Tab3an",
                    hint: "Shows strong agreement.",
                    exampleAr: "طَبْعًا، هَادَا شِي مُهِمّ.",
                    exampleEn: "Of course, that’s important.",
                },
                {
                    id: "mumkin",
                    ar: "مُمْكِن",
                    en: "maybe / it’s possible",
                    enArabeezy: "mumkin",
                    hint: "Soft opinion or suggestion.",
                    exampleAr: "مُمْكِن نِجَرِّب طَرِيقَة تَانِيَة.",
                    exampleEn: "Maybe we can try another method.",
                },

                // ===== TOPIC / PROS & CONS =====
                {
                    id: "mawdu3",
                    ar: "مَوْضُوع",
                    en: "topic / subject",
                    enArabeezy: "mawDoo3",
                    hint: "What you’re talking about.",
                    exampleAr: "المَوْضوع حَسّاس شْوَي.",
                    exampleEn: "The topic is a bit sensitive.",
                },
                {
                    id: "jadal",
                    ar: "جَدَل",
                    en: "controversy / heated debate",
                    enArabeezy: "jadal",
                    hint: "Argument around a topic.",
                    exampleAr: "المَوْضوع عَامِل جَدَل عَالسوشال ميديا.",
                    exampleEn: "The topic is causing controversy on social media.",
                },
                {
                    id: "munaqasha",
                    ar: "مُنَاقَشَة",
                    en: "discussion",
                    enArabeezy: "munaʾasha / munaqasha",
                    hint: "General word for discussion.",
                    exampleAr: "المُنَاقَشَة هَادِي هَادِي وْمُحْتَرَمَة.",
                    exampleEn: "This discussion is calm and respectful.",
                },
                {
                    id: "mawqef",
                    ar: "مَوْقِف",
                    en: "position / stance",
                    enArabeezy: "mawʾef / mawqef",
                    hint: "Your position on a topic.",
                    exampleAr: "مَوْقْفِي مِخْتِلِف عَن مَوْقَفَك.",
                    exampleEn: "My position is different from yours.",
                },
                {
                    id: "min_na7ye_w_min_na7ye",
                    ar: "مِن ناحِيَة... مِن ناحِيَة تَانِيِة",
                    en: "on one hand... on the other hand",
                    enArabeezy: "min nā7yeh... min nā7yeh tānyeh",
                    hint: "Great frame for a balanced opinion.",
                    exampleAr:
                        "مِن ناحِيَة التَّكْلِفَة غالْيَة، مِن ناحِيَة تَانِيِة الجَوْدَة عاليِة.",
                    exampleEn:
                        "On one hand the cost is high, on the other hand the quality is high.",
                },
                {
                    id: "miyezeh",
                    ar: "مَيِّزَة",
                    en: "advantage",
                    enArabeezy: "meyyzeh",
                    hint: "Positive point of something.",
                    exampleAr: "مِن مَيِّزَات التَّعْلِيم أُونلايْن إِنُّه مَرِن.",
                    exampleEn: "One advantage of online learning is that it’s flexible.",
                },
                {
                    id: "3ayb",
                    ar: "عَيْب",
                    en: "disadvantage / flaw",
                    enArabeezy: "3eib",
                    hint: "Here means negative point (not social ‘shame’).",
                    exampleAr: "أَكْبَر عَيْب إِنُّه بْيِعْزِل النَّاس.",
                    exampleEn: "The biggest disadvantage is that it isolates people.",
                },
                {
                    id: "ma3qool",
                    ar: "مَعْقُول",
                    en: "reasonable / makes sense",
                    enArabeezy: "ma3ʾool",
                    hint: "Question: مَعْقُول؟ = really? seriously?",
                    exampleAr: "الفِكْرَة مَعْقُولَة بَسّ بِتِحْتَاج تَنْظِيم.",
                    exampleEn: "The idea is reasonable but needs organization.",
                },
                {
                    id: "mush_moqne3",
                    ar: "مِش مُقْنِع",
                    en: "not convincing",
                    enArabeezy: "mish moqne3",
                    hint: "Used for ideas / arguments.",
                    exampleAr: "الحُجَّة هَادِي مِش مُقْنِعَة كْتِير.",
                    exampleEn: "This argument is not very convincing.",
                },
                {
                    id: "monsef",
                    ar: "مُنْصِف",
                    en: "fair / just (about judgement)",
                    enArabeezy: "monsef",
                    hint: "Balanced, not too harsh or too soft.",
                    exampleAr: "حُكْمَك مِش مُنْصِف تْجَاهُه.",
                    exampleEn: "Your judgement isn’t fair towards him.",
                },
                {
                    id: "wa2e3i",
                    ar: "واقِعي",
                    en: "realistic",
                    enArabeezy: "wāqe3i",
                    hint: "Opposite of ‘ideal’.",
                    exampleAr: "رَأْيَك واقِعي أَكْتَر مِن رَأْيِي.",
                    exampleEn: "Your opinion is more realistic than mine.",
                },
                {
                    id: "yqetne3",
                    ar: "يِقْتِنِع",
                    en: "to be convinced",
                    enArabeezy: "yeʾtene3 / yeqtane3",
                    hint: "Someone changes their opinion.",
                    exampleAr: "صِرْت مُقْتَنِع بَعْد ما شَرَحْتِيلِي.",
                    exampleEn: "I became convinced after you explained it to me.",
                },
            ],

            extra: [
                {
                    id: "wejhet_nazar",
                    ar: "وِجْهَة نَظَر",
                    en: "point of view",
                    enArabeezy: "wijhet naZar",
                    hint: "Synonym for opinion / perspective.",
                    exampleAr: "إِلُه وِجْهَة نَظَر مِخْتِلْفِة.",
                    exampleEn: "He has a different point of view.",
                },
                {
                    id: "no2tet_qowa",
                    ar: "نِقْطَة قُوَّة",
                    en: "strong point",
                    enArabeezy: "noʾtet ʾoowa",
                    hint: "Good point in an argument.",
                    exampleAr: "هَادِي نِقْطَة قُوَّة فِي حِجَاجَك.",
                    exampleEn: "This is a strong point in your argument.",
                },
                {
                    id: "no2tet_Da3f",
                    ar: "نِقْطَة ضَعْف",
                    en: "weak point",
                    enArabeezy: "noʾtet Da3f",
                    hint: "Part that needs work.",
                    exampleAr: "فِيه نِقْطَة ضَعْف بِالْفِكْرَة.",
                    exampleEn: "There is a weak point in the idea.",
                },
                {
                    id: "ye7tarem_ra2y",
                    ar: "يِحْتَرِم رَأْي",
                    en: "to respect an opinion",
                    enArabeezy: "ye7tarem ra2y",
                    hint: "Important in discussions.",
                    exampleAr: "بِهِمّني تِحْتَرِمُوا آرَاء بَعْض.",
                    exampleEn: "It’s important that you respect each other’s opinions.",
                },
                {
                    id: "7eyadi",
                    ar: "حِيادِي",
                    en: "neutral",
                    enArabeezy: "7eyādi",
                    hint: "No strong opinion either way.",
                    exampleAr: "أَنَا حِيادِي بِهالمَوْضوع.",
                    exampleEn: "I’m neutral on this topic.",
                },
                {
                    id: "niqash_hadi",
                    ar: "نِقَاش هَادِي",
                    en: "calm debate",
                    enArabeezy: "neʾāsh hādi",
                    hint: "Discussion without shouting.",
                    exampleAr: "بِفَضِّل نَعْمِل نِقَاش هَادِي بِلَا صُرَاخ.",
                    exampleEn: "I prefer to have a calm debate without shouting.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE – LONG & RICH
        // ====================================
        dialogue: {
            lines: [
                {
                    "speaker": "Samer",
                    "ar": "صَباح الخير يا لانا، خَلَّصْتِ البْروجِكْت أونلاين؟",
                    "en": "Good morning Lana, did you finish the online project?"
                },
                {
                    "speaker": "Lana",
                    "ar": "صَباح النّور يا سامِر. لِسّا شْوَي، بَس بِصَراحَة بَحِسّ التَّعْلِيم أونلاين أَفْضَل مِن الوُجودِي.",
                    "en": "Good morning Samer. Not yet, but honestly I feel online learning is better than face-to-face."
                },
                {
                    "speaker": "Samer",
                    "ar": "جَدّ؟ بِرَأْيي العَكْس تَمامًا.",
                    "en": "Really? In my opinion it’s the complete opposite."
                },
                {
                    "speaker": "Lana",
                    "ar": "مُمْكِن أَفْهَم ليش؟",
                    "en": "Can I understand why?"
                },
                {
                    "speaker": "Samer",
                    "ar": "بالنِّسْبَة إِلِي، الصَّفوف أونلاين مُمْلِّة، والناس بِتِنْشِتِت كْثير.",
                    "en": "For me, online classes are boring and people get very distracted."
                },
                {
                    "speaker": "Lana",
                    "ar": "مَزْبوط في ناس بِتِنْشِتِت، بَس بِاعْتِقادي التَّعْلِيم أونلاين مَرِن أَكْتَر.",
                    "en": "True, some people get distracted, but I believe online learning is more flexible."
                },
                {
                    "speaker": "Samer",
                    "ar": "مُمْكِن أَخْتِلِف مَعَك شْوَي. البَمَاشِر أَسْهَل لِلاسْئِلَة والنِّقاش.",
                    "en": "I might disagree with you a bit. In-person is easier for questions and discussion."
                },
                {
                    "speaker": "Lana",
                    "ar": "مَعَك حَقّ بِالنِّقاش، بَس أَحْيانًا الوَقْت ما بِيِسْمَح نِجي عالجامْعَة.",
                    "en": "You’re right about discussion, but sometimes we don’t have time to come to campus."
                },
                {
                    "speaker": "Samer",
                    "ar": "صَراحَةً مِش مِتْأَكِّد إنّه الكُل عَم يِسْتَفِيد أونلاين.",
                    "en": "Honestly, I’m not sure everyone benefits from online learning."
                },
                {
                    "speaker": "Lana",
                    "ar": "مِن ناحِيَة إنّه في ناس ما بِتِرْكِز، مَعَك حَقّ. مِن ناحِيَة تانيِة، في مَيِّزات، مِثْل تَسْجِيل المَحاضَرَة.",
                    "en": "On one hand, you’re right that some people don’t focus. On the other hand, there are advantages, like recording the lecture."
                },
                {
                    "speaker": "Samer",
                    "ar": "هاي مَيِّزَة مُمْتازَة صَراحَةً.",
                    "en": "That’s honestly an excellent advantage."
                },
                {
                    "speaker": "Lana",
                    "ar": "خَلِّينا نِتْرُك التَّعْلِيم. شُو رَأْيَك بِالسوشال ميديا؟",
                    "en": "Let’s leave education. What’s your opinion on social media?"
                },
                {
                    "speaker": "Samer",
                    "ar": "المَوْضوع هون أَكْثَر خَطِير. بَرْأيي الإِدْمان عَالسوشال ميديا عَيْب كْبير.",
                    "en": "Here the topic is more serious. In my opinion, addiction to social media is a big problem."
                },
                {
                    "speaker": "Lana",
                    "ar": "أنا وافْقَك إنّه في إِدْمان، بَس كَمان مِفِيدَة لِلتَّواصُل وَالدِّراسَة.",
                    "en": "I agree there is addiction, but it’s also useful for communication and study."
                },
                {
                    "speaker": "Samer",
                    "ar": "إي، بَس النّاس صارُت تِضَيِّع وَقْت كْثِير، عَشان هيك بَحِسّ الأَثَر أَكْثَر سَلْبِي.",
                    "en": "Yes, but people started wasting a lot of time, so I feel the effect is more negative."
                },
                {
                    "speaker": "Lana",
                    "ar": "حاسِه إنّك عَم تِبالِغ شْوَي.",
                    "en": "I feel that you are exaggerating a bit."
                },
                {
                    "speaker": "Samer",
                    "ar": "مُمْكِن، بَس شُوف الإِحْصائِيّات عن وَقْت الاسْتِخْدام.",
                    "en": "Maybe, but look at the statistics about usage time."
                },
                {
                    "speaker": "Lana",
                    "ar": "مَع هيك، ب فکر إنّو المَسْؤوليّة عَالشَّخْص نَفْسُه، هُوَّ يِقَرِّر كَيْف يِسْتَخْدِمها.",
                    "en": "Even so, I think the responsibility is on the person themselves; they decide how to use it."
                },
                {
                    "speaker": "Samer",
                    "ar": "حُكْمَك هِنا واقِعي أَكْثَر.",
                    "en": "Your judgement here is more realistic."
                },
                {
                    "speaker": "Lana",
                    "ar": "طَيِّب، شُو مَوْقِفَك مِن الشُّغُل مع الدِّراسَة؟",
                    "en": "Okay, what’s your position on working while studying?"
                },
                {
                    "speaker": "Samer",
                    "ar": "بِرَأْيي إذا الشُّغُل جُزْئِي، مُمْكِن يِكون مُفِيد، لَأَنّه بِعَلِّم مَسْؤوليّة.",
                    "en": "In my opinion, if the work is part-time, it can be useful because it teaches responsibility."
                },
                {
                    "speaker": "Lana",
                    "ar": "أنا ما بُوافِقَك مِئِة بِالمِئِة. بَحِسّ إنّه كْثير طَلَب مِن الطّالِب.",
                    "en": "I don’t fully agree with you. I feel it’s asking too much from the student."
                },
                {
                    "speaker": "Samer",
                    "ar": "صح في عَيْب، لَأَنّه المَجْهود بْيِصِير أَكْثَر، بَس الفائِدَة عَلى المُسْتَقبَل كْبيرَة.",
                    "en": "True, there is a downside because the effort becomes greater, but the benefit for the future is big."
                },
                {
                    "speaker": "Lana",
                    "ar": "مِن ناحِيَة الخِبْرَة مَعَك حَقّ، مِن ناحِيَة الصِّحَّة النَّفْسِيّة أنا خايفَة.",
                    "en": "From the perspective of experience you’re right, from the perspective of mental health I’m worried."
                },
                {
                    "speaker": "Samer",
                    "ar": "مُمْكِن نِتَّفِق إنّه كُل حَالِة إلْها ظُرُوفها؟",
                    "en": "Can we agree that each case has its own circumstances?"
                },
                {
                    "speaker": "Lana",
                    "ar": "إي، هاد حِلّ مُنْصِف. مِش ضَروري نِقْتَنِع نَفْس الرَّأْي.",
                    "en": "Yes, that’s a fair solution. We don’t have to be convinced of the same opinion."
                },
                {
                    "speaker": "Samer",
                    "ar": "المُهِم نِحْتَرِم آرَاء بَعْض.",
                    "en": "The important thing is that we respect each other’s opinions."
                },
                {
                    "speaker": "Lana",
                    "ar": "صَراحَةً بَسْتَمْتِع لَمّا نِنَاقِش مَواضيع هيك مَعَك.",
                    "en": "Honestly, I enjoy it when we discuss topics like this together."
                },
                {
                    "speaker": "Samer",
                    "ar": "وأنا كْمان، الحِوار مَعِك دايمًا هادِي وَمُحْتَرَم.",
                    "en": "Me too, the conversation with you is always calm and respectful."
                },
                {
                    "speaker": "Lana",
                    "ar": "يَلّا نِكَمِّل البْروجِكْت قَبْل ما نِدْخُل بِجَدَل تاني!",
                    "en": "Let’s finish the project before we get into another debate!"
                },
                {
                    "speaker": "Samer",
                    "ar": "مَزْبوط، نِكَمِّل شُغُل وبَعْدين كَمّالِة حَكِي.",
                    "en": "True, let’s finish the work and continue talking later."
                },
                {
                    "speaker": "Lana",
                    "ar": "اتِّفَقْنا.",
                    "en": "Deal."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "like_dislike_pattern",
                title: "Saying what you like and don’t like",
                description:
                    "Two essential verbs:\n\n" +
                    "• بَحِبّ … = I like / I love …\n" +
                    "  – بَحِبّ الْقَهْوِة. = I like coffee.\n" +
                    "  – بَحِبّ أَسْمَع مُوسِيقَى. = I like to listen to music.\n\n" +
                    "• مَا بَحِبّ … = I don’t like …\n" +
                    "  – مَا بَحِبّ الفِلْم الطَّوِيل. = I don’t like long movies.\n\n" +
                    "You can soften the negative with «مِش كْتِير»:\n" +
                    "• مِش كْتِير بَحِبّ الفِلْم. = I don’t really like the movie.",
            },
            {
                id: "bira2yi_bafakker",
                title: "Using «بِرَأْيِي»، «بَفَكِّر»، «بَحِسّ»",
                description:
                    "Three very natural opinion starters:\n\n" +
                    "• بِرَأْيِي… = In my opinion… (a bit formal but common)\n" +
                    "• بَفَكِّر… = I think…\n" +
                    "• بَحِسّ… = I feel… (softer, more emotional)\n\n" +
                    "Examples:\n" +
                    "• بِرَأْيِي، هَادَا الدَّرْس مْفِيد. = In my opinion, this lesson is useful.\n" +
                    "• بَفَكِّر المَوْضُوع سَهْل. = I think the topic is easy.\n" +
                    "• بَحِسّ إِنُّه الوَاجِب كْتِير. = I feel that the homework is too much.",
            },
            {
                id: "agree_disagree_soft",
                title: "Agreeing and disagreeing politely",
                description:
                    "Useful chunks for reacting to someone’s opinion:\n\n" +
                    "Agree:\n" +
                    "• مَعَك حَقّ. = You’re right.\n" +
                    "• بْوَافِق مَعَك. = I agree with you.\n" +
                    "• طَبْعًا. = Of course.\n\n" +
                    "Disagree (soft):\n" +
                    "• صَرَاحَةً، مَا بْوَافِق كْتِير. = Honestly, I don’t really agree.\n" +
                    "• مُمْكِن، بَسّ أَنَا بَشُوف إِنُّه… = Maybe, but I see that…\n\n" +
                    "Adding these softeners makes disagreement sound polite.",
            },
            {
                id: "because_because_result",
                title: "Giving reasons with «لأَنُّه» and «عَشَان هَيْك»",
                description:
                    "Use «لأَنُّه» (because) to give a reason, and «عَشَان هَيْك» (that’s why) to show the result:\n\n" +
                    "• مَا بَحِبّ الفِلْم لأَنُّه طَوِيل. = I don’t like the movie because it is long.\n" +
                    "• الكُورْس مِش سَهْل، عَشَان هَيْك بَدُّه وَقْت. = The course is not easy, that’s why it needs time.\n\n" +
                    "Often you will see both in one explanation: reason + result.",
            },
            {
                id: "ma_bifri2_neutral",
                title: "Being neutral: «مَا بِفْرِق» و«عَادِي»",
                description:
                    "Not everything is ‘like’ or ‘dislike’. You can also be neutral:\n\n" +
                    "• عَادِي. = It’s okay / normal.\n" +
                    "• مَا بِفْرِق مَعِي. = It doesn’t matter to me.\n\n" +
                    "Example:\n" +
                    "– بِتِفَضَّل الصَّبَاح أَو المَسَا؟\n" +
                    "– مَا بِفْرِق، عَادِي أَيّ وَقْت.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "opinions_q1",
                    questionAr: "أَيّ كَلِمَة مَعْنَاهَا «in my opinion»؟",
                    optionsEn: ["بَحِسّ", "بِرَأْيِي", "مَعَك حَقّ"],
                    correctIndex: 1,
                },
                {
                    id: "opinions_q2",
                    questionAr: "«مَا بَحِبّ الفِلْم» مَعْنَاهَا:",
                    optionsEn: [
                        "I don’t like the movie.",
                        "I love the movie.",
                        "I don’t watch movies.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "opinions_q3",
                    questionAr: "أَيّ عِبَارَة أَكْثَر لُطْفًا لِرَفْض رَأْي؟",
                    optionsEn: [
                        "مَا بْوَافِق.",
                        "صَرَاحَةً، مَا بْوَافِق كْتِير.",
                        "هَادَا رَأْي سَيِّئ.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "opinions_q4",
                    questionAr: "«لأَنُّه» تُسْتَعْمَل لِـ:",
                    optionsEn: ["reason (because)", "time (when)", "place (where)"],
                    correctIndex: 0,
                },
                {
                    id: "opinions_q5",
                    questionAr: "«مَا بِفْرِق مَعِي» مَعْنَاهَا:",
                    optionsEn: [
                        "It doesn’t matter to me.",
                        "It’s very important to me.",
                        "I don’t understand.",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Two friends talk about a course they are taking. Student A likes it; Student B thinks it’s ‘3adi’. They use: بَحِبّ، مَا بَحِبّ، بِرَأْيِي، صَرَاحَةً، مَعَك حَقّ، مَا بْوَافِق كْتِير، لأَنُّه، عَشَان هَيْك.",
                "Role-play 2: Discuss a movie or series. One loves it, the other doesn’t. They must each give at least one reason using لأَنُّه and react using عَنْ جَدّ؟، مَعْقُول؟، وَالله… .",
                "Role-play 3: Teacher asks student about study plan (how many lessons per week, homework amount). Student must give opinion, prefer one option, and be polite when disagreeing: بَفَضَّل، مُمْكِن، مَا بِفْرِق، أَهَمّ شِي…",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second audio in Palestinian Arabic where you:\n" +
                "1. Give your opinion about learning Arabic (why you like it / what is hard).\n" +
                "2. Talk about one movie, series, book, or course you liked or didn’t like.\n" +
                "3. Use at least 5 of these chunks: بَحِبّ، مَا بَحِبّ، بَفَضَّل، بِرَأْيِي، بَفَكِّر، بَحِسّ، صَرَاحَةً، مَعَك حَقّ، مَا بْوَافِق كْتِير، لأَنُّه، عَشَان هَيْك.\n" +
                "4. Try to give at least one reason for each opinion.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Ask in English: ‘Do you usually share your opinion or stay quiet?’ Then switch to Arabic with simple yes/no.",
                "Write three topics on the board (food, study, movies) and ask the student which topic they like talking about the most.",
            ],
            vocabularySteps: [
                "Start with the core: بَحِبّ / مَا بَحِبّ / بَفَضَّل. Drill with simple nouns the student already knows.",
                "Add opinion starters: بِرَأْيِي، بَفَكِّر، بَحِسّ, and show the difference in ‘strength’ and feeling.",
                "Introduce agreeing/disagreeing chunks, and act exaggerated friendly agreement/disagreement to make it fun.",
            ],
            dialogueSteps: [
                "Act out the movie conversation and let the student change the movie and reasons.",
                "For each scene, pause and ask: ‘Do YOU agree with Roba or the other speaker?’ to personalize.",
            ],
            practiceTips: [
                "Correct content lightly; focus on helping the student use 2–3 new opinion chunks freely.",
                "If necessary, give the student a small ‘menu of chunks’ and ask them to choose one to start each sentence.",
            ],
            wrapup: [
                "End the lesson by asking the student for their opinion about the lesson itself using the new language.",
                "Ask them to write their 5 favourite opinion chunks and promise to reuse them at the start of the next lesson.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_COMPLAINTS]: {
        meta: {
            level: "Intermediate",
            unit: "Complaints",
            lessonTitle: "Unit 2 – Making Complaints Politely",
        },
        overview: {
            title: "Unit 2 – Complaints",
            description:
                "In this lesson, students learn how to complain politely but clearly about problems (services, noise, delays), ask for a solution, and react to responses in Palestinian Arabic.",
            goals: [
                "Describe a problem clearly using common complaint language.",
                "Express frustration and annoyance without sounding rude or aggressive.",
                "Make polite requests for action and suggest possible solutions.",
                "React to apologies and promises: accept, refuse, or insist.",
                "Handle a short role-play with a receptionist, office worker, or service employee.",
            ],
        },

        vocabulary: {
            core: [
                {
                    id: "co_core_1",
                    ar: "شَكْوَى",
                    en: "complaint",
                    enArabeezy: "shakwa",
                    hint: "Formal or semi-formal complaint",
                    exampleAr: "بِفَكِّر أَقَدِّم شَكْوَى رَسْمِيّة.",
                    exampleEn: "I’m thinking of filing an official complaint.",
                },
                {
                    id: "co_core_2",
                    ar: "يِشْتِكي",
                    en: "to complain",
                    enArabeezy: "yeshtiki",
                    hint: "Verb: he complains",
                    exampleAr: "ما بِحِبّ أِشْتِكي، بَس في مَشْكِلة جَدِّيّة.",
                    exampleEn: "I don’t like to complain, but there is a serious problem.",
                },
                {
                    id: "co_core_3",
                    ar: "مَشْكِلة",
                    en: "problem",
                    enArabeezy: "mashkleh",
                    hint: "General word",
                    exampleAr: "في مَشْكِلة بِالمَوَاصَلات.",
                    exampleEn: "There is a problem with the transportation.",
                },
                {
                    id: "co_core_4",
                    ar: "مُزْعِج",
                    en: "annoying / disturbing",
                    enArabeezy: "moz3ej",
                    hint: "Describes noise, behavior, etc.",
                    exampleAr: "الصَّوْت مُزْعِج كْثير.",
                    exampleEn: "The noise is very annoying.",
                },
                {
                    id: "co_core_5",
                    ar: "مِش مَعْقول",
                    en: "unacceptable / unbelievable",
                    enArabeezy: "mish ma3ʾool",
                    hint: "Strong reaction to situation",
                    exampleAr: "مِش مَعْقول كُل يوم نِسْتَنّى ساعة.",
                    exampleEn: "It’s not acceptable to wait an hour every day.",
                },
                {
                    id: "co_core_6",
                    ar: "عنْجَد",
                    en: "really / seriously",
                    enArabeezy: "3an jad",
                    hint: "Emphasis marker",
                    exampleAr: "عنْجَد الوَضْع صار مُزْعِج.",
                    exampleEn: "Seriously, the situation has become annoying.",
                },
                {
                    id: "co_core_7",
                    ar: "يِنْرْفِز",
                    en: "to make (someone) nervous / annoyed",
                    enArabeezy: "yenrfiz",
                    hint: "Colloquial verb",
                    exampleAr: "التَّأْخير بْيِنْرْفِزني.",
                    exampleEn: "The delay makes me nervous.",
                },
                {
                    id: "co_core_8",
                    ar: "يِتْأَخَّر",
                    en: "to be late / delayed",
                    enArabeezy: "yitʾaʾkhar",
                    exampleAr: "الباص دايْمًا بْيِتْأَخَّر.",
                    exampleEn: "The bus is always late.",
                },
                {
                    id: "co_core_9",
                    ar: "بِضِلّ",
                    en: "keeps / continues",
                    enArabeezy: "bidall",
                    hint: "Used with a problem continuing",
                    exampleAr: "المَشْكِلة بِضِلّ تِتْكَرَّر.",
                    exampleEn: "The problem keeps repeating.",
                },
                {
                    id: "co_core_10",
                    ar: "مِن حَقّي",
                    en: "it’s my right",
                    enArabeezy: "min 7aqqi",
                    hint: "Used in complaints",
                    exampleAr: "مِن حَقّي أوْصَل عَالوَقْت.",
                    exampleEn: "It’s my right to arrive on time.",
                },
                {
                    id: "co_core_11",
                    ar: "خِدْمَة",
                    en: "service",
                    enArabeezy: "khidmeh",
                    exampleAr: "الخِدْمَة هون مِش عَالمُسْتَوى.",
                    exampleEn: "The service here is not at the right level.",
                },
                {
                    id: "co_core_12",
                    ar: "مُسْتَوى",
                    en: "level / standard",
                    enArabeezy: "mostawa",
                    exampleAr: "مُسْتَوى النَّظافَة واطي.",
                    exampleEn: "The level of cleanliness is low.",
                },
                {
                    id: "co_core_13",
                    ar: "مَسؤول",
                    en: "person in charge",
                    enArabeezy: "masʾool",
                    hint: "Manager / responsible person",
                    exampleAr: "بَحِبّ أحْكي مَع المَسؤول لو سَمَحْت.",
                    exampleEn: "I’d like to speak to the person in charge, please.",
                },
                {
                    id: "co_core_14",
                    ar: "مُوَظَّف الاسْتِقْبال",
                    en: "receptionist",
                    enArabeezy: "mwaZZaf il-isteʾbāl",
                    exampleAr: "حَكِيت مَع مُوَظَّف الاسْتِقْبال عَن المَشْكِلة.",
                    exampleEn: "I spoke with the receptionist about the problem.",
                },
                {
                    id: "co_core_15",
                    ar: "يِعالِج المَشْكِلة",
                    en: "to handle / fix the problem",
                    enArabeezy: "ye3ālej il-mashkleh",
                    exampleAr: "لازِم حدا يِعالِج المَشْكِلة سَريع.",
                    exampleEn: "Someone must handle the problem quickly.",
                },
                {
                    id: "co_core_16",
                    ar: "يِحِلّ المَشْكِلة",
                    en: "to solve the problem",
                    enArabeezy: "ye7ell il-mashkleh",
                    exampleAr: "إن شاء الله تِحِلّوا المَشْكِلة قَرِيب.",
                    exampleEn: "Hopefully you will solve the problem soon.",
                },
                {
                    id: "co_core_17",
                    ar: "يِوَعِد",
                    en: "to promise",
                    enArabeezy: "yewa3ed",
                    exampleAr: "وَعَدُونا يِحِلّوا المَشْكِلة.",
                    exampleEn: "They promised us they would solve the problem.",
                },
                {
                    id: "co_core_18",
                    ar: "يِرُدّ",
                    en: "to reply / respond",
                    enArabeezy: "yerodd",
                    exampleAr: "المَكْتَب ما رَدّ عَالشَّكْوَى.",
                    exampleEn: "The office didn’t respond to the complaint.",
                },
                {
                    id: "co_core_19",
                    ar: "يِعْتِذِر",
                    en: "to apologize",
                    enArabeezy: "ye3tezr",
                    exampleAr: "المُوَظَّف اِعْتَذَر عَالتَّأْخير.",
                    exampleEn: "The employee apologized for the delay.",
                },
                {
                    id: "co_core_20",
                    ar: "عُذْر",
                    en: "excuse",
                    enArabeezy: "3ozr",
                    exampleAr: "العُذْر مَش مَقْنِع.",
                    exampleEn: "The excuse is not convincing.",
                },
                {
                    id: "co_core_21",
                    ar: "مَقْنِع",
                    en: "convincing",
                    enArabeezy: "maqne3",
                    exampleAr: "التَّبْرير ما كان مَقْنِع.",
                    exampleEn: "The explanation wasn’t convincing.",
                },
                {
                    id: "co_core_22",
                    ar: "يِتْجاهَل",
                    en: "to ignore",
                    enArabeezy: "yitjāhal",
                    exampleAr: "حاسَّة إنّهم عَم يِتْجاهَلوا المَشْكِلة.",
                    exampleEn: "I feel they are ignoring the problem.",
                },
                {
                    id: "co_core_23",
                    ar: "مِسْتَمِرّ",
                    en: "continuous / ongoing",
                    enArabeezy: "mestamer",
                    exampleAr: "الصَّوْت المُزْعِج مِسْتَمِرّ لَحد هَلَّق.",
                    exampleEn: "The annoying noise is still ongoing.",
                },
                {
                    id: "co_core_24",
                    ar: "تِكْرار",
                    en: "repetition",
                    enArabeezy: "tekraar",
                    exampleAr: "تِكْرار المَشْكِلة خَلّاني أِشْتِكي.",
                    exampleEn: "The repetition of the problem made me complain.",
                },
                {
                    id: "co_core_25",
                    ar: "مَرَّة واحْدَة / أوَّل مَرّة",
                    en: "one time / first time",
                    enArabeezy: "marra wa7deh / awwal marra",
                    exampleAr: "لو مَرَّة واحْدَة مَش مُشْكِلة، بَس هادا تِكْرار.",
                    exampleEn: "If it were one time it’s fine, but this is repeated.",
                },
                {
                    id: "co_core_26",
                    ar: "مَع إحْتِرامي",
                    en: "with all respect",
                    enArabeezy: "ma3 e7terāmi",
                    hint: "Softener before criticism",
                    exampleAr: "مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة.",
                    exampleEn: "With all respect, the service here is weak.",
                },
                {
                    id: "co_core_27",
                    ar: "ما قَصْدي أِزَعِّل حَدا",
                    en: "I don’t mean to upset anyone",
                    enArabeezy: "ma ʾasdi aza33el 7ada",
                    exampleAr: "ما قَصْدي أِزَعِّل حَدا بَس الوَضْع مِش مَقْبول.",
                    exampleEn: "I don’t mean to upset anyone, but the situation is not acceptable.",
                },
                {
                    id: "co_core_28",
                    ar: "مُمْكِن تِعْمِلوا شِي؟",
                    en: "can you do something?",
                    enArabeezy: "mumkin t3mlo shi?",
                    hint: "Request for action",
                    exampleAr: "المَشْكِلة مِسْتَمِرّة، مُمْكِن تِعْمِلوا شِي؟",
                    exampleEn: "The problem is ongoing, can you do something?",
                },
                {
                    id: "co_core_29",
                    ar: "بِتْمَنّى تِلْقوا حَلّ",
                    en: "I hope you find a solution",
                    enArabeezy: "bitmanna telʾo 7all",
                    exampleAr: "بِتْمَنّى تِلْقوا حَلّ قَبْل الاسْبوع الجّاي.",
                    exampleEn: "I hope you find a solution before next week.",
                },
                {
                    id: "co_core_30",
                    ar: "ما إلِي خِلِق",
                    en: "I have no energy / I’m fed up",
                    enArabeezy: "ma eli khileʾ",
                    hint: "Colloquial, expresses frustration",
                    exampleAr: "عنْجَد ما إلِي خِلِق أِتْعامَل مَع هالْمَوْضوع بَعْد.",
                    exampleEn: "Honestly I have no energy to deal with this any more.",
                },
                {
                    id: "co_core_31",
                    ar: "يِصْبِر",
                    en: "to be patient",
                    enArabeezy: "yesbor",
                    exampleAr: "صَبَرْنا شَهِر كَامِل، بَس المَشْكِلة كَمانها.",
                    exampleEn: "We were patient for a whole month but the problem is still there.",
                },
                {
                    id: "co_core_32",
                    ar: "يِشَكِّر",
                    en: "to thank",
                    enArabeezy: "yeshakkir",
                    exampleAr: "بِدّي أِشَكِّرَك عَالتَّجاوُب.",
                    exampleEn: "I want to thank you for responding.",
                },
                {
                    id: "co_core_33",
                    ar: "يِتْفاهَم",
                    en: "to understand each other",
                    enArabeezy: "yitfāham",
                    exampleAr: "هامّ نِتْفاهَم عَحَلّ وَسَط.",
                    exampleEn: "It’s important that we agree on a middle solution.",
                },
                {
                    id: "co_core_34",
                    ar: "حَلّ وَسَط",
                    en: "compromise / middle solution",
                    enArabeezy: "7all wasaT",
                    exampleAr: "مُمْكِن نِلاقِي حَلّ وَسَط يِرْضي الجِهْتَيْن.",
                    exampleEn: "We can find a compromise that satisfies both sides.",
                },
                {
                    id: "co_core_35",
                    ar: "مُعامَلَة",
                    en: "treatment (how they treat you)",
                    enArabeezy: "mo3āmaleh",
                    exampleAr: "مُعامَلَة المُوَظَّفين إِلَنا كانِت مُحْتَرَمَة.",
                    exampleEn: "The way the employees treated us was respectful.",
                },
            ],

            extra: [
                {
                    id: "co_extra_1",
                    ar: "قِسْم شَكَاوِي",
                    en: "complaints department",
                    enArabeezy: "ʾesm shakaawi",
                    exampleAr: "في قِسْم شَكَاوِي بِالإِدارَة.",
                    exampleEn: "There is a complaints department in the administration.",
                },
                {
                    id: "co_extra_2",
                    ar: "رَدّ رَسْمِي",
                    en: "official reply",
                    enArabeezy: "radd rasmi",
                    exampleAr: "اسْتَنّينا رَدّ رَسْمِي ومَا إجا.",
                    exampleEn: "We waited for an official reply and it didn’t come.",
                },
                {
                    id: "co_extra_3",
                    ar: "حِجّة",
                    en: "pretext / lame excuse",
                    enArabeezy: "7ejjeh",
                    exampleAr: "حاسِّة إنّه هادا كُلّه حِجّة.",
                    exampleEn: "I feel like this is all just an excuse.",
                },
                {
                    id: "co_extra_4",
                    ar: "مُتابَعَة",
                    en: "follow-up",
                    enArabeezy: "motābaʿa",
                    exampleAr: "بِدّنا مُتابَعَة عَالمَشْكِلة مِش بَس وَعْد.",
                    exampleEn: "We want follow-up on the problem, not just a promise.",
                },
                {
                    id: "co_extra_5",
                    ar: "تَعْويض",
                    en: "compensation",
                    enArabeezy: "ta3weeD",
                    exampleAr: "طَلَبْنا تَعْويض بَسِيط عَالخَسارَة.",
                    exampleEn: "We asked for a small compensation for the loss.",
                },
            ],
        }
        ,

        dialogue: {
            lines: [
                {
                    "speaker": "Rina",
                    "ar": "يا مِنى، عنْجَد ما إلِي خِلِق اليوم.",
                    "en": "Mina, I honestly have no energy today."
                },
                {
                    "speaker": "Mina",
                    "ar": "شُو صار يا رِنا؟ شَكْلِك مْعَصَّبِة.",
                    "en": "What happened, Rina? You look upset."
                },
                {
                    "speaker": "Rina",
                    "ar": "الباص للجامْعَة تَقريبًا كُل يوم بْيِتْأَخَّر نُصّ ساعة أَو أَكْثَر.",
                    "en": "The bus to the university is almost every day half an hour late or more."
                },
                {
                    "speaker": "Mina",
                    "ar": "إي بَعْرِف، عنْجَد مُزْعِج.",
                    "en": "Yeah, I know, it’s really annoying."
                },
                {
                    "speaker": "Rina",
                    "ar": "مِش مَعْقول نِدْفَع اِشْتِراك وِنْضَلّ نِسْتَنّى عَالفاضي.",
                    "en": "It’s not acceptable that we pay a subscription and keep waiting for nothing."
                },
                {
                    "speaker": "Mina",
                    "ar": "حاوَلْتي تِشْتِكي لَحَدّا؟",
                    "en": "Have you tried complaining to someone?"
                },
                {
                    "speaker": "Rina",
                    "ar": "مَرّة حَكَيْت مَع السّواق، بَس حَكى إنّه الزَّحْمِة مِش بِيِدُه.",
                    "en": "Once I talked to the driver, but he said the traffic is not in his hands."
                },
                {
                    "speaker": "Mina",
                    "ar": "مَع إحْتِرامي إلُه، بَس المَشْكِلة مِسْتَمِرّة.",
                    "en": "With all respect to him, but the problem is continuing."
                },
                {
                    "speaker": "Rina",
                    "ar": "صَحّ. تِكْرار المَشْكِلة هوّي إلّي بْيِنْرْفِز.",
                    "en": "Right. The repetition of the problem is what really gets on my nerves."
                },
                {
                    "speaker": "Mina",
                    "ar": "مِن حَقِّك توْصَلي عَالوَقْت. ليش ما نِحْكي مَع مُوَظَّف الاسْتِقْبال بِالشَّرِكِة؟",
                    "en": "It’s your right to arrive on time. Why don’t we talk to the receptionist at the company?"
                },
                {
                    "speaker": "Rina",
                    "ar": "بِخاف يِفَكْرونا عَم نِبالِغ.",
                    "en": "I’m afraid they’ll think we’re exaggerating."
                },
                {
                    "speaker": "Mina",
                    "ar": "لا، إذا حَكَيْتي بِهُدُوء وَأَدَب ما حَدا يِزْعَل.",
                    "en": "No, if you speak calmly and politely, no one will get upset."
                },
                {
                    "speaker": "Rina",
                    "ar": "طَيِّب، تِجي مَعِي؟",
                    "en": "Okay, will you come with me?"
                },
                {
                    "speaker": "Mina",
                    "ar": "أكيد، يَلّا نِنْزِل عَالمَكْتَب.",
                    "en": "Of course, let’s go down to the office."
                },
                {
                    "speaker": "Receptionist",
                    "ar": "مَسّا الخير، تْفَضَّلوا.",
                    "en": "Good afternoon, welcome."
                },
                {
                    "speaker": "Rina",
                    "ar": "مَسّا النّور. مَع إحْتِرامي، في مَشْكِلة حابّين نِحْكي فيها.",
                    "en": "Good afternoon. With all respect, there is a problem we’d like to talk about."
                },
                {
                    "speaker": "Receptionist",
                    "ar": "تْفَضَّلوا إحْكوا، شُو في؟",
                    "en": "Please go ahead, what’s going on?"
                },
                {
                    "speaker": "Rina",
                    "ar": "الباص تَبَع جامْعَة غالِبًا بْيِتْأَخَّر نُصّ ساعة، وأَحْيانًا أَكْتَر.",
                    "en": "The university bus usually is thirty minutes late, and sometimes more."
                },
                {
                    "speaker": "Mina",
                    "ar": "والمَشْكِلة مِش مَرَّة واحْدَة، هادا تِكْرار يَومِي تَقريبًا.",
                    "en": "And the problem isn’t just once, this is almost daily repetition."
                },
                {
                    "speaker": "Rina",
                    "ar": "عنْجَد صار الوَضْع مُزْعِج، ومِن حَقّنا نوْصَل عَمحاضْراتنا عَالوَقْت.",
                    "en": "It really has become annoying, and it’s our right to arrive to our lectures on time."
                },
                {
                    "speaker": "Receptionist",
                    "ar": "مِنْفْهَم عَلَيْكُم، بِصَراحَة الزَّحْمِة قَوِيّة هالأيّام.",
                    "en": "We understand you; honestly, the traffic is heavy these days."
                },
                {
                    "speaker": "Rina",
                    "ar": "مُتَفَهِّمَة الزَّحْمِة، بَس العُذْر مَش مَقْنِع لَمّا المَشْكِلة مِسْتَمِرّة.",
                    "en": "I understand the traffic, but the excuse is not convincing when the problem is ongoing."
                },
                {
                    "speaker": "Mina",
                    "ar": "مُمْكِن تِعْمِلوا شِي عَالمَوْعِد؟ تَطْلَع الباصات أَبْكَر شْوَي؟",
                    "en": "Can you do something about the schedule? Can the buses leave a bit earlier?"
                },
                {
                    "speaker": "Receptionist",
                    "ar": "إحْنا مِرْتَبِطين بِوَقْت مُحَدَّد، بَس بِنْقِل الحَكِي لَلمَسؤول.",
                    "en": "We are tied to a fixed time, but we will pass your words to the person in charge."
                },
                {
                    "speaker": "Rina",
                    "ar": "صَبَرْنا شَهِر كَامِل، وبِتْمَنّى هالمَرّة يكون في مُتابَعَة حَقِيقِيّة.",
                    "en": "We’ve been patient for a whole month, and I hope this time there will be real follow-up."
                },
                {
                    "speaker": "Receptionist",
                    "ar": "عَن جَدّ إحْنا آسْفِين عَالإِزْعاج، وبنِوَعِد نِراجِع الجَدْوَل.",
                    "en": "We are really sorry for the inconvenience, and we promise to review the schedule."
                },
                {
                    "speaker": "Mina",
                    "ar": "شُكْرًا عَالتَّجاوُب، وبِتْمَنّى تِلْقوا حَلّ في أَقْرَب وَقْت.",
                    "en": "Thank you for responding, and I hope you find a solution as soon as possible."
                },
                {
                    "speaker": "Rina",
                    "ar": "ما قَصْدي أِزَعِّل حَدا، بَس الجِدّ الوَضْع مِش مَعْقول.",
                    "en": "I don’t mean to upset anyone, but honestly the situation is unacceptable."
                },
                {
                    "speaker": "Receptionist",
                    "ar": "لا، حَكْيكُم مَفْهُوم، وهَادا حَقِّكُم. نِشَكِّرُكُم إنّكم حَكَيْتوا بِأَدَب.",
                    "en": "No, your words are understood, and this is your right. We thank you for speaking politely."
                },
                {
                    "speaker": "Rina",
                    "ar": "إن شاء الله نِتْفاهَم عَحَلّ وَسَط يِرْضي الكِلّ.",
                    "en": "Hopefully we can agree on a compromise that satisfies everyone."
                },
                {
                    "speaker": "Mina",
                    "ar": "يَلّا رِنا، نِرْجَع عَالمَحاضْرَة قَبْل ما نِتْأَخَّر مَرّة تانيِة.",
                    "en": "Come on Rina, let’s go back to the lecture before we’re late again."
                },
                {
                    "speaker": "Rina",
                    "ar": "مَزْبوط، يِلّا نِمْشي.",
                    "en": "True, let’s go."
                }
            ]
        }
        ,

        grammar: [
            {
                id: "co_gram_1",
                title: "Using complaint chunks: في مَشْكِلة، عنْجَد مُزْعِج، مِش مَعْقول",
                description:
                    "Typical complaint language in Palestinian Arabic uses strong but short chunks like 'في مَشْكِلة' (there is a problem), 'عنْجَد مُزْعِج' (it’s really annoying), and 'مِش مَعْقول' (it’s unacceptable / unbelievable). These set the tone that you are serious but not necessarily rude.",
            },
            {
                id: "co_gram_2",
                title: "Softening complaints: مَع إحْتِرامي، ما قَصْدي أِزَعِّل حَدا",
                description:
                    "To sound polite and avoid sounding aggressive, add softeners like 'مَع إحْتِرامي' (with all respect) before criticism, and 'ما قَصْدي أِزَعِّل حَدا' (I don’t mean to upset anyone) after a strong sentence. Example: 'مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة' (With all respect, the service here is weak).",
            },
            {
                id: "co_gram_3",
                title: "Asking for action and suggesting solutions",
                description:
                    "After describing the problem, move to action with phrases like 'مُمْكِن تِعْمِلوا شِي؟' (can you do something?), 'لازِم حَدّ يِحِلّ المَشْكِلة' (someone has to solve the problem), and 'بِتْمَنّى تِلْقوا حَلّ' (I hope you find a solution). This structure makes the complaint more constructive and less like just complaining.",
            },
        ],

        practice: {
            quiz: [
                {
                    id: "co_q1",
                    questionAr: "مِش مَعْقول كُل يوم الباص يِتْأَخَّر.",
                    optionsEn: [
                        "It’s unacceptable that the bus is late every day.",
                        "It’s amazing that the bus is late every day.",
                        "It’s possible the bus is early every day.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "co_q2",
                    questionAr: "مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة.",
                    optionsEn: [
                        "With all respect, the service here is weak.",
                        "I respect the service, it is strong.",
                        "I don’t respect the weak service here.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "co_q3",
                    questionAr: "بِتْمَنّى تِلْقوا حَلّ قَرِيب.",
                    optionsEn: [
                        "I hope you find a solution soon.",
                        "I hope you cancel the service soon.",
                        "I hope you don’t answer soon.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "co_q4",
                    questionAr: "العُذْر مَش مَقْنِع.",
                    optionsEn: [
                        "The excuse is not convincing.",
                        "The excuse is very funny.",
                        "The excuse is totally correct.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "co_q5",
                    questionAr: "تِكْرار المَشْكِلة خَلّاني أِشْتِكي.",
                    optionsEn: [
                        "The repetition of the problem made me complain.",
                        "One small problem made me happy.",
                        "The solution to the problem made me complain.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A is a dorm resident; Student B is the dorm receptionist. A complains about constant noise at night that is 'ʿanjad muzʿij' and 'miš maʿʾūl'. B listens, apologizes, and promises to 'yiḥill il-maškile'. They must use at least one softener like 'maʿ iḥtirāmi'.",
                "Student A and B both use the university bus. They prepare together a polite complaint to the transportation office. They describe the problem (repeated delays), the effect (missing classes), and suggest one or two solutions (earlier departure, extra bus).",
                "Student A made a complaint last week; Student B works in the office. They meet again: B gives an update (follow-up, maybe partial solution), A reacts: thanks, or insists on more action, using phrases like 'ṣabarnā šahir kāmil' and 'bitemanna tilʾū ḥall'.",
            ],
        },

        homework: {
            instructions:
                "Write 8–10 sentences in Palestinian Arabic about a real or imaginary complaint (for example: transport, dorm, cafeteria, internet). Describe the problem, why it is annoying, what you already tried, and what you want them to do. Use at least three complaint chunks (مثل: في مَشْكِلة، عنْجَد مُزْعِج، مِش مَعْقول) and two polite softeners (مثل: مَع إحْتِرامي، ما قَصْدي أِزَعِّل حَدا).",
        },

        teacherNotes: {
            warmup: [
                "Ask students to brainstorm small, everyday problems (late bus, noisy neighbor, dirty classroom). Write them on the board in English or Arabic and then add 1–2 key Arabic words next to each.",
                "Discuss the difference between complaining aggressively vs. politely. Ask: in your language, what expressions show polite complaint?",
            ],
            vocabularySteps: [
                "Present strong complaint chunks (fi maškile, ʿanjad muzʿij, miš maʿʾūl) and have students repeat with different intonation (angry vs. calm).",
                "Introduce softeners (maʿ iḥtirāmi, ma ʾaṣdi ʾazaʿʿel ḥada) and practice placing them before/after complaints to hear how the tone changes.",
                "Drill pairs like problem + action: 'fi maškile' → 'mumkin tiʿmilu ši?' so students don’t stop at just describing the problem.",
            ],
            dialogueSteps: [
                "Read the dialogue once and ask comprehension questions: What is the problem? Who is the receptionist? What solution is promised?",
                "Assign roles and have students act it out. Then, in pairs, they replace 'bus' with another context (dorm, cafeteria, internet).",
                "Highlight in the text all expressions of complaint, softening, and action requests. Ask students to categorize them in three columns.",
            ],
            practiceTips: [
                "For the quiz, focus on the nuance of 'miš maʿʾūl' and 'ʿuzr miš muqneʿ' so students understand the attitude behind the words.",
                "During role-plays, encourage students to stay in Arabic even when frustrated. If they can’t find a word, allow quick English, then provide the Arabic equivalent.",
                "Remind students that in many real situations, tone and body language are as important as the words; encourage calm but firm delivery.",
            ],
            wrapup: [
                "Ask a few students to summarize one partner’s complaint using reported speech, starting with 'huwwa/hiya biʾūl/inno...'.",
                "End by asking: 'emta btkūn il-šakwa mafʿūla w emta laʾ?' and collect a few short answers using new vocabulary.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_PLANS_FUTURE]: {
        meta: {
            level: "Intermediate",
            unit: "Plans & Future",
            lessonTitle: "Unit 12 – Plans & Future",
        },

        overview: {
            title: "Unit 12 – Plans & Future",
            description:
                "In this unit, students learn how to talk about future plans, intentions, schedules, and dreams in Palestinian Arabic, using patterns like ‘I’m going to’, ‘I want to’, ‘I’m planning to’, and common time expressions.",
            goals: [
                "Use ‘بَدّي’ and ‘رَح’ to talk about future and near plans.",
                "Use common time expressions: today, tomorrow, next week, this year.",
                "Talk about study, work, travel, and free-time plans.",
                "Express intentions with ‘نَاوِي / حَابِب / مُخَطِّط’.",
                "Ask other people about their plans and react naturally.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== BASIC FUTURE & INTENT =====
                {
                    id: "baddi",
                    ar: "بَدّي",
                    en: "I want / I’m going to (intention)",
                    enArabeezy: "baddi",
                    hint:
                        "Very common for simple plans: بَدّي أَدْرُس = I want to / I’m going to study.",
                    exampleAr: "بَدّي أَدْرُس بُكْرَا بَعْد الدَّرْس.",
                    exampleEn: "I’m going to study tomorrow after the lesson.",
                },
                {
                    id: "ra7",
                    ar: "رَح",
                    en: "will (future marker)",
                    enArabeezy: "ra7",
                    hint:
                        "Used before the verb for planned/expected future: رَح أُسَافِر = I will travel.",
                    exampleAr: "بُكْرَا رَح أُصْحَى بَكِّير.",
                    exampleEn: "Tomorrow I will wake up early.",
                },
                {
                    id: "nawi",
                    ar: "نَاوِي",
                    en: "I intend / I’m planning (inside myself)",
                    enArabeezy: "nawi",
                    hint:
                        "Masc: نَاوِي، fem: نَاوْيَة. Use with ‘إِنِّي’: نَاوِي إِنِّي…",
                    exampleAr: "أَنَا نَاوْيَة إِنِّي أُكَمِّل دِرَاسَة عَرَبِي.",
                    exampleEn: "I intend to continue studying Arabic.",
                },
                {
                    id: "mukhattat",
                    ar: "مُخَطِّط",
                    en: "planning / I have a plan",
                    enArabeezy: "mukhattet",
                    hint:
                        "Masc: مُخَطِّط، fem: مُخَطِّطَة. Stronger, more organized than نَاوِي.",
                    exampleAr: "مُخَطِّط إِنِّي أُسَافِر بَعْد سَنَة.",
                    exampleEn: "I’m planning to travel in a year.",
                },
                {
                    id: "7abeb",
                    ar: "حَابِب",
                    en: "I’d like / I feel like (want in a soft way)",
                    enArabeezy: "7abeb",
                    hint:
                        "Masc: حَابِب، fem: حَابْبَة. Softer than بَدّي.",
                    exampleAr: "حَابْبَة أَجَرِّب شِي جْدِيد هَالسَّنَة.",
                    exampleEn: "I’d like to try something new this year.",
                },
                {
                    id: "lazem",
                    ar: "لَازِم",
                    en: "must / have to",
                    enArabeezy: "lazem",
                    hint:
                        "Used for obligations, plans you ‘have to’ do.",
                    exampleAr: "لَازِم أُخَلِّص الوَاجِب قَبْل الجُومْعَة.",
                    exampleEn: "I have to finish the homework before Friday.",
                },

                // ===== TIME EXPRESSIONS =====
                {
                    id: "elyoom",
                    ar: "اليَوْم",
                    en: "today",
                    enArabeezy: "elyoom",
                    hint: "",
                    exampleAr: "اليَوْم مَا عِنْدِي خُطَط كْتِير.",
                    exampleEn: "I don’t have many plans today.",
                },
                {
                    id: "bukra",
                    ar: "بُكْرَا",
                    en: "tomorrow",
                    enArabeezy: "bukra",
                    hint: "",
                    exampleAr: "بُكْرَا رَح أَقَابِل صَدِيقْتِي.",
                    exampleEn: "Tomorrow I will meet my friend.",
                },
                {
                    id: "ba3d_bukra",
                    ar: "بَعْد بُكْرَا",
                    en: "the day after tomorrow",
                    enArabeezy: "ba3d bukra",
                    hint: "",
                    exampleAr: "بَعْد بُكْرَا بَدّي أُرَتِّب غُرْفْتِي.",
                    exampleEn: "The day after tomorrow I’m going to tidy my room.",
                },
                {
                    id: "hal_usbou3",
                    ar: "هَالْأُسْبُوع",
                    en: "this week",
                    enArabeezy: "hal usbou3",
                    hint: "",
                    exampleAr: "هَالْأُسْبُوع عِنْدِي مِشَارِيع كْتِير.",
                    exampleEn: "This week I have many projects.",
                },
                {
                    id: "jاي_ousbou3",
                    ar: "الأُسْبُوع الجَّاي",
                    en: "next week",
                    enArabeezy: "il usbou3 il jay",
                    hint: "",
                    exampleAr: "الأُسْبُوع الجَّاي رَح نِبْدَى وَحْدَة جْدِيدَة.",
                    exampleEn: "Next week we will start a new unit.",
                },
                {
                    id: "shahr_jاي",
                    ar: "الشَّهِر الجَّاي",
                    en: "next month",
                    enArabeezy: "ish-shahr il jay",
                    hint: "",
                    exampleAr: "الشَّهِر الجَّاي نَاوِي أَبْلِش رِيَاضَة.",
                    exampleEn: "Next month I intend to start doing exercise.",
                },
                {
                    id: "hal_saneh",
                    ar: "هَالسَّنَة",
                    en: "this year",
                    enArabeezy: "hal saneh",
                    hint: "",
                    exampleAr:
                        "هَالسَّنَة حَابِب أُسَافِر مَرَّة وَاحْدَة عَالأَقَلّ.",
                    exampleEn: "This year I’d like to travel at least once.",
                },
                {
                    id: "saneh_jayyeh",
                    ar: "السَّنَة الجَّاي",
                    en: "next year",
                    enArabeezy: "is-saneh il jayyeh",
                    hint: "",
                    exampleAr:
                        "السَّنَة الجَّاي مُخَطِّط أَكْمِّل مُسْتَوَى أَعْلَى.",
                    exampleEn: "Next year I’m planning to complete a higher level.",
                },
                {
                    id: "ba3deen",
                    ar: "بَعْدِين",
                    en: "later / after that",
                    enArabeezy: "ba3deen",
                    hint: "Useful connector for future sequences.",
                    exampleAr:
                        "بَدّي أَدْرُس شْوَيّ، بَعْدِين أَتْفَرَّج عَلَى فِلْم.",
                    exampleEn: "I’m going to study a bit, then watch a movie.",
                },

                // ===== TYPES OF PLANS =====
                {
                    id: "mashrou3",
                    ar: "مَشْرُوع",
                    en: "project",
                    enArabeezy: "mashrou3",
                    hint: "Study or work project.",
                    exampleAr: "عِنْدِي مَشْرُوع كْبِير لِلنِّهَاية السَّنَة.",
                    exampleEn: "I have a big project for the end of the year.",
                },
                {
                    id: "imti7an",
                    ar: "اِمْتِحَان",
                    en: "exam",
                    enArabeezy: "imti7an",
                    hint: "",
                    exampleAr: "بَدّي أَجَهِّز لِاِمْتِحَان بُكْرَا.",
                    exampleEn: "I’m going to prepare for an exam tomorrow.",
                },
                {
                    id: "safar",
                    ar: "سَفَر",
                    en: "travel",
                    enArabeezy: "safar",
                    hint: "",
                    exampleAr: "حَابِب أَخَطِّط لِسَفَر قَصِير فِي الصَّيْف.",
                    exampleEn: "I’d like to plan a short trip in summer.",
                },
                {
                    id: "i3tlah",
                    ar: "عُطْلَة",
                    en: "holiday / vacation",
                    enArabeezy: "3otleh",
                    hint: "",
                    exampleAr: "بِالعُطْلَة بَدّي أَرِيح وَأَنَام كْتِير.",
                    exampleEn: "In the holiday I’m going to rest and sleep a lot.",
                },
                {
                    id: "dagheT",
                    ar: "ضَغْط",
                    en: "pressure / stress (busy period)",
                    enArabeezy: "daghT",
                    hint: "",
                    exampleAr:
                        "هَالشَّهِر فِيه ضَغْط، مَنْهُفّ شُغُل وَدِرَاسَة.",
                    exampleEn:
                        "This month is a period of pressure: a lot of work and study.",
                },

                // ===== ASKING ABOUT PLANS =====
                {
                    id: "shoo_mokhattatak",
                    ar: "شُو مُخَطَّطَاتَك؟",
                    en: "What are your plans?",
                    enArabeezy: "shoo mukhattatatak?",
                    hint:
                        "Masc/fem the same if you drop the ending in speech: مُخَطَّطَاتَك.",
                    exampleAr: "شُو مُخَطَّطَاتَك لِهَالسَّنَة؟",
                    exampleEn: "What are your plans for this year?",
                },
                {
                    id: "shoo_baddak_t3mel",
                    ar: "شُو بَدَّك تِعْمِل بُكْرَا؟",
                    en: "What do you want to do tomorrow?",
                    enArabeezy: "shoo baddak t3mel bukra?",
                    hint:
                        "Fem: شُو بَدِّك تِعْمْلِي؟ You can keep 1 entry & explain here.",
                    exampleAr: "شُو بَدِّك تِعْمْلِي بُكْرَا بَعْد الدَّرْس؟",
                    exampleEn: "What do you want to do tomorrow after the lesson?",
                },
                {
                    id: "3indak_khatta",
                    ar: "عِنْدَك خُطَّة؟",
                    en: "Do you have a plan?",
                    enArabeezy: "3indak khitta?",
                    hint: "",
                    exampleAr: "لِوِيكِينْد، عِنْدَك خُطَّة أَو لِسَّه؟",
                    exampleEn:
                        "For the weekend, do you have a plan or not yet?",
                },
                {
                    id: "ma3_time",
                    ar: "لِبَعْدِين / لِبَعْد شْوَيّ",
                    en: "for later",
                    enArabeezy: "lba3deen / lba3d shway",
                    hint: "Used when arranging time: لِبَعْدِين = for later.",
                    exampleAr: "خَلِّينَا نِخَلِّي الدَّرْس لِبَعْدِين.",
                    exampleEn: "Let’s leave the lesson for later.",
                },
            ],

            extra: [
                {
                    id: "ahdaf",
                    ar: "أَهْدَاف",
                    en: "goals",
                    enArabeezy: "ahdaf",
                    hint: "Singular: هَدَف.",
                    exampleAr:
                        "عِنْدِي أَهْدَاف لِهَالسَّنَة فِي الدِّرَاسَة وَاللُّغَة.",
                    exampleEn:
                        "I have goals for this year in study and language.",
                },
                {
                    id: "tadreejan",
                    ar: "تَدْرِيجِيًّا",
                    en: "gradually",
                    enArabeezy: "tadreejeyyan",
                    hint: "",
                    exampleAr:
                        "بَدّي أَتْقَدَّم تَدْرِيجِيًّا يَعْنِي شْوَيّ شْوَيّ.",
                    exampleEn:
                        "I want to progress gradually, step by step.",
                },
                {
                    id: "illa_iza",
                    ar: "إِلَّا إِذَا",
                    en: "unless / except if",
                    enArabeezy: "illa iza",
                    hint: "Used when plan might change.",
                    exampleAr:
                        "رَح أِجِي عَالدَّرْس، إِلَّا إِذَا طَلَع شِي طَارِئ.",
                    exampleEn:
                        "I will come to the lesson, unless something urgent comes up.",
                },
                {
                    id: "tanzim_wa2t",
                    ar: "تَنْظِيم وَقْت",
                    en: "time management",
                    enArabeezy: "tanzeem wa2t",
                    hint: "",
                    exampleAr:
                        "هَدَفِي هَالسَّنَة أُحَسِّن تَنْظِيم الوَقْت عِنْدِي.",
                    exampleEn:
                        "My goal this year is to improve my time management.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE – LONG SCENES
        // ====================================
        dialogue: {
            lines: [
                {
                    "speaker": "Omar",
                    "ar": "هاي يا مَلِك، كِيفِك اليوم؟",
                    "en": "Hey Malek, how are you today?"
                },
                {
                    "speaker": "Malek",
                    "ar": "هَلَّق تَعْبان شْوَي، بَس مَبْسوط عَالخِطَط لِلأُسْبوع الجّاي.",
                    "en": "I’m a bit tired now, but I’m happy about the plans for next week."
                },
                {
                    "speaker": "Omar",
                    "ar": "جَدّ؟ قُول، شُو مُخَطِّط تِعْمِل؟",
                    "en": "Really? Tell me, what are you planning to do?"
                },
                {
                    "speaker": "Malek",
                    "ar": "الأُسْبوع الجّاي رَح أِبْلِّش تَدْرِيب بِشِرْكَة سوفتْوِير.",
                    "en": "Next week I’ll start an internship at a software company."
                },
                {
                    "speaker": "Omar",
                    "ar": "واو، مُمْتاز! صار لَك زَمان ناوي عَهاد الاشي.",
                    "en": "Wow, that’s great! You’ve been intending to do that for a long time."
                },
                {
                    "speaker": "Malek",
                    "ar": "إي، بِرَأْيي هاي خُطْوَة خُطْوَة لِلْمُسْتَقْبَل.",
                    "en": "Yes, in my opinion it’s a step-by-step move for the future."
                },
                {
                    "speaker": "Omar",
                    "ar": "طيب وإجازَة الصَّيْف؟ رَح تِسافِر وِلّا كُلَّه شُغُل؟",
                    "en": "And the summer vacation? Will you travel or is it all work?"
                },
                {
                    "speaker": "Malek",
                    "ar": "حابِب أُسافِر أُسْبوع، بَس أوَّل إِشي بَدّي أُوَفِّر مَصاري.",
                    "en": "I’d like to travel for a week, but first I want to save money."
                },
                {
                    "speaker": "Omar",
                    "ar": "إن شاء الله يِزْبُط مَعَك. أنا خِطّتي أِتْخَرَّج السَّنَة الجّاي.",
                    "en": "Hopefully it works out. My plan is to graduate next year."
                },
                {
                    "speaker": "Malek",
                    "ar": "وبَعْدين؟ بَعْد التَّخَرُّج، شُو ناوي تِعْمِل؟",
                    "en": "And then? After graduation, what do you intend to do?"
                },
                {
                    "speaker": "Omar",
                    "ar": "لَسّه القَرار مِش نِهائي، بَس ناوي أَقَدِّم عَشُغُل وبِنْفَس الوَقْت أُكَمِّل دِراسَة.",
                    "en": "The decision is not final yet, but I intend to apply for a job and at the same time continue studying."
                },
                {
                    "speaker": "Malek",
                    "ar": "مُو مُسْتَعْجِل شْوَي؟ كْثير شُغُل لَواحِد.",
                    "en": "Aren’t you rushing it a bit? It’s a lot of work for one person."
                },
                {
                    "speaker": "Omar",
                    "ar": "مَبْسوط بِالفِكْرَة، بَس إذا شُفْت ضَغْط كْثير مُمْكِن أِأَجِّل واحِد مِن الهَدَفين.",
                    "en": "I like the idea, but if I see too much pressure I might postpone one of the two goals."
                },
                {
                    "speaker": "Malek",
                    "ar": "مْهِمّ تِرَتِّب أَوْلَوِيّاتَك، هادا أَهَمّ إشِي.",
                    "en": "It’s important to arrange your priorities, that’s the most important thing."
                },
                {
                    "speaker": "Omar",
                    "ar": "صَحّ. على سِيرَة الخِطَط، شُو رَأْيَك نِطْلَع نِتْغَدّى بُكْرَة؟",
                    "en": "Right. Speaking of plans, what do you think about going out for lunch tomorrow?"
                },
                {
                    "speaker": "Malek",
                    "ar": "بُكْرَة هَلَّق شْوَي مَشْغول، يِمْكِن بَعْد بُكْرَة أَفْضَل.",
                    "en": "Tomorrow I’m a bit busy, maybe the day after tomorrow is better."
                },
                {
                    "speaker": "Omar",
                    "ar": "تمام، بَعْد بُكْرَة عَالسّاعَة اِثْنَيْن؟",
                    "en": "Okay, the day after tomorrow at two o’clock?"
                },
                {
                    "speaker": "Malek",
                    "ar": "أَكِيد، رَح أِفْضي حالي.",
                    "en": "Sure, I’ll make myself free."
                },
                {
                    "speaker": "Omar",
                    "ar": "وإذا صار تَغْيِير بالخِطّة؟",
                    "en": "And if there’s a change in the plan?"
                },
                {
                    "speaker": "Malek",
                    "ar": "مِنْتِّفِق هَلَّق، وإذا اِضْطْرّينا نِلْغي أَو نِأَجِّل، بِبَعْتِلَك مِسِج.",
                    "en": "We’ll agree now, and if we have to cancel or postpone, I’ll send you a message."
                },
                {
                    "speaker": "Omar",
                    "ar": "شُكْرًا، بحِبّ الناس إلّي بِتِلْتِزِم بِمَواعِيدها.",
                    "en": "Thanks, I like people who stick to their appointments."
                },
                {
                    "speaker": "Malek",
                    "ar": "تِصَدِّق؟ قَبِل، كُنْت أُخَطِّط كْثير وبَس ولا إِشِي يِصِير!",
                    "en": "You know what? Before, I used to plan a lot and then nothing happened!"
                },
                {
                    "speaker": "Omar",
                    "ar": "هَلَّق صِرْت أَكْثَر واقِعي؟",
                    "en": "So now you’ve become more realistic?"
                },
                {
                    "speaker": "Malek",
                    "ar": "إي، بِحاوِل أِخُذ خُطْوَة خُطْوَة وما أِحْطّ عَحالي ضَغْط كْثير.",
                    "en": "Yes, I try to go step by step and not put too much pressure on myself."
                },
                {
                    "speaker": "Omar",
                    "ar": "حِلِم السَّفَر لِسّه مَوْجود عِنْدَك؟",
                    "en": "Is the dream of traveling still there for you?"
                },
                {
                    "speaker": "Malek",
                    "ar": "أَكِيد! إن شاء الله بَعْد ما أِتْخَرَّج وَأُوَفِّر مَصاري، رَح أُقْدِّم عَمنْحَة.",
                    "en": "Of course! God willing, after I graduate and save money, I’ll apply for a scholarship."
                },
                {
                    "speaker": "Omar",
                    "ar": "وإذا ما زَبَطْت المنْحَة؟",
                    "en": "And if the scholarship doesn’t work out?"
                },
                {
                    "speaker": "Malek",
                    "ar": "دايمًا في خِيار تاني، مُمْكِن آخُذ كُورْسات أونلاين وأَطَوِّر حالي مِن هون.",
                    "en": "There is always a second option: I can take online courses and improve myself from here."
                },
                {
                    "speaker": "Omar",
                    "ar": "هالحَكِي بيعْجِبْني، في تَفاؤُل وبِنَفْس الوَقْت واقِعِي.",
                    "en": "I like that; there is optimism and at the same time realism."
                },
                {
                    "speaker": "Malek",
                    "ar": "وإنت؟ شُو أَكْبَر هَدَف لَك لَلْمُسْتَقْبَل؟",
                    "en": "And you? What is your biggest goal for the future?"
                },
                {
                    "speaker": "Omar",
                    "ar": "هَدَفي أِتْخَرَّج، أِتْوَظَّف بِمَكان بحِبّه، وبَعْدين أُسافِر تَدْرِيب بَرّا سَنِة واحْدَة.",
                    "en": "My goal is to graduate, get a job in a place I like, and then travel for a one-year training abroad."
                },
                {
                    "speaker": "Malek",
                    "ar": "إن شاء الله كِلّ خِطَطَك تِزْبُط، خُطْوَة خُطْوَة.",
                    "en": "God willing, all your plans will work out, step by step."
                },
                {
                    "speaker": "Omar",
                    "ar": "وإن شاء الله خِطَطَك إنت كْمان.",
                    "en": "And God willing, your plans too."
                }
            ]
        }
        ,

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "baddi_future",
                title: "Using «بَدّي» for near future and intention",
                description:
                    "In Palestinian Arabic, «بَدّي» is very common for ‘I want / I’m going to’:\n\n" +
                    "• بَدّي أَدْرُس الْيَوْم. = I want to / I’m going to study today.\n" +
                    "• بَدّي أُرَتِّب الغُرْفَة بُكْرَا. = I’m going to tidy the room tomorrow.\n\n" +
                    "It expresses desire + intention. In many real conversations, this is more common than a ‘pure’ future tense.",
            },
            {
                id: "rah_future",
                title: "Using «رَح» to talk about future events",
                description:
                    "«رَح» is a future marker used before the verb:\n\n" +
                    "• بُكْرَا رَح أُسَافِر. = Tomorrow I will travel.\n" +
                    "• رَح يِكُون عِنّا اِمْتِحَان. = We will have an exam.\n\n" +
                    "You can combine it with time expressions:\n" +
                    "• الأُسْبُوع الجَّاي رَح نِبْدَى وَحْدَة جْدِيدَة.\n\n" +
                    "«رَح» is more neutral/objective; «بَدّي» is more personal.",
            },
            {
                id: "nawi_mukhattat",
                title: "Intentions vs. organized plans: «نَاوِي» vs «مُخَطِّط»",
                description:
                    "Use «نَاوِي» for internal intention, and «مُخَطِّط» for something more organized:\n\n" +
                    "• أَنَا نَاوِي إِنِّي أَتْعَلَّم عَرَبِي سَنَة كَامْلَة. = I intend to study Arabic for a full year.\n" +
                    "• أَنَا مُخَطِّط آخُد اِمْتِحَان فِي نِهَايَة السَّنَة. = I’m planning to take an exam at the end of the year.\n\n" +
                    "Sometimes you can use both in one explanation: intention + concrete plan.",
            },
            {
                id: "time_expressions",
                title: "Key time expressions for future",
                description:
                    "Important chunks to place your plan in time:\n\n" +
                    "• هَالْأُسْبُوع = this week\n" +
                    "• الأُسْبُوع الجَّاي = next week\n" +
                    "• هَالسَّنَة = this year\n" +
                    "• السَّنَة الجَّاي = next year\n" +
                    "• بَعْد بُكْرَا = the day after tomorrow\n\n" +
                    "Examples:\n" +
                    "• هَالسَّنَة بَدّي أَتْعَلَّم عَرَبِي جَدّ. = This year I really want to study Arabic.\n" +
                    "• السَّنَة الجَّاي رَح أَدْوِر عَلَى شُغُل. = Next year I will look for a job.",
            },
            {
                id: "sequence_ba3deen",
                title: "Sequencing plans with «بَعْدِين»",
                description:
                    "Use «بَعْدِين» to talk about a series of actions:\n\n" +
                    "• بَدّي أَدْرُس سَاعَة، بَعْدِين أَطْبُخ، بَعْدِين أَتْفَرَّج عَلَى فِلْم.\n" +
                    "  = I’m going to study for an hour, then cook, then watch a film.\n\n" +
                    "It’s very common and keeps your future narrative clear and natural.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "plans_q1",
                    questionAr: "أَيّ جُمْلَة تِسْتَعْمِل «رَح» لِلْمُسْتَقْبَل؟",
                    optionsEn: [
                        "بَدّي أَكْتُب الْيَوْم.",
                        "رَح أَكْتُب بُكْرَا.",
                        "أَنَا أَكْتُب هَلَّق.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "plans_q2",
                    questionAr: "«نَاوِي إِنِّي أُسَافِر» مَعْنَاهَا:",
                    optionsEn: [
                        "I used to travel.",
                        "I intend to travel.",
                        "I hate traveling.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "plans_q3",
                    questionAr: "«الأُسْبُوع الجَّاي» مَعْنَاهَا:",
                    optionsEn: [
                        "this week",
                        "next week",
                        "last week",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "plans_q4",
                    questionAr: "أَيّ كَلِمَة تِسْتَعْمِلْهَا لِـ ‘later / after that’؟",
                    optionsEn: [
                        "بَعْدِين",
                        "إِلَّا إِذَا",
                        "ضَغْط",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "plans_q5",
                    questionAr: "«لَازِم أُخَلِّص المَشْرُوع» مَعْنَاهَا:",
                    optionsEn: [
                        "I might finish the project.",
                        "I have to finish the project.",
                        "I don’t want to finish the project.",
                    ],
                    correctIndex: 1,
                },
            ],

            rolePlays: [
                "Role-play 1: Two friends talk about their plans for this week and next week. They must use: بَدّي / رَح / هَالْأُسْبُوع / الأُسْبُوع الجَّاي / بَعْدِين in at least 6–8 lines.",
                "Role-play 2: Talk about long-term future (this year + next year): study, work, travel. Use: نَاوِي، مُخَطِّط، أَهْدَاف، تَدْرِيجِيًّا، إِلَّا إِذَا… .",
                "Role-play 3: Student and teacher negotiate a study plan for Arabic (how many lessons, homework, extra tasks). The student must express preferences and limits using: بَحِبّ، مَا بَحِبّ، لَازِم، مُمْكِن، مَا بِفْرِق مَعِي.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second audio in Palestinian Arabic about your future plans:\n" +
                "1. Talk about your plans for this week and next week (at least 3 sentences each) using: هَالْأُسْبُوع، الأُسْبُوع الجَّاي، بَدّي، رَح، بَعْدِين.\n" +
                "2. Talk about your big goals for this year and next year using: نَاوِي / حَابِب / مُخَطِّط / أَهْدَاف / تَدْرِيجِيًّا.\n" +
                "3. Try to mention one plan for study, one for work (or future job), and one for travel or free time.\n" +
                "4. Use at least one ‘unless’ sentence with «إِلَّا إِذَا».",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Ask the student what day it is today and then in English ask: ‘What are your plans for this week?’ Move slowly into Arabic with key words: بَدّي، بُكْرَا، الأُسْبُوع الجَّاي.",
                "Draw a small timeline (today → this week → next month → next year) and write Arabic labels.",
            ],
            vocabularySteps: [
                "First, teach بَدّي vs رَح with very short examples tied to the student’s real life.",
                "Then add نَاوِي / مُخَطِّط / حَابِب and show the difference between inside intention and organized plan.",
                "Introduce time expressions in groups (week, month, year) and recycle them constantly.",
            ],
            dialogueSteps: [
                "Use Scene 1 as a model. Then ask the student to replace ‘project / exam / beach’ with their own reality.",
                "For the teacher–student scene, actually ask the student about their real study plan and edit it together in Arabic.",
            ],
            practiceTips: [
                "Encourage approximate answers; don’t demand perfect grammar. The goal is fluency in talking about the future.",
                "If the student is overwhelmed, choose only 2 core patterns for the first lesson (for example: بَدّي + time expressions).",
            ],
            wrapup: [
                "At the end, ask the student to tell you ONE concrete plan for tonight, this week, this month, and this year.",
                "Save or copy their answers to reuse in the next lesson and check what really happened.",
            ],
            myNotes: "",
        },
    },
    // Inside your defaultLessons literal:
    [LESSON_ID_HOBBIES]: {
        meta: {
            level: "Intermediate",
            unit: "Free Time & Hobbies",
            lessonTitle: "Unit 14 – Free Time & Hobbies",
        },

        overview: {
            title: "Unit 14 – Free Time & Hobbies",
            description:
                "In this unit, students talk about their free time, hobbies, and how often they do them in Palestinian Arabic. They learn useful verbs like ‘to play, read, draw, walk, swim’, plus how to say ‘usually, sometimes, rarely’ and talk about free time in real, natural conversations.",
            goals: [
                "Talk about free time and hobbies in simple Palestinian Arabic.",
                "Use key verbs for leisure activities in the present simple.",
                "Use frequency adverbs like ‘usually, sometimes, rarely, never’.",
                "Ask and answer questions about hobbies and weekend plans.",
                "Describe what they do alone, with friends, or with family.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== HOBBY NOUNS =====
                {
                    id: "hobi",
                    ar: "هِوَايِة",
                    en: "hobby",
                    enArabeezy: "hiwaye",
                    hint: "Plural: هَوَايَات. Useful pattern: هِوَايِتِي = my hobby.",
                    exampleAr: "هِوَايِتِي الرَّسِم وَالقِرَايَة.",
                    exampleEn: "My hobbies are drawing and reading.",
                },
                {
                    id: "riyada",
                    ar: "رِيَاضَة",
                    en: "sports / exercise",
                    enArabeezy: "riyada",
                    hint: "Can be general ‘sports’ or ‘exercise’.",
                    exampleAr: "بِحَاوِل أَعْمِل رِيَاضَة ثَلَاث مَرَّات فِي الأُسْبُوع.",
                    exampleEn: "I try to do exercise three times a week.",
                },
                {
                    id: "kora",
                    ar: "كُرَة قَدَم",
                    en: "football / soccer",
                    enArabeezy: "kurat 2adam / kora",
                    hint: "Often shortened to كُرَة.",
                    exampleAr: "أَخُوي بِحِبّ يِلْعَب كُرَة قَدَم مَع أَصْحَابُه.",
                    exampleEn: "My brother likes to play football with his friends.",
                },
                {
                    id: "musiqa",
                    ar: "مُوسِيقَى",
                    en: "music",
                    enArabeezy: "musiqa",
                    hint: "Very common with verbs ‘listen’ and ‘play (instrument)’.",
                    exampleAr: "فِي الفَرَاغ بَسْمَع مُوسِيقَى هَادِيَّة.",
                    exampleEn: "In my free time I listen to calm music.",
                },
                {
                    id: "kitaab",
                    ar: "كِتَاب",
                    en: "book",
                    enArabeezy: "kitaab",
                    hint: "Plural: كُتُب.",
                    exampleAr: "بَحِبّ الكُتُب التَّنْمِيَة الذَّاتِيَّة.",
                    exampleEn: "I like self-development books.",
                },
                {
                    id: "masalsal",
                    ar: "مُسَلْسَل",
                    en: "series / TV show",
                    enArabeezy: "mosalsal",
                    hint: "Plural: مُسَلْسَلَات.",
                    exampleAr: "أَحْيَانًا بِتْفَرَّج عَلَى مُسَلْسَل عَاللَّابْتُوب.",
                    exampleEn: "Sometimes I watch a series on the laptop.",
                },
                {
                    id: "film",
                    ar: "فِلْم",
                    en: "movie",
                    enArabeezy: "film",
                    hint: "Plural: أَفْلَام.",
                    exampleAr: "فِي الوِيكِينْد بِنْرُوح عَلَالسِّينِمَا نِتْفَرَّج عَلَى فِلْم.",
                    exampleEn: "On weekends we go to the cinema to watch a movie.",
                },
                {
                    id: "ba7er",
                    ar: "بَحِر",
                    en: "sea / beach",
                    enArabeezy: "ba7er",
                    hint: "Used a lot in Gaza/Palestine context.",
                    exampleAr: "أَحْلَى شِي فِي الصَّيْف القَعْدَة عَالبَحِر.",
                    exampleEn: "The best thing in summer is sitting by the sea.",
                },
                {
                    id: "nadi",
                    ar: "نَادِي",
                    en: "club / gym",
                    enArabeezy: "nadi",
                    hint: "Can be sports club or gym depending on context.",
                    exampleAr: "مَسَا كُلّ ثَنِين بِرُوح عَلنَّادِي.",
                    exampleEn: "Every Monday evening I go to the gym.",
                },

                // ===== LEISURE VERBS =====
                {
                    id: "yil3ab",
                    ar: "يِلْعَب",
                    en: "to play (a game / sport)",
                    enArabeezy: "yil3ab",
                    hint: "Masdar (verbal noun): لِعِب. With كُرَة, شَدَّة (cards), إلخ.",
                    exampleAr: "بِحِبّ أِلْعَب كُرَة قَدَم مَع الصَّحَاب.",
                    exampleEn: "I like to play football with friends.",
                },
                {
                    id: "yi2ra",
                    ar: "يِقْرَا",
                    en: "to read",
                    enArabeezy: "yi2ra",
                    hint: "1st person: بَقْرَا.",
                    exampleAr: "قَبْل مَا أَنَام بَقْرَا نُصّ سَاعَة.",
                    exampleEn: "Before I sleep, I read for half an hour.",
                },
                {
                    id: "yirsem",
                    ar: "يِرْسِم",
                    en: "to draw",
                    enArabeezy: "yirsem",
                    hint: "1st person: بَرْسِم.",
                    exampleAr: "أُخْتِي بَتْرْسِم صُوَر كْتِير حْلُوَة.",
                    exampleEn: "My sister draws very nice pictures.",
                },
                {
                    id: "yisma3",
                    ar: "يِسْمَع",
                    en: "to listen (to)",
                    enArabeezy: "yisma3",
                    hint: "Use preposition لَـ: بَسْمَع لَأَغَانِي هَادِيَّة.",
                    exampleAr: "وَأَنَا مْسَافْرَة بَسْمَع مُوسِيقَى.",
                    exampleEn: "When I’m traveling, I listen to music.",
                },
                {
                    id: "yitfarraj",
                    ar: "يِتْفَرَّج",
                    en: "to watch",
                    enArabeezy: "yitfarraj",
                    hint: "Often with عَلَى: يِتْفَرَّج عَلَى فِلْم / مُسَلْسَل.",
                    exampleAr: "بِاللَّيْل بِتْفَرَّج عَلَى مُسَلْسَل تُرْكِي.",
                    exampleEn: "At night I watch a Turkish series.",
                },
                {
                    id: "yimshi",
                    ar: "يِمْشِي",
                    en: "to walk",
                    enArabeezy: "yimshi",
                    hint: "For exercise walk or just going around.",
                    exampleAr: "مَسَا بْرُوح أِمْشِي نُصّ سَاعَة حَوَالِين البَيْت.",
                    exampleEn: "In the evening I go walk for half an hour around the house.",
                },
                {
                    id: "yisba7",
                    ar: "يِسْبَح",
                    en: "to swim",
                    enArabeezy: "yisba7",
                    hint: "1st person: بَسْبَح.",
                    exampleAr: "فِي الصَّيْف بَسْبَح كْتِير عَالبَحِر.",
                    exampleEn: "In summer I swim a lot at the sea.",
                },
                {
                    id: "yit3allam_ala",
                    ar: "يِتْعَلَّم عَلَى آلَة",
                    en: "to learn (an instrument)",
                    enArabeezy: "yit3allam 3ala aleh",
                    hint: "Example with oud, guitar, piano, etc.",
                    exampleAr: "هَالفَتْرَة بَتْعَلَّم عَلَى الْعُود.",
                    exampleEn: "These days I’m learning the oud.",
                },

                // ===== FREQUENCY & TIME =====
                {
                    id: "3adean",
                    ar: "عَادَةً",
                    en: "usually",
                    enArabeezy: "3adatan",
                    hint: "Very useful to talk about routine.",
                    exampleAr: "عَادَةً بَقْضِي الوِيكِينْد مَع العِيلَة.",
                    exampleEn: "Usually I spend the weekend with my family.",
                },
                {
                    id: "a7yanan",
                    ar: "أَحْيَانًا",
                    en: "sometimes",
                    enArabeezy: "a7yanan",
                    hint: "",
                    exampleAr: "أَحْيَانًا بَرُوح عَلَالسِّينِمَا مَع أَصْحَابِي.",
                    exampleEn: "Sometimes I go to the cinema with my friends.",
                },
                {
                    id: "nadiran",
                    ar: "نَادِرًا",
                    en: "rarely",
                    enArabeezy: "nadiran",
                    hint: "",
                    exampleAr: "نَادِرًا بَتْفَرَّج عَلَى تِلْفِزْيُون.",
                    exampleEn: "I rarely watch TV.",
                },
                {
                    id: "walla_omar",
                    ar: "وَلَا مَرَّة",
                    en: "never",
                    enArabeezy: "wala marra",
                    hint: "Strong negative frequency.",
                    exampleAr: "وَلَا مَرَّة جَرَّبْت أِسْبَح بِالبَحِر فِي الشِّتَا.",
                    exampleEn: "I have never tried swimming in the sea in winter.",
                },
                {
                    id: "bil_weikend",
                    ar: "بِالوِيكِينْد",
                    en: "on the weekend",
                    enArabeezy: "bil weekend",
                    hint: "Very common chunk in youth speech.",
                    exampleAr: "بِالوِيكِينْد بْنِطْبُخ أَكْلَة خَاصَّة فِي البَيْت.",
                    exampleEn: "On the weekend we cook a special dish at home.",
                },
                {
                    id: "fi_elfaragh",
                    ar: "فِي الفَرَاغ",
                    en: "in free time",
                    enArabeezy: "fi il faraagh",
                    hint: "",
                    exampleAr: "فِي الفَرَاغ بَتْعَلَّم لُغَات عَلَى الإِنْتَرْنِت.",
                    exampleEn: "In my free time I learn languages online.",
                },

                // ===== WITH WHOM =====
                {
                    id: "ma3_hali",
                    ar: "مَع حَالِي",
                    en: "by myself / alone",
                    enArabeezy: "ma3 7ali",
                    hint: "",
                    exampleAr: "لَمَّا أِقْرَا بَفَضَّل أَقْعُد مَع حَالِي.",
                    exampleEn: "When I read I prefer to sit by myself.",
                },
                {
                    id: "ma3_as7abi",
                    ar: "مَع أَصْحَابِي",
                    en: "with my friends",
                    enArabeezy: "ma3 aṣ7abi",
                    hint: "",
                    exampleAr: "بِحِبّ أِلْعَب كُرَة قَدَم مَع أَصْحَابِي.",
                    exampleEn: "I like to play football with my friends.",
                },
                {
                    id: "ma3_el3eileh",
                    ar: "مَع العِيلَة",
                    en: "with the family",
                    enArabeezy: "ma3 il-3eileh",
                    hint: "",
                    exampleAr: "أَكْثَر شِي بِنْبَسِط لَمَّا أَطْلَع مَع العِيلَة.",
                    exampleEn: "I enjoy it most when I go out with my family.",
                },
            ],

            extra: [
                {
                    id: "taslee",
                    ar: "تَسْلِيِة",
                    en: "fun / entertainment",
                    enArabeezy: "tasliyeh",
                    hint: "From the verb يِتْسَلَّى ‘to have fun / pass time’.",
                    exampleAr: "بِسْتَعْمِل المُسَلْسَل لِلتَّسْلِيِة بَعْد الدِّرَاسَة.",
                    exampleEn: "I use a series for fun after studying.",
                },
                {
                    id: "yitshallaa",
                    ar: "يِتْسَلَّى",
                    en: "to have fun / entertain oneself",
                    enArabeezy: "yitshallā",
                    hint: "1st person: بَتْسَلَّى.",
                    exampleAr: "بَتْسَلَّى لَمَّا أِرْسِم أَو أِسْمَع مُوسِيقَى.",
                    exampleEn: "I have fun when I draw or listen to music.",
                },
                {
                    id: "yistirikh",
                    ar: "يِسْتِرِيح",
                    en: "to rest / relax",
                    enArabeezy: "yistiri7",
                    hint: "1st person: بَسْتِرِيح.",
                    exampleAr: "بَعْد الأُسْبُوع الطَّوِيل بَسْتِرِيح بِالوِيكِينْد.",
                    exampleEn: "After a long week I relax on the weekend.",
                },
                {
                    id: "mufaddal",
                    ar: "مُفَضَّل",
                    en: "favorite",
                    enArabeezy: "mufaDDal",
                    hint: "Masc: مُفَضَّل، fem: مُفَضَّلَة.",
                    exampleAr: "أَكْتُب هِوَايَتَك المُفَضَّلَة بِالعَرَبِي.",
                    exampleEn: "Write your favorite hobby in Arabic.",
                },
                {
                    id: "mafiwa2t",
                    ar: "مَا فِيش وَقْت",
                    en: "there is no time",
                    enArabeezy: "ma fiish wa2t",
                    hint: "Very common excuse when talking about hobbies.",
                    exampleAr: "بِحِبّ أَرْسِم بَسّ مَا فِيش وَقْت هَالْفَتْرَة.",
                    exampleEn: "I like drawing but there’s no time these days.",
                },
            ],
        }
        ,

        // ====================================
        // DIALOGUE – LONG & NATURAL
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Talking about free time at the weekend
                {
                    speaker: "Narrator",
                    ar: "بِالوِيكِينْد، رُوبَا وَصَاحْبْتَهَا نُور قَاعِدِين عَالبَحِر وَبِيِحْكُوا عَن الفَرَاغ وَالهَوَايَات.",
                    en: "On the weekend, Roba and her friend Noor are sitting by the sea talking about free time and hobbies.",
                },
                {
                    speaker: "Noor",
                    ar: "رُوبَا، عَادَةً كِيف بْتِقْضِي الفَرَاغ عِنْدِك؟",
                    en: "Roba, how do you usually spend your free time?",
                },
                {
                    speaker: "Roba",
                    ar: "صَرَاحَةً، هَالْفَتْرَة فِيش وَقْت كْتِير، بَسّ لَمَّا يِكُون فِي فَرَاغ بَقْرَا كِتَاب أَو بَتْفَرَّج عَلَى فِلْم.",
                    en: "Honestly, these days there isn’t much time, but when I have free time I read a book or watch a movie.",
                },
                {
                    speaker: "Noor",
                    ar: "حِلُو الحَكِي. أَنَا أَكْثَر شِي بَحِبّ الرِّيَاضَة. بَرُوح عَلنَّادِي ثَلَاث مَرَّات فِي الأُسْبُوع.",
                    en: "Nice. The thing I like most is exercise. I go to the gym three times a week.",
                },
                {
                    speaker: "Roba",
                    ar: "يَا سَلَام، مُمْتَاز. أَنَا بِالوِيكِينْد بَسْبَح أَحْيَانًا عَالبَحِر وَبَعْدِين بَقْعُد مَع العِيلَة.",
                    en: "Wow, that’s great. On the weekend I sometimes swim at the sea, then I sit with the family.",
                },
                {
                    speaker: "Noor",
                    ar: "تِسْتِرِيحِي مَع العِيلَة بَعْد الأُسْبُوع الطَّوِيل.",
                    en: "So you relax with your family after the long week.",
                },
                {
                    speaker: "Roba",
                    ar: "أَيُّوَه، بَسْتِرِيح وَبَتْسَلَّى. وَإِنْتِي، مَع مِين أَكْثَر شِي تِمْضِي الفَرَاغ؟",
                    en: "Yes, I relax and have fun. And you, with whom do you mostly spend your free time?",
                },
                {
                    speaker: "Noor",
                    ar: "مَرَّة مَع حَالِي، مَرَّة مَع أَصْحَابِي. لَمَّا أَكُون مَع حَالِي بَرْسِم وَبَسْمَع مُوسِيقَى.",
                    en: "Sometimes by myself, sometimes with my friends. When I’m by myself I draw and listen to music.",
                },

                // Scene 2 – In class: talking about hobbies
                {
                    speaker: "Narrator",
                    ar: "فِي الدَّرْس، المُدَرِّس طَلَب مِن الطُّلَّاب يِحْكُوا عَن هَوَايَاتْهُمْ.",
                    en: "In class, the teacher asked the students to talk about their hobbies.",
                },
                {
                    speaker: "Teacher",
                    ar: "طَيِّب يَا شَبَاب، هَلَّق بَدَّنَا نِحْكِي عَن الهَوَايَات. رُوبَا، اِبْدَيْ بِحَالِك. شُو هِوَايِتِك المُفَضَّلَة؟",
                    en: "Okay everyone, now we’ll talk about hobbies. Roba, start with yourself. What is your favorite hobby?",
                },
                {
                    speaker: "Roba",
                    ar: "هِوَايِتِي المُفَضَّلَة القِرَايَة. عَادَةً بَقْرَا رِوَايَات بِالْعَرَبِي وبِالإِنْجْلِيزِي.",
                    en: "My favorite hobby is reading. Usually I read novels in Arabic and English.",
                },
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز. كَم مَرَّة فِي الأُسْبُوع بَقْدَرِك تِقْرَاي؟",
                    en: "Excellent. How many times a week can you read?",
                },
                {
                    speaker: "Roba",
                    ar: "أَحْيَانًا كُلّ يَوم، بَسّ أَحْيَانًا مَرَّة أَو مَرَّتَيْن بَسّ. نَادِرًا يَمُرّ أُسْبُوع بِلَا قِرَايَة.",
                    en: "Sometimes every day, but sometimes only once or twice. It’s rare that a week passes without reading.",
                },
                {
                    speaker: "Teacher",
                    ar: "حِلُو كْتِير. نُور، شُو بِتْعْمْلِي فِي الفَرَاغ؟",
                    en: "Very nice. Noor, what do you do in your free time?",
                },
                {
                    speaker: "Noor",
                    ar: "بِصَرَاحَة، هَالفَتْرَة مَا فِيش وَقْت كْتِير. بَسّ لَمَّا يِكُون فِي فَرَاغ بَرُوح أِمْشِي أَو أِلْعَب رِيَاضَة فِي النَّادِي.",
                    en: "Honestly, these days there isn’t much time. But when I have free time I go for a walk or play sports at the gym.",
                },
                {
                    speaker: "Teacher",
                    ar: "مَعِك حَقّ، الوَقْت مَش سَهْل. بَسّ أَهَمّ شِي نَلْقِي وَلَو نُصّ سَاعَة لِلهَوَايَات.",
                    en: "You’re right, time is not easy. But the most important thing is to find even half an hour for hobbies.",
                },

                // Scene 3 – Making plans for next weekend
                {
                    speaker: "Narrator",
                    ar: "بَعْد الدَّرْس، رُوبَا وَنُور عَم بِرَتِّبُوا لِلوِيكِينْد الجَّاي.",
                    en: "After the lesson, Roba and Noor are planning for the next weekend.",
                },
                {
                    speaker: "Noor",
                    ar: "بِالوِيكِينْد الجَّاي، بِتْحِبّ نِتْزَبَّط قَعْدَة نِرْسِم وَنِتْفَرَّج عَلَى فِلْم؟",
                    en: "Next weekend, would you like us to plan a little hangout to draw and watch a movie?",
                },
                {
                    speaker: "Roba",
                    ar: "فِكْرَة مُمْتَازَة. عَادَةً الوِيكِينْد بَقْضِيه مَع العِيلَة، بَسّ هَالمَرَّة بَقْدَر آجِي.",
                    en: "Excellent idea. Usually I spend the weekend with my family, but this time I can come.",
                },
                {
                    speaker: "Noor",
                    ar: "مْنَاح. مُمْكِن نِبْدَى رَسِم، بَعْدِين نِتْفَرَّج عَلَى فِلْم وَنِسْمَع مُوسِيقَى هَادِيَّة.",
                    en: "Great. We can start with drawing, then watch a movie and listen to calm music.",
                },
                {
                    speaker: "Roba",
                    ar: "بِتْسَلَّى كْتِير بِهَالطَّرِيقَة. يَلَّا، بِتَّصِل فِيك قَبْل اليَوْم بِيَوم نِتَأَكَّد.",
                    en: "It’s really fun that way. Okay, I’ll call you one day before to confirm.",
                },
                {
                    speaker: "Noor",
                    ar: "أَهْلًا وَسَهْلًا فِيك دَايْمًا. مَا بَدّي أَطَوِّل عَلِك هَلَّق، بَنِحْكِي بَعْدِين.",
                    en: "You’re always welcome. I don’t want to keep you now, we’ll talk later.",
                },
                {
                    speaker: "Roba",
                    ar: "مُنَاسِب. مَع السَّلَامَة، تِسْتِرِيحِي.",
                    en: "Sounds good. Goodbye, have a good rest.",
                },
            ],
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "b_prefix_hobbies",
                title: "Present simple with «بـ» for hobbies and routines",
                description:
                    "We use the «بـ» (b-) prefix for simple present, especially habits and routines:\n\n" +
                    "• بَقْرَا كِتَاب كُلّ لَيْلَة. = I read a book every night.\n" +
                    "• بَسْبَح بِالصَّيْف كْتِير. = I swim a lot in summer.\n" +
                    "• بَرُوح عَلنَّادِي مَرَّتَيْن فِي الأُسْبُوع. = I go to the gym twice a week.\n\n" +
                    "Pattern: ب + [root verb form in dialect] → present:\n" +
                    "بَقْرَا، بَرْسِم، بَسْمَع، بَتْفَرَّج، بَمْشِي، بَسْبَح.",
            },
            {
                id: "frequency_words",
                title: "Frequency words: عَادَةً، أَحْيَانًا، نَادِرًا، وَلَا مَرَّة",
                description:
                    "Very useful adverbs for how often:\n\n" +
                    "• عَادَةً = usually\n" +
                    "• أَحْيَانًا = sometimes\n" +
                    "• نَادِرًا = rarely\n" +
                    "• وَلَا مَرَّة = never\n\n" +
                    "They often come at the beginning of the sentence:\n" +
                    "• عَادَةً بَقْضِي الوِيكِينْد مَع العِيلَة.\n" +
                    "• أَحْيَانًا بَرُوح عَلَالبَحِر.\n" +
                    "• نَادِرًا بَتْفَرَّج عَلَى تِلْفِزْيُون.\n" +
                    "• وَلَا مَرَّة جَرَّبْت هَالهِوَايِة.",
            },
            {
                id: "with_whom_structure",
                title: "Saying who you do the hobby with",
                description:
                    "Use the chunk «مَع …» to say with whom you do something:\n\n" +
                    "• مَع حَالِي = by myself / alone.\n" +
                    "• مَع أَصْحَابِي = with my friends.\n" +
                    "• مَع العِيلَة = with the family.\n\n" +
                    "Examples:\n" +
                    "• بَتْسَلَّى لَمَّا أِلْعَب كُرَة مَع أَصْحَابِي.\n" +
                    "• بَفْضَّل أَقْرَا مَع حَالِي.\n" +
                    "• بِالوِيكِينْد بِنْطْلَع مَع العِيلَة.",
            },
            {
                id: "question_free_time",
                title: "Asking about free time and hobbies",
                description:
                    "Useful question patterns:\n\n" +
                    "• كِيف بْتِقْضِي الفَرَاغ عِنْدِك؟ = How do you spend your free time?\n" +
                    "• شُو هِوَايِتَك المُفَضَّلَة؟ = What’s your favorite hobby?\n" +
                    "• كَم مَرَّة فِي الأُسْبُوع…؟ = How many times a week…?\n\n" +
                    "You can answer with present + frequency word:\n" +
                    "– كَم مَرَّة فِي الأُسْبُوع بَرُوح عَلنَّادِي؟\n" +
                    "– مَرَّتَيْن فِي الأُسْبُوع عَادَةً.",
            },
            {
                id: "mafiwa2t_excuse",
                title: "Using «مَا فِيش وَقْت» as a soft excuse",
                description:
                    "When talking about hobbies we often say there is no time:\n\n" +
                    "• بَحِبّ أَرْسِم بَسّ مَا فِيش وَقْت هَالْفَتْرَة.\n" +
                    "  = I like drawing but there is no time these days.\n\n" +
                    "This is a very natural chunk and explains why we don’t do the hobby often, without sounding negative.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "hobbies_q1",
                    questionAr: "«فِي الفَرَاغ» مَعْنَاهَا:",
                    optionsEn: [
                        "in free time",
                        "in the morning",
                        "in the weekend",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "hobbies_q2",
                    questionAr: "أَيّ كَلِمَة تِسْتَعْمِلْهَا لِـ ‘usually’؟",
                    optionsEn: ["أَحْيَانًا", "عَادَةً", "نَادِرًا"],
                    correctIndex: 1,
                },
                {
                    id: "hobbies_q3",
                    questionAr: "«بَرْسِم» جَايَّة مِن الفِعْل:",
                    optionsEn: [
                        "يِرْسِم",
                        "يِسْمَع",
                        "يِمْشِي",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "hobbies_q4",
                    questionAr: "«مَع حَالِي» مَعْنَاهَا:",
                    optionsEn: [
                        "with my friends",
                        "with my family",
                        "by myself / alone",
                    ],
                    correctIndex: 2,
                },
                {
                    id: "hobbies_q5",
                    questionAr: "أَيّ جُمْلَة تَسْتَعْمِل فِيهَا «وَلَا مَرَّة» صَح؟",
                    optionsEn: [
                        "وَلَا مَرَّة جَرَّبْت أَسْبَح فِي الشِّتَا.",
                        "وَلَا مَرَّة بَقْرَا كُلّ يَوم.",
                        "وَلَا مَرَّة بِالوِيكِينْد.",
                    ],
                    correctIndex: 0,
                },
            ],

            rolePlays: [
                "Role-play 1: Student A asks Student B about their free time using: كِيف بْتِقْضِي الفَرَاغ عِنْدِك؟، شُو هِوَايِتَك المُفَضَّلَة؟، كَم مَرَّة فِي الأُسْبُوع…؟. Student B answers with عَادَةً / أَحْيَانًا / نَادِرًا + present tense.",
                "Role-play 2: Two friends are planning the weekend. They must mention at least 3 activities (walk, watch a movie, draw, go to the sea, gym) and use بَعْدِين to sequence the plan.",
                "Role-play 3: The teacher asks you about hobbies in an ‘exam style’ mini interview. You answer in full sentences: what you like, when you do it, and with whom (مَع حَالِي / مَع أَصْحَابِي / مَع العِيلَة).",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write and record a 60–90 second audio in Palestinian Arabic:\n" +
                "1. Describe how you usually spend your free time during the week (study days).\n" +
                "2. Describe how you spend your free time in the weekend.\n" +
                "3. Mention at least 2 hobbies you LIKE and 1 hobby you RARELY or NEVER do (use: عَادَةً، أَحْيَانًا، نَادِرًا، وَلَا مَرَّة).\n" +
                "4. Say which hobbies you do alone, and which you do with friends or family.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "In English, ask: ‘Do you have free time? What do you do?’ Then immediately pick 3–4 English words and give the Arabic: كتاب، فيلم، رِيَاضَة، مُوسِيقَى، نَادِي.",
                "Draw a simple weekly schedule and ask the student which days are busy and which days they have more free time.",
            ],
            vocabularySteps: [
                "Teach hobby nouns first (book, film, series, music, gym, sea), then add the verbs (read, watch, listen, walk, swim).",
                "Drill short sentences with present + frequency: ‘عَادَةً بَقْرَا…’ / ‘أَحْيَانًا بَتْفَرَّج…’.",
                "Highlight the pattern ب + verb for present tense as a ‘magic key’ to talk about routine.",
            ],
            dialogueSteps: [
                "Use Scene 2 (in class) as a model mini interview. Then switch roles and let the student be the teacher, asking YOU about your hobbies.",
                "Encourage the student to personalize the plan conversation in Scene 3 with their real weekend.",
            ],
            practiceTips: [
                "If pronunciation is hard, focus on 4 verbs only in the first lesson: بَقْرَا، بَتْفَرَّج، بَسْمَع، بَرُوح.",
                "Use a little ‘hobby table’ (hobby / when / with whom) and fill it in together in Arabic.",
            ],
            wrapup: [
                "End by asking the student to tell you in Arabic one small realistic change: a hobby they want to add ‘تَدْرِيجِيًّا’ this month.",
                "Copy or screenshot their answer to reuse it in the next lesson and check progress.",
            ],
            myNotes: "",
        },
    },
    [LESSON_ID_FEELINGS]: {
        meta: {
            level: "Intermediate",
            unit: "Feelings & Mental State",
            lessonTitle: "Unit 15 – Feelings & Mental State",
        },

        overview: {
            title: "Unit 15 – Feelings & Mental State",
            description:
                "In this unit, students learn how to talk about their feelings, energy, stress, and mood in Palestinian Arabic, and how to ask others about their emotional state in a natural, supportive way.",
            goals: [
                "Use common adjectives to describe feelings (happy, sad, tired, stressed, relaxed, bored, worried…).",
                "Ask and answer questions like ‘How do you feel?’ and ‘What’s wrong?’.",
                "Use chunks like ‘I feel…’, ‘I’m under pressure’, ‘I’m not in the mood’, ‘take a break’.",
                "React in a supportive way to bad news or difficult situations.",
                "Talk about simple self-care plans in Palestinian Arabic.",
            ],
        },

        // ====================================
        // VOCABULARY
        // ====================================
        vocabulary: {
            core: [
                // ===== BASIC FEELINGS =====
                {
                    id: "mabsut",
                    ar: "مَبْسُوط",
                    en: "happy / pleased",
                    hint:
                        "Masc: مَبْسُوط، fem: مَبْسُوطَة، plural: مَبْسُوطِين. Very common for ‘feeling good / happy’.",
                    exampleAr: "اليَوْم مَبْسُوطَة لِأَنِّي خَلَّصِت المَشْرُوع.",
                    exampleEn: "Today I’m happy because I finished the project.",
                },
                {
                    id: "za3lan",
                    ar: "زَعْلَان",
                    en: "upset / sad",
                    hint:
                        "Masc: زَعْلَان، fem: زَعْلَانَة. Can be ‘angry’ or ‘sad’ depending on context.",
                    exampleAr: "هُوَّا زَعْلَان شْوَيّ مِن النَّتِيجَة.",
                    exampleEn: "He is a bit upset about the result.",
                },
                {
                    id: "ta3ban",
                    ar: "تَعْبَان",
                    en: "tired / exhausted",
                    hint:
                        "Masc: تَعْبَان، fem: تَعْبَانَة. Physical or mental tiredness.",
                    exampleAr: "بَعْد اليَوْم الطَّوِيل حَاسِّة حَالِي تَعْبَانَة.",
                    exampleEn: "After the long day I feel tired.",
                },
                {
                    id: "mdayya2",
                    ar: "مْضَايَق",
                    en: "annoyed / bothered / feeling tight",
                    hint:
                        "Masc: مْضَايَق، fem: مْضَايْقَة. Literal meaning ‘feeling squeezed inside’.",
                    exampleAr: "مْضَايْقَة شْوَيّ مِن كِلّ الضَّغْط هَالأُسْبُوع.",
                    exampleEn: "I feel a bit tight/annoyed from all the pressure this week.",
                },
                {
                    id: "zahgan",
                    ar: "زَهْقَان",
                    en: "bored / fed up",
                    hint:
                        "Masc: زَهْقَان، fem: زَهْقَانَة. Often with مِن: زَهْقَان مِن الدِّرَاسَة.",
                    exampleAr: "أَحْسَاسِي إِنِّي زَهْقَانَة مِن الشُّغُل الرُّوتِينِي.",
                    exampleEn: "I feel bored / fed up with the routine work.",
                },
                {
                    id: "motawattar",
                    ar: "مُتَوَتِّر",
                    en: "nervous / tense",
                    hint:
                        "Masc: مُتَوَتِّر، fem: مُتَوَتِّرَة. Often before exams, interviews, etc.",
                    exampleAr: "مُتَوَتِّرَة قَبْل الاِمْتِحَان بُكْرَا.",
                    exampleEn: "I’m nervous before the exam tomorrow.",
                },
                {
                    id: "mado3oot",
                    ar: "مَضْغُوط",
                    en: "under pressure / stressed",
                    hint:
                        "Masc: مَضْغُوط، fem: مَضْغُوطَة. From the word for ‘pressure’.",
                    exampleAr: "هَالشَّهِر كْلُه مَضْغُوطَة بَيْن الدِّرَاسَة وَالشُّغُل.",
                    exampleEn: "This month I’m under pressure between study and work.",
                },
                {
                    id: "merta7",
                    ar: "مِرْتَاح",
                    en: "comfortable / relaxed",
                    hint:
                        "Masc: مِرْتَاح، fem: مِرْتَاحَة. Can be physical or emotional comfort.",
                    exampleAr: "بَحِسّ حَالِي مِرْتَاحَة لَمَّا أَكُون عَالبَحِر.",
                    exampleEn: "I feel relaxed when I’m at the sea.",
                },
                {
                    id: "mit7ammis",
                    ar: "مِتْحَمِّس",
                    en: "excited / motivated",
                    hint:
                        "Masc: مِتْحَمِّس، fem: مِتْحَمِّسَة. From حَمَاس ‘enthusiasm’.",
                    exampleAr: "مِتْحَمِّسَة أَبْلِش المُسْتَوَى الجَّدِيد.",
                    exampleEn: "I’m excited to start the new level.",
                },
                {
                    id: "khayef",
                    ar: "خَايِف",
                    en: "afraid / scared",
                    hint:
                        "Masc: خَايِف، fem: خَايْفَة. Often with مِن: خَايْفَة مِن النَّتِيجَة.",
                    exampleAr: "خَايْفَة مِن النَّتِيجَة بَعْد الاِمْتِحَان.",
                    exampleEn: "I’m scared about the result after the exam.",
                },
                {
                    id: "mashkour",
                    ar: "مَشْكُور",
                    en: "grateful / thankful (feeling)",
                    hint:
                        "Literally ‘thanked’; used to express gratitude. Fem: مَشْكُورَة.",
                    exampleAr: "مَشْكُورَة كْتِير عَلَى دَعْمِك، عَنْجَد فَادَنِي.",
                    exampleEn: "I feel very grateful for your support, it really helped me.",
                },

                // ===== MOOD & ENERGY CHUNKS =====
                {
                    id: "mazaaji_mnee7",
                    ar: "مَزَاجِي مْنِيح",
                    en: "my mood is good",
                    hint:
                        "Opposite: مَزَاجِي مِش مْنِيح = my mood is not good.",
                    exampleAr: "اليَوْم مَزَاجِي مْنِيح بَسّ مُتْعَبَة شْوَيّ.",
                    exampleEn: "Today my mood is good but I’m a bit tired.",
                },
                {
                    id: "ma_eli_maal",
                    ar: "مَا إِلِي مَال",
                    en: "I’m not in the mood / I don’t feel like it",
                    hint:
                        "Chunk to refuse softly or explain low energy.",
                    exampleAr: "صِحَابِي بَدَّهُمْ يِطْلَعُوا، بَسّ أَنَا اليَوْم مَا إِلِي مَال.",
                    exampleEn: "My friends want to go out, but today I’m not in the mood.",
                },
                {
                    id: "ta2ti_zeleeleh",
                    ar: "طَاقْتِي قَلِيلَة",
                    en: "my energy is low",
                    hint:
                        "Useful to say you’re tired mentally/physically.",
                    exampleAr: "طَاقْتِي قَلِيلَة مِن كِلّ الشُّغُل وَالدِّرَاسَة.",
                    exampleEn: "My energy is low from all the work and study.",
                },
                {
                    id: "bihاجa_istiraaha",
                    ar: "بِحَاجَة لاسْتِرَاحَة",
                    en: "in need of a break",
                    hint:
                        "Very natural chunk about self-care.",
                    exampleAr: "حَاسِّة إِنِّي بِحَاجَة لاسْتِرَاحَة يَومَيْن.",
                    exampleEn: "I feel I need a break for two days.",
                },
                {
                    id: "mesh_mosta3de",
                    ar: "مِش مُسْتَعِدّ",
                    en: "not ready",
                    hint:
                        "Masc: مِش مُسْتَعِدّ، fem: مِش مُسْتَعِدَّة. Emotionally or practically.",
                    exampleAr: "مِش مُسْتَعِدَّة أَخُد قَرَار هَلَّق.",
                    exampleEn: "I’m not ready to make a decision now.",
                },
                {
                    id: "daye3",
                    ar: "ضَايِع",
                    en: "lost / confused",
                    hint:
                        "Emotional ‘lost’ (not understanding / not sure).",
                    exampleAr: "بِهَالمَوْضُوع حَاسّ حَالِي ضَايِع شْوَيّ.",
                    exampleEn: "In this topic I feel a bit lost.",
                },

                // ===== VERBS ABOUT FEELINGS =====
                {
                    id: "ba7ess",
                    ar: "بَحِسّ",
                    en: "I feel",
                    hint:
                        "From يِحِسّ. Often with إِنِّي: بَحِسّ إِنِّي…",
                    exampleAr: "بَحِسّ إِنِّي مَضْغُوطَة هَالأُسْبُوع.",
                    exampleEn: "I feel that I’m under pressure this week.",
                },
                {
                    id: "bifakker",
                    ar: "بِفَكِّر",
                    en: "I think",
                    hint:
                        "Mental process: thinking / considering.",
                    exampleAr: "بِفَكِّر آخُد يَوم اِجَازَة لاسْتِرَاحَة.",
                    exampleEn: "I’m thinking of taking a day off to rest.",
                },
                {
                    id: "bibali",
                    ar: "بِبَالِي",
                    en: "in my mind",
                    hint:
                        "Used with ‘جَاي عَلَى بَالِي’ = I feel like / it’s on my mind.",
                    exampleAr: "جَاي عَلَى بَالِي أَغَيِّر جَوّ شْوَيّ.",
                    exampleEn: "I feel like changing the atmosphere a bit.",
                },

                // ===== SUPPORT & EMPATHY =====
                {
                    id: "ma_tkhafi",
                    ar: "مَا تِخَافِي / مَا تِخَاف",
                    en: "don’t be afraid / don’t worry",
                    hint:
                        "Masc: مَا تِخَاف، fem: مَا تِخَافِي. Emotional support.",
                    exampleAr: "مَا تِخَافِي، كِلّ إِشِي بِيُزْبُط شْوَيّ شْوَيّ.",
                    exampleEn: "Don’t worry, everything will work out step by step.",
                },
                {
                    id: "wala_yhemmak_2",
                    ar: "وَلَا يِهِمَّك",
                    en: "don’t let it worry you",
                    hint:
                        "Masc: وَلَا يِهِمَّك، fem: وَلَا يِهِمِّك. Very common comforting phrase.",
                    exampleAr: "آسِف عَلَى الغَلَط. ـ وَلَا يِهِمَّك، صَار خَيْر.",
                    exampleEn: "Sorry about the mistake. — Don’t worry, it’s okay now.",
                },
                {
                    id: "hadri_nefsek",
                    ar: "دِير(ي) بَالَك عَلَى حَالَك",
                    en: "take care of yourself",
                    hint:
                        "Masc: دِير بَالَك عَلَى حَالَك، fem: دِيرِي بَالِك عَلَى حَالِك.",
                    exampleAr: "الدِّرَاسَة مُهِمَّة بَسّ كَمَان دِيرِي بَالِك عَلَى حَالِك.",
                    exampleEn: "Study is important but also take care of yourself.",
                },
                {
                    id: "taba3i3i",
                    ar: "طَبِيعِي",
                    en: "normal / natural",
                    hint:
                        "Masc: طَبِيعِي، fem: طَبِيعِيَّة. For validating feelings.",
                    exampleAr: "طَبِيعِي تِكُونِي مُتَوَتِّرَة قَبْل الاِمْتِحَان.",
                    exampleEn: "It’s normal to feel nervous before the exam.",
                },
            ],

            extra: [
                {
                    id: "mankasar_khater",
                    ar: "مِنْكَسِر خَاطِرُه",
                    en: "heartbroken / deeply sad",
                    hint:
                        "Emotional idiom: literally ‘his heart/feeling is broken’.",
                    exampleAr: "بَعْد الخَبَر مَبَيِّن عَلِيه مِنْكَسِر خَاطِرُه.",
                    exampleEn: "After the news he looks heartbroken.",
                },
                {
                    id: "mabsoot_3ala_elnahaieh",
                    ar: "مَبْسُوط عَلَى الآخِر",
                    en: "super happy",
                    hint:
                        "Stronger than just مَبْسُوط.",
                    exampleAr: "نَجَحْت فِي كِلّ المَوَادّ وَمَبْسُوط عَلَى الآخِر.",
                    exampleEn: "I passed all my subjects and I’m super happy.",
                },
                {
                    id: "ma_baddi_a7ki",
                    ar: "مَا بَدّي أَحْكِي عَن هَالمَوْضُوع",
                    en: "I don’t want to talk about this topic",
                    hint:
                        "Useful boundary phrase when not ready to talk.",
                    exampleAr: "مَعْلِيش، هَلَّق مَا بَدّي أَحْكِي عَن هَالمَوْضُوع.",
                    exampleEn: "Sorry, right now I don’t want to talk about this topic.",
                },
                {
                    id: "shway_shway",
                    ar: "شْوَيّ شْوَيّ",
                    en: "slowly / step by step",
                    hint:
                        "Common calming phrase: take it easy, step by step.",
                    exampleAr: "خُدِيه شْوَيّ شْوَيّ، مَا فِي دَاعِي لِلعَجَلَة.",
                    exampleEn: "Take it step by step, there’s no need to rush.",
                },
            ],
        },

        // ====================================
        // DIALOGUE – LONG & NATURAL
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Two friends talking about exam stress
                {
                    speaker: "Narrator",
                    ar: "بَعْد المَحَاضَرَة، رُوبَا وَصَاحْبْتَهَا نُور قَاعِدِين بِالكَافِيه وَبِيِحْكُوا عَن الاِمْتِحَانَات وَالمَزَاج.",
                    en: "After the lecture, Roba and her friend Noor are sitting in a café, talking about exams and mood.",
                },
                {
                    speaker: "Roba",
                    ar: "صِرَاحَةً نُور، هَالأُسْبُوع مَزَاجِي مِش مْنِيح.",
                    en: "Honestly, Noor, this week my mood is not good.",
                },
                {
                    speaker: "Noor",
                    ar: "لِيش؟ شُو صَايِر مَعِك؟",
                    en: "Why? What’s happening with you?",
                },
                {
                    speaker: "Roba",
                    ar: "حَاسِّة حَالِي مَضْغُوطَة كْتِير. عِنْدِي مَشَارِيع، وَاجِبَات، وَكَم اِمْتِحَان، وَطَاقْتِي قَلِيلَة.",
                    en: "I feel really under pressure. I have projects, homework, and several exams, and my energy is low.",
                },
                {
                    speaker: "Noor",
                    ar: "طَبِيعِي، هَالفَتْرَة كْتِير صَعْبَة. كَمَّان أَنَا مُتَوَتِّرَة قَبْل الاِمْتِحَان.",
                    en: "That’s normal, this period is very hard. I’m also nervous before the exam.",
                },
                {
                    speaker: "Roba",
                    ar: "أَحْيَانًا بَحِسّ إِنِّي زَهْقَانَة مِن الدِّرَاسَة، بَسّ مَا فِيش خِيَار، لَازِم نِكْمِل.",
                    en: "Sometimes I feel fed up with studying, but there’s no choice, we have to continue.",
                },
                {
                    speaker: "Noor",
                    ar: "شُوفِي، دِيرِي بَالِك عَلَى حَالِك. خُدِي نَفَس عَمِيق، استِرِيحِي سَاعَة، وَبَعْدِين كَمِّلِي شْوَيّ شْوَيّ.",
                    en: "Look, take care of yourself. Take a deep breath, rest for an hour, then continue little by little.",
                },
                {
                    speaker: "Roba",
                    ar: "مَعِك حَقّ. بَحِسّ إِنِّي بِحَاجَة لاسْتِرَاحَة يَوم بَدُون دِّرَاسَة.",
                    en: "You’re right. I feel I need a day of rest without studying.",
                },
                {
                    speaker: "Noor",
                    ar: "وَلَا يِهِمِّك، بِنْحَاوِل نِتْعَامَل مَع الضَّغْط سَوَى. إِذَا حَاسَّة حَالِك مْضَايْقَة، اِتَّصِلِي فِيه تِلْفُون.",
                    en: "Don’t worry, we’ll try to deal with the pressure together. If you’re feeling down, call me.",
                },
                {
                    speaker: "Roba",
                    ar: "الله يْخَلِّيك، عَنْجَد مَشْكُورَة عَلَى دَعْمِك.",
                    en: "May God keep you, I’m really grateful for your support.",
                },

                // Scene 2 – Student talking to teacher about motivation
                {
                    speaker: "Narrator",
                    ar: "بَعْد الدَّرْس، رُوبَا قَعَدَت شْوَيّ مَع المُدَرِّس تِحْكِي عَن المَعْنَوِيَّات وَالحَمَاس.",
                    en: "After class, Roba sat a bit with the teacher to talk about motivation and morale.",
                },
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، شْكِلِك تَعْبَانَة هَالفَتْرَة. كِيف أَحْوَالِك؟",
                    en: "Roba, it looks like you’re tired these days. How are you doing?",
                },
                {
                    speaker: "Roba",
                    ar: "بِصَرَاحَة، بَحِسّ إِنِّي مِش مِتْحَمِّسَة زَيّ الأَوَّل. المَوَادّ كْتِيرَة، وَأَحْيَانًا بَحِسّ حَالِي ضَايِعَة.",
                    en: "Honestly, I feel I’m not as excited as before. There are many subjects, and sometimes I feel lost.",
                },
                {
                    speaker: "Teacher",
                    ar: "طَبِيعِي تِحِسِّي هِيك. المَهَمّ مَا تِتْرُكِي كُلّ إِشِي. شُو الأَكْثَر شِي مَضْغُوطِة فِيه هَلَّق؟",
                    en: "It’s normal to feel like that. What’s important is that you don’t drop everything. What is the area where you feel the most pressure now?",
                },
                {
                    speaker: "Roba",
                    ar: "مَضْغُوطَة مِن المَشْرُوع الكْبِير وَالاِمْتِحَان نَفْس الأُسْبُوع.",
                    en: "I’m under pressure from the big project and the exam in the same week.",
                },
                {
                    speaker: "Teacher",
                    ar: "طَيِّب، شُوفِي. مُمْكِن نِقَسِّم الشُّغُل تَدْرِيجِيًّا. اليَوم شْوَيّ، بُكْرَا شْوَيّ. مَا بِنِدْفَع كُلّ إِشِي مَرَّة وَاحْدَة.",
                    en: "Okay, look. We can divide the work gradually. A bit today, a bit tomorrow. We don’t push everything at once.",
                },
                {
                    speaker: "Roba",
                    ar: "هَيْك بَحِسّ إِنِّي أَقْدَر أَسَيْطِر عَلَى التَّعَب.",
                    en: "That way I feel I can control the tiredness.",
                },
                {
                    speaker: "Teacher",
                    ar: "بَسْ أَهَمّ شِي دِيرِي بَالِك عَلَى حَالِك. نَوْم، أَكْل، شْوَيّة رِيَاضَة، هَادَا كُلُّه بِيُسَاعِد المَزَاج.",
                    en: "But the most important thing is to take care of yourself. Sleep, food, a bit of exercise, all of that helps the mood.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا عَلَى الكَلَام، حَسِّيت حَالِي أَهْدَى.",
                    en: "Thanks for what you said, I feel calmer.",
                },

                // Scene 3 – Online chat about mood and boundaries
                {
                    speaker: "Narrator",
                    ar: "بِاللَّيْل، لِين بَعَثِت رِسَالَة لِرُوبَا تِسْأَل عَنْ مَزَاجْهَا.",
                    en: "At night, Lynn sent a message to Roba asking about her mood.",
                },
                {
                    speaker: "Lynn",
                    ar: "مَسَا الخِير رُوبَا، شُو أَخْبَارِك؟ كِيف مَزَاجِك اليَوْم؟",
                    en: "Good evening Roba, how are you? How’s your mood today?",
                },
                {
                    speaker: "Roba",
                    ar: "مَسَا النُّور. اليَوْم مَزَاجِي مِش كْتِير مْنِيح، زَعْلَانَة شْوَيّ مِن خَبَر سِمِعْتُه.",
                    en: "Good evening. Today my mood is not so good, I’m a bit upset about some news I heard.",
                },
                {
                    speaker: "Lynn",
                    ar: "آسْفَة تِسْمَعِي هِيك. إِذَا حَابَّة تِحْكِي، أَنَا مَوْجُودَة.",
                    en: "I’m sorry to hear that. If you’d like to talk, I’m here.",
                },
                {
                    speaker: "Roba",
                    ar: "مَشْكُورَة كْتِير. مَعْلِيش، هَلَّق مَا بَدّي أَحْكِي عَن هَالمَوْضُوع، بَسّ بَحِبّ أِحْسِ إِنِّي مِش وَحْدِي.",
                    en: "Thanks a lot. Sorry, right now I don’t want to talk about this topic, but I like to feel that I’m not alone.",
                },
                {
                    speaker: "Lynn",
                    ar: "طَبِيعِي، مَا تِتْغَصَّبِي تِحْكِي. خُدِيه شْوَيّ شْوَيّ، وَمْتَى مَا تِكُونِي جَاهْزَة، بَنِسْمَع حَكِيك.",
                    en: "That’s normal, don’t force yourself to talk. Take it step by step, and whenever you’re ready, we’ll listen to you.",
                },
                {
                    speaker: "Roba",
                    ar: "الله يْخَلِّيك. كِفَايَة إِنُّه حَدَا سَأَل عَنِّي.",
                    en: "May God keep you. It’s enough that someone asked about me.",
                },
                {
                    speaker: "Lynn",
                    ar: "دِيرِي بَالِك عَلَى حَالِك اليَلِّة، حَاوِلِي تِرْتَاحِي شْوَيّ. بَنِحْكِي بُكْرَا.",
                    en: "Take care of yourself tonight, try to rest a bit. We’ll talk tomorrow.",
                },
                {
                    speaker: "Roba",
                    ar: "إنْ شَاء الله. مَع السَّلَامَة.",
                    en: "God willing. Goodbye.",
                },
            ],
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "ba7ess_pattern",
                title: "Using «بَحِسّ» + adjective / clause",
                description:
                    "The verb «بَحِسّ» means ‘I feel’. You can use it with an adjective or with «إِنِّي …»:\n\n" +
                    "• بَحِسّ تَعْبَان. = I feel tired. (masc)\n" +
                    "• بَحِسّ تَعْبَانَة. = I feel tired. (fem)\n" +
                    "• بَحِسّ مِتْحَمِّسَة لِلهَوَايِة الجَّدِيدَة. = I feel excited for the new hobby.\n\n" +
                    "With «إِنِّي …» (that I …):\n" +
                    "• بَحِسّ إِنِّي مَضْغُوطَة. = I feel that I’m under pressure.\n" +
                    "• بَحِسّ إِنِّي مِش مُسْتَعِدّ. = I feel that I’m not ready.",
            },
            {
                id: "mood_positive_negative",
                title: "Positive vs. negative mood: مَزَاجِي مْنِيح / مَزَاجِي مِش مْنِيح",
                description:
                    "To talk about mood you can use the chunk «مَزَاجِي …»:\n\n" +
                    "• مَزَاجِي مْنِيح اليَوْم. = My mood is good today.\n" +
                    "• مَزَاجِي مِش مْنِيح هَالأُسْبُوع. = My mood is not good this week.\n\n" +
                    "You can add a reason with «لِأَنِّي …»:\n" +
                    "• مَزَاجِي مِش مْنِيح لِأَنِّي تَعْبَان وَمَضْغُوط.",
            },
            {
                id: "ma_eli_maal_chunk",
                title: "The chunk «مَا إِلِي مَال» (I’m not in the mood)",
                description:
                    "«مَا إِلِي مَال» literally means ‘I have no energy / no will’ and is used a lot:\n\n" +
                    "• اليَوْم مَا إِلِي مَال أَطْلَع. = Today I’m not in the mood to go out.\n" +
                    "• مَا إِلِي مَال أُحْكِي عَن هَالمَوْضُوع هَلَّق. = I’m not in the mood to talk about this topic now.\n\n" +
                    "It’s softer than a direct ‘no’, and explains your emotional state.",
            },
            {
                id: "normalizing_tabi3i",
                title: "Normalizing feelings with «طَبِيعِي»",
                description:
                    "To support someone, you can say that their feeling is ‘normal’:\n\n" +
                    "• طَبِيعِي تِكُون مُتَوَتِّر قَبْل الاِمْتِحَان. (masc)\n" +
                    "• طَبِيعِي تِكُونِي تَعْبَانَة بَعْد الأُسْبُوع. (fem)\n\n" +
                    "This shows empathy and reduces shame about emotions.",
            },
            {
                id: "soft_support_chunks",
                title: "Soft support chunks: مَا تِخَافِي، وَلَا يِهِمَّك، دِيرِي بَالِك",
                description:
                    "Very common supportive phrases:\n\n" +
                    "• مَا تِخَاف / مَا تِخَافِي. = Don’t be afraid / don’t worry.\n" +
                    "• وَلَا يِهِمَّك / وَلَا يِهِمِّك. = Don’t let it worry you.\n" +
                    "• دِير(ي) بَالَك عَلَى حَالَك. = Take care of yourself.\n\n" +
                    "Memorize them as full chunks to sound warm and natural.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "feel_q1",
                    questionAr: "«مَضْغُوطَة» مَعْنَاهَا أَقْرَب لِـ:",
                    optionsEn: [
                        "very happy",
                        "under pressure / stressed",
                        "hungry",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "feel_q2",
                    questionAr: "أَيّ كَلِمَة أَكْثَر شِي تِسْتَعْمِلْهَا لِـ ‘bored / fed up’؟",
                    optionsEn: [
                        "مَبْسُوط",
                        "زَهْقَان",
                        "مِتْحَمِّس",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "feel_q3",
                    questionAr: "«مَزَاجِي مِش مْنِيح» مَعْنَاهَا:",
                    optionsEn: [
                        "my mood is not good",
                        "I’m very hungry",
                        "I’m late",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "feel_q4",
                    questionAr: "أَيّ عِبَارَة دَاعِمَة أَكْثَر لِصَدِيق تَعْبَان؟",
                    optionsEn: [
                        "مَا إِلِي مَال.",
                        "طَبِيعِي تِحِسّ هِيك، مَا تِخَاف.",
                        "مَا بَدّي أَحْكِي.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "feel_q5",
                    questionAr: "«بَحِسّ إِنِّي مِش مُسْتَعِدّ» تِسْتَعْمِلْهَا لَمَّا:",
                    optionsEn: [
                        "you are very excited",
                        "you want to sleep",
                        "you don’t feel ready (emotionally/practically)",
                    ],
                    correctIndex: 2,
                },
            ],

            rolePlays: [
                "Role-play 1: Two friends after a hard week. Student A asks about mood using: كِيف مَزَاجِك؟، شُو صَايِر مَعِك؟. Student B answers using at least 3 adjectives (تَعْبَان، مَضْغُوط، زَهْقَان…) and 1 chunk: مَا إِلِي مَال / طَاقْتِي قَلِيلَة.",
                "Role-play 2: Student and teacher. The student explains they feel tired and not motivated. The teacher uses supportive chunks: طَبِيعِي، مَا تِخَافِي، وَلَا يِهِمَّك، شْوَيّ شْوَيّ، دِيرِي بَالِك عَلَى حَالِك.",
                "Role-play 3: Short online chat. One person doesn’t want to talk about the problem now and uses: مَا بَدّي أَحْكِي عَن هَالمَوْضُوع هَلَّق. The other respects the boundary and answers with empathy and support.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Record a 60–90 second audio in Palestinian Arabic about your feelings this week:\n" +
                "1. Describe 2–3 different feelings you had (for example: happy, tired, stressed, bored) and on which days you felt them.\n" +
                "2. Use at least 3 chunks from the unit: بَحِسّ إِنِّي…, مَزَاجِي مْنِيح / مِش مْنِيح، مَا إِلِي مَال، طَاقْتِي قَلِيلَة، طَبِيعِي.…\n" +
                "3. Say one small self-care plan (for example: taking a break, sleeping earlier, walking, talking to a friend).\n" +
                "4. Try to finish with a positive note, like ‘إن شاء الله الأُسْبُوع الجَّاي بَحِسّ أَحْسَن’.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Start in English: ask the student to rate their mood from 1 to 10 today, then give them 3 words in Arabic: مَبْسُوط، تَعْبَان، مَضْغُوط.",
                "Write a simple ‘feelings thermometer’ (from very bad to very good) and map Arabic words onto it together.",
            ],
            vocabularySteps: [
                "Teach pairs of opposites or contrasts: مَبْسُوط × زَعْلَان، مِرْتَاح × مَضْغُوط، مِتْحَمِّس × زَهْقَان.",
                "Drill mini-sentences in first person: اليَوْم أَحِسّ…, أَحْيَانًا بَحِسّ…, نَادِرًا بَحِسّ….",
                "Highlight that masc/fem changes are mostly at the end: ـَان / ـَانَة، ـوط / ـوطَة، إلخ.",
            ],
            dialogueSteps: [
                "Act Scene 1 slowly, pausing to ask comprehension questions in English or Arabic.",
                "Ask the student to change details in the dialogues: different sources of pressure, different ways to relax.",
            ],
            practiceTips: [
                "Allow the student to use English inside one or two sentences while keeping the frame in Arabic (for example: بَحِسّ إِنِّي ‘stuck’, بَحِسّ إِنِّي ‘overwhelmed’).",
                "Focus on giving them safe chunks to talk honestly about feelings, not on perfect grammar.",
            ],
            wrapup: [
                "End the lesson by asking: «اليَوْم، بَعْد الدَّرْس، مَزَاجِك أَحْسَن أَو أَسْوَأ؟ لِيش؟» and let them answer freely.",
                "Note the feelings words they use comfortably, and pick 1–2 new ones to recycle at the start of the next lesson.",
            ],
            myNotes: "",
        },
    },


};

// actual lessons object (will be filled from defaults + localStorage)
const lessons = {};

// ========================= STATE =========================
const appState = {
    students: [],
    currentStudentId: null,
    currentLessonId: LESSON_ID_GREETING,
    teacherMode: false,
    currentTab: "overview",
    lessonFontSize: 1,
    vocabCoreVisited: {},
};
let backupSettings = {
    frequency: "off",      // "off" | "daily" | "2d" | "weekly"
    lastBackupAt: null,    // ISO string
};

const exportContext = {
    lessonId: null,
    studentName: "",
    source: "", // "lesson-view" أو "teacher-dashboard"
};
let customUnits = {
    Beginner: [],
    "Pre-Intermediate": [],
    Intermediate: [],
};
// =============== SECONDARY AUTH APP (لإنشاء الطلاب فقط) ===============
let secondaryAuth = null;

function getSecondaryAuth() {
    if (secondaryAuth) return secondaryAuth;

    if (typeof firebase === "undefined" || typeof firebaseConfig === "undefined") {
        console.warn("Firebase or firebaseConfig not available for secondary app.");
        return null;
    }

    // نحاول نلقى app باسم "teacherAdmin" لو موجود
    let secondaryApp = firebase.apps.find((a) => a.name === "teacherAdmin");
    if (!secondaryApp) {
        secondaryApp = firebase.initializeApp(firebaseConfig, "teacherAdmin");
    }

    secondaryAuth = secondaryApp.auth();
    return secondaryAuth;
}

// ================= AUTH UI =================
function updateAuthUI() {
    const authStatus = document.getElementById("authStatus");
    const btnLogin = document.getElementById("btnLogin");
    const btnLogout = document.getElementById("btnLogout");

    const navTeacher = document.querySelector(
        '.top-nav__link[data-nav="teacher-dashboard-screen"]'
    );
    const navProfiles = document.querySelector(
        '.top-nav__link[data-nav="students-screen"]'
    );

    if (!appState.currentUser) {
        if (authStatus) authStatus.textContent = "Not signed in";
        if (btnLogin) btnLogin.style.display = "inline-flex";
        if (btnLogout) btnLogout.style.display = "none";

        // أي حد مش مسجّل → ما يشوف Teacher Dashboard
        if (navTeacher) navTeacher.style.display = "none";
        // لو حابة تخلي Profiles ظاهر قبل تسجيل الدخول، خليه هيك:
        if (navProfiles) navProfiles.style.display = "inline-flex";
        return;
    }

    const { email, role } = appState.currentUser;

    if (authStatus) authStatus.textContent = `${role.toUpperCase()} – ${email}`;
    if (btnLogin) btnLogin.style.display = "none";
    if (btnLogout) btnLogout.style.display = "inline-flex";

    if (role === "teacher") {
        if (navTeacher) navTeacher.style.display = "inline-flex";
        if (navProfiles) navProfiles.style.display = "inline-flex";
    } else {
        // student
        if (navTeacher) navTeacher.style.display = "none";
        // الطالب ما يشوف صفحة البروفايلات
        if (navProfiles) navProfiles.style.display = "none";
    }
}

// =============== AUTH STATE LISTENER =================
auth.onAuthStateChanged(async (user) => {
    if (!user) {
        appState.currentUser = null;
        updateAuthUI();
        // رجّعيه للصفحة الرئيسية
        showScreen("home-screen");
        return;
    }

    try {
        const snap = await db.collection("users").doc(user.uid).get();
        const data = snap.data() || {};

        // نحاول نقرأ الدور من Firestore، ولو مش موجود من localStorage
        let savedRole = null;
        try {
            savedRole = localStorage.getItem(LS_USER_ROLE_KEY);
        } catch (e) {
            console.warn("Could not read role from localStorage", e);
        }

        const role = data.role || savedRole || "student";

        appState.currentUser = {
            uid: user.uid,
            email: user.email,
            role,
        };

        // نحدّث الـ localStorage بالدور النهائي
        try {
            localStorage.setItem(LS_USER_ROLE_KEY, role);
        } catch (e) {
            console.warn("Could not save role to localStorage", e);
        }

        updateAuthUI();

        if (role === "teacher") {
            await syncTeacherStudentsFromCloud?.();
            renderStudents();
            renderTeacherLessonList();
            goToTeacherDashboard();
        } else {
            appState.students = [
                {
                    id: user.uid,
                    name: user.email,
                    level: "Beginner",
                    goals: [],
                    progress: {},
                    homeworkNotes: {},
                },
            ];
            appState.currentStudentId = user.uid;
            goToLevels();
        }
    } catch (err) {
        console.error("auth.onAuthStateChanged error:", err);
    }
});

// =======================
// Translation Sentence Generator (from lesson vocabulary)
// =======================

function normalizeText(s) {
    return (s || "").toString().trim();
}

function pickRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function uniqBy(arr, keyFn) {
    const seen = new Set();
    const out = [];
    for (const x of arr) {
        const k = keyFn(x);
        if (!k || seen.has(k)) continue;
        seen.add(k);
        out.push(x);
    }
    return out;
}

// Try to detect nouns / greetings / misc from vocabulary (very lightweight)
function bucketVocabulary(vocabItems) {
    const items = (Array.isArray(vocabItems) ? vocabItems : [])
        .map((it) => ({
            ...it,
            ar: normalizeText(it.ar),
            en: normalizeText(it.en),
            hint: normalizeText(it.hint),
            exampleAr: normalizeText(it.exampleAr),
            exampleEn: normalizeText(it.exampleEn),
        }))
        .filter((it) => it.ar || it.en);

    // greetings / common phrases: heuristics by english keywords OR arabic starts
    const greetingKeywords = [
        "hello",
        "hi",
        "good morning",
        "good evening",
        "goodbye",
        "welcome",
        "nice to meet",
        "please",
        "thanks",
        "thank you",
    ];

    const greetings = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        return (
            greetingKeywords.some((k) => en.includes(k)) ||
            ar.includes("مرحبا") ||
            ar.includes("أهلا") ||
            ar.includes("صباح") ||
            ar.includes("مساء") ||
            ar.includes("مع السلامة") ||
            ar.includes("تشرف")
        );
    });

    // nouns: heuristic - english contains "my" forms or common noun list in hint
    // (Not perfect; we also just keep "others" as nouns candidates.)
    const nounCandidates = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        // If it looks like a noun (contains "/" or is a single word) we allow it
        const enWords = en.split(/\s+/).filter(Boolean);
        return enWords.length <= 3 || ar.length <= 12;
    });

    // verbs: if forms.present has content OR english starts with "to "
    const verbs = items.filter((it) => {
        const en = it.en.toLowerCase();
        const hasForms =
            it.forms &&
            ((it.forms.present && Object.keys(it.forms.present).length > 0) ||
                (it.forms.past && Object.keys(it.forms.past).length > 0) ||
                (it.forms.future && Object.keys(it.forms.future).length > 0));
        return hasForms || en.startsWith("to ");
    });

    const others = items;

    return {
        all: items,
        greetings: uniqBy(greetings, (x) => x.id || x.ar || x.en),
        nouns: uniqBy(nounCandidates, (x) => x.id || x.ar || x.en),
        verbs: uniqBy(verbs, (x) => x.id || x.ar || x.en),
        others: uniqBy(others, (x) => x.id || x.ar || x.en),
    };
}

/**
 * Generate translation sentences (not word=word) from lesson vocabulary
 * @param {object} lesson - the lesson object (has vocabulary)
 * @param {number} count - how many translation items to generate
 * @returns {Array} translation items [{id,type,textAr,textEn}]
 */
function generateTranslationFromVocab(lesson, count = 10) {
    const vocabCore = lesson?.vocabulary?.core || [];
    const vocabExtra = lesson?.vocabulary?.extra || [];
    const vocab = bucketVocabulary([...vocabCore, ...vocabExtra]);

    const results = [];

    // Some reusable fillers to make sentences natural
    const names = ["سارة", "أحمد", "لينا", "كريم", "نابل", "هبة"];
    const timesAr = ["اليوم", "هلّق", "بكرا"];
    const timesEn = ["today", "now", "tomorrow"];

    function addPair(en, ar) {
        const textEn = normalizeText(en);
        const textAr = normalizeText(ar);
        if (!textEn || !textAr) return;

        // avoid duplicates
        const key = (textEn + "||" + textAr).toLowerCase();
        if (results.some((r) => (r.textEn + "||" + r.textAr).toLowerCase() === key)) return;

        // alternate directions roughly half/half
        const type = results.length % 2 === 0 ? "enToAr" : "arToEn";

        results.push({
            id: `auto_t_${results.length + 1}`,
            type,
            textEn,
            textAr,
        });
    }

    // ---------- Template 1: Greeting + name ----------
    // "Hello, I'm X." / "مرحبا، أنا X."
    if (vocab.greetings.length) {
        const g = pickRandom(vocab.greetings);
        const helloAr = g?.ar || "مرحبا";
        const helloEn = g?.en || "Hello";
        const name = pickRandom(names);

        addPair(`${helloEn}! I'm ${name}.`, `${helloAr}! أنا ${name}.`);
    } else {
        const name = pickRandom(names);
        addPair(`Hello! I'm ${name}.`, `مرحبا! أنا ${name}.`);
    }

    // ---------- Template 2: How are you? + I'm fine ----------
    // "How are you today? I'm fine." / "كيفك اليوم؟ أنا منيح/منيحة."
    // If you have "كيفك" or "منيح" in vocab, use them, else fallback
    const howAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("كيف")))?.ar || "كيفك";
    const howEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("how are")))?.en ||
        "How are you";
    const fineAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("منيح") || x.ar.includes("منيحة")))
            ?.ar || "منيح";
    const fineEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("fine")))
            ?.en || "I’m fine";

    const tA = pickRandom(timesAr);
    const tE = timesEn[timesAr.indexOf(tA)] || "today";
    addPair(`${howEn} ${tE}? ${fineEn}.`, `${howAr} ${tA}؟ أنا ${fineAr}.`);

    // ---------- Template 3: Nice to meet you ----------
    // "Nice to meet you, X." / "تشرفنا يا X."
    const meetAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("تشرف")))?.ar || "تشرفنا";
    const meetEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("nice to meet")))
            ?.en || "Nice to meet you";
    const name2 = pickRandom(names);
    addPair(`${meetEn}, ${name2}.`, `${meetAr} يا ${name2}.`);

    // ---------- Template 4: Want + noun (biddi + noun) ----------
    // We'll pick a noun candidate; if none, use "قهوة" (coffee)
    const noun = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
    // Natural sentence:
    // "I want a coffee, please." / "بدي قهوة، لو سمحت."
    addPair(
        `I want ${noun.en || "coffee"}, please.`,
        `بدي ${noun.ar || "قهوة"}، لو سمحت.`
    );

    // ---------- Template 5: Do you have + noun? ----------
    // "Do you have ___?" / "عندك ___؟"
    const noun2 = pickRandom(shuffle(vocab.nouns)) || { ar: "مي", en: "water" };
    addPair(`Do you have ${noun2.en || "water"}?`, `عندك ${noun2.ar || "مي"}؟`);

    // ---------- Template 6: My family / my work / my study style ----------
    // If you have family nouns, use them, otherwise use generic
    const familyWord =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family") || x.ar.includes("عيلة")))
            ?.ar || "عيلتي";
    const familyEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family")))
            ?.en || "My family";

    addPair(`${familyEn} is big.`, `${familyWord} كبيرة.`);

    // ---------- Template 7: Goodbye + see you tomorrow ----------
    const byeAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("مع السلامة") || x.ar.includes("الله معك")))
            ?.ar || "مع السلامة";
    const byeEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("goodbye")))
            ?.en || "Goodbye";
    addPair(`${byeEn}, see you tomorrow.`, `${byeAr}، بشوفك بكرا.`);

    // ---------- Bonus: Use existing example sentences from vocab (if present) ----------
    // These are already full sentences and strongly "from the lesson"
    // We add a few of them if they exist, to reach target count.
    const examplePairs = vocab.all
        .filter((it) => it.exampleAr && it.exampleEn)
        .map((it) => ({ en: it.exampleEn, ar: it.exampleAr }));

    for (const ex of shuffle(examplePairs)) {
        if (results.length >= count) break;
        addPair(ex.en, ex.ar);
    }

    // If still not enough, generate variations with different nouns/times
    while (results.length < count) {
        const n = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
        const ta = pickRandom(timesAr);
        const te = timesEn[timesAr.indexOf(ta)] || "today";
        addPair(
            `I want ${n.en || "coffee"} ${te}.`,
            `بدي ${n.ar || "قهوة"} ${ta}.`
        );
    }

    return results.slice(0, count);
}

/**
 * Ensure lesson has translation items (auto-generate if empty)
 * Call this when opening a lesson or rendering the Translation tab.
 */
function ensureLessonTranslation(lesson, count = 10) {
    if (!lesson.practice) lesson.practice = {};
    if (!Array.isArray(lesson.practice.translation) || lesson.practice.translation.length === 0) {
        lesson.practice.translation = generateTranslationFromVocab(lesson, count);
    }
}
function safeArr(x) { return Array.isArray(x) ? x : []; }
function txt(x) { return (x ?? "").toString().trim(); }
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pick(arr) { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null; }
function uniqPairs(items) {
    const seen = new Set();
    return items.filter(it => {
        const key = (txt(it.textEn) + "||" + txt(it.textAr)).toLowerCase();
        if (!txt(it.textEn) || !txt(it.textAr)) return false;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}


function generateTranslationItemsFromLesson(lesson, minCount = 7) {
    const items = [];

    const vocab = lesson?.vocabulary || {};
    const core = safeArr(vocab.core);
    const extra = safeArr(vocab.extra);
    const allVocab = [...core, ...extra];

    // 1) أخذ أمثلة من vocabulary (أفضل مصدر لأنه جمل جاهزة من المنهج)
    for (const v of allVocab) {
        const ar = txt(v.exampleAr);
        const en = txt(v.exampleEn);
        if (ar && en) {
            items.push({ id: `ex_${txt(v.id) || Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 2) أخذ جمل من الحوار (كل سطر pair مع ترجمته)
    const lines = safeArr(lesson?.dialogue?.lines);
    for (const line of lines) {
        const ar = txt(line.ar);
        const en = txt(line.en);
        if (ar && en) {
            items.push({ id: `dlg_${Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 3) إذا لسه أقل من المطلوب: نولّد جمل بالقوالب
    const nouns = allVocab
        .map(v => ({ ar: txt(v.ar), en: txt(v.en) }))
        .filter(v => v.ar || v.en);

    const nameAr = ["سارة", "أحمد", "لينا", "كريم", "هبة", "نابل"];
    const nameEn = ["Sara", "Ahmad", "Lina", "Karim", "Hiba", "Nabil"];

    const getNoun = () => pick(nouns) || { ar: "قهوة", en: "coffee" };

    const templates = [
        () => {
            const i = Math.floor(Math.random() * nameAr.length);
            return { en: `Hello! I'm ${nameEn[i]}.`, ar: `مرحبا! أنا ${nameAr[i]}.` };
        },
        () => {
            return { en: `How are you today?`, ar: `كيفك اليوم؟` };
        },
        () => {
            const n = getNoun();
            return { en: `I want ${n.en || "coffee"}, please.`, ar: `بدي ${n.ar || "قهوة"}، لو سمحت.` };
        },
        () => {
            const n = getNoun();
            return { en: `Do you have ${n.en || "water"}?`, ar: `عندك ${n.ar || "مي"}؟` };
        },
        () => {
            const n = getNoun();
            return { en: `This is ${n.en || "it"}.`, ar: `هاد ${n.ar || "هاد"}.` };
        },
        () => {
            return { en: `Nice to meet you.`, ar: `تشرفنا.` };
        },
        () => {
            return { en: `Goodbye, see you tomorrow.`, ar: `مع السلامة، بشوفك بكرا.` };
        },
    ];

    let guard = 0;
    while (items.length < minCount && guard < 50) {
        const t = pick(templates);
        if (t) {
            const out = t();
            items.push({ id: `auto_${items.length + 1}`, textEn: out.en, textAr: out.ar });
        }
        guard++;
    }

    return uniqPairs(items).slice(0, Math.max(minCount, 7));
}


function ensureTranslationItems(lesson, minCount = 7) {
    if (!lesson.practice) lesson.practice = {};
    const list = safeArr(lesson.practice.translation);

    if (list.length > 0) return; // موجودة مسبقاً

    const generated = generateTranslationItemsFromLesson(lesson, minCount);

    // نحولها لصيغة القالب: type + textEn/textAr
    lesson.practice.translation = generated.map((it, idx) => ({
        id: it.id || `t_${idx + 1}`,
        type: idx % 2 === 0 ? "enToAr" : "arToEn",
        textEn: it.textEn,
        textAr: it.textAr,
    }));
}


// ========================= VOCAB MODAL STATE =========================
const vocabModalState = {
    list: [],       // array of items (core أو extra)
    index: 0,       // current index in list
    showExamples: true,// هل الأمثلة ظاهرة أو مخفية
    showAr: true,
    showEn: true,
    showArabeezy: true,
};
const translationState = {
    items: [],
    index: 0,
    hidePrompt: false,
    hideAnswer: false,
    shuffled: false,
};

// ========================= HELPERS =========================
// ========================= WHITEBOARD =========================
const whiteboardState = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    ctx: null,
    color: "#111827",
    size: 3,
};

function getWhiteboardKeyForCurrentLesson() {
    return LS_WHITEBOARD_PREFIX + (appState.currentLessonId || "no_lesson");
}

function saveWhiteboardToLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    try {
        const dataUrl = canvas.toDataURL("image/png");
        localStorage.setItem(getWhiteboardKeyForCurrentLesson(), dataUrl);
    } catch {
        // ignore
    }
}

function loadWhiteboardFromLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const dataUrl = localStorage.getItem(getWhiteboardKeyForCurrentLesson());
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!dataUrl) return;
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = dataUrl;
}

function initWhiteboardCanvas() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    whiteboardState.ctx = ctx;

    // إعدادات الرسم
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // تحميل أي رسم محفوظ
    loadWhiteboardFromLS();

    function getCanvasPos(evt) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (evt.touches && evt.touches.length > 0) {
            clientX = evt.touches[0].clientX;
            clientY = evt.touches[0].clientY;
        } else {
            clientX = evt.clientX;
            clientY = evt.clientY;
        }

        return {
            x: ((clientX - rect.left) / rect.width) * canvas.width,
            y: ((clientY - rect.top) / rect.height) * canvas.height,
        };
    }

    function startDrawing(evt) {
        evt.preventDefault();
        whiteboardState.isDrawing = true;
        const pos = getCanvasPos(evt);
        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function draw(evt) {
        if (!whiteboardState.isDrawing) return;
        evt.preventDefault();
        const pos = getCanvasPos(evt);
        ctx.strokeStyle = whiteboardState.color;
        ctx.lineWidth = whiteboardState.size;

        ctx.beginPath();
        ctx.moveTo(whiteboardState.lastX, whiteboardState.lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function stopDrawing(evt) {
        if (!whiteboardState.isDrawing) return;
        whiteboardState.isDrawing = false;
        saveWhiteboardToLS();
    }

    // Mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    // Touch events
    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);
}

// ========================= BACKUP SETTINGS =========================
function loadBackupSettings() {
    try {
        const raw = localStorage.getItem(LS_BACKUP_SETTINGS_KEY);
        if (!raw) {
            backupSettings = { frequency: "off", lastBackupAt: null };
            return;
        }
        const parsed = JSON.parse(raw);
        backupSettings = {
            frequency: parsed.frequency || "off",
            lastBackupAt: parsed.lastBackupAt || null,
        };
    } catch {
        backupSettings = { frequency: "off", lastBackupAt: null };
    }
}

function saveBackupSettings() {
    localStorage.setItem(LS_BACKUP_SETTINGS_KEY, JSON.stringify(backupSettings));
}

function backupFrequencyToDays(freq) {
    switch (freq) {
        case "daily":
            return 1;
        case "2d":
            return 2;
        case "weekly":
            return 7;
        default:
            return null; // off
    }
}

function checkBackupReminder() {
    const banner = document.getElementById("backupReminderBanner");
    const info = document.getElementById("backupLastInfo");
    if (!banner || !info) return;

    const daysLimit = backupFrequencyToDays(backupSettings.frequency);
    if (!daysLimit) {
        banner.classList.add("hidden");
        return;
    }

    if (!backupSettings.lastBackupAt) {
        // ما في ولا backup لسه
        banner.textContent =
            "You haven't created any backup yet. It's a good time to export your data now.";
        banner.classList.remove("hidden");
        info.textContent = "";
        return;
    }

    const last = new Date(backupSettings.lastBackupAt);
    const diffMs = Date.now() - last.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays >= daysLimit) {
        banner.textContent =
            `It has been about ${Math.round(diffDays)} day(s) since your last backup. ` +
            `Please export your data so you don't lose student progress.`;
        banner.classList.remove("hidden");
    } else {
        banner.classList.add("hidden");
    }

    info.textContent =
        "Last backup: " +
        last.toLocaleString() +
        "  |  Frequency: " +
        backupSettings.frequency;
}
// ========================= BACKUP EXPORT / IMPORT =========================
function buildBackupSnapshot() {
    return {
        version: 1,
        createdAt: new Date().toISOString(),
        students: appState.students || [],
        lessons: lessons || {},
        customUnits: customUnits || {},
        settings: {
            lessonFontSize: appState.lessonFontSize,
        },
    };
}

function downloadBackupFile(snapshot) {
    const json = JSON.stringify(snapshot, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    const date = new Date();
    const stamp =
        date.getFullYear().toString() +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getDate()).padStart(2, "0") +
        "_" +
        String(date.getHours()).padStart(2, "0") +
        String(date.getMinutes()).padStart(2, "0");

    a.href = url;
    a.download = `pal_arabic_backup_${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function handleExportBackup() {
    const snapshot = buildBackupSnapshot();
    downloadBackupFile(snapshot);

    // حدّث وقت آخر backup
    backupSettings.lastBackupAt = new Date().toISOString();
    saveBackupSettings();
    checkBackupReminder();
    alert("Backup exported successfully. Keep the JSON file in a safe place.");
}

function applyBackupSnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== "object") {
        alert("Invalid backup file.");
        return;
    }

    // students
    if (Array.isArray(snapshot.students)) {
        appState.students = snapshot.students;
        saveStudentsToLS();
    }

    // lessons (نمحي القديم ونحط الجديد)
    if (snapshot.lessons && typeof snapshot.lessons === "object") {
        // clear current lessons
        Object.keys(lessons).forEach((id) => {
            delete lessons[id];
        });

        // clear old lesson entries from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(LS_LESSON_PREFIX)) {
                localStorage.removeItem(key);
                i--; // لأن length تغير
            }
        }

        Object.keys(snapshot.lessons).forEach((id) => {
            lessons[id] = snapshot.lessons[id];
            saveLessonToLS(id);
        });
    }

    // custom units
    if (snapshot.customUnits && typeof snapshot.customUnits === "object") {
        customUnits = {
            Beginner: snapshot.customUnits.Beginner || [],
            "Pre-Intermediate": snapshot.customUnits["Pre-Intermediate"] || [],
            Intermediate: snapshot.customUnits.Intermediate || [],
        };
        saveCustomUnits();
    }

    // settings (زي حجم الخط)
    if (snapshot.settings) {
        if (typeof snapshot.settings.lessonFontSize === "number") {
            appState.lessonFontSize = snapshot.settings.lessonFontSize;
            applyFontSize();
            saveFontSize();
        }
    }

    // إعادة رسم الواجهات الرئيسية
    renderStudents();
    renderTeacherLessonList();
    if (getCurrentStudent()) {
        renderLevels();
    }

    alert("Backup imported successfully.");
}

function handleImportBackupFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = e.target.result;
            const snapshot = JSON.parse(json);
            if (
                !confirm(
                    "Importing this backup will replace current students, lessons and units.\nAre you sure?"
                )
            ) {
                return;
            }
            applyBackupSnapshot(snapshot);
        } catch (err) {
            console.error(err);
            alert("Could not read backup file.");
        }
    };
    reader.readAsText(file);
}

const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));
function openExportModal(source, lessonId, studentName = "") {
    exportContext.lessonId = lessonId;
    exportContext.studentName = studentName;
    exportContext.source = source;

    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.add("modal--open");
}

function closeExportModal() {
    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.remove("modal--open");
}

async function saveStudentsToCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;

    const batch = db.batch();
    const ref = db.collection("teacherStudents");

    // نفضي كل طلاب هذا المعلم ثم نرفع من جديد (بسيطة مبدئيًا)
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();
    snap.forEach((doc) => batch.delete(doc.ref));

    appState.students.forEach((s) => {
        const docRef = ref.doc();
        batch.set(docRef, {
            teacherId: appState.currentUser.uid,
            name: s.name,
            level: s.level,
            goals: s.goals || [],
            progress: s.progress || {},
            homeworkNotes: s.homeworkNotes || {},
        });
    });

    await batch.commit();
}

function saveStudentsToLS() {
    localStorage.setItem(LS_STUDENTS_KEY, JSON.stringify(appState.students));
    // 🔁 كمان نرفع للسحابة (لما يكون معلم مسجّل)
    saveStudentsToCloud().catch(console.error);
}

async function syncTeacherStudentsFromCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;

    const ref = db.collection("teacherStudents");
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();

    const loaded = [];
    snap.forEach((doc) => {
        const d = doc.data();
        loaded.push({
            id: doc.id, // أو خلي ID محلي منفصل
            name: d.name,
            level: d.level,
            goals: d.goals || [],
            progress: d.progress || {},
            homeworkNotes: d.homeworkNotes || {},
        });
    });

    appState.students = loaded;
    saveStudentsToLS(); // نخزن نسخة محلية
}

function loadStudentsFromLS() {
    try {
        const raw = localStorage.getItem(LS_STUDENTS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function ensureStudentProgress(student, lessonId) {
    if (!student.progress) student.progress = {};
    if (!student.progress[lessonId]) {
        student.progress[lessonId] = { ...BASE_PROGRESS_TEMPLATE };
    }
}

function getCurrentStudent() {
    return appState.students.find((s) => s.id === appState.currentStudentId) || null;
}

function getStudentProgress(student, lessonId) {
    ensureStudentProgress(student, lessonId);
    return student.progress[lessonId];
}

function setStudentProgressField(sectionKey, value) {
    const student = getCurrentStudent();
    if (!student) return;
    ensureStudentProgress(student, appState.currentLessonId);
    student.progress[appState.currentLessonId][sectionKey] = value;
    saveStudentsToLS();
    updateProgressBar();
    updateSectionStatusBadge(sectionKey);
}

// lessons save/load
function loadLessonDataFromLS() {
    // start from defaults
    Object.keys(defaultLessons).forEach((id) => {
        lessons[id] = JSON.parse(JSON.stringify(defaultLessons[id]));
    });

    // then override / add from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(LS_LESSON_PREFIX)) {
            const id = key.slice(LS_LESSON_PREFIX.length);
            try {
                const data = JSON.parse(localStorage.getItem(key));
                lessons[id] = data;
            } catch {
                /* ignore */
            }
        }
    }
}
function markVocabularyDone() {
    // هذي الدالة تعتمد إنو عندك setStudentProgressField موجودة
    // وتشتغل على الدرس والطالب الحاليين
    try {
        setStudentProgressField("vocabulary", true);
    } catch (e) {
        console.warn("Could not mark vocabulary as done:", e);
    }
}

function saveLessonToLS(lessonId) {
    localStorage.setItem(LS_LESSON_PREFIX + lessonId, JSON.stringify(lessons[lessonId]));
}

// custom units
function loadCustomUnits() {
    try {
        const raw = localStorage.getItem(LS_CUSTOM_UNITS_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            customUnits = {
                Beginner: parsed.Beginner || [],
                "Pre-Intermediate": parsed["Pre-Intermediate"] || [],
                Intermediate: parsed.Intermediate || [],
            };
        }
    } catch {
        /* ignore */
    }
}
function saveCustomUnits() {
    localStorage.setItem(LS_CUSTOM_UNITS_KEY, JSON.stringify(customUnits));
}

// font size
function loadFontSize() {
    const raw = localStorage.getItem(LS_FONT_SIZE_KEY);
    if (!raw) {
        appState.lessonFontSize = 1;
    } else {
        const n = parseFloat(raw);
        appState.lessonFontSize = isNaN(n) ? 1 : n;
    }
    applyFontSize();
}
function saveFontSize() {
    localStorage.setItem(LS_FONT_SIZE_KEY, String(appState.lessonFontSize));
}
function applyFontSize() {
    const v = Math.max(0.85, Math.min(1.4, appState.lessonFontSize));
    document.documentElement.style.setProperty("--lesson-font-size", v + "rem");
}

// ========================= NAVIGATION =========================
function showScreen(id) {
    $all(".screen").forEach((sec) =>
        sec.classList.toggle("screen--active", sec.id === id)
    );
}

function goToHome() {
    // ندخل وضع الصفحة الرئيسية فقط
    document.body.classList.add("home-only");

    // نخلي بس الهوم screen هي الظاهرة
    showScreen("home-screen");
}
function goToStudents() {
    // لو المستخدم طالب أو مش مسجل → ما إله دخل في صفحة البروفايلات
    if (!appState.currentUser || appState.currentUser.role === "student") {
        goToLevels();
        return;
    }
    document.body.classList.remove("home-only");
    showScreen("students-screen");
    renderStudents();
}

function goToLevels() {
    document.body.classList.remove("home-only");
    if (!getCurrentStudent()) {
        goToStudents();
        return;
    }
    showScreen("levels-screen");
    $("#currentStudentNameLevels").textContent = getCurrentStudent().name;
    renderLevels();
}
function goToLessonView(opts = {}) {
    const { teacherMode = null } = opts;
    if (!getCurrentStudent()) {
        goToStudents();
        return;
    }
    showScreen("lesson-screen");
    if (teacherMode !== null) {
        appState.teacherMode = teacherMode;
        $("#teacherModeToggle").checked = teacherMode;
    }
    updateTeacherTabsVisibility();
    updateLessonTopBar();
    updateProgressBar();
    setActiveTab(appState.currentTab || "overview");

    // حاول يحمّل whiteboard حق هذا الدرس لو اللوحة مفتوحة
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    if (whiteboardPanel && !whiteboardPanel.classList.contains("hidden")) {
        initWhiteboardCanvas();
    }
}

function buildLessonExportHtml(lesson, options) {
    const {
        includeVocab,
        includeDialogue,
        includeGrammar,
        includeHomework,
        includeTeacherNotes,
        version,
        studentName,
    } = options;

    const escapeHtml = (str) =>
        String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // ========== Vocabulary ==========
    let vocabRows = "";
    if (includeVocab && lesson.vocabulary) {
        const allVocab = [
            ...(lesson.vocabulary.core || []),
            ...(lesson.vocabulary.extra || []),
        ];
        allVocab.forEach((w) => {
            vocabRows += `
            <tr>
                <td class="ar">${escapeHtml(w.ar)}</td>
                <td class="en">${escapeHtml(w.en)}</td>
                
                <td class="en">${escapeHtml(w.enArabeezy)}</td>
                <td class="en">
                    ${escapeHtml(w.exampleAr || "")}
                    ${w.exampleAr || w.exampleEn ? " — " : ""}
                    ${escapeHtml(w.exampleEn || "")}
                </td>
            </tr>`;
        });
    }

    // ========== Dialogue ==========
    let dialogueHtml = "";
    if (includeDialogue && lesson.dialogue && lesson.dialogue.lines) {
        dialogueHtml = lesson.dialogue.lines
            .map(
                (line) => `
                <div class="dialogue-line">
                    <span class="speaker">${escapeHtml(line.speaker)}:</span>
                    <span class="dialogue-ar">${escapeHtml(line.ar)}</span>
                    ${line.en
                        ? `<span class="dialogue-en">${escapeHtml(line.en)}</span>`
                        : ""
                    }
                </div>
            `
            )
            .join("");
    }

    // ========== Grammar ==========
    let grammarHtml = "";
    if (includeGrammar && lesson.grammar && lesson.grammar.length) {
        grammarHtml = lesson.grammar
            .map(
                (g) =>
                    `<div class="grammar-item">
                        <h4>${escapeHtml(g.title)}</h4>
                        <p>${escapeHtml(g.description)}</p>
                    </div>`
            )
            .join("");
    }

    // ========== Homework ==========
    let homeworkHtml = "";
    if (includeHomework && lesson.homework && lesson.homework.instructions) {
        homeworkHtml = `<p>${escapeHtml(lesson.homework.instructions)}</p>`;
    }

    // ========== Teacher Notes ==========
    let teacherNotesHtml = "";
    const notes = lesson.teacherNotes && lesson.teacherNotes.myNotes;
    if (includeTeacherNotes && version === "teacher" && notes) {
        teacherNotesHtml = `<p>${escapeHtml(notes)}</p>`;
    }

    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<title>Lesson Export – ${escapeHtml(lesson.meta.lessonTitle)}</title>
<style>
    body {
        font-family:
            "Amiri",
            "Scheherazade New",
            "IBM Plex Sans Arabic",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        margin: 20px;
        color: #111827;
        
      
    }
        .headtext{
         direction: center;
          text-align: center;
        }
    h1, h2, h3, h4 {
        margin: 0 0 6px;
        color: #0f172a;
    }
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
        
    }
    .meta {
        font-size: 12px;
        margin-bottom: 14px;
         direction: ltr;
    }
    .meta div {
        margin-bottom: 2px;
    }
    .section {
    
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid #e5e7eb;
        /* 🔴 مهم: شلنا page-break-inside: avoid; عشان ما يطير القسم كله لصفحة جديدة ويترك الهيدر لحاله */
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 11px;
        direction: rtl; /* الجدول نفسه RTL */
    }
    th, td {
        border: 1px solid #e5e7eb;
        padding: 4px 6px;
        vertical-align: top;
    }
    th {
        background: #e0f2fe;
    }
    .ar {
        direction: rtl;
        text-align: right;
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
        font-size: 20px;
    }
    .en {
        direction: ltr;
        text-align: left;
        font-size: 20px;
    }
    .small-note {
        font-size: 12px;
        color: #6b7280;
        margin-top: 4px;
        direction: ltr;
    }
    .grammar-item {
        margin-bottom: 8px;
        font-size: 18px;
        direction: ltr;
    }
    .grammar-item h4 {
        font-size: 18px;
        margin-bottom: 2px;
        direction: ltr;
    }
    .section-title {
        display:flex;
        justify-content:space-between;
        align-items:baseline;
        
    }
    .badge {
        font-size:10px;
        padding:2px 6px;
        border-radius:999px;
        background:#e5f9f5;
        color:#047857;
    }

    /* 🗨️ المحادثة RTL مع الإنجليزي تحت */
    .dialogue-line {
        margin-bottom: 6px;
        direction: rtl;
        text-align: right;
        font-size: 24px;
    }
    .speaker {
        font-weight: 700;
        margin-left: 4px;
    }
    .dialogue-ar {
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
    }
    .dialogue-en {
        display: block;
       
        font-size: 20px;
        color: #4b5563;
        margin-right: 2em; /* شوي مسافة عن اسم المتحدث */
    }

    @media print {
        body { margin: 10mm; }
        .small-note { display:none; }
    }
</style>
</head>
<body>
    <h1 class="headtext">Palestinian Arabic – ${escapeHtml(lesson.meta.lessonTitle)}</h1>
    <div class="meta" >
        <div><strong>Level:</strong> ${escapeHtml(lesson.meta.level)}</div>
        <div><strong>Unit:</strong> ${escapeHtml(lesson.meta.unit)}</div>
        ${studentName
            ? `<div><strong>Student:</strong> ${escapeHtml(studentName)}</div>`
            : ""
        }
        <div><strong>Version:</strong> ${version === "teacher" ? "Teacher" : "Student"
        }</div>
    </div>

    ${vocabRows
            ? `<div class="section">
                <div class="section-title">
                    <h2>المفردات – Vocabulary</h2>
                    <span class="badge">Core & Extra</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>العربي</th>
                            <th>English</th>
                            <th>enArabeezy</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vocabRows}
                    </tbody>
                </table>
            </div>`
            : ""
        }

    ${dialogueHtml
            ? `<div class="section">
                <h2>المحادثة – Dialogue</h2>
                ${dialogueHtml}
            </div>`
            : ""
        }

    ${grammarHtml
            ? `<div class="section">
                <h2>القواعد – Grammar</h2>
                ${grammarHtml}
            </div>`
            : ""
        }

    ${homeworkHtml
            ? `<div class="section">
                <h2>الواجب – Homework</h2>
                ${homeworkHtml}
            </div>`
            : ""
        }

    ${teacherNotesHtml
            ? `<div class="section">
                <h2>ملاحظات المعلم – Teacher Notes</h2>
                ${teacherNotesHtml}
            </div>`
            : ""
        }

    <p class="small-note">
        Generated from Palestinian Arabic Local LMS – you can print or save as PDF from your browser.
    </p>
</body>
</html>
    `;
}


function openPrintWindow(html) {
    const win = window.open("", "_blank");
    if (!win) {
        alert("Popup blocked – please allow popups to export PDF.");
        return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    // نعطيه وقت بسيط يرنّدر قبل الطباعة
    win.focus();
    setTimeout(() => {
        win.print();
    }, 300);
}

function goToTeacherDashboard() {
    // لو مش مسجل، أو مش مدرّس:
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        // بدل ما نعمل alert بس، نفتحه على مودال تسجيل دخول المدرّس
        if (typeof openAuthModal === "function") {
            openAuthModal("teacher");
        } else {
            alert("Teacher access only.");
        }
        return;
    }
    document.body.classList.remove("home-only")
    showScreen("teacher-dashboard-screen");
    renderTeacherLessonList();
}




// ========================= STUDENTS =========================
function renderStudents() {
    const grid = $("#studentsGrid");
    const empty = $("#noStudentsMessage");
    grid.innerHTML = "";

    if (!appState.students.length) {
        empty.style.display = "block";
        return;
    }
    empty.style.display = "none";

    appState.students.forEach((student) => {
        const card = document.createElement("article");
        card.className = "student-card";

        const avatar = document.createElement("div");
        avatar.className = "student-card__avatar";
        avatar.textContent = student.name.charAt(0).toUpperCase();

        const nameEl = document.createElement("div");
        nameEl.className = "student-card__name";
        nameEl.textContent = student.name;

        const levelEl = document.createElement("div");
        levelEl.className = "student-card__level";
        levelEl.textContent = `Level: ${student.level}`;

        const goalsWrap = document.createElement("div");
        goalsWrap.className = "student-card__goals";

        const goals = student.goals || [];
        if (goals.length) {
            const map = {
                Travel: "✈️ Travel",
                Study: "🎓 Study",
                Family: "👨‍👩‍👧 Family",
                VisitPalestine: "🕌 Visit Palestine",
                Work: "💼 Work",
                Fun: "😊 For Fun",
            };
            goals.forEach((g) => {
                const tag = document.createElement("span");
                tag.className = "goal-tag";
                tag.textContent = map[g] || g;
                goalsWrap.appendChild(tag);
            });
        } else if (student.goal) {
            const tag = document.createElement("span");
            tag.className = "goal-tag";
            tag.textContent = student.goal;
            goalsWrap.appendChild(tag);
        }

        const footer = document.createElement("div");
        footer.className = "student-card__footer";

        const btnContinue = document.createElement("button");
        btnContinue.className = "btn btn--primary btn--sm";
        btnContinue.textContent = "Continue Learning";
        btnContinue.addEventListener("click", () => {
            appState.currentStudentId = student.id;
            goToLevels();
        });

        const btnDelete = document.createElement("button");
        btnDelete.className = "student-card__delete";
        btnDelete.textContent = "❌";
        btnDelete.addEventListener("click", () => {
            if (!confirm(`Delete student "${student.name}"?`)) return;
            appState.students = appState.students.filter((s) => s.id !== student.id);
            saveStudentsToLS();
            if (appState.currentStudentId === student.id) appState.currentStudentId = null;
            renderStudents();
        });

        footer.appendChild(btnContinue);
        footer.appendChild(btnDelete);

        card.appendChild(avatar);
        card.appendChild(nameEl);
        card.appendChild(levelEl);
        card.appendChild(goalsWrap);
        card.appendChild(footer);

        grid.appendChild(card);
    });
}

// ========================= LEVELS & UNITS =========================
function findLessonIdFor(levelName, unitName) {
    return Object.keys(lessons).find(
        (id) =>
            lessons[id].meta &&
            lessons[id].meta.level === levelName &&
            lessons[id].meta.unit === unitName
    );
}

function renderLevels() {
    const container = $("#levelsContainer");
    container.innerHTML = "";

    const levelsDef = [
        {
            level: "Beginner",
            units: ["Greetings", "Daily Routine", "Food & Drink", "Family"],
        },
        {
            level: "Pre-Intermediate",
            units: ["Work & Study", "Health & Emergencies", "Shopping & Prices", "Weather & Small Talk", "Apartment & Problems"],
        },
        {
            level: "Intermediate",
            units: ["Opinions", "Complaints", "Plans & Future", "Free Time & Hobbies", "Feelings & Mental State"],
        },
    ];

    const student = getCurrentStudent();

    levelsDef.forEach((lvl) => {
        const card = document.createElement("article");
        card.className = "level-card";

        const titleRow = document.createElement("div");
        titleRow.className = "level-card__title";

        const title = document.createElement("h3");
        title.textContent = lvl.level;

        const badge = document.createElement("span");
        badge.className = "badge badge--soft";
        badge.textContent = "Local track";

        titleRow.appendChild(title);
        titleRow.appendChild(badge);

        const unitsContainer = document.createElement("div");
        unitsContainer.className = "level-card__units";

        // default units
        const allUnits = [...lvl.units];

        // add custom units for this level
        if (customUnits[lvl.level] && customUnits[lvl.level].length) {
            customUnits[lvl.level].forEach((u) => {
                if (!allUnits.includes(u)) allUnits.push(u);
            });
        }

        allUnits.forEach((unitName) => {
            const pill = document.createElement("div");
            pill.className = "unit-pill";

            const nameSpan = document.createElement("span");
            nameSpan.className = "unit-pill__name";
            nameSpan.textContent = unitName;

            const statusSpan = document.createElement("span");
            statusSpan.className = "unit-pill__status";

            const lessonId = findLessonIdFor(lvl.level, unitName);

            if (lessonId) {
                pill.classList.add("unit-pill--clickable");
                if (student) {
                    const progress = getStudentProgress(student, lessonId);
                    const total = Object.keys(progress).length || 1;
                    const completed = Object.values(progress).filter(Boolean).length;
                    const percent = Math.round((completed / total) * 100);
                    statusSpan.textContent = `Progress: ${completed}/${total} sections`;

                    if (percent >= 80) {
                        pill.classList.add("unit-pill--done");
                    } else if (percent >= 30) {
                        pill.classList.add("unit-pill--mid");
                    } else {
                        pill.classList.add("unit-pill--low");
                    }
                } else {
                    statusSpan.textContent = "Open lesson";
                    pill.classList.add("unit-pill--low");
                }

                pill.addEventListener("click", () => {
                    appState.currentLessonId = lessonId;
                    appState.currentTab = "overview";
                    goToLessonView();
                });
            } else {
                pill.classList.add("unit-pill--nolesson");
                statusSpan.textContent = "No lesson template yet";
            }

            pill.appendChild(nameSpan);
            pill.appendChild(statusSpan);
            unitsContainer.appendChild(pill);
        });

        card.appendChild(titleRow);
        card.appendChild(unitsContainer);
        container.appendChild(card);
    });
}

// ========================= LESSON VIEW =========================
function updateLessonTopBar() {
    const student = getCurrentStudent();
    const lesson = lessons[appState.currentLessonId];
    if (!student || !lesson) return;
    $("#lessonStudentName").textContent = student.name;
    $("#lessonMeta").textContent = `${lesson.meta.level} – ${lesson.meta.unit} – ${lesson.meta.lessonTitle}`;
}

function countCompletedSections(p) {
    return Object.values(p).filter(Boolean).length;
}
function updateProgressBar() {
    const student = getCurrentStudent();
    if (!student) {
        $("#lessonProgressFill").style.width = "0%";
        return;
    }
    const p = getStudentProgress(student, appState.currentLessonId);
    const c = countCompletedSections(p);
    const t = Object.keys(p).length || 1;
    const percent = Math.round((c / t) * 100);
    $("#lessonProgressFill").style.width = percent + "%";
}

function renderSectionStatus(container, sectionKey) {
    const student = getCurrentStudent();
    let done = false;
    if (student) {
        const p = getStudentProgress(student, appState.currentLessonId);
        done = !!p[sectionKey];
    }
    const div = document.createElement("div");
    div.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    div.dataset.sectionStatusKey = sectionKey;
    div.textContent = done ? "✓ Section completed" : "Section not completed yet";
    container.appendChild(div);
}
function updateSectionStatusBadge(sectionKey) {
    const badge = document.querySelector(
        `.section-status[data-section-status-key="${sectionKey}"]`
    );
    if (!badge) return;
    const student = getCurrentStudent();
    const p = student && getStudentProgress(student, appState.currentLessonId);
    const done = !!(p && p[sectionKey]);
    badge.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    badge.textContent = done ? "✓ Section completed" : "Section not completed yet";
}

// Tabs
function setActiveTab(tabKey) {
    appState.currentTab = tabKey;
    $all(".lesson-tab").forEach((btn) =>
        btn.classList.toggle("lesson-tab--active", btn.dataset.tab === tabKey)
    );

    const container = $("#lessonTabContent");
    container.innerHTML = "";
    const lesson = lessons[appState.currentLessonId];
    if (!lesson) return;

    switch (tabKey) {
        case "overview":
            renderOverviewTab(container, lesson);
            break;
        case "vocabulary":
            renderVocabularyTab(container, lesson);
            break;
        case "dialogue":
            renderDialogueTab(container, lesson);
            break;
        case "grammar":
            renderGrammarTab(container, lesson);
            break;
        case "practice":
            renderPracticeTab(container, lesson);
            break;
        case "homework":
            renderHomeworkTab(container, lesson);
            break;
        case "review":
            renderReviewTab(container, lesson);
            break;
        case "teacher-notes":
            renderTeacherNotesTab(container, lesson);
            break;
    }
}

// Overview
function renderOverviewTab(container, lesson) {
    const ov = lesson.overview;
    const h3 = document.createElement("h3");
    h3.textContent = ov.title;
    const p = document.createElement("p");
    p.textContent = ov.description;

    const goalsTitle = document.createElement("p");
    goalsTitle.textContent = "By the end of this lesson, the student can:";
    goalsTitle.style.fontWeight = "600";

    const ul = document.createElement("ul");
    ov.goals.forEach((g) => {
        const li = document.createElement("li");
        li.textContent = g;
        ul.appendChild(li);
    });

    const btn = document.createElement("button");
    btn.className = "btn btn--primary btn--sm";
    btn.textContent = "Mark Overview as Done";
    btn.addEventListener("click", () => setStudentProgressField("overview", true));

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(goalsTitle);
    container.appendChild(ul);
    container.appendChild(btn);
    renderSectionStatus(container, "overview");
}

// Vocabulary


function renderVocabModalFromState() {
    const item = vocabModalState.list[vocabModalState.index];
    if (!item) return;

    const elAr = $("#vocabModalWord");
    const elEn = $("#vocabModalMeaning");
    const elArabeezy = $("#vocabModalArabeezy");
    const elHint = $("#vocabModalHint"); // لو ما عندك هاد السطر ممكن تشيليه
    const exAr = $("#vocabModalExampleAr");
    const exEn = $("#vocabModalExampleEn");

    elAr.textContent = item.ar || "";
    elEn.textContent = item.en || "";
    elArabeezy.textContent = item.enArabeezy || "";
    if (elHint) elHint.textContent = item.hint || "";
    exAr.textContent = item.exampleAr || "";
    exEn.textContent = item.exampleEn || "";

    // show/hide based on state
    elAr.style.display = vocabModalState.showAr ? "" : "none";
    elEn.style.display = vocabModalState.showEn ? "" : "none";


    if (vocabModalState.showExamples) {
        exAr.style.display = "";
        elAr.style.display = "";
    } else {
        exAr.style.display = "none";
        elAr.style.display = "none";
    }
    if (vocabModalState.showEn) {
        exEn.style.display = "";
        elEn.style.display = "";
        elArabeezy.style.display = "";
    } else {
        exEn.style.display = "none";
        elEn.style.display = "none";
        elArabeezy.style.display = "none";
    }
    // تحديث نص الزر (Hide / Show) لكل حقل

    const btnEn = $("#vocabToggleEnBtn");
    const btnEx = $("#vocabToggleExamplesBtn");


    if (btnEn) {
        btnEn.textContent = vocabModalState.showEn ? "👁 Hide" : "👁 Show";
    }

    if (btnEx) {
        btnEx.textContent = vocabModalState.showExamples ? "👁 Hide" : "👁 Show";
    }
}



function openVocabModal(list, index) {
    vocabModalState.list = list || [];
    vocabModalState.index = index || 0;
    vocabModalState.showExamples = true;
    vocabModalState.showAr = true;
    vocabModalState.showEn = true;
    vocabModalState.showArabeezy = true;

    renderVocabModalFromState();
    $("#vocabModal").classList.add("modal--open");
}


function closeVocabModal() {
    $("#vocabModal").classList.remove("modal--open");
    vocabModalState.list = [];
}

function closeVocabModal() {
    $("#vocabModal").classList.remove("modal--open");
}
function ensureVocabVisitedSet() {
    if (!appState.vocabCoreVisited[appState.currentLessonId]) {
        appState.vocabCoreVisited[appState.currentLessonId] = new Set();
    }
    return appState.vocabCoreVisited[appState.currentLessonId];
}
function maybeAutoCompleteVocab() {
    const lesson = lessons[appState.currentLessonId];
    const set = ensureVocabVisitedSet();
    const totalCore = lesson.vocabulary.core.length;
    if (totalCore && set.size >= totalCore) {
        setStudentProgressField("vocabulary", true);
    }
}

function renderVocabularyGroup(container, titleText, items, isCore) {
    const title = document.createElement("div");
    title.className = "vocab-group-title";
    title.textContent = titleText;
    container.appendChild(title);

    const list = document.createElement("div");
    list.className = "vocab-list";

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "vocab-item";

        const ar = document.createElement("div");
        ar.className = "vocab-item__ar";
        ar.textContent = item.ar;

        const en = document.createElement("div");
        en.className = "vocab-item__en";
        en.textContent = item.en;

        card.appendChild(ar);
        card.appendChild(en);

        card.addEventListener("click", () => {
            // ✅ نرسل الليست + index للمودال
            openVocabModal(items, index);

            // نفس منطق الـ progress القديم
            if (isCore) {
                const s = ensureVocabVisitedSet();
                s.add(item.id);
                maybeAutoCompleteVocab();
            }
        });

        list.appendChild(card);
    });

    container.appendChild(list);
}


function handleAddVocabItem(lesson, groupKey) {
    const ar = prompt("Arabic word (with vowels):");
    if (!ar) return;
    const en = prompt("English meaning:");
    if (!en) return;
    const hint = prompt("Optional hint / note:") || "";
    const exampleAr = prompt("Example sentence in Arabic (optional):") || "";
    const exampleEn = prompt("Example sentence in English (optional):") || "";
    lesson.vocabulary[groupKey].push({
        id: groupKey + "_" + Date.now(),
        ar,
        en,
        hint,
        exampleAr,
        exampleEn,
    });
    saveLessonToLS(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function handleEditVocabItems(lesson) {
    const all = [
        ...lesson.vocabulary.core.map((i) => ({ ...i, groupKey: "core" })),
        ...lesson.vocabulary.extra.map((i) => ({ ...i, groupKey: "extra" })),
    ];
    if (!all.length) {
        alert("No vocabulary to edit.");
        return;
    }
    const list = all.map((i, idx) => `${idx + 1}. ${i.ar} / ${i.en}`).join("\n");
    const indexStr = prompt(
        "Choose item number to edit/delete:\n" + list + "\n\nEnter number (or cancel):"
    );
    if (!indexStr) return;
    const index = Number(indexStr) - 1;
    if (isNaN(index) || index < 0 || index >= all.length) return;
    const item = all[index];

    const action = prompt(
        `Selected: ${item.ar} / ${item.en}\nType:\n  e = edit\n  d = delete`
    );
    if (!action) return;

    const group = lesson.vocabulary[item.groupKey];
    const idxInGroup = group.findIndex((x) => x.id === item.id);
    if (action.toLowerCase() === "d") {
        if (idxInGroup !== -1) group.splice(idxInGroup, 1);
    } else if (action.toLowerCase() === "e") {
        const ar = prompt("Arabic:", item.ar) || item.ar;
        const en = prompt("English:", item.en) || item.en;
        const hint = prompt("Hint:", item.hint || "") || item.hint || "";
        const exampleAr =
            prompt("Example Arabic:", item.exampleAr || "") || item.exampleAr || "";
        const exampleEn =
            prompt("Example English:", item.exampleEn || "") || item.exampleEn || "";
        if (idxInGroup !== -1) {
            group[idxInGroup] = { ...item, ar, en, hint, exampleAr, exampleEn };
        }
    }
    saveLessonToLS(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function renderVocabularyTab(container, lesson) {
    const hint = document.createElement("p");
    hint.className = "teacher-edit-note";
    hint.textContent =
        "Tap a card to see details and example sentences. When you finish reviewing, press 'Done' to complete this section.";
    container.appendChild(hint);

    // ✅ شريط "تم إنهاء القسم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneLabel = document.createElement("span");
    doneLabel.className = "section-done-text";


    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm section-done-btn";
    doneBtn.textContent = "Mark Vocabulary as Done";

    doneBtn.addEventListener("click", () => {
        markVocabularyDone();
    });

    doneBar.appendChild(doneLabel);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // ✅ باقي تبويب المفردات
    const vocab = lesson.vocabulary || {};
    const core = Array.isArray(vocab.core) ? vocab.core : [];
    const extra = Array.isArray(vocab.extra) ? vocab.extra : [];

    if (core.length) {
        renderVocabularyGroup(container, "Core Vocabulary", core, true);
    }
    if (extra.length) {
        renderVocabularyGroup(container, "Extra Vocabulary", extra, false);
    }
}



// Dialogue
function renderDialogueTab(container, lesson) {
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.gap = "8px";

    const title = document.createElement("h3");
    title.textContent = "Model Dialogue";

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.gap = "6px";

    const btnToggleEnglish = document.createElement("button");
    btnToggleEnglish.className = "btn btn--ghost btn--sm";
    btnToggleEnglish.textContent = "Show/Hide English";

    const btnToggleArabic = document.createElement("button");
    btnToggleArabic.className = "btn btn--ghost btn--sm";
    btnToggleArabic.textContent = "Show/Hide Arabic";

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Dialogue as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("dialogue", true));

    controls.appendChild(btnToggleArabic);
    controls.appendChild(btnToggleEnglish);
    controls.appendChild(btnDone);

    header.appendChild(title);
    header.appendChild(controls);

    const layout = document.createElement("div");
    layout.className = "dialogue-layout";

    const enCol = document.createElement("div");
    enCol.className = "dialogue-col";

    const arCol = document.createElement("div");
    arCol.className = "dialogue-col dialogue-col--ar";

    lesson.dialogue.lines.forEach((line) => {
        const enLine = document.createElement("div");
        enLine.className = "dialogue-line";
        const enSpeaker = document.createElement("div");
        enSpeaker.className = "dialogue-speaker-en";
        enSpeaker.textContent = line.speaker;
        const enText = document.createElement("div");
        enText.className = "dialogue-text";
        enText.textContent = line.en;
        enLine.appendChild(enSpeaker);
        enLine.appendChild(enText);
        enCol.appendChild(enLine);

        const arLine = document.createElement("div");
        arLine.className = "dialogue-line";
        const arSpeaker = document.createElement("div");
        arSpeaker.className = "dialogue-speaker-ar";
        arSpeaker.textContent = line.speaker;
        const arText = document.createElement("div");
        arText.className = "dialogue-text";
        arText.textContent = line.ar;
        arLine.appendChild(arSpeaker);
        arLine.appendChild(arText);
        arCol.appendChild(arLine);
    });

    layout.appendChild(enCol);
    layout.appendChild(arCol);

    let englishVisible = true;
    let arabicVisible = true;

    function adjustLayout() {
        if (englishVisible && arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr) minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "block";
            enCol.style.margin = "0";
            arCol.style.margin = "0";
        } else if (englishVisible && !arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "none";
            enCol.style.margin = "0 auto";
        } else if (!englishVisible && arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "block";
            arCol.style.margin = "0 auto";
        } else {
            // لو الاثنين مخفيين، خليه فاضي لكن نحافظ على التخطيط
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "none";
        }
    }

    btnToggleEnglish.addEventListener("click", () => {
        englishVisible = !englishVisible;
        adjustLayout();
    });

    btnToggleArabic.addEventListener("click", () => {
        arabicVisible = !arabicVisible;
        adjustLayout();
    });

    // أول مرة
    adjustLayout();

    container.appendChild(header);
    container.appendChild(layout);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can edit the dialogue from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "dialogue");
}

// Grammar
function renderGrammarTab(container, lesson) {
    // هنا صار "Translation"
    ensureTranslationItems(lesson, 7);

    const list = safeArr(lesson?.practice?.translation);
    translationState.items = list;
    translationState.index = 0;
    translationState.hidePrompt = false;
    translationState.hideAnswer = false;
    translationState.shuffled = false;

    // زر "تم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneText = document.createElement("span");
    doneText.className = "translation-muted";
    doneText.textContent = "بعد ما تخلص ترجمة الجمل اضغط تم لإنهاء القسم.";

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm";
    doneBtn.textContent = "✓ تم إنهاء قسم الترجمة";
    doneBtn.addEventListener("click", () => {
        // لأن المفتاح الداخلي ما زال grammar
        setStudentProgressField("grammar", true);
    });

    doneBar.appendChild(doneText);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // Toolbar (إخفاء مرتب، مش معجوق)
    const toolbar = document.createElement("div");
    toolbar.className = "translation-toolbar";

    const left = document.createElement("div");
    left.className = "group";

    const btnHidePrompt = document.createElement("button");
    btnHidePrompt.className = "btn btn--ghost btn--sm";
    btnHidePrompt.textContent = "Hide prompt";

    const btnHideAnswer = document.createElement("button");
    btnHideAnswer.className = "btn btn--ghost btn--sm";
    btnHideAnswer.textContent = "Hide answer";

    const btnShuffle = document.createElement("button");
    btnShuffle.className = "btn btn--ghost btn--sm";
    btnShuffle.textContent = "Shuffle";

    const btnReset = document.createElement("button");
    btnReset.className = "btn btn--ghost btn--sm";
    btnReset.textContent = "Reset";

    left.appendChild(btnHidePrompt);
    left.appendChild(btnHideAnswer);
    left.appendChild(btnShuffle);
    left.appendChild(btnReset);

    const right = document.createElement("div");
    right.className = "group";

    const counter = document.createElement("span");
    counter.className = "translation-muted";
    counter.textContent = list.length ? `1 / ${list.length}` : "0 / 0";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "⬅ Prev";

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next ➡";

    right.appendChild(btnPrev);
    right.appendChild(btnNext);
    right.appendChild(counter);

    toolbar.appendChild(left);
    toolbar.appendChild(right);
    container.appendChild(toolbar);

    // Card container
    const cardHost = document.createElement("div");
    container.appendChild(cardHost);

    // Render function
    function renderTranslationCard() {
        cardHost.innerHTML = "";

        const item = translationState.items[translationState.index];
        if (!item) {
            const p = document.createElement("p");
            p.className = "translation-muted";
            p.textContent = "No translation items available.";
            cardHost.appendChild(p);
            return;
        }

        const type = item.type === "arToEn" ? "Arabic → English" : "English → Arabic";

        const card = document.createElement("div");
        card.className = "translation-card";

        const badge = document.createElement("span");
        badge.className = "translation-badge";
        badge.textContent = type;

        const prompt = document.createElement("div");
        prompt.className = "translation-prompt";

        const answer = document.createElement("div");
        answer.className = "translation-answer";

        // prompt/answer content
        if (item.type === "enToAr") {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `EN: ${txt(item.textEn)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `AR: ${txt(item.textAr)}`;
        } else {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `AR: ${txt(item.textAr)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `EN: ${txt(item.textEn)}`;
        }

        const btnShow = document.createElement("button");
        btnShow.className = "btn btn--outline btn--sm";
        btnShow.textContent = "Show answer";

        btnShow.addEventListener("click", () => {
            const isVisible = answer.classList.toggle("is-visible");
            btnShow.textContent = isVisible ? "Hide answer" : "Show answer";
        });

        const footer = document.createElement("div");
        footer.className = "translation-footer";

        const tip = document.createElement("span");
        tip.className = "translation-muted";
        tip.textContent = "Try to say it out loud before showing the answer.";

        footer.appendChild(tip);
        footer.appendChild(btnShow);

        card.appendChild(badge);
        card.appendChild(prompt);
        card.appendChild(footer);
        card.appendChild(answer);

        cardHost.appendChild(card);

        counter.textContent = `${translationState.index + 1} / ${translationState.items.length}`;

        // Update toolbar button text states
        btnHidePrompt.textContent = translationState.hidePrompt ? "Show prompt" : "Hide prompt";
        btnHideAnswer.textContent = translationState.hideAnswer ? "Show answer" : "Hide answer";
    }

    // toolbar actions
    btnHidePrompt.addEventListener("click", () => {
        translationState.hidePrompt = !translationState.hidePrompt;
        renderTranslationCard();
    });

    btnHideAnswer.addEventListener("click", () => {
        translationState.hideAnswer = !translationState.hideAnswer;
        renderTranslationCard();
    });

    btnShuffle.addEventListener("click", () => {
        translationState.items = shuffleArray(translationState.items);
        translationState.index = 0;
        translationState.shuffled = true;
        renderTranslationCard();
    });

    btnReset.addEventListener("click", () => {
        translationState.index = 0;
        translationState.hidePrompt = false;
        translationState.hideAnswer = false;
        renderTranslationCard();
    });

    btnPrev.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index - 1 + translationState.items.length) % translationState.items.length;
        renderTranslationCard();
    });

    btnNext.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index + 1) % translationState.items.length;
        renderTranslationCard();
    });

    renderTranslationCard();
}


// Practice
function renderPracticeTab(container, lesson) {
    const title = document.createElement("h3");
    title.textContent = "Practice – Quiz & Role-play";

    const quizBlock = document.createElement("div");
    let correctCount = 0;

    lesson.practice.quiz.forEach((q) => {
        const qWrap = document.createElement("div");
        qWrap.className = "quiz-question";

        const qText = document.createElement("div");
        qText.className = "flashcard__ar";
        qText.style.direction = "rtl";
        qText.textContent = q.questionAr;

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "quiz-options";

        const feedback = document.createElement("div");
        feedback.className = "quiz-feedback";

        q.optionsEn.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => {
                if (idx === q.correctIndex) {
                    btn.classList.add("quiz-option--correct");
                    feedback.textContent = "✅ Correct!";
                    correctCount++;
                    if (correctCount >= 5 || correctCount >= lesson.practice.quiz.length) {
                        setStudentProgressField("practice", true);
                    }
                } else {
                    btn.classList.add("quiz-option--incorrect");
                    feedback.textContent = "❌ Not quite. Try again.";
                }
            });
            optionsWrap.appendChild(btn);
        });

        qWrap.appendChild(qText);
        qWrap.appendChild(optionsWrap);
        qWrap.appendChild(feedback);
        quizBlock.appendChild(qWrap);
    });

    const roleTitle = document.createElement("p");
    roleTitle.style.marginTop = "8px";
    roleTitle.style.fontWeight = "600";
    roleTitle.textContent = "Role-play prompts:";

    const ul = document.createElement("ul");
    ul.className = "roleplay-list";
    lesson.practice.rolePlays.forEach((rp) => {
        const li = document.createElement("li");
        li.textContent = rp;
        ul.appendChild(li);
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));

    container.appendChild(title);
    container.appendChild(quizBlock);
    container.appendChild(roleTitle);
    container.appendChild(ul);
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can adjust questions and role-plays from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "practice");
}

// Homework
function renderHomeworkTab(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);

    const title = document.createElement("h3");
    title.textContent = "Homework";

    const text = document.createElement("p");
    text.className = "homework-text";
    text.textContent = lesson.homework.instructions;

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "6px";
    wrap.style.marginBottom = "8px";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "homeworkAssignedCheckbox";
    check.checked = progress && progress.homework;

    const label = document.createElement("label");
    label.htmlFor = "homeworkAssignedCheckbox";
    label.textContent = "Homework assigned / completed";

    wrap.appendChild(check);
    wrap.appendChild(label);

    check.addEventListener("change", () => {
        setStudentProgressField("homework", check.checked);
    });

    const notesLabel = document.createElement("p");
    notesLabel.className = "teacher-edit-note";
    notesLabel.textContent = "Teacher notes for this student:";

    const notes = document.createElement("textarea");
    notes.className = "homework-notes";
    notes.placeholder = "E.g. Needs more practice with kifak/kifik.";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";

    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Homework as Done";
    btnDone.addEventListener("click", () => {
        check.checked = true;
        setStudentProgressField("homework", true);
    });

    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(wrap);
    container.appendChild(notesLabel);
    container.appendChild(notes);
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can edit the main homework instructions for this lesson from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "homework");
}

// Quick review
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderReviewTab(container, lesson) {
    const title = document.createElement("h3");
    title.textContent = "Quick Review – Flashcards";

    const all = [...lesson.vocabulary.core, ...lesson.vocabulary.extra];
    if (!all.length) {
        const p = document.createElement("p");
        p.textContent = "No vocabulary available for review.";
        container.appendChild(title);
        container.appendChild(p);
        renderSectionStatus(container, "review");
        return;
    }

    let pool = shuffleArray(all).slice(0, Math.min(5, all.length));
    let index = 0;
    let showFront = true;

    const card = document.createElement("div");
    card.className = "flashcard";
    const arEl = document.createElement("div");
    arEl.className = "flashcard__ar";
    const enEl = document.createElement("div");
    enEl.className = "flashcard__en";

    function renderCard() {
        const item = pool[index];
        if (showFront) {
            arEl.textContent = item.ar;
            enEl.textContent = "(tap to reveal meaning)";
            enEl.style.color = "#6b7280";
        } else {
            arEl.textContent = item.ar;
            enEl.textContent = item.en;
            enEl.style.color = "#111827";
        }
    }

    card.appendChild(arEl);
    card.appendChild(enEl);
    card.addEventListener("click", () => {
        showFront = !showFront;
        renderCard();
    });

    const controlsRow = document.createElement("div");
    controlsRow.style.display = "flex";
    controlsRow.style.justifyContent = "space-between";
    controlsRow.style.alignItems = "center";
    controlsRow.style.marginTop = "6px";

    const navButtons = document.createElement("div");
    navButtons.style.display = "flex";
    navButtons.style.gap = "6px";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "Prev";
    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            showFront = true;
            renderCard();
        }
    });

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next";
    btnNext.addEventListener("click", () => {
        if (index < pool.length - 1) {
            index++;
            showFront = true;
            renderCard();
        } else {
            alert("Nice! Quick review completed.");
            setStudentProgressField("review", true);
        }
    });

    const btnRandom = document.createElement("button");
    btnRandom.className = "btn btn--outline btn--sm";
    btnRandom.textContent = "Random";
    btnRandom.addEventListener("click", () => {
        index = Math.floor(Math.random() * pool.length);
        showFront = true;
        renderCard();
    });

    navButtons.appendChild(btnPrev);
    navButtons.appendChild(btnNext);
    navButtons.appendChild(btnRandom);

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Quick Review as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("review", true));

    controlsRow.appendChild(navButtons);
    controlsRow.appendChild(btnDone);

    container.appendChild(title);
    container.appendChild(card);
    container.appendChild(controlsRow);

    renderCard();
    renderSectionStatus(container, "review");
}

// Teacher notes
function renderTeacherNotesTab(container, lesson) {
    const title = document.createElement("h3");
    title.textContent = "Teacher Notes";

    const info = document.createElement("p");
    info.className = "teacher-edit-note";
    info.textContent =
        "Use this space to plan your flow, note common mistakes, or add extra prompts. Notes are saved locally on this device.";

    const textarea = document.createElement("textarea");
    textarea.className = "homework-notes";
    textarea.value = lesson.teacherNotes.myNotes || "";
    textarea.placeholder =
        "Lesson flow, timing, reminders about pronunciation, extra speaking prompts...";

    textarea.addEventListener("change", () => {
        lesson.teacherNotes.myNotes = textarea.value;
        saveLessonToLS(appState.currentLessonId);
    });

    container.appendChild(title);
    container.appendChild(info);
    container.appendChild(textarea);
}

// ========================= TEACHER MODE VISIBILITY =========================
function updateTeacherTabsVisibility() {
    const show = appState.teacherMode;
    $all(".lesson-tab--teacher-only").forEach((btn) => {
        btn.style.display = show ? "inline-flex" : "none";
    });
}

// ========================= TEACHER DASHBOARD =========================
function renderTeacherLessonList() {
    const listEl = $("#teacherLessonList");
    listEl.innerHTML = "";
    const ids = Object.keys(lessons);
    if (!ids.length) {
        const p = document.createElement("p");
        p.className = "empty-state";
        p.textContent =
            "No lesson templates yet. Use “Add New Lesson Template” to create your first lesson.";
        listEl.appendChild(p);
        return;
    }

    ids.forEach((id) => {
        const lesson = lessons[id];
        const card = document.createElement("article");
        card.className = "card card--lesson";

        const title = document.createElement("h3");
        title.textContent = `${lesson.meta.level} – ${lesson.meta.unit}`;

        const meta = document.createElement("p");
        meta.className = "card__meta";
        meta.textContent = lesson.meta.lessonTitle;

        const badge = document.createElement("span");
        badge.className = "card__badge";
        badge.textContent = `ID: ${id}`;

        const actions = document.createElement("div");
        actions.className = "card__actions";

        const btnEdit = document.createElement("button");
        btnEdit.className = "btn btn--primary btn--sm";
        btnEdit.textContent = "Edit Lesson Content";
        btnEdit.addEventListener("click", () => {
            appState.currentLessonId = id;
            renderTeacherEditor(id, card); // ⭐ مررنا الكارد
        });




        const btnOpen = document.createElement("button");
        btnOpen.className = "btn btn--outline btn--sm";
        btnOpen.textContent = "Open Lesson View";
        btnOpen.addEventListener("click", () => {
            appState.currentLessonId = id;
            appState.teacherMode = false;
            $("#teacherModeToggle").checked = false;
            goToLessonView({ teacherMode: false });
        });

        const btnDelete = document.createElement("button");
        btnDelete.className = "btn btn--ghost btn--sm";
        btnDelete.textContent = "Delete Template";
        btnDelete.addEventListener("click", () => {
            if (
                !confirm(
                    `Delete lesson template "${lesson.meta.lessonTitle}"?\nThis does not delete students' progress, but the lesson won't be available anymore.`
                )
            )
                return;
            delete lessons[id];
            localStorage.removeItem(LS_LESSON_PREFIX + id);
            const editor = $("#teacherEditor");
            editor.style.display = "none";
            editor.innerHTML = "";
            renderTeacherLessonList();
        });

        actions.appendChild(btnEdit);
        actions.appendChild(btnOpen);
        actions.appendChild(btnDelete);

        card.appendChild(title);
        card.appendChild(meta);
        card.appendChild(badge);
        card.appendChild(actions);

        listEl.appendChild(card);
    });
}

function createNewLessonTemplate() {
    const newId = "lesson_" + Date.now();
    lessons[newId] = {
        meta: {
            level: "Beginner",
            unit: "New Unit",
            lessonTitle: "New Lesson",
        },
        overview: {
            title: "New Lesson Overview",
            description: "",
            goals: [],
        },
        vocabulary: {
            core: [],
            extra: [],
        },
        dialogue: {
            lines: [],
        },
        grammar: [],
        practice: {
            quiz: [],
            rolePlays: [],
        },
        homework: {
            instructions: "",
        },
        teacherNotes: {
            myNotes: "",
        },
    };
    saveLessonToLS(newId);
    renderTeacherLessonList();
    renderTeacherEditor(newId);
}


function renderTeacherEditor(lessonId, anchorCard) {
    const lesson = lessons[lessonId];
    const editor = $("#teacherEditor");
    if (!lesson || !editor) return;

    // نحرك الفورم تحت الكارد اللي انضغط (Teacher Dashboard)
    editor.innerHTML = "";
    if (anchorCard) {
        anchorCard.insertAdjacentElement("afterend", editor);
    } else {
        const list = $("#teacherLessonList");
        if (list) list.insertAdjacentElement("afterend", editor);
    }
    editor.style.display = "block";

    editor.innerHTML = `
     <div class="teacher-editor__section">
     
      <div class="td-editor-buttons">
        
        <button id="tdCloseEditor" class="btn btn--ghost btn--sm">Close Editor</button>
      </div>
    </div>
    <h3>Editing: ${lesson.meta.level} – ${lesson.meta.unit} – ${lesson.meta.lessonTitle}</h3>
    <p class="teacher-edit-note">
      All changes here are saved locally and will apply to all students for this lesson.
    </p>

    <div class="teacher-editor__section">
      <h4>Lesson Meta</h4>
      <div class="form-field form-field--inline">
        <label for="tdMetaLevel">Level</label>
        <select id="tdMetaLevel">
          <option value="Beginner">Beginner</option>
          <option value="Pre-Intermediate">Pre-Intermediate</option>
          <option value="Intermediate">Intermediate</option>
        </select>
      </div>
      <div class="form-field">
        <label for="tdMetaUnit">Unit</label>
        <input id="tdMetaUnit" class="td-input" />
      </div>
      <div class="form-field">
        <label for="tdMetaTitle">Lesson Title</label>
        <input id="tdMetaTitle" class="td-input" />
      </div>
      <p class="section-header__subtitle">Lesson ID: <span id="tdMetaId"></span></p>
      <div class="td-editor-buttons">
        <button id="tdSaveMeta" class="btn btn--primary btn--sm">Save Meta</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Overview</h4>
      <div class="form-field">
        <label for="tdOverviewTitle">Overview Title</label>
        <input id="tdOverviewTitle" class="td-input" />
      </div>
      <div class="form-field">
        <label for="tdOverviewDesc">Description</label>
        <textarea id="tdOverviewDesc" class="homework-notes" rows="3"></textarea>
      </div>
      <div class="form-field">
        <label>Goals</label>
        <div id="tdOverviewGoalsList"></div>
        <div class="td-editor-buttons">
          <button id="tdAddGoal" class="btn btn--outline btn--sm">Add Goal</button>
          <button id="tdSaveGoals" class="btn btn--primary btn--sm">Save Goals</button>
        </div>
      </div>
    </div>

    <!-- 🆕 Vocab Section -->
    <div class="teacher-editor__section">
      <h4>Vocabulary</h4>
      <p class="teacher-edit-note">
        Edit core and extra vocabulary for this lesson. These words تظهر في تبويب Vocabulary و Quick Review.
      </p>

      <h5>Core Vocabulary</h5>
      <div id="tdVocabCoreList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddVocabCore" class="btn btn--outline btn--sm">Add Core Word</button>
        <button id="tdSaveVocabCore" class="btn btn--primary btn--sm">Save Core</button>
      </div>

      <h5 style="margin-top: 10px;">Extra Vocabulary</h5>
      <div id="tdVocabExtraList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddVocabExtra" class="btn btn--outline btn--sm">Add Extra Word</button>
        <button id="tdSaveVocabExtra" class="btn btn--primary btn--sm">Save Extra</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Dialogue</h4>
      <p class="teacher-edit-note">Edit each line: speaker, Arabic (RTL) and English.</p>
      <div id="tdDialogueList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddDialogueLine" class="btn btn--outline btn--sm">Add Line</button>
        <button id="tdSaveDialogue" class="btn btn--primary btn--sm">Save Dialogue</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Grammar Points</h4>
      <p class="teacher-edit-note">Short rules with descriptions.</p>
      <div id="tdGrammarList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddGrammar" class="btn btn--outline btn--sm">Add Rule</button>
        <button id="tdSaveGrammar" class="btn btn--primary btn--sm">Save Grammar</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Practice – MCQ</h4>
      <p class="teacher-edit-note">Edit quiz questions: Arabic question and 3 English options.</p>
      <div id="tdQuizList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddQuiz" class="btn btn--outline btn--sm">Add MCQ</button>
        <button id="tdSaveQuiz" class="btn btn--primary btn--sm">Save MCQ</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Practice – Role-play Prompts</h4>
      <p class="teacher-edit-note">Short speaking prompts for in-class practice.</p>
      <div id="tdRoleList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddRole" class="btn btn--outline btn--sm">Add Prompt</button>
        <button id="tdSaveRole" class="btn btn--primary btn--sm">Save Prompts</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Homework Instructions</h4>
      <p class="teacher-edit-note">This text is shared for all students.</p>
      <textarea id="tdHomeworkText" class="homework-notes" rows="3"></textarea>
      <div class="td-editor-buttons">
        <button id="tdSaveHomework" class="btn btn--primary btn--sm">Save Homework</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Teacher Notes (Template)</h4>
      <textarea id="tdTeacherNotes" class="homework-notes" rows="3"></textarea>
      <div class="td-editor-buttons">
        <button id="tdSaveTeacherNotes" class="btn btn--primary btn--sm">Save Notes</button>
        <button id="tdCloseEditor" class="btn btn--ghost btn--sm">Close Editor</button>
      </div>
    </div>
  `;

    // ========== Meta ==========
    $("#tdMetaLevel").value = lesson.meta.level;
    $("#tdMetaUnit").value = lesson.meta.unit;
    $("#tdMetaTitle").value = lesson.meta.lessonTitle;
    $("#tdMetaId").textContent = lessonId;

    $("#tdSaveMeta").addEventListener("click", () => {
        lesson.meta.level = $("#tdMetaLevel").value;
        lesson.meta.unit = $("#tdMetaUnit").value.trim() || "Unit";
        lesson.meta.lessonTitle = $("#tdMetaTitle").value.trim() || "Lesson";
        saveLessonToLS(lessonId);
        renderTeacherLessonList();
        alert("Lesson meta saved.");
    });

    // ========== Overview ==========
    $("#tdOverviewTitle").value = lesson.overview.title || "";
    $("#tdOverviewDesc").value = lesson.overview.description || "";

    const goalsListEl = $("#tdOverviewGoalsList");
    function renderGoals() {
        goalsListEl.innerHTML = "";
        (lesson.overview.goals || []).forEach((g) => {
            const row = document.createElement("div");
            row.className = "td-role-row";
            const inp = document.createElement("input");
            inp.className = "td-input td-role-input";
            inp.value = g;
            const delBtn = document.createElement("button");
            delBtn.type = "button";
            delBtn.className = "btn btn--ghost btn--sm";
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", () => row.remove());
            row.appendChild(inp);
            row.appendChild(delBtn);
            goalsListEl.appendChild(row);
        });
    }
    renderGoals();

    $("#tdAddGoal").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.placeholder = "New goal...";
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        goalsListEl.appendChild(row);
    });

    $("#tdSaveGoals").addEventListener("click", () => {
        const rows = goalsListEl.querySelectorAll(".td-role-row");
        const newGoals = [];
        rows.forEach((r) => {
            const val = r.querySelector("input").value.trim();
            if (val) newGoals.push(val);
        });
        lesson.overview.title = $("#tdOverviewTitle").value.trim() || lesson.overview.title;
        lesson.overview.description =
            $("#tdOverviewDesc").value.trim() || lesson.overview.description;
        lesson.overview.goals = newGoals;
        saveLessonToLS(lessonId);
        alert("Overview saved.");
    });

    // ========== 🆕 Vocabulary ==========

    const vocabCoreList = $("#tdVocabCoreList");
    const vocabExtraList = $("#tdVocabExtraList");


    function createVocabRow(item = {}, isCore = true) {
        const row = document.createElement("div");
        row.className = "td-quiz-row";
        row.dataset.itemId = item.id || "";

        row.innerHTML = `
          <div class="td-label">Arabic (with vowels)</div>
          <input class="td-input td-input--ar td-vocab-ar" value="${item.ar || ""}" />

          <div class="td-label">English meaning</div>
          <input class="td-input td-vocab-en" value="${item.en || ""}" />

          <div class="td-label">Hint (optional)</div>
          <input class="td-input td-vocab-hint" value="${item.hint || ""}" />

          <div class="td-label">Arabic example (optional)</div>
          <textarea class="td-input td-input--ar td-vocab-ex-ar" rows="2">${item.exampleAr || ""}</textarea>

          <div class="td-label">English example (optional)</div>
          <textarea class="td-input td-vocab-ex-en" rows="2">${item.exampleEn || ""}</textarea>
        `;

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(delBtn);

        return row;
    }

    function renderVocabGroup(listEl, items) {
        listEl.innerHTML = "";
        (items || []).forEach((item) => {
            listEl.appendChild(createVocabRow(item));
        });
    }

    renderVocabGroup(vocabCoreList, lesson.vocabulary.core || []);
    renderVocabGroup(vocabExtraList, lesson.vocabulary.extra || []);

    $("#tdAddVocabCore").addEventListener("click", () => {
        vocabCoreList.appendChild(createVocabRow({}, true));
    });

    $("#tdAddVocabExtra").addEventListener("click", () => {
        vocabExtraList.appendChild(createVocabRow({}, false));
    });

    function collectVocabFrom(listEl, isCore) {
        const rows = listEl.querySelectorAll(".td-quiz-row");
        const result = [];
        rows.forEach((row) => {
            const ar = row.querySelector(".td-vocab-ar").value.trim();
            const en = row.querySelector(".td-vocab-en").value.trim();
            const hint = row.querySelector(".td-vocab-hint").value.trim();
            const exampleAr = row.querySelector(".td-vocab-ex-ar").value.trim();
            const exampleEn = row.querySelector(".td-vocab-ex-en").value.trim();
            if (!ar || !en) return;
            let id = row.dataset.itemId;
            if (!id) {
                id = (isCore ? "core_" : "extra_") + Date.now() + "_" + Math.random().toString(16).slice(2);
            }
            result.push({ id, ar, en, hint, exampleAr, exampleEn });
        });
        return result;
    }

    $("#tdSaveVocabCore").addEventListener("click", () => {
        lesson.vocabulary.core = collectVocabFrom(vocabCoreList, true);
        saveLessonToLS(lessonId);
        alert("Core vocabulary saved.");
    });

    $("#tdSaveVocabExtra").addEventListener("click", () => {
        lesson.vocabulary.extra = collectVocabFrom(vocabExtraList, false);
        saveLessonToLS(lessonId);
        alert("Extra vocabulary saved.");
    });

    // ========== Dialogue ==========
    const dlgList = $("#tdDialogueList");
    dlgList.innerHTML = "";
    lesson.dialogue.lines.forEach((line) => {
        const row = document.createElement("div");
        row.className = "td-row td-dialogue-row";
        row.innerHTML = `
      <input class="td-input td-input--small td-speaker" value="${line.speaker || ""}" />
      <input class="td-input td-input--ar td-ar" value="${line.ar || ""}" />
      <input class="td-input td-input--en td-en" value="${line.en || ""}" />
      <button type="button" class="btn btn--ghost btn--sm td-delete">Delete</button>
    `;
        row.querySelector(".td-delete").addEventListener("click", () => row.remove());
        dlgList.appendChild(row);
    });

    $("#tdAddDialogueLine").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-row td-dialogue-row";
        row.innerHTML = `
      <input class="td-input td-input--small td-speaker" value="A" />
      <input class="td-input td-input--ar td-ar" value="" placeholder="Arabic line" />
      <input class="td-input td-input--en td-en" value="" placeholder="English line" />
      <button type="button" class="btn btn--ghost btn--sm td-delete">Delete</button>
    `;
        row.querySelector(".td-delete").addEventListener("click", () => row.remove());
        dlgList.appendChild(row);
    });

    $("#tdSaveDialogue").addEventListener("click", () => {
        const rows = dlgList.querySelectorAll(".td-dialogue-row");
        const newLines = [];
        rows.forEach((r) => {
            const speaker = r.querySelector(".td-speaker").value.trim() || "A";
            const ar = r.querySelector(".td-ar").value.trim();
            const en = r.querySelector(".td-en").value.trim();
            if (ar) newLines.push({ speaker, ar, en });
        });
        lesson.dialogue.lines = newLines;
        saveLessonToLS(lessonId);
        alert("Dialogue saved.");
    });

    // ========== Grammar ==========
    const grammarList = $("#tdGrammarList");
    function renderGrammarRows() {
        grammarList.innerHTML = "";
        (lesson.grammar || []).forEach((g) => {
            const row = document.createElement("div");
            row.className = "td-quiz-row";
            row.innerHTML = `
        <div class="td-label">Rule title</div>
        <input class="td-input td-grammar-title" value="${g.title || ""}" />
        <div class="td-label">Description</div>
        <textarea class="td-input td-grammar-desc" rows="2">${g.description || ""}</textarea>
      `;
            const delBtn = document.createElement("button");
            delBtn.type = "button";
            delBtn.className = "btn btn--ghost btn--sm";
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", () => row.remove());
            row.appendChild(delBtn);
            grammarList.appendChild(row);
        });
    }
    renderGrammarRows();

    $("#tdAddGrammar").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";
        row.innerHTML = `
      <div class="td-label">Rule title</div>
      <input class="td-input td-grammar-title" placeholder="Rule title" />
      <div class="td-label">Description</div>
      <textarea class="td-input td-grammar-desc" rows="2" placeholder="Description / example"></textarea>
    `;
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(delBtn);
        grammarList.appendChild(row);
    });

    $("#tdSaveGrammar").addEventListener("click", () => {
        const rows = grammarList.querySelectorAll(".td-quiz-row");
        const newGrammar = [];
        rows.forEach((r) => {
            const title = r.querySelector(".td-grammar-title").value.trim();
            const desc = r.querySelector(".td-grammar-desc").value.trim();
            if (title) newGrammar.push({ id: "g_" + Date.now() + Math.random(), title, description: desc });
        });
        lesson.grammar = newGrammar;
        saveLessonToLS(lessonId);
        alert("Grammar saved.");
    });

    // ========== Quiz ==========
    const quizList = $("#tdQuizList");
    quizList.innerHTML = "";
    lesson.practice.quiz.forEach((q) => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";

        const qLabel = document.createElement("div");
        qLabel.className = "td-label";
        qLabel.textContent = "Question (Arabic)";

        const qInput = document.createElement("textarea");
        qInput.className = "td-input td-input--ar td-quiz-question";
        qInput.rows = 2;
        qInput.value = q.questionAr || "";

        const optLabel = document.createElement("div");
        optLabel.className = "td-label";
        optLabel.textContent = "Options (English)";

        const optGrid = document.createElement("div");
        optGrid.className = "td-quiz-grid";

        const optInputs = [];
        for (let i = 0; i < 3; i++) {
            const inp = document.createElement("input");
            inp.className = "td-input";
            inp.value = q.optionsEn[i] || "";
            optGrid.appendChild(inp);
            optInputs.push(inp);
        }

        const correctWrap = document.createElement("div");
        correctWrap.style.marginTop = "4px";
        correctWrap.style.display = "flex";
        correctWrap.style.justifyContent = "space-between";
        correctWrap.style.alignItems = "center";

        const sel = document.createElement("select");
        sel.className = "td-select";
        ["Option 1", "Option 2", "Option 3"].forEach((lab, idx) => {
            const op = document.createElement("option");
            op.value = String(idx);
            op.textContent = lab;
            sel.appendChild(op);
        });
        sel.value = String(q.correctIndex || 0);

        const selLabel = document.createElement("span");
        selLabel.className = "td-label";
        selLabel.textContent = "Correct option:";

        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.flexDirection = "column";
        left.style.gap = "2px";
        left.appendChild(selLabel);
        left.appendChild(sel);

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());

        correctWrap.appendChild(left);
        correctWrap.appendChild(delBtn);

        row.appendChild(qLabel);
        row.appendChild(qInput);
        row.appendChild(optLabel);
        row.appendChild(optGrid);
        row.appendChild(correctWrap);

        quizList.appendChild(row);
    });

    $("#tdAddQuiz").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";

        row.innerHTML = `
      <div class="td-label">Question (Arabic)</div>
      <textarea class="td-input td-input--ar td-quiz-question" rows="2" placeholder="السؤال بالعربي"></textarea>
      <div class="td-label">Options (English)</div>
      <div class="td-quiz-grid">
        <input class="td-input" placeholder="Option 1" />
        <input class="td-input" placeholder="Option 2" />
        <input class="td-input" placeholder="Option 3" />
      </div>
    `;

        const correctWrap = document.createElement("div");
        correctWrap.style.marginTop = "4px";
        correctWrap.style.display = "flex";
        correctWrap.style.justifyContent = "space-between";
        correctWrap.style.alignItems = "center";

        const selLabel = document.createElement("span");
        selLabel.className = "td-label";
        selLabel.textContent = "Correct option:";

        const sel = document.createElement("select");
        sel.className = "td-select";
        ["Option 1", "Option 2", "Option 3"].forEach((lab, idx) => {
            const op = document.createElement("option");
            op.value = String(idx);
            op.textContent = lab;
            sel.appendChild(op);
        });

        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.flexDirection = "column";
        left.style.gap = "2px";
        left.appendChild(selLabel);
        left.appendChild(sel);

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());

        correctWrap.appendChild(left);
        correctWrap.appendChild(delBtn);

        row.appendChild(correctWrap);
        quizList.appendChild(row);
    });

    $("#tdSaveQuiz").addEventListener("click", () => {
        const rows = quizList.querySelectorAll(".td-quiz-row");
        const newQuiz = [];
        rows.forEach((row) => {
            const qInput = row.querySelector(".td-quiz-question");
            const questionAr = qInput.value.trim();
            if (!questionAr) return;
            const opts = Array.from(row.querySelectorAll(".td-quiz-grid .td-input")).map((i) =>
                i.value.trim()
            );
            if (!opts[0] || !opts[1] || !opts[2]) return;
            const sel = row.querySelector(".td-select");
            const correctIndex = Number(sel.value) || 0;
            newQuiz.push({
                id: "q_" + Date.now() + "_" + Math.random().toString(16).slice(2),
                questionAr,
                optionsEn: opts,
                correctIndex,
            });
        });
        lesson.practice.quiz = newQuiz;
        saveLessonToLS(lessonId);
        alert("MCQ saved.");
    });

    // ========== Role-play ==========
    const roleList = $("#tdRoleList");
    roleList.innerHTML = "";
    lesson.practice.rolePlays.forEach((rp) => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.value = rp;
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        roleList.appendChild(row);
    });

    $("#tdAddRole").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.placeholder = "New speaking prompt...";
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        roleList.appendChild(row);
    });

    $("#tdSaveRole").addEventListener("click", () => {
        const rows = roleList.querySelectorAll(".td-role-row");
        const newPrompts = [];
        rows.forEach((r) => {
            const txt = r.querySelector("input").value.trim();
            if (txt) newPrompts.push(txt);
        });
        lesson.practice.rolePlays = newPrompts;
        saveLessonToLS(lessonId);
        alert("Role-play prompts saved.");
    });

    // ========== Homework ==========
    $("#tdHomeworkText").value = lesson.homework.instructions || "";
    $("#tdSaveHomework").addEventListener("click", () => {
        lesson.homework.instructions = $("#tdHomeworkText").value.trim();
        saveLessonToLS(lessonId);
        alert("Homework instructions saved.");
    });

    // ========== Teacher Notes ==========
    $("#tdTeacherNotes").value = lesson.teacherNotes.myNotes || "";
    $("#tdSaveTeacherNotes").addEventListener("click", () => {
        lesson.teacherNotes.myNotes = $("#tdTeacherNotes").value.trim();
        saveLessonToLS(lessonId);
        alert("Teacher notes saved.");
    });

    $("#tdCloseEditor").addEventListener("click", () => {
        editor.style.display = "none";
        editor.innerHTML = "";
    });
}
// ================= AUTH MODAL HELPERS =================
function openAuthModal(forcedRole) {
    document.body.classList.remove("home-only");
    console.log("openAuthModal called with role:", forcedRole);
    const modal = document.getElementById("authModal");
    const roleSelect = document.getElementById("authRole");
    const errorBox = document.getElementById("authError");

    if (!modal) return;

    // مسح أي خطأ قديم
    if (errorBox) errorBox.textContent = "";

    // لو جاي من زر "أنا طالب" أو "أنا مدرس"
    if (forcedRole === "student" || forcedRole === "teacher") {
        modal.dataset.forcedRole = forcedRole;
        if (roleSelect) roleSelect.value = forcedRole;
    } else {
        // لو جاي من زر Login العادي
        delete modal.dataset.forcedRole;
    }

    modal.classList.add("modal--open");
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (!modal) return;
    modal.classList.remove("modal--open");
    delete modal.dataset.forcedRole;
}

// ========================= DOM READY =========================
document.addEventListener("DOMContentLoaded", () => {
    loadLessonDataFromLS();
    loadCustomUnits();
    loadFontSize();
    appState.students = loadStudentsFromLS();
    loadBackupSettings();

    // top nav
    $all(".top-nav__link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.nav;
            if (target === "home-screen") goToHome();
            else if (target === "students-screen") goToStudents();
            else if (target === "teacher-dashboard-screen") goToTeacherDashboard();
        });
    });

    // hero buttons
    // ===== HERO BUTTONS (أنا طالب / أنا مدرس) =====
    const btnHeroStudent = document.getElementById("btnHeroStudent");
    const btnHeroTeacher = document.getElementById("btnHeroTeacher");

    if (btnHeroStudent) {
        btnHeroStudent.addEventListener("click", () => {
            // الطالب → نفتح مودال تسجيل الدخول كـ STUDENT
            console.log("Student hero clicked");
            openAuthModal("student");
        });
    }

    if (btnHeroTeacher) {
        btnHeroTeacher.addEventListener("click", () => {
            // المدرّس → نفتح مودال تسجيل الدخول كـ TEACHER
            console.log("Teacher hero clicked");
            openAuthModal("teacher");
        });
    }

    // add student
    $("#addStudentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#studentName").value.trim();
        const level = $("#studentLevel").value;
        if (!name) return;

        const goalCheckboxes = document.querySelectorAll('input[name="goalOption"]:checked');
        const goals = Array.from(goalCheckboxes).map((c) => c.value);

        const student = {
            id: "s_" + Date.now(),
            name,
            goals,
            level,
            progress: {},
            homeworkNotes: {},
        };
        appState.students.push(student);
        saveStudentsToLS();
        $("#studentName").value = "";
        goalCheckboxes.forEach((c) => (c.checked = false));
        $("#studentLevel").value = "Beginner";
        renderStudents();
    });
    // ================= WHITEBOARD UI =================
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    const btnToggleWhiteboard = document.getElementById("btnToggleWhiteboard");
    const wbColorInput = document.getElementById("whiteboardColor");
    const wbSizeInput = document.getElementById("whiteboardSize");
    const wbSizeVal = document.getElementById("whiteboardSizeVal");
    const wbClearBtn = document.getElementById("whiteboardClear");
    const wbDownloadBtn = document.getElementById("whiteboardDownload");

    if (btnToggleWhiteboard && whiteboardPanel) {
        btnToggleWhiteboard.addEventListener("click", () => {
            const isHidden = whiteboardPanel.classList.contains("hidden");
            if (isHidden) {
                whiteboardPanel.classList.remove("hidden");
                // لما أفتح اللوحة، أهيّئ الكانفاس وأحمّل الرسمة
                initWhiteboardCanvas();
            } else {
                whiteboardPanel.classList.add("hidden");
            }
        });
    }

    if (wbColorInput) {
        wbColorInput.addEventListener("input", () => {
            whiteboardState.color = wbColorInput.value;
        });
    }

    if (wbSizeInput && wbSizeVal) {
        wbSizeInput.addEventListener("input", () => {
            const v = Number(wbSizeInput.value) || 3;
            whiteboardState.size = v;
            wbSizeVal.textContent = v + "px";
        });
        // قيمة ابتدائية
        whiteboardState.size = Number(wbSizeInput.value) || 3;
        wbSizeVal.textContent = whiteboardState.size + "px";
    }

    if (wbClearBtn) {
        wbClearBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas || !whiteboardState.ctx) return;
            if (!confirm("Clear this whiteboard for the current lesson?")) return;
            whiteboardState.ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveWhiteboardToLS();
        });
    }

    if (wbDownloadBtn) {
        wbDownloadBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas) return;
            const link = document.createElement("a");
            const lesson = lessons[appState.currentLessonId];
            const title = lesson ? lesson.meta.lessonTitle || "lesson" : "lesson";
            link.download = `whiteboard_${title.replace(/\s+/g, "_")}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    const btnExportLesson = document.getElementById("btnExportLessonPdf");
    if (btnExportLesson) {
        btnExportLesson.addEventListener("click", () => {
            const student = getCurrentStudent();
            const studentName = student ? student.name : "";
            const lessonId = appState.currentLessonId;
            if (!lessonId) {
                alert("No lesson selected.");
                return;
            }
            openExportModal("lesson-view", lessonId, studentName);
        });
    }
    const exportForm = document.getElementById("exportOptionsForm");
    if (exportForm) {
        exportForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const modal = document.getElementById("exportModal");
            const lessonId = exportContext.lessonId;
            const lesson = lessons[lessonId];
            if (!lesson) {
                alert("Lesson not found.");
                return;
            }

            const includeVocab = document.getElementById("expIncludeVocab").checked;
            const includeDialogue = document.getElementById("expIncludeDialogue").checked;
            const includeGrammar = document.getElementById("expIncludeGrammar").checked;
            const includeHomework = document.getElementById("expIncludeHomework").checked;
            let includeTeacherNotes =
                document.getElementById("expIncludeTeacherNotes").checked;

            const versionInput = exportForm.querySelector(
                'input[name="expVersion"]:checked'
            );
            const version = versionInput ? versionInput.value : "student";

            if (version === "student") {
                // مهما كان checkbox تبع Teacher Notes، نخفيه في Student version
                includeTeacherNotes = false;
            }

            const html = buildLessonExportHtml(lesson, {
                includeVocab,
                includeDialogue,
                includeGrammar,
                includeHomework,
                includeTeacherNotes,
                version,
                studentName: exportContext.studentName,
            });

            closeExportModal();
            openPrintWindow(html);
        });
    }
    // Backup buttons in Teacher Dashboard
    const btnExportBackup = document.getElementById("btnExportBackup");
    const btnImportBackup = document.getElementById("btnImportBackup");
    const backupFileInput = document.getElementById("backupFileInput");
    const backupFrequencySelect = document.getElementById("backupFrequencySelect");
    const backupLastInfo = document.getElementById("backupLastInfo");

    if (backupFrequencySelect) {
        backupFrequencySelect.value = backupSettings.frequency || "off";
        backupFrequencySelect.addEventListener("change", () => {
            backupSettings.frequency = backupFrequencySelect.value;
            saveBackupSettings();
            checkBackupReminder();
        });
    }

    if (backupLastInfo && backupSettings.lastBackupAt) {
        const last = new Date(backupSettings.lastBackupAt);
        backupLastInfo.textContent =
            "Last backup: " +
            last.toLocaleString() +
            "  |  Frequency: " +
            backupSettings.frequency;
    }

    if (btnExportBackup) {
        btnExportBackup.addEventListener("click", () => {
            handleExportBackup();
        });
    }

    if (btnImportBackup && backupFileInput) {
        btnImportBackup.addEventListener("click", () => {
            backupFileInput.click();
        });

        backupFileInput.addEventListener("change", () => {
            const file = backupFileInput.files[0];
            if (file) {
                handleImportBackupFile(file);
                backupFileInput.value = "";
            }
        });
    }

    // تشيك التذكير بعد ما نحمّل الإعدادات
    checkBackupReminder();

    // أزرار إغلاق المودال
    document
        .querySelectorAll("[data-close-export-modal], #exportCancelBtn")
        .forEach((el) => {
            el.addEventListener("click", () => closeExportModal());
        });

    // level & teacher buttons
    $("#btnSwitchProfile").addEventListener("click", () => {
        appState.currentStudentId = null;
        goToStudents();
    });
    $("#btnGoTeacherDashboard").addEventListener("click", () => {
        goToTeacherDashboard();
    });
    $("#btnBackToLevels").addEventListener("click", () => goToLevels());
    $("#btnBackToStudents").addEventListener("click", () => goToStudents());
    $("#btnTDBackLevels").addEventListener("click", () => goToLevels());
    $("#btnTDBackStudents").addEventListener("click", () => goToStudents());
    // ================= VOCAB MODAL CONTROLS =================
    const btnPrev = document.getElementById("vocabPrevBtn");
    const btnNext = document.getElementById("vocabNextBtn");
    const btnToggleExamples = document.getElementById("vocabToggleExamplesBtn");
    const btnToggleAr = document.getElementById("vocabToggleArBtn");
    const btnToggleEn = document.getElementById("vocabToggleEnBtn");
    const btnToggleArabeezy = document.getElementById("vocabToggleArabeezyBtn");
    function checkIfVocabDone() {
        if (!currentLesson || !currentLesson.vocabulary) return;

        const allVocab = [
            ...(currentLesson.vocabulary.core || []),
            ...(currentLesson.vocabulary.extra || []),
        ];

        const visited = ensureVocabVisitedSet();
        const allSeen = allVocab.every((v) => visited.has(v.id));

        if (allSeen) {
            // لما يمرّ على كل الكلمات مرة واحدة على الأقل
            markLessonSectionDone("vocabulary");
            updateLessonProgressUI();
        }
    }
    function updateLessonProgressUI() {
        // حدّث شريط التقدم
        updateProgressBar();

        // حدّث بادج قسم المفردات فقط
        updateSectionStatusBadge("vocabulary");
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;
            vocabModalState.index =
                (vocabModalState.index - 1 + vocabModalState.list.length) %
                vocabModalState.list.length;
            vocabModalState.showExamples = true; // نرجّع الأمثلة ظاهرة عند الانتقال
            renderVocabModalFromState();
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;

            vocabModalState.index =
                (vocabModalState.index + 1) % vocabModalState.list.length;

            renderVocabModalFromState();
        });
    }


    if (btnToggleExamples) {
        btnToggleExamples.addEventListener("click", () => {
            vocabModalState.showExamples = !vocabModalState.showExamples;
            renderVocabModalFromState();
        });
    }
    if (btnToggleAr) {
        btnToggleAr.addEventListener("click", () => {
            vocabModalState.showAr = !vocabModalState.showAr;
            renderVocabModalFromState();
        });
    }

    if (btnToggleEn) {
        btnToggleEn.addEventListener("click", () => {
            vocabModalState.showEn = !vocabModalState.showEn;
            renderVocabModalFromState();
        });
    }

    if (btnToggleArabeezy) {
        btnToggleArabeezy.addEventListener("click", () => {
            vocabModalState.showArabeezy = !vocabModalState.showArabeezy;
            renderVocabModalFromState();
        });
    }
    document.getElementById("btnLogin").addEventListener("click", openAuthModal);
    document
        .querySelectorAll("[data-close-auth]")
        .forEach((el) => el.addEventListener("click", closeAuthModal));

    document.getElementById("btnLogout").addEventListener("click", () => {
        auth.signOut();
    });

    document.getElementById("authForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("authEmail").value.trim();
        const password = document.getElementById("authPassword").value;
        const roleSelect = document.getElementById("authRole");
        const modal = document.getElementById("authModal");
        const errorBox = document.getElementById("authError");

        if (errorBox) errorBox.textContent = "";

        // الدور المقصود: لو جاي من زر Student / Teacher في الهيرو
        let role = roleSelect ? roleSelect.value : "student";
        if (modal && modal.dataset.forcedRole) {
            role = modal.dataset.forcedRole; // student أو teacher
        }

        try {
            let cred;

            if (role === "teacher") {
                // المدرّس: sign in ثم sign up لو مش موجود
                try {
                    cred = await auth.signInWithEmailAndPassword(email, password);
                } catch (err) {
                    if (err.code === "auth/user-not-found") {
                        // أول مرة → ننشئ حساب مدرس
                        cred = await auth.createUserWithEmailAndPassword(email, password);
                        await db.collection("users").doc(cred.user.uid).set({
                            email,
                            role: "teacher",
                            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        });
                    } else {
                        throw err;
                    }
                }
            } else {
                // الطالب: فقط تسجيل دخول بحساب جاهز
                try {
                    cred = await auth.signInWithEmailAndPassword(email, password);
                } catch (err) {
                    if (err.code === "auth/user-not-found") {
                        if (errorBox) {
                            errorBox.textContent =
                                "لا يوجد حساب بهذا الإيميل. تواصلي مع المدرّس ليعمل لك حساب.";
                        } else {
                            alert("لا يوجد حساب بهذا الإيميل. اسألي المدرس يعمل لك حساب.");
                        }
                        return;
                    }
                    throw err;
                }
            }

            // نقرأ بيانات المستخدم من Firestore
            const userDoc = await db.collection("users").doc(cred.user.uid).get();
            const data = userDoc.data() || {};

            const finalRole = data.role || role || "student";

            appState.currentUser = {
                uid: cred.user.uid,
                email: cred.user.email,
                role: finalRole,
            };

            // خزّن الدور محلياً عشان نرجع له بعد الـ refresh
            try {
                localStorage.setItem(LS_USER_ROLE_KEY, finalRole);
            } catch (e) {
                console.warn("Could not save role to localStorage", e);
            }

            closeAuthModal();
            updateAuthUI();


            // 🔁 توجيه حسب الدور
            if (finalRole === "teacher") {
                // نزامن بيانات الطلاب من السحابة ونفتح Teacher Dashboard
                await syncTeacherStudentsFromCloud();
                renderStudents();
                renderTeacherLessonList();
                goToTeacherDashboard();
            } else {
                // STUDENT:
                // نحمّل بيانات الطالب / تقدمه من السحابة (لو عندك هذه الدالة)
                await loadStudentProgressFromCloud?.();

                // نربط الطالب الحالي بـ currentStudentId
                appState.students = [
                    {
                        id: appState.currentUser.uid,
                        name: appState.currentUser.email,
                        level: "Beginner",
                        goals: [],
                        progress: {},
                        homeworkNotes: {},
                    },
                ];
                appState.currentStudentId = appState.currentUser.uid;

                // مباشرة نفتح صفحة الوحدات
                goToLevels();
            }
        } catch (err) {
            console.error("Auth error:", err);
            if (errorBox) {
                if (err.code === "auth/wrong-password" || err.code === "auth/invalid-login-credentials") {
                    errorBox.textContent = "كلمة السر غير صحيحة. حاولي مرة ثانية.";
                } else {
                    errorBox.textContent = "مشكلة في تسجيل الدخول: " + err.message;
                }
            } else {
                alert("Auth error: " + err.message);
            }
        }
    });





    // Add Unit form
    $("#addUnitForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const level = $("#addUnitLevel").value;
        const name = $("#addUnitName").value.trim();
        if (!name) return;
        if (!customUnits[level]) customUnits[level] = [];
        if (!customUnits[level].includes(name)) {
            customUnits[level].push(name);
            saveCustomUnits();
        }
        $("#addUnitName").value = "";
        renderLevels();
    });

    // Teacher dashboard actions
    $("#btnTDAddLesson").addEventListener("click", () => {
        createNewLessonTemplate();
    });

    // lesson tabs
    $all(".lesson-tab").forEach((btn) => {
        btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
    });

    // teacher mode toggle
    $("#teacherModeToggle").addEventListener("change", (e) => {
        appState.teacherMode = e.target.checked;
        updateTeacherTabsVisibility();
        setActiveTab(appState.currentTab);
    });

    // font size
    $("#btnFontSmaller").addEventListener("click", () => {
        appState.lessonFontSize = Math.max(0.85, appState.lessonFontSize - 0.05);
        applyFontSize();
        saveFontSize();
    });
    $("#btnFontLarger").addEventListener("click", () => {
        appState.lessonFontSize = Math.min(1.4, appState.lessonFontSize + 0.05);
        applyFontSize();
        saveFontSize();
    });

    // vocab modal closes
    $all("[data-close-modal]").forEach((el) =>
        el.addEventListener("click", () => closeVocabModal())
    );

    // initial
    renderStudents();
    renderTeacherLessonList();
    goToHome();


    const btnLoginTop = document.getElementById("btnLogin");
    if (btnLoginTop) {
        btnLoginTop.addEventListener("click", () => openAuthModal());
    }


    const createStudentForm = document.getElementById("createStudentForm");
    if (createStudentForm) {
        createStudentForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // تأكيد أن المستخدم الحالي مدرّس
            if (!appState.currentUser || appState.currentUser.role !== "teacher") {
                alert("Only teachers can create students.");
                return;
            }

            const emailEl = document.getElementById("newStudentEmail");
            const passwordEl = document.getElementById("newStudentPassword");
            const msg = document.getElementById("createStudentMsg");

            const email = emailEl.value.trim();
            const password = passwordEl.value.trim();

            if (msg) {
                msg.textContent = "";
                msg.style.color = "#111827";
            }

            if (!email || !password) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Please enter student email and a temporary password.";
                }
                return;
            }

            if (password.length < 6) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Password must be at least 6 characters.";
                }
                return;
            }

            const submitBtn = createStudentForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Creating...";
            }

            try {
                const secAuth = getSecondaryAuth();
                if (!secAuth) {
                    if (msg) {
                        msg.style.color = "#b91c1c";
                        msg.textContent = "Secondary Firebase app is not available.";
                    }
                    return;
                }

                // 🧑‍🎓 إنشاء المستخدم الجديد باستخدام الـ secondary auth
                const cred = await secAuth.createUserWithEmailAndPassword(email, password);
                const uid = cred.user.uid;

                // كتابة بيانات الطالب في Firestore
                await db.collection("users").doc(uid).set({
                    email,
                    role: "student",
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    createdBy: appState.currentUser.uid || null, // المدرّس الذي أنشأه (اختياري)
                });

                // تسجيل خروج من الـ secondary auth فقط (ما يمس جلسة المدرّس)
                await secAuth.signOut();

                // تنظيف الحقول
                emailEl.value = "";
                passwordEl.value = "";

                if (msg) {
                    msg.style.color = "#15803d";
                    msg.textContent =
                        "Student account created successfully. Share the email and password with the student.";
                }
            } catch (err) {
                console.error("Create student error:", err);
                if (msg) {
                    msg.style.color = "#b91c1c";
                    if (err.code === "auth/email-already-in-use") {
                        msg.textContent = "This email is already in use. Pick another email for the student.";
                    } else if (err.code === "auth/invalid-email") {
                        msg.textContent = "Invalid email format.";
                    } else {
                        msg.textContent = "Error: " + err.message;
                    }
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Create Student";
                }
            }
        });
    }
});


async function handleCreateStudentSubmit(e) {
    e.preventDefault();
    console.log("Create student submitted");
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        alert("Only teachers can create students.");
        return;
    }

    const emailEl = document.getElementById("newStudentEmail");
    const passwordEl = document.getElementById("newStudentPassword");
    const msg = document.getElementById("createStudentMsg");

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (msg) {
        msg.textContent = "";
        msg.style.color = "#111827";
    }

    if (!email || !password) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Please enter student email and a temporary password.";
        }
        return;
    }

    if (password.length < 6) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Password must be at least 6 characters.";
        }
        return;
    }

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Creating...";
    }

    try {
        const secAuth = getSecondaryAuth();
        if (!secAuth) {
            if (msg) {
                msg.style.color = "#b91c1c";
                msg.textContent = "Secondary Firebase app is not available.";
            }
            return;
        }

        const cred = await secAuth.createUserWithEmailAndPassword(email, password);
        const uid = cred.user.uid;

        await db.collection("users").doc(uid).set({
            email,
            role: "student",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: appState.currentUser.uid || null,
        });

        await secAuth.signOut();

        emailEl.value = "";
        passwordEl.value = "";

        if (msg) {
            msg.style.color = "#15803d";
            msg.textContent =
                "Student account created successfully. Share the email and password with the student.";
        }
    } catch (err) {
        console.error("Create student error:", err);
        if (msg) {
            msg.style.color = "#b91c1c";
            if (err.code === "auth/email-already-in-use") {
                msg.textContent = "This email is already in use. Pick another email.";
            } else if (err.code === "auth/invalid-email") {
                msg.textContent = "Invalid email format.";
            } else {
                msg.textContent = "Error: " + err.message;
            }
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Create Student";
        }
    }
}








