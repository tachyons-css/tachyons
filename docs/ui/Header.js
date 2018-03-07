import React from 'react'

import Container from './Container'
import Flex from './Flex'
import { NavLink, TitleLink } from './'

export default ({ version }) => (
  <header className="pv3">
    <Container padding={true}>
      <Flex justify="between" alignItems="center">
        <TitleLink
          href="/"
          title="Home"
          text="Tachyons"
          subtext={`v${version}`}
        />

        <Flex is="nav">
          <NavLink title="Documentation" href="/docs/">
            Docs
          </NavLink>
          <NavLink title="Components" href="/components/">
            Components
          </NavLink>
          <NavLink title="Gallery of sites built with Tachyons" to="/gallery/">
            Gallery
          </NavLink>
          <NavLink title="Resources" href="/resources/">
            Resources
          </NavLink>
          <NavLink
            title="Tachyons on GitHub"
            href="http://github.com/tachyons-css/tachyons/"
          >
            GitHub
          </NavLink>
        </Flex>
      </Flex>
    </Container>
  </header>
)
