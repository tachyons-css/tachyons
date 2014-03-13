# TACHYONS

A performance-first css framework

Simple modules and components that move faster than the speed of light.



## Getting started

Set up the project by cloning the repo, navigating into it, then installing the necessary dependencies by running:

```
 git clone git@github:mrmrs/tachyons.git yourProject
 cd yourProject
 rm -rf .git
 git init
 git add remote git@github.com/yourUserName/yourProject.git
 npm install -g gulp
 npm install .
```

### To run the development environment

Once you've run npm install just run this very complicated command in your terminal to start gulp

    gulp

This will watch the sass directory and do the following on file change:
  • Compile scss files down to css/i.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your css)
  • Run csslint and spit the output to your terminal window where you are running gulp
  • Run an instance of livereload. With the chrome and safari extensions, you can see
    changes in the browser without hitting refresh

### To minify assets for production

    gulp production

This will
  • Compile scss files down to css/i.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your css)
  • Minify all css files and move them to in the ./css
  • Compress / minify all images in the ./img directory
  • Compress / minify all svg elements in the ./img/svg/ directory

## Perf Stats

This will be where I track performance benchmarks

### File sizes

```
i.css       53kb
i.min.css   36kb
gzipped     6.2kb
```

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
