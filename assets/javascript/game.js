var theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];
var compChoice; //declared only

compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
console.log("The computer has chosen the letter: " + compChoice);

document.onkeyup = function(event) 
{
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess);

if (event.keyCode >= 65 && event.keyCode <= 90) {
soFar.push(userGuess);
document.getElementById("soFar").innerHTML = soFar.join(", ");
}


if (event.keyCode >= 65 && event.keyCode <= 90) 
{ 
if (userGuess == compChoice) 
{
wins++;
guessesLeft--;
soFar = [];
guessesLeft = 10;
document.getElementById("soFar").innerHTML = soFar.join(", ");
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

alert("You ARE a psychic! How did you know I was thinking of the letter '" + userGuess + "' ?");
alert("Do you want to try again?");

compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
console.log("The computer has chosen the letter: " + compChoice);	

} 
else { //If user guesses wrong, increase the losses count, and decrease number of guessesLeft.
losses++;
guessesLeft--;

document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
}
} 
else 
{ 

alert("Please be sure to select a letter from the Alphabet (from a to z)");
}

if (guessesLeft == 0) 
{
guessesLeft = 10;
soFar = [];

document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("soFar").innerHTML = soFar.join(", ");

alert("GAME OVER")
alert("OH NO! Looks like you ran out of guesses. Do you want to try again?")
compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
console.log("The computer has chosen the letter: " + compChoice);
}	
}
