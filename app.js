// ========================= CONSTANTS / KEYS =========================
const LS_STUDENTS_KEY = "pal_arabic_students";
const LS_LESSON_PREFIX = "pal_arabic_lesson_";
const LS_FONT_SIZE_KEY = "pal_arabic_font_size";
const LS_CUSTOM_UNITS_KEY = "pal_arabic_custom_units";

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
const LESSON_ID_SOCIAL = "Intermediate-SocialConversations-L1";
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
            lessonTitle: "Unit 1 – Greetings & Introductions",
        },

        overview: {
            title: "Unit 1 – Greetings & Introductions",
            description:
                "This lesson teaches students how to greet, ask about name and origin, say where they are from and where they live, and close a short conversation politely in Palestinian Arabic.",
            goals: [
                "Use common Palestinian Arabic greetings in casual and polite situations.",
                "Ask and answer simple questions about name, country, and city.",
                "Use basic feeling words to say how they are doing.",
                "Close short conversations politely with natural expressions.",
            ],
        },

        // ====================================
        // VOCABULARY (≈ 34 unique items)
        // ====================================
        vocabulary: {
            core: [
                {
                    id: "marhaba",
                    ar: "مَرْحَبَا",
                    en: "Hi / Hello",
                    hint: "Very common casual greeting, used any time of day.",
                    exampleAr: "مَرْحَبَا، أَنَا اِسْمِي لِينْ.",
                    exampleEn: "Hi, my name is Lynn.",
                },
                {
                    id: "ahlan",
                    ar: "أَهْلًا",
                    en: "Hi / Hey",
                    hint: "Short friendly greeting, often reply to مَرْحَبَا.",
                    exampleAr: "مَرْحَبَا! ـ أَهْلًا!",
                    exampleEn: "Hi! — Hey!",
                },
                {
                    id: "ahlan_wa_sahlan",
                    ar: "أَهْلًا وَسَهْلًا",
                    en: "Welcome",
                    hint: "Warm welcome for guests, visitors, new students.",
                    exampleAr: "أَهْلًا وَسَهْلًا فِي الدَّرْس.",
                    exampleEn: "Welcome to the lesson.",
                },
                {
                    id: "salam",
                    ar: "السَّلَامُ عَلَيْكُمْ",
                    en: "Peace be upon you",
                    hint: "More formal / religious greeting, often to a group.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ يَا جَمَاعَة.",
                    exampleEn: "Peace be upon you, everyone.",
                },
                {
                    id: "salam_reply",
                    ar: "وَعَلَيْكُم السَّلَام",
                    en: "And peace be upon you",
                    hint: "Standard reply to السَّلَامُ عَلَيْكُمْ.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ. ـ وَعَلَيْكُم السَّلَام.",
                    exampleEn: "Peace be upon you. — And peace be upon you.",
                },
                {
                    id: "sabah_el_kheir",
                    ar: "صَبَاح الْخِير",
                    en: "Good morning",
                    hint: "Reply: صَبَاح النُّور.",
                    exampleAr: "صَبَاح الْخِير يَا أُسْتَاذ.",
                    exampleEn: "Good morning, teacher.",
                },
                {
                    id: "masa_el_kheir",
                    ar: "مَسَا الْخِير",
                    en: "Good evening",
                    hint: "Used in the evening / night, reply: مَسَا النُّور.",
                    exampleAr: "مَسَا الْخِير يَا شَبَاب.",
                    exampleEn: "Good evening, guys.",
                },
                {
                    id: "kifak",
                    ar: "كِيفَك؟",
                    en: "How are you?",
                    hint: "Forms: masc «كِيفَك؟», fem «كِيفِك؟», plural «كِيفْكُم؟».",
                    exampleAr: "مَرْحَبَا، كِيفَك الْيَوْم؟",
                    exampleEn: "Hi, how are you today?",
                },
                {
                    id: "mnee7",
                    ar: "مْنِيح",
                    en: "Good / fine",
                    hint: "Masc: مْنِيح, fem: مْنِيحَة, plural: مْنَاح.",
                    exampleAr: "أَنَا مْنِيحَة الْيَوْم، شُكْرًا.",
                    exampleEn: "I’m good today, thanks.",
                },
                {
                    id: "mabsut",
                    ar: "مَبْسُوط",
                    en: "Happy / pleased",
                    hint: "Masc: مَبْسُوط, fem: مَبْسُوطَة, plural: مَبْسُوطِين.",
                    exampleAr: "إِحْنَا مَبْسُوطِين فِي الدَّرْس.",
                    exampleEn: "We’re happy in the lesson.",
                },
                {
                    id: "ta3ban",
                    ar: "تَعْبَان",
                    en: "Tired",
                    hint: "Masc: تَعْبَان, fem: تَعْبَانَة.",
                    exampleAr: "الْيَوْم أَنَا تَعْبَان شَوَيّ.",
                    exampleEn: "Today I’m a bit tired.",
                },
                {
                    id: "sho_ismak",
                    ar: "شُو اِسْمَك؟",
                    en: "What’s your name?",
                    hint: "Masc: شُو اِسْمَك؟, fem: شُو اِسْمِك؟.",
                    exampleAr: "مَرْحَبَا، شُو اِسْمَك؟",
                    exampleEn: "Hi, what’s your name?",
                },
                {
                    id: "ana_ismi",
                    ar: "أَنَا اِسْمِي...",
                    en: "My name is…",
                    hint: "Used to introduce yourself.",
                    exampleAr: "أَنَا اِسْمِي رَامِي.",
                    exampleEn: "My name is Rami.",
                },
                {
                    id: "min_wen",
                    ar: "مِنْ وِين؟",
                    en: "Where are you from?",
                    hint: "Question about origin (country / city).",
                    exampleAr: "مِنْ وِين إِنْتَ أَصْلًا؟",
                    exampleEn: "Where are you originally from?",
                },
                {
                    id: "ana_min",
                    ar: "أَنَا مِنْ...",
                    en: "I am from…",
                    hint: "Used with your country or city.",
                    exampleAr: "أَنَا مِنْ كَنَدَا.",
                    exampleEn: "I am from Canada.",
                },
                {
                    id: "wen_saken",
                    ar: "وِين سَاكِن؟",
                    en: "Where do you live?",
                    hint: "Forms: masc «وِين سَاكِن؟», fem «وِين سَاكْنَة؟», plural «وِين سَاكْنِين؟».",
                    exampleAr: "هَلَّقْ إِنْتَ وِين سَاكِن؟",
                    exampleEn: "Where do you live now?",
                },
                {
                    id: "ana_saken_fi",
                    ar: "أَنَا سَاكِن فِي...",
                    en: "I live in…",
                    hint: "Fem form: أَنَا سَاكْنَة فِي….",
                    exampleAr: "أَنَا سَاكْنَة فِي رَام اللّٰه.",
                    exampleEn: "I live in Ramallah.",
                },
                {
                    id: "ana_badros",
                    ar: "أَنَا بَدْرُس...",
                    en: "I study…",
                    hint: "Use with subject: Arabic, medicine, engineering, etc.",
                    exampleAr: "أَنَا بَدْرُس عَرَبِي.",
                    exampleEn: "I study Arabic.",
                },
                {
                    id: "ana_bashtaghel",
                    ar: "أَنَا بَشْتِغِل...",
                    en: "I work as…",
                    hint: "Use with job: teacher, engineer…",
                    exampleAr: "أَنَا بَشْتِغِل مُهَنْدِس.",
                    exampleEn: "I work as an engineer.",
                },
                {
                    id: "talib",
                    ar: "طَالِب / طَالْبَة",
                    en: "Student",
                    hint: "Masc: طَالِب, fem: طَالْبَة.",
                    exampleAr: "أَنَا طَالْبَة عَرَبِي.",
                    exampleEn: "I am an Arabic student (fem).",
                },
                {
                    id: "ustaz",
                    ar: "أُسْتَاذ / أُسْتَاذَة",
                    en: "Teacher",
                    hint: "Masc: أُسْتَاذ, fem: أُسْتَاذَة.",
                    exampleAr: "هَادَا الأُسْتَاذ الْجَدِيد.",
                    exampleEn: "This is the new teacher.",
                },
                {
                    id: "saheb",
                    ar: "صَاحِب / صَاحْبَة",
                    en: "Friend",
                    hint: "Masc: صَاحِب, fem: صَاحْبَة.",
                    exampleAr: "هَادَا صَاحْبِي مِن أَمْرِيكَا.",
                    exampleEn: "This is my friend from the US.",
                },
                {
                    id: "ajnabi",
                    ar: "أَجْنَبِي / أَجْنَبِيَّة",
                    en: "Foreigner",
                    hint: "Masc: أَجْنَبِي, fem: أَجْنَبِيَّة.",
                    exampleAr: "أَنَا أَجْنَبِيَّة بَتْعَلَّم عَرَبِي.",
                    exampleEn: "I’m a foreigner learning Arabic.",
                },
                {
                    id: "shukran",
                    ar: "شُكْرًا",
                    en: "Thank you",
                    hint: "Stronger: شُكْرًا كْتِير = thank you so much.",
                    exampleAr: "شُكْرًا كْتِير عَلَى الْمُسَاعَدَة.",
                    exampleEn: "Thank you so much for the help.",
                },
                {
                    id: "afwan",
                    ar: "عَفْوَاً",
                    en: "You’re welcome",
                    hint: "Reply to شُكْرًا or small apology.",
                    exampleAr: "شُكْرًا. ـ عَفْوَاً.",
                    exampleEn: "Thank you. — You’re welcome.",
                },
                {
                    id: "law_samaHt",
                    ar: "لَوْ سَمَحْتْ",
                    en: "Please / excuse me",
                    hint: "Polite request. Plural: لَوْ سَمَحْتُوا.",
                    exampleAr: "لَوْ سَمَحْتْ، مُمْكِن تُعِيد ب slowly؟",
                    exampleEn: "Excuse me, can you repeat slowly?",
                },
                {
                    id: "mesh_moshkileh",
                    ar: "مِش مُشْكِلَة",
                    en: "No problem",
                    hint: "Used after apology or thanks.",
                    exampleAr: "آسِف إِنِّي تَأَخَّرْت. ـ مِش مُشْكِلَة.",
                    exampleEn: "Sorry I’m late. — No problem.",
                },
                {
                    id: "fursa_saeedeh",
                    ar: "فُرْصَة سَعِيدَة",
                    en: "Nice to meet you",
                    hint: "Used when meeting someone for the first time.",
                    exampleAr: "فُرْصَة سَعِيدَة يَا لِينْ.",
                    exampleEn: "Nice to meet you, Lynn.",
                },
                {
                    id: "tsharrafna",
                    ar: "تْشَرَّفْنَا",
                    en: "Pleased to meet you",
                    hint: "Common reply to فُرْصَة سَعِيدَة.",
                    exampleAr: "فُرْصَة سَعِيدَة. ـ تْشَرَّفْنَا.",
                    exampleEn: "Nice to meet you. — Pleased to meet you.",
                },
                {
                    id: "ma3_salaameh",
                    ar: "مَع السَّلَامَة",
                    en: "Goodbye",
                    hint: "Polite goodbye expression.",
                    exampleAr: "مَع السَّلَامَة، بَشُوفِك بُكْرَا.",
                    exampleEn: "Goodbye, see you tomorrow.",
                },
                {
                    id: "bt_tawfeeq",
                    ar: "بِالتَّوْفِيق",
                    en: "Good luck",
                    hint: "Encouraging phrase.",
                    exampleAr: "عِنْدَك دَرْس الْيَوْم؟ بِالتَّوْفِيق!",
                    exampleEn: "You have class today? Good luck!",
                },
                {
                    id: "ana_mesh_fahem",
                    ar: "أَنَا مِش فَاهِم",
                    en: "I don’t understand",
                    hint: "Masc: أَنَا مِش فَاهِم, fem: أَنَا مِش فَاهْمَة.",
                    exampleAr: "أَنَا مِش فَاهِم، مُمْكِن تِشْرَح كَمَان مَرَّة؟",
                    exampleEn: "I don’t understand, can you explain again?",
                },
                {
                    id: "yalla",
                    ar: "يَلَّا",
                    en: "Come on / let’s go",
                    hint: "Used to start or finish something.",
                    exampleAr: "يَلَّا، نِبْدَى الدَّرْس.",
                    exampleEn: "Come on, let’s start the lesson.",
                },
            ],
            extra: [
                {
                    id: "ahlan_fiik",
                    ar: "أَهْلًا فِيك",
                    en: "Welcome (to you)",
                    hint: "Fem: أَهْلًا فِيكِي, plural: أَهْلًا فِيكُم.",
                    exampleAr: "أَهْلًا فِيك فِي فِلَسْطِين.",
                    exampleEn: "Welcome to Palestine.",
                },
                {
                    id: "enbset",
                    ar: "اِنْبِسِط",
                    en: "Enjoy / have fun",
                    hint: "Fem: اِنْبِسِطِي, plural: اِنْبِسِطُوا.",
                    exampleAr: "يَلَّا، اِنْبِسِطُوا بِالدَّرْس.",
                    exampleEn: "Come on, enjoy the lesson.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (≈ 34 lines)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Teacher meets student
                { speaker: "T", ar: "مَرْحَبَا، أَهْلًا وَسَهْلًا فِي الدَّرْس!", en: "Hi, welcome to the lesson!" },
                { speaker: "S", ar: "مَرْحَبَا أُسْتَاذ.", en: "Hi, teacher." },
                { speaker: "T", ar: "صَبَاح الْخِير، كِيفَك الْيَوْم؟", en: "Good morning, how are you today?" },
                { speaker: "S", ar: "أَنَا مْنِيحَة، شُكْرًا. وَإِنْتَ؟", en: "I’m good, thanks. And you?" },
                { speaker: "T", ar: "أَنَا مْنِيح، الْحَمْدِلِلَّه.", en: "I’m good, praise be to God." },
                { speaker: "T", ar: "شُو اِسْمِك؟", en: "What’s your name?" },
                { speaker: "S", ar: "أَنَا اِسْمِي لِينْ.", en: "My name is Lynn." },
                { speaker: "T", ar: "فُرْصَة سَعِيدَة يَا لِينْ.", en: "Nice to meet you, Lynn." },
                { speaker: "S", ar: "تْشَرَّفْت فِيك أُسْتَاذ.", en: "Pleased to meet you, teacher." },

                // Scene 2 – Origin + where you live
                { speaker: "T", ar: "مِنْ وِين إِنْتِي أَصْلًا؟", en: "Where are you originally from?" },
                { speaker: "S", ar: "أَنَا مِنْ كَنَدَا.", en: "I’m from Canada." },
                { speaker: "T", ar: "حِلُو! وَهَلَّقْ وِين سَاكْنَة؟", en: "Nice! And where do you live now?" },
                { speaker: "S", ar: "هَلَّقْ أَنَا سَاكْنَة فِي رَام اللّٰه.", en: "Now I live in Ramallah." },
                { speaker: "S", ar: "وَإِنْتَ مِنْ وِين؟", en: "And where are you from?" },
                { speaker: "T", ar: "أَنَا مِنْ غَزَّة، بَسّ هَلَّقْ بَشْتِغِل فِي الْقُدْس.", en: "I’m from Gaza, but now I work in Jerusalem." },

                // Scene 3 – Studies / work
                { speaker: "T", ar: "إِنْتِي طَالْبَة وَلَّا بِتْشْتِغْلِي؟", en: "Are you a student or do you work?" },
                { speaker: "S", ar: "أَنَا طَالْبَة، بَدْرُس عَرَبِي وَإِنْجِلِيزِي.", en: "I’m a student, I study Arabic and English." },
                { speaker: "T", ar: "حِلُو، أَنَا كَمَان أُسْتَاذ عَرَبِي.", en: "Nice, I’m also an Arabic teacher." },
                { speaker: "S", ar: "مَبْسُوطَة إِنِّي مَعَك فِي الدَّرْس.", en: "I’m happy to be in your class." },
                { speaker: "T", ar: "وَإِحْنَا مَبْسُوطِين فِيك كَمَان.", en: "And we’re happy to have you too." },

                // Scene 4 – Other students join
                { speaker: "S2", ar: "السَّلَامُ عَلَيْكُمْ يَا شَبَاب!", en: "Peace be upon you, everyone!" },
                { speaker: "S", ar: "وَعَلَيْكُم السَّلَام، مَرْحَبَا!", en: "And peace be upon you, hi!" },
                { speaker: "T", ar: "كِيفْكُم الْيَوْم؟", en: "How are you all today?" },
                { speaker: "S2", ar: "إِحْنَا مْنَاح، بَسّ شَوَيّ تَعْبَانِين.", en: "We’re fine, just a bit tired." },
                { speaker: "S3", ar: "أَنَا مَبْسُوط إِنِّي بَدْرُس عَرَبِي مَعْكُم.", en: "I’m happy that I study Arabic with you all." },

                // Scene 5 – Closing
                { speaker: "T", ar: "طَيِّب يَلَّا، هَادَا كَانَ التَّعَارُف الْأَوَّل.", en: "Alright, this was our first introduction." },
                { speaker: "T", ar: "مَع السَّلَامَة، مَا تِنْسُوا الْوَاجِب.", en: "Goodbye, don’t forget the homework." },
                { speaker: "S", ar: "مَع السَّلَامَة أُسْتَاذ، بِالتَّوْفِيق.", en: "Goodbye, teacher, good luck." },
                { speaker: "S2", ar: "شُكْرًا، اِنْبِسِطُوا بِوَقْتْكُم الْيَوْم.", en: "Thank you, enjoy your time today." },
                { speaker: "S3", ar: "مِش مُشْكِلَة، أَكِيد مَا مْنِنْسَى الْوَاجِب.", en: "No problem, we definitely won’t forget the homework." },
            ],
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "kifak_forms",
                title: "‘How are you?’ and basic adjectives",
                description:
                    "In Palestinian Arabic, «كِيفَك؟» (kifak) means ‘How are you?’. The ending changes with gender and number:\n" +
                    "• masc: كِيفَك؟\n" +
                    "• fem: كِيفِك؟\n" +
                    "• plural: كِيفْكُم؟\n\n" +
                    "Same idea with adjectives:\n" +
                    "• مْنِيح (mneeḥ) = good (masc.)\n" +
                    "• مْنِيحَة (mneeḥa) = good (fem.)\n" +
                    "• مْنَاح (mnaaḥ) = good (plural)\n" +
                    "• مَبْسُوط / مَبْسُوطَة / مَبْسُوطِين = happy (masc / fem / plural).",
            },
            {
                id: "ana_min_vs_saken",
                title: "I am from vs I live in",
                description:
                    "Use «أَنَا مِنْ ...» (ana min ...) for where you are originally from (country or city):\n" +
                    "• أَنَا مِنْ كَنَدَا = I am from Canada.\n\n" +
                    "Use «أَنَا سَاكِن فِي ... / أَنَا سَاكْنَة فِي ...» for where you live now:\n" +
                    "• أَنَا سَاكْنَة فِي رَام اللّٰه = I live in Ramallah (female speaking).\n" +
                    "• أَنَا سَاكِن فِي الْقُدْس = I live in Jerusalem (male speaking).",
            },
            {
                id: "b_prefix",
                title: "The ‘b-’ prefix for simple present",
                description:
                    "The prefix «بـ» (b-) is used in Palestinian Arabic for simple present, especially for habits and routines:\n" +
                    "• أَنَا بَدْرُس عَرَبِي = I study Arabic.\n" +
                    "• أَنَا بَشْتِغِل فِي مَكْتَب = I work in an office.\n\n" +
                    "This usually describes something regular or repeated, not a one-time action.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "greet_q1",
                    questionAr: "«كِيفَك الْيَوْم؟» مَعْنَاهَا:",
                    optionsEn: ["What is your name today?", "How are you today?", "Where are you from today?"],
                    correctIndex: 1,
                },
                {
                    id: "greet_q2",
                    questionAr: "«أَنَا مِنْ كَنَدَا» مَعْنَاهَا:",
                    optionsEn: ["I live in Canada.", "I am from Canada.", "I work in Canada."],
                    correctIndex: 1,
                },
                {
                    id: "greet_q3",
                    questionAr: "«أَنَا سَاكْنَة فِي رَام اللّٰه» مَعْنَاهَا:",
                    optionsEn: [
                        "I am from Ramallah.",
                        "I live in Ramallah (female speaking).",
                        "I work in Ramallah.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "greet_q4",
                    questionAr: "أَيّ تَعْبِير تِسْتَخْدِمُه لَمَّا تِتْعَرَّف عَلَى شَخْص جَدِيد؟",
                    optionsEn: ["Nice to meet you.", "Good luck.", "See you tomorrow."],
                    correctIndex: 0,
                },
                {
                    id: "greet_q5",
                    questionAr: "لَمَّا حَدَا يِحْكِي «شُكْرًا»، أَيّ رَدّ أَكْثَر شَيْع؟",
                    optionsEn: ["Goodbye.", "You’re welcome.", "No problem."],
                    correctIndex: 1,
                },
            ],
            rolePlays: [
                "Introduce yourself to your teacher: greet them, say your name, where you are from, and where you live now.",
                "In pairs: Student A asks about name, origin, and city. Student B answers. Then switch roles.",
                "Small group: One student greets the group (plural), asks ‘How are you all?’, then closes the conversation politely with a goodbye expression.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Record a 40–60 second audio in Palestinian Arabic: greet the listener, say your name, where you are from, where you live now, and what you study or work. Try to use at least one feeling word (for example: I’m happy, I’m tired).",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "In English, tell students: ‘Today we start with greetings and introductions in Palestinian Arabic.’",
                "Write مَرْحَبَا – أَهْلًا – السَّلَامُ عَلَيْكُمْ on the board and say each word slowly.",
                "Ask the whole class to repeat together 2–3 times.",
                "Ask a few students in English: ‘How do you say HI in your language?’ to connect with their experience.",
            ],
            vocabularySteps: [
                "Present 6–8 words at a time, not the full list, to avoid overload.",
                "For each word: say it, let students repeat, then put it in a very short question or answer.",
                "Highlight masculine/feminine/plural endings with your voice or color on the board.",
                "Do quick checks: ‘Is this hello or goodbye?’ ‘Is this formal or casual?’",
            ],
            dialogueSteps: [
                "Read the full dialogue in Arabic while students only listen.",
                "Show the English column, check basic understanding with simple questions.",
                "Do choral repetition line by line, then pair work where students act out the scenes.",
                "Ask them to change country, city, or job to make the dialogue personal.",
            ],
            practiceTips: [
                "Use the quiz quickly as a comprehension check, not a big exam.",
                "Ask students to explain why an answer is correct, not only choose A/B/C.",
                "During role-play, focus on fluency and confidence; correct only key errors that block communication.",
            ],
            wrapup: [
                "Pick 2–3 students and ask in Arabic: «شُو اِسْمَك؟ مِنْ وِين إِنْتَ/إِنْتِي؟»",
                "Give very positive feedback: ‘Your greetings sound very natural now!’",
                "Explain the homework clearly and encourage them to write a short script before recording.",
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
            lessonTitle: "Unit 2 – Daily Routine – Lesson 1",
        },

        overview: {
            title: "Unit 2 – Daily Routine",
            description:
                "In this lesson, the student learns how to talk about a simple daily routine in Palestinian Arabic: waking up, going to work or class, eating, studying, relaxing, and sleeping.",
            goals: [
                "Describe a basic daily routine using common Palestinian Arabic verbs.",
                "Use time expressions like in the morning, at night, every day, sometimes.",
                "Ask and answer simple questions about daily habits.",
                "Use sequence words like before, after, then.",
            ],
        },

        // ====================================
        // VOCABULARY (حوالي 34 كلمة / عبارة)
        // ====================================
        vocabulary: {
            core: [
                {
                    id: "baS7a",
                    ar: "بَصْحَى",
                    en: "I wake up",
                    hint: "Simple present with b- prefix for a habit.",
                    exampleAr: "كُل يَوْم بَصْحَى السَّاعَة سِتِّة.",
                    exampleEn: "Every day I wake up at six o’clock.",
                },
                {
                    id: "bafii2",
                    ar: "بَفِيق",
                    en: "I wake up / I get up",
                    hint: "Same meaning in many contexts as بَصْحَى.",
                    exampleAr: "بَفِيق بَدْرِي فِي أَيَّام الشُّغُل.",
                    exampleEn: "I wake up early on work days.",
                },
                {
                    id: "batghassal",
                    ar: "بَتْغَسَّل",
                    en: "I wash (my face / hands)",
                    hint: "Daily action after waking up.",
                    exampleAr: "أَوَّل إِشِي بَتْغَسَّل وَجْهِي.",
                    exampleEn: "The first thing I do is wash my face.",
                },
                {
                    id: "bat7ammam",
                    ar: "بَتْحَمَّم",
                    en: "I take a shower",
                    hint: "Common verb for showering.",
                    exampleAr: "بَتْحَمَّم قَبِل مَا أَطْلَع.",
                    exampleEn: "I shower before I go out.",
                },
                {
                    id: "bafTar",
                    ar: "بَفْطَر",
                    en: "I have breakfast",
                    hint: "From فطور = breakfast.",
                    exampleAr: "بَعْد مَا بَصْحَى بَفْطَر.",
                    exampleEn: "After I wake up, I have breakfast.",
                },
                {
                    id: "baakul",
                    ar: "بَاكُل",
                    en: "I eat",
                    hint: "General verb for eating (lunch, dinner, etc.).",
                    exampleAr: "بَاكُل الْغَدَا مَع أَهْلِي.",
                    exampleEn: "I eat lunch with my family.",
                },
                {
                    id: "bashrab_ahwe",
                    ar: "بَشْرَب قَهْوَة",
                    en: "I drink coffee",
                    hint: "Can change قَهْوَة to شَاي.",
                    exampleAr: "كُل صَبَاح بَشْرَب قَهْوَة.",
                    exampleEn: "Every morning I drink coffee.",
                },
                {
                    id: "baruu7_alshoghl",
                    ar: "بَرُوح عَلَى الشُّغُل",
                    en: "I go to work",
                    hint: "Use with شُغُل (work).",
                    exampleAr: "بَرُوح عَلَى الشُّغُل السَّاعَة تَمَانْيَة.",
                    exampleEn: "I go to work at eight o’clock.",
                },
                {
                    id: "baruu7_al_dars",
                    ar: "بَرُوح عَلَى الدَّرْس",
                    en: "I go to class / lesson",
                    hint: "Use with درس = lesson/class.",
                    exampleAr: "بَرُوح عَلَى الدَّرْس بَعْد الضُّهُر.",
                    exampleEn: "I go to class in the afternoon.",
                },
                {
                    id: "badros",
                    ar: "بَدْرُس",
                    en: "I study",
                    hint: "Habit: study Arabic, English, etc.",
                    exampleAr: "بَدْرُس عَرَبِي كُل لَيْلَة.",
                    exampleEn: "I study Arabic every night.",
                },
                {
                    id: "bashtaghel",
                    ar: "بَشْتِغِل",
                    en: "I work",
                    hint: "General verb for working.",
                    exampleAr: "بَشْتِغِل فِي مَكْتَب.",
                    exampleEn: "I work in an office.",
                },
                {
                    id: "barja3",
                    ar: "بَرْجَع",
                    en: "I come back / I return",
                    hint: "Used for returning home/work/etc.",
                    exampleAr: "بَرْجَع عَلَى الْبَيْت السَّاعَة خَمْسَة.",
                    exampleEn: "I come back home at five.",
                },
                {
                    id: "bartaa7",
                    ar: "بَرْتَاح",
                    en: "I rest / I relax",
                    hint: "Rest after work or study.",
                    exampleAr: "بَرْتَاح شَوَيّ بَعْد الشُّغُل.",
                    exampleEn: "I rest a bit after work.",
                },
                {
                    id: "batfarraj",
                    ar: "بَتْفَرَّج عَلَى...",
                    en: "I watch (TV, series, etc.)",
                    hint: "Use with TV, series, movies.",
                    exampleAr: "بِالْمَسَا بَتْفَرَّج عَلَى مُسَلْسَل.",
                    exampleEn: "In the evening I watch a series.",
                },
                {
                    id: "baqra",
                    ar: "بَقْرَا",
                    en: "I read",
                    hint: "Books, articles, etc.",
                    exampleAr: "أَحْيَانًا بَقْرَا كْتَاب قَبِل النَّوْم.",
                    exampleEn: "Sometimes I read a book before sleeping.",
                },
                {
                    id: "banaam",
                    ar: "بَنَام",
                    en: "I sleep",
                    hint: "Daily routine, end of the day.",
                    exampleAr: "بَنَام مِتْأَخَّر فِي الْوِيكْإِنْد.",
                    exampleEn: "I sleep late on the weekend.",
                },
                {
                    id: "banzel",
                    ar: "بَنْزِل",
                    en: "I go out / I leave (home)",
                    hint: "Leave the house or go outside.",
                    exampleAr: "بَنْزِل مِن الْبَيْت السَّاعَة تَمَانْيَة إِلَّا رُبِع.",
                    exampleEn: "I leave the house at quarter to eight.",
                },
                {
                    id: "bajli",
                    ar: "بَجْلِي الصُّحُون",
                    en: "I wash the dishes",
                    hint: "Household chore.",
                    exampleAr: "بَعْد الْغَدَا بَجْلِي الصُّحُون.",
                    exampleEn: "After lunch I wash the dishes.",
                },
                {
                    id: "banaddaf",
                    ar: "بَنَضَّف",
                    en: "I clean",
                    hint: "Can be house, room, etc.",
                    exampleAr: "يَوْم الْجُمْعَة بَنَضَّف الْبَيْت.",
                    exampleEn: "On Friday I clean the house.",
                },
                {
                    id: "baSalli",
                    ar: "بَصَلِّي",
                    en: "I pray",
                    hint: "Daily prayers in the routine.",
                    exampleAr: "بَصَلِّي قَبِل مَا أَطْلَع.",
                    exampleEn: "I pray before I go out.",
                },
                {
                    id: "fi_elsob7",
                    ar: "فِي الصُّبْح",
                    en: "In the morning",
                    hint: "Time expression.",
                    exampleAr: "فِي الصُّبْح بَصْحَى وَبَفْطَر.",
                    exampleEn: "In the morning I wake up and have breakfast.",
                },
                {
                    id: "ba3d_elDohr",
                    ar: "بَعْد الضُّهُر",
                    en: "In the afternoon",
                    hint: "Time of day.",
                    exampleAr: "بَعْد الضُّهُر بَرُوح عَلَى الدَّرْس.",
                    exampleEn: "In the afternoon I go to class.",
                },
                {
                    id: "belmasa",
                    ar: "بِالْمَسَا",
                    en: "In the evening",
                    hint: "Evening time.",
                    exampleAr: "بِالْمَسَا بَرْتَاح وَبَتْفَرَّج عَلَى تِلِفِزْيُون.",
                    exampleEn: "In the evening I relax and watch TV.",
                },
                {
                    id: "kull_yom",
                    ar: "كُل يَوْم",
                    en: "Every day",
                    hint: "Frequency adverb.",
                    exampleAr: "كُل يَوْم بَصْحَى السَّاعَة سِتِّة.",
                    exampleEn: "Every day I wake up at six.",
                },
                {
                    id: "ahyanan",
                    ar: "أَحْيَانًا",
                    en: "Sometimes",
                    hint: "Frequency adverb.",
                    exampleAr: "أَحْيَانًا بَقْرَا قَبِل مَا أَنَام.",
                    exampleEn: "Sometimes I read before I sleep.",
                },
                {
                    id: "ghaleban",
                    ar: "غَالِبًا",
                    en: "Usually",
                    hint: "Similar to ‘most of the time’.",
                    exampleAr: "غَالِبًا بَشْرَب قَهْوَة بَعْد الْفْطُور.",
                    exampleEn: "Usually I drink coffee after breakfast.",
                },
                {
                    id: "abl_ma",
                    ar: "قَبِل مَا...",
                    en: "Before (doing something)",
                    hint: "Used before a verb.",
                    exampleAr: "قَبِل مَا بَنْزِل بَفْطَر.",
                    exampleEn: "Before I go out, I have breakfast.",
                },
                {
                    id: "ba3d_ma",
                    ar: "بَعْد مَا...",
                    en: "After (doing something)",
                    hint: "Used before a verb.",
                    exampleAr: "بَعْد مَا بَرْجَع بَرْتَاح شَوَيّ.",
                    exampleEn: "After I come back, I rest a bit.",
                },
                {
                    id: "b3deen",
                    ar: "بَعْدِين / بَعْدَيْن",
                    en: "Then / after that",
                    hint: "Used to link actions in a sequence.",
                    exampleAr: "بَصْحَى، بَتْغَسَّل، بَعْدَيْن بَفْطَر.",
                    exampleEn: "I wake up, wash, then have breakfast.",
                },
                {
                    id: "bakir",
                    ar: "بَكِير",
                    en: "Early",
                    hint: "Opposite: مِتْأَخَّر (late).",
                    exampleAr: "بَصْحَى بَكِير فِي أَيَّام الشُّغُل.",
                    exampleEn: "I wake up early on work days.",
                },
                {
                    id: "mita2kher",
                    ar: "مِتْأَخَّر",
                    en: "Late",
                    hint: "Sleeping late, arriving late.",
                    exampleAr: "بَنَام مِتْأَخَّر فِي الْوِيكْإِنْد.",
                    exampleEn: "I sleep late on the weekend.",
                },
                {
                    id: "binam_badri",
                    ar: "بَنَام بَدْرِي",
                    en: "I sleep early",
                    hint: "Useful contrast with مِتْأَخَّر.",
                    exampleAr: "يَوْم الْإِمْتِحَان بَنَام بَدْرِي.",
                    exampleEn: "On exam day I sleep early.",
                },
            ],
            extra: [
                {
                    id: "btabbikh",
                    ar: "بَطَبِّخ",
                    en: "I cook",
                    hint: "Home routine when cooking.",
                    exampleAr: "مَرَّة فِي الْأُسْبُوع بَطَبِّخ أَكْل فِلَسْطِينِي.",
                    exampleEn: "Once a week I cook Palestinian food.",
                },
                {
                    id: "bansa2",
                    ar: "بَنْسِّق الْغُرْفَة",
                    en: "I tidy the room",
                    hint: "Organize / straighten the room.",
                    exampleAr: "قَبِل مَا أَطْلَع بَنْسِّق الْغُرْفَة.",
                    exampleEn: "Before I go out, I tidy the room.",
                },
                {
                    id: "bistarih_shway",
                    ar: "بِسْتَرِيح شَوَيّ",
                    en: "I take a little rest",
                    hint: "Alternative to بَرْتَاح شَوَيّ.",
                    exampleAr: "بَعْد الشُّغُل بِسْتَرِيح شَوَيّ.",
                    exampleEn: "After work I take a little rest.",
                },
                {
                    id: "ba3mal_riyada",
                    ar: "بَعْمَل رِيَاضَة",
                    en: "I exercise / I do sports",
                    hint: "Sport in daily routine.",
                    exampleAr: "ثَلَاث مَرَّات فِي الْأُسْبُوع بَعْمَل رِيَاضَة.",
                    exampleEn: "Three times a week I exercise.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (حوالي 34 جملة)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – Talking about morning
                { speaker: "A", ar: "صَبَاح الْخِير يَا كَرِيم.", en: "Good morning, Karim." },
                { speaker: "B", ar: "صَبَاح النُّور يَا لِينْ، كِيفَك الْيَوْم؟", en: "Good morning, Lynn, how are you today?" },
                { speaker: "A", ar: "أَنَا مْنِيحَة، بَسّ شَوَيّ تَعْبَانَة.", en: "I’m good, just a bit tired." },
                { speaker: "B", ar: "لِيش تَعْبَانَة؟ كَانَ عِنْدِك شُغُل كْتِير؟", en: "Why are you tired? Did you have a lot of work?" },
                { speaker: "A", ar: "لَا، بَسّ بَنَام مِتْأَخَّر كْتِير هَالْأَيَّام.", en: "No, but I sleep very late these days." },
                { speaker: "B", ar: "أَنَا بِالْعَكْس، بَنَام بَدْرِي وَبَصْحَى بَكِير.", en: "I’m the opposite, I sleep early and wake up early." },
                { speaker: "A", ar: "كُل يَوْم بَصْحَى السَّاعَة كَم؟", en: "Every day, what time do you wake up?" },
                { speaker: "B", ar: "بَصْحَى السَّاعَة سِتِّة، بَتْغَسَّل، بَعْدَيْن بَفْطَر وَبَشْرَب قَهْوَة.", en: "I wake up at six, wash, then have breakfast and drink coffee." },

                // Scene 2 – Going to work / class
                { speaker: "A", ar: "بَعْد مَا تِفْطَر شُو بِتْعْمِل؟", en: "After you have breakfast, what do you do?" },
                { speaker: "B", ar: "بَنْزِل مِن الْبَيْت السَّاعَة تَمَانْيَة إِلَّا رُبِع.", en: "I leave the house at quarter to eight." },
                { speaker: "B", ar: "بَرُوح عَلَى الشُّغُل بِالْبَاص.", en: "I go to work by bus." },
                { speaker: "A", ar: "أَنَا بَرُوح عَلَى الدَّرْس بَعْد الضُّهُر.", en: "I go to class in the afternoon." },
                { speaker: "A", ar: "فِي الصُّبْح بَدْرُس شَوَيّ فِي الْبَيْت.", en: "In the morning, I study a bit at home." },
                { speaker: "B", ar: "كُل يَوْم بَدْرُسِي؟", en: "Do you study every day?" },
                { speaker: "A", ar: "أَحْيَانًا بَدْرُس، أَحْيَانًا بَتْفَرَّج عَلَى مُسَلْسَل.", en: "Sometimes I study, sometimes I watch a series." },

                // Scene 3 – Afternoon / evening
                { speaker: "B", ar: "بَعْد الشُّغُل أَنَا بَرْجَع عَلَى الْبَيْت السَّاعَة خَمْسَة.", en: "After work I come back home at five." },
                { speaker: "B", ar: "بَرْتَاح شَوَيّ، بَعْدَيْن بَاكُل الْغَدَا مَع أَهْلِي.", en: "I rest a bit, then eat lunch with my family." },
                { speaker: "A", ar: "أَنَا بَاكُل الْغَدَا بَعْد الضُّهُر بَرْضُه.", en: "I also eat lunch in the afternoon." },
                { speaker: "A", ar: "بِالْمَسَا بَتْفَرَّج عَلَى فِيلِم أَوْ مُسَلْسَل.", en: "In the evening I watch a movie or a series." },
                { speaker: "B", ar: "أَنَا أَحْيَانًا بَقْرَا كْتَاب قَبِل مَا أَنَام.", en: "Sometimes I read a book before I sleep." },

                // Scene 4 – Exercise & cleaning
                { speaker: "A", ar: "بِتْعْمِل رِيَاضَة فِي نِهَايَة الْيَوْم؟", en: "Do you exercise at the end of the day?" },
                { speaker: "B", ar: "ثَلَاث مَرَّات فِي الْأُسْبُوع بَعْمَل رِيَاضَة بَعْد الشُّغُل.", en: "Three times a week I exercise after work." },
                { speaker: "B", ar: "يَوْم الْجُمْعَة بَنَضَّف الْبَيْت وَبَنْسِّق الْغُرْفَة.", en: "On Friday I clean the house and tidy the room." },
                { speaker: "A", ar: "مِثْلِي! يَوْم الْعُطْلَة بَنْضِّف وَبَجْلِي الصُّحُون.", en: "Same as me! On the day off I clean and wash the dishes." },

                // Scene 5 – Closing
                { speaker: "B", ar: "طَيِّب، هَلَّقْ بَشْتِغِل شَوَيّ قَبِل مَا أَطْلَع.", en: "Okay, now I’ll work a bit before I go out." },
                { speaker: "A", ar: "مُنَاح، بَتَمَنَّى لَك يَوْم مَوَفَّق.", en: "Nice, I wish you a successful day." },
                { speaker: "B", ar: "شُكْرًا، إِنْبِسِطِي بِيَوْمِك كَمَان.", en: "Thanks, enjoy your day too." },
                { speaker: "A", ar: "مَع السَّلَامَة، بَشُوفَك بُكْرَا فِي الدَّرْس.", en: "Goodbye, see you tomorrow in class." },
                { speaker: "B", ar: "مَع السَّلَامَة!", en: "Goodbye!" },
            ],
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "b_prefix_daily",
                title: "Using «بـ» (b-) for daily actions",
                description:
                    "In Palestinian Arabic, the prefix «بـ» (b-) is used with many verbs to talk about regular, habitual actions:\n" +
                    "• بَصْحَى = I wake up\n" +
                    "• بَفْطَر = I have breakfast\n" +
                    "• بَدْرُس = I study\n" +
                    "• بَشْتِغِل = I work\n" +
                    "• بَنَام = I sleep\n\n" +
                    "These describe what you usually do in your day, not just one time.",
            },
            {
                id: "before_after",
                title: "Sequence words: before / after / then",
                description:
                    "To show order in your routine, you can use:\n" +
                    "• «قَبِل مَا ...» (before ...): قَبِل مَا بَنْزِل، بَفْطَر = Before I go out, I have breakfast.\n" +
                    "• «بَعْد مَا ...» (after ...): بَعْد مَا بَرْجَع، بَرْتَاح = After I come back, I rest.\n" +
                    "• «بَعْدِين / بَعْدَيْن» (then / after that): بَصْحَى، بَتْغَسَّل، بَعْدَيْن بَفْطَر = I wake up, wash, then have breakfast.",
            },
            {
                id: "frequency_words",
                title: "Frequency words: every day, sometimes, usually",
                description:
                    "Use these words to say how often you do something:\n" +
                    "• كُل يَوْم = every day\n" +
                    "• أَحْيَانًا = sometimes\n" +
                    "• غَالِبًا = usually / most of the time\n\n" +
                    "Examples:\n" +
                    "• كُل يَوْم بَصْحَى بَكِير = Every day I wake up early.\n" +
                    "• أَحْيَانًا بَقْرَا كْتَاب قَبِل مَا أَنَام = Sometimes I read a book before I sleep.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "dr_q1",
                    questionAr: "«بَصْحَى السَّاعَة سِتِّة» مَعْنَاهَا:",
                    optionsEn: [
                        "I go to work at six.",
                        "I wake up at six.",
                        "I sleep at six.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "dr_q2",
                    questionAr: "«بَعْد مَا بَرْجَع عَلَى الْبَيْت بَرْتَاح شَوَيّ» مَعْنَاهَا:",
                    optionsEn: [
                        "After I go out, I rest a bit.",
                        "After I come back home, I rest a bit.",
                        "Before I come back home, I rest a bit.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "dr_q3",
                    questionAr: "«كُل يَوْم بَشْرَب قَهْوَة فِي الصُّبْح» مَعْنَاهَا:",
                    optionsEn: [
                        "Sometimes I drink coffee in the morning.",
                        "Every day I drink coffee in the morning.",
                        "I never drink coffee in the morning.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "dr_q4",
                    questionAr: "أَيّ تَعْبِير يِسَاعِدَك تِحْكِي عَن تَرْتِيب الْأَفْعَال؟",
                    optionsEn: [
                        "Every day",
                        "Then / after that",
                        "I don’t understand",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "dr_q5",
                    questionAr: "«بَنَام مِتْأَخَّر فِي الْوِيكْإِنْد» مَعْنَاهَا:",
                    optionsEn: [
                        "I sleep early on the weekend.",
                        "I sleep late on the weekend.",
                        "I don’t sleep on the weekend.",
                    ],
                    correctIndex: 1,
                },
            ],
            rolePlays: [
                "Describe your morning routine in 5–6 short sentences: what time you wake up, what you do before you go out.",
                "In pairs: Student A asks Student B about their daily routine (morning, afternoon, evening). Then swap roles.",
                "Small group: Each student says one sentence about their day using ‘before’, ‘after’, or ‘then’. Build a long chain together.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write 6–8 sentences in Palestinian Arabic about your daily routine (morning, afternoon, evening). Use at least three verbs with the b- prefix (for example: I wake up, I study, I work, I sleep) and at least one sequence word (before / after / then). If possible, record yourself reading the sentences.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "On the board, write: بَصْحَى – بَفْطَر – بَدْرُس – بَشْتِغِل – بَنَام.",
                "Ask students in English: ‘What do you do in your day?’ and then start mapping their answers to the Arabic verbs.",
                "Do a quick TPR-style warm-up: you say the verb in Arabic and they mime it (wake up, eat, sleep, etc.).",
            ],
            vocabularySteps: [
                "Present the verbs in small groups (4–5 verbs), not all at once.",
                "Ask students to make very short ‘I’ sentences with each verb: ‘I wake up at…’, ‘I go to…’.",
                "Introduce time expressions (morning, afternoon, evening) after they are comfortable with the verbs.",
                "Highlight the pattern of the b- prefix so they see many examples, not rules only.",
            ],
            dialogueSteps: [
                "Play/Read the dialogue with natural intonation while students only listen.",
                "Ask global comprehension questions: Who sleeps late? Who wakes up early?",
                "Then let them read along silently while you read a second time.",
                "Pair work: students practice the dialogue, then change details (time, activities) to personalize it.",
            ],
            practiceTips: [
                "Use the quiz questions as mini-checkpoints during the lesson, not all at the end.",
                "For role-play, encourage students to use ‘before/after/then’ even if the sentences are simple.",
                "Walk around and listen for correct use of b- verbs; gently correct only high-frequency errors.",
            ],
            wrapup: [
                "Ask 2–3 students in Arabic: «كُل يَوْم بَصْحَى السَّاعَة كَم؟» or «مَتَى بَتْرْتَاح؟».",
                "Summarize patterns on the board: b- verbs + time words + sequence words.",
                "Remind them about the homework and suggest they write a draft in their notebook before recording.",
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
            lessonTitle: "Unit 3 – Food & Drink – Lesson 1",
        },

        overview: {
            title: "Unit 3 – Food & Drink",
            description:
                "In this lesson, the student learns key Palestinian Arabic vocabulary for food and drinks, how to say what they like or don’t like, how to say they are hungry or thirsty, and how to order simple food and drinks politely.",
            goals: [
                "Use common Palestinian Arabic words for everyday food and drinks.",
                "Say what they like, don’t like, or prefer using basic patterns.",
                "Express being hungry or thirsty and talk about main meals.",
                "Order simple food and drinks politely in a casual café or home context.",
            ],
        },

        // ====================================
        // VOCABULARY (≈ 34 كلمة / عبارة)
        // ====================================
        vocabulary: {
            core: [
                {
                    id: "akel",
                    ar: "أَكِل",
                    en: "Food",
                    hint: "General word for ‘food’.",
                    exampleAr: "الْأَكِل الْفِلَسْطِينِي طَيِّب كْتِير.",
                    exampleEn: "Palestinian food is very tasty.",
                },
                {
                    id: "t3am",
                    ar: "طَعِم",
                    en: "Taste (flavour)",
                    hint: "Used to talk about taste of food.",
                    exampleAr: "طَعِم الْأَكِل هُنَا مُمْتَاز.",
                    exampleEn: "The taste of the food here is excellent.",
                },
                {
                    id: "fToor",
                    ar: "فْطُور",
                    en: "Breakfast",
                    hint: "Morning meal.",
                    exampleAr: "بَحِبّ الْفْطُور الْفِلَسْطِينِي.",
                    exampleEn: "I like Palestinian breakfast.",
                },
                {
                    id: "ghada",
                    ar: "غَدَا",
                    en: "Lunch",
                    hint: "Main midday meal.",
                    exampleAr: "بَاكُل الْغَدَا مَع أَهْلِي.",
                    exampleEn: "I eat lunch with my family.",
                },
                {
                    id: "3asha",
                    ar: "عَشَا",
                    en: "Dinner / evening meal",
                    hint: "Evening meal.",
                    exampleAr: "أَحْيَانًا مَا بَاكُل عَشَا.",
                    exampleEn: "Sometimes I don’t eat dinner.",
                },
                {
                    id: "khobez",
                    ar: "خُبِز",
                    en: "Bread",
                    hint: "Very basic staple food.",
                    exampleAr: "كُل يَوْم بِنَاكُل خُبِز.",
                    exampleEn: "We eat bread every day.",
                },
                {
                    id: "jibne",
                    ar: "جِبْنِة",
                    en: "Cheese",
                    hint: "Common at breakfast.",
                    exampleAr: "بَفْطَر خُبِز مَع جِبْنِة.",
                    exampleEn: "I have bread with cheese for breakfast.",
                },
                {
                    id: "zeit_zaatar",
                    ar: "زَيْت وَزَعْتَر",
                    en: "Olive oil & zaatar",
                    hint: "Typical Palestinian breakfast item.",
                    exampleAr: "زَيْت وَزَعْتَر شَيْء مَشْهُور فِي فِلَسْطِين.",
                    exampleEn: "Olive oil and zaatar is famous in Palestine.",
                },
                {
                    id: "falafel",
                    ar: "فَلَافِل",
                    en: "Falafel",
                    hint: "Common street food.",
                    exampleAr: "بَحِبّ آكُل فَلَافِل فِي الصُّبْح.",
                    exampleEn: "I like to eat falafel in the morning.",
                },
                {
                    id: "hummus",
                    ar: "حُمُّص",
                    en: "Hummus",
                    hint: "Chickpea dip, very common.",
                    exampleAr: "حُمُّص مَع خُبِز طَعِمُه زَكِي.",
                    exampleEn: "Hummus with bread tastes great.",
                },
                {
                    id: "salata",
                    ar: "سَلَطَة",
                    en: "Salad",
                    hint: "General salad; can specify مثل سَلَطَة خُضَار.",
                    exampleAr: "مَع الْغَدَا دَائِمًا فِيه سَلَطَة.",
                    exampleEn: "There is always salad with lunch.",
                },
                {
                    id: "la7me",
                    ar: "لَحْمِة",
                    en: "Meat",
                    hint: "Beef/lamb; chicken is دْجَاج.",
                    exampleAr: "بِحِبّ لَحْمِة أَكْثَر مِن دْجَاج.",
                    exampleEn: "I like meat more than chicken.",
                },
                {
                    id: "dajaj",
                    ar: "دْجَاج",
                    en: "Chicken",
                    hint: "Very common in everyday meals.",
                    exampleAr: "الْيَوْم فِي غَدَا دْجَاج مَع رُزّ.",
                    exampleEn: "Today for lunch there is chicken with rice.",
                },
                {
                    id: "ruz",
                    ar: "رُزّ",
                    en: "Rice",
                    hint: "Typically eaten with meat or chicken.",
                    exampleAr: "بَاكُل رُزّ مَع خُضَار.",
                    exampleEn: "I eat rice with vegetables.",
                },
                {
                    id: "batata",
                    ar: "بَطَاطَا",
                    en: "Potatoes",
                    hint: "Can be fried, baked, etc.",
                    exampleAr: "بَحِبّ بَطَاطَا مَقْلِيِّة.",
                    exampleEn: "I like fried potatoes.",
                },
                {
                    id: "khudra",
                    ar: "خُضَار",
                    en: "Vegetables",
                    hint: "General word for vegetables.",
                    exampleAr: "بِنَاكُل خُضَار كْتِير فِي الْبَيْت.",
                    exampleEn: "We eat a lot of vegetables at home.",
                },
                {
                    id: "fawakeh",
                    ar: "فَوَاكِه",
                    en: "Fruits",
                    hint: "General word for fruits.",
                    exampleAr: "فَوَاكِه فِيهَا فِيتَامِين كْتِير.",
                    exampleEn: "Fruits have a lot of vitamins.",
                },
                {
                    id: "maya",
                    ar: "مَيِّة",
                    en: "Water",
                    hint: "Basic word for water.",
                    exampleAr: "بَشْرَب مَيِّة كْتِير بِالنَّهَار.",
                    exampleEn: "I drink a lot of water during the day.",
                },
                {
                    id: "ahwe",
                    ar: "قَهْوَة",
                    en: "Coffee",
                    hint: "Often with breakfast or after a meal.",
                    exampleAr: "بَعْد الْغَدَا بَشْرَب قَهْوَة.",
                    exampleEn: "After lunch I drink coffee.",
                },
                {
                    id: "shai",
                    ar: "شَاي",
                    en: "Tea",
                    hint: "Very common warm drink.",
                    exampleAr: "بِالْمَسَا بَشْرَب شَاي.",
                    exampleEn: "In the evening I drink tea.",
                },
                {
                    id: "3asir",
                    ar: "عَصِير",
                    en: "Juice",
                    hint: "Can specify type: عَصِير بُرْتُقَال.",
                    exampleAr: "بَشْرَب عَصِير بُرْتُقَال فِي الصَّيْف.",
                    exampleEn: "I drink orange juice in summer.",
                },
                {
                    id: "j3an",
                    ar: "جُوعَان",
                    en: "Hungry",
                    hint: "Masc: جُوعَان, fem: جُوعَانَة.",
                    exampleAr: "أَنَا جُوعَان، بَدِّي آكُل.",
                    exampleEn: "I’m hungry, I want to eat.",
                },
                {
                    id: "3atshan",
                    ar: "عَطْشَان",
                    en: "Thirsty",
                    hint: "Masc: عَطْشَان, fem: عَطْشَانَة.",
                    exampleAr: "أَنَا عَطْشَان، بَدِّي مَيِّة.",
                    exampleEn: "I’m thirsty, I want water.",
                },
                {
                    id: "ba7ebb",
                    ar: "بَحِبّ",
                    en: "I like / I love",
                    hint: "Used with food and drinks.",
                    exampleAr: "بَحِبّ حُمُّص وَفَلَافِل.",
                    exampleEn: "I like hummus and falafel.",
                },
                {
                    id: "ma_ba7ebb",
                    ar: "مَا بَحِبّ",
                    en: "I don’t like",
                    hint: "Simple negation for ‘I don’t like’.",
                    exampleAr: "مَا بَحِبّ قَهْوَة قَوِيِّة.",
                    exampleEn: "I don’t like strong coffee.",
                },
                {
                    id: "ba7ebb_aktar",
                    ar: "بَحِبّ ... أَكْثَر",
                    en: "I like … more",
                    hint: "For preferences.",
                    exampleAr: "بَحِبّ شَاي أَكْثَر مِن قَهْوَة.",
                    exampleEn: "I like tea more than coffee.",
                },
                {
                    id: "baddi",
                    ar: "بَدِّي",
                    en: "I want",
                    hint: "Use with food/drink to order.",
                    exampleAr: "بَدِّي فَلَافِل وَعَصِير.",
                    exampleEn: "I want falafel and juice.",
                },
                {
                    id: "sho_bte7ebb",
                    ar: "شُو بْتِحِبّ تَاكُل؟",
                    en: "What do you like to eat?",
                    hint: "Used to ask about preferences.",
                    exampleAr: "شُو بْتِحِبّ تَاكُل عَلَى الْغَدَا؟",
                    exampleEn: "What do you like to eat for lunch?",
                },
                {
                    id: "fi_maT3am",
                    ar: "فِي مَطْعَم",
                    en: "In a restaurant",
                    hint: "Place context for food.",
                    exampleAr: "بِنْقَعُد فِي مَطْعَم صَغِير قُرْب الْبَحَر.",
                    exampleEn: "We sit in a small restaurant near the sea.",
                },
                {
                    id: "3ala_el_bayt",
                    ar: "فِي الْبَيْت",
                    en: "At home",
                    hint: "Home context.",
                    exampleAr: "غَالِبًا بَنَاكُل فِي الْبَيْت.",
                    exampleEn: "We usually eat at home.",
                },
                {
                    id: "zaki",
                    ar: "زَكِي",
                    en: "Tasty / delicious",
                    hint: "Masc: زَكِي, fem: زَكِيِّة.",
                    exampleAr: "الْأَكِل هُونَا زَكِي كْتِير.",
                    exampleEn: "The food here is very tasty.",
                },
                {
                    id: "msh_zaki",
                    ar: "مِش زَكِي",
                    en: "Not tasty",
                    hint: "Simple way to say you don’t like the taste.",
                    exampleAr: "صِرْصِير الْأَكِل الْيَوْم مِش زَكِي.",
                    exampleEn: "Honestly, today the food is not tasty.",
                },
            ],
            extra: [
                {
                    id: "7ilo",
                    ar: "حِلُو",
                    en: "Sweet (taste)",
                    hint: "Also means ‘beautiful’, but here for taste.",
                    exampleAr: "الْحَلَا حِلُو بَسّ ثَقِيل شَوَيّ.",
                    exampleEn: "The dessert is sweet but a bit heavy.",
                },
                {
                    id: "m7ar",
                    ar: "حَارّ / مْحَرَّر",
                    en: "Spicy / hot (food)",
                    hint: "Used for spicy food.",
                    exampleAr: "بَحِبّ أَكِل حَارّ.",
                    exampleEn: "I like spicy food.",
                },
                {
                    id: "mal7",
                    ar: "مِلِح",
                    en: "Salty",
                    hint: "From مِلِح = salt.",
                    exampleAr: "هَادَا الطَّبَق مِلِح كْتِير.",
                    exampleEn: "This dish is too salty.",
                },
                {
                    id: "S7i",
                    ar: "صِحِّي",
                    en: "Healthy",
                    hint: "Used for healthy food.",
                    exampleAr: "بِحَاوِل آكُل أَكِل صِحِّي.",
                    exampleEn: "I try to eat healthy food.",
                },
            ],
        },

        // ====================================
        // DIALOGUE (≈ 34 جملة)
        // ====================================
        dialogue: {
            lines: [
                // Scene 1 – At home talking about meals
                { speaker: "A", ar: "مَرْحَبَا مَرْيَم، شُو أَكَلْتِي الْيَوْم عَلَى الْفْطُور؟", en: "Hi Maryam, what did you eat today for breakfast?" },
                { speaker: "B", ar: "صَبَاح الْخِير، أَكَلْت خُبِز مَع جِبْنِة وَزَيْت وَزَعْتَر.", en: "Good morning, I ate bread with cheese and olive oil with zaatar." },
                { speaker: "A", ar: "وَكَمَان قَهْوَة وَلَّا شَاي؟", en: "And also coffee or tea?" },
                { speaker: "B", ar: "بَشْرَب فِي الصُّبْح شَاي، مِش قَهْوَة.", en: "In the morning I drink tea, not coffee." },
                { speaker: "A", ar: "أَنَا بِالْعَكْس، بَشْرَب قَهْوَة كُل يَوْم.", en: "I’m the opposite, I drink coffee every day." },
                { speaker: "B", ar: "أَحْيَانًا بَشْرَب عَصِير بُرْتُقَال بَرْضُه.", en: "Sometimes I drink orange juice too." },

                // Scene 2 – Talking about likes/dislikes
                { speaker: "A", ar: "شُو بْتِحِبّ تَاكُل عَلَى الْغَدَا؟", en: "What do you like to eat for lunch?" },
                { speaker: "B", ar: "بَحِبّ غَدَا فِيه دْجَاج وَرُزّ وَسَلَطَة.", en: "I like lunch with chicken, rice, and salad." },
                { speaker: "A", ar: "وَالْلَحْمِة؟", en: "And meat?" },
                { speaker: "B", ar: "بَحِبّ لَحْمِة بَسّ مِش كْتِير، أَكْثَر شِي بَحِبّ خُضَار وَفَوَاكِه.", en: "I like meat but not a lot; I like vegetables and fruit the most." },
                { speaker: "A", ar: "فَوَاكِه أَيّ وَاحْدَة أَكْثَر شِي؟", en: "Which fruit do you like the most?" },
                { speaker: "B", ar: "بَحِبّ تُفَّاح وَمَوِز، بَسّ مَا بَحِبّ بُرْتُقَال كْتِير.", en: "I like apples and bananas, but I don’t like oranges very much." },

                // Scene 3 – In a small restaurant
                { speaker: "A", ar: "يَلَّا نُقْعُد فِي مَطْعَم صَغِير هُون.", en: "Come on, let’s sit in a small restaurant here." },
                { speaker: "B", ar: "مُنَاسِب، أَنَا جُوعَانَة كْتِير.", en: "Sounds good, I’m very hungry." },
                { speaker: "Waiter", ar: "أَهْلًا وَسَهْلًا، شُو بْتِحِبُّوا تَاكْلُوا؟", en: "Welcome, what would you like to eat?" },
                { speaker: "A", ar: "بَدِّي صَحْن فَلَافِل وَحُمُّص، مِن فَضْلَك.", en: "I want a plate of falafel and hummus, please." },
                { speaker: "B", ar: "وَأَنَا بَدِّي سَلَطَة وَدْجَاج مَع رُزّ.", en: "And I want salad and chicken with rice." },
                { speaker: "Waiter", ar: "طَيِّب، وَشُو بْتِحِبُّوا تِشْرَبُوا؟", en: "Okay, and what would you like to drink?" },
                { speaker: "A", ar: "أَنَا بَحِبّ قَهْوَة بَعْد الْأَكِل، هَلَّقْ بَدِّي مَيِّة.", en: "I like coffee after food; now I want water." },
                { speaker: "B", ar: "أَنَا عَطْشَانَة، بَدِّي عَصِير بُرْتُقَال.", en: "I’m thirsty, I want orange juice." },
                { speaker: "Waiter", ar: "زَيْ مَا بْتِحِبُّوا، صَحَّة وَعَافِيَة.", en: "As you like, bon appétit / enjoy." },

                // Scene 4 – Comments on taste
                { speaker: "A", ar: "الْفَلَافِل هُونَا زَكِي كْتِير.", en: "The falafel here is very tasty." },
                { speaker: "B", ar: "صَحّ، بَسّ السَّلَطَة مِلِح شَوَيّ.", en: "True, but the salad is a bit salty." },
                { speaker: "A", ar: "مَع هَيْك، الْغَدَا صِحِّي أَكْثَر مِن مَطَاعِم ثَانِيِة.", en: "Even so, this lunch is healthier than other restaurants." },
                { speaker: "B", ar: "مُنِيح إِنُّه فِيه خُضَار وَفَوَاكِه عَلَى الْجَانِب.", en: "It’s good that there are vegetables and fruits on the side." },

                // Scene 5 – Closing
                { speaker: "A", ar: "شُكْرًا كْتِير، الْأَكِل كَان زَكِي.", en: "Thank you very much, the food was delicious." },
                { speaker: "Waiter", ar: "عَفْوَاً، تْشَرَّفْنَا فِيكُم.", en: "You’re welcome, pleased to have you." },
                { speaker: "B", ar: "مَع السَّلَامَة، رَاح نِرْجَع مَرَّة ثَانِيِة.", en: "Goodbye, we’ll come back another time." },
                { speaker: "A", ar: "يَلَّا، اِنْبِسِطِي بِبَاقِي الْيَوْم.", en: "Come on, enjoy the rest of the day." },
                { speaker: "B", ar: "وَإِنْتَ كَمَان، بَشُوفَك بُكْرَا فِي الدَّرْس.", en: "You too, see you tomorrow in class." },
            ],
        },

        // ====================================
        // GRAMMAR
        // ====================================
        grammar: [
            {
                id: "like_dislike",
                title: "Saying what you like or don’t like",
                description:
                    "To talk about likes and dislikes in Palestinian Arabic, use:\n" +
                    "• «بَحِبّ ...» = I like / I love ...\n" +
                    "  بَحِبّ فَلَافِل = I like falafel.\n" +
                    "• «مَا بَحِبّ ...» = I don’t like ...\n" +
                    "  مَا بَحِبّ قَهْوَة قَوِيِّة = I don’t like strong coffee.\n\n" +
                    "To compare, you can say:\n" +
                    "• «بَحِبّ ... أَكْثَر» = I like ... more\n" +
                    "  بَحِبّ شَاي أَكْثَر مِن قَهْوَة = I like tea more than coffee.",
            },
            {
                id: "baddi_for_ordering",
                title: "Using «بَدِّي» (I want) to order food & drink",
                description:
                    "«بَدِّي» (baddi) means ‘I want’. It is very common when ordering:\n" +
                    "• بَدِّي فَلَافِل وَحُمُّص = I want falafel and hummus.\n" +
                    "• بَدِّي مَيِّة / عَصِير = I want water / juice.\n\n" +
                    "You can add «مِن فَضْلَك» = please:\n" +
                    "• بَدِّي قَهْوَة، مِن فَضْلَك = I want coffee, please.",
            },
            {
                id: "hungry_thirsty",
                title: "Saying you are hungry or thirsty",
                description:
                    "Two useful adjectives in daily life are:\n" +
                    "• «جُوعَان / جُوعَانَة» = hungry (masc / fem)\n" +
                    "  أَنَا جُوعَان، بَدِّي آكُل = I’m hungry, I want to eat.\n" +
                    "• «عَطْشَان / عَطْشَانَة» = thirsty (masc / fem)\n" +
                    "  أَنَا عَطْشَان، بَدِّي مَيِّة = I’m thirsty, I want water.\n\n" +
                    "These are very natural in café and home situations.",
            },
        ],

        // ====================================
        // PRACTICE
        // ====================================
        practice: {
            quiz: [
                {
                    id: "fd_q1",
                    questionAr: "«بَحِبّ فَلَافِل وَحُمُّص» مَعْنَاهَا:",
                    optionsEn: [
                        "I want falafel and hummus.",
                        "I like falafel and hummus.",
                        "I cook falafel and hummus.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "fd_q2",
                    questionAr: "«مَا بَحِبّ قَهْوَة قَوِيِّة» مَعْنَاهَا:",
                    optionsEn: [
                        "I don’t like strong coffee.",
                        "I like strong coffee.",
                        "I prefer strong coffee.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fd_q3",
                    questionAr: "أَيّ جُمْلَة تِسْتَخْدِمَهَا لَمَّا تِطْلُب أَكِل فِي مَطْعَم؟",
                    optionsEn: [
                        "I’m thirsty, I want water.",
                        "I want a plate of falafel, please.",
                        "I like tea more than coffee.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "fd_q4",
                    questionAr: "«أَنَا جُوعَان، بَدِّي آكُل» مَعْنَاهَا:",
                    optionsEn: [
                        "I’m hungry, I want to eat.",
                        "I’m thirsty, I want water.",
                        "I’m tired, I want to sleep.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fd_q5",
                    questionAr: "أَيّ كَلِمَة مَعْنَاهَا ‘طَعِمُه طَيِّب’؟",
                    optionsEn: [
                        "Healthy.",
                        "Spicy.",
                        "Tasty / delicious.",
                    ],
                    correctIndex: 2,
                },
            ],
            rolePlays: [
                "In pairs: Student A is a waiter, Student B is a customer. The customer is hungry and orders a simple meal and a drink using «بَدِّي ...» and ‘please’. Then switch roles.",
                "With a partner, talk about your favourite foods and drinks. Say what you like, don’t like, and what you like more.",
                "In a small group, each student says one sentence about what they usually eat for breakfast, lunch, or dinner. Try to use ‘every day’, ‘sometimes’, or ‘usually’.",
            ],
        },

        // ====================================
        // HOMEWORK
        // ====================================
        homework: {
            instructions:
                "Write 6–8 short sentences in Palestinian Arabic about your favourite foods and drinks. Say what you like, don’t like, and what you usually eat or drink in a normal day. If possible, record yourself reading your sentences and try to sound natural, as if you are talking to a friend.",
        },

        // ====================================
        // TEACHER NOTES
        // ====================================
        teacherNotes: {
            warmup: [
                "Show pictures of common foods (bread, hummus, falafel, salad) and ask in English: ‘What is this?’ then give the Arabic word.",
                "Ask students about their favourite foods in their own language, then slowly map to the Arabic words.",
                "Do a quick ‘stand up if you like…’ activity to create energy before starting the vocabulary.",
            ],
            vocabularySteps: [
                "Teach food items in small groups: breakfast items, main dishes, drinks, taste words.",
                "For each item, say the word, let students repeat, then ask a yes/no question: ‘Do you like hummus?’",
                "Write a mini chart on the board: ‘I like… / I don’t like…’ and have students complete it with their own choices.",
                "Introduce ‘hungry’ and ‘thirsty’ with simple gestures, then check comprehension with easy questions.",
            ],
            dialogueSteps: [
                "First, let students listen to the restaurant dialogue without reading.",
                "Then, show them the English side and ask: ‘What did they order? Who is hungry? Who is thirsty?’",
                "Practice in pairs: one plays the waiter, one plays the customer; then switch roles.",
                "Encourage them to change the menu: different dishes, drinks, or tastes.",
            ],
            practiceTips: [
                "Use the quiz as a fun game: groups compete to answer first with the correct meaning.",
                "In role-plays, focus more on communication and politeness (‘please’, ‘thank you’) than on perfect grammar.",
                "If students are shy, let them read from their notes the first time, then try again more freely.",
            ],
            wrapup: [
                "Ask a few students in Arabic: «شُو أَكْثَر أَكِل بْتِحِبُّه؟» or «شُو بْتِحِبّ تِشْرَب فِي الصُّبْح؟».",
                "Summarize the key patterns: بَحِبّ / مَا بَحِبّ / بَدِّي + food.",
                "Remind them that this topic will come back in future units (family meals, invitations, going out with friends).",
            ],
            myNotes: "",
        },
    },


    // Inside your defaultLessons literal:
    [LESSON_ID_FAMILY]: {
        meta: {
            level: "Beginner",
            unit: "Family",
            lessonTitle: "Lesson 4 – Talking About Family",
        },
        overview: {
            title: "Unit 4 – Family",
            description:
                "In this lesson, students learn how to talk about their family members, marital status, and who they live with in Palestinian Arabic.",
            goals: [
                "Introduce close family members and describe basic family structure.",
                "Use possessive forms like 'immi', 'abuy', 'ukhti' correctly.",
                "Ask and answer questions about siblings and who they live with.",
                "Use 'indi' to say what family members they have.",
                "Use basic comparatives like 'akbar' and 'asghar' to talk about age order.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "fam_core_1",
                    ar: "إِمّي",
                    en: "my mother",
                    hint: "Possessive form: my mom",
                    exampleAr: "إِمّي شَغّالة مُعَلِّمِة.",
                    exampleEn: "My mother works as a teacher.",
                },
                {
                    id: "fam_core_2",
                    ar: "أَبوي",
                    en: "my father",
                    hint: "Possessive form: my dad",
                    exampleAr: "أَبوي بِشتِغِل بِالشِّرْكَة.",
                    exampleEn: "My father works at the company.",
                },
                {
                    id: "fam_core_3",
                    ar: "أَهلي",
                    en: "my parents / my family (household)",
                    hint: "Can mean my parents or my household family",
                    exampleAr: "ساكِن مَع أَهلي بِغَزّة.",
                    exampleEn: "I live with my family in Gaza.",
                },
                {
                    id: "fam_core_4",
                    ar: "أُخوي",
                    en: "my brother",
                    hint: "Masculine sibling",
                    exampleAr: "أُخوي أَكبَر مِنّي بِسِنِين.",
                    exampleEn: "My brother is older than me by a few years.",
                },
                {
                    id: "fam_core_5",
                    ar: "أُختي",
                    en: "my sister",
                    hint: "Feminine sibling",
                    exampleAr: "أُختي تِدرُس جَامْعَة.",
                    exampleEn: "My sister studies at university.",
                },
                {
                    id: "fam_core_6",
                    ar: "وَلَد",
                    en: "boy / son",
                    hint: "Can mean boy or son depending on context",
                    exampleAr: "إِلهم وَلَد واحِد وَبِنْتَيْن.",
                    exampleEn: "They have one son and two daughters.",
                },
                {
                    id: "fam_core_7",
                    ar: "بِنْت",
                    en: "girl / daughter",
                    hint: "Girl; can also mean daughter",
                    exampleAr: "عِنْدُه بِنْت صْغيرَة كْتير.",
                    exampleEn: "He has a very young daughter.",
                },
                {
                    id: "fam_core_8",
                    ar: "جَدّي",
                    en: "my grandfather",
                    hint: "Grandfather (possessive: my)",
                    exampleAr: "جَدّي بِحِبّ يِقْعُد عَالبَحِر.",
                    exampleEn: "My grandfather likes to sit by the sea.",
                },
                {
                    id: "fam_core_9",
                    ar: "سِتّي",
                    en: "my grandmother",
                    hint: "Colloquial word for grandmother",
                    exampleAr: "سِتّي تِسْكُن قَريب مِنّا.",
                    exampleEn: "My grandmother lives near us.",
                },
                {
                    id: "fam_core_10",
                    ar: "عيلِة",
                    en: "family (as a group)",
                    hint: "Family as a group of relatives",
                    exampleAr: "عيلِتْنا كْبيرَة كْتير.",
                    exampleEn: "Our family is very big.",
                },
                {
                    id: "fam_core_11",
                    ar: "خال",
                    en: "maternal uncle",
                    hint: "Mother’s brother",
                    exampleAr: "خالِي ساكِن بِرامَ الله.",
                    exampleEn: "My maternal uncle lives in Ramallah.",
                },
                {
                    id: "fam_core_12",
                    ar: "عَمّ",
                    en: "paternal uncle",
                    hint: "Father’s brother",
                    exampleAr: "عَمّي عَندُه أَرْبَع وْلاد.",
                    exampleEn: "My paternal uncle has four children.",
                },
                {
                    id: "fam_core_13",
                    ar: "وَلاد عَمّي",
                    en: "my cousins (paternal)",
                    hint: "Male cousins on father’s side",
                    exampleAr: "وَلاد عَمّي كْمان بِدْرِسوا هُون.",
                    exampleEn: "My cousins on my dad’s side also study here.",
                },
                {
                    id: "fam_core_14",
                    ar: "وَلاد خالي",
                    en: "my cousins (maternal)",
                    hint: "Male cousins on mother’s side",
                    exampleAr: "وَلاد خالي يِسْكُنوا بَبَرِّة البَلَد.",
                    exampleEn: "My maternal cousins live outside the town.",
                },
                {
                    id: "fam_core_15",
                    ar: "مِتجَوِّز / مِتجَوِّزة",
                    en: "married (m/f)",
                    hint: "Marital status",
                    exampleAr: "أُختي مِتجَوِّزة جْديد.",
                    exampleEn: "My sister recently got married.",
                },
                {
                    id: "fam_core_16",
                    ar: "عَزابي / عَزابيّة",
                    en: "single (unmarried, m/f)",
                    hint: "Not married",
                    exampleAr: "أنا لِسّه عَزابي.",
                    exampleEn: "I’m still single.",
                },
                {
                    id: "fam_core_17",
                    ar: "خاطِب / مَخطوبة",
                    en: "engaged (m/f)",
                    hint: "Engaged to be married",
                    exampleAr: "أُخوي خاطِب بِنْت مِن غَزّة.",
                    exampleEn: "My brother is engaged to a girl from Gaza.",
                },
                {
                    id: "fam_core_18",
                    ar: "أَكبَر",
                    en: "older / biggest",
                    hint: "Comparative: older / bigger",
                    exampleAr: "هُوَّ أَكبَر وَلَد بِالعيلِة.",
                    exampleEn: "He is the oldest boy in the family.",
                },
                {
                    id: "fam_core_19",
                    ar: "أَصغَر",
                    en: "younger / smallest",
                    hint: "Comparative: younger / smaller",
                    exampleAr: "أَنا أَصغَر واحِد بَيْن إِخْواني.",
                    exampleEn: "I’m the youngest among my siblings.",
                },
                {
                    id: "fam_core_20",
                    ar: "قَدّي",
                    en: "same age as me",
                    hint: "Used for same age comparison",
                    exampleAr: "أُختي تَقْريبًا قَدّي.",
                    exampleEn: "My sister is almost the same age as me.",
                },
                {
                    id: "fam_core_21",
                    ar: "عِنْدي ...",
                    en: "I have ...",
                    hint: "Used to say you have family members",
                    exampleAr: "عِنْدي أُخ وَأُختَيْن.",
                    exampleEn: "I have one brother and two sisters.",
                },
                {
                    id: "fam_core_22",
                    ar: "ساكِن / ساكْنة مَع ...",
                    en: "living with (m/f) ...",
                    hint: "Talking about who you live with",
                    exampleAr: "أنا ساكْنة مَع أَهلي.",
                    exampleEn: "I live with my family.",
                },
            ],
            extra: [
                {
                    id: "fam_extra_1",
                    ar: "مَطَلَّق / مَطَلَّقَة",
                    en: "divorced (m/f)",
                    hint: "Marital status",
                    exampleAr: "خالتي مَطَلَّقَة مِن سَنِين.",
                    exampleEn: "My aunt has been divorced for years.",
                },
                {
                    id: "fam_extra_2",
                    ar: "أَرْمَل / أَرْمَلَة",
                    en: "widower / widow",
                    hint: "Marital status",
                    exampleAr: "جارتنا أَرْمَلَة.",
                    exampleEn: "Our neighbor is a widow.",
                },
                {
                    id: "fam_extra_3",
                    ar: "حَماي / حَمايِة",
                    en: "father-in-law / mother-in-law",
                    hint: "Parents of a spouse",
                    exampleAr: "حَماي وَحَمايِة بيسْكُنوا بِنَفْس البِنَايِة.",
                    exampleEn: "My in-laws live in the same building.",
                },
                {
                    id: "fam_extra_4",
                    ar: "قَريب / قَريبة",
                    en: "relative (m/f)",
                    hint: "Generic word for relative",
                    exampleAr: "عِنْدنا قَرايِب كْثير بْبَرّا.",
                    exampleEn: "We have many relatives abroad.",
                },
                {
                    id: "fam_extra_5",
                    ar: "تَقريبًا",
                    en: "approximately / almost",
                    hint: "Useful with ages or numbers of siblings",
                    exampleAr: "عيلِتْهُم تَقريبًا عَشَرَة نَفَر.",
                    exampleEn: "Their family is about ten people.",
                },
                {
                    id: "fam_extra_6",
                    ar: "مُتْزاعْلين",
                    en: "not on good terms, upset with each other",
                    hint: "Talking about family problems",
                    exampleAr: "هُمَّ مُتْزاعْلين مَع أَخُوهم.",
                    exampleEn: "They are not on good terms with their brother.",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "مَسّا الخير يا ليلى، كِيفِك اليوم؟",
                    en: "Good evening, Layla, how are you today?",
                },
                {
                    speaker: "B",
                    ar: "مَسّا النّور يا سامِر، الحَمْدِلله. وإِنْتَ كِيفَك؟",
                    en: "Good evening, Samer, alhamdulillah. And how are you?",
                },
                {
                    speaker: "A",
                    ar: "تمام، شُكْرًا. اليوم الأُسْتاذة حَكَت عَن العيلِة، حَبيت أَسْأَلِك عَن عيلْتِك.",
                    en: "I’m good, thanks. Today the teacher talked about family, I wanted to ask you about your family.",
                },
                {
                    speaker: "B",
                    ar: "أَهلي ساكْنين هون بِغَزّة، وعيلِتْنا كْبيرَة.",
                    en: "My family lives here in Gaza, and our family is big.",
                },
                {
                    speaker: "A",
                    ar: "عِنْدِك إِخْوان وَإِخْوات كْثير؟",
                    en: "Do you have many brothers and sisters?",
                },
                {
                    speaker: "B",
                    ar: "إي، عِنْدي أُخ أَكبَر مِنّي وَأُخت أَصغَر.",
                    en: "Yes, I have an older brother and a younger sister.",
                },
                {
                    speaker: "A",
                    ar: "أَخوك أَكبَر بِقَدّيش؟",
                    en: "How much older is your brother?",
                },
                {
                    speaker: "B",
                    ar: "هُوَّ أَكبَر مِنّي تَقريبًا أَرْبَع سِنِين.",
                    en: "He’s about four years older than me.",
                },
                {
                    speaker: "A",
                    ar: "وأُختِك قَدّك ولا أَصغَر كْمان؟",
                    en: "And is your sister your age or younger too?",
                },
                {
                    speaker: "B",
                    ar: "هيَّ أَصغَر، لِسّه بِالتّانَوِيّة.",
                    en: "She’s younger, she’s still in high school.",
                },
                {
                    speaker: "A",
                    ar: "تِسْكُنوا كِلْكُم مَع بَعْض؟",
                    en: "Do you all live together?",
                },
                {
                    speaker: "B",
                    ar: "أَه، أنا ساكْنة مَع أَهلي: إِمّي، أَبوي، أُخوي، وَأُختي.",
                    en: "Yes, I live with my family: my mother, father, brother and sister.",
                },
                {
                    speaker: "A",
                    ar: "وجَدِّك وَسِتِّك ساكْنين قَريب مَنْكُم؟",
                    en: "And do your grandfather and grandmother live near you?",
                },
                {
                    speaker: "B",
                    ar: "إي، جَدّي وَسِتّي ساكْنين فِي الحارَة الجَنْبنا.",
                    en: "Yes, my grandfather and grandmother live in the neighborhood next to us.",
                },
                {
                    speaker: "A",
                    ar: "حَلُو كْثير. أَنا عيلْتِي أَصْغَر، عِنْدي بَسّ أُخ واحِد.",
                    en: "That’s really nice. My family is smaller, I only have one brother.",
                },
                {
                    speaker: "B",
                    ar: "هُوَّ أَكبَر مِنَّك وَلّا أَصغَر؟",
                    en: "Is he older than you or younger?",
                },
                {
                    speaker: "A",
                    ar: "هُوَّ تَقريبًا قَدّي، بِنْدَرُس نَفْس السَّنَة بِالجَامْعَة.",
                    en: "He’s almost my age, we study the same year at the university.",
                },
                {
                    speaker: "B",
                    ar: "أَهْلَك مِتجَوِّزين مِن زَمَان؟",
                    en: "Have your parents been married for a long time?",
                },
                {
                    speaker: "A",
                    ar: "إي، أَبوي وَإِمّي مِتجَوِّزين مِن أَكْتَر مِن عِشْرين سَنِة.",
                    en: "Yes, my dad and mom have been married for more than twenty years.",
                },
                {
                    speaker: "B",
                    ar: "إخْوالِك وَعَمامِك ساكْنين هُون وَلّا بْبَرّا؟",
                    en: "Do your maternal and paternal uncles live here or abroad?",
                },
                {
                    speaker: "A",
                    ar: "عِنْدي خال ساكِن هون، وَعَمّي ساكِن بْبَرّا البَلَد.",
                    en: "I have an uncle on my mom’s side who lives here, and an uncle on my dad’s side who lives abroad.",
                },
                {
                    speaker: "B",
                    ar: "شُو أَكْتَر حَدا قَريب عَلَيْك بِالعيلِة؟",
                    en: "Who are you closest to in your family?",
                },
                {
                    speaker: "A",
                    ar: "صِراحَةً، أَقْرَب حَدا عَلَيَّ أُختي، بَنِحْكِي كْثير مَع بَعْض.",
                    en: "Honestly, I’m closest to my sister, we talk a lot with each other.",
                },
                {
                    speaker: "B",
                    ar: "حَلُو! إنْ شاءَ الله تِضَلّوا مِتْفاهْمين دَايْمًا.",
                    en: "Nice! Inshallah you always stay in good understanding.",
                },
            ],
        },
        grammar: [
            {
                id: "fam_gram_1",
                title: "Possessive with Family Words (إِمّي، أَبوي، أُخوي، أُختي)",
                description:
                    "In Palestinian Arabic, we often use suffixes to say 'my' with family words. For example: 'إِم' (mother) → 'إِمّي' (my mother), 'أَب' (father) → 'أَبوي' (my father), 'أُخ' (brother) → 'أُخوي' (my brother), 'أُخت' (sister) → 'أُختي' (my sister). The suffix '-ي' is 'my', but the word may change slightly for pronunciation. Practice by saying: 'إِمّي، أَبوي، أُخوي، أُختي، جَدّي، سِتّي، أَهلي'.",
            },
            {
                id: "fam_gram_2",
                title: "Using عِنْدي to Say 'I Have'",
                description:
                    "To talk about family members you have, you use 'عِنْدي' + noun. For example: 'عِنْدي أُخ وَأُختَيْن' (I have one brother and two sisters), 'عِنْدي خال ساكِن بِرامَ الله' (I have an uncle who lives in Ramallah). For negative, you can say 'ما عِنْدي إِخْوات' (I don’t have siblings).",
            },
            {
                id: "fam_gram_3",
                title: "Older / Younger – أَكبَر وَأَصغَر & كَم؟",
                description:
                    "To compare ages in the family, use 'أَكبَر' (older/bigger) and 'أَصغَر' (younger/smaller). Example: 'أُخوي أَكبَر مِنّي' (My brother is older than me), 'أُختي أَصغَر مِنّي' (My sister is younger than me). To ask how many siblings someone has, you can say: 'كَم أَخ عِنْدَك؟' (How many brothers do you have?) or 'كَم أُخ وَأُخت عِنْدِك؟' (How many brothers and sisters do you have?). Combine: 'عِنْدي أُخ أَكبَر وَأُخت أَصغَر'.",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "fam_q1",
                    questionAr: "إِمّي وَأَبوي ساكْنين مَع أَهلي بِغَزّة.",
                    optionsEn: [
                        "My mother and father live with my family in Gaza.",
                        "My uncle and aunt live far from Gaza.",
                        "My cousins live in Gaza without my parents.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fam_q2",
                    questionAr: "عِنْدي أُخ أَكبَر وَأُخت أَصغَر.",
                    optionsEn: [
                        "I have one older brother and one younger sister.",
                        "I am older than my brother and sister.",
                        "My brother and sister are twins.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fam_q3",
                    questionAr: "سِتّي ساكْنة قَريب مِنّا.",
                    optionsEn: [
                        "My grandmother lives near us.",
                        "My grandfather lives with us.",
                        "My sister lives far away.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fam_q4",
                    questionAr: "أنا عَزابي، ما عِنْدي زَوْجَة.",
                    optionsEn: [
                        "I am single, I don’t have a wife.",
                        "I am married, I have a wife.",
                        "I am divorced and live alone.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "fam_q5",
                    questionAr: "كَم أُخ وَأُخت عِنْدِك؟",
                    optionsEn: [
                        "Where do your parents live?",
                        "How many brothers and sisters do you have?",
                        "Are you older or younger than your sister?",
                    ],
                    correctIndex: 1,
                },
            ],
            rolePlays: [
                "Student A and Student B are classmates. Ask each other about your family: how many siblings you have, who is older/younger, and who you live with. Use 'عِنْدي', 'أَكبَر', and 'أَصغَر'.",
                "Student A is visiting Student B’s home for the first time. B introduces their family (إِمّي، أَبوي، أُخوي، أُختي، سِتّي) to A. Practice short introductions for each person.",
                "Student A and Student B talk about their extended families during a holiday. Include words like خال، عَمّ، وَلاد عَمّي، وَلاد خالي and say where they live.",
            ],
        },
        homework: {
            instructions:
                "Write a short paragraph in Palestinian Arabic (5–7 sentences) about your family. Say who you live with, how many brothers and sisters you have, who is older and who is younger, and which family member you are closest to. Try to use words like: إِمّي، أَبوي، أُخوي، أُختي، أَهلي، عِنْدي، أَكبَر، أَصغَر.",
        },
        teacherNotes: {
            warmup: [
                "Show a simple family tree (real or drawn) and ask students in English: Who is this? to activate the concept of family.",
                "Elicit a few basic words students might already know (e.g., 'baba', 'mama') and connect them to the target forms إِمّي، أَبوي.",
            ],
            vocabularySteps: [
                "Present the core family words with simple pictures or stick figures: إِمّي، أَبوي، أُخوي، أُختي، أَهلي، جَدّي، سِتّي، خال، عَمّ.",
                "Drill pronunciation chorally and individually; highlight possessive forms ending with -ي (my).",
                "Ask students to point to people in a picture or on the board when you say the word, then reverse the activity (they say the word, you or another student points).",
            ],
            dialogueSteps: [
                "Play or read the dialogue once while students just listen and follow along in the text.",
                "Ask comprehension questions in simple English or Arabic (e.g., How many siblings does Layla have? Who does she live with?).",
                "Have students read the dialogue in pairs, switching roles. Then ask them to replace some details with their real information (number of siblings, where grandparents live, etc.).",
            ],
            practiceTips: [
                "Use the quiz items as a quick check: read the Arabic sentences aloud and let students choose the correct English meaning.",
                "For role-plays, model one example with a strong student, then let pairs or small groups practice freely. Encourage them to use 'عِنْدي' and comparatives like أَكبَر / أَصغَر.",
            ],
            wrapup: [
                "Ask 3–4 students to briefly present their family to the class using at least three of the new words.",
                "Recycle vocabulary by playing a quick game: you say a family word in English and students race to say the correct Palestinian Arabic word.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_TRANSPORT]: {
        meta: {
            level: "Beginner",
            unit: "trans",
            lessonTitle: "Lesson 5 – Getting Around the City",
        },
        overview: {
            title: "Unit 5 – Transportation & Directions",
            description:
                "In this lesson, students learn how to talk about transportation (bus, taxi, car, metro) and ask for and give simple directions in Palestinian Arabic.",
            goals: [
                "Name common types of transportation and basic direction words.",
                "Use verbs like 'yrkab', 'yinzil', 'yūṣal' to talk about trips.",
                "Ask and answer questions about how to get to a place in the city.",
                "Use imperatives like 'xud šmāl' and 'xud yamīn' to give directions.",
                "Describe how they usually go to the university, market, or work.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "tr_core_1",
                    ar: "مُوَاصَلات",
                    en: "transportation, public transport",
                    hint: "General word for transportation",
                    exampleAr: "اليوم المُوَاصَلات زَحْمَة كْتير.",
                    exampleEn: "Today the transportation is very crowded.",
                },
                {
                    id: "tr_core_2",
                    ar: "باص",
                    en: "bus",
                    hint: "Public bus",
                    exampleAr: "بِالعادَة بروح عَالشُّغُل بالباص.",
                    exampleEn: "I usually go to work by bus.",
                },
                {
                    id: "tr_core_3",
                    ar: "مَوقِف باصات",
                    en: "bus stop",
                    hint: "Place where buses stop",
                    exampleAr: "مَوقِف الباصات قُدّام الجامْعَة.",
                    exampleEn: "The bus stop is in front of the university.",
                },
                {
                    id: "tr_core_4",
                    ar: "تاكسي",
                    en: "taxi",
                    hint: "Regular taxi",
                    exampleAr: "أَحْيانًا باخُد تاكسي لَمّا أكون مُسْتَعْجِل.",
                    exampleEn: "Sometimes I take a taxi when I’m in a hurry.",
                },
                {
                    id: "tr_core_5",
                    ar: "سَيّارة أُجْرَة",
                    en: "service taxi / shared taxi",
                    hint: "Shared taxi, fixed route",
                    exampleAr: "بسافِر عَرامَ الله بسَيّارة أُجْرَة.",
                    exampleEn: "I travel to Ramallah by service taxi.",
                },
                {
                    id: "tr_core_6",
                    ar: "سَيّارة",
                    en: "car",
                    hint: "General word for car",
                    exampleAr: "أَخوي بِسوق سَيّارة الشُّرْكَة.",
                    exampleEn: "My brother drives the company car.",
                },
                {
                    id: "tr_core_7",
                    ar: "بَسكَلِيت",
                    en: "bicycle",
                    hint: "Bike",
                    exampleAr: "هوَّ بِحِبّ يِروح عَالجامعة بالبَسكَلِيت.",
                    exampleEn: "He likes to go to the university by bike.",
                },
                {
                    id: "tr_core_8",
                    ar: "قِطار",
                    en: "train",
                    hint: "Train (used more in some areas / travel)",
                    exampleAr: "رِكِبنا القِطار لَمّا كُنّا بِالأُرْدُن.",
                    exampleEn: "We took the train when we were in Jordan.",
                },
                {
                    id: "tr_core_9",
                    ar: "مِتْرو",
                    en: "metro / subway",
                    hint: "Underground train",
                    exampleAr: "في مِدِن ثانِيَة في مِتْرو، مِش عَنا.",
                    exampleEn: "In other cities there is a metro, not here.",
                },
                {
                    id: "tr_core_10",
                    ar: "سَوّاق",
                    en: "driver",
                    hint: "Person who drives (bus / taxi / car)",
                    exampleAr: "سَوّاق الباص مَشي دُغري عَالمَوقِف.",
                    exampleEn: "The bus driver went straight to the stop.",
                },
                {
                    id: "tr_core_11",
                    ar: "رِكِب، يِركَب",
                    en: "to ride, get on (bus, taxi, etc.)",
                    hint: "Verb for getting on a vehicle",
                    exampleAr: "يَلا نِركَب الباص، حَيِمْشي هَلَّق.",
                    exampleEn: "Let’s get on the bus, it’s about to leave now.",
                },
                {
                    id: "tr_core_12",
                    ar: "نِزِل، يِنْزِل",
                    en: "to get off, get out (of a vehicle)",
                    hint: "Opposite of 'yrkab'",
                    exampleAr: "بِنْزِل قُدّام الجامْعَة، لَو سَمَحْت.",
                    exampleEn: "I get off in front of the university, please.",
                },
                {
                    id: "tr_core_13",
                    ar: "وِصِل، يوصَل",
                    en: "to arrive, reach",
                    hint: "Arrive at a place",
                    exampleAr: "إِمْتَى وِصِل الباص عَالبلَد؟",
                    exampleEn: "When did the bus arrive in town?",
                },
                {
                    id: "tr_core_14",
                    ar: "راح، يِروح",
                    en: "to go",
                    hint: "Go to a place",
                    exampleAr: "كل يوم بِروح عَالجامْعَة عَالسّاعَة تْمانْيِة.",
                    exampleEn: "Every day I go to the university at eight o’clock.",
                },
                {
                    id: "tr_core_15",
                    ar: "طِلِع، يِطْلَع",
                    en: "to leave, depart (bus / taxi), or go up",
                    hint: "Also used for 'the bus left'",
                    exampleAr: "الباص طِلِع، لَحِقْناه بِصُعوبَة.",
                    exampleEn: "The bus left; we caught it with difficulty.",
                },
                {
                    id: "tr_core_16",
                    ar: "يِفوت عَـ...",
                    en: "to enter / go into ...",
                    hint: "Used with places",
                    exampleAr: "الباص بِفوت عَشارِع ضَيِّق.",
                    exampleEn: "The bus goes into a narrow street.",
                },
                {
                    id: "tr_core_17",
                    ar: "شْمال",
                    en: "left",
                    hint: "Direction: left",
                    exampleAr: "خُد شْمال عَأوَّل لَفَّة.",
                    exampleEn: "Take a left at the first turn.",
                },
                {
                    id: "tr_core_18",
                    ar: "يَمين",
                    en: "right",
                    hint: "Direction: right",
                    exampleAr: "بَعْدين خُد يَمين عَشارِع الكورنيش.",
                    exampleEn: "Then take a right onto the corniche street.",
                },
                {
                    id: "tr_core_19",
                    ar: "دُغري",
                    en: "straight",
                    hint: "Straight ahead",
                    exampleAr: "ضَلّك مَاشي دُغري قُدّامَك.",
                    exampleEn: "Keep going straight ahead.",
                },
                {
                    id: "tr_core_20",
                    ar: "قُدّامَك",
                    en: "in front of you / straight ahead",
                    hint: "Used with directions",
                    exampleAr: "المَحَطّة قُدّامَك عَلْيامين.",
                    exampleEn: "The station is in front of you on the right.",
                },
                {
                    id: "tr_core_21",
                    ar: "زَحْمَة",
                    en: "traffic jam, crowded",
                    hint: "Heavy traffic / crowd",
                    exampleAr: "الطَّريق اليوم زَحْمَة كْتير.",
                    exampleEn: "The road is very crowded today.",
                },
                {
                    id: "tr_core_22",
                    ar: "كَمين بْنَزين",
                    en: "gas station",
                    hint: "Place to get fuel",
                    exampleAr: "السَيّارة وَقَفَت قُدّام كَمين البْنَزين.",
                    exampleEn: "The car stopped in front of the gas station.",
                },
                {
                    id: "tr_core_23",
                    ar: "قَدّيش الأُجْرَة؟",
                    en: "How much is the fare?",
                    hint: "Asking about price (taxi, bus, etc.)",
                    exampleAr: "لَمّا تِرْكَب تاكسي، إسْأَل السَّوّاق: قَدّيش الأُجْرَة؟",
                    exampleEn: "When you take a taxi, ask the driver: How much is the fare?",
                },
                {
                    id: "tr_core_24",
                    ar: "كيف بوْصَل عَـ...؟",
                    en: "How do I get to ...?",
                    hint: "Key phrase for asking directions",
                    exampleAr: "كيف بوْصَل عَالمَحَطّة مِن هون؟",
                    exampleEn: "How do I get to the station from here?",
                },
            ],
            extra: [
                {
                    id: "tr_extra_1",
                    ar: "مَحَطّة",
                    en: "station (bus/train)",
                    hint: "General word for station",
                    exampleAr: "مَحَطّة الباص قَريبَة مِن السوق.",
                    exampleEn: "The bus station is near the market.",
                },
                {
                    id: "tr_extra_2",
                    ar: "تَفْرِيعَة",
                    en: "side street / turn-off",
                    hint: "Useful for directions",
                    exampleAr: "خُد أَوَّل تَفْرِيعَة عَالشْمال.",
                    exampleEn: "Take the first side street on the left.",
                },
                {
                    id: "tr_extra_3",
                    ar: "جُوَّا / بَرّا",
                    en: "inside / outside",
                    hint: "Location words used with vehicles / stations",
                    exampleAr: "إسْتَنّاني بَرّا مَحَطّة الباص.",
                    exampleEn: "Wait for me outside the bus station.",
                },
                {
                    id: "tr_extra_4",
                    ar: "مُتَأَخِّر",
                    en: "late (for transport / time)",
                    hint: "Used for buses, people",
                    exampleAr: "الباص كان مُتَأَخِّر نُصّ ساعَة.",
                    exampleEn: "The bus was half an hour late.",
                },
                {
                    id: "tr_extra_5",
                    ar: "بِوَقّف هون؟",
                    en: "Does it stop here?",
                    hint: "Ask about bus / taxi stop",
                    exampleAr: "إسْأَل حَدا: الباص لَلبَلَد بِوَقّف هون؟",
                    exampleEn: "Ask someone: Does the bus to town stop here?",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "لَو سَمَحْت، كيف بوْصَل عَالجامْعَة مِن هون؟",
                    en: "Excuse me, how do I get to the university from here?",
                },
                {
                    speaker: "B",
                    ar: "بِتِرْكَب باص رَقم تْمانْيِة مِن مَوقِف الباصات هُناك.",
                    en: "You take bus number 8 from the bus stop over there.",
                },
                {
                    speaker: "A",
                    ar: "وين مَوقِف الباصات بالْزَّبْط؟",
                    en: "Where exactly is the bus stop?",
                },
                {
                    speaker: "B",
                    ar: "شُوف، ضَلّك ماشي دُغري قُدّامَك، بَعْدين خُد شْمال عَأَوَّل تَفْرِيعَة.",
                    en: "Look, keep walking straight ahead, then take a left at the first side street.",
                },
                {
                    speaker: "B",
                    ar: "المَوقِف قُدّام كَمين البْنَزين، ما بِتِضِيع.",
                    en: "The stop is in front of the gas station, you can’t miss it.",
                },
                {
                    speaker: "A",
                    ar: "لَمّا أركَب الباص، بِنْزِل قُدّام الجامْعَة؟",
                    en: "When I get on the bus, do I get off in front of the university?",
                },
                {
                    speaker: "B",
                    ar: "إي، قُلّو لِلسَّوّاق: بِنْزِل قُدّام الجامْعَة لَو سَمَحْت.",
                    en: "Yes, tell the driver: I get off in front of the university, please.",
                },
                {
                    speaker: "A",
                    ar: "وَقْت قَدّيش لَحَدّ ما أوْصَل عَالجامْعَة؟",
                    en: "How long does it take until I reach the university?",
                },
                {
                    speaker: "B",
                    ar: "إِذا ما في زَحْمَة، تَقريبًا رُبُع ساعَة.",
                    en: "If there’s no traffic, about fifteen minutes.",
                },
                {
                    speaker: "A",
                    ar: "طَيِّب، وقْت الرَّجْعَة كِيف؟ نَفْس الباص؟",
                    en: "Okay, and for coming back? The same bus?",
                },
                {
                    speaker: "B",
                    ar: "إي، مِن قُدّام الجامْعَة في مَوقِف صْغير، بِتِرْكَب مِن هُناك.",
                    en: "Yes, in front of the university there is a small stop, you get on from there.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن آخُد تاكسي بَدال الباص؟",
                    en: "Can I take a taxi instead of the bus?",
                },
                {
                    speaker: "B",
                    ar: "أَكِيد، بَس التاكسي أَغْلى. إسْأَل السَّوّاق: قَدّيش الأُجْرَة لَلجامْعَة؟",
                    en: "Of course, but the taxi is more expensive. Ask the driver: How much is the fare to the university?",
                },
                {
                    speaker: "A",
                    ar: "شُكْرًا كْتير عَالْمَساعَدَة.",
                    en: "Thank you very much for the help.",
                },
                {
                    speaker: "B",
                    ar: "وَلا يِهِمَّك، تِروح وتِرْجَع بِالسَّلامَة.",
                    en: "You’re welcome, go and come back safely.",
                },
            ],
        },
        grammar: [
            {
                id: "tr_gram_1",
                title: "Using بِروح / بِنروح + عَـ… to Talk About Regular Routes",
                description:
                    "To talk about usual ways of getting somewhere, you can use the present with 'b-': 'بِروح' (I go), 'بِنروح' (we go) + 'عَـ' (to) + place. Example: 'بِالعادَة بروح عَالجامْعَة بالباص' (I usually go to the university by bus), 'كل يوم بِنروح عَالشُّغُل بسيّارة أُجْرَة' (Every day we go to work by service taxi).",
            },
            {
                id: "tr_gram_2",
                title: "How to Ask for Directions: كيف بوْصَل عَـ...؟",
                description:
                    "A very useful question is 'كيف بوْصَل عَـ...؟' (How do I get to ...?). You can add any place: 'كيف بوْصَل عَالجامْعَة؟' (How do I get to the university?), 'كيف بوْصَل عَالبلد؟' (How do I get to downtown?). Combine this with transportation: 'كيف بوْصَل عَالسُّوق بالمُوَاصَلات؟' (How do I get to the market by public transport?).",
            },
            {
                id: "tr_gram_3",
                title: "Giving Directions with Imperatives: خُد شْمال، خُد يَمين، ضَلّك دُغري",
                description:
                    "To give directions, we often use the imperative: 'خُد شْمال' (take a left), 'خُد يَمين' (take a right), 'ضَلّك دُغري' (keep going straight). Example: 'ضَلّك دُغري بَعْدين خُد شْمال عَأَوَّل تَفْرِيعَة' (Keep going straight, then take a left at the first side street). You can add landmarks: 'خُد يَمين عَالمَحَطّة' (take a right at the station).",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "tr_q1",
                    questionAr: "بِالعادَة بروح عَالجامْعَة بالباص.",
                    optionsEn: [
                        "I usually go to the university by bus.",
                        "I usually go to the university by car.",
                        "I usually walk to the university.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "tr_q2",
                    questionAr: "كيف بوْصَل عَالبلد مِن هون؟",
                    optionsEn: [
                        "How crowded is it downtown from here?",
                        "How do I get to downtown from here?",
                        "How much is the fare to downtown from here?",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "tr_q3",
                    questionAr: "خُد شْمال بَعْدين ضَلّك دُغري.",
                    optionsEn: [
                        "Turn left, then keep going straight.",
                        "Turn right, then go back.",
                        "Go straight, then take the bus.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "tr_q4",
                    questionAr: "قَدّيش الأُجْرَة لَلسُّوق؟",
                    optionsEn: [
                        "Where is the market?",
                        "How do I get to the market?",
                        "How much is the fare to the market?",
                    ],
                    correctIndex: 2,
                },
                {
                    id: "tr_q5",
                    questionAr: "بِنْزِل قُدّام الجامْعَة، لَو سَمَحْت.",
                    optionsEn: [
                        "I will get off in front of the university, please.",
                        "I will get on in front of the university, please.",
                        "I will wait near the university, please.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A is a tourist; Student B is a local. A asks: 'كيف بوْصَل عَالبلد مِن هون؟' and B gives directions using 'خُد شْمال، خُد يَمين، ضَلّك دُغري' and landmarks (market, station, gas station).",
                "Student A asks a bus driver about the route: Does this bus stop near the university or market? Use phrases like 'بِوَقّف هون؟', 'بِنْزِل قُدّام...', and 'قَدّيش الأُجْرَة؟'.",
                "Student A and B compare how they usually go to the university or work: by bus, by service taxi, by car, or by bike. Use 'بِالعادَة بروح...', 'بِروح بالباص / بالتّاكسي / بسيّارة أُجْرَة / بالبَسكَلِيت'.",
            ],
        },
        homework: {
            instructions:
                "Write 5–7 sentences in Palestinian Arabic about how you usually get to a place you know well (university, work, market, etc.). Say which transportation you use (bus, taxi, car, bike), how long it takes, if there is traffic (زَحْمَة), and one or two directions (for example: خُد شْمال، دُغري، قُدّامَك).",
        },
        teacherNotes: {
            warmup: [
                "Ask students in English or simple Arabic how they usually go to the university or work: walking, bus, taxi, car, bike.",
                "Show pictures of different transportation (bus, taxi, car, bike) and elicit any words they already know before presenting the target vocabulary.",
            ],
            vocabularySteps: [
                "Present the core transport words (باص، تاكسي، سَيّارة، بَسكَلِيت، مُوَاصَلات) using pictures or simple drawings.",
                "Drill pronunciation and have students match words to pictures. Ask simple questions like: 'بتروح عَالجامْعَة بالباص وَلّا بالتاكسي؟'.",
                "Introduce the key phrases 'قَدّيش الأُجْرَة؟' and 'كيف بوْصَل عَـ...؟' and practice them in choral drills.",
            ],
            dialogueSteps: [
                "Play or read the dialogue while students follow in the text; then check understanding with simple questions (Where is the bus stop? How long does it take?).",
                "Have students act out the dialogue in pairs, then change the destination (market, work, friend’s house) and adjust the directions.",
                "Highlight the forms 'بروّح', 'بِالعادَة بروح', and the imperative forms 'خُد شْمال / خُد يَمين / ضَلّك دُغري' directly from the dialogue.",
            ],
            practiceTips: [
                "Use the quiz items as a quick comprehension check; read the Arabic sentence aloud and let students choose the correct English meaning.",
                "For role-plays, give students a simple map (even sketched on the board) and let them guide each other using the target direction phrases.",
            ],
            wrapup: [
                "Ask 2–3 students to explain in Palestinian Arabic, step by step, how to reach the university from a common point in town.",
                "Recycle key phrases by a quick Q&A chain: each student asks the next: 'كيف بوْصَل عَـ...؟' and the next gives a short direction.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_WORK_STUDY]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Work & Study",
            lessonTitle: "Unit 1 – Balancing Work and Study",
        },
        overview: {
            title: "Unit 1 – Work & Study",
            description:
                "In this lesson, students talk about their studies, jobs, schedules, and free time. They practice explaining when they work, when they study, and how busy they are.",
            goals: [
                "Talk about basic jobs and fields of study in Palestinian Arabic.",
                "Describe a weekly schedule using work hours, classes, and free time.",
                "Use the present tense with b- (badrus, bashtighil) to describe routines.",
                "Express obligation and lack of time with 'lāzim' and 'ma baqdar'.",
                "Ask and answer questions about balancing work and study.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "ws_core_1",
                    ar: "طالِب / طالْبِة",
                    en: "student (m/f)",
                    hint: "Person who studies at school or university",
                    exampleAr: "أنا طالْبَة جامْعِيّة.",
                    exampleEn: "I am a university student.",
                },
                {
                    id: "ws_core_2",
                    ar: "جامْعَة",
                    en: "university",
                    hint: "Place of higher education",
                    exampleAr: "بَدْرُس في جامْعَة إِسْلامِيّة.",
                    exampleEn: "I study at an Islamic university.",
                },
                {
                    id: "ws_core_3",
                    ar: "مَدْرَسِة",
                    en: "school",
                    hint: "General word for school",
                    exampleAr: "أُختي لِسّا بِالمَدْرَسِة.",
                    exampleEn: "My sister is still in school.",
                },
                {
                    id: "ws_core_4",
                    ar: "مَكْتَب",
                    en: "office / desk",
                    hint: "Office or a desk at work",
                    exampleAr: "بِشْتِغِل في مَكْتَب صْغير بِالشِّرْكَة.",
                    exampleEn: "I work in a small office at the company.",
                },
                {
                    id: "ws_core_5",
                    ar: "شِرْكَة",
                    en: "company",
                    hint: "Workplace, company",
                    exampleAr: "أَبوي بِشْتِغِل في شِرْكَة خُصوصِيّة.",
                    exampleEn: "My father works in a private company.",
                },
                {
                    id: "ws_core_6",
                    ar: "شُغُل",
                    en: "work / job",
                    hint: "General word for work or a job",
                    exampleAr: "الشُّغُل كْثير وَالمَشاريع صْعبة.",
                    exampleEn: "The work is a lot and the projects are difficult.",
                },
                {
                    id: "ws_core_7",
                    ar: "وَظِيفَة",
                    en: "job position",
                    hint: "Formal job or post",
                    exampleAr: "هوَّ لَسا بْدَوِّر عَوَظِيفَة.",
                    exampleEn: "He is still looking for a job position.",
                },
                {
                    id: "ws_core_8",
                    ar: "مُعَلِّم / مُعَلِّمِة",
                    en: "teacher (m/f)",
                    hint: "School or institute teacher",
                    exampleAr: "مُعَلِّمِة العَرَبِي تبَعْنا كْثير طَيِّبِة.",
                    exampleEn: "Our Arabic teacher is very kind.",
                },
                {
                    id: "ws_core_9",
                    ar: "مُوَظَّف / مُوَظَّفِة",
                    en: "employee (m/f)",
                    hint: "Person who works in an office or company",
                    exampleAr: "أُخوي مُوَظَّف في بَنْك.",
                    exampleEn: "My brother is an employee in a bank.",
                },
                {
                    id: "ws_core_10",
                    ar: "زْميل / زْميلَة",
                    en: "colleague / classmate (m/f)",
                    hint: "Colleague at work or classmate at university",
                    exampleAr: "زْميلي في الشُّغُل بيساعِدْني كْثير.",
                    exampleEn: "My colleague at work helps me a lot.",
                },
                {
                    id: "ws_core_11",
                    ar: "مُهَنْدِس / مُهَنْدِسَة",
                    en: "engineer (m/f)",
                    hint: "Profession",
                    exampleAr: "بِدْرُس عَشان أَصير مُهَنْدِسَة بَرْمَجِيّات.",
                    exampleEn: "I study so I can become a software engineer.",
                },
                {
                    id: "ws_core_12",
                    ar: "مُمَرِّض / مُمَرِّضَة",
                    en: "nurse (m/f)",
                    hint: "Health profession",
                    exampleAr: "أُختي مُمَرِّضَة في مُسْتَشْفَى.",
                    exampleEn: "My sister is a nurse in a hospital.",
                },
                {
                    id: "ws_core_13",
                    ar: "يِشْتِغِل",
                    en: "to work",
                    hint: "Verb for doing a job",
                    exampleAr: "بَشْتِغِل جُزْئِي بَعْد الجامْعَة.",
                    exampleEn: "I work part-time after university.",
                },
                {
                    id: "ws_core_14",
                    ar: "يِدْرُس",
                    en: "to study",
                    hint: "Verb for studying",
                    exampleAr: "بَدْرُس كُمْبْيُوتِر سايِنْس.",
                    exampleEn: "I study computer science.",
                },
                {
                    id: "ws_core_15",
                    ar: "دَوام",
                    en: "work hours / shift",
                    hint: "Work schedule or shift",
                    exampleAr: "دَوامي مِن التّْسعة لَلْواحْدِة.",
                    exampleEn: "My working hours are from nine to one.",
                },
                {
                    id: "ws_core_16",
                    ar: "مُحاضَرَة",
                    en: "lecture / class session",
                    hint: "University lesson",
                    exampleAr: "عندي مُحاضَرَة ساعَتَيْن اليوم.",
                    exampleEn: "I have a two-hour lecture today.",
                },
                {
                    id: "ws_core_17",
                    ar: "اِسْتِراحَة",
                    en: "break",
                    hint: "Pause from work or class",
                    exampleAr: "بِنْخُد اِسْتِراحَة صْغيرَة بَين المُحاضَرات.",
                    exampleEn: "We take a short break between the lectures.",
                },
                {
                    id: "ws_core_18",
                    ar: "مَشْروع",
                    en: "project",
                    hint: "Work or study project",
                    exampleAr: "عندي مَشْروع تَخَرُّج هالسَّنِة.",
                    exampleEn: "I have a graduation project this year.",
                },
                {
                    id: "ws_core_19",
                    ar: "اِمْتِحان",
                    en: "exam",
                    hint: "Test at school or university",
                    exampleAr: "الأُسْبوع الجاي عنا اِمْتِحان نِهاي.",
                    exampleEn: "Next week we have a final exam.",
                },
                {
                    id: "ws_core_20",
                    ar: "واجِبات",
                    en: "homework / assignments",
                    hint: "Tasks to do at home",
                    exampleAr: "في واجِبات كْثير لِلْمادّة هاي.",
                    exampleEn: "There is a lot of homework for this course.",
                },
                {
                    id: "ws_core_21",
                    ar: "وَقْت فاضي",
                    en: "free time",
                    hint: "Time without work or study",
                    exampleAr: "ما عِنْدي وَقْت فاضي اليوم.",
                    exampleEn: "I have no free time today.",
                },
                {
                    id: "ws_core_22",
                    ar: "بِدَوَّام كامِل",
                    en: "full-time",
                    hint: "Full-time work or study schedule",
                    exampleAr: "أَبوي بِشْتِغِل بِدَوَّام كامِل.",
                    exampleEn: "My father works full-time.",
                },
                {
                    id: "ws_core_23",
                    ar: "دَوام جُزْئِي",
                    en: "part-time",
                    hint: "Part-time work or job",
                    exampleAr: "أنا طالِب وبَشْتِغِل دَوام جُزْئِي.",
                    exampleEn: "I’m a student and I work part-time.",
                },
                {
                    id: "ws_core_24",
                    ar: "يِتْخَرَّج",
                    en: "to graduate",
                    hint: "Finish university or school",
                    exampleAr: "بَدّي أِتْخَرَّج السَّنِة الجاي.",
                    exampleEn: "I want to graduate next year.",
                },
            ],
            extra: [
                {
                    id: "ws_extra_1",
                    ar: "مَوْضوع",
                    en: "topic / subject",
                    hint: "Topic of study or project",
                    exampleAr: "مَوْضوع المَشْروع عَن التَّعْلِيم أونلاين.",
                    exampleEn: "The project topic is about online education.",
                },
                {
                    id: "ws_extra_2",
                    ar: "مَهَمّة",
                    en: "task",
                    hint: "Task at work or for a project",
                    exampleAr: "كُل يَوم المُدير بِعْطيهِم مَهَمّات جْديدة.",
                    exampleEn: "Every day the manager gives them new tasks.",
                },
                {
                    id: "ws_extra_3",
                    ar: "مَوعِد",
                    en: "appointment / deadline",
                    hint: "Time for a meeting or deadline",
                    exampleAr: "مَوعِد تَسْليم المَشْروع بُكْرَة.",
                    exampleEn: "The deadline for submitting the project is tomorrow.",
                },
                {
                    id: "ws_extra_4",
                    ar: "لازِم",
                    en: "must / have to",
                    hint: "Expressing obligation",
                    exampleAr: "لازِم أَدْرُس كْثير لِلْاِمْتِحان.",
                    exampleEn: "I must study a lot for the exam.",
                },
                {
                    id: "ws_extra_5",
                    ar: "ما بَقْدَر",
                    en: "I can’t / I’m not able",
                    hint: "Used when you don’t have time or energy",
                    exampleAr: "ما بَقْدَر أِطْلَع اليوم، عندي شُغُل.",
                    exampleEn: "I can’t go out today, I have work.",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "صَباح الخير يا سارة، كِيف دَوامِك اليوم؟",
                    en: "Good morning, Sara, how is your schedule today?",
                },
                {
                    speaker: "B",
                    ar: "صَباح النّور يا مَجْد، دَوامي مَجْنون! عندي جامْعَة وَشُغُل.",
                    en: "Good morning, Majd, my schedule is crazy! I have university and work.",
                },
                {
                    speaker: "A",
                    ar: "جَدّ؟ وين بَشْتِغِلي؟",
                    en: "Really? Where do you work?",
                },
                {
                    speaker: "B",
                    ar: "بَشْتِغِل دَوام جُزْئِي في مَكْتَب بِشِرْكَة صْغيرَة.",
                    en: "I work part-time in an office at a small company.",
                },
                {
                    speaker: "A",
                    ar: "وَقت قَدّيش الدَّوام؟",
                    en: "How long are your work hours?",
                },
                {
                    speaker: "B",
                    ar: "مِن التّْنين لَلخَميس، مِن السّاعَة تْنين لَلْخَمْسَة.",
                    en: "From Monday to Thursday, from two o’clock to five.",
                },
                {
                    speaker: "A",
                    ar: "وطَبْعًا قبل هيك عَندِك مُحاضَرات بِالجامْعَة؟",
                    en: "And of course before that you have lectures at the university?",
                },
                {
                    speaker: "B",
                    ar: "إي، الصُّبِح بَدْرُس، وبَعْدين بَروح عَالشُّغُل.",
                    en: "Yes, in the morning I study, and then I go to work.",
                },
                {
                    speaker: "A",
                    ar: "ما بِتْحِسّ إنّو ما عِنْدِك وَقْت فاضي؟",
                    en: "Don’t you feel like you have no free time?",
                },
                {
                    speaker: "B",
                    ar: "صِراحَةً، نادِرًا بْلاقي وَقْت فاضي. لاِزِم أَدْرُس لِلْمَشْروع وِلْاِمْتِحانات كْمان.",
                    en: "Honestly, I rarely find free time. I have to study for the project and for exams too.",
                },
                {
                    speaker: "A",
                    ar: "وشُو مَجال الشُّغُل؟",
                    en: "And what type of work is it?",
                },
                {
                    speaker: "B",
                    ar: "مُساعَدَة إِداريّة، بَطَبِّع أَوْراق، بِرُدّ عَالتّليفون، وَبَساعِد المُوَظَّفين.",
                    en: "Administrative assistance: I print papers, answer the phone, and help the employees.",
                },
                {
                    speaker: "A",
                    ar: "بِتْحِسّ إنّو الشُّغُل بيساعِدِك بِالدِّراسَة وَلّا بِتْعَبِك أكْتَر؟",
                    en: "Do you feel that the job helps you with your studies, or does it just tire you out more?",
                },
                {
                    speaker: "B",
                    ar: "هُوَّ مُتْعِب، بَس كْمان بَتْعَلَّم مَهارات جْديدة.",
                    en: "It’s tiring, but I also learn new skills.",
                },
                {
                    speaker: "A",
                    ar: "أنا طالِب بَس، ما بَشْتِغِل هَلَّق. بس أَحْيانًا بَفَكِّر آخُد دَوام جُزْئِي.",
                    en: "I’m only a student, I don’t work right now. But sometimes I think about taking a part-time job.",
                },
                {
                    speaker: "B",
                    ar: "إذا بَدَّك تِشْتِغِل، لازم تِنَظِّم وَقْتَك مْنيح.",
                    en: "If you want to work, you must organize your time well.",
                },
                {
                    speaker: "A",
                    ar: "عَنْ قريب عنا اِمْتِحانات، صَعِب أَفَكِّر بِشُغُل هَلَّق.",
                    en: "We have exams soon, it’s hard to think about work now.",
                },
                {
                    speaker: "B",
                    ar: "مَزْبوط، الأَهَم هَلَّق الدِّراسَة. بَعْدين بِتْدَوِّر عَشُغُل مُناسِب.",
                    en: "True, right now the most important thing is studying. Later you look for a suitable job.",
                },
                {
                    speaker: "A",
                    ar: "إنْ شاءَ الله بَعْد ما أِتْخَرَّج أَلاقِي وَظِيفَة كْوَيْسِة.",
                    en: "Inshallah after I graduate I’ll find a good job.",
                },
                {
                    speaker: "B",
                    ar: "وأنا كْمان، خَلِّينا نِرْكِز عَالدِّراسَة هَلَّق.",
                    en: "Me too; let’s focus on the studies for now.",
                },
            ],
        },
        grammar: [
            {
                id: "ws_gram_1",
                title: "Using b- with the Present Tense for Routines (بَدرُس، بَشْتِغِل)",
                description:
                    "In Palestinian Arabic we often add 'b-' before the present tense to talk about routines and general habits. For example: 'بَدْرُس في الجامْعَة' (I study at the university), 'بَشْتِغِل دَوام جُزْئِي' (I work part-time). Without 'b-' it can sound more like something happening right now. Use 'badrus' and 'bashtighil' to talk about your normal schedule.",
            },
            {
                id: "ws_gram_2",
                title: "Talking About Schedules with مِن ... لَـ ...",
                description:
                    "To describe work or class hours, use 'مِن ... لَـ ...' (from ... to ...). For example: 'دَوامي مِن السّاعَة تْسْعة لَلْواحْدِة' (My shift is from nine to one), 'المُحاضَرَة مِن اِحْداش لَلْواحْدِة' (The lecture is from eleven to one). You can also add days: 'مِن التّْنين لَلخَميس بَدْرُس جامْعَة' (From Monday to Thursday I study at university).",
            },
            {
                id: "ws_gram_3",
                title: "Expressing Obligation and Lack of Time: لازِم / ما بَقْدَر",
                description:
                    "Use 'لازِم' to say 'must / have to' and 'ما بَقْدَر' to say 'I can’t' or 'I am not able'. Examples: 'لازِم أَدْرُس لِلْاِمْتِحان' (I must study for the exam), 'ما بَقْدَر أِشْتِغِل دَوام كامِل وأنا طالِب' (I can’t work full-time while I am a student). You can combine them with time expressions: 'اليوم ما بَقْدَر أِطْلَع، لازِم أَخَلِّص المَشْروع' (Today I can’t go out, I must finish the project).",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "ws_q1",
                    questionAr: "أنا طالْبَة جامْعِيّة وبَشْتِغِل دَوام جُزْئِي.",
                    optionsEn: [
                        "I am a university student and I work part-time.",
                        "I am a school teacher and I work full-time.",
                        "I am a manager and I don’t work.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ws_q2",
                    questionAr: "دَوامي مِن السّاعَة تْنين لَلْخَمْسَة.",
                    optionsEn: [
                        "My shift is from two to five.",
                        "My shift is from five to eight.",
                        "My shift is from ten to two.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ws_q3",
                    questionAr: "لازِم أَدْرُس لِلْمَشْروع وِلْاِمْتِحان.",
                    optionsEn: [
                        "I must study for the project and the exam.",
                        "I don’t want to study for the project and exam.",
                        "I have already finished the project and the exam.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ws_q4",
                    questionAr: "ما بَقْدَر أِشْتِغِل دَوام كامِل هَلَّق.",
                    optionsEn: [
                        "I can work full-time now.",
                        "I can’t work full-time right now.",
                        "I finished working full-time.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "ws_q5",
                    questionAr: "زْميلي في الشُّغُل بيساعِدْني كْثير.",
                    optionsEn: [
                        "My colleague at work helps me a lot.",
                        "My manager doesn’t like my work.",
                        "My teacher gives me a lot of homework.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A is only studying; Student B is studying and working part-time. Compare your weekly schedules. Say when you have lectures, when you work, and when you have 'waqt fāḍi'. Use 'badrus', 'bashtighil', and 'min ... la- ...'.",
                "Student A and B are planning to meet this week. Each has exams, projects, and maybe a job. Negotiate a time to meet using phrases like 'lāzim adrus', 'ma baqdar el-yōm', and 'andī dawam min ... la- ...'.",
                "Student A is asking Student B for advice: they want to start a part-time job while studying. Talk about the advantages and problems. Use words like 'shughl', 'mashrūʿ', 'imtihān', 'waẓīfe', and 'dawām juzʾī'.",
            ],
        },
        homework: {
            instructions:
                "Write 7–8 sentences in Palestinian Arabic about your weekly routine. Say when you study, when you work (or when you help at home), and when you have free time. Use 'badrus', 'bashtighil', 'dawām', 'mashrūʿ', 'imtihān', 'waqt fāḍi', and at least one sentence with 'lāzim' and one with 'ma baqdar'.",
        },
        teacherNotes: {
            warmup: [
                "On the board, draw a simple weekly schedule and ask students in English or simple Arabic what they do each day (study, work, free time).",
                "Elicit words they may already know about work and study (like 'jamʿa', 'shughl') and connect them to the new target vocabulary.",
            ],
            vocabularySteps: [
                "Present job and study-related words in groups: people (ṭālib, muʿallim, muwaẓẓaf), places (jamʿa, madrase, maktab, shirke), and activities (yishtaghal, yidrus, mashrūʿ, imtihān, dawam).",
                "Drill pronunciation and use simple personal questions: 'inta/inti ṭālib/ṭāliba?', 'btdrus wla btishtaghal?', 'wēn btishtaghal?'.",
                "Have students match vocabulary to small schedule icons (book, office, clock) to reinforce meaning visually.",
            ],
            dialogueSteps: [
                "Play or read the dialogue once for general understanding; ask a few comprehension questions (Who works? Where does she work? What is hard for her?).",
                "Have students act out the dialogue in pairs, then personalize it by changing the study major, the work type, and the hours.",
                "Highlight examples of 'badrus', 'bashtighil', 'min ... la- ...', 'lāzim', and 'ma baqdar' directly in the dialogue and ask students to notice the patterns.",
            ],
            practiceTips: [
                "Use the quiz sentences as listening items: read the Arabic and let students choose the correct English answer without looking at the text first.",
                "For role-plays, encourage students to use their real schedules. Walk around, note good examples of language, and share them with the class afterward.",
            ],
            wrapup: [
                "Ask a few students to summarize their week in 3–4 sentences using 'badrus', 'bashtighil', and at least one 'lāzim' sentence.",
                "Finish with a quick chain activity: each student says one sentence about their work/study, the next student repeats it and adds one more sentence.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_HEALTH]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Health & Emergencies",
            lessonTitle: "Unit 1 – Health & Emergencies",
        },
        overview: {
            title: "Unit 2 – Health & Emergencies",
            description:
                "In this lesson, students talk about feeling sick, describing symptoms, visiting the clinic or hospital, and basic emergency situations in Palestinian Arabic.",
            goals: [
                "Describe common symptoms like headache, stomachache, fever, and dizziness.",
                "Ask for and give simple health information at a clinic or pharmacy.",
                "Use patterns like 'raasi bijaʿni' and 'maʿi bard' to talk about pain and illness.",
                "Understand and use key emergency words like ambulance, accident, and emergency room.",
                "Follow and give simple advice using 'lāzim' and basic conditionals (ʔiza...).",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "he_core_1",
                    ar: "صِحّة",
                    en: "health",
                    hint: "General word for health",
                    exampleAr: "الصِّحّة أَهَمّ إِشي بِالحَياة.",
                    exampleEn: "Health is the most important thing in life.",
                },
                {
                    id: "he_core_2",
                    ar: "مَريض / مَريضَة",
                    en: "sick person / patient (m/f)",
                    hint: "Someone who is ill or a patient at the clinic",
                    exampleAr: "المَريض لازم يِرْتاح كَم يَوم.",
                    exampleEn: "The patient needs to rest for a few days.",
                },
                {
                    id: "he_core_3",
                    ar: "تَعْبان / تَعْبانَة",
                    en: "tired, unwell (m/f)",
                    hint: "Can mean physically tired or not feeling well",
                    exampleAr: "حاسِس حالي تَعْبان اليوم.",
                    exampleEn: "I feel unwell today.",
                },
                {
                    id: "he_core_4",
                    ar: "مُسْتَشْفَى",
                    en: "hospital",
                    hint: "Place for serious health problems or emergencies",
                    exampleAr: "خَدّوه عَالمُسْتَشْفَى بَعْد الحادِث.",
                    exampleEn: "They took him to the hospital after the accident.",
                },
                {
                    id: "he_core_5",
                    ar: "عِيادَة",
                    en: "clinic / doctor’s office",
                    hint: "Smaller than a hospital",
                    exampleAr: "في عِيادَة جامْعِيّة جَوّا الجامْعَة.",
                    exampleEn: "There is a university clinic inside the campus.",
                },
                {
                    id: "he_core_6",
                    ar: "دْكتور / دْكتورَة",
                    en: "doctor (m/f)",
                    hint: "Medical doctor",
                    exampleAr: "الدْكتور حَكَت إنّو مِش شِي خَطير.",
                    exampleEn: "The doctor said it’s nothing serious.",
                },
                {
                    id: "he_core_7",
                    ar: "مُمَرِّض / مُمَرِّضَة",
                    en: "nurse (m/f)",
                    hint: "Nurse in hospital or clinic",
                    exampleAr: "المُمَرِّضَة أَخَدِت الضَّغِط.",
                    exampleEn: "The nurse took the blood pressure.",
                },
                {
                    id: "he_core_8",
                    ar: "صَيْدَلِيّة",
                    en: "pharmacy",
                    hint: "Where you buy medicine",
                    exampleAr: "لازِم نَمُرّ عَالصَّيْدَلِيّة نِشْتِري دَوا.",
                    exampleEn: "We need to pass by the pharmacy to buy medicine.",
                },
                {
                    id: "he_core_9",
                    ar: "دَوا",
                    en: "medicine",
                    hint: "General word for medicine",
                    exampleAr: "بِأخُد الدَّوا مَرّتين في اليوم.",
                    exampleEn: "I take the medicine twice a day.",
                },
                {
                    id: "he_core_10",
                    ar: "حَبّة",
                    en: "pill / tablet",
                    hint: "One piece of medicine",
                    exampleAr: "خُد حَبّة بَعْد الأَكِل.",
                    exampleEn: "Take a pill after food.",
                },
                {
                    id: "he_core_11",
                    ar: "وَجَع",
                    en: "pain, ache",
                    hint: "General word for pain",
                    exampleAr: "في وَجَع قَوي بِضْهَري.",
                    exampleEn: "There is strong pain in my back.",
                },
                {
                    id: "he_core_12",
                    ar: "راسي بيوجَعْني",
                    en: "my head hurts",
                    hint: "Pattern: body-part + bijaʿni",
                    exampleAr: "راسي بيوجَعْني مِن الصُّبِح.",
                    exampleEn: "My head has been hurting since morning.",
                },
                {
                    id: "he_core_13",
                    ar: "بَطْني بيوجَعْني",
                    en: "my stomach hurts",
                    hint: "Same pattern for stomach",
                    exampleAr: "بَطْني بيوجَعْني بَعْد الأَكِل.",
                    exampleEn: "My stomach hurts after eating.",
                },
                {
                    id: "he_core_14",
                    ar: "ضَهْري بيوجَعْني",
                    en: "my back hurts",
                    hint: "Same pattern for back",
                    exampleAr: "ضَهْري بيوجَعْني لَمّا أُقْعُد كْتير.",
                    exampleEn: "My back hurts when I sit for a long time.",
                },
                {
                    id: "he_core_15",
                    ar: "حَرارَة / سُخونَة",
                    en: "fever",
                    hint: "High temperature",
                    exampleAr: "حاسِس في حَرارَة، جِسْمي سُخن.",
                    exampleEn: "I feel feverish, my body is hot.",
                },
                {
                    id: "he_core_16",
                    ar: "بَرِد / نَزْلَة بَرِد",
                    en: "a cold",
                    hint: "Common cold / catching a cold",
                    exampleAr: "مَعِي بَرِد مِن بَارِحَة.",
                    exampleEn: "I’ve had a cold since yesterday.",
                },
                {
                    id: "he_core_17",
                    ar: "إِنْفْلُوِنْزا",
                    en: "flu",
                    hint: "Stronger than a simple cold",
                    exampleAr: "الدْكتور حَكالها إنّو مَعْها إِنْفْلُوِنْزا.",
                    exampleEn: "The doctor told her she has the flu.",
                },
                {
                    id: "he_core_18",
                    ar: "كُحَّة",
                    en: "cough",
                    hint: "Cough (noun)",
                    exampleAr: "الكُحَّة ما راضْيِة تِرَوِّح.",
                    exampleEn: "The cough is not going away.",
                },
                {
                    id: "he_core_19",
                    ar: "رَشَح",
                    en: "runny nose / cold",
                    hint: "Often used for cold, runny nose",
                    exampleAr: "عِنْدي رَشَح وَأَنْفِي مْسَدود.",
                    exampleEn: "I have a cold and my nose is blocked.",
                },
                {
                    id: "he_core_20",
                    ar: "دُوخَة",
                    en: "dizziness",
                    hint: "Feeling of spinning / lightheaded",
                    exampleAr: "حَسّ حالُه في دُوخَة لَمّا وِقِف.",
                    exampleEn: "He felt dizzy when he stood up.",
                },
                {
                    id: "he_core_21",
                    ar: "مِغْمَى عَلَيْه",
                    en: "unconscious / fainted (m.)",
                    hint: "Used in emergencies",
                    exampleAr: "الشَّب مِغْمَى عَلَيْه عَلأَرْض.",
                    exampleEn: "The guy is unconscious on the ground.",
                },
                {
                    id: "he_core_22",
                    ar: "إِسْعاف",
                    en: "ambulance / first aid",
                    hint: "Ambulance car or emergency medical help",
                    exampleAr: "اتَّصِل بالإِسْعاف إذا الحَالِة خَطيرَة.",
                    exampleEn: "Call an ambulance if the situation is serious.",
                },
                {
                    id: "he_core_23",
                    ar: "قِسْم طَوارِئ",
                    en: "emergency room",
                    hint: "Emergency department in a hospital",
                    exampleAr: "وَدّوه عَـقِسْم طَوارِئ بَسِرْعَة.",
                    exampleEn: "They took him quickly to the emergency room.",
                },
                {
                    id: "he_core_24",
                    ar: "حادِث",
                    en: "accident",
                    hint: "Traffic accident or other incident",
                    exampleAr: "صار حادِث قُرُب الجامْعَة.",
                    exampleEn: "There was an accident near the university.",
                },
                {
                    id: "he_core_25",
                    ar: "جُرْح",
                    en: "wound / injury",
                    hint: "Cut or open wound",
                    exampleAr: "الجُرْح مِش عَميق، بَس لازِم تَنْظيف.",
                    exampleEn: "The wound isn’t deep, but it needs cleaning.",
                },
                {
                    id: "he_core_26",
                    ar: "بِيِنزِف",
                    en: "he is bleeding",
                    hint: "Present tense used in emergencies",
                    exampleAr: "إِيدُه بِيِنزِفَت دَم كْتير.",
                    exampleEn: "His hand is bleeding a lot.",
                },
                {
                    id: "he_core_27",
                    ar: "ما بَقْدَر أَتْنَفَّس مْنيح",
                    en: "I can’t breathe well",
                    hint: "Breathing problem, emergency symptom",
                    exampleAr: "بِحِسّ إنّو ما بَقْدَر أَتْنَفَّس مْنيح.",
                    exampleEn: "I feel like I can’t breathe well.",
                },
                {
                    id: "he_core_28",
                    ar: "ضَغِط",
                    en: "blood pressure",
                    hint: "Also used for stress context",
                    exampleAr: "اليوم الضَّغِط عَندُه عالي.",
                    exampleEn: "Today his blood pressure is high.",
                },
                {
                    id: "he_core_29",
                    ar: "سُكَّر",
                    en: "diabetes / sugar level",
                    hint: "Illness or blood sugar",
                    exampleAr: "جَدّي مَعُه سُكَّر ولازِم يِنْتَبِه عَالْأَكِل.",
                    exampleEn: "My grandfather has diabetes and has to watch his food.",
                },
                {
                    id: "he_core_30",
                    ar: "حَساسيّة",
                    en: "allergy",
                    hint: "Allergic reaction",
                    exampleAr: "عِنْدي حَساسيّة مِن شِيَة أَدْوِيَة.",
                    exampleEn: "I have an allergy to some medicines.",
                },
                {
                    id: "he_core_31",
                    ar: "مَغَص",
                    en: "cramp / stomach pain",
                    hint: "Stomach cramp",
                    exampleAr: "مَغَص البَطن مْزْعِج كْتير.",
                    exampleEn: "Stomach cramps are very uncomfortable.",
                },
                {
                    id: "he_core_32",
                    ar: "إِبْرَة",
                    en: "injection / shot",
                    hint: "Needle injection",
                    exampleAr: "مُمْكِن تَأْخُد إِبْرَة لِتِنْزيل الحَرارَة.",
                    exampleEn: "You can take an injection to bring the fever down.",
                },
                {
                    id: "he_core_33",
                    ar: "مَوْعِد",
                    en: "appointment",
                    hint: "Time booked with a doctor or clinic",
                    exampleAr: "عندي مَوْعِد عَالساعة تْلاتَة.",
                    exampleEn: "I have an appointment at three o’clock.",
                },
                {
                    id: "he_core_34",
                    ar: "نَتيجَة الفَحْص",
                    en: "test result",
                    hint: "Result of blood test / lab test",
                    exampleAr: "نَتيجَة الفَحْص بِتْطْلَع بُكْرَة.",
                    exampleEn: "The test result comes out tomorrow.",
                },
                {
                    id: "he_core_35",
                    ar: "تَأْمِين صِحّي",
                    en: "health insurance",
                    hint: "Insurance for medical costs",
                    exampleAr: "التَّأْمِين الصِّحّي بِيغَطّي المُسْتَشْفَى.",
                    exampleEn: "The health insurance covers the hospital.",
                },
            ],
            extra: [
                {
                    id: "he_extra_1",
                    ar: "أَعْراض",
                    en: "symptoms",
                    hint: "Signs of illness",
                    exampleAr: "شُو الأَعْراض إلّي حاسِس فيها؟",
                    exampleEn: "What symptoms are you feeling?",
                },
                {
                    id: "he_extra_2",
                    ar: "تَنَفُّس عَميق",
                    en: "deep breathing",
                    hint: "Used in calming / first aid",
                    exampleAr: "خُد تَنَفُّس عَميق شْوي شْوي.",
                    exampleEn: "Take a deep breath slowly.",
                },
                {
                    id: "he_extra_3",
                    ar: "مُسَكِّن",
                    en: "painkiller",
                    hint: "Medicine to reduce pain",
                    exampleAr: "أَعْطُوه مُسَكِّن خَفيف لِلْوَجَع.",
                    exampleEn: "They gave him a mild painkiller for the pain.",
                },
                {
                    id: "he_extra_4",
                    ar: "مُراجَعَة",
                    en: "follow-up visit",
                    hint: "Check-up after first visit",
                    exampleAr: "الدْكتور حَكَى يِرْجَع عَالمُراجَعَة بَعْد أُسْبوع.",
                    exampleEn: "The doctor said he should come back for a follow-up after a week.",
                },
                {
                    id: "he_extra_5",
                    ar: "مَنْع طِبّي",
                    en: "medical restriction",
                    hint: "Not allowed because of health",
                    exampleAr: "عِنْدُه مَنْع طِبّي مِن الرِّياضَة القَوِيّة.",
                    exampleEn: "He has a medical restriction from intense sports.",
                },
                {
                    id: "he_extra_6",
                    ar: "حالَة خَطيرَة",
                    en: "serious condition",
                    hint: "Used for strong emergencies",
                    exampleAr: "إذا الحالَة خَطيرَة، اتَّصِل طَوالي بالإِسْعاف.",
                    exampleEn: "If it’s a serious condition, call the ambulance immediately.",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "يا مِنى، وَجْهَك مِش مْريِح، كِيف حاسّة حالِك؟",
                    en: "Mina, you don’t look well, how are you feeling?",
                },
                {
                    speaker: "B",
                    ar: "صِراحةً تَعْبانَة، راسي بيوجَعْني كْتير.",
                    en: "Honestly, I’m tired, my head hurts a lot.",
                },
                {
                    speaker: "A",
                    ar: "مِن أَمْتَى بادي الوَجَع؟",
                    en: "Since when did the pain start?",
                },
                {
                    speaker: "B",
                    ar: "مِن بَارِحَة المَسَا، ومعي شْوَيِّة كُحَّة وَرَشَح.",
                    en: "Since last night, and I have a bit of cough and a runny nose.",
                },
                {
                    speaker: "A",
                    ar: "قِسْتِي الحَرارَة؟ حاسّة في سُخونَة؟",
                    en: "Did you take your temperature? Do you feel feverish?",
                },
                {
                    speaker: "B",
                    ar: "إي، حَرارتي طالْعَة شْوَي، جِسْمي سُخن.",
                    en: "Yes, my temperature is a bit high, my body is hot.",
                },
                {
                    speaker: "A",
                    ar: "ما بِنْصَح تِضَلّي هيك، خَلِّينا نِنْزِل عَالعِيادَة الجَامْعِيّة.",
                    en: "I don’t advise you to stay like this, let’s go down to the university clinic.",
                },
                {
                    speaker: "B",
                    ar: "هَلَّق عِنّا مُحاضَرَة، ما بَقْدَر أَفَوِّتْها.",
                    en: "We have a lecture now, I can’t miss it.",
                },
                {
                    speaker: "A",
                    ar: "صِحِّتِك أَهَمّ، إذا حالْتِك ساءَت بيصير خَطير.",
                    en: "Your health is more important, if your condition gets worse it could be serious.",
                },
                {
                    speaker: "B",
                    ar: "مَعِك حَق، يَلّا نِروح عَالعِيادَة.",
                    en: "You’re right, let’s go to the clinic.",
                },
                {
                    speaker: "A",
                    ar: "شُوفي، هون مَكْتوب: عِيادَة الطّالِبين، مِنِفُوت؟",
                    en: "Look, here it says: Student clinic, shall we go in?",
                },
                {
                    speaker: "B",
                    ar: "إي، بِس نِسْأَل أَوَّل عَن المَوْعِد.",
                    en: "Yes, but let’s first ask about the appointment.",
                },
                {
                    speaker: "Nurse",
                    ar: "مَسّا الخير، شُو المُشْكِلَة؟",
                    en: "Good afternoon, what’s the problem?",
                },
                {
                    speaker: "A",
                    ar: "صاحْبْتي تَعْبانَة، راسْها بيوجَعْها ومعها حَرارَة.",
                    en: "My friend is unwell, her head hurts and she has a fever.",
                },
                {
                    speaker: "Nurse",
                    ar: "حَسَب الأَسْماء، في قُدّامْكُم طالِب واحِد بَس، اِسْتَنّوا شْوَي.",
                    en: "According to the list, there’s only one student before you, please wait a bit.",
                },
                {
                    speaker: "B",
                    ar: "حسّيت فَجْأَة بِدُوخَة شْوَي…",
                    en: "I suddenly felt a bit dizzy…",
                },
                {
                    speaker: "A",
                    ar: "إِقْعُدي هون وخُدي تَنَفُّس عَميق، إذا حَسّيتي حالِك مِغْمَى عَلَيْك بِنادِي الإِسْعاف.",
                    en: "Sit here and take deep breaths; if you feel like you’re going to faint I’ll call the ambulance.",
                },
                {
                    speaker: "Nurse",
                    ar: "تْفَضَّلي، هَلَّق دَوْرِك عَالدْكتور.",
                    en: "Come in, it’s your turn to see the doctor.",
                },
                {
                    speaker: "Doctor",
                    ar: "مَسّا الخير، اِحْكيلي شْو الأَعْراض إلّي عِنْدِك.",
                    en: "Good afternoon, tell me what symptoms you have.",
                },
                {
                    speaker: "B",
                    ar: "راسي بيوجَعْني، معي كُحَّة وَرَشَح، وحاسّة في حَرارَة.",
                    en: "My head hurts, I have a cough and runny nose, and I feel feverish.",
                },
                {
                    speaker: "Doctor",
                    ar: "في وَجَع بِالبَطْن أَو مَغَص؟ في مَشاكِل بِالتَّنَفُّس؟",
                    en: "Any stomach pain or cramps? Any breathing problems?",
                },
                {
                    speaker: "B",
                    ar: "لا، بَس تَعَب وَوَجَع راس، ما في مَشْكِلَة بِالتَّنَفُّس.",
                    en: "No, just tiredness and a headache, no problem with breathing.",
                },
                {
                    speaker: "Doctor",
                    ar: "حَسَب الحَرارَة والأَعْراض، شَكْلُه نَزْلَة بَرِد قَوِيّة أَو إِنْفْلُوِنْزا خَفيفَة.",
                    en: "From the temperature and symptoms, it looks like a strong cold or a mild flu.",
                },
                {
                    speaker: "Doctor",
                    ar: "لازِم تِرْتاحي كَم يَوم، تِشْرَبي ميّ وَسَوائِل دافْيِة وَتَأْخُدي مُسَكِّن وَدَوا للكُحَّة.",
                    en: "You need to rest for a few days, drink water and warm fluids, and take a painkiller and cough medicine.",
                },
                {
                    speaker: "B",
                    ar: "دْكتور، بِقْدَر أِكَمِّل مُحاضَراتي اليوْم؟",
                    en: "Doctor, can I continue my lectures today?",
                },
                {
                    speaker: "Doctor",
                    ar: "أَحْسَن إنِّك تِرْوحي عَالبَيْت اليوم، الجِسِم بِحْتاج رَاحَة.",
                    en: "It’s better if you go home today, your body needs rest.",
                },
                {
                    speaker: "Doctor",
                    ar: "إذا حَسّيتي إنّو الحَرارَة طالْعَة كْتير أَو ما بَقْدَر تِتْنَفَّسي مْنيح، لازم تْروحي عَطَوارِئ أَو تِتَّصْلي بالإِسْعاف.",
                    en: "If you feel your fever is very high or you can’t breathe well, you must go to the emergency room or call an ambulance.",
                },
                {
                    speaker: "B",
                    ar: "طَيِّب، بِسَوّي مِثْل ما حَكَيت.",
                    en: "Okay, I’ll do as you said.",
                },
                {
                    speaker: "Doctor",
                    ar: "هاي الوَصْفَة، بتِقْدَري تَصْرْفي الدَّوا مِن أَيّ صَيْدَلِيّة.",
                    en: "Here’s the prescription, you can get the medicine from any pharmacy.",
                },
                {
                    speaker: "A",
                    ar: "شُو حَكَالك الدْكتور؟ الأُمور مُطَمْئِنَة؟",
                    en: "What did the doctor tell you? Is everything reassuring?",
                },
                {
                    speaker: "B",
                    ar: "حَكى إنّو شَكْلُه بَرِد أَو إِنْفْلُوِنْزا، ولازِم رَاحَة وَدَوا.",
                    en: "He said it looks like a cold or flu, and I need rest and medicine.",
                },
                {
                    speaker: "A",
                    ar: "يَلّا نِمُرّ عَالصَّيْدَلِيّة، بَعْدين بَوَصِّلِك عَالبَيْت.",
                    en: "Let’s pass by the pharmacy, then I’ll take you home.",
                },
                {
                    speaker: "B",
                    ar: "مِشْكُورَة كْتير، عنْجَد ساعَدْتيني اليوم.",
                    en: "Thank you so much, you really helped me today.",
                },
                {
                    speaker: "A",
                    ar: "وَلا يِهُمِّك، المُهِم تْحِسِّي أَحْسَن، وإذا صار إِشي طارِئ اتَّصْلي فيّي طَوالي.",
                    en: "Don’t mention it, the important thing is that you feel better; if anything urgent happens call me immediately.",
                },
            ],
        },
        grammar: [
            {
                id: "he_gram_1",
                title: "Talking About Pain with بيوجَعْني",
                description:
                    "To say that a part of your body hurts, use the pattern: body part + 'بيوجَعْني'. For example: 'راسي بيوجَعْني' (my head hurts), 'بَطْني بيوجَعْني' (my stomach hurts), 'ضَهْري بيوجَعْني' (my back hurts). You can add time: 'راسي بيوجَعْني مِن الصّْبِح' (my head has been hurting since morning).",
            },
            {
                id: "he_gram_2",
                title: "Using مَعِي to Talk About Illnesses (مَعِي بَرِد، مَعْهُ سُكَّر)",
                description:
                    "In Palestinian Arabic, we often use 'مَعِي / مَعْهُ / مَعْها' to say we have an illness: 'مَعِي بَرِد' (I have a cold), 'مَعِي إِنْفْلُوِنْزا' (I have the flu), 'جَدّي مَعُه سُكَّر' (my grandfather has diabetes). This pattern is very common for chronic or temporary health conditions.",
            },
            {
                id: "he_gram_3",
                title: "Giving Advice in Health Situations: لازِم / أَحْسَن إنَّك / إِذا...",
                description:
                    "To give advice, you can use 'لازِم' (must) and 'أَحْسَن إنَّك...' (it’s better if you...). For example: 'لازِم تِرْتاح كَم يَوم' (you must rest for a few days), 'أَحْسَن إنَّك تِرْوحي عَالدكتور' (it’s better if you go to the doctor). For emergencies, combine this with 'إِذا': 'إِذا ما بَقْدَر تِتْنَفَّس مْنيح، لازم تِتَّصِل بالإِسْعاف' (if you can’t breathe well, you must call an ambulance).",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "he_q1",
                    questionAr: "راسي بيوجَعْني ومَعِي حَرارَة.",
                    optionsEn: [
                        "My head hurts and I have a fever.",
                        "My back hurts and I feel cold.",
                        "My stomach hurts and I am hungry.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "he_q2",
                    questionAr: "مَعِي بَرِد ورَشَح مِن بَارِحَة.",
                    optionsEn: [
                        "I have a cold and runny nose since yesterday.",
                        "I have a backache since yesterday.",
                        "I have an appointment at the clinic since yesterday.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "he_q3",
                    questionAr: "إذا الحالَة خَطيرَة، لازم تِتَّصِل بالإِسْعاف.",
                    optionsEn: [
                        "If the condition is serious, you must call an ambulance.",
                        "If the condition is serious, you must go to work.",
                        "If the condition is serious, you must take a break from exams.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "he_q4",
                    questionAr: "المُمَرِّضَة أَخَدِت الضَّغِط في المُسْتَشْفَى.",
                    optionsEn: [
                        "The nurse took the blood pressure in the hospital.",
                        "The doctor gave a shot in the pharmacy.",
                        "The student measured the temperature at home.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "he_q5",
                    questionAr: "نَتيجَة الفَحْص بِتْطْلَع بُكْرَة.",
                    optionsEn: [
                        "The test result comes out tomorrow.",
                        "The medicine finishes tomorrow.",
                        "The appointment is tomorrow morning.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A doesn’t feel well (headache, fever, cough). Student B is a friend. A describes the symptoms using 'raasi bijaʿni', 'maʿi bard', 'ma baqdar atnaffas mniḥ', and B gives simple advice using 'lāzim' and 'aḥsan innak/innik...'.",
                "Student A is at the university clinic, Student B is the nurse. Ask and answer about symptoms, take 'ḍaghit', and decide if it’s necessary to go to 'muʿstashfa' or just take medicine and rest.",
                "Student A witnesses a small accident near campus; Student B is on the phone at 'isʿāf'. A describes what happened (jūruḥ, yinzif, ma baqdar yatnaffas), and B asks short questions and says what A should do until the ambulance arrives.",
            ],
        },
        homework: {
            instructions:
                "Write 7–8 sentences in Palestinian Arabic describing a health situation (real or imaginary). Say what the symptoms are (for example: راسي بيوجَعْني، مَعِي بَرِد، مَعِي حَرارَة), what you did (رُحْت عَالعِيادَة، أَخَدِت دَوا، رِحْت عَالمُسْتَشْفَى), and what advice the doctor gave you using 'لازِم' أو 'أَحْسَن إنَّك...'.",
        },
        teacherNotes: {
            warmup: [
                "Show pictures/icons of a hospital, clinic, pharmacy, ambulance, and ask students in English or simple Arabic what they think each place is used for.",
                "Ask students if they ever went to a clinic or hospital and why (only if they are comfortable sharing), then connect their stories to key words like 'marīḍ', 'muʿstashfa', 'ʿiyāde'.",
            ],
            vocabularySteps: [
                "Present health words in small groups: places (muʿstashfa, ʿiyāde, ṣaydaliyye), people (daktūr, mumarriḍ), and symptoms (wajaʿ, rāsi bijaʿni, ḥarāra, dūkha, rashah).",
                "Use simple questions like 'šū biwjaʿak?' and 'maʿak bard wla ḥarāra?' and let students answer with full short sentences.",
                "Drill the patterns 'X bijaʿni' and 'maʿi...' so students can talk about their own symptoms easily.",
            ],
            dialogueSteps: [
                "Play or read the dialogue once with no interruption, then ask basic comprehension questions (What are her symptoms? Where do they go? What does the doctor say?).",
                "Have students act out the dialogue in pairs, then change details (different symptoms, different advice).",
                "Highlight the advice language 'lāzim...', 'aḥsan innak...', and the conditional 'iza...' and ask students to find examples in the text.",
            ],
            practiceTips: [
                "Use the quiz items as listening: read the Arabic sentence, students choose or say the correct meaning in English.",
                "For role-plays, remind students to reuse vocabulary and grammar: symptoms with 'bijaʿni', illnesses with 'maʿi', and advice with 'lāzim'. Walk around and support weaker pairs.",
            ],
            wrapup: [
                "Ask a few students to describe a short health story (real or imaginary) using at least three of the new words.",
                "End the lesson with a quick game: teacher says an English symptom or place (e.g., 'headache', 'pharmacy') and students race to say the Palestinian Arabic word.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_APARTMENT]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Apartment & Problems",
            lessonTitle: "Unit 3 – Apartment & Problems",
        },
        overview: {
            title: "Unit 3 – Apartment & Problems",
            description:
                "In this lesson, students learn how to describe their apartment, talk about facilities, and explain common problems (water, electricity, broken things) in Palestinian Arabic.",
            goals: [
                "Describe an apartment: rooms, floor, building, and basic furniture.",
                "Use 'fi' and 'ma fi' to talk about what is available or missing in the apartment.",
                "Describe common housing problems using words like 'maksūr', 'kharbān', 'masdūd', 'bikharr mayy'.",
                "Talk to a landlord or building manager to explain problems and ask for repairs politely.",
                "Understand and use everyday vocabulary related to rent, bills, and neighbors.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "ap_core_1",
                    ar: "شِقّة",
                    en: "apartment",
                    hint: "A flat in a building",
                    exampleAr: "بِسْكُن بِشِقّة قَريب مِن الجامْعَة.",
                    exampleEn: "I live in an apartment near the university.",
                },
                {
                    id: "ap_core_2",
                    ar: "غُرْفِة نَوْم",
                    en: "bedroom",
                    hint: "Sleeping room",
                    exampleAr: "الشِّقّة فيها غُرْفِة نَوْم واحْدِة.",
                    exampleEn: "The apartment has one bedroom.",
                },
                {
                    id: "ap_core_3",
                    ar: "صالون",
                    en: "living room",
                    hint: "Sitting room for guests and family",
                    exampleAr: "بِنِقْعُد بِالصّالون نِتْفَرَّج عَالتِّلْفِزْيون.",
                    exampleEn: "We sit in the living room and watch TV.",
                },
                {
                    id: "ap_core_4",
                    ar: "مَطْبَخ",
                    en: "kitchen",
                    hint: "Room for cooking",
                    exampleAr: "مَطْبَخ الشِّقّة صْغير بَس مُرَتَّب.",
                    exampleEn: "The apartment’s kitchen is small but tidy.",
                },
                {
                    id: "ap_core_5",
                    ar: "حَمّام",
                    en: "bathroom",
                    hint: "Bathroom / toilet",
                    exampleAr: "الحَمّام في مَشْكِلَة بِالمَيّ.",
                    exampleEn: "There is a water problem in the bathroom.",
                },
                {
                    id: "ap_core_6",
                    ar: "بَلكون / شُرْفَة",
                    en: "balcony",
                    hint: "Outside space of the apartment",
                    exampleAr: "بَحِبّ أَشْرَب قَهْوِة عَالبَلكون.",
                    exampleEn: "I like to drink coffee on the balcony.",
                },
                {
                    id: "ap_core_7",
                    ar: "طابِق",
                    en: "floor (1st, 2nd...)",
                    hint: "Level in the building",
                    exampleAr: "الشِّقّة عَالطّابِق التّالِت.",
                    exampleEn: "The apartment is on the third floor.",
                },
                {
                    id: "ap_core_8",
                    ar: "عِمارَة",
                    en: "building",
                    hint: "The whole building",
                    exampleAr: "العِمارَة قَديمَة بَس نْضيفَة.",
                    exampleEn: "The building is old but clean.",
                },
                {
                    id: "ap_core_9",
                    ar: "جار / جارَة",
                    en: "neighbor (m/f)",
                    hint: "Someone who lives next door or nearby",
                    exampleAr: "جيرانّا طَيِّبين بَس صَوْتهم عالي أَحْيانا.",
                    exampleEn: "Our neighbors are nice but sometimes loud.",
                },
                {
                    id: "ap_core_10",
                    ar: "صاحِب البَيْت",
                    en: "landlord / owner",
                    hint: "Owner of the apartment",
                    exampleAr: "صاحِب البَيْت ساكِن في نَفْس العِمارَة.",
                    exampleEn: "The landlord lives in the same building.",
                },
                {
                    id: "ap_core_11",
                    ar: "إيجار",
                    en: "rent",
                    hint: "Money paid every month for the apartment",
                    exampleAr: "إيجار الشِّقّة غالي شْوَي.",
                    exampleEn: "The apartment’s rent is a bit expensive.",
                },
                {
                    id: "ap_core_12",
                    ar: "فاتورَة",
                    en: "bill",
                    hint: "General word, often for utilities",
                    exampleAr: "لازِم أَدْفَع فاتورَة الشَّهِر هادا.",
                    exampleEn: "I have to pay this month’s bill.",
                },
                {
                    id: "ap_core_13",
                    ar: "فاتورَة كَهْرَبا",
                    en: "electricity bill",
                    hint: "Monthly bill",
                    exampleAr: "فاتورَة الكَهْرَبا طِلْعِت عالْعادَة أَكْتَر.",
                    exampleEn: "The electricity bill came higher than usual.",
                },
                {
                    id: "ap_core_14",
                    ar: "فاتورَة مَيّ",
                    en: "water bill",
                    hint: "Bill for water",
                    exampleAr: "فاتورَة المَيّ مِش مَشْمُولَة بِالإيجار.",
                    exampleEn: "The water bill is not included in the rent.",
                },
                {
                    id: "ap_core_15",
                    ar: "مِفْتاح",
                    en: "key",
                    hint: "Key for door, etc.",
                    exampleAr: "نِسيت المِفْتاح جُوّا الشِّقّة.",
                    exampleEn: "I forgot the key inside the apartment.",
                },
                {
                    id: "ap_core_16",
                    ar: "باب",
                    en: "door",
                    hint: "Door of the room or apartment",
                    exampleAr: "باب البَلكون مِش مْسَكَّر مْنيح.",
                    exampleEn: "The balcony door doesn’t close well.",
                },
                {
                    id: "ap_core_17",
                    ar: "شُبّاك",
                    en: "window",
                    hint: "Window of a room",
                    exampleAr: "الشُّبّاك مَكْسور وبدّه تَصْلِيح.",
                    exampleEn: "The window is broken and needs repair.",
                },
                {
                    id: "ap_core_18",
                    ar: "مَيّ",
                    en: "water",
                    hint: "Tap water / water in general",
                    exampleAr: "المَيّ بِتِنْقِط مِن السَّقْف.",
                    exampleEn: "Water is dripping from the ceiling.",
                },
                {
                    id: "ap_core_19",
                    ar: "كَهْرَبا",
                    en: "electricity",
                    hint: "Power in the house",
                    exampleAr: "الكَهْرَبا بِتِنْقِطِع كْثير بِهالْمَنطِقَة.",
                    exampleEn: "The electricity cuts off a lot in this area.",
                },
                {
                    id: "ap_core_20",
                    ar: "غَسّالِة",
                    en: "washing machine",
                    hint: "Machine for clothes",
                    exampleAr: "غَسّالِة الشِّقّة خَرْبانِة هالأَيام.",
                    exampleEn: "The apartment’s washing machine is broken these days.",
                },
                {
                    id: "ap_core_21",
                    ar: "تَلّاجَة",
                    en: "fridge",
                    hint: "Refrigerator",
                    exampleAr: "التَّلّاجَة مَش مْبَرِّدَة مْنيح.",
                    exampleEn: "The fridge is not cooling well.",
                },
                {
                    id: "ap_core_22",
                    ar: "غَاز",
                    en: "gas (for cooking)",
                    hint: "Gas cylinder or gas line",
                    exampleAr: "قِنّينِة الغَاز فاضيِة، لازم نِغَيِّرْها.",
                    exampleEn: "The gas cylinder is empty, we need to change it.",
                },
                {
                    id: "ap_core_23",
                    ar: "فُرْن",
                    en: "oven",
                    hint: "For baking, cooking",
                    exampleAr: "الفُرْن الكَهْرَبا خَرْبان اليوم.",
                    exampleEn: "The electric oven is broken today.",
                },
                {
                    id: "ap_core_24",
                    ar: "سَخّان مَيّ",
                    en: "water heater",
                    hint: "Heater for shower water",
                    exampleAr: "السَّخّان مَش شَغّال، المَيّ بارْدِة.",
                    exampleEn: "The water heater is not working, the water is cold.",
                },
                {
                    id: "ap_core_25",
                    ar: "مِكيّف",
                    en: "air conditioner",
                    hint: "AC unit",
                    exampleAr: "المِكيّف بِطَفّي لَمّا نِشَغِّل غَسّالِة.",
                    exampleEn: "The AC turns off when we turn on the washing machine.",
                },
                {
                    id: "ap_core_26",
                    ar: "مَغْسَلِة",
                    en: "sink (bathroom or kitchen)",
                    hint: "Basin for water",
                    exampleAr: "المَغْسَلِة في الحَمّام مَسْدودَة.",
                    exampleEn: "The bathroom sink is blocked.",
                },
                {
                    id: "ap_core_27",
                    ar: "حَنَفِيّة",
                    en: "tap / faucet",
                    hint: "Water tap",
                    exampleAr: "الحَنَفِيّة بْتِخَرّ مَيّ طول الليل.",
                    exampleEn: "The tap drips water all night.",
                },
                {
                    id: "ap_core_28",
                    ar: "مَسْدود",
                    en: "blocked / clogged",
                    hint: "Used for sink, toilet, etc.",
                    exampleAr: "المَجْرى مَسْدود وبَدّه تَنْظيف.",
                    exampleEn: "The drain is blocked and needs cleaning.",
                },
                {
                    id: "ap_core_29",
                    ar: "بِيخَرّ مَيّ",
                    en: "it leaks water",
                    hint: "Used for tap, pipe, ceiling",
                    exampleAr: "السَّقْف بِيخَرّ مَيّ لَمّا تِمْطُر.",
                    exampleEn: "The ceiling leaks when it rains.",
                },
                {
                    id: "ap_core_30",
                    ar: "مَكْسور",
                    en: "broken",
                    hint: "Physically broken (glass, door, window)",
                    exampleAr: "الشُّبّاك مَكْسور بِنُصّه.",
                    exampleEn: "The window is broken in the middle.",
                },
                {
                    id: "ap_core_31",
                    ar: "خَرْبان",
                    en: "not working / out of order",
                    hint: "Device that doesn’t work",
                    exampleAr: "الأسانْسير خَرْبان من أُسْبوع.",
                    exampleEn: "The elevator has been out of order for a week.",
                },
                {
                    id: "ap_core_32",
                    ar: "ضَوّ",
                    en: "light",
                    hint: "Electric light / lamp",
                    exampleAr: "في ضَوّ مِش شَغّال بِالْمَمَرّ.",
                    exampleEn: "There is a light not working in the hallway.",
                },
                {
                    id: "ap_core_33",
                    ar: "مِصْعَد / أسانْسير",
                    en: "elevator",
                    hint: "Lift in the building",
                    exampleAr: "المِصْعَد بْوِقَّف بِنُصّ الطّابِق أَحْيانًا.",
                    exampleEn: "The elevator sometimes stops between floors.",
                },
                {
                    id: "ap_core_34",
                    ar: "دَرَج",
                    en: "stairs",
                    hint: "Staircase",
                    exampleAr: "لَمّا الأسانْسير خَرْبان، نِطْلَع عَالدَّرَج.",
                    exampleEn: "When the elevator is broken, we go up by the stairs.",
                },
                {
                    id: "ap_core_35",
                    ar: "صَوْت عالي",
                    en: "loud noise",
                    hint: "Used for neighbors, street, etc.",
                    exampleAr: "في صَوْت عالي مِن الجيران بِاللَّيْل.",
                    exampleEn: "There is loud noise from the neighbors at night.",
                },
            ],
            extra: [
                {
                    id: "ap_extra_1",
                    ar: "عَقْد إيجار",
                    en: "rental contract",
                    hint: "Paper that explains rules and rent",
                    exampleAr: "عَقْد الإيجار مَكْتوب فيه كُل الشُّروط.",
                    exampleEn: "All the conditions are written in the rental contract.",
                },
                {
                    id: "ap_extra_2",
                    ar: "شَكْوَى",
                    en: "complaint",
                    hint: "Formal complaint",
                    exampleAr: "مُمْكِن نِقَدِّم شَكْوَى عَن الصَّوْت العالي.",
                    exampleEn: "We can file a complaint about the loud noise.",
                },
                {
                    id: "ap_extra_3",
                    ar: "حارِس العِمارَة",
                    en: "building guard / caretaker",
                    hint: "Person who takes care of building",
                    exampleAr: "حارِس العِمارَة بِفَتِّح الباب وَبْيِنَظِّف الدَّرَج.",
                    exampleEn: "The building guard opens the door and cleans the stairs.",
                },
                {
                    id: "ap_extra_4",
                    ar: "رُطوبَة",
                    en: "humidity / damp",
                    hint: "Moisture on walls",
                    exampleAr: "في رُطوبَة عَالحِيط بِغُرْفِة النَّوْم.",
                    exampleEn: "There is damp on the wall in the bedroom.",
                },
                {
                    id: "ap_extra_5",
                    ar: "تِدْفِئَة",
                    en: "heating",
                    hint: "System for warming the house",
                    exampleAr: "ما في تِدْفِئَة مْنيحَة بِالشِّتْوي.",
                    exampleEn: "There is no good heating in winter.",
                },
                {
                    id: "ap_extra_6",
                    ar: "مِرْوَحَة",
                    en: "fan",
                    hint: "Ceiling or standing fan",
                    exampleAr: "المِرْوَحَة أَسْهَل مِن المِكيّف لَلفاتورَة.",
                    exampleEn: "A fan is easier on the bill than the AC.",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "مَسّا الخير يا خالِد، نِقَلْت عَالشِّقّة الجْديدَة أَخِيرًا!",
                    en: "Good evening, Khaled, I finally moved to the new apartment!",
                },
                {
                    speaker: "B",
                    ar: "مَبْروك! شُو أَخْبار الشِّقّة؟ كْبيرَة وِلّا صْغيرَة؟",
                    en: "Congratulations! How is the apartment? Big or small?",
                },
                {
                    speaker: "A",
                    ar: "مِش كْبيرَة بَس مْنيحَة، فيها غُرْفِة نَوْم واحْدِة، صالون، مَطْبَخ وَحَمّام.",
                    en: "It’s not big but it’s nice; it has one bedroom, a living room, a kitchen and a bathroom.",
                },
                {
                    speaker: "B",
                    ar: "وعِندَك بَلكون كْمان وِلّا لا؟",
                    en: "And do you also have a balcony or not?",
                },
                {
                    speaker: "A",
                    ar: "إي، في بَلكون صْغير عَطَريق الشّارِع الرّئيسي.",
                    en: "Yes, there is a small balcony on the main street.",
                },
                {
                    speaker: "B",
                    ar: "عَأيّ طابِق الشِّقّة؟ العِمارَة في أسانْسير؟",
                    en: "On which floor is the apartment? Does the building have an elevator?",
                },
                {
                    speaker: "A",
                    ar: "عَالطّابِق الرّابِع، وفي مِصْعَد، بَس خَرْبان أَحْيانًا.",
                    en: "On the fourth floor, and there is an elevator, but it’s sometimes out of order.",
                },
                {
                    speaker: "B",
                    ar: "طَيِّب، قَدّيش الإيجار؟ شامِل فاتورَة مَيّ وَكَهْرَبا؟",
                    en: "Okay, how much is the rent? Does it include water and electricity bills?",
                },
                {
                    speaker: "A",
                    ar: "الإيجار خَمِس مِيّة شِكِل، بَس فاتورَة المَيّ وَالكَهْرَبا عَلَيْنا.",
                    en: "The rent is five hundred shekels, but the water and electricity bills are on us.",
                },
                {
                    speaker: "B",
                    ar: "والجيران؟ هاد السُّؤال المُهِم.",
                    en: "And the neighbors? That’s the important question.",
                },
                {
                    speaker: "A",
                    ar: "جارتي اللّي حَدِّي طَيِّبَة، بَس الجار اللّي فَوقنا صَوْته عالي بِاللَّيْل.",
                    en: "My neighbor next door is nice, but the neighbor above us is loud at night.",
                },
                {
                    speaker: "B",
                    ar: "مُمْكِن تِحْكوا مَعُه بِهُدُوء أَو تِحْكوا مَع صاحِب البَيْت.",
                    en: "You can talk to him calmly or talk to the landlord.",
                },
                {
                    speaker: "A",
                    ar: "بِصْراحَة في مَشاكِل تانِيَة جَوّا الشِّقّة.",
                    en: "Honestly, there are other problems inside the apartment.",
                },
                {
                    speaker: "B",
                    ar: "جَدّ؟ مِثْل إيش؟",
                    en: "Really? Like what?",
                },
                {
                    speaker: "A",
                    ar: "المَغْسَلِة في الحَمّام مَسْدودَة، والمَيّ بْتِنْقِط مِن السَّقْف لَمّا أَفَتِّح الحَنَفِيّة.",
                    en: "The sink in the bathroom is blocked and water drips from the ceiling when I open the tap.",
                },
                {
                    speaker: "B",
                    ar: "وَلا مَرّة حَكَيت لِصاحِب البَيْت عَن هالمَشاكِل؟",
                    en: "Have you never told the landlord about these problems?",
                },
                {
                    speaker: "A",
                    ar: "لِأ، كُنِت مَشْغول بِالنَّقْل وَالاِمْتِحانات، بَس لازم أِتِّصِل فيه.",
                    en: "No, I was busy with moving and exams, but I must call him.",
                },
                {
                    speaker: "B",
                    ar: "يَلّا نتِّصِل هَلَّق، أَفْضَل مِن بُكْرَة.",
                    en: "Let’s call him now; better than tomorrow.",
                },
                {
                    speaker: "A",
                    ar: "أُكَيْ، هَيْ بَتِّصِل... أَلو، مَسّا الخير يا أُسْتاذ سامِر، أنا المُسْتَأجِر الجْديد بالشِّقّة الرّابِعَة.",
                    en: "Okay, I’m calling… Hello, good evening Mr. Samer, I’m the new tenant in the fourth-floor apartment.",
                },
                {
                    speaker: "Landlord",
                    ar: "مَسّا النّور، أَهْلًا، أكِيد. شُو الأَخْبار؟ في مَشْكِلَة؟",
                    en: "Good evening, welcome. Sure. What’s up? Is there a problem?",
                },
                {
                    speaker: "A",
                    ar: "إي صَراحَةً، في كَم مَشْكِلَة صْغيرَة: المَغْسَلِة في الحَمّام مَسْدودَة، والحَنَفِيّة بْتِخَرّ مَيّ طول الليل.",
                    en: "Yes honestly, there are a few small problems: the bathroom sink is blocked and the tap leaks water all night.",
                },
                {
                    speaker: "Landlord",
                    ar: "المَيّ بِتْوَقَّف تامًّا أَو بَس ضَعيفَة؟",
                    en: "Does the water stop completely or is it just weak?",
                },
                {
                    speaker: "A",
                    ar: "المَيّ مَوْجودَة بَس المَجْرى مَسْدود، والمَيّ بِتِجْمَع عَالأَرْض.",
                    en: "The water is there but the drain is blocked, and the water gathers on the floor.",
                },
                {
                    speaker: "Landlord",
                    ar: "طَيِّب، بَبْعَت سَبّاك يِشوف المَشْكِلَة بُكْرَة الصُّبِح.",
                    en: "Okay, I’ll send a plumber to check the problem tomorrow morning.",
                },
                {
                    speaker: "A",
                    ar: "وكَمان في مَشْكِلَة بِالكَهْرَبا، لَمّا أَشَغِّل المِكيّف والغَسّالِة مَع بَعْض بِيِنْطْفي الضَّوّ.",
                    en: "And there’s also a problem with the electricity; when I turn on the AC and the washing machine together, the lights go off.",
                },
                {
                    speaker: "Landlord",
                    ar: "مُمْكِن المُفَتِّح (القاطِع) ضَعيف، بَجي أَنا اليَوم عَالمَسَا أَتْأَكَّد.",
                    en: "Maybe the breaker is weak; I’ll come this evening to make sure.",
                },
                {
                    speaker: "B",
                    ar: "(بِهَمْس) اِسْأَلُه عَن الأسانْسير، ليش كْثير خَرْبان.",
                    en: "(whispering) Ask him about the elevator, why it’s often broken.",
                },
                {
                    speaker: "A",
                    ar: "كمان حَضْرِتَك، الأسانْسير بِيوقَف بِنُصّ الطّابِق أَحْيانًا، ومَرّة خِفْنا نِعْلَق جُوّاه.",
                    en: "Also sir, the elevator sometimes stops between floors, and once we were afraid we’d get stuck inside.",
                },
                {
                    speaker: "Landlord",
                    ar: "عارِف، العُمْرُه قَديم شْوَي، بَس في شِرْكَة صِيانَة حَتِجي هالأُسْبوع تِصَلِّحُه.",
                    en: "I know, it’s a bit old, but a maintenance company is coming this week to fix it.",
                },
                {
                    speaker: "A",
                    ar: "مِنِيح كْثير، شُكْرًا عَالاِهْتِمام.",
                    en: "That’s very good, thank you for the attention.",
                },
                {
                    speaker: "Landlord",
                    ar: "إذا في أيّ مَشْكِلَة تانيِة، بَعْتِلِّي رِسالَة أَو اِتِّصِل فيّي طَوالي.",
                    en: "If there is any other problem, send me a message or call me immediately.",
                },
                {
                    speaker: "A",
                    ar: "أَكِيد، مَع السَّلامَة.",
                    en: "Of course, goodbye.",
                },
                {
                    speaker: "B",
                    ar: "طَيِّب، شُو حَكالَك صاحِب البَيْت؟",
                    en: "Okay, what did the landlord tell you?",
                },
                {
                    speaker: "A",
                    ar: "قال بَبْعَت سَبّاك لِلْمَغْسَلِة والحَنَفِيّة، وبَجي هُوّ يِشوف الكَهْرَبا، وَالأسانْسير حَيِصَلِّحوه هالأُسْبوع.",
                    en: "He said he’ll send a plumber for the sink and tap, and he’ll come himself to check the electricity, and the elevator will be fixed this week.",
                },
                {
                    speaker: "B",
                    ar: "مْنيح. أَحْسَن إِنَّك تِكْتِب كُل المَشاكِل عَوَرَقَة، حَتى ما تِنْسى شِي.",
                    en: "Good. It’s better if you write all the problems on a paper so you don’t forget anything.",
                },
                {
                    speaker: "A",
                    ar: "صَح، وعَندي عَقْد الإيجار مَكْتوب فيه إنّو هُمَّ مَسْؤولين يِصَلِّحوا الأَشْيَا الخَرْبانِة.",
                    en: "Right, and in my rental contract it’s written that they’re responsible for fixing broken things.",
                },
                {
                    speaker: "B",
                    ar: "إذا ما رَدّوا بَعْدين، مُمْكِن تِقَدِّم شَكْوَى لِلْمَكْتَب تبَع الإيجار.",
                    en: "If they don’t respond later, you can file a complaint at the rental office.",
                },
                {
                    speaker: "A",
                    ar: "إن شاء الله ما نِوْصَل لَهالْمَرْحَلَة، بَس هَلَّق حاسِس الشِّقّة أَرْتاح بَعْد ما حَكَيْت.",
                    en: "Inshallah we don’t reach that stage, but now I feel more comfortable about the apartment after talking.",
                },
            ],
        },
        grammar: [
            {
                id: "ap_gram_1",
                title: "Using في / ما في to Talk About the Apartment",
                description:
                    "To say what there is or isn’t in an apartment, use 'في' (there is) and 'ما في' (there isn’t). For example: 'في غُرْفِة نَوْم واحْدِة' (there is one bedroom), 'في بَلكون صْغير' (there is a small balcony), 'ما في مِصْعَد' (there is no elevator), 'ما في تِدْفِئَة مْنيحَة' (there is no good heating). You can add details: 'في رُطوبَة عَالحِيط' (there is damp on the wall).",
            },
            {
                id: "ap_gram_2",
                title: "Describing Problems with مَكْسور، خَرْبان، مَسْدود، بِيخَرّ مَيّ",
                description:
                    "Use adjectives to describe what is wrong: 'مَكْسور' (broken physically), 'خَرْبان' (out of order, not working), 'مَسْدود' (blocked), 'بِيخَرّ مَيّ' (leaks water). Examples: 'الشُّبّاك مَكْسور' (the window is broken), 'الأسانْسير خَرْبان' (the elevator is out of order), 'المَغْسَلِة مَسْدودَة' (the sink is blocked), 'السَّقْف بِيخَرّ مَيّ' (the ceiling leaks water).",
            },
            {
                id: "ap_gram_3",
                title: "Polite Requests and Complaints to the Landlord",
                description:
                    "When you talk to a landlord, use polite expressions like 'مُمْكِن تِصَلِّح...' (could you fix...?), 'لازِم نِصْلَح...' (we have to fix...), and 'أَحْسَن إنَّك تِبْعَت سَبّاك' (it’s better if you send a plumber). For example: 'مُمْكِن تِصَلِّح الحَنَفِيّة؟ بْتِخَرّ مَيّ طول الليل' (Could you fix the tap? It leaks water all night), 'لازِم حَدا يِشوف الكَهْرَبا' (someone has to check the electricity).",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "ap_q1",
                    questionAr: "في غُرْفِة نَوْم واحْدِة وصالون كْبير.",
                    optionsEn: [
                        "There is one bedroom and a big living room.",
                        "There are two bedrooms and a big kitchen.",
                        "There is no bedroom and only a small living room.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ap_q2",
                    questionAr: "المَغْسَلِة في الحَمّام مَسْدودَة.",
                    optionsEn: [
                        "The sink in the bathroom is blocked.",
                        "The bathroom is very big.",
                        "The toilet in the bathroom is new.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ap_q3",
                    questionAr: "الأسانْسير خَرْبان مِن أُسْبوع.",
                    optionsEn: [
                        "The elevator has been out of order for a week.",
                        "The stairs are very long this week.",
                        "The elevator is new this week.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ap_q4",
                    questionAr: "ما في تِدْفِئَة مْنيحَة بِالشِّقّة.",
                    optionsEn: [
                        "There is no good heating in the apartment.",
                        "There is no kitchen in the apartment.",
                        "There is no bathroom in the apartment.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "ap_q5",
                    questionAr: "الحَنَفِيّة بْتِخَرّ مَيّ طول الليل.",
                    optionsEn: [
                        "The tap leaks water all night.",
                        "The tap is completely dry all night.",
                        "The water is very hot all night.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A has just moved into a new apartment. Student B asks about the rooms, floor, rent, and neighbors. A answers using 'fi / ma fi' and mentions at least one problem like 'al-maghsale masdūde' or 'al-asansēr kharbān'.",
                "Student A is the tenant and Student B is the landlord. A calls to complain about problems: leaking water, blocked sink, and electricity cutting. Practice polite requests using 'mumkin tisalliḥ...', 'lāzim ḥada yishūf...', and 'aḥsan innak tibʿat sabbāk'.",
                "Student A and Student B are neighbors in the same building. There is 'ṣawt ʿāli' at night and problems with cleaning the 'daraj' and lights. They discuss what to do: talk to 'ḥāris al-ʿimāra', write a list of problems, or make a 'shakwā'.",
            ],
        },
        homework: {
            instructions:
                "Write 7–8 sentences in Palestinian Arabic about your apartment (real or imaginary). Describe the rooms (شِقّة، غُرْفِة نَوْم، صالون، مَطْبَخ، حَمّام), what there is and isn’t (في / ما في), and at least two problems (for example: المَغْسَلِة مَسْدودَة، الأسانْسير خَرْبان، في رُطوبَة عَالحِيط). Say what you want the landlord to fix using 'لازِم' أو 'مُمْكِن تِصَلِّح...'.",
        },
        teacherNotes: {
            warmup: [
                "Draw a very simple apartment plan on the board (bedroom, living room, kitchen, bathroom, balcony) and ask students which rooms they have in their own homes.",
                "Elicit any housing words students already know (like 'bēt', 'ghurfe', 'ḥammām') and connect them to the new vocabulary for apartments.",
            ],
            vocabularySteps: [
                "Present the basic apartment words first (shiʾʾa, ghurfet nōm, ṣālōn, maṭbakh, ḥammām, balkōn) and let students label parts of a simple drawing.",
                "Introduce problem words in pairs: 'maksūr / kharbān', 'masdūd / bikharr mayy', and model short sentences like 'al-shubbāk maksūr', 'al-maghsale masdūde'.",
                "Practice 'fi / ma fi' with quick questions and answers: 'fi miṣʿad bil-ʿimāra?', 'fi tadfiʾa mniḥa bil-shiʾʾa?', encouraging full-sentence replies.",
            ],
            dialogueSteps: [
                "Play or read the dialogue once while students just listen. Then ask a few comprehension questions (Which problems does the tenant have? What does the landlord promise to do?).",
                "Have students act out the dialogue in pairs, then personalize it by changing the floor number, rent price, and type of problems.",
                "Highlight examples of 'fi / ma fi', 'maksūr / kharbān / masdūd', and polite requests in the dialogue and ask students to underline them.",
            ],
            practiceTips: [
                "Use the quiz sentences as quick checks: read them aloud and let students choose the correct meaning in English (or explain in simple Arabic).",
                "During role-plays, encourage students to use extra words like 'ʿaqd ʾijār', 'ḥāris al-ʿimāra', 'shakwā' to make the interaction more realistic.",
            ],
            wrapup: [
                "Ask a few students to describe their ideal apartment using at least three 'fi' sentences and one 'ma fi' sentence.",
                "End with a short chain: each student says one problem in a building, and the next student responds with a suggestion or polite request to the landlord.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_SHOPPING]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Shopping & Prices",
            lessonTitle: "Unit 4 – Shopping and Prices",
        },
        overview: {
            title: "Unit 4 – Shopping & Prices",
            description:
                "In this lesson, students learn to shop, ask about prices, compare options, bargain politely, and pay in Palestinian Arabic.",
            goals: [
                "Ask for price and understand basic price expressions.",
                "Use words for sale, discount, expensive, cheap, and bargain politely.",
                "Describe items, quality, and choose what to buy.",
                "Talk about payment methods and receiving change or receipt.",
                "Practice short, realistic shopping dialogues in markets or shops.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "sp_core_1",
                    ar: "دُكّان / مَحَلّ",
                    en: "shop / store",
                    hint: "Place selling goods",
                    exampleAr: "رَحْت عَالدُّكّان أَشوف قَمِيص.",
                    exampleEn: "I went to the shop to see a shirt.",
                },
                {
                    id: "sp_core_2",
                    ar: "سوق",
                    en: "market",
                    hint: "Open or traditional market",
                    exampleAr: "السُّوق مَلِيّان بَضاعة أَرْخَص.",
                    exampleEn: "The market is full of cheaper goods.",
                },
                {
                    id: "sp_core_3",
                    ar: "بِيع / يِبيع",
                    en: "to sell",
                    hint: "Verb to sell",
                    exampleAr: "هُوَّ يِبيع مِسْتَلَزمات تَجْمِيل.",
                    exampleEn: "He sells beauty supplies.",
                },
                {
                    id: "sp_core_4",
                    ar: "شِرْي / يِشْتِري",
                    en: "to buy",
                    hint: "Verb to buy",
                    exampleAr: "بدي أِشْتِري حِذاء جَدِيد.",
                    exampleEn: "I want to buy new shoes.",
                },
                {
                    id: "sp_core_5",
                    ar: "سِعِر",
                    en: "price",
                    hint: "Amount of money",
                    exampleAr: "شُو السِعِر هُنا؟",
                    exampleEn: "What is the price here?",
                },
                {
                    id: "sp_core_6",
                    ar: "أَدِّيش هادا؟",
                    en: "How much is this?",
                    hint: "Common question for price",
                    exampleAr: "أَدِّيش هادا؟",
                    exampleEn: "How much is this?",
                },
                {
                    id: "sp_core_7",
                    ar: "غالي",
                    en: "expensive",
                    hint: "High price",
                    exampleAr: "هَادا غالي كْتير.",
                    exampleEn: "This is very expensive.",
                },
                {
                    id: "sp_core_8",
                    ar: "رَخيص",
                    en: "cheap",
                    hint: "Low price",
                    exampleAr: "هَادا أَرْخَص مِن هُووَل.",
                    exampleEn: "This is cheaper than those.",
                },
                {
                    id: "sp_core_9",
                    ar: "تَنزيل / خَصْم",
                    en: "discount / sale",
                    hint: "Lowering price",
                    exampleAr: "في تَنزيل اليَوم بِالعِيد.",
                    exampleEn: "There is a discount today for the holiday.",
                },
                {
                    id: "sp_core_10",
                    ar: "بِمُناسبة",
                    en: "on the occasion of",
                    hint: "Reason for promotion",
                    exampleAr: "بِمُناسَبة الافتتاح في خَصْم.",
                    exampleEn: "On the occasion of the opening there is a discount.",
                },
                {
                    id: "sp_core_11",
                    ar: "نِسِيَة",
                    en: "credit / installment",
                    hint: "Pay later",
                    exampleAr: "ما في نِسِيَة، خُد كَاش.",
                    exampleEn: "No credit, take cash.",
                },
                {
                    id: "sp_core_12",
                    ar: "كاش",
                    en: "cash",
                    hint: "Pay with money, not card",
                    exampleAr: "بحَبّ أدْفَع كاش.",
                    exampleEn: "I like to pay cash.",
                },
                {
                    id: "sp_core_13",
                    ar: "كَرْد",
                    en: "card",
                    hint: "Bank card / credit card",
                    exampleAr: "بِدّي أَدْفَع بِالكَرْد.",
                    exampleEn: "I want to pay by card.",
                },
                {
                    id: "sp_core_14",
                    ar: "فِلِس / شِكل / دُولار",
                    en: "money unit",
                    hint: "General currency terms (local or foreign)",
                    exampleAr: "عِنْدِي قَلِيل مِن الفِلِس.",
                    exampleEn: "I have little money.",
                },
                {
                    id: "sp_core_15",
                    ar: "بَطَاقة صَراف",
                    en: "ATM / debit card",
                    hint: "Card for ATM or bank",
                    exampleAr: "سَحَبْت مِن الصَرّاف بِالْبَطَاقة.",
                    exampleEn: "I withdrew from the ATM with the card.",
                },
                {
                    id: "sp_core_16",
                    ar: "بَون",
                    en: "receipt / voucher",
                    hint: "Proof of purchase",
                    exampleAr: "خُد البَون بعد ما تِدْفَع.",
                    exampleEn: "Take the receipt after you pay.",
                },
                {
                    id: "sp_core_17",
                    ar: "فاتورَة",
                    en: "invoice / bill",
                    hint: "Paper listing cost",
                    exampleAr: "أعْطِيني الفاتورَة لو سَمَحت.",
                    exampleEn: "Give me the bill please.",
                },
                {
                    id: "sp_core_18",
                    ar: "مُقايَسَة",
                    en: "comparison",
                    hint: "Compare items",
                    exampleAr: "نِسْتَطيع نِقارن اللَّوْن والسِّعِر.",
                    exampleEn: "We can compare color and price.",
                },
                {
                    id: "sp_core_19",
                    ar: "مُستَوَى جَوْدَة",
                    en: "quality level",
                    hint: "Item quality",
                    exampleAr: "الجَوْدَة مْش مْتَسَاوِيَة.",
                    exampleEn: "Quality is not equal.",
                },
                {
                    id: "sp_core_20",
                    ar: "مَحَطَّة صَراف آلي",
                    en: "ATM station",
                    hint: "Place to withdraw cash",
                    exampleAr: "في مَحَطَّة صَراف آلي قُدّام المَحل.",
                    exampleEn: "There is an ATM in front of the shop.",
                },
                {
                    id: "sp_core_21",
                    ar: "خِيار",
                    en: "option / choice",
                    hint: "Alternative item",
                    exampleAr: "في خِيارات كْثِيرَة عَرف.",
                    exampleEn: "There are many color choices.",
                },
                {
                    id: "sp_core_22",
                    ar: "مُناسِب",
                    en: "suitable / appropriate",
                    hint: "Fits needs",
                    exampleAr: "السِّعِر هَادا مُناسِب لِي.",
                    exampleEn: "This price is suitable for me.",
                },
                {
                    id: "sp_core_23",
                    ar: "خَطَر",
                    en: "deal / bargain",
                    hint: "Good deal",
                    exampleAr: "هَادِي خَطَر، بَخُدها!",
                    exampleEn: "This is a great deal, take it!",
                },
                {
                    id: "sp_core_24",
                    ar: "مُفَاوَضَة",
                    en: "bargaining",
                    hint: "Negotiating price",
                    exampleAr: "المُفَاوَضَة شِي مُتَعَب سَهَل.",
                    exampleEn: "Bargaining is something tiring but easy.",
                },
                {
                    id: "sp_core_25",
                    ar: "قَبول",
                    en: "acceptance",
                    hint: "Accepting offer",
                    exampleAr: "قَبِلْت العُرْض.",
                    exampleEn: "I accepted the offer.",
                },
                {
                    id: "sp_core_26",
                    ar: "رَفّ",
                    en: "shelf",
                    hint: "Store shelf",
                    exampleAr: "الأَقْرَاص عَالرَفّ التّالِت.",
                    exampleEn: "The discs are on the third shelf.",
                },
                {
                    id: "sp_core_27",
                    ar: "جَرِي مُشترى",
                    en: "shopping bag",
                    hint: "Bag for purchased items",
                    exampleAr: "حَطِّي المُشْتَرَيَات فِي الجَرِي.",
                    exampleEn: "Put the purchases in the bag.",
                },
                {
                    id: "sp_core_28",
                    ar: "خَطَّة دَفْع",
                    en: "payment plan",
                    hint: "Pay in parts",
                    exampleAr: "مُمْكِن خَطَّة دَفْع لِلأَغْلَى.",
                    exampleEn: "Payment plan is possible for the more expensive ones.",
                },
                {
                    id: "sp_core_29",
                    ar: "ضَرُوبَة / ضَرِيبَة",
                    en: "tax",
                    hint: "Added cost",
                    exampleAr: "هَادِه ضَرِيبَة عَالسِّلْعَة.",
                    exampleEn: "This is a tax on the item.",
                },
                {
                    id: "sp_core_30",
                    ar: "تَخْفِيض",
                    en: "price reduction",
                    hint: "Lower price",
                    exampleAr: "طَلَبْت تَخْفِيض أَكْثَر.",
                    exampleEn: "I asked for a bigger reduction.",
                },
                {
                    id: "sp_core_31",
                    ar: "مُوَاصَلات / مَرْكَب",
                    en: "transport to shop",
                    hint: "Bus or transport",
                    exampleAr: "جِبْت مَعِي مْصَارِي وَالمُوَاصَلات.",
                    exampleEn: "I brought money and transport.",
                },
                {
                    id: "sp_core_32",
                    ar: "خَدْمَة",
                    en: "service",
                    hint: "Customer service",
                    exampleAr: "الخَدْمَة فِي الدُكّان جَيِّدَة.",
                    exampleEn: "Service at the shop is good.",
                },
                {
                    id: "sp_core_33",
                    ar: "إستِبدال",
                    en: "exchange / return",
                    hint: "Return or change item",
                    exampleAr: "مُمْكِن أَعْمِل إستِبدال لَو مَا نَاسِب.",
                    exampleEn: "I can exchange if it doesn’t suit.",
                },
                {
                    id: "sp_core_34",
                    ar: "خَمِينَة",
                    en: "budget",
                    hint: "Planned money to spend",
                    exampleAr: "الخَمِينَة عِندي مَحْدُودَة.",
                    exampleEn: "My budget is limited.",
                },
                {
                    id: "sp_core_35",
                    ar: "وَصْفَة",
                    en: "description",
                    hint: "Details about item",
                    exampleAr: "طَلَبْت وَصْفَة عَن السِّلْعَة.",
                    exampleEn: "I asked for a description of the item.",
                },
            ],
            extra: [
                {
                    id: "sp_extra_1",
                    ar: "تِجَارَة جَزِئِيَّة",
                    en: "retail trade",
                    hint: "Selling to public",
                    exampleAr: "اللُّبَاس فِي التِجَارَة الجَزِئِيَّة مُكَلِّف.",
                    exampleEn: "Clothes in retail trade are costly.",
                },
                {
                    id: "sp_extra_2",
                    ar: "تَسْوِيق",
                    en: "marketing",
                    hint: "Promoting items",
                    exampleAr: "في تَسْوِيق كَثِير لِلْمُنْتَج.",
                    exampleEn: "There is a lot of marketing for the product.",
                },
                {
                    id: "sp_extra_3",
                    ar: "تَجْرِبَة",
                    en: "experience",
                    hint: "User experience",
                    exampleAr: "التَّجْرِبَة فِي الدُّكّان مُمْتَازَة.",
                    exampleEn: "The experience in the shop is excellent.",
                },
                {
                    id: "sp_extra_4",
                    ar: "تَخُفِّيضات موسِمِيَّة",
                    en: "seasonal discounts",
                    hint: "Sale during season",
                    exampleAr: "الْقِطَع بِتِحْصَل بِتَخْفِيضات موسِمِيَّة.",
                    exampleEn: "Pieces are available with seasonal discounts.",
                },
                {
                    id: "sp_extra_5",
                    ar: "فَرْع",
                    en: "branch",
                    hint: "Another location",
                    exampleAr: "المَحَلّ إلُه فَرْع تَانِي بالعِمَارَة الجَنبِيَّة.",
                    exampleEn: "The shop has another branch in the neighboring building.",
                },
            ],
        },
        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "مَسّا الخير يا صَديق، شُو خَبَرَك؟",
                    en: "Good evening, friend, how are you?",
                },
                {
                    speaker: "B",
                    ar: "مَسّا النّور، تَمَام. عِنْدِي وَقْت أَشوف بضاعة لِلحَفل.",
                    en: "Good evening, fine. I have time to look at goods for the party.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن نِمشي عَالدُّكّان القُريب؟ بِسْتَنى تَنزيل.",
                    en: "We can go to the nearby shop? I’m waiting for a discount.",
                },
                {
                    speaker: "B",
                    ar: "مُمَاز؟ يِلّا نِروح. أَدِّيش هادا؟",
                    en: "Really? Let’s go. How much is this?",
                },
                {
                    speaker: "A",
                    ar: "هَادا وَاحِد قَمِيص. أَدِّيش هَاد القَمِيص؟",
                    en: "This is one shirt. How much is this shirt?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "هَادِي خَمْسُمِيّة شِكِل.",
                    en: "This is five hundred shekels.",
                },
                {
                    speaker: "B",
                    ar: "غالي كْتير. مُمْكِن تِنَزِّل السِّعِر؟",
                    en: "Very expensive. Can you lower the price?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "مَنِقدر نِنَزِّل كْتير، بَس أَخَفِّض خَمْسِين شِكِل.",
                    en: "We can’t lower much, but I can reduce by fifty shekels.",
                },
                {
                    speaker: "A",
                    ar: "بِدّي أَسْأَل، في تَنزيل هَالأُسْبوع؟",
                    en: "I want to ask, is there a discount this week?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "إي، في تَنزيل لِلْمُعْظَم، بَس القَمِيص هَادِي عَالسِعِر المَكتوب.",
                    en: "Yes, there is a discount for most items, but this shirt is at the written price.",
                },
                {
                    speaker: "B",
                    ar: "حَسَن. شُوف خِيَار تَانِي. هَاد أَرْخَص؟",
                    en: "Okay. Look at another option. Is this cheaper?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "هَاد أَرْخَص بْمِيت شِكِل.",
                    en: "This is cheaper by one hundred shekels.",
                },
                {
                    speaker: "A",
                    ar: "نَسْتَطيع نِقارن الجَوْدَة؟",
                    en: "Can we compare the quality?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "الْقَمِيص هَادِي جَوْدَتُه أَعْلَى، لَكِن السِّعِر أَكْثَر.",
                    en: "This shirt has higher quality, but the price is higher.",
                },
                {
                    speaker: "B",
                    ar: "أَنا مَعِي خَمِينَة مَحْدُودَة، بَدّي شِي مُمْكِن أَشتِري.",
                    en: "I have a limited budget, I want something I can buy.",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "مُمْكِن تِخَد خِيَار أَرْخَص وَنِنَزِّل خَمْسِين تَانِي.",
                    en: "You can take a cheaper option and we reduce fifty more.",
                },
                {
                    speaker: "A",
                    ar: "جَيِّد. بِفَضَّل هَاد. قَدّيش بَصِير بِالكَرْد؟",
                    en: "Good. I prefer this. How much will it be by card?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "بِالكَرْد خَمْسُمِيّة مِيَّة، أَجْرَاء ضَرِيبَة.",
                    en: "By card five hundred shekels, plus tax procedures.",
                },
                {
                    speaker: "B",
                    ar: "فِي ضَرِيبَة؟ أَدِّيش الضَرِيبَة؟",
                    en: "Is there tax? How much is the tax?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "الدَّرِيبَة تِقْرِيبًا خَمْس عَشَر شِكِل.",
                    en: "The tax is about fifteen shekels.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن أَدْفَع كاش؟",
                    en: "Can I pay cash?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "إي، الكاش مَرْحُوب. طَلَبْت خَمْسُمِيّة مِيَّة ناقِص خَمْسِين تَنْزيل.",
                    en: "Yes, cash is welcome. You asked for five hundred minus fifty discount.",
                },
                {
                    speaker: "B",
                    ar: "إِذَا نَزَّلْت تَنْزيل أَكْثَر، بَاخُد كَم وَاسِم؟",
                    en: "If you reduce more, how much will I pay?",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "مُمْكِن أَنزِّل خَمْسِين زِيادَة لَو أَخُد جَرِي مُشْتَرَى كْبِير.",
                    en: "I can reduce fifty more if you take a big shopping bag.",
                },
                {
                    speaker: "A",
                    ar: "حَسَن، خُذ الجَرِي، وَهَاد أَخُدُه.",
                    en: "Okay, take the bag, and I’ll take this.",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "فِي بَون؟",
                    en: "Is there a receipt?",
                },
                {
                    speaker: "A",
                    ar: "إي، خُد البَون. شُكْرًا.",
                    en: "Yes, take the receipt. Thank you.",
                },
                {
                    speaker: "B",
                    ar: "بَنَرْجِع لُبَيْت، بَعْدين نِحْكِي عَن السِّعِر.",
                    en: "We’ll return home, then we’ll talk about the price.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن نِسْتَخْدِم هَاد القَمِيص بِالسَّهْرَة، مَا شِفْت شِي أَحْلَى.",
                    en: "We can use this shirt in the evening; I didn’t see anything prettier.",
                },
                {
                    speaker: "B",
                    ar: "مُمْكِن نِرُوح عَفَاتِح تَانِي بُكْرَة، لَكِن هَاد مُمْكِن يَكُون أَفْضَل.",
                    en: "We can go to other openings tomorrow, but this might be better.",
                },
                {
                    speaker: "Shopkeeper",
                    ar: "بِالتَّوْفِيق، وَإذا بِتِحْتَاج شِي تَانِي، تْفَضَّل.",
                    en: "Good luck, and if you need anything else, welcome.",
                },
                {
                    speaker: "A",
                    ar: "يَلّا مَع السَّلامَة.",
                    en: "Okay, goodbye.",
                },
                {
                    speaker: "B",
                    ar: "مَع السَّلامَة.",
                    en: "Goodbye.",
                },
            ],
        },
        grammar: [
            {
                id: "sp_gram_1",
                title: "Asking about price in a shop",
                description:
                    "Use phrases like 'أديش هادا؟' or 'شُو السِعِر؟' to ask for the price. Add context if you talk about a specific item: 'أَدِّيش هَاد القَمِيص؟' or 'أَدِّيش هَاد الْقَلَم؟'. These are common, short, and useful questions in real shopping situations.",
            },
            {
                id: "sp_gram_2",
                title: "Describing cost: expensive, cheap, discount",
                description:
                    "Say 'غالي' for expensive and 'رَخيص' for cheap. For more emphasis, add 'كْتير'. Use 'تَنزيل' or 'خَصْم' to talk about discounts. Example: 'هَادِي غالي كْتير' or 'في تَنزيل اليَوم'. You can negotiate politely by asking for a lower price or accepting with 'قَبِلْت العُرْض'.",
            },
            {
                id: "sp_gram_3",
                title: "Payment and acceptance expressions",
                description:
                    "Use 'كاش' or 'بِالكَرْد' for cash or card payment. Ask about tax or extra fees: 'فِي ضَرِيبَة؟' and say 'خُد البَون', 'أعْطِيني الفاتورَة'. Express acceptance: 'قَبِلْت', and mention limited budget: 'خَمِينَة مَحْدُودَة'.",
            },
        ],
        practice: {
            quiz: [
                {
                    id: "sp_q1",
                    questionAr: "أَدِّيش هَاد القَمِيص؟",
                    optionsEn: [
                        "How much is this shirt?",
                        "Where is the shirt?",
                        "Is this shirt clean?",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sp_q2",
                    questionAr: "هَادِي غَالِي كْتِير.",
                    optionsEn: [
                        "This is very expensive.",
                        "This is very cheap.",
                        "This is not available.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sp_q3",
                    questionAr: "مُمكِن تِنَزِّل السِّعِر؟",
                    optionsEn: [
                        "Can you increase the price?",
                        "Can you lower the price?",
                        "Can you close the shop?",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "sp_q4",
                    questionAr: "بِالكَرْد ضَرِيبَة وَسِعِر.",
                    optionsEn: [
                        "By card there is tax and price.",
                        "By card there is no price.",
                        "By cash there is no tax.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sp_q5",
                    questionAr: "بَخُد البَون بَعْد الدَّفْع.",
                    optionsEn: [
                        "I take the receipt after paying.",
                        "I take the bag before paying.",
                        "I leave the shop before paying.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A is a buyer, Student B is a shopkeeper. A asks the price, negotiates for a lower price, and decides to buy or leave. Use 'أَدِّيش هَاد؟', 'غالي كْتِير', 'مُمكِن تِنَزِّل؟', 'قَبِلْت'.",
                "Student A and B are friends shopping together. They compare two items, mention budget limits, and choose the best option. Use 'رَخيص', 'مُنَاسِب', 'خِيَار', 'جَوْدَة', 'خَمِينَة مَحْدُودَة'.",
                "Student A buys an item with card, Student B asks about tax and receipt. Use 'بِالكَرْد', 'ضَرِيبَة', 'بَون', 'فاتورَة', and confirm payment method.",
            ],
        },
        homework: {
            instructions:
                "Write 7–8 sentences in Palestinian Arabic about a short shopping experience. Mention what you wanted to buy, ask for the price, say if it was expensive or cheap, describe any discount or bargaining, and say how you paid (cash or card). Use words like 'أَدِّيش هَاد؟', 'غالي', 'رَخيص', 'تَنزيل', 'كاش', 'كَرْد'.",
        },
        teacherNotes: {
            warmup: [
                "Ask students in Arabic or English what they buy often and where they buy it (market, malls, online). Introduce a few words they may already know: 'سوق', 'دكان', 'كاش'.",
                "Show simple pictures of a shop, a price tag, and a receipt. Ask what they think each picture is called in Palestinian Arabic.",
            ],
            vocabularySteps: [
                "Introduce price questions and answers first: 'أَدِّيش هَاد؟', 'غالي', 'رَخيص'. Drill choral repetition and have students ask each other quietly.",
                "Add words for payment: 'كاش', 'كَرْد', 'بَون', 'فاتورَة'. Practice short exchanges: A asks, B answers.",
                "Introduce terms for discount and bargaining: 'تَنزيل', 'خَصْم', 'مُمكِن تِنَزِّل؟'. Elicit students’ reactions when hearing these words.",
            ],
            dialogueSteps: [
                "Read the dialogue once; students listen closely to identify price questions and responses.",
                "Assign roles and have students act out the dialogue in pairs. Encourage natural tone and gestures to simulate real shopping.",
                "Ask students which expressions they would use if they had a limited budget, and point to sentences in dialogue illustrating this.",
            ],
            practiceTips: [
                "For the quiz, read the Arabic sentences aloud first without showing text; students choose English meaning.",
                "During role-plays, circulate and note any interesting negotiation phrases; highlight good examples after practice.",
                "Encourage students to add one extra sentence about the quality of the item or how they plan to use it.",
            ],
            wrapup: [
                "Ask 2–3 students to describe what item they would buy today and why, using at least one price-related phrase.",
                "End with a quick game: the teacher shows a card with a price or discount word in English and students say the Palestinian Arabic equivalent.",
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_WEATHER]: {
        meta: {
            level: "Pre-Intermediate",
            unit: "Weather & Small Talk",
            lessonTitle: "Unit 5 – Weather & Small Talk",
        },
        overview: {
            title: "Unit 5 – Weather & Small Talk",
            description:
                "Students will learn to describe weather, talk about seasons, make small talk, and plan activities based on weather conditions in Palestinian Arabic.",
            goals: [
                "Describe weather conditions using common adjectives and verbs.",
                "Talk about seasons, clothing, and temperature.",
                "Start simple small talk conversations related to weather.",
                "Make basic suggestions or plans depending on the weather.",
                "Practice polite social interaction in Palestinian Arabic.",
            ],
        },

        vocabulary: {
            core: [
                {
                    id: "w1", ar: "طَقْس", en: "weather", hint: "General word",
                    exampleAr: "الطَّقْس اليوم حِلْو.",
                    exampleEn: "The weather today is nice."
                },
                {
                    id: "w2", ar: "جَوّ", en: "weather / atmosphere",
                    hint: "Common alternative",
                    exampleAr: "شُو الجَوّ بُرا؟",
                    exampleEn: "How’s the weather outside?"
                },
                {
                    id: "w3", ar: "دَفا", en: "warmth",
                    exampleAr: "اليوم في دَفا.",
                    exampleEn: "Today it’s warm."
                },
                {
                    id: "w4", ar: "بَرِد", en: "cold",
                    exampleAr: "اليوم بَرِد كْتير.",
                    exampleEn: "Today is very cold."
                },
                {
                    id: "w5", ar: "شُوب", en: "hot (temperature)",
                    exampleAr: "الدُّنْيا شُوب.",
                    exampleEn: "It’s hot."
                },
                {
                    id: "w6", ar: "مِشْمِس", en: "sunny",
                    exampleAr: "اليوم مِشْمِس.",
                    exampleEn: "It’s sunny today."
                },
                {
                    id: "w7", ar: "غَيْم / غايِم", en: "cloud / cloudy",
                    exampleAr: "السَّما غايِمَة.",
                    exampleEn: "The sky is cloudy."
                },
                {
                    id: "w8", ar: "مَطَر / تَمْطُر", en: "rain / raining",
                    exampleAr: "مَطَر برا، خُد شَمْسِيّة.",
                    exampleEn: "It’s raining outside, take an umbrella."
                },
                {
                    id: "w9", ar: "شَمْسِيّة", en: "umbrella",
                    exampleAr: "وين الشَّمْسِيّة؟",
                    exampleEn: "Where’s the umbrella?"
                },
                {
                    id: "w10", ar: "رِيح / هَوا", en: "wind",
                    exampleAr: "الرِّيح قَوِيّة اليوم.",
                    exampleEn: "The wind is strong today."
                },
                {
                    id: "w11", ar: "عاصِف", en: "stormy",
                    exampleAr: "الجَوّ عاصِف.",
                    exampleEn: "It’s stormy."
                },
                {
                    id: "w12", ar: "ثَلْج / تَلْج", en: "snow",
                    exampleAr: "نَزَل ثَلْج بِالليل.",
                    exampleEn: "It snowed last night."
                },
                {
                    id: "w13", ar: "رُطوبة", en: "humidity",
                    exampleAr: "الرُّطوبَة عاليَة.",
                    exampleEn: "The humidity is high."
                },
                {
                    id: "w14", ar: "فَصْل", en: "season",
                    exampleAr: "شُو أَحْلَى فَصْل لَك؟",
                    exampleEn: "What’s your favorite season?"
                },
                { id: "w15", ar: "صَيْف", en: "summer" },
                { id: "w16", ar: "شِتَا", en: "winter" },
                { id: "w17", ar: "خَرِيف", en: "autumn/fall" },
                { id: "w18", ar: "رَبِيع", en: "spring" },
                { id: "w19", ar: "حَرارَة", en: "temperature" },
                {
                    id: "w20", ar: "أَرْدَق", en: "colder / cooler",
                    exampleAr: "اليوم أَرْدَق مِن بارِحَة.",
                    exampleEn: "Today is cooler than yesterday."
                },
                {
                    id: "w21", ar: "نُشُور", en: "sunrise",
                    hint: "Literally sunrise"
                },
                { id: "w22", ar: "مَغرِب", en: "sunset" },
                {
                    id: "w23", ar: "تَقْس", en: "forecast",
                    exampleAr: "بَشوف التَّقْس قَبِل ما أَطْلَع.",
                    exampleEn: "I check the forecast before going out."
                },
                {
                    id: "w24", ar: "مُمْكِن / إحْتِمال", en: "maybe / possibility",
                    exampleAr: "إحْتِمال تِنْزَل مَطَر.",
                    exampleEn: "It might rain."
                },
                { id: "w25", ar: "دَردَشة", en: "small talk" },
                {
                    id: "w26", ar: "وَقْت حِلْو", en: "nice time",
                    exampleAr: "مِنْعَمِل وَقْت حِلْو!",
                    exampleEn: "Let’s have a nice time!"
                },
                {
                    id: "w27", ar: "تَقْلِيب", en: "change (weather shift)",
                    exampleAr: "الجَوّ اتْقَلَّب.",
                    exampleEn: "The weather changed suddenly."
                },
                { id: "w28", ar: "جاكِت", en: "jacket" },
                { id: "w29", ar: "أَواعي ثَقيلَة", en: "heavy clothes" },
                {
                    id: "w30", ar: "نَشّف", en: "to dry (rain stops)",
                    exampleAr: "مَطَر نَشّف.",
                    exampleEn: "The rain stopped (dried up)."
                },
                {
                    id: "w31", ar: "ضَوّي", en: "bright",
                    exampleAr: "الدُّنْيا ضَوّي.",
                    exampleEn: "It’s bright outside."
                },
                {
                    id: "w32", ar: "مُرِيح", en: "comfortable (weather)",
                    exampleAr: "الجَوّ مُرِيح.",
                    exampleEn: "The weather is comfortable."
                },
                {
                    id: "w33", ar: "سَيِّئ", en: "bad",
                    exampleAr: "الجَوّ سَيِّئ اليوم.",
                    exampleEn: "The weather is bad today."
                },
                {
                    id: "w34", ar: "مِنَاسِب", en: "suitable",
                    exampleAr: "الجَوّ مْناسِب للطلعة.",
                    exampleEn: "The weather is suitable for going out."
                },
                { id: "w35", ar: "مُبْتَلّ", en: "wet" },
                {
                    id: "w36", ar: "تَحْت الصّفِر", en: "below zero",
                    exampleAr: "الحَرارَة تَحْت الصّفِر.",
                    exampleEn: "The temperature is below zero."
                }
            ],
            extra: [
                { id: "wex1", ar: "عاصِف رَمْلي", en: "dust storm" },
                { id: "wex2", ar: "ضَباب", en: "fog" },
                { id: "wex3", ar: "نَشرة طَقْس", en: "weather report" },
                { id: "wex4", ar: "كِسْوِة", en: "outfit/clothing related to weather" },
                { id: "wex5", ar: "تَلْميس", en: "warming up" }
            ],
        },

        dialogue: {
            lines: [
                { speaker: "A", ar: "صَباح الخير! كِيف الجَوّ بُرا؟", en: "Good morning! How’s the weather outside?" },
                { speaker: "B", ar: "صَباح النّور! مِشْمِس وشُوب شْوَي.", en: "Good morning! Sunny and a bit hot." },
                { speaker: "A", ar: "بِفَكِّر نِطْلَع نِتْمَشّى.", en: "I think we should go for a walk." },
                { speaker: "B", ar: "مُمْكِن، بَس إحْتِمال تِنْزَل مَطَر بَعْد الضُّهُر.", en: "Maybe, but it might rain this afternoon." },
                { speaker: "A", ar: "عَفْكَرَة، شُوب تْحِبّي أكْتَر؟ الصَّيف ولا الشِّتا؟", en: "By the way, what do you like more? Summer or winter?" },
                { speaker: "B", ar: "بِصِراحَة الشِّتا. بَحبّ الجَوّ البَارِد.", en: "Honestly winter. I love the cold weather." },
                { speaker: "A", ar: "أنا العَكْس! بَحبّ الصَّيف والبحَر.", en: "I’m the opposite! I love summer and the beach." },
                { speaker: "B", ar: "كُلّ فَصْل إِلُه جَمالُه.", en: "Every season has its beauty." },
                { speaker: "A", ar: "إحْتِمال نِشوف ثَلْج هَالسَّنَة؟", en: "Maybe we’ll see snow this year?" },
                { speaker: "B", ar: "إذا الحَرارَة نَزَلَت تَحْت الصّفِر، أكيد!", en: "If the temperature drops below zero, for sure!" },

                { speaker: "A", ar: "شُو خَبَرِك بِالجامْعَة؟", en: "How’s everything at university?" },
                { speaker: "B", ar: "تَمام، بُدرس كْتير. وإنتي؟", en: "Good, studying a lot. And you?" },
                { speaker: "A", ar: "نَفْس الإِشي، بَس عِنْدي وِقْت لَلدَّرْدَشَة!", en: "Same thing, but I have time for chatting!" },
                { speaker: "B", ar: "دَردَشة الطَّقْس أَسْهَل دَردَشة!", en: "Weather talk is the easiest small talk!" },

                { speaker: "A", ar: "إسْمَعي! الهَوا قَوِيّ. نِلبُس جاكِت؟", en: "Listen! The wind is strong. Should we wear jackets?" },
                { speaker: "B", ar: "إي، خُدي جاكِت وأَواعي ثَقيلَة.", en: "Yes, take a jacket and heavy clothes." },
                { speaker: "A", ar: "الجَوّ اتْقَلَّب سَرِيع!", en: "The weather changed quickly!" },
                { speaker: "B", ar: "إحْتِمال مُؤَقَّت.", en: "Maybe it’s temporary." },
                { speaker: "A", ar: "مِنِسْتَنى شْوَي؟ بَرْكي نَشّف مَطَر.", en: "Shall we wait a bit? Maybe the rain stops." },
                { speaker: "B", ar: "طَيِّب. نِتْفَرَّج عَالتَّقْس.", en: "Okay. Let’s check the forecast." },

                { speaker: "A", ar: "لَو ضَلّ الجَوّ مُرِيح، مِنْعَمِل وَقْت حِلْو عَالبَحَر.", en: "If the weather stays nice, we’ll have a good time at the beach." },
                { speaker: "B", ar: "وأَنا جاهْزَة دايمًا للبَحَر!", en: "And I am always ready for the beach!" },
                { speaker: "A", ar: "إذِن يَلّا نِخَطِّط لبُكْرَة.", en: "Then let’s plan for tomorrow." },
                { speaker: "B", ar: "مُوافْقَة! بْنِتَّفِق بَعْد المَسَا.", en: "Deal! We’ll confirm in the evening." },
                { speaker: "A", ar: "شُكْرًا عَل الدَّردَشَة.", en: "Thanks for the chat." },
                { speaker: "B", ar: "وَلا يِهِمِّك! الطَّقْس بْجَمِّع القْلوب.", en: "No problem! The weather brings hearts together!" },
                { speaker: "A", ar: "مَع السَّلامَة!", en: "Goodbye!" },
                { speaker: "B", ar: "مع السَّلامَة!", en: "Goodbye!" },
            ],
        },

        grammar: [
            {
                id: "wgram1",
                title: "Asking About Weather",
                description:
                    "Use 'شُو الجَوّ؟' or 'شُو الطَّقْس بُرا؟' to ask about the weather. Example: 'شُو الجَوّ بُكْرَة؟' (How’s the weather tomorrow?)",
            },
            {
                id: "wgram2",
                title: "Weather Adjectives and Verb Forms",
                description:
                    "Use adjectives: 'شُوب' (hot), 'بَرِد' (cold), 'مِشْمِس' (sunny), 'غايِم' (cloudy). Use verbs like 'تَمْطُر' (it’s raining).",
            },
            {
                id: "wgram3",
                title: "Small Talk Starters",
                description:
                    "Begin with weather to start conversation politely: 'صَباح الخير! كِيف الجَوّ؟'. Add short responses and questions to keep it going.",
            },
        ],

        practice: {
            quiz: [
                {
                    id: "wq1",
                    questionAr: "شُوب وشُوّي رُطوبَة.",
                    optionsEn: [
                        "It’s hot and a bit humid.",
                        "It’s cold and rainy.",
                        "It’s windy and dusty."
                    ],
                    correctIndex: 0,
                },
                {
                    id: "wq2",
                    questionAr: "إحْتِمال تِنْزَل مَطَر.",
                    optionsEn: [
                        "It may rain.",
                        "It will never rain.",
                        "It is snowing."
                    ],
                    correctIndex: 0,
                },
                {
                    id: "wq3",
                    questionAr: "الدُّنْيا بَرِد كْتير.",
                    optionsEn: [
                        "It’s very cold.",
                        "It’s very hot.",
                        "It’s snowing heavily."
                    ],
                    correctIndex: 0,
                },
                {
                    id: "wq4",
                    questionAr: "خُد جاكِت!",
                    optionsEn: [
                        "Take a jacket!",
                        "Open the umbrella!",
                        "Close the door!"
                    ],
                    correctIndex: 0,
                },
                {
                    id: "wq5",
                    questionAr: "الجَوّ مُرِيح للطلعة.",
                    optionsEn: [
                        "The weather is nice to go out.",
                        "It’s dangerous outside.",
                        "It’s too cold to go out."
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "A asks B about the weather and they make a plan for the day depending on the forecast.",
                "One student hates hot weather, the other loves the beach. They negotiate a plan that works for both.",
                "Students meet at university, make small talk about weather, and suggest an afternoon activity.",
            ],
        },

        homework: {
            instructions:
                "Write 6–8 sentences about the weather in your city this week. Describe the temperature, rain or sun, and say what activities you can or can’t do because of the weather.",
        },

        teacherNotes: {
            warmup: [
                "Show pictures of weather icons. Students guess the condition: 'شُو الجَوّ؟'",
                "Ask: 'بِتحِبّ الصَّيف ولا الشِّتا؟ وليش؟'"
            ],
            vocabularySteps: [
                "Group vocab by idea: temperature (شوب/برد), sky (غيم/شمس), rain/snow.",
                "Ask students to describe today’s weather using 3 new words."
            ],
            dialogueSteps: [
                "Play audio/teacher-read: students listen and match lines to pictures.",
                "Pairs act the dialogue and customize the plan (cinema, café, sea)."
            ],
            practiceTips: [
                "Focus on pronunciation of stress in شُوب / بَرِد.",
                "Encourage short, natural follow-up questions in small talk."
            ],
            wrapup: [
                "Quick round: each student says tomorrow’s weather prediction.",
                "Students share one favorite season and why."
            ],
            myNotes: "",
        },
    },

    // Inside your defaultLessons literal:
    [LESSON_ID_OPINIONS]: {
        meta: {
            level: "Intermediate",
            unit: "Opinions",
            lessonTitle: "Unit 1 – Expressing Opinions Politely",
        },
        overview: {
            title: "Unit 1 – Opinions",
            description:
                "In this lesson, students practice giving opinions, agreeing and disagreeing politely, and giving reasons in Palestinian Arabic.",
            goals: [
                "Use common phrases to express opinions (for example: bra'y-i, biʿtiqādi, bin-nisbe ʾili).",
                "Agree and disagree politely, softening disagreement when needed.",
                "Give reasons using 'laʾanno' and 'ʿashān' + full sentences.",
                "Discuss everyday topics like study, work, social media, and free time.",
                "Handle short debates and small talk that includes opinions and feelings.",
            ],
        },

        vocabulary: {
            core: [
                {
                    id: "op_core_1",
                    ar: "رَأْي",
                    en: "opinion",
                    hint: "What you think about something",
                    exampleAr: "بِهِمّني أَسْمَع رَأْيَك.",
                    exampleEn: "I care about hearing your opinion.",
                },
                {
                    id: "op_core_2",
                    ar: "بِرَأْيي",
                    en: "in my opinion",
                    hint: "Common starter for opinion",
                    exampleAr: "بِرَأْيي التَّعْليم أونلاين إِلُه مَزايا.",
                    exampleEn: "In my opinion, online education has advantages.",
                },
                {
                    id: "op_core_3",
                    ar: "بِاعْتِقادي",
                    en: "I believe / I think",
                    hint: "Slightly more formal",
                    exampleAr: "بِاعْتِقادي المَوْضوع مِش هالْقَدّ خَطير.",
                    exampleEn: "I believe the issue is not that serious.",
                },
                {
                    id: "op_core_4",
                    ar: "بالنِّسْبَة إِلِي",
                    en: "for me / from my point of view",
                    hint: "Personal position",
                    exampleAr: "بالنِّسْبَة إِلِي الشُّغُل مع الدِّراسَة مُتْعِب.",
                    exampleEn: "For me, working while studying is tiring.",
                },
                {
                    id: "op_core_5",
                    ar: "بِحِسّ",
                    en: "I feel / I have the feeling",
                    hint: "Emotional or subjective opinion",
                    exampleAr: "بِحِسّ إنّو الشَّغِل زاد عالنّاس.",
                    exampleEn: "I feel that people’s workload has increased.",
                },
                {
                    id: "op_core_6",
                    ar: "بِصَراحَة",
                    en: "honestly",
                    hint: "Softener / emphasis",
                    exampleAr: "بِصَراحَة مَا حَبّيت الفِكْرَة.",
                    exampleEn: "Honestly, I didn’t like the idea.",
                },
                {
                    id: "op_core_7",
                    ar: "مُوافِق / مَوْفوقِة",
                    en: "agree (m/f)",
                    hint: "Used with (مَعَك)",
                    exampleAr: "أنا مُوافِق مَعَك بِهالنُّقْطَة.",
                    exampleEn: "I agree with you on this point.",
                },
                {
                    id: "op_core_8",
                    ar: "ما بُوافِقَك",
                    en: "I don’t agree with you",
                    hint: "Soft disagreement if said politely",
                    exampleAr: "صَراحَةً ما بُوافِقَك مِئِة بِالمِئِة.",
                    exampleEn: "Honestly, I don’t fully agree with you.",
                },
                {
                    id: "op_core_9",
                    ar: "مُمْكِن أَخْتِلِف مَعَك",
                    en: "can I disagree with you",
                    hint: "Very polite disagreement",
                    exampleAr: "مُمْكِن أَخْتِلِف مَعَك بِهالنُّقْطَة شْوَي؟",
                    exampleEn: "Can I disagree with you a bit on this point?",
                },
                {
                    id: "op_core_10",
                    ar: "مَعَك حَقّ",
                    en: "you are right",
                    hint: "Strong agreement",
                    exampleAr: "مَعَك حَقّ إنّو الوَضْع صَعْب.",
                    exampleEn: "You are right that the situation is difficult.",
                },
                {
                    id: "op_core_11",
                    ar: "مَزْبوط",
                    en: "that’s correct / true",
                    hint: "Short agreement",
                    exampleAr: "مَزْبوط، هَاد الحَكِي صَحّ.",
                    exampleEn: "True, that’s correct.",
                },
                {
                    id: "op_core_12",
                    ar: "لَأ، مِش مِتْأَكِّد",
                    en: "no, I’m not sure",
                    hint: "Expressing doubt",
                    exampleAr: "لَأ، مِش مِتْأَكِّد مِن هالمَعْلُومِة.",
                    exampleEn: "No, I’m not sure about this information.",
                },
                {
                    id: "op_core_13",
                    ar: "لَأ، بْالعَكْس",
                    en: "no, on the contrary",
                    hint: "Strong disagreement but can be neutral in tone",
                    exampleAr: "لَأ، بْالعَكْس، هُوَّ كْثير مُفيد.",
                    exampleEn: "No, on the contrary, it’s very useful.",
                },
                {
                    id: "op_core_14",
                    ar: "لِأَنّه / لَأَنّه",
                    en: "because",
                    hint: "Followed by a sentence",
                    exampleAr: "بِحِبّ الشِّتا لِأَنّه الجَوّ هادي.",
                    exampleEn: "I like winter because the weather is calm.",
                },
                {
                    id: "op_core_15",
                    ar: "عَشَان / عَشان",
                    en: "because / so that",
                    hint: "More colloquial than 'liʾanno'",
                    exampleAr: "بَدْرُس كْثير عَشَان أِتْخَرَّج بَسُرْعَة.",
                    exampleEn: "I study a lot so that I can graduate quickly.",
                },
                {
                    id: "op_core_16",
                    ar: "مَوْضوع",
                    en: "topic",
                    hint: "Subject of discussion",
                    exampleAr: "المَوْضوع حَسّاس شْوَي.",
                    exampleEn: "The topic is a bit sensitive.",
                },
                {
                    id: "op_core_17",
                    ar: "جَدَل",
                    en: "controversy / debate",
                    hint: "Argument about topic",
                    exampleAr: "المَوْضوع عامِل جَدَل عَالسوشال ميديا.",
                    exampleEn: "The topic is causing controversy on social media.",
                },
                {
                    id: "op_core_18",
                    ar: "مُنَاقَشَة",
                    en: "discussion",
                    hint: "General discussion",
                    exampleAr: "مُنَاقَشَة هادي بس فِيها أَدَب.",
                    exampleEn: "The discussion is calm but polite.",
                },
                {
                    id: "op_core_19",
                    ar: "هادِئ / هادِي",
                    en: "calm",
                    hint: "As in calm discussion",
                    exampleAr: "خَلِّينا نِحْكي بِشَكِل هادِي.",
                    exampleEn: "Let’s talk in a calm way.",
                },
                {
                    id: "op_core_20",
                    ar: "عَصَبِي",
                    en: "nervous / hot-tempered",
                    hint: "Describes a person",
                    exampleAr: "ما بَدّي أِطْلَع عَصَبِي بالمُنَاقَشَة.",
                    exampleEn: "I don’t want to become hot-tempered in the discussion.",
                },
                {
                    id: "op_core_21",
                    ar: "مَوْقِف",
                    en: "position / stance",
                    hint: "Your position on a topic",
                    exampleAr: "مَوْقْفي مِخْتِلِف عَن مَوْقَفَك.",
                    exampleEn: "My position is different from yours.",
                },
                {
                    id: "op_core_22",
                    ar: "مِن ناحِيَة... مِن ناحِيَة تانيِة",
                    en: "on one hand... on the other hand",
                    hint: "Balanced opinion",
                    exampleAr: "مِن ناحِيَة التَّكْلِفَة غالْيَة، مِن ناحِيَة تانيِة الجَوْدَة عاليِة.",
                    exampleEn: "On one hand the cost is high, on the other hand the quality is high.",
                },
                {
                    id: "op_core_23",
                    ar: "مَيِّزَة / مَزِيَّة",
                    en: "advantage",
                    hint: "Positive point",
                    exampleAr: "مِن مَيِّزات التَّعْلِيم أونلاين إنّه مَرِن.",
                    exampleEn: "One advantage of online learning is that it’s flexible.",
                },
                {
                    id: "op_core_24",
                    ar: "عَيْب",
                    en: "disadvantage / flaw",
                    hint: "Negative point (not moral shame here)",
                    exampleAr: "أكْبَر عَيْب إنّه بْيِعْزِل النّاس.",
                    exampleEn: "The biggest disadvantage is that it isolates people.",
                },
                {
                    id: "op_core_25",
                    ar: "مُمْتاز",
                    en: "excellent",
                    hint: "Strong positive opinion",
                    exampleAr: "الفِكْرَة مُمْتازَة بَس بِتِحْتاج تَنْفِيذ أَحْسَن.",
                    exampleEn: "The idea is excellent but needs better implementation.",
                },
                {
                    id: "op_core_26",
                    ar: "مُمْل",
                    en: "boring",
                    hint: "Negative quality",
                    exampleAr: "الصُّفوف أونلاين أَحْيانًا مُمْلِّة.",
                    exampleEn: "Online classes are sometimes boring.",
                },
                {
                    id: "op_core_27",
                    ar: "مُفِيد",
                    en: "useful",
                    exampleAr: "الكَوْرْسات أونلاين مُفِيدَة لِكْتير ناس.",
                    exampleEn: "Online courses are useful for many people.",
                },
                {
                    id: "op_core_28",
                    ar: "خَطِير",
                    en: "serious / dangerous",
                    hint: "for issues, not only physical danger",
                    exampleAr: "الإِدْمان عَالسوشال ميديا مَوْضوع خَطِير.",
                    exampleEn: "Addiction to social media is a serious issue.",
                },
                {
                    id: "op_core_29",
                    ar: "مُبالَغَة",
                    en: "exaggeration",
                    hint: "Going too far",
                    exampleAr: "حاسِس إنّك عَم تِبالِغ شْوَي.",
                    exampleEn: "I feel like you are exaggerating a bit.",
                },
                {
                    id: "op_core_30",
                    ar: "مُنْصِف / عادِل",
                    en: "fair / just",
                    hint: "Balanced judgement",
                    exampleAr: "حُكْمَك مِش مُنْصِف تْجاهه.",
                    exampleEn: "Your judgement isn’t fair towards him.",
                },
                {
                    id: "op_core_31",
                    ar: "مِثالي",
                    en: "ideal",
                    exampleAr: "الوَضْع مِثالي عَالوَرَق، بَس مِش بِالحَقيقَة.",
                    exampleEn: "The situation is ideal on paper, but not in reality.",
                },
                {
                    id: "op_core_32",
                    ar: "واقِعي",
                    en: "realistic",
                    exampleAr: "رَأْيَك واقِعي أَكْتَر مِن رَأْيِي.",
                    exampleEn: "Your opinion is more realistic than mine.",
                },
                {
                    id: "op_core_33",
                    ar: "يِقْتَنِع",
                    en: "to be convinced",
                    hint: "Change opinion",
                    exampleAr: "صِرْت مُقْتَنِع بَعْد ما شَرَحْتيلي.",
                    exampleEn: "I became convinced after you explained it to me.",
                },
                {
                    id: "op_core_34",
                    ar: "مُحاوَلَة إِقْناع",
                    en: "attempt to convince",
                    exampleAr: "المُنَاقَشَة مِش دايمًا مُحاوَلَة إِقْناع.",
                    exampleEn: "Discussion isn’t always an attempt to convince.",
                },
                {
                    id: "op_core_35",
                    ar: "نِقاش هادي",
                    en: "calm debate",
                    exampleAr: "بِفَضِّل نَعْمِل نِقاش هادي بِلَا صُراخ.",
                    exampleEn: "I prefer to have a calm debate without shouting.",
                },
            ],
            extra: [
                {
                    id: "op_extra_1",
                    ar: "وجهِة نَظَر",
                    en: "point of view",
                    hint: "Synonym for opinion / perspective",
                    exampleAr: "إلُه وجهِة نَظَر مِخْتِلْفِة.",
                    exampleEn: "He has a different point of view.",
                },
                {
                    id: "op_extra_2",
                    ar: "نِقْطَة قَوَّة",
                    en: "strong point",
                    exampleAr: "هاي نِقْطَة قَوَّة في حِجاجَك.",
                    exampleEn: "This is a strong point in your argument.",
                },
                {
                    id: "op_extra_3",
                    ar: "نِقْطَة ضَعْف",
                    en: "weak point",
                    exampleAr: "في نِقْطَة ضَعْف بالْفِكْرَة.",
                    exampleEn: "There is a weak point in the idea.",
                },
                {
                    id: "op_extra_4",
                    ar: "يِحْتَرِم رَأْي",
                    en: "to respect an opinion",
                    exampleAr: "بِهِمّني تِحْتَرِموا آرَاء بَعْض.",
                    exampleEn: "It is important that you respect each other’s opinions.",
                },
                {
                    id: "op_extra_5",
                    ar: "حِيادِي",
                    en: "neutral",
                    exampleAr: "أنا حِيادِي بِهالمَوْضوع.",
                    exampleEn: "I’m neutral on this topic.",
                },
            ],
        },

        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "صَباح الخير يا لانا، خَلَّصْتِ البْروجِكْت أونلاين؟",
                    en: "Good morning Lana, did you finish the online project?",
                },
                {
                    speaker: "B",
                    ar: "صَباح النّور يا سامِر. لِسّا شْوَي، بَس بِصَراحَة بَحِسّ التَّعْلِيم أونلاين أَفْضَل مِن الوُجودِي.",
                    en: "Good morning Samer. Not yet, but honestly I feel online learning is better than face-to-face.",
                },
                {
                    speaker: "A",
                    ar: "جَدّ؟ بِرَأْيي العَكْس تَمامًا.",
                    en: "Really? In my opinion it’s the complete opposite.",
                },
                {
                    speaker: "B",
                    ar: "مُمْكِن أَفْهَم ليش؟",
                    en: "Can I understand why?",
                },
                {
                    speaker: "A",
                    ar: "بالنِّسْبَة إِلِي، الصَّفوف أونلاين مُمْلِّة، والناس بِتِنْشِتِت كْثير.",
                    en: "For me, online classes are boring and people get very distracted.",
                },
                {
                    speaker: "B",
                    ar: "مَزْبوط في ناس بِتِنْشِتِت، بَس بِاعْتِقادي التَّعْلِيم أونلاين مَرِن أَكْتَر.",
                    en: "True, some people get distracted, but I believe online learning is more flexible.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن أَخْتِلِف مَعَك شْوَي. البَمَاشِر أَسْهَل لِلاسْئِلَة والنِّقاش.",
                    en: "I might disagree with you a bit. In-person is easier for questions and discussion.",
                },
                {
                    speaker: "B",
                    ar: "مَعَك حَقّ بِالنِّقاش، بَس أَحْيانًا الوَقْت ما بِيِسْمَح نِجي عالجامْعَة.",
                    en: "You’re right about discussion, but sometimes we don’t have time to come to campus.",
                },
                {
                    speaker: "A",
                    ar: "صَراحَةً مِش مِتْأَكِّد إنّه الكُل عَم يِسْتَفِيد أونلاين.",
                    en: "Honestly, I’m not sure everyone benefits from online learning.",
                },
                {
                    speaker: "B",
                    ar: "مِن ناحِيَة إنّه في ناس ما بِتِرْكِز، مَعَك حَقّ. مِن ناحِيَة تانيِة، في مَيِّزات، مِثْل تَسْجِيل المَحاضَرَة.",
                    en: "On one hand, you’re right that some people don’t focus. On the other hand, there are advantages, like recording the lecture.",
                },
                {
                    speaker: "A",
                    ar: "هاي مَيِّزَة مُمْتازَة صَراحَةً.",
                    en: "That’s honestly an excellent advantage.",
                },
                {
                    speaker: "B",
                    ar: "خَلِّينا نِتْرُك التَّعْلِيم. شُو رَأْيَك بِالسوشال ميديا؟",
                    en: "Let’s leave education. What’s your opinion on social media?",
                },
                {
                    speaker: "A",
                    ar: "المَوْضوع هون أَكْثَر خَطِير. بَرْأيي الإِدْمان عَالسوشال ميديا عَيْب كْبير.",
                    en: "Here the topic is more serious. In my opinion, addiction to social media is a big problem.",
                },
                {
                    speaker: "B",
                    ar: "أنا وافْقَك إنّه في إِدْمان، بَس كَمان مِفِيدَة لِلتَّواصُل وَالدِّراسَة.",
                    en: "I agree there is addiction, but it’s also useful for communication and study.",
                },
                {
                    speaker: "A",
                    ar: "إي، بَس النّاس صارُت تِضَيِّع وَقْت كْثِير، عَشان هيك بَحِسّ الأَثَر أَكْثَر سَلْبِي.",
                    en: "Yes, but people started wasting a lot of time, so I feel the effect is more negative.",
                },
                {
                    speaker: "B",
                    ar: "حاسِه إنّك عَم تِبالِغ شْوَي.",
                    en: "I feel that you are exaggerating a bit.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن، بَس شُوف الإِحْصائِيّات عن وَقْت الاسْتِخْدام.",
                    en: "Maybe, but look at the statistics about usage time.",
                },
                {
                    speaker: "B",
                    ar: "مَع هيك، ب فکر إنّو المَسْؤوليّة عَالشَّخْص نَفْسُه، هُوَّ يِقَرِّر كَيْف يِسْتَخْدِمها.",
                    en: "Even so, I think the responsibility is on the person themselves; they decide how to use it.",
                },
                {
                    speaker: "A",
                    ar: "حُكْمَك هِنا واقِعي أَكْثَر.",
                    en: "Your judgement here is more realistic.",
                },
                {
                    speaker: "B",
                    ar: "طَيِّب، شُو مَوْقِفَك مِن الشُّغُل مع الدِّراسَة؟",
                    en: "Okay, what’s your position on working while studying?",
                },
                {
                    speaker: "A",
                    ar: "بِرَأْيي إذا الشُّغُل جُزْئِي، مُمْكِن يِكون مُفِيد، لَأَنّه بِعَلِّم مَسْؤوليّة.",
                    en: "In my opinion, if the work is part-time, it can be useful because it teaches responsibility.",
                },
                {
                    speaker: "B",
                    ar: "أنا ما بُوافِقَك مِئِة بِالمِئِة. بَحِسّ إنّه كْثير طَلَب مِن الطّالِب.",
                    en: "I don’t fully agree with you. I feel it’s asking too much from the student.",
                },
                {
                    speaker: "A",
                    ar: "صح في عَيْب، لَأَنّه المَجْهود بْيِصِير أَكْثَر، بَس الفائِدَة عَلى المُسْتَقبَل كْبيرَة.",
                    en: "True, there is a downside because the effort becomes greater, but the benefit for the future is big.",
                },
                {
                    speaker: "B",
                    ar: "مِن ناحِيَة الخِبْرَة مَعَك حَقّ، مِن ناحِيَة الصِّحَّة النَّفْسِيّة أنا خايفَة.",
                    en: "From the perspective of experience you’re right, from the perspective of mental health I’m worried.",
                },
                {
                    speaker: "A",
                    ar: "مُمْكِن نِتَّفِق إنّه كُل حَالِة إلْها ظُرُوفها؟",
                    en: "Can we agree that each case has its own circumstances?",
                },
                {
                    speaker: "B",
                    ar: "إي، هاد حِلّ مُنْصِف. مِش ضَروري نِقْتَنِع نَفْس الرَّأْي.",
                    en: "Yes, that’s a fair solution. We don’t have to be convinced of the same opinion.",
                },
                {
                    speaker: "A",
                    ar: "المُهِم نِحْتَرِم آرَاء بَعْض.",
                    en: "The important thing is that we respect each other’s opinions.",
                },
                {
                    speaker: "B",
                    ar: "صَراحَةً بَسْتَمْتِع لَمّا نِنَاقِش مَواضيع هيك مَعَك.",
                    en: "Honestly, I enjoy it when we discuss topics like this together.",
                },
                {
                    speaker: "A",
                    ar: "وأنا كْمان، الحِوار مَعِك دايمًا هادِي وَمُحْتَرَم.",
                    en: "Me too, the conversation with you is always calm and respectful.",
                },
                {
                    speaker: "B",
                    ar: "يَلّا نِكَمِّل البْروجِكْت قَبْل ما نِدْخُل بِجَدَل تاني!",
                    en: "Let’s finish the project before we get into another debate!",
                },
                {
                    speaker: "A",
                    ar: "مَزْبوط، نِكَمِّل شُغُل وبَعْدين كَمّالِة حَكِي.",
                    en: "True, let’s finish the work and continue talking later.",
                },
                {
                    speaker: "B",
                    ar: "اتِّفَقْنا.",
                    en: "Deal.",
                },
            ],
        },

        grammar: [
            {
                id: "op_gram_1",
                title: "Opinion Starters: بِرَأْيي، بِاعْتِقادي، بالنِّسْبَة إِلِي، بِحِسّ",
                description:
                    "To give opinions in Palestinian Arabic, use phrases like 'بِرَأْيي' (in my opinion), 'بِاعْتِقادي' (I believe), 'بالنِّسْبَة إِلِي' (for me, from my point of view), and 'بِحِسّ' (I feel). Example: 'بِرَأْيي التَّعْلِيم أونلاين مُفِيد' (In my opinion, online education is useful), 'بالنِّسْبَة إِلِي الشُّغُل مع الدِّراسَة مُتْعِب' (For me, working while studying is tiring).",
            },
            {
                id: "op_gram_2",
                title: "Agreeing and Disagreeing Politely",
                description:
                    "For agreement, use 'مَعَك حَقّ' (you’re right), 'مَزْبوط' (that’s correct), 'أنا مُوافِق مَعَك' (I agree with you). For soft disagreement, you can say 'ما بُوافِقَك مِئِة بِالمِئِة' (I don’t fully agree with you), 'مُمْكِن أَخْتِلِف مَعَك شْوَي؟' (Can I disagree with you a bit?), or 'لَأ، بْالعَكْس' (no, on the contrary). These keep the conversation respectful instead of sounding aggressive.",
            },
            {
                id: "op_gram_3",
                title: "Giving Reasons with لَأَنّه and عَشان",
                description:
                    "To give reasons, use 'لَأَنّه' or 'عَشان' followed by a sentence: 'بِحِبّ الشِّتا لَأَنّه الجَوّ هادي' (I like winter because the weather is calm), 'بَدْرُس كْثير عَشان أِتْخَرَّج بَسُرْعَة' (I study a lot so that I can graduate quickly). Both are very common in everyday Palestinian Arabic and make your opinions sound more complete and clear.",
            },
        ],

        practice: {
            quiz: [
                {
                    id: "op_q1",
                    questionAr: "بالنِّسْبَة إِلِي، الشُّغُل مَع الدِّراسَة مُتْعِب.",
                    optionsEn: [
                        "For me, working while studying is tiring.",
                        "For me, working while studying is fun.",
                        "For me, studying is more important than working.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "op_q2",
                    questionAr: "مَعَك حَقّ، بَس مُمْكِن أَخْتِلِف مَعَك شْوَي.",
                    optionsEn: [
                        "You are right, and I totally agree.",
                        "You are right, but I might disagree with you a bit.",
                        "You are wrong and I disagree.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "op_q3",
                    questionAr: "لَأ، بْالعَكْس، السوشال ميديا مُفِيدَة.",
                    optionsEn: [
                        "No, on the contrary, social media is useful.",
                        "No, social media is always dangerous.",
                        "Yes, social media is boring.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "op_q4",
                    questionAr: "بِرَأْيي التَّعْلِيم أونلاين مُفِيد لَأَنّه مَرِن.",
                    optionsEn: [
                        "In my opinion, online learning is useful because it is flexible.",
                        "In my opinion, online learning is boring because it is slow.",
                        "In my opinion, online learning is difficult because it is expensive.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "op_q5",
                    questionAr: "المُهِم نِحْتَرِم آرَاء بَعْض.",
                    optionsEn: [
                        "The important thing is to respect each other’s opinions.",
                        "The important thing is to win every argument.",
                        "The important thing is to change other people’s minds.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A thinks online learning is better; Student B prefers face-to-face classes. They exchange opinions using 'bra'y-i', 'bin-nisbe ʾili', 'ma bawāfeqak mīye b-il-mīye', and give reasons with 'laʾanno' / 'ʿashān'. They must finish by finding at least one point they agree on.",
                "Student A believes working while studying is a good idea; Student B thinks it’s too stressful. They compare advantages (miyyze) and disadvantages (ʿayb), and use 'min nāḥye ... min nāḥye tānye ...' to show a balanced view.",
                "Student A and B talk about social media: A thinks it’s mostly positive, B thinks it’s mostly negative. They practice soft disagreement phrases like 'mumkin axtilif maʿak šway?' and 'ḥāss innak ʿam tbalɣ šway', and end by summarizing each other’s point of view.",
            ],
        },

        homework: {
            instructions:
                "Choose one topic (online learning, working while studying, or social media) and write 8–10 sentences in Palestinian Arabic. Use at least two opinion starters (بِرَأْيي، بِاعْتِقادي، بالْنِّسْبَة إِلِي), two reason phrases (لَأَنّه / عَشان), and one soft disagreement sentence (for example: ما بُوافِقَك مِئِة بِالمِئِة).",
        },

        teacherNotes: {
            warmup: [
                "Write three topics on the board (online learning, social media, work & study). Ask students to stand on a line: agree on one side, disagree on the other, neutral in the middle.",
                "Let students say one short opinion in Arabic about the topic they chose, even if it’s just one sentence like 'بِرَأْيي...' or 'بالنِّسْبَة إِلِي...'.",
            ],
            vocabularySteps: [
                "Teach opinion starters together (bra'y-i, biʿtiqādi, bin-nisbe ʾili, baḥess) with simple examples, and drill chorally and in pairs.",
                "Introduce agreement/disagreement chunks as ready-made blocks: 'maʿak ḥaʾ', 'mazbūṭ', 'ma bawāfeqak', 'mumkin axtilif maʿak šway'. Have students repeat them as short dialogues.",
                "Show how to add 'laʾanno' / 'ʿashān' to make opinions stronger by giving reasons. Ask students to extend simple sentences with a reason.",
            ],
            dialogueSteps: [
                "Play or read the dialogue once without pause; ask general questions (What are they talking about? What topics appear?).",
                "In pairs, students act the dialogue. Then they change the topics (for example, from online learning to studying abroad) but keep the opinion phrases.",
                "Ask students to highlight in the text all expressions of agreement and disagreement. Discuss which ones are soft, which are stronger.",
            ],
            practiceTips: [
                "Use the quiz as a reading or listening check. After each question, ask students to reformulate the sentence with a different opinion starter.",
                "During role-plays, walk around and note good examples of polite disagreement. At the end, share 2–3 examples anonymously on the board.",
                "Encourage students not only to say 'I agree / I disagree', but always try to add 'laʾanno / ʿashān...' to explain why.",
            ],
            wrapup: [
                "Ask volunteers to share one short opinion (2–3 sentences) on any safe topic and another student summarizes it starting with 'huwwa/hiya biʾūl innu...'.",
                "Remind the class that the goal is not to win the argument, but to practice respectful, clear language for opinions.",
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
            lessonTitle: "Unit 3 – Plans and Future Plans",
        },
        overview: {
            title: "Unit 3 – Plans & Future",
            description:
                "In this lesson, students learn how to talk about future plans, intentions, and long-term goals using common Palestinian Arabic structures like 'raḥ', 'biddi', and 'nāwi'.",
            goals: [
                "Use 'raḥ' + present to talk about the near future.",
                "Express intentions and personal plans with 'biddi', 'ḥābb', and 'nāwi'.",
                "Use time expressions (bukra, baʿd bukra, il-usbūʿ il-jāy, baʿdēn) to place events in the future.",
                "Talk about study, work, travel, and personal goals in the future.",
                "Negotiate and adjust plans politely with friends or family.",
            ],
        },

        vocabulary: {
            core: [
                {
                    id: "pf_core_1",
                    ar: "خِطّة",
                    en: "plan",
                    hint: "general plan",
                    exampleAr: "لازِم نِحُطّ خِطّة لِلسَّنَة الجّاي.",
                    exampleEn: "We need to set a plan for next year.",
                },
                {
                    id: "pf_core_2",
                    ar: "بَرْنامِج",
                    en: "schedule / program",
                    hint: "daily or weekly plan",
                    exampleAr: "بَرْنامِج هالأُسْبوع مَلْيان شُغُل.",
                    exampleEn: "This week’s schedule is full of work.",
                },
                {
                    id: "pf_core_3",
                    ar: "جَدْوَل زَمَني",
                    en: "timetable",
                    hint: "more formal schedule",
                    exampleAr: "حَطّينا جَدْوَل زَمَني لِلْمَشروع.",
                    exampleEn: "We set a timetable for the project.",
                },
                {
                    id: "pf_core_4",
                    ar: "مَوْعِد",
                    en: "appointment / time",
                    hint: "fixed time",
                    exampleAr: "عندي مَوْعِد مَع الدُّكتور بُكْرَة.",
                    exampleEn: "I have an appointment with the doctor tomorrow.",
                },
                {
                    id: "pf_core_5",
                    ar: "اِحْتِمال",
                    en: "possibility",
                    hint: "maybe it will happen",
                    exampleAr: "في اِحْتِمال أَسافِر الصَّيف الجّاي.",
                    exampleEn: "There is a possibility I will travel next summer.",
                },
                {
                    id: "pf_core_6",
                    ar: "قَرار",
                    en: "decision",
                    hint: "final choice",
                    exampleAr: "لَسّه ما أَخَدْت القَرار.",
                    exampleEn: "I still haven’t made the decision.",
                },
                {
                    id: "pf_core_7",
                    ar: "هَدَف",
                    en: "goal",
                    hint: "something you want to achieve",
                    exampleAr: "هَدَفي أَتْخَرَّج بِعَلامات عالِيِة.",
                    exampleEn: "My goal is to graduate with high grades.",
                },
                {
                    id: "pf_core_8",
                    ar: "مَشْروع",
                    en: "project / plan",
                    exampleAr: "في مَشْروع كْبير لِلسَّنَة الجّاي.",
                    exampleEn: "There is a big project for next year.",
                },
                {
                    id: "pf_core_9",
                    ar: "مُسْتَقْبَل",
                    en: "future",
                    exampleAr: "بِفَكِّر كْثير بِالْمُسْتَقْبَل.",
                    exampleEn: "I think a lot about the future.",
                },
                {
                    id: "pf_core_10",
                    ar: "ناوي / ناوْيِة",
                    en: "intending to (m/f)",
                    hint: "shows a plan inside you",
                    exampleAr: "أنا ناوْيِة أُكَمِّل ماجْستير.",
                    exampleEn: "I’m intending to continue with a master’s degree.",
                },
                {
                    id: "pf_core_11",
                    ar: "حابِب / حابّة",
                    en: "would like to (m/f)",
                    hint: "softer than 'biddi'",
                    exampleAr: "حابِب أَجَرِّب أُسافِر سَنِة واحْدَة.",
                    exampleEn: "I’d like to try traveling for one year.",
                },
                {
                    id: "pf_core_12",
                    ar: "بِدّي",
                    en: "I want to",
                    hint: "very common for plans",
                    exampleAr: "بِدّي أَدْخُل تَخَصُّص جْدِيد.",
                    exampleEn: "I want to enter a new major.",
                },
                {
                    id: "pf_core_13",
                    ar: "راح / رَح",
                    en: "will (future marker)",
                    hint: "before present verb",
                    exampleAr: "رَح أِقْدِّم عَمنْحَة بُكْرَة.",
                    exampleEn: "I will apply for a scholarship tomorrow.",
                },
                {
                    id: "pf_core_14",
                    ar: "إن شاء الله",
                    en: "God willing / hopefully",
                    hint: "very common after future plan",
                    exampleAr: "رَح أِتْخَرَّج السَّنَة الجّاي، إن شاء الله.",
                    exampleEn: "I’ll graduate next year, God willing.",
                },
                {
                    id: "pf_core_15",
                    ar: "يِمْكِن",
                    en: "maybe",
                    hint: "uncertain plan",
                    exampleAr: "يِمْكِن أُغَيِّر الخِطّة.",
                    exampleEn: "Maybe I’ll change the plan.",
                },
                {
                    id: "pf_core_16",
                    ar: "أَكِيد",
                    en: "for sure / definitely",
                    exampleAr: "أَكِيد رَح أَحْضَر الحَفْلَة.",
                    exampleEn: "Of course I will attend the party.",
                },
                {
                    id: "pf_core_17",
                    ar: "بَعْدين",
                    en: "later / afterwards",
                    exampleAr: "خَلّينا نِدْرُس هَلَّق، وبَعْدين مِنْطْلَع.",
                    exampleEn: "Let’s study now and go out later.",
                },
                {
                    id: "pf_core_18",
                    ar: "هَلَّق",
                    en: "now",
                    exampleAr: "هَلَّق عَندي مِشْوار، بَعْدين بِنْحْكي.",
                    exampleEn: "I have an errand now; we’ll talk later.",
                },
                {
                    id: "pf_core_19",
                    ar: "بُكْرَة",
                    en: "tomorrow",
                    exampleAr: "بُكْرَة رَح نِتْقابَل بالمَكْتَبَة.",
                    exampleEn: "Tomorrow we will meet at the library.",
                },
                {
                    id: "pf_core_20",
                    ar: "بَعْد بُكْرَة",
                    en: "the day after tomorrow",
                    exampleAr: "بَعْد بُكْرَة عِندي مَوْعِد مُهِمّ.",
                    exampleEn: "The day after tomorrow I have an important appointment.",
                },
                {
                    id: "pf_core_21",
                    ar: "الأُسْبوع الجّاي",
                    en: "next week",
                    exampleAr: "الأُسْبوع الجّاي رَح نِبْلِّش المَشروع.",
                    exampleEn: "Next week we will start the project.",
                },
                {
                    id: "pf_core_22",
                    ar: "الشَّهِر الجّاي",
                    en: "next month",
                    exampleAr: "الشَّهِر الجّاي رَح أَنْقُل عَشِقّة جْدِيدَة.",
                    exampleEn: "Next month I will move to a new apartment.",
                },
                {
                    id: "pf_core_23",
                    ar: "السَّنَة الجّاي",
                    en: "next year",
                    exampleAr: "السَّنَة الجّاي ناوي أَبْلِّش تَدْرِيب.",
                    exampleEn: "Next year I intend to start an internship.",
                },
                {
                    id: "pf_core_24",
                    ar: "إجازَة",
                    en: "vacation / holiday",
                    exampleAr: "بالإجازَة رَح أِرْتاح وأُسافِر شْوَي.",
                    exampleEn: "In the vacation I will rest and travel a bit.",
                },
                {
                    id: "pf_core_25",
                    ar: "سَفَر",
                    en: "travel (noun)",
                    exampleAr: "السَّفَر واحِد مِن أَحْلامي لِلْمُسْتَقْبَل.",
                    exampleEn: "Travel is one of my dreams for the future.",
                },
                {
                    id: "pf_core_26",
                    ar: "يِتْخَرَّج",
                    en: "to graduate",
                    exampleAr: "رَح أِتْخَرَّج بَعْد سَنَتَيْن إن شاء الله.",
                    exampleEn: "I will graduate in two years, God willing.",
                },
                {
                    id: "pf_core_27",
                    ar: "يِتْوَظَّف",
                    en: "to get a job",
                    exampleAr: "بَعْد ما أِتْخَرَّج، بَدّي أِتْوَظَّف سِريع.",
                    exampleEn: "After I graduate, I want to get a job quickly.",
                },
                {
                    id: "pf_core_28",
                    ar: "يِوَفِّر مَصاري",
                    en: "to save money",
                    exampleAr: "لازِم أُوَفِّر مَصاري لِلسَّفَر.",
                    exampleEn: "I need to save money for travel.",
                },
                {
                    id: "pf_core_29",
                    ar: "تَدْرِيب",
                    en: "training / internship",
                    exampleAr: "حابّة آخُد تَدْرِيب بِشِرْكَة تِكْنالوجْيا.",
                    exampleEn: "I’d like to take an internship in a tech company.",
                },
                {
                    id: "pf_core_30",
                    ar: "يِلْغي",
                    en: "to cancel",
                    exampleAr: "مُمْكِن نِلْغي الخِطّة إذا الدُّنْيا مَطَر.",
                    exampleEn: "We can cancel the plan if it rains.",
                },
                {
                    id: "pf_core_31",
                    ar: "يِأَجِّل",
                    en: "to postpone",
                    exampleAr: "رَح نِأَجِّل الطِّلْعَة لِلأُسْبوع الجّاي.",
                    exampleEn: "We’ll postpone the outing to next week.",
                },
                {
                    id: "pf_core_32",
                    ar: "يِلْتِزِم",
                    en: "to commit",
                    exampleAr: "لازِم أِلْتِزِم بِجَدْوَل الدِّراسَة الجّديد.",
                    exampleEn: "I have to stick to the new study schedule.",
                },
                {
                    id: "pf_core_33",
                    ar: "يِخَطِّط",
                    en: "to plan",
                    exampleAr: "بِنِخَطِّط لِمَشْروع تَخَرُّج قوي.",
                    exampleEn: "We are planning a strong graduation project.",
                },
                {
                    id: "pf_core_34",
                    ar: "أَوْلَوِيّات",
                    en: "priorities",
                    exampleAr: "لازِم أَرَتِّب أَوْلَوِيّاتي لِلسَّنَة الجّاي.",
                    exampleEn: "I need to organize my priorities for next year.",
                },
                {
                    id: "pf_core_35",
                    ar: "تَغْيِير",
                    en: "change",
                    exampleAr: "أَحْيانًا التَّغْيِير أَحْسَن لِلْمُسْتَقْبَل.",
                    exampleEn: "Sometimes change is better for the future.",
                },
            ],
            extra: [
                {
                    id: "pf_extra_1",
                    ar: "حِلِم",
                    en: "dream (aspiration)",
                    exampleAr: "أَكْبَر حِلِم عِنْدي أُسافِر وأَدْرُس بَرّا.",
                    exampleEn: "My biggest dream is to travel and study abroad.",
                },
                {
                    id: "pf_extra_2",
                    ar: "طُمُوح",
                    en: "ambition",
                    exampleAr: "طُمُوحها تِصير دُكْتورَة جامِعِيّة.",
                    exampleEn: "Her ambition is to become a university professor.",
                },
                {
                    id: "pf_extra_3",
                    ar: "واقِعي",
                    en: "realistic",
                    exampleAr: "بِحاوِل أكون واقِعي بِخِطَطي.",
                    exampleEn: "I try to be realistic with my plans.",
                },
                {
                    id: "pf_extra_4",
                    ar: "خُطْوَة خُطْوَة",
                    en: "step by step",
                    exampleAr: "مِنِمْشي خُطْوَة خُطْوَة لَنوْصَل لِلهَدَف.",
                    exampleEn: "We go step by step to reach the goal.",
                },
                {
                    id: "pf_extra_5",
                    ar: "خِيار تاني",
                    en: "second option / backup plan",
                    exampleAr: "دَايْمًا خَلّي عِنْدَك خِيار تاني.",
                    exampleEn: "Always have a second option.",
                },
            ],
        },

        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "هاي يا مَلِك، كِيفِك اليوم؟",
                    en: "Hey Malek, how are you today?",
                },
                {
                    speaker: "B",
                    ar: "هَلَّق تَعْبان شْوَي، بَس مَبْسوط عَالخِطَط لِلأُسْبوع الجّاي.",
                    en: "I’m a bit tired now, but I’m happy about the plans for next week.",
                },
                {
                    speaker: "A",
                    ar: "جَدّ؟ قُول، شُو مُخَطِّط تِعْمِل؟",
                    en: "Really? Tell me, what are you planning to do?",
                },
                {
                    speaker: "B",
                    ar: "الأُسْبوع الجّاي رَح أِبْلِّش تَدْرِيب بِشِرْكَة سوفتْوِير.",
                    en: "Next week I’ll start an internship at a software company.",
                },
                {
                    speaker: "A",
                    ar: "واو، مُمْتاز! صار لَك زَمان ناوي عَهاد الاشي.",
                    en: "Wow, that’s great! You’ve been intending to do that for a long time.",
                },
                {
                    speaker: "B",
                    ar: "إي، بِرَأْيي هاي خُطْوَة خُطْوَة لِلْمُسْتَقْبَل.",
                    en: "Yes, in my opinion it’s a step-by-step move for the future.",
                },
                {
                    speaker: "A",
                    ar: "طيب وإجازَة الصَّيْف؟ رَح تِسافِر وِلّا كُلَّه شُغُل؟",
                    en: "And the summer vacation? Will you travel or is it all work?",
                },
                {
                    speaker: "B",
                    ar: "حابِب أُسافِر أُسْبوع، بَس أوَّل إِشي بَدّي أُوَفِّر مَصاري.",
                    en: "I’d like to travel for a week, but first I want to save money.",
                },
                {
                    speaker: "A",
                    ar: "إن شاء الله يِزْبُط مَعَك. أنا خِطّتي أِتْخَرَّج السَّنَة الجّاي.",
                    en: "Hopefully it works out. My plan is to graduate next year.",
                },
                {
                    speaker: "B",
                    ar: "وبَعْدين؟ بَعْد التَّخَرُّج، شُو ناوي تِعْمِل؟",
                    en: "And then? After graduation, what do you intend to do?",
                },
                {
                    speaker: "A",
                    ar: "لَسّه القَرار مِش نِهائي، بَس ناوي أَقَدِّم عَشُغُل وبِنْفَس الوَقْت أُكَمِّل دِراسَة.",
                    en: "The decision is not final yet, but I intend to apply for a job and at the same time continue studying.",
                },
                {
                    speaker: "B",
                    ar: "مُو مُسْتَعْجِل شْوَي؟ كْثير شُغُل لَواحِد.",
                    en: "Aren’t you rushing it a bit? It’s a lot of work for one person.",
                },
                {
                    speaker: "A",
                    ar: "مَبْسوط بِالفِكْرَة، بَس إذا شُفْت ضَغْط كْثير مُمْكِن أِأَجِّل واحِد مِن الهَدَفين.",
                    en: "I like the idea, but if I see too much pressure I might postpone one of the two goals.",
                },
                {
                    speaker: "B",
                    ar: "مْهِمّ تِرَتِّب أَوْلَوِيّاتَك، هادا أَهَمّ إشِي.",
                    en: "It’s important to arrange your priorities, that’s the most important thing.",
                },
                {
                    speaker: "A",
                    ar: "صَحّ. على سِيرَة الخِطَط، شُو رَأْيَك نِطْلَع نِتْغَدّى بُكْرَة؟",
                    en: "Right. Speaking of plans, what do you think about going out for lunch tomorrow?",
                },
                {
                    speaker: "B",
                    ar: "بُكْرَة هَلَّق شْوَي مَشْغول، يِمْكِن بَعْد بُكْرَة أَفْضَل.",
                    en: "Tomorrow I’m a bit busy, maybe the day after tomorrow is better.",
                },
                {
                    speaker: "A",
                    ar: "تمام، بَعْد بُكْرَة عَالسّاعَة اِثْنَيْن؟",
                    en: "Okay, the day after tomorrow at two o’clock?",
                },
                {
                    speaker: "B",
                    ar: "أَكِيد، رَح أِفْضي حالي.",
                    en: "Sure, I’ll make myself free.",
                },
                {
                    speaker: "A",
                    ar: "وإذا صار تَغْيِير بالخِطّة؟",
                    en: "And if there’s a change in the plan?",
                },
                {
                    speaker: "B",
                    ar: "مِنْتِّفِق هَلَّق، وإذا اِضْطْرّينا نِلْغي أَو نِأَجِّل، بِبَعْتِلَك مِسِج.",
                    en: "We’ll agree now, and if we have to cancel or postpone, I’ll send you a message.",
                },
                {
                    speaker: "A",
                    ar: "شُكْرًا، بحِبّ الناس إلّي بِتِلْتِزِم بِمَواعِيدها.",
                    en: "Thanks, I like people who stick to their appointments.",
                },
                {
                    speaker: "B",
                    ar: "تِصَدِّق؟ قَبِل، كُنْت أُخَطِّط كْثير وبَس ولا إِشِي يِصِير!",
                    en: "You know what? Before, I used to plan a lot and then nothing happened!",
                },
                {
                    speaker: "A",
                    ar: "هَلَّق صِرْت أَكْثَر واقِعي؟",
                    en: "So now you’ve become more realistic?",
                },
                {
                    speaker: "B",
                    ar: "إي، بِحاوِل أِخُذ خُطْوَة خُطْوَة وما أِحْطّ عَحالي ضَغْط كْثير.",
                    en: "Yes, I try to go step by step and not put too much pressure on myself.",
                },
                {
                    speaker: "A",
                    ar: "حِلِم السَّفَر لِسّه مَوْجود عِنْدَك؟",
                    en: "Is the dream of traveling still there for you?",
                },
                {
                    speaker: "B",
                    ar: "أَكِيد! إن شاء الله بَعْد ما أِتْخَرَّج وَأُوَفِّر مَصاري، رَح أُقْدِّم عَمنْحَة.",
                    en: "Of course! God willing, after I graduate and save money, I’ll apply for a scholarship.",
                },
                {
                    speaker: "A",
                    ar: "وإذا ما زَبَطْت المنْحَة؟",
                    en: "And if the scholarship doesn’t work out?",
                },
                {
                    speaker: "B",
                    ar: "دايمًا في خِيار تاني، مُمْكِن آخُذ كُورْسات أونلاين وأَطَوِّر حالي مِن هون.",
                    en: "There is always a second option: I can take online courses and improve myself from here.",
                },
                {
                    speaker: "A",
                    ar: "هالحَكِي بيعْجِبْني، في تَفاؤُل وبِنَفْس الوَقْت واقِعِي.",
                    en: "I like that; there is optimism and at the same time realism.",
                },
                {
                    speaker: "B",
                    ar: "وإنت؟ شُو أَكْبَر هَدَف لَك لَلْمُسْتَقْبَل؟",
                    en: "And you? What is your biggest goal for the future?",
                },
                {
                    speaker: "A",
                    ar: "هَدَفي أِتْخَرَّج، أِتْوَظَّف بِمَكان بحِبّه، وبَعْدين أُسافِر تَدْرِيب بَرّا سَنِة واحْدَة.",
                    en: "My goal is to graduate, get a job in a place I like, and then travel for a one-year training abroad.",
                },
                {
                    speaker: "B",
                    ar: "إن شاء الله كِلّ خِطَطَك تِزْبُط، خُطْوَة خُطْوَة.",
                    en: "God willing, all your plans will work out, step by step.",
                },
                {
                    speaker: "A",
                    ar: "وإن شاء الله خِطَطَك إنت كْمان.",
                    en: "And God willing, your plans too.",
                },
            ],
        },

        grammar: [
            {
                id: "pf_gram_1",
                title: "Using 'رَح' + Present to Talk About the Future",
                description:
                    "In Palestinian Arabic, the most common way to talk about the future is 'رَح' + present verb. Examples: 'رَح أُدْرُس بُكْرَة' (I will study tomorrow), 'رَح نِبْلِّش المَشروع الأُسْبوع الجّاي' (we will start the project next week). You can also use time expressions without 'رَح' when it’s clear from context, but 'رَح' makes the future meaning explicit.",
            },
            {
                id: "pf_gram_2",
                title: "Intentions with بِدّي، حابِب، ناوي",
                description:
                    "To talk about personal plans and intentions, use 'بِدّي' (I want to), 'حابِب / حابّة' (I would like to), and 'ناوي / ناوْيِة' (I intend to). Example: 'بِدّي أُوَفِّر مَصاري' (I want to save money), 'حابّة آخُد تَدْرِيب' (I’d like to take an internship), 'أنا ناوْيِة أُكَمِّل ماجْستير' (I intend to continue with a master’s). These often appear together with future time expressions.",
            },
            {
                id: "pf_gram_3",
                title: "Future Time Expressions and Sequencing",
                description:
                    "Common future time expressions: 'بُكْرَة' (tomorrow), 'بَعْد بُكْرَة' (day after tomorrow), 'الأُسْبوع الجّاي' (next week), 'الشَّهِر الجّاي' (next month), 'السَّنَة الجّاي' (next year), 'بَعْدين' (later). You can combine them with 'رَح' or with verbs of intention: 'بُكْرَة رَح نِتْقابَل' (tomorrow we’ll meet), 'السَّنَة الجّاي ناوي أِتْخَرَّج' (next year I intend to graduate). For sequences use 'بَعْدين' (afterwards) and 'بَعْد ما' (after): 'أَتْخَرَّج، وبَعْدين رَح أِتْوَظَّف' (I will graduate, and afterwards I’ll get a job).",
            },
        ],

        practice: {
            quiz: [
                {
                    id: "pf_q1",
                    questionAr: "الأُسْبوع الجّاي رَح أِبْلِّش تَدْرِيب.",
                    optionsEn: [
                        "Next week I will start an internship.",
                        "Last week I started an internship.",
                        "Next week I will finish my internship.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "pf_q2",
                    questionAr: "بِدّي أُوَفِّر مَصاري لِلسَّفَر.",
                    optionsEn: [
                        "I want to save money for travel.",
                        "I want to spend money on travel.",
                        "I want to borrow money for travel.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "pf_q3",
                    questionAr: "إن شاء الله السَّنَة الجّاي أِتْخَرَّج.",
                    optionsEn: [
                        "Hopefully I graduate next year.",
                        "I graduated last year.",
                        "I don’t want to graduate next year.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "pf_q4",
                    questionAr: "مُمْكِن نِلْغي الخِطّة إذا صار تَغْيِير.",
                    optionsEn: [
                        "We might cancel the plan if something changes.",
                        "We must follow the plan even if something changes.",
                        "We will never cancel the plan.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "pf_q5",
                    questionAr: "لازِم أَرَتِّب أَوْلَوِيّاتي لِلسَّنَة الجّاي.",
                    optionsEn: [
                        "I need to organize my priorities for next year.",
                        "I need to forget my priorities for next year.",
                        "I need to finish all my priorities this week.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A and Student B are planning their weekend. They agree on one plan for 'bukra' and another 'baʿd bukra'. They must use 'raḥ' + present and at least one time expression (like 'il-usbūʿ il-jāy') and decide what to cancel if it rains.",
                "Student A is finishing university soon and explains long-term plans (work, further study, travel). Student B asks follow-up questions, worries about 'ḍaġṭ' (pressure), and suggests taking things 'xuṭwa xuṭwa'. Use 'biddi', 'ḥābb/a', and 'nāwi/a' to show intention.",
                "Student A and B have a shared project. They create a simple 'xaṭṭa' and 'jadwal zamani' for the next month, decide what happens 'awwal šī', what happens 'baʿdēn', and what they will do 'iza ma zabaṭ il-xiṭṭa il-ʾūlā' (backup plan).",
            ],
        },

        homework: {
            instructions:
                "Write 8–10 sentences in Palestinian Arabic about your plans. Divide them into: 3–4 sentences about next week or next month, and 3–4 sentences about your long-term future. Use 'بِدّي', 'حابِب / حابّة', 'ناوي / ناوْيِة', and at least two time expressions (بُكْرَة، الأُسْبوع الجّاي، السَّنَة الجّاي). End one sentence with 'إن شاء الله'.",
        },

        teacherNotes: {
            warmup: [
                "On the board, write: 'bukra', 'il-usbūʿ il-jāy', 'il-shahar il-jāy', 'il-sane il-jāye'. Ask students to place one personal plan under each time expression (in Arabic or English), then translate key ones to Palestinian Arabic.",
                "Ask a few students: 'šū aʿrbax xaṭṭa ʿindak/ʿindek l-il-mustaqbal?' and accept short answers with any future marker they know.",
            ],
            vocabularySteps: [
                "Present the trio 'biddi / ḥābb / nāwi' with clear examples and let students decide which sounds stronger or softer. Have them transform one sentence using each of the three.",
                "Introduce 'raḥ' carefully with the present tense. Drill short sentences like 'raḥ adrūs bukra', 'raḥ nsāfer il-usbūʿ il-jāy'.",
                "Show how time expressions can replace 'future' markers if context is clear. Contrast: 'bukra adrūs' vs 'bukra raḥ adrūs'.",
            ],
            dialogueSteps: [
                "Read the dialogue once without stopping, then ask students to list all future time expressions they heard.",
                "Students act the dialogue in pairs, then change the details of the plans (different goals, different timelines) while keeping the same structures.",
                "Highlight all instances of 'biddi / ḥābb / nāwi / raḥ / in šāʾ Allāh' and discuss how they show different levels of certainty and intention.",
            ],
            practiceTips: [
                "In the quiz, after choosing the correct English meaning, ask students to change the sentence by swapping time expressions (for example, from 'il-usbūʿ il-jāy' to 'il-shahar il-jāy').",
                "During role-plays, encourage students to actually negotiate realistic schedules so the language feels meaningful.",
                "Remind students they do not need complicated grammar; clear chunks like 'biddi + verb', 'raḥ + verb', and 'baʿdēn' are enough for very natural conversation.",
            ],
            wrapup: [
                "Ask each student to share one short sentence about tomorrow, one about next week, and one about next year, using at least one future marker.",
                "Finish with a quick circle: each student says a future dream beginning with 'aʾbar ḥilm ʿindi...' and ends with 'in šāʾ Allāh'.",
            ],
            myNotes: "",
        },
    },


    // Inside your defaultLessons literal:
    [LESSON_ID_SOCIAL]: {
        meta: {
            level: "Intermediate",
            unit: "Social Conversations",
            lessonTitle: "Unit 4 – Social Conversations & Socializing",
        },
        overview: {
            title: "Unit 4 – Social Conversations",
            description:
                "In this lesson, students learn how to handle everyday social conversations: checking in on friends, showing interest, inviting others, accepting or declining politely, and closing conversations naturally in Palestinian Arabic.",
            goals: [
                "Use common chunks to start and continue friendly conversations.",
                "Ask follow-up questions to show interest and keep the conversation going.",
                "Express feelings (tired, stressed, happy) and react with sympathy or encouragement.",
                "Invite people to social activities and accept or decline invitations politely.",
                "Close conversations smoothly with natural Palestinian Arabic expressions.",
            ],
        },

        vocabulary: {
            core: [
                {
                    id: "sc_core_1",
                    ar: "زَمان عَنَّك!",
                    en: "long time no see!",
                    hint: "Used when you haven’t seen someone for a while",
                    exampleAr: "زَمان عَنَّك! وينَك مُخْتَفِي؟",
                    exampleEn: "Long time no see! Where have you been hiding?",
                },
                {
                    id: "sc_core_2",
                    ar: "شُو أَخْبارَك؟",
                    en: "How are you / what’s new?",
                    hint: "Follow-up after greeting",
                    exampleAr: "أَهْلِين! شُو أَخْبارَك هَالأيّام؟",
                    exampleEn: "Hi! How are you these days?",
                },
                {
                    id: "sc_core_3",
                    ar: "كِيف الدُّنْيا مَعَك؟",
                    en: "How’s life with you?",
                    hint: "Very common small talk question",
                    exampleAr: "كِيف الدُّنْيا مَعَك مَع الدِّراسَة وَالشُّغُل؟",
                    exampleEn: "How’s life with you with study and work?",
                },
                {
                    id: "sc_core_4",
                    ar: "مَشْغول / مَشْغولَة",
                    en: "busy (m/f)",
                    exampleAr: "صِرْت مَشْغولَة كْثير بالفَتْرَة الأَخِيرَة.",
                    exampleEn: "I’ve become very busy lately.",
                },
                {
                    id: "sc_core_5",
                    ar: "مضْغوط / مضْغوطَة",
                    en: "under pressure / stressed",
                    exampleAr: "هالأُسْبوع مضْغوطَة بالشُّغُل.",
                    exampleEn: "This week I’m under pressure with work.",
                },
                {
                    id: "sc_core_6",
                    ar: "تَعْبان / تَعْبانِة",
                    en: "tired (m/f)",
                    exampleAr: "اليوم تَعْبانِة مِن كَثْر المَشاوِير.",
                    exampleEn: "Today I’m tired from all the errands.",
                },
                {
                    id: "sc_core_7",
                    ar: "مَبْسوط / مَبْسوطَة",
                    en: "happy / glad",
                    exampleAr: "مَبْسوطَة إِنّي شُفْتِك.",
                    exampleEn: "I’m happy I saw you.",
                },
                {
                    id: "sc_core_8",
                    ar: "مُتْعِب",
                    en: "tiring / exhausting",
                    exampleAr: "هالفَتْرَة كُلّها مُتْعِبَة نَفْسِيًّا.",
                    exampleEn: "This period is all emotionally tiring.",
                },
                {
                    id: "sc_core_9",
                    ar: "مُريح",
                    en: "relaxing / comfortable",
                    exampleAr: "الْقَعْدَة مَعَكُمْ مُريحَة.",
                    exampleEn: "Sitting with you is relaxing.",
                },
                {
                    id: "sc_core_10",
                    ar: "وَحْشْتِينِي / وَحَشْتِينِي",
                    en: "I’ve missed you (to female)",
                    hint: "Said to close friend",
                    exampleAr: "عنْجَد وَحْشْتِينِي!",
                    exampleEn: "I really missed you!",
                },
                {
                    id: "sc_core_11",
                    ar: "إلْنا زَمان ما حَكَيْنا.",
                    en: "We haven’t talked in a long time.",
                    exampleAr: "إلْنا زَمان ما حَكَيْنا عَالتِّليفون.",
                    exampleEn: "We haven’t talked on the phone in a long time.",
                },
                {
                    id: "sc_core_12",
                    ar: "جَدّ؟",
                    en: "really?",
                    hint: "short reaction",
                    exampleAr: "جَدّ؟ ما كُنْت عارْفَة!",
                    exampleEn: "Really? I didn’t know!",
                },
                {
                    id: "sc_core_13",
                    ar: "عنْجَد؟",
                    en: "seriously?",
                    hint: "stronger than 'jad' sometimes",
                    exampleAr: "عنْجَد؟ هاد خَبَر حِلْو!",
                    exampleEn: "Seriously? That’s great news!",
                },
                {
                    id: "sc_core_14",
                    ar: "حَرَام!",
                    en: "oh no! / that’s a pity!",
                    hint: "sympathy / empathy",
                    exampleAr: "حَرَام! مَعْقول صار هيك؟",
                    exampleEn: "Oh no! Did this really happen?",
                },
                {
                    id: "sc_core_15",
                    ar: "وَلا يِهُمِّك",
                    en: "don’t worry about it",
                    exampleAr: "وَلا يِهُمِّك، كُلّها بِتِنْحَلّ.",
                    exampleEn: "Don’t worry, it will all be solved.",
                },
                {
                    id: "sc_core_16",
                    ar: "الله يِسَهِّل",
                    en: "may it go smoothly",
                    hint: "wish things go easily",
                    exampleAr: "الله يِسَهِّل عَلَيْك بِالامْتِحان.",
                    exampleEn: "May your exam go smoothly.",
                },
                {
                    id: "sc_core_17",
                    ar: "مَبْروك!",
                    en: "congratulations!",
                    exampleAr: "مَبْروك عالشُّغُل الجّديد!",
                    exampleEn: "Congratulations on the new job!",
                },
                {
                    id: "sc_core_18",
                    ar: "سَلِّمِي عَالأهْل.",
                    en: "Say hi to the family for me.",
                    exampleAr: "ما تِنْسي تِسَلِّمِي عَالأهْل.",
                    exampleEn: "Don’t forget to say hi to the family for me.",
                },
                {
                    id: "sc_core_19",
                    ar: "تيجي مَعْنا؟",
                    en: "Will you come with us?",
                    hint: "inviting someone to join",
                    exampleAr: "اليوم عَالمَقْهى، تيجي مَعْنا؟",
                    exampleEn: "We’re going to the café today, will you come with us?",
                },
                {
                    id: "sc_core_20",
                    ar: "حابّة / حابِب",
                    en: "I’d like to (f/m)",
                    exampleAr: "عنْجَد حابّة أِجي، بَس اليوم ما بَقْدَر.",
                    exampleEn: "I’d really like to come, but today I can’t.",
                },
                {
                    id: "sc_core_21",
                    ar: "ما بَقْدَر",
                    en: "I can’t",
                    hint: "used with excuse",
                    exampleAr: "ما بَقْدَر أُطْلَع، عندي شُغُل.",
                    exampleEn: "I can’t go out, I have work.",
                },
                {
                    id: "sc_core_22",
                    ar: "مَعْلِشّ مَرّة تانيِة.",
                    en: "maybe another time / next time.",
                    hint: "soft refusal",
                    exampleAr: "مَعْلِشّ مَرّة تانيِة، هَلَّق تَعْبانِة.",
                    exampleEn: "Maybe another time, I’m tired now.",
                },
                {
                    id: "sc_core_23",
                    ar: "مُناسِب إِلَك؟",
                    en: "Does it suit you?",
                    hint: "check if time/plan works",
                    exampleAr: "الجُّمْعَة مَسا مُناسِب إِلَك؟",
                    exampleEn: "Is Friday evening good for you?",
                },
                {
                    id: "sc_core_24",
                    ar: "مُمْكِن نِغَيِّر الوَقْت؟",
                    en: "Can we change the time?",
                    exampleAr: "مُمْكِن نِغَيِّر الوَقْت لِبُكْرَة؟",
                    exampleEn: "Can we change the time to tomorrow?",
                },
                {
                    id: "sc_core_25",
                    ar: "عن إذْنَك / عن إذْنِك",
                    en: "excuse me (when leaving)",
                    exampleAr: "عن إذْنِك بَدّي أِمْشي هَلَّق.",
                    exampleEn: "Excuse me, I have to go now.",
                },
                {
                    id: "sc_core_26",
                    ar: "طَوَّلْنا عَلَيْك.",
                    en: "We’ve kept you too long.",
                    hint: "when ending a long conversation",
                    exampleAr: "طَوَّلْنا عَلَيْك، خَلّيك تِرْتاح.",
                    exampleEn: "We’ve kept you long, let’s let you rest.",
                },
                {
                    id: "sc_core_27",
                    ar: "شَرَّفْتونا.",
                    en: "You honored us (welcome phrase).",
                    exampleAr: "شَرَّفْتونا بِزيارَتْكُم.",
                    exampleEn: "Your visit honored us.",
                },
                {
                    id: "sc_core_28",
                    ar: "نَوَّرْتونا.",
                    en: "You lit us up (you brightened our place).",
                    exampleAr: "نَوَّرْتونا اليَوم.",
                    exampleEn: "You brightened our day today.",
                },
                {
                    id: "sc_core_29",
                    ar: "يِرْنّ عَلَيّ",
                    en: "to call me (phone)",
                    exampleAr: "رِنّ عَلَيّ لَمّا تِوْصَل.",
                    exampleEn: "Call me when you arrive.",
                },
                {
                    id: "sc_core_30",
                    ar: "نِظَلّ على تَواصُل.",
                    en: "let’s stay in touch.",
                    exampleAr: "نِظَلّ على تَواصُل، ما بَدّي نِقْطَع.",
                    exampleEn: "Let’s stay in touch, I don’t want us to lose contact.",
                },
                {
                    id: "sc_core_31",
                    ar: "إذَا إحْتَجْت إِشِي حْكِي مَعِي.",
                    en: "If you need anything, talk to me.",
                    exampleAr: "إذَا إحْتَجْت إِشِي حْكِي مَعِي بِأيّ وَقْت.",
                    exampleEn: "If you need anything, talk to me anytime.",
                },
                {
                    id: "sc_core_32",
                    ar: "بِهُمّني أمْرَك.",
                    en: "I care about you / your situation.",
                    exampleAr: "بِهُمّني أمْرَك، عَشان هيك بِسْأل كْثير.",
                    exampleEn: "I care about you, that’s why I ask a lot.",
                },
                {
                    id: "sc_core_33",
                    ar: "وَقْت فاضي",
                    en: "free time",
                    exampleAr: "عِنْدي وَقْت فاضي الجُّمْعَة، نِتْلاقى؟",
                    exampleEn: "I’m free on Friday, shall we meet?",
                },
                {
                    id: "sc_core_34",
                    ar: "قَعْدِة هادِي",
                    en: "chill sitting / relaxed hangout",
                    exampleAr: "يَلّا نِعْمِل قَعْدِة هادِي بالقَهْوَة.",
                    exampleEn: "Let’s have a chill hangout at the café.",
                },
                {
                    id: "sc_core_35",
                    ar: "أُجْواء لَطيفَة",
                    en: "nice atmosphere",
                    exampleAr: "المَكان إِلُه أُجْواء لَطيفَة لِلحَكِي.",
                    exampleEn: "The place has a nice atmosphere for talking.",
                },
            ],
            extra: [
                {
                    id: "sc_extra_1",
                    ar: "مُجامَلَة",
                    en: "small polite comment / compliment",
                    exampleAr: "شْوَي مُجامَلَة بِتِفْتَح الحَديث.",
                    exampleEn: "A bit of compliment opens the conversation.",
                },
                {
                    id: "sc_extra_2",
                    ar: "يِفَكِّر فِيك",
                    en: "to think of you",
                    exampleAr: "حَلُو إنّك تِفَكِّري فِيي وتِسْأَلِي.",
                    exampleEn: "It’s nice that you think of me and ask.",
                },
                {
                    id: "sc_extra_3",
                    ar: "يِواسّي",
                    en: "to comfort / console",
                    exampleAr: "حاوَلت أُواسّيه لَمّا كان مْزَعْل.",
                    exampleEn: "I tried to comfort him when he was upset.",
                },
                {
                    id: "sc_extra_4",
                    ar: "مَوْضوع حَسّاس",
                    en: "sensitive topic",
                    exampleAr: "خَلِّينا ما نِفُوت بِمَوْضوع حَسّاس.",
                    exampleEn: "Let’s not get into a sensitive topic.",
                },
                {
                    id: "sc_extra_5",
                    ar: "نُقْطَة مُشْتَرَكِة",
                    en: "common point",
                    exampleAr: "دايمًا في نُقْطَة مُشْتَرَكِة تِفْتَح حَديث.",
                    exampleEn: "There is always a common point that opens conversation.",
                },
            ],
        },

        dialogue: {
            lines: [
                {
                    speaker: "A",
                    ar: "سَلامات يا دينا! زَمان عَنِّك!",
                    en: "Hey Dina! Long time no see!",
                },
                {
                    speaker: "B",
                    ar: "سَلام يا نادين! عنْجَد إلْنا زَمان ما حَكَيْنا.",
                    en: "Hi Nadine! Really, we haven’t talked in a long time.",
                },
                {
                    speaker: "A",
                    ar: "شُو أَخْبارِك؟ كِيف الدُّنْيا مَعِك هَالأيّام؟",
                    en: "How are you? How’s life with you these days?",
                },
                {
                    speaker: "B",
                    ar: "والله مَشْغولَة ومضْغوطَة شْوَي مَع الدِّراسَة، بَس مَبْسوطَة.",
                    en: "Honestly, I’m busy and a bit stressed with studies, but I’m happy.",
                },
                {
                    speaker: "A",
                    ar: "جَدّ؟ عنْجَد وَحْشْتِينِي.",
                    en: "Really? I really missed you.",
                },
                {
                    speaker: "B",
                    ar: "وأنتي أَكْتَر. إنتي كِيفِك؟",
                    en: "I missed you more. How are you?",
                },
                {
                    speaker: "A",
                    ar: "هالفَتْرَة تَعْبانِة نَفْسِيًّا شْوَي، بَس القَعْدِة مَعِك مُريحَة.",
                    en: "Recently I’ve been a bit emotionally tired, but sitting with you is relaxing.",
                },
                {
                    speaker: "B",
                    ar: "حَرَام! شُو صايِر مَعِك؟ إذا بِتْحِبّي تِحْكِي.",
                    en: "Oh no! What’s going on with you? If you’d like to talk.",
                },
                {
                    speaker: "A",
                    ar: "كُلّها ضَغْط دِراسَة وشُوَيّة مَشاكِل بالبيت، بَس وَلا يِهُمِّك، عَم أِتْعامَل مَعها.",
                    en: "It’s all study pressure and some problems at home, but don’t worry, I’m dealing with it.",
                },
                {
                    speaker: "B",
                    ar: "الله يِسَهِّل عَلَيْك. بِهُمّني أمْرِك، عَشان هيك بسأَل كْثير.",
                    en: "May it go smoothly for you. I care about you, that’s why I ask a lot.",
                },
                {
                    speaker: "A",
                    ar: "شُكْرًا، حَكِيك بِرَيِّح. وإنتي؟ كِيف الشُّغُل التَّطَوُّعِي؟",
                    en: "Thanks, your words are comforting. And you? How’s the volunteer work?",
                },
                {
                    speaker: "B",
                    ar: "مُتْعِب بَس مُفيد. بَتْعَرَّف عَناس جُدُد وكْمان بِنْبَسِط.",
                    en: "Tiring but useful. I meet new people and I also have fun.",
                },
                {
                    speaker: "A",
                    ar: "أُجْواء المَركَز دايمًا لَطيفَة.",
                    en: "The atmosphere at the center is always nice.",
                },
                {
                    speaker: "C",
                    ar: "مَسّا الخير! شَرَّفْتونا.",
                    en: "Good evening! Welcome (you honored us).",
                },
                {
                    speaker: "B",
                    ar: "مَسّا النّور يا سامر! نَوَّرْت.",
                    en: "Good evening, Samer! You brightened the place.",
                },
                {
                    speaker: "A",
                    ar: "هاي سامر، زَمان عَنْك إنت كمان.",
                    en: "Hi Samer, long time no see for you too.",
                },
                {
                    speaker: "C",
                    ar: "والله مَشْغول بالشُّغُل، بَس اليَوم عِنْدي وَقْت فاضي لِلقَعْدِة.",
                    en: "Honestly I’m busy with work, but today I have free time to hang out.",
                },
                {
                    speaker: "B",
                    ar: "تيجي مَعْنا الجُّمْعَة عَالقَهْوَة؟ بدنا نِعْمِل قَعْدِة هادِي.",
                    en: "Will you come with us on Friday to the café? We want to have a chill hangout.",
                },
                {
                    speaker: "C",
                    ar: "عنْجَد حابِب، الجُّمْعَة مَسا مُناسِب إِلَي.",
                    en: "I’d really like to, Friday evening works for me.",
                },
                {
                    speaker: "A",
                    ar: "نِبْعَت عَالجروب التفاصِيل. دينا، إنتي فاضْيِة الجُّمْعَة؟",
                    en: "We’ll send the details to the group. Dina, are you free on Friday?",
                },
                {
                    speaker: "B",
                    ar: "عنْجَد حابّة أِجي، بَس الجُّمْعَة عَندي اِمْتِحان يوم الأحَد، ولازِم أَدْرُس.",
                    en: "I’d really like to come, but on Friday I have an exam on Sunday, and I need to study.",
                },
                {
                    speaker: "A",
                    ar: "مَعْلِشّ مَرّة تانيِة، الدِّراسَة أَهَمّ.",
                    en: "No worries, maybe another time; studying is more important.",
                },
                {
                    speaker: "C",
                    ar: "مُمْكِن نِغَيِّر الوَقْت لِالسَّبْت مَسا؟",
                    en: "Can we change the time to Saturday evening?",
                },
                {
                    speaker: "B",
                    ar: "السَّبْت مَسا أَرْوَق لِي، بَس بَسْأَل الأَهْل وبَرُدّ عَلَيْكُم.",
                    en: "Saturday evening is more comfortable for me, but I’ll ask my parents and get back to you.",
                },
                {
                    speaker: "A",
                    ar: "تمام، رِنِّي عَلَيْنا أَو بَعْتي مِسِج.",
                    en: "Okay, call us or send a message.",
                },
                {
                    speaker: "C",
                    ar: "نِظَلّ على تَواصُل، ما بَدّنا نِقْطَع مَرّة تانيِة.",
                    en: "Let’s stay in touch; we don’t want to lose contact again.",
                },
                {
                    speaker: "B",
                    ar: "صَحّ حَكِيك. إلْنا زَمان مشتاقِين لَهالقَعْدات.",
                    en: "You’re right. We’ve been missing these hangouts for a long time.",
                },
                {
                    speaker: "A",
                    ar: "طَوَّلْنا عَلَيْك يا سامر، عِنْدَك شُغُل بَعْدين؟",
                    en: "We’ve kept you long, Samer, do you have work later?",
                },
                {
                    speaker: "C",
                    ar: "شُوَيّة شُغُل، بَس هَلَّق مِرْتاح مَعْكُم.",
                    en: "A bit of work, but now I’m relaxed with you.",
                },
                {
                    speaker: "B",
                    ar: "عن إذْنِكُم، بَدّي أِمْشي بَس قَبِل ما تِتْأَخَّر الحافِلَة.",
                    en: "Excuse me, I have to go before the bus is late.",
                },
                {
                    speaker: "A",
                    ar: "ماشي، الله يِسَهِّل عَلَيْك، رِنِّي لَمّا تِوْصَلِي.",
                    en: "Okay, may things go smoothly for you, call me when you arrive.",
                },
                {
                    speaker: "C",
                    ar: "سَلِّمِي عَالأهْل، ونِتْلاقى السَّبْت إن شاء الله.",
                    en: "Say hi to the family for me, and we’ll meet Saturday, God willing.",
                },
                {
                    speaker: "B",
                    ar: "مَبْسوطَة إِنّي شُفْتْكُم اليَوم. نَوَّرْتوني.",
                    en: "I’m happy I saw you today. You brightened my day.",
                },
                {
                    speaker: "A",
                    ar: "وإحْنا كْمان، نِظَلّ على تَواصُل.",
                    en: "Us too, let’s stay in touch.",
                },
            ],
        },

        grammar: [
            {
                id: "sc_gram_1",
                title: "Starting and Continuing Social Conversations",
                description:
                    "Use friendly chunks to start social talk: 'زَمان عنّك!' (long time no see), 'شُو أَخْبارَك؟' (how are you/what’s new), 'كِيف الدُّنْيا مَعَك؟' (how’s life with you). Follow with simple comments and questions to keep the conversation going: 'مَشْغولَة هالفَتْرَة', 'جَدّ؟ عنْجَد؟' plus 'وشُو بَعْدين؟' to ask for more details.",
            },
            {
                id: "sc_gram_2",
                title: "Expressing Feelings and Reacting with Empathy",
                description:
                    "To describe how you feel, use: 'تَعْبان/ة' (tired), 'مضْغوط/ة' (under pressure), 'مَبْسوط/ة' (happy), 'مُتْعِب' (tiring). Example: 'هالفَتْرَة مضْغوطَة بالدِّراسَة' (lately I’m stressed with study). To react, use empathy chunks: 'حَرَام!' (oh no), 'وَلا يِهُمِّك' (don’t worry), 'الله يِسَهِّل عَلَيْك' (may it go smoothly for you), 'بِهُمّني أمْرَك' (I care about you). These make the conversation warmer and more supportive.",
            },
            {
                id: "sc_gram_3",
                title: "Inviting, Accepting, and Declining Politely",
                description:
                    "For invitations use 'تيجي مَعْنا؟' (will you come with us?), or 'مُناسِب إِلَك؟' (does that suit you?). To accept: 'عنْجَد حابِب/حابّة' (I’d really like to), 'أَكِيد' (for sure). To decline politely, use a combination of positive feeling + reason + softener: 'عنْجَد حابّة أِجي، بَس اليوم ما بَقْدَر، مَعْلِشّ مَرّة تانيِة' (I’d really like to come, but today I can’t, maybe another time). This keeps relationships positive even when you say no.",
            },
        ],

        practice: {
            quiz: [
                {
                    id: "sc_q1",
                    questionAr: "زَمان عَنَّك! شُو أَخْبارَك؟",
                    optionsEn: [
                        "Long time no see! How are you?",
                        "Where are you going?",
                        "Why are you late?",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sc_q2",
                    questionAr: "وَلا يِهُمِّك، كُلّها بِتِنْحَلّ.",
                    optionsEn: [
                        "Don’t worry, it will all be solved.",
                        "I don’t care about your problem.",
                        "Everything is getting worse.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sc_q3",
                    questionAr: "عنْجَد حابّة أِجي، بَس اليوم ما بَقْدَر.",
                    optionsEn: [
                        "I really want to come, but I can’t today.",
                        "I don’t want to come today.",
                        "I will come today no matter what.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sc_q4",
                    questionAr: "نِظَلّ على تَواصُل.",
                    optionsEn: [
                        "Let’s stay in touch.",
                        "Let’s stop talking.",
                        "Let’s change the topic.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "sc_q5",
                    questionAr: "سَلِّمِي عَالأهْل.",
                    optionsEn: [
                        "Say hi to the family for me.",
                        "Tell the family to come.",
                        "I don’t want to see the family.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Student A meets an old friend at university after a long time. They start with 'zaman ʿannak', ask 'šū axbārak?' and talk about how life has been (busy, stressed, happy). They must use at least two empathy reactions like 'ḥarām!' and 'walla yihimmak'.",
                "Student A invites Student B to a small gathering at a café. One time B accepts with enthusiasm, another time B politely declines using the pattern: 'ʿanjad ḥābbe, bas mā baʾdar il-yōm, maʿliš marra tāniyye'. Practice both versions.",
                "Three friends are planning a weekend hangout. They negotiate the day and time, check if it is 'munāsib', and agree on a plan. At the end, they close the conversation with natural formulas like 'ʿan ʾidnak', 'ʾallah yisahhel', 'niẓall ʿala tawāṣol'.",
            ],
        },

        homework: {
            instructions:
                "Write 8–10 sentences in Palestinian Arabic that show a short social conversation between you and a friend. Start with greeting and 'زَمان عَنَّك', ask about life, mention if you are busy/tired/happy, and finish with an invitation (real or imaginary) and a polite acceptance or refusal. Try to use at least three chunks from the vocabulary list (for example: وَلا يِهُمِّك، عنْجَد؟، نِظَلّ على تَواصُل).",
        },

        teacherNotes: {
            warmup: [
                "Ask students: in your language, what do you usually say after 'hello' when you see a friend after a long time? Then present the Arabic chunks 'zaman ʿannak', 'šū axbārak?', 'kīf id-dinya maʿak?'.",
                "On the board, write different feelings (tired, stressed, happy, relaxed) and elicit Palestinian Arabic equivalents from students. Add new ones as needed and practice saying them with real facial expressions.",
            ],
            vocabularySteps: [
                "Group the chunks by function: starting conversation, expressing feeling, reacting with empathy, inviting, and closing. Teach them as small ready-made pieces rather than single words.",
                "Have students practice mini-dialogues of 3–4 lines only using fixed chunks: A: 'zaman ʿannak! šū axbārak?' B: short feeling + A: empathy + short wish.",
                "Encourage students to personalize: they decide which empathy chunks they like and will actually use (for example, some prefer 'wallā yihimmak', others 'allah yisahhel').",
            ],
            dialogueSteps: [
                "Read or play the dialogue. Ask comprehension questions like: who is tired? who is busy? when do they plan to meet?",
                "Students act the dialogue in groups of three, then change details: different day, place, or excuse, but keep the same social chunks.",
                "Highlight how the conversation is opened, how they show interest, how they invite, how they refuse politely, and how they close the talk.",
            ],
            practiceTips: [
                "When doing role-plays, tell students the goal is to sound natural, not perfect. They can lean on the vocabulary list as a 'phrase bank'.",
                "If students are shy, allow them to first write short scripts in pairs, then read them with more focus on pronunciation and intonation.",
                "Draw attention to tone: the same sentence can sound warm or cold depending on voice and facial expression. Encourage supportive tone when reacting to problems.",
            ],
            wrapup: [
                "Have students walk around the class and do short 30-second social conversations with 3 classmates: greeting, one feeling, one empathy reaction, and a goodbye.",
                "End by asking a few volunteers to share one chunk they liked and will start using in real life (for example: 'niẓall ʿala tawāṣol').",
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

let customUnits = {
    Beginner: [],
    "Pre-Intermediate": [],
    Intermediate: [],
};

// ========================= HELPERS =========================
const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));

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
    document.body.classList.remove("home-only");
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
            units: ["Opinions", "Complaints", "Plans & Future", "Social Conversations"],
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
function openVocabModal(item) {
    $("#vocabModalWord").textContent = item.ar;
    $("#vocabModalMeaning").textContent = item.en;
    $("#vocabModalHint").textContent = item.hint || "";
    $("#vocabModalExampleAr").textContent = item.exampleAr || "";
    $("#vocabModalExampleEn").textContent = item.exampleEn || "";
    $("#vocabModal").classList.add("modal--open");
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

    items.forEach((item) => {
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
            openVocabModal(item);
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
        enSpeaker.className = "dialogue-speaker";
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
        arSpeaker.className = "dialogue-speaker";
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
