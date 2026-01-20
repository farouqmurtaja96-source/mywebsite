import { LESSON_ID_COMPLAINTS } from '../../core/constants.js';

export const lessonId = LESSON_ID_COMPLAINTS;
export const lesson = {
    meta: {
        level: "Intermediate",
        unit: "Complaints",
        lessonTitle: "Unit 2 – Making Complaints Politely",
    },
    overview: {
        title: "Unit 2 – Complaints",
        description:
            "In this lesson, students learn how to complain politely but clearly about problems (services, noise, delays), ask for a solution, and react to responses in Palestinian Arabic.",
        goals: [
            "Describe a problem clearly using common complaint language.",
            "Express frustration and annoyance without sounding rude or aggressive.",
            "Make polite requests for action and suggest possible solutions.",
            "React to apologies and promises: accept, refuse, or insist.",
            "Handle a short role-play with a receptionist, office worker, or service employee.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "co_core_1",
                ar: "شَكْوَى",
                en: "complaint",
                enArabeezy: "shakwa",
                hint: "Formal or semi-formal complaint",
                exampleAr: "بِفَكِّر أَقَدِّم شَكْوَى رَسْمِيّة.",
                exampleEn: "I’m thinking of filing an official complaint.",
            },
            {
                id: "co_core_2",
                ar: "يِشْتِكي",
                en: "to complain",
                enArabeezy: "yeshtiki",
                hint: "Verb: he complains",
                exampleAr: "ما بِحِبّ أِشْتِكي، بَس في مَشْكِلة جَدِّيّة.",
                exampleEn: "I don’t like to complain, but there is a serious problem.",
            },
            {
                id: "co_core_3",
                ar: "مَشْكِلة",
                en: "problem",
                enArabeezy: "mashkleh",
                hint: "General word",
                exampleAr: "في مَشْكِلة بِالمَوَاصَلات.",
                exampleEn: "There is a problem with the transportation.",
            },
            {
                id: "co_core_4",
                ar: "مُزْعِج",
                en: "annoying / disturbing",
                enArabeezy: "moz3ej",
                hint: "Describes noise, behavior, etc.",
                exampleAr: "الصَّوْت مُزْعِج كْثير.",
                exampleEn: "The noise is very annoying.",
            },
            {
                id: "co_core_5",
                ar: "مِش مَعْقول",
                en: "unacceptable / unbelievable",
                enArabeezy: "mish ma3ʾool",
                hint: "Strong reaction to situation",
                exampleAr: "مِش مَعْقول كُل يوم نِسْتَنّى ساعة.",
                exampleEn: "It’s not acceptable to wait an hour every day.",
            },
            {
                id: "co_core_6",
                ar: "عنْجَد",
                en: "really / seriously",
                enArabeezy: "3an jad",
                hint: "Emphasis marker",
                exampleAr: "عنْجَد الوَضْع صار مُزْعِج.",
                exampleEn: "Seriously, the situation has become annoying.",
            },
            {
                id: "co_core_7",
                ar: "يِنْرْفِز",
                en: "to make (someone) nervous / annoyed",
                enArabeezy: "yenrfiz",
                hint: "Colloquial verb",
                exampleAr: "التَّأْخير بْيِنْرْفِزني.",
                exampleEn: "The delay makes me nervous.",
            },
            {
                id: "co_core_8",
                ar: "يِتْأَخَّر",
                en: "to be late / delayed",
                enArabeezy: "yitʾaʾkhar",
                exampleAr: "الباص دايْمًا بْيِتْأَخَّر.",
                exampleEn: "The bus is always late.",
            },
            {
                id: "co_core_9",
                ar: "بِضِلّ",
                en: "keeps / continues",
                enArabeezy: "bidall",
                hint: "Used with a problem continuing",
                exampleAr: "المَشْكِلة بِتضِلّ تِتْكَرَّر.",
                exampleEn: "The problem keeps repeating.",
            },
            {
                id: "co_core_10",
                ar: "مِن حَقّي",
                en: "it’s my right",
                enArabeezy: "min 7aqqi",
                hint: "Used in complaints",
                exampleAr: "مِن حَقّي أوْصَل عَالوَقْت.",
                exampleEn: "It’s my right to arrive on time.",
            },
            {
                id: "co_core_11",
                ar: "خِدْمَة",
                en: "service",
                enArabeezy: "khidmeh",
                exampleAr: "الخدمة هون مش بالمستوى المطلوب.",
                exampleEn: "The service here is not at the right level.",
            },
            {
                id: "co_core_12",
                ar: "مُسْتَوى",
                en: "level / standard",
                enArabeezy: "mostawa",
                exampleAr: "مُسْتَوى النَّظافَة قليل.",
                exampleEn: "The level of cleanliness is low.",
            },
            {
                id: "co_core_13",
                ar: "مَسؤول",
                en: "person in charge",
                enArabeezy: "masʾool",
                hint: "Manager / responsible person",
                exampleAr: "بَحِبّ أحْكي مَع المَسؤول لو سَمَحْت.",
                exampleEn: "I’d like to speak to the person in charge, please.",
            },
            {
                id: "co_core_14",
                ar: "مُوَظَّف الاسْتِقْبال",
                en: "receptionist",
                enArabeezy: "mwaZZaf il-isteʾbāl",
                exampleAr: "حَكِيت مَع مُوَظَّف الاسْتِقْبال عَن المَشْكِلة.",
                exampleEn: "I spoke with the receptionist about the problem.",
            },
            {
                id: "co_core_15",
                ar: "يِعالِج المَشْكِلة",
                en: "to handle / fix the problem",
                enArabeezy: "ye3ālej il-mashkleh",
                exampleAr: "لازِم حدا يِعالِج المَشْكِلة بسرعة.",
                exampleEn: "Someone must handle the problem quickly.",
            },
            {
                id: "co_core_16",
                ar: "يِحِلّ المَشْكِلة",
                en: "to solve the problem",
                enArabeezy: "ye7ell il-mashkleh",
                exampleAr: "إن شاء الله تِحِلّوا المَشْكِلة قَرِيب.",
                exampleEn: "Hopefully you will solve the problem soon.",
            },
            {
                id: "co_core_17",
                ar: "يِوَعِد",
                en: "to promise",
                enArabeezy: "yewa3ed",
                exampleAr: "وَعَدُونا يِحِلّوا المَشْكِلة.",
                exampleEn: "They promised us they would solve the problem.",
            },
            {
                id: "co_core_18",
                ar: "يِرُدّ",
                en: "to reply / respond",
                enArabeezy: "yerodd",
                exampleAr: "المَكْتَب ما رَدّ عَالشَّكْوَى.",
                exampleEn: "The office didn’t respond to the complaint.",
            },
            {
                id: "co_core_19",
                ar: "يِعْتِذِر",
                en: "to apologize",
                enArabeezy: "ye3tezr",
                exampleAr: "المُوَظَّف اِعْتَذَر عَالتَّأْخير.",
                exampleEn: "The employee apologized for the delay.",
            },
            {
                id: "co_core_20",
                ar: "عُذْر",
                en: "excuse",
                enArabeezy: "3ozr",
                exampleAr: "العُذْر مَش مَقْنِع.",
                exampleEn: "The excuse is not convincing.",
            },
            {
                id: "co_core_21",
                ar: "مَقْنِع",
                en: "convincing",
                enArabeezy: "maqne3",
                exampleAr: "التَّبْرير ما كان مَقْنِع.",
                exampleEn: "The explanation wasn’t convincing.",
            },
            {
                id: "co_core_22",
                ar: "يِتْجاهَل",
                en: "to ignore",
                enArabeezy: "yitjāhal",
                exampleAr: "حاسَّة إنّهم عَم يِتْجاهَلوا المَشْكِلة.",
                exampleEn: "I feel they are ignoring the problem.",
            },
            {
                id: "co_core_23",
                ar: "مِسْتَمِرّ",
                en: "continuous / ongoing",
                enArabeezy: "mestamer",
                exampleAr: "الصَّوْت المُزْعِج مِسْتَمِرّ لَحد هَلَّق.",
                exampleEn: "The annoying noise is still ongoing.",
            },
            {
                id: "co_core_24",
                ar: "تِكْرار",
                en: "repetition",
                enArabeezy: "tekraar",
                exampleAr: "تِكْرار المَشْكِلة خَلّاني أِشْتِكي.",
                exampleEn: "The repetition of the problem made me complain.",
            },
            {
                id: "co_core_25",
                ar: "مَرَّة واحْدَة / أوَّل مَرّة",
                en: "one time / first time",
                enArabeezy: "marra wa7deh / awwal marra",
                exampleAr: "لو كانت مرّة وحدة ماشي الحال، بس هاي بتتكرّر.",
                exampleEn: "If it were one time it’s fine, but this is repeated.",
            },
            {
                id: "co_core_26",
                ar: "مَع إحْتِرامي",
                en: "with all respect",
                enArabeezy: "ma3 e7terāmi",
                hint: "Softener before criticism",
                exampleAr: "مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة.",
                exampleEn: "With all respect, the service here is weak.",
            },
            {
                id: "co_core_27",
                ar: "ما قَصْدي أِزَعِّل حَدا",
                en: "I don’t mean to upset anyone",
                enArabeezy: "ma ʾasdi aza33el 7ada",
                exampleAr: "ما قَصْدي أِزَعِّل حَدا بَس الوَضْع مِش مَقْبول.",
                exampleEn: "I don’t mean to upset anyone, but the situation is not acceptable.",
            },
            {
                id: "co_core_28",
                ar: "مُمْكِن تِعْمِلوا شِي؟",
                en: "can you do something?",
                enArabeezy: "mumkin t3mlo shi?",
                hint: "Request for action",
                exampleAr: "المَشْكِلة مِسْتَمِرّة، مُمْكِن تِعْمِلوا شِي؟",
                exampleEn: "The problem is ongoing, can you do something?",
            },
            {
                id: "co_core_29",
                ar: "بِتْمَنّى تِلْقوا حَلّ",
                en: "I hope you find a solution",
                enArabeezy: "bitmanna telʾo 7all",
                exampleAr: "بِتْمَنّى تِلْقوا حَلّ قَبْل الاسْبوع الجّاي.",
                exampleEn: "I hope you find a solution before next week.",
            },
            {
                id: "co_core_30",
                ar: "ما إلِي خِلِق",
                en: "I have no energy / I’m fed up",
                enArabeezy: "ma eli khileʾ",
                hint: "Colloquial, expresses frustration",
                exampleAr: "بصراحة ما عندي طاقة أتعامل مع هالموضوع أكتر.",
                exampleEn: "Honestly I have no energy to deal with this any more.",
            },
            {
                id: "co_core_31",
                ar: "يِصْبِر",
                en: "to be patient",
                enArabeezy: "yesbor",
                exampleAr: "تحمّلنا شهر كامل، بس المشكلة لسه موجودة.",
                exampleEn: "We were patient for a whole month but the problem is still there.",
            },
            {
                id: "co_core_32",
                ar: "يِشَكِّر",
                en: "to thank",
                enArabeezy: "yeshakkir",
                exampleAr: "بِدّي أِشَكِّرَك عَالتَّجاوُب.",
                exampleEn: "I want to thank you for responding.",
            },
            {
                id: "co_core_33",
                ar: "يِتْفاهَم",
                en: "to understand each other",
                enArabeezy: "yitfāham",
                exampleAr: "مهم نتّفق على حلّ وسط.",
                exampleEn: "It’s important that we agree on a middle solution.",
            },
            {
                id: "co_core_34",
                ar: "حَلّ وَسَط",
                en: "compromise / middle solution",
                enArabeezy: "7all wasaT",
                exampleAr: "مُمْكِن نِلاقِي حَلّ وَسَط يِرْضي الجِهْتَيْن.",
                exampleEn: "We can find a compromise that satisfies both sides.",
            },
            {
                id: "co_core_35",
                ar: "مُعامَلَة",
                en: "treatment (how they treat you)",
                enArabeezy: "mo3āmaleh",
                exampleAr: "مُعامَلَة المُوَظَّفين إِلَنا كانِت مُحْتَرَمَة.",
                exampleEn: "The way the employees treated us was respectful.",
            },
        ],

        extra: [
            {
                id: "co_extra_1",
                ar: "قِسْم شَكَاوِي",
                en: "complaints department",
                enArabeezy: "ʾesm shakaawi",
                exampleAr: "في قِسْم شَكَاوِي بِالإِدارَة.",
                exampleEn: "There is a complaints department in the administration.",
            },
            {
                id: "co_extra_2",
                ar: "رَدّ رَسْمِي",
                en: "official reply",
                enArabeezy: "radd rasmi",
                exampleAr: "اسْتَنّينا رَدّ رَسْمِي ومَا إجا.",
                exampleEn: "We waited for an official reply and it didn’t come.",
            },
            {
                id: "co_extra_3",
                ar: "حِجّة",
                en: "pretext / lame excuse",
                enArabeezy: "7ejjeh",
                exampleAr: "حاسِّة إنّه هادا كُلّه حِجّة.",
                exampleEn: "I feel like this is all just an excuse.",
            },
            {
                id: "co_extra_4",
                ar: "مُتابَعَة",
                en: "follow-up",
                enArabeezy: "motābaʿa",
                exampleAr: "بِدّنا مُتابَعَة عَالمَشْكِلة مِش بَس وَعْد.",
                exampleEn: "We want follow-up on the problem, not just a promise.",
            },
            {
                id: "co_extra_5",
                ar: "تَعْويض",
                en: "compensation",
                enArabeezy: "ta3weeD",
                exampleAr: "طَلَبْنا تَعْويض بَسِيط عَالخَسارَة.",
                exampleEn: "We asked for a small compensation for the loss.",
            },
        ],
    }
    ,

    dialogue: {
        lines: [
            {
                "speaker": "Rina",
                "ar": "يا مِنى، عنْجَد ما إلِي خِلِق اليوم.",
                "en": "Mina, I honestly have no energy today."
            },
            {
                "speaker": "Mina",
                "ar": "شو اللي صار يا رينا؟ شكلك متضايقة.",
                "en": "What happened, Rina? You look upset."
            },
            {
                "speaker": "Rina",
                "ar": "الباص اللي بروح عالجامعة تقريبًا كل يوم بتأخّر نص ساعة أو أكتر.",
                "en": "The bus to the university is almost every day half an hour late or more."
            },
            {
                "speaker": "Mina",
                "ar": "إي بَعْرِف، عنْجَد مُزْعِج.",
                "en": "Yeah, I know, it’s really annoying."
            },
            {
                "speaker": "Rina",
                "ar": "مِش مَعْقول نِدْفَع اِشْتِراك وِنْضَلّ نِسْتَنّى عَالفاضي.",
                "en": "It’s not acceptable that we pay a subscription and keep waiting for nothing."
            },
            {
                "speaker": "Mina",
                "ar": "حاوَلْتي تِشْتِكي لَحَدّا؟",
                "en": "Have you tried complaining to someone?"
            },
            {
                "speaker": "Rina",
                "ar": "مَرّة حَكَيْت مَع السّواق، بَس حَكى إنّه الزَّحْمِة مِش بِيِدُه.",
                "en": "Once I talked to the driver, but he said the traffic is not in his hands."
            },
            {
                "speaker": "Mina",
                "ar": "مَع إحْتِرامي إلُه، بَس المَشْكِلة مِسْتَمِرّة.",
                "en": "With all respect to him, but the problem is continuing."
            },
            {
                "speaker": "Rina",
                "ar": "صح. تكرار المشكلة هو اللي فعليًا بنرفزني كتير.",
                "en": "Right. The repetition of the problem is what really gets on my nerves."
            },
            {
                "speaker": "Mina",
                "ar": "مِن حَقِّك توْصَلي عَالوَقْت. ليش ما نِحْكي مَع مُوَظَّف الاسْتِقْبال بِالشَّرِكِة؟",
                "en": "It’s your right to arrive on time. Why don’t we talk to the receptionist at the company?"
            },
            {
                "speaker": "Rina",
                "ar": "بِخاف يِفَكْرونا عَم نِبالِغ.",
                "en": "I’m afraid they’ll think we’re exaggerating."
            },
            {
                "speaker": "Mina",
                "ar": "لا، إذا حكيتي بهدوء وبأدب، ولا حدا رح يزعل.",
                "en": "No, if you speak calmly and politely, no one will get upset."
            },
            {
                "speaker": "Rina",
                "ar": "طيب، بتيجي معي؟",
                "en": "Okay, will you come with me?"
            },
            {
                "speaker": "Mina",
                "ar": "أكيد، يَلّا نِنْزِل عَالمَكْتَب.",
                "en": "Of course, let’s go down to the office."
            },
            {
                "speaker": "Receptionist",
                "ar": "مَسّا الخير، تْفَضَّلوا.",
                "en": "Good afternoon, welcome."
            },
            {
                "speaker": "Rina",
                "ar": "مَسّا النّور. مَع إحْتِرامي، في مَشْكِلة حابّين نِحْكي فيها.",
                "en": "Good afternoon. With all respect, there is a problem we’d like to talk about."
            },
            {
                "speaker": "Receptionist",
                "ar": "تْفَضَّلوا إحْكوا، شُو في؟",
                "en": "Please go ahead, what’s going on?"
            },
            {
                "speaker": "Rina",
                "ar": "باص الجامعة عادةً بتأخّر نص ساعة، وأحيانًا أكتر.",
                "en": "The university bus usually is thirty minutes late, and sometimes more."
            },
            {
                "speaker": "Mina",
                "ar": "والمَشْكِلة مِش مَرَّة واحْدَة، هادا تِكْرار يَومِي تَقريبًا.",
                "en": "And the problem isn’t just once, this is almost daily repetition."
            },
            {
                "speaker": "Rina",
                "ar": "عنْجَد صار الوَضْع مُزْعِج، ومِن حَقّنا نوْصَل عَمحاضْراتنا عَالوَقْت.",
                "en": "It really has become annoying, and it’s our right to arrive to our lectures on time."
            },
            {
                "speaker": "Receptionist",
                "ar": "فاهمين عليكم، وبصراحة الأيام هاي في زحمة سير كتيرة.",
                "en": "We understand you; honestly, the traffic is heavy these days."
            },

            {
                "speaker": "Mina",
                "ar": "ممكن تعملوا إشي بخصوص الموعد؟ ممكن الباصات تطلع أبكر شوي؟",
                "en": "Can you do something about the schedule? Can the buses leave a bit earlier?"
            },
            {
                "speaker": "Receptionist",
                "ar": "إحنا ملتزمين بوقت ثابت، بس رح نوصل كلامكم للمسؤول.",
                "en": "We are tied to a fixed time, but we will pass your words to the person in charge."
            },
            {
                "speaker": "Rina",
                "ar": "صَبَرْنا شَهِر كَامِل، وبِتْمَنّى هالمَرّة يكون في مُتابَعَة حَقِيقِيّة.",
                "en": "We’ve been patient for a whole month, and I hope this time there will be real follow-up."
            },
            {
                "speaker": "Receptionist",
                "ar": "عَن جَدّ إحْنا آسْفِين عَالإِزْعاج، وبنِوَعِدكم نِراجِع الجَدْوَل.",
                "en": "We are really sorry for the inconvenience, and we promise to review the schedule."
            },
            {
                "speaker": "Mina",
                "ar": "شُكْرًا عَالتَّجاوُب، وبِتْمَنّى تِلْقوا حَلّ في أَقْرَب وَقْت.",
                "en": "Thank you for responding, and I hope you find a solution as soon as possible."
            },
            {
                "speaker": "Rina",
                "ar": "ما قَصْدي أِزَعِّل حَدا، بَس بجد الوَضْع مِش مَعْقول.",
                "en": "I don’t mean to upset anyone, but honestly the situation is unacceptable."
            },
            {
                "speaker": "Receptionist",
                "ar": "لا، كلامكم مَفْهُوم، وهَادا حَقِّكُم. وبنِشَكِّرُكُم إنّكم حَكَيْتوا بِأَدَب.",
                "en": "No, your words are understood, and this is your right. We thank you for speaking politely."
            },

            {
                "speaker": "Mina",
                "ar": "يَلّا رِنا، نِرْجَع عَالمَحاضْرَة قَبْل ما نِتْأَخَّر مَرّة تانيِة.",
                "en": "Come on Rina, let’s go back to the lecture before we’re late again."
            },
            {
                "speaker": "Rina",
                "ar": "مَزْبوط، يِلّا نِمْشي.",
                "en": "True, let’s go."
            }
        ]
    }
    ,

    grammar: [
        {
            id: "co_gram_1",
            title: "Using complaint chunks: في مَشْكِلة، عنْجَد مُزْعِج، مِش مَعْقول",
            description:
                "Typical complaint language in Palestinian Arabic uses strong but short chunks like 'في مَشْكِلة' (there is a problem), 'عنْجَد مُزْعِج' (it’s really annoying), and 'مِش مَعْقول' (it’s unacceptable / unbelievable). These set the tone that you are serious but not necessarily rude.",
        },
        {
            id: "co_gram_2",
            title: "Softening complaints: مَع إحْتِرامي، ما قَصْدي أِزَعِّل حَدا",
            description:
                "To sound polite and avoid sounding aggressive, add softeners like 'مَع إحْتِرامي' (with all respect) before criticism, and 'ما قَصْدي أِزَعِّل حَدا' (I don’t mean to upset anyone) after a strong sentence. Example: 'مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة' (With all respect, the service here is weak).",
        },
        {
            id: "co_gram_3",
            title: "Asking for action and suggesting solutions",
            description:
                "After describing the problem, move to action with phrases like 'مُمْكِن تِعْمِلوا شِي؟' (can you do something?), 'لازِم حَدّ يِحِلّ المَشْكِلة' (someone has to solve the problem), and 'بِتْمَنّى تِلْقوا حَلّ' (I hope you find a solution). This structure makes the complaint more constructive and less like just complaining.",
        },
    ],

    practice: {
        quiz: [
            {
                id: "co_q1",
                questionAr: "مِش مَعْقول كُل يوم الباص يِتْأَخَّر.",
                optionsEn: [
                    "It’s unacceptable that the bus is late every day.",
                    "It’s amazing that the bus is late every day.",
                    "It’s possible the bus is early every day.",
                ],
                correctIndex: 0,
            },
            {
                id: "co_q2",
                questionAr: "مَع إحْتِرامي، الخِدْمَة هون ضَعيفَة.",
                optionsEn: [
                    "With all respect, the service here is weak.",
                    "I respect the service, it is strong.",
                    "I don’t respect the weak service here.",
                ],
                correctIndex: 0,
            },
            {
                id: "co_q3",
                questionAr: "بِتْمَنّى تِلْقوا حَلّ قَرِيب.",
                optionsEn: [
                    "I hope you find a solution soon.",
                    "I hope you cancel the service soon.",
                    "I hope you don’t answer soon.",
                ],
                correctIndex: 0,
            },
            {
                id: "co_q4",
                questionAr: "العُذْر مَش مَقْنِع.",
                optionsEn: [
                    "The excuse is not convincing.",
                    "The excuse is very funny.",
                    "The excuse is totally correct.",
                ],
                correctIndex: 0,
            },
            {
                id: "co_q5",
                questionAr: "تِكْرار المَشْكِلة خَلّاني أِشْتِكي.",
                optionsEn: [
                    "The repetition of the problem made me complain.",
                    "One small problem made me happy.",
                    "The solution to the problem made me complain.",
                ],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Student A is a dorm resident; Student B is the dorm receptionist. A complains about constant noise at night that is 'ʿanjad muzʿij' and 'miš maʿʾūl'. B listens, apologizes, and promises to 'yiḥill il-maškile'. They must use at least one softener like 'maʿ iḥtirāmi'.",
            "Student A and B both use the university bus. They prepare together a polite complaint to the transportation office. They describe the problem (repeated delays), the effect (missing classes), and suggest one or two solutions (earlier departure, extra bus).",
            "Student A made a complaint last week; Student B works in the office. They meet again: B gives an update (follow-up, maybe partial solution), A reacts: thanks, or insists on more action, using phrases like 'ṣabarnā šahir kāmil' and 'bitemanna tilʾū ḥall'.",
        ],
    },

    homework: {
        instructions:
            "Write 8–10 sentences in Palestinian Arabic about a real or imaginary complaint (for example: transport, dorm, cafeteria, internet). Describe the problem, why it is annoying, what you already tried, and what you want them to do. Use at least three complaint chunks (مثل: في مَشْكِلة، عنْجَد مُزْعِج، مِش مَعْقول) and two polite softeners (مثل: مَع إحْتِرامي، ما قَصْدي أِزَعِّل حَدا).",
    },

    teacherNotes: {
        warmup: [
            "Ask students to brainstorm small, everyday problems (late bus, noisy neighbor, dirty classroom). Write them on the board in English or Arabic and then add 1–2 key Arabic words next to each.",
            "Discuss the difference between complaining aggressively vs. politely. Ask: in your language, what expressions show polite complaint?",
        ],
        vocabularySteps: [
            "Present strong complaint chunks (fi maškile, ʿanjad muzʿij, miš maʿʾūl) and have students repeat with different intonation (angry vs. calm).",
            "Introduce softeners (maʿ iḥtirāmi, ma ʾaṣdi ʾazaʿʿel ḥada) and practice placing them before/after complaints to hear how the tone changes.",
            "Drill pairs like problem + action: 'fi maškile' → 'mumkin tiʿmilu ši?' so students don’t stop at just describing the problem.",
        ],
        dialogueSteps: [
            "Read the dialogue once and ask comprehension questions: What is the problem? Who is the receptionist? What solution is promised?",
            "Assign roles and have students act it out. Then, in pairs, they replace 'bus' with another context (dorm, cafeteria, internet).",
            "Highlight in the text all expressions of complaint, softening, and action requests. Ask students to categorize them in three columns.",
        ],
        practiceTips: [
            "For the quiz, focus on the nuance of 'miš maʿʾūl' and 'ʿuzr miš muqneʿ' so students understand the attitude behind the words.",
            "During role-plays, encourage students to stay in Arabic even when frustrated. If they can’t find a word, allow quick English, then provide the Arabic equivalent.",
            "Remind students that in many real situations, tone and body language are as important as the words; encourage calm but firm delivery.",
        ],
        wrapup: [
            "Ask a few students to summarize one partner’s complaint using reported speech, starting with 'huwwa/hiya biʾūl/inno...'.",
            "End by asking: 'emta btkūn il-šakwa mafʿūla w emta laʾ?' and collect a few short answers using new vocabulary.",
        ],
        myNotes: "",
    },
};