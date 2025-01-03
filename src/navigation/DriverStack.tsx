import React from 'react';

// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Drivers from '../screens/Drivers';
import DetailsDriver from '../screens/DetailsDriver';

export type DriverStackParamList = {
  Drivers: undefined;
  DetailsDriver: {driver: DriverStanding};
};

const Stack = createNativeStackNavigator<DriverStackParamList>();


const DriverStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Drivers"
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Drivers" component={Drivers} />
      <Stack.Screen
        name="DetailsDriver"
        component={DetailsDriver}
        options={{
          headerShown:true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff', 
        }}
      />
    </Stack.Navigator>
  );
};

export default DriverStack;
