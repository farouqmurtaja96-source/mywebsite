// Auto-generated from original app.js
import { LESSON_ID_FAMILY } from '../../core/constants.js';

export const lessonId = LESSON_ID_FAMILY;
export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Family",
        lessonTitle: "Unit 2 – Family & People",
    },

    overview: {
        title: "Unit 2 – Family & People",
        description:
            "In this unit, students explore how to talk about their family and people close to them in Palestinian Arabic. They learn key family words, how to say ‘I have…’, how to describe older/younger siblings, and how to talk about marital status in a simple, natural way.",
        goals: [
            "Name close family members and relatives in Palestinian Arabic.",
            "Use «عِنْدِي…» (I have…) to talk about family and people.",
            "Describe siblings and relatives using older/younger and basic adjectives.",
            "Ask and answer simple questions about family size and marital status.",
            "Participate in longer conversations about family in a natural, story-like way.",
        ],
    },

    // ====================================
    // VOCABULARY
    // ====================================
    vocabulary: {
        core: [
            // ===== FAMILY & HOUSEHOLD =====
            {
                id: "3eileh",
                ar: "عِيلَة",
                en: "family",
                enArabeezy: "3eileh",
                hint:
                    "Common word for ‘family’. عِيلْتِي = my family. Often used for close family living together.",
                exampleAr: "عِيلْتِي مَو كْبِيرَة، بَسّ كْتِير قَرِيبِين مِن بَعْض.",
                exampleEn: "My family is not big, but we are very close to each other.",
            },
            {
                id: "ahl",
                ar: "أَهْل",
                en: "family / parents (household)",
                enArabeezy: "ahl",
                hint:
                    "أَهْل can mean ‘family’ or specifically ‘parents’. أَهْلِي = my family / my parents.",
                exampleAr: "أَهْلِي سَاكْنِين فِي غَزَّة.",
                exampleEn: "My family lives in Gaza.",
            },


            // ===== PARENTS =====
            {
                id: "abuy",
                ar: "أَبُوي",
                en: "my father",
                enArabeezy: "abuy",
                hint:
                    "From أَب (father). أَبُوي = my father. For ‘his father’ you can hear أَبُوه، for ‘her father’ أَبُوهَا.",
                exampleAr: "أَبُوي بِيِشْتِغِل مُهَنْدِس.",
                exampleEn: "My father works as an engineer.",
            },
            {
                id: "immi",
                ar: "إِمّي",
                en: "my mother",
                enArabeezy: "immi",
                hint:
                    "From أُمّ (mother). إِمِّي = my mother. You may also hear يَمَّا (mom) in spoken language.",
                exampleAr: "إمي بتشتغل مُعلِّمة",
                exampleEn: "My mother works as a teacher.",
            },

            // ===== SIBLINGS & CHILDREN =====
            {
                id: "akh",
                ar: "أَخ",
                en: "brother",
                enArabeezy: "akh",
                hint:
                    "أَخ = brother. أَخُوي = my brother. Plural: إِخْوَة = siblings/brothers.",
                exampleAr: "عِنْدي أَخ أَكبَر مِنّي بِسِنِين.",
                exampleEn: "I have a brother older than me by a few years.",
            },
            {
                id: "okht",
                ar: "أُخْت",
                en: "sister",
                enArabeezy: "okht",
                hint:
                    "أُخْت = sister. أُخْتِي = my sister. Plural: أَخَوَات = sisters.",
                exampleAr: "أختي بتدرس بالجامعة",
                exampleEn: "My sister studies at university.",
            },
            {
                id: "walad",
                ar: "ابن",
                en: "son",
                enArabeezy: "walad",
                hint: "Can mean boy or son depending on context.",
                exampleAr: "عندهم ابن واحد وبنتين",
                exampleEn: "They have one son and two daughters.",
            },
            {
                id: "bint",
                ar: "بِنْت",
                en: "girl / daughter",
                enArabeezy: "bint",
                hint: "بِنْت = girl; can also mean ‘daughter’.",
                exampleAr: "عِنْدُه بِنْت صْغيرَة كْتير.",
                exampleEn: "He has a very young daughter.",
            },
            {
                id: "walad_bint",
                ar: "وَلَد / بِنْت",
                en: "boy / girl (and son / daughter)",
                enArabeezy: "walad_bint",
                hint:
                    "وَلَد = boy or son (by context). بِنْت = girl or daughter. بِنْتِي = my daughter.",
                exampleAr: "عندهم ولد صغير وبنت أكبر منه شوي",
                exampleEn: "They have a little boy and a slightly older girl.",
            },
            {
                id: "tifl_atfal",
                ar: "طِفِل / أَطْفَال",
                en: "child / children",
                enArabeezy: "tifl/atfal",
                hint:
                    "طِفِل = child (singular). أَطْفَال = children. More neutral than وَلَد / بِنْت.",
                exampleAr: "الْأَطْفَال بِيِلْعَبُوا بَرَّا الْبَيْت.",
                exampleEn: "The children are playing outside the house.",
            },

            // ===== GRANDPARENTS =====

            {
                id: "sidi",
                ar: "سِيدِي",
                en: "my grandfather",
                enArabeezy: "sidi",
                hint: "Another common word for ‘my grandfather’ in Palestinian Arabic.",
                exampleAr: "سِيدِي لِسَّا عَايِش فِي الْقَرْيَة.",
                exampleEn: "My grandfather still lives in the village.",
            },
            {
                id: "sitti",
                ar: "سِتّي",
                en: "my grandmother",
                enArabeezy: "sitti",
                hint: "Colloquial and affectionate word for ‘my grandmother’.",
                exampleAr: "سِتّي تِسْكُن قَريب مِنّا.",
                exampleEn: "My grandmother lives near us.",
            },

            // ===== UNCLES, AUNTS & COUSINS =====
            {
                id: "3ammo",
                ar: "عَمّ",
                en: "paternal uncle (father’s brother)",
                enArabeezy: "3ammo",
                hint: "عَمّ = father’s brother. عَمّي = my uncle (father’s side).",
                exampleAr: "عَمّي عَندُه أَرْبَع وْلاد.",
                exampleEn: "My paternal uncle has four children.",
            },
            {
                id: "3ammeh",
                ar: "عَمِّة",
                en: "paternal aunt (father’s sister)",
                enArabeezy: "3ammeh",
                hint: "عَمِّة = father’s sister. عَمْتِي = my aunt (father’s side).",
                exampleAr: "عَمْتِي زَارَتْنَا فِي غَزَّة أُسْبُوع.",
                exampleEn: "My aunt visited us in Gaza for a week.",
            },
            {
                id: "khal",
                ar: "خَال",
                en: "maternal uncle (mother’s brother)",
                enArabeezy: "khal",
                hint: "خَال = mother’s brother. خَالِي = my maternal uncle.",
                exampleAr: "خَالِي ساكِن بِرامَ الله.",
                exampleEn: "My maternal uncle lives in Ramallah.",
            },
            {
                id: "khalah",
                ar: "خَالَة",
                en: "maternal aunt (mother’s sister)",
                enArabeezy: "khalah",
                hint: "خَالَة = mother’s sister. خَالْتِي = my maternal aunt.",
                exampleAr: "خَالْتِي مِثْل إِمِّي تَقْرِيبًا.",
                exampleEn: "My aunt is almost like my mother.",
            },
            {
                id: "walad_3ammi",
                ar: "وَلاد عَمّي",
                en: "my cousins (paternal, males/mixed)",
                enArabeezy: "walad_3ammi",
                hint: "Male/mixed cousins on father’s side.",
                exampleAr: "وَلاد عَمّي كْمان بِدْرِسوا هُون.",
                exampleEn: "My cousins on my dad’s side also study here.",
            },
            {
                id: "walad_khali",
                ar: "وَلاد خالي",
                en: "my cousins (maternal, males/mixed)",
                enArabeezy: "walad_khali",
                hint: "Male/mixed cousins on mother’s side.",
                exampleAr: "ولاد خالتي ساكنين برا البلد",
                exampleEn: "My maternal cousins live outside the town.",
            },

            // ===== RELATIVES & PEOPLE =====
            {
                id: "qarayeb",
                ar: "قَرَايِب",
                en: "relatives",
                enArabeezy: "qarayeb",
                hint:
                    "قَرَايِب = relatives (plural). Often used with إِلْنَا / إِلِّي: ‘we have relatives’.",
                exampleAr: "عندنا قرايب بغزّة وقرايب برا البلد",
                exampleEn: "We have relatives in Gaza and relatives abroad.",
            },
            {
                id: "3areeb",
                ar: "قَريب / قَريبة",
                en: "relative (m/f)",
                enArabeezy: "qarib/qaribeh",
                hint: "Generic word for one relative (male/female).",
                exampleAr: "عندنا قرايب كتير برا البلد",
                exampleEn: "We have many relatives abroad.",
            },
            {
                id: "nas",
                ar: "نَاس",
                en: "people",
                enArabeezy: "nas",
                hint: "General word for ‘people’.",
                exampleAr: "النَّاس هَان طَيِّبِين وَبِيِحِبُّوا الضُّيُوف.",
                exampleEn: "People here are kind and love guests.",
            },
            {
                id: "jar_jiran",
                ar: "جَار / جِيرَان",
                en: "neighbor / neighbors",
                enArabeezy: "jar/jiran",
                hint:
                    "جَار = neighbor (singular). جِيرَان = neighbors (plural). Often used socially: neighbors like family.",
                exampleAr: "جِيرَانَّا مِثْل الْعِيلَة، كُلّ يَوْم مَع بَعْض.",
                exampleEn: "Our neighbors are like family; we’re together every day.",
            },

            // ===== AGE & COMPARISONS =====
            {
                id: "akbar",
                ar: "أَكبَر",
                en: "older / biggest",
                enArabeezy: "akbar",
                hint: "Comparative: older / bigger. Often used with مِن.",
                exampleAr: "هُوَّ أَكبَر وَلَد بِالعيلِة.",
                exampleEn: "He is the oldest boy in the family.",
            },
            {
                id: "asghar",
                ar: "أَصغَر",
                en: "younger / smallest",
                enArabeezy: "asghar",
                hint: "Comparative: younger / smaller.",
                exampleAr: "أَنا أَصغَر واحِد بَيْن إِخْواني.",
                exampleEn: "I’m the youngest among my siblings.",
            },
            {
                id: "akbar_asghar",
                ar: "أَكْبَر / أَصْغَر",
                en: "older / younger",
                enArabeezy: "akbar/asghar",
                hint:
                    "Use with مِنِّي (than me) or مِنُّه / مِنَّهَا (than him/her). أَكْبَر مِنِّي = older than me. أَصْغَر مِنِّي = younger than me.",
                exampleAr: "أُخْتِي أَكْبَر مِنِّي، وَأَخُوي أَصْغَر مِنِّي.",
                exampleEn: "My sister is older than me, and my brother is younger than me.",
            },

            {
                id: "2addi",
                ar: "قَدّي",
                en: "same age as me",
                enArabeezy: "2addi",
                hint: "Used for same age comparison.",
                exampleAr: "أُختي تَقْريبًا قَدّي.",
                exampleEn: "My sister is almost the same age as me.",
            },

            // ===== MARITAL STATUS =====
            {
                id: "mutazawwij",
                ar: "مِتجَوِّز / مِتجَوِّزة",
                en: "married (m/f)",
                enArabeezy: "mitjawwez/mitjawwzeh",
                hint: "Marital status: married man/woman.",
                exampleAr: "أُختي مِتجَوِّزة جْديد.",
                exampleEn: "My sister recently got married.",
            },
            {
                id: "3azzab",
                ar: "عَزابي / عَزابيّة",
                en: "single (unmarried, m/f)",
                enArabeezy: "3azabi/3azabiyeh",
                hint: "Not married.",
                exampleAr: "أنا لِسّه عَزابي.",
                exampleEn: "I’m still single.",
            },
            {
                id: "makhtub",
                ar: "خاطِب / مَخطوبة",
                en: "engaged (m/f)",
                enArabeezy: "khatib/makhtubeh",
                hint: "Engaged to be married.",
                exampleAr: "أُخوي خاطِب بِنْت مِن غَزّة.",
                exampleEn: "My brother is engaged to a girl from Gaza.",
            },
            {
                id: "maktub_ktabo",
                ar: "مَكْتُوب كِتَابُه",
                en: "engaged (Islamic contract)",
                enArabeezy: "maktub_ktabo",
                hint: "Expression for religious engagement/marriage contract. Fem: مَكْتُوب كِتَابْهَا.",
                exampleAr: "بِنْت خَالْتِي مَكْتُوب كِتَابْهَا مِنْ سَنَة.",
                exampleEn: "My aunt’s daughter has been engaged for a year.",
            },

            // ===== HAVE & LIVE WITH =====
            {
                id: "3indi",
                ar: "عِنْدي ...",
                en: "I have ...",
                enArabeezy: "3indi",
                hint: "Used to say you have family members or things.",
                exampleAr: "عِنْدي أُخ وَأُختَيْن.",
                exampleEn: "I have one brother and two sisters.",
            },
            {
                id: "ma_3indi",
                ar: "مَا عِنْدي",
                en: "I don’t have",
                enArabeezy: "ma_3indi",
                hint: "Negation of عِنْدي.",
                exampleAr: "مَا عِنْدي أَطْفَال، بَسّ عِنْدي قِطَّة.",
                exampleEn: "I don’t have children, but I have a cat.",
            },
            {
                id: "saken_ma3",
                ar: "ساكِن / ساكْنة مَع ...",
                en: "living with (m/f) ...",
                enArabeezy: "saken/sakneh_ma3",
                hint: "Talking about who you live with.",
                exampleAr: "أنا ساكْنة مَع أَهلي.",
                exampleEn: "I live with my family.",
            },
        ],

        extra: [
            // ===== MORE STATUS & RELATIONS =====
            {
                id: "mutallaq",
                ar: "مَطَلَّق / مَطَلَّقَة",
                en: "divorced (m/f)",
                enArabeezy: "mutallaq/mutallaqa",
                hint: "Marital status: divorced.",
                exampleAr: "خالتي مَطَلَّقَة مِن سَنِين.",
                exampleEn: "My aunt has been divorced for years.",
            },
            {
                id: "armal",
                ar: "أَرْمَل / أَرْمَلَة",
                en: "widower / widow",
                enArabeezy: "armal/armaleh",
                hint: "Marital status.",
                exampleAr: "جارتنا أَرْمَلَة.",
                exampleEn: "Our neighbor is a widow.",
            },
            {
                id: "7amay",
                ar: "حَماي / حَماتي",
                en: "father-in-law / mother-in-law",
                enArabeezy: "7amay/7amayeh",
                hint: "Parents of a spouse.",
                exampleAr: "حَماي وَحَماتي بيسْكُنوا بِنَفْس البِنَايِة.",
                exampleEn: "My in-laws live in the same building.",
            },

        ],
    },


    // ====================================
    // DIALOGUE (long, with real names)
    // ====================================
    dialogue: {
        lines: [
            {
                "speaker": "Samer",
                "ar": "مَسّا الخير يا ليلى، كِيفِك اليوم؟",
                "en": "Good evening, Layla, how are you today?"
            },
            {
                "speaker": "Layla",
                "ar": "مَسّا النّور يا سامِر، الحَمْدِلله. وإِنْتَ كِيفَك؟",
                "en": "Good evening, Samer, alhamdulillah. And how are you?"
            },
            {
                "speaker": "Samer",
                "ar": "وين اهلك ساكنين وعلتكم كبيرة ولا صغيرة؟",
                "en": "Where does your family live, and is your family big or small?"
            },
            {
                "speaker": "Layla",
                "ar": "أَهلي ساكْنين هون بِغَزّة، وعيلِتْنا صغيرة.",
                "en": "My family lives here in Gaza, and our family is small."
            },
            {
                "speaker": "Samer",
                "ar": "كم اخ واخت عندك؟",
                "en": "How many brothers and sisters do you have?"
            },
            {
                "speaker": "Layla",
                "ar": " عِنْدي أُخ أَكبَر مِنّي وَأُخت أَصغَر.",
                "en": " I have an older brother and a younger sister."
            },
            {
                "speaker": "Samer",
                "ar": "أَخوك أَكبَر منك بِقَدّيش؟",
                "en": "How much older is your brother?"
            },
            {
                "speaker": "Layla",
                "ar": "هو أكبر مني بحوالي أربع سنين",
                "en": "He’s about four years older than me."
            },
            {
                "speaker": "Samer",
                "ar": "وأختك قدّك ولا أصغر منك كمان؟",
                "en": "And is your sister your age or younger too?"
            },///
            {
                "speaker": "Layla",
                "ar": "هيَّ أَصغَر، لِسّه بِالتّانَوِيّة.",
                "en": "She’s younger, she’s still in high school."
            },
            {
                "speaker": "Samer",
                "ar": "بتسكنوا كِلْكُم مَع بَعْض؟",
                "en": "Do you all live together?"
            },
            {
                "speaker": "Layla",
                "ar": "أَه، أنا ساكْنة مَع أَهلي: إِمّي، أَبوي، أُخوي، وَأُختي.",
                "en": "Yes, I live with my family: my mother, father, brother and sister."
            },
            {
                "speaker": "Samer",
                "ar": "وسيدك وَسِتِّك ساكْنين قَريب مَنْكُم؟",
                "en": "And do your grandfather and grandmother live near you?"
            },
            {
                "speaker": "Layla",
                "ar": "إي، سيدي وَسِتّي ساكْنين فِي الحارَة اللي جنبنا.",
                "en": "Yes, my grandfather and grandmother live in the neighborhood next to us."
            },
            {
                "speaker": "Samer",
                "ar": "حَلُو كْثير. أَنا عيلْتِي أَصْغَر، عِنْدي بَسّ أُخ واحِد.",
                "en": "That’s really nice. My family is smaller, I only have one brother."
            },
            {
                "speaker": "Layla",
                "ar": "هُوَّ أَكبَر مِنَّك وَلّا أَصغَر؟",
                "en": "Is he older than you or younger?"
            },
            {
                "speaker": "Samer",
                "ar": "هُوَّ تَقريبًا قَدّي، بِنْدَرُس بنفس السَّنَة بِالجَامْعَة.",
                "en": "He’s almost my age, we study the same year at the university."
            },

            {
                "speaker": "Layla",
                "ar": "أخوالك وعمامك ساكنين هون ولا برا البلد؟",
                "en": "Do your maternal and paternal uncles live here or abroad?"
            },
            {
                "speaker": "Samer",
                "ar": "عِنْدي خال ساكِن هون، وَعَمّي ساكِن بَرّا البَلَد.",
                "en": "I have an uncle on my mom’s side who lives here, and an uncle on my dad’s side who lives abroad."
            },
            {
                "speaker": "Layla",
                "ar": "مين أقرب شخص إلك بالعيلة؟",
                "en": "Who are you closest to in your family?"
            },
            {
                "speaker": "Samer",
                "ar": "بصراحة، أقرب شخص إليّ هو أخوي، بنحكي مع بعض كتير.",
                "en": "Honestly, I’m closest to my brother, we talk a lot with each other."
            },
            {
                "speaker": "Layla",
                "ar": "حلو! إن شاء الله دايمًا تكونوا متفاهمين.",
                "en": "Nice! Inshallah you always stay in good understanding."
            }
        ]
    },


    // ====================================
    // GRAMMAR
    // ====================================
    grammar: [
        {
            id: "3indi_have",
            title: "Using «عِنْدِي…» to say ‘I have…’",
            description:
                "In Palestinian Arabic, «عِنْدِي» (ʕindi) is the basic way to say ‘I have’:\n\n" +
                "• عِنْدِي أَخ وَأُخْت = I have a brother and a sister.\n" +
                "• عِنْدِي عِيلَة كْبِيرَة = I have a big family.\n\n" +
                "Other persons:\n" +
                "• عِنْدَك (ʕindak) = you have (masc)\n" +
                "• عِنْدِك (ʕindik) = you have (fem)\n" +
                "• عِنْدُه (ʕindo) = he has\n" +
                "• عِنْدْهَا (ʕindha) = she has\n" +
                "• عِنْدْهُم (ʕindhom) = they have\n\n" +
                "Negation uses «مَا» before it:\n" +
                "• مَا عِنْدِي أَخَوَات = I don’t have sisters.\n" +
                "• مَا عِنْدُه أَطْفَال = He doesn’t have children.\n\n" +
                "You can combine with numbers and adjectives:\n" +
                "• عِنْدِي أَخ وَاحِد بَسّ = I have only one brother.\n" +
                "• عِنْدْهَا طِفْلَيْن صْغَار = She has two small children.",
        },
        {
            id: "possessive_family",
            title: "‘My father, my mother, my brother…’ endings",
            description:
                "Family words often take special endings for ‘my’:\n\n" +
                "• أَبُوي = my father (from أَب + و + ي)\n" +
                "• إِمِّي = my mother (from أُمّ + ي)\n" +
                "• أَخُوي = my brother (from أَخ + و + ي)\n" +
                "• أُخْتِي = my sister (from أُخْت + ي)\n" +
                "• سِتِّي = my grandma\n" +
                "• سِيدِي = my grandpa\n\n" +
                "Examples:\n" +
                "• أَبُوي مُتْزَوِّج = My father is married.\n" +
                "• إِمِّي فِي الْبَيْت = My mother is at home.\n" +
                "• أَخُوي أَصْغَر مِنِّي = My brother is younger than me.\n" +
                "• أُخْتِي كْبِيرَة = My sister is older.\n\n" +
                "Notice: English uses a separate word ‘my’, but Palestinian Arabic usually uses an ending attached to the noun.",
        },
        {
            id: "comparatives_family",
            title: "Older / younger: «أَكْبَر مِنِّي» و«أَصْغَر مِنِّي»",
            description:
                "To compare ages between you and a family member, Palestinian Arabic uses forms like:\n\n" +
                "• أَكْبَر مِنِّي = older than me\n" +
                "• أَصْغَر مِنِّي = younger than me\n\n" +
                "Examples:\n" +
                "• أَخُوي أَكْبَر مِنِّي بِسَنَتَيْن = My brother is two years older than me.\n" +
                "• أُخْتِي أَصْغَر مِنِّي شْوَيّ = My sister is a bit younger than me.\n\n" +
                "With other people:\n" +
                "• هُوَّ أَكْبَر مِنَّهَا = He is older than her.\n" +
                "• هِيَّ أَصْغَر مِنُّه = She is younger than him.\n\n" +
                "You can mix this with عِنْدِي:\n" +
                "• عِنْدِي أَخَيْن، وَاحِد أَكْبَر مِنِّي وَوَاحِد أَصْغَر مِنِّي.",
        },
        {
            id: "marital_status_family",
            title: "Talking about marital status: married, single, engaged",
            description:
                "Some high-frequency words for marital status:\n\n" +
                "• مُتْزَوِّج / مُتْزَوِّجَة = married (masc / fem)\n" +
                "• عَزَّاب = single (unmarried man)\n" +
                "• مَكْتُوب كِتَابُه / مَكْتُوب كِتَابْهَا = engaged (Islamic contract done)\n\n" +
                "Examples:\n" +
                "• أَخُوي الْكْبِير مُتْزَوِّج وَعِنْدُه أَطْفَال = My older brother is married and has children.\n" +
                "• أُخْتِي لِسَّا مُش مُتْزَوِّجَة = My sister is not married yet.\n" +
                "• هُوَّ عَزَّاب، مَا بَدُّه يِتْزَوَّج هَلَّقْ = He is single, he doesn’t want to get married now.\n" +
                "• بِنْت خَالْتِي مَكْتُوب كِتَابْهَا = My aunt’s daughter is engaged.\n\n" +
                "You’ll hear these a lot in real family conversations.",
        },
    ],

    // ====================================
    // PRACTICE
    // ====================================
    practice: {
        quiz: [
            {
                id: "fam_q1",
                questionAr: "«عِنْدِي تَلَات إِخْوَة» مَعْنَاهَا:",
                optionsEn: [
                    "I have three sisters.",
                    "I have three brothers.",
                    "I have three children.",
                ],
                correctIndex: 1,
            },
            {
                id: "fam_q2",
                questionAr: "«أَخُوي أَكْبَر مِنِّي» مَعْنَاهَا:",
                optionsEn: [
                    "My brother is older than me.",
                    "My brother is younger than me.",
                    "My brother is the same age as me.",
                ],
                correctIndex: 0,
            },
            {
                id: "fam_q3",
                questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘relatives’؟",
                optionsEn: [
                    "neighbors",
                    "people",
                    "relatives",
                ],
                correctIndex: 2,
            },
            {
                id: "fam_q4",
                questionAr: "«هُوَّ عَزَّاب» مَعْنَاهَا:",
                optionsEn: [
                    "He is married.",
                    "He is single (not married).",
                    "He is engaged.",
                ],
                correctIndex: 1,
            },
            {
                id: "fam_q5",
                questionAr: "«مَا عِنْدِي أَطْفَال» مَعْنَاهَا:",
                optionsEn: [
                    "I don’t have children.",
                    "I don’t have siblings.",
                    "I have small children.",
                ],
                correctIndex: 0,
            },
        ],

        rolePlays: [
            "Role-play 3: One student describes a big family gathering at grandma’s house (سِتِّي). Other students listen and then ask follow-up questions: «مَع مِين سَاكِن؟»، «مِنْ وِين قَرَايِبْكُمْ؟»، «النَّاس كْبِيرِين وَلَّا صْغَار؟».",
        ],
    },

    // ====================================
    // HOMEWORK
    // ====================================
    homework: {
        instructions:
            "Write and record a 60–90 second story about your family in Palestinian Arabic. Mention: who lives in your house, how many brothers and sisters you have, who is older/younger than you, and if any of them are married, single, or engaged. Try to use at least 8 words from the vocabulary list and the structure «عِنْدِي…».",
    },

    // ====================================
    // TEACHER NOTES
    // ====================================
    teacherNotes: {
        warmup: [
            "In English, explain that family is one of the easiest and richest topics to practice in any language.",
            "Draw a simple family tree on the screen or a paper and write Arabic words next to each person (أَبُوي، إِمِّي، أَخُوي، أُخْتِي…).",
            "Ask the student to tell you the equivalent words in their own language to make it personal.",
        ],
        vocabularySteps: [
            "Teach close family first (parents, siblings, grandparents), then extended family (uncles, aunts, relatives).",
            "Use lots of personalization: ask about the student’s real family as soon as they understand the word.",
            "Highlight the ‘my’ forms (أَبُوي، إِمِّي، أَخُوي…) and recycle them in almost every example.",
        ],
        dialogueSteps: [
            "Read the full dialogue as a story. Then ask the student: ‘Which family do you feel closest to, Roba’s, Mark’s, Yara’s, or Omar’s?’",
            "Pick one character (for example, Yara) and ask the student to retell her family story in their own words.",
            "Change the details: same structure but different numbers, countries, and marital status, so the student produces new language using the same pattern.",
        ],
        practiceTips: [
            "When a student answers with short English sentences, gently push them to try small Arabic pieces like «عِنْدِي أَخَيْن» even if the rest is in English.",
            "Use the quiz questions to open mini-conversations, not only A/B/C answers.",
            "If the student has a complicated family situation, let them invent a ‘fantasy family’ just for practice to keep it safe and comfortable.",
        ],
        wrapup: [
            "Ask the student to say 3–5 full sentences about their family only in Arabic, even if simple.",
            "Summarize their family in Arabic back to them, slightly upgraded, so they hear a natural model.",
            "Remind them of the homework and suggest they imagine telling their story to a Palestinian friend, not to the teacher.",
        ],
        myNotes: "",
    },
};
