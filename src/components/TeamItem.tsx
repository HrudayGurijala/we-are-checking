import {StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import React, { PropsWithChildren } from 'react';
import Seperator from './Seperator';


type ConstructorProps = PropsWithChildren<{
    team : ConstructorStanding
}>

const TeamItem = ({team}:ConstructorProps) => {
  return (
    <View style={styles.TeamItemContainer}>
      <View>
        <Text>{team.position}</Text>
      </View>
      <View>
        <View>
          <Text>{team.Constructor.name}</Text>
        </View>
        <View>
          <Text>{team.Constructor.nationality}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{team.points}</Text>
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

export default TeamItem;

const styles = StyleSheet.create({
  TeamItemContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
