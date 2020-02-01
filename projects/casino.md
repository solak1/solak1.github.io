---
layout: wrapper
title: Higher Lower
description: Little Casino app.
permalink: projects/higherlower/
---


<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/css-toggle-switch@latest/dist/toggle-switch.css" />
  <div class="section">
      <ul>
        <li><h1><a href="{{page.url}}">Higher or Lower</a></h1></li>
      </ul> 
   </div>

  	

  <div class="section">
    <p>Hello, <span id='name'></span>.</p>
  	<p>Time: <span id="clock">00:00:00 MM EST</span></p>
  </div>

  <div class="section">
    <article>
      <h1>Higher or Lower</h1>
      <p>Money Available: $<span id="currency"></span></p>
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        <p>Current Bet: $<span id="bet"></span></p>
      </div>
      <button onclick="betAmt()">Type in Bet Amount</button>
      <p></p>
      <div>
      <label class="switch-light switch-candy" onclick="">
        <input type="checkbox" id="myCheck">
        <strong>
          High or Low Bet Preference
        </strong>
        <span>
          <span>Higher</span>
          <span>Lower</span>
          <a></a>
        </span>
      </label>
      </div>
      <p><button id="playButton" onclick="play()">Play</button>
      <p>You rolled a <span id="dice">..</span>.</p>

<script src='{{site.url}}/assets/js/casino.js'></script>

