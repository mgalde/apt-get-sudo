---
layout: default
share: true
---

<div id="main" role="main">
  {% include sidebar.html %}

  <div class="archive">
    {% unless page.header.overlay_color or page.header.overlay_image %}
      <h1 class="page__title">{{ page.title }}</h1>
    {% endunless %}
    {{ content }}
    <div class="date">
      Written on {{ page.date | date: "%B %e, %Y" }}
    </div>
  </div>


</div>

<!--
<article class="post">
  <h1>{{ page.title }}</h1>

  <div class="entry">
    {{ content }}
  </div>

  <div class="date">
    Written on {{ page.date | date: "%B %e, %Y" }}
  </div>

  {% include disqus.html %}
</article>
-->
