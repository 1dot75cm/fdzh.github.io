---
title:  "Starter Post - Media Embeds"      
tags: media embeds    
image: /img/embed/youtube-splash.png
---

You can embed YouTube video in a post using custom embed tag designed in Liquid markup.

Here is an example of a custom embed available as a configurable _include with OpenTheme.
The size is parametrized as per theme. So if you turn on post bar then size is small, otherwise large. 
Features like player controls are configurable at site level, within _config.yml.

{% include embed-youtube.html video="eRsGyueVLvQ" %}

To embed a YouTube video you just need to copy the unique video id at the end of the video url.

Just add the following embed code.

{% raw  %}
```
{% include embed-youtube.html video="eRsGyueVLvQ" %}
```
{% endraw %}


OpenTheme takes care of the rest!
