export const meta = {
  title: 'Class Naming / Overview / Docs / TACHYONS',
  subNav: 'overview',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/class-naming.md'
}

# Class Naming

A lot of inspiration for Tachyons classes comes from unix.
They're also the result of a lot of user testing with people of different background and levels of experience.
Tachyons classes attempt to be terse yet explicit.
They follow a convention that users can also intuit once they learn the patterns.

Tachyons classes never use any special characters that have to be escaped.
This is by design, ensuring source code can be searched without escaping characters.

For a list of all classes see the [Table of Styles](table-of-styles.md).

## Classes with scales and modifiers

Some modules, like `tachyons-widths` have scales and literal values.
Accessing them is slightly different but always consistent for all modules.

### Base

The class base refers to the root that all other dependent classes are derived.
It's often the property or an abbreviated version of the property.

For widths, the base is `w`, and all width based classes (`w2`, `w-50-m`, etc.) are prefixed with `w`.

### Positioning

Particular classes can target a side or sides of an element.
For example, the spacing module for margin and padding has the ability to target all sides, a side, and even horizontal or vertical sides.

Position is declared with a/l/r/t/b/h/v which follows directly after the base name.

#### Padding example

Class | Position | Description
----- | -------- | -----------
`.pa1` | All (a) | Adds padding to all sides
`.pl1` | Left (l) | Adds padding to the left side
`.pr1` | Right (r) | Adds padding to the right side
`.pt1` | Top (t) | Adds padding to the top
`.pb1` | Bottom (b) | Adds padding to the bottom
`.ph1` | Horizontal (h) | Adds padding to the left and right sides
`.pv1` | Vertical (v) | Adds padding to the top and bottom

#### Border example

Class | Position | Description
----- | -------- | -----------
`.ba` | All (a) | Adds a border to all sides
`.bl` | Left (l) | Adds a border to the left side
`.br` | Right (r) | Adds a border to the right side
`.bt` | Top (t) | Adds a border to the top
`.bb` | Bottom (b) | Adds a border to the bottom

Note: Not all modules with positioning support horizontal and vertical shorthands.

### Modifiers

Modifiers refer to the value that the class references.
`w3` references the third step of the scale while `w-50` references the literal value `50%`

#### Scale

A scale is a collection of values that a property can be assigned.
In Tachyons, the default scales are typically 5-10 steps and are based on powers of two.

For widths, we have the following scale:

Class | Step | Value
----- | ---- | -----
`.w1` | 1 | `1rem`
`.w2` | 2 | `2rem`
`.w3` | 3 | `4rem`
`.w4` | 4 | `8rem`
`.w5` | 5 | `16rem`

For a more in depth description of why and how Tachyons uses scales can be found on the [scales page](scales.md).

#### Literal value

Literal values map to pixel, percentage or string values.
They differ among modules, but they always have a `-` after the base.

Class | Value | Full Declaration
----- | ----- | ----------------
`.w-auto` | `auto` | `width: auto;`
`.w-10` | `10%` | `width: 10%;`
`.w-third` | `calc(100% / 3)` | `width: calc(100% / 3);`

#### Dependent modifiers

There are some modifiers that are dependent on the existence of another class.
One such dependent modifier is `.b--black-10`.
The class would have no effect without a border (`.ba`, `.bl`, `.br`, `.bt`, `.bb`).

This dependence is indicated with the `--` delimiter.

## Responsive class naming

By appending `-m` or `-l` to a class you can target specific viewport sizes.
For a more in depth view of how media queries work in Tachyons, check out the [responsive page](responsive.md).

## Base to property mapping

Base | Property | Example class
---- | -------- | -------------
`bg` | `background-repeat` | `bg-center`
`outline` | `outline` | `outline-0`
`b` | `border` | `.ba`
`b` | `border-color` | `b--black-10`
`br` | `border-radius` | `br3`
`b` | `border-style` | `b--dotted`
`bw` | `border-width` | `bw2`
`shadow` | `box-shadow` | `shadow-1`
`top` | `top` | `top-0`
`right` | `right` | `right-1`
`left` | `left` | `left-2`
`bottom` | `bottom` | `bottom-0`
`c` | `clear` | `cl`
`d` | `display` | `dn`
`flex` | `flex` | `flex-1`
`items` | `align-items` | `items-center`
`self` | `align-self` | `self-stretch`
`justify` | `justify-content` | `justify-between`
`content` | `align-content` | `content-center`
`order` | `order` | `order-3`
`flex-grow` | `flex-grow` | `flex-grow-1`
`flex-shrink` | `flex-shrink` | `flex-shrink-0`
`f` | `float` | `fl`
`fw` | `font-weight` | `fw2`
`f` | `font-size` | `f3`
`h` | `height` | `h-100`
`lh` | `line-height` | `lh-solid`
`mw` | `max-width` | `mw4`
`w` | `width` | `w-25`
`overflow` | `overflow` | `overflow-x-hidden`
`o` | `opacity` | `o-20`
`rotate` | `transform` | `rotate-90`
`bg` | `background-color` | `bg-red`
`hover` | `&:hover color` | `hover-mid-gray`
`hover-bg` | `&:hover background-color` | `hover-bg-light-blue`
`p` | `padding` | `ph5`
`m` | `margin` | `ma2`
`n` | `negative-margin` | `nt3`
`t` | `text-align` | `tr`
`tt` | `text-transform` | `ttu`
`v` | `vertical-align` | `v-mid`
`z` | `z-index` | `z-5`
