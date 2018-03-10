# Max Widths

The max-widths module contains both a ten-step scale based on powers of two as well as the ability to constrain element widths to a maximum of 100%.

Max widths can be combined with widths to ensure that your content doesn’t get too wide on larger monitors. Max-widths can also help keep embedded media within the canvas. As they are fluid across ranges of screen widths, max-widths are extremely useful when trying to keep a design responsive.

Class name structure is as follows:

```
Base:
  mw = width

Modifiers
  1  = 1st step in width scale
  2  = 2nd step in width scale
  3  = 3rd step in width scale
  4  = 4th step in width scale
  5  = 5th step in width scale
  6  = 6th step in width scale
  7  = 7th step in width scale
  8  = 8th step in width scale
  9  = 9th step in width scale

  -100  = literal value %
  -none  = none

Media Query Extensions:
  -ns = not-small
  -m  = medium
  -l  = large
```

## Examples

### Max Width Scale

```.html
<table border="0" cellspacing="5" cellpadding="5">
  <tbody>
    <tr>
      <td>
        <code class="code mr2">.mw1</code>
      </td>
      <td>
        <div class="mw1 bg-black-10 pa2 mv1">
          Lorem
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw2</code>
      </td>
      <td>
        <div class="mw2 bg-black-10 pa2 mv1">
          Lorem
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw3</code>
      </td>
      <td>
        <div class="mw3 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw4</code>
      </td>
      <td>
        <div class="mw4 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw5</code>
      </td>
      <td>
        <div class="mw5 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw6</code>
      </td>
      <td>
        <div class="mw6 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw7</code>
      </td>
      <td>
        <div class="mw7 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw8</code>
      </td>
      <td>
        <div class="mw8 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code class="code mr2">.mw9</code>
      </td>
      <td>
        <div class="mw9 bg-black-10 pa2 mv1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

### Max Width Percentages

```.html
<div class="bg-black-10 w-100">
  <div class="mw-100 bg-black-10">
    <code class="code db pa2">mw-100</code>
  </div>
</div>
```

## Reference

* [MDN - Max Width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
