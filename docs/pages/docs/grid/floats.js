import React from 'react';

import withDocLayout from '../../../ui/withDocLayout';
import Doc from '../../../grid/floats.md';

export default withDocLayout(Doc, {
  title: 'Floats / Grid / Docs / TACHYONS',
  subNav: 'grid',
  modules: ['tachyons-floats', 'tachyons-widths', 'tachyons-clearfix'],
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/grid/floats.md'
});
