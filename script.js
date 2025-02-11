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
    scores.textContent = `🔵 ${humanScore} - 🤖 ${computerScore}`;

    if(humanScore == 5)
        alert(`Human wins! ${humanScore} - ${computerScore}`);
    else if(computerScore == 5)
        alert(`Computer wins! ${computerScore} - ${humanScore}`);
}

//Changes Computer Choice Image
function changeComputerImage(choice)
{
    let compImg = document.getElementById("computerChoiceImg");

    if(choice == "Rock")
        compImg.src = 'img/rock STICKER.gif';
    else if(choice == "Paper")
        compImg.src = 'img/Frustrated Loop Sticker by Jef Caine.gif';
    else if(choice == "Scissors") 
        compImg.src = 'img/Art Cutting Sticker by Kia Creates.gif';
}

//Generates a random and returns string
function getComputerChoice()
{
    let temp = Math.random();
    if(temp < 0.33)
    {
        changeComputerImage("Rock");
        return "Rock";
    }
    else if(temp >= 0.33 && temp < 0.66)
    {
        changeComputerImage("Paper");
        return "Paper";
    }
    else if(temp >= 0.66)
    {
        changeComputerImage("Scissors");
        return "Scissors";
    } 
}

function playGame()
{
    //Reset the game
    const reset = document.querySelector("#reset");
    const result = document.querySelector("#result-statement");
    const scores = document.querySelector("#scores");

    reset.addEventListener("mousedown", ()=> {
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

    rock.addEventListener("mousedown", () => {
        playRound("Rock", getComputerChoice());
    });

    paper.addEventListener("mousedown", () => {
        playRound("Paper", getComputerChoice());
    });

    scissor.addEventListener("mousedown", () => {
        playRound("Scissors", getComputerChoice());
    });
}

playGame();



