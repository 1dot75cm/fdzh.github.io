---
layout: post
title:  "Design Goals for OpenTheme"
date:   2014-11-29 12:00:00
author: Manav Sehgal
tags: best-practices
category: design
---

Rapid, Responsive, Reactive, Realtime, Reusable. Convention over Configuration over Coding.

### Responsive

OpenTheme blog works well on multiple screen sizes. 
Scaling content and features to Mobile, Tablet, Desktop form factors, 
with zero to minimal effort on your part.

Just try it now. Resize your browser window and see how this post scales down/up 
based on target browser or screen size. Even the features enable/disable based on
what a particular screen size can accomodate. Like the menu for Templates shows
icon and text on a larger screen, only icon on smaller ones.

### Rapid

We have a goal to achieve the *One Minute Content Workflow* from creating a post to going live.

This one minute should take care of asset pipeline incluing HTML, JS, CSS, image pre-processing,
testing your web app where tests are included, optimizing your assets where required,
including features that you designed for, saving a version of GitHub, publishing to live.

### Reusable

Every feature on OpenTheme is designed with reusability in mind.
OpenTheme's growing list of _includes contains reusable several partials.
You got tag lists, category lists, recent posts, top menu, post side bar, page bar, 
header, footer, and featured post.

### Reactive

Reactive website or web apps behave like native desktop or mobile apps. 
When an email arrives, your desktop or mobile just alerts you without any action from your end.
Reactivity in web apps takes this concept to the next level. As it applies to even 
upgrading the web app. Add a new feature, publish, and it becomes available to all
users currently connected to your app.

We are currently exploring reactive frameworks including AngularJS, to identify the 
best-fit for OpenTheme + GitHub stack. Stay tuned for more.

### Realtime

When we have reactive web apps, we can start using them for realtime updates, like
social streams, stock prices, weather updates, and such. Realtime content management,
is an Opentheme feature in the idea stage. Follow developments and design discussions on 
the [OpenTheme Trello Board](https://trello.com/b/Jm8UFV7p).

### Convention over Configuration over Coding

We favor conventions, like all partials go into _includes folder in Jekyll.
Conventions are favored over configuration where these are popular, and well
known patterns. Configuration in _config.yml and frontmatter is used where 
it adds to ease of content creation and design. 

Coding follows best practices from top GitHub libraries like Semantic UI 
and projects like Jekyll that OpenTheme has as dependencies.
