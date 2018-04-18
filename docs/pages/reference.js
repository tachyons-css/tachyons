import React, { Component } from 'react'
import Highlight from 'react-highlight'

import Layout from '../ui/Layout'
import Link from '../ui/Link'
import SrcReference from '../ui/SrcReference'
import { Flex, md } from '../ui'
import { modules } from '../data/modules.json'

class Reference extends Component {
  static getInitialProps = ({ query = {} }) => query

  render() {
    const { view = 'table', module } = this.props
    const currModule = modules[module]

    return (
      <Layout skipFooter={true} skipHeader={true}>
        <Flex className="min-vh-100">
          <div className="fixed bg-near-white w5 h-100 overflow-container br b--black-10 flex-shrink-0">
            <nav
              className="pv2"
              children={Object.keys(modules).map(k => {
                const m = modules[k]
                const shortName = m.name.replace(/^tachyons-/, '')

                return (
                  <Link
                    href={`/reference?module=${m.name}`}
                    className="db link pl3 pv2 black"
                    children={shortName}
                  />
                )
              })}
            />
          </div>
          <Flex className="ml6 pl6 w-100 mh-100">
            <div className="flex-1 pa3 pv4 min-vh-100">
              <Highlight>{currModule.readme}</Highlight>
            </div>
            <div className="flex-1 min-vh-100">
              <SrcReference view={view} {...currModule} />
            </div>
          </Flex>
        </Flex>
      </Layout>
    )
  }
}

Reference.defaultProps = {
  module: 'tachyons-widths',
  view: 'table'
}

export default Reference
