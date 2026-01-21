// Auto-generated from original app.js
import { LESSON_ID_HOBBIES } from '../../core/constants.js';

export const lessonId = LESSON_ID_HOBBIES;
export const lesson = {
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
                exampleAr: "بوقت فراغي بسمع موسيقى هادية.",
                exampleEn: "In my free time I listen to calm music.",
            },////////////////
            {
                id: "kitaab",
                ar: "كِتَاب",
                en: "book",
                enArabeezy: "kitaab",
                hint: "Plural: كُتُب.",
                exampleAr: "بَحِبّ كُتُب التَّنْمِيَة الذَّاتِيَّة.",
                exampleEn: "I like self-development books.",
            },
            {
                id: "masalsal",
                ar: "مُسَلْسَل",
                en: "series / TV show",
                enArabeezy: "mosalsal",
                hint: "Plural: مُسَلْسَلَات.",
                exampleAr: "أَحْيَانًا بِتْفَرَّج عَلَى مُسَلْسَلات عَاللَّابْتُوب.",
                exampleEn: "Sometimes I watch a series on the laptop.",
            },
            {
                id: "film",
                ar: "فِلْم",
                en: "movie",
                enArabeezy: "film",
                hint: "Plural: أَفْلَام.",
                exampleAr: "فِي الوِيكِينْد بِنْرُوح عَلى السِّينِمَا نِتْفَرَّج عَلَى فِلْم.",
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
                exampleAr: "مَسَا كُلّ ثَنِين بِرُوح عَلى النَّادِي.",
                exampleEn: "Every Monday evening I go to the gym.",
            },

            // ===== LEISURE VERBS =====
            {
                id: "yil3ab",
                ar: "يِلْعَب",
                en: "to play (a game / sport)",
                enArabeezy: "yil3ab",
                hint: "Masdar (verbal noun): لِعِب. With كُرَة, شَدَّة (cards), إلخ.",
                exampleAr: "بِحِبّ أِلْعَب كُرَة قَدَم مَع اصحابي.",
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
                exampleAr: "بالمسا بْرُوح أِمْشِي نُصّ سَاعَة حَوَالِين البَيْت.",
                exampleEn: "In the evening I go walk for half an hour around the house.",
            },
            {
                id: "yisba7",
                ar: "يِسْبَح",
                en: "to swim",
                enArabeezy: "yisba7",
                hint: "1st person: بَسْبَح.",
                exampleAr: "فِي الصَّيْف بَسْبَح كْتِير في البَحِر.",
                exampleEn: "In summer I swim a lot in the sea.",
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
                exampleAr: "أَحْيَانًا بَرُوح عَلَى السِّينِمَا مَع أَصْحَابِي.",
                exampleEn: "Sometimes I go to the cinema with my friends.",
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
                exampleAr: "أكتر إشي بستمتع فيه لما أطلع مع عيلتي.",
                exampleEn: "I enjoy it most when I go out with my family.",
            },
        ],

        extra: [

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
                ar: "رُوبَا، عَادَةً كِيف بْتِقْضِي وفت فراغك؟",
                en: "Roba, how do you usually spend your free time?",
            },
            {
                speaker: "Roba",
                ar: "صَرَاحَةً، هَالْفَتْرَة فِش وَقْت كْتِير، بَسّ لَمَّا يِكُون فِي فَرَاغ بَقْرَا كِتَاب أَو بَتْفَرَّج عَلَى فِلْم.",
                en: "Honestly, these days there isn’t much time, but when I have free time I read a book or watch a movie.",
            },
            {
                speaker: "Noor",
                ar: "حلو. أكتر إشي بحبّه هو الرياضة. بروح عالجيم ثلاث مرات بالأسبوع.",
                en: "Nice. The thing I like most is exercise. I go to the gym three times a week.",
            },
            {
                speaker: "Roba",
                ar: "واو، حلو كتير. بعطلة نهاية الأسبوع أحيانًا بسبح بالبحر، وبعدين بقعد مع العيلة.",
                en: "Wow, that’s great. On the weekend I sometimes swim at the sea, then I sit with the family.",
            },
            {
                speaker: "Noor",
                ar: "يعني بتستريحي مع عيلتك بعد الأسبوع الطويل.",
                en: "So you relax with your family after the long week.",
            },
            {
                speaker: "Roba",
                ar: "أَيُّوَه، بَسْتِرِيح وَبَتْسَلَّى. وَإِنْتِي، مَع مِين أَكْثَر شِي بتقضي وفت فراغك؟",
                en: "Yes, I relax and have fun. And you, with whom do you mostly spend your free time?",
            },
            {
                speaker: "Noor",
                ar: "أحيانًا لحالي، وأحيانًا مع صحابي. لما أكون لحالي برسم وبسمع موسيقى.",
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
                ar: "هِوَايِتِي المُفَضَّلَة القراءة. عَادَةً بَقْرَا رِوَايَات بِالْعَرَبِي وبِالإِنْجْلِيزِي.",
                en: "My favorite hobby is reading. Usually I read novels in Arabic and English.",
            },
            {
                speaker: "Teacher",
                ar: "مُمْتَاز. كَم مَرَّة فِي الأُسْبُوع بتقرئي؟",
                en: "Excellent. How many times a week you read?",
            },
            {
                speaker: "Roba",
                ar: "أَحْيَانًا كُلّ يَوم، بَسّ أَحْيَانًا مَرَّة أَو مَرَّتَيْن بَسّ. نَادِرًا يَمُرّ أُسْبُوع بِلَا قراءة.",
                en: "Sometimes every day, but sometimes only once or twice. It’s rare that a week passes without reading.",
            },
            {
                speaker: "Teacher",
                ar: "حِلُو كْتِير. نُور، شُو بِتْعْمْلِي فِي وقت فراغك",
                en: "Very nice. Noor, what do you do in your free time?",
            },
            {
                speaker: "Noor",
                ar: "بِصَرَاحَة، هَالفَتْرَة مَا فِيش وَقْت كْتِير. بَسّ لَمَّا يِكُون فِي فَرَاغ بَرُوح أِمْشِي أَو أِلْعَب رِيَاضَة فِي النَّادِي.",
                en: "Honestly, these days there isn’t much time. But when I have free time I go for a walk or play sports at the gym.",
            },


            // Scene 3 – Making plans for next weekend
            {
                speaker: "Narrator",
                ar: "بَعْد الدَّرْس، رُوبَا وَنُور عَم بِرَتِّبُوا لنهاية الاسبوع الجَّاي.",
                en: "After the lesson, Roba and Noor are planning for the next weekend.",
            },
            {
                speaker: "Noor",
                ar: "بنهاية الاسبوع الجَّاي، بِتْحِبّي نِزَبَّط قَعْدَة نِرْسِم وَنِتْفَرَّج عَلَى فِلْم؟",
                en: "Next weekend, would you like us to plan a little hangout to draw and watch a movie?",
            },
            {
                speaker: "Roba",
                ar: "فِكْرَة مُمْتَازَة. عَادَةً الوِيكِينْد بَقْضِيه مَع العِيلَة، بَسّ هَالمَرَّة بَقْدَر آجِي.",
                en: "Excellent idea. Usually I spend the weekend with my family, but this time I can come.",
            },
            {
                speaker: "Noor",
                ar: "ممتاز. مُمْكِن نبدأ بالرَسِم، بَعْدِين نِتْفَرَّج عَلَى فِلْم وَنِسْمَع مُوسِيقَى هَادِيَّة.",
                en: "Great. We can start with drawing, then watch a movie and listen to calm music.",
            },
            {
                speaker: "Roba",
                ar: "هيك بكون كتير ممتع. طيب، برنّ عليك قبلها بيوم عشان نأكّد.",
                en: "It’s really fun that way. Okay, I’ll call you one day before to confirm.",
            },
            {
                speaker: "Noor",
                ar: "أَهْلًا وَسَهْلًا فِيك دَايْمًا. مَا بَدّي أَطَوِّل عَلِك هَلَّق، بَنِحْكِي بَعْدِين.",
                en: "You’re always welcome. I don’t want to keep you now, we’ll talk later.",
            },
            {
                speaker: "Roba",
                ar: "مُنَاسِب. مَع السَّلَامَة.",
                en: "Sounds good. Goodbye",
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
};
