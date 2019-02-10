var wood = {
	name:"wood",
	amt:0,
	incr:1
},

Axe = {
  price :0, // Default value of properties
  img: "src",
  name: "name"
},

hand = Object.create(Axe), 

handsAxe = {
	price: 10,
	img: "hand.png",
	name: "Hand"
}


player = {
	coins:0,
	axe: handsAxe
},



store = {
	bronzeAxe: {
		price: 10,
		img: "bronze_axe.png",
		name: "Bronze Axe"
	},
	ironAxe: {
		price: 50,
		img: "iron_axe.png",
		name: "Iron Axe"
	},
	steelAxe: {
		price: 250,
		img: "steel_axe.png",
		name: "Steel Axe"
	},
	titaniumAxe: {
		price: 1000,
		img: "titanium_axe.png",
		name: "Titanium Axe"
	},
	diamondAxe: {
		price: 2500,
		img: "diamond_axe.png",
		name: "Diamond Axe"
	},
	fireAxe: {
		price: 10000,
		img: "fire_axe.gif",
		name: "Fire Axe"
	}

}



/*
	Interative Functions
*/

/*	Chops Wood
*/

$('#chopWood').click(function(){

    $('#axeImg').css({
        "-webkit-transform": "rotate(-20deg)",
        "-moz-transform": "rotate(-20deg)",
        "transform": "rotate(-20deg)" /* For modern browsers(CSS3)  */
    })


    window.setTimeout(function () {
    	$('#axeImg').css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "transform": "rotate(0deg)" /* For modern browsers(CSS3)  */
    })}, 50);

	wood.amt = wood.amt + wood.incr;
	updateWood();
	updateSellButtons();
})


/*	Sells Wood
*/
$('#sellWood').click(function(){
	if (wood.amt > 0) {
		wood.amt -= 1;
		player.coins += 2;
		updateWood();
		updateCoin();
		updateSellButtons();
		
	}
	updateBuyButtons();
})

$('#sellWood5x').click(function(){
	if (wood.amt >= 5) {
		wood.amt -= 5;
		player.coins += 10;
		updateWood();
		updateCoin();
		updateSellButtons();
		
	}
	updateBuyButtons();
})

$('#sellWood25x').click(function(){
	if (wood.amt >= 25) {
		wood.amt -= 25;
		player.coins += 50;
		updateWood();
		updateCoin();
		updateSellButtons();
		
	}
	updateBuyButtons();
})

$('#sellWood100x').click(function(){
	if (wood.amt >= 100) {
		wood.amt -= 100;
		player.coins += 200;
		updateWood();
		updateCoin();
		updateSellButtons();
	}
	updateBuyButtons();
})



/*	Functions For Buying Axes
*/
$('#buyBronzeAxe').click(function(){
	if (player.coins >= store.bronzeAxe.price) {
		player.coins -= store.bronzeAxe.price;
		player.axe.name = store.bronzeAxe.name;
		player.axe.img = store.bronzeAxe.img;
		wood.incr = 2;
		updateCoin();
		updateAxe();
		document.getElementById("buyBronzeAxe").disabled = true;
	}
	updateBuyButtons();
})

$('#buyIronAxe').click(function(){
	if (player.coins >= store.ironAxe.price) {
		player.coins -= store.ironAxe.price
		player.axe.name = store.ironAxe.name;
		player.axe.img = store.ironAxe.img;
		wood.incr = 3
		updateCoin()
		updateAxe()
		document.getElementById("buyIronAxe").disabled = true;
		updateBuyButtons();
	}
})

$('#buySteelAxe').click(function(){
	if (player.coins >= store.steelAxe.price) {
		player.coins -= store.steelAxe.price
		player.axe.name = store.steelAxe.name;
		player.axe.img = store.steelAxe.img;
		wood.incr = 5
		updateCoin()
		updateAxe()
		document.getElementById("buySteelAxe").disabled = true;
		updateBuyButtons();
	}
})

