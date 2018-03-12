import { Alert } from '../ui'

export const meta = {
  title: 'Tables / Grid / Docs / TACHYONS',
  subNav: 'grid',
  modules: ['tachyons-vertical-align', 'tachyons-widths'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/tables.md'
}

# Table-Based Grid

<Alert
  title='Legacy grid technique'
  description={`
    This grid layout technique is primarily for legacy browsers and projects.
    It's preferable to use flexbox whenever possible.
  `}
/>

You can combine `display`, `table`, and `widths` to construct a wide variety of grids.

Table based layouts are great for projects where 100% browser support is required, or if you need cater towards legacy browsers.
It can be more powerful than `float` based layouts when you want to achieve vertical alignment and can't use `flex`.

```.html
---
sideBySide: true
---
<div class="dt w-100 code">
  <div class="dtc w-50 pv3 outline tc">w-50 pa2</div>
  <div class="dtc w-50 pv3 outline tc">w-50 pa2</div>
</div>
```

## Vertical alignment

You can combine `dt`, `dtc` and vertical alignment to achieve powerful vertical layouts using nothing more than table css properties.

```.html
---
examples:
  - v-mid
  - v-top
  - v-btm
---
<div class="dt w-100 code">
  <div class="dtc {{EXAMPLE}} w-50 h4 outline">
    {{EXAMPLE}} h4 w-50 pa2
  </div>
  <div class="dtc {{EXAMPLE}} w-50 tc">
    <div class="outline pa3">
      {{EXAMPLE}} w-50 pa2
    </div>
  </div>
</div>
```
