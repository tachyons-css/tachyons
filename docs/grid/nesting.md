# Nesting

The Tachyons grid system is extremely flexible and can be infinitely nested.
This allows you to achieve complex site and app layouts with very minimal css required.

```.html
---
sideBySide: true
alignItems: center
rows: 5
---
<div class="ml3 w-100 flex bg-black">
  <div class="flex w-50 pa2 bg-white-20">
    <div class="flex w-50  pa2 bg-white-20">
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
    </div>
    <div class="flex w-50  pa2 bg-white-20">
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
    </div>
  </div>
  <div class="flex w-50 pa2 bg-white-20">
    <div class="flex w-50  pa2 bg-white-20">
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
    </div>
    <div class="flex w-50  pa2 bg-white-20">
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
      <div class="flex w-50 pa2 bg-white-20">
        <div class="flex w-50 pa2 bg-white-20"></div>
        <div class="flex w-50 pa2 bg-white-20"></div>
      </div>
    </div>
  </div>
</div>
```
