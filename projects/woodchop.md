---
layout: wrapper
title: WoodChop
description: Cut wood, upgrade axes, and increase your gold!
permalink: projects/woodchop/
---


<link rel="stylesheet" type="text/css" href="{{ site.url }}/assets/css/woodchop.css">

<main>
	<div class="section">
		<h3>Wood Chop</h3>
		<p><b>Current Axe:</b> <span id="axeType"></span></p>
		<a class="more round" id="chopWood">
			<img id="axeImg" src="{{site.url}}/assets/img/woodchop/hand.png">
			<p>Chop</p>
		</a>
		<p><b>Amount of Wood:</b> <span id="woodAmt">0</span></p>
	</div>
	<div class="section">
		<h3>Store</h3>
		<p><b>Coins available: </b><span id="coinAmt">0</span></p>
		<button class ="sellButton" id="sellWood">
			Sell: 1 Wood
		</button>
		<button class ="sellButton" id="sellWood5x">
			Sell: 5 Wood
		</button>
		<button class ="sellButton" id="sellWood25x">
			Sell: 25 Wood
		</button>
		<button class ="sellButton" id="sellWood100x">
			Sell: 100 Wood
		</button>
		<button class ="sellButton" id="sellWood1000x">
			Sell: 1000 Wood
		</button>
		<p>Axes For Sale:</p>
		<button class ="buyButton" id="buyBronzeAxe">
			Bronze Axe (-50 coins, +2 wood per chop)
		</button>
		<button class ="buyButton" id="buyIronAxe">
			Iron Axe (-250 coins, +3 wood per chop)
		</button>
		<button class ="buyButton" id="buySteelAxe">
			Steel Axe (-500 coins, +5 wood per chop)
		</button>
		<br>
		<button class ="buyButton" id="buyTitaniumAxe">Titanium Axe (-2,000 coins, +25 wood per chop)</button>
		<button class ="buyButton" id="buyDiamondAxe">Diamond Axe (-10,000 coins, +50 wood per chop)</button>
		<br>
		<button class ="buyButton" id="buyFireAxe">Fire Axe (-100,000 coins, +175 wood per chop)</button>
	</div>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src='{{site.url}}/assets/js/woodchop.js'>
</script>
