import React from 'react'
import classNames from 'classnames'

export default ({ className = '', padding, ...props }) => {
  const cx = classNames(className, 'mw9 center', {
    'ph3 ph5-m ph5-l': padding
  })
  return <div className={cx} {...props} />
}
