# tachyons-aspect-ratios 1.0.0

Css for setting the aspect ratio of an element.

#### Stats

723 | 52 | 84
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-aspect-ratios
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-aspect-ratios
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-aspect-ratios.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-aspect-ratios";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-aspect-ratios@1.0.0/css/tachyons-aspect-ratios.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-aspect-ratios">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

   ASPECT RATIOS

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
.aspect-ratio--9x16 { padding-bottom: 177.77%; }
.aspect-ratio--4x3 { padding-bottom: 75%; }
.aspect-ratio--3x4 { padding-bottom: 133.33%; }
.aspect-ratio--6x4 { padding-bottom: 66.6%; }
.aspect-ratio--4x6 { padding-bottom: 150%; }
.aspect-ratio--8x5 { padding-bottom: 62.5%; }
.aspect-ratio--5x8 { padding-bottom: 160%; }
.aspect-ratio--7x5 { padding-bottom: 71.42%; }
.aspect-ratio--5x7 { padding-bottom: 140%; }
.aspect-ratio--1x1 { padding-bottom: 100%; }
.aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
@media screen and (min-width: 30em) {
 .aspect-ratio-ns { height: 0; position: relative; }
 .aspect-ratio--16x9-ns { padding-bottom: 56.25%; }
 .aspect-ratio--9x16-ns { padding-bottom: 177.77%; }
 .aspect-ratio--4x3-ns { padding-bottom: 75%; }
 .aspect-ratio--3x4-ns { padding-bottom: 133.33%; }
 .aspect-ratio--6x4-ns { padding-bottom: 66.6%; }
 .aspect-ratio--4x6-ns { padding-bottom: 150%; }
 .aspect-ratio--8x5-ns { padding-bottom: 62.5%; }
 .aspect-ratio--5x8-ns { padding-bottom: 160%; }
 .aspect-ratio--7x5-ns { padding-bottom: 71.42%; }
 .aspect-ratio--5x7-ns { padding-bottom: 140%; }
 .aspect-ratio--1x1-ns { padding-bottom: 100%; }
 .aspect-ratio--object-ns { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .aspect-ratio-m { height: 0; position: relative; }
 .aspect-ratio--16x9-m { padding-bottom: 56.25%; }
 .aspect-ratio--9x16-m { padding-bottom: 177.77%; }
 .aspect-ratio--4x3-m { padding-bottom: 75%; }
 .aspect-ratio--3x4-m { padding-bottom: 133.33%; }
 .aspect-ratio--6x4-m { padding-bottom: 66.6%; }
 .aspect-ratio--4x6-m { padding-bottom: 150%; }
 .aspect-ratio--8x5-m { padding-bottom: 62.5%; }
 .aspect-ratio--5x8-m { padding-bottom: 160%; }
 .aspect-ratio--7x5-m { padding-bottom: 71.42%; }
 .aspect-ratio--5x7-m { padding-bottom: 140%; }
 .aspect-ratio--1x1-m { padding-bottom: 100%; }
 .aspect-ratio--object-m { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
}
@media screen and (min-width: 60em) {
 .aspect-ratio-l { height: 0; position: relative; }
 .aspect-ratio--16x9-l { padding-bottom: 56.25%; }
 .aspect-ratio--9x16-l { padding-bottom: 177.77%; }
 .aspect-ratio--4x3-l { padding-bottom: 75%; }
 .aspect-ratio--3x4-l { padding-bottom: 133.33%; }
 .aspect-ratio--6x4-l { padding-bottom: 66.6%; }
 .aspect-ratio--4x6-l { padding-bottom: 150%; }
 .aspect-ratio--8x5-l { padding-bottom: 62.5%; }
 .aspect-ratio--5x8-l { padding-bottom: 160%; }
 .aspect-ratio--7x5-l { padding-bottom: 71.42%; }
 .aspect-ratio--5x7-l { padding-bottom: 140%; }
 .aspect-ratio--1x1-l { padding-bottom: 100%; }
 .aspect-ratio--object-l { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
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

