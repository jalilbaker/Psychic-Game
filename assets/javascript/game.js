// global variables
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var lose = 0;
var guessleft = 9;
Lettersguessed = [];
// The computer needs to pick a letter to guess
var computerLetter = Letters[Math.floor(Math.random()*Letters.length)];

// user input
document.onkeyup = function() {
	var userGuess = document.onkeyup().toLowercase
}
if (computerLetter === userGuess)
	wins++;
	guessleft--;