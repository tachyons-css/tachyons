import React from 'react'
import classNames from 'classnames'
import Highlight from 'react-highlight'

import Link from './Link'
import data from './data.json'

export const Table = ({ tableOfStyles }) =>
  <table className="collapse w-100">
    <thead>
      <tr>
        <th className="f7 tracked ttu tl bb bt b--white-20 pa2">Class</th>
        <th className="f7 tracked ttu tl bb bt b--white-20 pa2">
          Properties
        </th>
      </tr>
    </thead>
    <tbody
      children={tableOfStyles.map(decl => (
        <tr key={decl.selector}>
          <td className="pa2 bb b--white-10 near-white">
            <code>{decl.selector}</code>
          </td>
          <td className="pa2 bb b--white-10 white-80">
            <code
              children={decl.declarations.map(d => (
                <span key={d} className="db" children={d + ';'} />
              ))}
            />
          </td>
        </tr>
      ))}
    />
  </table>

export const Css = ({ src }) => (
  <div className='pa3'>
    <Highlight>{src}</Highlight>
  </div>
)

export default ({ src, view, name, tableOfStyles }) => {
  const tabCx = 'f6 ttu ba tracked br3 dib link ph2 pv1'
  const cssTabCx = classNames('br--right', tabCx, {
    'white': view !== 'css',
    'bg-white black b--white':  view === 'css'
  })
  const tableTabCx = classNames('br--left', tabCx, {
    'white': view !== 'table',
    'bg-white black b--white':  view === 'table'
  })

  return (
    <div className="bg-black white">
      <div className="dib mt3 ph2 pt2">
        <Link
          href={`?module=${name}&view=table`}
          className={tableTabCx}
          children='Table'
        />
        <Link
          href={`?module=${name}&view=css`}
          className={cssTabCx}
          children='Css'
        />
      </div>
      <div
        className="overflow-auto pt2 pt3-m pt3-l"
        children={view === 'css' ? <Css src={src} /> : <Table tableOfStyles={tableOfStyles} />}
      />
    </div>
  )
}
