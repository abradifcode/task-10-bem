import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Icon from 'b:Icon';

export default decl({
  block: 'PostActions',
  elem: 'Button',
  tag: 'button',
  attrs() {
    return {
      type: 'button'
    }
  },

  content() {
    return (
      <Fragment>
        <span className="visuallyhidden">Открыть меню</span>
        <Icon icon={this.props.icon}/>
      </Fragment>
      );
  }
});
