# Box Sizing

The box model has been known to trip up a few people. This module should make things a bit easier.

While many people make fun of Microsoft’s ‘Internet Explorer’ browser - the one thing that most css authors agree on is that it’s the most favorable box model. Fortunately the box-sizing property is well supported now so we can fix the atrocity that is the box model that chrome, firefox, safari, and others have implemented in modern browsers.

While the `* { box-sizing: border-box; }` hack has become quite popular - not all elements (think form inputs) benefit from this box model. This module only applies the border-box model to certain elements as listed below. There is also a .border-box class you can apply to elements as needed.

The benefit of border-box as opposed to content-box (which is the default per the css spec) is that when you declare a width, that is the width of the element, regardless of how much border or padding you add to the element.

## Examples

### Default Content Box

```.html
<div class="ph3 mw5 ba bw4 phxl pvm bg-lightest-red" style="box-sizing: content-box;">
  This element has a thick border, a max-width class of mw5, and extra large horizontal padding and medium vertical padding.
</div>
```

### Border Box

```.html
<div class="ph3 mw5 ba bw4 phxl pvm bg-lightest-red">
  This element has a thick border, a max-width class of mw5, and extra large horizontal padding and medium vertical padding.
</div>
```

### Border Box with no padding or border

```.html
<div class="ph3 mw5 bg-lightest-red">
  This element has no border, a max-width class of mw5 and no padding. Notice which example it has the same width as.
</div>
```

## Reference

* [MDN - Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
