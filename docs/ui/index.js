import React from 'react'
import Link from 'next/link'

import Container from './Container'
import Editor from './Editor'
import Flex from './Flex'

export { Container, Flex, Editor }

export const NavLink = ({
  href = '#!',
  m = 'l',
  activeClassName = '',
  ...props
}) => {
  let path = ''
  if (typeof window !== 'undefined') {
    path = window.location.pathname
  }

  const isActive = path === href

  const cx = [
    `f6 fw6 hover-blue link black-70 m${m}2 m${m}3-m m${m}4-l dib`,
    isActive ? activeClassName : ''
  ].join(' ')

  return (
    <Link href={href}>
      <a className={cx} {...props} />
    </Link>
  )
}

export const MobileNavLink = ({
  href = '#!',
  m = 'l',
  activeClassName = '',
  ...props
}) => {
  let path = ''
  if (typeof window !== 'undefined') {
    path = window.location.pathname
  }

  const isActive = path === href

  const cx = [
    `f6 fw6 hover-blue link black-70 db mv3`,
    isActive ? activeClassName : ''
  ].join(' ')

  return (
    <Link href={href}>
      <a className={cx} {...props} />
    </Link>
  )
}

export const TimesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

export const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

export const TitleLink = ({ href = '#!', subtext, text, ...props }) => (
  <Link href={href}>
    <a className="dib f5 f4-ns fw6 link black-70" {...props}>
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

export const EditOnGitHub = ({ url }) => (
  <div className="bg-green white pv3 pv5-m pv5-l mt4">
    <Container padding={true}>
      <Flex wrap={true} alignItems="center">
        <div className="flex-grow-1">
          <h4 className="f3 mv0">Notice an issue with these docs?</h4>
          <p className="f5 lh-copy o-80 measure mb0 mt2">
            You can edit directly on GitHub and send us a PR to fix typos or add
            missing documentation. Every contribution counts!
          </p>
        </div>

        <div>
          <Link href={url}>
            <a className="link white o-90 pointer ba b--white-70 br3 ph4 pv3">
              Edit on GitHub
            </a>
          </Link>
        </div>
      </Flex>
    </Container>
  </div>
)

export const md = {
  h1: props => <h1 className="f6 ttu tracked mt0" {...props} />,
  h2: props => <h2 className="f3 lh-title mt4 mb2" {...props} />,
  h3: props => <h3 className="f4 lh-title mt4 mb2" {...props} />,
  h4: props => <h3 className="f5 lh-title mt4 mb2" {...props} />,
  h5: props => <h3 className="f6 lh-title mid-gray mt4 mb2" {...props} />,
  h6: props => <h3 className="f7 lh-title mid-gray mt4 mb2" {...props} />,
  p: props => <p className="measure-wide f5 lh-copy" {...props} />,
  ul: props => <ul className="pl3" {...props} />,
  li: props => <li className="lh-copy ml2" {...props} />,
  table: props => <table className="collapse" {...props} />,
  th: props => <th className="f7 tracked ttu tl bb bt b--black-10 bg-near-white pa2" {...props} />,
  td: props => <td className="pa2 bb b--black-05 black" {...props} />,
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a className="dim link blue" {...props} />
    </Link>
  ),
  code: Editor,
  pre: props => <pre className='black f5 pre pa3 overflow-auto bl bw2 b--black' {...props} />
}
