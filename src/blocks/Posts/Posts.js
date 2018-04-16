import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Data from '../Global/Data/Global-Data';
import Post from 'b:Post';

export default decl({
  block: 'Posts',

  content() {
    return (
      <Fragment>
        {
          Data.map((card, i) => {
            return (
              <Post
                key={i}
                id={i}
                size={card.size}
                title={card.title}
                titleColor={card.titleColor}
                image={card.image}
                alt={card.alt}
                description={card.description}
                channelName={card.channelName}
              />
            )

          })
        }
      </Fragment>
    )
  }
});


