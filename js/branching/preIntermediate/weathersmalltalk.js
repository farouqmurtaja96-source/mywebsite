import { LESSON_ID_WEATHER } from '../../core/constants.js';

export const dialogueId = 'BD::' + LESSON_ID_WEATHER;

export const dialogue = {
  meta: {
    level: 'Pre-Intermediate',
    unit: 'Weather & Small Talk',
    title: 'Weather & Small Talk - Decisions',
  },
  startNodeId: 'n1',
  nodes: {
    n1: {
      speaker: 'A',
      ar: 'اليوم الجو كيف عندكم؟',
      en: 'How is the weather where you are today?',
      choices: [
        { id: 'c1', ar: 'بارد كتير.', en: 'It is very cold.', next: 'n2' },
        { id: 'c2', ar: 'دافي ومشمس.', en: 'It is warm and sunny.', next: 'n3' },
      ],
    },
    n2: {
      speaker: 'B',
      ar: 'بِتِلبَس جاكيت؟',
      en: 'Do you wear a jacket?',
      choices: [
        { id: 'c1', ar: 'آه لازم.', en: 'Yes, I have to.', next: 'n4' },
        { id: 'c2', ar: 'لا، بقدر أتحمّل.', en: 'No, I can handle it.', next: 'n5' },
      ],
    },
    n3: {
      speaker: 'B',
      ar: 'يا سلام! بدك تطلع/ي تتمشّى؟',
      en: 'Nice! Do you want to go for a walk?',
      choices: [
        { id: 'c1', ar: 'آه، بدي أطلع شوي.', en: 'Yes, I will go out a bit.', next: 'n6' },
        { id: 'c2', ar: 'لا، عندي شغل.', en: 'No, I have work.', next: 'end1' },
      ],
    },
    n4: {
      speaker: 'B',
      ar: 'منيح. لا تمرضي!',
      en: 'Good. Do not get sick!',
      choices: [
        { id: 'c1', ar: 'شكراً!', en: 'Thanks!', next: 'end2' },
        { id: 'c2', ar: 'إن شاء الله.', en: 'God willing.', next: 'end2' },
      ],
    },
    n5: {
      speaker: 'B',
      ar: 'انتبه/ي! البرد قوي.',
      en: 'Be careful! The cold is strong.',
      choices: [
        { id: 'c1', ar: 'معك حق.', en: 'You are right.', next: 'end2' },
        { id: 'c2', ar: 'ولا يهمك.', en: 'No worries.', next: 'end2' },
      ],
    },
    n6: {
      speaker: 'B',
      ar: 'وين بتحب/ي تروح/ي؟',
      en: 'Where do you like to go?',
      choices: [
        { id: 'c1', ar: 'عالكورنيش.', en: 'To the corniche.', next: 'end3' },
        { id: 'c2', ar: 'عالكافيه.', en: 'To the cafe.', next: 'end3' },
      ],
    },
    end1: {
      speaker: 'A',
      ar: 'تمام، الله يقويك/ي.',
      en: 'Okay, may God give you strength.',
      choices: [],
    },
    end2: {
      speaker: 'A',
      ar: 'يلا خليها على الله.',
      en: 'Okay, let us leave it to God.',
      choices: [],
    },
    end3: {
      speaker: 'A',
      ar: 'حلو! استمتع/ي.',
      en: 'Nice! Enjoy.',
      choices: [],
    },
  },
};
