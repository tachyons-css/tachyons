# tachyons-font-family 4.2.5

Performance based css module.

#### Stats

439 | 16 | 15
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-font-family
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-font-family
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-font-family.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-font-family";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-font-family@4.2.5/css/tachyons-font-family.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-font-family">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   FONT FAMILY GROUPS
   Docs: http://tachyons.io/docs/typography/font-family/

*/
.sans-serif { font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif; }
.serif { font-family: georgia, times, serif; }
.system-sans-serif { font-family: sans-serif; }
.system-serif { font-family: serif; }
/* Monospaced Typefaces (for code) */
/* From http://cssfontstack.com */
code, .code { font-family: Consolas, monaco, monospace; }
.courier { font-family: 'Courier Next', courier, monospace; }
/* Sans-Serif Typefaces */
.helvetica { font-family: 'helvetica neue', helvetica, sans-serif; }
.avenir { font-family: 'avenir next', avenir, sans-serif; }
/* Serif Typefaces */
.athelas { font-family: athelas, georgia, serif; }
.georgia { font-family: georgia, serif; }
.times { font-family: times, serif; }
.bodoni { font-family: "Bodoni MT", serif; }
.calisto { font-family: "Calisto MT", serif; }
.garamond { font-family: garamond, serif; }
.baskerville { font-family: baskerville, serif; }
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

