import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ScheduleProps = PropsWithChildren<{
  gp: Schedule;
}>;
const ScheduleItem = ({ gp }: ScheduleProps) => {
  return (
    <View style={styles.scheduleItemContainer}>
      <View style={styles.leftContent}>
        {/* Round */}
        <View style={styles.roundContainer}>
          <Text style={styles.label}>Round</Text>
          <Text style={styles.value}>{gp.round} </Text>
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
      
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{gp.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleItemContainer: {
    borderBottomColor: '#666666',
    borderBottomWidth: 2,
    borderRightColor: '#666666',
    borderRightWidth: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  roundContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 23,
    color: '#CCCCCC',
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  raceNameContainer: {
    marginBottom: 8,
  },
  raceName: {
    fontSize: 23,
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
  dateContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  date: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
export default ScheduleItem;