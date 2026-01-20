import { LESSON_ID_WORK_STUDY } from '../../core/constants.js';


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


export const dialogueId = 'BD::' + LESSON_ID_WORK_STUDY;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Pre-Intermediate',
  unit: 'Work & Study',
  title: 'Work & Study - Decisions',
});
