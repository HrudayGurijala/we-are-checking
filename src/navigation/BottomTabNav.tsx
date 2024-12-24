import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '@react-native-vector-icons/material-design-icons';
import DIcon from '@react-native-vector-icons/material-icons';

//screens
import Drivers from '../screens/Drivers';
import Constructors from '../screens/Constructors';
import Schedule from '../screens/Schedule';
import Feed from '../screens/Feed';
// Define the types for the Bottom Tab Navigator
type BottomTabParamList = {
  Drivers: undefined;
  Constructors: undefined;
  Schedule: undefined;
  Feed: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Drivers"
        component={Drivers}
        options={{
          tabBarLabel: 'Drivers',
          tabBarIcon: ({focused}) => (
            <Icon
              name="racing-helmet"
              size={30}
              color={focused ? '#000000' : '#f0f0f0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Constructors"
        component={Constructors}
        options={{
          tabBarLabel: 'Constructors',
          tabBarIcon: ({focused}) => (
            <DIcon
              name="engineering"
              size={30}
              color={focused ? '#000000' : '#f0f0f0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({focused}) => (
            <DIcon
              name="calendar-month"
              size={30}
              color={focused ? '#000000' : '#f0f0f0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused}) => (
            <DIcon
              name="newspaper"
              size={30}
              color={focused ? '#000000' : '#f0f0f0'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
