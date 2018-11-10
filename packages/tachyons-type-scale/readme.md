# tachyons 7.0.1-5

Functional css for humans

### Stats

475 | 32 | 32
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
<link rel="stylesheet" href="http://unpkg.com/tachyons@7.0.1-5/css/tachyons.min.css" />
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

# TYPE SCALE

### Docs

http://tachyons.io/docs/typography/scale/

### Base

- f = font-size

### Modifiers

- 1 = 1st step back in size scale
- 2 = 2nd step back in size scale
- 3 = 3rd step back in size scale
- 4 = 4th step back in size scale
- 5 = 5th step back in size scale
- 6 = 6th step back in size scale
- 7 = 7th step back in size scale
- 8 = 8th step back in size scale
- 0 = Extra large

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
/* Type Scale */
.f0 { font-size: 6rem; }
.f1 { font-size: 4rem; }
.f2 { font-size: 3rem; }
.f3 { font-size: 2rem; }
.f4 { font-size: 1.5rem; }
.f5 { font-size: 1rem; }
.f6 { font-size: .875rem; }
/* Small and hard to read for many people so use with extreme caution */
.f7 { font-size: .75rem; }
@media screen and (min-width: 30em) {
 .f0-s { font-size: 6rem; }
 .f1-s { font-size: 4rem; }
 .f2-s { font-size: 3rem; }
 .f3-s { font-size: 2rem; }
 .f4-s { font-size: 1.5rem; }
 .f5-s { font-size: 1rem; }
 .f6-s { font-size: .875rem; }
 .f7-s { font-size: .75rem; }
}
@media screen and (min-width: 48em) {
 .f0-m { font-size: 6rem; }
 .f1-m { font-size: 4rem; }
 .f2-m { font-size: 3rem; }
 .f3-m { font-size: 2rem; }
 .f4-m { font-size: 1.5rem; }
 .f5-m { font-size: 1rem; }
 .f6-m { font-size: .875rem; }
 .f7-m { font-size: .75rem; }
}
@media screen and (min-width: 60em) {
 .f0-l { font-size: 6rem; }
 .f1-l { font-size: 4rem; }
 .f2-l { font-size: 3rem; }
 .f3-l { font-size: 2rem; }
 .f4-l { font-size: 1.5rem; }
 .f5-l { font-size: 1rem; }
 .f6-l { font-size: .875rem; }
 .f7-l { font-size: .75rem; }
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

