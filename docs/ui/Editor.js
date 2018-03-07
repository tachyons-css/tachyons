import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import he from 'he'

const isDotHTML = (cx = '') => /language-\.html/.test(cx)

class Editor extends Component {
  constructor(props) {
    super()

    this.state = {
      shouldLiveEdit: isDotHTML(props.className),
      html: props.children[0] || ''
    }
  }

  handleChange = e => {
    this.setState({
      html: e.target.value
    })
  }

  render() {
    if (!this.state.shouldLiveEdit) {
      return <code {...this.props} />
    }

    return (
      <div>
        <textarea
          rows={1}
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
