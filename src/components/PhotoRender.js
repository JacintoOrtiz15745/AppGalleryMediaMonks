import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles/components/PhotoRenderStyles';

const PhotoRender = (props) => {  

  const {url} = props
  return (
    <Image style={styles.mainContainerPhotos} source={{uri: url}}/>
  );
};

export default PhotoRender;
