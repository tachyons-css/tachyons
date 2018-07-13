import React, { Component } from 'react'
import MDX from '@mdx-js/runtime'
import titleize from 'titleize'

import Layout from '../ui/Layout'
import Link from '../ui/Link'
import SrcReference from '../ui/SrcReference'
import CssHighlighting from '../ui/ReferenceCssHighlighting'
import { Flex, md } from '../ui'
import { modules } from '../data/modules.json'

class Reference extends Component {
  static getInitialProps = ({ query = {} }) => query

  render() {
    const { view = 'table', module } = this.props
    const currModule = modules[module]

    return (
      <Layout skipFooter={true} skipHeader={true}>
        <Flex id="reference" className="min-vh-100">
          <div className="pt3 fixed bg-near-white w5 h-100 overflow-container br b--black-10 flex-shrink-0">
            <Link href="/" className="pa3 black b link">
              Tachyons
            </Link>
            <nav
              className="pv2"
              children={Object.keys(modules).map(k => {
                const m = modules[k]
                const shortName = m.name
                  .replace(/^tachyons-/, '')
                  .replace('-', ' ')

                return (
                  <Link
                    href={`/reference?module=${m.name}`}
                    className="db link pl3 pv2 black"
                    children={titleize(shortName)}
                  />
                )
              })}
            />
          </div>
          <Flex className="ml6 pl6 w-100 mh-100">
            <div className="flex-1 pa3 pv4 min-vh-100">
              <MDX components={md}>{currModule.readme}</MDX>
            </div>
            <div className="flex-1 min-vh-100">
              <SrcReference view={view} {...currModule} />
            </div>
          </Flex>
        </Flex>
        <CssHighlighting />
      </Layout>
    )
  }
}

Reference.defaultProps = {
  module: 'tachyons-widths',
  view: 'table'
}

export default Reference
