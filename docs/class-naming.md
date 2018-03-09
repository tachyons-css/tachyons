# Class Naming

A lot of inspiration for Tachyons classes comes from unix.

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
`w-third` | `calc(100% / 3)` | `width: calc(100% / 3);`

## Responsive class naming

By appending `-m` or `-l` to a class you can target specific viewport sizes.
For a more in depth view of how media queries work in Tachyons, check out the [responsive page](responsive.md).

## Property to base mapping

Base | Property | Example class
---- | -------- | -------------
