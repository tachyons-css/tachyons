# Position

Html elements are initially set to a position of 'static'. Tachyons provides classes for setting position to be relative or absolute.

Absolute elements are absolutely positioned inside of a relative element. You can use absolute positioning to stretch elements making sure they fill the width and height of a relative container. Relatively positioned elements offer the ability to offset the position of an element without affecting the position of any elements around it. This module should be used in conjunction with the coordinates module which is used to give working examples on this page.

css also provides an option for setting position to 'sticky' but it is not included in this module. If you do find it useful you could easily extend the position module to include this option. It should be noted that sticky is not well supported at the moment. If the provided coordinates don’t suit your needs the module is easy to extend to add any values you might need.

## Examples

### Position Static

```.html
<div class="bg-light-gray">
  <p>This is statically positioned content</p>
</div>
```

### Position Relative

```.html
<div class="relative top-4 bg-black-20 bold">
  <p class="f3">This is relatively positioned content that doesn’t affect the position of other elements which is why the text overlaps with the content that is set to position static.</p>
</div>
<div class="static bg-black-10 gray">
  <p>
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
    This is also statically positioned content
  </p>
</div>
```

### Position Relative + Absolute

```.html
<div class="relative bg-black-10 h5">
  <div class="absolute top-1 left-1 right-2 bottom-2 white bg-dark-gray">
  <p class="measure pam">
    This is an absolutely positioned element set to have offsets of top and left to 1rem with right and bottom offset by 2rem. It’s parent with the light gray background is set to position relative.
    </p>
  </div>
</div>
<div class="relative bg-black-10 h5">
  <div class="absolute top-0 right-0 white bg-dark-gray w2 pvs tc">
    X
  </div>
  <p class="measure pal">
    This illustrates an absolutely positioned element that might always need to be in the top right of the content like a close button for a modal that needs to be dismissed.
  </p>
</div>
```

## Reference

* [MDN - Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* [MDN - Top](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
* [MDN - Bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
* [MDN - Right](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
* [MDN - Left](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
