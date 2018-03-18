export const meta =  {
  title: 'Vertical Align / Typography / Docs / TACHYONS',
  modules: ['tachyons-vertical-align'],
  subNav: 'typography',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/typography/vertical-align.md'
}

# Vertical Align

Use vertical align to set typography just right. Vertical align works on inline-level elements (display inline and inline-block) and on table cells.

This documents how vertical align affects text elements. If you’d like to see how to vertically align elements - checkout the layout documentation.

## Examples

### Table Alignment

You can use vertical alignment classes on either td elements or on elements with a class of dtc that are direct children of an element with a class of dt.

```.html
<table cellpadding="8">
  <tbody>
    <tr>
      <td>
        <img width="128" src="http://mrmrs.github.io/images/0001.jpg">
      </td>
      <td class="v-mid bg-black-025">
        <code class="db f6">.v-mid</code>
        Align text to the middle.
      </td>
    </tr>
    <tr>
      <td>
        <img width="128" src="http://mrmrs.github.io/images/0002.jpg">
      </td>
      <td class="v-top bg-black-025">
        <code class="db f6">.v-top</code>
        Align text to the top.
      </td>
    </tr>
    <tr>
      <td>
        <img width="128" src="http://mrmrs.github.io/images/0005.jpg">
      </td>
      <td class="v-btm bg-black-025">
        <code class="db f6">.v-btm</code>
        Align text to the bottom.
      </td>
    </tr>
  </tbody>
</table>
```

### Inline-block Alignment

#### Align to the Top

```.html
<p class="v-top f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
<p class="v-top f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light…
</p>
<p class="v-top f6 measure-narrow dib outline">
  if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
```

#### Mix and Match

```.html
<p class="v-top f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
<p class="v-btm f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light…
</p>
<p class="v-top f6 measure-narrow dib outline">
  if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
```

#### Align to the Middle

```.html
<p class="v-mid f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
<p class="v-mid f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light…
</p>
<p class="v-mid f6 measure-narrow dib outline">
  if you want to be really fancy.
</p>
```

#### Align to the bottom

```.html
<p class="v-btm f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light if you want to be really fancy. Or you can say it with the Extra
  Bold if it’s really intensive and passionate, you know, and it might work.
</p>
<p class="v-btm f6 measure-narrow dib mr4 outline">
  You can say, “I love you,” in Helvetica. And you can say it with Helvetica
  Extra Light…
</p>
<p class="v-btm f6 measure-narrow dib outline">
  if you want to be really fancy.
</p>
```

