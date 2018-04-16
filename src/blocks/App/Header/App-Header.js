import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Logo from 'e:Logo';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Logo/>
        <hr/>
        <h1 className="visuallyhidden">Дзен-лента</h1>
      </Fragment>
    );
  }
});

// <img class="page-header__logo"
//           src="./assets/img/zen_logo.png" alt="Логотип Яндекс Дзен"
//           srcset="./assets/img/zen_logo.png 1x,
//                   ./assets/img/zen_logo@2x.png 2x">
