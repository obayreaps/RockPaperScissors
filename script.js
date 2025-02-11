//Global Variables
let humanScore = 0;
let computerScore = 0;

function playRound(human, computer)
{
    const result = document.querySelector("#result-statement");
    const scores = document.querySelector("#scores");
    let resultText;

    if(human == "Rock" && computer == "Scissors" ||
        resultText == "Paper" && computer == "Rock" || 
        human == "Scissors" && computer == "Paper")
    {
        ++humanScore;
        resultText = `Human wins! ${human} beats ${computer}`;
    } 
    else if (computer == "Rock" && human == "Scissors" || 
        computer == "Paper" && human == "Rock" ||
        computer == "Scissors" && human == "Paper")
    {
        ++computerScore;
        resultText = `Computer wins! ${computer} beats ${human}`;
    }
    else
        resultText = `Tie`;

    result.textContent = resultText;
    scores.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if(humanScore == 5)
        alert(`Human wins! ${humanScore} - ${computerScore}`);
    else if(computerScore == 5)
        alert(`Computer wins! ${computerScore} - ${humanScore}`);
}

//Generates a random and returns string
function getComputerChoice()
{
    let temp = Math.random();
    if(temp < 0.33)
        return "Rock";
    else if(temp >= 0.33 && temp < 0.66)
        return "Paper";
    else if(temp >= 0.66)
        return "Scissors";
}

function playGame()
{
    //Reset the game
    const reset = document.querySelector("#reset");
    const result = document.querySelector("#result-statement");
    const scores = document.querySelector("#scores");

    reset.addEventListener("click", ()=> {
        humanScore = 0;
        computerScore = 0;
        result.textContent = "Game Reset";
        scores.textContent = "";
    });

    //Play actual game
    //const ensures the var itself always refers to same button obj
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");

    //Reset game function

    rock.addEventListener("click", () => {
        playRound("Rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("Paper", getComputerChoice());
    });

    scissor.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice());
    });
}

playGame();



