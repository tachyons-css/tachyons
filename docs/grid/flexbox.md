# Flexbox

Flexbox can be used to achieve powerful horizontal or vertical layouts without JavaScript.

Declaring the class `flex` on an element will squeeze all its children into a single row.

```.html
---
sideBySide: true
---
<div class="flex">
  <div class="outline w-25 pa3 mr2"><code>1</code></div>
  <div class="outline w-25 pa3 mr2"><code>2</code></div>
  <div class="outline w-25 pa3 mr2"><code>3</code></div>
  <div class="outline w-25 pa3 mr2"><code>4</code></div>
  <div class="outline w-25 pa3"><code>5</code></div>
</div>
```

Use `flex` with widths to achieve responsive, column layouts.


```.html
---
sideBySide: true
rows: 12
---
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-25 pa1 mr2"><code>w-25</code></div>
  <div class="f7 tc outline w-25 pa1 mr2"><code>w-25</code></div>
  <div class="f7 tc outline w-25 pa1 mr2"><code>w-25</code></div>
  <div class="f7 tc outline w-25 pa1 mr2"><code>w-25</code></div>
</div>
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-75 pa1 mr2"><code>w-75</code></div>
  <div class="f7 tc outline w-25 pa1 mr2"><code>w-25</code></div>
</div>
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-20 pa1 mr2"><code>w-20</code></div>
  <div class="f7 tc outline w-80 pa1 mr2"><code>w-80</code></div>
</div>
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-two-thirds pa1 mr2"><code>w-two-thirds</code></div>
  <div class="f7 tc outline w-third pa1 mr2"><code>w-third</code></div>
</div>
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-third pa1 mr2"><code>w-third</code></div>
  <div class="f7 tc outline w-third pa1 mr2"><code>w-third</code></div>
  <div class="f7 tc outline w-third pa1 mr2"><code>w-third</code></div>
</div>
<div class="flex mb2 ml2">
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
  <div class="f7 tc outline w-10 pa1 mr2"><code>w-10</code></div>
</div>
```

### Flex wrap

Specifying `flex-wrap` will cause child elements to wrap to multiple rows once they take more width than their parent.

```.html
---
sideBySide: true
---
<div class="flex flex-wrap">
  <div class="outline w-25 pa3 mr2 mt2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>5</code>
  </div>
</div>
```

### Flex wrap reverse

Specifying `flex-wrap-reverse` reverses the ordering of rows.

```.html
---
sideBySide: true
---
<div class="flex flex-wrap-reverse">
  <div class="outline w-25 pa3 mr2 mt2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 mt2">
    <code>5</code>
  </div>
</div>
```

### Flex column

Column layouts are achievable with `flex-column`.

```.html
---
sideBySide: true
---
<div class="flex flex-column">
  <div class="outline w-25 pa3 mr2 mt2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>5</code>
  </div>
</div>
```

### Flex column reverse

Reverse the column layout with `flex-column-reverse`.

```.html
---
sideBySide: true
---
<div class="flex flex-column-reverse">
  <div class="outline w-25 pa3 mr2 mt2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 mr2 mt2">
    <code>5</code>
  </div>
</div>
```

### Compose it all together

Interesting layouts can be achieved when composing these container examples together.

```.html
<div class="flex items-center">
  <div class="outline w-25 pa3 mr2 mt2 self-end">
    <code>1</code>
  </div>
  <div class="flex flex-column-reverse w-50">
    <div class="outline w-100 pa3 mt2">
      <code>1</code>
    </div>
    <div class="outline w-100 pa3 mt2">
      <code>2</code>
    </div>
    <div class="outline w-100 pa3 mt2">
      <code>3</code>
    </div>
    <div class="outline w-100 pa3 mt2">
      <code>4</code>
    </div>
    <div class="outline w-100 pa3 mt2">
      <code>5</code>
    </div>
  </div>
  <div class="outline w-25 pa3 ml2 mt2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 ml2 mt2 self-start">
    <code>2</code>
  </div>
</div>
```

## Align items

### Center

Pack items from the center with `items-center`.

```.html
---
sideBySide: true
---
<div class="flex items-center">
  <div class="outline w-25 pa3 mr2 h2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 h4">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 h5">
    <code>5</code>
  </div>
</div>
```

### Start

Pack items from the start with `items-start`.

```.html
---
sideBySide: true
---
<div class="flex items-start">
  <div class="outline w-25 pa3 mr2 h2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 h4">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 h5">
    <code>5</code>
  </div>
</div>
```

### End

Pack items from the end with `items-end`.

