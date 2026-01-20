import { LESSON_ID_GREETING } from '../../core/constants.js';
import { makePlaceholderDialogue } from '../_placeholder.js';

export const dialogueId = 'BD::' + LESSON_ID_GREETING;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Beginner',
  unit: 'Greetings',
  title: 'Greetings - Decisions',
});
