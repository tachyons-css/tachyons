# TACHYONS

CSS for designing faster than the speed of light.

For the full set of documentation, please see [tachyons.io](http://tachyons.io).

## About

Tachyons is a work in progress and still heavily in flux.
The important parts of tachyons are the separation of concerns and the mobile-first
and modular architecture.

More documentation and examples will be coming. For now - reading the source files
in the src directory are a great way to get up to speed. I promise they are not complicated.

There is now a [Tachyons slack channel](http://tachyons-slack-invite.herokuapp.com). Submit your email to be automatically invited.

## TLDR;

Build responsive, performant, and easy to maintain interfaces faster than the speed of light.

## Principles

* Everything should be 100% responsive
* Everything should be readable on any device
* Everything should be as performant as possible
* Designing in the browser should be easy
* It should be easy to change any interface or part of an interface without breaking any existing interfaces
* Doing one thing extremely well promotes reusability and reduces repetition
* CSS is global. HTML is not. Send the smallest amount of code to the user as possible.

## Features

* Mobile-first css
* Single-purpose class architecture
* Optimized for maximum gzip compression
* Less than 20kB when minified and gzipped
* Usable across projects
* Infinitely nestable responsive grid system
* Several color palettes
* Currently built on rework

## Getting started

The easiest way to use tachyons is to include the minified file in the head.
If you want to reduce the size of the library greatly on production I suggest
using [uncss](https://github.com/giakki/uncss) to remove styles you aren't referencing.

### Modify the source
Set up the project by cloning the repo, navigating into it, and installing the necessary dependencies by running the following commands:

```
 git clone git@github.com:mrmrs/tachyons.git yourProject
 cd yourProject
 rm -rf .git
 git init
 git add remote git@github.com/yourUserName/yourProject.git
 npm install . && npm start
```

You can alternatively fork the repo and clone your own version of it.

### To run the development environment
```
npm start
```
This will watch the src directory and do the following on file change:
* Compile rework css files
* Run autoprefixer (this allows you to keep vendor prefixes out of your source files)
* Run an instance of browser-sync - this causes any browsers or devices pointing to your local server to reload on file change. It will also keep all browsers in sync with eachother i.e. they will all scroll simultaneously. If you fill out a form on one device all devices will be updated with that content. It can be a huge help if you are testing multiple browsers or devices.

## Some things I've built with Tachyons

* http://joinoneroom.com
* http://mn-ml.cc
* http://clrs.cc
* http://gfffs.com
* http://pesticide.io
* http://mrmrs.io/btns/
* http://zachhurd.com
* http://mrmrs.cc
* http://mrmrs.io
* http://mrmrs.io/up/
* http://mrmrs.io/beats/
* http://designbytyping.com
* http://☠☣.ws

## A Note on Class Names

As tachyons started out as an experiment in css performance - many of the names
were programmatically generated using vim macros based on the content of the properties and values
they represent. As I have begun to work on tachyons more and use it in the wild,
I've begun to codify common classes to things that my brain naturally leans towards remembering.
I like unix a lot and subscribe to naming conventions like cp over copy for common classes that I use frequently.

That being said I think the naming in Tachyons needs work and I am open to hearing peoples
feedback on things they like and also the things they don't like. Once Tachyons is a little more finished I
will be generating different 'flavors' of the framework that use different naming patterns.
One version being a more verbose class naming system that seems to be aligned with what many people prefer.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
