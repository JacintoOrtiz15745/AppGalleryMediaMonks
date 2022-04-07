import { initialStateAlbums } from '../initialState/initialStateAlbums'; 
import {SET_ALBUMS_STATE} from '../types';

function AlbumsReducer(state = initialStateAlbums, action) {
  switch (action.type) {
    case SET_ALBUMS_STATE: 
      return {
        isLoaded: true,
        dataAlbums: action.payload,
      }; 
    default: 
      return state; 
  }
}

export default AlbumsReducer;