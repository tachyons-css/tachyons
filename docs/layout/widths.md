export const meta = {
  title: 'Widths / Layout / Docs / TACHYONS',
  subNav: 'layout',
  modules: ['tachyons-widths'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/layout/widths.md'
}

# Widths

The widths module contains both a five-step width scale based on powers of two as well as a series of percentage values that can be combined with floats for an infinitely nestable and fully responsive grid system.

## Examples

### Width Scale

Use the width scale to set a width on an element, works well with the heights module for sizing icons and avatars.

```.html
---
examples:
  - w1
  - w2
  - w3
  - w4
  - w5
---
<div class="{{EXAMPLE}} pa2 bg-black-10 code"></div>
```

### Width Percentages

```.html
---
sideBySide: true
---
<div class="bg-black-10 w-100 code">
  <div class="w-10 bg-black-10 mb2">w-10</div>
  <div class="w-20 bg-black-10 mb2">w-20</div>
  <div class="w-25 bg-black-10 mb2">w-25</div>
  <div class="w-30 bg-black-10 mb2">w-30</div>
  <div class="w-33 bg-black-10 mb2">w-33</div>
  <div class="w-third bg-black-10 mb2">w-third</div>
  <div class="w-34 bg-black-10 mb2">w-34</div>
  <div class="w-40 bg-black-10 mb2">w-40</div>
  <div class="w-50 bg-black-10 mb2">w-50</div>
  <div class="w-60 bg-black-10 mb2">w-60</div>
  <div class="w-two-thirds bg-black-10 mb2">w-two-thirds</div>
  <div class="w-75 bg-black-10 mb2">w-75</div>
  <div class="w-80 bg-black-10 mb2">w-80</div>
  <div class="w-90 bg-black-10 mb2">w-90</div>
  <div class="w-100 bg-black-10 mb2">w-100</div>
</div>
```

## Reference

* [MDN - Width property](https://developer.mozilla.org/en/docs/Web/css/width)
