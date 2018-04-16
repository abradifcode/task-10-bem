import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Picture from 'b:Picture m:adaptive';

export default decl({
    block: 'PictureWrapper',
    mods({mods}) {
      return mods;
    },

    content() {
      const data = this.props.data;

      return (
        <Fragment>
          <Picture adaptive
            data={data}
            mods={{size: data.size}}
            mix={{ block: 'Post', elem: 'Picture' }}
          />
        </Fragment>
      )
    }
});
