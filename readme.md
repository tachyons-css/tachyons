# Buoy Symptoms A-Z Styles

Based off Tachyons library.

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

## Getting started

Tachyons Docs can be found at http://tachyons.io/docs
The modules are generally pretty small and thus quick and easy to read.

### Use the CDN

The quickest and easiest way to start using tachyons is to include a reference
to the minified file in the head of your html file.

You can always grab the latest version with
```html
<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
```
You can also specify a specific version. The latest version is 4.9.1
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


## Contributing

Please read our [code of conduct](https://github.com/tachyons-css/tachyons/blob/master/code-of-conduct.md) for contributors.


## Help

If you have a question or need help feel free to [open an issue here](https://github.com/tachyons-css/tachyons/issues/new) or jump into the [Tachyons slack channel](http://tachyons-slack-invite.herokuapp.com).

## License

MIT
