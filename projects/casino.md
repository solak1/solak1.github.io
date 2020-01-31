---
layout: wrapper
title: Casino
description: Little Casino app.
permalink: projects/casino/
---



  <div class="section">
      <ul>
        <li><h1><a href="{{page.url}}">Casino Solak</a></h1></li>
      </ul> 
   </div>

  	

  <div class="section">
    <p>Hello, <span id='name'></span>.</p>
  	<p>Time: <span id="clock">00:00:00 MM EST</span></p>
  </div>

  <div class="section">
    <article>
      <h1>Casino</h1>
      <p>Money Available: $<span id="currency"></span></p>
      <p>Current Bet: $<span id='bet'></span></p>
      <p>Betting on: <span id='higher'>Higher</span>/<span id='lower'>Lower</span></p>
      <button onclick="betAmt()">Set Bet Amount</button>
      <button onclick="betPref()">Set Bet Preference</button>
      <p><button onclick="play()">Play</button>

<script src='{{site.url}}/assets/js/casino.js'></script>

