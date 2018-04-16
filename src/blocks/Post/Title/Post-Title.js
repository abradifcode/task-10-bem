import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Post',
  elem: 'Title',
  tag: 'h2',
  mods({mods}) {
    return mods;
  },
  attrs({title, titleColor}) {
    return {
        style: {
            color: titleColor
        },
        'data-title': title
    }
  },

  content() {
    return (
      <Fragment>
        <span dangerouslySetInnerHTML={{__html: this.props.title }} />
      </Fragment>
    )
  }
});
