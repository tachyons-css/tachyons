import React from 'react'

import { Container, NavLink } from './'
import { docs as docsNav } from './nav'

export default ({ nav }) => {
  const subNav = docsNav.find(s => s.slug === nav)

  if (!subNav) {
    return null
  }

  return (
    <header className="pv3 mb4 mb5-ns bb bt b--black-10 overflow-auto">
      <Container
        className="nowrap"
        padding={true}
        children={subNav.items.map(item =>
          <NavLink
            m='r'
            key={item.title}
            children={item.title}
            {...item}
          />
        )}
      />
    </header>
  )
}
