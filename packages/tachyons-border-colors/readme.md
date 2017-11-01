

# BORDER COLORS


Border colors can be used to extend the base
border classes ba,bt,bb,br,bl found in the _borders.css file.

The base border class by default will set the color of the border
to that of the current text color. These classes are for the cases
where you desire for the text and border colors to be different.

### Docs

http://tachyons.io/docs/themes/borders/

### Base

`b` = border

### Modifiers

- `--color-name` = black, white and their alpha colors are available


### Stats

444 | 28 | 28
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

  # BORDER COLORS


  Border colors can be used to extend the base
  border classes ba,bt,bb,br,bl found in the _borders.css file.

  The base border class by default will set the color of the border
  to that of the current text color. These classes are for the cases
  where you desire for the text and border colors to be different.

  ### Docs

  http://tachyons.io/docs/themes/borders/

  ### Base

  `b` = border

  ### Modifiers

  - `--color-name` = black, white and their alpha colors are available
*/
.b--black { border-color: undefined; }
.b--white { border-color: undefined; }
.b--white-90 { border-color: undefined; }
.b--white-80 { border-color: undefined; }
.b--white-70 { border-color: undefined; }
.b--white-60 { border-color: undefined; }
.b--white-50 { border-color: undefined; }
.b--white-40 { border-color: undefined; }
.b--white-30 { border-color: undefined; }
.b--white-20 { border-color: undefined; }
.b--white-10 { border-color: undefined; }
.b--white-05 { border-color: undefined; }
.b--white-025 { border-color: undefined; }
.b--white-0125 { border-color: undefined; }
.b--black-90 { border-color: undefined; }
.b--black-80 { border-color: undefined; }
.b--black-70 { border-color: undefined; }
.b--black-60 { border-color: undefined; }
.b--black-50 { border-color: undefined; }
.b--black-40 { border-color: undefined; }
.b--black-30 { border-color: undefined; }
.b--black-20 { border-color: undefined; }
.b--black-10 { border-color: undefined; }
.b--black-05 { border-color: undefined; }
.b--black-025 { border-color: undefined; }
.b--black-0125 { border-color: undefined; }
.b--transparent { border-color: undefined; }
.b--inherit { border-color: inherit; }
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

