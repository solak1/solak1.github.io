---
layout: wrapper
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
    <button class="legionButton" id="imgButton">
    <img src='{{site.url}}/assets/img/legion/sword.png'>
    </button>
    <button class="legionButton" id="camButton">Campaign</button>
    <button class="legionButton" id="camButton2">Campaign</button>
    <span id="stats">Level: 1 | XP: 999999 | Gold: 999999</span>
    <button class="legionButton" id="locButton">Location: <span id="locationSpan">Deep Forest</span></button>
    <div class="legionHeaderFooter"></div>
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
        <p>Level: <span id="level">1</span></p>
        <p>XP: <span id="xp">0</span></p>
        <p>Gold: <span id="gold">0</span></p>
        <p>Health: <span id="health">10</span></p>
    </section>
    <section class="moreInfoSection" id="recentEvents">
        <h3>Recent Events</h3>
        <ul id="recentEventsUL">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
    <section class="moreInfoSection" id="locationTips">
        <div class="infoContainer" id="deepForestInfoContainer">
            <h3><span class="location">Location</span> Tips</h3>
            <p>You are in the forest.</p>
            <p>You should equip a bow or a sword for a bonus in the <span class="location">Deep Forest</span></p>
            <p>Beware of grizzly bears.</p>
        </div>
    </section>
</section>
<section class="moreInfo" id="inventory">
    <h2>Inventory</h2>
</section>

<section class="moreInfo" id="travel">
    <h2>Travel</h2>
    <button id="healButton">Heal (-10 coins)</button>
    <button id="goToShopButton">Closest Shoppe</button>
</section>

<section class="moreInfo" id="log">
    <h2>Log</h2>
    <div id="myProgress">
    <div id="myBar"></div>
    </div>
    <ul id="logUL">
        <li></li>
    </ul>
</section>
<section class="moreInfo" id="townShop">
    <h2>Traveling Shoppe</h2>
    <p>Currently we are sold out of all our equipment! What a shame.</p>
    <button class="equipmentButton" id="buySmallSpearButton">Small Spear</button>
    <button class="equipmentButton" id="buySimpleBow">Simple Bow</button>
    <button class="equipmentButton" id="buyShortSword">Short Sword</button>
</section>
</div>
<script src='{{site.url}}/assets/js/legion/legionMain.js'>

