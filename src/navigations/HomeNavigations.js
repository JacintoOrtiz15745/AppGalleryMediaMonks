import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigations from './Navigations';
import AlbumDetails from '../screens/AlbumDetails';

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Navigations}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AlbumDetails"
        component={AlbumDetails}
        options={{
          title: 'Album Photos',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#1580f3',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigations;
