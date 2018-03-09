# Grids

You can combine display, float, padding, and widths to construct a wide variety of grids. Here is a basic example of some options for constructing a simple grid.

## Examples

### Fixed Columns

```.html
<section class="cf w-100 pv3 f6 ph3 ph4-m">
  <div class="mw9 center ph3-m">
    <div class="ph2-m">
      <div class="fl w-100 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-100 pa2</code></div>
      </div>
      <div class="fl w-90 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-90 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-80 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-80 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-75 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-75 pa2</code></div>
      </div>
      <div class="fl w-25 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-25 pa2</code></div>
      </div>
      <div class="fl w-70 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-70 pa2</code></div>
      </div>
      <div class="fl w-30 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-30 pa2</code></div>
      </div>
      <div class="fl w-60 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-60 pa2</code></div>
      </div>
      <div class="fl w-40 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-40 pa2</code></div>
      </div>
      <div class="fl w-50 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-50 pa2</code></div>
      </div>
      <div class="fl w-50 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-50 pa2</code></div>
      </div>
      <div class="fl w-third pa2">
        <div class="outline bg-white tc pv4"><code>fl w-third pa2</code></div>
      </div>
      <div class="fl w-third pa2">
        <div class="outline bg-white tc pv4"><code>fl w-third pa2</code></div>
      </div>
      <div class="fl w-third pa2">
        <div class="outline bg-white tc pv4"><code>fl w-third pa2</code></div>
      </div>
      <div class="fl w-third pa2">
        <div class="outline bg-white tc pv4"><code>fl w-third pa2</code></div>
      </div>
      <div class="fl w-two-thirds pa2">
        <div class="outline bg-white tc pv4"><code>fl w-two-thirds pa2</code></div>
      </div>
      <div class="fl w-25 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-25 pa2</code></div>
      </div>
      <div class="fl w-25 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-25 pa2</code></div>
      </div>
      <div class="fl w-25 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-25 pa2</code></div>
      </div>
      <div class="fl w-25 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-25 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-20 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-20 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
      <div class="fl w-10 pa2">
        <div class="outline bg-white tc pv4"><code>fl w-10 pa2</code></div>
      </div>
    </div>
  </div>
</section>
```

### Two Columns - Collapsing

```
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

```.html
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-50-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Three Columns - Collapse to Single

```
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

```.html
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Three Columns - Collapse to Mixed

```
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

```.html
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-50 w-third-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Four Columns - Collapse to single

```
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

```.html
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
```

### Four Columns - Collapse to Mixed

```
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
  </div>
</div>
```

```.html
<div class="mw9 center ph3-m">
  <div class="cf ph2-m">
    <div class="fl w-100 w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
    <div class="fl w-third w-25-m pa2">
      <div class="outline bg-white tc pv4"></div>
    </div>
  </div>
</div>
```
