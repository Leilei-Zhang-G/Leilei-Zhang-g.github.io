---
layout: academic
title: Sitemap · 网站地图
permalink: /sitemap/
author_profile: false
excerpt: Browse the English and Chinese pages of this website.
---
<div class="site-directory">
  <section lang="en">
    <h2>English</h2>
    <ul>
      <li><a href="{{ '/' | relative_url }}">Home</a></li>
      {% for link in site.data.navigation.main %}<li><a href="{{ link.url | relative_url }}">{{ link.title }}</a></li>{% endfor %}
      <li><a href="{{ '/links/' | relative_url }}">Academic links</a></li>
    </ul>
  </section>
  <section lang="zh-CN">
    <h2>中文</h2>
    <ul>
      <li><a href="{{ '/zh/' | relative_url }}">首页</a></li>
      {% for link in site.data.navigation.zh %}<li><a href="{{ link.url | relative_url }}">{{ link.title }}</a></li>{% endfor %}
      <li><a href="{{ '/zh/links/' | relative_url }}">学术主页链接</a></li>
    </ul>
  </section>
</div>
<p class="section-note"><a href="{{ '/sitemap.xml' | relative_url }}">XML sitemap</a></p>
