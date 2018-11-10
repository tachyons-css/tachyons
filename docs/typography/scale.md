import { BigQuote } from '../../site/ui'
import ScaleHero from '../../site/ui/ScaleHero'
import FontSizes from '../../site/ui/FontSizes'

export const meta =  {
  title: 'Scale / Typography / Docs / TACHYONS',
  modules: ['tachyons-type-scale', 'tachyons-gradients'],
  subNav: 'typography',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/typography/scale.md'
}

# Type Scale

<ScaleHero />

<BigQuote
  quote={`
    The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection…
    In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years…
    This is the typographic equivalent of the diatonic scale.
  `}
  author='Robert Bringhurst'
  work='The Elements of Typographic Style'
/>

### Font sizes

<FontSizes />

## Examples

```.html
<h1 class="f-headline lh-solid measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f-subheadline lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f1 lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f2 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f3 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f4 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f5 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f6 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

```.html
<h1 class="f7 normal lh-title measure">A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</h1>
```

## Reference

- [MDN - Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
