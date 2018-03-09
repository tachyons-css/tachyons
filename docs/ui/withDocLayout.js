import React from 'react'
import { ComponentsProvider } from '@compositor/markdown'

import Layout from './Layout'
import Container from './Container'
import NavElements from './NavElements'
import data from './data.json'
import { md, EditOnGitHub } from './'

export default (Component, metadata = {}) => ({ title, ...props }) => (
  <ComponentsProvider components={md}>
    <link rel="stylesheet" href="https://unpkg.com/tachyons-gradients@0.0.1/css/tachyons-gradients.min.css" />
    <Layout title={title}>
      <NavElements />
      <Container padding={true} className="black-70">
        <Component data={data} {...props} />
      </Container>
      {metadata.editUrl
        ? <EditOnGitHub url={metadata.editUrl} />
        : null
      }
    </Layout>
  </ComponentsProvider>
)
