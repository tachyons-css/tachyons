import React from 'react'

export default () => (
  <article className="cf">
    <div className="fl w-100 w-50-l pr4-l">
      <div className="outline black-10 mt3-ns">
        <div className="aspect-ratio aspect-ratio--8x5">
          <iframe
            className="aspect-ratio--object"
            src="https://player.vimeo.com/video/183819916"
            frameBorder="0"
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
    <div className="fl w-100 w-50-l pt4">
      <p className="fl w-100 f5 f4-ns lh-copy mb3">
        <span>
          Often times, websites devote a non-trivial amount of css to setting
          font-size
        </span>. They declare an unnecessary amount of different font-sizes that
        upon inspection, don’t come close to resembling a sane type scale.
      </p>
      <p className="fl w-100 w-50-ns v-top f5 f6-ns lh-copy pr2-ns">
        To create and design an easily readable interface, you don’t need more
        than 40 font-sizes. A simple ratio-based scale with 8 options should
        suffice. Using the class extension namespaces you can set the font-size
        for any particular breakpoint that you desire.
      </p>
      <p className="fl w-100 w-50-ns measure measure-narrow-ns v-top f5 f6-ns lh-copy pl2-ns">
        Don’t spend time constantly overriding font-sizes in your css. If you
        don’t like a default font-size for an element, use the utilities to
        quickly make the text larger or smaller until it looks just right.
      </p>
    </div>
  </article>
)
