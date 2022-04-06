import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import PhotoRender from '../components/PhotoRender';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    setPhotos(data);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={photos}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => ( 
          <PhotoRender url={item.url}/>
        )}
      />
    </View>
  );
};

export default Photos;
