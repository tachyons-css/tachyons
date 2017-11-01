# tachyons-outlines 1.0.3

Tachyons module for setting outlines

#### Stats

189 | 12 | 12
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-outlines
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-outlines
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-outlines.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-outlines";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-outlines@1.0.3/css/tachyons-outlines.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-outlines">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

  OUTLINES

*/
.outline { outline: 1px solid; }
.outline-transparent { outline: 1px solid transparent; }
.outline-0 { outline: 0; }
@media screen and (min-width: 48em) {
 .outline-ns { outline: 1px solid; }
 .outline-transparent-ns { outline: 1px solid transparent; }
 .outline-0-ns { outline: 0; }
}
@media screen and (min-width: 48em) and (max-width: 64em) {
 .outline-m { outline: 1px solid; }
 .outline-transparent-m { outline: 1px solid transparent; }
 .outline-0-m { outline: 0; }
 .outline-l { outline: 1px solid; }
 .outline-transparent-l { outline: 1px solid transparent; }
 .outline-0-l { outline: 0; }
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

