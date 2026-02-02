import { LESSON_ID_GREETING } from '../../core/constants.js';

export const dialogueId = 'BD::' + LESSON_ID_GREETING;
export const dialogue = {
  meta: { level: 'Beginner', unit: 'Greetings', title: 'Greetings - Decisions' },
  startNodeId: 's1',
  nodes: {
    s1: {
      speaker: 'System',
      ar: 'اختر مكان الحوار:',
      en: 'Choose the dialogue location:',
      choices: [
        { id: 's1a', ar: 'في الشارع ثم القهوة', en: 'Street then cafe', next: 'c1' },
        { id: 's1b', ar: 'في الصف (أول درس)', en: 'In class (first lesson)', next: 'k1' },
      ],
    },

    // =====================
    // Scenario A: Street -> Cafe (natural flow)
    // =====================
    c1: {
      speaker: 'A',
      ar: 'السلام عليكم، عفوا ممكن أسأل سؤال؟',
      en: 'Peace be upon you, excuse me, can I ask a question?',
      choices: [
        { id: 'c1a', ar: 'وعليكم السلام، تفضل.', en: 'And peace be upon you, go ahead.', next: 'c2' },
        { id: 'c1b', ar: 'أهلا، شو بدك؟', en: 'Hi, what do you need?', next: 'c2' },
      ],
    },
    c2: {
      speaker: 'A',
      ar: 'أنا أول مرة هون. في كافيه قريب؟',
      en: 'It’s my first time here. Is there a cafe nearby?',
      choices: [
        { id: 'c2a', ar: 'آه، في واحد قريب.', en: 'Yes, there’s one nearby.', next: 'c3' },
        { id: 'c2b', ar: 'في كافيه على الزاوية.', en: 'There’s a cafe on the corner.', next: 'c3' },
      ],
    },
    c3: {
      speaker: 'A',
      ar: 'يسلمو. بدك تيجي معي؟',
      en: 'Thanks. Want to go with me?',
      choices: [
        { id: 'c3a', ar: 'آه، يلا.', en: 'Yes, let’s go.', next: 'c4' },
        { id: 'c3b', ar: 'تمام، خلينا نروح.', en: 'Sure, let’s go.', next: 'c4' },
      ],
    },
    c4: {
      speaker: 'A',
      ar: 'بالمناسبة، أنا اسمي أحمد.',
      en: 'By the way, my name is Ahmed.',
      choices: [
        { id: 'c4a', ar: 'تشرفنا أحمد، أنا سارة.', en: 'Nice to meet you, Ahmed. I’m Sara.', next: 'c5' },
        { id: 'c4b', ar: 'أنا مارك، تشرفنا.', en: 'I’m Mark, nice to meet you.', next: 'c5' },
      ],
    },
    c5: {
      speaker: 'A',
      ar: 'كيفك اليوم؟',
      en: 'How are you today?',
      choices: [
        { id: 'c5a', ar: 'منيح الحمد لله، وإنت؟', en: 'I’m good, thank God. And you?', next: 'c6' },
        { id: 'c5b', ar: 'شوي تعبان، بس تمام.', en: 'A bit tired, but fine.', next: 'c6' },
      ],
    },
    c6: {
      speaker: 'A',
      ar: 'أنا كمان منيح. إنت من وين؟',
      en: 'I’m good too. Where are you from?',
      choices: [
        { id: 'c6a', ar: 'أنا من غزة.', en: 'I’m from Gaza.', next: 'c7' },
        { id: 'c6b', ar: 'أنا من مصر.', en: 'I’m from Egypt.', next: 'c7' },
      ],
    },
    c7: {
      speaker: 'A',
      ar: 'وأصلك من نفس المكان؟',
      en: 'And are you originally from the same place?',
      choices: [
        { id: 'c7a', ar: 'آه، من نفس المكان.', en: 'Yes, the same place.', next: 'c8' },
        { id: 'c7b', ar: 'لا، أصلي من نابلس.', en: 'No, I’m originally from Nablus.', next: 'c8' },
      ],
    },
    c8: {
      speaker: 'A',
      ar: 'ساكن وين هالأيام؟',
      en: 'Where do you live these days?',
      choices: [
        { id: 'c8a', ar: 'ساكن في رام الله.', en: 'I live in Ramallah.', next: 'c9' },
        { id: 'c8b', ar: 'ساكن في غزة.', en: 'I live in Gaza.', next: 'c9' },
      ],
    },
    c9: {
      speaker: 'A',
      ar: 'وصلنا. تفضل قعد هون.',
      en: 'We arrived. Please sit here.',
      choices: [
        { id: 'c9a', ar: 'يسلمو.', en: 'Thanks.', next: 'c10' },
        { id: 'c9b', ar: 'يعطيك العافية.', en: 'Thanks a lot.', next: 'c10' },
      ],
    },
    c10: {
      speaker: 'Barista',
      ar: 'أهلا، شو بتحبوا تشربوا؟',
      en: 'Hi, what would you like to drink?',
      choices: [
        { id: 'c10a', ar: 'قهوة سادة لو سمحت.', en: 'Plain coffee, please.', next: 'c11' },
        { id: 'c10b', ar: 'شاي نعنع، لو سمحت.', en: 'Mint tea, please.', next: 'c11' },
      ],
    },
    c11: {
      speaker: 'Barista',
      ar: 'بدكم سكر؟',
      en: 'Do you want sugar?',
      choices: [
        { id: 'c11a', ar: 'سكر قليل.', en: 'A little sugar.', next: 'c12' },
        { id: 'c11b', ar: 'بدون سكر.', en: 'No sugar.', next: 'c12' },
      ],
    },
    c12: {
      speaker: 'A',
      ar: 'أول مرة تقعد بهالكافيه؟',
      en: 'Is this your first time at this cafe?',
      choices: [
        { id: 'c12a', ar: 'آه، أول مرة.', en: 'Yes, first time.', next: 'c13' },
        { id: 'c12b', ar: 'لا، بجي كتير.', en: 'No, I come a lot.', next: 'c13' },
      ],
    },
    c13: {
      speaker: 'A',
      ar: 'شو رأيك بالمكان؟',
      en: 'What do you think of the place?',
      choices: [
        { id: 'c13a', ar: 'مرتب ورايق.', en: 'Neat and calm.', next: 'c14' },
        { id: 'c13b', ar: 'حلو بس زحمة.', en: 'Nice but crowded.', next: 'c14' },
      ],
    },
    c14: {
      speaker: 'A',
      ar: 'بتحكي عربي من زمان؟',
      en: 'Have you been speaking Arabic for long?',
      choices: [
        { id: 'c14a', ar: 'لا، أنا مبتدئ.', en: 'No, I’m a beginner.', next: 'c15' },
        { id: 'c14b', ar: 'شوي شوي بتعلم.', en: 'Little by little I’m learning.', next: 'c15' },
      ],
    },
    c15: {
      speaker: 'A',
      ar: 'القهوة وصلت. تفضل.',
      en: 'The coffee arrived. Here you go.',
      choices: [
        { id: 'c15a', ar: 'يسلمو كتير.', en: 'Thanks a lot.', next: 'c16' },
        { id: 'c15b', ar: 'شكرا.', en: 'Thanks.', next: 'c16' },
      ],
    },
    c16: {
      speaker: 'A',
      ar: 'شو بتعمل؟ طالب ولا شغل؟',
      en: 'What do you do? Student or work?',
      choices: [
        { id: 'c16a', ar: 'أنا طالب.', en: 'I’m a student.', next: 'c17' },
        { id: 'c16b', ar: 'أنا بشتغل.', en: 'I work.', next: 'c17' },
      ],
    },
    c17: {
      speaker: 'A',
      ar: 'تشرفنا. بنشوفك كمان مرة؟',
      en: 'Nice meeting you. Will we see you again?',
      choices: [
        { id: 'c17a', ar: 'أكيد، إن شاء الله.', en: 'Sure, God willing.', next: 'c18' },
        { id: 'c17b', ar: 'إن شاء الله.', en: 'God willing.', next: 'c18' },
      ],
    },
    c18: {
      speaker: 'A',
      ar: 'مع السلامة.',
      en: 'Goodbye.',
      choices: [],
    },

    // =====================
    // Scenario B: In Class (First Lesson)
    // =====================
    k1: {
      speaker: 'A',
      ar: 'مرحبا، هادا صف العربي؟',
      en: 'Hi, is this the Arabic class?',
      choices: [
        { id: 'k1a', ar: 'آه، هون.', en: 'Yes, here.', next: 'k2' },
        { id: 'k1b', ar: 'لا، غلطت.', en: 'No, you’re in the wrong place.', next: 'k1b' },
      ],
    },
    k1b: {
      speaker: 'A',
      ar: 'أوه، شكرا. مع السلامة.',
      en: 'Oh, thanks. Goodbye.',
      choices: [],
    },
    k2: {
      speaker: 'A',
      ar: 'أول مرة بالصف؟',
      en: 'First time in class?',
      choices: [
        { id: 'k2a', ar: 'آه، أول مرة.', en: 'Yes, first time.', next: 'k3' },
        { id: 'k2b', ar: 'لا، حضرت قبل.', en: 'No, I attended before.', next: 'k3' },
      ],
    },
    k3: {
      speaker: 'A',
      ar: 'أنا ليلى. إنت شو اسمك؟',
      en: 'I’m Layla. What’s your name?',
      choices: [
        { id: 'k3a', ar: 'أنا مارك، تشرفنا.', en: 'I’m Mark, nice to meet you.', next: 'k4' },
        { id: 'k3b', ar: 'أنا سارة، تشرفنا.', en: 'I’m Sara, nice to meet you.', next: 'k4' },
      ],
    },
    k4: {
      speaker: 'A',
      ar: 'كيفك اليوم؟',
      en: 'How are you today?',
      choices: [
        { id: 'k4a', ar: 'منيح الحمد لله.', en: 'Good, thank God.', next: 'k5' },
        { id: 'k4b', ar: 'متوتر/ة شوي.', en: 'A little nervous.', next: 'k5' },
      ],
    },
    k5: {
      speaker: 'A',
      ar: 'عادي، كلنا هيك بالبداية.',
      en: 'It’s normal, we all feel that at first.',
      choices: [
        { id: 'k5a', ar: 'إنت من وين؟', en: 'Where are you from?', next: 'k6' },
        { id: 'k5b', ar: 'بتحكي عربي قبل؟', en: 'Did you speak Arabic before?', next: 'k7' },
      ],
    },
    k6: {
      speaker: 'A',
      ar: 'أنا من مصر.',
      en: 'I’m from Egypt.',
      choices: [
        { id: 'k6a', ar: 'حلو كتير.', en: 'That’s great.', next: 'k7' },
      ],
    },
    k7: {
      speaker: 'A',
      ar: 'أنا بس كلمات بسيطة.',
      en: 'I only know a few words.',
      choices: [
        { id: 'k7a', ar: 'وأنا كمان.', en: 'Me too.', next: 'k8' },
      ],
    },
    k8: {
      speaker: 'A',
      ar: 'إن شاء الله نتعلم بسرعة.',
      en: 'Hopefully we learn fast.',
      choices: [
        { id: 'k8a', ar: 'يلا نبلّش.', en: 'Let’s start.', next: 'k9' },
        { id: 'k8b', ar: 'جاهز/ة.', en: 'Ready.', next: 'k9' },
      ],
    },
    k9: {
      speaker: 'A',
      ar: 'المعلمة إجت. يلا نبلّش.',
      en: 'The teacher arrived. Let’s start.',
      choices: [],
    },
  },
};
