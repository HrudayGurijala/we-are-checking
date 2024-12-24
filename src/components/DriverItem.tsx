import {StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import React, { PropsWithChildren } from 'react';
import Seperator from './Seperator';


type DriverProps = PropsWithChildren<{
    driver : DriverStanding
}>

const DriverItem = ({driver}:DriverProps) => {
  return (
    <View style={styles.DriverItemContainer}>
      <View>
        <Text>{driver.position}</Text>
      </View>
      <View>
        <View>
          <Text>{driver.Driver.givenName}</Text>
        </View>
        <View>
          <Text>{driver.Driver.familyName}</Text>
        </View>
        <View>
          <Text>{driver.Constructors[0].name}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{driver.points}</Text>
        </View>
        <View>
          <Text>points</Text>
        </View>
      </View>
      <View>
        <Icon name="keyboard-arrow-right" size={30} color="#f0f0f0" />
      </View>
      <Seperator/>
    </View>
  );
};

export default DriverItem;

const styles = StyleSheet.create({
  DriverItemContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
