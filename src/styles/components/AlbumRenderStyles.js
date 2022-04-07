import {StyleSheet} from 'react-native';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
  albumMainContainer: {  
    flexDirection: 'column-reverse',     
    height: 200,
    width: '49%',
    backgroundColor: '#899596',
    marginTop: 3,
  }, 
  textAlbum: { 
    color: color.white, 
    fontSize: 15, 
    marginHorizontal: 10,
    marginBottom: 10,   
  },
});
