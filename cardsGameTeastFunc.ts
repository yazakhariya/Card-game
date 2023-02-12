import { Template } from './templateEngine';

// eslint-disable-next-line no-unused-vars
let cardsToWin = 0;
let unflippedCardOne: Template, unflippedCardTwo: Template;
// eslint-disable-next-line no-unused-vars
let flippedCardsArray: Array<string> = [];

export function compareCards(array: Template[]) {
    if (array.length === 2) {
      unflippedCardOne = array[0];
      unflippedCardTwo = array[1];
  
      if (unflippedCardOne === unflippedCardTwo) {
        flippedCardsArray = [];
        cardsToWin += 2;
      }
    }
    return array;
  }
