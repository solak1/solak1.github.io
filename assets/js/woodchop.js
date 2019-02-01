var wood = {
	name:"wood",
	amt:0,
	incr:1
},

player = {
	coins:0,
	axe: 'Hands'
},

store = {
	bronzeAxe: {
		price: 10
	},
	ironAxe: {
		price: 50
	},
	steelAxe: {
		price: 250
	},
	titaniumAxe: {
		price: 1000
	},
	diamondAxe: {
		price: 2500
	},
	treeFarm: {
		price: 10000
	}

}



/*
	Interative Functions
*/

/*	Chops Wood
*/
$('#chopWood').click(function(){
	wood.amt = wood.amt + wood.incr;
	updateWood()
})


/*	Sells Wood
*/
$('#sellWood').click(function(){
	if (wood.amt > 0) {
		wood.amt -= 1
		player.coins += 2
		updateWood()
		updateCoin()
	}
})

$('#sellWood5x').click(function(){
	if (wood.amt >= 5) {
		wood.amt -= 5
		player.coins += 10
		updateWood()
		updateCoin()
	}
})

$('#sellWood25x').click(function(){
	if (wood.amt >= 25) {
		wood.amt -= 25
		player.coins += 50
		updateWood()
		updateCoin()
	}
})

$('#sellWood100x').click(function(){
	if (wood.amt >= 100) {
		wood.amt -= 100
		player.coins += 200
		updateWood()
		updateCoin()
	}
})



/*	Functions For Buying Axes
*/
$('#buyBronzeAxe').click(function(){
	if (player.coins >= store.bronzeAxe.price) {
		player.coins -= store.bronzeAxe.price;
		player.axe = 'Bronze Axe';
		wood.incr = 2;
		updateCoin();
		updateAxe();
		document.getElementById("buyBronzeAxe").disabled = true;
	}
})

$('#buyIronAxe').click(function(){
	if (player.coins >= store.ironAxe.price) {
		player.coins -= store.ironAxe.price
		player.axe = 'Iron Axe'
		wood.incr = 3
		updateCoin()
		updateAxe()
		document.getElementById("buyIronAxe").disabled = true;
	}
})

$('#buySteelAxe').click(function(){
	if (player.coins >= store.steelAxe.price) {
		player.coins -= store.steelAxe.price
		player.axe = 'Steel Axe'
		wood.incr = 5
		updateCoin()
		updateAxe()
		document.getElementById("buySteelAxe").disabled = true;
	}
})

$('#buyTitaniumAxe').click(function(){
	if (player.coins >= store.titaniumAxe.price) {
		player.coins -= store.titaniumAxe.price
		player.axe = 'Titanium Axe'
		wood.incr = 25
		updateCoin()
		updateAxe()
		document.getElementById("buyTitaniumAxe").disabled = true;
	}
})

$('#buyDiamondAxe').click(function(){
	if (player.coins >= store.diamondAxe.price) {
		player.coins -= store.diamondAxe.price
		player.axe = 'Diamond Axe'
		wood.incr = 50
		updateCoin()
		updateAxe()
		document.getElementById("buyTitaniumAxe").disabled = true;
	}
})

$('#buyTreeFarm').click(function(){
	if (player.coins >= store.treeFarm.price) {
		player.coins -= store.treeFarm.price
		player.axe = 'Tree Farm'
		wood.incr = 99
		updateCoin()
		updateAxe()
		document.getElementById("buyTitaniumAxe").disabled = true;
	}
})





/*
	Update Functions
*/
function updateWood(){
	document.getElementById("woodAmt").innerHTML = wood.amt
}

function updateCoin(){
	document.getElementById('coinAmt').innerHTML = player.coins
}

function updateAxe(){
	document.getElementById('axeType').innerHTML = player.axe
}


updateWood()
updateCoin()
updateAxe()