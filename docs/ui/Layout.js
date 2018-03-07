import React from 'react'

import { version } from '../package.json'
import Header from './Header'
import Footer from './Footer'

export default ({ title = 'TACHYONS - Css Toolkit', children }) => (
  <div className="w-100 sans-serif">
    <title>{title}</title>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons/css/tachyons.min.css"
    />

    <Header version={version} />
    <main>{children}</main>
  </div>
)
