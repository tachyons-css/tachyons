export const meta =  {
  title: 'Tracking / Typography / Docs / TACHYONS',
  modules: ['tachyons-letter-spacing'],
  subNav: 'typography',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/typography/tracking.md'
}

# Tracking
Letter-spacing is the consistent white-space between letters in a piece of text. In typography, letter-spacing is commonly known as tracking. Text that is set to uppercase should be tracked to improve readability.

Lowercase text should never be tracked.
For some larger text, depending on the typeface, a negative tracking might be desirable.

There are three possible values to choose from when tracking uppercased text:

```
.tracked       { letter-spacing:  .1em; }
.tracked-tight { letter-spacing: -.05em; }
.tracked-mega  { letter-spacing:  .25em; }
```

## Examples

```.html
<h4 class="f1 ttu b mt0">Title Example</h4>
<h4 class="f1 ttu tracked mt0">Title Example</h4>
<h4 class="f1 ttu tracked-mega b mt0">Title Example</h4>
<h4 class="f-headline tracked-tight b mt0">title example</h4>
```
