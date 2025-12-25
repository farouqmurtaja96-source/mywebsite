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
            lessonTitle: "Lesson 1 – Greetings & Introductions",
        },

        overview: {
            title: "Unit 1 – Greetings",
            description:
                "In this lesson, the student will learn how to greet, introduce themselves, and ask basic questions about name, country, and where they live using Palestinian Arabic.",
            goals: [
                "Use common Palestinian Arabic greetings appropriately in casual and polite situations.",
                "Introduce themselves: name, where they are from, and where they live now.",
                "Ask and answer simple questions about name, country, and city.",
                "Recognize masculine vs feminine and singular vs plural forms in greetings.",
            ],
        },

        // =======================
        // VOCABULARY (حوالي 35 كلمة)
        // =======================
        vocabulary: {
            core: [
                {
                    id: "marhaba",
                    ar: "مَرْحَبَا",
                    en: "Hi / Hello",
                    hint: "Most common casual greeting for anyone, any time of day.",
                    exampleAr: "مَرْحَبَا، أَنَا اِسْمِي رَزَان.",
                    exampleEn: "Hi, my name is Razan.",
                },
                {
                    id: "ahlaWshahla",
                    ar: "أَهْلًا وَسَهْلًا",
                    en: "Welcome / Hello",
                    hint: "Used to warmly welcome someone (guest, visitor, student).",
                    exampleAr: "أَهْلًا وَسَهْلًا فِي غَزَّة.",
                    exampleEn: "Welcome to Gaza.",
                },
                {
                    id: "salaam",
                    ar: "السَّلَامُ عَلَيْكُمْ",
                    en: "Peace be upon you",
                    hint: "More formal or religious greeting when entering a room or group.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ جَمِيعًا.",
                    exampleEn: "Peace be upon you all.",
                },
                {
                    id: "salaam_reply",
                    ar: "وَعَلَيْكُم السَّلَام",
                    en: "And peace be upon you",
                    hint: "Standard reply to السَّلَامُ عَلَيْكُمْ.",
                    exampleAr: "السَّلَامُ عَلَيْكُمْ. ـ وَعَلَيْكُم السَّلَام.",
                    exampleEn: "Peace be upon you. — And peace be upon you.",
                },
                {
                    id: "sabahElkheir",
                    ar: "صَبَاح الْخِير",
                    en: "Good morning",
                    hint: "Reply: صَبَاح النُّور.",
                    exampleAr: "صَبَاح الْخِير يَا شَبَاب.",
                    exampleEn: "Good morning, guys.",
                },
                {
                    id: "masaElkheir",
                    ar: "مَسَا الْخِير",
                    en: "Good evening",
                    hint: "Used in the evening; reply: مَسَا النُّور.",
                    exampleAr: "مَسَا الْخِير، كِيفِك الْيَوْم؟",
                    exampleEn: "Good evening, how are you today?",
                },
                {
                    id: "keefak",
                    ar: "كِيفَك؟",
                    en: "How are you? (to a male)",
                    hint: "To a female: كِيفِك؟; to a group: كِيفْكُم؟",
                    exampleAr: "كِيفَك الْيَوْم؟",
                    exampleEn: "How are you today?",
                },
                {
                    id: "mnee7",
                    ar: "مْنِيح",
                    en: "Good / fine (masculine)",
                    hint: "Feminine: مْنِيحَة; plural: مْنَاح.",
                    exampleAr: "أَنَا مْنِيح، شُكْرًا.",
                    exampleEn: "I’m good, thanks.",
                },
                {
                    id: "tamaam",
                    ar: "تَمَام",
                    en: "Okay / all good",
                    hint: "Neutral answer; works for everyone.",
                    exampleAr: "كِيفِك؟ ـ تَمَام.",
                    exampleEn: "How are you? — I’m fine.",
                },
                {
                    id: "shoIsmak",
                    ar: "شُو اِسْمَك؟",
                    en: "What’s your name? (to a male)",
                    hint: "To a female: شُو اِسْمِك؟; polite plural: شُو أَسَامِيكُم؟",
                    exampleAr: "مَرْحَبَا، شُو اِسْمَك؟",
                    exampleEn: "Hi, what’s your name?",
                },
                {
                    id: "anaIsmi",
                    ar: "أَنَا اِسْمِي...",
                    en: "My name is …",
                    hint: "Use with your first name.",
                    exampleAr: "أَنَا اِسْمِي مَرْيَم.",
                    exampleEn: "My name is Maryam.",
                },
                {
                    id: "minWen",
                    ar: "مِنْ وِين؟",
                    en: "Where are you from?",
                    hint: "Pronounced: min wein; to group: مِنْ وِين إِنْتُو؟",
                    exampleAr: "مِنْ وِين إِنْتَ؟",
                    exampleEn: "Where are you from?",
                },
                {
                    id: "anaMin",
                    ar: "أَنَا مِنْ...",
                    en: "I am from …",
                    hint: "Use with country or city of origin.",
                    exampleAr: "أَنَا مِنْ أَمْرِيكَا.",
                    exampleEn: "I am from the US.",
                },
                {
                    id: "wenSaken",
                    ar: "وِين سَاكِن؟",
                    en: "Where do you live? (to a male)",
                    hint: "To a female: وِين سَاكْنَة؟; to a group: وِين سَاكْنِين؟",
                    exampleAr: "إِنْتَ وِين سَاكِن هَلَّقْ؟",
                    exampleEn: "Where do you live now?",
                },
                {
                    id: "anaSaken",
                    ar: "أَنَا سَاكِن فِي...",
                    en: "I live in … (said by a male)",
                    hint: "Feminine: أَنَا سَاكْنَة فِي...",
                    exampleAr: "أَنَا سَاكِن فِي رَام اللّٰه.",
                    exampleEn: "I live in Ramallah.",
                },
                {
                    id: "anaBadros",
                    ar: "أَنَا بَدْرُس...",
                    en: "I study …",
                    hint: "Add what you study: عَرَبِي، طِب، هَنْدَسِة...",
                    exampleAr: "أَنَا بَدْرُس عَرَبِي.",
                    exampleEn: "I study Arabic.",
                },
                {
                    id: "anaBashtghol",
                    ar: "أَنَا بَشْتِغِل...",
                    en: "I work as …",
                    hint: "Example: أَنَا بَشْتِغِل مُدَرِّس / مُهَنْدِس.",
                    exampleAr: "أَنَا بَشْتِغِل مُدَرِّس.",
                    exampleEn: "I work as a teacher.",
                },
                {
                    id: "mabsut",
                    ar: "مَبْسُوط",
                    en: "Happy / pleased (masculine)",
                    hint: "Feminine: مَبْسُوطَة; plural: مَبْسُوطِين.",
                    exampleAr: "أَنَا مَبْسُوط الْيَوْم.",
                    exampleEn: "I’m happy today.",
                },
                {
                    id: "forsahSaeedeh",
                    ar: "فُرْصَة سَعِيدَة",
                    en: "Nice to meet you",
                    hint: "Polite phrase when meeting someone.",
                    exampleAr: "فُرْصَة سَعِيدَة يَا سَامِر.",
                    exampleEn: "Nice to meet you, Samer.",
                },
                {
                    id: "tsharrafna",
                    ar: "تْشَرَّفْنَا",
                    en: "Pleased to meet you",
                    hint: "Common reply to فُرْصَة سَعِيدَة.",
                    exampleAr: "تْشَرَّفْنَا، أَنَا أُمّ أَحْمَد.",
                    exampleEn: "Pleased to meet you, I’m Ahmad’s mother.",
                },
            ],
            extra: [
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
                    hint: "Also used as ‘excuse me’.",
                    exampleAr: "شُكْرًا. ـ عَفْوَاً.",
                    exampleEn: "Thank you. — You’re welcome.",
                },
                {
                    id: "lawSamaht",
                    ar: "لَوْ سَمَحْتْ",
                    en: "Please / excuse me",
                    hint: "Plural: لَوْ سَمَحْتُوا.",
                    exampleAr: "لَوْ سَمَحْتْ، مُمْكِن تُعِيد؟",
                    exampleEn: "Excuse me, can you repeat?",
                },
                {
                    id: "anaAsif",
                    ar: "أَنَا آسِف",
                    en: "I’m sorry (male)",
                    hint: "Female: أَنَا آسْفَة.",
                    exampleAr: "أَنَا آسِف، تَأَخَّرْت.",
                    exampleEn: "I’m sorry, I’m late.",
                },
                {
                    id: "meshMoshkila",
                    ar: "مِش مُشْكِلَة",
                    en: "No problem",
                    hint: "Reply to apology or thanks.",
                    exampleAr: "آسِف. ـ مِش مُشْكِلَة.",
                    exampleEn: "Sorry. — No problem.",
                },
                {
                    id: "shoElAkhbar",
                    ar: "شُو الْأَخْبَار؟",
                    en: "How’s it going? / What’s new?",
                    hint: "Casual small talk question.",
                    exampleAr: "مَرْحَبَا، شُو الْأَخْبَار؟",
                    exampleEn: "Hi, how’s it going?",
                },
                {
                    id: "anaMeshFahem",
                    ar: "أَنَا مِش فَاهِم",
                    en: "I don’t understand (male)",
                    hint: "Female: أَنَا مِش فَاهْمَة.",
                    exampleAr: "أَنَا مِش فَاهِم، مُمْكِن تُعِيد؟",
                    exampleEn: "I don’t understand, can you repeat?",
                },
                {
                    id: "anaMesh3aref",
                    ar: "أَنَا مِش عَارِف",
                    en: "I don’t know (male)",
                    hint: "Female: أَنَا مِش عَارْفَة.",
                    exampleAr: "صِدْقِي أَنَا مِش عَارِف.",
                    exampleEn: "Honestly, I don’t know.",
                },
                {
                    id: "yalla",
                    ar: "يَلَّا",
                    en: "Come on / let’s go",
                    hint: "Used to start or finish actions.",
                    exampleAr: "يَلَّا، مْنِمْشِي.",
                    exampleEn: "Come on, let’s go.",
                },
                {
                    id: "maSalaameh_extra",
                    ar: "مَع السَّلَامَة",
                    en: "Goodbye",
                    hint: "Very common way to end a conversation.",
                    exampleAr: "مَع السَّلَامَة، بَشُوفِك بَكْرَا.",
                    exampleEn: "Goodbye, see you tomorrow.",
                },
                {
                    id: "btTawfeeq",
                    ar: "بِالتَّوْفِيق",
                    en: "Good luck",
                    hint: "Encouraging expression.",
                    exampleAr: "عِنْدَك اِمْتِحَان؟ بِالتَّوْفِيق!",
                    exampleEn: "You have an exam? Good luck!",
                },
                {
                    id: "itfaddal",
                    ar: "اتْفَضَّل",
                    en: "Here you go / please (offering)",
                    hint: "To female: اتْفَضَّلِي; to group: اتْفَضَّلُوا.",
                    exampleAr: "اتْفَضَّل، هَاد إِلَك.",
                    exampleEn: "Here you go, this is for you.",
                },
                {
                    id: "elBaytBaytak",
                    ar: "الْبَيْت بَيْتَك",
                    en: "You’re always welcome (lit. ‘the house is your house’)",
                    hint: "Very warm welcome phrase.",
                    exampleAr: "أَهْلًا وَسَهْلًا، الْبَيْت بَيْتَك.",
                    exampleEn: "You’re very welcome, feel at home.",
                },
                {
                    id: "enbsetBwaqtak",
                    ar: "اِنْبِسِط بِوَقْتَك",
                    en: "Enjoy your time (to a male)",
                    hint: "Female: اِنْبِسِطِي بِوَقْتِك.",
                    exampleAr: "رُوح عَلْبَحِر، اِنْبِسِط بِوَقْتَك.",
                    exampleEn: "Go to the beach, enjoy your time.",
                },
            ],
        },

        // =======================
        // DIALOGUE (حوالي 35 سطر)
        // =======================
        dialogue: {
            lines: [
                // Scene 1 – First meeting
                { speaker: "A", ar: "مَرْحَبَا!", en: "Hi!" },
                { speaker: "B", ar: "أَهْلًا وَسَهْلًا! كِيفَك الْيَوْم؟", en: "Welcome! How are you today?" },
                { speaker: "A", ar: "تَمَام، شُكْرًا. وَإِنْتَ كِيفَك؟", en: "I’m fine, thanks. And you?" },
                { speaker: "B", ar: "مْنِيح، الْحَمْدِلِلَّه.", en: "I’m good, praise be to God." },
                { speaker: "A", ar: "شُو اِسْمَك؟", en: "What’s your name?" },
                { speaker: "B", ar: "أَنَا اِسْمِي سَامِر. وَإِنْتِ؟", en: "My name is Samer. And you?" },
                { speaker: "A", ar: "أَنَا اِسْمِي مَرْيَم.", en: "My name is Maryam." },
                { speaker: "B", ar: "فُرْصَة سَعِيدَة يَا مَرْيَم.", en: "Nice to meet you, Maryam." },
                { speaker: "A", ar: "تْشَرَّفْت فِيك يَا سَامِر.", en: "Pleased to meet you, Samer." },

                // Scene 2 – From where? – Where do you live?
                { speaker: "B", ar: "مِنْ وِين إِنْتِ أَصْلًا؟", en: "Where are you originally from?" },
                { speaker: "A", ar: "أَنَا مِنْ غَزَّة.", en: "I’m from Gaza." },
                { speaker: "B", ar: "وَهَلَّقْ وِين سَاكْنَة؟", en: "And where do you live now?" },
                { speaker: "A", ar: "هَلَّقْ أَنَا سَاكْنَة فِي رَام اللّٰه.", en: "Now I live in Ramallah." },
                { speaker: "A", ar: "وَإِنْتَ مِنْ وِين؟", en: "And where are you from?" },
                { speaker: "B", ar: "أَنَا مِنْ أَمْرِيكَا، بَسّ هَلَّقْ سَاكِن فِي غَزَّة.", en: "I’m from the US, but now I live in Gaza." },
                { speaker: "A", ar: "حِلُو، أَهْلًا وَسَهْلًا فِيك فِي فِلَسْطِين.", en: "Nice, welcome to Palestine." },
                { speaker: "B", ar: "شُكْرًا كْتِير، النَّاس هِين مَبْسُوطِين وَطَيِّبِين.", en: "Thank you so much, people here are kind and happy." },

                // Scene 3 – Study and work
                { speaker: "A", ar: "شُو بَتْشْتِغِل؟", en: "What do you do for work?" },
                { speaker: "B", ar: "أَنَا بَشْتِغِل مُتَرْجِم وَبَدْرُس عَرَبِي كَمَان.", en: "I work as a translator and I also study Arabic." },
                { speaker: "A", ar: "حِلُو! عَرَبِي مْنِيح عِنْدَك.", en: "Nice! Your Arabic is good." },
                { speaker: "B", ar: "شُكْرًا، بَسّ لِسَّه مِش فَاهِم كِلّ إِشِي.", en: "Thanks, but I still don’t understand everything." },
                { speaker: "A", ar: "مِش مُشْكِلَة، مَع الْوَقْت كِلّ إِشِي بِيصِير تَمَام.", en: "No problem, with time everything will become fine." },

                // Scene 4 – Group greeting (plural forms)
                { speaker: "C", ar: "السَّلَامُ عَلَيْكُمْ يَا شَبَاب!", en: "Peace be upon you, everyone!" },
                { speaker: "A", ar: "وَعَلَيْكُم السَّلَام، مَرْحَبَا!", en: "And peace be upon you, hi!" },
                { speaker: "B", ar: "شُو الْأَخْبَار؟ كِيفْكُم الْيَوْم؟", en: "What’s new? How are you all today?" },
                { speaker: "C", ar: "إِحْنَا مْنَاح، الْحَمْدِلِلَّه.", en: "We’re good, praise be to God." },
                { speaker: "A", ar: "فُرْصَة سَعِيدَة إِنُّو تَعَرَّفْنَا عَلَيْكُم.", en: "Nice to meet you all." },
                { speaker: "C", ar: "إِحْنَا كَمَان تْشَرَّفْنَا فِيكُم.", en: "We are also pleased to meet you." },

                // Scene 5 – Closing the conversation
                { speaker: "B", ar: "طَيِّب يَلَّا، مَع السَّلَامَة.", en: "Alright then, goodbye." },
                { speaker: "A", ar: "مَع السَّلَامَة، بَشُوفِك بُكْرَا بِالدَّرْس.", en: "Goodbye, see you tomorrow in class." },
                { speaker: "C", ar: "بِالتَّوْفِيق فِي الدِّرَاسَة يَا مَرْيَم.", en: "Good luck with your studies, Maryam." },
                { speaker: "A", ar: "شُكْرًا كْتِير، اِنْبِسِطُوا بِوَقْتْكُم.", en: "Thank you so much, enjoy your time." },
                { speaker: "B", ar: "إِنْتِ كَمَان، مَا تِنْسِي الْوَاجِب!", en: "You too, don’t forget the homework!" },
                { speaker: "A", ar: "مَا بِنْسَى، وَعْد!", en: "I won’t forget, promise!" },
            ],
        },

        // =======================
        // GRAMMAR
        // =======================
        grammar: [
            {
                id: "kifak-kifik-plural",
                title: "Masculine / Feminine / Plural in ‘How are you?’",
                description:
                    "In Palestinian Arabic, the ending changes with gender and number.\n" +
                    "To a male: «كِيفَك؟» (kifak)\n" +
                    "To a female: «كِيفِك؟» (kifik)\n" +
                    "To a group: «كِيفْكُم؟» (kifkom)\n" +
                    "Same idea with adjectives: مْنِيح (mneeḥ) masc., مْنِيحَة (mneeḥa) fem., مْنَاح (mnaaḥ) plural.",
            },
            {
                id: "ana-min-vs-ana-saken",
                title: "I am from vs. I live in",
                description:
                    "«أَنَا مِنْ ...» (ana min ...) = I am from (your origin: country or city).\n" +
                    "Example: «أَنَا مِنْ غَزَّة» = I am from Gaza.\n\n" +
                    "«أَنَا سَاكِن فِي ... / أَنَا سَاكْنَة فِي ...» = I live in (where you live now).\n" +
                    "Example: «أَنَا سَاكْنَة فِي رَام اللّٰه» = I live in Ramallah.",
            },
            {
                id: "b-prefix-present",
                title: "The “b-” prefix for simple present",
                description:
                    "In Palestinian Arabic, the prefix «بـ» (b-) is often used for the simple present.\n" +
                    "«بَدْرُس» (badros) = I study.\n" +
                    "«بَشْتِغِل» (bashtighil) = I work.\n" +
                    "Pattern: «أَنَا بَدْرُس عَرَبِي» = I study Arabic.\n" +
                    "«أَنَا بَشْتِغِل مُدَرِّس» = I work as a teacher.",
            },
        ],

        // =======================
        // PRACTICE (Quiz + Role-plays)
        // =======================
        practice: {
            quiz: [
                {
                    id: "q1",
                    questionAr: "كِيفِك الْيَوْم؟",
                    optionsEn: [
                        "What’s your name?",
                        "How are you today?",
                        "Where are you from?",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "q2",
                    questionAr: "أَنَا مِنْ غَزَّة.",
                    optionsEn: [
                        "I am from Gaza.",
                        "I live in Gaza.",
                        "I work in Gaza.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "q3",
                    questionAr: "أَنَا سَاكِن فِي رَام اللّٰه.",
                    optionsEn: [
                        "I am from Ramallah.",
                        "I live in Ramallah.",
                        "I work in Ramallah.",
                    ],
                    correctIndex: 1,
                },
                {
                    id: "q4",
                    questionAr: "فُرْصَة سَعِيدَة.",
                    optionsEn: [
                        "Nice to meet you.",
                        "Good luck.",
                        "See you tomorrow.",
                    ],
                    correctIndex: 0,
                },
                {
                    id: "q5",
                    questionAr: "مَع السَّلَامَة.",
                    optionsEn: [
                        "Goodbye.",
                        "Thank you.",
                        "Good morning.",
                    ],
                    correctIndex: 0,
                },
            ],
            rolePlays: [
                "Role-play meeting a new classmate: greet them, ask their name, and say where you are from.",
                "Ask your partner: ‘Where are you from?’ and ‘Where do you live now?’ Then answer their questions.",
                "Act a short scene where you meet a small group (plural forms), greet them and say goodbye politely.",
                "Practice a short introduction: name, country, city where you live, and what you study or work.",
            ],
        },

        // =======================
        // HOMEWORK
        // =======================
        homework: {
            instructions:
                "Record a 40–60 second voice note introducing yourself in Palestinian Arabic: greet the listener, say your name, where you are from, where you live now, and what you study or work. If possible, add one sentence about why you want to learn Palestinian Arabic.",
        },

        // =======================
        // TEACHER NOTES
        // =======================
        teacherNotes: {
            // نص جاهز للمعلّم/ة تقرأ منه أو تعدل عليه لاحقًا
            warmup: [
                "Start in English: ‘Today we start with greetings in Palestinian Arabic.’",
                "Say slowly: «مَرْحَبَا» and ask students to repeat 2–3 times.",
                "Add: «أَهْلًا وَسَهْلًا»، «صَبَاح الْخِير»، «مَسَا الْخِير» and let them repeat.",
                "Explain quickly when to use casual (مَرْحَبَا) vs formal (السَّلَامُ عَلَيْكُمْ).",
            ],
            vocabularySteps: [
                "Show 3–4 words at a time instead of all 30+ at once.",
                "For each word: say it, students repeat, then use it in a simple question and answer.",
                "Highlight masculine / feminine / plural endings using color or hand gestures.",
                "Example: كِيفَك؟ (male) / كِيفِك؟ (female) / كِيفْكُم؟ (group).",
            ],
            dialogueSteps: [
                "Read the full dialogue in Arabic slowly while students only listen.",
                "Then show the English side and check general understanding.",
                "Read line by line and ask the students to repeat after you.",
                "Put them in pairs (A & B, later add C) to act out the scenes.",
                "Ask them to change details (country, city, job) so the dialogue becomes personal.",
            ],
            practiceTips: [
                "Use the quiz questions as a quick comprehension check.",
                "Ask students: ‘Why is this answer correct?’ to push them to think.",
                "During role-play, focus more on communication and confidence than perfect grammar.",
            ],
            wrapup: [
                "Ask a few students basic questions: «شُو اِسْمَك؟ مِنْ وِين إِنْتَ/إِنْتِ؟»",
                "Give positive feedback: ‘Your Arabic sounds much better now!’",
                "Explain the homework clearly and suggest they write their text first, then record.",
            ],
            myNotes: "",
        },
    },
    [LESSON_ID_DAILY_ROUTINE]: {
        meta: {
            level: "Beginner",
            unit: "Daily Routine",
            lessonTitle: "Lesson 1 – Talking About Your Day",
        },
        overview: {
            title: "Daily Routine",
            description:
                "In this lesson, the student learns how to talk about their simple daily routine: waking up, studying or working, eating, and relaxing.",
            goals: [
                "Describe a basic daily routine in simple Palestinian Arabic.",
                "Use frequent time expressions: in the morning, at night, every day.",
                "Ask and answer simple questions about daily habits.",
            ],
        },
        vocabulary: {
            core: [
                {
                    id: "asba7",
                    ar: "بَصْحَى",
                    en: "I wake up",
                    hint: "Root of many daily routine sentences: بَصْحَى السَّاعَة سِتِّة.",
                    exampleAr: "كُل يَوْم بَصْحَى بَدْرِي.",
                    exampleEn: "Every day I wake up early.",
                },
                {
                    id: "batgassal",
                    ar: "بَتْغَسَّل",
                    en: "I wash (my face / hands)",
                    hint: "Daily action after waking up.",
                    exampleAr: "أَوَّل إِشِي بَتْغَسَّل وَجْهِي.",
                    exampleEn: "First thing, I wash my face.",
                },
                {
                    id: "bafTir",
                    ar: "بَفْطَر",
                    en: "I eat breakfast",
                    hint: "From فطور = breakfast.",
                    exampleAr: "بَعْد مَا بَصْحَى بَفْطَر.",
                    exampleEn: "After I wake up, I have breakfast.",
                },
                {
                    id: "baru7Aldaras",
                    ar: "بَرُوح عَلَى الدَّرْس",
                    en: "I go to class",
                    hint: "كَمَان: بَرُوح عَلَى الشُّغُل = I go to work.",
                    exampleAr: "بَعْد الظُّهْر بَرُوح عَلَى الدَّرْس.",
                    exampleEn: "In the afternoon I go to class.",
                },
                {
                    id: "badros",
                    ar: "بَدْرُس",
                    en: "I study",
                    hint: "Same pattern as in Greetings: أَنَا بَدْرُس عَرَبِي.",
                    exampleAr: "كُل لَيْلَة بَدْرُس شَوَيّ عَرَبِي.",
                    exampleEn: "Every night I study a bit of Arabic.",
                },
                {
                    id: "bashtaghel",
                    ar: "بَشْتِغِل",
                    en: "I work",
                    hint: "Use it to talk about job routine.",
                    exampleAr: "أنا بَشْتِغِل فِي مَكْتَب.",
                    exampleEn: "I work in an office.",
                },
            ],
            extra: [
                {
                    id: "baakul",
                    ar: "بَاكُل",
                    en: "I eat",
                    hint: "General verb for eating.",
                    exampleAr: "بَاكُل الْغَدَا مَع أَهْلِي.",
                    exampleEn: "I eat lunch with my family.",
                },
                {
                    id: "bat3asha",
                    ar: "بَتْعَشَّى",
                    en: "I eat dinner",
                    hint: "From عشا (dinner).",
                    exampleAr: "بِاللِّيل بَتْعَشَّى مَع صَحَابِي.",
                    exampleEn: "At night I have dinner with my friends.",
                },
                {
                    id: "bartaa7",
                    ar: "بَرْتَاح",
                    en: "I rest / relax",
                    hint: "After work or study.",
                    exampleAr: "بَعْد الشُّغُل بَرْتَاح شَوَيّ.",
                    exampleEn: "After work I rest a bit.",
                },
                {
                    id: "batfarraj",
                    ar: "بَتْفَرَّج عَلَى...",
                    en: "I watch (TV, series, etc.)",
                    hint: "مثال: بَتْفَرَّج عَلَى مُسَلْسَل.",
                    exampleAr: "بِالْمَسَا بَتْفَرَّج عَلَى فِيلِم.",
                    exampleEn: "In the evening I watch a movie.",
                },
            ],
        },
        dialogue: {
            lines: [
                { speaker: "A", ar: "مَتَى بَصْحَى كُل يَوْم؟", en: "When do you wake up every day?" },
                { speaker: "B", ar: "بَصْحَى السَّاعَة سِتِّة الصُّبْح.", en: "I wake up at six in the morning." },
                { speaker: "A", ar: "بَعْد مَا تِصْحَى شُو بِتْعْمِل؟", en: "After you wake up, what do you do?" },
                {
                    speaker: "B",
                    ar: "بَتْغَسَّل، بَعْدِين بَفْطَر، وَبَرُوح عَلَى الشُّغُل.",
                    en: "I wash, then I have breakfast, and I go to work.",
                },
                {
                    speaker: "A",
                    ar: "وَإِمْتَى بَدْرُس عَرَبِي؟",
                    en: "And when do you study Arabic?",
                },
                {
                    speaker: "B",
                    ar: "بِالْمَسَا بَدْرُس عَرَبِي سَاعَة.",
                    en: "In the evenings I study Arabic for an hour.",
                },
            ],
        },
        grammar: [
            {
                id: "daily-b-prefix",
                title: "Using «بـ» with daily actions",
                description:
                    "We use the prefix «بـ» (b-) to talk about regular actions: بَصْحَى، بَفْطَر، بَدْرُس، بَشْتِغِل.\n" +
                    "It shows that this is something you do usually, not just once.",
            },
        ],
        practice: {
            quiz: [],
            rolePlays: [
                "Describe your morning routine in 4–5 short sentences.",
                "Ask your partner: ‘When do you wake up?’ and ‘When do you study?’.",
            ],
        },
        homework: {
            instructions:
                "Write 5–7 sentences in Palestinian Arabic about your daily routine (morning, afternoon, evening). Then read them aloud and record yourself.",
        },
        teacherNotes: {
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
    showScreen("home-screen");
}
function goToStudents() {
    showScreen("students-screen");
    renderStudents();
}
function goToLevels() {
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
}
function goToTeacherDashboard() {
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
            units: ["Work & Study", "Apartment & Problems", "Shopping & Prices"],
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
            renderTeacherEditor(id);
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

function renderTeacherEditor(lessonId) {
    const lesson = lessons[lessonId];
    const editor = $("#teacherEditor");
    if (!lesson || !editor) return;

    editor.style.display = "block";

    editor.innerHTML = `
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

    // Meta
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

    // Overview
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

    // Dialogue
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

    // Grammar
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

    // Quiz
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

    // Role-play
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

    // Homework
    $("#tdHomeworkText").value = lesson.homework.instructions || "";
    $("#tdSaveHomework").addEventListener("click", () => {
        lesson.homework.instructions = $("#tdHomeworkText").value.trim();
        saveLessonToLS(lessonId);
        alert("Homework instructions saved.");
    });

    // Teacher notes (template)
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
