import {combineReducers} from 'redux';
import PhotosReducer from './PhotosReducer';
import AlbumsReducer from './AlbumsReducer';
import AlbumsDetailsReducer from './AlbumsDetailsReducer';

const rootReducer = combineReducers({
  PhotosReducer,
  AlbumsReducer,
  AlbumsDetailsReducer,
});

export default rootReducer;
