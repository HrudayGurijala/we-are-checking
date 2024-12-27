import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ScheduleProps = PropsWithChildren<{
  gp: Schedule;
}>;

const ScheduleItem = ({ gp }: ScheduleProps) => {
  return (
    <View style={styles.scheduleItemContainer}>
      {/* Round */}
      <View style={styles.roundContainer}>
        <Text style={styles.label}>Round</Text>
        <Text style={styles.value}>{gp.round}</Text>
      </View>

      {/* Race Name */}
      <View style={styles.raceNameContainer}>
        <Text style={styles.raceName}>{gp.raceName}</Text>
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{gp.Circuit.Location.locality}</Text>
      </View>

    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  scheduleItemContainer: {
    borderBottomColor: '#666666',
    borderBottomWidth:2,
    borderRightColor:'#666666',
    borderRightWidth:2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  roundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight:700,
  },
  raceNameContainer: {
    marginBottom: 8,
  },
  raceName: {
    fontSize: 27,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  locationContainer: {
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#AAAAAA',
  },
});
