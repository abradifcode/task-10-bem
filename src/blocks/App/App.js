import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'b:Global e:Fonts';
import 'b:Global e:Base';

import Header from 'e:Header';
import Icons from 'b:Icons';
import Posts from 'b:Posts';

export default decl({
  block: 'App',

  content() {
    return (
      <Fragment>
        <Icons/>
        <Header/>
        <Posts/>
      </Fragment>
    );
  }
});


