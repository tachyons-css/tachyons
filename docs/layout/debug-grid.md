# Debug Grid

The debug grid module allows you to put a background grid on any element which can help you line elements up vertically and horizontally with each other. Sometimes across large amounts of whitespace it can be tough to see if things are aligned. The background grid comes in both 8 and 16px columns.

The debug module is commented out at the bottom of the src/tachyons.css file. If you uncomment it a 1px outline will be placed on every element on the page. Each element has a different color outline. The purpose of this is to help distinguish elements that are close together by giving them different colors. This has been helpful at times when the outlines are overlapping by 1 or 2 pixels and it’s hard to tell where one element ends and the other begins.

## Examples

### Grid at 8px

```.html
<div class="debug-grid pa2 pa4-ns">
  <h1 class="outline lh-solid f1 f-headline-l fw6 mt0 mb4">
    The Grid
  </h1>
  <h2 class="outline lh-solid f2 f-subheadline-l fw4 mv0">
    &amp; the Graphic Designer
  </h2>
  <p class="outline lh-copy measure f3">
    For us Graphic Design is “organization of information.” There are other types of graphic design more concerned with illustration or of a narrative nature.
  </p>
  <p class="outline lh-copy measure f4">
    Nothing could be more useful to reach our intention than the Grid. The grid represents the basic structure of our graphic design, it helps to organize the content, it provides consistency, it gives an orderly look and it projects a level of intellectual elegance that we like to express.
  </p>
  <p class="outline lh-copy measure f5">
    ahere are infinite kinds of grids, but just one - the most appropriate - for any problem. Therefore, it becomes important to know which kind of grid is the most appropriate. The basic understanding is that the smaller the module of the grid the least helpful it could be. We could say that an empty page is a page with an infintesimal small grid. Therefore, it is equivalent to not being there. Conversely a page with a coarse grid is a very restricting grid offering too few alternatives. The secret is to nd the proper kind of grid for the job at hand.
  </p>
</div>
```

### Grid at 16px

```.html
<div class="debug-grid-16 pa2 pa4-ns">
  <div class="f5 measure center outline pa4">
    <img class="db w-100 o-30" src="http://mrmrs.github.io/photos/026.jpg">
    <h1>
      Image Title
    </h1>
    <p>
      Image description
    </p>
  </div>
  <form action="debug_submit" method="get" accept-charset="utf-8" class="mt4 pv4 outline">
    <fieldset class=" b--transparent pa3 ma0 pa0">
      <legend class="f4 fw6">
        Sign up form
      </legend>
      <div class="mb3 dib mr3">
        <label class="db fw6 mb2">
          username
        </label>
        <input type="text" class="input-reset outline bw0 b--transparent w-100 measure f5">
      </div>
      <div class="mb3 dib">
        <label class="db fw6 mb2">
          password
        </label>
        <input type="text" class="input-reset outline bw0 b--transparent w-100 measure f5">
      </div>
      <div class="mb3 db">
        <label class="db fw6 mb2">
          location
        </label>
        <input type="text" class="input-reset outline bw0 b--transparent w-100">
      </div>
    </fieldset>
  </form>
</div>
```
