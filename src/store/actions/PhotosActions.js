import { SET_PHOTOS_STATE } from '../types';

export const photosState = (dataPhotos) => {
    return{
        type: SET_PHOTOS_STATE,
        payload: dataPhotos,
    }
} 

export const fetchPhotosFunction = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dataPhotos = await response.json(); 
        dispatch(photosState(dataPhotos))
    }
}