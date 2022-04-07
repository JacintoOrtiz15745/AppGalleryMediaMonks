import {StyleSheet} from 'react-native';
import {color} from '../../utils/Constants'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white
  },
  flatListWrapperStyle: {
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30, 
    alignSelf: 'center', 
    marginTop: 10,
    marginBottom: 10,
  }
});
