# tachyons 7.0.1-5

Functional css for humans

### Stats

735 | 80 | 80
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

# WIDTHS

### Docs

http://tachyons.io/docs/layout/widths/

### Base

- w = width

### Modifiers

- 1 = 1st step in width scale
- 2 = 2nd step in width scale
- 3 = 3rd step in width scale
- 4 = 4th step in width scale
- 5 = 5th step in width scale

- -10  = literal value 10%
- -20  = literal value 20%
- -25  = literal value 25%
- -30  = literal value 30%
- -40  = literal value 40%
- -50  = literal value 50%
- -60  = literal value 60%
- -70  = literal value 70%
- -75  = literal value 75%
- -80  = literal value 80%
- -90  = literal value 90%
- -100 = literal value 100%

- `-third` = 100% / 3 (Not supported in opera mini or IE8)
- `-two-thirds` = 100% / 1.5 (Not supported in opera mini or IE8)
- `-auto` = string value auto


### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
/* Width Scale */
.w1 { width: 1rem; }
.w2 { width: 2rem; }
.w3 { width: 4rem; }
.w4 { width: 8rem; }
.w5 { width: 16rem; }
.w-10 { width: 10%; }
.w-20 { width: 20%; }
.w-25 { width: 25%; }
.w-30 { width: 30%; }
.w-40 { width: 40%; }
.w-50 { width: 50%; }
.w-60 { width: 60%; }
.w-70 { width: 70%; }
.w-75 { width: 75%; }
.w-80 { width: 80%; }
.w-90 { width: 90%; }
.w-100 { width: 100%; }
.w-third { width: 33.33333%; }
.w-two-thirds { width: 66.66667%; }
.w-auto { width: auto; }
@media screen and (min-width: 30em) {
 .w1-s { width: 1rem; }
 .w2-s { width: 2rem; }
 .w3-s { width: 4rem; }
 .w4-s { width: 8rem; }
 .w5-s { width: 16rem; }
 .w-10-s { width: 10%; }
 .w-20-s { width: 20%; }
 .w-25-s { width: 25%; }
 .w-30-s { width: 30%; }
 .w-40-s { width: 40%; }
 .w-50-s { width: 50%; }
 .w-60-s { width: 60%; }
 .w-70-s { width: 70%; }
 .w-75-s { width: 75%; }
 .w-80-s { width: 80%; }
 .w-90-s { width: 90%; }
 .w-100-s { width: 100%; }
 .w-third-s { width: 33.33333%; }
 .w-two-thirds-s { width: 66.66667%; }
 .w-auto-s { width: auto; }
}
@media screen and (min-width: 48em) {
 .w1-m { width: 1rem; }
 .w2-m { width: 2rem; }
 .w3-m { width: 4rem; }
 .w4-m { width: 8rem; }
 .w5-m { width: 16rem; }
 .w-10-m { width: 10%; }
 .w-20-m { width: 20%; }
 .w-25-m { width: 25%; }
 .w-30-m { width: 30%; }
 .w-40-m { width: 40%; }
 .w-50-m { width: 50%; }
 .w-60-m { width: 60%; }
 .w-70-m { width: 70%; }
 .w-75-m { width: 75%; }
 .w-80-m { width: 80%; }
 .w-90-m { width: 90%; }
 .w-100-m { width: 100%; }
 .w-third-m { width: 33.33333%; }
 .w-two-thirds-m { width: 66.66667%; }
 .w-auto-m { width: auto; }
}
@media screen and (min-width: 60em) {
 .w1-l { width: 1rem; }
 .w2-l { width: 2rem; }
 .w3-l { width: 4rem; }
 .w4-l { width: 8rem; }
 .w5-l { width: 16rem; }
 .w-10-l { width: 10%; }
 .w-20-l { width: 20%; }
 .w-25-l { width: 25%; }
 .w-30-l { width: 30%; }
 .w-40-l { width: 40%; }
 .w-50-l { width: 50%; }
 .w-60-l { width: 60%; }
 .w-70-l { width: 70%; }
 .w-75-l { width: 75%; }
 .w-80-l { width: 80%; }
 .w-90-l { width: 90%; }
 .w-100-l { width: 100%; }
 .w-third-l { width: 33.33333%; }
 .w-two-thirds-l { width: 66.66667%; }
 .w-auto-l { width: auto; }
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

