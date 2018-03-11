# Debugging Grids

Tachyons comes with two convenient modules to help debug layout issues you might be having.

The debug_children module allows you to use a class called “debug” on any element. That element along with any child node will have an outline of 1px solid gold placed on it.

The debug module is commented out at the bottom of the src/tachyons.css file. If you uncomment it a 1px outline will be placed on every element on the page. Each element has a different color outline. The purpose of this is to help distinguish elements that are close together by giving them different colors. This has been helpful at times when the outlines are overlapping by 1 or 2 pixels and it’s hard to tell where one element ends and the other begins.

This debug module is commented out by default in `src/tachyons.css`. To use it, uncomment out that line and then run `node run build` from the root of the project.

## Examples

### Debug Children

```.html
<div class="debug">
  <p class="measure i">
    Note how in the below example there is white space rendered in between the elements because they are set to inline-block
  </p>
  <div class="dib w-25">This element is set to inline-block and width: 25% </div>
  <div class="dib w-25">This element is set to inline-block and width: 25% </div>
  <div class="dib w-25">This element is set to inline-block and width: 25% </div>
  <div class="dib w-25">This element is set to inline-block and width: 25% </div>
  <article class="cf mt4 w-100">
    <div class="fl w-100">
      <p class="i w-100">
        Note how in the below example the elements are flush with no white-space rendered between the elements.
      </p>
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
  </article>
  <form action="index_submit" method="get" accept-charset="utf-8" class="mt4">
    <fieldset id="this_is_a_form_legend">
      <legend>
        This is a form legend
      </legend>
      <label>
        This is a label
      </label>
      <input type="text">
    </fieldset>
    <p>
      <input type="submit" value="Continue →">
    </p>
  </form>
</div>
```

### Debug All

The largest difference here between the two methods is that every element on the page is outlined in a different color.

