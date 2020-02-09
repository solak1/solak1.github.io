---
layout: gameWrapper
title: Legion
description: Cut wood, upgrade axes, and increase your gold!
permalink: projects/legion/
---


<link rel="stylesheet" type="text/css" href="{{ site.url }}/assets/css/legion.css">
<!--
<section id="accMenu">
	<h3>Account Menu</h3>
</section>
<div id="News">
    <h4>News</h4>
</div>
-->

<section id="legionHeader">
    <div class="leagionHeaderHeader"></div>
    <div id="healthDiv">
        <button class="legionButton" id="imgButton">
        <img id="weaponImg" src='{{site.url}}/assets/img/legion/hands.png'>
        </button>
        <div id="curHealthDiv"></div>
        <div id="maxHealthDiv"></div>
        <div id="healthBackgroundDiv"></div>
    </div>
    <button class="legionButton" id="camButton">Next Campaign</button>
    <button class="legionButton" id="camButton2">Campaign</button>
    <button class="legionButton" id="camButton3">Next Campaign</button>
    <button class="legionButton" id="camButton4">Next Campaign</button>
    <button class="legionButton" id="locButton">Location: <span id="locationSpan">Forest</span></button>
    <div class="legionHeaderFooter">
        <div id="hpSpan"></div>
        <div id="hpSpanCur"></div>
    </div>
</section>
<section id="navBlocks">
    <div class="navBlock">
        <button>CAMP</button>
    </div>
    <div class="navBlock">
        <button>INVENTORY</button>
    </div>
    <div class="navBlock">
        <button>TRAVEL</button>
    </div>
    <div class="navBlock">
        <button>LOG</button>
    </div>
</section>
<div id="moreInfoContainer">
<section class="moreInfo" id="camp">
    <h2>Camp</h2>
    <section class="moreInfoSection" id="currentStats">
        <h3>Current Stats</h3>
        <div id="myProgress">
        <div id="myBar"></div>
        </div>
        <p>Level: <span id="level">1</span></p>
        <p>XP: <span id="xp">0</span></p>
        <p>Gold: <span id="gold">0</span></p>
        <p>Health: <span id="health">10</span></p>
    </section>
    <section class="moreInfoSection" id="recentEvents">
        <h3>Recent Events</h3>
        <ol id="recentEventsUL">
            <li style="display: none"></li>
            <li style="display: none"></li>
            <li style="display: none"></li>
        </ol>
    </section>
    <section class="moreInfoSection" id="locationTips">
        <div class="infoContainer" id="deepForestInfoContainer">
            <h3><span class="location">Legion</span> Tips</h3>
            <p>Click "Next Campaign" to launch a campaign. <span class="location"></span></p>
            <p>If you have low health, visit the town.</p>
            <p>Buy Weapons from the Shoppe!</p>
        </div>
    </section>
</section>
<section class="moreInfo" id="inventory">
    <h2>Inventory</h2>
    <p>Current Weapon: <span id="weaponSpan">Hands</span></p>
    <p>Current Equipment Strength: <span id="strengthSpan">5</span></p>
    <p>Current Coins: <span id="inventoryCoins">0</span></p>
    <section>
        <div id="inventoryItems">
            <h4>My Weapons:</h4>
            <button class="equipmentButton" id="equipSmallSpearButton">Small Spear</button>
            <button class="equipmentButton" id="equipSimpleBowButton">Simple Bow</button>
            <button class="equipmentButton" id="equipShortSwordButton">Short Sword</button>
        </div>
    </section>
    <section>
        <div id="inventoryArmorItems">
            <h4>My Armor:</h4>
            <button class="equipmentButton" id="equipSmallSpearButton">Cloth Tunic</button>
            <button class="equipmentButton" id="equipSimpleBowButton">Studded Tunic</button>
            <button class="equipmentButton" id="equipShortSwordButton">Leather Cuirass</button>
        </div>
    </section>
</section>

<section class="moreInfo" id="travel">
    <h2>Travel</h2>
    <button class="travelButton outsideTownButton"  id="goToTownButton">Town</button>
    <button class="travelButton shopButton" id="leaveTownButton">Leave Town</button>
    <button class="travelButton shopButton" id="healButton">Heal (-10 coins)</button>
    <button class="travelButton shopButton" id="goToShopButton">Shoppe</button>
    <button class="travelButton outsideTownButton" id="goToForestButton">Forest</button>
    <button class="travelButton outsideTownButton" id="goToMountainsButton">Mountains</button>
    <button class="travelButton outsideTownButton" id="goToDesertButton">Desert</button>
</section>

<section class="moreInfo" id="log">
    <h2>Log</h2>
    <ol id="logUL" reversed>
    </ol>
</section>
<section class="moreInfo" id="townShop">
    <h2>Shoppe</h2>
    <h4>Coins Available: <span id="goldSpan">0</span></h4>
    <p>The merchant agrees to sell you a small spear for 50 coins, a simple bow for 400 coins, and a short sword for 1,500 coins.</p>
    <div id="shopContainer">
        <button class="equipmentButton" id="buySmallSpearButton">Small Spear</button>
        <button class="equipmentButton" id="buySimpleBowButton">Simple Bow</button>
        <button class="equipmentButton" id="buyShortSwordButton">Short Sword</button>
    </div>
</section>
</div>
<script type="module" src='{{site.url}}/assets/js/legion/legionMain.js'>
