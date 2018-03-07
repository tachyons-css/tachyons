import React from 'react'
import Link from 'next/link'

import Container from './Container'

export default () => (
  <footer className="bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt b--black-10">
    <Container>
      <div className="mb5 lh-copy">
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/"
          title="Home"
        >
          Home
        </Link>
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/docs/"
          title="Docs"
        >
          Docs
        </Link>
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/components/"
          title="Components"
        >
          Components
        </Link>
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/gallery/"
          title="Gallery of Sites built with Tachyons"
        >
          Gallery
        </Link>
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/resources/"
          title="Resources related to Tachyons"
        >
          Resources
        </Link>
        <Link
          className="black-70 link hover-blue b dib mr3 mb3"
          to="/xray/"
          title="The X-Ray chrome extension for aligning things to a grid."
        >
          X-Ray
        </Link>
        <a
          className="black-70 link hover-blue b dib mr3 mb3"
          href="http://opencollective.com/tachyons"
          title="Support Tachyons Development"
        >
          Supporting Tachyons
        </a>
      </div>

      <article className="v-top">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=tachyons-css&amp;repo=tachyons&amp;type=star&amp;count=true"
          frameborder="0"
          scrolling="0"
          width="100px"
          height="20px"
        />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=tachyons-css&amp;repo=tachyons&amp;type=fork&amp;count=true"
          frameborder="0"
          scrolling="0"
          width="100px"
          height="20px"
        />
        <a
          href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&amp;url=http://tachyons.io"
          className="twitter bg-white-50 link dib dim br2 ph2 pb1 lh-solid v-top"
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
      </article>
      <div className="mt4">
        <a
          className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3"
          href="https://twitter.com/tachyons_css"
          title="Follow us on Twitter"
        >
          <div className="w2 pv1 pr2">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <path
                d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <span>Follow @tachyons_css</span>
        </a>
        <a
          className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3"
          href="http://tachyons-slack-invite.herokuapp.com"
          title="Join our Slack Channel"
        >
          <div className="dib w2 pv1 pr2">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <g fill-rule="nonzero">
                <path d="M6.586 7.33l.69 2.057 2.137-.716-.69-2.056-2.137.716z" />
                <path d="M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.096.03-.19.045-.287.042-.338-.01-.65-.226-.765-.566l-.36-1.072-2.138.716.36 1.072c.145.435-.09.905-.523 1.05-.096.032-.192.045-.286.043-.34-.01-.65-.226-.764-.566l-.36-1.075-1.037.348c-.096.03-.19.045-.286.042-.34-.008-.65-.226-.765-.565-.146-.434.09-.904.522-1.05L5.7 9.914l-.69-2.058-1.037.347c-.094.032-.19.045-.285.043-.338-.01-.65-.226-.765-.566-.145-.434.09-.904.523-1.05l1.037-.347-.36-1.073c-.145-.434.09-.904.524-1.05.435-.145.905.09 1.05.524l.36 1.072 2.137-.716-.36-1.072c-.144-.435.09-.905.524-1.05.435-.145.906.09 1.05.523l.36 1.075 1.037-.347c.434-.146.904.088 1.05.522.145.434-.09.904-.523 1.05l-1.037.347.69 2.057 1.036-.347c.435-.145.905.09 1.05.523.146.434-.09.904-.522 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z" />
              </g>
            </svg>
          </div>
          <span>Need Help? Join our Slack Channel</span>
        </a>
        <a
          className="ba br2 black-70 no-underline grow b inline-flex items-center mb3 pv2 ph3"
          href="https://github.com/tachyons-css/tachyons/issues"
          title="File a bug, request a feature, ask a question!"
        >
          <div className="w2 pv1 pr2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
            </svg>
          </div>
          <span>Open an Issue on GitHub</span>
        </a>
      </div>
      <p className="f6 measure copy lh-copy">
        Have a question? Need help? Feel free to open an issue on GitHub or ask
        a question in our slack channel. We're here to try and help make
        designing in the browser fun.
      </p>
      <div className="pt4 cf mw5">
        <script async="" src="//www.google-analytics.com/analytics.js" />
        <script
          async=""
          type="text/javascript"
          src="//cdn.carbonads.com/carbon.js?zoneid=1673&amp;serve=C6AILKT&amp;placement=tachyonsio"
          id="_carbonads_js"
        />
        <div id="carbonads">
          <span>
            <span className="carbon-wrap">
              <a
                href="//srv.carbonads.net/ads/click/x/GTND42QJCE7IL2QLCV74YKQMC6BDCK7NFTBDEZ3JCWYIVKJMCYYIEKQKC6BI423IF6BDTK3EHJNCLSIZZRLCP7I35MNFV?segment=placement:tachyonsio;&amp;encredirect=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN5295.1676840CARBONADS.COM%2FB10444636.207316239%3Bdc_trk_aid%3D407009849%3Bdc_trk_cid%3D75142946%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D"
                className="carbon-img"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="https://pro.buysellads.com/p/manage/asset/id/58085"
                  alt=""
                  border="0"
                  height="100"
                  width="130"
                  style={{ maxWidth: '130px', display: 'none' }}
                />
              </a>
              <a
                href="//srv.carbonads.net/ads/click/x/GTND42QJCE7IL2QLCV74YKQMC6BDCK7NFTBDEZ3JCWYIVKJMCYYIEKQKC6BI423IF6BDTK3EHJNCLSIZZRLCP7I35MNFV?segment=placement:tachyonsio;&amp;encredirect=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN5295.1676840CARBONADS.COM%2FB10444636.207316239%3Bdc_trk_aid%3D407009849%3Bdc_trk_cid%3D75142946%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D"
                className="carbon-text"
                target="_blank"
                rel="noopener"
              >
                Learn and build on GCP for free. Try it free today.
              </a>
            </span>
            <a
              href="http://carbonads.net/?utm_source=tachyonsio&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon"
              className="carbon-poweredby"
              target="_blank"
              rel="noopener"
            >
              ads via Carbon
            </a>
            <img
              src="https://ad.doubleclick.net/ddm/trackimp/N5295.1676840CARBONADS.COM/B10444636.207316239;dc_trk_aid=407009849;dc_trk_cid=75142946;ord=151439449;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?"
              border="0"
              height="1"
              width="1"
              style={{ display: 'none' }}
            />
          </span>
        </div>
      </div>
      <small className="f6 measure db lh-copy mt5">
        A tachyon /ˈtæki.ɒn/ or tachyonic particle is a hypothetical particle
        that always moves faster than light. The word comes from the Greek:
        ταχύς or tachys, meaning 'swift, quick, fast, rapid'
      </small>
    </Container>
  </footer>
)
