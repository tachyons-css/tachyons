import React from 'react'

import { Container, NavLink } from './'

export default () => (
  <header className="pv3 mb4 mb5-ns bb bt b--black-10 overflow-auto">
    <Container className="nowrap" padding={true}>
      <NavLink m="r" title="Images" href="/elements/images">
        Images
      </NavLink>
      <NavLink m="r" title="Links" href="/elements/links">
        Links
      </NavLink>
      <NavLink m="r" title="Lists" href="/elements/lists">
        Lists
      </NavLink>
      <NavLink m="r" title="Forms" href="/elements/forms">
        Forms
      </NavLink>
      <NavLink m="r" title="Tables" href="/elements/tables">
        Tables
      </NavLink>
    </Container>
  </header>
)
