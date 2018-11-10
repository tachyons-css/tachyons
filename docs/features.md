export const meta = {
  title: 'Features / Overview / Docs / TACHYONS',
  subNav: 'overview',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/features.md'
}

# Features

## Open source component library

There is a [growing library of open source components](http://tachyons.io/components/) written in static html that are easy to use as is, customize with your own theme, or port to a templating language.

## Lightweight

The entire library is fewer than 14kb when minified and gzipped.
If you want to get even smaller, it’s easy to strip out what you don’t need.

## Documentation

Each module is carefully documented.
From stats about the size of the module, to how each css class will render to the screen.

## Functional

It’s easy to build components with Tachyons so it works well with Rails, React, Ember, Elm, Angular, Static html, and more.

## Multiple Flavors

Don’t like the class names? We’ve got a more verbose version you might like.
Want to use Sass instead of Postcss? We‘ve got a repo for that too :)
Tachyons isn’t just a css toolkit. It’s a design system.
Utilized here with [React Native](https://github.com/tachyons-css/react-native-style-tachyons).

## Shallow Cascade

Don’t let the cascade slow you down.
When you apply a class to an element, there is nothing in the cascade to override its effects.
You get rapid feedback on how your css is affecting your markup without wasting time debugging why your styles are being overridden.

## Low Specificity

The majority of Tachyons selectors have a specificity of 10.
Tachyons won’t override your existing styles.
So feel free to lay it on top of your existing css.

## Accessible Color Palette

Over 480 accessible color combinations.

## Mobile-first architecture

Base classes are mobile by default.
Can be overridden by namespaced classes targeting larger breakpoints.

## Layout debugging

Small css modules for debugging stacking and layout issues.
Can easily be turned on or off during development.

## Composable classes

Construct anything from complex layouts to responsive components with a series of single purpose classes.

## Cohesive design system

Scale based on the powers of two. Starting at .25

## Responsive Grid

Infinitely nestable. Fully fluid. Extremely light-weight.

## Runs on Postcss

A flexible plugin framework for [post-processing css](https://github.com/postcss/postcss).

## Easy to Customize and Extend

Tachyons is meant to be edited and customized to meet the needs of your project.
It’s just css. It isn’t precious.
Don’t be afraid to change: class names, media queries, breakpoints, or values.
