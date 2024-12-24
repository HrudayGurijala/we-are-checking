/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { ConstructorStackParamList } from '../navigation/ConstructorStack';

type DetailsConstructorProps = NativeStackScreenProps<
  ConstructorStackParamList,
  'DetailsConstructor'
>;

const DetailsConstructor = ({route}: DetailsConstructorProps) => {
  const {team} = route.params;

  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {team.Constructor.name}
      </Text>
    </View>
  );
};

export default DetailsConstructor;
