import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

const viewBoxes = {
  'dots': '0 0 14 4',
  'heart': '0 0 16 18'
}

export default decl({
  block: 'Icon',
  tag: 'svg',
  cls({icon}) {
    return 'Icon_' + icon;
  },
  attrs({icon}) {
    return {
      viewBox: viewBoxes[icon],
      xmlns: 'http://www.w3.org/2000/svg'
    }
  },

  content() {
    const iconLink = `#${this.props.icon}`;

    return (
       <Fragment>
          <use xlinkHref={iconLink}/>
      </Fragment>
    )
  }
});
