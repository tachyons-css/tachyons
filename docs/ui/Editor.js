import React, { Component } from 'react'
import Highlight from 'react-highlight'
import isPresent from 'is-present'
import classNames from 'classnames'
import matter from 'gray-matter'
import he from 'he'

import { Flex } from './'
import Examples from './Examples'

const isDotHTML = (cx = '') => /language-\.html/.test(cx)

class Editor extends Component {
  constructor(props) {
    super()

    const code = props.children[0] || ''
    const { content, data = {} } = matter(code)

    this.state = {
      html: content,
      metadata: data,
      lines: data.rows || content.split(/\n/).length,
      shouldLiveEdit: isDotHTML(props.className) || data.editable
    }
  }

  handleChange = e => {
    this.setState({
      html: e.target.value
    })
  }

  render() {
    if (isPresent(this.state.metadata.examples)) {
      return (
        <Examples
          examples={this.state.metadata.examples}
          html={this.state.html}
        />
      )
    }

    if (this.state.metadata.highlight) {
      return <Highlight innerHtml={true} children={this.state.html} />
    }

    if (!this.state.shouldLiveEdit) {
      return <code {...this.props} />
    }

    const textAreaCx = classNames(
      'w-100 bn code black-70 ph0 mb2 input-reset',
      {
        'w-50-m w-50-l': this.state.metadata.sideBySide
      }
    )

    const previewCx = classNames('w-100 sans-serif ws-normal', {
      'w-50-m w-50-l': this.state.metadata.sideBySide
    })

    return (
      <Flex wrap={true} alignItems={this.state.metadata.alignItems}>
        <textarea
          rows={this.state.lines}
          className={textAreaCx}
          value={this.state.html}
          onChange={this.handleChange}
        />

        <div
          className={previewCx}
          dangerouslySetInnerHTML={{
            __html: he.decode(this.state.html)
          }}
        />
      </Flex>
    )
  }
}

export default Editor
