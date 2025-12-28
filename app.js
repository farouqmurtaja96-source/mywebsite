// ========================= CONSTANTS / KEYS =========================
const LS_STUDENTS_KEY = "pal_arabic_students";
const LS_LESSON_PREFIX = "pal_arabic_lesson_";
const LS_FONT_SIZE_KEY = "pal_arabic_font_size";
const LS_CUSTOM_UNITS_KEY = "pal_arabic_custom_units";
const LS_BACKUP_SETTINGS_KEY = "pal_arabic_backup_settings";
const LS_WHITEBOARD_PREFIX = "pal_arabic_whiteboard_";

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
                    hint:
                        "Very common, friendly greeting. You can use it any time of day with friends, classmates, or even teachers in a relaxed setting. Works for one person or a group (add يا جَمَاعَة).",
                    exampleAr: "مَرْحَبَا يَا جَمَاعَة، أَهْلًا فِيكُم فِي الدَّرْس.",
                    exampleEn: "Hi everyone, welcome to the lesson.",
                },
                {
                    id: "ahlan",
                    ar: "أَهْلًا",
                    en: "Hi / Hey",
                    hint:
                        "Short, warm reply to مَرْحَبَا or to call someone’s attention. Often used with a name: أَهْلًا يَا لِين.",
                    exampleAr: "مَرْحَبَا لِين. ـ أَهْلًا أُسْتَاذ.",
                    exampleEn: "Hi, Lynn. — Hey, teacher.",
                },
                {
                    id: "ahlan_wa_sahlan",
                    ar: "أَهْلًا وَسَهْلًا",
                    en: "Welcome",
                    hint:
                        "Very warm welcome for guests or new students. You can combine with فِيك / فِيكِي / فِيكُم to say ‘welcome to you’.",
                    exampleAr: "أَهْلًا وَسَهْلًا فِيكُم فِي كُورْس اللُّغَة الْعَرَبِيَّة.",
                    exampleEn: "Welcome to the Arabic language course.",
                },
                {
                    id: "salam",
                    ar: "السَّلَامُ عَلَيْكُمْ",
                    en: "Peace be upon you",
                    hint:
                        "More formal / religious greeting. Very common in Muslim contexts, in mosques, families, and respectful situations. Can be to one person or many.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ يَا شَبَاب.",
                    exampleEn: "Peace be upon you, guys.",
                },
                {
                    id: "salam_reply",
                    ar: "وَعَلَيْكُم السَّلَام",
                    en: "And peace be upon you",
                    hint:
                        "The standard reply to السَّلَامُ عَلَيْكُمْ. You must use it to answer that greeting politely.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ. ـ وَعَلَيْكُم السَّلَام.",
                    exampleEn: "Peace be upon you. — And peace be upon you.",
                },
                {
                    id: "sabah_el_kheir",
                    ar: "صَبَاح الْخِير",
                    en: "Good morning",
                    hint:
                        "Used in the morning. Typical reply is صَبَاح النُّور. Often used with teachers, coworkers, or in class.",
                    exampleAr: "صَبَاح الْخِير يَا أُسْتَاذ.",
                    exampleEn: "Good morning, teacher.",
                },
                {
                    id: "sabah_el_noor",
                    ar: "صَبَاح النُّور",
                    en: "Good morning (reply)",
                    hint:
                        "Standard reply to صَبَاح الْخِير. Literally ‘morning of light’.",
                    exampleAr: "صَبَاح الْخِير. ـ صَبَاح النُّور.",
                    exampleEn: "Good morning. — Good morning.",
                },
                {
                    id: "masa_el_kheir",
                    ar: "مَسَا الْخِير",
                    en: "Good evening",
                    hint:
                        "Used in the evening or at night. Typical reply: مَسَا النُّور. Can be formal or casual.",
                    exampleAr: "مَسَا الْخِير يَا جِيرَان.",
                    exampleEn: "Good evening, neighbors.",
                },
                {
                    id: "masa_el_noor",
                    ar: "مَسَا النُّور",
                    en: "Good evening (reply)",
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
                    hint:
                        "Base question ‘How are you?’. Forms: masc كِيف حَالَك؟ (kīf ḥalak), fem كِيف حَالِك؟ (kīf ḥalik), plural كِيف حَالْكُم؟ (kīf ḥalkum). Use after greeting to open small talk.",
                    exampleAr: "مَرْحَبَا، كِيف حَالَك الْيَوْم؟",
                    exampleEn: "Hi, how are you today?",
                },
                {
                    id: "mnee7",
                    ar: "مْنِيح",
                    en: "good / fine",
                    hint:
                        "Very common positive answer. Forms: masc مْنِيح, fem مْنِيحَة, plural مْنَاح. Often followed by شُكْرًا.",
                    exampleAr: "أَنَا مْنِيحَة، شُكْرًا. وَإِنْتَ كِيف حَالَك؟",
                    exampleEn: "I’m good, thanks. And how are you?",
                },
                {
                    id: "maashi",
                    ar: "مَاشِي",
                    en: "okay / going along",
                    hint:
                        "Neutral answer, literally ‘going’. Means ‘I’m okay / so-so’. Used when things are not perfect but fine.",
                    exampleAr: "الصِّدْقِي مَاشِي الْحَال، مَوْ مُمْتَاز بَسّ مِش سَيِّئ.",
                    exampleEn: "Honestly, things are okay, not great but not bad.",
                },
                {
                    id: "ta3ban",
                    ar: "تَعْبَان",
                    en: "tired / exhausted",
                    hint:
                        "Feeling word. Forms: masc تَعْبَان, fem تَعْبَانَة. Can be physical or mental tiredness.",
                    exampleAr: "الْيَوْم أَنَا تَعْبَان شْوَيّ مِن الدِّرَاسَة.",
                    exampleEn: "Today I’m a bit tired from studying.",
                },
                {
                    id: "mabsut",
                    ar: "مَبْسُوط",
                    en: "happy / pleased",
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
                    hint:
                        "Basic identity question. Forms: masc شُو اِسْمَك؟ (shu ismak), fem شُو اِسْمِك؟ (shu ismik). Use it right after greeting.",
                    exampleAr: "مَرْحَبَا، شُو اِسْمَك إِنْتَ؟",
                    exampleEn: "Hi, what’s your name?",
                },
                {
                    id: "ana_ismi",
                    ar: "أَنَا اِسْمِي...",
                    en: "My name is…",
                    hint:
                        "Standard way to introduce your name. You can add your country or job after.",
                    exampleAr: "أَنَا اِسْمِي رُوبَا، أَنَا طَالْبَة عَرَبِي.",
                    exampleEn: "My name is Roba, I’m an Arabic student.",
                },
                {
                    id: "min_wen",
                    ar: "مِنْ وِين؟",
                    en: "Where are you from?",
                    hint:
                        "Origin question. With pronoun: مِنْ وِين إِنْتَ؟ / مِنْ وِين إِنْتِ؟. Used for country or city.",
                    exampleAr: "مِنْ وِين إِنْتِ أَصْلًا؟",
                    exampleEn: "Where are you originally from?",
                },
                {
                    id: "ana_min",
                    ar: "أَنَا مِنْ...",
                    en: "I am from…",
                    hint:
                        "Use with country or city: أَنَا مِنْ غَزَّة، أَنَا مِنْ أَلْمَانْيَا….",
                    exampleAr: "أَنَا مِنْ هُولَنْدَا، بَسّ بِحِبّ فِلَسْطِين.",
                    exampleEn: "I’m from the Netherlands, but I love Palestine.",
                },
                {
                    id: "wen_saken",
                    ar: "وِين سَاكِن؟",
                    en: "Where do you live?",
                    hint:
                        "Talking about where you live now. Forms: masc وِين سَاكِن؟, fem وِين سَاكْنَة؟, plural وِين سَاكْنِين؟.",
                    exampleAr: "هَلَّقْ إِنْتِ وِين سَاكْنَة؟",
                    exampleEn: "Where do you live now?",
                },
                {
                    id: "ana_saken_fi",
                    ar: "أَنَا سَاكِن فِي...",
                    en: "I live in…",
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
                    hint:
                        "Masc طَالِب, fem طَالْبَة. Used for school or university students.",
                    exampleAr: "أَنَا طَالْبَة عَرَبِي فِي الْجَامْعَة.",
                    exampleEn: "I am an Arabic student at the university.",
                },
                {
                    id: "ustaz",
                    ar: "أُسْتَاذ / أُسْتَاذَة",
                    en: "teacher",
                    hint:
                        "Masc أُسْتَاذ, fem أُسْتَاذَة. You can call your teacher ‘أُسْتَاذ + name’.",
                    exampleAr: "مَرْحَبَا أُسْتَاذ، كِيف حَالَك الْيَوْم؟",
                    exampleEn: "Hi teacher, how are you today?",
                },
                {
                    id: "dars",
                    ar: "دَرْس",
                    en: "lesson / class",
                    hint:
                        "Used for a single lesson: دَرْس الْيَوْم = today’s lesson.",
                    exampleAr: "هَادَا أَوَّل دَرْس إِلْنَا فِي اللُّغَة الْعَرَبِيَّة.",
                    exampleEn: "This is our first lesson in Arabic.",
                },
                {
                    id: "lugha_arabi",
                    ar: "اللُّغَة الْعَرَبِيَّة",
                    en: "Arabic (language)",
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
                    hint:
                        "Very common thanks. Stronger: شُكْرًا كْتِير = thank you very much.",
                    exampleAr: "شُكْرًا كْتِير عَلَى الدَّرْس الْيَوْم.",
                    exampleEn: "Thank you very much for the lesson today.",
                },
                {
                    id: "afwan",
                    ar: "عَفْوًا",
                    en: "you’re welcome",
                    hint:
                        "Standard reply to شُكْرًا. Can also lightly mean ‘excuse me’.",
                    exampleAr: "شُكْرًا أُسْتَاذ. ـ عَفْوًا، تِشَرَّفْنَا.",
                    exampleEn: "Thank you, teacher. — You’re welcome, it was a pleasure.",
                },
                {
                    id: "law_samaHt",
                    ar: "لَوْ سَمَحْت",
                    en: "please / excuse me",
                    hint:
                        "Polite way to ask for something: ‘please’. Fem لَوْ سَمَحْتِي, plural لَوْ سَمَحْتُوا.",
                    exampleAr: "لَوْ سَمَحْت، مُمْكِن تِحْكِي بُطِّيء شْوَيّ؟",
                    exampleEn: "Excuse me, can you speak a bit slowly?",
                },
                {
                    id: "ana_mesh_fahem",
                    ar: "أَنَا مِش فَاهِم",
                    en: "I don’t understand",
                    hint:
                        "Masc أَنَا مِش فَاهِم, fem أَنَا مِش فَاهْمَة. Very useful in class and real life!",
                    exampleAr: "أَنَا مِش فَاهْمَة الْكَلِمَة، مُمْكِن تِشْرَح كَمَان مَرَّة؟",
                    exampleEn: "I don’t understand the word, can you explain again?",
                },
                {
                    id: "ma3_salaameh",
                    ar: "مَع السَّلَامَة",
                    en: "goodbye",
                    hint:
                        "Polite goodbye. Often used at the end of a call, visit, or lesson.",
                    exampleAr: "مَع السَّلَامَة، بَشُوفْك بُكْرَا.",
                    exampleEn: "Goodbye, I’ll see you tomorrow.",
                },
                {
                    id: "alla_ma3ak",
                    ar: "الله مَعَك",
                    en: "God be with you",
                    hint:
                        "Common closing phrase. Fem: الله مَعِك, plural: الله مَعْكُم.",
                    exampleAr: "مَع السَّلَامَة، الله مَعِك.",
                    exampleEn: "Goodbye, God be with you.",
                },
                {
                    id: "yalla",
                    ar: "يَلَّا",
                    en: "come on / let’s go",
                    hint:
                        "Very frequent word to start or finish something: ‘okay, let’s…’.",
                    exampleAr: "يَلَّا، نِبْدَا الدَّرْس الْأَوَّل.",
                    exampleEn: "Come on, let’s start the first lesson.",
                },
            ],

            extra: [
                {
                    id: "ahlan_fiik",
                    ar: "أَهْلًا فِيك",
                    en: "welcome (to you)",
                    hint:
                        "Fem: أَهْلًا فِيكِي, plural: أَهْلًا فِيكُم. Reply when someone says ‘thank you’ for a welcome or invitation.",
                    exampleAr: "مَرْحَبَا فِي غَزَّة. ـ أَهْلًا فِيك فِي غَزَّة!",
                    exampleEn: "Welcome to Gaza. — Welcome to you in Gaza!",
                },
                {
                    id: "enbseT",
                    ar: "اِنْبِسِط",
                    en: "enjoy / have fun",
                    hint:
                        "Fem: اِنْبِسِطِي, plural: اِنْبِسِطُوا. Often used at the end of a lesson or meeting.",
                    exampleAr: "مَع السَّلَامَة، اِنْبِسِطُوا بِيَوْمْكُم الْيَوْم.",
                    exampleEn: "Goodbye, enjoy your day today.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (multi-scene, rich)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – First day in class
                {
                    speaker: "T",
                    ar: "السَّلَامُ عَلَيْكُمْ يَا جَمَاعَة، أَهْلًا وَسَهْلًا فِيكُم فِي أَوَّل دَرْس عَرَبِي.",
                    en: "Peace be upon you, everyone, welcome to your first Arabic lesson.",
                },
                {
                    speaker: "S1",
                    ar: "وَعَلَيْكُم السَّلَام أُسْتَاذ، صَبَاح الْخِير.",
                    en: "And peace be upon you, teacher, good morning.",
                },
                {
                    speaker: "T",
                    ar: "صَبَاح النُّور، يَلَّا نِبْدَا تَعَارُف. مَرْحَبَا، شُو اِسْمَك؟",
                    en: "Good morning, let’s start with introductions. Hi, what’s your name?",
                },
                {
                    speaker: "S1",
                    ar: "مَرْحَبَا، أَنَا اِسْمِي لِين، أَنَا طَالْبَة جْدِيدَة.",
                    en: "Hi, my name is Lynn, I’m a new student.",
                },
                {
                    speaker: "T",
                    ar: "فُرْصَة سَعِيدَة يَا لِين، أَنَا أُسْتَاذ أَحْمَد.",
                    en: "Nice to meet you, Lynn, I’m teacher Ahmad.",
                },

                // Scene 2 – How are you + feelings
                {
                    speaker: "T",
                    ar: "كِيف حَالِك الْيَوْم؟ مْنِيحَة، مَاشِي، وَلَّا تَعْبَانَة؟",
                    en: "How are you today? Good, okay, or tired?",
                },
                {
                    speaker: "S1",
                    ar: "الصِّدْقِي أَنَا مَبْسُوطَة، بَسّ شْوَيّ تَعْبَانَة مِن السَّفَر.",
                    en: "Honestly, I’m happy, but a bit tired from the trip.",
                },
                {
                    speaker: "T",
                    ar: "مُمْتَاز، هَادَا إِحْسَاس طَبِيعِي فِي أَوَّل يَوْم.",
                    en: "Great, that’s a normal feeling on the first day.",
                },

                // Scene 3 – Origin and where you live
                {
                    speaker: "T",
                    ar: "مِنْ وِين إِنْتِ أَصْلًا؟",
                    en: "Where are you originally from?",
                },
                {
                    speaker: "S1",
                    ar: "أَنَا مِنْ كَنَدَا، بَسّ هَلَّقْ أَنَا سَاكْنَة فِي رَام اللّٰه.",
                    en: "I’m from Canada, but now I live in Ramallah.",
                },
                {
                    speaker: "T",
                    ar: "حِلُو كْتِير. أَكِيد كَان تَعْبَان السَّفَر.",
                    en: "Very nice. I’m sure the trip was tiring.",
                },

                // Scene 4 – Another student joins
                {
                    speaker: "S2",
                    ar: "مَرْحَبَا جَمِيعًا! آسِف إِنِّي تَأَخَّرْت شْوَيّ.",
                    en: "Hi everyone! Sorry I’m a little late.",
                },
                {
                    speaker: "T",
                    ar: "مِش مُشْكِلَة، تْفَضَّل إِقْعُد. شُو اِسْمَك؟",
                    en: "No problem, please sit. What’s your name?",
                },
                {
                    speaker: "S2",
                    ar: "أَنَا اِسْمِي مَارْك، أَنَا طَالِب عَرَبِي بَرْضُه.",
                    en: "My name is Mark, I’m also an Arabic student.",
                },
                {
                    speaker: "T",
                    ar: "مِنْ وِين إِنْتَ يَا مَارْك؟",
                    en: "Where are you from, Mark?",
                },
                {
                    speaker: "S2",
                    ar: "أَنَا مِنْ أَمْرِيكَا، بَسّ هَلَّقْ أَنَا سَاكِن فِي غَزَّة شَهْر.",
                    en: "I’m from the United States, but now I’m living in Gaza for a month.",
                },

                // Scene 5 – Small talk between students
                {
                    speaker: "S1",
                    ar: "مَرْحَبَا مَارْك، أَنَا لِين. كِيف حَالَك فِي غَزَّة؟ مْنِيح وَلَّا مَاشِي؟",
                    en: "Hi Mark, I’m Lynn. How are you in Gaza? Good or just okay?",
                },
                {
                    speaker: "S2",
                    ar: "بِصِرَاحَة أَنَا مَبْسُوط كْتِير، النَّاس طَيِّبِين، بَسّ أَنَا مِش فَاهِم كُلّ الْكَلِمَات بَعْد.",
                    en: "Honestly, I’m very happy, people are kind, but I don’t understand all the words yet.",
                },
                {
                    speaker: "S1",
                    ar: "وَلَا يَهَمَّك، أَكِيد مَع الدَّرْس رَحْ تِفْهَم أَكْثَر.",
                    en: "Don’t worry, with the lessons you will definitely understand more.",
                },

                // Scene 6 – Closing the lesson
                {
                    speaker: "T",
                    ar: "طَيِّب يَا جَمَاعَة، يَلَّا، هَادَا كَان أَوَّل تَعَارُف بَيْنَا.",
                    en: "Alright everyone, this was our first introduction together.",
                },
                {
                    speaker: "T",
                    ar: "مَع السَّلَامَة لْهَالْيَوْم، مَا تِنْسُوا تِتْدَرَّبُوا عَلَى الْحِوَار.",
                    en: "Goodbye for today, don’t forget to practice the dialogue.",
                },
                {
                    speaker: "S1",
                    ar: "شُكْرًا أُسْتَاذ، مَع السَّلَامَة، الله مَعَك.",
                    en: "Thank you, teacher, goodbye, God be with you.",
                },
                {
                    speaker: "S2",
                    ar: "مَع السَّلَامَة، اِنْبِسِطُوا بِيَوْمْكُم!",
                    en: "Goodbye, enjoy your day!",
                },
            ],
        },

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


    // DEFAULT LESSON DATA DEFINITION ENDS HERE
    // ===============================
    // BEGINNER – UNIT 2: DAILY ROUTINE – LESSON 1
    // ===============================
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
                // ===== TIME OF DAY =====
                {
                    id: "es_sobeh",
                    ar: "الصُّبِح",
                    en: "the morning",
                    hint:
                        "Used for early part of the day. You can say: بَصْحَى الصُّبِح = I wake up in the morning.",
                    exampleAr: "كُلّ يَوْم الصُّبِح بَصْحَى السَّاعَة سَبْعَة.",
                    exampleEn: "Every day in the morning I wake up at seven o’clock.",
                },
                {
                    id: "ba3d_eDDohr",
                    ar: "بَعْد الضُّهُر",
                    en: "afternoon",
                    hint:
                        "Literally ‘after noon’. Common for early afternoon time.",
                    exampleAr: "بَعْد الضُّهُر بِرُوح عَلَى الْجَامْعَة.",
                    exampleEn: "In the afternoon I go to university.",
                },
                {
                    id: "bil_3asheh",
                    ar: "بِالْعَشِي",
                    en: "evening",
                    hint:
                        "Spoken word for evening time. Similar to ‘at night’ but not too late.",
                    exampleAr: "بِالْعَشِي بَقْعُد مَع الْعِيلَة.",
                    exampleEn: "In the evening I sit with my family.",
                },
                {
                    id: "bil_leil",
                    ar: "بِاللِّيل",
                    en: "at night",
                    hint:
                        "Night time, usually later than الْعَشِي. Used with verbs like بَنَام.",
                    exampleAr: "بِاللِّيل بَنَام مِتْأَخِّر شْوَيّ.",
                    exampleEn: "At night I sleep a bit late.",
                },
                {
                    id: "alyoom",
                    ar: "الْيَوْم",
                    en: "today",
                    hint:
                        "Basic time word. Often used with routine to contrast with usual: الْيَوْم مَو زَيّ كُلّ يَوْم.",
                    exampleAr: "الْيَوْم عِنْدِي دَرْس عَرَبِي.",
                    exampleEn: "Today I have an Arabic lesson.",
                },
                {
                    id: "kull_yoom",
                    ar: "كُلّ يَوْم",
                    en: "every day",
                    hint:
                        "Adverb of frequency. Put it at the beginning or end of the sentence.",
                    exampleAr: "كُلّ يَوْم بَشْرَب قَهْوَة الصُّبِح.",
                    exampleEn: "Every day I drink coffee in the morning.",
                },
                {
                    id: "3aadatan",
                    ar: "عَادَةً",
                    en: "usually",
                    hint:
                        "Nice adverb to make sentences more natural. Often comes at the beginning: عَادَةً بِسْتَيْقِظ مَبَكِّر.",
                    exampleAr: "عَادَةً بَصْحَى بَكِّير، بَسّ الْيَوْم تَأَخَّرِت.",
                    exampleEn: "Usually I wake up early, but today I was late.",
                },
                {
                    id: "sa3a",
                    ar: "السَّاعَة",
                    en: "o’clock / the hour",
                    hint:
                        "To say the time, you say: السَّاعَة سَبْعَة = seven o’clock; السَّاعَة تَمْنْيَة = eight o’clock.",
                    exampleAr: "دَرْس الْعَرَبِي بِيِبْدَا السَّاعَة تِسْعَة.",
                    exampleEn: "The Arabic lesson starts at nine o’clock.",
                },
                {
                    id: "meta",
                    ar: "إِمْتَى؟",
                    en: "when?",
                    hint:
                        "Question word for time. Often at the beginning: إِمْتَى بْتَصْحَى؟",
                    exampleAr: "إِمْتَى بْتِرْجَع عَلَى الْبَيْت؟",
                    exampleEn: "When do you come back home?",
                },

                // ===== CORE ROUTINE VERBS =====
                {
                    id: "bsa7a",
                    ar: "بَصْحَى",
                    en: "I wake up",
                    hint:
                        "Present tense with b- prefix. Root: صَحَى = to wake up. For ‘you (m) wake up’: بْتِصْحَى، for ‘she’: بْتِصْحَى (context).",
                    exampleAr: "عَادَةً بَصْحَى الصُّبِح السَّاعَة سِتَّة وَنُصّ.",
                    exampleEn: "Usually I wake up in the morning at six thirty.",
                },
                {
                    id: "bgasil_wajhi",
                    ar: "بَغْسِل وَجْهِي",
                    en: "I wash my face",
                    hint:
                        "Literally: ‘I wash my face’. Very common part of morning routine.",
                    exampleAr: "أَوَّل مَا بَصْحَى بَغْسِل وَجْهِي.",
                    exampleEn: "The first thing I do when I wake up is wash my face.",
                },
                {
                    id: "bat7ammam",
                    ar: "بَتْحَمَّم",
                    en: "I take a shower",
                    hint:
                        "From تَحَمَّم = to shower. can be morning or evening.",
                    exampleAr: "بَتْحَمَّم بَعْد مَا بَرْجَع مِن الشُّغُل.",
                    exampleEn: "I take a shower after I come back from work.",
                },
                {
                    id: "bfTir",
                    ar: "بِفْطَر",
                    en: "I have breakfast",
                    hint:
                        "From فُطُور = breakfast. For lunch: غَدَا، for dinner: عَشَا.",
                    exampleAr: "بِفْطَر خُبِز وَجُبْنَة وَشَاي الصُّبِح.",
                    exampleEn: "I have bread, cheese, and tea for breakfast in the morning.",
                },
                {
                    id: "brooH",
                    ar: "بَرُوح",
                    en: "I go",
                    hint:
                        "High-frequency verb. You add the place after it: بَرُوح عَلَى الشُّغُل / عَلَى الْجَامْعَة.",
                    exampleAr: "بَرُوح عَلَى الْجَامْعَة بَعْد الضُّهُر.",
                    exampleEn: "I go to university in the afternoon.",
                },
                {
                    id: "brja3",
                    ar: "بَرْجَع",
                    en: "I come back / I return",
                    hint:
                        "Use it with مِن and عَلَى: بَرْجَع مِن الشُّغُل عَلَى الْبَيْت.",
                    exampleAr: "بَرْجَع عَلَى الْبَيْت السَّاعَة خَمْسَة.",
                    exampleEn: "I come back home at five o’clock.",
                },
                {
                    id: "bakol",
                    ar: "بَاكُل",
                    en: "I eat",
                    hint:
                        "From أَكَل = to eat. You can add the meal: بَاكُل غَدَا / عَشَا.",
                    exampleAr: "بَاكُل الْغَدَا مَع أَهْلِي كُلّ يَوْم.",
                    exampleEn: "I eat lunch with my family every day.",
                },
                {
                    id: "bashrab",
                    ar: "بَشْرَب",
                    en: "I drink",
                    hint:
                        "From شِرْب = drinking. High-frequency. بَشْرَب قَهْوَة / شَاي / مَيّ.",
                    exampleAr: "بَشْرَب قَهْوَة وَأَنَا بَتْفَرَّج عَلَى الْخَبَر.",
                    exampleEn: "I drink coffee while I watch the news.",
                },
                {
                    id: "badros",
                    ar: "بَدْرُس",
                    en: "I study",
                    hint:
                        "You saw this verb before, now it’s central in routine. بَدْرُس عَرَبِي / هَنْدَسَة / طِبّ.",
                    exampleAr: "بَدْرُس عَرَبِي سَاعَتَيْن كُلّ يَوْم.",
                    exampleEn: "I study Arabic for two hours every day.",
                },
                {
                    id: "bashteghil",
                    ar: "بَشْتِغِل",
                    en: "I work",
                    hint:
                        "Common spoken verb for ‘work’. You can add place or job: بَشْتِغِل أُونْلَايْن / فِي مَكْتَب.",
                    exampleAr: "بَشْتِغِل أُونْلَايْن بَعْد الضُّهُر.",
                    exampleEn: "I work online in the afternoon.",
                },
                {
                    id: "bal3ab",
                    ar: "بَلْعَب",
                    en: "I play",
                    hint:
                        "For sports or games. بَلْعَب كُرَة قَدَم / بَلْعَب بْلَيْ سْتَيْشِن.",
                    exampleAr: "بَلْعَب رِيَاضَة مَرَّتَيْن بِالْأُسْبُوع.",
                    exampleEn: "I do sports twice a week.",
                },
                {
                    id: "batfarraj",
                    ar: "بَتْفَرَّج",
                    en: "I watch",
                    hint:
                        "Literally ‘I watch / I look (at)’. Often with عَلَى: بَتْفَرَّج عَلَى أَفْلَام / مُسَلْسَلَات.",
                    exampleAr: "بَتْفَرَّج عَلَى مُسَلْسَل فِلَسْطِينِي بِاللِّيل.",
                    exampleEn: "I watch a Palestinian series at night.",
                },
                {
                    id: "baqra",
                    ar: "بَقْرَا",
                    en: "I read",
                    hint:
                        "From قَرَأ = to read. يمكن كتاب، مَقَال، كُرْآن…",
                    exampleAr: "بَقْرَا كِتَاب عَرَبِي نُصّ سَاعَة كُلّ يَوْم.",
                    exampleEn: "I read an Arabic book for half an hour every day.",
                },
                {
                    id: "bnam",
                    ar: "بَنَام",
                    en: "I sleep",
                    hint:
                        "From نَام = sleep. You can add time: بَنَام بَدْرِي / مِتْأَخِّر.",
                    exampleAr: "بَنَام مِتْأَخِّر لَمَّا عِنْدِي وَاجِب كْتِير.",
                    exampleEn: "I sleep late when I have a lot of homework.",
                },

                // ===== KEY PLACES =====
                {
                    id: "bait",
                    ar: "بَيْت",
                    en: "house / home",
                    hint:
                        "بَيْت = house, but often used as ‘home’. الْبَيْت = the house.",
                    exampleAr: "بِرْجَع عَلَى الْبَيْت بَعْد الضُّهُر.",
                    exampleEn: "I come back home in the afternoon.",
                },
                {
                    id: "madraseh",
                    ar: "مَدْرَسَة",
                    en: "school",
                    hint:
                        "For kids or high school. ‘my school’ = مَدْرَسْتِي.",
                    exampleAr: "أَخُوي الصِّغِير بِرُوح عَلَى الْمَدْرَسَة الصُّبِح.",
                    exampleEn: "My younger brother goes to school in the morning.",
                },
                {
                    id: "jam3a",
                    ar: "جَامْعَة",
                    en: "university",
                    hint:
                        "‘my university’ = جَامْعْتِي. Can be combined with an adjective: جَامْعَة كْبِيرَة.",
                    exampleAr: "أَنَا بَرُوح عَلَى الْجَامْعَة بَعْد الضُّهُر.",
                    exampleEn: "I go to university in the afternoon.",
                },
                {
                    id: "shoghol",
                    ar: "شُغُل",
                    en: "work (job)",
                    hint:
                        "Can mean ‘work’ in general or ‘job’. بَرُوح عَلَى الشُّغُل / عِنْدِي شُغُل.",
                    exampleAr: "بَرُوح عَلَى الشُّغُل كُلّ يَوْم مَا عَدَا الْجُمُعَة.",
                    exampleEn: "I go to work every day except Friday.",
                },
            ],

            extra: [
                {
                    id: "marra_marratein",
                    ar: "مَرَّة / مَرَّتَيْن",
                    en: "once / twice",
                    hint:
                        "Useful with routine: مَرَّة بِالْيَوْم، مَرَّتَيْن بِالْأُسْبُوع.",
                    exampleAr: "بَلْعَب رِيَاضَة مَرَّتَيْن بِالْأُسْبُوع.",
                    exampleEn: "I do sports twice a week.",
                },
                {
                    id: "ba3deen",
                    ar: "بَعْدِين",
                    en: "then / after that",
                    hint:
                        "Connects actions in a story: أَوَّل إِشِي… بَعْدِين…",
                    exampleAr: "بَصْحَى، بِفْطَر، بَعْدِين بَرُوح عَلَى الشُّغُل.",
                    exampleEn: "I wake up, have breakfast, then I go to work.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (multi-scene day in lives)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Morning routine (Roba)
                {
                    speaker: "Teacher",
                    ar: "الْيَوْم بَدْنَا نِسْمَع عَنْ يَوْم كَامِل فِي حَيَاة كُلّ وَاحَد. رُوبَا، تْقَدْرِي تِبْلِشِي؟",
                    en: "Today we want to hear about a full day in each person’s life. Roba, can you start?",
                },
                {
                    speaker: "Roba",
                    ar: "أَكِيد. عَادَةً بَصْحَى الصُّبِح السَّاعَة سَبْعَة إِلَّا رُبِعْ.",
                    en: "Sure. Usually I wake up in the morning at a quarter to seven.",
                },
                {
                    speaker: "Roba",
                    ar: "أَوَّل إِشِي بَغْسِل وَجْهِي وَبَشْرَب مَيّ، بَعْدِين بِفْطَر مَع الْعِيلَة.",
                    en: "First I wash my face and drink water, then I have breakfast with my family.",
                },
                {
                    speaker: "Teacher",
                    ar: "شُو بِتْفْطَرِي عَادَةً؟",
                    en: "What do you usually have for breakfast?",
                },
                {
                    speaker: "Roba",
                    ar: "بِفْطَر خُبِز، لَبَن، وَشَاي، أَحْيَانًا قَهْوَة.",
                    en: "I have bread, yogurt, and tea, sometimes coffee.",
                },

                // Scene 2 – Going to university / work
                {
                    speaker: "Teacher",
                    ar: "وَبَعْد الْفُطُور، شُو بِتِسَوِّي؟",
                    en: "And after breakfast, what do you do?",
                },
                {
                    speaker: "Roba",
                    ar: "بَعْد الضُّهُر بَرُوح عَلَى الْجَامْعَة، عِنْدِي مُحَاضَرَات.",
                    en: "In the afternoon I go to university, I have lectures.",
                },
                {
                    speaker: "Roba",
                    ar: "أَحْيَانًا بَشْتِغِل أُونْلَايْن شْوَيّ قَبْل مَا أَرُوح.",
                    en: "Sometimes I work online a bit before I go.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا مُخْتِلِف شْوَيّ. أَنَا بَصْحَى مِتْأَخِّر، السَّاعَة تَمْنْيَة أَو تِسْعَة.",
                    en: "I’m a bit different. I wake up late, at eight or nine o’clock.",
                },
                {
                    speaker: "Mark",
                    ar: "بَتْحَمَّم، بِفْطَر سْرِيع، وَبَرُوح عَلَى الشُّغُل.",
                    en: "I take a shower, have a quick breakfast, and go to work.",
                },

                // Scene 3 – Afternoon & study time
                {
                    speaker: "Teacher",
                    ar: "إِمْتَى بَدْرُسُوا عَرَبِي؟ الصُّبِح، بَعْد الضُّهُر، وَلَّا بِاللِّيل؟",
                    en: "When do you study Arabic? In the morning, afternoon, or at night?",
                },
                {
                    speaker: "Roba",
                    ar: "أَنَا بَدْرُس عَرَبِي بَعْد الضُّهُر، قَبْل مَا أَرْوِح عَلَى الْجَامْعَة.",
                    en: "I study Arabic in the afternoon, before I go to university.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَدْرُس عَرَبِي بِاللِّيل بَعْد الشُّغُل، لَمَّا يَكُون الْبَيْت هَادِي.",
                    en: "I study Arabic at night after work, when the house is quiet.",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بَدْرُس عَرَبِي الصُّبِح بَكِّير، بَعْد مَا بَشْرَب قَهْوَة.",
                    en: "I study Arabic early in the morning, after I drink coffee.",
                },

                // Scene 4 – Evening: rest & hobbies
                {
                    speaker: "Teacher",
                    ar: "طَيِّب، بِالْعَشِي شُو بِتْسَوُّوا؟ تِلْفِزْيُون، رِيَاضَة، نَوْم؟",
                    en: "Okay, what do you do in the evening? TV, sports, sleep?",
                },
                {
                    speaker: "Yara",
                    ar: "بِالْعَشِي بَقْعُد مَع الْعِيلَة، بَاكُل عَشَا، بَعْدِين بَتْفَرَّج عَلَى مُسَلْسَل.",
                    en: "In the evening I sit with my family, eat dinner, then watch a series.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا أَحْيَانًا بَلْعَب رِيَاضَة مَع أَصْحَابِي، أَحْيَانًا بَقْرَا كِتَاب.",
                    en: "Sometimes I do sports with my friends, sometimes I read a book.",
                },
                {
                    speaker: "Roba",
                    ar: "لَمَّا يَكُون عِنْدِي وَقْت، بَتْفَرَّج عَلَى فِيدْيُوهَات عَرَبِي عَلَى يُوتْيُوب.",
                    en: "When I have time, I watch Arabic videos on YouTube.",
                },

                // Scene 5 – Bedtime
                {
                    speaker: "Teacher",
                    ar: "إِمْتَى عَادَةً بَتْنَامُوا؟ السَّاعَة كَم؟",
                    en: "When do you usually sleep? What time?",
                },
                {
                    speaker: "Roba",
                    ar: "عَادَةً بَنَام السَّاعَة حْدَاش بَاللِّيل.",
                    en: "Usually I sleep at eleven at night.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا مِتْأَخِّر شْوَيّ، مُمْكِن السَّاعَة وَاحْدَة أَو اِثْنَيْن.",
                    en: "I’m a bit late, maybe at one or two o’clock.",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بَحَاوِل أَنَام بَدْرِي، حَوَالِي السَّاعَة عَشَرَة.",
                    en: "I try to sleep early, around ten o’clock.",
                },

                // Scene 6 – Wrap-up
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز، هَلَّقْ كُلّ وَاحَد مِنَّكُم عِنْدُه قِصَّة يَوْم كَامِل بِاللَّهْجَة الْفِلَسْطِينِيَّة.",
                    en: "Excellent, now each of you has a full day story in Palestinian Arabic.",
                },
                {
                    speaker: "Teacher",
                    ar: "لِلْوَاجِب، كْتُبُوا يَوْمكُمْ بِالتَّفْصِيل: مِن الصُّبِح لَحَدّ مَا تِنَامُوا.",
                    en: "For homework, write your day in detail: from morning until you sleep.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا أُسْتَاذ، الْوَحْدَة كْتِير مُفِيدَة لِلْحَيَاة الْحَقِيقِيَّة.",
                    en: "Thank you, teacher, this unit is very useful for real life.",
                },
                {
                    speaker: "Mark",
                    ar: "مَع السَّلَامَة جَمِيعًا، يَلَّا، كُلّ وَاحَد عَلَى رُوتِينُه.",
                    en: "Goodbye everyone, yalla, each one back to their routine.",
                },
            ],
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
                "Role-play 1: Student A asks Student B about their morning. Use questions like: ‘When do you wake up?’, ‘What do you eat for breakfast?’, ‘When do you go to work or university?’. Student B answers using «بَصْحَى»، «بِفْطَر»، «بَرُوح». Then switch roles.",
                "Role-play 2: Student describes a ‘perfect day’ in Palestine: wake up time, breakfast, going out, meeting friends, evening activities. Try to use time words (الصُّبِح، بَعْد الضُّهُر، بِالْعَشِي، بِاللِّيل) and at least five routine verbs.",
                "Role-play 3: Two friends compare their routines: one ‘early bird’ and one ‘night owl’. Each one explains what time they wake up, study, exercise, watch something, and sleep. They react to each other with surprise or comments in Arabic.",
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

    // ===============================
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
                    hint:
                        "فُطُور = breakfast. At home you can say: فُطُور الْبَيْت. Verb from same root: بِفْطَر = I have breakfast.",
                    exampleAr: "فُطُورِي عَادَةً بَسِيط: خُبِز، لَبَن، وَشَاي.",
                    exampleEn: "My breakfast is usually simple: bread, yogurt, and tea.",
                },
                {
                    id: "ghada",
                    ar: "غَدَا",
                    en: "lunch",
                    hint:
                        "Main meal in many Palestinian families. Verb: بِتْغَدَّى = I have lunch.",
                    exampleAr: "أَهَمّ أَكْلَة فِي الْبَيْت هِيَّ الْغَدَا.",
                    exampleEn: "The most important meal at home is lunch.",
                },
                {
                    id: "3asha",
                    ar: "عَشَا",
                    en: "dinner",
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
                    hint:
                        "Very common. Singular as a mass: خُبِز. You can also hear: رُغِيف خُبِز = a loaf of bread.",
                    exampleAr: "مَا فِيش فُطُور بِلَا خُبِز فِي كْتِير بُيُوت.",
                    exampleEn: "In many homes there is no breakfast without bread.",
                },
                {
                    id: "jibneh",
                    ar: "جُبْنَة",
                    en: "cheese",
                    hint:
                        "جُبْنَة = cheese (sg/mass). Plural جُبَن ممكن لعدة أنواع. Used a lot at breakfast.",
                    exampleAr: "بِحِبّ جُبْنَة بَيْضَا مَع خُبِز سُخْن.",
                    exampleEn: "I like white cheese with warm bread.",
                },
                {
                    id: "zaytoon",
                    ar: "زَيْتُون",
                    en: "olives",
                    hint:
                        "زَيْتُون can be sing/plural depending on context, usually ‘olives’ as a group. زَيْتُون أَخْضَر / أَسْوَد.",
                    exampleAr: "فِلَسْطِين مَشْهُورَة بِالزَّيْتُون وَزَيْت الزَّيْتُون.",
                    exampleEn: "Palestine is famous for olives and olive oil.",
                },
                {
                    id: "zeit_zaytoon",
                    ar: "زَيْت زَيْتُون",
                    en: "olive oil",
                    hint:
                        "Very basic ingredient in Palestinian food. Often eaten with bread and zaatar.",
                    exampleAr: "خُبِز مَع زَيْت زَيْتُون وَزَعْتَر فُطُور فِلَسْطِينِي كْتِير مَشْهُور.",
                    exampleEn: "Bread with olive oil and zaatar is a very famous Palestinian breakfast.",
                },
                {
                    id: "za3tar",
                    ar: "زَعْتَر",
                    en: "zaatar (thyme mix)",
                    hint:
                        "Herb mix (thyme, sesame, etc.). Usually eaten with bread and olive oil or on manaqeesh.",
                    exampleAr: "مَنَاقِيش زَعْتَر مَع شَاي مِن أَحْلَى الْأَشْيَاء.",
                    exampleEn: "Zaatar manaqeesh with tea is one of the best things.",
                },
                {
                    id: "hummus",
                    ar: "حُمُّص",
                    en: "hummus (chickpea dip)",
                    hint:
                        "Very famous Middle Eastern food. Also means ‘chickpeas’ as beans.",
                    exampleAr: "حُمُّص مَع طَحِينَة أَكْلَة مَشْهُورَة فِي فِلَسْطِين.",
                    exampleEn: "Hummus with tahini is a famous dish in Palestine.",
                },
                {
                    id: "falafel",
                    ar: "فَلَافِل",
                    en: "falafel",
                    hint:
                        "Deep-fried chickpea balls. Often eaten in a sandwich for breakfast or dinner.",
                    exampleAr: "كْتِير نَّاس بِفْطَرُوا سَنْدْوِيش فَلَافِل.",
                    exampleEn: "Many people have a falafel sandwich for breakfast.",
                },
                {
                    id: "maqlubeh",
                    ar: "مَقْلُوبِة",
                    en: "maqlubeh (upside-down rice dish)",
                    hint:
                        "Traditional Palestinian dish with rice, vegetables, and meat, flipped upside down.",
                    exampleAr: "مَقْلُوبِة جَاج مِن أَشْهَر أَكَلَات فِلَسْطِين.",
                    exampleEn: "Chicken maqlubeh is one of the most famous Palestinian dishes.",
                },
                {
                    id: "musakhan",
                    ar: "مُسَخَّن",
                    en: "musakhan (sumac chicken on bread)",
                    hint:
                        "Traditional Palestinian dish: bread, onion, sumac, and roasted chicken.",
                    exampleAr: "فِي الْمَوَاسِم بِيِسَوُّوا مُسَخَّن لِلْعِيلَة كُلَّهَا.",
                    exampleEn: "During special seasons they make musakhan for the whole family.",
                },
                {
                    id: "salata",
                    ar: "سَلَطَة",
                    en: "salad",
                    hint:
                        "General word for salad. Plural سَلَطَات = types of salad.",
                    exampleAr: "بِحِبّ سَلَطَة خُضَار جَنْب الْأَكْل.",
                    exampleEn: "I like a vegetable salad beside the food.",
                },
                {
                    id: "khodar",
                    ar: "خْضَار",
                    en: "vegetables",
                    hint:
                        "Collective plural ‘vegetables’. For one type: خُضَارَة or the specific name (طَمَاطِم، خِيَار…).",
                    exampleAr: "إِمِّي دَايْمًا بِتِسَوِّي خْضَار طَازَة مَع الْغَدَا.",
                    exampleEn: "My mom always prepares fresh vegetables with lunch.",
                },
                {
                    id: "fawakeh",
                    ar: "فَوَاكِه",
                    en: "fruits",
                    hint:
                        "Plural. Singular type would be like تُفَّاحَة (apple), مَوْزَة (banana).",
                    exampleAr: "بَاكُل فَوَاكِه بَعْد الْغَدَا.",
                    exampleEn: "I eat fruits after lunch.",
                },
                {
                    id: "tuffaHa",
                    ar: "تُفَّاحَة",
                    en: "an apple",
                    hint:
                        "Plural: تُفَّاح. For ‘apples’ as a group: تُفَّاح. Collective: تُفَّاح بَحْمَر / أَخْضَر.",
                    exampleAr: "بَحِبّ آكُل تُفَّاحَة الصُّبِح.",
                    exampleEn: "I like to eat an apple in the morning.",
                },
                {
                    id: "mozeh",
                    ar: "مَوْزَة",
                    en: "a banana",
                    hint:
                        "Plural: مَوْز. For many bananas: مَوْز كْتِير.",
                    exampleAr: "مَوْزَة صْغِيرَة أَحْسَن مِن حْلُو بَعْد الْأَكْل.",
                    exampleEn: "A small banana is better than dessert after food.",
                },
                {
                    id: "lahem",
                    ar: "لَحِم",
                    en: "meat",
                    hint:
                        "Generic word for meat. You can say: لَحِم جَاج (chicken meat), لَحِم بَقَرِي (beef).",
                    exampleAr: "مَا بَاكُل لَحِم كْتِير، أَكْثَر إِشِي دَجَاج.",
                    exampleEn: "I don’t eat a lot of meat, mostly chicken.",
                },
                {
                    id: "dajaj",
                    ar: "دَجَاج",
                    en: "chicken",
                    hint:
                        "دَجَاج = chicken (meat). For a whole chicken you can hear جَاجَة.",
                    exampleAr: "مَقْلُوبِة دَجَاج أَكْلَة مَفْضُولَة عِنْد نَّاس كْتِير.",
                    exampleEn: "Chicken maqlubeh is a favorite dish for many people.",
                },
                {
                    id: "samak",
                    ar: "سَمَك",
                    en: "fish",
                    hint:
                        "Generic word. Plural: سَمَكَات for individual fish, but often just سَمَك.",
                    exampleAr: "فِي غَزَّة السَّمَك طَازَة وِكْتِير طَيِّب.",
                    exampleEn: "In Gaza, the fish is fresh and very tasty.",
                },

                // ===== DRINKS =====
                {
                    id: "mayy",
                    ar: "مَيّ",
                    en: "water",
                    hint:
                        "Very frequent. ‘I drink water’: بَشْرَب مَيّ. Plural not usually used in daily speech (mass noun).",
                    exampleAr: "لَازِم تِشْرَب مَيّ كْتِير خِلَال النَّهَار.",
                    exampleEn: "You need to drink a lot of water during the day.",
                },
                {
                    id: "ahweh",
                    ar: "قَهْوَة",
                    en: "coffee",
                    hint:
                        "قَهْوَة = coffee. Plural (types): قَهْوَات. You can say: قَهْوَة سَادَة (no sugar), قَهْوَة حْلُوَة.",
                    exampleAr: "بَشْرَب قَهْوَة سَادَة الصُّبِح.",
                    exampleEn: "I drink black coffee in the morning.",
                },
                {
                    id: "shay",
                    ar: "شَاي",
                    en: "tea",
                    hint:
                        "Very common drink. شَاي أَخْضَر / أَسْوَد / مَع نَعْنَاع.",
                    exampleAr: "جَدَّتِي بِتِحِبّ شَاي مَع نَعْنَاع.",
                    exampleEn: "My grandmother loves tea with mint.",
                },
                {
                    id: "3asir",
                    ar: "عَصِير",
                    en: "juice",
                    hint:
                        "Plural: عَصَايِر = juices (different kinds).",
                    exampleAr: "بِفَضَّل عَصِير بُرْتُقَال عَنْ كُولا.",
                    exampleEn: "I prefer orange juice over cola.",
                },
                {
                    id: "halaweeyat",
                    ar: "حَلَوِيَّات",
                    en: "sweets / desserts",
                    hint:
                        "Plural noun. Singular general form: حَلْوِيّة. Includes cakes, Arabic sweets, etc.",
                    exampleAr: "بِحِبّ حَلَوِيَّات عَرَبِيَّة زَيّ كُنَافَة.",
                    exampleEn: "I like Arabic sweets like kunafa.",
                },
                {
                    id: "kunafeh",
                    ar: "كُنَافَة",
                    en: "kunafa (cheese pastry dessert)",
                    hint:
                        "Traditional Middle Eastern dessert, very famous in Palestine.",
                    exampleAr: "كُنَافَة نَابُلْسِيَّة مَعْرُوفَة فِي كُلّ الدُّنْيَا.",
                    exampleEn: "Nabulsi kunafa is famous all over the world.",
                },

                // ===== VERBS FROM VERB BOOK (LIKES / PREFER / COOK / ORDER / TRY) =====
                {
                    id: "ba7ebb",
                    ar: "بَحِبّ",
                    en: "I like / I love",
                    hint:
                        "From حَبّ = to love/like. Used for food, people, activities. For he/she: بِيِحِبّ / بِتِحِبّ.",
                    exampleAr: "بَحِبّ الأَكْل الْفِلَسْطِينِي كْتِير.",
                    exampleEn: "I really like Palestinian food.",
                },
                {
                    id: "bifaDDil",
                    ar: "بِفَضَّل",
                    en: "I prefer",
                    hint:
                        "More specific than بَحِبّ. ‘I prefer X over Y’: بِفَضَّل … عَنْ …. ",
                    exampleAr: "بِفَضَّل السَّمَك عَنْ اللَّحِم.",
                    exampleEn: "I prefer fish over meat.",
                },
                {
                    id: "baTbokh",
                    ar: "بَطْبُخ",
                    en: "I cook",
                    hint:
                        "From طَبَخ = to cook. For she cooks: بْتُطْبُخ، for he: بِيِطْبُخ.",
                    exampleAr: "أَحْيَانًا بَطْبُخ أَنَا، مَو دَايْمًا إِمِّي.",
                    exampleEn: "Sometimes I cook, not always my mom.",
                },
                {
                    id: "ba2mor",
                    ar: "بَطْلُب",
                    en: "I order (food/drink)",
                    hint:
                        "Spoken form for ‘I order’ (in café / restaurant): بَطْلُب قَهْوَة، بَطْلُب سَنْدْوِيش.",
                    exampleAr: "فِي الْمَقْهَى بَطْلُب قَهْوَة وَعَصِير.",
                    exampleEn: "At the café I order coffee and juice.",
                },
                {
                    id: "bajarrib",
                    ar: "بَجَرِّب",
                    en: "I try (food / something new)",
                    hint:
                        "From جَرَّب = to try. Used a lot with new dishes: بَجَرِّب أَكْلَة جْدِيدَة.",
                    exampleAr: "لَمَّا أَسَافِر بَجَرِّب أَكْلَات مَحَلِّيَّة.",
                    exampleEn: "When I travel I try local dishes.",
                },
                {
                    id: "bisho3or_juu3",
                    ar: "بِجُوع",
                    en: "I get hungry",
                    hint:
                        "From جُوع = hunger. You can say كْتِير بِجُوع بَسُّرْعَة = I get hungry very fast.",
                    exampleAr: "بِجُوع بَعْد الْمُحَاضَرَة الطَّوِيلَة.",
                    exampleEn: "I get hungry after the long lecture.",
                },
                {
                    id: "bisho3or 3aTash",
                    ar: "بِعْطَش",
                    en: "I get thirsty",
                    hint:
                        "From عَطَش = thirst. Opposite of بَشْرَب مَيّ.",
                    exampleAr: "فِي الصَّيْف بِعْطَش كْتِير، فَبَشْرَب مَيّ أَكْثَر.",
                    exampleEn: "In summer I get very thirsty, so I drink more water.",
                },
            ],

            extra: [
                {
                    id: "ma7alli",
                    ar: "مَحَلّ",
                    en: "shop / place",
                    hint:
                        "Food context: مَحَلّ فَلَافِل، مَحَلّ فَوَاكِه…",
                    exampleAr: "فِي مَحَلّ فَلَافِل قَرِيب مِن بَيْتْنَا.",
                    exampleEn: "There is a falafel shop near our house.",
                },
                {
                    id: "mat3am",
                    ar: "مَطْعَم",
                    en: "restaurant",
                    hint:
                        "Plural: مَطَاعِم. A bit more formal than مَحَلّ.",
                    exampleAr: "رُحْنَا عَلَى مَطْعَم فِلَسْطِينِي فِي الْمَدِينَة.",
                    exampleEn: "We went to a Palestinian restaurant in the city.",
                },
                {
                    id: "ma2le",
                    ar: "مَقْلِي",
                    en: "fried",
                    hint:
                        "Adjective: مُقْرَمِش مَقْلِي = crispy fried.",
                    exampleAr: "فَلَافِل أَكْثَرُه أَكْلَة مَقْلِيَّة.",
                    exampleEn: "Falafel is mostly a fried food.",
                },
                {
                    id: "maTbukh",
                    ar: "مَطْبُوخ",
                    en: "cooked",
                    hint:
                        "Opposite of raw. خْضَار مَطْبُوخَة = cooked vegetables.",
                    exampleAr: "بِفَضَّل خْضَار مَطْبُوخَة عَنْ المَقْلِيَّة.",
                    exampleEn: "I prefer cooked vegetables over fried ones.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (long café + home + culture)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – At home: what do you eat?
                {
                    speaker: "Teacher",
                    ar: "الْيَوْم رَحْ نِحْكِي عَنِ الأَكْل وَالشُّرْب. رُوبَا، شُو فُطُورِك العَادِي فِي غَزَّة؟",
                    en: "Today we will talk about food and drink. Roba, what is your usual breakfast in Gaza?",
                },
                {
                    speaker: "Roba",
                    ar: "عَادَةً فُطُورِي بَسِيط: خُبِز، زَيْت زَيْتُون، زَعْتَر، وَشَاي.",
                    en: "Usually my breakfast is simple: bread, olive oil, zaatar, and tea.",
                },
                {
                    speaker: "Roba",
                    ar: "أَحْيَانًا فَلَافِل أَو حُمُّص إِذَا كُنَّا مِسْتَعْجِلِين.",
                    en: "Sometimes falafel or hummus if we are in a hurry.",
                },
                {
                    speaker: "Teacher",
                    ar: "مَارْك، وَإِنْتَ؟ شُو بَتِفْطَر فِي بَلَدَك؟",
                    en: "Mark, and you? What do you have for breakfast in your country?",
                },
                {
                    speaker: "Mark",
                    ar: "فِي أَمْرِيكَا عَادَةً بَسْتَعْجِل، بَشْرَب قَهْوَة وَبَاكُل تُفَّاحَة أَو مَوْزَة.",
                    en: "In the US I’m usually in a hurry; I drink coffee and eat an apple or a banana.",
                },

                // Scene 2 – Likes and preferences
                {
                    speaker: "Teacher",
                    ar: "طَيِّب، شُو أَكْثَر أَكْلَة فِلَسْطِينِيَّة بَتْحِبُّوهَا؟",
                    en: "Okay, what is your favorite Palestinian dish?",
                },
                {
                    speaker: "Roba",
                    ar: "أَنَا بَحِبّ مَقْلُوبِة كْتِير، خُصُوصًا لَمَّا أَبُوي بَطْبُخْهَا.",
                    en: "I really like maqlubeh, especially when my father cooks it.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بِفَضَّل مُسَخَّن. بَجَرِّب كُلّ مَرَّة مَطْعَم جْدِيد.",
                    en: "I prefer musakhan. I try a new restaurant every time.",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بَحِبّ مَنَاقِيش زَعْتَر مَع شَاي الصُّبِح.",
                    en: "I like zaatar manaqeesh with tea in the morning.",
                },

                // Scene 3 – At a small café in Gaza
                {
                    speaker: "Teacher",
                    ar: "تَخَيَّلُوا إِنُّه حَالِيًّا إِحْنَا فِي مَقْهَى صْغِير فِي غَزَّة. الْوَلْد الَّي بِشْتِغِل هُنَاك إِسْمُه عُمَر.",
                    en: "Imagine that right now we are in a small café in Gaza. The boy who works there is named Omar.",
                },
                {
                    speaker: "Omar",
                    ar: "أَهْلًا وَسَهْلًا فِيكُم، شُو بْتِحِبُّوا تِشْرَبُوا؟",
                    en: "Welcome, what would you like to drink?",
                },
                {
                    speaker: "Roba",
                    ar: "أَنَا بَحِبّ قَهْوَة سَادَة لَوْ سَمَحْت.",
                    en: "I’d like black coffee please.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَطْلُب عَصِير بُرْتُقَال بَارِد.",
                    en: "I’ll order cold orange juice.",
                },
                {
                    speaker: "Yara",
                    ar: "وَأَنَا بِفَضَّل شَاي مَع نَعْنَاع.",
                    en: "And I prefer tea with mint.",
                },
                {
                    speaker: "Omar",
                    ar: "طَيِّب، قَهْوَة سَادَة، عَصِير بُرْتُقَال، وَشَاي نَعْنَاع. شُو بِتْحِبُّوا تَاكُلُوا؟",
                    en: "Okay, one black coffee, orange juice, and mint tea. What would you like to eat?",
                },
                {
                    speaker: "Roba",
                    ar: "هَلَّق مَا بِجُوع، بَسّ مُمْكِن مَقْبِلَات صْغِيرَة.",
                    en: "Right now I’m not very hungry, but maybe some small starters.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَجُوع بَسُّرْعَة، فَبَطْلُب سَنْدْوِيش فَلَافِل.",
                    en: "I get hungry quickly, so I’ll order a falafel sandwich.",
                },
                {
                    speaker: "Yara",
                    ar: "بِتْقَدِّمُوا حُمُّص مَع خُبِز وَخْضَار؟",
                    en: "Do you serve hummus with bread and vegetables?",
                },
                {
                    speaker: "Omar",
                    ar: "إِيه طَبْعًا، عِنْدْنَا حُمُّص بْبَيْت وَسَلَطَات بِلَابِل.",
                    en: "Yes of course, we have homemade hummus and mixed salads.",
                },
                {
                    speaker: "Yara",
                    ar: "طَيِّب بَجَرِّب صَحْن حُمُّص مَع سَلَطَة.",
                    en: "Okay, I’ll try a plate of hummus with salad.",
                },

                // Scene 4 – Talking about healthy food
                {
                    speaker: "Teacher",
                    ar: "إِنْتُوا بْتِفَكِّرُوا الأَكْل الْفِلَسْطِينِي صِحِّي وَلَّا ثَقِيل؟",
                    en: "Do you think Palestinian food is healthy or heavy?",
                },
                {
                    speaker: "Mark",
                    ar: "فِيهُو إِشِي وَإِشِي. فِي أَكْلَات مَقْلِيَّة ثَقِيلَة، وَفِي خْضَار وَفَوَاكِه كْتِير.",
                    en: "It depends. There are heavy fried dishes, and there are lots of vegetables and fruits.",
                },
                {
                    speaker: "Roba",
                    ar: "صَحّ، لَمَّا نَاكُل خْضَار وَسَلَطَة وَفَوَاكِه بِيِكُون الأَكْل أَخَفّ.",
                    en: "True, when we eat vegetables, salad, and fruits, the food is lighter.",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بِفَضَّل مَطْبُوخ عَنْ مَقْلِي، مِثْل كُوسَا مَحْشِي أَو مَرَقَة خْضَار.",
                    en: "I prefer cooked food over fried food, like stuffed zucchini or vegetable stew.",
                },

                // Scene 5 – Desserts and coffee
                {
                    speaker: "Teacher",
                    ar: "وَبِالنِّسْبَة لِلْحَلَوِيَّات؟ شُو أَكْثَر شِي بَتْحِبُّوه؟",
                    en: "And what about desserts? What do you like most?",
                },
                {
                    speaker: "Roba",
                    ar: "صَرَاحَةً، بَحِبّ كُنَافَة نَابُلْسِيَّة.",
                    en: "Honestly, I love Nablusi kunafa.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَفْضَل أَشْرَب قَهْوَة بَعْد الْأَكْل وَبَسّ حَلَوِيَّة صْغِيرَة.",
                    en: "I prefer to drink coffee after food and just a small sweet.",
                },
                {
                    speaker: "Yara",
                    ar: "أَحْيَانًا بَاكُل فَوَاكِه بَسّ، مَو دَايْمًا حَلَوِيَّات.",
                    en: "Sometimes I only eat fruits, not always desserts.",
                },

                // Scene 6 – Wrap-up
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز، هَلَّقْ تْقْدَرُوا تِطْلُبُوا أَكْل وَشُرْب وَتِحْكُوا عَنْ أَكْثَر أَكْلَة مُفَضَّلَة عِنْكُم.",
                    en: "Excellent, now you can order food and drinks and talk about your favorite dish.",
                },
                {
                    speaker: "Teacher",
                    ar: "لِلْوَاجِب، كْتُبُوا مِين بَطْبُخ أَكْثَر إِشِي فِي الْبَيْت عِنْكُمْ وَشُو أَحْلَى أَكْلَة عِنْد الْعِيلَة.",
                    en: "For homework, write who cooks most at your home and what is the best family dish.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا أُسْتَاذ، الْيَوْم جُعْنَا بَسّ تَعَلَّمْنَا كْتِير كَلِمَات.",
                    en: "Thank you, teacher, today we got hungry but we learned many words.",
                },
                {
                    speaker: "Mark",
                    ar: "مَع السَّلَامَة جَمِيعًا، يَلَّا عَلَى الْغَدَا!",
                    en: "Goodbye everyone, yalla, time for lunch!",
                },
            ],
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
                "Role-play 2: Two friends talk about healthy vs heavy food. One prefers fried food (مَقْلِي) and sweets (حَلَوِيَّات), the other prefers cooked vegetables (مَطْبُوخ) and salad. They use «بِفَضَّل»، «مَو صِحِّي»، «صِحِّي أَكْثَر».",
                "Role-play 3: Student describes a big family lunch on Friday in Palestine. Include at least three dishes (مَقْلُوبِة، مُسَخَّن، سَلَطَة، حَلَوِيَّات) and who cooks them. Other students ask questions about what they like or prefer.",
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
                {
                    id: "3eileh",
                    ar: "عِيلَة",
                    en: "family",
                    hint:
                        "Common word for ‘family’. عِيلْتِي = my family. Often used for close family living together.",
                    exampleAr: "عِيلْتِي مَو كْبِيرَة، بَسّ كْتِير قَرِيبِين مِن بَعْض.",
                    exampleEn: "My family is not big, but we are very close to each other.",
                },
                {
                    id: "ahl",
                    ar: "أَهْل",
                    en: "family / parents (household)",
                    hint:
                        "أَهْل can mean ‘family’ or specifically ‘parents’ depending on context. أَهْلِي = my family / my parents.",
                    exampleAr: "أَهْلِي سَاكْنِين فِي غَزَّة.",
                    exampleEn: "My family lives in Gaza.",
                },
                {
                    id: "abuy",
                    ar: "أَبُوي",
                    en: "my father",
                    hint:
                        "From أَب (father). أَبُوي = my father. For ‘his father’ you can hear أَبُوه، for ‘her father’ أَبُوهَا.",
                    exampleAr: "أَبُوي بِيِشْتِغِل مُهَنْدِس.",
                    exampleEn: "My father works as an engineer.",
                },
                {
                    id: "immi",
                    ar: "إِمِّي",
                    en: "my mother",
                    hint:
                        "From أُمّ (mother). إِمِّي = my mother. You may also hear يَمَّا (mom) in spoken language.",
                    exampleAr: "إِمِّي كْتِير شَاطْرَة بِالطَّبْخ.",
                    exampleEn: "My mom is very good at cooking.",
                },
                {
                    id: "akh",
                    ar: "أَخ",
                    en: "brother",
                    hint:
                        "أَخ = brother. أَخُوي = my brother. To talk about more than one: إِخْوَة = siblings/brothers.",
                    exampleAr: "عِنْدِي أَخ أَكْبَر مِنِّي وَأَخ أَصْغَر مِنِّي.",
                    exampleEn: "I have one brother older than me and one younger than me.",
                },
                {
                    id: "okht",
                    ar: "أُخْت",
                    en: "sister",
                    hint:
                        "أُخْت = sister. أُخْتِي = my sister. For more than one: أَخَوَات = sisters.",
                    exampleAr: "أُخْتِي أَصْغَر مِنِّي بِثْلَاث سِنِين.",
                    exampleEn: "My sister is three years younger than me.",
                },
                {
                    id: "walad_bint",
                    ar: "وَلَد / بِنْت",
                    en: "boy / girl (and son / daughter)",
                    hint:
                        "وَلَد = boy or son (by context). بِنْت = girl or daughter. بِنْتِي = my daughter.",
                    exampleAr: "عِنْدُن وَلَد صْغِير وَبِنْت كْبِيرَة شْوَيّ.",
                    exampleEn: "They have a little boy and a slightly older girl.",
                },
                {
                    id: "tifl_atfal",
                    ar: "طِفِل / أَطْفَال",
                    en: "child / children",
                    hint:
                        "طِفِل = child (singular). أَطْفَال = children. Used more like a neutral word than وَلَد / بِنْت.",
                    exampleAr: "الْأَطْفَال بِيِلْعَبُوا بَرَّا الْبَيْت.",
                    exampleEn: "The children are playing outside the house.",
                },
                {
                    id: "sidi",
                    ar: "سِيدِي",
                    en: "my grandfather",
                    hint:
                        "Common word for ‘grandfather’. From سِيد = master/lord. سِيدِي = my grandpa.",
                    exampleAr: "سِيدِي لِسَّا عَايِش فِي الْقَرْيَة.",
                    exampleEn: "My grandfather still lives in the village.",
                },
                {
                    id: "sitti",
                    ar: "سِتِّي",
                    en: "my grandmother",
                    hint:
                        "Common word for ‘grandmother’. سِتِّي = my grandma. Very affectionate.",
                    exampleAr: "سِتِّي كْتِير مَبْسُوطَة لَمَّا أَزُورْهَا.",
                    exampleEn: "My grandma is very happy when I visit her.",
                },
                {
                    id: "3ammo",
                    ar: "عَمّ",
                    en: "uncle (father’s brother)",
                    hint:
                        "عَمّ = father’s brother. عَمِّي = my uncle (from my father’s side).",
                    exampleAr: "عَمِّي سَاكِن قَرِيب مِنَّا فِي نَفْس الْمَدِينَة.",
                    exampleEn: "My uncle lives near us in the same city.",
                },
                {
                    id: "3ammeh",
                    ar: "عَمِّة",
                    en: "aunt (father’s sister)",
                    hint:
                        "عَمِّة = father’s sister. عَمْتِي = my aunt (from my father’s side).",
                    exampleAr: "عَمْتِي زَارَتْنَا فِي غَزَّة أُسْبُوع.",
                    exampleEn: "My aunt visited us in Gaza for a week.",
                },
                {
                    id: "khal",
                    ar: "خَال",
                    en: "uncle (mother’s brother)",
                    hint:
                        "خَال = mother’s brother. خَالِي = my uncle from my mother’s side.",
                    exampleAr: "خَالِي عَايِش فِي الْأُرْدُن.",
                    exampleEn: "My uncle lives in Jordan.",
                },
                {
                    id: "khalah",
                    ar: "خَالَة",
                    en: "aunt (mother’s sister)",
                    hint:
                        "خَالَة = mother’s sister. خَالْتِي = my aunt from my mother’s side.",
                    exampleAr: "خَالْتِي مِثْل إِمِّي تَقْرِيبًا.",
                    exampleEn: "My aunt is almost like my mother.",
                },
                {
                    id: "qarayeb",
                    ar: "قَرَايِب",
                    en: "relatives",
                    hint:
                        "قَرَايِب = relatives (plural). Often used with إِلْنَا / إِلِّي to say ‘we have relatives’.",
                    exampleAr: "إِلْنَا قَرَايِب فِي غَزَّة وَقَرَايِب فِي بَرَّا.",
                    exampleEn: "We have relatives in Gaza and relatives abroad.",
                },
                {
                    id: "3indi",
                    ar: "عِنْدِي",
                    en: "I have",
                    hint:
                        "Use to talk about what you have: family, things, time. For ‘you have’: عِنْدَك (m), عِنْدِك (f). For ‘he has’: عِنْدُه.",
                    exampleAr: "عِنْدِي أَخَيْن وَأُخْت وَاحْدَة.",
                    exampleEn: "I have two brothers and one sister.",
                },
                {
                    id: "ma_3indi",
                    ar: "مَا عِنْدِي",
                    en: "I don’t have",
                    hint:
                        "Negation of عِنْدِي. مَا عِنْدِي أَخَوَات = I don’t have sisters.",
                    exampleAr: "مَا عِنْدِي أَطْفَال، بَسّ عِنْدِي قِطَّة.",
                    exampleEn: "I don’t have children, but I have a cat.",
                },
                {
                    id: "akbar_asghar",
                    ar: "أَكْبَر / أَصْغَر",
                    en: "older / younger",
                    hint:
                        "Use with مِنِّي (than me) or مِنُّه / مِنَّهَا (than him/her). أَكْبَر مِنِّي = older than me. أَصْغَر مِنِّي = younger than me.",
                    exampleAr: "أُخْتِي أَكْبَر مِنِّي، وَأَخُوي أَصْغَر مِنِّي.",
                    exampleEn: "My sister is older than me, and my brother is younger than me.",
                },
                {
                    id: "kbeer_sgheer",
                    ar: "كْبِير / صْغِير",
                    en: "big / small (also old / young)",
                    hint:
                        "For age or size. أَبُوي كْبِير بِالْعُمْر = my father is old. اِبْنِي صْغِير = my son is young/small.",
                    exampleAr: "سِتِّي كْبِيرَة بِالْعُمْر، بَسّ قَلْبْهَا صْغِير.",
                    exampleEn: "My grandma is old in age, but her heart is young.",
                },
                {
                    id: "mutazawwij",
                    ar: "مُتْزَوِّج",
                    en: "married",
                    hint:
                        "Masc مُتْزَوِّج, fem مُتْزَوِّجَة. Used for marital status.",
                    exampleAr: "أَخُوي الْكْبِير مُتْزَوِّج وَعِنْدُه طِفْلَيْن.",
                    exampleEn: "My older brother is married and has two children.",
                },
                {
                    id: "3azzab",
                    ar: "عَزَّاب",
                    en: "single / not married",
                    hint:
                        "Used a lot for men: هُوَّ عَزَّاب = he is single. For women many people just say مُش مُتْزَوِّجَة.",
                    exampleAr: "أُخْتِي لِسَّا مُش مُتْزَوِّجَة، أَخُوي عَزَّاب كَمَان.",
                    exampleEn: "My sister is not married yet, and my brother is also single.",
                },
                {
                    id: "maktub_ktabo",
                    ar: "مَكْتُوب كِتَابُه",
                    en: "engaged (Islamic contract)",
                    hint:
                        "Expression for religious engagement/marriage contract. Fem: مَكْتُوب كِتَابْهَا.",
                    exampleAr: "بِنْت خَالْتِي مَكْتُوب كِتَابْهَا مِنْ سَنَة.",
                    exampleEn: "My aunt’s daughter has been engaged for a year.",
                },
                {
                    id: "jar_jiran",
                    ar: "جَار / جِيرَان",
                    en: "neighbor / neighbors",
                    hint:
                        "جَار = neighbor (singular). جِيرَان = neighbors (plural). Very common social word.",
                    exampleAr: "جِيرَانَّا مِثْل الْعِيلَة، كُلّ يَوْم مَع بَعْض.",
                    exampleEn: "Our neighbors are like family; we’re together every day.",
                },
                {
                    id: "nas",
                    ar: "نَاس",
                    en: "people",
                    hint:
                        "General word for ‘people’. Can be used to talk about family culture or community.",
                    exampleAr: "النَّاس هَان طَيِّبِين وَبِيِحِبُّوا الضُّيُوف.",
                    exampleEn: "People here are kind and love guests.",
                },
            ],

            extra: [
                {
                    id: "ahl_ba3d",
                    ar: "أَهْل بَعْض",
                    en: "relatives / each other’s people",
                    hint:
                        "Informal expression that means ‘we are relatives / close like family’.",
                    exampleAr: "مَو غُرْب، إِحْنَا أَهْل بَعْض.",
                    exampleEn: "We’re not strangers, we’re like relatives.",
                },
                {
                    id: "kulna_sawa",
                    ar: "كُلْنَا سَوَى",
                    en: "all of us together",
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
        dialogue: {
            lines: [
                // Scene 1 – Teacher opens topic
                {
                    speaker: "Teacher",
                    ar: "مَرْحَبَا جَمِيعًا، الْيَوْم بَدْنَا نِسَوِّي جَوّ عِيلَة فِي الصَّفّ.",
                    en: "Hi everyone, today we want to create a family atmosphere in the class.",
                },
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، تْقَدْرِي تِبْلِشِي إِنْتِ، اِحْكِينَا شْوَيّ عَنْ عِيلْتِك.",
                    en: "Roba, you can start; tell us a bit about your family.",
                },

                // Scene 2 – Roba describes her family
                {
                    speaker: "Roba",
                    ar: "أَكِيد. عِنْدِي عِيلَة مَتْوَسِّطَة، أَهْلِي سَاكْنِين فِي غَزَّة.",
                    en: "Of course. I have a medium-sized family; my family lives in Gaza.",
                },
                {
                    speaker: "Roba",
                    ar: "فِي الْبَيْت فِي أَبُوي وَإِمِّي، وَعِنْدِي أَخ أَكْبَر مِنِّي وَأُخْت أَصْغَر مِنِّي.",
                    en: "At home there is my father and my mother, and I have an older brother and a younger sister.",
                },
                {
                    speaker: "Teacher",
                    ar: "حِلُو. أَخُوك الْكْبِير مُتْزَوِّج وَلَّا عَزَّاب؟",
                    en: "Nice. Is your older brother married or single?",
                },
                {
                    speaker: "Roba",
                    ar: "لِسَّا عَزَّاب، بِفَكِّر بِالدِّرَاسَة أَكْثَر مِنِ الزَّوَاج.",
                    en: "He’s still single; he’s thinking more about his studies than marriage.",
                },
                {
                    speaker: "Teacher",
                    ar: "وَأُخْتِك الْأَصْغَر؟ كْبِيرَة وَلَّا لِسَّا طِفْلَة؟",
                    en: "And your younger sister? Is she grown up or still a child?",
                },
                {
                    speaker: "Roba",
                    ar: "هِيَّ مَو طِفْلَة، بَسّ لِسَّا صْغِيرَة. أُخْتِي صْغِيرَة بَسّ عَقْلْهَا كْبِير.",
                    en: "She’s not a little child, but she’s still young. My sister is young but her mind is big.",
                },

                // Scene 3 – Mark’s big family
                {
                    speaker: "Teacher",
                    ar: "طَيِّب مَارْك، إِحْكِلْنَا عَنْ عِيلْتَك إِنْتَ.",
                    en: "Okay Mark, tell us about your family.",
                },
                {
                    speaker: "Mark",
                    ar: "عِيلْتِي أَكْبَر شْوَيّ. عِنْدِي تَلَات إِخْوَة وَاِتْنْتَيْن أَخَوَات.",
                    en: "My family is a bit bigger. I have three brothers and two sisters.",
                },
                {
                    speaker: "Mark",
                    ar: "أَبُوي وَإِمِّي سَاكْنِين فِي أَمْرِيكَا، بَسّ سِتِّي وَسِيدِي سَاكْنِين فِي قَرْيَة صْغِيرَة.",
                    en: "My father and mother live in the US, but my grandma and grandpa live in a small village.",
                },
                {
                    speaker: "Teacher",
                    ar: "مَا شَاءَ الله. عِنْدَك قَرَايِب هَان فِي فِلَسْطِين؟",
                    en: "MashaAllah. Do you have relatives here in Palestine?",
                },
                {
                    speaker: "Mark",
                    ar: "إِيه، إِلْنَا قَرَايِب فِي خَان يُونِس، عَمِّي وَعَمْتِي وَشْوَيّ جِيرَان مِثْل الْقَرَايِب.",
                    en: "Yes, we have relatives in Khan Younis: my uncle, my aunt, and some neighbors who are like relatives.",
                },

                // Scene 4 – Yara joins and talks about marital status
                {
                    speaker: "Yara",
                    ar: "مَعْلِش أُسْتَاذ، فِيني أِحْكِي أَنَا كَمَان؟",
                    en: "Excuse me, teacher, can I also speak?",
                },
                {
                    speaker: "Teacher",
                    ar: "طَبْعًا يَارَا، تْفَضَّلِي. كِيف عِيلْتِك؟ كْبِيرَة وَلَّا صْغِيرَة؟",
                    en: "Of course, Yara, go ahead. How is your family? Big or small?",
                },
                {
                    speaker: "Yara",
                    ar: "عِنْدِي عِيلَة كْبِيرَة. أَبُوي وَإِمِّي، أَرْبَع أَخَوَات، وَأَخ وَاحِد.",
                    en: "I have a big family. My father and mother, four sisters, and one brother.",
                },
                {
                    speaker: "Yara",
                    ar: "أُخْتَيْن مِنْهُم مُتْزَوِّجَات، وَوَاحِدَة مَكْتُوب كِتَابْهَا، وَأَنَا لِسَّا مُش مُتْزَوِّجَة.",
                    en: "Two of them are married, one is engaged, and I’m not married yet.",
                },
                {
                    speaker: "Teacher",
                    ar: "وَأَخُوك؟ مُتْزَوِّج وَلَّا عَزَّاب؟",
                    en: "And your brother? Is he married or single?",
                },
                {
                    speaker: "Yara",
                    ar: "هُوَّ عَزَّاب، بِيِحْكِي لِسَّا بَدُّه وَقْت قَبْل الزَّوَاج.",
                    en: "He is single; he says he still needs time before marriage.",
                },

                // Scene 5 – Omar talks about living with grandparents
                {
                    speaker: "Teacher",
                    ar: "طَيِّب، عُمَر، إِنْتَ مَع مِين سَاكِن هَلَّقْ؟",
                    en: "Okay Omar, who are you living with now?",
                },
                {
                    speaker: "Omar",
                    ar: "هَلَّقْ أَنَا سَاكِن مَع سِتِّي وَسِيدِي، كُلْنَا سَوَى فِي نَفْس الْبَيْت.",
                    en: "Right now I live with my grandma and grandpa, all of us together in the same house.",
                },
                {
                    speaker: "Omar",
                    ar: "أَبُوي وَإِمِّي بِشْتِغْلُوا بَرَّا، بَجُو عَ الْوِيك أَنْد.",
                    en: "My father and mother work outside, they come on the weekend.",
                },
                {
                    speaker: "Teacher",
                    ar: "بِتِحِسّ إِنُّه جِيرَانَّكُمْ مِثْل عِيلْتْكُمْ؟",
                    en: "Do you feel that your neighbors are like your family?",
                },
                {
                    speaker: "Omar",
                    ar: "إِيه، جِيرَانَّا مِثْل أَهْل بَعْض، كْل يَوْم فِي حَدَا بِيِسْأَل عَنَّا.",
                    en: "Yes, our neighbors are like relatives; every day someone checks on us.",
                },

                // Scene 6 – Closing
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز يَا جَمَاعَة، الْيَوْم تَعَلَّمْنَا نِحْكِي عَنِ الْعِيلَة بِطَرِيقَة طَبِيعِيَّة.",
                    en: "Excellent everyone, today we learned how to talk about family in a natural way.",
                },
                {
                    speaker: "Teacher",
                    ar: "لِلْوَاجِب، كُلّ وَاحَد بَدُّه يِكْتُب قِصَّة قَصِيرَة عَنْ عِيلْتُه وَنِقْرَاهَا مَرَّة جَاي.",
                    en: "For homework, each of you must write a short story about your family and we will read it next time.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا أُسْتَاذ، اِلْيَوْم حَسِّيت حَالِي جُوَّا عِيلَة جْدِيدَة.",
                    en: "Thank you, teacher, today I felt like I was inside a new family.",
                },
                {
                    speaker: "Mark",
                    ar: "مَع السَّلَامَة جَمِيعًا، اِنْبِسِطُوا مَع عِيلْتْكُمْ الْيَوْم.",
                    en: "Goodbye everyone, enjoy your time with your families today.",
                },
                {
                    speaker: "Yara",
                    ar: "مَع السَّلَامَة، الله مَعْكُم.",
                    en: "Goodbye, God be with you.",
                },
            ],
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
                "Role-play 1: Student A interviews Student B about their family. Ask: How many siblings do you have? Who is older/younger? Do you have grandparents living with you? Use «عِنْدِي…»، «أَكْبَر مِنِّي»، «أَصْغَر مِنِّي». Then switch roles.",
                "Role-play 2: Two friends (in Arabic) talk about who is married in their family. Use words like مُتْزَوِّج، مُش مُتْزَوِّجَة، عَزَّاب، مَكْتُوب كِتَابُه. Try to make it sound like real gossip but still respectful.",
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
                // ===== TYPES OF TRANSPORT =====
                {
                    id: "sayyara",
                    ar: "سَيَّارَة",
                    en: "car",
                    hint:
                        "Plural: سَيَّارَات (cars). For ‘my car’: سَيَّارْتِي. Used for private cars and sometimes taxis.",
                    exampleAr: "سَيَّارَات فِي غَزَّة كْتِير بِالشَّارِع.",
                    exampleEn: "There are many cars in the streets of Gaza.",
                },
                {
                    id: "taxi",
                    ar: "تَكْسِي",
                    en: "taxi",
                    hint:
                        "Very common word. Plural: تَكَاسِي. Often yellow or white, used inside the city.",
                    exampleAr: "لَمَّا أِسْتَعْجِل بَخُد تَكْسِي.",
                    exampleEn: "When I’m in a hurry, I take a taxi.",
                },
                {
                    id: "servis",
                    ar: "سِرْفِيس",
                    en: "service (shared taxi)",
                    hint:
                        "Shared taxi on a fixed route with a fixed price. Plural: سَرَافِيس.",
                    exampleAr: "سِرْفِيس أَرْخَص مِن التَّكْسِي الْخَاصّ.",
                    exampleEn: "A service is cheaper than a private taxi.",
                },
                {
                    id: "buss",
                    ar: "بُصّ",
                    en: "bus",
                    hint:
                        "Spoken Palestinian pronunciation for ‘bus’. Plural: بُصَّات.",
                    exampleAr: "فِي بُصّ بِيِرُوح مِن غَزَّة عَلَى رَام اللّٰه.",
                    exampleEn: "There is a bus that goes from Gaza to Ramallah.",
                },
                {
                    id: "ma7aTTa",
                    ar: "مَحَطَّة",
                    en: "station / stop",
                    hint:
                        "مَحَطَّة بُصّ = bus station; مَحَطَّة سِرْفِيس = service station.",
                    exampleAr: "بِنِسْتَنَّى فِي مَحَطَّة السِّرْفِيس.",
                    exampleEn: "We wait at the service station.",
                },
                {
                    id: "shari3",
                    ar: "شَارِع",
                    en: "street / road",
                    hint:
                        "Plural: شَوَارِع. شَارِع رَئِيسِي = main street; شَارِع ضَيِّق = narrow street.",
                    exampleAr: "الشَّوَارِع الْيَوْم مَلْيَانَة سَيَّارَات.",
                    exampleEn: "The streets today are full of cars.",
                },
                {
                    id: "z7meh",
                    ar: "زَحْمَة",
                    en: "traffic / crowd",
                    hint:
                        "Used a lot for traffic jam: فِي زَحْمَة فِي الشَّارِع.",
                    exampleAr: "تَأَخَّرْت عَ الدَّرْس عَشَان فِي زَحْمَة.",
                    exampleEn: "I was late to the lesson because there was traffic.",
                },
                {
                    id: "ishara",
                    ar: "إِشَارَة",
                    en: "traffic light (short form)",
                    hint:
                        "إِشَارَة ضَوْ = traffic light. People just say: عِنْد الإِشَارَة.",
                    exampleAr: "التَّكْسِي وَقَف عِنْد الإِشَارَة الْحَمْرَا.",
                    exampleEn: "The taxi stopped at the red light.",
                },

                // ===== MOVEMENT VERBS / CHUNKS =====
                {
                    id: "barkab",
                    ar: "بَرْكَب",
                    en: "I ride / I get on (bus, car, taxi)",
                    hint:
                        "From رِكِب = to ride. بَرْكَب تَكْسِي / بَرْكَب بُصّ / بَرْكَب سِرْفِيس.",
                    exampleAr: "كُلّ يَوْم بَرْكَب بُصّ عَلَى الْجَامْعَة.",
                    exampleEn: "Every day I take a bus to university.",
                },
                {
                    id: "banzel",
                    ar: "بَنْزِل",
                    en: "I get off / I go down",
                    hint:
                        "Used for getting off a bus/taxi or going down from somewhere: بَنْزِل مِن التَّكْسِي.",
                    exampleAr: "بَنْزِل قُدَّام مَدْخَل الْجَامْعَة.",
                    exampleEn: "I get off in front of the university entrance.",
                },
                {
                    id: "bsoog",
                    ar: "بَسُوق",
                    en: "I drive",
                    hint:
                        "From سَاق = to drive. بَسُوق سَيَّارَة / بَسُوق بُصّ.",
                    exampleAr: "أَبُوي بَسُوق سَيَّارَة صْغِيرَة.",
                    exampleEn: "My father drives a small car.",
                },
                {
                    id: "bawsal",
                    ar: "بَوْصَل",
                    en: "I arrive / I reach",
                    hint:
                        "Common spoken form from وَصَل. بَوْصَل عَلَى الْبَيْت السَّاعَة تَمْنْيَة.",
                    exampleAr: "بَوْصَل عَلَى الشُّغُل بَعْد نُصّ سَاعَة.",
                    exampleEn: "I arrive at work after half an hour.",
                },
                {
                    id: "bEta2akhar",
                    ar: "بِتْأَخَّر",
                    en: "I am late / I get late",
                    hint:
                        "From تَأَخَّر = to be late. مَا بِدِّي أِتْأَخَّر = I don’t want to be late.",
                    exampleAr: "لَمَّا فِي زَحْمَة بِنِتْأَخَّر كْتِير.",
                    exampleEn: "When there is traffic, we get very late.",
                },
                {
                    id: "bastanna",
                    ar: "بَسْتَنَّى",
                    en: "I wait",
                    hint:
                        "From اِسْتَنَّى = to wait. You can say: بَسْتَنَّى السِّرْفِيس / بَسْتَنَّى صَاحْبِي.",
                    exampleAr: "بَسْتَنَّى البُصّ مِن نُصّ سَاعَة.",
                    exampleEn: "I’ve been waiting for the bus for half an hour.",
                },
                {
                    id: "bna2el",
                    ar: "بَنْقِل",
                    en: "I move / I transport",
                    hint:
                        "Used for moving people or things: سَيَّارَة بْتِنْقِل رُكَّاب.",
                    exampleAr: "السِّرْفِيس بْيِنْقِل نَّاس مِن مِنْطَقَة لِمِنْطَقَة.",
                    exampleEn: "The service transports people from one area to another.",
                },
                {
                    id: "bamshi",
                    ar: "بَمْشِي",
                    en: "I walk",
                    hint:
                        "From مِشِي = walking. For ‘on foot’: بَمْشِي عَلَى رِجْلَيّ.",
                    exampleAr: "لَمَّا الْمَسَافَة قَرِيبَة بَمْشِي مَا بَرْكَب.",
                    exampleEn: "When the distance is close, I walk and don’t take a vehicle.",
                },
                {
                    id: "bdaTTi3",
                    ar: "بَقَطِّع الشَّارِع",
                    en: "I cross the street",
                    hint:
                        "Chunk: بَقَطِّع الشَّارِع = I cross the street. Used a lot with traffic.",
                    exampleAr: "بَقَطِّع الشَّارِع لَمَّا الإِشَارَة خَضْرَا.",
                    exampleEn: "I cross the street when the light is green.",
                },

                // ===== QUESTIONS & USEFUL CHUNKS =====
                {
                    id: "keef_arooh",
                    ar: "كِيف بَقْدَر أَرُوح عَلَى...؟",
                    en: "How can I go to…?",
                    hint:
                        "Chunk for asking directions: كِيف بَقْدَر أَرُوح عَلَى الْجَامْعَة؟",
                    exampleAr: "كِيف بَقْدَر أَرُوح عَلَى مَحَطَّة البُصّ؟",
                    exampleEn: "How can I go to the bus station?",
                },
                {
                    id: "b_kam",
                    ar: "بِكَم التَّكْسِي؟",
                    en: "How much is the taxi?",
                    hint:
                        "Chunk for price. You can change: بِكَم السِّرْفِيس؟",
                    exampleAr: "لَازِم تِسْأَل: بِكَم التَّكْسِي قَبْل مَا تَرْكَب.",
                    exampleEn: "You should ask ‘How much is the taxi?’ before you get in.",
                },
                {
                    id: "adeysh_wa2t",
                    ar: "قَدِّيش بِيِأَخُد وَقْت؟",
                    en: "How long does it take?",
                    hint:
                        "Used for duration: قَدِّيش بِيِأَخُد وَقْت مِن غَزَّة لَرَام اللّٰه؟",
                    exampleAr: "قَدِّيش بِيِأَخُد وَقْت مِن الْبَيْت عَلَى الشُّغُل؟",
                    exampleEn: "How long does it take from home to work?",
                },
                {
                    id: "fi_mobashar",
                    ar: "فِي خَطّ مُبَاشِر؟",
                    en: "Is there a direct line?",
                    hint:
                        "خَطّ = route / line. مُبَاشِر = direct (no change).",
                    exampleAr: "فِي خَطّ مُبَاشِر مِن هُون عَلَى الْجَامْعَة؟",
                    exampleEn: "Is there a direct line from here to the university?",
                },
                {
                    id: "bighayyir",
                    ar: "بِغَيِّر خَطّ",
                    en: "I change line / transfer",
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
                    hint:
                        "Plural only in practice. رَاكِب = passenger (sg).",
                    exampleAr: "السِّرْفِيس مَمْلِي رُكَّاب.",
                    exampleEn: "The service is full of passengers.",
                },
                {
                    id: "sawa2",
                    ar: "سَوَّاق",
                    en: "driver",
                    hint:
                        "From سَاق. سَوَّاق التَّكْسِي = taxi driver.",
                    exampleAr: "سَوَّاق التَّكْسِي كَان لَطِيف.",
                    exampleEn: "The taxi driver was kind.",
                },
                {
                    id: "maw2af",
                    ar: "مَوْقَف",
                    en: "parking / stop",
                    hint:
                        "مَوْقَف السَّيَّارَات = parking; مَوْقَف البُصّ = bus stop.",
                    exampleAr: "بِسْتَنُّوا فِي مَوْقَف السَّيَّارَات.",
                    exampleEn: "They wait in the car park.",
                },
                {
                    id: "3ala_l_za7meh",
                    ar: "عَلَى الزَّحْمَة",
                    en: "with the traffic / in heavy traffic",
                    hint:
                        "Chunk: يَوْم الْخَمِيس كُلّ الإِشِي عَلَى الزَّحْمَة.",
                    exampleAr: "بَوْصَل بَعْد نُصّ سَاعَة، أَكِيد عَلَى الزَّحْمَة.",
                    exampleEn: "I arrive after half an hour, of course with traffic.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (multi-scene – from home to class)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Planning the trip
                {
                    speaker: "Teacher",
                    ar: "بُكْرَا عِنْدْنَا دَرْس فِي مَكَان ثَانِي فِي الْمَدِينَة. خَلِّينَا نِشُوف كِيف بَدَّنَا نِرُوح.",
                    en: "Tomorrow we have a lesson in another place in the city. Let’s see how we will go.",
                },
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، مِن بَيْتِك لَهْنَاك، كِيف عَادَةً بَتْرُوحِي؟",
                    en: "Roba, from your house to there, how do you usually go?",
                },
                {
                    speaker: "Roba",
                    ar: "عَادَةً بَرْكَب سِرْفِيس مِن الْحَارَة لِلْوَسَط، بَعْدِين بِغَيِّر خَطّ.",
                    en: "Usually I take a service from my neighborhood to the city center, then I change line.",
                },
                {
                    speaker: "Roba",
                    ar: "لَمَّا أَتْأَخَّر بَخُد تَكْسِي مُبَاشِر.",
                    en: "When I’m late I take a taxi directly.",
                },

                // Scene 2 – Asking about time and traffic
                {
                    speaker: "Mark",
                    ar: "قَدِّيش بِيِأَخُد وَقْت مِن مَحَطَّة السِّرْفِيس لَهْنَاك؟",
                    en: "How long does it take from the service station to there?",
                },
                {
                    speaker: "Roba",
                    ar: "إِذَا مَا فِيش زَحْمَة، حَوَالِي رُبِع سَاعَة. بَسّ عَلَى الزَّحْمَة بِيِصِير نُصّ سَاعَة.",
                    en: "If there is no traffic, about a quarter of an hour. But with traffic it becomes half an hour.",
                },
                {
                    speaker: "Teacher",
                    ar: "إِحْنَا مَا بِنْحِبّ نِتْأَخَّر، فَأَحْسَن نِطْلَع بَكِّير شْوَيّ.",
                    en: "We don’t like to be late, so it’s better if we leave a bit early.",
                },

                // Scene 3 – At the service station
                {
                    speaker: "Narrator",
                    ar: "بُكْرَا الصُّبِح، رُوبَا وَمَارْك وَيَارَا رَاحُوا عَلَى مَحَطَّة السِّرْفِيس.",
                    en: "The next morning, Roba, Mark, and Yara went to the service station.",
                },
                {
                    speaker: "Omar",
                    ar: "صَبَاح الْخِير، وَيْن رَايْحِين؟",
                    en: "Good morning, where are you going?",
                },
                {
                    speaker: "Roba",
                    ar: "صَبَاح النُّور. بَدَّنَا سِرْفِيس عَلَى مَنْطِقَة الْجَامْعَة الْجْدِيدَة.",
                    en: "Good morning. We need a service to the new university area.",
                },
                {
                    speaker: "Omar",
                    ar: "فِي خَطّ مُبَاشِر، بَسّ مُكَن مَلَان. اِسْتَنُّوا شْوَيّ لَحَدّ مَا يِفْضَى مَحَلّ.",
                    en: "There is a direct line, but the car is full. Wait a bit until a place is free.",
                },
                {
                    speaker: "Mark",
                    ar: "قَدِّيش بِيِأَخُد وَقْت لَهْنَاك؟",
                    en: "How long does it take to get there?",
                },
                {
                    speaker: "Omar",
                    ar: "حَوَالِي عِشْر دَقَايِق إِذَا مَا فِيش زَحْمَة.",
                    en: "About ten minutes if there is no traffic.",
                },
                {
                    speaker: "Yara",
                    ar: "وَبِكَم السِّرْفِيس لِلشَّخْص؟",
                    en: "And how much is the service per person?",
                },
                {
                    speaker: "Omar",
                    ar: "خَمْس شَوَاكِل لِلرَّاكِب.",
                    en: "Five shekels per passenger.",
                },

                // Scene 4 – Inside the service
                {
                    speaker: "Narrator",
                    ar: "بَعْد شْوَيّ، رُوبَا وَأَصْحَابْهَا رَكْبُوا السِّرْفِيس.",
                    en: "After a bit, Roba and her friends got on the service.",
                },
                {
                    speaker: "Driver",
                    ar: "تْفَضَّلُوا، فِيه مَحَلّ وَرَا.",
                    en: "Go ahead, there is space at the back.",
                },
                {
                    speaker: "Roba",
                    ar: "لَوْ سَمَحْت، بَنْزِل قُدَّام مَدْخَل الْجَامْعَة.",
                    en: "Please, I’ll get off in front of the university entrance.",
                },
                {
                    speaker: "Driver",
                    ar: "مَا شِي، بَس لَمَّا نُوصَل نَادِينِي.",
                    en: "Okay, just call me when we arrive.",
                },
                {
                    speaker: "Mark",
                    ar: "الصُّبِح كُلّ الشَّوَارِع زَحْمَة، صَحّ؟",
                    en: "In the morning all the streets are full of traffic, right?",
                },
                {
                    speaker: "Driver",
                    ar: "أَه، خُصُوصًا يَوْم الأَحَد. كُلّ النَّاس رَايْحَة عَلَى الشُّغُل وَالْمَدَارِس.",
                    en: "Yes, especially on Sunday. Everyone is going to work and schools.",
                },

                // Scene 5 – Crossing the street & walking
                {
                    speaker: "Narrator",
                    ar: "بَعْد عِشْر دَقَايِق، وِصْلُوا قُدَّام مَدْخَل الْجَامْعَة وَنَزِلُوا.",
                    en: "After ten minutes, they arrived in front of the university entrance and got off.",
                },
                {
                    speaker: "Yara",
                    ar: "هَلَّقْ بَنَقَطِّع الشَّارِع، بَعْدِين بَنِمْشِي شْوَيّ لَحَدّ الْقَاعَة.",
                    en: "Now we’ll cross the street, then walk a bit until the classroom.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَحِبّ أَمْشِي لَمَّا الْجَوّ حِلُو، مَو دَايْمًا أَرْكَب.",
                    en: "I like to walk when the weather is nice; I don’t always ride.",
                },
                {
                    speaker: "Roba",
                    ar: "بِهَيْك رِحْلَة صْغِيرَة حَسِّيت إِنِّي سَافَرْت مَعْكُم.",
                    en: "With this small trip I felt like I traveled with you.",
                },

                // Scene 6 – Wrap-up in class
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز، هَيْك اِسْتَخْدَمْنَا كَلِمَات الْمُوَاصَلَات فِي مَوْقِف حَقِيقِي.",
                    en: "Excellent, this way we used transportation words in a real situation.",
                },
                {
                    speaker: "Teacher",
                    ar: "هَلَّق كُلّ وَاحَد بَدُّه يِشْرَح كِيف بِيِرُوح مِن بَيْتُه عَلَى أَقْرَب مَكَان مُهِمّ.",
                    en: "Now each of you must explain how you go from your house to the nearest important place.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا أُسْتَاذ، الْوَحْدَة خَلَّتْنَا نِتْخَيَّل الْمَدِينَة وَاحْنَا جُوَّا السِّرْفِيس.",
                    en: "Thank you, teacher, the unit made us imagine the city while we were inside the service.",
                },
            ],
        },

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
                // ===== PLACES & PEOPLE =====
                {
                    id: "madraseh",
                    ar: "مَدْرَسَة",
                    en: "school",
                    hint:
                        "Plural: مَدَارِس (schools). ‘My school’ = مَدْرَسْتِي. Used for primary / secondary school.",
                    exampleAr: "أَخُوي لِسَّا فِي الْمَدْرَسَة، بْيِدْرُس صَفّ تَّاسِع.",
                    exampleEn: "My brother is still in school; he studies in ninth grade.",
                },
                {
                    id: "jame3a",
                    ar: "جَامْعَة",
                    en: "university",
                    hint:
                        "Plural: جَامْعَات. ‘My university’ = جَامْعْتِي. You can add city: جَامْعَة غَزَّة، جَامْعَة بِيِرْزَيْت.",
                    exampleAr: "أَنَا بَدْرُس فِي جَامْعَة غَزَّة.",
                    exampleEn: "I study at Gaza University.",
                },
                {
                    id: "qism",
                    ar: "قِسْم",
                    en: "department",
                    hint:
                        "Plural: أَقْسَام. قِسْم الْهَنْدَسَة، قِسْم اللُّغَات، قِسْم الْحَاسُوب.",
                    exampleAr: "أَنَا فِي قِسْم الْهَنْدَسَة الْكَهْرَبَائِيَّة.",
                    exampleEn: "I am in the electrical engineering department.",
                },
                {
                    id: "daftar",
                    ar: "دَفْتَر",
                    en: "notebook",
                    hint:
                        "Plural: دَفَاتِر. ‘my notebook’ = دَفْتَرِي.",
                    exampleAr: "بَكْتُب مْلَاحَظَات فِي دَفْتَر خَاصّ لِكُلّ مَادَّة.",
                    exampleEn: "I write notes in a special notebook for each subject.",
                },
                {
                    id: "qalam",
                    ar: "قَلَم",
                    en: "pen",
                    hint:
                        "Plural: أَقْلَام. قَلَم رَصَاص (pencil)، قَلَم حِبْر (ink pen).",
                    exampleAr: "دَايْمًا بَنْسَى قَلَمِي فِي الْقَاعَة.",
                    exampleEn: "I always forget my pen in the classroom.",
                },
                {
                    id: "kumbyuter",
                    ar: "كُمْبْيُوتِر / لَابْتُوب",
                    en: "computer / laptop",
                    hint:
                        "Used a lot for online study and work. Plural: لَابْتُوبَات.",
                    exampleAr: "بَدْرُس وَبَشْتِغِل أُونْلَايْن عَلَى اللَّابْتُوب.",
                    exampleEn: "I study and work online on the laptop.",
                },
                {
                    id: "mu3allem",
                    ar: "مُعَلِّم / مُعَلِّمَة",
                    en: "teacher",
                    hint:
                        "Spoken synonym of أُسْتَاذ. Masc: مُعَلِّم، fem: مُعَلِّمَة.",
                    exampleAr: "مُعَلِّمَة الرِّيَاضِيَّات كْتِير شَاطْرَة.",
                    exampleEn: "The math teacher is very good.",
                },
                {
                    id: "zamel",
                    ar: "زْمِيل / زْمِيلَة",
                    en: "classmate / colleague",
                    hint:
                        "Plural: زْمَلَا. Used for study or work: زْمِيلِي فِي الشُّغُل.",
                    exampleAr: "عِنْدِي زْمِيلَة مِن إِيطَالْيَا بِتِدْرُس عَرَبِي.",
                    exampleEn: "I have a classmate from Italy who studies Arabic.",
                },
                {
                    id: "mudir",
                    ar: "مُدِير / مُدِيرَة",
                    en: "manager / director",
                    hint:
                        "Work context. Plural: مُدَرَا.",
                    exampleAr: "مُدِير الشُّغُل عِنْدُه اِجْتِمَاع كُلّ يَوْم إِثْنَيْن.",
                    exampleEn: "The manager at work has a meeting every Monday.",
                },

                // ===== STUDY THINGS =====
                {
                    id: "mawdoo3",
                    ar: "مَوْضُوع",
                    en: "topic / subject (theme)",
                    hint:
                        "Plural: مَوَاضِيع. Used for essay topics, speaking topics, etc.",
                    exampleAr: "الْيَوْم مَوْضُوع الدَّرْس هُوَّ الشُّغُل وَالدِّرَاسَة.",
                    exampleEn: "Today the lesson topic is work and study.",
                },
                {
                    id: "mawadd",
                    ar: "مَوَادّ",
                    en: "subjects (school/university)",
                    hint:
                        "Plural word already. Singular مَادَّة = one subject.",
                    exampleAr: "عِنْدِي تَلَات مَوَادّ هَالْسِّمِسْتِر.",
                    exampleEn: "I have three subjects this semester.",
                },
                {
                    id: "imti7an",
                    ar: "اِمْتِحَان",
                    en: "exam / test",
                    hint:
                        "Plural: اِمْتِحَانَات. ‘final exam’ = اِمْتِحَان نِهَائِي.",
                    exampleAr: "الأُسْبُوع الْجَاي عِنْدِي اِمْتِحَان مُهِمّ.",
                    exampleEn: "Next week I have an important exam.",
                },
                {
                    id: "wajeb",
                    ar: "وَاجِب",
                    en: "homework / assignment",
                    hint:
                        "Plural: وَاجْبَات. In spoken Arabic ‘homework’ is usually وَاجِب.",
                    exampleAr: "الأُسْتَاذ بْيِعْطِينَا وَاجِب بَعْد كُلّ دَرْس.",
                    exampleEn: "The teacher gives us homework after every lesson.",
                },
                {
                    id: "mashroo3",
                    ar: "مَشْرُوع",
                    en: "project",
                    hint:
                        "Plural: مَشَارِيع. مَشْرُوع تَّخَرُّج = graduation project.",
                    exampleAr: "هَادَا أَوَّل مَشْرُوع بَسَوِّيه فِي الْجَامْعَة.",
                    exampleEn: "This is the first project I do at university.",
                },
                {
                    id: "ijtema3",
                    ar: "اِجْتِمَاع",
                    en: "meeting",
                    hint:
                        "Plural: اِجْتِمَاعَات. Work or study meeting.",
                    exampleAr: "بْنِعْمِل اِجْتِمَاع فِرِيق كُلّ أُسْبُوع.",
                    exampleEn: "We do a team meeting every week.",
                },

                // ===== WORK WORDS =====
                {
                    id: "shoghol",
                    ar: "شُغُل",
                    en: "work / job",
                    hint:
                        "Can mean ‘work’ in general or a job. ‘I have work’: عِنْدِي شُغُل.",
                    exampleAr: "بَشْتِغِل وَبَدْرُس فِي نَفْس الْوَقْت، عِنْدِي شُغُل جُزْئِي.",
                    exampleEn: "I work and study at the same time; I have a part-time job.",
                },
                {
                    id: "wazifeh",
                    ar: "وَظِيفَة",
                    en: "job / position",
                    hint:
                        "Plural: وَظَايِف. More formal than شُغُل.",
                    exampleAr: "الْكُلّ بِيِدَوِّر عَلَى وَظِيفَة مُنَاسْبَة بَعْد التَّخَرُّج.",
                    exampleEn: "Everyone looks for a suitable job after graduation.",
                },
                {
                    id: "duwam",
                    ar: "دْوَام",
                    en: "working hours / shift",
                    hint:
                        "دْوَام صَبَاحِي، دْوَام كَامِل، دْوَام جُزْئِي.",
                    exampleAr: "دْوَام الشُّغُل مِن السَّاعَة تَمْنْيَة لِلسَّاعَة أَرْبَعَة.",
                    exampleEn: "Working hours are from eight to four.",
                },

                // ===== VERBS (STUDY/WORK) =====
                {
                    id: "badros",
                    ar: "بَدْرُس",
                    en: "I study",
                    hint:
                        "From دَرَس = to study. Used with subject or field: بَدْرُس عَرَبِي / هَنْدَسَة / طِبّ.",
                    exampleAr: "بَدْرُس حَاسُوب فِي الْجَامْعَة.",
                    exampleEn: "I study computer science at university.",
                },
                {
                    id: "bat3allam",
                    ar: "بَتْعَلَّم",
                    en: "I learn",
                    hint:
                        "From تَعَلَّم = to learn. More general than ‘study’.",
                    exampleAr: "بَتْعَلَّم اللُّغَة الْعَرَبِيَّة وَاللُّغَة الإِنْجْلِيزِيَّة.",
                    exampleEn: "I am learning Arabic and English.",
                },
                {
                    id: "bas2al",
                    ar: "بَسْأَل",
                    en: "I ask (a question)",
                    hint:
                        "From سَأَل = to ask. Used a lot in class: بَسْأَل الأُسْتَاذ.",
                    exampleAr: "لَمَّا مَا أَفْهَم بَسْأَل الأُسْتَاذ.",
                    exampleEn: "When I don’t understand, I ask the teacher.",
                },
                {
                    id: "bafham",
                    ar: "بَفْهَم",
                    en: "I understand",
                    hint:
                        "From فَهِم = to understand. Negative: مَا بَفْهَم.",
                    exampleAr: "أَحْيَانًا بَفْهَم الدَّرْس، أَحْيَانًا بَحْتَاج تِّكْرَار.",
                    exampleEn: "Sometimes I understand the lesson, sometimes I need repetition.",
                },
                {
                    id: "bakmel",
                    ar: "بَكَمِّل",
                    en: "I continue / I finish (a degree/level)",
                    hint:
                        "Chunk: بَكَمِّل دِرَاسَة، بَكَمِّل مَشْرُوع.",
                    exampleAr: "بَكَمِّل مُسْتَوَى أَوَّل فِي اللُّغَة الْفِلَسْطِينِيَّة.",
                    exampleEn: "I am completing level one in Palestinian Arabic.",
                },
                {
                    id: "banja7",
                    ar: "بَنْجَح",
                    en: "I pass / I succeed",
                    hint:
                        "Used with exams/subjects. Opposite: بَرْسُب = I fail (repeat).",
                    exampleAr: "بَنْجَح فِي الاِمْتِحَان إِذَا بَدْرُس مْنِيح.",
                    exampleEn: "I pass the exam if I study well.",
                },
                {
                    id: "barsob",
                    ar: "بَرْسُب",
                    en: "I fail (a subject / exam)",
                    hint:
                        "From رَسَب = to fail. Sensitive word, use carefully.",
                    exampleAr: "مَا بَدِّي أَرْسُب، عَشَان هَيْك بَدْرُس كْتِير.",
                    exampleEn: "I don’t want to fail, so I study a lot.",
                },
                {
                    id: "bashteghil",
                    ar: "بَشْتِغِل",
                    en: "I work",
                    hint:
                        "Spoken verb for ‘work’. Add where or how: بَشْتِغِل أُونْلَايْن، بَشْتِغِل فِي مَكْتَب.",
                    exampleAr: "بَشْتِغِل مُدَرِّسَة جُزْئِيّ وَبَدْرُس كَمَان.",
                    exampleEn: "I work part-time as a teacher and study as well.",
                },
                {
                    id: "badrreb",
                    ar: "بَدَرِّب",
                    en: "I train / I give training",
                    hint:
                        "From دَرَّب = to train. For giving courses.",
                    exampleAr: "بَدَرِّب طُلَّاب أَجَانِب عَلَى اللُّغَة الْفِلَسْطِينِيَّة.",
                    exampleEn: "I train foreign students in Palestinian Arabic.",
                },
                {
                    id: "badarris",
                    ar: "بَدَرِّس",
                    en: "I teach",
                    hint:
                        "From دَرَّس = to teach. Teacher speaking: أَنَا بَدَرِّس عَرَبِي أُونْلَايْن.",
                    exampleAr: "أَنَا بَدَرِّس عَرَبِي لِطُلَّاب مِن دُوَل مُخْتَلِفَة.",
                    exampleEn: "I teach Arabic to students from different countries.",
                },
            ],

            extra: [
                {
                    id: "youm_dirasah",
                    ar: "يَوْم دِرَاسَة",
                    en: "school / study day",
                    hint:
                        "Opposite: يَوْم إِجَازَة = day off.",
                    exampleAr: "الْخَمِيس عِنْدْنَا يَوْم دِرَاسَة طَوِيل.",
                    exampleEn: "On Thursday we have a long study day.",
                },
                {
                    id: "sabt_lakhmis",
                    ar: "مِن السَّبْت لِلْخَمِيس",
                    en: "from Saturday to Thursday",
                    hint:
                        "Typical study/work week in many Arab countries.",
                    exampleAr: "بَدْرُس مِن السَّبْت لِلْخَمِيس وَالجُمُعَة إِجَازَة.",
                    exampleEn: "I study from Saturday to Thursday and Friday is off.",
                },
                {
                    id: "mu3adal",
                    ar: "مُعَدَّل",
                    en: "average / GPA",
                    hint:
                        "Study context: مُعَدَّل عَالِي / مُنْخَفِض.",
                    exampleAr: "بَدِّي مُعَدَّل عَالِي عَشَان أَلْقَى وَظِيفَة أَحْسَن.",
                    exampleEn: "I want a high GPA so I can find a better job.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (class + project + work + future)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – First day in a university class
                {
                    speaker: "Teacher",
                    ar: "مَرْحَبَا جَمِيعًا، الْيَوْم دَرْس جْدِيد عَنِ الشُّغُل وَالدِّرَاسَة. يَلَّا نِتْعَرَّف.",
                    en: "Hello everyone, today is a new lesson about work and study. Let’s get to know each other.",
                },
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، بِتْقَدْرِي تِحْكِي لَنَا شُو بَدْرُسِي وَوَيْن؟",
                    en: "Roba, can you tell us what and where you study?",
                },
                {
                    speaker: "Roba",
                    ar: "أَنَا بَدْرُس هَنْدَسَة اِتِّصَالَات فِي جَامْعَة غَزَّة.",
                    en: "I study communications engineering at Gaza University.",
                },
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز. وَبِتْشْتِغْلِي كَمَان وَلَّا بَسّ دِرَاسَة؟",
                    en: "Excellent. And do you also work or only study?",
                },
                {
                    speaker: "Roba",
                    ar: "حالِيًّا بَتْعَلَّم كْتِير وَمَا بَشْتِغِل، بَسّ أَدْرُس شْوَيّ فْرِي لِلْفْرَنْت إِنْد.",
                    en: "Right now I’m learning a lot and not working, but I study a bit of front-end in my free time.",
                },

                // Scene 2 – Mark & Yara, mixed work-study life
                {
                    speaker: "Teacher",
                    ar: "مَارْك، وَإِنْتَ؟ شُو بَدْرُس وَشُو بِتْسَوِّي فِي الْحَيَاة؟",
                    en: "Mark, and you? What do you study and what do you do in life?",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَدْرُس لُغَات، وَبَشْتِغِل جُزْئِيّ فِي مَكْتَب سِيَاحَة.",
                    en: "I study languages and work part-time in a travel office.",
                },
                {
                    speaker: "Mark",
                    ar: "أَحْيَانًا بَكُون تَعْبَان بَعْد الدْوَام، بَسّ بَحَاوِل أَدْرُس كُلّ يَوْم شْوَيّ.",
                    en: "Sometimes I am tired after work, but I try to study a bit every day.",
                },
                {
                    speaker: "Teacher",
                    ar: "يَارَا، إِنْتِي بَتْدَرِّسِي وَلَّا بَسّ بَدْرُس؟",
                    en: "Yara, do you teach or only study?",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بَدَرِّس عَرَبِي أُونْلَايْن وَبَتْعَلَّم إِيطَالِيّ لِحَالِي.",
                    en: "I teach Arabic online and learn Italian by myself.",
                },

                // Scene 3 – Talking about subjects & exams
                {
                    speaker: "Teacher",
                    ar: "قَدِّيش مَوَادّ عِنْدْكُم هَالْسِّمِسْتِر؟",
                    en: "How many subjects do you have this semester?",
                },
                {
                    speaker: "Roba",
                    ar: "عِنْدِي خَمْس مَوَادّ، فِيه مَادَّة صَعْبَة جِدًّا اِسْمْهَا نُظُم تَّشْغِيل.",
                    en: "I have five subjects; there is a very difficult subject called Operating Systems.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا عِنْدِي تَلَات مَوَادّ لُغَة، وَاحِد عَنْ النَّحْو، وَاحِد عَنْ الْمُحَادَثَة.",
                    en: "I have three language subjects: one about grammar and one about conversation.",
                },
                {
                    speaker: "Teacher",
                    ar: "فِي اِمْتِحَانَات قَرِيبًا؟",
                    en: "Do you have exams soon?",
                },
                {
                    speaker: "Yara",
                    ar: "أَه، الأُسْبُوع الْجَاي عِنْدِي اِمْتِحَان مُحَادَثَة، بَدْرُس كْلِمَات كْتِير.",
                    en: "Yes, next week I have a speaking exam; I’m studying a lot of vocabulary.",
                },

                // Scene 4 – Project and team meeting
                {
                    speaker: "Teacher",
                    ar: "هَلَّقْ خَلِّينَا نِحْكِي عَنِ الْمَشْرُوع. مِين بَطْلُب يِشْرَح فِرِيقُه؟",
                    en: "Now let’s talk about the project. Who wants to explain their team?",
                },
                {
                    speaker: "Roba",
                    ar: "إِحْنَا فِرِيق مِن تَلَات زْمَلَا، مَنِشْتِغِل عَلَى مَشْرُوع تَّخَرُّج صْغِير فِي الْوِيب.",
                    en: "We are a team of three colleagues; we are working on a small graduation project in web.",
                },
                {
                    speaker: "Roba",
                    ar: "عِنْدْنَا اِجْتِمَاع كُلّ أُسْبُوع عَلَى الزُّوم لِنُشُوف وَيْن وَصَلْنَا.",
                    en: "We have a meeting every week on Zoom to see where we reached.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بَعْمَل بَحْث عَنْ تَّعَلُّم اللُّغَات أُونْلَايْن، بَجَمَّع مَعْلُومَات وَبَكْتُب تَّقْرِير.",
                    en: "I’m doing research about learning languages online; I collect information and write a report.",
                },

                // Scene 5 – Future plans
                {
                    speaker: "Teacher",
                    ar: "طَيِّب، بَعْد مَا تِخَلَّصُوا دِرَاسَة، شُو بَدَّكُم تِسَوُّوا؟",
                    en: "Okay, after you finish your studies, what do you want to do?",
                },
                {
                    speaker: "Roba",
                    ar: "بِصِدْق، أَنَا بَدِّي أَشْتِغِل فِي مَشْرُوعَات تَّعْلِيم أُونْلَايْن، وَأَدَرِّس لَهْجَة فِلَسْطِينِيَّة.",
                    en: "Honestly, I want to work in online education projects and teach Palestinian dialect.",
                },
                {
                    speaker: "Mark",
                    ar: "أَنَا بِفَكِّر أَدْرُس مَاجِسْتِير فِي تَّعْلِيم اللُّغَات.",
                    en: "I’m thinking of studying a master’s in language teaching.",
                },
                {
                    speaker: "Yara",
                    ar: "أَنَا بَكَمِّل تَّدْرِيس أُونْلَايْن، وَمُمْكِن فِي الْمُسْتَقْبَل أَفْتَح مَرْكَز صْغِير.",
                    en: "I will continue teaching online, and maybe in the future open a small center.",
                },

                // Scene 6 – Wrap-up
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز، هَيْك حَكَيْنَا عَنِ الدِّرَاسَة وَالشُّغُل وَالْمُسْتَقْبَل بِلَّهْجَة فِلَسْطِينِيَّة.",
                    en: "Excellent, this way we talked about study, work, and the future in Palestinian Arabic.",
                },
                {
                    speaker: "Teacher",
                    ar: "لِلْوَاجِب، كْتُبُوا نَصّ قَصِير عَنْ يَوْم دِرَاسَة أَو يَوْم شُغُل مِثَالِي عِنْدْكُم.",
                    en: "For homework, write a short text about your ideal study day or work day.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا أُسْتَاذ، هَالْمَوْضُوع قَرَّب بَيْن الْحَيَاة الْحَقِيقِيَّة وَاللُّغَة.",
                    en: "Thank you, teacher, this topic connected real life and language.",
                },
            ],
        },

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
                // ===== PLACES & PEOPLE =====
                {
                    id: "mustashfa",
                    ar: "مُسْتَشْفَى",
                    en: "hospital",
                    hint:
                        "Plural: مُسْتَشْفَيَات. Used for serious problems or emergencies.",
                    exampleAr: "لَمَّا الْحَالَة صَعْبَة، بِنْرُوح عَلَى المُسْتَشْفَى.",
                    exampleEn: "When the case is serious, we go to the hospital.",
                },
                {
                    id: "3yadeh",
                    ar: "عِيَادَة",
                    en: "clinic",
                    hint:
                        "Small clinic / doctor’s office. عِيَادَة دِّكْتُور أَسْنَان = dentist clinic.",
                    exampleAr: "فِي عِيَادَة قَرِيبَة مِن بَيْتْنَا.",
                    exampleEn: "There is a clinic close to our house.",
                },
                {
                    id: "saydaliyyeh",
                    ar: "صَيْدَلِيَّة",
                    en: "pharmacy",
                    hint:
                        "Plural: صَيْدَلِيَّات. You can buy medicine here.",
                    exampleAr: "بَعْد الدِّكْتُور بِنْرُوح عَلَى الصَّيْدَلِيَّة نِجِيب دَّوَا.",
                    exampleEn: "After the doctor, we go to the pharmacy to get medicine.",
                },
                {
                    id: "doktor",
                    ar: "دِكْتُور / دِكْتُورَة",
                    en: "doctor",
                    hint:
                        "Masc: دِكْتُور, fem: دِكْتُورَة. Common in spoken Arabic.",
                    exampleAr: "الدِّكْتُورَة سَأَلَتْنِي عَنِ الأَعْرَاض.",
                    exampleEn: "The doctor asked me about the symptoms.",
                },
                {
                    id: "mumarred",
                    ar: "مُمَرِّض / مُمَرِّضَة",
                    en: "nurse",
                    hint:
                        "Hospital / clinic context. Plural: مُمَرِّضِين.",
                    exampleAr: "المُمَرِّضَة أَخَذَت الضَّغْط وَالْحَرَارَة.",
                    exampleEn: "The nurse took the blood pressure and temperature.",
                },
                {
                    id: "is3af",
                    ar: "إِسْعَاف",
                    en: "ambulance / emergency medical service",
                    hint:
                        "Also used for the ambulance car. يِتَّصِل عَالإِسْعَاف = call ambulance.",
                    exampleAr: "فِي حَادِث، حَدَا يِتَّصِل عَالإِسْعَاف.",
                    exampleEn: "There is an accident, someone call an ambulance.",
                },

                // ===== GENERAL HEALTH =====
                {
                    id: "se7a",
                    ar: "صِحِّة",
                    en: "health",
                    hint:
                        "صِحِّة كْوَيْسِة = good health. Also used in toast: صَحَّة! = cheers / to your health.",
                    exampleAr: "المُهِمّ تْحَافِظ عَلَى صِحِّتَك.",
                    exampleEn: "The important thing is to keep your health.",
                },
                {
                    id: "marid",
                    ar: "مَرِيض",
                    en: "sick / ill",
                    hint:
                        "Masc: مَرِيض, fem: مَرِيضَة, plural: مَرْضَى. Don’t make a separate entry; just use forms in context.",
                    exampleAr: "أَنَا مَرِيضَة شْوَيّ، مَا بَقْدَر أِجِي عَلَى الدَّرْس الْيَوْم.",
                    exampleEn: "I’m a bit sick; I can’t come to the lesson today.",
                },
                {
                    id: "ta3ban_health",
                    ar: "تَعْبَان",
                    en: "tired / exhausted (physically)",
                    hint:
                        "Masc: تَعْبَان, fem: تَعْبَانَة. Used for physical tiredness or after illness.",
                    exampleAr: "بَعْد الْحُمَّى كُنْت تَعْبَانَة كْتِير.",
                    exampleEn: "After the fever I was very tired.",
                },
                {
                    id: "salamtek",
                    ar: "سَلَامْتَك / سَلَامْتِك",
                    en: "Get well soon",
                    hint:
                        "Masc: سَلَامْتَك, fem: سَلَامْتِك. Reply: الله يِسَلِّمَك.",
                    exampleAr: "سَلَامْتِك رُوبَا، إِنْ شَاءَ الله تِقُومِي بِالسَّلَامَة.",
                    exampleEn: "Get well soon, Roba, may you recover safely.",
                },

                // ===== SYMPTOMS & PAIN =====
                {
                    id: "waja3",
                    ar: "وَجَع",
                    en: "pain",
                    hint:
                        "وَجَع رَاس = headache, وَجَع بَطِن = stomach ache, وَجَع ضَّهْر = back pain.",
                    exampleAr: "عِنْدِي وَجَع بَطِن مِن الْبَارِحَة.",
                    exampleEn: "I have stomach pain since yesterday.",
                },
                {
                    id: "rasi_biwaja3ni",
                    ar: "رَاسِي بِوَجَعْنِي",
                    en: "I have a headache",
                    hint:
                        "Structure: (part of body) + بِوَجَعْنِي = it hurts me. Ex: ضَهْرِي بِوَجَعْنِي.",
                    exampleAr: "رَاسِي بِوَجَعْنِي وْمِش قَادْرَة أَرْكَّز.",
                    exampleEn: "My head hurts and I can’t focus.",
                },
                {
                    id: "batni_biwaja3ni",
                    ar: "بَطْنِي بِوَجَعْنِي",
                    en: "I have a stomach ache",
                    hint:
                        "Same pattern as رَاسِي بِوَجَعْنِي, good for many body parts.",
                    exampleAr: "بَطْنِي بِوَجَعْنِي بَعْد مَا أَكَلْت سْرِيع.",
                    exampleEn: "My stomach hurts after I ate quickly.",
                },
                {
                    id: "7arrareh",
                    ar: "حَرَارَة",
                    en: "fever / temperature",
                    hint:
                        "عِنْدِي حَرَارَة = I have a fever. بِتْخُد حَرَارَة = take someone’s temperature.",
                    exampleAr: "بِحِسّ إِنُّه عِنْدِي حَرَارَة الْلَيْلَة.",
                    exampleEn: "I feel like I have a fever tonight.",
                },
                {
                    id: "rzaz",
                    ar: "رَشَح / زُكَام",
                    en: "cold (runny nose / mild flu)",
                    hint:
                        "Both words used; رَشَح very common in speech.",
                    exampleAr: "عِنْدِي رَشَح وَمَنْخَارِي مْسَكَّر.",
                    exampleEn: "I have a cold and my nose is blocked.",
                },
                {
                    id: "so3al",
                    ar: "سُعَال / كْحَة",
                    en: "cough",
                    hint:
                        "In speech: كْحَة كثير. Verb: بَكُحّ = I cough.",
                    exampleAr: "مِن امْبَارِح وَأَنَا عِنْدِي كْحَة.",
                    exampleEn: "Since yesterday I’ve had a cough.",
                },
                {
                    id: "doukha",
                    ar: "دُوخَة",
                    en: "dizziness",
                    hint:
                        "بِدُوخ = I feel dizzy.",
                    exampleAr: "لَمَّا بَقُوم بَسِرْعَة بَحِسّ بِدُوخَة.",
                    exampleEn: "When I stand up quickly I feel dizzy.",
                },
                {
                    id: "jar7",
                    ar: "جَرْح",
                    en: "wound / cut",
                    hint:
                        "جَرَح صْغِير = small cut. Verb: اِنْجَرَح = to get injured.",
                    exampleAr: "إِصْبِعِي فِيه جَرْح صْغِير، بَسّ بِوَجَع.",
                    exampleEn: "My finger has a small cut, but it hurts.",
                },
                {
                    id: "kasr",
                    ar: "كِسِر",
                    en: "broken bone / fracture",
                    hint:
                        "عِنْدُه كِسِر فِي إِجْرُه = he has a broken leg.",
                    exampleAr: "وَقَع مِن الدَّرَج وَصَار فِيه كِسِر.",
                    exampleEn: "He fell from the stairs and got a fracture.",
                },
                {
                    id: "nafas",
                    ar: "نَفَس",
                    en: "breath",
                    hint:
                        "مِش قَادِر آخُد نَفَس = I can’t breathe. دُغْرِي لِلْإِسْعَاف فِي هَيْك حَالَة.",
                    exampleAr: "الزَّلَمِي مِش قَادِر يَأْخُد نَفَس مْنِيح.",
                    exampleEn: "The man can’t breathe well.",
                },

                // ===== VERBS & CHUNKS =====
                {
                    id: "ba7es_hali",
                    ar: "بَحِسّ حَالِي...",
                    en: "I feel (myself)…",
                    hint:
                        "Followed by tired / sick / better: بَحِسّ حَالِي تَعْبَان / أَحْسَن.",
                    exampleAr: "الْيَوْم بَحِسّ حَالِي أَفْضَل مِن امْبَارِح.",
                    exampleEn: "Today I feel better than yesterday.",
                },
                {
                    id: "3indi_symptom",
                    ar: "عِنْدِي...",
                    en: "I have… (symptom)",
                    hint:
                        "Very useful: عِنْدِي وَجَع رَاس، عِنْدِي رَشَح، عِنْدِي حَرَارَة.",
                    exampleAr: "عِنْدِي وَجَع رَاس وَرَشَح شْوَيّ.",
                    exampleEn: "I have a headache and a little cold.",
                },
                {
                    id: "biwaja3ni_hon",
                    ar: "بِوَجَعْنِي هُون",
                    en: "It hurts here",
                    hint:
                        "Used with pointing. Doctor often asks: هُون؟ لَمَّا يِضْغَط.",
                    exampleAr: "بِوَجَعْنِي هُون لَمَّا أَضْغَط.",
                    exampleEn: "It hurts here when I press.",
                },
                {
                    id: "ba7taj_dawa",
                    ar: "بَحْتَاج دَّوَا",
                    en: "I need medicine",
                    hint:
                        "From اِحْتَاج = to need. Add ‘for’: بَحْتَاج دَّوَا لِلْكْحَة.",
                    exampleAr: "بَحْتَاج دَّوَا لِلرَّشَح وِالكْحَة.",
                    exampleEn: "I need medicine for the cold and cough.",
                },
                {
                    id: "ba7taj_doktor",
                    ar: "بَحْتَاج دِكْتُور",
                    en: "I need a doctor",
                    hint:
                        "Stronger: بَحْتَاج دِكْتُور هَلَّقْ = I need a doctor now.",
                    exampleAr: "هُوَّ تَعْبَان كْتِير، بَحْتَاج دِكْتُور هَلَّقْ.",
                    exampleEn: "He is very unwell; he needs a doctor now.",
                },
                {
                    id: "ittasel_bil_is3af",
                    ar: "اِتَّصِل عَالإِسْعَاف",
                    en: "Call an ambulance",
                    hint:
                        "Imperative to someone else. For ‘call the doctor’: اِتَّصِل فِي الدِّكْتُور.",
                    exampleAr: "حَدَا يِتَّصِل عَالإِسْعَاف بَسُرْعَة!",
                    exampleEn: "Someone call an ambulance quickly!",
                },
                {
                    id: "barta7",
                    ar: "بَرْتَاح",
                    en: "I rest",
                    hint:
                        "From اِرْتَاح = to rest. Used a lot when sick or tired.",
                    exampleAr: "الدِّكْتُور حَكَالي أَرْجَع عَلَى الْبَيْت وَأَرْتَاح يَوْمَيْن.",
                    exampleEn: "The doctor told me to go home and rest for two days.",
                },
                {
                    id: "bakhod_dawa",
                    ar: "بَاخُد دَّوَا",
                    en: "I take medicine",
                    hint:
                        "Very common chunk: بَاخُد دَّوَا ثَلَاث مَرَّات فِي الْيَوْم.",
                    exampleAr: "بَاخُد دَّوَا بَعْد الْأَكْل.",
                    exampleEn: "I take medicine after food.",
                },
                {
                    id: "bimshi_el7al",
                    ar: "بِمْشِي الْحَال",
                    en: "It’s okay / I’ll manage",
                    hint:
                        "Used when not too serious: ‘it’s manageable’.",
                    exampleAr: "مَو كْتِير وَجَع، بِمْشِي الْحَال.",
                    exampleEn: "It’s not too painful, I’ll manage.",
                },
            ],

            extra: [
                {
                    id: "7asasseyyeh",
                    ar: "حَسَاسِيَّة",
                    en: "allergy",
                    hint:
                        "حَسَاسِيَّة مِن دَّوَا / مِن أَكْل.",
                    exampleAr: "عِنْدِي حَسَاسِيَّة مِن نَوْع مُعَيَّن مِن الدَّوَا.",
                    exampleEn: "I have an allergy to a certain type of medicine.",
                },
                {
                    id: "dawa",
                    ar: "دَّوَا",
                    en: "medicine",
                    hint:
                        "Plural: أَدْوِيَة. Used for any medication.",
                    exampleAr: "الصَّيْدَلِي أَعْطَانِي دَّوَا لِلرَّشَح.",
                    exampleEn: "The pharmacist gave me medicine for the cold.",
                },
                {
                    id: "balash_tkhaf",
                    ar: "بَلَّشْت تِخَفّ",
                    en: "It started to get better",
                    hint:
                        "From خَفّ = to become lighter / less. For pain or symptoms.",
                    exampleAr: "بَعْد الدَّوَا الْوَجَع بَلَّشْ يِخَفّ.",
                    exampleEn: "After the medicine, the pain started to get better.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (multi-scene: feeling sick → clinic → small emergency)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – In class, student not feeling well
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، مْبَيِّن عَلَيْك تَعْبَانَة الْيَوْم، بَحِسّ حَالِك مْنِيح؟",
                    en: "Roba, you look tired today, do you feel okay?",
                },
                {
                    speaker: "Roba",
                    ar: "صَرَاحَةً، لَا. بَحِسّ حَالِي مَرِيضَة شْوَيّ، رَاسِي بِوَجَعْنِي وَعِنْدِي حَرَارَة.",
                    en: "Honestly, no. I feel a bit sick; my head hurts and I have a fever.",
                },
                {
                    speaker: "Teacher",
                    ar: "مِن إِمْتَى عِنْدِك هَالْأَعْرَاض؟",
                    en: "Since when do you have these symptoms?",
                },
                {
                    speaker: "Roba",
                    ar: "مِن امْبَارِح بِلَّيْل، وَالْيَوْم الصُّبِح صِحِيت تَعْبَانَة كْتِير.",
                    en: "Since last night, and this morning I woke up very tired.",
                },
                {
                    speaker: "Teacher",
                    ar: "أَحْسَن تْرُوحِي عَالدِّكْتُورَة بَعْد الدَّرْس، مَو تِتْهَاوَنِي مَع الْحَرَارَة.",
                    en: "It’s better you go to the doctor after the lesson; don’t take the fever lightly.",
                },

                // Scene 2 – At the clinic reception
                {
                    speaker: "Receptionist",
                    ar: "مَرْحَبَا، أَهْلًا فِيك فِي الْعِيَادَة. شُو عِنْدِك الْيَوْم؟",
                    en: "Hello, welcome to the clinic. What do you have today?",
                },
                {
                    speaker: "Roba",
                    ar: "عِنْدِي وَجَع رَاس قَوِي وَحَرَارَة، وَبَحِسّ حَالِي دَايْخَة.",
                    en: "I have a strong headache and a fever, and I feel dizzy.",
                },
                {
                    speaker: "Receptionist",
                    ar: "اِسْمِك؟ وَفِي عِنْدِك مَلَفّ هُون مِن قَبْل؟",
                    en: "Your name? And do you already have a file here?",
                },
                {
                    speaker: "Roba",
                    ar: "اِسْمِي رُوبَا مُرْتَجَى، يمكن عِنْدِي مَلَفّ قَدِيم.",
                    en: "My name is Roba Murtaja; maybe I have an old file.",
                },
                {
                    speaker: "Receptionist",
                    ar: "طَيِّب، اِسْتَنِّي شْوَيّ، الدِّكْتُورَة حَتْنَادِيك كَمَان دَقِيقَة.",
                    en: "Okay, wait a bit, the doctor will call you in a minute.",
                },

                // Scene 3 – With the doctor
                {
                    speaker: "Doctor",
                    ar: "أَهْلًا رُوبَا، سَلَامْتِك. اِحْكِي لِي شُو الْمُشْكِلَة.",
                    en: "Welcome, Roba, get well soon. Tell me what the problem is.",
                },
                {
                    speaker: "Roba",
                    ar: "مِن امْبَارِح عِنْدِي حَرَارَة وَوَجَع رَاس، وَاللَّيْل مَا نِمِت مْنِيح.",
                    en: "Since yesterday I’ve had a fever and headache, and last night I didn’t sleep well.",
                },
                {
                    speaker: "Doctor",
                    ar: "فِيه كْحَة أَو رَشَح؟ مَغْص فِي الْبَطِن؟",
                    en: "Do you have cough or a cold? Stomach cramps?",
                },
                {
                    speaker: "Roba",
                    ar: "عِنْدِي كْحَة خَفِيفَة، بَسّ مَا فِيه مَغْص. بَحِسّ دُوخَة لَمَّا أُوقَف.",
                    en: "I have a light cough, but no cramps. I feel dizzy when I stand up.",
                },
                {
                    speaker: "Doctor",
                    ar: "هَلَّقْ حَأَخُد لَك الْحَرَارَة وَالضَّغْط، وَبَعْدِين أَعْطِيك دَّوَا.",
                    en: "Now I’ll take your temperature and blood pressure, then give you medicine.",
                },
                {
                    speaker: "Doctor",
                    ar: "مُعْظَم الظَّن هَادَا رَشَح قَوِي. بَدِّك تَرْتَاحِي فِي الْبَيْت وَتَشْرَبِي مَيّ كْتِير.",
                    en: "Most probably this is a strong cold. You need to rest at home and drink plenty of water.",
                },
                {
                    speaker: "Roba",
                    ar: "فِيه خَطَر أَو شِي جِدّ؟",
                    en: "Is there any danger or something serious?",
                },
                {
                    speaker: "Doctor",
                    ar: "لَا، بَسّ إِذَا الْحَرَارَة مَا نِزْلِت رُوحِي عَلَى الْمُسْتَشْفَى تِتْأَكَّدُوا.",
                    en: "No, but if the fever doesn’t go down, go to the hospital to check.",
                },

                // Scene 4 – Small accident in the street
                {
                    speaker: "Narrator",
                    ar: "بَعْد أُسْبُوع، رُوبَا وَصَاحْبْتَهَا يَارَا مَاشِيِين فِي الشَّارِع.",
                    en: "A week later, Roba and her friend Yara are walking in the street.",
                },
                {
                    speaker: "Yara",
                    ar: "اِنْتَبِهِي رُوبَا، السِّلِّم مْبَلَّل!",
                    en: "Careful, Roba, the stairs are wet!",
                },
                {
                    speaker: "Narrator",
                    ar: "رُوبَا نْزَلَقِت وَوَقَعِت مِن عَلَى الدَّرَج.",
                    en: "Roba slipped and fell down the stairs.",
                },
                {
                    speaker: "Roba",
                    ar: "آخ، إِجْرِي بِتْوَجَّعْنِي كْتِير!",
                    en: "Ouch, my leg really hurts!",
                },
                {
                    speaker: "Yara",
                    ar: "حَدَا يِسَاعِد! مُمْكِن حَدَا يِتَّصِل عَالإِسْعَاف؟",
                    en: "Someone help! Can someone call an ambulance?",
                },
                {
                    speaker: "Bystander",
                    ar: "سَلَامْتِك أُخْتِي، هَلَّقْ بَتَّصِل. فِيه دَم أَو جَرْح كْبِير؟",
                    en: "Get well soon, sister, I’ll call now. Is there blood or a big wound?",
                },
                {
                    speaker: "Yara",
                    ar: "فِيه جَرْح صْغِير، بَسّ بِنْخَاف يِكُون فِيه كِسِر فِي الإِجْر.",
                    en: "There’s a small cut, but we’re afraid there might be a fracture in the leg.",
                },

                // Scene 5 – At the emergency room (short)
                {
                    speaker: "Nurse",
                    ar: "مَسَا الْخِير، شُو صَار مَعَك؟",
                    en: "Good evening, what happened to you?",
                },
                {
                    speaker: "Roba",
                    ar: "وَقَعِت مِن عَلَى الدَّرَج، وَهَلَّقْ إِجْرِي بِوَجَعْنِي لَمَّا أَمْشِي.",
                    en: "I fell from the stairs and now my leg hurts when I walk.",
                },
                {
                    speaker: "Nurse",
                    ar: "رَح نِعْمِل صُورَة لِلْإِجْر، اِسْتَنِّي شْوَيّ.",
                    en: "We’ll do an X-ray for the leg, wait a bit.",
                },
                {
                    speaker: "Narrator",
                    ar: "بَعْد الْفُحُوصَات طِلِع مَا فِيه كِسِر، بَسّ رَضَّة قَوِيَّة.",
                    en: "After the tests, it turned out there was no fracture, just a strong bruise.",
                },
                {
                    speaker: "Doctor",
                    ar: "خُذِي دَّوَا لِلْوَجَع، وَرِيحِي إِجْرِك كَمْ يَوْم.",
                    en: "Take pain medicine and rest your leg for a few days.",
                },
                {
                    speaker: "Yara",
                    ar: "سَلَامْتِك رُوبَا، مِرَّة جَاي مَا بَدْنَا دْرَامَا فِي الدَّرْس!",
                    en: "Get well soon, Roba; next time we don’t want drama in the lesson!",
                },
            ],
        },

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
                    ar: "شَقَّة",
                    en: "apartment / flat",
                    hint:
                        "Plural: شُقَق. ‘my apartment’ = شَقَّتِي. Used for rented or owned flats.",
                    exampleAr: "شَقَّتِي صْغِيرَة بَسّ مُرَتَّبَة.",
                    exampleEn: "My apartment is small but organized.",
                },
                {
                    id: "3imara",
                    ar: "عِمَارَة",
                    en: "building",
                    hint:
                        "Also بِنَايِة in some areas. عِمَارَة ثَلَاث طَوَابِق = three-floor building.",
                    exampleAr: "إِحْنَا سَاكْنِين فِي عِمَارَة قُرِيبَة مِن الْبَحَر.",
                    exampleEn: "We live in a building close to the sea.",
                },
                {
                    id: "taba2",
                    ar: "طَابِق",
                    en: "floor (level)",
                    hint:
                        "Plural: طَوَابِق. أَوَّل طَابِق / تَانِي طَابِق / طَابِق أَرْضِي.",
                    exampleAr: "شَقَّتْنَا فِي الطَّابِق التَّالِت.",
                    exampleEn: "Our apartment is on the third floor.",
                },
                {
                    id: "sellem",
                    ar: "سِلِّم",
                    en: "staircase / stairs",
                    hint:
                        "Plural: سَلالِم. بَطْلَع عَالسِّلِّم = I go up the stairs.",
                    exampleAr: "مَا فِيه أَسَنْسِير، كُلّ يَوْم بَطْلَع عَالسِّلِّم.",
                    exampleEn: "There is no elevator; every day I go up the stairs.",
                },
                {
                    id: "bab_el3imara",
                    ar: "بَاب الْعِمَارَة",
                    en: "building door / entrance",
                    hint:
                        "Also used generally for the main entrance.",
                    exampleAr: "بَاب الْعِمَارَة بِيِضَلّ مَفْتُوح بَعْد الْمَغْرِب.",
                    exampleEn: "The building door stays open after sunset.",
                },
                {
                    id: "jar",
                    ar: "جَار / جَارَة",
                    en: "neighbour",
                    hint:
                        "Masc: جَار, fem: جَارَة, plural: جِيرَان.",
                    exampleAr: "جِيرَانَّا لَطِيفِين بَسّ أَحْيَانًا عِنْدْهُم ضَجَّة.",
                    exampleEn: "Our neighbours are kind but sometimes they’re noisy.",
                },
                {
                    id: "sa7eb_elbeit",
                    ar: "صَاحِب الْبَيْت",
                    en: "landlord / owner",
                    hint:
                        "Literally ‘owner of the house’. Used for the one who owns the apartment.",
                    exampleAr: "صَاحِب الْبَيْت بِيِسْكُن فِي نَفْس الْعِمَارَة.",
                    exampleEn: "The landlord lives in the same building.",
                },
                {
                    id: "ijar",
                    ar: "إِيجَار",
                    en: "rent",
                    hint:
                        "Monthly rent. ‘I pay the rent’ = بِدْفَع الإِيجَار.",
                    exampleAr: "الإِيجَار بِتْدْفَع كُلّ أَوَّل شَهَر.",
                    exampleEn: "The rent is paid at the beginning of each month.",
                },

                // ===== ROOMS & FURNITURE =====
                {
                    id: "ghurfeh_noom",
                    ar: "غُرْفَة نُّوم",
                    en: "bedroom",
                    hint:
                        "Short: غُرْفَة. Plural: غُرَف.",
                    exampleAr: "فِي شَقَّتْنَا غُرْفَتَيْن نُّوم.",
                    exampleEn: "In our apartment there are two bedrooms.",
                },
                {
                    id: "salon",
                    ar: "صَالُون",
                    en: "living room / sitting room",
                    hint:
                        "Used for the main room for guests and family.",
                    exampleAr: "مِنِقْعُد فِي الصَّالُون نِتْفَرَّج عَلَى التِّلِفِزْيُون.",
                    exampleEn: "We sit in the living room and watch TV.",
                },
                {
                    id: "matbakh",
                    ar: "مَطْبَخ",
                    en: "kitchen",
                    hint:
                        "Plural: مَطَابِخ. ‘Open kitchen’ = مَطْبَخ مَفْتُوح.",
                    exampleAr: "مَطْبَخ الْبَيْت صْغِير بَسّ مُرَتَّب.",
                    exampleEn: "The kitchen is small but tidy.",
                },
                {
                    id: "7ammam",
                    ar: "حَمَّام",
                    en: "bathroom",
                    hint:
                        "Can also mean ‘toilet’ in context.",
                    exampleAr: "الحَمَّام فِي آخِر الْمَمَرّ.",
                    exampleEn: "The bathroom is at the end of the hallway.",
                },
                {
                    id: "balkon",
                    ar: "بَلكُون",
                    en: "balcony",
                    hint:
                        "Sometimes بَالْكُونَة. Used a lot in cities.",
                    exampleAr: "بَنْشَر الْغْسِيل عَلَى البَلكُون.",
                    exampleEn: "We hang the laundry on the balcony.",
                },
                {
                    id: "takhteh",
                    ar: "تَخْت",
                    en: "bed",
                    hint:
                        "Plural: تْخُوت. ‘my bed’ = تَخْتِي.",
                    exampleAr: "التَّخْت قُدَّام الشُّبَّاك.",
                    exampleEn: "The bed is in front of the window.",
                },
                {
                    id: "kanapeh",
                    ar: "كَنَبَايِة",
                    en: "sofa / couch",
                    hint:
                        "Plural: كَنَبَايَات.",
                    exampleAr: "فِي كَنَبَايِة كْبِيرَة فِي الصَّالُون.",
                    exampleEn: "There is a big sofa in the living room.",
                },
                {
                    id: "tawleh",
                    ar: "طَاوْلَة",
                    en: "table",
                    hint:
                        "Plural: طَوَاوِل. طَاوْلَة أَكْل = dining table.",
                    exampleAr: "مَنَاكِل عَلَى طَاوْلَة صْغِيرَة فِي الْمَطْبَخ.",
                    exampleEn: "We eat at a small table in the kitchen.",
                },
                {
                    id: "korsi",
                    ar: "كُرْسِي",
                    en: "chair",
                    hint:
                        "Plural: كَرَاسِي.",
                    exampleAr: "مَا فِيه كَرَاسِي كْفَايَة لِلضُّيُوف.",
                    exampleEn: "There aren’t enough chairs for the guests.",
                },

                // ===== UTILITIES & PROBLEMS =====
                {
                    id: "kahraba",
                    ar: "كَهرَبَا",
                    en: "electricity",
                    hint:
                        "مَا فِيه كَهرَبَا = there is no electricity. قَطْع كَهرَبَا = power cut.",
                    exampleAr: "فِي قَطْع كَهرَبَا كُلّ لَيْلَة تَقْرِيبًا.",
                    exampleEn: "There is a power cut almost every night.",
                },
                {
                    id: "mayy",
                    ar: "مَيّ",
                    en: "water",
                    hint:
                        "مَيّ قَطَرَة = running tap water; قَطْع مَيّ = no water.",
                    exampleAr: "الْيَوْم مَا فِيه مَيّ فِي الحَمَّام.",
                    exampleEn: "Today there is no water in the bathroom.",
                },
                {
                    id: "internet",
                    ar: "إِنْتَرْنِت",
                    en: "internet",
                    hint:
                        "Used as is. ضَعْف إِنْتَرْنِت = weak internet.",
                    exampleAr: "الإِنْتَرْنِت ضَعِيف، مَا بَقْدَر أَدْرُس أُونْلَايْن مْنِيح.",
                    exampleEn: "The internet is weak; I can’t study online well.",
                },
                {
                    id: "daw",
                    ar: "ضَوّ",
                    en: "light",
                    hint:
                        "For electricity / lamps: ضَوّ الْغُرْفَة.",
                    exampleAr: "ضَوّ الْمَطْبَخ مَا بِشْتَغِل.",
                    exampleEn: "The kitchen light doesn’t work.",
                },
                {
                    id: "mushkileh",
                    ar: "مُشْكِلَة",
                    en: "problem",
                    hint:
                        "Plural: مُشْكِلَات. مَا فِيه مُشْكِلَة = no problem.",
                    exampleAr: "فِي مُشْكِلَة فِي الْمَيّ مِن أُسْبُوع.",
                    exampleEn: "There has been a problem with the water for a week.",
                },
                {
                    id: "dojjeh",
                    ar: "ضَجَّة",
                    en: "noise",
                    hint:
                        "Also إِزْعَاج (more formal). ضَجَّة مِن الْجِيرَان.",
                    exampleAr: "فِيه ضَجَّة كْتِير مِن فُوق.",
                    exampleEn: "There is a lot of noise from upstairs.",
                },
                {
                    id: "ratoobe",
                    ar: "رُطُوبَة",
                    en: "humidity / damp",
                    hint:
                        "Used for walls and air. حِيط رَطِب = damp wall.",
                    exampleAr: "فِي رُطُوبَة عَلَى حِيط الحَمَّام.",
                    exampleEn: "There is humidity on the bathroom wall.",
                },
                {
                    id: "tasarrub",
                    ar: "تَسَرُّب",
                    en: "leak",
                    hint:
                        "From water / pipes. فِي تَسَرُّب مَيّ مِن السَّقِف.",
                    exampleAr: "فِي تَسَرُّب مَيّ فِي الْمَطْبَخ.",
                    exampleEn: "There is a water leak in the kitchen.",
                },
                {
                    id: "maksur",
                    ar: "مَكْسُور",
                    en: "broken",
                    hint:
                        "Masc: مَكْسُور, fem: مَكْسُورَة. For objects: بَاب مَكْسُور.",
                    exampleAr: "شُبَّاك الصَّالُون مَكْسُور.",
                    exampleEn: "The living room window is broken.",
                },

                // ===== VERBS / CHUNKS =====
                {
                    id: "basta2jer",
                    ar: "بَسْتَأْجِر",
                    en: "I rent (an apartment)",
                    hint:
                        "From اِسْتَأْجَر = to rent. بَسْتَأْجِر شَقَّة فِي غَزَّة.",
                    exampleAr: "هَادِي أَوَّل مَرَّة بَسْتَأْجِر شَقَّة لَحَالِي.",
                    exampleEn: "This is the first time I rent an apartment by myself.",
                },
                {
                    id: "badfa3_ijar",
                    ar: "بَدْفَع الإِيجَار",
                    en: "I pay the rent",
                    hint:
                        "Add time: كُلّ أَوَّل شَهَر / فِي نِصّ الشَّهَر.",
                    exampleAr: "بَدْفَع الإِيجَار أُونْلَايْن.",
                    exampleEn: "I pay the rent online.",
                },
                {
                    id: "byzabbET",
                    ar: "بِزَبِّط",
                    en: "he fixes / he repairs",
                    hint:
                        "Spoken verb: زَبَّط. بْنِزَبِّط الْمُشْكِلَة = we fix the problem.",
                    exampleAr: "صَاحِب الْبَيْت حَكَى إِنُّه حَيِزَبِّط التَّسَرُّب.",
                    exampleEn: "The landlord said he will fix the leak.",
                },
                {
                    id: "bittkasar",
                    ar: "بِتْكَسَّر",
                    en: "it breaks / gets broken",
                    hint:
                        "Passive meaning: اَللَّمْبَة بِتْكَسَّر كْتِير.",
                    exampleAr: "كُلّ شَهَر شِي بِتْكَسَّر فِي الشَّقَّة.",
                    exampleEn: "Every month something gets broken in the apartment.",
                },
                {
                    id: "bistanna_sabbaq",
                    ar: "بِسْتَنَّى السَّبَّاك",
                    en: "I wait for the plumber",
                    hint:
                        "سَبَّاك = plumber. Use with second professions too.",
                    exampleAr: "مِنِ الصُّبِح وَأَنَا بِسْتَنَّى السَّبَّاك.",
                    exampleEn: "I’ve been waiting for the plumber since morning.",
                },
                {
                    id: "batwasal_ma3",
                    ar: "بَتْوَاصَل مَع...",
                    en: "I contact / I get in touch with…",
                    hint:
                        "بَتْوَاصَل مَع صَاحِب الْبَيْت / مَع الشَّرِكَة.",
                    exampleAr: "لَمَّا فِي مُشْكِلَة بَتْوَاصَل مَع صَاحِب الْبَيْت.",
                    exampleEn: "When there is a problem, I contact the landlord.",
                },
                {
                    id: "fi_mushkileh_fi",
                    ar: "فِي مُشْكِلَة فِي...",
                    en: "There is a problem with…",
                    hint:
                        "Template: فِي مُشْكِلَة فِي الْمَيّ / فِي الضَّوّ / فِي البَلكُون.",
                    exampleAr: "فِي مُشْكِلَة فِي الإِنْتَرْنِت مِن امْبَارِح.",
                    exampleEn: "There has been a problem with the internet since yesterday.",
                },
                {
                    id: "ma_bishtghil",
                    ar: "مَا بِشْتَغِل",
                    en: "it doesn’t work",
                    hint:
                        "Used for any device: الضَّوّ مَا بِشْتَغِل، الغَسَّالَة مَا بِتِشْتَغِل.",
                    exampleAr: "السِّخَّان مَا بِشْتَغِل، الْمَيّ بَارْدَة.",
                    exampleEn: "The heater doesn’t work; the water is cold.",
                },
            ],

            extra: [
                {
                    id: "sakkan_jdid",
                    ar: "سَكَن جْدِيد",
                    en: "new place / new apartment (to live in)",
                    hint:
                        "Used when moving. نَقَلْت عَلَى سَكَن جْدِيد.",
                    exampleAr: "رُوبَا نَقَلِت عَلَى سَكَن جْدِيد قُرِيب مِن الْجَامْعَة.",
                    exampleEn: "Roba moved to a new place near the university.",
                },
                {
                    id: "sawt_3ali",
                    ar: "صَوْت عَالِي",
                    en: "loud sound / loud noise",
                    hint:
                        "Used for neighbours, TV, street.",
                    exampleAr: "فِي صَوْت عَالِي مِن شَقَّة الْجِيرَان كُلّ لَيْلَة.",
                    exampleEn: "There is a loud sound from the neighbours’ apartment every night.",
                },
                {
                    id: "mash7oun",
                    ar: "مَشْحُون",
                    en: "charged (for electricity card, meter)",
                    hint:
                        "For prepaid electricity: العَدَّاد مَشْحُون؟",
                    exampleAr: "نَسِينَا نِشْحَن الْعَدَّاد، قَطَعِت الْكَهرَبَا.",
                    exampleEn: "We forgot to charge the meter, the electricity went off.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (moving in, problems, landlord & neighbour)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Moving into a new apartment
                {
                    speaker: "Narrator",
                    ar: "رُوبَا لَقِت شَقَّة جْدِيدَة قُرِيبَة مِن الْجَامْعَة، وَرَاحِت تِشُوفْهَا مَع صَاحِب الْبَيْت.",
                    en: "Roba found a new apartment near the university and went to see it with the landlord.",
                },
                {
                    speaker: "Landlord",
                    ar: "مَرْحَبَا رُوبَا، أَهْلًا وَسَهْلًا. هَادِي الشَّقَّة، تْفَضَّلِي.",
                    en: "Hello Roba, welcome. This is the apartment, please come in.",
                },
                {
                    speaker: "Roba",
                    ar: "مَرْحَبَا، شُكْرًا. الشَّقَّة مُرَتَّبَة، كَم غُرْفَة فِيهَا؟",
                    en: "Hello, thank you. The apartment is tidy. How many rooms does it have?",
                },
                {
                    speaker: "Landlord",
                    ar: "فِيهَا غُرْفَتَيْن نُّوم، صَالُون، مَطْبَخ وَحَمَّام، وَبَلكُون صْغِيرَة.",
                    en: "It has two bedrooms, a living room, a kitchen and a bathroom, and a small balcony.",
                },
                {
                    speaker: "Roba",
                    ar: "فِي كَهْرَبَا وَمَيّ كُوَيِّس؟",
                    en: "Is the electricity and water good?",
                },
                {
                    speaker: "Landlord",
                    ar: "أَه طَبْعًا، بَسّ مَرَّات فِي قَطْع كَهرَبَا مِن الشِّرْكَة زَيّ كِلّ الْمِنْطَقَة.",
                    en: "Yes of course, but sometimes there are power cuts from the company like in the whole area.",
                },
                {
                    speaker: "Roba",
                    ar: "وَقَدِّيش الإِيجَار فِي الشَّهَر؟",
                    en: "And how much is the rent per month?",
                },
                {
                    speaker: "Landlord",
                    ar: "الإِيجَار أَلْف وَمِيّة شِيكِل، دُوْن فَوَاتِير.",
                    en: "The rent is 1100 shekels, without the bills.",
                },
                {
                    speaker: "Roba",
                    ar: "مُمْكِن نِشْمِل الإِنْتَرْنِت مَع الإِيجَار؟",
                    en: "Is it possible to include the internet with the rent?",
                },
                {
                    speaker: "Landlord",
                    ar: "مُمْكِن، بَسّ سَاعَتْهَا بِيِصِير الإِيجَار أَلْف وَثَلَاث مِيّة.",
                    en: "Possible, but then the rent becomes 1300.",
                },

                // Scene 2 – One month later: problems start
                {
                    speaker: "Narrator",
                    ar: "بَعْد شَهَر، بَلَّشِت تْظْهَر مُشْكِلَات صْغِيرَة فِي الشَّقَّة.",
                    en: "After a month, small problems started to appear in the apartment.",
                },
                {
                    speaker: "Roba",
                    ar: "صَبَاح الْخِير، أُسَامَة. فِي مُشْكِلَة فِي الْمَيّ فِي الْمَطْبَخ.",
                    en: "Good morning, Osama. There is a problem with the water in the kitchen.",
                },
                {
                    speaker: "Landlord",
                    ar: "شُو فِيه؟ مَا بِتِجِي مَيّ أَو فِي تَسَرُّب؟",
                    en: "What is it? No water coming or is there a leak?",
                },
                {
                    speaker: "Roba",
                    ar: "الحَنَفِيَّة بِتْسَرِّب مَيّ تَحْت السِّنْك، وَحِيط الصَّالُون صَار فِيه رُطُوبَة.",
                    en: "The tap is leaking water under the sink, and the living-room wall has become damp.",
                },
                {
                    speaker: "Landlord",
                    ar: "مُحْتَمَل اللِّيلَة أَبْعَت سَبَّاك يِشُوف الْمُشْكِلَة.",
                    en: "Probably tonight I’ll send a plumber to check the problem.",
                },
                {
                    speaker: "Roba",
                    ar: "لَوْ سَمَحْت، بَدِّي حَدَا يِجِي الْيَوْم، عَشَان التَّسَرُّب زَاد.",
                    en: "Please, I need someone to come today because the leak has increased.",
                },

                // Scene 3 – Noise from neighbours
                {
                    speaker: "Narrator",
                    ar: "فِي نَفْس الْأُسْبُوع، صَارَت مُشْكِلَة ضَجَّة مَع الْجِيرَان.",
                    en: "In the same week, there was a noise problem with the neighbours.",
                },
                {
                    speaker: "Roba",
                    ar: "مَسَا الْخِير، أَنَا رُوبَا مِن الطَّابِق التَّانِي.",
                    en: "Good evening, I’m Roba from the second floor.",
                },
                {
                    speaker: "Neighbour",
                    ar: "مَسَا النُّور، أَهْلًا رُوبَا. فِيه إِشِي؟",
                    en: "Good evening, welcome Roba. Is there something?",
                },
                {
                    speaker: "Roba",
                    ar: "بِصِرَاحَة فِي ضَجَّة كْتِير مِن عِنْدْكُمْ بَعْد الْمِسَا، خُصُوصًا يَوْم الدِّرَاسَة.",
                    en: "Honestly there is a lot of noise from your place at night, especially on study days.",
                },
                {
                    speaker: "Neighbour",
                    ar: "آسْفِين، الأَوْلاد بِلْعَبُوا كْرَة قَدَم جُوَّا الصَّالُون. رَاح نِحَاوِل نِهَدِّي الصَّوْت.",
                    en: "We’re sorry, the kids play football in the living room. We’ll try to lower the noise.",
                },
                {
                    speaker: "Roba",
                    ar: "شُكْرًا إِلْك، مَا بَدِّي أُزْعِل حَدَا، بَسّ عِنْدِي اِمْتِحَانَات.",
                    en: "Thank you; I don’t want to upset anyone, but I have exams.",
                },

                // Scene 4 – Technician visit
                {
                    speaker: "Narrator",
                    ar: "بِالنِّهَايَة إِجَى السَّبَّاك لِيِشُوف تَّسَرُّب الْمَيّ.",
                    en: "Finally the plumber came to check the water leak.",
                },
                {
                    speaker: "Plumber",
                    ar: "مَسَا الْخِير، أَنْتِ رُوبَا؟ صَاحِب الْبَيْت بَعَتْنِي.",
                    en: "Good evening, are you Roba? The landlord sent me.",
                },
                {
                    speaker: "Roba",
                    ar: "أَه، تْفَضَّل. التَّسَرُّب مِن تَحْت الحَنَفِيَّة، وَالرُّطُوبَة طِلِعِت عَالحِيط.",
                    en: "Yes, come in. The leak is under the tap, and the humidity has come up on the wall.",
                },
                {
                    speaker: "Plumber",
                    ar: "حَنَفِيَّة قَدِيمَة، بَدَّهَا تَّغْيِير. بَحَاوِل أَزَبِّط الْيَوْم.",
                    en: "The tap is old, it needs changing. I’ll try to fix it today.",
                },
                {
                    speaker: "Roba",
                    ar: "مُمْتَاز، شُكْرًا كْتِير. صَار لِي أُسْبُوع وَأَنَا بَسْتَنَّى حَدَا يِجِي.",
                    en: "Great, thanks a lot. I’ve been waiting a week for someone to come.",
                },
            ],
        },

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
                // ===== PLACES & PEOPLE =====
                {
                    id: "souk",
                    ar: "سُوق",
                    en: "market",
                    hint:
                        "Traditional market or large shopping area. Often many small stalls.",
                    exampleAr: "رُوحِنَا عَالسُّوق نِشْتَرِي خُضَر وَفَواكِه.",
                    exampleEn: "We go to the market to buy vegetables and fruits.",
                },
                {
                    id: "ma7al",
                    ar: "مَحَلّ / مَحَلّات",
                    en: "shop / stores",
                    hint:
                        "Singular: مَحَلّ, plural: مَحَلّات. Small shops or boutiques.",
                    exampleAr: "فِي مَحَلّ بِيعْنَا أَحْسَن أَسْعَار.",
                    exampleEn: "There is a shop that sells us the best prices.",
                },
                {
                    id: "bakkal",
                    ar: "بَقَّال",
                    en: "grocer / small grocery store",
                    hint:
                        "Typical neighbourhood small store. Plural: بَقَّالِين.",
                    exampleAr: "بَقَّال القَرْيَة عِنْدُه خَبَز طَازِج.",
                    exampleEn: "The village grocer has fresh bread.",
                },
                {
                    id: "3amel_kass",
                    ar: "عَامِل كَاس",
                    en: "cashier",
                    hint:
                        "Person at checkout. Also used in small shops or supermarkets.",
                    exampleAr: "الدَّفْع عِند عَامِل الكَاس بِلْوَقْت.",
                    exampleEn: "Payment is done with the cashier at the time.",
                },

                // ===== MONEY & PRICE =====
                {
                    id: "shekel",
                    ar: "شِيكِل",
                    en: "shekel",
                    hint:
                        "Currency unit in Palestine and Israel. Plural: شِيكِلَات.",
                    exampleAr: "هَادِي قِيمَتُهَا خَمْسِين شِيكِل.",
                    exampleEn: "This costs fifty shekels.",
                },
                {
                    id: "dolar",
                    ar: "دُولَار",
                    en: "dollar",
                    hint:
                        "Used sometimes in pricing. Plural: دُولَارَات.",
                    exampleAr: "السِّعْر بالِدُولَار أَقَلّ مِن بِالْشِّيكِل هَالْمَرَّة.",
                    exampleEn: "The price in dollars is less than in shekels this time.",
                },
                {
                    id: "thaman",
                    ar: "ثَمَن",
                    en: "price / cost",
                    hint:
                        "Formal word but used in speech. Often in shops or when asking.",
                    exampleAr: "شُو ثَمَن هَادِي الكَمِيصَة؟",
                    exampleEn: "What is the price of this shirt?",
                },
                {
                    id: "bikam",
                    ar: "بِكَم؟",
                    en: "How much? / For how much?",
                    hint:
                        "Very common question for price in Levantine dialects. Short, direct.",
                    exampleAr: "هَادَا بِيْعْنُوه بِكَم؟",
                    exampleEn: "How much do they sell this for?",
                },
                {
                    id: "ghali",
                    ar: "غَالِي",
                    en: "expensive",
                    hint:
                        "Masc: غَالِي, fem: غَالِيَة, plural: غَالِين.",
                    exampleAr: "هَادَا غَالِي كْتِير، مَا بَكْفِي عِندِي مَال.",
                    exampleEn: "This is too expensive; I don’t have enough money.",
                },
                {
                    id: "rakhis",
                    ar: "رَخِيْص",
                    en: "cheap",
                    hint:
                        "Masc: رَخِيص, fem: رَخِيصَة, plural: رَخِيصِين.",
                    exampleAr: "هُوَّا صَار يِبِيع رَخِيص لِمُدَّة مَعَيَّنَة.",
                    exampleEn: "He started selling cheap for a limited time.",
                },
                {
                    id: "munaasib",
                    ar: "مُنَاسِب",
                    en: "reasonable / suitable",
                    hint:
                        "Describes price or fit. Often means fair price.",
                    exampleAr: "السِّعْر هَيّ مُنَاسِب، آخُد الْمِنْدِيل.",
                    exampleEn: "The price is reasonable; I’ll take the scarf.",
                },
                {
                    id: "kthir",
                    ar: "كْتِير",
                    en: "too much / a lot",
                    hint:
                        "Used for price or quantity. Common in speech.",
                    exampleAr: "السِّعْر كْتِير. مُمْكِن نِنَاقِص؟",
                    exampleEn: "The price is too much. Can we reduce?",
                },
                {
                    id: "shway",
                    ar: "شْوَيّ",
                    en: "a little / just a bit",
                    hint:
                        "Very common. Works with price or quantity.",
                    exampleAr: "كَمِّنِي شْوَيّ، يَلَّا.",
                    exampleEn: "Reduce it a little for me, come on.",
                },

                // ===== NUMBERS & QUANTITY =====
                {
                    id: "wa7ad",
                    ar: "وَاحِد",
                    en: "one",
                    hint:
                        "Basic number. Use with counters and items.",
                    exampleAr: "بَدِّي وَاحِد مِن هَادَا.",
                    exampleEn: "I want one of this.",
                },
                {
                    id: "etneen",
                    ar: "اتْنَيْن",
                    en: "two",
                    hint:
                        "Used as number. Followed by noun in correct form.",
                    exampleAr: "بَدِّي اتْنَيْن خُبْز.",
                    exampleEn: "I want two breads.",
                },
                {
                    id: "tlateh",
                    ar: "تَلَاتَة",
                    en: "three",
                    hint:
                        "Used as number. Same idea.",
                    exampleAr: "أَخُد تَلَاتَة كُتُف مِن الفَواكِه.",
                    exampleEn: "Take three kilos of fruit.",
                },
                {
                    id: "kilo",
                    ar: "كِيلُو",
                    en: "kilogram",
                    hint:
                        "Used for weight. Plural: كِيلُوهَات.",
                    exampleAr: "كِيلُو طَمَاطِم، وَكِيلُو بَطَاطَا.",
                    exampleEn: "A kilo of tomatoes and a kilo of potatoes.",
                },
                {
                    id: "3ala_shway",
                    ar: "عَلَى شْوَيّ",
                    en: "a little bit / small amount",
                    hint:
                        "Use for quick small purchases.",
                    exampleAr: "عَلَى شْوَيّ زُعْتَر وَزَيْت زَيْتُون.",
                    exampleEn: "A little bit of zaatar and olive oil.",
                },

                // ===== VERBS & CHUNKS =====
                {
                    id: "badfa3",
                    ar: "بَدْفَع",
                    en: "I pay",
                    hint:
                        "Follow with price or method. Present tense with b‑ prefix common in Levantine dialects. :contentReference[oaicite:0]{index=0}",
                    exampleAr: "بَدْفَع مَعْ كَارْد أَو نَقْد.",
                    exampleEn: "I pay with card or cash.",
                },
                {
                    id: "bikamm",
                    ar: "بِكَم بـ...",
                    en: "How much is ...?",
                    hint:
                        "Add item: بِكَم بِالكوحة؟ etc. Variant shortened from بِكَم.",
                    exampleAr: "بِكَم بِالقَمِيص؟",
                    exampleEn: "How much is the shirt?",
                },
                {
                    id: "bi3tini",
                    ar: "بِعْطِينِي",
                    en: "Give me / sell me",
                    hint:
                        "Used when asking seller to give or sell item.",
                    exampleAr: "بِعْطِينِي هَادِي، لَوْ سَمَحْت.",
                    exampleEn: "Give me this, please.",
                },
                {
                    id: "bashuf",
                    ar: "بَشُوف",
                    en: "I look / I’m looking",
                    hint:
                        "Used when browsing items.",
                    exampleAr: "بَشُوف فْي حَاجَة جَدِيدَة لِلشِّتَا.",
                    exampleEn: "I’m looking for something new for winter.",
                },
                {
                    id: "bi3tidh",
                    ar: "بِعْطِيك",
                    en: "I give you",
                    hint:
                        "From أعطى, used when seller offers price or item.",
                    exampleAr: "بِعْطِيك بُلُوزَة بِخَمْسِين شِيكِل.",
                    exampleEn: "I give you a blouse for fifty shekels.",
                },
                {
                    id: "kthir_3alik",
                    ar: "كْتِير عَلَيْك",
                    en: "too much for you",
                    hint:
                        "Polite way to say something is expensive.",
                    exampleAr: "هَادَا كْتِير عَلَيْك، مُمْكِن نِنَاقِص شْوَيّ؟",
                    exampleEn: "This is too much for you, can we reduce a bit?",
                },
            ],

            extra: [
                {
                    id: "takhfid",
                    ar: "تَخْفِيض",
                    en: "discount",
                    hint:
                        "Used for sales. Often in stores and markets.",
                    exampleAr: "فِيه تَخْفِيض خُصُوصِي لِلنِّهَاِيَة.",
                    exampleEn: "There is a special discount for the end.",
                },
                {
                    id: "kul_3ala_3alamat",
                    ar: "كُلّ عَلَى عَلَامَات",
                    en: "check tags / labels",
                    hint:
                        "Used to check sizes or price tags in shops.",
                    exampleAr: "لا تِنسَى تِلْفَت أَعْلَامَة السِّعْر قَبْل ما تِشْتَرِي.",
                    exampleEn: "Don’t forget to look at the price tag before buying.",
                },
                {
                    id: "mabrouk",
                    ar: "مَبْرُوك",
                    en: "congratulations",
                    hint:
                        "Used after a good buy or when someone gets a deal.",
                    exampleAr: "مَبْرُوك! أَخَذْت هَدِيَّة جَمِيلَة بِنصّ السِّعْر.",
                    exampleEn: "Congrats! You got a nice gift at half price.",
                },
            ],
        },

        // ====================================
        // DIALOGUE
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – At a market stall buying fruit
                {
                    speaker: "Seller",
                    ar: "صَبَاح الْخِير، تْفَضَّلِي! فَواكِه طَازَة اليَوْم.",
                    en: "Good morning, come in! Fresh fruits today.",
                },
                {
                    speaker: "Student",
                    ar: "صَبَاح الْخِير، بَشُوف شْوَيّ بَطَّاطَا وَطَمَاطِم.",
                    en: "Good morning, I’m looking at some potatoes and tomatoes.",
                },
                {
                    speaker: "Seller",
                    ar: "كَمّ بِدِّك؟",
                    en: "How much do you want?",
                },
                {
                    speaker: "Student",
                    ar: "بَدِّي كِيلُو طَمَاطِم وَتَلَاتَة كِيلُوهَات بَطَّاطَا.",
                    en: "I want one kilo of tomatoes and three kilos of potatoes.",
                },
                {
                    speaker: "Seller",
                    ar: "طَيِّب، شَتَانِيهُم مَع بَعْض؟ بِسِّعْر خَمْسِين شِيكِل.",
                    en: "Okay, both together? At a price of fifty shekels.",
                },
                {
                    speaker: "Student",
                    ar: "خَمْسِين؟ هَادَا شْوَي غَالِي. مُمْكِن تِنَاقِص شْوَيّ؟",
                    en: "Fifty? That’s a bit expensive. Can you reduce a little?",
                },
                {
                    speaker: "Seller",
                    ar: "آسِف، الْكِيلُوهَات كْتِير. أَخُفِّض لِكْ تِلْتِين شِيكِل.",
                    en: "Sorry, the kilos are many. I’ll reduce three shekels for you.",
                },
                {
                    speaker: "Student",
                    ar: "شُكْرًا كْتِير. يَلَّا بَدْفَع خَمْس وَارْبَعِين شِيكِل.",
                    en: "Thank you very much. Okay I pay forty-five shekels.",
                },
                {
                    speaker: "Seller",
                    ar: "تِسْلَمِي. خُدِي مَا لَك زَاد، نَشُوفَك مَرَّة تَانِي.",
                    en: "Bless you. Take your change; see you next time.",
                },

                // Scene 2 – Buying clothes in a small shop
                {
                    speaker: "Shop Owner",
                    ar: "أَهْلًا، إِذَا بِدِّك لِبْس جَدِيد لِلشِّتَا، هُوّ لِحَالَك.",
                    en: "Welcome, if you want new winter clothes, here they are.",
                },
                {
                    speaker: "Student",
                    ar: "بِشُوف هَادِي القَمِيصَة، بِيْعْنُوه بِكَم؟",
                    en: "I’m looking at this shirt; how much do they sell it for?",
                },
                {
                    speaker: "Shop Owner",
                    ar: "هَادِي بِيِعُوهَا بِتِسْعِين شِيكِل.",
                    en: "They sell it for ninety shekels.",
                },
                {
                    speaker: "Student",
                    ar: "تِسْعِين غَالِي. مُمْكِن نِنَاقِص؟",
                    en: "Ninety is expensive. Can we reduce?",
                },
                {
                    speaker: "Shop Owner",
                    ar: "مِنْ أُول تِلْتِين شِيكِل. إِنْتِ أَوَّل مَرَّة تِشْتِرِي مِنْنِي.",
                    en: "From the start three shekels. It’s your first time buying from me.",
                },
                {
                    speaker: "Student",
                    ar: "حَسَن، يَلَّا شُكْرًا. بَدْفَع سِتِّين شِيكِل.",
                    en: "Okay, thanks. I pay sixty shekels.",
                },
                {
                    speaker: "Shop Owner",
                    ar: "تِسْلَمِي. بْتِجِي كُلّ شَهْر طَلِع بِنِزْلَة.",
                    en: "Bless you. Come every month; there’s a discount.",
                },

                // Scene 3 – Online purchase conversation
                {
                    speaker: "Student",
                    ar: "بَدِّي أَشْتَرِي هَادَا الْهَاتِف عَلَى الأِنْتَرْنِت. شُو ثَمَنُه؟",
                    en: "I want to buy this phone online. What is its price?",
                },
                {
                    speaker: "Seller Online",
                    ar: "الثَّمَن سَاعِدَة عَلى التَّوَاصُل. مُمكِن نِدْفَع بِالْبَنْك كَارْد أَو نَقْد عِنْد التَّسْلِيم.",
                    en: "The price is sent via message. We can pay by bank card or cash on delivery.",
                },
                {
                    speaker: "Student",
                    ar: "مُمْكِن تِعْطِينِي السِّعْر خُصُوصِي؟ أَنَا طَالْب.",
                    en: "Can you give me the special price? I’m a student.",
                },
                {
                    speaker: "Seller Online",
                    ar: "نَعَم، خَصْم لِلطُّلاّب تِلْتِين شِيكِل. أَنْتَ أَخُد سِتَّة وَسِتِّين شِيكِل.",
                    en: "Yes, student discount of thirty shekels. You take sixty-six shekels.",
                },
                {
                    speaker: "Student",
                    ar: "مُمْتَاز، يَلَّا بَدْفَع. شُكْرًا عَلَى الْخِدْمَة.",
                    en: "Great, okay I pay. Thanks for the service.",
                },
            ],
        },

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

    // Inside your defaultLessons literal:
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
                    hint: "Main word for ‘weather’ in everyday speech.",
                    exampleAr: "اليوم الجَوّ حِلُو.",
                    exampleEn: "The weather is nice today.",
                },
                {
                    id: "sa3b_jaww",
                    ar: "الجَوّ صَعْب",
                    en: "the weather is tough / harsh",
                    hint: "Used when weather is uncomfortable (too hot, too cold…).",
                    exampleAr: "بِهَذَا الفَصِل الجَوّ صَعْب.",
                    exampleEn: "In this season the weather is harsh.",
                },
                {
                    id: "bared",
                    ar: "بَرْد",
                    en: "cold",
                    hint: "Used as ‘it’s cold’: اليَوْم في بَرْد.",
                    exampleAr: "فِي بَرْد قَوِي بِاللَّيْل.",
                    exampleEn: "It’s very cold at night.",
                },
                {
                    id: "shawb",
                    ar: "شُوب",
                    en: "heat / hot weather",
                    hint: "Used for hot weather: في شُوب اليوم.",
                    exampleAr: "فِي شُوب مْزْعِج بِالصَّيْف.",
                    exampleEn: "There’s annoying heat in the summer.",
                },
                {
                    id: "daafi",
                    ar: "دَافِي",
                    en: "warm",
                    hint: "Masc: دَافِي, fem: دَافْيَة.",
                    exampleAr: "الجَوّ دَافِي بِالرَّبِيع.",
                    exampleEn: "The weather is warm in spring.",
                },
                {
                    id: "mrattab",
                    ar: "مْرَتَّب",
                    en: "pleasant / nice (about weather)",
                    hint: "Literally ‘tidy’, used casually to mean nice/pleasant.",
                    exampleAr: "اليَوْم الجَوّ مْرَتَّب، لَا شُوب وَلَا بَرْد.",
                    exampleEn: "Today the weather is pleasant, neither hot nor cold.",
                },
                {
                    id: "mshmess",
                    ar: "مْشَمَّس",
                    en: "sunny",
                    hint: "From شَمْس (sun).",
                    exampleAr: "بُكْرَا الجَوّ مْشَمَّس.",
                    exampleEn: "Tomorrow the weather is sunny.",
                },
                {
                    id: "mghayyam",
                    ar: "مْغَيَّم",
                    en: "cloudy / overcast",
                    hint: "Used when the sky is full of clouds.",
                    exampleAr: "السَّمَا مْغَيَّمَة الْيَوْم.",
                    exampleEn: "The sky is cloudy today.",
                },
                {
                    id: "matar",
                    ar: "مَطَر",
                    en: "rain",
                    hint: "There is rain: في مَطَر.",
                    exampleAr: "أَحْلَى شَيْ لَمَّا يِنْزِل مَطَر.",
                    exampleEn: "The best thing is when it rains.",
                },
                {
                    id: "btemTor",
                    ar: "بْتِمْطِر",
                    en: "it rains / it’s raining",
                    hint: "Present: هَلَّق بْتِمْطِر = it’s raining now.",
                    exampleAr: "بَرَّه بْتِمْطِر، لَابْسِة جَاكِيت؟",
                    exampleEn: "It’s raining outside, are you wearing a jacket?",
                },
                {
                    id: "riya7",
                    ar: "رِيَاح",
                    en: "winds",
                    hint: "Often singular رِيح in speech.",
                    exampleAr: "فِي رِيح قَوِيّة بَاللَّيْل.",
                    exampleEn: "There’s strong wind at night.",
                },
                {
                    id: "ghubar",
                    ar: "غُبَار",
                    en: "dust",
                    hint: "Used with ‘جو مْعَجَّج’ (dusty weather).",
                    exampleAr: "الجَوّ اليَوْم فِيه غُبَار.",
                    exampleEn: "There’s dust in the air today.",
                },
                {
                    id: "rtoubeh",
                    ar: "رُطُوبَة",
                    en: "humidity",
                    hint: "Very common in coastal cities (like Gaza).",
                    exampleAr: "الرُّطُوبَة عَالِيَة بِالصَّيْف.",
                    exampleEn: "The humidity is high in summer.",
                },
                {
                    id: "3asefa",
                    ar: "عَاصْفَة",
                    en: "storm",
                    hint: "For strong wind and rain.",
                    exampleAr: "اللَّيْلِة فِيه عَاصْفَة، بْنِضَلّ فِي الْبَيْت.",
                    exampleEn: "Tonight there is a storm; we stay at home.",
                },
                {
                    id: "talj",
                    ar: "تَلْج",
                    en: "snow",
                    hint: "Not everywhere, but high cities maybe.",
                    exampleAr: "مَرَّة فِي السَّنَة مُمْكِن يِنْزِل تَلْج.",
                    exampleEn: "Maybe once a year it snows.",
                },
                {
                    id: "fog",
                    ar: "ضَّبَاب",
                    en: "fog",
                    hint: "Low visibility, especially in mornings.",
                    exampleAr: "فِي ضَّبَاب عَلَى الطَّرِيق السَّحِر.",
                    exampleEn: "There’s fog on the road early in the morning.",
                },

                // ===== SEASONS & TIMES =====
                {
                    id: "fasl",
                    ar: "فَصِل",
                    en: "season",
                    hint: "Plural: فُصُول.",
                    exampleAr: "أَحْب فَصِل الرَّبِيع.",
                    exampleEn: "I love the spring season.",
                },
                {
                    id: "seif",
                    ar: "صَيْف",
                    en: "summer",
                    hint: "",
                    exampleAr: "الصَّيْف فِي غَزَّة شُوب وَرُطُوبَة.",
                    exampleEn: "Summer in Gaza is hot and humid.",
                },
                {
                    id: "sheta",
                    ar: "شِتَا",
                    en: "winter",
                    hint: "",
                    exampleAr: "بِالشِّتَا بَحِبّ أَشْرَب شَاي سُخُن.",
                    exampleEn: "In winter I like to drink hot tea.",
                },
                {
                    id: "rabee3",
                    ar: "رَبِيع",
                    en: "spring",
                    hint: "",
                    exampleAr: "الرَّبِيع أَهْدَأ فَصِل عِنْدِي.",
                    exampleEn: "Spring is the calmest season for me.",
                },
                {
                    id: "kharif",
                    ar: "خَرِيف",
                    en: "autumn / fall",
                    hint: "",
                    exampleAr: "بِالخَرِيف بْتِقَع الوَرَق مِن الشَّجَر.",
                    exampleEn: "In autumn the leaves fall from the trees.",
                },

                // ===== SMALL TALK CHUNKS =====
                {
                    id: "keef_el_jaww_3andak",
                    ar: "كِيف الجَوّ عِنْدَك؟",
                    en: "How’s the weather where you are?",
                    hint: "Good opener on calls with people in other places.",
                    exampleAr: "كِيف الجَوّ عِنْدَك اليَوْم؟",
                    exampleEn: "How’s the weather where you are today?",
                },
                {
                    id: "sho_hada_el_jaww",
                    ar: "شُو هَادَا الجَوّ!",
                    en: "What is this weather! / Wow, this weather!",
                    hint: "Expressing surprise (good or bad). Tone decides.",
                    exampleAr: "شُو هَادَا الجَوّ! مَرَّة شُوب مَرَّة بَرْد.",
                    exampleEn: "What is this weather! One moment hot, one moment cold.",
                },
                {
                    id: "ma_bastahmel_el_shoub",
                    ar: "مَا بَسْتَحْمِل الشُّوب.",
                    en: "I can’t stand the heat.",
                    hint: "Strong personal opinion.",
                    exampleAr: "صِرَاحَةً، مَا بَسْتَحْمِل الشُّوب.",
                    exampleEn: "Honestly, I can’t stand the heat.",
                },
                {
                    id: "b7eb_el_matar",
                    ar: "بَحِبّ المَطَر.",
                    en: "I love the rain.",
                    hint: "",
                    exampleAr: "بَحِبّ المَطَر، بْحِسّ بِيِه هُدُوء.",
                    exampleEn: "I love the rain; I feel calm with it.",
                },
                {
                    id: "mni7_lil_mashi",
                    ar: "مْنِيح لِلْمَشِي",
                    en: "good for walking",
                    hint: "Useful opinion chunk to extend small talk.",
                    exampleAr: "اليَوْم الجَوّ مْنِيح لِلْمَشِي.",
                    exampleEn: "Today the weather is good for walking.",
                },
                {
                    id: "dayman_heik",
                    ar: "دَايْمَنْ هَيْك",
                    en: "it’s always like this",
                    hint: "Explains local climate.",
                    exampleAr: "فِي الرَّبِيع الجَوّ بَيْتْغَيَّر سَرِيع، دَايْمَنْ هَيْك.",
                    exampleEn: "In spring the weather changes quickly, it’s always like this.",
                },
                {
                    id: "3an_jad",
                    ar: "عَنْ جَدّ؟",
                    en: "Really?",
                    hint: "Keeps small talk going; shows interest.",
                    exampleAr: "عَنْ جَدّ؟ مَا كُنْت مُتَوَقِّع شِتَا اليَوْم.",
                    exampleEn: "Really? I wasn’t expecting rain today.",
                },
                {
                    id: "wallah",
                    ar: "وَالله",
                    en: "really / honestly / I swear",
                    hint: "Very common filler for emphasis.",
                    exampleAr: "وَالله اليَوْم بَرْد أَكْثَر مِن امْبَارِح.",
                    exampleEn: "Honestly, today is colder than yesterday.",
                },
                {
                    id: "saraha",
                    ar: "صَرَاحَةً",
                    en: "honestly / to be honest",
                    hint: "Good for sharing opinion in small talk.",
                    exampleAr: "صَرَاحَةً، مَا بَحِبّ الشِّتَا.",
                    exampleEn: "Honestly, I don’t like winter.",
                },
                {
                    id: "tqleb_sere3",
                    ar: "بْتِقْلِب سَرِيع",
                    en: "it changes quickly",
                    hint: "Used for weather or mood.",
                    exampleAr: "الجَوّ فِي الرَّبِيع بْتِقْلِب سَرِيع.",
                    exampleEn: "The weather in spring changes quickly.",
                },
            ],

            extra: [
                {
                    id: "nashif_hawa",
                    ar: "هَوَا نَاشِف",
                    en: "dry air",
                    hint: "",
                    exampleAr: "فِي الْجَبَل الهَوَا نَاشِف شْوَيّ.",
                    exampleEn: "In the mountain the air is a bit dry.",
                },
                {
                    id: "m3jo2",
                    ar: "مْخْنُوق",
                    en: "stuffy / suffocating (about air)",
                    hint: "Used when air feels heavy or polluted.",
                    exampleAr: "الجَوّ مْخْنُوق، مَا فِيه هَوَا.",
                    exampleEn: "The air feels stuffy; there’s no breeze.",
                },
                {
                    id: "bardo",
                    ar: "بَرْضُه",
                    en: "still / anyway",
                    hint: "Filler to continue small talk.",
                    exampleAr: "بَرْضُه، مَع كُلّ هَادَا بَحِبّ الرَّبِيع أَكْثَر.",
                    exampleEn: "Still, with all that, I like spring more.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (3 LONG SCENES)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – At university entrance (classic small talk)
                {
                    speaker: "Narrator",
                    ar: "رُوبَا وَصَاحِبْتَهَا لِين بِيِسْتَنُّوا بَرَّه عَنْد بَاب الْجَامْعَة.",
                    en: "Roba and her friend Lynn are waiting outside at the university gate.",
                },
                {
                    speaker: "Roba",
                    ar: "صَبَاح الْخِير يَا لِين! شُو هَادَا الجَوّ؟ مَرَّة شُوب مَرَّة بَرْد.",
                    en: "Good morning, Lynn! What is this weather? One moment hot, one moment cold.",
                },
                {
                    speaker: "Lynn",
                    ar: "صَبَاح النُّور! وَالله عِنْدِك حَقّ، الجَوّ اليَوْم مْغَيَّم وَرُطُوبَة عَالِيَة.",
                    en: "Good morning! You’re right, the weather today is cloudy and very humid.",
                },
                {
                    speaker: "Roba",
                    ar: "كِيف الجَوّ عِنْدْك فِي الحَارَة؟ عِنَّا بِالْبَيْت بَرْد أَكْثَر.",
                    en: "How’s the weather in your neighborhood? At our home it’s even colder.",
                },
                {
                    speaker: "Lynn",
                    ar: "عِنَّا كَمَان بَرْد، بَسّ صَرَاحَةً بَحِبّ هَيْك جَوّ. مْنِيح لِلْمَشِي بَعْد الدَّرْس.",
                    en: "It’s also cold at ours, but honestly I like this kind of weather. It’s good for walking after class.",
                },
                {
                    speaker: "Roba",
                    ar: "عَنْ جَدّ؟ أَنَا مَا بَسْتَحْمِل البَرْد. بَفضَّل الجَوّ الدَّافِي.",
                    en: "Really? I can’t stand the cold. I prefer warm weather.",
                },
                {
                    speaker: "Lynn",
                    ar: "بِالصَّيْف فِي غَزَّة شُوب مَجْنُون. مَا بَسْتَحْمِل الشُّوب أَبَدًا.",
                    en: "In summer in Gaza the heat is crazy. I can’t stand the heat at all.",
                },
                {
                    speaker: "Roba",
                    ar: "صَح، الصَّيْف مْتْعِب، بَسّ الشِّتَا كَمَان مْتْعِب. الجَوّ دَايْمَنْ بْتِقْلِب سَرِيع.",
                    en: "True, summer is exhausting, but winter is also exhausting. The weather always changes quickly.",
                },
                {
                    speaker: "Lynn",
                    ar: "المُهِمّ، الجَوّ اليَوْم مْرَتَّب لِلْقَهْوِة بَعْد المُحَاضَرَة.",
                    en: "The important thing is, today’s weather is perfect for coffee after the lecture.",
                },
                {
                    speaker: "Roba",
                    ar: "فِكْرَة حِلْوَة! يَلَّا بَعْد الدَّرْس مِنْطْلَع عَالكَافِيه.",
                    en: "Nice idea! Let’s go to a café after class.",
                },

                // Scene 2 – On the bus, talking to a stranger
                {
                    speaker: "Narrator",
                    ar: "بَعْد الدَّرْس، رُوبَا رَكِبِت بَاص مُزْدَحِم وَقَعَدِت جَنْب وَاحِدَة مَجْهُولَة.",
                    en: "After class, Roba took a crowded bus and sat next to a stranger.",
                },
                {
                    speaker: "Stranger",
                    ar: "مَسَا الْخِير.",
                    en: "Good evening.",
                },
                {
                    speaker: "Roba",
                    ar: "مَسَا النُّور.",
                    en: "Good evening.",
                },
                {
                    speaker: "Stranger",
                    ar: "اليَوْم الجَوّ غَرِيب شْوَيّ، صُبِح شُوب وَهَلَّق فِي مَطَر.",
                    en: "Today the weather is a bit strange; it was hot in the morning and now there’s rain.",
                },
                {
                    speaker: "Roba",
                    ar: "وَالله صَحّ. السَّمَا مْغَيَّمَة وَفِي رِيح بَرْد.",
                    en: "Honestly, that’s true. The sky is cloudy and there’s a cold wind.",
                },
                {
                    speaker: "Stranger",
                    ar: "بْتِحِبّ الشِّتَا أَو الصَّيْف أَكْثَر؟",
                    en: "Do you like winter or summer more?",
                },
                {
                    speaker: "Roba",
                    ar: "مُمكِن أَحْكِي: وَلَا وَاحِد. صَرَاحَةً بَحِبّ الرَّبِيع وَالخَرِيف، الجَوّ فِيه بَكُون مْرَتَّب.",
                    en: "I could say: neither. Honestly, I like spring and autumn; the weather then is pleasant.",
                },
                {
                    speaker: "Stranger",
                    ar: "عَنْ جَدّ؟ أَنَا العَكْس، بَحِبّ الشِّتَا بَلِيل. المَطَر بْيِعْمِل جَوّ هَادِي.",
                    en: "Really? I’m the opposite; I like winter at night. Rain creates a calm mood.",
                },
                {
                    speaker: "Roba",
                    ar: "مَعَك حَقّ، بَسّ لَمَّا الجَوّ مْخْنُوق وَرُطُوبَة كْتِير، مَا بَقْدَر أَرْكَّز.",
                    en: "You’re right, but when the air is stuffy and very humid, I can’t concentrate.",
                },
                {
                    speaker: "Stranger",
                    ar: "دَايْمَنْ هَيْك بِالصَّيْف عِنْدْنَا. الجَوّ بْتِقْلِب بِنْهَار وَبِلَّيْل.",
                    en: "It’s always like that in our summers. The weather changes between day and night.",
                },
                {
                    speaker: "Narrator",
                    ar: "بَعْد شْوَيّ، وَقَف البَاص وَكُلّ وَاحِد نَزَل عَطَرِيقُه.",
                    en: "After a while, the bus stopped and each one got off on their way.",
                },

                // Scene 3 – Video call between cities
                {
                    speaker: "Narrator",
                    ar: "فِي المَسَا، رُوبَا عَمِلِت مُكَالَمَة فِيدْيُو مَع صَدِيقْتَهَا نُور فِي رَام الله.",
                    en: "In the evening, Roba made a video call with her friend Noor in Ramallah.",
                },
                {
                    speaker: "Roba",
                    ar: "مَرْحَبَا نُور! كِيفِك؟ كِيف الجَوّ فِي رَام الله؟",
                    en: "Hi Noor! How are you? How’s the weather in Ramallah?",
                },
                {
                    speaker: "Noor",
                    ar: "هَلَّق عِنَّا بَرْد كْتِير، وَمُمْكِن بَعْد شْوَيّ يِنْزِل تَلْج.",
                    en: "Right now it’s very cold here, and maybe it will snow later.",
                },
                {
                    speaker: "Roba",
                    ar: "عَنْ جَدّ؟ عِنَّا فِي غَزَّة، الجَوّ دَافِي وَرُطُوبَة شْوَيّ.",
                    en: "Really? Here in Gaza the weather is warm and a bit humid.",
                },
                {
                    speaker: "Noor",
                    ar: "فُرْقَة جْدِيدَة! دَرَجَة الحَرَارَة عِنَّا تَمَانِيَة بَسّ.",
                    en: "Big difference! The temperature here is only eight.",
                },
                {
                    speaker: "Roba",
                    ar: "وَالله؟ عِنَّا قَرِيب مِن الخَمْسْطَاش. بِالصِّيف العَكْس، أَنْتُو أَحْسَن مِنَّا.",
                    en: "Really? Ours is around fifteen. In summer it’s the opposite; you’re better than us.",
                },
                {
                    speaker: "Noor",
                    ar: "صَح، بِالصَّيْف عِنَّا هَوَا أَكْتَر. طَيِّب، شُو عَامْلَة بِهَادَا الجَوّ؟",
                    en: "True, in summer we have more breeze. So, what are you doing in this weather?",
                },
                {
                    speaker: "Roba",
                    ar: "صَرَاحَةً، لَابْسَة بْلُوزَة خَفِيفَة، بَشْرَب شَاي بِنَعْنَع وَبْتِفَرَّج عَلَى المَطَر مِن الشُّبَّاك.",
                    en: "Honestly, I’m wearing a light sweater, drinking mint tea and watching the rain from the window.",
                },
                {
                    speaker: "Noor",
                    ar: "جَوّ رُومَانْسِي! بَرْضُه، بَعْد الدِّرَاسَة، شْوَيّ مَطَر بِيِهَدّ الأَعْصَاب.",
                    en: "Romantic mood! Still, after studying, a bit of rain calms the nerves.",
                },
                {
                    speaker: "Roba",
                    ar: "يَلَّا، بِالتَّوْفِيق فِي المَشَارِيع، وَخَلِّينَا نِحْكِي بُكْرَا نِشُوف الجَوّ كِيف حَيِتْغَيَّر.",
                    en: "Alright, good luck with your projects and let’s talk tomorrow to see how the weather changes.",
                },
                {
                    speaker: "Noor",
                    ar: "أَكِيد. مَع السَّلَامَة!",
                    en: "Sure. Bye!",
                },
            ],
        },

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
                    "• بَرْضُه = Still / anyway\n\n" +
                    "Example mini-dialogue:\n" +
                    "– اليَوْم الجَوّ بَرْد كْتِير.\n" +
                    "– عَنْ جَدّ؟ عِنَّا دَافِي شْوَيّ.\n" +
                    "– وَالله؟ بَرْضُه، أَحْسَن مِن الشُّوب.",
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
                    hint: "Plural: آراء (aaraa’). ‘my opinion’ = رَأْيِي.",
                    exampleAr: "رَأْيِك مُهِمّ.",
                    exampleEn: "Your opinion is important.",
                },
                {
                    id: "bira2yi",
                    ar: "بِرَأْيِي",
                    en: "in my opinion",
                    hint: "Very useful starter for giving opinions.",
                    exampleAr: "بِرَأْيِي، هَادَا الكُورْس مْفِيد.",
                    exampleEn: "In my opinion, this course is useful.",
                },
                {
                    id: "bafakker",
                    ar: "بَفَكِّر",
                    en: "I think",
                    hint: "Also ‘I’m thinking’, but often used for opinions.",
                    exampleAr: "بَفَكِّر المَوْضُوع سَهْل.",
                    exampleEn: "I think the topic is easy.",
                },
                {
                    id: "ba7ess",
                    ar: "بَحِسّ",
                    en: "I feel / I have the feeling",
                    hint: "Used for emotional or soft opinions.",
                    exampleAr: "بَحِسّ الفِكْرَة حِلْوَة بَسّ مِش مُنَظَّمَة.",
                    exampleEn: "I feel the idea is nice but not organized.",
                },
                {
                    id: "beshuf",
                    ar: "بَشُوف",
                    en: "I see / I think (my view)",
                    hint: "Spoken way to share view: ‘the way I see it’.",
                    exampleAr: "أَنَا بَشُوف إِنُّه الأَفْضَل نِبْدَى بَسِيط.",
                    exampleEn: "I see that it’s better to start simple.",
                },
                {
                    id: "saraha",
                    ar: "صَرَاحَةً",
                    en: "honestly / to be honest",
                    hint: "Good for softening a strong opinion.",
                    exampleAr: "صَرَاحَةً، مَا عَجَبْنِي الفِلْم.",
                    exampleEn: "Honestly, I didn’t like the movie.",
                },
                {
                    id: "3an_jad",
                    ar: "عَنْ جَدّ؟",
                    en: "Really?",
                    hint: "Shows interest in the other person’s opinion.",
                    exampleAr: "عَنْ جَدّ؟ أَنَا العَكْس تَمَامًا.",
                    exampleEn: "Really? I’m the complete opposite.",
                },

                // ===== LIKE / DISLIKE / PREFERENCE =====
                {
                    id: "ba7ebb",
                    ar: "بَحِبّ",
                    en: "I like / I love",
                    hint: "Use with nouns or verbs.",
                    exampleAr: "بَحِبّ اللُّغَات وَبَحِبّ أَتْعَلَّم جْدِيد.",
                    exampleEn: "I like languages and I like learning new things.",
                },
                {
                    id: "ma_ba7ebb",
                    ar: "مَا بَحِبّ",
                    en: "I don’t like",
                    hint: "Polite way to say you don’t like something.",
                    exampleAr: "مَا بَحِبّ الأَفْلَام الطَّوِيلَة.",
                    exampleEn: "I don’t like long movies.",
                },
                {
                    id: "baftadel",
                    ar: "بَفَضَّل",
                    en: "I prefer",
                    hint: "Use when choosing between options.",
                    exampleAr: "بَفَضَّل أَتْعَلَّم وَاحِد عَ وَاحِد بَدَل مَرَّة وَاحْدَة.",
                    exampleEn: "I prefer to learn one by one instead of all at once.",
                },
                {
                    id: "mesh_kteer",
                    ar: "مِش كْتِير",
                    en: "not very / not really",
                    hint: "Soft way to say you don’t like something.",
                    exampleAr: "مِش كْتِير بَحِبّ القَهْوِة بِدُون سُكَّر.",
                    exampleEn: "I don’t really like coffee without sugar.",
                },
                {
                    id: "abadan",
                    ar: "أَبَدًا",
                    en: "at all / never",
                    hint: "Used in negative sentences.",
                    exampleAr: "مَا بَحِبّ الرُّطُوبَة أَبَدًا.",
                    exampleEn: "I don’t like humidity at all.",
                },
                {
                    id: "kwayyes",
                    ar: "كْوَيِّس",
                    en: "good / okay",
                    hint: "Basic evaluation word: good / fine.",
                    exampleAr: "الكُورْس كْوَيِّس بَسّ مُمْكِن يِكُون أَفْضَل.",
                    exampleEn: "The course is good but it could be better.",
                },
                {
                    id: "3adi",
                    ar: "عَادِي",
                    en: "normal / it’s okay",
                    hint: "Used when something is ‘so-so’.",
                    exampleAr: "الفِلْم عَادِي، مَو كْتِير حِلُو ومَو سَيِّئ.",
                    exampleEn: "The movie is okay, not very good and not bad.",
                },
                {
                    id: "momtaz",
                    ar: "مُمْتَاز",
                    en: "excellent",
                    hint: "Stronger than ‘good’.",
                    exampleAr: "الدَّرْس اليَوْم مُمْتَاز.",
                    exampleEn: "Today’s lesson is excellent.",
                },
                {
                    id: "sayye2",
                    ar: "سَيِّئ",
                    en: "bad",
                    hint: "Stronger negative opinion.",
                    exampleAr: "الخِدْمَة فِي هَادَا المَحَلّ سَيِّئَة.",
                    exampleEn: "The service in this shop is bad.",
                },

                // ===== AGREE / DISAGREE =====
                {
                    id: "bwaafe2",
                    ar: "بْوَافِق",
                    en: "I agree",
                    hint: "From وَافَق = to agree.",
                    exampleAr: "بْوَافِق مَعَك ١٠٠٪.",
                    exampleEn: "I agree with you 100%.",
                },
                {
                    id: "ma_bwaafe2",
                    ar: "مَا بْوَافِق",
                    en: "I don’t agree",
                    hint: "Can be softened with شْوَيّ / صَرَاحَةً.",
                    exampleAr: "صَرَاحَةً، مَا بْوَافِق عَلَى هَادَا الرَّأْي.",
                    exampleEn: "Honestly, I don’t agree with this opinion.",
                },
                {
                    id: "ma3ak_ha2",
                    ar: "مَعَك حَقّ",
                    en: "you’re right",
                    hint: "Very common in daily speech.",
                    exampleAr: "مَعَك حَقّ، المَوْضُوع بِيِحْتَاج وَقْت.",
                    exampleEn: "You’re right, the topic needs time.",
                },
                {
                    id: "bifri2",
                    ar: "بِفْرِق",
                    en: "it makes a difference",
                    hint: "Used for things that matter.",
                    exampleAr: "طَرِيقَة الشَّرْح بِتِفْرِق مَع الطَّالِب.",
                    exampleEn: "The way of explaining makes a difference for the student.",
                },
                {
                    id: "ma_bifri2",
                    ar: "مَا بِفْرِق",
                    en: "it doesn’t matter / it’s the same",
                    hint: "Use for neutral preference.",
                    exampleAr: "بِالنِّسْبَة إِلِي، مَا بِفْرِق صَبَاح أَو مَسَا.",
                    exampleEn: "For me, it doesn’t matter, morning or evening.",
                },

                // ===== REASONS & CONNECTORS =====
                {
                    id: "la2anno",
                    ar: "لأَنُّه",
                    en: "because",
                    hint: "Key connector for giving reasons.",
                    exampleAr: "بَحِبّ الدَّرْس لَأَنُّه مْنَظَّم.",
                    exampleEn: "I like the lesson because it’s organized.",
                },
                {
                    id: "3ashan_heik",
                    ar: "عَشَان هَيْك",
                    en: "that’s why / so",
                    hint: "Good for explaining result.",
                    exampleAr: "الدَّرْس طَوِيل، عَشَان هَيْك بَدِّنَا بِكِّير.",
                    exampleEn: "The lesson is long, that’s why we started early.",
                },
                {
                    id: "ya3ni",
                    ar: "يَعْنِي",
                    en: "I mean / like / you know",
                    hint: "Very common filler.",
                    exampleAr: "يَعْنِي، الدَّرْس مْفِيد بَسّ كْتِير مَعْلُومَات.",
                    exampleEn: "I mean, the lesson is useful but there is a lot of information.",
                },
                {
                    id: "tab3an",
                    ar: "طَبْعًا",
                    en: "of course",
                    hint: "Agreeing strongly.",
                    exampleAr: "طَبْعًا، هَادَا شَيْ مُهِمّ.",
                    exampleEn: "Of course, that’s important.",
                },
                {
                    id: "mumkin",
                    ar: "مُمْكِن",
                    en: "maybe / it’s possible",
                    hint: "Soft opinion or suggestion.",
                    exampleAr: "مُمْكِن نِجَرِّب طَرِيقَة تَانِيَة.",
                    exampleEn: "Maybe we can try another method.",
                },
            ],

            extra: [
                {
                    id: "mush_moqne3",
                    ar: "مِش مُقْنِع",
                    en: "not convincing",
                    hint: "Used for ideas/arguments.",
                    exampleAr: "الحُجَّة هَادِي مِش مُقْنِعَة كْتِير.",
                    exampleEn: "This argument is not very convincing.",
                },
                {
                    id: "ma3gol",
                    ar: "مَعْقُول",
                    en: "reasonable / makes sense",
                    hint: "Question: مَعْقُول؟ = really? seriously?",
                    exampleAr: "الفِكْرَة مَعْقُولَة بَسّ بِتِحْتَاج تَنْظِيم.",
                    exampleEn: "The idea is reasonable but needs organization.",
                },
                {
                    id: "bistahil",
                    ar: "بِسْتَاهِل",
                    en: "it deserves / worth it",
                    hint: "Used for effort vs value.",
                    exampleAr: "الكُورْس طَوِيل بَسّ بِسْتَاهِل.",
                    exampleEn: "The course is long but worth it.",
                },
                {
                    id: "mish_mohim",
                    ar: "مِش مُهِمّ",
                    en: "it’s not important",
                    hint: "Use carefully; can sound a bit direct.",
                    exampleAr: "هَادَا التَّفْصِيل مِش مُهِمّ هَلَّق.",
                    exampleEn: "This detail is not important right now.",
                },
                {
                    id: "ahamm_shay",
                    ar: "أَهَمّ شِي",
                    en: "the most important thing",
                    hint: "",
                    exampleAr: "أَهَمّ شِي تِحِسّ إِنَّك عَم تِتْقَدَّم.",
                    exampleEn: "The most important thing is that you feel you’re progressing.",
                },
            ],
        },

        // ====================================
        // DIALOGUE – LONG & RICH
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – After class: talking about the course
                {
                    speaker: "Narrator",
                    ar: "بَعْد الدَّرْس، رُوبَا وَسَلْمَى قَاعِدِين فِي الكَافِيه قُرِيب مِن الجَامْعَة.",
                    en: "After the lesson, Roba and Salma are sitting in a café near the university.",
                },
                {
                    speaker: "Salma",
                    ar: "صَرَاحَةً، بَحِبّ هَادَا الكُورْس. الطَّرِيقَة مْرَتَّبَة.",
                    en: "Honestly, I like this course. The method is well-organized.",
                },
                {
                    speaker: "Roba",
                    ar: "أَنَا كَمَان بَحِسّ إنُّه مْفِيد، بَسّ مِش كْتِير بَحِبّ الوَاجِب.",
                    en: "I also feel it’s useful, but I don’t really like the homework.",
                },
                {
                    speaker: "Salma",
                    ar: "لِيش؟",
                    en: "Why?",
                },
                {
                    speaker: "Roba",
                    ar: "لأَنُّه أَحْيَانًا طَوِيل، عَشَان هَيْك بَفَضَّل الوَاجِب يِكُون أَقَلّ بَسّ مُسْتَمِرّ.",
                    en: "Because sometimes it’s long, so I prefer the homework to be less but more regular.",
                },
                {
                    speaker: "Salma",
                    ar: "بِرَأْيِي، الكَمّ مْنِيح. الوَاجِب الكْتِير بِسَاعِدْنَا نِتْدَرَّب أَكْثَر.",
                    en: "In my opinion, the amount is fine. Lots of homework helps us practice more.",
                },
                {
                    speaker: "Roba",
                    ar: "مُمْكِن، بَفْهَم رَأْيِك. مَعَك حَقّ، بَسّ شُوفِي جَدْوَلِي مَع الشُّغُل.",
                    en: "Maybe, I understand your opinion. You’re right, but look at my schedule with work.",
                },
                {
                    speaker: "Salma",
                    ar: "مَعْقُول. طَيِّب، شُو أَهَمّ شِي فِي الكُورْس لَك؟",
                    en: "Makes sense. So, what’s the most important thing in the course for you?",
                },
                {
                    speaker: "Roba",
                    ar: "أَهَمّ شِي عِنْدِي إِنِّي أَحِسّ إِنِّي عَم أِحْكِي أَكْثَر. بَحِبّ لَمَّا المُدَرِّس يِسْأَلْنَا رَأْيِنَا.",
                    en: "The most important thing for me is to feel that I’m speaking more. I like it when the teacher asks us for our opinion.",
                },
                {
                    speaker: "Salma",
                    ar: "وَالله مَعَك حَقّ. بْوَافِق مَعَك هُون ١٠٠٪.",
                    en: "Honestly, you’re right. I totally agree with you on this.",
                },

                // Scene 2 – Friends disagree about a movie
                {
                    speaker: "Narrator",
                    ar: "فِي الوِيكِينْد، رُوبَا وَمَاجِد رَاحُوا عَالسِّينِمَا يِشُوفُوا فِلْم جْدِيد.",
                    en: "On the weekend, Roba and Majed went to the cinema to see a new movie.",
                },
                {
                    speaker: "Majed",
                    ar: "بِصَرَاحَة، الفِلْم مُمْتَاز! عَجَبْنِي كْتِير.",
                    en: "Honestly, the movie was excellent! I liked it a lot.",
                },
                {
                    speaker: "Roba",
                    ar: "عَنْ جَدّ؟ أَنَا بَشُوف إنُّه عَادِي.",
                    en: "Really? I see it as just okay.",
                },
                {
                    speaker: "Majed",
                    ar: "لِيش عَادِي؟ المَوْضُوع عَمِيق وَالتَّمْثِيل قَوِي.",
                    en: "Why just okay? The topic is deep and the acting is strong.",
                },
                {
                    speaker: "Roba",
                    ar: "الفِكْرَة حِلْوَة، بَسّ النِّهَايَة مِش مُقْنِعَة بِنِسْبَة إِلِي.",
                    en: "The idea is nice, but the ending is not convincing for me.",
                },
                {
                    speaker: "Majed",
                    ar: "مُمْكِن. بَحِسّ إنُّه النِّهَايَة مَفْتُوحَة، عَشَان هَيْك حَبَّيْتْهَا.",
                    en: "Maybe. I feel the ending is open, that’s why I liked it.",
                },
                {
                    speaker: "Roba",
                    ar: "مَا بْوَافِق كْتِير. بَفَضَّل النِّهَايَات الْوَاضْحَة.",
                    en: "I don’t really agree. I prefer clear endings.",
                },
                {
                    speaker: "Majed",
                    ar: "طَيِّب، اِخْتِلَاف الآرَاء مْش مُشْكِلَة.",
                    en: "Okay, difference of opinions is not a problem.",
                },
                {
                    speaker: "Roba",
                    ar: "صَح، أَهَمّ شِي كُنَّا مَع بَعْض وَاِنْبَسَطْنَا.",
                    en: "True, the most important thing is that we were together and had fun.",
                },

                // Scene 3 – Teacher asks student’s opinion about study plan
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، بِرَأْيِك خُطَّة الدَّرْس هَادِي مْنَاسِبَة إِلِك؟ ثَلَاث مَرَّات فِي الأُسْبُوع؟",
                    en: "Roba, in your opinion is this lesson plan suitable for you? Three times a week?",
                },
                {
                    speaker: "Roba",
                    ar: "صَرَاحَةً، بَحِسّ ثَلَاث مَرَّات كْتِير شْوَيّ مَع الجَامْعَة.",
                    en: "Honestly, I feel three times is a bit much with university.",
                },
                {
                    speaker: "Teacher",
                    ar: "مُمْكِن نِخَلِّيه مَرَّتَيْن فِي الأُسْبُوع. مِش مُشْكِلَة.",
                    en: "We can make it twice a week. No problem.",
                },
                {
                    speaker: "Roba",
                    ar: "بَفَكِّر مَرَّتَيْن أَحْسَن. هَيْك بَقْدَر أَحِلّ الوَاجِب بُرَاحَة.",
                    en: "I think twice is better. This way I can do the homework comfortably.",
                },
                {
                    speaker: "Teacher",
                    ar: "طَبْعًا. أَهَمّ شِي مِن نَاحِيَتِي إنُّه تِحِسِّي إِنِّك عَم تِتْقَدَّم.",
                    en: "Of course. The most important thing for me is that you feel you are progressing.",
                },
                {
                    speaker: "Roba",
                    ar: "مَعَك حَقّ. شُكْرًا إِنَّك سَأَلْتِنِي رَأْيِي.",
                    en: "You’re right. Thank you for asking my opinion.",
                },
            ],
        },

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
                    hint: "Formal or semi-formal complaint",
                    exampleAr: "بِفَكِّر أَقَدِّم شَكْوَى رَسْمِيّة.",
                    exampleEn: "I’m thinking of filing an official complaint.",
                },
                {
                    id: "co_core_2",
                    ar: "يِشْتِكي",
                    en: "to complain",
                    hint: "Verb: he complains",
                    exampleAr: "ما بِحِبّ أِشْتِكي، بَس في مَشْكِلة جَدِّيّة.",
                    exampleEn: "I don’t like to complain, but there is a serious problem.",
                },
                {
                    id: "co_core_3",
                    ar: "مَشْكِلة",
                    en: "problem",
                    hint: "General word",
                    exampleAr: "في مَشْكِلة بِالمَوَاصَلات.",
                    exampleEn: "There is a problem with the transportation.",
                },
                {
                    id: "co_core_4",
                    ar: "مُزْعِج",
                    en: "annoying / disturbing",
                    hint: "Describes noise, behavior, etc.",
                    exampleAr: "الصَّوْت مُزْعِج كْثير.",
                    exampleEn: "The noise is very annoying.",
                },
                {
                    id: "co_core_5",
                    ar: "مِش مَعْقول",
                    en: "unacceptable / unbelievable",
                    hint: "Strong reaction to situation",
                    exampleAr: "مِش مَعْقول كُل يوم نِسْتَنّى ساعة.",
                    exampleEn: "It’s not acceptable to wait an hour every day.",
                },
                {
                    id: "co_core_6",
                    ar: "عنْجَد",
                    en: "really / seriously",
                    hint: "Emphasis marker",
                    exampleAr: "عنْجَد الوَضْع صار مُزْعِج.",
                    exampleEn: "Seriously, the situation has become annoying.",
                },
                {
                    id: "co_core_7",
                    ar: "يِنْرْفِز",
                    en: "to make (someone) nervous / annoyed",
                    hint: "Colloquial verb",
                    exampleAr: "التَّأْخير بْيِنْرْفِزني.",
                    exampleEn: "The delay makes me nervous.",
                },
                {
                    id: "co_core_8",
                    ar: "يِتْأَخَّر",
                    en: "to be late / delayed",
                    exampleAr: "الباص دايْمًا بْيِتْأَخَّر.",
                    exampleEn: "The bus is always late.",
                },
                {
                    id: "co_core_9",
                    ar: "بِضِلّ",
                    en: "keeps / continues",
                    hint: "Used with problem continuing",
                    exampleAr: "المَشْكِلة بِضِلّ تِتْكَرَّر.",
                    exampleEn: "The problem keeps repeating.",
                },
                {
                    id: "co_core_10",
                    ar: "مِن حَقّي",
                    en: "it’s my right",
                    hint: "Used in complaints",
                    exampleAr: "مِن حَقّي أوْصَل عَالوَقْت.",
                    exampleEn: "It’s my right to arrive on time.",
                },
                {
                    id: "co_core_11",
                    ar: "خِدْمَة",
                    en: "service",
                    exampleAr: "الخِدْمَة هون مِش عَالمُسْتَوى.",
                    exampleEn: "The service here is not at the right level.",
                },
                {
                    id: "co_core_12",
                    ar: "مُسْتَوى",
                    en: "level / standard",
                    exampleAr: "مُسْتَوى النَّظافَة واطي.",
                    exampleEn: "The level of cleanliness is low.",
                },
                {
                    id: "co_core_13",
                    ar: "مَسؤول",
                    en: "person in charge",
                    hint: "Manager / responsible person",
                    exampleAr: "بَحِبّ أحْكي مَع المَسؤول لو سَمَحْت.",
                    exampleEn: "I’d like to speak to the person in charge, please.",
                },
                {
                    id: "co_core_14",
                    ar: "مُوَظَّف الاسْتِقْبال",
                    en: "receptionist",
                    exampleAr: "حَكِيت مَع مُوَظَّف الاسْتِقْبال عَن المَشْكِلة.",
                    exampleEn: "I spoke with the receptionist about the problem.",
                },
                {
                    id: "co_core_15",
                    ar: "يِعالِج المَشْكِلة",
                    en: "to handle / fix the problem",
                    exampleAr: "لازِم حدا يِعالِج المَشْكِلة سَريع.",
                    exampleEn: "Someone must handle the problem quickly.",
                },
                {
                    id: "co_core_16",
                    ar: "يِحِلّ المَشْكِلة",
                    en: "to solve the problem",
                    exampleAr: "إن شاء الله تِحِلّوا المَشْكِلة قَرِيب.",
                    exampleEn: "Hopefully you will solve the problem soon.",
                },
                {
                    id: "co_core_17",
                    ar: "يِوَعِد",
                    en: "to promise",
                    exampleAr: "وَعَدُونا يِحِلّوا المَشْكِلة.",
                    exampleEn: "They promised us they would solve the problem.",
                },
                {
                    id: "co_core_18",
                    ar: "يِرُدّ",
                    en: "to reply / respond",
                    exampleAr: "المَكْتَب ما رَدّ عَالشَّكْوَى.",
                    exampleEn: "The office didn’t respond to the complaint.",
                },
                {
                    id: "co_core_19",
                    ar: "يِعْتِذِر",
                    en: "to apologize",
                    exampleAr: "المُوَظَّف اِعْتَذَر عَالتَّأْخير.",
                    exampleEn: "The employee apologized for the delay.",
                },
                {
                    id: "co_core_20",
                    ar: "عُذْر",
                    en: "excuse",
                    exampleAr: "العُذْر مَش مَقْنِع.",
                    exampleEn: "The excuse is not convincing.",
                },
                {
                    id: "co_core_21",
                    ar: "مَقْنِع",
                    en: "convincing",
                    exampleAr: "التَّبْرير ما كان مَقْنِع.",
                    exampleEn: "The explanation wasn’t convincing.",
                },
                {
                    id: "co_core_22",
                    ar: "يِتْجاهَل",
                    en: "to ignore",
                    exampleAr: "حاسَّة إنّهم عَم يِتْجاهَلوا المَشْكِلة.",
                    exampleEn: "I feel they are ignoring the problem.",
                },
                {
                    id: "co_core_23",
                    ar: "مِسْتَمِرّ",
                    en: "continuous / ongoing",
                    exampleAr: "الصَّوْت المُزْعِج مِسْتَمِرّ لَحد هَلَّق.",
                    exampleEn: "The annoying noise is still ongoing.",
                },
                {
                    id: "co_core_24",
                    ar: "تِكْرار",
                    en: "repetition",
                    exampleAr: "تِكْرار المَشْكِلة خَلّاني أِشْتِكي.",
                    exampleEn: "The repetition of the problem made me complain.",
                },
                {
                    id: "co_core_25",
                    ar: "مَرَّة واحْدَة / أوَّل مَرّة",
                    en: "one time / first time",
                    exampleAr: "لو مَرَّة واحْدَة مَش مُشْكِلة، بَس هادا تِكْرار.",
                    exampleEn: "If it were one time it’s fine, but this is repeated.",
                },
                {
                    id: "co_core_26",
                    ar: "مَع إحْتِرامي",
                    en: "with all respect",
                    hint: "Softener before criticism",
                    exampleAr: "مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة.",
                    exampleEn: "With all respect, the service here is weak.",
                },
                {
                    id: "co_core_27",
                    ar: "ما قَصْدي أِزَعِّل حَدا",
                    en: "I don’t mean to upset anyone",
                    exampleAr: "ما قَصْدي أِزَعِّل حَدا بَس الوَضْع مِش مَقْبول.",
                    exampleEn: "I don’t mean to upset anyone, but the situation is not acceptable.",
                },
                {
                    id: "co_core_28",
                    ar: "مُمْكِن تِعْمِلوا شِي؟",
                    en: "can you do something?",
                    hint: "Request for action",
                    exampleAr: "المَشْكِلة مِسْتَمِرّة، مُمْكِن تِعْمِلوا شِي؟",
                    exampleEn: "The problem is ongoing, can you do something?",
                },
                {
                    id: "co_core_29",
                    ar: "بِتْمَنّى تِلْقوا حَلّ",
                    en: "I hope you find a solution",
                    exampleAr: "بِتْمَنّى تِلْقوا حَلّ قَبْل الاسْبوع الجّاي.",
                    exampleEn: "I hope you find a solution before next week.",
                },
                {
                    id: "co_core_30",
                    ar: "ما إلِي خِلِق",
                    en: "I have no energy / I’m fed up",
                    hint: "Colloquial, express frustration",
                    exampleAr: "عنْجَد ما إلِي خِلِق أِتْعامَل مَع هالْمَوْضوع بَعْد.",
                    exampleEn: "Honestly I have no energy to deal with this any more.",
                },
                {
                    id: "co_core_31",
                    ar: "يِصْبِر",
                    en: "to be patient",
                    exampleAr: "صَبَرْنا شَهِر كَامِل، بَس المَشْكِلة كَمانها.",
                    exampleEn: "We were patient for a whole month but the problem is still there.",
                },
                {
                    id: "co_core_32",
                    ar: "يِشَكِّر",
                    en: "to thank",
                    exampleAr: "بِدّي أِشَكِّرَك عَالتَّجاوُب.",
                    exampleEn: "I want to thank you for responding.",
                },
                {
                    id: "co_core_33",
                    ar: "يِتْفاهَم",
                    en: "to understand each other",
                    exampleAr: "هامّ نِتْفاهَم عَحَلّ وَسَط.",
                    exampleEn: "It’s important that we agree on a middle solution.",
                },
                {
                    id: "co_core_34",
                    ar: "حَلّ وَسَط",
                    en: "compromise / middle solution",
                    exampleAr: "مُمْكِن نِلاقِي حَلّ وَسَط يِرْضي الجِهْتَيْن.",
                    exampleEn: "We can find a compromise that satisfies both sides.",
                },
                {
                    id: "co_core_35",
                    ar: "مُعامَلَة",
                    en: "treatment (how they treat you)",
                    exampleAr: "مُعامَلَة المُوَظَّفين إِلَنا كانِت مُحْتَرَمَة.",
                    exampleEn: "The way the employees treated us was respectful.",
                },
            ],
            extra: [
                {
                    id: "co_extra_1",
                    ar: "قِسْم شَكَاوِي",
                    en: "complaints department",
                    exampleAr: "في قِسْم شَكَاوِي بِالإِدارَة.",
                    exampleEn: "There is a complaints department in the administration.",
                },
                {
                    id: "co_extra_2",
                    ar: "رَدّ رَسْمِي",
                    en: "official reply",
                    exampleAr: "اسْتَنّينا رَدّ رَسْمِي ومَا إجا.",
                    exampleEn: "We waited for an official reply and it didn’t come.",
                },
                {
                    id: "co_extra_3",
                    ar: "حِجّة",
                    en: "pretext / lame excuse",
                    exampleAr: "حاسِّة إنّه هادا كُلّه حِجّة.",
                    exampleEn: "I feel like this is all just an excuse.",
                },
                {
                    id: "co_extra_4",
                    ar: "مُتابَعَة",
                    en: "follow-up",
                    exampleAr: "بِدّنا مُتابَعَة عَالمَشْكِلة مِش بَس وَعْد.",
                    exampleEn: "We want follow-up on the problem, not just a promise.",
                },
                {
                    id: "co_extra_5",
                    ar: "تَعْويض",
                    en: "compensation",
                    exampleAr: "طَلَبْنا تَعْويض بَسِيط عَالخَسارَة.",
                    exampleEn: "We asked for a small compensation for the loss.",
                },
            ],
        },

        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "يا مِنى، عنْجَد ما إلِي خِلِق اليوم.",
                    en: "Mina, I honestly have no energy today.",
                },
                {
                    speaker: "B",
                    ar: "شُو صار يا رِنا؟ شَكْلِك مْعَصَّبِة.",
                    en: "What happened, Rina? You look upset.",
                },
                {
                    speaker: "A",
                    ar: "الباص للجامْعَة تَقريبًا كُل يوم بْيِتْأَخَّر نُصّ ساعة أَو أَكْثَر.",
                    en: "The bus to the university is almost every day half an hour late or more.",
                },
                {
                    speaker: "B",
                    ar: "إي بَعْرِف، عنْجَد مُزْعِج.",
                    en: "Yeah, I know, it’s really annoying.",
                },
                {
                    speaker: "A",
                    ar: "مِش مَعْقول نِدْفَع اِشْتِراك وِنْضَلّ نِسْتَنّى عَالفاضي.",
                    en: "It’s not acceptable that we pay a subscription and keep waiting for nothing.",
                },
                {
                    speaker: "B",
                    ar: "حاوَلْتي تِشْتِكي لَحَدّا؟",
                    en: "Have you tried complaining to someone?",
                },
                {
                    speaker: "A",
                    ar: "مَرّة حَكَيْت مَع السّواق، بَس حَكى إنّه الزَّحْمِة مِش بِيِدُه.",
                    en: "Once I talked to the driver, but he said the traffic is not in his hands.",
                },
                {
                    speaker: "B",
                    ar: "مَع إحْتِرامي إلُه، بَس المَشْكِلة مِسْتَمِرّة.",
                    en: "With all respect to him, but the problem is continuing.",
                },
                {
                    speaker: "A",
                    ar: "صَحّ. تِكْرار المَشْكِلة هوّي إلّي بْيِنْرْفِز.",
                    en: "Right. The repetition of the problem is what really gets on my nerves.",
                },
                {
                    speaker: "B",
                    ar: "مِن حَقِّك توْصَلي عَالوَقْت. ليش ما نِحْكي مَع مُوَظَّف الاسْتِقْبال بِالشَّرِكِة؟",
                    en: "It’s your right to arrive on time. Why don’t we talk to the receptionist at the company?",
                },
                {
                    speaker: "A",
                    ar: "بِخاف يِفَكْرونا عَم نِبالِغ.",
                    en: "I’m afraid they’ll think we’re exaggerating.",
                },
                {
                    speaker: "B",
                    ar: "لا، إذا حَكَيْتي بِهُدُوء وَأَدَب ما حَدا يِزْعَل.",
                    en: "No, if you speak calmly and politely, no one will get upset.",
                },
                {
                    speaker: "A",
                    ar: "طَيِّب، تِجي مَعِي؟",
                    en: "Okay, will you come with me?",
                },
                {
                    speaker: "B",
                    ar: "أكيد، يَلّا نِنْزِل عَالمَكْتَب.",
                    en: "Of course, let’s go down to the office.",
                },
                {
                    speaker: "Receptionist",
                    ar: "مَسّا الخير، تْفَضَّلوا.",
                    en: "Good afternoon, welcome.",
                },
                {
                    speaker: "A",
                    ar: "مَسّا النّور. مَع إحْتِرامي، في مَشْكِلة حابّين نِحْكي فيها.",
                    en: "Good afternoon. With all respect, there is a problem we’d like to talk about.",
                },
                {
                    speaker: "Receptionist",
                    ar: "تْفَضَّلوا إحْكوا، شُو في؟",
                    en: "Please go ahead, what’s going on?",
                },
                {
                    speaker: "A",
                    ar: "الباص تَبَع جامْعَة غالِبًا بْيِتْأَخَّر نُصّ ساعة، وأَحْيانًا أَكْتَر.",
                    en: "The university bus usually is thirty minutes late, and sometimes more.",
                },
                {
                    speaker: "B",
                    ar: "والمَشْكِلة مِش مَرَّة واحْدَة، هادا تِكْرار يَومِي تَقريبًا.",
                    en: "And the problem isn’t just once, this is almost daily repetition.",
                },
                {
                    speaker: "A",
                    ar: "عنْجَد صار الوَضْع مُزْعِج، ومِن حَقّنا نوْصَل عَمحاضْراتنا عَالوَقْت.",
                    en: "It really has become annoying, and it’s our right to arrive to our lectures on time.",
                },
                {
                    speaker: "Receptionist",
                    ar: "مِنْفْهَم عَلَيْكُم، بِصَراحَة الزَّحْمِة قَوِيّة هالأيّام.",
                    en: "We understand you; honestly, the traffic is heavy these days.",
                },
                {
                    speaker: "A",
                    ar: "مُتَفَهِّمَة الزَّحْمِة، بَس العُذْر مَش مَقْنِع لَمّا المَشْكِلة مِسْتَمِرّة.",
                    en: "I understand the traffic, but the excuse is not convincing when the problem is ongoing.",
                },
                {
                    speaker: "B",
                    ar: "مُمْكِن تِعْمِلوا شِي عَالمَوْعِد؟ تَطْلَع الباصات أَبْكَر شْوَي؟",
                    en: "Can you do something about the schedule? Can the buses leave a bit earlier?",
                },
                {
                    speaker: "Receptionist",
                    ar: "إحْنا مِرْتَبِطين بِوَقْت مُحَدَّد، بَس بِنْقِل الحَكِي لَلمَسؤول.",
                    en: "We are tied to a fixed time, but we will pass your words to the person in charge.",
                },
                {
                    speaker: "A",
                    ar: "صَبَرْنا شَهِر كَامِل، وبِتْمَنّى هالمَرّة يكون في مُتابَعَة حَقِيقِيّة.",
                    en: "We’ve been patient for a whole month, and I hope this time there will be real follow-up.",
                },
                {
                    speaker: "Receptionist",
                    ar: "عَن جَدّ إحْنا آسْفِين عَالإِزْعاج، وبنِوَعِد نِراجِع الجَدْوَل.",
                    en: "We are really sorry for the inconvenience, and we promise to review the schedule.",
                },
                {
                    speaker: "B",
                    ar: "شُكْرًا عَالتَّجاوُب، وبِتْمَنّى تِلْقوا حَلّ في أَقْرَب وَقْت.",
                    en: "Thank you for responding, and I hope you find a solution as soon as possible.",
                },
                {
                    speaker: "A",
                    ar: "ما قَصْدي أِزَعِّل حَدا، بَس الجِدّ الوَضْع مِش مَعْقول.",
                    en: "I don’t mean to upset anyone, but honestly the situation is unacceptable.",
                },
                {
                    speaker: "Receptionist",
                    ar: "لا، حَكْيكُم مَفْهُوم، وهَادا حَقِّكُم. نِشَكِّرُكُم إنّكم حَكَيْتوا بِأَدَب.",
                    en: "No, your words are understood, and this is your right. We thank you for speaking politely.",
                },
                {
                    speaker: "A",
                    ar: "إن شاء الله نِتْفاهَم عَحَلّ وَسَط يِرْضي الكِلّ.",
                    en: "Hopefully we can agree on a compromise that satisfies everyone.",
                },
                {
                    speaker: "B",
                    ar: "يَلّا رِنا، نِرْجَع عَالمَحاضْرَة قَبْل ما نِتْأَخَّر مَرّة تانيِة.",
                    en: "Come on Rina, let’s go back to the lecture before we’re late again.",
                },
                {
                    speaker: "A",
                    ar: "مَزْبوط، يِلّا نِمْشي.",
                    en: "True, let’s go.",
                },
            ],
        },

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
                    hint:
                        "Very common for simple plans: بَدّي أَدْرُس = I want to / I’m going to study.",
                    exampleAr: "بَدّي أَدْرُس بُكْرَا بَعْد الدَّرْس.",
                    exampleEn: "I’m going to study tomorrow after the lesson.",
                },
                {
                    id: "ra7",
                    ar: "رَح",
                    en: "will (future marker)",
                    hint:
                        "Used before the verb for planned/expected future: رَح أُسَافِر = I will travel.",
                    exampleAr: "بُكْرَا رَح أُصْحَى بَكِّير.",
                    exampleEn: "Tomorrow I will wake up early.",
                },
                {
                    id: "nawi",
                    ar: "نَاوِي",
                    en: "I intend / I’m planning (inside myself)",
                    hint:
                        "Masc: نَاوِي، fem: نَاوْيَة. Use with ‘إِنِّي’: نَاوِي إِنِّي…",
                    exampleAr: "أَنَا نَاوْيَة إِنِّي أُكَمِّل دِرَاسَة عَرَبِي.",
                    exampleEn: "I intend to continue studying Arabic.",
                },
                {
                    id: "mukhattat",
                    ar: "مُخَطِّط",
                    en: "planning / I have a plan",
                    hint:
                        "Masc: مُخَطِّط، fem: مُخَطِّطَة. Stronger, more organized than نَاوِي.",
                    exampleAr: "مُخَطِّط إِنِّي أُسَافِر بَعْد سَنَة.",
                    exampleEn: "I’m planning to travel in a year.",
                },
                {
                    id: "7abeb",
                    ar: "حَابِب",
                    en: "I’d like / I feel like (want in a soft way)",
                    hint:
                        "Masc: حَابِب، fem: حَابْبَة. Softer than بَدّي.",
                    exampleAr: "حَابْبَة أَجَرِّب شِي جْدِيد هَالسَّنَة.",
                    exampleEn: "I’d like to try something new this year.",
                },
                {
                    id: "lazem",
                    ar: "لَازِم",
                    en: "must / have to",
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
                    hint: "",
                    exampleAr: "اليَوْم مَا عِنْدِي خُطَط كْتِير.",
                    exampleEn: "I don’t have many plans today.",
                },
                {
                    id: "bukra",
                    ar: "بُكْرَا",
                    en: "tomorrow",
                    hint: "",
                    exampleAr: "بُكْرَا رَح أَقَابِل صَدِيقْتِي.",
                    exampleEn: "Tomorrow I will meet my friend.",
                },
                {
                    id: "ba3d_bukra",
                    ar: "بَعْد بُكْرَا",
                    en: "the day after tomorrow",
                    hint: "",
                    exampleAr: "بَعْد بُكْرَا بَدّي أُرَتِّب غُرْفْتِي.",
                    exampleEn: "The day after tomorrow I’m going to tidy my room.",
                },
                {
                    id: "hal_usbou3",
                    ar: "هَالْأُسْبُوع",
                    en: "this week",
                    hint: "",
                    exampleAr: "هَالْأُسْبُوع عِنْدِي مِشَارِيع كْتِير.",
                    exampleEn: "This week I have many projects.",
                },
                {
                    id: "jاي_ousbou3",
                    ar: "الأُسْبُوع الجَّاي",
                    en: "next week",
                    hint: "",
                    exampleAr: "الأُسْبُوع الجَّاي رَح نِبْدَى وَحْدَة جْدِيدَة.",
                    exampleEn: "Next week we will start a new unit.",
                },
                {
                    id: "shahr_jاي",
                    ar: "الشَّهِر الجَّاي",
                    en: "next month",
                    hint: "",
                    exampleAr: "الشَّهِر الجَّاي نَاوِي أَبْلِش رِيَاضَة.",
                    exampleEn: "Next month I intend to start doing exercise.",
                },
                {
                    id: "hal_saneh",
                    ar: "هَالسَّنَة",
                    en: "this year",
                    hint: "",
                    exampleAr: "هَالسَّنَة حَابِب أُسَافِر مَرَّة وَاحْدَة عَالأَقَلّ.",
                    exampleEn: "This year I’d like to travel at least once.",
                },
                {
                    id: "saneh_jayyeh",
                    ar: "السَّنَة الجَّاي",
                    en: "next year",
                    hint: "",
                    exampleAr: "السَّنَة الجَّاي مُخَطِّط أَكْمِّل مُسْتَوَى أَعْلَى.",
                    exampleEn: "Next year I’m planning to complete a higher level.",
                },
                {
                    id: "ba3deen",
                    ar: "بَعْدِين",
                    en: "later / after that",
                    hint:
                        "Useful connector for future sequences.",
                    exampleAr: "بَدّي أَدْرُس شْوَيّ، بَعْدِين أَتْفَرَّج عَلَى فِلْم.",
                    exampleEn: "I’m going to study a bit, then watch a movie.",
                },

                // ===== TYPES OF PLANS =====
                {
                    id: "mashrou3",
                    ar: "مَشْرُوع",
                    en: "project",
                    hint: "Study or work project.",
                    exampleAr: "عِنْدِي مَشْرُوع كْبِير لِلنِّهَاية السَّنَة.",
                    exampleEn: "I have a big project for the end of the year.",
                },
                {
                    id: "imti7an",
                    ar: "اِمْتِحَان",
                    en: "exam",
                    hint: "",
                    exampleAr: "بَدّي أَجَهِّز لِاِمْتِحَان بُكْرَا.",
                    exampleEn: "I’m going to prepare for an exam tomorrow.",
                },
                {
                    id: "safar",
                    ar: "سَفَر",
                    en: "travel",
                    hint: "",
                    exampleAr: "حَابِب أَخَطِّط لِسَفَر قَصِير فِي الصَّيْف.",
                    exampleEn: "I’d like to plan a short trip in summer.",
                },
                {
                    id: "i3tlah",
                    ar: "عُطْلَة",
                    en: "holiday / vacation",
                    hint: "",
                    exampleAr: "بِالعُطْلَة بَدّي أَرِيح وَأَنَام كْتِير.",
                    exampleEn: "In the holiday I’m going to rest and sleep a lot.",
                },
                {
                    id: "dagheT",
                    ar: "ضَغْط",
                    en: "pressure / stress (busy period)",
                    hint: "",
                    exampleAr: "هَالشَّهِر فِيه ضَغْط، مَنْهُفّ شُغُل وَدِرَاسَة.",
                    exampleEn: "This month is a period of pressure: a lot of work and study.",
                },

                // ===== ASKING ABOUT PLANS =====
                {
                    id: "shoo_mokhattatak",
                    ar: "شُو مُخَطَّطَاتَك؟",
                    en: "What are your plans?",
                    hint:
                        "Masc/fem the same if you drop the ending in speech: مُخَطَّطَاتَك.",
                    exampleAr: "شُو مُخَطَّطَاتَك لِهَالسَّنَة؟",
                    exampleEn: "What are your plans for this year?",
                },
                {
                    id: "shoo_baddak_t3mel",
                    ar: "شُو بَدَّك تِعْمِل بُكْرَا؟",
                    en: "What do you want to do tomorrow?",
                    hint:
                        "Fem: شُو بَدِّك تِعْمْلِي؟ You can keep 1 entry & explain here.",
                    exampleAr: "شُو بَدِّك تِعْمْلِي بُكْرَا بَعْد الدَّرْس؟",
                    exampleEn: "What do you want to do tomorrow after the lesson?",
                },
                {
                    id: "3indak_khatta",
                    ar: "عِنْدَك خُطَّة؟",
                    en: "Do you have a plan?",
                    hint: "",
                    exampleAr: "لِوِيكِينْد، عِنْدَك خُطَّة أَو لِسَّه؟",
                    exampleEn: "For the weekend, do you have a plan or not yet?",
                },
                {
                    id: "ma3_time",
                    ar: "لِبَعْدِين / لِبَعْد شْوَيّ",
                    en: "for later",
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
                    hint: "Singular: هَدَف.",
                    exampleAr: "عِنْدِي أَهْدَاف لِهَالسَّنَة فِي الدِّرَاسَة وَاللُّغَة.",
                    exampleEn: "I have goals for this year in study and language.",
                },
                {
                    id: "tadreejan",
                    ar: "تَدْرِيجِيًّا",
                    en: "gradually",
                    hint: "",
                    exampleAr: "بَدّي أَتْقَدَّم تَدْرِيجِيًّا يَعْنِي شْوَيّ شْوَيّ.",
                    exampleEn: "I want to progress gradually, step by step.",
                },
                {
                    id: "illa_iza",
                    ar: "إِلَّا إِذَا",
                    en: "unless / except if",
                    hint: "Used when plan might change.",
                    exampleAr: "رَح أِجِي عَالدَّرْس، إِلَّا إِذَا طَلَع شِي طَارِئ.",
                    exampleEn: "I will come to the lesson, unless something urgent comes up.",
                },
                {
                    id: "tanzim_wa2t",
                    ar: "تَنْظِيم وَقْت",
                    en: "time management",
                    hint: "",
                    exampleAr: "هَدَفِي هَالسَّنَة أُحَسِّن تَنْظِيم الوَقْت عِنْدِي.",
                    exampleEn: "My goal this year is to improve my time management.",
                },
            ],
        },

        // ====================================
        // DIALOGUE – LONG SCENES
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Two friends planning the week
                {
                    speaker: "Narrator",
                    ar: "رُوبَا وَصَاحِبْتَهَا نُور قَاعِدِين بَعْد الدَّرْس بِالكَافِيه وَبِيِحْكُوا عَن خُطَّط هَالْأُسْبُوع.",
                    en: "Roba and her friend Noor are sitting in a café after the lesson, talking about this week’s plans.",
                },
                {
                    speaker: "Noor",
                    ar: "رُوبَا، شُو مُخَطَّطَاتَك لِهَالْأُسْبُوع؟",
                    en: "Roba, what are your plans for this week?",
                },
                {
                    speaker: "Roba",
                    ar: "هَالْأُسْبُوع فِيه ضَغْط شْوَيّ. بَدّي أُخَلِّص مَشْرُوع لِلْجَامْعَة، وَرَح يِكُون عِنْدِي اِمْتِحَان يَوم الخَمِيس.",
                    en: "This week is a bit stressful. I want to finish a project for university, and I’ll have an exam on Thursday.",
                },
                {
                    speaker: "Noor",
                    ar: "وَبَعْد الاِمْتِحَان؟ بَفْتِكِر بَدِّك تِرْتَاحِي شْوَيّ.",
                    en: "And after the exam? I guess you want to rest a little.",
                },
                {
                    speaker: "Roba",
                    ar: "طَبْعًا! بَعْد الاِمْتِحَان بَعْدِين بَدّي أَطْلَع مَع أَصْحَابِي عَلَالبَحِر إِذَا الجَوّ مْنِيح.",
                    en: "Of course! After the exam, then I want to go out with my friends to the beach if the weather is nice.",
                },
                {
                    speaker: "Noor",
                    ar: "فِكْرَة حِلْوَة. أَنَا نَاوْيَة أَبْلِش أُرَتِّب خُطَّط لِهَالسَّنَة.",
                    en: "Nice idea. I intend to start organizing my plans for this year.",
                },
                {
                    speaker: "Roba",
                    ar: "مُخَطَّطَات دِرَاسَة وَلَّا شُغُل وَلَّا سَفَر؟",
                    en: "Plans for study, work, or travel?",
                },
                {
                    speaker: "Noor",
                    ar: "كُلّ شِي شْوَيّ. حَابْبَة أَطَوِّر حَالِي فِي العَرَبِي، وَحَابْبَة كَمَان أَتْعَلَّم شِي لِلْبَرْمَجَة.",
                    en: "A bit of everything. I’d like to improve my Arabic and also learn something in programming.",
                },
                {
                    speaker: "Roba",
                    ar: "مَعَك حَقّ، هَادَا مُمْتَاز. أَنَا كَمَان حَابْبَة أَدْرُس شْوَيّ بَرْمَجَة فِي الشَّهِر الجَّاي.",
                    en: "You’re right, that’s great. I’d also like to study some programming next month.",
                },

                // Scene 2 – Talking about long-term future plans
                {
                    speaker: "Narrator",
                    ar: "بَعْد مَا حَكَوْا عَن هَالْأُسْبُوع، بَلَّشُوا يِحْكُوا عَن السَّنَة الجَّاي وَالأَهْدَاف الكْبِيرَة.",
                    en: "After they talked about this week, they started talking about next year and bigger goals.",
                },
                {
                    speaker: "Noor",
                    ar: "السَّنَة الجَّاي، شُو أَهَمّ شِي بَدِّك تِحَقِّقِيه؟",
                    en: "Next year, what is the most important thing you want to achieve?",
                },
                {
                    speaker: "Roba",
                    ar: "بِرَأْيِي، أَهَمّ شِي أُحَسِّن تَنْظِيم الوَقْت عِنْدِي. مَثَلًا: خُطَّة وَاضْحَة لِلدِّرَاسَة، لِلمَشْرُوع، وَلِلرَّاحَة.",
                    en: "In my opinion, the most important thing is to improve my time management. For example: a clear plan for study, the project, and rest.",
                },
                {
                    speaker: "Noor",
                    ar: "وَالله مَعَك حَقّ. أَنَا مُخَطِّطَة إِنِّي آخُد كُورْس خَاص لِتَنْظِيم الوَقْت.",
                    en: "Honestly, you’re right. I’m planning to take a special course on time management.",
                },
                {
                    speaker: "Roba",
                    ar: "حَلُو. حَابْبَة كَمَان أُسَافِر فِي العُطْلَة إِلَى مَكَان هَادِي أَقْرَأ كْتُب.",
                    en: "Nice. I’d also like to travel in the vacation to a calm place and read books.",
                },
                {
                    speaker: "Noor",
                    ar: "إِنْ شَاء الله. رَح يِصِير كُلّه. شُو رَأْيِك نِكْتُب أَهْدَاف هَالسَّنَة عَلَى وَرَقَة مَع بَعْض؟",
                    en: "God willing, it will all happen. What do you think if we write this year’s goals on paper together?",
                },
                {
                    speaker: "Roba",
                    ar: "فِكْرَة مُمْتَازَة. هَيْك مَنْشُوف إِيش تَحَقَّق بَعْد سَنَة.",
                    en: "Excellent idea. This way we can see what has been achieved after a year.",
                },

                // Scene 3 – Teacher asking about next week’s plan
                {
                    speaker: "Narrator",
                    ar: "فِي آخِر الدَّرْس، المُدَرِّس سَأَل رُوبَا عَن خُطَّطْهَا لِلدِّرَاسَة.",
                    en: "At the end of the lesson, the teacher asked Roba about her study plans.",
                },
                {
                    speaker: "Teacher",
                    ar: "رُوبَا، الأُسْبُوع الجَّاي، شُو بَدِّك تِعْمْلِي لِتْثَبِّتِي الدَّرْس اليَوم؟",
                    en: "Roba, next week, what do you want to do to consolidate today’s lesson?",
                },
                {
                    speaker: "Roba",
                    ar: "بَدّي كُلّ يَوم أُرَاجِع المُفْرَدَات عَالأَقَلّ عَشَر دَقَايِق. وَرَح أُسَجِّل صَوْت أَحكِي فِيه عَن خُطَّط هَالشَّهِر.",
                    en: "I want to review the vocabulary every day for at least ten minutes. And I’ll record audio where I talk about this month’s plans.",
                },
                {
                    speaker: "Teacher",
                    ar: "مُمْتَاز. فِي شِي تَانِي نَاوْيَة تِعْمْلِيه؟",
                    en: "Excellent. Anything else you intend to do?",
                },
                {
                    speaker: "Roba",
                    ar: "مُمْكِن كَمَان أَكْتُب لِسْتَة أَهْدَاف لِهَالسَّنَة بِالعَرَبِي، عَشَان أَتْعَوَّد أَكْتُب عَن الْمُسْتَقْبَل.",
                    en: "Maybe I’ll also write a list of goals for this year in Arabic, so I get used to writing about the future.",
                },
                {
                    speaker: "Teacher",
                    ar: "طَبْعًا، هَادَا بِسْتَاهِل الوَقْت. إِلَّا إِذَا طَلَع شِي طَارِئ، مَنْحَاوِل نِمْشِي عَلَى الخُطَّة.",
                    en: "Of course, that’s worth the time. Unless something urgent comes up, we will try to follow the plan.",
                },
                {
                    speaker: "Roba",
                    ar: "إِنْ شَاء الله. شُكْرًا إِنَّك سَأَلْتِنِي عَن خُطَّطِي.",
                    en: "God willing. Thank you for asking me about my plans.",
                },
            ],
        },

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
                    hint: "Plural: هَوَايَات. Useful pattern: هِوَايِتِي = my hobby.",
                    exampleAr: "هِوَايِتِي الرَّسِم وَالقِرَايَة.",
                    exampleEn: "My hobbies are drawing and reading.",
                },
                {
                    id: "riyada",
                    ar: "رِيَاضَة",
                    en: "sports / exercise",
                    hint: "Can be general ‘sports’ or ‘exercise’.",
                    exampleAr: "بِحَاوِل أَعْمِل رِيَاضَة ثَلَاث مَرَّات فِي الأُسْبُوع.",
                    exampleEn: "I try to do exercise three times a week.",
                },
                {
                    id: "kora",
                    ar: "كُرَة قَدَم",
                    en: "football / soccer",
                    hint: "Often shortened to كُرَة.",
                    exampleAr: "أَخُوي بِحِبّ يِلْعَب كُرَة قَدَم مَع أَصْحَابُه.",
                    exampleEn: "My brother likes to play football with his friends.",
                },
                {
                    id: "musiqa",
                    ar: "مُوسِيقَى",
                    en: "music",
                    hint: "Very common with verbs ‘listen’ and ‘play (instrument)’.",
                    exampleAr: "فِي الفَرَاغ بَسْمَع مُوسِيقَى هَادِيَّة.",
                    exampleEn: "In my free time I listen to calm music.",
                },
                {
                    id: "kitaab",
                    ar: "كِتَاب",
                    en: "book",
                    hint: "Plural: كُتُب.",
                    exampleAr: "بَحِبّ الكُتُب التَّنْمِيَة الذَّاتِيَّة.",
                    exampleEn: "I like self-development books.",
                },
                {
                    id: "masalsal",
                    ar: "مُسَلْسَل",
                    en: "series / TV show",
                    hint: "Plural: مُسَلْسَلَات.",
                    exampleAr: "أَحْيَانًا بِتْفَرَّج عَلَى مُسَلْسَل عَاللَّابْتُوب.",
                    exampleEn: "Sometimes I watch a series on the laptop.",
                },
                {
                    id: "film",
                    ar: "فِلْم",
                    en: "movie",
                    hint: "Plural: أَفْلَام.",
                    exampleAr: "فِي الوِيكِينْد بِنْرُوح عَلَالسِّينِمَا نِتْفَرَّج عَلَى فِلْم.",
                    exampleEn: "On weekends we go to the cinema to watch a movie.",
                },
                {
                    id: " بحر",
                    ar: "بَحِر",
                    en: "sea / beach",
                    hint: "Used a lot in Gaza/Palestine context.",
                    exampleAr: "أَحْلَى شِي فِي الصَّيْف القَعْدَة عَالبَحِر.",
                    exampleEn: "The best thing in summer is sitting by the sea.",
                },
                {
                    id: "nadi",
                    ar: "نَادِي",
                    en: "club / gym",
                    hint: "Can be sports club or gym depending on context.",
                    exampleAr: "مَسَا كُلّ ثَنِين بِرُوح عَلنَّادِي.",
                    exampleEn: "Every Monday evening I go to the gym.",
                },

                // ===== LEISURE VERBS =====
                {
                    id: "yil3ab",
                    ar: "يِلْعَب",
                    en: "to play (a game / sport)",
                    hint: "Masdar (verbal noun): لِعِب. With كُرَة, شَدَّة (cards), إلخ.",
                    exampleAr: "بِحِبّ أِلْعَب كُرَة قَدَم مَع الصَّحَاب.",
                    exampleEn: "I like to play football with friends.",
                },
                {
                    id: "yi2ra",
                    ar: "يِقْرَا",
                    en: "to read",
                    hint: "1st person: بَقْرَا.",
                    exampleAr: "قَبْل مَا أَنَام بَقْرَا نُصّ سَاعَة.",
                    exampleEn: "Before I sleep, I read for half an hour.",
                },
                {
                    id: "yirsem",
                    ar: "يِرْسِم",
                    en: "to draw",
                    hint: "1st person: بَرْسِم.",
                    exampleAr: "أُخْتِي بَتْرْسِم صُوَر كْتِير حْلُوَة.",
                    exampleEn: "My sister draws very nice pictures.",
                },
                {
                    id: "yisma3",
                    ar: "يِسْمَع",
                    en: "to listen (to)",
                    hint: "Use preposition لَـ: بَسْمَع لَأَغَانِي هَادِيَّة.",
                    exampleAr: "وَأَنَا مْسَافْرَة بَسْمَع مُوسِيقَى.",
                    exampleEn: "When I’m traveling, I listen to music.",
                },
                {
                    id: "yitfarraj",
                    ar: "يِتْفَرَّج",
                    en: "to watch",
                    hint: "Often with عَلَى: يِتْفَرَّج عَلَى فِلْم / مُسَلْسَل.",
                    exampleAr: "بِاللَّيْل بِتْفَرَّج عَلَى مُسَلْسَل تُرْكِي.",
                    exampleEn: "At night I watch a Turkish series.",
                },
                {
                    id: "yimshi",
                    ar: "يِمْشِي",
                    en: "to walk",
                    hint: "For exercise walk or just going around.",
                    exampleAr: "مَسَا بْرُوح أِمْشِي نُصّ سَاعَة حَوَالِين البَيْت.",
                    exampleEn: "In the evening I go walk for half an hour around the house.",
                },
                {
                    id: "yisba7",
                    ar: "يِسْبَح",
                    en: "to swim",
                    hint: "1st person: بَسْبَح.",
                    exampleAr: "فِي الصَّيْف بَسْبَح كْتِير عَالبَحِر.",
                    exampleEn: "In summer I swim a lot at the sea.",
                },
                {
                    id: "yit3allam_ala",
                    ar: "يِتْعَلَّم عَلَى آلَة",
                    en: "to learn (an instrument)",
                    hint: "Example with oud, guitar, piano, etc.",
                    exampleAr: "هَالفَتْرَة بَتْعَلَّم عَلَى الْعُود.",
                    exampleEn: "These days I’m learning the oud.",
                },

                // ===== FREQUENCY & TIME =====
                {
                    id: "3adean",
                    ar: "عَادَةً",
                    en: "usually",
                    hint: "Very useful to talk about routine.",
                    exampleAr: "عَادَةً بَقْضِي الوِيكِينْد مَع العِيلَة.",
                    exampleEn: "Usually I spend the weekend with my family.",
                },
                {
                    id: "a7yanan",
                    ar: "أَحْيَانًا",
                    en: "sometimes",
                    hint: "",
                    exampleAr: "أَحْيَانًا بَرُوح عَلَالسِّينِمَا مَع أَصْحَابِي.",
                    exampleEn: "Sometimes I go to the cinema with my friends.",
                },
                {
                    id: "nادرan",
                    ar: "نَادِرًا",
                    en: "rarely",
                    hint: "",
                    exampleAr: "نَادِرًا بَتْفَرَّج عَلَى تِلْفِزْيُون.",
                    exampleEn: "I rarely watch TV.",
                },
                {
                    id: "walla_omar",
                    ar: "وَلَا مَرَّة",
                    en: "never",
                    hint: "Strong negative frequency.",
                    exampleAr: "وَلَا مَرَّة جَرَّبْت أِسْبَح بِالبَحِر فِي الشِّتَا.",
                    exampleEn: "I have never tried swimming in the sea in winter.",
                },
                {
                    id: "bil_weikend",
                    ar: "بِالوِيكِينْد",
                    en: "on the weekend",
                    hint: "Very common chunk in youth speech.",
                    exampleAr: "بِالوِيكِينْد بْنِطْبُخ أَكْلَة خَاصَّة فِي البَيْت.",
                    exampleEn: "On the weekend we cook a special dish at home.",
                },
                {
                    id: "fi_elfaragh",
                    ar: "فِي الفَرَاغ",
                    en: "in free time",
                    hint: "",
                    exampleAr: "فِي الفَرَاغ بَتْعَلَّم لُغَات عَلَى الإِنْتَرْنِت.",
                    exampleEn: "In my free time I learn languages online.",
                },

                // ===== WITH WHOM =====
                {
                    id: "ma3_hali",
                    ar: "مَع حَالِي",
                    en: "by myself / alone",
                    hint: "",
                    exampleAr: "لَمَّا أِقْرَا بَفَضَّل أَقْعُد مَع حَالِي.",
                    exampleEn: "When I read I prefer to sit by myself.",
                },
                {
                    id: "ma3_as7abi",
                    ar: "مَع أَصْحَابِي",
                    en: "with my friends",
                    hint: "",
                    exampleAr: "بِحِبّ أِلْعَب كُرَة قَدَم مَع أَصْحَابِي.",
                    exampleEn: "I like to play football with my friends.",
                },
                {
                    id: "ma3_el3eileh",
                    ar: "مَع العِيلَة",
                    en: "with the family",
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
                    hint: "From the verb يِتْسَلَّى ‘to have fun / pass time’.",
                    exampleAr: "بِسْتَعْمِل المُسَلْسَل لِلتَّسْلِيِة بَعْد الدِّرَاسَة.",
                    exampleEn: "I use a series for fun after studying.",
                },
                {
                    id: "yitshallaa",
                    ar: "يِتْسَلَّى",
                    en: "to have fun / entertain oneself",
                    hint: "1st person: بَتْسَلَّى.",
                    exampleAr: "بَتْسَلَّى لَمَّا أِرْسِم أَو أِسْمَع مُوسِيقَى.",
                    exampleEn: "I have fun when I draw or listen to music.",
                },
                {
                    id: "yistirikh",
                    ar: "يِسْتِرِيح",
                    en: "to rest / relax",
                    hint: "1st person: بَسْتِرِيح.",
                    exampleAr: "بَعْد الأُسْبُوع الطَّوِيل بَسْتِرِيح بِالوِيكِينْد.",
                    exampleEn: "After a long week I relax on the weekend.",
                },
                {
                    id: "mufaddal",
                    ar: "مُفَضَّل",
                    en: "favorite",
                    hint: "Masc: مُفَضَّل، fem: مُفَضَّلَة.",
                    exampleAr: "أَكْتُب هِوَايَتَك المُفَضَّلَة بِالعَرَبِي.",
                    exampleEn: "Write your favorite hobby in Arabic.",
                },
                {
                    id: "mafiwa2t",
                    ar: "مَا فِيش وَقْت",
                    en: "there is no time",
                    hint: "Very common excuse when talking about hobbies.",
                    exampleAr: "بِحِبّ أَرْسِم بَسّ مَا فِيش وَقْت هَالْفَتْرَة.",
                    exampleEn: "I like drawing but there’s no time these days.",
                },
            ],
        },

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
// ========================= VOCAB MODAL STATE =========================
const vocabModalState = {
    list: [],       // array of items (core أو extra)
    index: 0,       // current index in list
    showExamples: true, // هل الأمثلة ظاهرة أو مخفية
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

function saveStudentsToLS() {
    localStorage.setItem(LS_STUDENTS_KEY, JSON.stringify(appState.students));
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
                <td class="en">${escapeHtml(w.hint || "")}</td>
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
                            <th>Hint</th>
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
    document.body.classList.remove("home-only");
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

    $("#vocabModalWord").textContent = item.ar;
    $("#vocabModalMeaning").textContent = item.en;
    $("#vocabModalHint").textContent = item.hint || "";
    $("#vocabModalExampleAr").textContent = item.exampleAr || "";
    $("#vocabModalExampleEn").textContent = item.exampleEn || "";

    // تحديث حالة إظهار/إخفاء الأمثلة
    const exAr = $("#vocabModalExampleAr");

    const toggleBtn = $("#vocabToggleExamplesBtn");

    if (vocabModalState.showExamples) {
        exAr.style.display = "";

        if (toggleBtn) toggleBtn.textContent = "👁 Hide examples";
    } else {
        exAr.style.display = "none";

        if (toggleBtn) toggleBtn.textContent = "👁 Show examples";
    }
}

function openVocabModal(list, index) {
    vocabModalState.list = list || [];
    vocabModalState.index = index || 0;
    vocabModalState.showExamples = true; // كل مرة نفتح، نرجّع الأمثلة ظاهرة

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
        "Tap a card to see details and example sentences. Visiting all core items will complete this section.";
    container.appendChild(hint);

    renderVocabularyGroup(container, "Core Vocabulary", lesson.vocabulary.core, true);
    renderVocabularyGroup(container, "Extra Vocabulary", lesson.vocabulary.extra, false);

    if (appState.teacherMode) {
        const panel = document.createElement("div");
        panel.style.marginTop = "12px";
        panel.innerHTML =
            '<p class="teacher-edit-note"><strong>Teacher Mode:</strong> Use quick actions here for vocabulary. For bulk edits, use Teacher Dashboard later if needed.</p>';

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexWrap = "wrap";
        row.style.gap = "6px";

        const btnAddCore = document.createElement("button");
        btnAddCore.className = "btn btn--outline btn--sm";
        btnAddCore.textContent = "Add Core Word";
        btnAddCore.addEventListener("click", () => handleAddVocabItem(lesson, "core"));

        const btnAddExtra = document.createElement("button");
        btnAddExtra.className = "btn btn--outline btn--sm";
        btnAddExtra.textContent = "Add Extra Word";
        btnAddExtra.addEventListener("click", () => handleAddVocabItem(lesson, "extra"));

        const btnEdit = document.createElement("button");
        btnEdit.className = "btn btn--ghost btn--sm";
        btnEdit.textContent = "Edit / Delete Words";
        btnEdit.addEventListener("click", () => handleEditVocabItems(lesson));

        row.appendChild(btnAddCore);
        row.appendChild(btnAddExtra);
        row.appendChild(btnEdit);
        panel.appendChild(row);
        container.appendChild(panel);
    }

    renderSectionStatus(container, "vocabulary");
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
    const title = document.createElement("h3");
    title.textContent = "Grammar Focus";

    const grid = document.createElement("div");
    grid.className = "grammar-grid";

    lesson.grammar.forEach((g) => {
        const card = document.createElement("div");
        card.className = "grammar-card";

        const t = document.createElement("div");
        t.className = "grammar-item-title";
        t.textContent = g.title;

        const desc = document.createElement("div");
        desc.textContent = g.description;

        card.appendChild(t);
        card.appendChild(desc);
        grid.appendChild(card);
    });

    const btn = document.createElement("button");
    btn.className = "btn btn--primary btn--sm";
    btn.textContent = "Mark Grammar as Done";
    btn.addEventListener("click", () => setStudentProgressField("grammar", true));

    container.appendChild(title);
    container.appendChild(grid);
    container.appendChild(btn);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: To change grammar points, use the Teacher Dashboard form (Edit Lesson Content) where you can add/edit/delete rules.";
        container.appendChild(note);
    }

    renderSectionStatus(container, "grammar");
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
    $("#btnHeroStudent").addEventListener("click", () => goToStudents());
    $("#btnHeroTeacher").addEventListener("click", () => goToTeacherDashboard());

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
    function checkIfVocabDone() {
        const allVocab = [
            ...(currentLesson.vocabulary?.core || []),
            ...(currentLesson.vocabulary?.extra || []),
        ];

        const visited = ensureVocabVisitedSet();

        const allSeen = allVocab.every(v => visited.has(v.id));

        if (allSeen) {
            markLessonSectionDone("vocabulary"); // 🔥 تعلّمناه Done
            updateLessonProgressUI(); // تحديث الواجهة
        }
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
            vocabModalState.showExamples = true;
            renderVocabModalFromState();
            const currentItem = vocabModalState.list[vocabModalState.index];
            if (currentItem && currentItem.id) {
                const s = ensureVocabVisitedSet();
                s.add(currentItem.id);
                updateLessonProgressUI();
                checkIfVocabDone();
            }
        });
    }


    if (btnToggleExamples) {
        btnToggleExamples.addEventListener("click", () => {
            vocabModalState.showExamples = !vocabModalState.showExamples;
            renderVocabModalFromState();
        });
    }

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
});

// DEFAULT LESSON DATA DEFINITION ENDS HERE
