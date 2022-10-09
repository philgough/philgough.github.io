---
layout: post
title: Computational Design with Myco-Materials
categories: [Publication, Biodesign, Myco-Materials]
date: 09/10/2022
---

{% fullwidth 'assets/computational-design-mycomaterials/myco-teaser.jpg' 'Paper: _Computational Design with Myco-Materials_' %}

{% newthought 'How far can we push a mushroom?' %} Specifically, when we want to use it for fabrication.<!--more--> This might be useful for creating a circular economy, because mushrooms are a type of fungi, and fungi are the planet's recycling system. In this paper we are sharing what we learned when we used computational methods to grow designs, and this is a high-level overview.

This paper was published at CAADRIA'22{% sidenote 'sn-id-reference' 'Gough, P., Globa, A., & Reinhardt, D. (2022). Computational Design with Myco-Materials. In *POST-CARBON, Proceedings of the 27th International Conference of the Association for Computer- Aided Architectural Design Research in Asia (CAADRIA) 2022*, Volume 2, 649-658. Association for Computer-Aided Architectural Design Research in Asia, Hong Kong. [https://caadria2022.org/computational_design_with_myco-materials](https://caadria2022.org/computational_design_with_myco-materials)' %} in April 2022, with colleagues at [Architecture Design and Planning](https://www.sydney.edu.au/architecture/our-research.html){:target="_blank"}: [Dr Anastasia Globa](https://www.sydney.edu.au/architecture/about/our-people/academic-staff/anastasia-globa.html){:target="_blank"} (who took the photos in the paper) and [Associate Professor Dagmar Reinhardt](https://www.sydney.edu.au/architecture/about/our-people/academic-staff/dagmar-reinhardt.html){:target="_blank"}.

## Why mushrooms?
Some mushrooms create networks of roots, *mycelia*, that bind together the *substrate* that they are breaking down, in nature this might be a tree, or a pile of leaves. This is useful for us, as we can get them to bind together material that is otherwise waste, like sawdust. We can dry this out to make a block of some kind. We wanted to know how detailed we can make this shape. Other studies have shown that there are a range of applications for this kind of *myco-material*, particularly in architectural settings. 

Mushrooms aren't plants, they're fungi{% sidenote 'sn-id-fungikingdom' 'Fungi are a separate kingdom of life to plants and animals.' %}, and the ones we used don't draw down carbon dioxide from the atmosphere. This means that they don't really increase in volume, like a tree does. The ones we used bind the material together until they are ready to start producing the _fruiting body_, a mushroom. We don't allow the mushrooms to grow, because they'll consume as much of the material as they can. We interrupt this reproductive stage, so that the material can still be utilised. To do this, we want to make the mushroom feel like it's underground. No fresh air (high carbon dioxide, but still enough oxygen to survive), humid, dark. Then, they will just hang out, grabbing on to more food. {% marginfigure 'mf-id-myco-acrylic' 'assets/computational-design-mycomaterials/myco-acrylic.jpg' 'Mycelium growing on acrylic, looking for more food.' %}

The process for us was quite simple:
1. Make a mould
2. Clean it with disinfectant
3. Break up the mushroom material from the grow kit
4. Press the mushroom material into the mould
5. Allow to grow in dark, warm environment until covered with mycelium
6. Remove from mould and leave to grow in the open, so all sides are covered with mycelium
7. Dry in very low oven (50 - 80ºC)

The material we used is a Grow-It-Yourself mushroom kit{% sidenote 'sn-id-aussiemushroomsupplies' 'Purchased from [Aussie Mushroom Supplies](https://aussiemushroomsupplies.com.au/product/mushroom-kit-australian-reishi-ganoderma-steyaertanum/){:target="_blank"}' %} for this project---though, it's not cheap per cubic cm if you're making a lot of objects, or a really bulky design. But, for our purposes, it's reasonable at small scale, and *much* more reliable than trying to start from sawdust and not grow wild mould in the process. Our research was not about the growing process itself, rather, we wanted to ask what the outcomes are, if we try to make small details from this material. 

So we purchased _substrate_, the mushroom, and also had _inclusions_, such as used coffee grounds and waste cardboard, which is readily available at our university, and probably most other places of work. Inclusions helped bulk out the material and altered some of its properties. 

## What can a mushroom do?
What kind of output do we get, if we make the moulds more and more challenging? To examine this, we did several tests, one of which was the _Segment Iterations_ and another was the _Pyramid Panels_. 

For the _segment iterations_ test, we used computational design tools (grasshopper) to make moulds{% sidenote 'sn-id-mouldcaps' 'Caps made to fit small containers' %} that were 3D printed, with walls of different thicknesses and heights. A major limitation was how to pack the substrate between thin walls at the extreme end. The mycelium will grow between these walls, and may even hold its shape when removed from the mould, but once dried, it's not very good at holding very thin forms. However, we can have some of these details, as long as the substrate is able to be packed into the void.

{% marginfigure 'mf-id-segment-iterations' 'assets/computational-design-mycomaterials/segment-iterations.jpg' '3D prints and the grown results.' %}

The _pyramid panels_ also showed that we were able to perforate a structure to reduce the material usage. The triangular edges (see above) are only 150mm, so they're quite small, but they could be used for repeating panels on a wall, for example. 

## A Takeaway
These materials are interesting to me as they can be part of a circular economy. They can be aligned with a few principles of the circular economy:
1. _Keep materials in use for as long as posssible_ -- taking waste (e.g. coffee grounds, waste paper, sawdust) and giving it new value, through these materials
2. _Technical and natural materials should be able to be separated and returned to their own cycles_ -- that's what mushrooms have always done, return organic materials to their natural cycles, for reuse! Of course, this should be designed when working with technical features, such as fastening or PCBs etc. 

This paper is a demonstration of critical function for myco-materials. There's still a lot to learn before it gets out of the lab, and I have enjoyed getting to know this material through this process. 