import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Seperator from './Seperator';

type ScheduleProps = PropsWithChildren<{
  gp: Schedule;
}>;

const ScheduleItem = ({gp}: ScheduleProps) => {
  return (
    <View style={styles.ScheduleItemContainer}>
      <Text>ScheduleItem</Text>
      <View>
        <View>
          <Text>Round</Text>
        </View>
        <View>
          <Text>{gp.round}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{gp.raceName}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{gp.Circuit.Location.locality}</Text>
        </View>
      </View>
      <Seperator/>
    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  ScheduleItemContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
