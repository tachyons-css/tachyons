import React from 'react'

export default () => (
  <section className="tc pv5 bb bt b--black-10 bg-washed-blue">
    <div className="ph3 ph5-ns">
      <h3 className="f5 fw6 ttu tracked black-70 mb4">Start using Tachyons</h3>
      <a
        className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib"
        href="/docs/"
      >
        Read the Docs
      </a>
      <a
        className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib"
        href="/components/"
      >
        View Component Library
      </a>
      <a
        className="no-underline grow pa3 br2 bg-blue white mr3 dib"
        href="http://unpkg.com/tachyons/css/tachyons.min.css"
      >
        Download the Code
      </a>
    </div>
  </section>
)
