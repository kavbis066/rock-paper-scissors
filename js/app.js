//Rock paper scissors game
let playerScore = 0;
let compScore = 0; 

let playGame = confirm("Let's play rock, paper, or scissors!");

function game(){
    
    function computerPlay(){
        let computerChoice = Math.floor(Math.random*3+1);
        let computer = 
        computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
        : "scissors";
        return computer;
    }

    for(let i=1; i<=5; i++){
        // Player Choice 
        let playerChoice = prompt("Do you choose rock, paper, scissors?");
        let playerSelection = playerChoice.trim().toLowerCase();

        alert("Player: "+playerSelection);

        // Computer Choice
        let computerSelection = computerPlay();
        alert("Computer: "+computerSelection);

        // Player Round
        var playerRound = function (pSelection, cSelection){
            if(pSelection === cSelection){
                return "It's a tie";
            } 
            if (pSelection === "rock") {
                if (cSelection === "scissors") {
                    // Player wins
                    playerScore++;
                    return "You win!";
                } else {
                    // Computer wins
                    compScore++;
                    return "You lose! Try again.";
                }
            }
            if (pSelection === "paper") {
                if (cSelection === "rock") {
                    // Player wins
                    playerScore++;
                    return "You win!";
                } else {
                    // Computer wins
                    compScore++;
                    return "You lose! Try again.";
                }
            }
            if (pSelection === "scissors") {
                if (cSelection === "rock") {
                    // Player wins
                    compScore++;
                    return "You lose! Try again.";
                } else {
                    // Computer wins
                    playerScore++;
                    return "You win!";
                }
            }
        };

        // Run the player round function
        let results = playerRound(playerSelection, computerSelection);
        // Display results
        console.log("Results: "+results);
    }

    console.log("Final results:\nPlayer Score - "+playerScore+"\nComputer Score - "+compScore);

}