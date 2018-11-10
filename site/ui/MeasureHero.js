import React from 'react'

export default () => (
  <article className="cf">
    <section className="fl w-100 w-50-l pr4-l">
      <div className="outline black-10 mt3-ns">
        <div className="aspect-ratio aspect-ratio--8x5">
          <iframe
            className="aspect-ratio--object"
            src="https://player.vimeo.com/video/183852299"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
          />
        </div>
      </div>
    </section>
    <div className="fl w-100 w-50-l">
      <p className="measure f4 lh-copy">
        Measure refers to the length of a line of text. It is one of the most
        important aspects of readability.
      </p>
      <p className="measure f5 lh-copy athelas pl4-l bn bl-l bw2 b--black-40">
        “Anything from 45 to 75 characters is widely regarded as a satisfactory
        length of line for a single-column page… the 66-character line (counting
        both letters and spaces) is widely regarded as ideal. For
        multiple-column work, a better average is 40-50 characters.”
        <span className="db f6 mt4">
          —Robert Bringhurst, <cite>The Elements of Typographic Style</cite>
        </span>
      </p>
      <p className="measure f5 lh-copy mt4 mb2">
        Tachyons provides 3 classNamees for setting measure.
      </p>
      <code className="db pre f6 lh-copy mt0">
        .measure = line lengths ~66 characters
      </code>
      <code className="db pre f6 lh-copy mt0">
        .measure-narrow = line lengths ~45 characters
      </code>
      <code className="db pre f6 lh-copy mt0">
        .measure-wide = line lengths ~80 characters
      </code>
    </div>
  </article>
)
