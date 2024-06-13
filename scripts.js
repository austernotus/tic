let playerTurn = 1;

const gameboard = (function (){
    const setGameboard = () => 
        ["","","",
         "","","",
         "","",""
        ];
    
    return {setGameboard};
})();

function newPlayer(name, mark){
    return {name, mark};
}

const playRound = function (){

    const placeMark = () => {
        if(playerTurn === 1){
            console.log(player1.mark);
            playerTurn = 2;
        } else{
            console.log(player2.mark);
            playerTurn = 1;
        }

    };
    
    return {placeMark};
}


const player1 = newPlayer("Player 1", "X")
const player2 = newPlayer("Player 2", "O")
const round = playRound();
