export const meta = {
  title: 'Widths / Layout / Docs / TACHYONS',
  subNav: 'layout',
  modules: ['tachyons-widths'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/layout/widths.md'
}

# Widths

The widths module contains both a five-step width scale based on powers of two as well as a series of percentage values that can be combined with floats for an infinitely nestable and fully responsive grid system.

Class name structure is as follows:

```
Base:
  w = width

Modifiers
  1 = 1st step in width scale
  2 = 2nd step in width scale
  3 = 3rd step in width scale
  4 = 4th step in width scale
  5 = 5th step in width scale

  -10  = literal value 10%
  -20  = literal value 20%
  -25  = literal value 25%
  -30  = literal value 30%
  -33  = literal value 33%
  -34  = literal value 34%
  -40  = literal value 40%
  -50  = literal value 50%
  -60  = literal value 60%
  -70  = literal value 70%
  -75  = literal value 75%
  -80  = literal value 80%
  -90  = literal value 90%
  -100 = literal value 100%

  -third  = calc(100% / 3)
  -two-thirds  = calc(100% / 1.5)
  -auto  = string value auto

Media Query Extensions:
  -ns = not-small
  -m  = medium
  -l  = large
```

## Examples

### Width Scale

```.html
<table border="0" cellspacing="5" cellpadding="5">
  <tbody>
    <tr>
      <td>
        <code class="code">.w1</code>
      </td>
      <td>
        <div class="w1 bg-black-10 pv2"></div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code">.w2</code>
      </td>
      <td>
        <div class="w2 bg-black-10 pv2"></div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code">.w3</code>
      </td>
      <td>
        <div class="w3 bg-black-10 pv2"></div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code">.w4</code>
      </td>
      <td>
        <div class="w4 bg-black-10 pv2"></div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code">.w5</code>
      </td>
      <td>
        <div class="w5 bg-black-10 pv2"></div>
      </td>
    </tr>
  </tbody>
</table>
```

### Width Percentages

```.html
<div class="bg-black-10 w-100">
  <div class="w-10 bg-black-10 mb2">
    <code class="code">w-10</code>
  </div>
  <div class="w-20 bg-black-10 mb2">
    <code class="code">w-20</code>
  </div>
  <div class="w-25 bg-black-10 mb2">
    <code class="code">w-25</code>
  </div>
  <div class="w-30 bg-black-10 mb2">
    <code class="code">w-30</code>
  </div>
  <div class="w-33 bg-black-10 mb2">
    <code class="code">w-33</code>
  </div>
  <div class="w-third bg-black-10 mb2">
    <code class="code">w-third</code>
  </div>
  <div class="w-34 bg-black-10 mb2">
    <code class="code">w-34</code>
  </div>
  <div class="w-40 bg-black-10 mb2">
    <code class="code">w-40</code>
  </div>
  <div class="w-50 bg-black-10 mb2">
    <code class="code">w-50</code>
  </div>
  <div class="w-60 bg-black-10 mb2">
    <code class="code">w-60</code>
  </div>
  <div class="w-two-thirds bg-black-10 mb2">
    <code class="code">w-two-thirds</code>
  </div>
  <div class="w-75 bg-black-10 mb2">
    <code class="code">w-75</code>
  </div>
  <div class="w-80 bg-black-10 mb2">
    <code class="code">w-80</code>
  </div>
  <div class="w-90 bg-black-10 mb2">
    <code class="code">w-90</code>
  </div>
  <div class="w-100 bg-black-10 mb2">
    <code class="code">w-100</code>
  </div>
</div>
```

## Reference

* [MDN - Width property](https://developer.mozilla.org/en/docs/Web/css/width)
