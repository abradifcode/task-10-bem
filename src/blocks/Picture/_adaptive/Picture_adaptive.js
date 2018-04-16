import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

export default declMod({ adaptive: true }, {
    block: 'Picture',
    tag: 'picture',
    mods({mods}) {
      return mods;
    },
    attrs() {
      return {}
    },

    content() {
      const imageData = getImageData(this.props.data);
      let imageClass = 'Picture-Image';
      if (this.props.mix && this.props.mix.block) {
        imageClass += ` ${this.props.mix.block}-Image`;
      }

      return (
        <Fragment>
          <img
            src={imageData.urls.origin}
            alt={imageData.alt}
            srcSet={imageData.urls.retina}
            className={imageClass}/>
        </Fragment>
        );
    }
});

function getImageData(data) {
  let pathArr = data.image.split('/');
  pathArr = pathArr.filter(item => {
    if (item) {
      return item;
    }

    return false;
  });
  const fullName = pathArr[pathArr.length - 1];

  const fullNameArr = fullName.split('.');
  const name = fullNameArr[0];
  const ext = fullNameArr[1];
  const pathToFolder = pathArr.slice(0, pathArr.length - 1).join('/');
  const path = `${pathToFolder}/${name}`;

  const imageData = {
    alt: data.alt,
    urls: {
      origin: process.env.PUBLIC_URL + `${ path }.${ ext }`,
      retina: process.env.PUBLIC_URL + `${ path }@2x.${ ext } 2x`
    }
  };

  return imageData;
}

