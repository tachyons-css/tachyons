export const meta = {
  title: 'Clearfix / Layout / Docs / TACHYONS',
  subNav: 'layout',
  modules: ['tachyons-clears'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/layout/clearfix.md'
}

# Clearfix

When floats are used for layouts - they need a clearfix solution. This helps prevent layout problems caused by the elements being removed from the block context of the surrounding elements.

## Examples

### Cleared Floats

This example shows two floated elements wrapped in an element with a 4px solid red border. In the top version where the floats are cleared, the red element wraps around the elements. In the second example - the parent element is collapsed and the two floated elements sit outside of it. It should be noted you don’t have to clear floated elements that are inside another floated element.

```.html
<div class="cf" style="outline: 8px solid red;">
  <div class="fl w-50 pv4" style="background: rgba(0,20,120,.6)"></div>
  <div class="fl w-50 pv4" style="background: rgba(0,50,80,.6)"></div>
</div>
```

### Uncleared Floats

```.html
<div style="outline: 8px solid red;">
  <div class="fl w-50 pv4" style="background: rgba(0,20,120,.6)"></div>
  <div class="fl w-50 pv4" style="background: rgba(0,50,80,.6)"></div>
</div>
```

## Reference

* [MDN - Clears](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
