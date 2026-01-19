import { LESSON_ID_PLANS_FUTURE } from '../../core/constants.js';

export const lessonId = LESSON_ID_PLANS_FUTURE;
export const lesson = {
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
};