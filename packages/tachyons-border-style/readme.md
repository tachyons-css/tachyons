# tachyons-border-style 4.0.0

Border style CSS module for Tachyons

#### Stats

297 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-border-style
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-border-style
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-border-style.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-border-style";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-border-style@4.0.0/css/tachyons-border-style.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-border-style">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   BORDER STYLES

   Base:
     bs = border-style

   Modifiers:
     none   = none
     dotted = dotted
     dashed = dashed
     solid  = solid

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

 */
.b--dotted { border-style: dotted; }
.b--dashed { border-style: dashed; }
.b--solid { border-style: solid; }
.b--none { border-style: none; }
@media screen and (min-width: 30em) {
 .b--dotted-ns { border-style: dotted; }
 .b--dashed-ns { border-style: dashed; }
 .b--solid-ns { border-style: solid; }
 .b--none-ns { border-style: none; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .b--dotted-m { border-style: dotted; }
 .b--dashed-m { border-style: dashed; }
 .b--solid-m { border-style: solid; }
 .b--none-m { border-style: none; }
}
@media screen and (min-width: 60em) {
 .b--dotted-l { border-style: dotted; }
 .b--dashed-l { border-style: dashed; }
 .b--solid-l { border-style: solid; }
 .b--none-l { border-style: none; }
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

