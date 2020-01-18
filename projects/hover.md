---
layout: hover
title: Hover effect
description: Testing the limits of css hover.
permalink: projects/hover/
---

<!---
	REPLACE <div class="section"> with <section>!!!!
--->

<body id="Hover">

<div class="section">
	Hover
</div>


{% for post in site.posts %}
	<div class="section">
		<a href="{{ post.url }}">{{post.title}}</a>
		<img src="/assets/img/hover/goldstar.png" alt="">
	</div>
{% endfor %}

</body>