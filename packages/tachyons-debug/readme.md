

# DEBUG (PESTICIDE)

This is a partial you have to manually include in your
build file. It places a different colored outline on
each element which can help you debug layout issues.
There is also a handy chrome extension that can
be found at http://pesticide.io

### Docs

http://tachyons.io/docs/debug/


### Stats

1163 | 99 | 99
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

  # DEBUG (PESTICIDE)

  This is a partial you have to manually include in your
  build file. It places a different colored outline on
  each element which can help you debug layout issues.
  There is also a handy chrome extension that can
  be found at http://pesticide.io

  ### Docs

  http://tachyons.io/docs/debug/
*/
body { outline: 1px solid #2980b9 !important; }
article { outline: 1px solid #3498db !important; }
nav { outline: 1px solid #0088c3 !important; }
aside { outline: 1px solid #33a0ce !important; }
section { outline: 1px solid #66b8da !important; }
header { outline: 1px solid #99cfe7 !important; }
footer { outline: 1px solid #cce7f3 !important; }
h1 { outline: 1px solid #162544 !important; }
h2 { outline: 1px solid #314e6e !important; }
h3 { outline: 1px solid #3e5e85 !important; }
h4 { outline: 1px solid #449baf !important; }
h5 { outline: 1px solid #c7d1cb !important; }
h6 { outline: 1px solid #4371d0 !important; }
main { outline: 1px solid #2f4f90 !important; }
address { outline: 1px solid #1a2c51 !important; }
div { outline: 1px solid #036cdb !important; }
p { outline: 1px solid #ac050b !important; }
hr { outline: 1px solid #ff063f !important; }
pre { outline: 1px solid #850440 !important; }
blockquote { outline: 1px solid #f1b8e7 !important; }
ol { outline: 1px solid #ff050c !important; }
ul { outline: 1px solid #d90416 !important; }
li { outline: 1px solid #d90416 !important; }
dl { outline: 1px solid #fd3427 !important; }
dt { outline: 1px solid #ff0043 !important; }
dd { outline: 1px solid #e80174 !important; }
figure { outline: 1px solid #f0b !important; }
figcaption { outline: 1px solid #bf0032 !important; }
table { outline: 1px solid #0c9 !important; }
caption { outline: 1px solid #37ffc4 !important; }
thead { outline: 1px solid #98daca !important; }
tbody { outline: 1px solid #64a7a0 !important; }
tfoot { outline: 1px solid #22746b !important; }
tr { outline: 1px solid #86c0b2 !important; }
th { outline: 1px solid #a1e7d6 !important; }
td { outline: 1px solid #3f5a54 !important; }
col { outline: 1px solid #6c9a8f !important; }
colgroup { outline: 1px solid #6c9a9d !important; }
button { outline: 1px solid #da8301 !important; }
datalist { outline: 1px solid #c06000 !important; }
fieldset { outline: 1px solid #d95100 !important; }
form { outline: 1px solid #d23600 !important; }
input { outline: 1px solid #fca600 !important; }
keygen { outline: 1px solid #b31e00 !important; }
label { outline: 1px solid #ee8900 !important; }
legend { outline: 1px solid #de6d00 !important; }
meter { outline: 1px solid #e8630c !important; }
optgroup { outline: 1px solid #b33600 !important; }
option { outline: 1px solid #ff8a00 !important; }
output { outline: 1px solid #ff9619 !important; }
progress { outline: 1px solid #e57c00 !important; }
select { outline: 1px solid #e26e0f !important; }
textarea { outline: 1px solid #cc5400 !important; }
details { outline: 1px solid #33848f !important; }
summary { outline: 1px solid #60a1a6 !important; }
command { outline: 1px solid #438da1 !important; }
menu { outline: 1px solid #449da6 !important; }
del { outline: 1px solid #bf0000 !important; }
ins { outline: 1px solid #400000 !important; }
img { outline: 1px solid #22746b !important; }
iframe { outline: 1px solid #64a7a0 !important; }
embed { outline: 1px solid #98daca !important; }
object { outline: 1px solid #0c9 !important; }
param { outline: 1px solid #37ffc4 !important; }
video { outline: 1px solid #6ee866 !important; }
audio { outline: 1px solid #027353 !important; }
source { outline: 1px solid #012426 !important; }
canvas { outline: 1px solid #a2f570 !important; }
track { outline: 1px solid #59a600 !important; }
map { outline: 1px solid #7be500 !important; }
area { outline: 1px solid #305900 !important; }
a { outline: 1px solid #ff62ab !important; }
em { outline: 1px solid #800b41 !important; }
strong { outline: 1px solid #ff1583 !important; }
i { outline: 1px solid #803156 !important; }
b { outline: 1px solid #cc1169 !important; }
u { outline: 1px solid #ff0430 !important; }
s { outline: 1px solid #f805e3 !important; }
small { outline: 1px solid #d107b2 !important; }
abbr { outline: 1px solid #4a0263 !important; }
q { outline: 1px solid #240018 !important; }
cite { outline: 1px solid #64003c !important; }
dfn { outline: 1px solid #b4005a !important; }
sub { outline: 1px solid #dba0c8 !important; }
sup { outline: 1px solid #cc0256 !important; }
time { outline: 1px solid #d6606d !important; }
code { outline: 1px solid #e04251 !important; }
kbd { outline: 1px solid #5e001f !important; }
samp { outline: 1px solid #9c0033 !important; }
var { outline: 1px solid #d90047 !important; }
mark { outline: 1px solid #ff0053 !important; }
bdi { outline: 1px solid #bf3668 !important; }
bdo { outline: 1px solid #6f1400 !important; }
ruby { outline: 1px solid #ff7b93 !important; }
rt { outline: 1px solid #ff2f54 !important; }
rp { outline: 1px solid #803e49 !important; }
span { outline: 1px solid #cc2643 !important; }
br { outline: 1px solid #db687d !important; }
wbr { outline: 1px solid #db175b !important; }
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