```.html
<div class="debug-all">
  <p class="measure i">
    Note how in the below example there is white space rendered in between the elements because they are set to inline-block
  </p>
  <div class="dib w-25">
    This element is set to inline-block and width: 25%
  </div>
  <div class="dib w-25">
    This element is set to inline-block and width: 25%
  </div>
  <div class="dib w-25">
    This element is set to inline-block and width: 25%
  </div>
  <div class="dib w-25">
    This element is set to inline-block and width: 25%
  </div>
  <article class="cf mt4 w-100">
    <div class="fl w-100">
      <p class="i w-100">
        Note how in the below example the elements are flush with no white-space rendered between the elements.
      </p>
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
    <div class="fl w-25">
      This is a floated element set to width: 25%
    </div>
  </article>
  <form action="index_submit" method="get" accept-charset="utf-8" class="mt4">
    <fieldset id="this_is_a_form_legend">
      <legend>
        This is a form legend
      </legend>
      <label>
        This is a label
      </label>
      <input type="text">
    </fieldset>
    <p>
      <input type="submit" value="Continue →">
    </p>
  </form>
</div>
<style type="text/css" media="screen">
  /*

        DEBUG

        */

  .debug-all body {
    outline: 1px solid #2980B9 !important;
  }

  .debug-all article {
    outline: 1px solid #3498DB !important;
  }

  .debug-all nav {
    outline: 1px solid #0088C3 !important;
  }

  .debug-all aside {
    outline: 1px solid #33A0CE !important;
  }

  .debug-all section {
    outline: 1px solid #66B8DA !important;
  }

  .debug-all header {
    outline: 1px solid #99CFE7 !important;
  }

  .debug-all footer {
    outline: 1px solid #CCE7F3 !important;
  }

  .debug-all h1 {
    outline: 1px solid #162544 !important;
  }

  .debug-all h2 {
    outline: 1px solid #314E6E !important;
  }

  .debug-all h3 {
    outline: 1px solid #3E5E85 !important;
  }

  .debug-all h4 {
    outline: 1px solid #449BAF !important;
  }

  .debug-all h5 {
    outline: 1px solid #C7D1CB !important;
  }

  .debug-all h6 {
    outline: 1px solid #4371D0 !important;
  }

  .debug-all main {
    outline: 1px solid #2F4F90 !important;
  }

  .debug-all address {
    outline: 1px solid #1A2C51 !important;
  }

  .debug-all div {
    outline: 1px solid #036CDB !important;
  }

  .debug-all p {
    outline: 1px solid #AC050B !important;
  }

  .debug-all hr {
    outline: 1px solid #FF063F !important;
  }

  .debug-all pre {
    outline: 1px solid #850440 !important;
  }

  .debug-all blockquote {
    outline: 1px solid #F1B8E7 !important;
  }

  .debug-all ol {
    outline: 1px solid #FF050C !important;
  }

  .debug-all ul {
    outline: 1px solid #D90416 !important;
  }

  .debug-all li {
    outline: 1px solid #D90416 !important;
  }

  .debug-all dl {
    outline: 1px solid #FD3427 !important;
  }

  .debug-all dt {
    outline: 1px solid #FF0043 !important;
  }

  .debug-all dd {
    outline: 1px solid #E80174 !important;
  }

  .debug-all figure {
    outline: 1px solid #FF00BB !important;
  }

  .debug-all figcaption {
    outline: 1px solid #BF0032 !important;
  }

  .debug-all table {
    outline: 1px solid #00CC99 !important;
  }

  .debug-all caption {
    outline: 1px solid #37FFC4 !important;
  }

  .debug-all thead {
    outline: 1px solid #98DACA !important;
  }

  .debug-all tbody {
    outline: 1px solid #64A7A0 !important;
  }

  .debug-all tfoot {
    outline: 1px solid #22746B !important;
  }

  .debug-all tr {
    outline: 1px solid #86C0B2 !important;
  }

  .debug-all th {
    outline: 1px solid #A1E7D6 !important;
  }

  .debug-all td {
    outline: 1px solid #3F5A54 !important;
  }

  .debug-all col {
    outline: 1px solid #6C9A8F !important;
  }

  .debug-all colgroup {
    outline: 1px solid #6C9A9D !important;
  }

  .debug-all button {
    outline: 1px solid #DA8301 !important;
  }

  .debug-all datalist {
    outline: 1px solid #C06000 !important;
  }

  .debug-all fieldset {
    outline: 1px solid #D95100 !important;
  }

  .debug-all form {
    outline: 1px solid #D23600 !important;
  }

  .debug-all input {
    outline: 1px solid #FCA600 !important;
  }

  .debug-all keygen {
    outline: 1px solid #B31E00 !important;
  }

  .debug-all label {
    outline: 1px solid #EE8900 !important;
  }

  .debug-all legend {
    outline: 1px solid #DE6D00 !important;
  }

  .debug-all meter {
    outline: 1px solid #E8630C !important;
  }

  .debug-all optgroup {
    outline: 1px solid #B33600 !important;
  }

  .debug-all option {
    outline: 1px solid #FF8A00 !important;
  }

  .debug-all output {
    outline: 1px solid #FF9619 !important;
  }

  .debug-all progress {
    outline: 1px solid #E57C00 !important;
  }

  .debug-all select {
    outline: 1px solid #E26E0F !important;
  }

  .debug-all textarea {
    outline: 1px solid #CC5400 !important;
  }

  .debug-all details {
    outline: 1px solid #33848F !important;
  }

  .debug-all summary {
    outline: 1px solid #60A1A6 !important;
  }

  .debug-all command {
    outline: 1px solid #438DA1 !important;
  }

  .debug-all menu {
    outline: 1px solid #449DA6 !important;
  }

  .debug-all del {
    outline: 1px solid #BF0000 !important;
  }

  .debug-all ins {
    outline: 1px solid #400000 !important;
  }

  .debug-all img {
    outline: 1px solid #22746B !important;
  }

  .debug-all iframe {
    outline: 1px solid #64A7A0 !important;
  }

  .debug-all embed {
    outline: 1px solid #98DACA !important;
  }

  .debug-all object {
    outline: 1px solid #00CC99 !important;
  }

  .debug-all param {
    outline: 1px solid #37FFC4 !important;
  }

  .debug-all video {
    outline: 1px solid #6EE866 !important;
  }

  .debug-all audio {
    outline: 1px solid #027353 !important;
  }

  .debug-all source {
    outline: 1px solid #012426 !important;
  }

  .debug-all canvas {
    outline: 1px solid #A2F570 !important;
  }

  .debug-all track {
    outline: 1px solid #59A600 !important;
  }

  .debug-all map {
    outline: 1px solid #7BE500 !important;
  }

  .debug-all area {
    outline: 1px solid #305900 !important;
  }

  .debug-all a {
    outline: 1px solid #FF62AB !important;
  }

  .debug-all em {
    outline: 1px solid #800B41 !important;
  }

  .debug-all strong {
    outline: 1px solid #FF1583 !important;
  }

  .debug-all i {
    outline: 1px solid #803156 !important;
  }

  .debug-all b {
    outline: 1px solid #CC1169 !important;
  }

  .debug-all u {
    outline: 1px solid #FF0430 !important;
  }

  .debug-all s {
    outline: 1px solid #F805E3 !important;
  }

  .debug-all small {
    outline: 1px solid #D107B2 !important;
  }

  .debug-all abbr {
    outline: 1px solid #4A0263 !important;
  }

  .debug-all q {
    outline: 1px solid #240018 !important;
  }

  .debug-all cite {
    outline: 1px solid #64003C !important;
  }

  .debug-all dfn {
    outline: 1px solid #B4005A !important;
  }

  .debug-all sub {
    outline: 1px solid #DBA0C8 !important;
  }

  .debug-all sup {
    outline: 1px solid #CC0256 !important;
  }

  .debug-all time {
    outline: 1px solid #D6606D !important;
  }

  .debug-all code {
    outline: 1px solid #E04251 !important;
  }

  .debug-all kbd {
    outline: 1px solid #5E001F !important;
  }

  .debug-all samp {
    outline: 1px solid #9C0033 !important;
  }

  .debug-all var {
    outline: 1px solid #D90047 !important;
  }

  .debug-all mark {
    outline: 1px solid #FF0053 !important;
  }

  .debug-all bdi {
    outline: 1px solid #BF3668 !important;
  }

  .debug-all bdo {
    outline: 1px solid #6F1400 !important;
  }

  .debug-all ruby {
    outline: 1px solid #FF7B93 !important;
  }

  .debug-all rt {
    outline: 1px solid #FF2F54 !important;
  }

  .debug-all rp {
    outline: 1px solid #803E49 !important;
  }

  .debug-all span {
    outline: 1px solid #CC2643 !important;
  }

  .debug-all br {
    outline: 1px solid #DB687D !important;
  }

  .debug-all wbr {
    outline: 1px solid #DB175B !important;
  }
</style>
```
