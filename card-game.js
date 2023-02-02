import {cards} from './cards-data.js';
import {templateEngine} from './templateEngine';
import './card-game.css';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const startButton = document.querySelector('.sheet___btn');
  const levelBoxes = document.querySelectorAll('.blocks__choice-box');
  const gameSheet = document.createElement('div');
  gameSheet.classList.add('game-sheet');
  let chosenLevel;
  const generalDivForWrapperAndAllCardsContainer =
    document.createElement('div');

  function choosingLevelBox(event) {
    chosenLevel = event.target.innerHTML;
    event.target.classList.add('chosen-level');
    localStorage.setItem('.blocks__choice-box', chosenLevel);

    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].addEventListener('click', function () {
        levelBoxes.forEach((box) => box.classList.remove('chosen-level'));

        levelBoxes[i].classList.add('chosen-level');
      });
    }
  }

  levelBoxes.forEach((key) => key.addEventListener('click', choosingLevelBox));

  function generatingCardsEngine() {
    body.innerHTML = '';

    generalDivForWrapperAndAllCardsContainer.classList.add(
      'generalContainerForTheGame'
    );
    body.appendChild(generalDivForWrapperAndAllCardsContainer);

    const wrapper = document.createElement('section');
    wrapper.classList.add('timer_btn-wrapper');
    generalDivForWrapperAndAllCardsContainer.appendChild(wrapper);

    // timer
    const timer = document.createElement('div');
    const timerMinSec = document.createElement('div');
    timerMinSec.classList.add('timerMinSec');
    const min = document.createElement('div');
    const sec = document.createElement('div');
    min.innerHTML = 'min';
    sec.innerHTML = 'sec';
    min.classList.add('timers-names');
    sec.classList.add('timers-names');
    timerMinSec.prepend(min);
    timerMinSec.prepend(sec);
    timer.appendChild(timerMinSec);

    const timerDigits = document.createElement('div');
    timerDigits.classList.add('timer');
    timerDigits.innerHTML = '00.00';
    timer.appendChild(timerDigits);

    wrapper.appendChild(timer);

    // button 'start again'
    const startNewGameButton = document.createElement('button');
    startNewGameButton.classList.add('startNewGameButton');
    startNewGameButton.innerHTML = 'Начать заново';
    wrapper.appendChild(startNewGameButton);
  }

  //перемешивание

  function shuffleCards(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }
    return array;
  }

  function showingAndHidingCards() {
    setTimeout(() => {
      const backCardSide = document.querySelectorAll('.card__item-back');
      backCardSide.forEach((card) => {
        card.classList.remove('card__item_hidden');
      });
    }, 5000);
  }

  //функция генерирования карт

  function showCards(amount) {
    const allCardsContainer = document.createElement('section');
    if (amount === 3) {
      allCardsContainer.classList.add('cards-sheet');
    } else if (amount === 6) {
      allCardsContainer.classList.add('cards-sheet_medium');
    } else {
      allCardsContainer.classList.add('cards-sheet_hard');
    }

    generalDivForWrapperAndAllCardsContainer.appendChild(allCardsContainer);

    showingAndHidingCards();

    let originalCardsRow = cards;
    let copiedCardsRow = shuffleCards(originalCardsRow);
    copiedCardsRow = copiedCardsRow.slice(0, amount);
    copiedCardsRow.push(...copiedCardsRow);
    copiedCardsRow = shuffleCards(copiedCardsRow);

    allCardsContainer.appendChild(templateEngine(copiedCardsRow));

    //основная логика игры
    let cardsToWin = 0;

    function winLosePage() {
      if (cardsToWin === amount * 2) {
        alert('Вы победили!');
      } else {
        console.log('con');
      }
    }

    const everyCard = document.querySelectorAll('.card__item-back');
    let flippedCardsArray = [];

    function flippingCards(event) {
      let card = event.target;
      flippedCardsArray.push(card);

      card.style.transform = 'rotatey(180deg)';
      card.style.transitionDuration = '1.5s';

      compareCards(flippedCardsArray);
      winLosePage();
    }

    function compareCards(array) {
      if (array.length === 2) {
        const unflippedCardOne = array[0].attributes[3].value;
        const unflippedCardTwo = array[1].attributes[3].value;

        if (unflippedCardOne !== unflippedCardTwo) {
          setTimeout(() => {
            array.forEach((element) => element.removeAttribute('style'));
            flippedCardsArray = [];
            cardsToWin = 0;
          }, 1000);
        } else {
          flippedCardsArray = [];
          cardsToWin += 2;
        }
      }
    }

    everyCard.forEach((elem) => elem.addEventListener('click', flippingCards));
  }

  function errorMessage() {
    body.textContent = '';
    body.appendChild(gameSheet);
    const warning = document.createElement('p');
    warning.textContent = 'Выберите уровень сложности';
    warning.classList.add('warning');
    gameSheet.appendChild(warning);
  }

  function gamePage() {
    switch (chosenLevel) {
      case '1':
        generatingCardsEngine();
        showCards(3);
        break;
      case '2':
        generatingCardsEngine();
        showCards(6);
        break;
      case '3':
        generatingCardsEngine();
        showCards(9);
        break;
      default:
        errorMessage();
        break;
    }
  }

  startButton.addEventListener('click', gamePage);
});
