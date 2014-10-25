# TACHYONS

WIP (heavily in flux).
More documentation and examples will be coming soon.

Build responsive, performant, and easy to maintain interfaces faster.

## Principles

* Everything should be 100% responsive
* Everything should be readable on any device
* Everything should be as performant as possible 
* Designing in the browser should be easy
* It should be easy to change an interface without breaking any existing interfaces
* Doing one thing extremely well promotes reusability and reduces repetition 

## Features

* Mobile-first css 
* Single-purpose class architecture
* Optimized for maximum gzip compression
* 8.57kB when minified and gzipped
* Usable across projects
* Infinitely nestable responsive grid system
* Nice default color palettes
* Currently built on sass. Will eventually move the main build to rework, 
but will offer ports for less, sass, stylus, and vanilla css.

## Getting started

The easiest way to use tachyons is to include the minified file in the head. 
You can include the latest, minified version of tachyons by including this in the head of your html file

### Include it in a project
```
<link rel="stylesheet" src="http://tachyons.io/css/tachyons.min.css">
```

I will add version controlled cdn hosted options soon.

### Modify the source
Set up the project by cloning the repo, navigating into it, and installing the necessary dependencies by running the following commands:

```
 git clone git@github.com:mrmrs/tachyons.git yourProject
 cd yourProject
 rm -rf .git
 git init
 git add remote git@github.com/yourUserName/yourProject.git
 npm install
```

You can alternatively fork the repo and clone your own version of it.

### To run the development environment
```
npm start
```
This will watch the sass directory and do the following on file change:
* Compile scss files down to css/tachyons.css and css/tachyons.min.css
* Run autoprefixer on css/tachyons.css (this allows you to keep vendor prefixes out of your source files)
* Run csslint and print the results to your terminal window. 
* Run an instance of browser-sync - this causes any browsers or devices pointing to your local server to reload on file change. It will also keep all browsers in sync with eachother i.e. they will
all scroll simultaneously. If you fill out a form on one device all devices will be updated with that content. It's a huge help if you are testing multiple browsers or devices.

## Built with Tachyons

* http://mn-ml.cc
* http://clrs.cc
* http://pesticide.io
* http://mrmrs.io/btns/
* http://zachhurd.com
* http://mrmrs.cc
* http://mrmrs.io
* http://mrmrs.io/up/
* http://mrmrs.io/beats/
* http://designbytyping.com
* http://☠☣.ws

## Tachyons is built with

* https://github.com/gulpjs/gulp
* https://github.com/shakyShane/browser-sync
* https://github.com/dlmanning/gulp-sass
* https://github.com/postcss/autoprefixer
* https://github.com/jonathanepollack/gulp-minify-css
* https://github.com/hparra/gulp-rename
* https://github.com/sun-zheng-an/gulp-shell
* https://github.com/sindresorhus/gulp-size
* https://github.com/CSSLint/csslint
* https://github.com/coderhaoxin/gulp-file-include
* https://github.com/t32k/stylestats
* https://github.com/giakki/uncss
* https://github.com/gulpjs/gulp-util
* https://github.com/floatdrop/gulp-watch

## File Sizes

|         Name         |                |    gzipped     |
|----------------------|----------------|----------------|
|   tachyons.css       |    74.43 kB    |    13.03 kB    | 
|   tachyons.min.css   |    47.43 kB    |     8.57 kB    |

## Class Names

As tachyons started out as an experiment in css performance - many of the names
were programmatically generated using vim macros based on the content of the properties and values 
they represent. As I have begun to work on tachyons more and use it in the wild, 
I've begun to codify common classes to things that my brain naturally leans towards remembering. 
That being said I think the naming in Tachyons needs a lot of work and I am open to hearing peoples
feedback on things they like and things they don't like. Once Tachyons is a little more finished I
will be generating different 'flavors' of the framework. One version being a more verbose class naming system
that seems to be what many people prefer. 

 
## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
