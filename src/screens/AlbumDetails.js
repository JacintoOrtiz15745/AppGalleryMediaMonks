import React, {useEffect} from 'react';
import {View, Text, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import {styles} from '../styles/screens/AlbumDetailsStyles';
import PhotoRender from '../components/PhotoRender';
import {connect} from 'react-redux';
import {fetchAlbumsDetailsFunction} from '../store/actions/AlbumsDetailsActions';

const AlbumDetails = ({route, data, fetchAlbumsDetailsFunction}) => {
  const id = route.params;
  const idToString = id.toString();

  if (data.isLoaded == false) {
    useEffect(() => {
      fetchAlbumsDetailsFunction(idToString);
    }, []);
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Text style={styles.title}>Photos</Text>
      {data.isLoaded == false ? (
        <ActivityIndicator size="large" color="#00ff0" />
      ) : (
        <FlatList
          columnWrapperStyle={styles.flatListWrapperStyle}
          data={data.dataAlbumsDetails}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PhotoRender url={item.url} />}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    data: state.AlbumsDetailsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumsDetailsFunction: () => dispatch(fetchAlbumsDetailsFunction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
