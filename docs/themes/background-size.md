export const meta = {
  title: 'Background Size / Themes / Docs / TACHYONS',
  subNav: 'themes',
  modules: ['tachyons-background-size'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/themes/background-size.md'
}

# Background Size

`background-size` affects how background images fill their containing elements.
While measurements can be declared explicitly to size an image, the values that seem most reusable are contain and cover.

## Examples

### Contain

`contain` will make sure that the entire image is displayed within the element, regardless of the elements dimensions.

```.html
<div style="background-image: url(http://placekitten.com/g/500/500);
            background-repeat: no-repeat;"
     class="contain outline h4 w-50"></div>
```

### Cover

`cover` will make sure the entire element is covered - but won’t guarantee that the entire image will be shown.

```.html
<div style="background-image: url(http://placekitten.com/g/500/500);"
     class="cover outline h4 w-50"></div>
```
