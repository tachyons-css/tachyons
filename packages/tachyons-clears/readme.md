# tachyons-clears 3.0.0

Performance based css module.

#### Stats

298 | 20 | 20
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-clears
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-clears
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-clears.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-clears";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-clears@3.0.0/css/tachyons-clears.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-clears">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   CLEARFIX

*/
/* Nicolas Gallaghers Clearfix solution
   Ref: http://nicolasgallagher.com/micro-clearfix-hack/ */
.cf:before, .cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
.cl { clear: left; }
.cr { clear: right; }
.cb { clear: both; }
.cn { clear: none; }
@media screen and (min-width: 30em) {
 .cl-ns { clear: left; }
 .cr-ns { clear: right; }
 .cb-ns { clear: both; }
 .cn-ns { clear: none; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .cl-m { clear: left; }
 .cr-m { clear: right; }
 .cb-m { clear: both; }
 .cn-m { clear: none; }
}
@media screen and (min-width: 60em) {
 .cl-l { clear: left; }
 .cr-l { clear: right; }
 .cb-l { clear: both; }
 .cn-l { clear: none; }
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

