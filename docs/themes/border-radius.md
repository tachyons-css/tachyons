export const meta = {
  title: 'Border Radius / Themes / Docs / TACHYONS',
  subNav: 'themes',
  modules: ['tachyons-border-radius'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/themes/border-radius.md'
}

# Border Radius

There is a four step scale for border radius in addition to a utility that sets border radius to 100%, which when combined with an explicit height and width will produce a circle.

## Examples

### Scale

Use the scale values 0-4 to add a border radius to an element.

```.html
<div class="mb3 ph2 pv4 ba b--black-10 bg-washed-blue br0 w3 h3 dib"><code class="f6">.br0</code></div>
<div class="mb3 ph2 pv4 ba b--black-10 bg-washed-blue br1 w3 h3 dib"><code class="f6">.br1</code></div>
<div class="mb3 ph2 pv4 ba b--black-10 bg-washed-blue br2 w3 h3 dib"><code class="f6">.br2</code></div>
<div class="mb3 ph2 pv4 ba b--black-10 bg-washed-blue br3 w3 h3 dib"><code class="f6">.br3</code></div>
<div class="mb3 ph2 pv4 ba b--black-10 bg-washed-blue br4 w3 h3 dib"><code class="f6">.br4</code></div>
```

### Pill

Add `br-pill` to an element for a pill border radius effect.


```.html
<div class="mb3 pv2 ph3 ba b--black-10 bg-washed-blue black br-pill dib"><code class="f6">.br-pill</code></div>
```

### Circle

Combine `.br-100` with a fixed height and width to make a circle.

```.html
<div class="dt w4">
  <div class="f6 bg-washed-blue ba b--black-10 br-100 tc dtc h4 v-mid pa2">
    <code class="f6">.br-100</code>
  </div>
</div>
```
