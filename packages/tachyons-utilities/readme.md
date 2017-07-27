# tachyons-utilities 1.2.5

Performance based css module.

#### Stats

481 | 7 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-utilities
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-utilities
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-utilities.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-utilities";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-utilities@1.2.5/css/tachyons-utilities.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-utilities">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   UTILITIES

*/
/* This is for fluid media that is embedded from third party sites like youtube, vimeo etc.
 * Wrap the outer element in aspect-ratio and then extend it with the desired ratio i.e
 * Make sure there are no height and width attributes on the embedded media.
 * Adapted from: https://github.com/suitcss/components-flex-embed
 *
 * Example:
 *
 * <div class="aspect-ratio aspect-ratio--16x9">
 *  <iframe class="aspect-ratio--object"></iframe>
 * </div>
 *
 * */
.aspect-ratio { height: 0; position: relative; }
.aspect-ratio--16x9 { padding-bottom: 56.25%; }
.aspect-ratio--4x3 { padding-bottom: 75%; }
.aspect-ratio--8x5 { padding-bottom: 62.5%; }
.aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
.overflow-container { overflow-y: scroll; }
.center { margin-right: auto; margin-left: auto; }
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

