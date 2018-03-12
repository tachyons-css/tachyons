export const meta = {
  title: 'Installation / Overview / Docs / TACHYONS',
  subNav: 'overview',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/installation.md'
}

# Installation

Tachyons can be installed and run in a handful of different ways.
If you're not comfortable with git and build tooling, we recommend heading over to the [Getting Started](./getting-started.md) page and use the starter html template.

## Using npm

```sh
npm install --save tachyons
```

## Customizing the build

You can use the Tachyons CLI to run a customized build, get started by installing it:

```sh
npm install --save-dev tachyons-cli
```

Then, `import` the file into your source css:

```css
/* app.css */
@import "tachyons";
```

And add an npm script to your `package.json` in order to run the css build:

```json
{
  "scripts": {
    "css:build": "tachyons app.css > dist/c.css --minify"
  }
}
```

## Local Setup

If you'd like, you can also get started with Tachyons straight from the source (or your own fork).
Taking this route is great if you don't want to set up your own build tooling since you can use the exact tooling we use to build Tachyons itself.

Clone the repo from github and install dependencies through npm:

```sh
git clone https://github.com/tachyons-css/tachyons.git
cd tachyons
npm install
```

### Dev

If you want to just use everything in tachyons/src as a jumping off point and edit all the code yourself,
you can compile all of your wonderful changes by running:

```sh
npm start
```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```sh
npm run build:watch
```

If you'd like to just build the css once without watching the src directory run:

```sh
npm run build
```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once.
This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions.
To do this run the command:

```sh
npm run mutations
```
