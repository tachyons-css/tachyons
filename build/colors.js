const fs = require('fs')
const postcss = require('postcss')
const getVariables = require('postcss-get-variables')

const css = fs.readFileSync('src/_colors.css', 'utf8')

module.exports = async () => {
  await postcss([
    getVariables(c => {
      const colors = Object.entries(c).reduce((acc, [name, value]) => {
        if (name === 'transparent') {
          return acc
        }

        name = /^(black|white)-/.test(name) ? name : name.replace('-', '')
        acc[name] = value

        return acc
      }, {})

      fs.writeFileSync('site/data/colors.json', JSON.stringify(colors, null, 2))
    })
  ]).process(css)
}
