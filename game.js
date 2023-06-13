var wins = 0;
var losses = 0;
var ties = 0;

// Pseudo-code

//human player
var choices = ["R","P","S"] 

//computer player
var playAgain = true

while (playAgain) {
    var choice = {
        human: prompt("Type R, P, or S"),
        computer: choices[ Math.floor(Math.random() * 3)],
        }
    
    console.log("Human: " + choice.human)
    console.log("Computer: " + choice.computer)
    
    if (choice.human === "S" && choice.computer === "P" ||
        choice.human === "R" && choice.computer === "S" ||
        choice.human === "P" && choice.computer === "R" )
        {
            alert("You Won!")
            wins++
    }
    
    else if (choice.human === choice.computer) {
        alert("Round Tied!")
        ties++
    } else {
        alert("You lost!")
        losses++
    }
    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
    playAgain = confirm("Want to play again?")
}
// var result = [win]


//human choose R,P,S

    //get choice from user input
    //computer chooses R,P,S randomly

//compare choices
    //if humanChoice is S and computerChoice is P OR
// var result = 
//     choice.human === "S" && choice.computer === "P" ||
//     choice.human === "R" && choice.computer === "S" ||
//     choice.human === "P" && choice.computer === "R"  ? "Congrats, you win! Play Again?" wins++
//     :choice.human === choice.computer ? "It's a tie. Let's play again" ties++
//     : "You Lost..." losses++; alert(result)


//score

