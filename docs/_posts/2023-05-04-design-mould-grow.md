---
layout: post
title: Design, Mould, Grow!
categories: [Publication, Biodesign, Myco-Materials]
date: 05/04/2023
---

{% fullwidth 'assets/design-mould-grow/spheres.png' 'Paper: _Design, Mould, Grow!: A Fabrication Pipeline for Growing 3D Designs Using Myco-Materials_' %}

{% newthought 'The challenge with designing with myco-materials is creating 3D forms,' %} so we wrote a paper about the process and some software to help designers and HCI researchers.<!--more--> The paper was published at ACM CHI 2023{% sidenote 'sn-id-reference' 'Gough, P., Perera, P. B., [Kertesz, M. A.](https://www.sydney.edu.au/science/about/our-people/academic-staff/michael-kertesz.html){:target="_blank"}, & [Withana, A.](https://www.sydney.edu.au/engineering/about/our-people/academic-staff/anusha-withana.html){:target="_blank"} (2023, April). Design, Mould, Grow!: A Fabrication Pipeline for Growing 3D Designs Using Myco-Materials. In *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems* (pp. 1-15). DOI: [10.1145/3544548.3580958](https://dl.acm.org/doi/10.1145/3544548.3580958){:target="_blank"}.' %} in Hamburg, Germany. 

Since this is a growing area (see what I did there?), there's a lot of opportunity to contribute something new. Unlike some other biomaterials, such as SCOBY from kombucha, we haven't been utilising fungi mycelium as a material for very long. Unlike farming the mushrooms, creating a myco-material requires that we are able to control the development of the fungi, make it think that it's underground, so it doesn't spend energy creating the fruiting body (the mushroom). There's a lot of research around myco-materials, what we are calling materials made with trimitic fungi{% sidenote 'sn-id-trifungi' 'These fungi have 3 types of cells. The commonly used species seem to be Oyster, Turkeytail and Reishi' %} that bind together a woody substrate and can be dried to form new materials. 

Our paper has 3 key contributions: the growing process, characterisation of the material and concepts that utilise these properties, and the design tool. 


## Growing Process

The first phase of learning to grow myco-materials was to work with biologists{% sidenote 'sn-id-mlmru' 'From the Marsh Lawson Mushroom Research Centre at USYD' %} who could help us understand the requirements for growing the mycelia by itself. We originally used sawdust from the workshop in my school, which was taken form the planer thicknesser machine. Fortunately for us, the extractor system can be arranged so that we got a clean material. 

With 2 rounds of tests, and lots of conditions (see the paper for the full description), what we really learned was how difficult it was to start from our own substrate--even with the substrate material being autoclaved in the biology lab. This higlighted the first challenge we needed to overcome: how can we (HCI researchers without specialised biology equipment) actually work with this material?

The answer came from COVID lockdowns. Rather than working with our own material, while progressing the research, we purchased "grow it yourself" mushroom kits from an online supplier. These were grown by the pros, and the "target" mushroom was dominant in the little ecosystem. This is great for us, since we were able to start moulding the material, and we ended up with no problems with infection from "wild" mould after this. 

## Material and concepts

{% marginfigure 'mf-id-segment-iterations' 'assets/design-mould-grow/closeups.png' 'Details of forms in myco-materials.' %}

The material itself has some interesting affordances, and we were able to grow into some detailed shapes using 3D printed moulds. We measured properties of the material and applied them to a few concepts. Some views of the details are on the right. It was quite impressive how well the mushroom was able to "render" a surface. We had our workshop help us out by 3D scanning a few objects, and we show that adding a coffee inclusion increases the accuracy of the mushroom's ability to render detailed features. I assume it's because the tiny coffee particles fit better into the corners of the mould. 

We found that the particular grow kits, with and without an inclusion of coffee grounds, were pretty consistent when drying - they reduced their size to 92% of the original mould (you can see this below). This means we can easily scale up our mould to have a final design. 

{% maincolumn 'assets/design-mould-grow/bunny-lineup.jpeg' "The mushroom bunny on the right isn't as tall as the others, but partly because its ear broke when it was removed, and had to be pinned together with a toothpick" %}

The concepts are outlined in the paper, but we applied the elasticity of the material to growing a cup coaster with a thin film resistor inside, which could track water consumption during the day, it insulates heat quite well, so we made a takeway cupholder, and it decomposes, so we made a decorative potted plant holder, which could be consumed as the plant grows. 


## Design tool

I have some experience with industrial design, so I was able to start by designing the negative mould for a final shape that I wanted. It was actually fun to step back into this role. However, my colleagues in computer science don't have this background, so it was an interesting problem, and really goes back to our initial motivation. How could we make myco-materials more accessible for HCI? This includes people who want to make a housing for a computer system out of the material.

We developed a Grasshopper plugin for Rhino, which is still being refined. It will generate mould designs for a given 3D model, and help the user identify planes that intersect the mould. These could be 3D printed. Our work since then has looked at how we could do away with the plastic 3D printing, and directly print the myco-material, but that's a LOT more complicated. 



## The Takeaway
From working on this project, I learned a lot about working with this unique material, as well as writing for CHI, of course, with this being my first lead-author publication at CHI. 

The most interesting thing for me is the way that the material expresses autonomy. The spheres at the top of the page were grown sequentially, in the same mould, in an incubator. As a designer, it's interesting to me that they are all different: some are darker coloured, others are lumpy, some show the lines of the 3D printed moulds quite clearly. So control over the final appearance is relinquished from the designer, to the material itself, acting with its own agency. 

Myco-materials also remind me of the concept _wabi-sabi_ — which from my reading of the topic{% sidenote 'sn-id-wabi-sabi' 'See the short column, _Beautiful (Im)perfections Are Us_ from ACM Interactions DOI:[10.1145/3555042](https://dl.acm.org/doi/10.1145/3555042){:target="_blank"}' %} I interpret as: nothing is perfect, nothing is finished, nothing is permanent. I think there is beauty in the imperfection, the impermanence and lack of control that comes from partnering with a living material. 



## Other Stuff

This is a recording of the presentation given at CHI:

<iframe width="560" height="315" src="https://www.youtube.com/embed/n9OHKAEEcJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




This is my first time attending CHI conference *in person*, which was exciting. Participating in ACM CHI been surprisingly complex with having to put together videos (which wasn't clear in the early requirements), making sure PDFs are accessible etc. I'm very mindful of flying to Germany from Australia to present a paper that is related to sustainability, but we operate within the system that we have, and online attendance is not the same. I'm glad I was able to go and meet some amazing people in the HCI community, who I'm working with moving forward. 