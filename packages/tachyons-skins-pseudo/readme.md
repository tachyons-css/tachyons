

# SKINS:PSEUDO

Customize the color of an element when
it is focused or hovered over.

### Docs

http://tachyons.io/docs/themes/skins-pseudo/


### Stats

1644 | 572 | 571
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

# SKINS:PSEUDO

Customize the color of an element when
it is focused or hovered over.

### Docs

http://tachyons.io/docs/themes/skins-pseudo/
 */
/* Text colors */
.hover-color-inherit:hover, .hover-color-inherit:focus { color: inherit; }
.hover-black-90:hover { color: undefined; }
.hover-black-90:focus { color: undefined; }
.hover-black-80:hover { color: undefined; }
.hover-black-80:focus { color: undefined; }
.hover-black-70:hover { color: undefined; }
.hover-black-70:focus { color: undefined; }
.hover-black-60:hover { color: undefined; }
.hover-black-60:focus { color: undefined; }
.hover-black-50:hover { color: undefined; }
.hover-black-50:focus { color: undefined; }
.hover-black-40:hover { color: undefined; }
.hover-black-40:focus { color: undefined; }
.hover-black-30:hover { color: undefined; }
.hover-black-30:focus { color: undefined; }
.hover-black-20:hover { color: undefined; }
.hover-black-20:focus { color: undefined; }
.hover-black-10:hover { color: undefined; }
.hover-black-10:focus { color: undefined; }
.hover-black-05:hover { color: undefined; }
.hover-black-05:focus { color: undefined; }
.hover-white-90:hover { color: undefined; }
.hover-white-90:focus { color: undefined; }
.hover-white-80:hover { color: undefined; }
.hover-white-80:focus { color: undefined; }
.hover-white-70:hover { color: undefined; }
.hover-white-70:focus { color: undefined; }
.hover-white-60:hover { color: undefined; }
.hover-white-60:focus { color: undefined; }
.hover-white-50:hover { color: undefined; }
.hover-white-50:focus { color: undefined; }
.hover-white-40:hover { color: undefined; }
.hover-white-40:focus { color: undefined; }
.hover-white-30:hover { color: undefined; }
.hover-white-30:focus { color: undefined; }
.hover-white-20:hover { color: undefined; }
.hover-white-20:focus { color: undefined; }
.hover-white-10:hover { color: undefined; }
.hover-white-10:focus { color: undefined; }
.hover-black:hover { color: undefined; }
.hover-black:focus { color: undefined; }
.hover-gray-0:hover { color: undefined; }
.hover-gray-0:focus { color: undefined; }
.hover-gray-1:hover { color: undefined; }
.hover-gray-1:focus { color: undefined; }
.hover-gray-2:hover { color: undefined; }
.hover-gray-2:focus { color: undefined; }
.hover-gray-3:hover { color: undefined; }
.hover-gray-3:focus { color: undefined; }
.hover-gray-4:hover { color: undefined; }
.hover-gray-4:focus { color: undefined; }
.hover-gray-5:hover { color: undefined; }
.hover-gray-5:focus { color: undefined; }
.hover-gray-6:hover { color: undefined; }
.hover-gray-6:focus { color: undefined; }
.hover-gray-7:hover { color: undefined; }
.hover-gray-7:focus { color: undefined; }
.hover-gray-8:hover { color: undefined; }
.hover-gray-8:focus { color: undefined; }
.hover-gray-9:hover { color: undefined; }
.hover-gray-9:focus { color: undefined; }
.hover-gray-10:hover { color: undefined; }
.hover-gray-10:focus { color: undefined; }
.hover-white:hover { color: undefined; }
.hover-white:focus { color: undefined; }
.hover-green-0:hover { color: undefined; }
.hover-green-0:focus { color: undefined; }
.hover-green-1:hover { color: undefined; }
.hover-green-1:focus { color: undefined; }
.hover-green-2:hover { color: undefined; }
.hover-green-2:focus { color: undefined; }
.hover-green-3:hover { color: undefined; }
.hover-green-3:focus { color: undefined; }
.hover-green-4:hover { color: undefined; }
.hover-green-4:focus { color: undefined; }
.hover-green-5:hover { color: undefined; }
.hover-green-5:focus { color: undefined; }
.hover-green-6:hover { color: undefined; }
.hover-green-6:focus { color: undefined; }
.hover-green-7:hover { color: undefined; }
.hover-green-7:focus { color: undefined; }
.hover-green-8:hover { color: undefined; }
.hover-green-8:focus { color: undefined; }
.hover-green-9:hover { color: undefined; }
.hover-green-9:focus { color: undefined; }
.hover-green-10:hover { color: undefined; }
.hover-green-10:focus { color: undefined; }
.hover-teal-0:hover { color: undefined; }
.hover-teal-0:focus { color: undefined; }
.hover-teal-1:hover { color: undefined; }
.hover-teal-1:focus { color: undefined; }
.hover-teal-2:hover { color: undefined; }
.hover-teal-2:focus { color: undefined; }
.hover-teal-3:hover { color: undefined; }
.hover-teal-3:focus { color: undefined; }
.hover-teal-4:hover { color: undefined; }
.hover-teal-4:focus { color: undefined; }
.hover-teal-5:hover { color: undefined; }
.hover-teal-5:focus { color: undefined; }
.hover-teal-6:hover { color: undefined; }
.hover-teal-6:focus { color: undefined; }
.hover-teal-7:hover { color: undefined; }
.hover-teal-7:focus { color: undefined; }
.hover-teal-8:hover { color: undefined; }
.hover-teal-8:focus { color: undefined; }
.hover-teal-9:hover { color: undefined; }
.hover-teal-9:focus { color: undefined; }
.hover-teal-10:hover { color: undefined; }
.hover-teal-10:focus { color: undefined; }
.hover-teal-0:hover { color: undefined; }
.hover-teal-0:focus { color: undefined; }
.hover-teal-1:hover { color: undefined; }
.hover-teal-1:focus { color: undefined; }
.hover-teal-2:hover { color: undefined; }
.hover-teal-2:focus { color: undefined; }
.hover-teal-3:hover { color: undefined; }
.hover-teal-3:focus { color: undefined; }
.hover-teal-4:hover { color: undefined; }
.hover-teal-4:focus { color: undefined; }
.hover-teal-5:hover { color: undefined; }
.hover-teal-5:focus { color: undefined; }
.hover-teal-6:hover { color: undefined; }
.hover-teal-6:focus { color: undefined; }
.hover-teal-7:hover { color: undefined; }
.hover-teal-7:focus { color: undefined; }
.hover-teal-8:hover { color: undefined; }
.hover-teal-8:focus { color: undefined; }
.hover-teal-9:hover { color: undefined; }
.hover-teal-9:focus { color: undefined; }
.hover-teal-10:hover { color: undefined; }
.hover-teal-10:focus { color: undefined; }
.hover-blue-0:hover { color: undefined; }
.hover-blue-0:focus { color: undefined; }
.hover-blue-1:hover { color: undefined; }
.hover-blue-1:focus { color: undefined; }
.hover-blue-2:hover { color: undefined; }
.hover-blue-2:focus { color: undefined; }
.hover-blue-3:hover { color: undefined; }
.hover-blue-3:focus { color: undefined; }
.hover-blue-4:hover { color: undefined; }
.hover-blue-4:focus { color: undefined; }
.hover-blue-5:hover { color: undefined; }
.hover-blue-5:focus { color: undefined; }
.hover-blue-6:hover { color: undefined; }
.hover-blue-6:focus { color: undefined; }
.hover-blue-7:hover { color: undefined; }
.hover-blue-7:focus { color: undefined; }
.hover-blue-8:hover { color: undefined; }
.hover-blue-8:focus { color: undefined; }
.hover-blue-9:hover { color: undefined; }
.hover-blue-9:focus { color: undefined; }
.hover-blue-10:hover { color: undefined; }
.hover-blue-10:focus { color: undefined; }
.hover-indigo-0:hover { color: undefined; }
.hover-indigo-0:focus { color: undefined; }
.hover-indigo-1:hover { color: undefined; }
.hover-indigo-1:focus { color: undefined; }
.hover-indigo-2:hover { color: undefined; }
.hover-indigo-2:focus { color: undefined; }
.hover-indigo-3:hover { color: undefined; }
.hover-indigo-3:focus { color: undefined; }
.hover-indigo-4:hover { color: undefined; }
.hover-indigo-4:focus { color: undefined; }
.hover-indigo-5:hover { color: undefined; }
.hover-indigo-5:focus { color: undefined; }
.hover-indigo-6:hover { color: undefined; }
.hover-indigo-6:focus { color: undefined; }
.hover-indigo-7:hover { color: undefined; }
.hover-indigo-7:focus { color: undefined; }
.hover-indigo-8:hover { color: undefined; }
.hover-indigo-8:focus { color: undefined; }
.hover-indigo-9:hover { color: undefined; }
.hover-indigo-9:focus { color: undefined; }
.hover-indigo-10:hover { color: undefined; }
.hover-indigo-10:focus { color: undefined; }
.hover-purple-0:hover { color: undefined; }
.hover-purple-0:focus { color: undefined; }
.hover-purple-1:hover { color: undefined; }
.hover-purple-1:focus { color: undefined; }
.hover-purple-2:hover { color: undefined; }
.hover-purple-2:focus { color: undefined; }
.hover-purple-3:hover { color: undefined; }
.hover-purple-3:focus { color: undefined; }
.hover-purple-4:hover { color: undefined; }
.hover-purple-4:focus { color: undefined; }
.hover-purple-5:hover { color: undefined; }
.hover-purple-5:focus { color: undefined; }
.hover-purple-6:hover { color: undefined; }
.hover-purple-6:focus { color: undefined; }
.hover-purple-7:hover { color: undefined; }
.hover-purple-7:focus { color: undefined; }
.hover-purple-8:hover { color: undefined; }
.hover-purple-8:focus { color: undefined; }
.hover-purple-9:hover { color: undefined; }
.hover-purple-9:focus { color: undefined; }
.hover-purple-10:hover { color: undefined; }
.hover-purple-10:focus { color: undefined; }
.hover-pink-0:hover { color: undefined; }
.hover-pink-0:focus { color: undefined; }
.hover-pink-1:hover { color: undefined; }
.hover-pink-1:focus { color: undefined; }
.hover-pink-2:hover { color: undefined; }
.hover-pink-2:focus { color: undefined; }
.hover-pink-3:hover { color: undefined; }
.hover-pink-3:focus { color: undefined; }
.hover-pink-4:hover { color: undefined; }
.hover-pink-4:focus { color: undefined; }
.hover-pink-5:hover { color: undefined; }
.hover-pink-5:focus { color: undefined; }
.hover-pink-6:hover { color: undefined; }
.hover-pink-6:focus { color: undefined; }
.hover-pink-7:hover { color: undefined; }
.hover-pink-7:focus { color: undefined; }
.hover-pink-8:hover { color: undefined; }
.hover-pink-8:focus { color: undefined; }
.hover-pink-9:hover { color: undefined; }
.hover-pink-9:focus { color: undefined; }
.hover-pink-10:hover { color: undefined; }
.hover-pink-10:focus { color: undefined; }
.hover-red-0:hover { color: undefined; }
.hover-red-0:focus { color: undefined; }
.hover-red-1:hover { color: undefined; }
.hover-red-1:focus { color: undefined; }
.hover-red-2:hover { color: undefined; }
.hover-red-2:focus { color: undefined; }
.hover-red-3:hover { color: undefined; }
.hover-red-3:focus { color: undefined; }
.hover-red-4:hover { color: undefined; }
.hover-red-4:focus { color: undefined; }
.hover-red-5:hover { color: undefined; }
.hover-red-5:focus { color: undefined; }
.hover-red-6:hover { color: undefined; }
.hover-red-6:focus { color: undefined; }
.hover-red-7:hover { color: undefined; }
.hover-red-7:focus { color: undefined; }
.hover-red-8:hover { color: undefined; }
.hover-red-8:focus { color: undefined; }
.hover-red-9:hover { color: undefined; }
.hover-red-9:focus { color: undefined; }
.hover-red-10:hover { color: undefined; }
.hover-red-10:focus { color: undefined; }
.hover-orange-0:hover { color: undefined; }
.hover-orange-0:focus { color: undefined; }
.hover-orange-1:hover { color: undefined; }
.hover-orange-1:focus { color: undefined; }
.hover-orange-2:hover { color: undefined; }
.hover-orange-2:focus { color: undefined; }
.hover-orange-3:hover { color: undefined; }
.hover-orange-3:focus { color: undefined; }
.hover-orange-4:hover { color: undefined; }
.hover-orange-4:focus { color: undefined; }
.hover-orange-5:hover { color: undefined; }
.hover-orange-5:focus { color: undefined; }
.hover-orange-6:hover { color: undefined; }
.hover-orange-6:focus { color: undefined; }
.hover-orange-7:hover { color: undefined; }
.hover-orange-7:focus { color: undefined; }
.hover-orange-8:hover { color: undefined; }
.hover-orange-8:focus { color: undefined; }
.hover-orange-9:hover { color: undefined; }
.hover-orange-9:focus { color: undefined; }
.hover-orange-10:hover { color: undefined; }
.hover-orange-10:focus { color: undefined; }
.hover-yellow-0:hover { color: undefined; }
.hover-yellow-0:focus { color: undefined; }
.hover-yellow-1:hover { color: undefined; }
.hover-yellow-1:focus { color: undefined; }
.hover-yellow-2:hover { color: undefined; }
.hover-yellow-2:focus { color: undefined; }
.hover-yellow-3:hover { color: undefined; }
.hover-yellow-3:focus { color: undefined; }
.hover-yellow-4:hover { color: undefined; }
.hover-yellow-4:focus { color: undefined; }
.hover-yellow-5:hover { color: undefined; }
.hover-yellow-5:focus { color: undefined; }
.hover-yellow-6:hover { color: undefined; }
.hover-yellow-6:focus { color: undefined; }
.hover-yellow-7:hover { color: undefined; }
.hover-yellow-7:focus { color: undefined; }
.hover-yellow-8:hover { color: undefined; }
.hover-yellow-8:focus { color: undefined; }
.hover-yellow-9:hover { color: undefined; }
.hover-yellow-9:focus { color: undefined; }
.hover-yellow-10:hover { color: undefined; }
.hover-yellow-10:focus { color: undefined; }
/* Background colors */
.hover-bg-transparent:hover { background-color: undefined; }
.hover-bg-transparent:focus { background-color: undefined; }
.hover-bg-black-90:hover { background-color: undefined; }
.hover-bg-black-90:focus { background-color: undefined; }
.hover-bg-black-80:hover { background-color: undefined; }
.hover-bg-black-80:focus { background-color: undefined; }
.hover-bg-black-70:hover { background-color: undefined; }
.hover-bg-black-70:focus { background-color: undefined; }
.hover-bg-black-60:hover { background-color: undefined; }
.hover-bg-black-60:focus { background-color: undefined; }
.hover-bg-black-50:hover { background-color: undefined; }
.hover-bg-black-50:focus { background-color: undefined; }
.hover-bg-black-40:hover { background-color: undefined; }
.hover-bg-black-40:focus { background-color: undefined; }
.hover-bg-black-30:hover { background-color: undefined; }
.hover-bg-black-30:focus { background-color: undefined; }
.hover-bg-black-20:hover { background-color: undefined; }
.hover-bg-black-20:focus { background-color: undefined; }
.hover-bg-black-10:hover { background-color: undefined; }
.hover-bg-black-10:focus { background-color: undefined; }
.hover-bg-black-05:hover { background-color: undefined; }
.hover-bg-black-05:focus { background-color: undefined; }
.bg-white-90:hover { background-color: undefined; }
.bg-white-90:focus { background-color: undefined; }
.bg-white-80:hover { background-color: undefined; }
.bg-white-80:focus { background-color: undefined; }
.bg-white-70:hover { background-color: undefined; }
.bg-white-70:focus { background-color: undefined; }
.bg-white-60:hover { background-color: undefined; }
.bg-white-60:focus { background-color: undefined; }
.bg-white-50:hover { background-color: undefined; }
.bg-white-50:focus { background-color: undefined; }
.bg-white-40:hover { background-color: undefined; }
.bg-white-40:focus { background-color: undefined; }
.bg-white-30:hover { background-color: undefined; }
.bg-white-30:focus { background-color: undefined; }
.bg-white-20:hover { background-color: undefined; }
.bg-white-20:focus { background-color: undefined; }
.bg-white-10:hover { background-color: undefined; }
.bg-white-10:focus { background-color: undefined; }
.hover-bg-black:hover { background-color: undefined; }
.hover-bg-black:focus { background-color: undefined; }
.hover-bg-gray-0:hover { background-color: undefined; }
.hover-bg-gray-0:focus { background-color: undefined; }
.hover-bg-gray-1:hover { background-color: undefined; }
.hover-bg-gray-1:focus { background-color: undefined; }
.hover-bg-gray-2:hover { background-color: undefined; }
.hover-bg-gray-2:focus { background-color: undefined; }
.hover-bg-gray-3:hover { background-color: undefined; }
.hover-bg-gray-3:focus { background-color: undefined; }
.hover-bg-gray-4:hover { background-color: undefined; }
.hover-bg-gray-4:focus { background-color: undefined; }
.hover-bg-gray-5:hover { background-color: undefined; }
.hover-bg-gray-5:focus { background-color: undefined; }
.hover-bg-gray-6:hover { background-color: undefined; }
.hover-bg-gray-6:focus { background-color: undefined; }
.hover-bg-gray-7:hover { background-color: undefined; }
.hover-bg-gray-7:focus { background-color: undefined; }
.hover-bg-gray-8:hover { background-color: undefined; }
.hover-bg-gray-8:focus { background-color: undefined; }
.hover-bg-gray-9:hover { background-color: undefined; }
.hover-bg-gray-9:focus { background-color: undefined; }
.hover-bg-gray-10:hover { background-color: undefined; }
.hover-bg-gray-10:focus { background-color: undefined; }
.hover-bg-white:hover { background-color: undefined; }
.hover-bg-white:focus { background-color: undefined; }
.hover-bg-green-0:hover { background-color: undefined; }
.hover-bg-green-0:focus { background-color: undefined; }
.hover-bg-green-1:hover { background-color: undefined; }
.hover-bg-green-1:focus { background-color: undefined; }
.hover-bg-green-2:hover { background-color: undefined; }
.hover-bg-green-2:focus { background-color: undefined; }
.hover-bg-green-3:hover { background-color: undefined; }
.hover-bg-green-3:focus { background-color: undefined; }
.hover-bg-green-4:hover { background-color: undefined; }
.hover-bg-green-4:focus { background-color: undefined; }
.hover-bg-green-5:hover { background-color: undefined; }
.hover-bg-green-5:focus { background-color: undefined; }
.hover-bg-green-6:hover { background-color: undefined; }
.hover-bg-green-6:focus { background-color: undefined; }
.hover-bg-green-7:hover { background-color: undefined; }
.hover-bg-green-7:focus { background-color: undefined; }
.hover-bg-green-8:hover { background-color: undefined; }
.hover-bg-green-8:focus { background-color: undefined; }
.hover-bg-green-9:hover { background-color: undefined; }
.hover-bg-green-9:focus { background-color: undefined; }
.hover-bg-green-10:hover { background-color: undefined; }
.hover-bg-green-10:focus { background-color: undefined; }
.hover-bg-teal-0:hover { background-color: undefined; }
.hover-bg-teal-0:focus { background-color: undefined; }
.hover-bg-teal-1:hover { background-color: undefined; }
.hover-bg-teal-1:focus { background-color: undefined; }
.hover-bg-teal-2:hover { background-color: undefined; }
.hover-bg-teal-2:focus { background-color: undefined; }
.hover-bg-teal-3:hover { background-color: undefined; }
.hover-bg-teal-3:focus { background-color: undefined; }
.hover-bg-teal-4:hover { background-color: undefined; }
.hover-bg-teal-4:focus { background-color: undefined; }
.hover-bg-teal-5:hover { background-color: undefined; }
.hover-bg-teal-5:focus { background-color: undefined; }
.hover-bg-teal-6:hover { background-color: undefined; }
.hover-bg-teal-6:focus { background-color: undefined; }
.hover-bg-teal-7:hover { background-color: undefined; }
.hover-bg-teal-7:focus { background-color: undefined; }
.hover-bg-teal-8:hover { background-color: undefined; }
.hover-bg-teal-8:focus { background-color: undefined; }
.hover-bg-teal-9:hover { background-color: undefined; }
.hover-bg-teal-9:focus { background-color: undefined; }
.hover-bg-teal-10:hover { background-color: undefined; }
.hover-bg-teal-10:focus { background-color: undefined; }
.hover-bg-cyan-0:hover { background-color: undefined; }
.hover-bg-cyan-0:focus { background-color: undefined; }
.hover-bg-cyan-1:hover { background-color: undefined; }
.hover-bg-cyan-1:focus { background-color: undefined; }
.hover-bg-cyan-2:hover { background-color: undefined; }
.hover-bg-cyan-2:focus { background-color: undefined; }
.hover-bg-cyan-3:hover { background-color: undefined; }
.hover-bg-cyan-3:focus { background-color: undefined; }
.hover-bg-cyan-4:hover { background-color: undefined; }
.hover-bg-cyan-4:focus { background-color: undefined; }
.hover-bg-cyan-5:hover { background-color: undefined; }
.hover-bg-cyan-5:focus { background-color: undefined; }
.hover-bg-cyan-6:hover { background-color: undefined; }
.hover-bg-cyan-6:focus { background-color: undefined; }
.hover-bg-cyan-7:hover { background-color: undefined; }
.hover-bg-cyan-7:focus { background-color: undefined; }
.hover-bg-cyan-8:hover { background-color: undefined; }
.hover-bg-cyan-8:focus { background-color: undefined; }
.hover-bg-cyan-9:hover { background-color: undefined; }
.hover-bg-cyan-9:focus { background-color: undefined; }
.hover-bg-cyan-10:hover { background-color: undefined; }
.hover-bg-cyan-10:focus { background-color: undefined; }
.hover-bg-blue-0:hover { background-color: undefined; }
.hover-bg-blue-0:focus { background-color: undefined; }
.hover-bg-blue-1:hover { background-color: undefined; }
.hover-bg-blue-1:focus { background-color: undefined; }
.hover-bg-blue-2:hover { background-color: undefined; }
.hover-bg-blue-2:focus { background-color: undefined; }
.hover-bg-blue-3:hover { background-color: undefined; }
.hover-bg-blue-3:focus { background-color: undefined; }
.hover-bg-blue-4:hover { background-color: undefined; }
.hover-bg-blue-4:focus { background-color: undefined; }
.hover-bg-blue-5:hover { background-color: undefined; }
.hover-bg-blue-5:focus { background-color: undefined; }
.hover-bg-blue-6:hover { background-color: undefined; }
.hover-bg-blue-6:focus { background-color: undefined; }
.hover-bg-blue-7:hover { background-color: undefined; }
.hover-bg-blue-7:focus { background-color: undefined; }
.hover-bg-blue-8:hover { background-color: undefined; }
.hover-bg-blue-8:focus { background-color: undefined; }
.hover-bg-blue-9:hover { background-color: undefined; }
.hover-bg-blue-9:focus { background-color: undefined; }
.hover-bg-blue-10:hover { background-color: undefined; }
.hover-bg-blue-10:focus { background-color: undefined; }
.hover-bg-indigo-0:hover { background-color: undefined; }
.hover-bg-indigo-0:focus { background-color: undefined; }
.hover-bg-indigo-1:hover { background-color: undefined; }
.hover-bg-indigo-1:focus { background-color: undefined; }
.hover-bg-indigo-2:hover { background-color: undefined; }
.hover-bg-indigo-2:focus { background-color: undefined; }
.hover-bg-indigo-3:hover { background-color: undefined; }
.hover-bg-indigo-3:focus { background-color: undefined; }
.hover-bg-indigo-4:hover { background-color: undefined; }
.hover-bg-indigo-4:focus { background-color: undefined; }
.hover-bg-indigo-5:hover { background-color: undefined; }
.hover-bg-indigo-5:focus { background-color: undefined; }
.hover-bg-indigo-6:hover { background-color: undefined; }
.hover-bg-indigo-6:focus { background-color: undefined; }
.hover-bg-indigo-7:hover { background-color: undefined; }
.hover-bg-indigo-7:focus { background-color: undefined; }
.hover-bg-indigo-8:hover { background-color: undefined; }
.hover-bg-indigo-8:focus { background-color: undefined; }
.hover-bg-indigo-9:hover { background-color: undefined; }
.hover-bg-indigo-9:focus { background-color: undefined; }
.hover-bg-indigo-10:hover { background-color: undefined; }
.hover-bg-indigo-10:focus { background-color: undefined; }
.hover-bg-purple-0:hover { background-color: undefined; }
.hover-bg-purple-0:focus { background-color: undefined; }
.hover-bg-purple-1:hover { background-color: undefined; }
.hover-bg-purple-1:focus { background-color: undefined; }
.hover-bg-purple-2:hover { background-color: undefined; }
.hover-bg-purple-2:focus { background-color: undefined; }
.hover-bg-purple-3:hover { background-color: undefined; }
.hover-bg-purple-3:focus { background-color: undefined; }
.hover-bg-purple-4:hover { background-color: undefined; }
.hover-bg-purple-4:focus { background-color: undefined; }
.hover-bg-purple-5:hover { background-color: undefined; }
.hover-bg-purple-5:focus { background-color: undefined; }
.hover-bg-purple-6:hover { background-color: undefined; }
.hover-bg-purple-6:focus { background-color: undefined; }
.hover-bg-purple-7:hover { background-color: undefined; }
.hover-bg-purple-7:focus { background-color: undefined; }
.hover-bg-purple-8:hover { background-color: undefined; }
.hover-bg-purple-8:focus { background-color: undefined; }
.hover-bg-purple-9:hover { background-color: undefined; }
.hover-bg-purple-9:focus { background-color: undefined; }
.hover-bg-purple-10:hover { background-color: undefined; }
.hover-bg-purple-10:focus { background-color: undefined; }
.hover-bg-pink-0:hover { background-color: undefined; }
.hover-bg-pink-0:focus { background-color: undefined; }
.hover-bg-pink-1:hover { background-color: undefined; }
.hover-bg-pink-1:focus { background-color: undefined; }
.hover-bg-pink-2:hover { background-color: undefined; }
.hover-bg-pink-2:focus { background-color: undefined; }
.hover-bg-pink-3:hover { background-color: undefined; }
.hover-bg-pink-3:focus { background-color: undefined; }
.hover-bg-pink-4:hover { background-color: undefined; }
.hover-bg-pink-4:focus { background-color: undefined; }
.hover-bg-pink-5:hover { background-color: undefined; }
.hover-bg-pink-5:focus { background-color: undefined; }
.hover-bg-pink-6:hover { background-color: undefined; }
.hover-bg-pink-6:focus { background-color: undefined; }
.hover-bg-pink-7:hover { background-color: undefined; }
.hover-bg-pink-7:focus { background-color: undefined; }
.hover-bg-pink-8:hover { background-color: undefined; }
.hover-bg-pink-8:focus { background-color: undefined; }
.hover-bg-pink-9:hover { background-color: undefined; }
.hover-bg-pink-9:focus { background-color: undefined; }
.hover-bg-pink-10:hover { background-color: undefined; }
.hover-bg-pink-10:focus { background-color: undefined; }
.hover-bg-red-0:hover { background-color: undefined; }
.hover-bg-red-0:focus { background-color: undefined; }
.hover-bg-red-1:hover { background-color: undefined; }
.hover-bg-red-1:focus { background-color: undefined; }
.hover-bg-red-2:hover { background-color: undefined; }
.hover-bg-red-2:focus { background-color: undefined; }
.hover-bg-red-3:hover { background-color: undefined; }
.hover-bg-red-3:focus { background-color: undefined; }
.hover-bg-red-4:hover { background-color: undefined; }
.hover-bg-red-4:focus { background-color: undefined; }
.hover-bg-red-5:hover { background-color: undefined; }
.hover-bg-red-5:focus { background-color: undefined; }
.hover-bg-red-6:hover { background-color: undefined; }
.hover-bg-red-6:focus { background-color: undefined; }
.hover-bg-red-7:hover { background-color: undefined; }
.hover-bg-red-7:focus { background-color: undefined; }
.hover-bg-red-8:hover { background-color: undefined; }
.hover-bg-red-8:focus { background-color: undefined; }
.hover-bg-red-9:hover { background-color: undefined; }
.hover-bg-red-9:focus { background-color: undefined; }
.hover-bg-red-10:hover { background-color: undefined; }
.hover-bg-red-10:focus { background-color: undefined; }
.hover-bg-orange-0:hover { background-color: undefined; }
.hover-bg-orange-0:focus { background-color: undefined; }
.hover-bg-orange-1:hover { background-color: undefined; }
.hover-bg-orange-1:focus { background-color: undefined; }
.hover-bg-orange-2:hover { background-color: undefined; }
.hover-bg-orange-2:focus { background-color: undefined; }
.hover-bg-orange-3:hover { background-color: undefined; }
.hover-bg-orange-3:focus { background-color: undefined; }
.hover-bg-orange-4:hover { background-color: undefined; }
.hover-bg-orange-4:focus { background-color: undefined; }
.hover-bg-orange-5:hover { background-color: undefined; }
.hover-bg-orange-5:focus { background-color: undefined; }
.hover-bg-orange-6:hover { background-color: undefined; }
.hover-bg-orange-6:focus { background-color: undefined; }
.hover-bg-orange-7:hover { background-color: undefined; }
.hover-bg-orange-7:focus { background-color: undefined; }
.hover-bg-orange-8:hover { background-color: undefined; }
.hover-bg-orange-8:focus { background-color: undefined; }
.hover-bg-orange-9:hover { background-color: undefined; }
.hover-bg-orange-9:focus { background-color: undefined; }
.hover-bg-orange-10:hover { background-color: undefined; }
.hover-bg-orange-10:focus { background-color: undefined; }
.hover-bg-yellow-0:hover { background-color: undefined; }
.hover-bg-yellow-0:focus { background-color: undefined; }
.hover-bg-yellow-1:hover { background-color: undefined; }
.hover-bg-yellow-1:focus { background-color: undefined; }
.hover-bg-yellow-2:hover { background-color: undefined; }
.hover-bg-yellow-2:focus { background-color: undefined; }
.hover-bg-yellow-3:hover { background-color: undefined; }
.hover-bg-yellow-3:focus { background-color: undefined; }
.hover-bg-yellow-4:hover { background-color: undefined; }
.hover-bg-yellow-4:focus { background-color: undefined; }
.hover-bg-yellow-5:hover { background-color: undefined; }
.hover-bg-yellow-5:focus { background-color: undefined; }
.hover-bg-yellow-6:hover { background-color: undefined; }
.hover-bg-yellow-6:focus { background-color: undefined; }
.hover-bg-yellow-7:hover { background-color: undefined; }
.hover-bg-yellow-7:focus { background-color: undefined; }
.hover-bg-yellow-8:hover { background-color: undefined; }
.hover-bg-yellow-8:focus { background-color: undefined; }
.hover-bg-yellow-9:hover { background-color: undefined; }
.hover-bg-yellow-9:focus { background-color: undefined; }
.hover-bg-yellow-10:hover { background-color: undefined; }
.hover-bg-yellow-10:focus { background-color: undefined; }
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

