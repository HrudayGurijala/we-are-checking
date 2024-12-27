/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import ScheduleItem from '../components/ScheduleItem';

const Schedule: React.FC = () => {
  const [grandPrix, setGrandPrix] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('https://ergast.com/api/f1/current.json');
        const data = await response.json();
        const schedule: Schedule[] = data.MRData.RaceTable.Races;
        setGrandPrix(schedule);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <LottieView
          source={require('../assets/Animation - 1735015379125.json')}
          style={styles.loader}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>F1 Race Schedule</Text>
      <FlatList
        data={grandPrix}
        keyExtractor={item => item.Circuit.circuitId}
        renderItem={({ item }) => <ScheduleItem gp={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  loader: {
    width: '100%',
    height: '100%',
  },
});
