# tachyons-skins-pseudo 1.0.4

Classes for setting color and background color for focus and hover states.

#### Stats

1108 | 146 | 146
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-skins-pseudo
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-skins-pseudo
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-skins-pseudo.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-skins-pseudo";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-skins-pseudo@1.0.4/css/tachyons-skins-pseudo.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-skins-pseudo">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

   Tachyons
   COLOR VARIABLES

   Grayscale
   - Solids
   - Transparencies
   Colors

*/
/* 
  
   SKINS:PSEUDO

   Customize the color of an element when
   it is focused or hovered over.
 
 */
.hover-black:hover { color: #000; }
.hover-black:focus { color: #000; }
.hover-near-black:hover { color: #111; }
.hover-near-black:focus { color: #111; }
.hover-dark-gray:hover { color: #333; }
.hover-dark-gray:focus { color: #333; }
.hover-mid-gray:hover { color: #555; }
.hover-mid-gray:focus { color: #555; }
.hover-gray:hover { color: #777; }
.hover-gray:focus { color: #777; }
.hover-silver:hover { color: #999; }
.hover-silver:focus { color: #999; }
.hover-light-silver:hover { color: #aaa; }
.hover-light-silver:focus { color: #aaa; }
.hover-moon-gray:hover { color: #ccc; }
.hover-moon-gray:focus { color: #ccc; }
.hover-light-gray:hover { color: #eee; }
.hover-light-gray:focus { color: #eee; }
.hover-near-white:hover { color: #f4f4f4; }
.hover-near-white:focus { color: #f4f4f4; }
.hover-white:hover { color: #fff; }
.hover-white:focus { color: #fff; }
.hover-bg-black:hover { background-color: #000; }
.hover-bg-black:focus { background-color: #000; }
.hover-bg-near-black:hover { background-color: #111; }
.hover-bg-near-black:focus { background-color: #111; }
.hover-bg-dark-gray:hover { background-color: #333; }
.hover-bg-dark-gray:focus { background-color: #333; }
.hover-bg-dark-gray:focus { background-color: #555; }
.hover-bg-mid-gray:hover { background-color: #555; }
.hover-bg-gray:hover { background-color: #777; }
.hover-bg-gray:focus { background-color: #777; }
.hover-bg-silver:hover { background-color: #999; }
.hover-bg-silver:focus { background-color: #999; }
.hover-bg-light-silver:hover { background-color: #aaa; }
.hover-bg-light-silver:focus { background-color: #aaa; }
.hover-bg-moon-gray:hover { background-color: #ccc; }
.hover-bg-moon-gray:focus { background-color: #ccc; }
.hover-bg-light-gray:hover { background-color: #eee; }
.hover-bg-light-gray:focus { background-color: #eee; }
.hover-bg-near-white:hover { background-color: #f4f4f4; }
.hover-bg-near-white:focus { background-color: #f4f4f4; }
.hover-bg-white:hover { background-color: #fff; }
.hover-bg-white:focus { background-color: #fff; }
.hover-bg-transparent:hover { background-color: transparent; }
.hover-bg-transparent:focus { background-color: transparent; }
.hover-dark-red:hover { color: #e7040f; }
.hover-dark-red:focus { color: #e7040f; }
.hover-red:hover { color: #ff4136; }
.hover-red:focus { color: #ff4136; }
.hover-light-red:hover { color: #ff725c; }
.hover-light-red:focus { color: #ff725c; }
.hover-orange:hover { color: #ff6300; }
.hover-orange:focus { color: #ff6300; }
.hover-gold:hover { color: #ffb700; }
.hover-gold:focus { color: #ffb700; }
.hover-yellow:hover { color: #ffd700; }
.hover-yellow:focus { color: #ffd700; }
.hover-light-yellow:hover { color: #fbf1a9; }
.hover-light-yellow:focus { color: #fbf1a9; }
.hover-purple:hover { color: #5e2ca5; }
.hover-purple:focus { color: #5e2ca5; }
.hover-light-purple:hover { color: #a463f2; }
.hover-light-purple:focus { color: #a463f2; }
.hover-dark-pink:hover { color: #d5008f; }
.hover-dark-pink:focus { color: #d5008f; }
.hover-hot-pink:hover { color: #ff41b4; }
.hover-hot-pink:focus { color: #ff41b4; }
.hover-pink:hover { color: #ff80cc; }
.hover-pink:focus { color: #ff80cc; }
.hover-light-pink:hover { color: #ffa3d7; }
.hover-light-pink:focus { color: #ffa3d7; }
.hover-dark-green:hover { color: #137752; }
.hover-dark-green:focus { color: #137752; }
.hover-green:hover { color: #19a974; }
.hover-green:focus { color: #19a974; }
.hover-light-green:hover { color: #9eebcf; }
.hover-light-green:focus { color: #9eebcf; }
.hover-navy:hover { color: #001b44; }
.hover-navy:focus { color: #001b44; }
.hover-dark-blue:hover { color: #00449e; }
.hover-dark-blue:focus { color: #00449e; }
.hover-blue:hover { color: #357edd; }
.hover-blue:focus { color: #357edd; }
.hover-light-blue:hover { color: #96ccff; }
.hover-light-blue:focus { color: #96ccff; }
.hover-lightest-blue:hover { color: #cdecff; }
.hover-lightest-blue:focus { color: #cdecff; }
.hover-washed-blue:hover { color: #f6fffe; }
.hover-washed-blue:focus { color: #f6fffe; }
.hover-washed-green:hover { color: #e8fdf5; }
.hover-washed-green:focus { color: #e8fdf5; }
.hover-washed-yellow:hover { color: #fffceb; }
.hover-washed-yellow:focus { color: #fffceb; }
.hover-washed-red:hover { color: #ffdfdf; }
.hover-washed-red:focus { color: #ffdfdf; }
.hover-bg-dark-red:hover { background-color: #e7040f; }
.hover-bg-dark-red:focus { background-color: #e7040f; }
.hover-bg-red:hover { background-color: #ff4136; }
.hover-bg-red:focus { background-color: #ff4136; }
.hover-bg-light-red:hover { background-color: #ff725c; }
.hover-bg-light-red:focus { background-color: #ff725c; }
.hover-bg-orange:hover { background-color: #ff6300; }
.hover-bg-orange:focus { background-color: #ff6300; }
.hover-bg-gold:hover { background-color: #ffb700; }
.hover-bg-gold:focus { background-color: #ffb700; }
.hover-bg-yellow:hover { background-color: #ffd700; }
.hover-bg-yellow:focus { background-color: #ffd700; }
.hover-bg-light-yellow:hover { background-color: #fbf1a9; }
.hover-bg-light-yellow:focus { background-color: #fbf1a9; }
.hover-bg-purple:hover { background-color: #5e2ca5; }
.hover-bg-purple:focus { background-color: #5e2ca5; }
.hover-bg-light-purple:hover { background-color: #a463f2; }
.hover-bg-light-purple:focus { background-color: #a463f2; }
.hover-bg-dark-pink:hover { background-color: #d5008f; }
.hover-bg-dark-pink:focus { background-color: #d5008f; }
.hover-bg-hot-pink:hover { background-color: #ff41b4; }
.hover-bg-hot-pink:focus { background-color: #ff41b4; }
.hover-bg-pink:hover { background-color: #ff80cc; }
.hover-bg-pink:focus { background-color: #ff80cc; }
.hover-bg-light-pink:hover { background-color: #ffa3d7; }
.hover-bg-light-pink:focus { background-color: #ffa3d7; }
.hover-bg-dark-green:hover { background-color: #137752; }
.hover-bg-dark-green:focus { background-color: #137752; }
.hover-bg-green:hover { background-color: #19a974; }
.hover-bg-green:focus { background-color: #19a974; }
.hover-bg-light-green:hover { background-color: #9eebcf; }
.hover-bg-light-green:focus { background-color: #9eebcf; }
.hover-bg-navy:hover { background-color: #001b44; }
.hover-bg-navy:focus { background-color: #001b44; }
.hover-bg-dark-blue:hover { background-color: #00449e; }
.hover-bg-dark-blue:focus { background-color: #00449e; }
.hover-bg-blue:hover { background-color: #357edd; }
.hover-bg-blue:focus { background-color: #357edd; }
.hover-bg-light-blue:hover { background-color: #96ccff; }
.hover-bg-light-blue:focus { background-color: #96ccff; }
.hover-bg-lightest-blue:hover { background-color: #cdecff; }
.hover-bg-lightest-blue:focus { background-color: #cdecff; }
.hover-bg-washed-blue:hover { background-color: #f6fffe; }
.hover-bg-washed-blue:focus { background-color: #f6fffe; }
.hover-bg-washed-green:hover { background-color: #e8fdf5; }
.hover-bg-washed-green:focus { background-color: #e8fdf5; }
.hover-bg-washed-yellow:hover { background-color: #fffceb; }
.hover-bg-washed-yellow:focus { background-color: #fffceb; }
.hover-bg-washed-red:hover { background-color: #ffdfdf; }
.hover-bg-washed-red:focus { background-color: #ffdfdf; }
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

