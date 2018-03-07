import React from 'react'

import { version } from '../package.json'

import Layout from '../ui/Layout'
import Nav from '../ui/NavHome'
import Hero from '../ui/Hero'
import GettingStarted from '../ui/GettingStarted'

export default () => (
  <Layout>
    <section className="bg-black-0125 w-100">
      <article>
        <Nav />
        <Hero version={version} />
        <GettingStarted version={version} />
      </article>
    </section>
  </Layout>
)
