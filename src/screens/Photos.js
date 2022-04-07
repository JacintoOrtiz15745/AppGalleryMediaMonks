import React, {useEffect} from 'react';
import {View, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import PhotoRender from '../components/PhotoRender';
import {connect} from 'react-redux';
import {fetchPhotosFunction} from '../store/actions/PhotosActions';

const Photos = ({data, fetchPhotosFunction}) => {
  if (data.isLoaded == false) {
    useEffect(() => {
      fetchPhotosFunction();
    }, []);
  }

  return (
    <View>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      {data.isLoaded == false ? (
        <ActivityIndicator size="large" color="#00ff0" />
      ) : (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          data={data.dataPhotos}
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
    data: state.PhotosReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotosFunction: () => dispatch(fetchPhotosFunction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
