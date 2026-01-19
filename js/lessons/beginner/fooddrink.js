import { LESSON_ID_FOOD_DRINK } from '../../core/constants.js';

export const lessonId = LESSON_ID_FOOD_DRINK;
export const lesson = {
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
};