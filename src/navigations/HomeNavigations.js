import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Navigations  from './Navigations';
import AlbumDetails from '../screens/AlbumDetails';

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Navigations}/>
        <Stack.Screen name="AlbumDetails" component={AlbumDetails}/>
    </Stack.Navigator>
  )
}

export default HomeNavigations