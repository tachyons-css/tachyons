export const meta = {
  title: 'Tables / Elements / Docs / TACHYONS',
  modules: ['tachyons-tables'],
  subNav: 'elements',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/elements/tables.md'
}

# Tables

Tachyons has some basic utilities for styling tables that are easy to customize and extend.
You can use `striped--light-gray` and `striped--near-white` to achieve a stripe effect on your tables.
Another useful class is `collapse` which will collapse your table cells.

### Responsive tables

For most tabular data, it's recommended to wrap the table with a div that has `overflow-auto`.
This will allow smaller screens to horizontally scroll through the table.

```html
<div class="overflow-auto">
  <table class="collapse mw8 center">
    <!-- ... -->
  </table>
</div>
```

## Examples

### Basic

```.html
<div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center collapse">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Username</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr>
          <td class="pv3 pr3 bb b--black-20">Hassan Johnson</td>
          <td class="pv3 pr3 bb b--black-20">@hassan</td>
          <td class="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Taral Hicks</td>
          <td class="pv3 pr3 bb b--black-20">@hicks</td>
          <td class="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">72326219423551</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Tyrin Turner</td>
          <td class="pv3 pr3 bb b--black-20">@tt</td>
          <td class="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">92325170324444</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Oliver Grant</td>
          <td class="pv3 pr3 bb b--black-20">@oli</td>
          <td class="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">71165170352909</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Dean Blanc</td>
          <td class="pv3 pr3 bb b--black-20">@deanblanc</td>
          <td class="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">71865178111909</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### Striped - light gray

```.html
<table class="collapse ba br2 b--black-10 pv2 ph3">
  <tbody>
    <tr class="striped--light-gray">
      <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
      <th class="tr f6 ttu fw6 pv2 ph3">Rating</th>
    </tr>
    <tr class="striped--light-gray">
      <td class="pv2 ph3">Jurassic Park</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--light-gray">
      <td class="pv2 ph3">Back to the Future</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--light-gray">
      <td class="pv2 ph3">Primer</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--light-gray">
      <td class="pv2 ph3">Sunshine</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--light-gray">
      <td class="pv2 ph3">Moon</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
  </tbody>
</table>
```

### Striped - near white

```.html
<table class="collapse ba br2 b--black-10 pv2 ph3">
  <tbody>
    <tr class="striped--near-white">
      <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
      <th class="tr f6 ttu fw6 pv2 ph3">Rating</th>
    </tr>
    <tr class="striped--near-white">
      <td class="pv2 ph3">Jurassic Park</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--near-white">
      <td class="pv2 ph3">Back to the Future</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--near-white">
      <td class="pv2 ph3">Primer</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--near-white">
      <td class="pv2 ph3">Sunshine</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
    <tr class="striped--near-white">
      <td class="pv2 ph3">Moon</td>
      <td class="pv2 ph3">5 stars</td>
    </tr>
  </tbody>
</table>
```

## Reference

- [MDN - Table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
