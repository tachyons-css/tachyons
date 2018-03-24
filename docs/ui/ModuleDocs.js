import React from 'react'
import cssstats from 'cssstats'

import data from './data.json'

const Module = data => {
  const stats = cssstats(data.css)

  return (
    <div className="bt b--black-10 pv3 pv4-m pv5-l mv3 mv4-m mv5-l">
      <header>
        <div className="flex flex-wrap items-center">
          <h4 className="f4 mv0 fw6 dib mr4">{data.name}</h4>
          <span className="f4 b dib pl0 ml0 mr4">v{data.version}</span>
          <span className="f4 b dib pl0 ml0 mr4">
            {stats.humanizedGzipSize}
          </span>
          <a
            className="link white bg-black-80 pointer br2 ph2 pv1 f7 hover-bg-mid-gray"
            href={`https://github.com/tachyons-css/tachyons/tree/master/packages/${
              data.name
            }/src/${data.name}.css`}
            children="</> Read Source Code"
          />
        </div>
        <div>
          <dl className="dib mr4 mt0">
            <dt className="f6 db">Declarations </dt>
            <dd className="db pl0 ml0 f4 f2-ns b">
              {stats.declarations.total}
            </dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Selectors </dt>
            <dd className="db pl0 ml0 f4 f2-ns b">{stats.selectors.total}</dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Max. Specificity Score </dt>
            <dd className="db pl0 ml0 f4 f2-ns b">
              {stats.selectors.specificity.max}
            </dd>
          </dl>
          <dl className="dib mr4">
            <dt className="f6 db pr2">Size of Avg. Rule </dt>
            <dd className="db pl0 ml0 f4 f2-m f2-l b">
              {stats.rules.size.average}
            </dd>
          </dl>
        </div>
      </header>

      <div className="overflow-auto pt2 pt3-m pt3-l">
        <table className="collapse w-100">
          <thead>
            <tr>
              <th className="f7 tracked ttu tl bb bt b--black-10 bg-near-white pa2">
                Class
              </th>
              <th className="f7 tracked ttu tl bb bt b--black-10 bg-near-white pa2">
                Properties
              </th>
            </tr>
          </thead>
          <tbody
            children={data.tableOfStyles.map(decl => (
              <tr key={decl.selector}>
                <td className="pa2 bb b--black-05 black">
                  <code>{decl.selector}</code>
                </td>
                <td className="pa2 bb b--black-05 black-60">
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

export default ({ modules = [] }) =>
  modules
    .map(m => data.modules[m])
    .filter(Boolean)
    .map(m => <Module key={m.name} {...m} />)
