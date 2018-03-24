import React from 'react'

import { version } from '../package.json'
import Header from './Header'
import Footer from './Footer'

export default ({
  title = 'TACHYONS - Css Toolkit',
  className = '',
  skipHeader,
  skipFooter,
  children
}) => {
  const cx = `${className} min-vh-100`

  return (
    <div className="min-vh-100 w-100">
      <title>{title}</title>

      {skipHeader ? null : <Header version={version} />}
      <main className={cx} children={children} />
      {skipFooter ? null : <Footer />}
    </div>
  )
}
