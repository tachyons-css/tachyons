

 # SKINS:PSEUDO

 Customize the color of an element when
 it is focused or hovered over.

 ### Docs

 http://tachyons.io/docs/themes/skins-pseudo/


### Stats

961 | 222 | 220
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons@4.9.0/css/tachyons.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*!!!

  # SKINS:PSEUDO

  Customize the color of an element when
  it is focused or hovered over.

  ### Docs

  http://tachyons.io/docs/themes/skins-pseudo/
 */
.hover-black:hover { color: undefined; }
.hover-black:focus { color: undefined; }
.hover-near-black:hover { color: undefined; }
.hover-near-black:focus { color: undefined; }
.hover-dark-gray:hover { color: undefined; }
.hover-dark-gray:focus { color: undefined; }
.hover-mid-gray:hover { color: undefined; }
.hover-mid-gray:focus { color: undefined; }
.hover-gray:hover { color: undefined; }
.hover-gray:focus { color: undefined; }
.hover-silver:hover { color: undefined; }
.hover-silver:focus { color: undefined; }
.hover-light-silver:hover { color: undefined; }
.hover-light-silver:focus { color: undefined; }
.hover-moon-gray:hover { color: undefined; }
.hover-moon-gray:focus { color: undefined; }
.hover-light-gray:hover { color: undefined; }
.hover-light-gray:focus { color: undefined; }
.hover-near-white:hover { color: undefined; }
.hover-near-white:focus { color: undefined; }
.hover-white:hover { color: undefined; }
.hover-white:focus { color: undefined; }
.hover-black-90:hover { color: undefined; }
.hover-black-90:focus { color: undefined; }
.hover-black-80:hover { color: undefined; }
.hover-black-80:focus { color: undefined; }
.hover-black-70:hover { color: undefined; }
.hover-black-70:focus { color: undefined; }
.hover-black-60:hover { color: undefined; }
.hover-black-60:focus { color: undefined; }
.hover-black-50:hover { color: undefined; }
.hover-black-50:focus { color: undefined; }
.hover-black-40:hover { color: undefined; }
.hover-black-40:focus { color: undefined; }
.hover-black-30:hover { color: undefined; }
.hover-black-30:focus { color: undefined; }
.hover-black-20:hover { color: undefined; }
.hover-black-20:focus { color: undefined; }
.hover-black-10:hover { color: undefined; }
.hover-black-10:focus { color: undefined; }
.hover-white-90:hover { color: undefined; }
.hover-white-90:focus { color: undefined; }
.hover-white-80:hover { color: undefined; }
.hover-white-80:focus { color: undefined; }
.hover-white-70:hover { color: undefined; }
.hover-white-70:focus { color: undefined; }
.hover-white-60:hover { color: undefined; }
.hover-white-60:focus { color: undefined; }
.hover-white-50:hover { color: undefined; }
.hover-white-50:focus { color: undefined; }
.hover-white-40:hover { color: undefined; }
.hover-white-40:focus { color: undefined; }
.hover-white-30:hover { color: undefined; }
.hover-white-30:focus { color: undefined; }
.hover-white-20:hover { color: undefined; }
.hover-white-20:focus { color: undefined; }
.hover-white-10:hover { color: undefined; }
.hover-white-10:focus { color: undefined; }
.hover-inherit:hover, .hover-inherit:focus { color: inherit; }
.hover-bg-black:hover { background-color: undefined; }
.hover-bg-black:focus { background-color: undefined; }
.hover-bg-near-black:hover { background-color: undefined; }
.hover-bg-near-black:focus { background-color: undefined; }
.hover-bg-dark-gray:hover { background-color: undefined; }
.hover-bg-dark-gray:focus { background-color: undefined; }
.hover-bg-mid-gray:hover { background-color: undefined; }
.hover-bg-mid-gray:focus { background-color: undefined; }
.hover-bg-gray:hover { background-color: undefined; }
.hover-bg-gray:focus { background-color: undefined; }
.hover-bg-silver:hover { background-color: undefined; }
.hover-bg-silver:focus { background-color: undefined; }
.hover-bg-light-silver:hover { background-color: undefined; }
.hover-bg-light-silver:focus { background-color: undefined; }
.hover-bg-moon-gray:hover { background-color: undefined; }
.hover-bg-moon-gray:focus { background-color: undefined; }
.hover-bg-light-gray:hover { background-color: undefined; }
.hover-bg-light-gray:focus { background-color: undefined; }
.hover-bg-near-white:hover { background-color: undefined; }
.hover-bg-near-white:focus { background-color: undefined; }
.hover-bg-white:hover { background-color: undefined; }
.hover-bg-white:focus { background-color: undefined; }
.hover-bg-transparent:hover { background-color: undefined; }
.hover-bg-transparent:focus { background-color: undefined; }
.hover-bg-black-90:hover { background-color: undefined; }
.hover-bg-black-90:focus { background-color: undefined; }
.hover-bg-black-80:hover { background-color: undefined; }
.hover-bg-black-80:focus { background-color: undefined; }
.hover-bg-black-70:hover { background-color: undefined; }
.hover-bg-black-70:focus { background-color: undefined; }
.hover-bg-black-60:hover { background-color: undefined; }
.hover-bg-black-60:focus { background-color: undefined; }
.hover-bg-black-50:hover { background-color: undefined; }
.hover-bg-black-50:focus { background-color: undefined; }
.hover-bg-black-40:hover { background-color: undefined; }
.hover-bg-black-40:focus { background-color: undefined; }
.hover-bg-black-30:hover { background-color: undefined; }
.hover-bg-black-30:focus { background-color: undefined; }
.hover-bg-black-20:hover { background-color: undefined; }
.hover-bg-black-20:focus { background-color: undefined; }
.hover-bg-black-10:hover { background-color: undefined; }
.hover-bg-black-10:focus { background-color: undefined; }
.hover-bg-white-90:hover { background-color: undefined; }
.hover-bg-white-90:focus { background-color: undefined; }
.hover-bg-white-80:hover { background-color: undefined; }
.hover-bg-white-80:focus { background-color: undefined; }
.hover-bg-white-70:hover { background-color: undefined; }
.hover-bg-white-70:focus { background-color: undefined; }
.hover-bg-white-60:hover { background-color: undefined; }
.hover-bg-white-60:focus { background-color: undefined; }
.hover-bg-white-50:hover { background-color: undefined; }
.hover-bg-white-50:focus { background-color: undefined; }
.hover-bg-white-40:hover { background-color: undefined; }
.hover-bg-white-40:focus { background-color: undefined; }
.hover-bg-white-30:hover { background-color: undefined; }
.hover-bg-white-30:focus { background-color: undefined; }
.hover-bg-white-20:hover { background-color: undefined; }
.hover-bg-white-20:focus { background-color: undefined; }
.hover-bg-white-10:hover { background-color: undefined; }
.hover-bg-white-10:focus { background-color: undefined; }
.hover-dark-red:hover { color: undefined; }
.hover-dark-red:focus { color: undefined; }
.hover-red:hover { color: undefined; }
.hover-red:focus { color: undefined; }
.hover-light-red:hover { color: undefined; }
.hover-light-red:focus { color: undefined; }
.hover-orange:hover { color: undefined; }
.hover-orange:focus { color: undefined; }
.hover-gold:hover { color: undefined; }
.hover-gold:focus { color: undefined; }
.hover-yellow:hover { color: undefined; }
.hover-yellow:focus { color: undefined; }
.hover-light-yellow:hover { color: undefined; }
.hover-light-yellow:focus { color: undefined; }
.hover-purple:hover { color: undefined; }
.hover-purple:focus { color: undefined; }
.hover-light-purple:hover { color: undefined; }
.hover-light-purple:focus { color: undefined; }
.hover-dark-pink:hover { color: undefined; }
.hover-dark-pink:focus { color: undefined; }
.hover-hot-pink:hover { color: undefined; }
.hover-hot-pink:focus { color: undefined; }
.hover-pink:hover { color: undefined; }
.hover-pink:focus { color: undefined; }
.hover-light-pink:hover { color: undefined; }
.hover-light-pink:focus { color: undefined; }
.hover-dark-green:hover { color: undefined; }
.hover-dark-green:focus { color: undefined; }
.hover-green:hover { color: undefined; }
.hover-green:focus { color: undefined; }
.hover-light-green:hover { color: undefined; }
.hover-light-green:focus { color: undefined; }
.hover-navy:hover { color: undefined; }
.hover-navy:focus { color: undefined; }
.hover-dark-blue:hover { color: undefined; }
.hover-dark-blue:focus { color: undefined; }
.hover-blue:hover { color: undefined; }
.hover-blue:focus { color: undefined; }
.hover-light-blue:hover { color: undefined; }
.hover-light-blue:focus { color: undefined; }
.hover-lightest-blue:hover { color: undefined; }
.hover-lightest-blue:focus { color: undefined; }
.hover-washed-blue:hover { color: undefined; }
.hover-washed-blue:focus { color: undefined; }
.hover-washed-green:hover { color: undefined; }
.hover-washed-green:focus { color: undefined; }
.hover-washed-yellow:hover { color: undefined; }
.hover-washed-yellow:focus { color: undefined; }
.hover-washed-red:hover { color: undefined; }
.hover-washed-red:focus { color: undefined; }
.hover-bg-dark-red:hover { background-color: undefined; }
.hover-bg-dark-red:focus { background-color: undefined; }
.hover-bg-red:hover { background-color: undefined; }
.hover-bg-red:focus { background-color: undefined; }
.hover-bg-light-red:hover { background-color: undefined; }
.hover-bg-light-red:focus { background-color: undefined; }
.hover-bg-orange:hover { background-color: undefined; }
.hover-bg-orange:focus { background-color: undefined; }
.hover-bg-gold:hover { background-color: undefined; }
.hover-bg-gold:focus { background-color: undefined; }
.hover-bg-yellow:hover { background-color: undefined; }
.hover-bg-yellow:focus { background-color: undefined; }
.hover-bg-light-yellow:hover { background-color: undefined; }
.hover-bg-light-yellow:focus { background-color: undefined; }
.hover-bg-purple:hover { background-color: undefined; }
.hover-bg-purple:focus { background-color: undefined; }
.hover-bg-light-purple:hover { background-color: undefined; }
.hover-bg-light-purple:focus { background-color: undefined; }
.hover-bg-dark-pink:hover { background-color: undefined; }
.hover-bg-dark-pink:focus { background-color: undefined; }
.hover-bg-hot-pink:hover { background-color: undefined; }
.hover-bg-hot-pink:focus { background-color: undefined; }
.hover-bg-pink:hover { background-color: undefined; }
.hover-bg-pink:focus { background-color: undefined; }
.hover-bg-light-pink:hover { background-color: undefined; }
.hover-bg-light-pink:focus { background-color: undefined; }
.hover-bg-dark-green:hover { background-color: undefined; }
.hover-bg-dark-green:focus { background-color: undefined; }
.hover-bg-green:hover { background-color: undefined; }
.hover-bg-green:focus { background-color: undefined; }
.hover-bg-light-green:hover { background-color: undefined; }
.hover-bg-light-green:focus { background-color: undefined; }
.hover-bg-navy:hover { background-color: undefined; }
.hover-bg-navy:focus { background-color: undefined; }
.hover-bg-dark-blue:hover { background-color: undefined; }
.hover-bg-dark-blue:focus { background-color: undefined; }
.hover-bg-blue:hover { background-color: undefined; }
.hover-bg-blue:focus { background-color: undefined; }
.hover-bg-light-blue:hover { background-color: undefined; }
.hover-bg-light-blue:focus { background-color: undefined; }
.hover-bg-lightest-blue:hover { background-color: undefined; }
.hover-bg-lightest-blue:focus { background-color: undefined; }
.hover-bg-washed-blue:hover { background-color: undefined; }
.hover-bg-washed-blue:focus { background-color: undefined; }
.hover-bg-washed-green:hover { background-color: undefined; }
.hover-bg-washed-green:focus { background-color: undefined; }
.hover-bg-washed-yellow:hover { background-color: undefined; }
.hover-bg-washed-yellow:focus { background-color: undefined; }
.hover-bg-washed-red:hover { background-color: undefined; }
.hover-bg-washed-red:focus { background-color: undefined; }
.hover-bg-inherit:hover, .hover-bg-inherit:focus { background-color: inherit; }
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

