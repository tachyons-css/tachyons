

# SKINS

### Docs

http://tachyons.io/docs/themes/skins/

Classes for setting foreground and background colors on elements.
If you haven't declared a border color, but set border on an element, it will
be set to the current text color.


### Stats

693 | 113 | 113
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

  # SKINS

  ### Docs

  http://tachyons.io/docs/themes/skins/

  Classes for setting foreground and background colors on elements.
  If you haven't declared a border color, but set border on an element, it will
  be set to the current text color.
*/
/* Text colors */
.black-90 { color: undefined; }
.black-80 { color: undefined; }
.black-70 { color: undefined; }
.black-60 { color: undefined; }
.black-50 { color: undefined; }
.black-40 { color: undefined; }
.black-30 { color: undefined; }
.black-20 { color: undefined; }
.black-10 { color: undefined; }
.black-05 { color: undefined; }
.white-90 { color: undefined; }
.white-80 { color: undefined; }
.white-70 { color: undefined; }
.white-60 { color: undefined; }
.white-50 { color: undefined; }
.white-40 { color: undefined; }
.white-30 { color: undefined; }
.white-20 { color: undefined; }
.white-10 { color: undefined; }
.black { color: undefined; }
.near-black { color: undefined; }
.dark-gray { color: undefined; }
.mid-gray { color: undefined; }
.gray { color: undefined; }
.silver { color: undefined; }
.light-silver { color: undefined; }
.moon-gray { color: undefined; }
.light-gray { color: undefined; }
.near-white { color: undefined; }
.white { color: undefined; }
.dark-red { color: undefined; }
.red { color: undefined; }
.light-red { color: undefined; }
.orange { color: undefined; }
.gold { color: undefined; }
.yellow { color: undefined; }
.light-yellow { color: undefined; }
.purple { color: undefined; }
.light-purple { color: undefined; }
.dark-pink { color: undefined; }
.hot-pink { color: undefined; }
.pink { color: undefined; }
.light-pink { color: undefined; }
.dark-green { color: undefined; }
.green { color: undefined; }
.light-green { color: undefined; }
.navy { color: undefined; }
.dark-blue { color: undefined; }
.blue { color: undefined; }
.light-blue { color: undefined; }
.lightest-blue { color: undefined; }
.washed-blue { color: undefined; }
.washed-green { color: undefined; }
.washed-yellow { color: undefined; }
.washed-red { color: undefined; }
.color-inherit { color: inherit; }
.bg-black-90 { background-color: undefined; }
.bg-black-80 { background-color: undefined; }
.bg-black-70 { background-color: undefined; }
.bg-black-60 { background-color: undefined; }
.bg-black-50 { background-color: undefined; }
.bg-black-40 { background-color: undefined; }
.bg-black-30 { background-color: undefined; }
.bg-black-20 { background-color: undefined; }
.bg-black-10 { background-color: undefined; }
.bg-black-05 { background-color: undefined; }
.bg-white-90 { background-color: undefined; }
.bg-white-80 { background-color: undefined; }
.bg-white-70 { background-color: undefined; }
.bg-white-60 { background-color: undefined; }
.bg-white-50 { background-color: undefined; }
.bg-white-40 { background-color: undefined; }
.bg-white-30 { background-color: undefined; }
.bg-white-20 { background-color: undefined; }
.bg-white-10 { background-color: undefined; }
/* Background colors */
.bg-black { background-color: undefined; }
.bg-near-black { background-color: undefined; }
.bg-dark-gray { background-color: undefined; }
.bg-mid-gray { background-color: undefined; }
.bg-gray { background-color: undefined; }
.bg-silver { background-color: undefined; }
.bg-light-silver { background-color: undefined; }
.bg-moon-gray { background-color: undefined; }
.bg-light-gray { background-color: undefined; }
.bg-near-white { background-color: undefined; }
.bg-white { background-color: undefined; }
.bg-transparent { background-color: undefined; }
.bg-dark-red { background-color: undefined; }
.bg-red { background-color: undefined; }
.bg-light-red { background-color: undefined; }
.bg-orange { background-color: undefined; }
.bg-gold { background-color: undefined; }
.bg-yellow { background-color: undefined; }
.bg-light-yellow { background-color: undefined; }
.bg-purple { background-color: undefined; }
.bg-light-purple { background-color: undefined; }
.bg-dark-pink { background-color: undefined; }
.bg-hot-pink { background-color: undefined; }
.bg-pink { background-color: undefined; }
.bg-light-pink { background-color: undefined; }
.bg-dark-green { background-color: undefined; }
.bg-green { background-color: undefined; }
.bg-light-green { background-color: undefined; }
.bg-navy { background-color: undefined; }
.bg-dark-blue { background-color: undefined; }
.bg-blue { background-color: undefined; }
.bg-light-blue { background-color: undefined; }
.bg-lightest-blue { background-color: undefined; }
.bg-washed-blue { background-color: undefined; }
.bg-washed-green { background-color: undefined; }
.bg-washed-yellow { background-color: undefined; }
.bg-washed-red { background-color: undefined; }
.bg-inherit { background-color: inherit; }
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

