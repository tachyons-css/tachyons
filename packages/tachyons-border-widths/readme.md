# tachyons-border-widths 3.0.0

Border width CSS module for Tachyons

#### Stats

424 | 40 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-border-widths
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-border-widths
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-border-widths.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-border-widths";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-border-widths@3.0.0/css/tachyons-border-widths.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-border-widths">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   BORDER WIDTHS

   Base:
     bw = border-width

   Modifiers:
     0 = 0 width border
     1 = 1st step in border-width scale
     2 = 2nd step in border-width scale
     3 = 3rd step in border-width scale
     4 = 4th step in border-width scale
     5 = 5th step in border-width scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.bw0 { border-width: 0; }
.bw1 { border-width: .125rem; }
.bw2 { border-width: .25rem; }
.bw3 { border-width: .5rem; }
.bw4 { border-width: 1rem; }
.bw5 { border-width: 2rem; }
.bt-0 { border-top-width: 0; }
.br-0 { border-right-width: 0; }
.bb-0 { border-bottom-width: 0; }
.bl-0 { border-left-width: 0; }
@media screen and (min-width: 30em) {
 .bw0-ns { border-width: 0; }
 .bw1-ns { border-width: .125rem; }
 .bw2-ns { border-width: .25rem; }
 .bw3-ns { border-width: .5rem; }
 .bw4-ns { border-width: 1rem; }
 .bw5-ns { border-width: 2rem; }
 .bt-0-ns { border-top-width: 0; }
 .br-0-ns { border-right-width: 0; }
 .bb-0-ns { border-bottom-width: 0; }
 .bl-0-ns { border-left-width: 0; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .bw0-m { border-width: 0; }
 .bw1-m { border-width: .125rem; }
 .bw2-m { border-width: .25rem; }
 .bw3-m { border-width: .5rem; }
 .bw4-m { border-width: 1rem; }
 .bw5-m { border-width: 2rem; }
 .bt-0-m { border-top-width: 0; }
 .br-0-m { border-right-width: 0; }
 .bb-0-m { border-bottom-width: 0; }
 .bl-0-m { border-left-width: 0; }
}
@media screen and (min-width: 60em) {
 .bw0-l { border-width: 0; }
 .bw1-l { border-width: .125rem; }
 .bw2-l { border-width: .25rem; }
 .bw3-l { border-width: .5rem; }
 .bw4-l { border-width: 1rem; }
 .bw5-l { border-width: 2rem; }
 .bt-0-l { border-top-width: 0; }
 .br-0-l { border-right-width: 0; }
 .bb-0-l { border-bottom-width: 0; }
 .bl-0-l { border-left-width: 0; }
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

