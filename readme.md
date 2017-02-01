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
You can also specify a specific version. The latest version is 4.6.1
```html
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css">
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

## Websites that Use Tachyons
(if you have a project that uses Tachyons feel free to make a PR to add it to this list)

* https://nicenice.co
* https://coralproject.net
* https://goldenstaterecord.com
* http://www.sogol.co
* https://segment.com
* http://hicuties.com
* https://urlbox.io
* https://community.algolia.com/wordpress/
* http://studiocraft.cc
* http://samueldregan.com
* https://filmstrip.cf
* https://voteplz.com
* http://bluebottlecoffee.com
* http://cyclelove.cc
* http://topher.design
* http://iheanyi.com/
* http://johnotander.com
* https://vimgifs.com
* http://jon.gold/txt
* http://rene.jon.gold
* https://tinychime.github.io/jekyons/
* http://prnt.cc
* http://spenhar.com
* http://randoma11y.com
* http://www.csspurge.com
* http://clrs.cc
* https://cljsjs.github.io
* https://www.getnoodl.es
* https://natwelch.com
* http://pesticide.io
* http://zachhurd.com
* http://gfffs.com
* https://wordpress.org/themes/vanilla-milkshake/
* http://comics.hongkonggong.com/
* https://accessmyinfo.hk/#/
* https://accessmyinfo.org/#/
* http://rene.jon.gold
* http://randoma11y.com
* http://designbytyping.com
* http://colepeters.com
* https://atmin.github.io/funponent/
* http://blog.colepeters.com
* http://aboutlife.com
* http://joinoneroom.com
* http://filipaonunes.com
* https://vakra.band
* http://tylernford.com
* https://adventuretron.org
* https://uptimeumbrella.com
* http://www.talbs.me
* http://seanoshea.me
* https://www.hiaida.com
* http://maxogden.github.io/screencat/
* http://numenta.com
* https://windtoday.co
* http://claudio.netlify.com
* http://devday-ar.com
* http://mrmrs.io/up
* http://mrmrs.io/profile/
* http://mrmrs.io/gradients
* http://mrmrs.io/btns/
* http://mrmrs.io/beats/
* http://mrmrs.io/writing
* http://mrmrs.cc
* http://mn-ml.cc
* https://fontawesome.com

And of course...
* http://tachyons.io

## Help

If you have a question or need help feel free to open an issue here or jump into the [Tachyons slack channel](http://tachyons-slack-invite.herokuapp.com).

## License

MIT
