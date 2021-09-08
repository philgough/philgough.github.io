---
layout: page
permalink: /categories/
title: Categories
---

<section id="categories">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <ul class="archive-list">
      <li class="archive-item"><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
      <li class="archive-item">{{post.date | date_to_string}}</li>
    </ul>
    {% endfor %}
  </div>
{% endfor %}
</section>