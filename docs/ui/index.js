import React from 'react'
import Link from 'next/link'

import Container from './Container'
import Editor from './Editor'
import Flex from './Flex'

export { Container, Flex, Editor }

export const NavLink = ({ href = '#!', m = 'l', ...props }) => (
  <Link href={href}>
    <a
      className={`f6 fw6 hover-blue link black-70 m${m}2 m${m}3-m m${m}4-l dib`}
      {...props}
    />
  </Link>
)

export const TitleLink = ({ href = '#!', subtext, text, ...props }) => (
  <Link href={href}>
    <a className="dib f5 f4-ns fw6 mt0 mb1 link black-70" {...props}>
      {text}

      {subtext && (
        <div className="dib pl1">
          <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">
            {subtext}
          </small>
        </div>
      )}
    </a>
  </Link>
)

export const BigQuote = ({ quote, author, work }) => (
  <blockquote className="f5 f4-m f2-l black-70 lh-copy mh0 pv4 ph3 bt bb bw1 b--black-05 mv4 mv5-ns db">
    <p className="baskerville fw1 measure center">“{quote}”</p>
    <p className="dark-gray f5 f4-m f2-l center measure">
      <span className="f6">
        —{author}, <cite>{work}</cite>
      </span>
    </p>
  </blockquote>
)

export const md = {
  h1: props => <h1 className="f6 ttu tracked mt0" {...props} />,
  h2: props => <h2 className="f5 mt4 pb2 bb" {...props} />,
  h3: props => <h3 className="f5 mt4" {...props} />,
  p: props => <p className="measure f5 lh-copy" {...props} />,
  ul: props => <ul className="pl3" {...props} />,
  li: props => <li className="lh-copy ml2" {...props} />,
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a className="dim link blue" {...props} />
    </Link>
  ),
  code: Editor
}
