export const meta = {
  title: 'Floats / Layout / Docs / TACHYONS',
  subNav: 'layout',
  modules: ['tachyons-floats'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/layout/floats.md'
}

# Floats

Single purpose classes for setting the display of an element at any breakpoint.

Floats may be set on any element, but it will only affect elements that aren’t absolutely positioned.
When you float an element you inherently set its display to block.

There are only three values that can be declared for float: left, right, or none.
These three base classes are very easy to memorize: `fl`, `fr`, `fn`.
Combine float left/right with width utilities to create fluid multi-column layouts.

Don't forget to clearfix your floats with `cf`.

## Examples

### Float left

```.html
<div class="cf">
  <div class="fl bg-black-05">Float Left</div>
</div>
```

### Float right

```.html
<div class="cf">
  <div class="fr bg-black-05">Float Right</div>
</div>
```

### Float none

```.html
<div class="cf">
  <div class="fn bg-black-05">Float None</div>
</div>
```

### Float with images

Originally floats were used to wrap text around images as in the example below.

```.html
<div class="cf">
  <img src="http://tachyons.io/img/example-1.jpg" class="fl w4 mr3" alt="example 1">
  <p class="measure mt0">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
</div>
```

## Reference

- [MDN - Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
