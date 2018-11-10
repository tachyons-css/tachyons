import React from 'react'

import { Container } from '../ui'

import Layout from '../ui/Layout'

export default () => (
  <Layout title="TACHYONS - Gallery">
    <Container padding={true}>
      <section>
        <header className="pv5">
          <p className="lh-copy f6 fw6 tc ttu tracked mb4">Made with</p>
          <div className="mw6 center ph4">
            <svg
              className="mw-100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 394.63 155.75"
            >
              <title>tachyons-cleaned-flat</title>
              <path
                d="M200.83,67.66l-1.77.07c-1.62.07-3.51,3.69-4.8,6.66-6.74,15.54-13.21,31.26-21.8,45.86s-24.25,38.92-32.15,35.35c-3-1.18-2.48-4.35-1.83-7.49a40.64,40.64,0,0,1,2.53-7.91c1.17-3,3.68-10.33,6.77-11.14s3.44,0.35,6.07.42c1.42,0,2.88-2.22,3.25-3,1.73-4-1.94-6.24-5.89-7.66a9.37,9.37,0,0,0-5.37-.69c-2,.51-3.48,2.13-4.84,3.68-9.08,10.33-24.42,35.71-28.55,36.64-0.94-8.28,4.86-20.73,6.63-28.26,0.61-2.6,2.3-7.24.91-9.52-0.82-1.34-3.31-.51-4.63-1.35-3.87-2.45-8.13-5-12.68-4.5-3.41.38-6.38,2.44-9.06,4.57-11,8.76-20.66,21.28-20.2,35.37a16.09,16.09,0,0,0,.72,3.72c-0.3,1.26-4.17,9.22-4.81,10.34-5,8.84-11.89,16.27-15.35,14.26-4.15-4.42-.9-17,0.49-23.21,2.74-12.53,4.51-15.48,8.16-27.71,1.23-4.12,4.1-10.64,5.47-14.72,0.53-1.58.91-4.36,2.36-5.37s3.83-1,5.42-1.29l3.34-.37c2.38-.2,4.74-0.58,7.13-0.6a15.17,15.17,0,0,0,4.27-.73,41.82,41.82,0,0,1,4.5-.86c1.16-.26,3.09-0.52,4.27-0.64l23-2.36c3.21-.33,6.43-0.66,9.66-0.81,2.59-.12,5.19-0.12,7.78-0.15l3.38-.06a38.44,38.44,0,0,0,10.64-1.53c1.32-.39,1.7-1.16,1.46-2.22a25.16,25.16,0,0,0-.75-4c-0.65-1.56-7.53-.69-11.17-0.36L131,97.25l-24.84,2.24c-11.31,1-22.65,2-33.78,4.34,1.44-3.19,2.92-6.65,2.23-10.09a8.46,8.46,0,0,0-.34-1.21c-1.17-3.23-4.23-5.42-7.44-6.36-2.69-.79-2.32,1.06-3.4,3.2-0.48,1-1,1.9-1.42,2.88l-2.18,4.94a28.93,28.93,0,0,0-2,5.46,3.14,3.14,0,0,1-.3.94,2.45,2.45,0,0,1-2.17.88c-5,.1-10,0.48-15,1-2.56.26-5.11,0.56-7.66,0.89s-4.81.74-7.23,1.11c-1.66.26-3.33,0.46-5,.57-1,.06-2,0-3,0.1a1.87,1.87,0,0,0-1.74.67c-1.52,1.23.57,3.83,1.49,5,2,2.57,3.19,2.15,6.1,1.73a46.16,46.16,0,0,1,6-.9c0.82,0,2-.3,2.82-0.37s1.4-.31,2.26-0.41c0.48-.06,2-0.12,2.46-0.12l4.86,0c2.8-.05,5.69-0.3,8.46-0.23,0.62,0,1.64-.53,2,0.22a10.82,10.82,0,0,1-.05,3.06c-0.9,4.3-3.76,10.94-4.94,15.17-0.9,3.24-1.71,6.49-2.47,9.77-2.89,12.59-5.54,24.64-4.36,37.56,0.44,4.81,1.88,6.52,6.09,9.58,2.55,1.85,6.82,2.25,9.9,1.6a16.61,16.61,0,0,0,11.22-8.83l10.23-19.85c2.38,2.07,4.69,4,8.3,3.68s17-20.85,17-20.85c-1.09,3.71-2.19,7.51-1.95,11.37s2.09,7.85,5.55,9.58c4.18,2.1,8.63-.68,11.91-4s5.43-7.36,8-10.86c0.19,4.33,2.49,6.54,5.36,9,5.38,4.55,12.06,2.79,17.92-1.12s12.66-13.22,16.35-19.23l-8,29.09c-0.64,2.38-2.8,8-.86,9.57a15.15,15.15,0,0,0,14.53,2c3.36-1.34,2.78-6.38,4.16-9.73,5.08-12.31,9.46-31.09,20.16-34.17,3.69-1.06.22,11-.94,16.84-1,5-1.64,13.71,2.75,17.21,2.82,2.24,5.53,2.79,8.41.64,6-4.47,11.69-14.13,14.3-20.31-0.27,9.17,1.22,11.77,5.67,14.44a10.5,10.5,0,0,0,3.1,1.26c6.58,1.47,10.36-3.47,13.51-8,4.4-6.28,7.45-12,11.85-18.24-1.48,12.5-3.73,26.71-3.73,26.71-3.66,5-14.47,15.52-18.14,20.5a60.06,60.06,0,0,0-9.61,20,11.67,11.67,0,0,0,1,7.39,10.45,10.45,0,0,0,4.93,5.37c3,1.78,7.2,3.79,10.75,3.46,6.39-.6,10.76-6.77,13-12.77,3.89-10.34,8-36.26,10.25-47.06,0,0,3.25-4.92,13.13-12.09-0.48,4.27-2.41,8.12-2.3,12.61,0.14,5.8,2.67,11.76,8.19,14.49a10.93,10.93,0,0,0,3.14,1c6.64,1,10.37-3.49,13.26-8a83,83,0,0,0,12.53-53.84c-0.49-4.31-1.49-8.93-6.48-10.76a10.49,10.49,0,0,0-6.26-.24c-4.76,1.25-8.17,5.1-10.5,9.3a23,23,0,0,0-3.18,13.17,9.58,9.58,0,0,1,0,3.94,7.31,7.31,0,0,1-1.68,2.48c-5.53,6.11-12,14.18-18.51,19.27,1-6.2,3.18-15,3.47-20.53,0.2-3.77-.32-6.26-4.34-7.74-1.26-.46-4.8-1.09-6.1-0.76-3.63.94-3.85,4.37-6.12,7.09-5.24,6.29-13.91,18.8-15.73,18.86-3.16.28-1.14-6-.85-6.89a99.67,99.67,0,0,1,7.71-18.79c0.53-1,1.17-2.15.83-3.25a3.72,3.72,0,0,0-1-1.47c-3.08-3.09-11.56-6.09-12.69-3.23s-2.94,7.46-3.75,10.23c0,0-3.59,6.35-6.27,10.1-5.62,7.85-18.79,33.79-18.05,22.6l2.83-23.79a8.63,8.63,0,0,0-.56-4.46c-2.44-5.63-9.43-4-14.43-1.92l16-48.54c1-2.94,3.63-9.59,3.19-12.66C208.45,67.82,203.81,67.47,200.83,67.66Zm100.54,41.93a7.57,7.57,0,0,1,3.79,4.72c1.3,4.07.91,8.47,0.33,12.7-2.21,16.13-7.32,32.45-18.32,44.46a2.48,2.48,0,0,1-1.16.85c-2.17.09-.34-8.16,0.17-10.65a50.89,50.89,0,0,1,2-6.56l6.56-18.73a5.84,5.84,0,0,0,.48-3.13c-0.53-2.38-3.53-3.07-6-3.36a2.72,2.72,0,0,1-1.83-.71,2.59,2.59,0,0,1-.39-1.86,22.19,22.19,0,0,1,9.74-16.83,6.34,6.34,0,0,1,2.75-1.17A3.78,3.78,0,0,1,301.37,109.59ZM106.32,125.33c1.22-.07.58,1.4,0.65,1.35-1.89,5-5.63,9.86-9.19,14.65-1.74,2.34-3.35,4.9-5.13,7.21s-4.42,7.46-7.07,9.09c-5-2.13-.71-9.47.62-11.64l2.62-4.29c2.11-3.46,4.25-7,7.24-9.7,1.7-1.56,3.31-3.71,5.23-5A11.1,11.1,0,0,1,106.32,125.33ZM250,176.3l-2.72,14c-0.58,3-1.2,4.72-1.81,7.08l-1.6,6.2a15.63,15.63,0,0,1-2.44,5.92c-0.72.91-5,5-8.35,3.53a3.83,3.83,0,0,1-2.57-4.64c0.75-4.79,3.29-10.08,5.3-14C239.4,187.59,245,182.13,250,176.3Z"
                transform="translate(-15.13 -67.61)"
              />
              <path
                d="M328,117.48l-0.08,0c-1.42.52-2.14,2.06-2.71,3.47q-4.48,11.09-8.3,22.42-1.91,5.66-3.66,11.38-0.87,2.86-1.7,5.73c-0.36,1.25-.56,2.18-1,3.79s-0.61,2.16-.9,3.24c-0.87,3.22-2.22,7.42,1.17,9.71a15.33,15.33,0,0,0,4,1.71,14.24,14.24,0,0,1,2.16,1c1.54,0.84,3.19,1.5,5.33.54a5.9,5.9,0,0,0,1.88-1.49c1.78-2,2.31-4.29,3.59-6.5l4.45-7.67c2.91-5,5.82-10,8.91-14.94,1-1.58,2.36-4.2,3.47-5.7,1.29-1.74,2.58-3.55,4.52-5.87a5.5,5.5,0,0,1,2.69-1.6c1.79-.09.47,3.81,0.19,4.52-0.85,2.14-1.09,3.4-2,6.11a53.63,53.63,0,0,0-1.56,5.74,36.69,36.69,0,0,0-.63,4.8c-0.11,1.68-.1,3.37-0.09,5.06a11.6,11.6,0,0,0,.78,5.05,9.61,9.61,0,0,0,3.49,4,10.88,10.88,0,0,0,5.4,1.9c4.42,0.09,8-3.61,10.76-6.62l5.56-6.1c3.23-3.54,6.46-7.09,9.43-10.85,3.21-4.06,6.12-8.36,9.47-12.31a48.64,48.64,0,0,1,5.34-5.47c1.14-1,4.39-3.77,5.09-2.2a16.27,16.27,0,0,1-.37,2.95c-0.2,1.72-.57,3.44-0.93,5.13-0.7,3.28-1.59,6.51-2.47,9.74-0.36,1.3-.83,2.91-0.83,2.91s-2,.36-3.16.59a9.6,9.6,0,0,0-2.93,1.1,16.08,16.08,0,0,0-7.71,14.36,9.85,9.85,0,0,0,.7,3.36,7.41,7.41,0,0,0,8.87,4,10.38,10.38,0,0,0,4.32-3.14c3.4-3.88,5-9,6.35-14a177.84,177.84,0,0,0,4.2-20.9c0.58-4.16,2.15-11.43-3.84-12.31-2.58-.38-5.14.72-7.4,2a36,36,0,0,0-4.78,3.33,71.94,71.94,0,0,0-7.31,7.31L380.23,143,358.6,166.85c-0.93-.19-1.16-1.39-1.15-2.34,0.15-8.84,4.34-17.41,3.44-26.21a9.23,9.23,0,0,0-2.29-5.75c-2.09-2.05-5.51-2.18-8.23-1.1s-4.9,3.16-7,5.19c-3.43,3.29-7.84,9.81-11.27,13.11,1.94-7.22,4.86-17.66,6.8-24.88,0.55-2,.9-4.67-0.84-5.87a5.19,5.19,0,0,0-2.17-.69l-5.23-.83A5.66,5.66,0,0,0,328,117.48ZM398,153l-0.17,1a12.71,12.71,0,0,1-.51,1.83c-0.23.68-.5,1.35-0.79,2a31.76,31.76,0,0,1-1.6,3.2c-0.3.52-.63,1-1,1.5a2,2,0,0,1-1,.95,1.49,1.49,0,0,1-1.33-.27,1.85,1.85,0,0,1-.63-1.2,3.7,3.7,0,0,1,.12-1.38,16.93,16.93,0,0,1,2.42-5.1,7.29,7.29,0,0,1,1.57-1.68A3.8,3.8,0,0,1,397,153C397.29,153,398,153,398,153Z"
                transform="translate(-15.13 -67.61)"
              />
              <path
                d="M199.82,139.58c-0.26.08-.28,0.31,0,0.3a0.3,0.3,0,0,0,.24-0.2,0.38,0.38,0,0,0,0-.18l-0.25.08h0Z"
                transform="translate(-15.13 -67.61)"
              />
            </svg>
          </div>
        </header>
        <div className="w-100 mw8 center pa4">
          <a
            className="mb5 db dim link pointer"
            href="https://interfacelovers.com"
            title="Interface Lovers"
          >
            <img
              className="db"
              src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/interfacelovers.jpg"
            />
            <span className="black b lh-copy pv3 db bw2 bb">
              interfacelovers.com
            </span>
          </a>
        </div>
        <div className="cf pa4-l bg-white">
          <div className="fl w-100 w-50-m w-25-l pa4" data-name="column-1">
            <a
              className="mb5 db dim link pointer"
              href="https://zarf.co"
              title="Zarf"
            >
              <img
                className="db"
                src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/zarf.png"
              />
              <span className="black b lh-copy pv3 db bw2 bb">zarf.co</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="https://coralproject.net/"
              title="Coral Project from Mozilla"
            >
              <img
                className="db"
                src="http://tachyons.io/img/mozilla-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">
                coralproject.net
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://samueldregan.com/"
              title="Samuel Dregan"
            >
              <img className="db" src="http://tachyons.io/img/sam-small.jpg" />
              <span className="black b lh-copy pv3 db bw2 bb">
                samueldregan.com/
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://studiocraft.cc"
              title="Studio Craft"
            >
              <img
                className="db"
                src="http://tachyons.io/img/studiocraft-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">
                studiocraft.cc
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://iheanyi.com/"
              title=""
            >
              <img className="db" src="http://tachyons.io/img/i.png" />
              <span className="black b lh-copy pv3 db bw2 bb">iheanyi.com</span>
            </a>
          </div>
          <div className="fl w-100 w-50-m w-25-l pa4" data-name="column-2">
            <a
              className="mb5 db dim link pointer"
              href="https://womenwho.design"
              title="Web VR Rocks"
            >
              <img
                className="db"
                src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/design-women.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">
                womenwho.design
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="https://play.webvr.rocks"
              title="Web VR Rocks"
            >
              <img
                className="db"
                src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/webvr.png"
              />
              <span className="black b lh-copy pv3 db bw2 bb">
                play.webvr.rocks
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://bluebottlecoffee.com/"
              title="Blue Bottle Coffee"
            >
              <img
                className="db"
                src="http://tachyons.io/img/bluebottle-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">
                bluebottlecoffee.com
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://kerem.co/"
              title="Kerem"
            >
              <img className="db" src="http://tachyons.io/img/kerem.co.jpg" />
              <span className="black b lh-copy pv3 db bw2 bb">kerem.co</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://topher.design"
              title="Topher Design"
            >
              <img className="db" src="http://tachyons.io/img/topher.png" />
              <span className="black b lh-copy pv3 db bw2 bb">
                topher.design
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://sogol.com/"
              title="Sogol"
            >
              <img
                className="db"
                src="http://tachyons.io/img/sogol-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">sogol.com</span>
            </a>
          </div>
          <div className="fl w-100 w-50-m w-25-l pa4" data-name="column-3">
            <a
              className="mb5 db dim link pointer"
              href="https://npmjs.com"
              title="Nice People Matter"
            >
              <img
                className="db"
                src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/npm.png"
              />
              <span className="black b lh-copy pv3 db bw2 bb">npmjs.com</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://segment.com"
              title="Segment"
            >
              <img className="db" src="http://tachyons.io/img/segment.png" />
              <span className="black b lh-copy pv3 db bw2 bb">segment.com</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://algolia.com"
              title="Agolio"
            >
              <img
                className="db"
                src="http://tachyons.io/img/algolia-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">algolia.com</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://spenhar.com/"
              title="Spenhar"
            >
              <img className="db" src="http://tachyons.io/img/spenhar.png" />
              <span className="black b lh-copy pv3 db bw2 bb">spenhar.com</span>
            </a>
          </div>
          <div className="fl w-100 w-50-m w-25-l pa4" data-name="column-4">
            <a
              className="mb5 db dim link pointer"
              href="https://fredfahlke.github.io/"
              title="Uptime Umbrella"
            >
              <img className="db" src="http://tachyons.io/img/fred-small.jpg" />
              <span className="black b lh-copy pv3 db bw2 bb">
                fredfahlke.github.io
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://lastjapan.com/"
              title="Last Japan"
            >
              <img className="db" src="http://tachyons.io/img/lastjapan.jpg" />
              <span className="black b lh-copy pv3 db bw2 bb">
                lastjapan.com
              </span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="http://urlbox.io"
              title="Uptime Umbrella"
            >
              <img
                className="db"
                src="http://tachyons.io/img/urlboxio-small.jpg"
              />
              <span className="black b lh-copy pv3 db bw2 bb">urlbox.io</span>
            </a>
            <a
              className="mb5 db dim link pointer"
              href="https://tylernford.com"
              title="Tyler N Ford"
            >
              <img className="db" src="http://tachyons.io/img/tylernford.png" />
              <span className="black b lh-copy pv3 db bw2 bb">
                tylernford.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </Container>
  </Layout>
)
