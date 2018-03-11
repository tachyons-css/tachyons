import React, { Component } from 'react'
import Highlight from 'react-highlight'
import he from 'he'

const replace = (str, replace) => str.replace(/{{EXAMPLE}}/g, replace)

class Examples extends Component {
  state = {
    current: this.props.examples[0]
  }

  handleChange = example => {
    this.setState({
      current: example
    })
  }

  render() {
    const html = replace(this.props.html, this.state.current)

    return (
      <div>
        <div
          className="mb3"
          children={this.props.examples.map(example => (
            <span
              key={example}
              className="pv1 ph2 mr3 f7 fw6 ba b--black-30 mid-gray bg-white sans-serif pointer"
              onClick={() => {
                this.handleChange(example)
              }}
              children={example}
            />
          ))}
        />

        <div
          className="sans-serif ws-normal"
          dangerouslySetInnerHTML={{
            __html: he.decode(html)
          }}
        />

        <Highlight innerHtml={true} children={html} />
      </div>
    )
  }
}

export default Examples
