import {initialStateAlbumsDetails} from '../initialState/initialStateAlbumsDetails';
import {SET_ALBUMS_DETAILS_STATE} from '../types';

function AlbumsDetailsReducer(state = initialStateAlbumsDetails, action) {
  switch (action.type) {
    case SET_ALBUMS_DETAILS_STATE:
      return {
        isLoaded: true,
        dataAlbumsDetails: action.payload,
      };
    default:
      return state;
  }
}

export default AlbumsDetailsReducer;
