import { LESSON_ID_HOBBIES } from '../../core/constants.js';

export const dialogueId = 'BD::' + LESSON_ID_HOBBIES;

export const dialogue = {
  meta: {
    level: 'Intermediate',
    unit: 'Free Time & Hobbies',
    title: 'Hobbies - Decisions',
  },
  startNodeId: 'n1',
  nodes: {
    n1: {
      speaker: 'A',
      ar: 'شو بتحب/ي تعمل بوقت الفراغ؟',
      en: 'What do you like to do in your free time?',
      choices: [
        { id: 'c1', ar: 'بحب الرياضة.', en: 'I like sports.', next: 'n2' },
        { id: 'c2', ar: 'بحب القراءة.', en: 'I like reading.', next: 'n3' },
        { id: 'c3', ar: 'بحب الطبخ.', en: 'I like cooking.', next: 'n4' },
      ],
    },
    n2: {
      speaker: 'B',
      ar: 'أي رياضة؟',
      en: 'Which sport?',
      choices: [
        { id: 'c1', ar: 'كرة قدم.', en: 'Football/soccer.', next: 'end1' },
        { id: 'c2', ar: 'مشي/جري.', en: 'Walking/running.', next: 'end1' },
      ],
    },
    n3: {
      speaker: 'B',
      ar: 'بتقرأ/ي شو؟ روايات ولا مقالات؟',
      en: 'What do you read? Novels or articles?',
      choices: [
        { id: 'c1', ar: 'روايات.', en: 'Novels.', next: 'end2' },
        { id: 'c2', ar: 'مقالات.', en: 'Articles.', next: 'end2' },
      ],
    },
    n4: {
      speaker: 'B',
      ar: 'آه حلو! شو أحسن أكلة بتعملها؟',
      en: 'Nice! What is the best dish you make?',
      choices: [
        { id: 'c1', ar: 'مقلوبة.', en: 'Maqluba.', next: 'end3' },
        { id: 'c2', ar: 'مكرونة.', en: 'Pasta.', next: 'end3' },
      ],
    },
    end1: {
      speaker: 'A',
      ar: 'منيح! مرة الجاي خلينا نلعب/نتمشّى.',
      en: 'Nice! Next time let us play/go for a walk.',
      choices: [],
    },
    end2: {
      speaker: 'A',
      ar: 'حلو. بتقرأ/ي بالإنجليزي ولا بالعربي؟',
      en: 'Nice. Do you read in English or Arabic?',
      choices: [],
    },
    end3: {
      speaker: 'A',
      ar: 'يسعدني! لازم تذوقيني.',
      en: 'Great! You should let me taste it.',
      choices: [],
    },
  },
};
