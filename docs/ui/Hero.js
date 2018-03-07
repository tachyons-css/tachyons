import React from 'react'

export default ({ version }) => (
  <div className="ph3 ph5-ns pb4">
    <div className="cf mw9 center tc-m">
      <div className="fl w-100 overflow-auto v-top">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=tachyons-css&amp;repo=tachyons&amp;type=star&amp;count=true"
          frameBorder="0"
          scrolling="0"
          width="100px"
          height="32px"
        />

        <a
          href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&amp;url=http://tachyons.io"
          className="twitter bg-white-50 dim link dib mb2 br2 ph2 pb1 lh-solid v-top"
          style={{ backgroundColor: '#55acee' }}
        >
          <svg
            className="geomicon dib v-mid"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="#fff"
          >
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
          </svg>
          <span className="dib v-mid white fw6" style={{ fontSize: '12px' }}>
            Tweet
          </span>
        </a>
      </div>
      <div className="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">
        <h1 className="f4 fw6 f1-ns lh-title measure mt0">
          Built for designing.
        </h1>
        <p className="f5 f4-ns fw4 b measure dib-m lh-copy">
          Create fast loading, highly readable, and 100% responsive interfaces
          with as little css as possible.
        </p>
        <p className="measure f5 f4-ns lh-copy dn">
          Modules can be altered, extended, or changed to meet your design
          needs. You shouldn't need to write css everytime you want to build a
          new ui component. By learning the composable building blocks in
          tachyons, you can quickly start to build out interfaces while writing
          little to no css.
        </p>
      </div>
      <div className="fl-l w-50-l tl tc-ns pt3 pt4-m pt6-l">
        <a
          className="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline"
          href="https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css"
        >
          Download <code className="f6 fw4 di">v{version}</code>
        </a>
      </div>
    </div>
  </div>
)
