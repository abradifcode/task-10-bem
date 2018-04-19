import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Logo from 'e:Logo';
import 'b:Visuallyhidden';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Logo/>
        <hr/>
        <h1 className="Visuallyhidden">Дзен-лента</h1>
      </Fragment>
    );
  }
});
