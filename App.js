import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigations from './src/navigations/HomeNavigations';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigations/>
    </NavigationContainer>
  );
};

export default App;
