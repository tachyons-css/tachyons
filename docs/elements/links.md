# Links

Tachyons doesn’t style links by default, but provides the necessary classes to generate a wide variety of link styles.

## Example

### Underline links and animate to color

To keep the default underline, but animate the color transition, combine classes from skins and skins-pseudo.

```.html
<a href="#" class="link underline blue hover-orange">link text</a>
```

### Underline on hover

To add an underline on hover and focus, use the class `underline-hover`.

```.html
<a href="#" class="link underline-hover red">link text</a>
```

### Dim on hover

To dim a link on hover, add the `dim` class.

```.html
<a href="#" class="dim">link text</a>
```

### Add background color on hover

You can add any background color from the skins-pseudo module.

```.html
<a href="#" class="link black hover-bg-light-blue">link text</a>
```

### Animate background color on hover

You can add any background color from the skins-pseudo module.

```.html
<a href="#" class="link black bg-animate hover-bg-light-blue">link text</a>
```

## Reference

- [MDN - Css Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover)
- [MDN - Css Focus](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus)
