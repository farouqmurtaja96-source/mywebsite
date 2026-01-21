import { LESSON_ID_APARTMENT } from '../../core/constants.js';

export const lessonId = LESSON_ID_APARTMENT;
export const lesson = {
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
                exampleAr: "لما يكون المصعد خربان، بنطلع عالدَّرَج.",
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
                exampleAr: "جرة الغَاز فاضيِة، لازم نِغَيِّرْها.",
                exampleEn: "The gas cylinder is empty; we need to change it.",
            },
            {
                id: "furn",
                ar: "فُرْن",
                en: "oven",
                enArabeezy: "furn",
                hint: "For baking / cooking, gas or electric.",
                exampleAr: "فرن الكَهْرَبا خَرْبان اليوم.",
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
                exampleAr: "الحَنَفِيّة بتنقط مَيّ طول الليل.",
                exampleEn: "The tap drips water all night.",
            },

            {
                id: "beykhar_mayy",
                ar: "بنقط مَيّ",
                en: "it leaks water",
                enArabeezy: "bikharr mayy / bey5ar mayy",
                hint: "Used for tap, pipe, ceiling.",
                exampleAr: "السَّقْف بنقط مَيّ لَمّا تشتي.",
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
                exampleAr: "الشُّبّاك مَكْسور .",
                exampleEn: "The window is broken ",
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
                exampleAr: "لَمّا يكون في مُشْكِلَة بَتْواصَل مَع صاحِب البَيْت.",
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
                exampleAr: "ما في تِدْفِئَة مْنيحَة بالشتا.",
                exampleEn: "There is no good heating in winter.",
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
    dialogue: {
        lines: [
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
                "ar": "إي، في بَلكون صْغيرة عالشّارِع الرّئيسي.",
                "en": "Yes, there is a small balcony on the main street."
            },
            {
                "speaker": "Khaled",
                "ar": "عَأيّ طابِق الشِّقّة؟ العِمارَة فيها أسانْسير؟",
                "en": "On which floor is the apartment? Does the building have an elevator?"
            },
            {
                "speaker": "Rami",
                "ar": "عَالطّابِق الرّابِع، وفي مِصْعَد،بس احيانا بكون خربان.",
                "en": "On the fourth floor, and there is an elevator, but it’s sometimes out of order."
            },
            {
                "speaker": "Khaled",
                "ar": "طَيِّب، قَدّيش الإيجار؟ شامِل فاتورَة مَيّ وَكَهْرَبا؟",
                "en": "Okay, how much is the rent? Does it include water and electricity bills?"
            },
            {
                "speaker": "Rami",
                "ar": "الإيجار خَمِس مِيّة شِيكِل، بَس فاتورَة المَيّ وَالكَهْرَبا عَلَيْنا.",
                "en": "The rent is five hundred shekels, but the water and electricity bills are on us."
            },
            {
                "speaker": "Khaled",
                "ar": "والجيران؟ هاد السُّؤال المُهِم.",
                "en": "And the neighbors? That’s the important question."
            },
            {
                "speaker": "Rami",
                "ar": "جارتي اللّي قبالي طَيِّبَة، بَس الجار اللّي فَوقنا صَوْته عالي بِاللَّيْل.",
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
                "ar": "المَغْسَلِة في الحَمّام مَسْددَة، والمَيّ بْتِنْقِط مِن السَّقْف لَمّا أَفَتِّح الحَنَفِيّة.",
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
                "ar": "يَلّا نتِّصِل هَلَّقيت، أَفْضَل مِن بُكْرَة.",
                "en": "Let’s call him now; better than tomorrow."
            },
            {
                "speaker": "Rami",
                "ar": "تمام هَيْ بَتِّصِل... أَلو، مَسّا الخير يا أُسْتاذ سامِر، أنا المُسْتَأجِر الجْديد بالشِّقّة الرّابِعَة.",
                "en": "Okay, I’m calling… Hello, good evening Mr. Samer, I’m the new tenant in the fourth-floor apartment."
            },
            {
                "speaker": "Landlord",
                "ar": "مَسّا النّور، أَهْلًا، أكِيد. شُو الأَخْبار؟ في مَشْكِلَة؟",
                "en": "Good evening, welcome. Sure. What’s up? Is there a problem?"
            },
            {
                "speaker": "Rami",
                "ar": "إي صَراحَةً، في كَم مَشْكِلَة صْغيرَة: المَغْسَلِة في الحَمّام مَسْددَة، والحَنَفِيّة بتنقط مَيّ طول الليل.",
                "en": "Yes honestly, there are a few small problems: the bathroom sink is blocked and the tap leaks water all night."
            },
            {
                "speaker": "Landlord",
                "ar": "الميّ بتقطع كليًّا ولا بس ضعيفة؟",
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
                "ar": "وكَمان في مَشْكِلَة بِالكَهْرَبا، لَمّا أَشَغِّل المِكيّف والغَسّالِة مَع بَعْض بِيِطْفي الضَّوّ.",
                "en": "And there’s also a problem with the electricity; when I turn on the AC and the washing machine together, the lights go off."
            },
            {
                "speaker": "Landlord",
                "ar": "مُمْكِن المُفَتِّح (القاطِع) ضَعيف، بَجي أَنا اليَوم عَالمَسَا أَتْأَكَّد.",
                "en": "Maybe the breaker is weak; I’ll come this evening to make sure."
            },
            {
                "speaker": "Khaled",
                "ar": " اِسْأَلُه عَن الأسانْسير، ليش كْثير خَرْبان.",
                "en": " Ask him about the elevator, why it’s often broken."
            },
            {
                "speaker": "Rami",
                "ar": "كمان حَضْرِتَك، الأسانْسير بِيوقَف بِنُصّ الطّابِق أَحْيانًا، ومَرّة خِفْنا نعْلق جُوّاه.",
                "en": "Also sir, the elevator sometimes stops between floors, and once we were afraid we’d get stuck inside."
            },
            {
                "speaker": "Landlord",
                "ar": "عارِف، العُمْارُه قَديم شْوَي، بَس في شِرْكَة صِيانَة حَتِجي هالأُسْبوع تِصَلِّحُه.",
                "en": "I know, it’s a bit old, but a maintenance company is coming this week to fix it."
            },
            {
                "speaker": "Rami",
                "ar": "مِنِيح كْثير، شُكْرًا عَالاِهْتِمام.",
                "en": "That’s very good, thank you for the attention."
            },
            {
                "speaker": "Landlord",
                "ar": "إذا في أيّ مَشْكِلَة تانيِة، بَعْتِلِّي رِسالَة أَو اِتِّصِل فيّي مباشرة.",
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
                "ar": "إن شاء الله ما نوصل لهالمرحلة، بس هلّق صرت حاسس براحة أكتر بخصوص الشقة بعد الحكي.",
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
};