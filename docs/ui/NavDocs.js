import React from 'react'

import Link from './Link'
import { Flex } from './'
import { docs as docsNav } from './nav'

export default () => (
  <Flex
    wrap={true}
    children={docsNav.map(section => {
      const wrapperCx = /overview/i.test(section.title)
        ? 'w-100 pb3'
        : 'w-100 w-25-l pb3'

      return (
        <nav key={section.title} className={wrapperCx}>
          <h3 className="f6 fw7 ttu tracked">{section.title}</h3>
          {section.items.map(item => (
            <div key={item.title} className="pv1">
              <Link
                className="f5 fw4 dim link blue-5 pv1"
                children={item.title}
                {...item}
              />
            </div>
          ))}
        </nav>
      )
    })}
  />
)
