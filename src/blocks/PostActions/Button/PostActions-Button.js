import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Icon from 'b:Icon';
import 'b:Visuallyhidden';

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
        <span className="Visuallyhidden">Открыть меню</span>
        <Icon icon={this.props.icon}/>
      </Fragment>
      );
  }
});
