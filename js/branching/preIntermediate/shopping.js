import { LESSON_ID_SHOPPING } from '../../core/constants.js';

export const dialogueId = 'BD::' + LESSON_ID_SHOPPING;

export const dialogue = {
  meta: {
    level: 'Pre-Intermediate',
    unit: 'Shopping & Prices',
    title: 'Shopping & Prices - Decisions',
  },
  startNodeId: 'n1',
  nodes: {
    n1: {
      speaker: 'Shopkeeper',
      ar: 'أهلا! تفضّل/ي. شو بدّك؟',
      en: 'Hi! Welcome. What do you want?',
      choices: [
        { id: 'c1', ar: 'بدي أشتري قميص.', en: 'I want to buy a shirt.', next: 'n2' },
        { id: 'c2', ar: 'بس بتفرّج.', en: 'I am just looking.', next: 'n3' },
      ],
    },
    n2: {
      speaker: 'Shopkeeper',
      ar: 'تمام. شو اللون اللي بتحبّيه؟',
      en: 'Okay. What color do you like?',
      choices: [
        { id: 'c1', ar: 'أسود.', en: 'Black.', next: 'n4' },
        { id: 'c2', ar: 'أزرق.', en: 'Blue.', next: 'n4' },
      ],
    },
    n3: {
      speaker: 'Shopkeeper',
      ar: 'ولا يهمّك. إذا بدّك تسألي عن السعر احكيلي.',
      en: 'No problem. If you want to ask about the price, tell me.',
      choices: [
        { id: 'c1', ar: 'قدّيش هاد القميص؟', en: 'How much is this shirt?', next: 'n4' },
        { id: 'c2', ar: 'ممكن أشوف المقاسات؟', en: 'Can I see the sizes?', next: 'n5' },
      ],
    },
    n4: {
      speaker: 'Shopkeeper',
      ar: 'سعره تلاتمية وخمسين. في خصم اليوم.',
      en: 'It is 350. There is a discount today.',
      choices: [
        { id: 'c1', ar: 'ممكن تخفّض شوي؟', en: 'Can you lower it a bit?', next: 'n6' },
        { id: 'c2', ar: 'تمام، بدي آخده.', en: 'Okay, I will take it.', next: 'end1' },
      ],
    },
    n5: {
      speaker: 'Shopkeeper',
      ar: 'أكيد. هاي S و M و L. أي واحد بدّك؟',
      en: 'Sure. Here are S, M, and L. Which one do you want?',
      choices: [
        { id: 'c1', ar: 'M.', en: 'M.', next: 'n4' },
        { id: 'c2', ar: 'L.', en: 'L.', next: 'n4' },
      ],
    },
    n6: {
      speaker: 'Shopkeeper',
      ar: 'عشانك! خلّيه أربعمية وخمسين... قصدي ميتين وخمسين؟ لا، خلّيه تلاتمية.',
      en: 'For you! Let us make it 300.',
      choices: [
        { id: 'c1', ar: 'تمّ. شكراً!', en: 'Deal. Thanks!', next: 'end1' },
        { id: 'c2', ar: 'لا، غالي. بدي أشوف غيره.', en: 'No, it is expensive. I want to see another one.', next: 'n7' },
      ],
    },
    n7: {
      speaker: 'Shopkeeper',
      ar: 'طيب شو رأيك بهاد؟ أرخص.',
      en: 'Okay, what about this one? It is cheaper.',
      choices: [
        { id: 'c1', ar: 'منيح. قدّيش؟', en: 'Nice. How much?', next: 'end2' },
        { id: 'c2', ar: 'خلص شكراً. رح أرجع بعدين.', en: 'Okay thanks. I will come back later.', next: 'end3' },
      ],
    },
    end1: {
      speaker: 'Shopkeeper',
      ar: 'يعطيك العافية! بدك تدفعي كاش ولا كرت؟',
      en: 'Great! Do you pay cash or card?',
      choices: [],
    },
    end2: {
      speaker: 'Shopkeeper',
      ar: 'مِيتين وخمسين. وإذا كرت نفس السعر.',
      en: '250. And by card it is the same price.',
      choices: [],
    },
    end3: {
      speaker: 'Shopkeeper',
      ar: 'ولا يهمك. أهلا فيك بأي وقت.',
      en: 'No worries. You are welcome anytime.',
      choices: [],
    },
  },
};
