import { LESSON_ID_COMPLAINTS } from '../../core/constants.js';
import { makePlaceholderDialogue } from '../_placeholder.js';

export const dialogueId = 'BD::' + LESSON_ID_COMPLAINTS;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Intermediate',
  unit: 'Complaints',
  title: 'Complaints - Decisions',
});
