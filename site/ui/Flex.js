import React from 'react'
import classNames from 'classnames'

export default ({
  is = 'div',
  wrap = false,
  auto = false,
  self,
  justify,
  alignItems,
  children,
  ...props
}) => {
  const className = classNames(props.className || '', 'flex', {
    'flex-auto': auto,
    'flex-wrap': wrap,
    'items-center': alignItems === 'center',
    'justify-between': justify === 'between'
  })

  const newProps = Object.assign({}, props, { className })

  return React.createElement(is, newProps, children)
}
