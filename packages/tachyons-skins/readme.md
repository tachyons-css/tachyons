# tachyons-skins 3.2.4

Performance based css module.

#### Stats

1322 | 153 | 153
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-skins
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-skins
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-skins.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-skins";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-skins@3.2.4/css/tachyons-skins.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-skins">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   COLOR VARIABLES

   Variables to set colors for
   color, background-color, and border-color

*/
/* variables */
/*

   SKINS

*/
/* Text colors */
.black-90 { color: rgba( 0, 0, 0, .9 ); }
.black-80 { color: rgba( 0, 0, 0, .8 ); }
.black-70 { color: rgba( 0, 0, 0, .7 ); }
.black-60 { color: rgba( 0, 0, 0, .6 ); }
.black-50 { color: rgba( 0, 0, 0, .5 ); }
.black-40 { color: rgba( 0, 0, 0, .4 ); }
.black-30 { color: rgba( 0, 0, 0, .3 ); }
.black-20 { color: rgba( 0, 0, 0, .2 ); }
.black-10 { color: rgba( 0, 0, 0, .1 ); }
.black-05 { color: rgba( 0, 0, 0, .05 ); }
.white-90 { color: rgba( 255, 255, 255, .9 ); }
.white-80 { color: rgba( 255, 255, 255, .8 ); }
.white-70 { color: rgba( 255, 255, 255, .7 ); }
.white-60 { color: rgba( 255, 255, 255, .6 ); }
.white-50 { color: rgba( 255, 255, 255, .5 ); }
.white-40 { color: rgba( 255, 255, 255, .4 ); }
.white-30 { color: rgba( 255, 255, 255, .3 ); }
.white-20 { color: rgba( 255, 255, 255, .2 ); }
.white-10 { color: rgba( 255, 255, 255, .1 ); }
.black { color: #000; }
.near-black { color: #111; }
.dark-gray { color: #333; }
.mid-gray { color: #555; }
.gray { color: #777; }
.silver { color: #999; }
.light-silver { color: #aaa; }
.moon-gray { color: #ccc; }
.light-gray { color: #eee; }
.near-white { color: #f4f4f4; }
.white { color: #fff; }
.dark-red { color: #f00008; }
.red { color: #ff3223; }
.orange { color: #f3a801; }
.gold { color: #f2c800; }
.yellow { color: #ffde37; }
.purple { color: #7d5da9; }
.light-purple { color: #8d4f92; }
.hot-pink { color: #d62288; }
.dark-pink { color: #c64774; }
.pink { color: #f49cc8; }
.dark-green { color: #006C71; }
.green { color: #41D69F; }
.navy { color: #001b44; }
.dark-blue { color: #00449e; }
.blue { color: #357edd; }
.light-blue { color: #96ccff; }
.lightest-blue { color: #cdecff; }
.washed-blue { color: #f6fffe; }
.washed-green { color: #e8fdf5; }
.washed-yellow { color: #fff8d5; }
.light-pink { color: #efa4b8; }
.light-yellow { color: #f3dd70; }
.light-red { color: #ffd3c0; }
.bg-black-90 { background-color: rgba( 0, 0, 0, .9 ); }
.bg-black-80 { background-color: rgba( 0, 0, 0, .8 ); }
.bg-black-70 { background-color: rgba( 0, 0, 0, .7 ); }
.bg-black-60 { background-color: rgba( 0, 0, 0, .6 ); }
.bg-black-50 { background-color: rgba( 0, 0, 0, .5 ); }
.bg-black-40 { background-color: rgba( 0, 0, 0, .4 ); }
.bg-black-30 { background-color: rgba( 0, 0, 0, .3 ); }
.bg-black-20 { background-color: rgba( 0, 0, 0, .2 ); }
.bg-black-10 { background-color: rgba( 0, 0, 0, .1 ); }
.bg-black-05 { background-color: rgba( 0, 0, 0, .05 ); }
.bg-white-90 { background-color: rgba( 255, 255, 255, .9 ); }
.bg-white-80 { background-color: rgba( 255, 255, 255, .8 ); }
.bg-white-70 { background-color: rgba( 255, 255, 255, .7 ); }
.bg-white-60 { background-color: rgba( 255, 255, 255, .6 ); }
.bg-white-50 { background-color: rgba( 255, 255, 255, .5 ); }
.bg-white-40 { background-color: rgba( 255, 255, 255, .4 ); }
.bg-white-30 { background-color: rgba( 255, 255, 255, .3 ); }
.bg-white-20 { background-color: rgba( 255, 255, 255, .2 ); }
.bg-white-10 { background-color: rgba( 255, 255, 255, .1 ); }
/* Background colors */
.bg-black { background-color: #000; }
.bg-near-black { background-color: #111; }
.bg-dark-gray { background-color: #333; }
.bg-mid-gray { background-color: #555; }
.bg-gray { background-color: #777; }
.bg-silver { background-color: #999; }
.bg-light-silver { background-color: #aaa; }
.bg-moon-gray { background-color: #ccc; }
.bg-light-gray { background-color: #eee; }
.bg-near-white { background-color: #f4f4f4; }
.bg-white { background-color: #fff; }
.bg-transparent { background-color: transparent; }
.bg-dark-red { background-color: #f00008; }
.bg-red { background-color: #ff3223; }
.bg-orange { background-color: #f3a801; }
.bg-gold { background-color: #f2c800; }
.bg-yellow { background-color: #ffde37; }
.bg-purple { background-color: #7d5da9; }
.bg-light-purple { background-color: #8d4f92; }
.bg-hot-pink { background-color: #d62288; }
.bg-dark-pink { background-color: #c64774; }
.bg-pink { background-color: #f49cc8; }
.bg-dark-green { background-color: #006C71; }
.bg-green { background-color: #41D69F; }
.bg-navy { background-color: #001b44; }
.bg-dark-blue { background-color: #00449e; }
.bg-blue { background-color: #357edd; }
.bg-light-blue { background-color: #96ccff; }
.bg-lightest-blue { background-color: #cdecff; }
.bg-washed-blue { background-color: #f6fffe; }
.bg-washed-green { background-color: #e8fdf5; }
.bg-washed-yellow { background-color: #fff8d5; }
.bg-light-pink { background-color: #efa4b8; }
.bg-light-yellow { background-color: #f3dd70; }
.bg-light-red { background-color: #ffd3c0; }
/* Skins for specific pseudoclasses */
.hover-black:hover { color: #000; }
.hover-near-black:hover { color: #111; }
.hover-dark-gray:hover { color: #333; }
.hover-mid-gray:hover { color: #555; }
.hover-gray:hover { color: #777; }
.hover-silver:hover { color: #999; }
.hover-light-silver:hover { color: #aaa; }
.hover-moon-gray:hover { color: #ccc; }
.hover-light-gray:hover { color: #eee; }
.hover-near-white:hover { color: #f4f4f4; }
.hover-white:hover { color: #fff; }
.hover-bg-black:hover { background-color: #000; }
.hover-bg-near-black:hover { background-color: #111; }
.hover-bg-dark-gray:hover { background-color: #333; }
.hover-bg-mid-gray:hover { background-color: #555; }
.hover-bg-gray:hover { background-color: #777; }
.hover-bg-silver:hover { background-color: #999; }
.hover-bg-light-silver:hover { background-color: #aaa; }
.hover-bg-moon-gray:hover { background-color: #ccc; }
.hover-bg-light-gray:hover { background-color: #eee; }
.hover-bg-near-white:hover { background-color: #f4f4f4; }
.hover-bg-white:hover { background-color: #fff; }
.hover-bg-transparent:hover { background-color: transparent; }
.hover-bg-dark-red:hover { background-color: #f00008; }
.hover-bg-red:hover { background-color: #ff3223; }
.hover-bg-orange:hover { background-color: #f3a801; }
.hover-bg-gold:hover { background-color: #f2c800; }
.hover-bg-yellow:hover { background-color: #ffde37; }
.hover-bg-purple:hover { background-color: #7d5da9; }
.hover-bg-light-purple:hover { background-color: #8d4f92; }
.hover-bg-hot-pink:hover { background-color: #d62288; }
.hover-bg-dark-pink:hover { background-color: #c64774; }
.hover-bg-pink:hover { background-color: #f49cc8; }
.hover-bg-dark-green:hover { background-color: #006C71; }
.hover-bg-green:hover { background-color: #41D69F; }
.hover-bg-navy:hover { background-color: #001b44; }
.hover-bg-dark-blue:hover { background-color: #00449e; }
.hover-bg-blue:hover { background-color: #357edd; }
.hover-bg-light-blue:hover { background-color: #96ccff; }
.hover-bg-lightest-blue:hover { background-color: #cdecff; }
.hover-bg-washed-blue:hover { background-color: #f6fffe; }
.hover-bg-washed-green:hover { background-color: #e8fdf5; }
.hover-bg-washed-yellow:hover { background-color: #fff8d5; }
.hover-bg-light-pink:hover { background-color: #efa4b8; }
.hover-bg-light-yellow:hover { background-color: #f3dd70; }
.hover-bg-light-red:hover { background-color: #ffd3c0; }
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

