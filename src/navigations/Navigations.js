import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Photos from '../screens/Photos';
import Albums from '../screens/Albums';

const Tab = createMaterialTopTabNavigator();

export const Navigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Photos"
        component={Photos}
        options={{tabBarLabel: 'Photos'}}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{tabBarLabel: 'Albums'}}
      />
    </Tab.Navigator>
  );
};
 
