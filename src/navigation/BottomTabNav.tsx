import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import DIcon from '@react-native-vector-icons/material-icons';

// Screens
import Schedule from '../screens/Schedule';
import Feed from '../screens/Feed';
import DriverStack from './DriverStack';
import ConstructorStack from './ConstructorStack';

type BottomTabParamList = {
  Schedule: undefined;
  Feed: undefined;
  DriverStack: undefined;
  ConstructorStack: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
// const {width} = Dimensions.get('window');

const BottomTabNav = () => {

  return (
    <Tab.Navigator
      screenOptions={() => {

        return {
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#666666',
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            marginHorizontal: 55,
            width: 'auto',
            borderRadius: 25,
            height: 65,
            paddingTop: 15,
            backgroundColor: '#1a1a1a',
            borderTopWidth: 0,
          },
        };
      }}
    >
      <Tab.Screen
        name="DriverStack"
        component={DriverStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="racing-helmet" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ConstructorStack"
        component={ConstructorStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="car-sports" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({color}) => (
            <DIcon
              name="calendar-month"
              size={30} color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color}) => (
            <DIcon
              name="newspaper"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     bottom: 10,
//     marginHorizontal:55,
//     width: 'auto',
//     borderRadius: 25,
//     height: 65,
//     paddingTop: 15,
//     backgroundColor: '#1a1a1a',
//     borderTopWidth: 0,
//   },
//   IconStyle:{
//     borderBottomColor:'#ffffff',
//     borderBottomWidth : 2,

//   }

// });

export default BottomTabNav;