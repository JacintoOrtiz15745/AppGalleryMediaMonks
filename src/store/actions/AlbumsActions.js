import { SET_ALBUMS_STATE } from "../types";

export const albumsState = (dataAlbums) => {
    return{
        type: SET_ALBUMS_STATE,
        payload: dataAlbums,
    }
} 

export const fetchAlbumsFunction = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const dataAlbums = await response.json(); 
        dispatch(albumsState(dataAlbums))
    }
}