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

```
---
examples:
  - mr-auto
  - ml-auto
---
<div class="ba pa3 code">
  <div class="dib w1 h1 black"></div>
  <div class="ba pa3 {{EXAMPLE}}">{{EXAMPLE}}</div>
  <div class="dib w1 h1 black"></div>
</div>
```
