import {initialStatePhotos} from '../initialState/InitialStatePhotos';
import {SET_PHOTOS_STATE} from '../types';

function PhotosReducer(state = initialStatePhotos, action) {
  switch (action.type) {
    case SET_PHOTOS_STATE: 
      return {
        isLoaded: true,
        dataPhotos: action.payload,
      }; 
    default: 
      return state; 
  }
}

export default PhotosReducer;