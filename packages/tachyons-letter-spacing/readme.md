# tachyons-letter-spacing 3.0.0

Performance based css module.

#### Stats

196 | 12 | 12
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-letter-spacing
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-letter-spacing
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-letter-spacing.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-letter-spacing";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-letter-spacing@3.0.0/css/tachyons-letter-spacing.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-letter-spacing">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   LETTER SPACING

*/
.tracked { letter-spacing: .1em; }
.tracked-tight { letter-spacing: -.05em; }
.tracked-mega { letter-spacing: .25em; }
@media screen and (min-width: 30em) {
 .tracked-ns { letter-spacing: .1em; }
 .tracked-tight-ns { letter-spacing: -.05em; }
 .tracked-mega-ns { letter-spacing: .25em; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .tracked-m { letter-spacing: .1em; }
 .tracked-tight-m { letter-spacing: -.05em; }
 .tracked-mega-m { letter-spacing: .25em; }
}
@media screen and (min-width: 60em) {
 .tracked-l { letter-spacing: .1em; }
 .tracked-tight-l { letter-spacing: -.05em; }
 .tracked-mega-l { letter-spacing: .25em; }
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

