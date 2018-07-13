import React from 'react'

import { Container, NavLink } from './'

export default () => (
  <header className="pv3 mb4 mb5-ns bb bt b--black-10 overflow-auto">
    <Container className="ws-nowrap" padding={true}>
      <NavLink m="r" title="Getting Started" href="#getting-started">
        Getting Started
      </NavLink>
      <NavLink m="r" title="Principles" href="#principles">
        Principles
      </NavLink>
      <NavLink m="r" title="Features" href="#features">
        Features
      </NavLink>
      <NavLink m="r" title="Style Guide" href="#style">
        Style Guide
      </NavLink>
      <NavLink m="r" title="Testimonials" href="#testimonials">
        Testimonials
      </NavLink>
    </Container>
  </header>
)
