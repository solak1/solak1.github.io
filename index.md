---
layout: wrapper
---

<div class="section">
	Welcome!
</div>


<div class="section">
	<h3>Recent Posts:</h3>
	<ul>
		{% for post in site.posts %}
		<li>
			<a href="{{ post.url }}">{{post.title}}</a>
		</li>
		<br>
		{% endfor %}
	</ul>

</div>