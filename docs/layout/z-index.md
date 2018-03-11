# Z Index

`z-index` is used to control stacking context.
The `z` in the css property signifies the three-dimensional z axis that is used in order to stack elements that overlap.

This css property is often used for achieving overlapping layouts like a dropdown.

```.html
---
examples:
  - z-max
  - z-0
  - z-1
  - z-2
  - z-999
---
<div class="pa4 ba h5">
  <div class="relative">
    <div class="absolute top-0 left-0 pa4 bg-near-white z-3">z-3</div>
    <div class="absolute top-1 left-1 pa4 bg-mid-gray white z-2">z-2</div>
    <div class="absolute top-2 left-2 pa4 bg-black white z-1">z-1</div>
    <div class="absolute top-1 ml5 pa4 f7 bg-light-red {{EXAMPLE}} dtc v-mid">{{EXAMPLE}}</div>
  </div>
</div>
```

It's important to note that `z-index` can only be applied when an element is _within_ a stacking context (often relative/absolute elements).

## Reference

- [MDN - Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [MDN - Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
