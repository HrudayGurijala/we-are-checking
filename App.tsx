import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './src/navigation/BottomTabNav';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default App;
