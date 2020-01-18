---
layout: wrapper
title: Hover effect
description: Testing the limits of css hover.
permalink: projects/hover/
---

<!---
	REPLACE <div class="section"> with <section>!!!!
--->

<section>
	Hover
</section>



{% for post in site.posts %}
	<section>
		<a href="{{ post.url }}">{{post.title}}</a>
		<img src="/assets/img/hover/goldstar.png" alt="">
	</section>
{% endfor %}

