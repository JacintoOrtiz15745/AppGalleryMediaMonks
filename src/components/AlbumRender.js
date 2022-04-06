import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/components/AlbumRenderStyles';

const AlbumRender = (props) => {
    const {id, onPress} = props;

  return (
    <TouchableOpacity style={styles.albumMainContainer} onPress={onPress}>
      <Text style={styles.textAlbum}>{id}</Text>
    </TouchableOpacity>
  );
};

export default AlbumRender;
