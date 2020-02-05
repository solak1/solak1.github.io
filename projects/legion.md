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
    <button class="legionButton" id="camButton">Campain</button>
    <button class="legionButton" id="camButton2">Campain</button>
    <span id="stats">Level: 1 | XP: 999999 | Gold: 999999</span>
    <button class="legionButton" id="locButton">Location</button>
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
        <p>Level: <span class="level">0000</span></p>
        <p>XP: <span class="xp">0000</span></p>
        <p>Gold: <span class="gold">0000</span></p>
        <p>Current Weapon: <span class="weapon"></span></p>
    </section>
    <section class="moreInfoSection" id="recentEvents">
        <h3>Recent Events</h3>
        <p>1. Conquered "enemy"</p>
        <p>2. Retreated with loss.</p>
        <p>3. Conquered "enemy"</p>
        <p>4. Retrograded safely.</p>
    </section>
        <section class="moreInfoSection" id="locationTips">
        <h3><span class="location">Location</span> Tips</h3>
        <p>You are in the forest.</p>
        <p>You should equip a bow or a sword for a bonus in the <span class="location">woods</span></p>
        <p>Beware of grizzly bears.</p>
    </section>
</section>
<section class="moreInfo" id="inventory">
    <h2>Inventory</h2>
</section>

<section class="moreInfo" id="travel">
    <h2>Travel</h2>
</section>

<section class="moreInfo" id="log">
    <h2>Log</h2>
    <ul id="logUL">
    </ul>
    
</section>
</div>
<script src='{{site.url}}/assets/js/legion/legionMain.js'>

