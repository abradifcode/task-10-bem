import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Button from 'e:Button';

export default decl({
  block: 'PostActions',

  content() {
    return (
      <Fragment>
        <Button icon='heart'/>

        <Button icon='dots'/>
      </Fragment>
      );
  }
});

// <button className="PostActions__button" type="button">
//             <span className="visuallyhidden">Открыть меню</span>
//             <svg className="icon icon--dots"><use xlinkHref="#dots"/></svg>
//           </button>

//           <button className="PostActions__button" type="button">
//             <span className="visuallyhidden">Открыть меню</span>
//             <svg className="icon icon--heart"><use xlinkHref="#heart"/></svg>
//           </button>
