# Tachyons Changelog

### 4.1.1

##### More Simple. Fewer Dependencies.

Originally tachyons was a monolithic repo. Eventually along the way I started splitting things up onto NPM as when I went to work at other places sometimes I would only need a handful of modules and if a clients build system allowed for it I could just grab them quickly from npm and add them to the outputted css. I was separately maintaining publishing the mono repo and the modules though. 

When @johnotander and I started working on v4 one of the things we talked about was having a single source of truth and making it easier to keep everything in sync. So we would install through npm and then copy files over to source. This then caused a new problem, each module needed to be fully encapsulated - so when we would copy them from node_modules to src - we left in a lot of duplicated variables and custom media props. As Tachyons is all about immutability - this seems not the best :) 

In practice this caused us to have a bug where the custom media props in our npm modules were being overridden somewhere and this was largely invisible to everyone. 

So in the interest of simplicity, we've removed all the tachyons modules as dependencies and have removed the function of copying over the modules from the node_modules directory. Instead we'll just maintain this as an encapsulated project. I think it's more simple this way and I don't think the added complexity was worth keeping the npm copy function around for this version of the project.

###### TL;DR THE BIG CHANGES

* We've removed all the duplicate variable and custom-media-prop declarations. 
* We removed tachyons modules as dev dependencies

Note: Nothing has changed in the outputted css besides some comments. As no new features were added, this is really just a patch to fix a bug.

![](https://media.giphy.com/media/3o7TKzlmFU4mItMlyw/giphy.gif)

### 4.1.0

![giphy-43](https://cloud.githubusercontent.com/assets/1748143/17814037/d1cb5378-6625-11e6-951b-084fab3367d9.gif)


Since we launched v4 we've had a number of small bug fixes and a few slight additions to some modules.
Largely things are still the same but there are a couple of new things to play with.

* The flex box module now supports ```display: inline-flex``` and ```flex-direction: row```
* Hovers now includes a shadow on hover
* Hover module now duplicates all hover styles for focus as well #a11y
* There was a file in src called _gradients.css that should not have been there so it was deleted. It wasn't compiled into the css so you shouldn't notice any changes.
* License has changed to ISC
* Removed duplicate flexbox dependency declaration in package.json
* Updated comments in flex box module because apparently I forgot to add notes on the media query extensions

More to come soon. We've started working on v5 which won't be too much of a big change. The breaking part is that we are changing media queries. Right now -ns covers both the -m and -l range. -m is a scoped media query that cuts off when large kicks in. We're going to change it so that there aren't any max-widths in the media queries at all and everything will be completely min-width based. It's the difference between:

v4
```
@custom-media --breakpoint-not-small screen and (min-width: 30em);
@custom-media --breakpoint-medium screen and (min-width: 30em) and (max-width: 60em);
@custom-media --breakpoint-large screen and (min-width: 60em);
```

v5
```
@custom-media --breakpoint-medium screen and (min-width: 30em);
@custom-media --breakpoint-large screen and (min-width: 60em);
```

We're also going to remove the copy from npm to src functionality in the mono repo. We'll still keep all the modules on npm individually, but we'll just manage this as it's own package. After some user testing / observation / feedback / and dogfooding - we're going to try and make this even more stripped back in simple in regards to the infrastructure. v5 won't likely include any fancy new features. Just some refined goodness as we continue to learn. We'll keep you updated.

Cheers,

@mrmrs & @johnotander

### 4.0.0

##### v4 is official

![giphy-24](https://cloud.githubusercontent.com/assets/1748143/16592467/b85d26fc-42d8-11e6-83fb-5b857c8cbed4.gif)

After a lot of fun chats and hard work with @johnotander - we're excited to pull tachyons out of beta and officially release v4.

A few notable changes:
- Reintroduces colors
- Flexbox support
- More typographic utilities
- Some changes to class names

### Pre 4.0.0

TODO
