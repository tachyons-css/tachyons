import React from 'react';

import withDocLayout from '../../../ui/withDocLayout';
import Doc from '../../../grid/debug.md';

export default withDocLayout(Doc, {
  title: 'Debug / Grid / Docs / TACHYONS',
  subNav: 'grid',
  modules: ['tachyons-debug', 'tachyons-debug-grid'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/debug.md'
});
