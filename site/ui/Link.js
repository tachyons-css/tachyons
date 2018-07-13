import React from 'react'
import Link from 'next/link'

export default ({ href = '#!', ...props }) => (
  <Link href={href}>
    <a {...props} />
  </Link>
)
