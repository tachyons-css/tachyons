# TACHYONS

WIP (heavily in flux)

A performance-first css framework

Single purpose classes that are extremely composable.

## Getting started

Set up the project by cloning the repo, navigating into it, and installing the necessary dependencies by running the following commands:

```
 git clone git@github.com:mrmrs/tachyons.git yourProject
 cd yourProject
 rm -rf .git
 git init
 git add remote git@github.com/yourUserName/yourProject.git
 npm install
```

### To run the development environment
```
npm start
```

This will watch the sass directory and do the following on file change:
  • Compile scss files down to css/tachyons.css 
  • Run autoprefixer on css/tachyons.css (this allows you to keep vendor prefixes out of your css)
  • Run csslint and spit the output to your terminal window where you are running gulp
  • Run an instance of browser-sync - this causes any browsers or devices pointing to your local server to reload on file change.

## Perf Stats

Coming soon...

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
