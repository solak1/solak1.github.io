---
layout: wrapper
title: Snake
description: Eat the fruit to grow.  Watch out for your growing tail though!
---

<html>
	<section>
		<h3 id='snakeH3'>Snake</h3>
		<h3 id='playAgain' onclick='reload' style='display:none'>Click here to play again.</h3>
	</section>
	<div class="section">
		<p>Score: <span id="scoreboard">0</span></p>
		
		<canvas id="myCanvas" width="400" height ="400" style="border:1px solid black"></canvas>
	</div>
<script type="text/javascript" src="{{ site.url }}/assets/js/snake.js"></script>
	

