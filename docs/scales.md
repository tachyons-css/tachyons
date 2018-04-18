import { BigQuote } from './ui'

export const meta = {
  title: 'Scales / Overview / Docs / TACHYONS',
  subNav: 'overview',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/scales.md'
}

# Scales

Many of Tachyons modules employ the use of scales, including width, color, font size, spacing, etc.
They're often based on powers of two and are opinionated by design.

Scales are used in order to provide constraints, which in turn results in a more cohesive, consistent, and performant end result.
These scales also provide a language that can be communicated between design, development, and other stakeholders on a project.

![Tachyons Type Scale](https://user-images.githubusercontent.com/1424573/37166890-8b6cdfc2-22bd-11e8-9dff-51025bc22ce8.png)
[Css Stats](http://cssstats.com/stats?link=http%3A%2F%2Ftachyons.io%2Fcss%2Ftachyons.min.css&name=Tachyons)

## Rapid development

Through the use of scales, it become a quick task to "bump up the horizontal padding on that button" or "increase the hero's heading font size".
This allows designers and developers to rapidly develop and prototype in the browser, while still having a consistent looking web page.

## Cohesion and consistency via constraints

For those that are newer to web design, Tachyons help guide the user to a happy path of consistency through the use of scales.
For example, a spacing scale with only seven steps based on powers of two helps to keep things aligned throughout a layout.

## [Weber–Fechner law](https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law)

Tachyons scales are based on design theory as well.
One of those is the Weber-Fechner law.

<BigQuote
  quote='Simple differential sensitivity is inversely proportional to the size of the components of the difference; relative differential sensitivity remains the same regardless of size.'
  author='Gustav Theodor Fechner'
  work='Elements of psychophysics'
/>

This essentially means that a scale of font sizes with similar values appears to be similar in size when compared to a scale that grows exponentially.
As humans, we have a hard time differentiating `2rem` and `2.5rem`, but the difference between `2rem` and `4rem` is quite drastic.

## Reference

- [Wiki - Weber–Fechner law](https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law)
- [Styled System](https://github.com/jxnblk/styled-system)
