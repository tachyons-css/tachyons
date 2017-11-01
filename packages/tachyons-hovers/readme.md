

# HOVER EFFECTS

### Docs

http://tachyons.io/docs/themes/hovers/

### Base

- `dim` - Dim element on hover
- `glow` - Animate opacity to 100% on hover
- `hide-child` - Hide child & reveal on hover
- `underline-hover` - Underline text on hover
- `grow` - Grow element on hover
- `pointer` - Show cursor: pointer on hover
- `shadow` - Show shadow on hover
- `bg-animate` - Animate background color on hover

### Examples

##### Hide child & reveal on hover

Put the hide-child class on a parent element and any nested element with the
child class will be hidden and displayed on hover or focus.

```html
<div class="hide-child">
  <div class="child"> Hidden until hover or focus </div>
  <div class="child"> Hidden until hover or focus </div>
  <div class="child"> Hidden until hover or focus </div>
  <div class="child"> Hidden until hover or focus </div>
</div>
```


### Stats

1133 | 29 | 55
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

  # HOVER EFFECTS

  ### Docs

  http://tachyons.io/docs/themes/hovers/

  ### Base

  - `dim` - Dim element on hover
  - `glow` - Animate opacity to 100% on hover
  - `hide-child` - Hide child & reveal on hover
  - `underline-hover` - Underline text on hover
  - `grow` - Grow element on hover
  - `pointer` - Show cursor: pointer on hover
  - `shadow` - Show shadow on hover
  - `bg-animate` - Animate background color on hover

  ### Examples

  ##### Hide child & reveal on hover

  Put the hide-child class on a parent element and any nested element with the
  child class will be hidden and displayed on hover or focus.

  ```html
  <div class="hide-child">
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
  </div>
  ```
*/
/*

  Dim element on hover by adding the dim class.

*/
.dim { opacity: 1; transition: opacity .15s ease-in; }
.dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }
.dim:active { opacity: .8; transition: opacity .15s ease-out; }
/*

  Animate opacity to 100% on hover by adding the glow class.

*/
.glow { transition: opacity .15s ease-in; }
.glow:hover, .glow:focus { opacity: 1; transition: opacity .15s ease-in; }
/*

  Hide child & reveal on hover:

  Put the hide-child class on a parent element and any nested element with the
  child class will be hidden and displayed on hover or focus.

  <div class="hide-child">
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
    <div class="child"> Hidden until hover or focus </div>
  </div>
*/
.hide-child .child { opacity: 0; transition: opacity .15s ease-in; }
.hide-child:hover  .child, .hide-child:focus  .child, .hide-child:active .child { opacity: 1; transition: opacity .15s ease-in; }
.underline-hover:hover, .underline-hover:focus { text-decoration: underline; }
/* Can combine this with overflow-hidden to make background images grow on hover
 * even if you are using background-size: cover */
.grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }
.grow:hover, .grow:focus { -webkit-transform: scale( 1.05 ); transform: scale( 1.05 ); }
.grow:active { -webkit-transform: scale( .90 ); transform: scale( .90 ); }
.grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }
.grow-large:hover, .grow-large:focus { -webkit-transform: scale( 1.2 ); transform: scale( 1.2 ); }
.grow-large:active { -webkit-transform: scale( .95 ); transform: scale( .95 ); }
/* Add pointer on hover */
.pointer:hover { cursor: pointer; }
/*
   Add shadow on hover.

   Performant box-shadow animation pattern from
   http://tobiasahlin.com/blog/how-to-animate-box-shadow/
*/
.shadow-hover { cursor: pointer; position: relative; transition: all .5s cubic-bezier( .165, .84, .44, 1 ); }
.shadow-hover::after { content: ''; box-shadow: 0 0 16px 2px rgba( 0, 0, 0, .2 ); border-radius: inherit; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity .5s cubic-bezier( .165, .84, .44, 1 ); }
.shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }
/* Combine with classes in skins and skins-pseudo for
 * many different transition possibilities. */
.bg-animate, .bg-animate:hover, .bg-animate:focus { transition: background-color .15s ease-in-out; }
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

