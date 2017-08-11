# tachyons-text-transform 4.0.0

Performance based css module.

#### Stats

210 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-text-transform
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-text-transform
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-text-transform.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-text-transform";
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
<link rel="stylesheet" href="http://npmcdn.com/tachyons-text-transform@4.0.0/css/tachyons-text-transform.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-text-transform">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   TEXT TRANSFORM

*/
.ttc { text-transform: capitalize; }
.ttl { text-transform: lowercase; }
.ttu { text-transform: uppercase; }
.ttn { text-transform: none; }
@media screen and (min-width: 30em) {
 .ttc-ns { text-transform: capitalize; }
 .ttl-ns { text-transform: lowercase; }
 .ttu-ns { text-transform: uppercase; }
 .ttn-ns { text-transform: none; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .ttc-m { text-transform: capitalize; }
 .ttl-m { text-transform: lowercase; }
 .ttu-m { text-transform: uppercase; }
 .ttn-m { text-transform: none; }
}
@media screen and (min-width: 60em) {
 .ttc-l { text-transform: capitalize; }
 .ttl-l { text-transform: lowercase; }
 .ttu-l { text-transform: uppercase; }
 .ttn-l { text-transform: none; }
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

