import { LESSON_ID_WEATHER } from '../../core/constants.js';

export const lessonId = LESSON_ID_WEATHER;
export const lesson = {
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
        lines: [
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
};