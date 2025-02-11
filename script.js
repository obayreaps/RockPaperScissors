//Global Variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    const result = document.querySelector("#result-statement");
    const scores = document.querySelector("#scores");
    let resultText;

    // Update human choice image and prompt
    updateChoiceImage("human", humanChoice);
    updatePrompt("human", humanChoice);

    //Determine the outcome of match
    if(humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" || 
        humanChoice == "Scissors" && computerChoice == "Paper")
    {
        ++humanScore;
        resultText = `Human wins!`;
    } 
    else if (computerChoice == "Rock" && humanChoice == "Scissors" || 
        computerChoice == "Paper" && humanChoice == "Rock" ||
        computerChoice == "Scissors" && humanChoice == "Paper")
    {
        ++computerScore;
        resultText = `Computer wins!`;
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

//Update prompt for human and computer
function updatePrompt(who, choice)
{
    let parameter = `#${who}ChoicePrompt`; //Select correct parameter to update human or computer
    const prompt = document.querySelector(parameter);
    newWho = who[0].toUpperCase() + who.slice(1); //Capatilize the first char
    prompt.textContent = `${newWho} chooses ${choice}`;
}

//Update Human and Computer Choice Images
function updateChoiceImage(who, choice)
{
    let parameter = `#${who}ChoiceImg`; //Select correct parameter to update human or computer
    const newImg = document.querySelector(parameter);

    if(choice == "Rock")
        newImg.src = 'img/rock STICKER.gif';
    else if(choice == "Paper")
        newImg.src = 'img/Frustrated Loop Sticker by Jef Caine.gif';
    else if(choice == "Scissors") 
        newImg.src = 'img/Art Cutting Sticker by Kia Creates.gif';
}

//Generates a random and returns string
function getComputerChoice()
{
    let temp = Math.random();
    if(temp < 0.33)
    {
        updateChoiceImage("computer", "Rock");
        updatePrompt("computer", "Rock");
        return "Rock";
    }
    else if(temp >= 0.33 && temp < 0.66)
    {
        updateChoiceImage("computer", "Paper");
        updatePrompt("computer", "Rock");
        return "Paper";
    }
    else if(temp >= 0.66)
    {
        updateChoiceImage("computer", "Scissors");
        updatePrompt("computer", "Rock");
        return "Scissors";
    } 
}

function resetGame()
{
    const result = document.querySelector("#result-statement");
    const scores = document.querySelector("#scores");
    const humanImg = document.querySelector("#humanChoiceImg");
    const compImg = document.querySelector("#computerChoiceImg");
    const humanPrompt = document.querySelector("#humanChoicePrompt");
    const compPrompt = document.querySelector("#computerChoicePrompt");

    humanScore = 0;
    computerScore = 0;
    result.textContent = "Play a best-of-5 match against the computer!";
    scores.textContent = "🔵 0 - 🤖 0";
    humanImg.src = "";
    compImg.src = "";
    humanPrompt.textContent = "";
    compPrompt.textContent = "";
}

function playGame()
{
    //Resets the game if user clicks the reset button
    const reset = document.querySelector("#reset");
    reset.addEventListener("mousedown", ()=> {
        resetGame();
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



