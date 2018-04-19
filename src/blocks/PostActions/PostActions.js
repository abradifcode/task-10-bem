import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Button from 'e:Button';

export default decl({
  block: 'PostActions',

  content() {
    return (
      <Fragment>
        <Button icon='heart'/>

        <Button icon='dots'/>
      </Fragment>
      );
  }
});
