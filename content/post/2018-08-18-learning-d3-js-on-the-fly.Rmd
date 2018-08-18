---
title: Deconstructing scripts and learning D3.js
author: Emi Tanaka
date: '2018-08-18'
slug: deconstructing-scripts-and-learning-d3js
categories:
  - hacking
tags:
  - d3js
  - javascript
authors: []
---

TL;DR: my step-by-step throught process as I deconstruct another person's scripts.

I got asked from a collaborator to make a similar interactive plot referenced in a site. She wanted it running locally in her computer. The work is in progress and I was not asked to mention it so I won't say which site. She pointed me to the source file of the website.

The source file was *complicated* to say the least. It was full of `php` files and `javascripts` which I'm not familiar with and a mix of `perl`, `python` and even `R` codes. Not to mention there is not a lot of comments.

Anyhow, admist this butternut-squash-apple-brocolli-other-strange-mix soup, I gave it a try.

<center>
<img src="/post/2018-08-18-learning-d3-js-on-the-fly_files/challenge_accepted.gif" alt="challenge accepted gif" width="70%"/>
</center>

The task involved me trying to isolate which file was the one that creating the interactive plot. I thought the `R` file maybe doing this. Looking at the code, I can only see the static `ggplot`. After much trouble I figured out how it was processing the data. It was through two `python` scripts. Then I ran through the `R` script. Yup only a static plot as expected. It's at least a nice static plot that I can give to my collaborator. 

The interactive plot lied in the collection of `php` files and `javascripts`. I didn't know what `php` files were so I looked it up. It seems like it's for some SQL use? I decided to stop there. `php` files also look like a `html` so I figured I can modify it to a `html`. 

I quickly read the `javascript` and saw that it is using the `D3`. Looking at the `php` file I could only imagine that the `<svg></svg>` tag was modified by this `javascript`. I found the selector for this in the script. I don't really know `d3.js` but from reading the code I got the rough gist. I got to the point where I believe I had a working `html` + `js`. But the plot wasn't showing.

I believed it should be working. I've stripped the problem enough to get the minimum of what I need. Testing further I realised that the input file was not getting read in. First thing I need to start a local host going so that the files can be read. This is problematic though if the input file is not within the same folder or the sub folder. Essentially I had a structure like below:

```
├── code
|   ├── index.html
|   └── js
|       ├──plot.js
|       └──d3.js
└── output
    └── input.csv

```

I ended up moving the `output` folder in the `code` folder and changed the pathways. Maybe I could have had a better way of working. After a couple of hours doing this I just wanted to move on. What was great to see was that it was done! I had the interactive plot moving! A little celebration for the noob! I am a bit proud of figuring it all out :smile:

<center>
<img src="/post/2018-08-18-learning-d3-js-on-the-fly_files/yay.gif" alt="Yay!" width="70%"/>
</center>