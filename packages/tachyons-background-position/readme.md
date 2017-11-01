# tachyons-background-position 1.0.0

Tachyons module for setting background position of images.

#### Stats

371 | 20 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-background-position
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-background-position
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-background-position.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-background-position";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/tachyons-background-position@1.0.0/css/tachyons-background-position.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-background-position">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

    BACKGROUND POSITION

    Base:
    bg = background

    Modifiers:
    -center = center center
    -top = top center
    -right = center right
    -bottom = bottom center
    -left = center left

    Media Query Extensions:
      -ns = not-small
      -m  = medium
      -l  = large

 */
.bg-center { background-repeat: no-repeat; background-position: center center; }
.bg-top { background-repeat: no-repeat; background-position: top center; }
.bg-right { background-repeat: no-repeat; background-position: center right; }
.bg-bottom { background-repeat: no-repeat; background-position: bottom center; }
.bg-left { background-repeat: no-repeat; background-position: center left; }
@media screen and (min-width: 30em) {
 .bg-center-ns { background-repeat: no-repeat; background-position: center center; }
 .bg-top-ns { background-repeat: no-repeat; background-position: top center; }
 .bg-right-ns { background-repeat: no-repeat; background-position: center right; }
 .bg-bottom-ns { background-repeat: no-repeat; background-position: bottom center; }
 .bg-left-ns { background-repeat: no-repeat; background-position: center left; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .bg-center-m { background-repeat: no-repeat; background-position: center center; }
 .bg-top-m { background-repeat: no-repeat; background-position: top center; }
 .bg-right-m { background-repeat: no-repeat; background-position: center right; }
 .bg-bottom-m { background-repeat: no-repeat; background-position: bottom center; }
 .bg-left-m { background-repeat: no-repeat; background-position: center left; }
}
@media screen and (min-width: 60em) {
 .bg-center-l { background-repeat: no-repeat; background-position: center center; }
 .bg-top-l { background-repeat: no-repeat; background-position: top center; }
 .bg-right-l { background-repeat: no-repeat; background-position: center right; }
 .bg-bottom-l { background-repeat: no-repeat; background-position: bottom center; }
 .bg-left-l { background-repeat: no-repeat; background-position: center left; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC

