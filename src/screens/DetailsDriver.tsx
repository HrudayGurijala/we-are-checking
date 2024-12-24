/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DriverStackParamList} from '../navigation/DriverStack';

type DetailsDriverProps = NativeStackScreenProps<
  DriverStackParamList,
  'DetailsDriver'
>;

const DetailsDriver = ({route}: DetailsDriverProps) => {
  const {driver} = route.params;

  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {driver.Driver.givenName} {driver.Driver.familyName}
      </Text>
      <Text>Team: {driver.Constructors[0].name}</Text>
      <Text>Points: {driver.points}</Text>
      <Text>Position: {driver.position}</Text>
    </View>
  );
};

export default DetailsDriver;
