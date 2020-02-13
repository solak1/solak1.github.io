---
layout: gameWrapper
title: Legion
description: Welcome to your next adventure. Legion is a text based rpg accessible from anywhere.
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
        <button id="campButton">CAMP</button>
    </div>
    <div class="navBlock">
        <button id="inventoryButton">INVENTORY</button>
    </div>
    <div class="navBlock">
        <button id="travelButton">TRAVEL</button>
    </div>
    <div class="navBlock">
        <button id="logButton">LOG</button>
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
    <p>Coins: <span id="inventoryCoins">0</span></p>
    <p>Current Weapon: <span id="weaponSpan">Hands</span></p>
    <p>Current Armor: <span id="armorSpan">None</span></p>
    <section>
        <div id="inventoryItems">
            <h4>My Weapons:</h4>
            <p>| <b>Total Strength: 
                <span id='totalStrengthSpan'>5</span></b> | Weapon Strength: <span id="strengthSpan">0</span>
                 | Character Strength: <span id='characterStrengthSpan'>5</span>
            </p>
            <div id="weaponsContainer">
                <button class="equipmentButton" id="equipSmallSpearButton">Small Spear</button>
                <button class="equipmentButton" id="equipSimpleBowButton">Simple Bow</button>
                <button class="equipmentButton" id="equipShortSwordButton">Short Sword</button>
                <button class="equipmentButton" id="equipStandardSpearButton">Standard Spear</button>
                <button class="equipmentButton" id="equipCraftedBowButton">Crafted Bow</button>
                <button class="equipmentButton" id="equipStandardSwordButton">Standard Sword</button>
                <button class="equipmentButton" id="equipLongSpearButton">Long Spear</button>
                <button class="equipmentButton" id="equipEngineeredBowButton">Engineered Bow</button>
                <button class="equipmentButton" id="equipLongSwordButton">Long Sword</button>
            </div>
        </div>
    </section>
    <section>
        <div id="inventoryArmorItems">
            <h4>My Armor:</h4>
            <p>Defense Bonus: <span id='defenceBonusSpan'>0</span></p>
            <button class="equipmentButton" id="equipClothTunicButton">Cloth Tunic</button>
            <button class="equipmentButton" id="equipStuddedTunicButton">Studded Tunic</button>
            <button class="equipmentButton" id="equipLeatherCuirassButton">Leather Cuirass</button>
        </div>
    </section>
</section>

<section class="moreInfo" id="travel">
    <h2>Travel</h2>
    <div id="travelContainer">
        <button class="travelButton outsideTownButton"  id="goToTownButton">Town</button>
        <button class="travelButton shopButton" id="leaveTownButton">Leave Town</button>
        <button class="travelButton shopButton" id="healButton">Visit the Healer<br >(-10 coins)</button>
        <button class="travelButton shopButton" id="goToShopButton">Shoppe</button>
        <button class="travelButton outsideTownButton" id="goToForestButton">Forest</button>
        <button class="travelButton outsideTownButton" id="goToMountainsButton">Mountains</button>
        <button class="travelButton outsideTownButton" id="goToDesertButton">Desert</button>
    </div>
</section>

<section class="moreInfo" id="log">
    <h2>Log</h2>
    <ol id="logUL" reversed>
    </ol>
</section>
<section class="moreInfo" id="townShop">
    <h2>Shoppe</h2>
    <h4>Coins Available: <span id="goldSpan">0</span></h4>
    <p>The merchant agrees to sell you weapons and armor.</p>
    <div id="shopContainer">
        <button class="equipmentButton" id="buySmallSpearButton">Small Spear<br />(50 coins)</button>
        <button class="equipmentButton" id="buySimpleBowButton">Simple Bow<br />(400 coins)</button>
        <button class="equipmentButton" id="buyClothTunicButton">Cloth Tunic<br />(700 coins)</button>
        <button class="equipmentButton" id="buyShortSwordButton">Short Sword<br />(1,500 coins)</button>
        <button class="equipmentButton" id="buyStandardSpearButton">Standard Spear<br />(2,000 coins)</button>
        <button class="equipmentButton" id="buyCraftedBowButton">Crafted Bow<br />(3,400 coins)</button>
        <button class="equipmentButton" id="buyStuddedTunicButton">Studded Tunic<br />(4,800 coins)</button>
        <button class="equipmentButton" id="buyStandardSwordButton">Standard Sword<br />(7,200 coins)</button>
        <button class="equipmentButton" id="buyLongSpearButton">Long Spear<br />(12,000 coins)</button>
        <button class="equipmentButton" id="buyEngineeredBowButton">Engineered Bow<br />(16,000 coins)</button>
        <button class="equipmentButton" id="buyLeatherCuirassButton">Leather Cuirass<br />(18,000 coins)</button>
        <button class="equipmentButton" id="buyLongSwordButton">Long Sword<br />(24,000 coins)</button>
    </div>
</section>
</div>
<script type="module" src='{{site.url}}/assets/js/legion/legionMain.js'>

<img src='{{ site.baseurl }}/assets/img/legion/shoppe-icon4.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/town-icon2.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/forest-icon.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/mountains-icon.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/desert-icon.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/heal-icon4.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/leaveTown-icon.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/camp-icon25.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/inventory-icon25.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/travel-icon25.png' decoding="async"/>
<img src='{{ site.baseurl }}/assets/img/legion/log-icon25.png' decoding="async"/>
