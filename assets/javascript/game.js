// import { pseudoRandomBytes } from "crypto";

var underscores =[];
var correct = 0;
var incorrect = 0;
var guessesLeft = 13;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";

let alphabet = [
			"cat","dog","run","house","keanu"
			];

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    for(var i =0 ; i<pyschicChoice.length;i++){
        underscores[i]= "_"
    }
    console.log(pyschicChoice);
    
}

let resetGame = () => {
    guessesLeft = 13;
	guessesSoFar = [];
	pyschic();
};

var alertWin = () => {
    alert("Congratulations I was thinking of " + pyschicChoice + ".");
    resetGame();
};

var alertLoss = () => {
    alert("That's incorrect, I was thinking " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
    resetGame();
};


pyschic();
document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();


    var wordhistor;

    for(var i=0;i<pyschicChoice.length;i++){
	if (userGuess === pyschicChoice[i]) {
        underscores[i]=userGuess
        wordhistor=underscores
        var finalAnswer = underscores.join("");
        if (finalAnswer == pyschicChoice) {
            alertWin();
        }
        
	} 
    }
	if (guessesSoFar.indexOf(userGuess)<0) {
		guessesSoFar.push(userGuess);
    }
    if(wordhistor!= underscores && guessesSoFar.indexOf(userGuess)>=0){
        guessesLeft--
    }

    var html = 
    "<p>Word to guess "+ underscores +"</p>" +
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Letters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		
	}

};
