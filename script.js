const playerFactory = (symbol) => {
    return symbol;
};


const game = (() => {

    // Model
    let gameboard = [
        null, null, null,
        null, null, null,
        null, null, null,
    ]

    let turn = 0;
    const playerX = playerFactory('X');
    const playerO = playerFactory('O');
    let playerXScore = 0;
    let playerOScore = 0;

    const render = () => {

        const board = document.getElementById('gameboard');
        board.innerHTML = '';

        // Use the model
        // Use a controller function to update the view (html)
        gameboard.forEach((gameboardCell, index) => {
            // Render Blank Cell
            const cell = document.createElement('div');
            // cell.innerHTML = '';
            cell.classList.add('cell');
            board.appendChild(cell);

            cell.addEventListener('click', () => {
                // Check if cell is null
                if (gameboard[index] == null) {
                    // allow players to take turns
                    const activePlayer = (turn % 2 == 0) ? playerX : playerO;
                    // mark x or o in a cell
                    cell.textContent = activePlayer;
                    turn++;

                    // winner result displayed
                    const result = document.getElementById('result');
                    if (checkWinner(gameboard) == true) {
                        // click disabled after winner is determined
                        // cell.click.disabled;
                        result.textContent = `${activePlayer} Wins!`;

                        // add to players scores
                        if (activePlayer == playerX) {
                            playerXScore++;
                            let displayX = document.getElementById('x')
                            displayX.textContent = `Player X: ${playerXScore}`;
                            // declares best of three
                            if (playerXScore > 2) {
                                result.textContent = "X Wins the game!";
                            }

                        } else if (activePlayer == playerO) {
                            playerOScore++;
                            let displayO = document.getElementById('o')
                            displayO.textContent = `Player O: ${playerOScore}`;
                            // declares best of three
                            if (playerOScore > 2) {
                                result.textContent = "O Wins the game!";

                            }
                        }
                    }
                     else if (turn > 8) {
                        // no winner is determined, tie game
                        result.textContent = "It's a tie!";
                        render();
                    }
                }

            });

        });


    };
    render();


    const checkWinner = (gb) => {

        if (gb[0] !== null && gb[0] == gb[3] && gb[3] == gb[6]) return true;
        else if (gb[1] != null && gb[1] == gb[4] && gb[4] == gb[7]) return true;
        else if (gb[2] != null && gb[2] == gb[5] && gb[5] == gb[8]) return true;
        else if (gb[0] != null && gb[0] == gb[1] && gb[1] == gb[2]) return true;
        else if (gb[3] != null && gb[3] == gb[4] && gb[4] == gb[5]) return true;
        else if (gb[6] != null && gb[6] == gb[7] && gb[7] == gb[8]) return true;
        else if (gb[0] != null && gb[0] == gb[4] && gb[4] == gb[8]) return true;
        else if (gb[2] != null && gb[2] == gb[4] && gb[4] == gb[6]) return true;

        else return false;
    };

    // reset page
    const newGameB = document.getElementById('newgame');
    newGameB.addEventListener('click', function () {
        document.location.reload();
    });
})();




