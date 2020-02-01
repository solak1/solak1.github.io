const myVar = setInterval(function() {
  myTimer();
  }, 1000);

function myTimer() {
	  var d = new Date();
	  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
	}

class Player {
	constructor(){
		this.name = ''
		this.currency = 100
		this.bet = 0
		this.preference = ''
	}
}

const player = new Player();

function highlightPref(player) {
	if (player.preference === 'h') {
		document.getElementById('higher').innerHTML = 'HIGHER';
		document.getElementById('lower').innerHTML = 'lower';
	} else if (player.preference === 'l') {
		document.getElementById('higher').innerHTML = 'higher';
		document.getElementById('lower').innerHTML = 'LOWER';
	}
}

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
	} else (player.bet = newBet);
}


function promptForPreference(player) {
	var newPreference = prompt('Bet on (h/l):')
	if (newPreference === 'l' || 'h') {
		player.preference = newPreference
		highlightPref(player)
	} else {
		promptForPreference(player)
	}
}

// this is not a tight function.  Change in the future to correct format

function handleRoll(player){
	// fix
	roll = Math.floor(Math.random() * Math.floor(6));
	console.log(roll)
	if (player.preference === 'h') {
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
	document.getElementById('currency').innerHTML = player.currency
}

function playWithPlayer(player) {
	if (player.currency > 0) {
		handleRoll(player)

	}
	
}

function betAmt(){
	promptForBetAmt(player);
}

function betPref() {
	promptForPreference(player);
	highlightPref(player);
}

function play() {
	playWithPlayer(player)
}


promptForName();
alert('Hello and Welcome to Casino Solak! We are currently under construction. We only have one game, Higher or Lower.  We are working on adding more!');
alert('Higher or Lower: The Casino will roll a 6 sided dice. You may place a bet on the lower values (1-3) by pressing L. Or you may place a bet on the higher values (4-6) by press H. Good Luck!')
alert('Play by Setting your bet amount, setting your preference(h/l), and hitting Play.')