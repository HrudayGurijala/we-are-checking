/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '@react-native-vector-icons/material-design-icons';
import DIcon from '@react-native-vector-icons/material-icons';

//screens
import Schedule from '../screens/Schedule';
import Feed from '../screens/Feed';
import DriverStack from './DriverStack';
import ConstructorStack from './ConstructorStack';
// Define the types for the Bottom Tab Navigator
type BottomTabParamList = {
  Schedule: undefined;
  Feed: undefined;
  DriverStack: undefined;
  ConstructorStack:undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DriverStack"
        component={DriverStack}
        options={{
          tabBarLabel: 'DriverStack', // Custom label for the tab
          tabBarIcon: ({focused}) => (
            <Icon
              name="racing-helmet"
              size={30}
              color={focused ? '#000000' : '#f0f0f0'} // Icon color changes based on focus
            />
          ),
        }}
      />
      <Tab.Screen
        name="ConstructorStack"
        component={ConstructorStack}
        options={{
          tabBarLabel: 'ConstructorStack',
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
