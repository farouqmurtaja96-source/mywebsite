// Auto-extracted from original app.js
import { LESSON_ID_FEELINGS } from '../../core/constants.js';

export const lessonId = LESSON_ID_FEELINGS;
export const lesson = {
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
                id: "zahgan",
                ar: "زَهْقَان",
                en: "bored / fed up",
                hint:
                    "Masc: زَهْقَان، fem: زَهْقَانَة. Often with مِن: زَهْقَان مِن الدِّرَاسَة.",
                exampleAr: "حاسس حالي زهقان من الشغل الروتيني",
                exampleEn: "I feel bored / fed up with the routine work.",
            },
            {
                id: "motawattar",
                ar: "مُتَوَتِّر",
                en: "nervous / tense",
                hint:
                    "Masc: مُتَوَتِّر، fem: مُتَوَتِّرَة. Often before exams, interviews, etc.",
                exampleAr: "متوتّر من قبل ما أقدّم الامتحان.",
                exampleEn: "I’m nervous before taking the exam.",
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
                exampleAr: "بَحِسّ حَالِي مِرْتَاحَ لَمَّا أَكُون عَالبَحِر.",
                exampleEn: "I feel relaxed when I’m at the sea.",
            },
            {
                id: "mit7ammis",
                ar: "مِتْحَمِّس",
                en: "excited / motivated",
                hint:
                    "Masc: مِتْحَمِّس، fem: مِتْحَمِّسَة. From حَمَاس ‘enthusiasm’.",
                exampleAr: "مِتْحَمِّسَ أَبْلِش المُسْتَوَى الجَّدِيد.",
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
                exampleAr: "اليوم مزاجي منيح، بس تعبان شوي.",
                exampleEn: "Today my mood is good but I’m a bit tired.",
            },
            {
                id: "ma_eli_maal",
                ar: "مش رايق",
                en: "I’m not in the mood / I don’t feel like it",
                hint:
                    "Chunk to refuse softly or explain low energy.",
                exampleAr: "صحابي بدّهم يطلعوا، بس اليوم مش رايق",
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
                exampleAr: "بفكّر آخد يوم إجازة أرتاح فيه",
                exampleEn: "I’m thinking of taking a day off to rest.",
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
                en: "don’t worry you",
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
                exampleAr: "آسف/آسفة، هلّق ما بدي أحكي عن هالموضوع.",
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
                ar: "طَبِيعِي، هَالفَتْرَة كْتِير صَعْبَة. كَمَّان أَنَا مُتَوَتِّرَة قَبْل الاِمْتِحَانات.",
                en: "That’s normal, this period is very hard. I’m also nervous before the exams.",
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
                ar: "وَلَا يِهِمِّك، بِنْحَاوِل نِتْعَامَل مَع الضَّغْط سَوَى. إِذَا حَاسَّة حَالِك مْضَايْقَة، اِتَّصِلِي فِيا تِلْفُون.",
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
                ar: "روبا، باين عليكِ تعبانة هالأيام. كيفك؟",
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
                ar: "بس أهم إشي إنك تهتمي بحالك: نوم، أكل منيح، وشوي رياضة، كل هالأشياء بتساعد على المزاج.",
                en: "But the most important thing is to take care of yourself. Sleep, food, a bit of exercise, all of that helps the mood.",
            },
            {
                speaker: "Roba",
                ar: "شكرًا إلك، هلّق حاسّة حالي أحسن.",
                en: "Thanks you, I feel better now.",
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
};
