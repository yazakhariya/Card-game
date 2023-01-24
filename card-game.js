document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/6C.svg", 
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/6D.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/6H.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/6S.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/7C.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/7D.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/7H.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/7S.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/8C.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/8D.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/8H.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/8S.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/9C.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/9D.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/9H.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/9S.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/TC.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/TD.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/TH.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/TS.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/JC.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/JD.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/JH.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/JS.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/QC.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/QD.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/QH.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/QS.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/KC.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/KD.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/KH.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/KS.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/AC.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/AD.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/AH.svg",
        "file:///C:/Users/%D0%AF%D0%BD%D0%B0/Desktop/web-developer/HW/Level%204/0001/hw2.0/img/AS.svg"
        
    ];

    const body = document.body;
    const startButton = document.querySelector(".sheet___btn");
    const levelBoxes = document.querySelectorAll('.blocks__choice-box');
    const gameSheet = document.createElement('div');
    gameSheet.classList.add('game-sheet');
    let chosenLevel;
    
  

    function choosingLevelBox (event) {
        chosenLevel = event.target.innerHTML;
        event.target.classList.add('chosen-level');
        localStorage.setItem(".blocks__choice-box", chosenLevel);
        
        for (let i = 0; i < levelBoxes.length; i++) {
            levelBoxes[i].addEventListener("click", function () {
          
                levelBoxes.forEach(box=> box.classList.remove("chosen-level"));
          
                levelBoxes[i].classList.add("chosen-level");
            });
        }
    };
    
    levelBoxes.forEach(key => key.addEventListener('click', choosingLevelBox));

    ////

    function generatingCardsEngine(amount) {
        body.innerHTML = '';
        const generalDivForWrapperAndAllCardsContainer = document.createElement('div');
        generalDivForWrapperAndAllCardsContainer.classList.add('generalContainerForTheGame');
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

            
        const allCardsContainer = document.createElement('section');
        allCardsContainer.classList.add('cards-sheet');
        generalDivForWrapperAndAllCardsContainer.appendChild(allCardsContainer);


        for (let i = 0; i < amount; i++) {   
            showImage();
        }

        function showImage() {
            //cards
            const a = Math.floor(Math.random() * cardData.length);
            const img = cardData[a];
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card-div');
            allCardsContainer.appendChild(cardDiv);
            cardDiv.innerHTML = "<img src='" + img + "' alt='image' class='front-side'>";
            const backCardImage = document.createElement('img');
            backCardImage.classList.add('back-side');
            cardDiv.appendChild(backCardImage);
        }   
     
    };

    

    //////

    function errorMessage() {
        body.textContent = '';
        body.appendChild(gameSheet);
        const warning = document.createElement('p');
        warning.textContent = "Выберите уровень сложности";
        warning.classList.add('warning');
        gameSheet.appendChild(warning);
    }

    function gamePage() {
        
        switch(chosenLevel) {
            case '1':
                generatingCardsEngine(6);
                break;
            case '2':
                generatingCardsEngine(12);
                break;
            case '3':
                generatingCardsEngine(18);
                break;
            default:
                errorMessage();
                break;
        }
    }
   
    startButton.addEventListener('click', gamePage);
    
});