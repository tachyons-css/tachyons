# tachyons-z-index 1.0.3

Tachyons css module for setting z-index on elements

#### Stats

349 | 12 | 12
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-z-index
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-z-index
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-z-index.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-z-index";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-z-index@1.0.3/css/tachyons-z-index.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-z-index">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

  Tachyons
  z-index

  DOCUMENTATION

  MDN: https://developer.mozilla.org/en/docs/Web/CSS/z-index
  Spec: http://www.w3.org/TR/CSS2/zindex.html

  Tips on extending:
  There might be a time worth using negative z-index values.
  Or if you are using tachyons with another project, you might need to
  adjust these values to suit your needs.

*/
.z-0 { z-index: 0; }
.z-1 { z-index: 1; }
.z-2 { z-index: 2; }
.z-3 { z-index: 3; }
.z-4 { z-index: 4; }
.z-5 { z-index: 5; }
.z-999 { z-index: 999; }
.z-9999 { z-index: 9999; }
.z-max { z-index: 2147483647; }
.z-inherit { z-index: inherit; }
.z-initial { z-index: initial; }
.z-unset { z-index: unset; }
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

