import { test, expect } from '@jest/globals';
import { showCards } from '../card-game';

test('нужное кол-во', () => {
  expect(showCards(3)).toBe(6);
});
