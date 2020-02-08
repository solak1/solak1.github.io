---
layout: "post"
title: "Legion and JS campaign"
author: "Mike"
date: 2019-02-07T16:18:00+05:00
---

No change to end functionality, but vastly improved the code base.

Implemented JSDoc on 2 classes and corresponding methods.
1. Created UI prototype and prototype methods.
2. Realized that document.getElementsByClassName returns an "Array like Object" called a HTMLObject. 
3. This confusion forced me to create ugly and repetitive code.
Conclusion: In the future, I plan on using my expanded knowledge of prototypes. For example: a function should be added to the ui prototype. Such that ui.prototype.createBuyButton will be stored in memory once, but will be used to create all buy buttons. This will simplify the process of creating new shop/inventory features.