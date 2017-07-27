# tachyons-negative-margins 1.0.0

negative-margins CSS module for Tachyons

#### Stats

716 | 140 | 140
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-negative-margins
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-negative-margins
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-negative-margins.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-negative-margins";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-negative-margins@1.0.0/css/tachyons-negative-margins.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-negative-margins">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   TACHYONS - NEGATIVE MARGINS

   Base:
     n = negative

   Modifiers:
     a = all
     t = top
     r = right
     b = bottom
     l = left

     1 = 1st step in spacing scale
     2 = 2nd step in spacing scale
     3 = 3rd step in spacing scale
     4 = 4th step in spacing scale
     5 = 5th step in spacing scale
     6 = 6th step in spacing scale
     7 = 7th step in spacing scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.na1 { margin: undefined; }
.na2 { margin: undefined; }
.na3 { margin: undefined; }
.na4 { margin: undefined; }
.na5 { margin: undefined; }
.na6 { margin: undefined; }
.na7 { margin: undefined; }
.nl1 { margin-left: undefined; }
.nl2 { margin-left: undefined; }
.nl3 { margin-left: undefined; }
.nl4 { margin-left: undefined; }
.nl5 { margin-left: undefined; }
.nl6 { margin-left: undefined; }
.nl7 { margin-left: undefined; }
.nr1 { margin-right: undefined; }
.nr2 { margin-right: undefined; }
.nr3 { margin-right: undefined; }
.nr4 { margin-right: undefined; }
.nr5 { margin-right: undefined; }
.nr6 { margin-right: undefined; }
.nr7 { margin-right: undefined; }
.nb1 { margin-bottom: undefined; }
.nb2 { margin-bottom: undefined; }
.nb3 { margin-bottom: undefined; }
.nb4 { margin-bottom: undefined; }
.nb5 { margin-bottom: undefined; }
.nb6 { margin-bottom: undefined; }
.nb7 { margin-bottom: undefined; }
.nt1 { margin-top: undefined; }
.nt2 { margin-top: undefined; }
.nt3 { margin-top: undefined; }
.nt4 { margin-top: undefined; }
.nt5 { margin-top: undefined; }
.nt6 { margin-top: undefined; }
.nt7 { margin-top: undefined; }
@media screen and (min-width: 30em) {
 .na1-ns { margin: undefined; }
 .na2-ns { margin: undefined; }
 .na3-ns { margin: undefined; }
 .na4-ns { margin: undefined; }
 .na5-ns { margin: undefined; }
 .na6-ns { margin: undefined; }
 .na7-ns { margin: undefined; }
 .nl1-ns { margin-left: undefined; }
 .nl2-ns { margin-left: undefined; }
 .nl3-ns { margin-left: undefined; }
 .nl4-ns { margin-left: undefined; }
 .nl5-ns { margin-left: undefined; }
 .nl6-ns { margin-left: undefined; }
 .nl7-ns { margin-left: undefined; }
 .nr1-ns { margin-right: undefined; }
 .nr2-ns { margin-right: undefined; }
 .nr3-ns { margin-right: undefined; }
 .nr4-ns { margin-right: undefined; }
 .nr5-ns { margin-right: undefined; }
 .nr6-ns { margin-right: undefined; }
 .nr7-ns { margin-right: undefined; }
 .nb1-ns { margin-bottom: undefined; }
 .nb2-ns { margin-bottom: undefined; }
 .nb3-ns { margin-bottom: undefined; }
 .nb4-ns { margin-bottom: undefined; }
 .nb5-ns { margin-bottom: undefined; }
 .nb6-ns { margin-bottom: undefined; }
 .nb7-ns { margin-bottom: undefined; }
 .nt1-ns { margin-top: undefined; }
 .nt2-ns { margin-top: undefined; }
 .nt3-ns { margin-top: undefined; }
 .nt4-ns { margin-top: undefined; }
 .nt5-ns { margin-top: undefined; }
 .nt6-ns { margin-top: undefined; }
 .nt7-ns { margin-top: undefined; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .na1-m { margin: undefined; }
 .na2-m { margin: undefined; }
 .na3-m { margin: undefined; }
 .na4-m { margin: undefined; }
 .na5-m { margin: undefined; }
 .na6-m { margin: undefined; }
 .na7-m { margin: undefined; }
 .nl1-m { margin-left: undefined; }
 .nl2-m { margin-left: undefined; }
 .nl3-m { margin-left: undefined; }
 .nl4-m { margin-left: undefined; }
 .nl5-m { margin-left: undefined; }
 .nl6-m { margin-left: undefined; }
 .nl7-m { margin-left: undefined; }
 .nr1-m { margin-right: undefined; }
 .nr2-m { margin-right: undefined; }
 .nr3-m { margin-right: undefined; }
 .nr4-m { margin-right: undefined; }
 .nr5-m { margin-right: undefined; }
 .nr6-m { margin-right: undefined; }
 .nr7-m { margin-right: undefined; }
 .nb1-m { margin-bottom: undefined; }
 .nb2-m { margin-bottom: undefined; }
 .nb3-m { margin-bottom: undefined; }
 .nb4-m { margin-bottom: undefined; }
 .nb5-m { margin-bottom: undefined; }
 .nb6-m { margin-bottom: undefined; }
 .nb7-m { margin-bottom: undefined; }
 .nt1-m { margin-top: undefined; }
 .nt2-m { margin-top: undefined; }
 .nt3-m { margin-top: undefined; }
 .nt4-m { margin-top: undefined; }
 .nt5-m { margin-top: undefined; }
 .nt6-m { margin-top: undefined; }
 .nt7-m { margin-top: undefined; }
}
@media screen and (min-width: 60em) {
 .na1-l { margin: undefined; }
 .na2-l { margin: undefined; }
 .na3-l { margin: undefined; }
 .na4-l { margin: undefined; }
 .na5-l { margin: undefined; }
 .na6-l { margin: undefined; }
 .na7-l { margin: undefined; }
 .nl1-l { margin-left: undefined; }
 .nl2-l { margin-left: undefined; }
 .nl3-l { margin-left: undefined; }
 .nl4-l { margin-left: undefined; }
 .nl5-l { margin-left: undefined; }
 .nl6-l { margin-left: undefined; }
 .nl7-l { margin-left: undefined; }
 .nr1-l { margin-right: undefined; }
 .nr2-l { margin-right: undefined; }
 .nr3-l { margin-right: undefined; }
 .nr4-l { margin-right: undefined; }
 .nr5-l { margin-right: undefined; }
 .nr6-l { margin-right: undefined; }
 .nr7-l { margin-right: undefined; }
 .nb1-l { margin-bottom: undefined; }
 .nb2-l { margin-bottom: undefined; }
 .nb3-l { margin-bottom: undefined; }
 .nb4-l { margin-bottom: undefined; }
 .nb5-l { margin-bottom: undefined; }
 .nb6-l { margin-bottom: undefined; }
 .nb7-l { margin-bottom: undefined; }
 .nt1-l { margin-top: undefined; }
 .nt2-l { margin-top: undefined; }
 .nt3-l { margin-top: undefined; }
 .nt4-l { margin-top: undefined; }
 .nt5-l { margin-top: undefined; }
 .nt6-l { margin-top: undefined; }
 .nt7-l { margin-top: undefined; }
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

