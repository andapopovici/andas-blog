---
layout: layouts/post.njk
title: Languages and screen readers
description: Documenting what I learned about screen readers and the 'lang' attribute
date: 2024-08-29T00:00:00.000Z
tags:
  - accessibility
---

This page is is written in English. For people who can read in English, this is obvious. But how does a screen reader know that this page's content is in English and not another language?

This is where the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang" target="_blank">HTML "lang" attribute</a> comes in handy.

The `lang` attribute can be specified:
- at the top level of a web page, if the majority of your content is in that language. For example, this page's `html` element looks like this: `<html lang="en"></html>`. <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html">WCAG criterion 3.1.1 Language of page (Level A)</a> requires a page to have a non-empty `lang` attribute
- for bits of content which are in a language different from the rest of the page.


