// Auto-generated from original app.js
import { LESSON_ID_SHOPPING } from '../../core/constants.js';

export const lessonId = LESSON_ID_SHOPPING;
export const lesson = {
    meta: {
        level: "Pre-Intermediate",
        unit: "Shopping & Prices",
        lessonTitle: "Unit 9 – Shopping, Markets & Prices",
    },

    overview: {
        title: "Unit 9 – Shopping & Prices",
        description:
            "In this unit, students learn how to shop, ask about prices, bargain, and pay in Palestinian Arabic. The focus is on useful chunks like asking how much, saying it’s expensive or cheap, counting items, and dealing with markets, small shops, and online buying.",
        goals: [
            "Ask and answer about prices clearly and naturally.",
            "Use numbers, currency, and quantity words in real shopping situations.",
            "Express opinion about price: expensive, cheap, fair, too much.",
            "Practice bargaining with polite and effective phrases.",
            "Describe what they want to buy and how many, and handle payment.",
        ],
    },

    // ====================================
    // VOCABULARY
    // ====================================
    vocabulary: {
        core: [
            // ===== PLACES =====
            {
                id: "dukkan",
                ar: "دُكّان",
                en: "corner shop / mini-market",
                enArabeezy: "dukkān / dukkan",
                hint:
                    "Small neighbourhood shop for basic groceries and stuff.",
                exampleAr: "رُحْت عَالدُّكّان أَشْتِري خُبِز وَحْلِيب.",
                exampleEn: "I went to the corner shop to buy bread and milk.",
            },
            {
                id: "ma7al",
                ar: "مَحَلّ",
                en: "shop / store",
                enArabeezy: "ma7all / maḥall",
                hint:
                    "General word for any shop. Plural: مَحَلّات.",
                exampleAr: "هَادَا أَحْسَن مَحَلّ أَوَاعِي بِالحَارَة.",
                exampleEn: "This is the best clothes shop in the neighbourhood.",
            },
            {
                id: "souk",
                ar: "سُوق",
                en: "market",
                enArabeezy: "sūʾ / souq",
                hint:
                    "Traditional market or big shopping street with many small shops.",
                exampleAr: "بِنِنْزِل عَالسُّوق يَوْم الجُمعة.",
                exampleEn: "We go down to the market on Friday.",
            },
            {
                id: "supermarket",
                ar: "سوبِرماركِت",
                en: "supermarket",
                enArabeezy: "supermarket",
                hint:
                    "Big self-service grocery shop.",
                exampleAr: "بنشتري الأغراض الكبيرة من السوبرماركت.",
                exampleEn: "We buy the big supplies from the supermarket.",
            },

            // ===== MONEY & PRICE =====
            {
                id: "masari",
                ar: "مَصاري",
                en: "money (cash)",
                enArabeezy: "maṣāri / masari",
                hint:
                    "Very common Palestinian word for money in general.",
                exampleAr: "مَعِي مَصاري شْوَيّ بَس.",
                exampleEn: "I only have a little money.",
            },
            {
                id: "se3er",
                ar: "سِعِر",
                en: "price",
                enArabeezy: "siʿer / se3er",
                hint: "How much something costs.",
                exampleAr: "شُو السِّعِر هُون؟",
                exampleEn: "What’s the price here?",
            },
            {
                id: "addeish_hada",
                ar: "قَدِّيش هَادَا؟",
                en: "How much is this?",
                enArabeezy: "addeish hāda? / 2addeish hada?",
                hint:
                    "Most common way to ask the price of something you’re holding/pointing at.",
                exampleAr: "قَدِّيش هَادَا، لَو سَمَحِت؟",
                exampleEn: "How much is this, please?",
            },
            {
                id: "ghali",
                ar: "غالي",
                en: "expensive",
                enArabeezy: "ghāli / ghali",
                hint:
                    "Masc: غالي, fem: غاليِة. Opposite of رخيص.",
                exampleAr: "صَرَاحَةً هَادَا غالي شْوَيّ.",
                exampleEn: "Honestly, this is a bit expensive.",
            },
            {
                id: "rakhis",
                ar: "رخيص",
                en: "cheap / inexpensive",
                enArabeezy: "rakhiṣ / rakhis",
                hint:
                    "Masc: رخيص, fem: رخيصَة. Can be positive (good price) or negative (bad quality).",
                exampleAr: "السِّعِر رخيص بَس الجَوْدَة عادية.",
                exampleEn: "The price is cheap but the quality is average.",
            },
            {
                id: "tanzeel",
                ar: "تَنْزيلات",
                en: "sale / discounts",
                enArabeezy: "tanzīlāt / tanzeelat",
                hint:
                    "Also خَصْم = discount. Shops write: تَنْزيلات كْبيرَة.",
                exampleAr: "فِي تَنْزيلات عَلَى الأَوَاعِي هالأَيام.",
                exampleEn: "There are sales on clothes these days.",
            },
            {
                id: "khasm",
                ar: "خَصْم",
                en: "discount",
                enArabeezy: "khaṣm / khasm",
                hint: "Money taken off the original price.",
                exampleAr: "فِيه خَصْم لِلطُلّاب؟",
                exampleEn: "Is there a student discount?",
            },

            // ===== PAYMENT =====
            {
                id: "kash",
                ar: "كاش",
                en: "cash",
                enArabeezy: "cash",
                hint:
                    "Pay with physical money, not card.",
                exampleAr: "بِفَضَّل أَدْفَع كاش.",
                exampleEn: "I prefer to pay in cash.",
            },
            {
                id: "card",
                ar: "كَرْت / كَرْد",
                en: "bank card",
                enArabeezy: "kart / card",
                hint:
                    "Bank card / debit or credit.",
                exampleAr: "مُمْكِن أَدْفَع بِالكَرْت؟",
                exampleEn: "Can I pay by card?",
            },
            {
                id: "atm",
                ar: "صَرّاف آلي",
                en: "ATM / cash machine",
                enArabeezy: "ṣarrāf ʾāli / sarraf āli",
                hint:
                    "Machine to withdraw money from your card.",
                exampleAr: "فِيه صَرّاف آلي قُدّام المَحَلّ.",
                exampleEn: "There is an ATM in front of the shop.",
            },
            {
                id: "wasl",
                ar: "وَصْل / بَوْن",
                en: "receipt",
                enArabeezy: "waṣl / bawn",
                hint:
                    "Paper you get after paying. Useful if you want to return something.",
                exampleAr: "خُد الوَصْل، يُمْكِن تْحْتَاجه بَعْدين.",
                exampleEn: "Take the receipt, you might need it later.",
            },
            {
                id: "fatora_shop",
                ar: "فاتورَة",
                en: "invoice / bill",
                enArabeezy: "fātūra / fatora",
                hint:
                    "More official than وَصْل, especially for big purchases or deliveries.",
                exampleAr: "طَلَبْنَا فاتورَة رَسْمِيّة مِن الشِّرْكَة.",
                exampleEn: "We asked for an official invoice from the company.",
            },

            // ===== ITEM DETAILS =====
            {
                id: "no3",
                ar: "نَوْع",
                en: "type / kind",
                enArabeezy: "nawʿ / no3",
                hint:
                    "What kind: نوع القَمِيص، نوع القَهْوِة، نوع القِماش.",
                exampleAr: "شُو نَوْع القِماش هَادَا؟",
                exampleEn: "What type of fabric is this?",
            },
            {
                id: "lawn",
                ar: "لَوْن",
                en: "color",
                enArabeezy: "lawn",
                hint:
                    "Plural: أَلْوان. Very common in clothes & shoes shopping.",
                exampleAr: "عِنْدو أَلْوان تَانِيَة مِن نَفْس الموديل.",
                exampleEn: "They have other colors of the same model.",
            },
            {
                id: "7ajm",
                ar: "حَجِم / مَقاس",
                en: "size",
                enArabeezy: "7ajm / maqās",
                hint:
                    "حَجِم for general size, مَقاس for clothes & shoes.",
                exampleAr: "مَقاس الجزمة كْبِير عَلَيّ شْوَيّ.",
                exampleEn: "The shoe size is a bit big on me.",
            },
            {
                id: "kilo",
                ar: "كِيلو",
                en: "kilo (kilogram)",
                enArabeezy: "kilo",
                hint:
                    "Used in markets for fruits, vegetables, etc.",
                exampleAr: "بَدّي نُصّ كِيلو بندورة.",
                exampleEn: "I want half a kilo of tomatoes.",
            },
            {
                id: "era",
                ar: "قِطْعَة",
                en: "piece / item",
                enArabeezy: "ʾiṭʿa / 2eṭ3a",
                hint:
                    "One piece of something: clothes, cake, cheese…",
                exampleAr: "بَدّي قِطْعَة كْمان مِن هَادَا النَّوْع.",
                exampleEn: "I want one more piece of this type.",
            },

            // ===== VERBS & USEFUL CHUNKS =====
            {
                id: "bashtiri",
                ar: "بَشْتِري",
                en: "I buy",
                enArabeezy: "bashtiri",
                hint:
                    "From اِشْتَرَى = to buy. Very frequent in shopping talk.",
                exampleAr: "كْلّ مَرَّة بَطْلَع عَالسُّوق بَشْتِري اشياء زْيادَة.",
                exampleEn: "Every time I go to the market I buy extra things.",
            },

            {
                id: "baddi_ashtiri",
                ar: "بَدّي أِشْتِري...",
                en: "I want to buy...",
                enArabeezy: "baddi ashtiri...",
                hint:
                    "Good opener with the seller: بَدّي أِشْتِري بنْطَلُون / هَدِيّة...",
                exampleAr: "بَدّي أِشْتِري هَدِيّة لِصْحِبْتي.",
                exampleEn: "I want to buy a gift for my friend.",
            },
            {
                id: "ana_bas_batfarraj",
                ar: "أَنا بَس بَتْفَرَّج",
                en: "I’m just looking",
                enArabeezy: "ana bas batfarraj",
                hint:
                    "Polite way to tell the seller you’re not ready to buy yet.",
                exampleAr: "مِش مُجْبَرَة تِشْتِري، حَتّى لَو حَكِيتِيلُه: أَنا بَس بَتْفَرَّج.",
                exampleEn: "You’re not obliged to buy, even if you tell him: I’m just looking.",
            },
            {
                id: "3indak_ishi_tani",
                ar: "عِنْدَك إِشِي تَانِي؟",
                en: "Do you have something else?",
                enArabeezy: "ʿindak ishi tāni? / 3indak ishi tani?",
                hint:
                    "Useful to ask for another model / color / size.",
                exampleAr: "عِنْدَك إِشِي تَانِي نَفْس المَقاس بَس لَوْن تَانِي؟",
                exampleEn: "Do you have something else in the same size but a different color?",
            },
            {
                id: "mumkin_tnazzel_shway",
                ar: "مُمْكِن تْنَزِّل شْوَيّ؟",
                en: "Can you make it a bit cheaper?",
                enArabeezy: "mumkin tnazzel shway?",
                hint:
                    "Common bargaining phrase in markets and some shops.",
                exampleAr: "السِّعِر عالي، مُمْكِن تْنَزِّل شْوَيّ؟",
                exampleEn: "The price is high, can you lower it a bit?",
            },
            {
                id: "akher_se3er",
                ar: "آخِر سِعِر؟",
                en: "What’s your final price?",
                enArabeezy: "ā5er se3er? / akher se3er?",
                hint:
                    "Used in bargaining when you want the lowest price.",
                exampleAr: "يَعْنِي هَادَا آخِر سِعِر وَلّا فِيه نْقَاص كْمَان؟",
                exampleEn: "So is this your final price or can you go lower?",
            },
        ],

        extra: [
            {
                id: "mizaniyyeh",
                ar: "مِيزانِيّة",
                en: "budget",
                enArabeezy: "mīzāniyyeh / mizaniyyeh",
                hint:
                    "Money you plan to spend.",
                exampleAr: "مِيزانِيّتي لِلشوبينغ هالشَّهِر مَحْدودَة.",
                exampleEn: "My shopping budget this month is limited.",
            },
            {
                id: "safqa",
                ar: "صَفْقَة / لُقْطَة",
                en: "good deal / bargain",
                enArabeezy: "ṣafʾa / loʾta / lo2ta",
                hint:
                    "لُقْطَة = really good catch / bargain.",
                exampleAr: "هَادِي لُقْطَة، السِّعِر كْتِير مْناسِب.",
                exampleEn: "This is a steal, the price is very good.",
            },
            {
                id: "istibdal",
                ar: "اِسْتِبْدال",
                en: "exchange (change an item)",
                enArabeezy: "istibdāl / istibdal",
                hint:
                    "Changing item for another one. Often with وَصْل.",
                exampleAr: "بقدر أبدّلها بنفس السعر بس بمقاس غير؟",
                exampleEn: "Can I exchange it for the same price but a different size?",
            },
            {
                id: "istirja3",
                ar: "اِسْتِرْجاع",
                en: "return (give back item)",
                enArabeezy: "istirjāʿ / istirja3",
                hint:
                    "Taking item back to the shop and getting money back.",
                exampleAr: "السِّياسَة عِنْدْهُم مَا فِيه اِسْتِرْجاع، بَس اِسْتِبْدال.",
                exampleEn: "Their policy has no returns, only exchanges.",
            },
            {
                id: "3ard_khas",
                ar: "عَرْض خَاصّ",
                en: "special offer",
                enArabeezy: "ʿarḍ khāṣṣ / 3ard khaṣ",
                hint:
                    "Temporary promotion: 2 for 1, or cheaper price.",
                exampleAr: "فِي عَرْض خَاصّ عَلَى الشَّمْبُو الْيَوْم.",
                exampleEn: "There is a special offer on shampoo today.",
            },
            {
                id: "khidmet_zaba2en",
                ar: "خِدْمِة زَبائِن",
                en: "customer service",
                enArabeezy: "khidmet zabāʾen / khidmet zaba2en",
                hint:
                    "Where you complain or ask for help with a purchase.",
                exampleAr: "خِدْمِة الزَّبائِن فِي هالمَحَلّ مُمْتازَة.",
                exampleEn: "Customer service in this shop is excellent.",
            },
        ],
    }
    ,

    // ====================================
    // DIALOGUE
    // ====================================
    dialogue: {
        lines: [
            {
                "speaker": "Nader",
                "ar": "مَسّا الخير يا يوسف، شُو أخْبارَك؟",
                "en": "Good evening, Yousef, how are you?"
            },
            {
                "speaker": "Yousef",
                "ar": "مَسّا النّور، تَمام. اليوم عندي وَقْت أشتري اشِي لِلحَفْلَة.",
                "en": "Good evening, I’m fine. Today I have time to buy something for the party."
            },
            {
                "speaker": "Nader",
                "ar": "طَيّب، مُمْكِن نروح عَالدُّكّان القَريب، سَامِع إنّو في تنزيلات هالأُسْبوع.",
                "en": "Okay, we can go to the nearby shop; I heard there are discounts this week."
            },
            {
                "speaker": "Yousef",
                "ar": "مُمْتاز، يِلّا نِروح.",
                "en": "Great, let’s go."
            },
            {
                "speaker": "Yousef",
                "ar": "سَلام عَليكم، قَدّيش سِعِر هاد القَمِيص؟",
                "en": "Peace be upon you, how much is this shirt?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "هَادَا بِخَمْسُمِيّة شِيكِل.",
                "en": "This one is five hundred shekels."
            },
            {
                "speaker": "Nader",
                "ar": "غالي شْوَي. مُمْكِن تِنَزِّل السِّعِر؟",
                "en": "It’s a bit expensive. Can you lower the price?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "بقدر أعطيك خصم بسيط؛ خلّيه أربعمية وخمسين.",
                "en": "I can give you a small discount; let’s make it four hundred fifty."
            },
            {
                "speaker": "Nader",
                "ar": "وفي تَنزيلات تانيِة هالأُسْبوع عَالأغراض التّانْيِة؟",
                "en": "And are there other discounts this week on the other items?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "إي، في تنزيلات عَالمُعْظَم، بَس هالقَمِيص من البِضاعَة الجْديدَة.",
                "en": "Yes, there are discounts on most things, but this shirt is from the new stock."
            },
            {
                "speaker": "Yousef",
                "ar": "تمام، طيب شوف هالقميص التاني، أرخص؟",
                "en": "Okay, look at this other shirt, is it cheaper?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "إي، هَادَا أَرْخَص، سِعْرُه أَرْبَعْمِيّة شِيكِل.",
                "en": "Yes, this one is cheaper, its price is four hundred shekels."
            },
            {
                "speaker": "Nader",
                "ar": "مُمْكِن نِقارن الجَوْدَة بَيْن الإِثْنَيْن؟",
                "en": "Can we compare the quality between the two?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "الأَوَّل جَوْدَتُه أَعْلَى والقماش أَغْلَى، بَس التّاني كْمان مْنيح لِلاِسْتِعْمال اليومي.",
                "en": "The first has higher quality and more expensive fabric, but the second is also good for daily use."
            },
            {
                "speaker": "Yousef",
                "ar": "أنا مِيزانِيتي مَحْدودَة، بَدّي شِي مُمْكِن أَشتِريه وما يْكَسِّرني.",
                "en": "My budget is limited, I want something I can buy without it breaking me."
            },
            {
                "speaker": "Shopkeeper",
                "ar": "مُمْكِن أعمل تَنزيل عَالتّاني، نِخَلّيه تْلَاتْمِيّة وَخَمْسِين إِذا بتاخُدُه هَلَّق.",
                "en": "I can give a discount on the second one, we make it three hundred fifty if you take it now."
            },
            {
                "speaker": "Nader",
                "ar": "هيك أحسن. بضلّ ثلاثمية وخمسين إذا دفعنا بالبطاقة؟",
                "en": "That’s better. Will it still be three hundred fifty if we pay by card?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "بِالبِطاقَة في عَلَيْها رُسُوم وبِضِيف ضَرِيبَة صْغيرَة.",
                "en": "With card there are fees and we add a small tax."
            },
            {
                "speaker": "Yousef",
                "ar": "قَدّيش تَقْريبًا الضَّرِيبَة والرُّسُوم؟",
                "en": "Approximately how much are the tax and fees?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "تَقْريبًا خَمِسْطَعْش شِكِل زِيادَة.",
                "en": "Around fifteen shekels extra."
            },
            {
                "speaker": "Nader",
                "ar": "طَيّب، مُمْكِن نَدْفَع كاش وتِضَلّ تْلَاتْمِيّة وَخَمْسِين بَس؟",
                "en": "Okay, can we pay cash and keep it three hundred fifty only?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "إي، الكاش أَفْضَل، خَلّيه تْلَاتْمِيّة وَخَمْسِين كاش من غير زِيادَة.",
                "en": "Yes, cash is better, let’s keep it three hundred fifty cash with no extra."
            },
            {
                "speaker": "Yousef",
                "ar": "لَو اشْتَرَيْنا شِي تاني مَعُه، مُمْكِن تِنَزِّل كْمان شْوَي؟",
                "en": "If we buy something else with it, can you lower the price a bit more?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "إِذا أَخَدتوا كَم قِطْعَة، بِنِقْدَر نِعْمَل تَنزيل إِضافي عَالحِساب الكُلِّي.",
                "en": "If you take a few items, we can give an additional discount on the total."
            },
            {
                "speaker": "Nader",
                "ar": "طَيّب، هالكِرافِت كْمان حْلُوة. قَدّيش سِعْرُها؟",
                "en": "Okay, this tie is also nice. How much is it?"
            },
            {
                "speaker": "Shopkeeper",
                "ar": "هَاد بِخَمْسين شِيكِل، بَس إِذا مَع القَمِيص، بَعْطيكُم التّنتين بِتْلَاتْمِيّة وَتْسعِين.",
                "en": "This is fifty shekels, but if it’s with the shirt, I’ll give you both for three hundred ninety."
            },
            {
                "speaker": "Yousef",
                "ar": "تْلَاتْمِيّة وَتْسعِين مْنيحَة، بِناسِب مِيزانِيتي.",
                "en": "Three hundred ninety is good, it suits my budget."
            },
            {
                "speaker": "Nader",
                "ar": "مْوافِقين، مْنِخُد القَمِيص وَالرِّباط.",
                "en": "We agree, we’ll take the shirt and the tie."
            },
            {
                "speaker": "Shopkeeper",
                "ar": "بَدّكُم كيس كْبير وَلّا صْغير؟",
                "en": "Do you want a big bag or a small one?"
            },
            {
                "speaker": "Nader",
                "ar": "كيس صْغير بِكَفّي، شُكْرًا.",
                "en": "A small bag is enough, thank you."
            },
            {
                "speaker": "Shopkeeper",
                "ar": "هاي الكيس، وهاي الفاتورَة، أَهْلًا وسَهْلًا فيكُم.",
                "en": "Here is the bag, and here is the receipt, you’re most welcome."
            },
            {
                "speaker": "Yousef",
                "ar": "شُكْرًا إِلَك، الله يُعْطيك العافْيِة.",
                "en": "Thank you, may God give you health."
            },
            {
                "speaker": "Nader",
                "ar": "يلا نرجع عالبيت ونجرّب القميص؛ بحسّه رح يكون مناسب كتير للحفلة",
                "en": "Let’s go back home and try the shirt on; I think it will be very suitable for the party."
            },
            {
                "speaker": "Yousef",
                "ar": "إي، شَكْلُه أَحْلى إِشِي شُفْناه اليوم.",
                "en": "Yes, it looks like the nicest thing we saw today."
            }
        ]
    }
    ,

    // ====================================
    // GRAMMAR
    // ====================================
    grammar: [
        {
            id: "bikamm_phrase",
            title: "Asking price with بِكَم / بِكَم ...؟",
            description:
                "Use the short question وَكَام or بِكَم to ask about price:\n\n" +
                "• بِكَم هَادَا؟ = How much is this?\n" +
                "• بِكَم بِالقَمِيص؟ = How much for the shirt?\n" +
                "• بِكَم الكِيلُو؟ = How much per kilo?\n\n" +
                "Very natural in markets and shops. Short, clear, and direct.",
        },
        {
            id: "kthir_shway_opinion",
            title: "Saying something is too expensive or a little cheap",
            description:
                "Use simple adjectives and little modifiers:\n\n" +
                "• غَالِي كْتِير = too expensive.\n" +
                "• رَخِيص / مُنَاسِب = cheap or reasonable.\n" +
                "• شْوَيّ = a bit. Combine: مُمْكِن تِنَاقِص شْوَيّ؟ = Can you reduce a bit?\n\n" +
                "These phrases are enough to start bargaining politely.",
        },
        {
            id: "numbers_and_kilo",
            title: "Using numbers and measurements",
            description:
                "Say the quantity first, then the item, or use a unit:\n\n" +
                "• وَاحِد كِيلُو طَمَاطِم = one kilo of tomatoes.\n" +
                "• اتْنَيْن خُبز = two breads.\n" +
                "• تَلَاتَة كِيلُوهَات بَطَّاطَا = three kilos of potatoes.\n\n" +
                "For shopping, this structure is enough to communicate what you want clearly.",
        },
        {
            id: "payment_chunk",
            title: "Paying with بَدْفَع and methods",
            description:
                "Use بَدْفَع + payment method:\n\n" +
                "• بَدْفَع نَقْد = I pay cash.\n" +
                "• بَدْفَع مَعْ كَارْد = I pay with card.\n" +
                "• بَدْفَع عِنْد التَّسْلِيم = I pay on delivery.\n\n" +
                "Simple chunk, common in shops, markets, and online.",
        },
    ],

    // ====================================
    // PRACTICE
    // ====================================
    practice: {
        quiz: [
            {
                id: "shop_q1",
                questionAr: "أَيّ تَعْبِير تَسْتَعْمِلُه لِـ ‘How much is this?’؟",
                optionsEn: ["بِكَم هَادَا؟", "بَدْفَع هَادَا", "غَالِي كْتِير"],
                correctIndex: 0,
            },
            {
                id: "shop_q2",
                questionAr: "مَعْنَى ‘غَالِي’ هُوَّ:",
                optionsEn: ["cheap", "expensive", "beautiful"],
                correctIndex: 1,
            },
            {
                id: "shop_q3",
                questionAr: "مَعْنَى ‘رَخِيص’ هُوَّ:",
                optionsEn: ["cheap", "expensive", "small"],
                correctIndex: 0,
            },
            {
                id: "shop_q4",
                questionAr: "أَيّ جُمْلَة تُسْتَعْمَل لِلْبَحْث عَنْ تَخْفِيض؟",
                optionsEn: ["مَا بِشْتَغِل", "مُمْكِن نِنَاقِص شْوَيّ؟", "بَدْفَع كَارْد"],
                correctIndex: 1,
            },
            {
                id: "shop_q5",
                questionAr: "مَعْنَى ‘كِيلُو’ هُوَّ:",
                optionsEn: ["piece", "kilogram", "meter"],
                correctIndex: 1,
            },
        ],

        rolePlays: [
            "Role-play 1: Market bargaining. Student A is the seller; Student B is the buyer. Buyer asks price, says it is too expensive, asks to reduce a bit, then pays. Use numbers for kilos or quantity.",
            "Role-play 2: Clothes shop. Buyer sees a shirt and asks price. Seller gives price; buyer requests discount politely; seller offers minor reduction. Buyer decides to buy or leave. Use polite phrases and numbers.",
            "Role-play 3: Online deal. Buyer asks for special student price. Seller gives discount. Buyer chooses payment method and says they will pay. Use chunk for online payment or cash on delivery.",
        ],
    },

    // ====================================
    // HOMEWORK
    // ====================================
    homework: {
        instructions:
            "Write and record a 60–90 second audio in Palestinian Arabic about a shopping experience. Include:\n" +
            "• What you bought and where (market, shop, online).\n" +
            "• The price and whether it was expensive or cheap.\n" +
            "• Use at least 3 numbers or measurements, and mention the currency.\n" +
            "• Include one bargaining sentence or a polite request for a discount.",
    },

    // ====================================
    // TEACHER NOTES
    // ====================================
    teacherNotes: {
        warmup: [
            "Start by asking the student what they usually buy when they go out: snacks, clothes, phone credit, etc.",
            "Show a picture of a small market stall or a shop and ask them to name items in English; then translate into Palestinian Arabic and add a price.",
        ],
        vocabularySteps: [
            "Teach key price and money words first: بِكَم؟, شِيكِل, غَالِي, رَخِيص, مُنَاسِب.",
            "Then add numbers and quantities: وَاحِد, اتْنَيْن, تَلَاتَة, كِيلُو. Practice with real items or drawings.",
            "Add verbs and chunks in small sets: بَدْفَع, بِيِعْنُوهُ, بِنَاقِص, بِيِعْطِي. Use them with a single item to reinforce.",
        ],
        dialogueSteps: [
            "Use Scene 1 and Scene 2 scripts as role-play scripts. Let the student act as seller and buyer in both sequences.",
            "Encourage imitation of polite phrases; repeat the bargaining line a few times until it feels natural.",
            "Adapt numbers and items to match the student’s real market or shop experience.",
        ],
        practiceTips: [
            "If the student seems shy to bargain, start with a very small reduction example and praise them for trying.",
            "Point out tiny wins: even reducing three shekels is a success; it builds confidence.",
            "Use short timed drills: student asks price, seller answers; switch quickly between roles.",
        ],
        wrapup: [
            "Summarize the main chunks and numbers on a small list the student can screenshot or copy.",
            "Ask the student to write 2–3 items they will buy this week with prices, even if imaginary.",
            "Remind them of homework and that the audio can be about a real or imagined shopping trip.",
        ],
        myNotes: "",
    },
};
