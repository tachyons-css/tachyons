export const meta =  {
  title: 'Responsive / Grid / Docs / TACHYONS',
  subNav: 'grid',
  mediaQueries: true,
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/responsive.md'
}

# Responsive Grids

If you haven't yet, it's recommended to first read the [Responsive docs](/docs/responsive).

When constructing a grid in the _Tachyons way_, it's best to think about how the grid will look on mobile and working towards the bigger browser.

Often times we want to start with a single column on mobile, maybe have two columns on small devices, four columns on medium devices and five columns for large.
To achieve this layout we can add `w-100 w-50-s w-25-m w-20-l` to each item in the grid.

#### Class breakdown

- `w-100`: Set width to 100% for all viewports
- `w-50-s`: Set width to 50% for viewports sized small and larger
- `w-25-m`: Set width to 25% for medium and large viewports
- `w-20-l`: Set width to 20% for large viewports

#### Use flex on the container

Lastly, we must wrap our elements with a container that has the `flex` and `flex-wrap` classes.

#### The responsive grid

```.html
---
responsive: true
---
<div class="flex flex-wrap">
  <div class="w-100 w-50-s w-25-m w-20-l pa3">
    <div class="bg-black pv3"></div>
  </div>
  <div class="w-100 w-50-s w-25-m w-20-l pa3">
    <div class="bg-black pv3"></div>
  </div>
  <div class="w-100 w-50-s w-25-m w-20-l pa3">
    <div class="bg-black pv3"></div>
  </div>
  <div class="w-100 w-50-s w-25-m w-20-l pa3">
    <div class="bg-black pv3"></div>
  </div>
  <div class="w-100 w-50-s w-25-m w-20-l pa3">
    <div class="bg-black pv3"></div>
  </div>
</div>
```
