import {SET_ALBUMS_DETAILS_STATE} from '../types';

export const albumsDetailsState = dataAlbumsDetails => {
  return {
    type: SET_ALBUMS_DETAILS_STATE,
    payload: dataAlbumsDetails,
  };
};

export const fetchAlbumsDetailsFunction = idToString => {
  return async dispatch => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/albums/' + idToString + '/photos',
    );
    const dataAlbumsDetails = await response.json();
    dispatch(albumsDetailsState(dataAlbumsDetails));
  };
};
