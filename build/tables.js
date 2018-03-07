const fs = require('fs')
const cssTable = require('css-table')

const srcFile = 'src/tachyons.css'
const css = fs.readFileSync(srcFile, 'utf8')
const options = {
  from: srcFile
}

const writeTables = async () => {
  const data = await cssTable(css, options)

  const selectors = data.map(d => {
    const moduleName = d.moduleName.split('/_')[1].replace('.css', '')

    if (moduleName === 'normalize') {
      return
    }

    console.log(moduleName)

    return [
      d.selector,
      d.declarations.join('<br />'),
      moduleName
    ].join(' | ')
  })

  fs.writeFileSync('docs/table-of-styles.md',
`# Table of Styles

Here is a list of each class in Tachyons along with corresponding styles.

Selectors | Declarations | Module
--------- | ------------ | ------
${selectors.filter(Boolean)}`)
}

writeTables()
