# tachyons-font-weight 5.0.0

Performance based css module.

#### Stats

299 | 44 | 44
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-font-weight
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-font-weight
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-font-weight.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-font-weight";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-font-weight@5.0.0/css/tachyons-font-weight.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-font-weight">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   FONT WEIGHT

*/
.normal { font-weight: normal; }
.b { font-weight: bold; }
.fw1 { font-weight: 100; }
.fw2 { font-weight: 200; }
.fw3 { font-weight: 300; }
.fw4 { font-weight: 400; }
.fw5 { font-weight: 500; }
.fw6 { font-weight: 600; }
.fw7 { font-weight: 700; }
.fw8 { font-weight: 800; }
.fw9 { font-weight: 900; }
@media screen and (min-width: 30em) {
 .normal-ns { font-weight: normal; }
 .b-ns { font-weight: bold; }
 .fw1-ns { font-weight: 100; }
 .fw2-ns { font-weight: 200; }
 .fw3-ns { font-weight: 300; }
 .fw4-ns { font-weight: 400; }
 .fw5-ns { font-weight: 500; }
 .fw6-ns { font-weight: 600; }
 .fw7-ns { font-weight: 700; }
 .fw8-ns { font-weight: 800; }
 .fw9-ns { font-weight: 900; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .normal-m { font-weight: normal; }
 .b-m { font-weight: bold; }
 .fw1-m { font-weight: 100; }
 .fw2-m { font-weight: 200; }
 .fw3-m { font-weight: 300; }
 .fw4-m { font-weight: 400; }
 .fw5-m { font-weight: 500; }
 .fw6-m { font-weight: 600; }
 .fw7-m { font-weight: 700; }
 .fw8-m { font-weight: 800; }
 .fw9-m { font-weight: 900; }
}
@media screen and (min-width: 60em) {
 .normal-l { font-weight: normal; }
 .b-l { font-weight: bold; }
 .fw1-l { font-weight: 100; }
 .fw2-l { font-weight: 200; }
 .fw3-l { font-weight: 300; }
 .fw4-l { font-weight: 400; }
 .fw5-l { font-weight: 500; }
 .fw6-l { font-weight: 600; }
 .fw7-l { font-weight: 700; }
 .fw8-l { font-weight: 800; }
 .fw9-l { font-weight: 900; }
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

