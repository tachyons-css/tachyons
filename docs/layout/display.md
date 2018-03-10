# Display

Single purpose classes for setting the display of an element at any breakpoint.

> The display property defines box’s display type, which consists of the two basic qualities of how an element generates boxes: the inner display type, which defines the kind of formatting context it generates, dictating how its descendant boxes are laid out. the outer display type, which dictates how the box participates in its parent formatting context.

> — css3 Display Module Spec

## Examples

### Display Block

```
.db { display: block; }
<span class="db"></span>
```

Block will inherently set width to 100% of its parent element. It will also cause a line break, even if the declared width doesn’t take up the full width of the parent.

```.html
<div class="db bg-black-10 mb2">
  block
</div>
<div class="db bg-black-10 mb2 mw4">
  block
</div>
```

### Display Inline-Block

```
.dib { display: inline-block; }
<span class="dib"></span>
```

Inline-block will wrap around content inline. It also allows you to set height and width properties on the element, which display inline does not allow you to do. It does render the white-space inbeween elements, so if you set width: 25% to four elements they will not just render as a 4 column layout by default.

```.html
<div class="dib bg-black-10 mb2">
  display: inline-block
</div>
<div class="dib bg-black-10 mb2">
  display: inline-block
</div>
<div class="dib bg-black-10 mb2">
  display: inline-block
</div>
```

### Display Inline

```
.di { display: inline; }
<div class="di"></div>
```

Set content inline. Inline doesn’t respect height or width values. It does not render white space between elements.

```.html
<div class="di bg-black-10 mb2">
  display: inline
</div>
<div class="di bg-black-10 mb2">
  display: inline
</div>
<div class="di bg-black-10 mb2">
  display: inline
</div>
```

### Display Table

```
.dt { display: table; }
.dtc { display: table-cell; }
<div class="dt">
   <div class="dtc"></div>
   <div class="dtc"></div>
</div>
```

The display table can be combined with display table-cell to render a table without table markup. This can be useful for vertically aligning content or for auto-calculating a variable number of table cells. To auto-calculate even widths for all cells, you must extend display table with `.dt--fixed` to set `table-layout: fixed`.

```.html
<div class="dt bg-black-10 mb2 w-100">
  <div class="dtc v-mid pa1 bg-black-10">display</div>
  <div class="dtc v-mid pa1 bg-black-20">table</div>
  <div class="dtc v-mid pa1 bg-black-10">will automatically</div>
  <div class="dtc v-mid pa1 bg-black-20">compute cell width</div>
</div>
```

### Display Table: Fixed

```
<div class="dt dt--fixed w-100">
   <div class="dtc"></div>
   <div class="dtc"></div>
</div>
```

```.html
<div class="dt dt--fixed bg-black-10 mb2 w-100">
  <div class="dtc v-mid pa1 bg-black-10">display table</div>
  <div class="dtc v-mid pa1 bg-black-20">with table-layout: fixed</div>
  <div class="dtc v-mid pa1 bg-black-10">will automatically</div>
  <div class="dtc v-mid pa1 bg-black-20">make every cell the same width regardless of the content</div>
</div>
```

### Display None

```
.dn { display: none; }
<div class="dn"></div>
```

You can set the display of any element to none by tacking on the `dn` class.

## Reference

* [MDN - Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
