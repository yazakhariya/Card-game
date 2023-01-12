document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const startButton = document.querySelector(".sheet___btn");
    const levelBoxes = document.querySelectorAll('.blocks__choice-box');
    let chosenLevel;

    function choosingLevelBox (event) {
        chosenLevel = event.target.innerHTML;

        localStorage.setItem(".blocks__choice-box", chosenLevel);
    };
    

    levelBoxes.forEach(key => key.addEventListener('click', choosingLevelBox));

    function gamePage() {
        body.textContent = '';
        const gameSheet = document.createElement('div');
        gameSheet.classList.add('game-sheet');
        body.appendChild(gameSheet);

        if (!chosenLevel) {
            const warning = document.createElement('p');
            warning.textContent = "Выберите уровень сложности";
            warning.classList.add('warning');
            gameSheet.appendChild(warning);
        } else if (chosenLevel === '1') {
            const easyLevelSheet = document.createElement('p');
            easyLevelSheet.textContent = 'Здесь 6 карточек';
            gameSheet.appendChild(easyLevelSheet);
        } else if (chosenLevel === '2') {
            const easyLevelSheet = document.createElement('p');
            easyLevelSheet.textContent = 'Здесь 12 карточек';
            gameSheet.appendChild(easyLevelSheet);
        } else {
            const easyLevelSheet = document.createElement('p');
            easyLevelSheet.textContent = 'Здесь 18 карточек';
            gameSheet.appendChild(easyLevelSheet);
        } 

    }
   
    startButton.addEventListener('click', gamePage);
    
});