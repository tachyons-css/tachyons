const fs = require('fs')
const { promisify } = require('util')
const mkdirp = require('mkdirp')
const globby = require('globby')
const titleize = require('titleize')

const mkdir = promisify(mkdirp)

const generateComponentsNav = async () => {
  const components = await globby('../docs/components/**/*.html', { nodir: true })
    .then(files => files.map(c => {
      const src = c.split('components/')[1]
      const slug = c.replace('../', '/').replace('.html', '')
      const [_1, _2, _3, section, name] = slug.split('/')
      const title = titleize(name).replace(/-/g, ' ')
      const importPath = `../../../../${slug}.html`

      return { name, title, section, src, slug, importPath }
    }))

  const bySection = components.reduce((acc, component) => {
    acc[component.section] = acc[component.section] || []
    acc[component.section].push(component)

    return acc
  }, {})

  components.forEach(async c => {
    const dir = `pages/components/${c.section}`
    const file = `${dir}/${c.name}.js`

    await mkdir(dir)

    fs.writeFileSync(file, `
      /* GENERATED FILE: See site/build/components.js */
      import React from 'react'
      import * as component from '${c.importPath}'
      import withComponentLayout from '../../../ui/withComponentLayout'

      export default withComponentLayout(component)
    `)
  })

  fs.writeFileSync('data/components.json', JSON.stringify(bySection, null, 2))
}

generateComponentsNav()
