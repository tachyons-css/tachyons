const fs = require('fs')
const globby = require('globby')
const titleize = require('titleize')

const generateComponentsNav = async () => {
  const components = await globby('./components/**/*.html', { nodir: true })
    .then(files => files.map(c => {
      const src = c.split('components/')[1]
      const slug = c.replace('./', '/').replace('.html', '')
      const [_1, _2, section, name] = slug.split('/')
      const title = titleize(name).replace(/-/g, ' ')

      return { name, title, section, src, slug }
    }))

  const bySection = components.reduce((acc, component) => {
    acc[component.section] = acc[component.section] || []
    acc[component.section].push(component)

    return acc
  }, {})

  fs.writeFileSync('ui/components.json', JSON.stringify(bySection, null, 2))
}

generateComponentsNav()
