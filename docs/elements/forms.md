# Forms

Tachyons has some basic form control resets to remove default styles for mobile devices.

## Examples

### Input reset

Use `input-reset` to remove default styles:

```html
<form>
  <label for="inputReset" class="f6 db">
    <code>input-reset</code>
  </label>
  <input id="inputReset" type="text" class="input-reset">
</form>
```

### Full form

In addition to `input-reset`, you can use other Tachyons classes to style all the elements in a form.

```.html
<article class="pa4 bg-near-white">
  <form class="br2 pa4 shadow-3 bg-white mw6 center" action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
      <div>
        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
        <input class="pa2 input-reset f6 ba b--black-20 bg-transparent w-100 measure" type="email" name="email-address" placeholder="you@tachyons.io" id="email-address">
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset f6 ba b--black-20 bg-transparent" type="password" name="password" id="password">
      </div>
    </fieldset>
    <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"></div>
  </form>
</article>
```

## Reference

- [MDN - Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [MDN - Css Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover)
- [MDN - Css Focus](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus)
