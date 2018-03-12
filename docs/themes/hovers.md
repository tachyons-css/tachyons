export const meta = {
  title: 'Hovers / Themes / Docs / TACHYONS',
  subNav: 'themes',
  modules: ['tachyons-hovers'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/themes/hovers.md'
}

# Hovers

There are several classes for adding hover effects to elements. Hover effects can be used to give visual affordance to the user that an element can be interacted with.

## Examples

### Dim Text

You can dim any element, including text links on hover and focus with the dim class. It will fade the element to an opacity of 50% in 150ms.

```.html
<a href="#" class="link dim black b">link text</a>
```

### Dim Card

You can dim any element on hover and focus with the dim element. Not just text. Here is a card component that will dim on hover.

```.html
<a href="#" class="link black dim db mw5 pa2 br2 ba b--black-10 shadow-1">
  <img src="http://mrmrs.github.io/photos/037.jpg" alt="SF at night" class="db mb2 mw-100" />
  <span class="db f6 pv2">Card title</span>
</a>
```

### Reveal Children on Hover

```.html
<a href="#" class="link mw5 dt hide-child br2 cover bg-center"
            style="background-image: url(http://mrmrs.github.io/photos/012.jpg); ">
  <span class="white b dtc v-mid w-100 h-100 child bg-black-40 pa5 br2">This is some card content</span>
</a>
```

### Add pointer on hover

```.html
<div href="#" class="link dim black mw5 dt hide-child ba b--black-20 pa4 br2 pointer">
  Add pointer on hover to element.
</div>
```

### Grow on Hover
Using the grow class on an element will cause it to scale to 1.05% of its normal size on hover.

```.html
<a class="grow dib f3-ns no-underline bg-pink black-90 pa5" href="#">
    Portfolio Project #11
</a>
```
