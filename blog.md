---
layout: layouts/base.njk
title: Blog Home
date: 2024-02-09
categories: ["blog"]
---
# {{ title }}

This is the homepage of the Blog section

<h2>Blog Posts</h2>
<ul>
  {% for post in collections.post reversed %}
  <li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | postDate }}</li>
  {% endfor %}
</ul>

