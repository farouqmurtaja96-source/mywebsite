import { LESSON_ID_FOOD_DRINK } from '../../core/constants.js';
import { makePlaceholderDialogue } from '../_placeholder.js';

export const dialogueId = 'BD::' + LESSON_ID_FOOD_DRINK;
export const dialogue = makePlaceholderDialogue({
  dialogueId,
  level: 'Beginner',
  unit: 'Food & Drink',
  title: 'Food & Drink - Decisions',
});
