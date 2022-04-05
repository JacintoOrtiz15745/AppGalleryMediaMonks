import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Albums = () => {
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
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={album}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <View
            style={{
              height: 200,
              width: '49%',
              backgroundColor: '#899596',
              marginTop: 3,
              borderRadius: 30,
            }}>
            <Text 
              style={{  
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {item.id}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Albums;
