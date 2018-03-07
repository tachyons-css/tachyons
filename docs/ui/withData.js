import React from 'react'
import { version } from 'tachyons/package.json'

import data from '../data.json'

export default Component => props => (
  <Component {...props} {...data} version={version} />
)
