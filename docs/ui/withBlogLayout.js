import React from 'react'
import { ComponentsProvider } from '@compositor/markdown'

import Layout from './Layout'
import Container from './Container'
import { md } from './'

const cx = [
  'black-70',
  'nested-copy-line-height',
  'nested-img',
  'nested-links',
  'pb5'
].join(' ')

export default Component => ({ title, ...props }) => (
  <ComponentsProvider components={{ p: md.p }}>
    <Layout title={title}>
      <Container padding={true} className={cx}>
        <Component {...props} />
      </Container>
    </Layout>
  </ComponentsProvider>
)
