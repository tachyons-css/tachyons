export const meta =  {
  title: 'White Space / Typography / Docs / TACHYONS',
  modules: ['tachyons-white-space'],
  subNav: 'typography',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/typography/white-space.md'
}

# White Space

White space in css is used to control how whitespace is rendered. Creative, I know.

**Normal** supresses white space characters and breaks lines based on the width of the element or the placement of a br tag.

**ws-nowrap** will keep all text on one line - often used in conjunction with truncation or a scrollbar. This can be useful for displaying unix style commands where indicating everything is on one line is important for clarity.

**Pre** will preserve all whitespace and linebreaks. This is useful for displaying code or poetry. Simulates the rendering of the pre tag.

## Examples

```.html
<p class="ws-normal measure">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod

    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At

  no sea
    takimata
  sanctus est
</p>
```

```.html
<p class="ws-nowrap measure">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod

    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At

  no sea
    takimata
  sanctus est
</p>
```

```.html
<p class="pre measure">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod

    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At

  no sea
    takimata
  sanctus est
</p>
```
