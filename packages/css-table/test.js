const test = require('ava')
const cssTable = require('./')

const css = `
@import "tachyons";
`

test('returns a table data', async t => {
  const result = await cssTable(css)
  t.snapshot(result)
})
