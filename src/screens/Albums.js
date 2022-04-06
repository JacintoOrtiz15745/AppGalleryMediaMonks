import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AlbumRender from '../components/AlbumRender';
import {styles} from '../styles/screens/AlbumStyles';

const Albums = ({navigation}) => {
  const [album, setAlbum] = useState([]);

  const fetchAlbum = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();

    setAlbum(data);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.flatListWrapperStyle}
        data={album}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <AlbumRender id={item.id} onPress={() => navigation.navigate('AlbumDetails', item.id) }/>
        )}
      />
    </View>
  );
};

export default Albums;
