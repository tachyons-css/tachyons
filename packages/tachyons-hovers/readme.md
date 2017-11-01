# tachyons-hovers 2.4.4

Performance based css module.

#### Stats

925 | 25 | 50
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-hovers
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-hovers
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-hovers.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-hovers";
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
<link rel="stylesheet" href="http://unpkg.com/tachyons-hovers@2.4.4/css/tachyons-hovers.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-hovers">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

  HOVER EFFECTS
  Docs: http://tachyons.io/docs/themes/hovers/

    - Dim
    - Hide Child
    - Underline text
    - Grow
    - Pointer
    - Shadow

*/
/*

  Dim element on hover by adding the dim class.

*/
.dim { opacity: 1; -webkit-transition: opacity .15s ease-in; transition: opacity .15s ease-in; }
.dim:hover, .dim:focus { opacity: .5; -webkit-transition: opacity .15s ease-in; transition: opacity .15s ease-in; }
.dim:active { opacity: .8; -webkit-transition: opacity .15s ease-out; transition: opacity .15s ease-out; }
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
.hide-child .child { opacity: 0; -webkit-transition: opacity .15s ease-in; transition: opacity .15s ease-in; }
.hide-child:hover  .child, .hide-child:focus  .child, .hide-child:active .child { opacity: 1; -webkit-transition: opacity .15s ease-in; transition: opacity .15s ease-in; }
.underline-hover:hover, .underline-hover:focus { text-decoration: underline; }
/* Can combine this with overflow-hidden to make background images grow on hover
 * even if you are using background-size: cover */
.grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); -webkit-transition: -webkit-transform .25s ease-out; transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }
.grow:hover, .grow:focus { -webkit-transform: scale( 1.05 ); transform: scale( 1.05 ); }
.grow:active { -webkit-transform: scale( .90 ); transform: scale( .90 ); }
.grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); -webkit-transition: -webkit-transform .25s ease-in-out; transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }
.grow-large:hover, .grow-large:focus { -webkit-transform: scale( 1.2 ); transform: scale( 1.2 ); }
.grow-large:active { -webkit-transform: scale( .95 ); transform: scale( .95 ); }
/* Add pointer on hover */
.pointer:hover { cursor: pointer; }
/* 
   Add shadow on hover.

   Performant box-shadow animation pattern from 
   http://tobiasahlin.com/blog/how-to-animate-box-shadow/ 
*/
.shadow-hover::after { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); opacity: 0; -webkit-transition: opacity .25s ease-in-out; transition: opacity .25s ease-in-out; }
.shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }
/* Combine with classes in skins and skins-pseudo for 
 * thousands of different transition possibilities. */
.bg-animate, .bg-animate:hover, .bg-animate:focus { -webkit-transition: background-color .15s ease-in-out; transition: background-color .15s ease-in-out; }
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

