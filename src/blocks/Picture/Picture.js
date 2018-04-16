import { decl } from 'bem-react-core';

export default decl({
    block: 'Picture',
    tag: 'img',
    mods({mods}) {
      return mods;
    },
    attrs({data}) {
      return {
        src: data.image,
        alt: data.alt
      }
    }
});


