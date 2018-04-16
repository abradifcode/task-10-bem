import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Post',
    elem: 'Description',
    tag: 'p',
    mods({mods}) {
      return mods;
    },

    content() {
      return (
        <Fragment>{this.props.description}</Fragment>
      )
    }
});
