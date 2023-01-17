document.addEventListener('DOMContentLoaded', () => {
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
          
                levelBoxes.forEach(box=> box.classList.remove("chosen-level"))
          
                levelBoxes[i].classList.add("chosen-level");
            });
        }
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
        
        switch(chosenLevel) {
            case '1':
                showingLevelPages(6);
                break;
            case '2':
                showingLevelPages(12);
                break;
            case '3':
                showingLevelPages(18);
                break;
            default:
                errorMessage();
                break;
        }
    }
   
    startButton.addEventListener('click', gamePage);
    
});