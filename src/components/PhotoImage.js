import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles/components/PhotoStyles';

const PhotoImage = ({url}) => {  
  return (
    <Image style={{height: 100, width: 100}} source={{uri: url }}/>
  );
};

export default PhotoImage;
