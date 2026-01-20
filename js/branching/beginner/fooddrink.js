import { LESSON_ID_FOOD_DRINK } from '../../core/constants.js';


function makePlaceholderDialogue({ dialogueId, level, unit, title }) {
  return {
    meta: { level, unit, title: title || (unit + ' - Decisions') },
    startNodeId: 'n1',
    nodes: {
      n1: {
        speaker: 'System',
        ar: 'هالمحادثة لسه مش جاهزة. قريباً إن شاء الله ✅',
        en: 'This branching dialogue is not ready yet. Coming soon ✅',
        choices: [],
      },
    },
  };
}


export const dialogueId = 'BD::' + LESSON_ID_FOOD_DRINK;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Beginner',
  unit: 'Food & Drink',
  title: 'Food & Drink - Decisions',
});
