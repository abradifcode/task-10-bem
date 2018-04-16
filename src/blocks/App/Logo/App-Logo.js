import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Picture from 'b:Picture m:adaptive';

export default decl({
  block: 'App',
  elem: 'Logo',
  content() {
    return (
      <Fragment>
        <Picture adaptive
          data={{image: '/img/zen_logo.png', alt: 'Логотип Дзена'}}
          mix={{block: 'App', elem: 'LogoPicture'}}/>
      </Fragment>
    );
  }
});


