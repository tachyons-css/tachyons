# tachyons-flexbox 2.0.0

Flexbox CSS module for Tachyons

#### Stats

1064 | 152 | 160
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-flexbox
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-flexbox
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-flexbox.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-flexbox";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-flexbox@2.0.0/css/tachyons-flexbox.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-flexbox">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

  FLEXBOX

  Media Query Extensions:
   -ns = not-small
   -m  = medium
   -l  = large

*/
.flex { display: flex; }
.inline-flex { display: inline-flex; }
/* 1. Fix for Chrome 44 bug.
 * https://code.google.com/p/chromium/issues/detail?id=506893 */
.flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
.flex-none { flex: none; }
.flex-column { flex-direction: column; }
.flex-row { flex-direction: row; }
.flex-wrap { flex-wrap: wrap; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }
.self-start { align-self: flex-start; }
.self-end { align-self: flex-end; }
.self-center { align-self: center; }
.self-baseline { align-self: baseline; }
.self-stretch { align-self: stretch; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.content-start { align-content: flex-start; }
.content-end { align-content: flex-end; }
.content-center { align-content: center; }
.content-between { align-content: space-between; }
.content-around { align-content: space-around; }
.content-stretch { align-content: stretch; }
.order-0 { order: 0; }
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
.order-4 { order: 4; }
.order-5 { order: 5; }
.order-6 { order: 6; }
.order-7 { order: 7; }
.order-8 { order: 8; }
.order-last { order: 99999; }
@media screen and (min-width: 30em) {
 .flex-ns { display: flex; }
 .inline-flex-ns { display: inline-flex; }
 .flex-auto-ns { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
 .flex-none-ns { flex: none; }
 .flex-column-ns { flex-direction: column; }
 .flex-row-ns { flex-direction: row; }
 .flex-wrap-ns { flex-wrap: wrap; }
 .items-start-ns { align-items: flex-start; }
 .items-end-ns { align-items: flex-end; }
 .items-center-ns { align-items: center; }
 .items-baseline-ns { align-items: baseline; }
 .items-stretch-ns { align-items: stretch; }
 .self-start-ns { align-self: flex-start; }
 .self-end-ns { align-self: flex-end; }
 .self-center-ns { align-self: center; }
 .self-baseline-ns { align-self: baseline; }
 .self-stretch-ns { align-self: stretch; }
 .justify-start-ns { justify-content: flex-start; }
 .justify-end-ns { justify-content: flex-end; }
 .justify-center-ns { justify-content: center; }
 .justify-between-ns { justify-content: space-between; }
 .justify-around-ns { justify-content: space-around; }
 .content-start-ns { align-content: flex-start; }
 .content-end-ns { align-content: flex-end; }
 .content-center-ns { align-content: center; }
 .content-between-ns { align-content: space-between; }
 .content-around-ns { align-content: space-around; }
 .content-stretch-ns { align-content: stretch; }
 .order-0-ns { order: 0; }
 .order-1-ns { order: 1; }
 .order-2-ns { order: 2; }
 .order-3-ns { order: 3; }
 .order-4-ns { order: 4; }
 .order-5-ns { order: 5; }
 .order-6-ns { order: 6; }
 .order-7-ns { order: 7; }
 .order-8-ns { order: 8; }
 .order-last-ns { order: 99999; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .flex-m { display: flex; }
 .inline-flex-m { display: inline-flex; }
 .flex-auto-m { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
 .flex-none-m { flex: none; }
 .flex-column-m { flex-direction: column; }
 .flex-row-m { flex-direction: row; }
 .flex-wrap-m { flex-wrap: wrap; }
 .items-start-m { align-items: flex-start; }
 .items-end-m { align-items: flex-end; }
 .items-center-m { align-items: center; }
 .items-baseline-m { align-items: baseline; }
 .items-stretch-m { align-items: stretch; }
 .self-start-m { align-self: flex-start; }
 .self-end-m { align-self: flex-end; }
 .self-center-m { align-self: center; }
 .self-baseline-m { align-self: baseline; }
 .self-stretch-m { align-self: stretch; }
 .justify-start-m { justify-content: flex-start; }
 .justify-end-m { justify-content: flex-end; }
 .justify-center-m { justify-content: center; }
 .justify-between-m { justify-content: space-between; }
 .justify-around-m { justify-content: space-around; }
 .content-start-m { align-content: flex-start; }
 .content-end-m { align-content: flex-end; }
 .content-center-m { align-content: center; }
 .content-between-m { align-content: space-between; }
 .content-around-m { align-content: space-around; }
 .content-stretch-m { align-content: stretch; }
 .order-0-m { order: 0; }
 .order-1-m { order: 1; }
 .order-2-m { order: 2; }
 .order-3-m { order: 3; }
 .order-4-m { order: 4; }
 .order-5-m { order: 5; }
 .order-6-m { order: 6; }
 .order-7-m { order: 7; }
 .order-8-m { order: 8; }
 .order-last-m { order: 99999; }
}
@media screen and (min-width: 60em) {
 .flex-l { display: flex; }
 .inline-flex-l { display: inline-flex; }
 .flex-auto-l { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
 .flex-none-l { flex: none; }
 .flex-column-l { flex-direction: column; }
 .flex-row-l { flex-direction: row; }
 .flex-wrap-l { flex-wrap: wrap; }
 .items-start-l { align-items: flex-start; }
 .items-end-l { align-items: flex-end; }
 .items-center-l { align-items: center; }
 .items-baseline-l { align-items: baseline; }
 .items-stretch-l { align-items: stretch; }
 .self-start-l { align-self: flex-start; }
 .self-end-l { align-self: flex-end; }
 .self-center-l { align-self: center; }
 .self-baseline-l { align-self: baseline; }
 .self-stretch-l { align-self: stretch; }
 .justify-start-l { justify-content: flex-start; }
 .justify-end-l { justify-content: flex-end; }
 .justify-center-l { justify-content: center; }
 .justify-between-l { justify-content: space-between; }
 .justify-around-l { justify-content: space-around; }
 .content-start-l { align-content: flex-start; }
 .content-end-l { align-content: flex-end; }
 .content-center-l { align-content: center; }
 .content-between-l { align-content: space-between; }
 .content-around-l { align-content: space-around; }
 .content-stretch-l { align-content: stretch; }
 .order-0-l { order: 0; }
 .order-1-l { order: 1; }
 .order-2-l { order: 2; }
 .order-3-l { order: 3; }
 .order-4-l { order: 4; }
 .order-5-l { order: 5; }
 .order-6-l { order: 6; }
 .order-7-l { order: 7; }
 .order-8-l { order: 8; }
 .order-last-l { order: 99999; }
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

