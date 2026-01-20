import { LESSON_ID_FAMILY } from '../../core/constants.js';
import { makePlaceholderDialogue } from '../_placeholder.js';

export const dialogueId = 'BD::' + LESSON_ID_FAMILY;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Beginner',
  unit: 'Family',
  title: 'Family - Decisions',
});
