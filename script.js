
// Worth keeping?
const displayController = (() => {
    console.log("Display controller");
})();


const playerFactory = (symbol) => {
    const getSymbol = () => { return symbol }
    return { getSymbol };
};

// Module
const game = (() => {
    let gameboard = [
        null, null, null,
        null, null, null,
        null, null, null,
    ]

    let turn = 0;


    let playerX = playerFactory('X');
    let playerO = playerFactory('O');

    // Module to render the gameboard on init
    let render = () => {
        let gameboardElement = document.getElementById("gameboardElement");
        gameboardElement.innerHTML = '';
        gameboard.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add("cellStyle")
            cellElement.textContent = gameboard[index];
            cellElement.addEventListener('click', () => {
                // determine active player
                // statement ? if true do this : else do this
                const activePlayer = (turn % 2 == 0) ? playerX : playerO;

                // assign & render active player symbol
                gameboard[index] = activePlayer.getSymbol();
                render();

                // increment turn
                turn++;
            })
            gameboardElement.appendChild(cellElement);
        })
    };
    render();
})();



