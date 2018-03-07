# Getting Started

Docs can be found at https://tachyons.io/docs.
The modules are generally pretty small and thus quick and easy to read.

## Start a new project

Get setup and running with this ~7 minute screencast.
Download the project and learn how to customize the tachyons source files and recompile the css using the postcss build system.

<iframe src="https://player.vimeo.com/video/174698456" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Use the CDN

The quickest and easiest way to start using tachyons is to include a reference
to the minified file in the head of your html file.

You can always grab the latest version with:

```html
<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
```

You can also specify a specific version. The latest version is 5.0.0:

```html
<link rel="stylesheet" href="https://unpkg.com/tachyons@5.0.0/css/tachyons.min.css">
```

### Html

Save this file to your computer to start prototyping right away without worrying about setting up a dev environment.
You can open the file in a web browser and view your changes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>Tachyons</title>
    <meta name="author" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/tachyons.css">
  </head>
  <body>

  </body>
</html>
```

## npm

```sh
npm install --save tachyons
```

### Customizing the build

You can use the Tachyons CLI to run a customized build

```sh
npm install --save-dev tachyons-cli
```

Then, `import` the file into your source file:

```css
/* app.css */
@import "tachyons";
```

And add an npm script to run the css build

```json
{
  "scripts": {
    "css:build": "tachyons app.css > dist/c.css --minify"
  }
}
```

## Local Setup

Clone the repo from github and install dependencies through npm.

```sh
git clone https://github.com/tachyons-css/tachyons.git
cd tachyons
npm install
```

#### Dev

If you want to just use everything in tachyons/src as a jumping off point and
edit all the code yourself, you can compile all of your wonderful changes by
running

```sh
npm start
```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```sh
npm run build:watch
```

If you'd like to just build the css once without watching the src directory run

```sh
npm run build
```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions. To do this run the command

```sh
npm run mutations
```
