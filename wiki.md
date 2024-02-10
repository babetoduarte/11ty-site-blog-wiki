---
layout: layouts/base.njk
title: Wiki Home
date: 2024-02-09
categories: ["wiki"]
---
# {{ title }}

This is the homepage of the Wiki section

<h2>Articles</h2>
<ul>
  {% for article in collections.article %}
  <li><a href="{{article.url}}">{{ article.data.title }}</a> - {{ article.date | postDate }}</li>
  {% endfor %}
</ul>
