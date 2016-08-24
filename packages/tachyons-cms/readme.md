# tachyons-cms 1.0.0

CSS module for styling unqualified elements with Tachyons

#### Stats

256 | 14 | 10
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-cms
```

#### With Git

```
git clone https://github.com/tachyons-css/tachyons-cms
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-cms";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-cms">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

  Tachyons
  CMS

*/
.nested-copy-line-height p, .nested-copy-line-height ul,
.nested-copy-line-height ol { line-height: 1.5; }
.nested-headline-line-height h1, .nested-headline-line-height h2,
.nested-headline-line-height h3, .nested-headline-line-height h4,
.nested-headline-line-height h5, .nested-headline-line-height h6 { line-height: 1.3; }
.nested-list-reset ul, .nested-list-reset ol { padding-left: 0; margin-left: 0; list-style-type: none; }
.nested-copy-indent p+p { text-indent: 1em; }
.nested-copy-seperator p+p { margin-top: 1.5em; }
.nested-img img { width: 100%; max-width: 100%; display: block; }
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

MIT

