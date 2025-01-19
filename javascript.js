// console.log("Hello World");

//Computer Choice
function getComputerChoice()
{
    let temp = Math.random();
    if(temp < 0.33)
        console.log("Rock");
    else if(temp >= 0.33 && temp < 0.66)
        console.log("Paper");
    else if(temp >= 0.66)
        console.log("Scissors");
}

getComputerChoice();