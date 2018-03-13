import React, { Component } from 'react'
import Highlight from 'react-highlight'
import classNames from 'classnames'
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
    const { current, html } = this.state
    const code = replace(this.props.html, this.state.current)

    return (
      <div className="sans-serif">
        <h6 className="mid-gray f7 ttu tracked mt0 mb2">Examples</h6>
        <div
          className="mb3 pointer"
          children={this.props.examples.map(example => {
            const isActive = example === current
            const cx = classNames('pv1 ph2 mr3 f7 fw6 ba', {
              'b--black-30 mid-gray bg-white dim': !isActive,
              'b--black white bg-black': isActive
            })

            return (
              <span
                key={example}
                className={cx}
                onClick={() => {
                  this.handleChange(example)
                }}
                children={example}
              />
            )
          })}
        />

        <div
          className="sans-serif ws-normal"
          dangerouslySetInnerHTML={{
            __html: he.decode(code)
          }}
        />

        <Highlight innerHtml={true} children={code} />
      </div>
    )
  }
}

export default Examples
