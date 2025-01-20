function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    function playRound(human, computer)
    {
        if(human == "Rock" && computer == "Scissors" ||
            human == "Paper" && computer == "Rock" || 
            human == "Scissors" && computer == "Paper")
        {
            humanScore++;
            alert(`Human wins! ${human} beats ${computer}`);
        } 
        else if (computer == "Rock" && human == "Scissors" || 
            computer == "Paper" && human == "Rock" ||
            computer == "Scissors" && human == "Paper")
        {
            computerScore++;
            alert(`Computer wins! ${computer} beats ${human}`);
        }
        else
            alert("Tie!")
        return;
    }

    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore)
        return `Human wins! ${humanScore} - ${computerScore}`;
    else if(humanScore < computerScore)
        return `Computer wins! ${computerScore} - ${humanScore}`;
    else
        return `Nobody wins! ${humanScore} - ${computerScore}`
}

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

function getHumanChoice()
{
    let choice = prompt("Pick one: Rock, Paper, Scissors");
    choice = choice.charAt(0).toUpperCase() + choice.substring(1).toLowerCase()

    if(choice == "Rock" || choice == "Paper" || choice == "Scissors")
        return choice;
    else    
        alert("Invalid");
}


// Start the game
alert(playGame());