import React, {useEffect} from 'react';
import {View, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import AlbumRender from '../components/AlbumRender';
import {styles} from '../styles/screens/AlbumStyles';
import {connect} from 'react-redux';
import {fetchAlbumsFunction} from '../store/actions/AlbumsActions';

const Albums = ({navigation, data, fetchAlbumsFunction}) => {
  if (data.isLoaded == false) {
    useEffect(() => {
      fetchAlbumsFunction();
    }, []);
  }

  return (
    <View>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      {data.isLoaded == false ? (
        <ActivityIndicator size="large" color="#00ff0" />
      ) : (
        <FlatList
          columnWrapperStyle={styles.flatListWrapperStyle}
          data={data.dataAlbums}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <AlbumRender
              title={item.title}
              onPress={() => navigation.navigate('AlbumDetails', item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    data: state.AlbumsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumsFunction: () => dispatch(fetchAlbumsFunction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
