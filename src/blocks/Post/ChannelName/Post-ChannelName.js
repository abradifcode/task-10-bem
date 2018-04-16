import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'b:Global e:Vars';

export default decl({
    block: 'Post',
    elem: 'ChannelName',
    tag: 'p',

    content() {
      return (
        <Fragment>{this.props.channelName}</Fragment>
      )
    }
});
