import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title m:size_s m:size_m m:size_l';
import PictureWrapper from 'b:PictureWrapper';
import Content from 'e:Content m:size_s m:size_m m:size_l';
import Description from 'e:Description m:size_s m:size_m m:size_l';
import ChannelName from 'e:ChannelName';
import PostActions from 'b:PostActions';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

import 'e:PictureWrapper m:size_s m:size_m m:size_l';
import 'e:Picture';
import 'e:Actions';

export default decl({
  block: 'Post',
  tag: 'article',
  mods({ size, image }) {
    const hasImage = !!image;
    return { size, hasImage };
  },

  content() {
    const pictureBlock = <PictureWrapper
      data={this.props}
      mods={{size: this.props.size}}
      mix={{ block: 'Post', elem: 'PictureWrapper', mods: {size: this.props.size} }}
    />;
    const descBlock = <Description
      description={this.props.description}
      mods={{size: this.props.size}}
    />;
    const channelBlock = <ChannelName channelName={this.props.channelName}/>;
    const postActionsMix = { block: 'Post', elem: 'Actions', mods: {size: this.props.size} };

    const components = {
      picture: this.props.image ? pictureBlock : '',
      description: this.props.description ? descBlock : '',
      channelName: this.props.channelName ? channelBlock : '',
    };

    return (
      <Fragment>
        <Title
          titleColor={this.props.titleColor}
          title={ this.props.title } mods={{size: this.props.size}}/>

        { components.picture }

        <Content mods={{size: this.props.size}}>
          { components.description }
          { components.channelName }
          <PostActions mix={ postActionsMix }/>
        </Content>
      </Fragment>
    );
  }
});
