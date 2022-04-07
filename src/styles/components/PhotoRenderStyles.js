import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    mainContainerPhotos: {
        height: 200, 
        width: '49%', 
        marginTop: 3
    }
})