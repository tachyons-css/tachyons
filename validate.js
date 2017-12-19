'use strict';

const assert = require('assert');
const fs = require('fs');

let data = fs.readFileSync('./amp-build/tachyons-amp.min.css', 'utf8');

// Total size should not exceed 50kb
assert(data.length <= 50000);

// Contents should not contain `!important`, 'behavior' and '-moz-binding'
assert.equal(/\!important|behavior|-moz-binding/.test(data), false);
