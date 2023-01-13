document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const startButton = document.querySelector(".sheet___btn");
    const levelBoxes = document.querySelectorAll('.blocks__choice-box');
    const heading = document.querySelector('.sheet___heading');
    const gameSheet = document.createElement('div');
    gameSheet.classList.add('game-sheet');
    let chosenLevel;

    function choosingLevelBox (event) {
        chosenLevel = event.target.innerHTML;

        localStorage.setItem(".blocks__choice-box", chosenLevel);
    };
    

    levelBoxes.forEach(key => key.addEventListener('click', choosingLevelBox));

    function showingLevelPages(amount) {
        body.textContent = '';
        body.appendChild(gameSheet);
        const easyLevelSheet = document.createElement('p');
        easyLevelSheet.textContent = `Здесь ${amount} карточек`;
        gameSheet.appendChild(easyLevelSheet);
    }

    function errorMessage() {
        body.textContent = '';
        body.appendChild(gameSheet);
        const warning = document.createElement('p');
        warning.textContent = "Выберите уровень сложности";
        warning.classList.add('warning');
        gameSheet.appendChild(warning);
    }

    function gamePage() {
        
        if (!chosenLevel) {
            errorMessage();
        } else if (chosenLevel === '1') {
            showingLevelPages(6);
        } else if (chosenLevel === '2') {
            showingLevelPages(12);
        } else {
            showingLevelPages(18);
        } 

    }
   
    startButton.addEventListener('click', gamePage);
    
});