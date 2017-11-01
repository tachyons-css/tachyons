# tachyons-background-size 5.0.0

Background size CSS module for Tachyons

#### Stats

279 | 8 | 8
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-background-size
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-background-size
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-background-size.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-background-size";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-background-size@5.0.0/css/tachyons-background-size.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-background-size">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   BACKGROUND SIZE

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/*
  Often used in combination with background image set as an inline style
  on an html element.
*/
.cover { background-size: cover; }
.contain { background-size: contain; }
@media screen and (min-width: 30em) {
 .cover-ns { background-size: cover; }
 .contain-ns { background-size: contain; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .cover-m { background-size: cover; }
 .contain-m { background-size: contain; }
}
@media screen and (min-width: 60em) {
 .cover-l { background-size: cover; }
 .contain-l { background-size: contain; }
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

