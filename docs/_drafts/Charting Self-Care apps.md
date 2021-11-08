---
layout: post
title: Charting Self-Care Apps
categories: [Health & Wellbeing, Data Vis]
date: 10/10/2021
---

{% newthought 'I was recently introduced to a paper about self-care apps' %} on the Google Play store. <!--more-->The article was published at ACM CHI{% sidenote 'sn-id-reference' 'Spors, V., Wagner, H. G., Flintham, M., Brundell, P., & Murphy, D. (2021). Selling Glossy, Easy Futures: A Feminist Exploration of Commercial Mental-Health-focused Self-Care Apps’ Descriptions in the Google Play Store. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1–17). New York, NY, USA: ACM. [https://doi.org/10.1145/3411764.3445500](https://doi.org/10.1145/3411764.3445500){:target="_blank"}'%}, a leading conference for Human-Computer Interaction design research. The first author, [Velvet Spoors](https://dl.acm.org/profile/99659365614), is a PhD student from University of Nottingham.

I think that this paper is good for 2 reasons:

1. it's really well written, and
2. it investigates a topic that is really important and has implications that are quite nuanced.

The paper includes their data as supplemental material, which I'm going to visualise, because I still have questions and also because I want to practice using D3JS{% sidenote 'sn-id-d3' 'See examples of Data Driven Documents at [d3js.org](https://d3js.org){:target="blank"}' %}... 

## Their paper

The paper collected 69 apps related to self-care, from initial searches resulting in 6693 total hits on the app store. They describe their process really nicely. The paper focuses on 3 questions, which were looked at through the app store's descriptions:

> _[Q1] what does self-care actually mean and look like?_ What do you do with the app? e.g. "Yoga" or "Meditation"

> _[Q2] where does mental stress come from?_ The authors describe why they use the term mental stress, but the apps say things like "lack of fullillness in life" or "stressed day"

> _[Q3] why use the app for self-care?_ This is how the app describes some kind of benefit to the user, saying things like "relax" or "eliminate stress"

Are these apps from silicone valley that are doing more harm than good by over-promising and under-delivering?

Well, no. It's probably more complex than that. 

Some of these apps do seem to be promising a lot. The idea that a phone app can "eliminate stress" is a bit crazy to me. Stress is a natural and normal response to your situation, so to _eliminate_ stress seems a bit bonkers. Especially with a phone app. Also, people want a quick fix, and a phone app with a paragraph of text has a few screen shots to get someone to try the app, so I don't blame the developers for being pragmatic about getting their app onto phones by promising a lot. If the apps are doing a disservice, it's probably because of captitalsim, of course. 

So, I've downloaded the data from the paper, and the paper to read. The terms I'll use come from their dataset. The other reason I want to do this is because I had a question that wasn't presented in the paper, but would be available in the data. The authors had to make decisions about how the work is presented, and most of the data was grouped by the frequency of themes they identified from the apps. For example in _Q1: why this app?_, the answers were presented in a table of how many apps included listening to audio, or doing yoga etc. 

{% marginnote 'fig1-sn-a' 'Hover to see details' %}
{% mainchart 'fig1-q1egs' "Here's a chart of the way they are presented - but in a table, not a graph" %}

## Charting by app

Their work focused on grouping apps by topics. I was curious about something myself. 

> _Phil's Q1:_ Are there a groups of apps that are promising a lot, and another group that are more targeted?

Maybe a chart will help!?

{% mainchart 'fig2-appPromises' 'How many themes per app?' %}

## So what?





<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="{{site.baseurl}}/js/csca_post/figs.js"></script>