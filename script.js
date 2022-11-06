
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
    let scoreX = 0;
    let scoreO = 0;
    let playerX = playerFactory('X');
    let playerO = playerFactory('O');


    // Closure to render the gameboard on init 
    let render = () => {
        let gameboardElement = document.getElementById("gameboardElement");
        gameboardElement.innerHTML = '';
        document.getElementById('xScore').textContent = scoreX;
        document.getElementById('oScore').textContent = scoreO;
        gameboard.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add("cellStyle")
            cellElement.textContent = gameboard[index];
            cellElement.addEventListener('click', () => {


                // determine active player
                // statement ? if true do this : else do this
                const activePlayer = (turn % 2 == 0) ? playerX : playerO;

                // check if a symbol is assigned already 
                if (gameboard[index] == null) {
                    // assign & render active player symbol
                    gameboard[index] = activePlayer.getSymbol();
                    render();
                    turn++;
                    // increment turn
                }

                // check if someone has won
                if (checkWin(gameboard)) {

                    if (activePlayer.getSymbol() == "X") {
                        scoreX++;
                    } else {
                        scoreO++;
                    }

                    console.log("End game");
                    // reset turns
                    turn = 0;
                    // reset gameboard
                    gameboard = [
                        null, null, null,
                        null, null, null,
                        null, null, null,
                    ]

                }
                // check if turns ran out
                else if (turn == 8) {
                    console.log("End game. Tie!");
                    // reset turns
                    turn = 0;
                    // reset gameboard
                    gameboard = [
                        null, null, null,
                        null, null, null,
                        null, null, null,
                    ]

                }

            })
            gameboardElement.appendChild(cellElement);
        })
    };

    /*
    0 1 2
    3 4 5
    6 7 8
    */

    const checkWin = (gb) => {
        // cols
        if (gb[0] != null && gb[0] == gb[3] && gb[3] == gb[6]) return true;
        else if (gb[1] != null && gb[1] == gb[4] && gb[4] == gb[7]) return true;
        else if (gb[2] != null && gb[2] == gb[5] && gb[5] == gb[8]) return true;
        else if (gb[0] != null && gb[0] == gb[1] && gb[1] == gb[2]) return true;
        else if (gb[3] != null && gb[3] == gb[4] && gb[4] == gb[5]) return true;
        else if (gb[6] != null && gb[6] == gb[7] && gb[7] == gb[8]) return true;
        else if (gb[0] != null && gb[0] == gb[4] && gb[4] == gb[8]) return true;
        else if (gb[2] != null && gb[2] == gb[4] && gb[4] == gb[6]) return true;

        else return false;
    };

    render();
})();



