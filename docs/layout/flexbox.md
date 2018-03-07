# Flexbox

Flexbox can be used to achieve powerful horizontal or vertical layouts without JavaScript.

## Container

### Flex

Declaring the class `flex` on an element will squeeze all its children into a single row.

```.html
<div class="flex">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3">
    <code>5</code>
  </div>
</div>
```

### Flex wrap

Specifying `flex-wrap` will cause child elements to wrap to multiple rows once they take more width than their parent.

```.html
<div class="flex flex-wrap">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3">
    <code>5</code>
  </div>
</div>
```

### Flex wrap reverse

Specifying `flex-wrap-reverse` reverses the ordering of rows.

```.html
<div class="flex flex-wrap-reverse">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3">
    <code>5</code>
  </div>
</div>
```

### Flex column

Column layouts are achievable with `flex-column`.

```.html
<div class="flex flex-column">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3">
    <code>5</code>
  </div>
</div>
```

### Flex column reverse

Reverse the column layout with `flex-column-reverse`.

```.html
<div class="flex flex-column-reverse">
  <div class="outline w-25 pa3 mr2">
    <code>1</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>2</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
  <div class="outline w-25 pa3 mr2">
    <code>4</code>
  </div>
  <div class="outline w-25 pa3">
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

## Reference

- [MDN - Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
