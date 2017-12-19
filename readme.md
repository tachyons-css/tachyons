# tachyons-amp v4.9.0 build
[![Build Status](https://travis-ci.org/zerodevx/tachyons-amp.svg?branch=master)](https://travis-ci.org/zerodevx/tachyons-amp)

A barebones AMP-compatible TACHYONS build.

Conforming to [Google's Accelerated Mobile Pages, or AMP, project](https://www.ampproject.org/) CSS specs, *external stylesheets*, the `!important` qualifier, and the `behavior` and `-moz-binding` properties are disallowed. Furthermore, the custom CSS should not exceed a *50kb* size limit.

This convenience build aims to provide a CSS snippet that passes AMP validation, while providing a reduced set of the most-used features from the original [TACHYONS](http://tachyons.io/) (as much as possible).

## Usage

The [minified build](https://raw.githubusercontent.com/zerodevx/tachyons-amp/master/amp-build/tachyons-amp.min.css) is located in the [./amp-build](https://github.com/zerodevx/tachyons-amp/tree/master/amp-build) directory.

Simply copy & paste into your AMP HTML's `<style amp-custom>` tag.

## Build it yourself

1. Clone this repo and install dependencies.

    git clone https://github.com/zerodevx/tachyons-amp.git && cd tachyons-amp && npm install

2. Edit which modules to include from [./src/tachyons-amp.css](https://github.com/zerodevx/tachyons-amp/tree/master/src/tachyons-amp.css).

    vim ./src/tachyons-amp.css

3. Build.

    npm run build:amp

4. Validate.

    npm run test


## What's included

A subset of 31 modules are included.

#### Global and Normalization Modules (8)

* src/_normalize.css
* src/_box-sizing.css
* src/_code.css
* src/_forms.css
* src/_lists.css
* src/_links.css
* src/_utilities.css
* src/_media-queries.css

#### Positioning and Layout Stuff (10)

* src/_coordinates.css
* src/_display.css
* src/_floats.css
* src/_position.css
* src/_spacing.css
* src/_clears.css
* src/_heights.css
* src/_widths.css
* src/_max-widths.css
* src/_flexbox.css

#### Typography Stuff (8)

* src/_font-style.css
* src/_font-weight.css
* src/_letter-spacing.css
* src/_line-height.css
* src/_text-align.css
* src/_type-scale.css
* src/_typography.css
* src/_white-space.css

#### Borders (4)

* src/_borders.css
* src/_border-radius.css
* src/_border-style.css
* src/_border-widths.css

#### Miscellaneous (1)

* src/_box-shadow.css


## Why TACHYONS with AMP?

It's atomic, has good documentation, and is actively maintained. Atomic (or functional) CSS works well with AMP, because 80% of what you'll probably need is generalised into 20% of reusable well-defined style classes. Also, the web should be as semantic as possible - so something like this:

```html
<div class="this-is-a-grid it-should-wrap it-should-center blue-background">
  <div class="this-is-an-item red-background">Item 1</div>
  <div class="this-is-an-item yellow-background">Item 2</div>
  <div class="this-is-an-item orange-background">Item 3</div>
</div>
```

probably trumps this:

```html
<style>
  .class1 {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: blue;
  }
  .class2 {
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    background-color: red;
  }
  .class3 {
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    background-color: yellow;
  }
  .class2 {
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    background-color: orange;
  }
</style>
...
<div class="class1">
  <div class="class2">Item 1</div>
  <div class="class3">Item 2</div>
  <div class="class4">Item 3</div>
<div>
```

Read more about [TACHYONS](https://github.com/tachyons-css/tachyons) below:


# TACHYONS

Functional css for humans.

Quickly build and design new UI without writing css.

## Principles

* Everything should be 100% responsive
* Everything should be readable on any device
* Everything should be as fast as possible
* Designing in the browser should be easy
* It should be easy to change any interface or part of an interface without breaking any existing interfaces
* Doing one thing extremely well promotes reusability and reduces repetition
* Documentation helps promote reusability and shared knowledge
* Css shouldn't impede accessibility or the default functionality of Html
* You should send the smallest possible amount of code to the user

## Features

* Mobile-first css architecture
* 490 accessible color combinations
* 8px baseline grid
* Multiple debugging utilities to reduce layout struggles
* Single-purpose class structure
* Optimized for maximum gzip compression
* Lightweight (~14kB)
* Usable across projects
* Growing open source component library
* Works well with plain html, react, ember, angular, rails, and more
* Infinitely nestable responsive grid system
* Built with Postcss

## Getting started

Docs can be found at http://tachyons.io/docs
The modules are generally pretty small and thus quick and easy to read.

### Use the CDN

The quickest and easiest way to start using tachyons is to include a reference
to the minified file in the head of your html file.

You can always grab the latest version with
```html
<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
```
You can also specify a specific version. The latest version is 4.9.0
```html
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css">
```

### Local Setup

Clone the repo from github and install dependencies through npm.

```
git clone https://github.com/tachyons-css/tachyons.git
cd tachyons
npm install
```

#### Dev

If you want to just use everything in tachyons/src as a jumping off point and
edit all the code yourself, you can compile all of your wonderful changes by
running

```npm start```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```npm run build:watch```

If you'd like to just build the css once without watching the src directory run

```npm run build```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions. To do this run the command

```npm run mutations```

## Docs
The tachyons docs located at http://tachyons.io are all open source and located at https://github.com/tachyons-css/tachyons-css.github.io

You can clone the docs and use them as a template for documenting your own design system / patterns / components.
While not everything is automated, the component library generation makes it extremely easy to
generate and organize the documentation for components as demonstrated at http://tachyons.io/components


## Contributing

Please read our [code of conduct](https://github.com/tachyons-css/tachyons/blob/master/code-of-conduct.md) for contributors.

## Tachyons in Production

A longer list of sites that use tachyons in production can be found in sites.md
We love letting the community see what people are building so please add your link to sites.md in a PR or by opening an issue if you're willing to share to your site or project.

**Featured Sites**

* https://interfacelovers.com
* https://npmjs.com
* https://womenwho.design
* https://friendstalkfrontend.com
* https://play.webvr.rocks
* https://gohugo.io
* https://coralproject.net
* http://www.philipyoungg.com
* https://gitpoint.co
* https://2017.nodeconf.com.ar
* https://goldenstaterecord.com
* http://hicuties.com
* https://urlbox.io
* https://fontawesome.com
* https://purple3.herokuapp.com
* http://blunt.af/tachy.app/
* https://fenderdigital.github.io/css-utilities/intro/
* https://play.cash

And of course...
* http://tachyons.io

## Sponsors

Development of Tachyons is supported by

* [Digital Ocean](https://digitalocean.com)
* [DWYL](https://dwyl.com)
* [VTEX](https://lab.vtex.com)
* [Manifold](https://manifold.co)

## Help

If you have a question or need help feel free to [open an issue here](https://github.com/tachyons-css/tachyons/issues/new) or jump into the [Tachyons slack channel](http://tachyons-slack-invite.herokuapp.com).

## License

MIT
