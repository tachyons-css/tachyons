# Tachyons Changelog

### 5.0.0

- Remove `ns` mq
- Monorepo build process
- All the docs
- Better build scripts
- etc.

### 4.2.1

#### Comments: There is no substitute

![](https://media.giphy.com/media/9CFB8fnPPgzok/giphy.gif)

This patch fixes a small bug in class naming and also adds comments to the css partials in the src/ directory.

After making another pass through the source code I was horrified to find how many glaring inconsistencies there were in the code comments for each module. Especially regarding naming systems. It never ceases to amaze me how bad past me is at writing code. 

In an effort to not have poorly documented code I woke up this morning, made some coffee, and tried to make the comments more clear and more consistent. They aren't perfect yet. But
 they are less glaringly awful. I hope. 

### Bug fix
![](https://media.giphy.com/media/7zYQSkF4LPmmY/giphy.gif)

There were two different classes called striped--moon-gray which is very silly because they were set to different values. So that has been fixed. No more duplicative classes and the class striped--light-gray has been added in as originally intended. 

### 4.3 news
Next up I'll be adding some more table striping utilities along with some additional aspect ratios used for fluid embeds. 

Cheers.

### 4.2.0

#### High Times

![](https://media.giphy.com/media/FVbsOFYqdARtS/giphy.gif)

Without a doubt this is my favorite release ever. We fixed a couple of bugs and also
added some new goodness.

## Additions

#####_debug-grid.css
Added some classes to help enable lining things up. If you place the ```.grid-debug``` class on an element you'll get an 8px grid on the background with a slightly transparent blue line. To get a 16px grid use the class ```.grid-debug-16```

##### 8px grid
<img width="1197" alt="screen shot 2016-09-01 at 5 39 03 pm" src="https://cloud.githubusercontent.com/assets/1748143/18177535/87caf59c-7072-11e6-956b-5d5018f368ed.png">

##### 16px grid
<img width="1280" alt="screen shot 2016-09-01 at 5 45 05 pm" src="https://cloud.githubusercontent.com/assets/1748143/18177523/7de0a202-7072-11e6-956f-ae95fa7ff539.png">

#### vh units
Added some classes for setting the height of the element based off of the screen height as opposed to the height of the parent. You can now use vh-100, vh-75, vh-50, or vh-25 to set the height of an element to 100, 75, 50, or 25% of the screen height. Shout out to @yoshuawuyts for the recommendation.

#### outlines
You can now place a 1px outline on an element with the ```class="outline"``` it will be set to the currentColor of the element.

#### line-height
Made some slight tweaks to line-height values. ```lh-copy``` is now set to 1.5 and ```lh-title``` is set to 1.25. This will hopefully help people worried about baseline grids a little bit.

#### pill shaped links / buttons
Added a class called br-pill that makes things look like pills with a border-radius of 9999px. Shout out to @matthewmueller for getting this in.

<img width="387" alt="screen shot 2016-09-01 at 7 10 51 pm" src="https://cloud.githubusercontent.com/assets/1748143/18178988/663fdc20-7078-11e6-8ed7-d5dd6bd779fb.png">


## Bug Fixes
![](https://media.giphy.com/media/oJ3a572OzNV2U/giphy.gif)

#### Animation fix
The .glow class was not animating properly. This has been fixed.
![hover](https://cloud.githubusercontent.com/assets/1748143/18177453/3755a0f8-7072-11e6-9cdc-838732f0967b.gif)

#### Filename consistency
Renamed _debug_children.css to _debug-children.css to follow the naming pattern of the other partials

##### Until next time
I think that is about it. Thanks to everyone who has given feedback and helped out with docs fixes. It's all really helpful.

### 4.1.3

## They're back

![](https://media.giphy.com/media/CrUNKmmIi74RO/giphy.gif)

We accidentally were not including the images partial or the z-index partial in the main build.
The 4.1.3 fixes this 100% completely embarrassing mistake by including them back in. 

If you use the CDN link you can find the new version at
```
https://npmcdn.com/tachyons@4.1.3/css/tachyons.min.css
```

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
