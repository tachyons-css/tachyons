# tachyons 4.9.0

Functional CSS for humans

### Stats

594 | 63 | 72
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

  # COORDINATES

  Use in combination with the position module.

  ### Docs

  http://tachyons.io/docs/layout/position/

  ### Base

  - top
  - bottom
  - right
  - left

  ### Modifiers

  - `-0`  = literal value 0
  - `-1`  = literal value 1
  - `-2`  = literal value 2
  - `--1` = literal value -1
  - `--2` = literal value -2

  ### Media Query Extensions

  - `-m` = medium
  - `-l` = large
*/
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }
.top-1 { top: 1rem; }
.right-1 { right: 1rem; }
.bottom-1 { bottom: 1rem; }
.left-1 { left: 1rem; }
.top-2 { top: 2rem; }
.right-2 { right: 2rem; }
.bottom-2 { bottom: 2rem; }
.left-2 { left: 2rem; }
.top--1 { top: -1rem; }
.right--1 { right: -1rem; }
.bottom--1 { bottom: -1rem; }
.left--1 { left: -1rem; }
.top--2 { top: -2rem; }
.right--2 { right: -2rem; }
.bottom--2 { bottom: -2rem; }
.left--2 { left: -2rem; }
.absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }
@media screen and (min-width: 30em) {
 .top-0-m { top: 0; }
 .left-0-m { left: 0; }
 .right-0-m { right: 0; }
 .bottom-0-m { bottom: 0; }
 .top-1-m { top: 1rem; }
 .left-1-m { left: 1rem; }
 .right-1-m { right: 1rem; }
 .bottom-1-m { bottom: 1rem; }
 .top-2-m { top: 2rem; }
 .left-2-m { left: 2rem; }
 .right-2-m { right: 2rem; }
 .bottom-2-m { bottom: 2rem; }
 .top--1-m { top: -1rem; }
 .right--1-m { right: -1rem; }
 .bottom--1-m { bottom: -1rem; }
 .left--1-m { left: -1rem; }
 .top--2-m { top: -2rem; }
 .right--2-m { right: -2rem; }
 .bottom--2-m { bottom: -2rem; }
 .left--2-m { left: -2rem; }
 .absolute--fill-m { top: 0; right: 0; bottom: 0; left: 0; }
}
@media screen and (min-width: 60em) {
 .top-0-l { top: 0; }
 .left-0-l { left: 0; }
 .right-0-l { right: 0; }
 .bottom-0-l { bottom: 0; }
 .top-1-l { top: 1rem; }
 .left-1-l { left: 1rem; }
 .right-1-l { right: 1rem; }
 .bottom-1-l { bottom: 1rem; }
 .top-2-l { top: 2rem; }
 .left-2-l { left: 2rem; }
 .right-2-l { right: 2rem; }
 .bottom-2-l { bottom: 2rem; }
 .top--1-l { top: -1rem; }
 .right--1-l { right: -1rem; }
 .bottom--1-l { bottom: -1rem; }
 .left--1-l { left: -1rem; }
 .top--2-l { top: -2rem; }
 .right--2-l { right: -2rem; }
 .bottom--2-l { bottom: -2rem; }
 .left--2-l { left: -2rem; }
 .absolute--fill-l { top: 0; right: 0; bottom: 0; left: 0; }
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

