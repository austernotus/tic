const boardDiv = document.getElementById("board");
let round;

const gameboard = (function (){
    let gameBoardArray;
    
    const resetGameboard = () =>{
        boardDiv.replaceChildren();
        gameBoardArray =
            ["","","",
            "","","",
            "","",""
            ];
        gameBoardArray.forEach((_,space) => {
            let newDiv = document.createElement("div");
            newDiv.className = "square";
            newDiv.addEventListener("click",() => round.placeMark(space));
            boardDiv.appendChild(newDiv);
        });
    };

    const getGameBoard = ()=> gameBoardArray;

    return {resetGameboard, getGameBoard};
})();

function newPlayer(name, mark){
    return {name, mark};
}

const playRound = function (){
    let playerTurn = 1;
    let hasWon = false
    let currentBoard = gameboard.getGameBoard()
    const isEmptySquare = (index) => currentBoard[index] === "";

    const changeBoardSpace = (index, mark) =>{
        currentBoard[index] = mark;
        boardDiv.children[index].textContent = mark;
        hasWon = checkWin();

    }
    const placeMark = (spotIndex) => {
        if(hasWon){
            return;
        }
        if(!isEmptySquare(spotIndex)){
            return;
        }

        if(playerTurn === 1){
            changeBoardSpace(spotIndex,player1.mark);
            playerTurn = 2;
            } else{
            changeBoardSpace(spotIndex,player2.mark);
            playerTurn = 1;
        }
    };
    const checkWin = () => {
        const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        return winConditions.some(condition => {
            const [a,b,c] = condition;
            if(currentBoard[a] &&
                currentBoard[a] === 
                currentBoard[b] &&
                currentBoard[b] ===
                currentBoard[c]
            ){
                alert(`Player ${playerTurn} wins!`)
                return true
            }
            return false;
        })
    }
    return{placeMark}
}

const player1 = newPlayer("Player 1", "X")
const player2 = newPlayer("Player 2", "O")

function restartGame(){
    gameboard.resetGameboard();
    round = playRound();
}

restartGame();