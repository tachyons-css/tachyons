import React, { Component } from 'react'
import Highlight from 'react-highlight'

import { modules } from '../ui/data.json'

import Layout from '../ui/Layout'
import ModuleDocs from '../ui/ModuleDocs'

import {
  Flex
} from '../ui'

class Reference extends Component {
  static getInitialProps = ({ query }) => query

  render () {
    const module = modules[this.props.module]

    return (
      <Layout skipFooter={true} fixed={true}>
        <Flex className='bt b--black-10'>
          <div className='fixed bg-near-white w5 h-100 overflow-container br b--black-10 flex-shrink-0 pt5'>
            <nav
              className='pv2'
              children={Object.keys(modules).map(k => {
                const m = modules[k]
                const shortName = m.name.replace(/^tachyons-/, '')

                return (
                  <a
                    href={`/reference?module=${m.name}`}
                    className='db link pl3 pv2 black'
                    children={shortName}
                  />
                )
              })}
            />
          </div>
          <Flex className='ml6 pl6 w-100 mh-100'>
            <div className='flex-1 nt4 br b--black-10'>
              {this.props.view === 'table' ?
                <ModuleDocs modules={[module.name]} />
                :
              <Highlight>{module.css}</Highlight>
              }
            </div>
            <div className='flex-1 pt4 mt2'>
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
