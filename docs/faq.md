# [WIP] Frequently Asked Questions

## What is Tachyons?

Tachyons is functional CSS for humans.
Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.

## TODO: How is Tachyons different from other css frameworks?

- Specific benefits of Tachyons
- Design in the browser, faster
- Readymade components/styles/typography

## Why functional css?

Functional css removes complexity from your stylesheets.
Classes no longer represent complex objects, but simple functions that do only one thing.
This makes stylesheets smaller and easier to work with.

## TODO: But Tachyons  looks... wrong... why would I want to clutter my HTML with lots of unsemantic layout classes?

- Unpack what 'semantic' means
- You can style directly in your component's HTML, without jumping back and forth between HTML and your stylesheets

## What’s the difference between Tachyons and inline styles?

1. Inline styles do not support media queries or pseudo elements like `:hover`, `:focus`, and `:active`.
1. There is a real difference is in how the browser renders the code. Inline styles are 1 to 1 for the browser to manage in memory. i.e an inline style can only style one element at a time. Classes have a 1 to many relationship. This can have significant impact on performance.
1. It can be advantageous from a readability standpoint to codify certain things. Typing inline styles is not a pain and something a good set of text-editing skills can easily handle. Setting multiple font-sizes on an element with Tachyons is as simple as `<p class="f4 f2-m f1-l"></p>`.
1. A class can group several declarations together. Inline styles cannot.
1. Inline styles cannot be overridden. They trump everything in the cascade.
1. Inline styles don't support media queries for responsive styling.

## TODO: Won't all of these classes bloat the size of my HTML?

## TODO: What about the separation of concerns?

Separation of concerns has to do with many facets of writing code, not just separating styles and content. The concerns at hand here are still separated. The HTML should work without the css. The styling is still applied via css. While you might be editing html to make visual changes, it is not the html itself doing the styling.

> The value of separation of concerns is simplifying development and maintenance of computer programs. When concerns are well-separated, individual sections can be reused, as well as developed and updated independently. Of special value is the ability to later improve or modify one section of code without having to know the details of other sections, and without having to make corresponding changes to those sections.

## Is Tachyons the right css framework for me?

That is up for you and your team to decide!
Some people find it useful, some people don't.
It's okay to take ideas from Tachyons and apply them in ways that make sense for you and your team.

## Related reading

- http://notebook.hongkonggong.com/2016/04/21/is-tachyons-the-right-css-framework-for-me/
- https://www.pushcode.com/blog/tachyons-css-first-impressions
- https://blog.colepeters.com/building-and-shipping-functional-css/
- https://iamsteve.me/blog/entry/why-you-should-use-tachyons-to-make-css-easier
