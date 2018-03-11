# tachyons 5.0.0-1

Functional CSS for humans

### Stats

447 | 28 | 56
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
<link rel="stylesheet" href="http://unpkg.com/tachyons@5.0.0-1/css/tachyons.min.css" />
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

# ROTATIONS

Rotate elements.

### Base

- rotate

### Modifiers

- `-45` = literal value 45deg
- `-90` = literal value 90deg
- `-135` = literal value 135deg
- `-180` = literal value 180deg
- `-225` = literal value 225deg
- `-270` = literal value 270deg
- `-315` = literal value 315deg

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
.rotate-45 { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }
.rotate-90 { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }
.rotate-135 { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }
.rotate-180 { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }
.rotate-225 { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }
.rotate-270 { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }
.rotate-315 { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }
@media screen and (min-width: 30em) {
 .rotate-45-s { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }
 .rotate-90-s { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }
 .rotate-135-s { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }
 .rotate-180-s { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }
 .rotate-225-s { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }
 .rotate-270-s { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }
 .rotate-315-s { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }
}
@media screen and (min-width: 48em) {
 .rotate-45-m { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }
 .rotate-90-m { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }
 .rotate-135-m { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }
 .rotate-180-m { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }
 .rotate-225-m { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }
 .rotate-270-m { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }
 .rotate-315-m { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }
}
@media screen and (min-width: 60em) {
 .rotate-45-l { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }
 .rotate-90-l { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }
 .rotate-135-l { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }
 .rotate-180-l { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }
 .rotate-225-l { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }
 .rotate-270-l { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }
 .rotate-315-l { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }
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

