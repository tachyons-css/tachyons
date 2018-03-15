import { BigQuote } from '../ui'

export const meta =  {
  title: 'Line Height / Typography / Docs / TACHYONS',
  modules: ['tachyons-line-height'],
  subNav: 'typography',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/typography/line-height.md'
}

# Line Height

**line-height** is a css property

**lead** [*rhyming with red*]: 
Originally a strip of soft metal used for vertical spacing between lines of type. Now meaning the vertical distance from the baseline of one line to the baseline of the next. Also called **leading**.

“Many people with cognitive disabilities have trouble tracking lines of text when a block of text is single spaced. Providing spacing between 1.5 to 2 allows them to start a new line more easily once they have finished the previous one.”

—WCAG 2.0 Compliance Techniques

Line-height affects how easy it is to read a piece of text, so having a well constructed set of values can help make your text easier to read, increasing the chances that people will read it. Tachyons provides classes to set text at three common line-height values. 1.5 for body copy, 1.25 for titles, and 1 for text that doesn’t wrap.

## Examples

### No applied line-height (default)

```.html
<p class="measure">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

### Prose Leading (1.5)

```
<p class="lh-copy">Paragraph content</p>
```

```.html
<p class="measure lh-copy">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

### No Applied Title Leading (Default)

```.html
<h4 class="measure ttu fw6 mt0 f2 f-subheadline-l">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</h4>
```

### Title Leading (1.25)

```
<h1 class="lh-title">Paragraph content</h1>
```

```.html
<h4 class="measure lh-title ttu f2 f-subheadline-l fw6 mt0">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</h4>
```

### Solid Leading (1) 

```
<h4 class="lh-solid">Paragraph content</h4>
```

```.html
<h4 class="measure lh-solid  f2 f-subheadline-l fw6 mt0">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</h4>
```
