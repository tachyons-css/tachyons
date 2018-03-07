import React from 'react'
import { ComponentsProvider } from '@compositor/markdown'

import Layout from './Layout'
import Container from './Container'
import NavElements from './NavElements'
import data from '../data.json'
import { md } from './'

export default Component => ({ title, ...props }) => (
  <ComponentsProvider components={md}>
    <Layout title={title}>
      <NavElements />
      <Container padding={true} className="black-70">
        <Component data={data} {...props} />
      </Container>
    </Layout>
  </ComponentsProvider>
)
