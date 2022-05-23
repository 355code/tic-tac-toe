let TURN = '❌'
let WINS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

let GAMEOVER = false;

const board = document.createElement('div');

const boardStyles = {
    border: 'solid',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gap: '2px',
    height: 'fit-content',
    width: 'fit-content'
}

Object.keys(boardStyles).forEach((key) => {
    board.style[key] = boardStyles[key];
})

document.body.appendChild(board);

for (let i = 0; i < 9; i++) {

    const gridBox = document.createElement('div');
    const gridBoxStyles = {
        border: 'solid',
        height: '50px',
        width: '50px',
        textAlign: 'center'
    }
    gridBox.setAttribute('id', 'gridBox-' + i)
    Object.keys(gridBoxStyles).forEach((key) => {
        gridBox.style[key] = gridBoxStyles[key];
    })

    board.appendChild(gridBox)

    gridBox.addEventListener('click', () => {
        if (gridBox.children.length === 0 && !GAMEOVER) {
            const piece = document.createElement('p');
            piece.innerHTML = TURN;
            piece.style.fontSize = '20px';
            piece.style.margin = '10px';
            gridBox.appendChild(piece);
            (TURN === '❌') ? TURN = '⭕' : TURN = '❌';

        
                WINS.forEach((win) => {
                    let winningArray = [];
                    win.forEach((spot) => {
                        if (document.getElementById('gridBox-' + spot).children[0]) {
                            let pieceInSpot = document.getElementById('gridBox-' + spot).children[0].innerHTML;
                            winningArray.push(pieceInSpot);
                        }
                    })
                    if (winningArray.every(i => i === winningArray[0]) && winningArray.length === 3) {
                        const winMessage = document.createElement('p');
                        winMessage.innerHTML = "The "+ winningArray[0] +"'s win!"
                        document.body.append(winMessage)
                        console.log("The "+ winningArray[0] +"'s win!")
                        GAMEOVER = true;
                    }
                })
        }
    })
}