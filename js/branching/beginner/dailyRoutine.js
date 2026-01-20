import { LESSON_ID_DAILY_ROUTINE } from '../../core/constants.js';

export const dialogueId = 'BD::' + LESSON_ID_DAILY_ROUTINE;

export const dialogue = {
  meta: {
    level: 'Beginner',
    unit: 'Daily Routine',
    title: 'Daily Routine - Decisions',
  },
  startNodeId: 'n1',
  nodes: {
    n1: {
      speaker: 'A',
      ar: 'صباح الخير! اليوم عندك جامعة؟',
      en: 'Good morning! Do you have university today?',
      choices: [
        { id: 'c1', ar: 'آه، عندي محاضرة.', en: 'Yes, I have a lecture.', next: 'n2' },
        { id: 'c2', ar: 'لا، اليوم عطلة.', en: 'No, today is a day off.', next: 'n3' },
      ],
    },
    n2: {
      speaker: 'B',
      ar: 'على الساعة قديش بتروح؟',
      en: 'What time do you go?',
      choices: [
        { id: 'c1', ar: 'عالسّاعة تمانية.', en: 'At eight o\'clock.', next: 'n4' },
        { id: 'c2', ar: 'متأخّر شوي، يمكن تسعة.', en: 'A bit late, maybe nine.', next: 'n5' },
      ],
    },
    n3: {
      speaker: 'B',
      ar: 'منيح! شو ناوي تعمل اليوم؟',
      en: 'Nice! What are you planning to do today?',
      choices: [
        { id: 'c1', ar: 'بدي أرتاح بالبيت.', en: 'I want to rest at home.', next: 'n6' },
        { id: 'c2', ar: 'بدي أطلع أتمشّى.', en: 'I want to go for a walk.', next: 'n7' },
      ],
    },
    n4: {
      speaker: 'A',
      ar: 'عادةً باخد الباص.',
      en: 'Usually I take the bus.',
      choices: [
        { id: 'c1', ar: 'إذا في أزمة، بتأخّر.', en: 'If there is traffic, I get late.', next: 'n8' },
        { id: 'c2', ar: 'إذا قريب، بمشي.', en: 'If it is close, I walk.', next: 'n9' },
      ],
    },
    n5: {
      speaker: 'A',
      ar: 'مرّات بصحى متأخّر.',
      en: 'Sometimes I wake up late.',
      choices: [
        { id: 'c1', ar: 'وبستعجل ألحق الباص.', en: 'And I rush to catch the bus.', next: 'n8' },
        { id: 'c2', ar: 'بآخذ تاكسي إذا لازم.', en: 'I take a taxi if I must.', next: 'n10' },
      ],
    },
    n6: {
      speaker: 'A',
      ar: 'بدي أعمل قهوة وأرتاح.',
      en: 'I want to make coffee and relax.',
      choices: [
        { id: 'c1', ar: 'وبعدين بشوف فيلم.', en: 'Then I watch a movie.', next: 'n11' },
        { id: 'c2', ar: 'وبعمل شوية ترتيب.', en: 'And I do a bit of tidying.', next: 'n12' },
      ],
    },
    n7: {
      speaker: 'A',
      ar: 'بدي أتمشّى شوي بالشارع.',
      en: 'I want to walk a bit on the street.',
      choices: [
        { id: 'c1', ar: 'وبروح عالدكّان.', en: 'And I go to the shop.', next: 'n11' },
        { id: 'c2', ar: 'يمكن أشوف صحابي.', en: 'Maybe I see my friends.', next: 'n12' },
      ],
    },
    n8: {
      speaker: 'B',
      ar: 'طيب إذا في أزمة، قديش بتتأخّر؟',
      en: 'If there is traffic, how late do you get?',
      choices: [
        { id: 'c1', ar: 'مرّات ربع ساعة.', en: 'Sometimes 15 minutes.', next: 'end' },
        { id: 'c2', ar: 'مرّات نص ساعة.', en: 'Sometimes half an hour.', next: 'end' },
      ],
    },
    n9: {
      speaker: 'B',
      ar: 'ممتاز! المشي صحي.',
      en: 'Great! Walking is healthy.',
      choices: [
        { id: 'c1', ar: 'آه، خصوصاً إذا الجو حلو.', en: 'Yes, especially when the weather is nice.', next: 'end' },
      ],
    },
    n10: {
      speaker: 'B',
      ar: 'قبل ما تركب تاكسي، اسأل السواق: قديش الأجرة؟',
      en: 'Before you take a taxi, ask the driver: how much is the fare?',
      choices: [
        { id: 'c1', ar: 'صح، التاكسي أغلى.', en: 'True, the taxi is more expensive.', next: 'end' },
      ],
    },
    n11: {
      speaker: 'B',
      ar: 'حلو! يوم خفيف.',
      en: 'Nice! A light day.',
      choices: [
        { id: 'c1', ar: 'إن شاء الله.', en: 'Inshallah.', next: 'end' },
      ],
    },
    n12: {
      speaker: 'B',
      ar: 'تمام، أهم شي ترتّب وقتك.',
      en: 'Great, the important thing is to manage your time.',
      choices: [
        { id: 'c1', ar: 'مزبوط.', en: 'Exactly.', next: 'end' },
      ],
    },
    end: {
      speaker: 'A',
      ar: 'يلا، خلّينا نكمّل.',
      en: 'Alright, let\'s continue.',
      choices: [],
    },
  },
};
