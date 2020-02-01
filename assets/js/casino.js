var slider = document.getElementById("myRange");
var output = document.getElementById("bet");
var checkbox = document.getElementById("myCheck");
var dice = document.getElementById("dice");

const myVar = setInterval(function() {
  myTimer();
  }, 1000);

function myTimer() {
	  var d = new Date();
	  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
	}

class Player {
	constructor(){
		this.name = '';
		this.currency = 100;
		this.bet = 50;
		this.preference = '';
	}
}

const player = new Player();


function promptForName() {
	player.name = prompt('What is your name?');
	console.log(player.name);
	document.getElementById("name").innerHTML = player.name;
	document.getElementById("currency").innerHTML = player.currency;
	document.getElementById("bet").innerHTML = player.bet;

}

function promptForBetAmt(player) {
	makeBet(player);
	document.getElementById("bet").innerHTML = player.bet;
}

function makeBet(player) {
	var newBet = prompt(`How much would you like to bet? I must be less than or equal to ${player.currency}.`);

	parseInt(newBet);
	if (newBet > player.currency) {
		makeBet(player);
	} else {
		player.bet = newBet;
		output.innerHTML = newBet;
		slider.value= newBet;
		
	}
}


// this is not a tight function.  Change in the future to correct format

function handleRoll(player,slider){
	// fix
	roll = Math.floor(Math.random() * Math.floor(6));
	console.log(roll)
	// betting on higher
	// values will be from 0-5
	// thus higher = 3-5 and lower = 0-2
	if (checkbox.checked === false) {
		if (roll > 2) {
			player.currency = (+player.currency) + (+player.bet);
		} else {
			player.currency = (+player.currency) - (+player.bet);
		}
	} else {
		if (roll < 3) {
			player.currency = +player.currency + +player.bet;
		} else {
			player.currency = (+player.currency) - (+player.bet);
		}
	}
	// update currency
	document.getElementById('currency').innerHTML = player.currency;
	// update dice #
	dice.innerHTML = (roll+1);
	dice.style.transition = "all 1s";
	slider.max = String(player.currency);
	
}

// edge case when currency < previous bet amt
function newSliderMax(player, slider) {
	if (player.currency < player.bet) {
		player.bet = player.currency;
	}
	slider.max = String(player.currency);
}

function playWithPlayer(player) {
	if (player.currency > 0) {
		handleRoll(player,slider);

	}
	
}

function betAmt(){
	promptForBetAmt(player);
}

function betPref() {
	promptForPreference(player);
}

function play() {
	playWithPlayer(player)
}


promptForName();
alert('Hello and Welcome to Casino Solak! We are currently under construction. We only have one game, Higher or Lower.  We are working on adding more!');
alert('Higher or Lower: The Casino will roll a 6 sided dice. You may place a bet on the lower values (1-3) by pressing L. Or you may place a bet on the higher values (4-6) by press H. Good Luck!')
alert('Play by Setting your bet amount, setting your preference(h/l), and hitting Play.')

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	output.innerHTML = this.value;
	player.bet = this.value;
  }
  output.innerHTML = slider.value; // Display the default slider value

// update max value for slider
function updateSliderRange(player, slider) {
	slider.innerHTML = player.currency;
}


/*
player.currency = max
min="1" max="100" value="50"
*/