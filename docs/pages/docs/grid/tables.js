import React from 'react';

import withDocLayout from '../../../ui/withDocLayout';
import Doc from '../../../grid/tables.md';

export default withDocLayout(Doc, {
  title: 'Tables / Grid / Docs / TACHYONS',
  subNav: 'grid',
  modules: ['tachyons-vertical-align', 'tachyons-widths'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/tables.md'
});
