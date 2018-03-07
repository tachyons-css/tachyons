# Spacing

Spacing comes in two flavors.
Depending on borders and background colors, the difference between Margin and margin can be invisible to the naked eye of the user.
But to a developer, they serve different roles.
Most codebases lack a ratio based scale and instead are littered with values that are just magic numbers.
This is bad.

> Tachyons uses a spacing scale based on powers of two. The available values in the scale range from 0-7.

Good design is based on math. Certain patterns and ratios are so prevelant in nature and music that they can’t be denied as elegant design solutions.
Even in the 18th century, pages in books were designed with ratios.
In the 21st century, we have gotten away from this on the web, often using magic numbers to match a ‘spec’ that has been produced in a graphics program such as photoshop, illustrator, or sketch.
While these programs are useful for sketching ideas, they aren’t 100% accurate in their reflection of how the web works across device sizes or how things get drawn to the screen.

Tachyons features a spacing scale based on powers of two that starts at .25rem (for most devices this will be the equivalent of 4px).
Since Tachyons uses rem units with px as a fallback, if a user has declared a different base font-size for their device, your spacing will scale based on a defined ratio that has stood the test of time.
As powers of two will always produce integers, there will be no problems with sub pixel rendering across browsers.
Computers aren’t that great at math and so decimals lead to inconsistencies across platforms. Inconsistencies should be avoided where possible.
You’ll find that when using a well thought out scale - things just line up.
It works, with little effort, regardless of your design knowledge or sensibilities.

## Examples

### Padding All

### Padding Horizontal

### Padding Vertical

### Padding Left

### Padding Right

### Padding Top

### Padding Bottom

### Margin All

### Margin Horizontal

### Margin Vertical

### Margin Left

### Margin Right

### Margin Top

### Margin Bottom

## Reference

- [MDN - Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
- [MDN - Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
