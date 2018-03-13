export const meta = {
  title: 'Utilities / Layout / Docs / TACHYONS',
  subNav: 'layout',
  modules: ['tachyons-utilities'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/layout/utilities.md'
}


# Utilities

Tachyons provides a few low-level layout utilities.

### Center

The `center` class adds the `auto` value to `margin-left` and `margin-right`.
This causes an element to center itself within the parent if there's any extra space

```.html
---
examples:
  - w-50
  - w-100
---
<div class="ba pa3 code">
  <div class="center ba pa3 {{EXAMPLE}}">center</div>
</div>
```

### Margin

In addition to `center`, you can target a particular side with the `auto` value.
This will cause that side to receive any unused horizontal space.

```
---
examples:
  - mr-auto
  - ml-auto
---
<div class="ba pa3 code">
  <div class="dib w1 h1 black"></div>
  <div class="{{EXAMPLE}} ba pa3 w4">{{EXAMPLE}}</div>
  <div class="dib w1 h1 black"></div>
</div>
```

## Reference

- [MDN - Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
