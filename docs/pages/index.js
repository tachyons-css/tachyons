import React from 'react'

import { version } from '../package.json'

import Layout from '../ui/Layout'
import Nav from '../ui/NavHome'
import Hero from '../ui/Hero'
import GettingStarted from '../ui/GettingStarted'
import StartUsing from '../ui/StartUsing'
import Testimonials from '../testimonials.md'
import Principles from '../principles.md'
import Features from '../features.md'

export default () => (
  <Layout>
    <section className="bg-black-0125 w-100">
      <article>
        <Nav />
        <Hero version={version} />
        <GettingStarted version={version} />
        <Principles />
        <Features />
        <StartUsing />
        <Testimonials />
      </article>
    </section>
  </Layout>
)
