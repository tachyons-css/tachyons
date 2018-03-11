# Aspect Ratios

Use aspect ratios for fluid media that is embedded from third party sites like youtube, vimeo etc.
Wrap the outer element in aspect-ratio and then extend it with the desired ratio.
Make sure there are no height and width attributes on the embedded media.

## Examples

```html
---
examples:
  - 16x9
  - 1x1
  - 3x4
  - 4x3
  - 4x6
  - 5x7
  - 5x8
  - 6x4
  - 7x5
  - 8x5
  - 9x16
---
<article class="mw5 mw6-ns">
  <h3 class="f5 mid-gray fw5 ttu tracked mt0">{{EXAMPLE}}</h3>
  <div class="aspect-ratio aspect-ratio--{{EXAMPLE}} mb4">
    <div
      class="aspect-ratio--object cover" style="background:url(https://raw.githubusercontent.com/tachyons-css/img/master/space.jpg) center;"></div>
  </div>
</article>
```

## Reference

- Adapted from: https://github.com/suitcss/components-flex-embed
