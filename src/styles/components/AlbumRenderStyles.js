import {StyleSheet} from 'react-native';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
  mainContainer: { 
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-around',  
    marginRight: 10,
  },
  albumMainContainer: {      
    height: 100,
    width: 100,
    backgroundColor: '#899596', 
    borderRadius: 25, 
    marginTop: 20,
  }, 
  textAlbum: { 
    color: color.black, 
    fontSize: 15,  
    width: '40%',
    textTransform: 'capitalize'
  },
  iconRight: {
    width: 20,
    height: 20
  },
});
