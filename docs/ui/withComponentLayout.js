import React from 'react'
import Highlight from 'react-highlight'
import Layout from './Layout'
import { Flex } from './'

export default ({ html, css, meta: { stats } }) => () =>
  <Layout>
    <div class="pa3 pa4-m pa5-l bb bt b--black-05">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
    <Flex wrap={true}>
      <div className='w-100 w-50-m w-50-l br b--black-05 f6 pa3'>
        <Highlight>{css}</Highlight>
      </div>
      <div className='w-100 w-50-m w-50-l br b--black-05 f6'>
        <div class="bb b--black-05 pa3">
          <dl className="dib mr4 mt0">
            <dt className="f6 db">Declarations </dt>
            <dd className="db pl0 ml0 f4 f2-m f2-l b">
              {stats.declarations.total}
            </dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Selectors </dt>
            <dd className="db pl0 ml0 f4 f2-m f2-l b">{stats.selectors.total}</dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Max. Specificity Score </dt>
            <dd className="db pl0 ml0 f4 f2-m f2-l b">
              {stats.selectors.specificity.max}
            </dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Size of Avg. Rule </dt>
            <dd className="db pl0 ml0 f4 f2-m f2-l b">
              {stats.rules.size.average}
            </dd>
          </dl>
        </div>
        <Highlight>{html}</Highlight>
      </div>
    </Flex>
  </Layout>
