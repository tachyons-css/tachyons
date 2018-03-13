import React from 'react'

import data from './data.json'

export default ({ src, tableOfStyles }) => {
  return (
    <div className="bg-black white">
      <div className="dib mt3 ph2 pt2">
        <div className="f6 ttu ba tracked br3 br--left ph2 pv1 dib bg-white b--white black">
          Css
        </div>
        <div className="f6 ttu ba tracked br3 br--right ph2 pv1 dib">Table</div>
      </div>
      <div className="overflow-auto pt2 pt3-m pt3-l">
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
      </div>
    </div>
  )
}
