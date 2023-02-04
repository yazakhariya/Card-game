import { cards } from './cards-data';
import { templateEngine } from './templateEngine';
import './card-game.css';
import * as _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const startButton = document.querySelector('.sheet___btn');
  const levelBoxes = document.querySelectorAll('.blocks__choice-box');
  const gameSheet = document.createElement('div');
  gameSheet.classList.add('game-sheet');
  let chosenLevel: string;
  let timerResult: number|string;
  const timerDigits = document.createElement('div');
  const generalDivForWrapperAndAllCardsContainer =
    document.createElement('div');

  function choosingLevelBox(event: { target: { innerHTML: string; classList: { add: (arg0: string) => void; }; }; }) {
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
  
  levelBoxes.forEach((key) => key.addEventListener<keyof ElementEventMap>('click', choosingLevelBox));

  function generatingCardsEngine() {
    body.innerHTML = '';

    generalDivForWrapperAndAllCardsContainer.classList.add(
      'generalContainerForTheGame'
    );
    body.appendChild(generalDivForWrapperAndAllCardsContainer);

    const wrapper = document.createElement('section');
    wrapper.classList.add('timer_btn-wrapper');
    generalDivForWrapperAndAllCardsContainer.appendChild(wrapper);

    // внешний вид таймера
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

    let minDigit = '00';
    let secDigit = '00';
    timerResult = `${minDigit}.${secDigit}`;
    timerDigits.classList.add('timer');
    timer.appendChild(timerDigits);
    timerDigits.innerHTML = timerResult;

    wrapper.appendChild(timer);

    // button 'start again'
    const startNewGameButton = document.createElement('button');
    startNewGameButton.classList.add('startNewGameButton');
    startNewGameButton.innerHTML = 'Начать заново';
    wrapper.appendChild(startNewGameButton);
    startNewGameButton.addEventListener('click', () => {
      (generalDivForWrapperAndAllCardsContainer.innerHTML = ''), gamePage();
    });
  }

  //перемешивание

  function shuffleCards(array: string|any[]) {
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

  function showCards(amount: number|undefined) {
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
      if (unflippedCardOne !== unflippedCardTwo) {
        setTimeout(() => {
          loosePage();
        }, 1500);
      } else if (cardsToWin === amount * 2) {
        winPage();
      }
    }

    const everyCard = document.querySelectorAll('.card__item-back');
    let flippedCardsArray: any[] = [];

    function flippingCards(event: { target: any; }) {
      let card = event.target;
      flippedCardsArray.push(card);

      card.style.transform = 'rotatey(180deg)';
      card.style.transitionDuration = '1.5s';

      compareCards(flippedCardsArray);
      winLosePage();
    }

    let unflippedCardOne: any, unflippedCardTwo: any;

    function compareCards(array: string|any[]) {
      if (array.length === 2) {
        unflippedCardOne = array[0].attributes[3].value;
        unflippedCardTwo = array[1].attributes[3].value;

        if (unflippedCardOne === unflippedCardTwo) {
          flippedCardsArray = [];
          cardsToWin += 2;
        }
      }
    }

    everyCard.forEach((elem) => elem.addEventListener('click', flippingCards));

    //функция отсчета времени
    let seconds = 0;
    let minutes = 0;
    let seconds_string = '';
    let minutes_string = '';
    let timeInterval: string | number | NodeJS.Timeout | undefined;

    function startTimer(seconds: number, minutes: number) {
      timeInterval = setInterval(() => {
        seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
        seconds_string = seconds > 9 ? `${seconds}` : `0${seconds}`;
        minutes_string = minutes > 9 ? `${minutes}` : `0${minutes}`;
        timerDigits.innerHTML = `${minutes_string}.${seconds_string}`;
        if (cardsToWin === amount * 2) {
          clearInterval(timeInterval);
        } else if (unflippedCardOne !== unflippedCardTwo) {
          clearInterval(timeInterval);
        }
      }, 1000);
    }
    startTimer(seconds, minutes);

    //выигрыш

    function winPage() {
      const generalSheet = document.createElement('div');
      generalSheet.classList.add('background-for-result');
      const resultSheet = document.createElement('div');
      resultSheet.classList.add('result-sheet');

      const image = document.createElement('img');
      image.classList.add('img');
      image.src = './img/win.png';
      resultSheet.appendChild(image);

      const heading = document.createElement('h1');
      heading.classList.add('heading');
      heading.textContent = 'Вы выиграли!!';
      resultSheet.appendChild(heading);

      const note = document.createElement('p');
      note.classList.add('note');
      note.textContent = 'Затраченное время:';
      resultSheet.appendChild(note);

      const timeResult = document.createElement('div');
      timeResult.classList.add('timeResult');
      timeResult.innerHTML = `${minutes_string}.${seconds_string}`;
      resultSheet.appendChild(timeResult);

      const startNewGameButton = document.createElement('button');
      startNewGameButton.classList.add('startNewGameButton');
      startNewGameButton.innerHTML = 'Играть снова';
      startNewGameButton.addEventListener('click', () => {
        (generalDivForWrapperAndAllCardsContainer.innerHTML = ''), gamePage();
      });
      resultSheet.appendChild(startNewGameButton);

      body.appendChild(generalSheet);
      body.appendChild(resultSheet);
    }

    //проигрыш

    function loosePage() {
      const generalSheet = document.createElement('div');
      generalSheet.classList.add('background-for-result');
      const resultSheet = document.createElement('div');
      resultSheet.classList.add('result-sheet');

      const image = document.createElement('img');
      image.classList.add('img');
      image.src = './img/lose.png';
      resultSheet.appendChild(image);

      const heading = document.createElement('h1');
      heading.classList.add('heading');
      heading.textContent = 'Вы проиграли!';
      resultSheet.appendChild(heading);

      const note = document.createElement('p');
      note.classList.add('note');
      note.textContent = 'Затраченное время:';
      resultSheet.appendChild(note);

      const timeResult = document.createElement('div');
      timeResult.classList.add('timeResult');
      timeResult.innerHTML = `${minutes_string}.${seconds_string}`;
      resultSheet.appendChild(timeResult);

      const startNewGameButton = document.createElement('button');
      startNewGameButton.classList.add('startNewGameButton');
      startNewGameButton.innerHTML = 'Играть снова';
      startNewGameButton.addEventListener('click', () => {
        (generalDivForWrapperAndAllCardsContainer.innerHTML = ''), gamePage();
      });
      resultSheet.appendChild(startNewGameButton);

      body.appendChild(generalSheet);
      body.appendChild(resultSheet);
    }
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


