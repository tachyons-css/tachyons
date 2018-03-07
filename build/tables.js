const fs = require('fs')
const cssTable = require('css-table')

const srcFile = 'src/tachyons.css'
const css = fs.readFileSync(srcFile, 'utf8')
const options = {
  from: srcFile
}

const writeTable = async () => {
  const data = await cssTable(css, options)

  const selectors = data
    .sort((a, b) => {
      if (a.moduleName < b.moduleName) return -1;
      if (a.moduleName > b.moduleName) return 1;
      return 0;
    })
    .map(d => {
    const moduleName = d.moduleName.split('/_')[1].replace('.css', '')

    if (moduleName === 'normalize' || moduleName === 'debug-grid') {
      return
    }

    return [
      d.selector.replace(/\n/g, '<br />'),
      d.declarations.join(';<br />').replace(/\n/g, '<br />'),
      `${moduleName}`
    ].join(' | ')
  })

  fs.writeFileSync('docs/table-of-styles.md',
`# Table of Styles

Here is a list of each class in Tachyons along with corresponding styles.

Selectors | Declarations | Module
--------- | ------------ | ------
${selectors.filter(Boolean).join('\n')}`)
}

writeTable()
