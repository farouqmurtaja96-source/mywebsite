import { LESSON_ID_TRANSPORT } from '../../core/constants.js';

export const lessonId = LESSON_ID_TRANSPORT;
export const lesson = {
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
                exampleAr: "اليوم المواصلات كتير زحمة.",
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
                ar: " تاكسي",
                en: "taxi",
                enArabeezy: "taxi",
                hint:
                    "Very common word. Both spellings تَكْسِي / تاكسي are used. Plural: تَكَاسِي. Often yellow or white, used inside the city.",
                exampleAr: "أَحْيانًا باخُد تاكسي لَمّا أكون مُسْتَعْجِل.",
                exampleEn: "Sometimes I take a taxi when I’m in a hurry.",
            },

            {
                id: "buss",
                ar: " باص",
                en: "bus",
                enArabeezy: "buss/bas",
                hint:
                    "Spoken Palestinian pronunciation for ‘bus’. You may hear بُصّ or باص. Plural: بُصَّات.",
                exampleAr: "في باص بروح من غزّة على رام الله.",
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


            // ===== PLACES & ROADS =====
            {
                id: "ma7aTTa",
                ar: "مَحَطَّة",
                en: "station / stop",
                enArabeezy: "ma7aTTa",
                hint:
                    "General ‘station’: مَحَطَّة بُصّ = bus station; مَحَطَّة سِرْفِيس = service station.",
                exampleAr: "بنستنى بمحطّة القطار.",
                exampleEn: "We wait at the train station.",
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
                exampleAr: "السيارة وقفت قدّام محطة البنزين.",
                exampleEn: "The car stopped in front of the gas station.",
            },
            {
                id: "ishara",
                ar: "إِشَارَة",
                en: "traffic light (short form)",
                enArabeezy: "ishara",
                hint:
                    "إِشَارَة ضَوْ = traffic light. People just say: عِنْد الإِشَارَة.",
                exampleAr: "التاكسي وقف عالإشارة الحمرا.",
                exampleEn: "The taxi stopped at the red light.",
            },

            // ===== TRAFFIC & CROWD =====
            {
                id: "z7meh",
                ar: "زَحْمَة",
                en: "traffic / crowd / traffic jam",
                enArabeezy: "za7meh",
                hint: "Used a lot for traffic jam: فِي زَحْمَة فِي الشَّارِع.",
                exampleAr: "تَأَخَّرْت عَلى الدَّرْس عَشَان فِي زَحْمَة.",
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
                exampleAr: "كُلّ يَوْم بَرْكَب باص عَلَى الْجَامْعَة.",
                exampleEn: "Every day I take a bus to university.",
            },
            {
                id: "rikib_yirkab",
                ar: "رِكِب، يِركَب",
                en: "to ride, get on (bus, taxi, etc.)",
                enArabeezy: "rikib/yirkab",
                hint: "Dictionary form of the verb ‘to ride / get on’.",
                exampleAr: "يَلا نِركَب الباص، حَيِمْشي هَلَّقيت.",
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
                exampleAr: "مْتَى وِصِل الباص عَالبلَد؟",
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
                ar: "بروح",
                en: "to go",
                enArabeezy: "ra7/yiroo7",
                hint: "General verb ‘to go’ to a place.",
                exampleAr: "كل يوم بروح عالجامعة الساعة تمانية.",
                exampleEn: "Every day I go to the university at eight o’clock.",
            },
            {
                id: "tla3_yitla3",
                ar: "طِلِع",
                en: "to leave / depart (bus/taxi) or go up",
                enArabeezy: "tli3/yitla3",
                hint: "Also used like ‘the bus left / departed’.",
                exampleAr: "الباص طِلِع، لَحِقْناه بِصُعوبَة.",
                exampleEn: "The bus left; we caught it with difficulty.",
            },///////
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
                exampleAr: "لما يكون في زحمة، بنتأخّر كتير.",
                exampleEn: "When there is traffic, we get very late.",
            },
            {
                id: "bastanna",
                ar: "بَسْتَنَّى",
                en: "I wait",
                enArabeezy: "bastanna",
                hint:
                    "From اِسْتَنَّى = to wait. بَسْتَنَّى السِّرْفِيس / بَسْتَنَّى صَاحْبِي.",
                exampleAr: "صارلي نص ساعة بستنى الباص.",
                exampleEn: "I’ve been waiting for the bus for half an hour.",
            },

            {
                id: "bamshi",
                ar: "بَمْشِي",
                en: "I walk",
                enArabeezy: "bamshi",
                hint: "From مِشِي = walking. ‘On foot’: بَمْشِي عَلَى رِجْلَيّ.",
                exampleAr: "لما تكون المسافة قريبة، بمشي وما باخد سيارة.",
                exampleEn: "When the distance is close, I walk and don’t take a vehicle.",
            },
            {
                id: "bdaTTi3",
                ar: "بَقَطِّع الشَّارِع",
                en: "I cross the street",
                enArabeezy: "ba2aTTi3_eshshari3",
                hint:
                    "Chunk: بَقَطِّع الشَّارِع = I cross the street. Used a lot with traffic lights.",
                exampleAr: "بقطع الشارع لما الإشارة تكون خضرا.",
                exampleEn: "I cross the street when the light is green.",
            },




            // ===== QUESTIONS & USEFUL CHUNKS =====
            {
                id: "keef_arooh",
                ar: "كِيف بَقْدَر أَرُوح عَلَى...؟",
                en: "How can I go to…?",
                enArabeezy: "keef_ba2dar_aroo7_3ala",
                hint:
                    "Chunk for asking directions: كِيف بَقْدَر أَرُوح عَلَى الْجَامْعَة؟",
                exampleAr: "كِيف بَقْدَر أَرُوح عَلَى مَحَطَّة الباص",
                exampleEn: "How can I go to the bus station?",
            },

            {
                id: "2addesh_el2ijra",
                ar: "قَدّيش الأُجْرَة؟",
                en: "How much is the fare?",
                enArabeezy: "2addesh_el2ijreh",
                hint: "Phrase for asking the price (fare) of bus/taxi/etc.",
                exampleAr: "لما تاخد تاكسي، اسأل السواق: قديش الأجرة؟",
                exampleEn: "When you take a taxi, ask the driver: How much is the fare?",
            },


        ],

        extra: [

        ],
    },

    // ====================================
    // DIALOGUE (multi-scene – from home to class)
    // ====================================
    dialogue: {
        lines: [
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
                "ar": "إمشِي دُغري قُدّامَك تقريبًا دَقِيقْتين، بَعْدين لف يَمين.",
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
                "ar": "بتقدر، بس التاكسي أَغْلى. إسأل السَّوّاق: قَدّيش بياخد لَلجامْعَة؟",
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
                "ar": "تقريبا ٣ شيكِل أو ٤ حسب الطَّريق.",
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
};