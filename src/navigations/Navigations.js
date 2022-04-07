import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Photos from '../screens/Photos';
import Albums from '../screens/Albums';

const Tab = createMaterialTopTabNavigator();

const Navigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1580f3',
        tabBarInactiveTintColor: '#141414',
        tabBarLabelStyle: {
          fontSize: 22,
          textTransform: 'none',
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Photos"
        component={Photos}
        options={{tabBarLabel: 'Photos', tabBarIndicatorStyle: {opacity: 0}}}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{tabBarLabel: 'Albums', tabBarIndicatorStyle: {opacity: 0}}}
      />
    </Tab.Navigator>
  );
};

export default Navigations;
