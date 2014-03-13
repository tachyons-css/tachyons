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

