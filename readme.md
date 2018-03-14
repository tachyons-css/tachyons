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

```html
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css">
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

### Community Resources

- [DWYL Learn Tachyons](https://github.com/dwyl/learn-tachyons): Learn how to use Tachyons to craft beautiful, responsive, functional and fast UI with minimal CSS
- [Tachyons TLDR](https://tachyons-tldr.now.sh/#/classes): Quick lookup for Tachyons classes, scales and color palette
- [Tachyons Pro](https://tachyons.pro/): Fun quiz for memorizing class names

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
