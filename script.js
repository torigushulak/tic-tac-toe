
// Worth keeping?
const displayController = (() => {
    console.log("Display controller");
})();

// Module
const gameboardObject = (() => {
    let gameboard = [
        null, null, null, 
        null, null, null, 
        null, null, null,
    ]

    // Module to render the gameboard on init
    let render = () => {
        let gameboardElement = document.getElementById("gameboardElement");
        gameboardElement.innerHTML = '';
        gameboard.forEach( (cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add("cellStyle")
            cellElement.textContent = gameboard[index];
            cellElement.addEventListener('click', () => {
                // gameboard[index] = activePlayer.symbol;
                gameboard[index] = 2;
                render();
            })
            gameboardElement.appendChild(cellElement);
        })
    };

    render();




    console.log("Gameboard");
})();


const playerFactory = () => {

};