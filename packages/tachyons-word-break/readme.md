# tachyons-word-break 3.0.0

Tachyons CSS module of utilities for setting word-break

#### Stats

187 | 12 | 12
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-word-break
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-word-break
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-word-break.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-word-break";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the CSS

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://npmcdn.com/tachyons-word-break@3.0.0/css/tachyons-word-break.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-word-break">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

  WORD BREAK

*/
.word-normal { word-break: normal; }
.word-wrap { word-break: break-all; }
.word-nowrap { word-break: keep-all; }
@media screen and (min-width: 30em) {
 .word-normal-ns { word-break: normal; }
 .word-wrap-ns { word-break: break-all; }
 .word-nowrap-ns { word-break: keep-all; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .word-normal-m { word-break: normal; }
 .word-wrap-m { word-break: break-all; }
 .word-nowrap-m { word-break: keep-all; }
}
@media screen and (min-width: 60em) {
 .word-normal-l { word-break: normal; }
 .word-wrap-l { word-break: break-all; }
 .word-nowrap-l { word-break: keep-all; }
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

