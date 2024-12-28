import React from 'react';

// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Constructors from '../screens/Constructors';
import DetailsConstructor from '../screens/DetailsConstructor';

export type ConstructorStackParamList = {
  Constructors: undefined;
  DetailsConstructor: {team: ConstructorStanding};
};

const Stack = createNativeStackNavigator<ConstructorStackParamList>();


const ConstructorStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Constructors"
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Constructors" component={Constructors} />
      <Stack.Screen
        name="DetailsConstructor"
        component={DetailsConstructor}
        options={{headerShown:true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff', 
        }}/>
    </Stack.Navigator>
  );
};

export default ConstructorStack;
