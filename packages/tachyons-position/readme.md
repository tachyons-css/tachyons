# tachyons-position 6.0.6

Performance based css module.

#### Stats

210 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-position
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-position
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-position.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-position";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-position@6.0.6/css/tachyons-position.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-position">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

    POSITIONING

 */
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
@media screen and (min-width: 30em) {
 .static-ns { position: static; }
 .relative-ns { position: relative; }
 .absolute-ns { position: absolute; }
 .fixed-ns { position: fixed; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .static-m { position: static; }
 .relative-m { position: relative; }
 .absolute-m { position: absolute; }
 .fixed-m { position: fixed; }
}
@media screen and (min-width: 60em) {
 .static-l { position: static; }
 .relative-l { position: relative; }
 .absolute-l { position: absolute; }
 .fixed-l { position: fixed; }
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

