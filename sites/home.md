---
layout: default
title: Home
permalink: /
---

<!-- Image header -->
<div class="w3-display-container w3-container">
  <img src="/assets/img/jeans.jpg" alt="Jeans" style="width:100%">
</div>

<div class="w3-container" id="jeans">
  <br><h5>Recent transcriptions</h5>
</div>

<!-- Composition grid -->
{%- assign items = "" | split: "" -%}

{%- for composition in site.data.compositions -%}
  {%- assign category      = composition[0] -%}
  {%- assign category_slug = category | slugify -%}
  {%- assign artists       = composition[1] -%}
  {%- for art in artists -%}
    {%- assign artist      = art[0] -%}
    {%- assign artist_slug = artist | slugify -%}
    {%- assign songs       = art[1] -%}
    {%- for song in songs -%}
      {%- assign pdf_file = song.file | append: '.pdf' | uri_escape -%}
      {%- assign pdf_url  = '/assets/compositions/' | append: category_slug | append: '/' | append: artist_slug | append: '/' | append: pdf_file -%}
      {%- assign row = song.date | append: '||' | append: category | append: '||' | append: artist | append: '||' | append: song.song | append: '||' | append: pdf_url -%}
      {%- assign items = items | push: row -%}
    {%- endfor -%}
  {%- endfor -%}
{%- endfor -%}

{%- assign items = items | sort | reverse -%}

<div class="w3-row w3-grayscale">
  {%- for row in items limit:4 -%}
    {%- assign parts    = row | split:'||' -%}
    {%- assign date     = parts[0] -%}
    {%- assign category = parts[1] -%}
    {%- assign artist   = parts[2] -%}
    {%- assign song     = parts[3] -%}
    {%- assign pdf      = parts[4] -%}
    <div class="w3-col l3 s6">
      <a href="{{ pdf }}" class="w3-card w3-white w3-hover-shadow" style="display:block; text-decoration:none;">
        <div class="pdf-thumb">
          <iframe
            loading="lazy"
            src="{{ pdf }}#page=1&view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0">
          </iframe>
        </div>
        <div class="w3-container">
          <p class="w3-small w3-text-grey">{{ artist }}</p>
          <p class="w3-medium"><b>{{ song }}</b></p>
        </div>
      </a>
    </div>
  {%- endfor -%}
</div>