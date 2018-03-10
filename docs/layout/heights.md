# Heights

The heights module contains both a five-step height scale based on powers of two as well as a series of percentage values.
Explicit values can be used inside of any parent.
Percentage values will only work inside of a parent element that has a declared height.

## Examples

### Height scale

```.html
<div class="flex items-end">
  <div class="h1 bg-black-05 dib ph2 pb2 mr1">h1</div>
  <div class="h2 bg-black-05 dib pa2 mr1">h2</div>
  <div class="h3 bg-black-05 dib pa2 mr1">h3</div>
  <div class="h4 bg-black-05 dib pa2 mr1">h4</div>
  <div class="h5 bg-black-05 dib pa2 mr1">h5</div>
</div>
```

### Height percentages

```.html
<div class="flex items-end h5">
  <div class="h-25 bg-black-05 dib ph2 pb2 mr1">25</div>
  <div class="h-50 bg-black-05 dib pa2 mr1">50</div>
  <div class="h-75 bg-black-05 dib pa2 mr1">75</div>
  <div class="h-100 bg-black-05 dib pa2 mr1">100</div>
</div>
```

## Reference

- [MDN - Height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
