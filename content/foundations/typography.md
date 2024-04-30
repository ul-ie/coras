---
title: Typography
tags: foundations
layout: layout.html
eleventyNavigation:
  key: Typography
---

{% assign lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' %}

<!-- Todo: discuss optimal line-lengths (50 - 75 characters) -->

<h1>{{ title }}</h1>

Our typography plays an important role in expressing the University's many needs - from sophisticated to more expressive applications.

<h2 class="dh1">DH1: Display Heading 1</h2>

<h2>H1: Standard Heading 1</h2>

<h2>H2: Standard Heading 2</h2>

<h3>H3: Standard Heading 3</h3>

<h4>H4: Standard Heading 4</h4>

<p>Inter 300: {{ lorem }}</p>

<p><em>Inter 300i: {{ lorem }}</em></p>

<p><strong>Inter 600: {{ lorem }}</strong></p>

<p><strong><em>Inter 600i: {{ lorem }}</em></strong></p>

<p>Inter 300 with superscript<sup>1</sup> and subscript<sub>2</sub>.</p>

<small>Small text (using the `<small>` element).</small>