```.html
---
sideBySide: true
---
<div class="flex items-end">
  <div class="outline w-25 pa3 mr2 h2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2 h4">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3 h5">
    <code>5</code>
  </div>
</div>
```

## Justify content

### Center

```.html
---
sideBySide: true
---
<div class="flex justify-center">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
</div>
```

### Between

```.html
---
sideBySide: true
---
<div class="flex justify-between">
  <div class="outline w-25 pa3">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3">
    <code>3</code>
  </div>
</div>
```

### Around

```.html
---
sideBySide: true
---
<div class="flex justify-around">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
</div>
```

## Advanced

In the following example, there is a parent list (`ul` element) using the `flex` class to stack its elements horizontally, and then there's the `flex-auto` class applied to each vertical column, in an attempt to evenly distribute them along the full container width.

However, by taking a closer look (i.e. using Chrome DevTools) we can see that each column has different widths, which might not be the visual result we expected.

```.html
<ul class="flex list ma0 pa0">
  <li class="flex-auto mr4 pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column One</h2>
    <ul class="pb5">
      <li>
        <p>Variable fonts and parametric fonts are tools that will undeniably revolutionize responsive web type.
      </p></li>
      <li>
        <p>They will allow graphic and web designers to explore shapes and sizes on their own and to tailor typefaces to their needs.
        </p>
      </li>
      <li>
        <p>Let’s learn the ins and outs of these new tools and how to take control of our typography.
        </p>
      </li>
    </ul>
  </li>
  <li class="flex-auto mr4 pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column Two</h2>
    <ul class="pb5">
      <li>
        <p>Still, it feels like digital typography is behind physical typography on a range of issues, not so much in the diversity or quality of design, but in the huge fragmentation of screen media.
      </p></li>
      <li>
        <p>For print design, a cast of physical fonts could be optimized depending on the sizes and shapes of the letters to increase readability.
        </p>
      </li>
      <li>
        <p>Once the fonts were produced, the result was the same every time; you got exactly what you paid for.
        </p>
      </li>
    </ul>
  </li>
  <li class="flex-auto pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column Three</h2>
    <ul class="pb5">
      <li>
        <p>On a screen, it’s a lot more complicated. Once you’re lost in a forest of DPI values and different renderers, what the user gets is all up in the air.
      </p></li>
      <li>
        <p>And because type designers have little incentive to produce different optical sizes, a lot of digital typefaces include only a couple of them, which hinders the readability of web typography.
        </p>
      </li>
    </ul>
  </li>
</ul>
</section>
```

### Using `flex-1`

When equal width columns are desired, we can make use of `flex-1` which sets flex shorthand value to `1`, translating `flex` properties into: `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`.

The key aspect here is that, by setting flex-basis property to `0%`, we are not enforcing width on the affected element, deferring that responsibility to the grow and shrink properties, which in this case, are equally set to `1`.

```.html
<ul class="flex list ma0 pa0">
  <li class="flex-1 mr4 pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column One</h2>
    <ul class="pb5">
      <li>
        <p>Variable fonts and parametric fonts are tools that will undeniably revolutionize responsive web type.
      </p></li>
      <li>
        <p>They will allow graphic and web designers to explore shapes and sizes on their own and to tailor typefaces to their needs.
        </p>
      </li>
      <li>
        <p>Let’s learn the ins and outs of these new tools and how to take control of our typography.
        </p>
      </li>
    </ul>
  </li>
  <li class="flex-1 mr4 pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column Two</h2>
    <ul class="pb5">
      <li>
        <p>Still, it feels like digital typography is behind physical typography on a range of issues, not so much in the diversity or quality of design, but in the huge fragmentation of screen media.
      </p></li>
      <li>
        <p>For print design, a cast of physical fonts could be optimized depending on the sizes and shapes of the letters to increase readability.
        </p>
      </li>
      <li>
        <p>Once the fonts were produced, the result was the same every time; you got exactly what you paid for.
        </p>
      </li>
    </ul>
  </li>
  <li class="flex-1 pa3 bg-lightest-blue">
    <h2 class="ma0 mb3 pb2 bb">Column Three</h2>
    <ul class="pb5">
      <li>
        <p>On a screen, it’s a lot more complicated. Once you’re lost in a forest of DPI values and different renderers, what the user gets is all up in the air.
      </p></li>
      <li>
        <p>And because type designers have little incentive to produce different optical sizes, a lot of digital typefaces include only a couple of them, which hinders the readability of web typography.
        </p>
      </li>
    </ul>
  </li>
</ul>
```

## Reference

- [MDN - Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