$('#buyTitaniumAxe').click(function(){
	if (player.coins >= store.titaniumAxe.price) {
		player.coins -= store.titaniumAxe.price
		player.axe.name = store.titaniumAxe.name;
		player.axe.img = store.titaniumAxe.img;		
		wood.incr = 25
		updateCoin()
		updateAxe()
		document.getElementById("buyTitaniumAxe").disabled = true;
		updateBuyButtons();
	}
})

$('#buyDiamondAxe').click(function(){
	if (player.coins >= store.diamondAxe.price) {
		player.coins -= store.diamondAxe.price
		player.axe.name = store.diamondAxe.name;
		player.axe.img = store.diamondAxe.img;
		wood.incr = 50
		updateCoin()
		updateAxe()
		document.getElementById("buyDiamondAxe").disabled = true;
		updateBuyButtons();

	}
})

$('#buyFireAxe').click(function(){
	if (player.coins >= store.fireAxe.price) {
		player.coins -= store.fireAxe.price
		player.axe.name = store.fireAxe.name;
		player.axe.img = store.fireAxe.img;
		wood.incr = 175
		updateCoin()
		updateAxe()
		document.getElementById("buyFireAxe").disabled = true;
		updateBuyButtons();
	}
})





/*
	Update Functions
*/
function updateWood(){
	document.getElementById("woodAmt").innerHTML = wood.amt
}

function updateSellButtons(){
	if (wood.amt >= 1) {
		$("#sellWood").css("background-color", "#afa");
	} else {
		$("#sellWood").css("background-color", "#fdd");
	}
	if (wood.amt >= 5) {
		$("#sellWood5x").css("background-color", "#afa");
	} else {
		$("#sellWood5x").css("background-color", "#fdd");
	}
	if (wood.amt >= 25) {
		$("#sellWood25x").css("background-color", "#afa");
	} else {
		$("#sellWood25x").css("background-color", "#fdd");
	}
	if (wood.amt >= 100) {
		$("#sellWood100x").css("background-color", "#afa");
	} else {
		$("#sellWood100x").css("background-color", "#fdd");
	}
}

function updateCoin(){
	document.getElementById('coinAmt').innerHTML = player.coins
}

function updateBuyButtons() {
	if (player.coins >= store.fireAxe.price) {
		$('.buyButton').css("background-color", '#afa');
		console.log("All buy buttons available.");
	} else if (player.coins >= store.diamondAxe.price) {
		$('#buyButton').css("background-color", '#afa');
		$('#buyFireAxe').css("background-color", '#fdd');
	} else if (player.coins >= store.titaniumAxe.price) {
		$('#buyButton').css("background-color", '#afa');
		$('#buyFireAxe').css("background-color", '#fdd');
		$('#buyDiamondAxe').css("background-color", '#fdd');
	} else if (player.coins >= store.steelAxe.price) {
		$('#buyButton').css("background-color", '#fdd');
		$('#buySteelAxe').css("background-color", '#afa');
		$('#buyIronAxe').css("background-color", '#afa');
		$('buyBronzeAxe').css("background-color", '#afa');
	} else if (player.coins >= store.ironAxe.price) {
		$('#buyButton').css("background-color", '#fdd');
		$('#buyIronAxe').css("background-color", '#afa');
		$('#buyBronzeAxe').css("background-color", '#afa');
	} else if (player.coins >= store.bronzeAxe.price) {
		$('#buyButton').css("background-color", '#fdd');
		$('#buyBronzeAxe').css("background-color", '#afa');
	} else {
		$('#buyButton').css("background-color", '#fdd');
	}

}

function updateAxe(){
	$('#axeType').text(player.axe.name);
	$("#axeImg").attr("src","/assets/img/woodchop/" + player.axe.img);

}

updateBuyButtons();
updateWood();
updateCoin();
updateAxe();