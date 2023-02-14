import { Template } from './templateEngine';

//перемешивание
export function shuffleCards(array: Template[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    let randomIndex: number;
    randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = itemAtIndex;
  }
  return array;
}
