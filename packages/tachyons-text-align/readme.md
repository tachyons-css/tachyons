# tachyons-text-align 3.1.0

Performance based css module.

#### Stats

354 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-text-align
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-text-align
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-text-align.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-text-align";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-text-align@3.1.0/css/tachyons-text-align.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-text-align">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

  TEXT ALIGN

  Docs: http://tachyons.io/docs/typography/text-align/
  Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

  Base
    t = text-align

  Modifiers
    l = left
    r = right
    c = center
    j = justify

  Media Query Extensions:
    -ns = not-small
    -m  = medium
    -l  = large

*/
.tl { text-align: left; }
.tr { text-align: right; }
.tc { text-align: center; }
.tj { text-align: justify; }
@media screen and (min-width: 30em) {
 .tl-ns { text-align: left; }
 .tr-ns { text-align: right; }
 .tc-ns { text-align: center; }
 .tj-ns { text-align: justify; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .tl-m { text-align: left; }
 .tr-m { text-align: right; }
 .tc-m { text-align: center; }
 .tj-m { text-align: justify; }
}
@media screen and (min-width: 60em) {
 .tl-l { text-align: left; }
 .tr-l { text-align: right; }
 .tc-l { text-align: center; }
 .tj-l { text-align: justify; }
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

