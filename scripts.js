const boardDiv = document.getElementById("board");
let playerTurn = 1;

const gameboard = (function (){
    let gameBoardArray;
    
    const setGameboard = () =>{
        gameBoardArray =
            ["","","",
            "","","",
            "","",""
            ];
        gameBoardArray.forEach((_,space) => {
            let newDiv = document.createElement("div");
            newDiv.className = "square" 
            //newDiv.style.width = "100px";
            //newDiv.style.height = "100px";

            newDiv.addEventListener("click",() => round.placeMark(space));
            boardDiv.appendChild(newDiv);
        });
    };
    const isEmptySquare = (index) => {
        if (gameBoardArray[index] === ("")){
            console.log(`empty string at index ${index}`)
            return true;
        }
        else{
            return false;
        }
    }

    const changeBoardSpace = (index, mark) =>{
        gameBoardArray[index] = mark;
        console.log(gameBoardArray);

    }

    return {setGameboard, changeBoardSpace, isEmptySquare};
})();

function newPlayer(name, mark){
    return {name, mark};
}

const playRound = function (){

    const placeMark = (spotIndex) => {
        if(!gameboard.isEmptySquare(spotIndex)){
            return;
        }

        if(playerTurn === 1){
            gameboard.changeBoardSpace(spotIndex,player1.mark);
            playerTurn = 2;
            } else{
            gameboard.changeBoardSpace(spotIndex,player2.mark);
            playerTurn = 1;
        }
    };
    return {placeMark};
}

const player1 = newPlayer("Player 1", "X")
const player2 = newPlayer("Player 2", "O")
const round = playRound();

gameboard.setGameboard();