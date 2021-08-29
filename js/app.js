//Rock paper scissors game
let playerScore = 0;
let compScore = 0; 
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*3+1);
    const choices = 
    randomChoice === 1 ? "r"
    : randomChoice === 2 ? "p"
    : "s";
    return choices;
}

function wordConverter(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(player, computer){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${wordConverter(player)} beats ${wordConverter(computer)}. You win! ${String.fromCodePoint(0x1F525)}`;
    document.getElementById(player).classList.add('green-glow');
    setTimeout(() => document.getElementById(player).classList.remove('green-glow'), 1000);
}

function lose(player, computer){
    compScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${wordConverter(player)} loses to ${wordConverter(computer)}. You lose!`;
    document.getElementById(player).classList.add('red-glow');
    setTimeout(() => document.getElementById(player).classList.remove('red-glow'), 1000);
}

function draw(player, computer){
    result_div.innerHTML = `${wordConverter(player)} equals ${wordConverter(computer)}. It's a tie!`;
    document.getElementById(player).classList.add('gray-glow');
    setTimeout(() => document.getElementById(player).classList.remove('gray-glow'), 1000);
}

function game(playerChoice){
    const computerChoice = getComputerChoice();
    //console.log("user choice - "+playerChoice);
    //console.log("computer choice - "+computerChoice);
    switch(playerChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();



/*
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
*/