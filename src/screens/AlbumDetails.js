import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../styles/screens/AlbumDetailsStyles';
import PhotoRender from '../components/PhotoRender';

const AlbumDetails = ({route}) => {
  const id = route.params;
  const idToString = id.toString();

  const [albumPhotos, setAlbumPhotos] = useState([]);

  const fetchAlbumPhotos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/albums/' + idToString + '/photos',
    );
    const data = await response.json();

    setAlbumPhotos(data);
  };

  useEffect(() => {
    fetchAlbumPhotos();
  }, []);

  console.log(typeof idToString);
  console.log(albumPhotos);

  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.flatListWrapperStyle}
        data={albumPhotos}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <PhotoRender url={item.url}/>
        )}
      />
    </View>
  );
};

export default AlbumDetails;
