import { LESSON_ID_WORK_STUDY } from '../../core/constants.js';

export const lessonId = LESSON_ID_WORK_STUDY;
export const lesson = {
    meta: {
        level: "Pre-Intermediate",
        unit: "Work & Study",
        lessonTitle: "Unit 6 – Work & Study in Palestinian Arabic",
    },

    overview: {
        title: "Unit 6 – Work & Study",
        description:
            "In this unit, students learn how to talk about their studies, their job (or future job), university or school life, subjects, exams, projects, and weekly schedule in Palestinian Arabic. The focus is on high-frequency verbs like ‘study, learn, work, teach, understand, finish’ and real-life dialogues between students and teachers.",
        goals: [
            "Talk about what and where they study using natural Palestinian Arabic chunks.",
            "Describe their job or future job, and part-time or online work.",
            "Use key verbs like: أَدْرُس، أَتْعَلَّم، أَشْتِغِل، أُدَرِّس، أَفْهَم، أَنْجَح.",
            "Ask and answer questions about timetable, classes, exams, and projects.",
            "Connect work & study with daily routine, time, and transportation from previous units.",
        ],
    },

    // ====================================
    // VOCABULARY
    // ====================================
    vocabulary: {
        core: [
            // ===== STUDENTS, PEOPLE & PLACES =====
            {
                id: "taleb",
                ar: "طالِب / طالْبِة",
                en: "student (m/f)",
                enArabeezy: "Taleb / Talbe",
                hint: "Person who studies at school or university.",
                exampleAr: "أنا طالْبَة جامْعِيّة.",
                exampleEn: "I am a university student.",
            },
            {
                id: "madraseh",
                ar: "مَدْرَسَة",
                en: "school",
                enArabeezy: "madraseh",
                hint:
                    "Plural: مَدَارِس. ‘My school’ = مَدْرَسْتِي. Used for primary / secondary school.",
                exampleAr:
                    "أَخُوي لِسَّا فِي الْمَدْرَسَة، بْيِدْرُس صَفّ تَّاسِع.",
                exampleEn: "My brother is still in school; he studies in ninth grade.",
            },
            {
                id: "jame3a",
                ar: "جَامْعَة",
                en: "university",
                enArabeezy: "jame3a",
                hint:
                    "Plural: جَامْعَات. ‘My university’ = جَامْعْتِي. You can add the city name.",
                exampleAr: "أَنَا بَدْرُس فِي جَامْعَة غَزَّة.",
                exampleEn: "I study at Gaza University.",
            },
            {
                id: "qism",
                ar: "قِسْم",
                en: "department",
                enArabeezy: "qism",
                hint:
                    "Plural: أَقْسَام. قِسْم الْهَنْدَسَة، قِسْم اللُّغَات، قِسْم الْحَاسُوب.",
                exampleAr: "أَنَا فِي قِسْم الْهَنْدَسَة الْكَهْرَبَائِيَّة.",
                exampleEn: "I am in the electrical engineering department.",
            },
            {
                id: "maktab",
                ar: "مَكْتَب",
                en: "office / desk",
                enArabeezy: "maktab",
                hint: "Office at work or a desk.",
                exampleAr: "بِشْتِغِل في مَكْتَب صْغير بِالشِّرْكَة.",
                exampleEn: "I work in a small office at the company.",
            },
            {
                id: "sherkeh",
                ar: "شِرْكَة",
                en: "company",
                enArabeezy: "sherkeh",
                hint: "Workplace, company.",
                exampleAr: "أَبوي بِشْتِغِل في شِرْكَة خُصوصِيّة.",
                exampleEn: "My father works in a private company.",
            },
            {
                id: "mu3allem",
                ar: "مُعَلِّم / مُعَلِّمَة",
                en: "teacher (m/f)",
                enArabeezy: "mu3allem / mu3allmeh",
                hint:
                    "Spoken synonym of أُسْتَاذ. Used for school / institute teachers.",
                exampleAr: "مُعَلِّمَة الرِّيَاضِيَّات كْتِير شَاطْرَة.",
                exampleEn: "The math teacher is very good.",
            },
            {
                id: "zamil",
                ar: "زْمِيل / زْمِيلَة",
                en: "classmate / colleague (m/f)",
                enArabeezy: "zmiil / zmileh",
                hint:
                    "Plural: زْمَلَا. Used for study or work colleagues.",
                exampleAr:
                    "زْميلي في الشُّغُل بيساعِدْني كْثير.",
                exampleEn: "My colleague at work helps me a lot.",
            },
            {
                id: "mudir",
                ar: "مُدِير / مُدِيرَة",
                en: "manager / director",
                enArabeezy: "mudiir / mudiireh",
                hint: "Used in work or school context. Plural: مُدَرَا.",
                exampleAr:
                    "مُدِير الشُّغُل عِنْدُه اِجْتِمَاع كُلّ يَوْم إِثْنَيْن.",
                exampleEn:
                    "The manager at work has a meeting every Monday.",
            },
            {
                id: "muwazzaf",
                ar: "مُوَظَّف / مُوَظَّفِة",
                en: "employee (m/f)",
                enArabeezy: "muwazzaf / muwazzafeh",
                hint: "Person who works in an office, bank, company, etc.",
                exampleAr: "أُخوي مُوَظَّف في بَنْك.",
                exampleEn: "My brother is an employee in a bank.",
            },
            {
                id: "mohandes",
                ar: "مُهَنْدِس / مُهَنْدِسَة",
                en: "engineer (m/f)",
                enArabeezy: "mohandes / mohandeseh",
                hint: "Profession (software, civil, electrical…).",
                exampleAr:
                    "بِدْرُس عَشان أَصير مُهَنْدِسَة بَرْمَجِيّات.",
                exampleEn: "I study so I can become a software engineer.",
            },
            {
                id: "mumarriD",
                ar: "مُمَرِّض / مُمَرِّضَة",
                en: "nurse (m/f)",
                enArabeezy: "mumarriD / mumarriDa",
                hint: "Health profession.",
                exampleAr: "أُختي مُمَرِّضَة في مُسْتَشْفَى.",
                exampleEn: "My sister is a nurse in a hospital.",
            },

            // ===== STUDY TOOLS & ACADEMIC THINGS =====
            {
                id: "daftar",
                ar: "دَفْتَر",
                en: "notebook",
                enArabeezy: "daftar",
                hint: "Plural: دَفَاتِر. ‘My notebook’ = دَفْتَرِي.",
                exampleAr:
                    "بَكْتُب مْلَاحَظَات فِي دَفْتَر خَاصّ لِكُلّ مَادَّة.",
                exampleEn:
                    "I write notes in a special notebook for each subject.",
            },
            {
                id: "qalam",
                ar: "قَلَم",
                en: "pen",
                enArabeezy: "qalam",
                hint:
                    "Plural: أَقْلَام. قَلَم رَصَاص = pencil, قَلَم حِبْر = ink pen.",
                exampleAr: "دَايْمًا بَنْسَى قَلَمِي فِي الْقَاعَة.",
                exampleEn: "I always forget my pen in the classroom.",
            },
            {
                id: "kumbyuter",
                ar: "كُمْبْيُوتِر / لَابْتُوب",
                en: "computer / laptop",
                enArabeezy: "kombyuter / laptop",
                hint: "Used a lot for online study and work.",
                exampleAr:
                    "بَدْرُس وَبَشْتِغِل أُونْلَايْن عَلَى اللَّابْتُوب.",
                exampleEn: "I study and work online on the laptop.",
            },
            {
                id: "mawdoo3",
                ar: "مَوْضُوع",
                en: "topic / subject (theme)",
                enArabeezy: "mawDoo3",
                hint:
                    "Plural: مَوَاضِيع. Used for essay topics, project topics, etc.",
                exampleAr:
                    "الْيَوْم مَوْضُوع الدَّرْس هُوَّ الشُّغُل وَالدِّرَاسَة.",
                exampleEn: "Today the lesson topic is work and study.",
            },
            {
                id: "mawadd",
                ar: "مَوَادّ",
                en: "subjects (school/university)",
                enArabeezy: "mawaadd",
                hint:
                    "Plural word already. Singular مَادَّة = one subject / course.",
                exampleAr: "عِنْدِي تَلَات مَوَادّ هَالْسِّمِسْتِر.",
                exampleEn: "I have three subjects this semester.",
            },
            {
                id: "imti7an",
                ar: "اِمْتِحَان",
                en: "exam / test",
                enArabeezy: "imti7an",
                hint:
                    "Plural: اِمْتِحَانَات. ‘final exam’ = اِمْتِحَان نِهَائِي.",
                exampleAr: "الأُسْبوع الْجَاي عِنْدِي اِمْتِحَان مُهِمّ.",
                exampleEn: "Next week I have an important exam.",
            },
            {
                id: "wajeb",
                ar: "وَاجِب",
                en: "homework / assignment",
                enArabeezy: "wajeb",
                hint:
                    "Plural: وَاجْبَات. In spoken Arabic ‘homework’ is usually وَاجِب.",
                exampleAr:
                    "الأُسْتَاذ بْيِعْطِينَا وَاجِب بَعْد كُلّ دَرْس.",
                exampleEn: "The teacher gives us homework after every lesson.",
            },
            {
                id: "mashroo3",
                ar: "مَشْرُوع",
                en: "project",
                enArabeezy: "mashroo3",
                hint:
                    "Plural: مَشَارِيع. مَشْرُوع تَّخَرُّج = graduation project.",
                exampleAr:
                    "هَادَا أَوَّل مَشْرُوع بَسَوِّيه فِي الْجَامْعَة.",
                exampleEn: "This is the first project I do at university.",
            },
            {
                id: "mu7adara",
                ar: "مُحاضَرَة",
                en: "lecture / class session",
                enArabeezy: "mu7aDara",
                hint: "University / college lesson.",
                exampleAr: "عندي مُحاضَرَة ساعَتَيْن اليوم.",
                exampleEn: "I have a two-hour lecture today.",
            },
            {
                id: "istira7a",
                ar: "اِسْتِراحَة",
                en: "break",
                enArabeezy: "istira7a",
                hint: "Pause from work or class.",
                exampleAr:
                    "بِنْخُد اِسْتِراحَة صْغيرَة بَين المُحاضَرات.",
                exampleEn: "We take a short break between the lectures.",
            },

            // ===== WORK & JOB WORDS =====
            {
                id: "shoghol",
                ar: "شُغُل",
                en: "work / job",
                enArabeezy: "shoghol",
                hint:
                    "Can mean ‘work’ in general or a job. ‘I have work’: عِنْدِي شُغُل.",
                exampleAr:
                    "بَشْتِغِل وَبَدْرُس فِي نَفْس الْوَقْت، عِنْدِي شُغُل جُزْئِي.",
                exampleEn:
                    "I work and study at the same time; I have a part-time job.",
            },
            {
                id: "wazifeh",
                ar: "وَظِيفَة",
                en: "job / position",
                enArabeezy: "waZiifeh",
                hint:
                    "Plural: وَظَايِف. More formal than شُغُل.",
                exampleAr:
                    "الْكُلّ بِيِدَوِّر عَلَى وَظِيفَة مُنَاسْبَة بَعْد التَّخَرُّج.",
                exampleEn:
                    "Everyone looks for a suitable job after graduation.",
            },
            {
                id: "duwam",
                ar: "دْوَام / دَوام",
                en: "working hours / shift",
                enArabeezy: "dawam",
                hint: "دْوَام صَبَاحِي، دْوَام كَامِل، دْوَام جُزْئِي.",
                exampleAr:
                    "دْوَام الشُّغُل مِن السَّاعَة تَمْنْيَة لِلسَّاعَة أَرْبَعَة.",
                exampleEn: "Working hours are from eight to four.",
            },
            {
                id: "dawam_kamel",
                ar: "بِدَوَّام كامِل",
                en: "full-time",
                enArabeezy: "bidawwam_kamel",
                hint: "Full-time work or study schedule.",
                exampleAr: "أَبوي بِشْتِغِل بِدَوَّام كامِل.",
                exampleEn: "My father works full-time.",
            },
            {
                id: "dawam_joz2i",
                ar: "دَوام جُزْئِي",
                en: "part-time",
                enArabeezy: "dawam_joz2i",
                hint: "Part-time work or job.",
                exampleAr: "أنا طالِب وبَشْتِغِل دَوام جُزْئِي.",
                exampleEn: "I’m a student and I work part-time.",
            },

            // ===== STUDY & WORK VERBS =====
            {
                id: "badros",
                ar: "بَدْرُس",
                en: "I study",
                enArabeezy: "badros",
                hint:
                    "From دَرَس = to study. Used with subject or field: بَدْرُس عَرَبِي / هَنْدَسَة / طِبّ.",
                exampleAr: "بَدْرُس حَاسُوب فِي الْجَامْعَة.",
                exampleEn: "I study computer science at university.",
            },
            {
                id: "yidros",
                ar: "يِدْرُس",
                en: "to study",
                enArabeezy: "yidros",
                hint: "Dictionary verb form ‘to study’.",
                exampleAr: "بَدْرُس كُمْبْيُوتِر سايِنْس.",
                exampleEn: "I study computer science.",
            },
            {
                id: "bat3allam",
                ar: "بَتْعَلَّم",
                en: "I learn",
                enArabeezy: "bat3allam",
                hint:
                    "From تَعَلَّم = to learn. More general than ‘study’.",
                exampleAr:
                    "بَتْعَلَّم اللُّغَة الْعَرَبِيَّة وَاللُّغَة الإِنْجْلِيزِيَّة.",
                exampleEn: "I am learning Arabic and English.",
            },
            {
                id: "bas2al",
                ar: "بَسْأَل",
                en: "I ask (a question)",
                enArabeezy: "bas2al",
                hint:
                    "From سَأَل = to ask. Used a lot in class: بَسْأَل الأُسْتَاذ.",
                exampleAr: "لَمَّا مَا أَفْهَم بَسْأَل الأُسْتَاذ.",
                exampleEn: "When I don’t understand, I ask the teacher.",
            },
            {
                id: "bafham",
                ar: "بَفْهَم",
                en: "I understand",
                enArabeezy: "bafham",
                hint:
                    "From فَهِم = to understand. Negative: مَا بَفْهَم.",
                exampleAr:
                    "أَحْيَانًا بَفْهَم الدَّرْس، أَحْيَانًا بَحْتَاج تِّكْرَار.",
                exampleEn:
                    "Sometimes I understand the lesson, sometimes I need repetition.",
            },
            {
                id: "bakammel",
                ar: "بَكَمِّل",
                en: "I continue / I complete",
                enArabeezy: "bakammel",
                hint: "Chunk: بَكَمِّل دِرَاسَة، بَكَمِّل مَشْرُوع.",
                exampleAr:
                    "بَكَمِّل مُسْتَوَى أَوَّل فِي اللُّغَة الْفِلَسْطِينِيَّة.",
                exampleEn: "I am completing level one in Palestinian Arabic.",
            },
            {
                id: "banja7",
                ar: "بَنْجَح",
                en: "I pass / I succeed",
                enArabeezy: "banja7",
                hint:
                    "Used with exams/subjects. Opposite: بَرْسُب = I fail.",
                exampleAr: "بَنْجَح فِي الاِمْتِحَان إِذَا بَدْرُس مْنِيح.",
                exampleEn: "I pass the exam if I study well.",
            },
            {
                id: "barsob",
                ar: "بَرْسُب",
                en: "I fail (a subject / exam)",
                enArabeezy: "barsob",
                hint: "From رَسَب = to fail. Sensitive word, use carefully.",
                exampleAr:
                    "مَا بَدِّي أَرْسُب، عَشَان هَيْك بَدْرُس كْتِير.",
                exampleEn: "I don’t want to fail, so I study a lot.",
            },
            {
                id: "bashteghil",
                ar: "بَشْتِغِل",
                en: "I work",
                enArabeezy: "bashteghil",
                hint:
                    "Spoken verb for ‘work’. Add where or how: بَشْتِغِل أُونْلَايْن، بَشْتِغِل فِي مَكْتَب.",
                exampleAr:
                    "بَشْتِغِل مُدَرِّسَة جُزْئِيّ وَبَدْرُس كَمَان.",
                exampleEn: "I work part-time as a teacher and study as well.",
            },
            {
                id: "yishtaghel",
                ar: "يِشْتِغِل",
                en: "to work",
                enArabeezy: "yishtaghel",
                hint: "Dictionary verb form ‘to work’.",
                exampleAr: "بَشْتِغِل جُزْئِي بَعْد الجامْعَة.",
                exampleEn: "I work part-time after university.",
            },
            {
                id: "badarreb",
                ar: "بَدَرِّب",
                en: "I train / I give training",
                enArabeezy: "badarreb",
                hint:
                    "From دَرَّب = to train. For giving courses/workshops.",
                exampleAr:
                    "بَدَرِّب طُلَّاب أَجَانِب عَلَى اللُّغَة الْفِلَسْطِينِيَّة.",
                exampleEn:
                    "I train foreign students in Palestinian Arabic.",
            },
            {
                id: "badarris",
                ar: "بَدَرِّس",
                en: "I teach",
                enArabeezy: "badarris",
                hint:
                    "From دَرَّس = to teach. Teacher speaking about their job.",
                exampleAr:
                    "أَنَا بَدَرِّس عَرَبِي لِطُلَّاب مِن دُوَل مُخْتَلِفَة.",
                exampleEn:
                    "I teach Arabic to students from different countries.",
            },
            {
                id: "yitkharraj",
                ar: "يِتْخَرَّج",
                en: "to graduate",
                enArabeezy: "yitkharraj",
                hint: "Finish university or school.",
                exampleAr: "بَدّي أِتْخَرَّج السَّنِة الجاي.",
                exampleEn: "I want to graduate next year.",
            },
        ],

        extra: [
            {
                id: "youm_dirasah",
                ar: "يَوْم دِرَاسَة",
                en: "school / study day",
                enArabeezy: "youm_diraseh",
                hint: "Opposite: يَوْم إِجَازَة = day off.",
                exampleAr: "الْخَمِيس عِنْدْنَا يَوْم دِرَاسَة طَوِيل.",
                exampleEn: "On Thursday we have a long study day.",
            },
            {
                id: "sabt_lakhmis",
                ar: "مِن السَّبْت لِلْخَمِيس",
                en: "from Saturday to Thursday",
                enArabeezy: "min_issabt_lil5amiis",
                hint:
                    "Typical study/work week in many Arab countries.",
                exampleAr:
                    "بَدْرُس مِن السَّبْت لِلْخَمِيس وَالجُمُعَة إِجَازَة.",
                exampleEn:
                    "I study from Saturday to Thursday and Friday is off.",
            },
            {
                id: "mu3adal",
                ar: "مُعَدَّل",
                en: "average / GPA",
                enArabeezy: "mu3addal",
                hint: "Study context: مُعَدَّل عَالِي / مُنْخَفِض.",
                exampleAr:
                    "بَدِّي مُعَدَّل عَالِي عَشَان أَلْقَى وَظِيفَة أَحْسَن.",
                exampleEn:
                    "I want a high GPA so I can find a better job.",
            },
            {
                id: "mahameh",
                ar: "مَهَمّة",
                en: "task",
                enArabeezy: "mahameh",
                hint: "Task at work or for a project.",
                exampleAr:
                    "كُل يَوم المُدير بِعْطيهِم مَهَمّات جْديدة.",
                exampleEn:
                    "Every day the manager gives them new tasks.",
            },
            {
                id: "maw3ed",
                ar: "مَوعِد",
                en: "appointment / deadline",
                enArabeezy: "maw3ed",
                hint: "Time for a meeting or for submitting something.",
                exampleAr: "مَوعِد تَسْليم المَشْروع بُكْرَة.",
                exampleEn:
                    "The deadline for submitting the project is tomorrow.",
            },
            {
                id: "lazem",
                ar: "لازِم",
                en: "must / have to",
                enArabeezy: "lazem",
                hint: "Used to express obligation.",
                exampleAr:
                    "لازِم أَدْرُس كْثير لِلْاِمْتِحان.",
                exampleEn: "I must study a lot for the exam.",
            },
            {
                id: "ma_ba2dar",
                ar: "ما بَقْدَر",
                en: "I can’t / I’m not able",
                enArabeezy: "ma_ba2dar",
                hint:
                    "Used when you don’t have time, energy, or possibility.",
                exampleAr:
                    "ما بَقْدَر أِطْلَع اليوم، عندي شُغُل.",
                exampleEn: "I can’t go out today, I have work.",
            },
            {
                id: "wa2t_faDi",
                ar: "وَقْت فاضي",
                en: "free time",
                enArabeezy: "wa2t_faDi",
                hint: "Time without work or study.",
                exampleAr: "ما عِنْدي وَقْت فاضي اليوم.",
                exampleEn: "I have no free time today.",
            },
        ],
    }
    ,

    // ====================================
    // DIALOGUE (class + project + work + future)
    // ====================================
    dialogue: {
        lines: [
            {
                "speaker": "Majd",
                "ar": "صَباح الخير يا سارة، كِيف دَوامِك اليوم؟",
                "en": "Good morning, Sara, how is your schedule today?"
            },
            {
                "speaker": "Sara",
                "ar": "صَباح النّور يا مَجْد، دَوامي مَجْنون! عندي جامْعَة وَشُغُل.",
                "en": "Good morning, Majd, my schedule is crazy! I have university and work."
            },
            {
                "speaker": "Majd",
                "ar": "جَدّ؟ وين بَشْتِغِلي؟",
                "en": "Really? Where do you work?"
            },
            {
                "speaker": "Sara",
                "ar": "بَشْتِغِل دَوام جُزْئِي في مَكْتَب بِشِرْكَة صْغيرَة.",
                "en": "I work part-time in an office at a small company."
            },
            {
                "speaker": "Majd",
                "ar": "وَقت قَدّيش الدَّوام؟",
                "en": "How long are your work hours?"
            },
            {
                "speaker": "Sara",
                "ar": "مِن التّْنين لَلخَميس، مِن السّاعَة تْنين لَلْخَمْسَة.",
                "en": "From Monday to Thursday, from two o’clock to five."
            },
            {
                "speaker": "Majd",
                "ar": "وطَبْعًا قبل هيك عَندِك مُحاضَرات بِالجامْعَة؟",
                "en": "And of course before that you have lectures at the university?"
            },
            {
                "speaker": "Sara",
                "ar": "إي، الصُّبِح بَدْرُس، وبَعْدين بَروح عَالشُّغُل.",
                "en": "Yes, in the morning I study, and then I go to work."
            },
            {
                "speaker": "Majd",
                "ar": "ما بِتْحِسّ إنّو ما عِنْدِك وَقْت فاضي؟",
                "en": "Don’t you feel like you have no free time?"
            },
            {
                "speaker": "Sara",
                "ar": "صِراحَةً، نادِرًا بْلاقي وَقْت فاضي. لاِزِم أَدْرُس لِلْمَشْروع وِلْاِمْتِحانات كْمان.",
                "en": "Honestly, I rarely find free time. I have to study for the project and for exams too."
            },
            {
                "speaker": "Majd",
                "ar": "وشُو مَجال الشُّغُل؟",
                "en": "And what type of work is it?"
            },
            {
                "speaker": "Sara",
                "ar": "مُساعَدَة إِداريّة، بَطَبِّع أَوْراق، بِرُدّ عَالتّليفون، وَبَساعِد المُوَظَّفين.",
                "en": "Administrative assistance: I print papers, answer the phone, and help the employees."
            },
            {
                "speaker": "Majd",
                "ar": "بِتْحِسّ إنّو الشُّغُل بيساعِدِك بِالدِّراسَة وَلّا بِتْعَبِك أكْتَر؟",
                "en": "Do you feel that the job helps you with your studies, or does it just tire you out more?"
            },
            {
                "speaker": "Sara",
                "ar": "هُوَّ مُتْعِب، بَس كْمان بَتْعَلَّم مَهارات جْديدة.",
                "en": "It’s tiring, but I also learn new skills."
            },
            {
                "speaker": "Majd",
                "ar": "أنا طالِب بَس، ما بَشْتِغِل هَلَّق. بس أَحْيانًا بَفَكِّر آخُد دَوام جُزْئِي.",
                "en": "I’m only a student, I don’t work right now. But sometimes I think about taking a part-time job."
            },
            {
                "speaker": "Sara",
                "ar": "إذا بَدَّك تِشْتِغِل، لازم تِنَظِّم وَقْتَك مْنيح.",
                "en": "If you want to work, you must organize your time well."
            },
            {
                "speaker": "Majd",
                "ar": "عَنْ قريب عنا اِمْتِحانات، صَعِب أَفَكِّر بِشُغُل هَلَّق.",
                "en": "We have exams soon, it’s hard to think about work now."
            },
            {
                "speaker": "Sara",
                "ar": "مَزْبوط، الأَهَم هَلَّق الدِّراسَة. بَعْدين بِتْدَوِّر عَشُغُل مُناسِب.",
                "en": "True, right now the most important thing is studying. Later you look for a suitable job."
            },
            {
                "speaker": "Majd",
                "ar": "إنْ شاءَ الله بَعْد ما أِتْخَرَّج أَلاقِي وَظِيفَة كْوَيْسِة.",
                "en": "Inshallah after I graduate I’ll find a good job."
            },
            {
                "speaker": "Sara",
                "ar": "وأنا كْمان، خَلِّينا نِرْكِز عَالدِّراسَة هَلَّق.",
                "en": "Me too; let’s focus on the studies for now."
            }
        ]
    }
    ,

    // ====================================
    // GRAMMAR
    // ====================================
    grammar: [
        {
            id: "badros_bat3allam",
            title: "«بَدْرُس» vs «بَتْعَلَّم» – study vs learn",
            description:
                "In Palestinian Arabic, both verbs are common:\n\n" +
                "• بَدْرُس = I study (more formal / school-university context)\n" +
                "  – بَدْرُس هَنْدَسَة فِي الْجَامْعَة.\n" +
                "  – بَدْرُس ثَلَاث مَوَادّ هَالْسِّمِسْتِر.\n\n" +
                "• بَتْعَلَّم = I learn (more general, includes self-study)\n" +
                "  – بَتْعَلَّم فِلَسْطِينِي أُونْلَايْن.\n" +
                "  – بَتْعَلَّم إِيطَالِيّ لِحَالِي.\n\n" +
                "You can combine them:\n" +
                "• بَدْرُس فِي الْجَامْعَة وَبَتْعَلَّم أُونْلَايْن كَمَان.\n" +
                "  = I study at university and also learn online.",
        },
        {
            id: "andi_pattern",
            title: "Using «عِنْدِي» for ‘I have’ (exam, project, work)",
            description:
                "Chunk «عِنْدِي» is used for ‘I have’ (possession or obligation):\n\n" +
                "• عِنْدِي دَفْتَر جْدِيد. = I have a new notebook.\n" +
                "• عِنْدِي اِمْتِحَان بُكْرَا. = I have an exam tomorrow.\n" +
                "• عِنْدِي شُغُل جُزْئِيّ. = I have a part-time job.\n" +
                "• عِنْدِي مَشْرُوع كْبِير هَالْسِّمِسْتِر. = I have a big project this semester.\n\n" +
                "Negative:\n" +
                "• مَا عِنْدِي وَقْت. = I don’t have time.\n" +
                "• مَا عِنْدِي شُغُل هَلَّقْ. = I don’t have work now.",
        },
        {
            id: "future_exam",
            title: "Future with «رَح» + study context",
            description:
                "A very common future marker is «رَح» before the verb:\n\n" +
                "• رَح أَدْرُس بُكْرَا الصُّبِح. = I will study tomorrow morning.\n" +
                "• رَح يِكُون عِنْدْنَا اِمْتِحَان الأُسْبُوع الْجَاي. = We will have an exam next week.\n" +
                "• رَح أَخُد إِجَازَة بَعْد مَا أَخَلِّص مَشْرُوع. = I will take a holiday after I finish the project.\n\n" +
                "In fast speech, ‘رَح’ can sound like ‘رَح / رَ’. For beginners, keep it clear: رَح + present verb.",
        },
        {
            id: "success_fail",
            title: "«بَنْجَح» vs «بَرْسُب» – pass vs fail",
            description:
                "Two important verbs for exam results:\n\n" +
                "• بَنْجَح = I pass / I succeed\n" +
                "  – إِذَا بَدْرُس مْنِيح، بَنْجَح فِي الْمَادَّة.\n" +
                "  – أَخُوي نَجَح فِي الْمُعَدَّل بِمُمتَاز.\n\n" +
                "• بَرْسُب = I fail (and have to repeat)\n" +
                "  – مَا بَدِّي أَرْسُب فِي وَلا مَادَّة.\n" +
                "  – رَاح يِرْسُب إِذَا مَا بَيِدْرُس.\n\n" +
                "You can connect them with ‘عَشَان’ (because):\n" +
                "• بَنْجَح عَشَان بَدْرُس كُلّ يَوْم. = I pass because I study every day.",
        },
    ],

    // ====================================
    // PRACTICE
    // ====================================
    practice: {
        quiz: [
            {
                id: "ws_q1",
                questionAr: "«بَدْرُس هَنْدَسَة فِي الْجَامْعَة» مَعْنَاهَا:",
                optionsEn: [
                    "I teach engineering at the university.",
                    "I study engineering at the university.",
                    "I work in engineering at the university.",
                ],
                correctIndex: 1,
            },
            {
                id: "ws_q2",
                questionAr: "أَيّ كَلِمَة تِسْتَخْدِمْهَا لِـ ‘exam’؟",
                optionsEn: [
                    "مَشْرُوع",
                    "اِمْتِحَان",
                    "اِجْتِمَاع",
                ],
                correctIndex: 1,
            },
            {
                id: "ws_q3",
                questionAr: "«عِنْدِي شُغُل جُزْئِيّ» مَعْنَاهَا:",
                optionsEn: [
                    "I have a full-time job.",
                    "I have a part-time job.",
                    "I don’t have any job.",
                ],
                correctIndex: 1,
            },
            {
                id: "ws_q4",
                questionAr: "«بَنْجَح فِي الاِمْتِحَان إِذَا بَدْرُس مْنِيح» مَعْنَاهَا:",
                optionsEn: [
                    "I pass the exam if I study well.",
                    "I fail the exam if I study well.",
                    "I don’t have an exam if I study well.",
                ],
                correctIndex: 0,
            },
            {
                id: "ws_q5",
                questionAr: "أَيّ تَعْبِير مَعْنَاه ‘I learn Palestinian dialect online’؟",
                optionsEn: [
                    "بَدْرُس فِلَسْطِينِي فِي الْمَدْرَسَة.",
                    "بَتْعَلَّم فِلَسْطِينِي أُونْلَايْن.",
                    "بَشْتِغِل فِلَسْطِينِي أُونْلَايْن.",
                ],
                correctIndex: 1,
            },
        ],

        rolePlays: [
            "Role-play 1: University introduction. Student A is the teacher; Student B is a new student. The teacher asks about name, what they study, in which university/department, and if they work as well. Student B answers using «بَدْرُس»، «بَتْعَلَّم»، «بَشْتِغِل»، and «عِنْدِي مَشْرُوع / اِمْتِحَان». Then switch roles.",
            "Role-play 2: Exam week. Two students talk about their subjects and exams: which one is easy, which one is difficult, how they study, and what they need to pass. They use «مَادَّة»، «مَوَادّ»، «اِمْتِحَان»، «بَنْجَح»، «بَرْسُب»، and time words (next week, tomorrow, today).",
            "Role-play 3: Future plans. Student A interviews Student B about their future after graduation: job they want, if they want a master’s, if they want to work online or in an office. Use «رَح» for future, «بِفَضَّل»، «وَظِيفَة»، and chunks like «بِصِدْق، بَدِّي…».",
        ],
    },

    // ====================================
    // HOMEWORK
    // ====================================
    homework: {
        instructions:
            "Write and record a 60–90 second text in Palestinian Arabic about your work & study life. Include:\n" +
            "• What you study (or studied) and where (school / university / online).\n" +
            "• If you work now or want to work in the future (type of job / field).\n" +
            "• At least 4 study words (like: مَادَّة، مَوَادّ، اِمْتِحَان، مَشْرُوع، وَاجِب).\n" +
            "• At least 3 verbs from the unit (like: بَدْرُس، بَتْعَلَّم، بَشْتِغِل، بَفْهَم، بَنْجَح).\n" +
            "Try to tell it like a story: past (what you studied before), present (what you do now), and future (what you want to do).",
    },

    // ====================================
    // TEACHER NOTES
    // ====================================
    teacherNotes: {
        warmup: [
            "Start by asking in English about the student’s real situation: Are you studying now? Working? Both? Then map the answers into Arabic using the new verbs.",
            "Write on the board two columns: STUDY and WORK. Let the student brainstorm words in English, then give or elicit the Palestinian Arabic equivalents.",
            "Ask the student about their most difficult subject and their favorite subject, then introduce the words مَادَّة / مَوَادّ / اِمْتِحَان.",
        ],
        vocabularySteps: [
            "Teach the study words in small groups: places (school, university, department), things (notebook, pen, laptop), and abstract words (exam, project, meeting).",
            "Highlight singular/plural inside the hints: مَادَّة / مَوَادّ, دَفْتَر / دَفَاتِر, اِمْتِحَان / اِمْتِحَانَات, then let the student make at least one plural sentence.",
            "Introduce the verb pairs clearly: بَدْرُس / بَتْعَلَّم, بَنْجَح / بَرْسُب, and practice with simple personalisation questions.",
        ],
        dialogueSteps: [
            "Use the dialogue as a script for real life: pause after each part and ask if it matches the student’s life or not.",
            "Let the student retell the dialogue in the first person: instead of Roba / Mark / Yara, they talk about themselves using the same structures.",
            "Encourage improvisation: change the field of study, type of job, number of subjects, but keep the grammatical frame.",
        ],
        practiceTips: [
            "Focus error correction on high-frequency chunks: «بَدْرُس»، «بَتْعَلَّم»، «عِنْدِي…»، «رَح…»، and on correct use of present vs future.",
            "When doing role-plays, allow the student to mix a bit of English if needed, but push them to keep all the key verbs and time words in Arabic.",
            "If the student has a real graduation project or job, use it as content: help them build 3–4 strong sentences they can really reuse.",
        ],
        wrapup: [
            "End the lesson by summarising the student’s work & study story in a ‘clean’ Palestinian Arabic version, so they hear a strong model of their own life.",
            "Ask the student to write 3 goals in Arabic for their study or work for the next six months using «بِدِّي» و«رَح».",
            "Remind them of the homework and suggest they imagine they are introducing themselves to a new teacher or manager in Palestine.",
        ],
        myNotes: "",
    },
};