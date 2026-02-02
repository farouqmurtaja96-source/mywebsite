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
                exampleAr: "الْيَوْم الْمُوَاصَلَات كْتِير زَحْمِة.",
                exampleArabeezy: "elywm elmwaslat ktyr z7ma.",
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
                exampleArabeezy: "akhwy bswq syara elshrka.",
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
                exampleArabeezy: "a7yana bakhd taksy lma akwn mst3jl.",
                exampleEn: "Sometimes I take a taxi when I’m in a hurry.",
            },

            {
                id: "buss",
                ar: " باص",
                en: "bus",
                enArabeezy: "bas",
                hint:
                    "Spoken Palestinian pronunciation for ‘bus’. You may hear بُصّ or باص. Plural: بُصَّات.",
                exampleAr: "في باص بروح من غزّة على رام الله.",
                exampleArabeezy: "fy bas brw7 mn ghza 3la ram ellh.",
                exampleEn: "There is a bus that goes from Gaza to Ramallah.",
            },
            {
                id: "baskaleet",
                ar: "بَسكَلِيت",
                en: "bicycle",
                enArabeezy: "baskaleet",
                hint: "Bike / bicycle, sometimes also درّاجة.",
                exampleAr: "هوَّ بِحِبّ يِروح عَالجامعة بالبَسكَلِيت.",
                exampleArabeezy: "hw b7b yrw7 3aljam3a belbsklyt.",
                exampleEn: "He likes to go to the university by bike.",
            },
            {
                id: "qitar",
                ar: "قِطار",
                en: "train",
                enArabeezy: "qitar",
                hint: "Train. Used more for travel in countries that have trains.",
                exampleAr: "رِكِبنا القِطار لَمّا كُنّا بِالأُرْدُن.",
                exampleArabeezy: "rkbna elqtar lma kna belardn.",
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
                exampleArabeezy: "bnstna bm7ta elqtar.",
                exampleEn: "We wait at the train station.",
            },
            {
                id: "mawqif_basat",
                ar: "مَوقِف باصات",
                en: "bus stop",
                enArabeezy: "mawqif_basat",
                hint: "Place where buses stop to pick up passengers.",
                exampleAr: "مَوقِف الباصات قُدّام الجامْعَة.",
                exampleArabeezy: "mwqf elbasat qdam eljam3a.",
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
                exampleArabeezy: "elshwar3 elywm mlyana syarat.",
                exampleEn: "The streets today are full of cars.",
            },
            {
                id: "kameen_benzin",
                ar: "محطة بْنَزين",
                en: "gas station",
                enArabeezy: "m7ta_benzin",
                hint: "Place to get fuel for cars and buses.",
                exampleAr: "السَّيَّارَة وِقْفِت قُدَّام مَحَطَّة الْبَنْزِين.",
                exampleArabeezy: "elsyara wqft qdam m7ta elbnzyn.",
                exampleEn: "The car stopped in front of the gas station.",
            },
            {
                id: "ishara",
                ar: "إِشَارَة",
                en: "traffic light (short form)",
                enArabeezy: "ishara",
                hint:
                    "إِشَارَة ضَوْ = traffic light. People just say: عِنْد الإِشَارَة.",
                exampleAr: "التَّاكْسِي وِقِف عَالإِشَارَة الحَمْرَا.",
                exampleArabeezy: "eltaksy wqf 3alishara el7mra.",
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
                exampleArabeezy: "takhrt 3la eldrs 3shan fy z7ma.",
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
                exampleArabeezy: "kl ywm brkb bas 3la eljam3a.",
                exampleEn: "Every day I take a bus to university.",
            },

            {
                id: "banzel",
                ar: "بَنْزِل",
                en: "I get off / I go down",
                enArabeezy: "banzel",
                hint:
                    "Used for getting off a bus/taxi or going down: بَنْزِل مِن التَّكْسِي.",
                exampleAr: "بَنْزِل قُدَّام مَدْخَل الْجَامْعَة.",
                exampleArabeezy: "bnzl qdam mdkhl eljam3a.",
                exampleEn: "I get off in front of the university entrance.",
            },
            {
                id: "bsoog",
                ar: "بَسُوق",
                en: "I drive",
                enArabeezy: "basooq",
                hint: "From سَاق = to drive. بَسُوق سَيَّارَة / بَسُوق بُصّ.",
                exampleAr: "أَبُوي بَسُوق سَيَّارَة صْغِيرَة.",
                exampleArabeezy: "abwy bswq syara sghyra.",
                exampleEn: "My father drives a small car.",
            },
            {
                id: "wasal_yowsal",
                ar: "وِصِل، يوصَل",
                en: "to arrive, reach",
                enArabeezy: "wisel/yowsal",
                hint: "Verb ‘to arrive’ at a place.",
                exampleAr: "مْتَى وِصِل الباص عَالبلَد؟",
                exampleArabeezy: "mta wsl elbas 3albld?",
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
                exampleArabeezy: "bwsl 3la elshghl b3d ns sa3a.",
                exampleEn: "I arrive at work after half an hour.",
            },
            {
                id: "ra7_yiroo7",
                ar: "بروح",
                en: "to go",
                enArabeezy: "ra7/yiroo7",
                hint: "General verb ‘to go’ to a place.",
                exampleAr: "كُلّ يوم بِرُوح عَالجامعة الساعة تَمَانْيِة.",
                exampleArabeezy: "kl ywm brw7 3aljam3a elsa3a tmanya.",
                exampleEn: "Every day I go to the university at eight o’clock.",
            },
            {
                id: "tla3_yitla3",
                ar: "طِلِع، يِطلَع",
                en: "to leave / depart (bus, taxi) or go up",
                enArabeezy: "tli3 / yitla3",
                hint: "Used when transport leaves, or when someone goes up.",

                exampleAr: "استعجل، الباص طِلِع قبل دقيقتين!",
                exampleArabeezy: "ista3jil, el-baas tli3 abl da2i2tein!",
                exampleEn: "Hurry, the bus left two minutes ago!"
            }
            ,///////
            {
                id: "bEta2akhar",
                ar: "بِتْأَخَّر",
                en: "I am late / I get late",
                enArabeezy: "bita2akhar",
                hint:
                    "From تَأَخَّر = to be late. مَا بِدِّي أِتْأَخَّر = I don’t want to be late.",
                exampleAr: "لَمّا يكون في زَحْمِة، بِنِتأخَّر كْتير.",
                exampleArabeezy: "lma ykwn fy z7ma, bntakhr ktyr.",
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
                exampleArabeezy: "sarly ns sa3a bstna elbas.",
                exampleEn: "I’ve been waiting for the bus for half an hour.",
            },

            {
                id: "bamshi",
                ar: "بَمْشِي",
                en: "I walk",
                enArabeezy: "bamshi",
                hint: "From مِشِي = walking. ‘On foot’: بَمْشِي عَلَى رِجْلَيّ.",
                exampleAr: "لما تكون المسافة قريبة، بمشي وما باخد سيارة.",
                exampleArabeezy: "lma tkwn elmsafa qryba, bmshy wma bakhd syara.",
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
                exampleArabeezy: "bqt3 elshar3 lma elishara tkwn khdra.",
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
                exampleArabeezy: "kyf bqdr arw7 3la m7ta elbas",
                exampleEn: "How can I go to the bus station?",
            },

            {
                id: "2addesh_el2ijra",
                ar: "قَدّيش الأُجْرَة؟",
                en: "How much is the fare?",
                enArabeezy: "2addesh_el2ijreh",
                hint: "Phrase for asking the price (fare) of bus/taxi/etc.",
                exampleAr: "لما تاخد تاكسي، اسأل السواق: قديش الأجرة؟",
                exampleArabeezy: "lma takhd taksy, asal elswaq: qdysh elajra?",
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
                "arArabeezy": "lw sm7ty, kyf bwsl 3aljam3a mn han?",
                "en": "Excuse me, how do I get to the university from here?"
            },
            {
                "speaker": "Rasha",
                "ar": "أكيد! إنت جديد بالمنطقة؟",
                "arArabeezy": "akyd! int jdyd belmntqa?",
                "en": "Of course! Are you new in the area?"
            },
            {
                "speaker": "Malek",
                "ar": "ايو، أوّل يوم إلي هان.",
                "arArabeezy": "ayw, awl ywm ily han.",
                "en": "Yes, it’s my first day here."
            },
            {
                "speaker": "Rasha",
                "ar": "ولا يهمّك. بتِرْكَب باص رَقم تْمانْيِة مِن مَوقِف الباصات.",
                "arArabeezy": "wla yhmk. btrkb bas rqm tmanya mn mwqf elbasat.",
                "en": "No worries. You take bus number 8 from the bus stop."
            },
            {
                "speaker": "Malek",
                "ar": "وين بَلاقي مَوقِف الباص بالْزَّبْط؟",
                "arArabeezy": "wyn blaqy mwqf elbas belzbt?",
                "en": "Where exactly can I find the bus stop?"
            },
            {
                "speaker": "Rasha",
                "ar": "إمشِي دُغري قُدّامَك تقريبًا دَقِيقْتين، بَعْدين لف يَمين.",
                "arArabeezy": "imshy dghry qdamk tqryba dqyqtyn, b3dyn lf ymyn.",
                "en": "Walk straight ahead for about two minutes, then turn right."
            },
            {
                "speaker": "Rasha",
                "ar": "المَوقِف قُدّام مَحل الخُضرة، ما بِتِضِيع.",
                "arArabeezy": "elmwqf qdam m7l elkhdra, ma btdy3.",
                "en": "The stop is in front of the vegetable store, you can’t miss it."
            },
            {
                "speaker": "Malek",
                "ar": "تمام. ولَمّا أركَب الباص، بِنْزِل قُدّام الجامْعَة؟",
                "arArabeezy": "tmam. wlma arkb elbas, bnzl qdam eljam3a?",
                "en": "Okay. And when I get on the bus, do I get off in front of the university?"
            },
            {
                "speaker": "Rasha",
                "ar": "ايو، واحْكي لِلسَّوّاق: بدي انزل قُدّام الجامْعَة لو سَمَحْت.",
                "arArabeezy": "ayw, wa7ky lelswaq: bdy anzl qdam eljam3a lw sm7t.",
                "en": "Yes, and tell the driver: I get off in front of the university, please."
            },
            {
                "speaker": "Malek",
                "ar": "قَدّيش بِيخُد وقت لما أوصَل؟",
                "arArabeezy": "qdysh bykhd wqt lma awsl?",
                "en": "How long does it take to get there?"
            },
            {
                "speaker": "Rasha",
                "ar": "إِذا ما في زَحْمَة، تقريبًا رُبُع ساعَة.",
                "arArabeezy": "idha ma fy z7ma, tqryba rb3 sa3a.",
                "en": "If there’s no traffic, about fifteen minutes."
            },
            {
                "speaker": "Malek",
                "ar": "وبِالنِّسْبَة لِوقْت الرَّجْعَة؟ نَفْس الباص؟",
                "arArabeezy": "wbalnsba lwqt elrj3a?nfs elbas?",
                "en": "And for coming back? The same bus?"
            },
            {
                "speaker": "Rasha",
                "ar": "إي، في مَوقِف صْغير قُدّام الجامْعَة، بتركب مِن هُناك.",
                "arArabeezy": "iy, fy mwqf sghyr qdam eljam3a, btrkb mn hnak.",
                "en": "Yes, there’s a small stop in front of the university, you get on from there."
            },
            {
                "speaker": "Malek",
                "ar": "لو حَبّيت آخُد تاكسي؟",
                "arArabeezy": "lw 7byt aakhd taksy?",
                "en": "What if I want to take a taxi?"
            },
            {
                "speaker": "Rasha",
                "ar": "بتقدر، بس التاكسي أَغْلى. إسأل السَّوّاق: قَدّيش بياخد لَلجامْعَة؟",
                "arArabeezy": "btqdr, bs eltaksy aghla. isal elswaq: qdysh byakhd leljam3a?",
                "en": "You can, but the taxi is more expensive. Ask the driver: How much is the fare to the university?"
            },
            {
                "speaker": "Malek",
                "ar": "في بَاصات غير رَقم تْمانْيِة؟",
                "arArabeezy": "fy basat ghyr rqm tmanya?",
                "en": "Are there any other buses besides number 8?"
            },
            {
                "speaker": "Rasha",
                "ar": "في رَقم عَشْرَة بيمُرّ قُدّام الجامْعَة كمان، بس بِيأخُد وقت أكْتَر.",
                "arArabeezy": "fy rqm 3shra bymr qdam eljam3a kman, bs byakhd wqt aktr.",
                "en": "Bus number 10 also passes by the university, but it takes longer."
            },
            {
                "speaker": "Malek",
                "ar": "طيب لو ضِعت؟ في مكان معروف قريب مِن الجامْعَة؟",
                "arArabeezy": "tyb lw d3t?fy mkan m3rwf qryb mn eljam3a?",
                "en": "Okay if I get lost? Is there a famous landmark near the university?"
            },
            {
                "speaker": "Rasha",
                "ar": "إي، في مَكتَبَة كْبيرة قُدّام الباب الرَّئيسي، إسأل عَنها.",
                "arArabeezy": "iy, fy mktba kbyra qdam elbab elryysy, isal 3nha.",
                "en": "Yes, there’s a big library in front of the main gate, ask about it."
            },
            {
                "speaker": "Malek",
                "ar": "وبالنِّسْبَة للباص… وين أَدْفَع الأُجْرَة؟",
                "arArabeezy": "wbalnsba lelbas… wyn adf3 elajra?",
                "en": "And for the bus… where do I pay the fare?"
            },
            {
                "speaker": "Rasha",
                "ar": "لِلسَّوّاق مُباشَرَةً. بَتِحكيلو وين بدّك تنزِل.",
                "arArabeezy": "lelswaq mbashra. bt7kylw wyn bdk tnzl.",
                "en": "To the driver directly. You just tell him where you want to get off."
            },
            {
                "speaker": "Malek",
                "ar": "قدّيش تقريبا الأجرة؟",
                "arArabeezy": "qdysh tqryba elajra?",
                "en": "How much is the fare approximately?"
            },
            {
                "speaker": "Rasha",
                "ar": "تقريبا ٣ شيكِل أو ٤ حسب الطَّريق.",
                "arArabeezy": "tqryba ٣ shykl aw ٤ 7sb eltryq.",
                "en": "Around 3 or 4 shekels depending on the route."
            },
            {
                "speaker": "Malek",
                "ar": "لو ما كان معي فِكَّة؟",
                "arArabeezy": "lw ma kan m3y fka?",
                "en": "What if I don’t have change?"
            },
            {
                "speaker": "Rasha",
                "ar": "السّوّاق بِصَرْف، بس أَحْسَن تْكُون جاهِز.",
                "arArabeezy": "elswaq bsrf, bs a7sn tkwn jahz.",
                "en": "The driver can give change, but it’s better to be prepared."
            },
            {
                "speaker": "Malek",
                "ar": "في مواعيد مُعَيَّنة لِلوَصول والرَّواح؟",
                "arArabeezy": "fy mwa3yd m3yna lelwswl welrwa7?",
                "en": "Are there specific timings for going and returning?"
            },
            {
                "speaker": "Rasha",
                "ar": "الباصات بِتِمشي كُلّ رُبع ساعَة تقريبًا، خُصوصًا الصُّبح.",
                "arArabeezy": "elbasat btmshy kl rb3 sa3a tqryba, khswsa elsb7.",
                "en": "Buses run about every 15 minutes, especially in the morning."
            },
            {
                "speaker": "Malek",
                "ar": "مُمْكِن أتأخّر لو طُلع مَليان؟",
                "arArabeezy": "mmkn atakhr lw tl3 mlyan?",
                "en": "Can I get delayed if the bus is full?"
            },
            {
                "speaker": "Rasha",
                "ar": "إي، بِصير كتير. أحيانًا لازم تِسْتَنّى اللي بعدُه.",
                "arArabeezy": "iy, bsyr ktyr. a7yana lazm tstna elly b3dh.",
                "en": "Yes, often. Sometimes you have to wait for the next one."
            },
            {
                "speaker": "Malek",
                "ar": "تمام فهمت عليكي.",
                "arArabeezy": "tmam fhmt 3lyky.",
                "en": "Okay, I understand."
            },
            {
                "speaker": "Rasha",
                "ar": "إذا بِدّك، أنا كمان بروح عالجامْعَة، بقدَر أخُدَك معي اليوم.",
                "arArabeezy": "idha bdk, ana kman brw7 3aljam3a, bqdr akhdk m3y elywm.",
                "en": "If you want, I also go to the university, I can take you with me today."
            },
            {
                "speaker": "Malek",
                "ar": "والله تِسْلَمي! عنجد ساعدتيني.",
                "arArabeezy": "wellh tslmy! 3njd sa3dtyny.",
                "en": "Wow thank you! You really helped me."
            },
            {
                "speaker": "Rasha",
                "ar": "وَلا يِهِمّك، وَصَلْنا! خلّينا نروح سَوّاً.",
                "arArabeezy": "wla yhmk, wslna! khlyna nrw7 swa.",
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
            id: "prepositions",
            title: "Prepositions (في، على، من، لـ)",
            short: "Prepositions show place, direction, or source.",
            description:
                `Prepositions come before the noun.
They help us talk about movement and location.

Golden Rule:
Use the preposition before the place or person.`,
            table: {
                title: "Common Prepositions",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["في", "fi", "in/at", "Location"],
                    ["على", "3ala", "on", "Surface"],
                    ["من", "min", "from", "Origin"],
                    ["لـ", "la", "to/for", "Direction"],
                ]
            },
            examples: [
                { ar: "أنا في الباص", arabeezy: "ana fi el-baS", en: "I am on the bus." },
                { ar: "بنزل من التاكسي", arabeezy: "bnizel min et-taksi", en: "I get off the taxi." },
                { ar: "بروح على الشغل", arabeezy: "bruu7 3ash-shoghl", en: "I go to work." },
                { ar: "تعال لعندي", arabeezy: "ta3al la-3indi", en: "Come to me." },
                { ar: "الشنطة على الكرسي", arabeezy: "esh-shanTa 3al-kursi", en: "The bag is on the chair." }
            ],
            teacherNotes:
                `Spoken uses short prepositions more than MSA.
MSA may show case endings after them; spoken drops it.
Focus on movement and transport contexts.
Keep examples short and clear.`,
            commonMistakes: [
                "Mixing في and على",
                "Forgetting the preposition",
                "Using literal English order",
            ],
            functionalUse:
                "Used when talking about routes, transport, and destinations.",
        },
        {
            id: "imperative",
            title: "Imperative (commands in transport)",
            short: "Imperative is used to tell someone to do something.",
            description:
                `In spoken Arabic, the imperative is common in transport and directions.
It is usually a short verb form.

Golden Rule:
Use a short command for quick directions.`,
            table: {
                title: "Common Commands",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["روح", "ruu7", "Go", "Direction"],
                    ["تعال", "ta3al", "Come", "Calling"],
                    ["وقف", "wa22ef", "Stop", "Driver"],
                    ["اركَب", "irkab", "Get on", "Bus/taxi"],
                ]
            },
            examples: [
                { ar: "روح عالمدرسة", arabeezy: "ruu7 3al-madrasah", en: "Go to school." },
                { ar: "تعال هون", arabeezy: "ta3al hoon", en: "Come here." },
                { ar: "وقف هون لو سمحت", arabeezy: "wa22ef hoon law sama7t", en: "Stop here, please." },
                { ar: "اركَب الباص", arabeezy: "irkab el-baS", en: "Get on the bus." },
                { ar: "انزل هون", arabeezy: "inzal hoon", en: "Get off here." }
            ],
            teacherNotes:
                `Spoken imperatives are short and direct.
MSA imperatives can look different in form.
Teach polite add-ons like لو سمحت.
Use transport scenarios only.`,
            commonMistakes: [
                "Using present tense instead of imperative",
                "Adding unnecessary pronouns",
                "Using formal MSA commands",
            ],
            functionalUse:
                "Used for giving directions, getting on/off transport, and quick requests.",
        },
    ],



    // ====================================
    // PRACTICE
    // ====================================
    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                id: "mc_match_1",
                type: "match",
                prompt: "Match the English word to Arabic: transportation, public transport",
                options: ["مُوَاصَلات", "سَيَّارَة", "تاكسي", "باص", "بَسكَلِيت"],
                correct: "مُوَاصَلات",
            },
            {
                id: "mc_complete_2",
                type: "complete",
                prompt: "Complete the Arabic sentence for: We took the train when we were in Jordan.\nرِكِبنا ال___ لَمّا كُنّا بِالأُرْدُن.",
                options: ["قِطار", "مَحَطَّة", "مَوقِف باصات", "شَارِع", "كَمين بْنَزين"],
                correct: "قِطار",
            },
            {
                id: "mc_reorder_3",
                type: "reorder",
                prompt: "Reorder the Arabic words to match: The taxi stopped at the red light.",
                options: ["التاكسي", "وقف", "عالإشارة", "الحمرا"],
                correct: ["التاكسي", "وقف", "عالإشارة", "الحمرا"],
            },
            {
                id: "mc_choose_4",
                type: "choose",
                prompt: "Choose the correct Arabic word for: I drive",
                options: ["بَسُوق", "وِصِل، يوصَل", "بَوْصَل", "بروح", "طِلِع"],
                correct: "بَسُوق",
            },
            {
                id: "mc_match_5",
                type: "match",
                prompt: "Match the English word to Arabic: to enter / go into ...",
                options: ["يِفوت عَـ...", "بِتْأَخَّر", "بَسْتَنَّى", "بَمْشِي", "بَقَطِّع الشَّارِع"],
                correct: "يِفوت عَـ...",
            },
            {
                id: "mc_complete_6",
                type: "match",
                prompt: "Match the English word to Arabic: How can I go to…?",
                options: ["كِيف بَقْدَر أَرُوح عَلَى...؟", "قَدّيش الأُجْرَة؟"],
                correct: "كِيف بَقْدَر أَرُوح عَلَى...؟",
            },
        ],
    },

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
        translation: [
            { id: "trans_t1", type: "enToAr", textEn: "How can I go to the university?", textAr: "كيف بقدر أروح عالجامعة؟" },
            { id: "trans_t2", type: "arToEn", textEn: "I take the bus every day.", textAr: "أنا بركب الباص كل يوم." },
            { id: "trans_t3", type: "enToAr", textEn: "The taxi is expensive.", textAr: "التكسي غالي." },
            { id: "trans_t4", type: "arToEn", textEn: "I get off here, please.", textAr: "بنزل هون لو سمحت." },
            { id: "trans_t5", type: "enToAr", textEn: "Is there a direct line?", textAr: "في خط مباشر؟" },
            { id: "trans_t6", type: "arToEn", textEn: "The traffic is crowded.", textAr: "في زحمة." },
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