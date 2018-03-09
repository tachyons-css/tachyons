import React from 'react'

import withDocLayout from '../../ui/withDocLayout'
import NavDocs from '../../ui/NavDocs'

const DocsIndex = () => (
  <div className="pb4">
    <h1 className="f4 mb4">Docs</h1>
    <NavDocs />
  </div>
)

export default withDocLayout(DocsIndex, {
  skipDocsNav: true,
  title: 'TACHYONS / Docs'
})
