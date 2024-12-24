/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import LottieView from 'lottie-react-native';
import ScheduleItem from '../components/ScheduleItem';

const Schedule: React.FC = () => {
  const [grandPrix, setgrandPrix] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('https://ergast.com/api/f1/current.json');
        const data = await response.json();
        // console.log(data);
        const schedule: Schedule[] = data.MRData.RaceTable.Races;
        setgrandPrix(schedule);
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
          style={{width: '100%', height: '100%', backgroundColor: '#000000'}}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Schedule</Text>
      <FlatList
        data={grandPrix}
        keyExtractor={item => item.Circuit.circuitId}
        renderItem={({item}) => <ScheduleItem gp={item} />}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
