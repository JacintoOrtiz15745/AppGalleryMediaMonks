import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/components/AlbumRenderStyles';

const AlbumRender = props => {
  const {title, onPress} = props;

  const ImageRequire = require('../utils/Images/IconRight.png');

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.albumMainContainer} />
      <Text style={styles.textAlbum}>{title}</Text>
      <Image style={styles.iconRight} source={ImageRequire} />
    </TouchableOpacity>
  );
};

export default AlbumRender;
