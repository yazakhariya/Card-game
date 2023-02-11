import { test, expect } from '@jest/globals';
import { showCards } from '../card-game';

test('показать нужное кол-во карт на странице при выборе уровня сложности', () => {
  expect(showCards(3)).toBe(6);
});
