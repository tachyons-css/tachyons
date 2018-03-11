import React, { Component } from 'react'
import Highlight from 'react-highlight'
import isPresent from 'is-present'
import matter from 'gray-matter'
import he from 'he'

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
      lines: content.split(/\n/).length,
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

    if (!this.state.shouldLiveEdit) {
      return (
        <Highlight
          innerHtml={true}
          children={this.state.html}
        />
      )
    }

    return (
      <div>
        <textarea
          rows={this.state.lines}
          className="w-100 bn code black-70 ph0 mb2 input-reset"
          value={this.state.html}
          onChange={this.handleChange}
        />

        <div
          className="sans-serif ws-normal"
          dangerouslySetInnerHTML={{
            __html: he.decode(this.state.html)
          }}
        />
      </div>
    )
  }
}

export default Editor
