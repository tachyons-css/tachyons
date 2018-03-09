# Borders

There is a base border module that can be extended with the border-width, border-color, border-style modules.
By default you don’t need to set a border color.
It will inherit whatever the text color is for that dom node.
You can target any side to put a border on ie. top, right, bottom, left.

Border colors by default will inherit the color of the element.
Tachyons also provides an alpha scale for the standard opacity range for both black and white.

## Examples

### Border base

```.html
<div class="ba bg-washed-blue pa3 mw6 mb3">All</div>
<div class="bt bg-washed-blue pa3 mw6 mb3">Top</div>
<div class="bb bg-washed-blue pa3 mw6 mb3">Bottom</div>
<div class="bl bg-washed-blue pa3 mw6 mb3">Left</div>
<div class="br bg-washed-blue pa3 mw6 mb3">Right</div>
```

### Border style

```.html
<div class="ba bg-washed-blue pa3 dib mr3">Solid (default)</div>
<div class="ba b--dashed bg-washed-blue pa3 dib mr3">Dashed</div>
<div class="ba b--dotted bg-washed-blue pa3 dib mr3">Dotted</div>
```

### Border widths

```.html
<div class="ba bg-washed-blue pa3 dib mr3">none (default)</div>
<div class="ba bw1 bg-washed-blue pa3 dib mr3">1</div>
<div class="ba bw2 bg-washed-blue pa3 dib mr3">2</div>
<div class="ba bw3 bg-washed-blue pa3 dib mr3">3</div>
<div class="ba bw4 bg-washed-blue pa3 dib mr3">4</div>
<div class="ba bw5 bg-washed-blue pa3 dib mr3">5</div>
```

### Border colors

Tachyons provides a black alpha scale and a white alpha scale for border colors.

#### Black alpha scale

```.html
<div class="ba b--black-100 pa3 dib">100</div>
<div class="ba b--black-90 pa3 dib">90</div>
<div class="ba b--black-80 pa3 dib">80</div>
<div class="ba b--black-70 pa3 dib">70</div>
<div class="ba b--black-60 pa3 dib">60</div>
<div class="ba b--black-50 pa3 dib">50</div>
<div class="ba b--black-40 pa3 dib">40</div>
<div class="ba b--black-30 pa3 dib">30</div>
<div class="ba b--black-20 pa3 dib">20</div>
<div class="ba b--black-10 pa3 dib">10</div>
<div class="ba b--black-05 pa3 dib">.5</div>
<div class="ba b--black-025 pa3 dib">.25</div>
<div class="ba b--black-0125 pa3 dib">.125</div>
```

#### White alpha scale

```.html
<div class="pa3 bg-black">
  <div class="ba white b--white-100 pa3 dib">100</div>
  <div class="ba white b--white-90 pa3 dib">90</div>
  <div class="ba white b--white-80 pa3 dib">80</div>
  <div class="ba white b--white-70 pa3 dib">70</div>
  <div class="ba white b--white-60 pa3 dib">60</div>
  <div class="ba white b--white-50 pa3 dib">50</div>
  <div class="ba white b--white-40 pa3 dib">40</div>
  <div class="ba white b--white-30 pa3 dib">30</div>
  <div class="ba white b--white-20 pa3 dib">20</div>
  <div class="ba white b--white-10 pa3 dib">10</div>
  <div class="ba white b--white-05 pa3 dib">.5</div>
  <div class="ba white b--white-025 pa3 dib">.25</div>
  <div class="ba white b--white-0125 pa3 dib">.125</div>
</div>
```
