import { Alert } from '../../site/ui'

export const meta = {
  title: 'Floats / Grid / Docs / TACHYONS',
  subNav: 'grid',
  modules: ['tachyons-floats', 'tachyons-widths', 'tachyons-clearfix'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/floats.md'
}

# Float-Based Grid

<Alert
  title='Legacy grid technique'
  description={`
    This grid layout technique is primarily for legacy browsers and projects.
    It's preferable to use flexbox whenever possible.
  `}
/>

You can combine `display`, `float`, `padding`, and `widths` to construct a wide variety of grids.
Here is a basic example of some options for constructing a simple grid.

Float based layouts are great for projects where 100% browser support is required, or if you need cater towards legacy browsers.

Don't forget to wrap `float`ed elements with the clearfix(`.cf`).

## Examples

Below is a list of many grid examples.
It's not meant to be exhaustive, but shows how you can compose Tachyons functional css classes together.
The possibilities are limitless!

### Fixed Columns

```.html
---
sideBySide: true
rows: 12
---
<section class="cf w-100 pv3 f6 ph3 ph4-m code">
  <div class="fl w-100 pv3 outline tc">fl w-100 pa2</div>
  <div class="fl w-90 pv3 outline tc">fl w-90 pa2</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-80 pv3 outline tc">fl w-80 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-60 pv3 outline tc">fl w-60 pa2</div>
  <div class="fl w-40 pv3 outline tc">fl w-40 pa2</div>
  <div class="fl w-50 pv3 outline tc">fl w-50 pa2</div>
  <div class="fl w-50 pv3 outline tc">fl w-50 pa2</div>
  <div class="fl w-third pv3 outline tc">fl w-third pa2</div>
  <div class="fl w-third pv3 outline tc">fl w-third pa2</div>
  <div class="fl w-third pv3 outline tc">fl w-third pa2</div>
  <div class="fl w-third pv3 outline tc">fl w-third pa2</div>
  <div class="fl w-two-thirds pv3 outline tc">fl w-two-thirds pa2</div>
  <div class="fl w-25 pv3 outline tc">fl w-25 pa2</div>
  <div class="fl w-25 pv3 outline tc">fl w-25 pa2</div>
  <div class="fl w-25 pv3 outline tc">fl w-25 pa2</div>
  <div class="fl w-25 pv3 outline tc">fl w-25 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-20 pv3 outline tc">fl w-20 pa2</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
  <div class="fl w-10 pv3 outline tc">w-10</div>
</div>
</section>
```

### Two Columns - Collapsing

```.html
---
sideBySide: true
---
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Three Columns - Collapse to Single

```.html
---
sideBySide: true
---
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Three Columns - Collapse to Mixed

```.html
---
sideBySide: true
---
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Four Columns - Collapse to single

```.html
---
sideBySide: true
---
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Four Columns - Collapse to Mixed

```.html
---
sideBySide: true
---
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
  </div>
</div>
```

## Reference

- [MDN - Width](https://developer.mozilla.org/en-US/docs/Web/css/width)
- [MDN - Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Better, Simpler Grid Systems](https://philipwalton.github.io/solved-by-flexbox/demos/grids/)
