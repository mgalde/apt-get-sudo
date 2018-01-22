---
layout: archive
permalink: /blog/
---

<h1>
  Welcome!
</h1>
<br><br>
Please find my blog postings below and feel free to send me a email. I am really just putting everything together at the moment
<br><br>

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
