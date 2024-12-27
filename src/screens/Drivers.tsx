/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable, StatusBar, SafeAreaView} from 'react-native';
import DriverItem from '../components/DriverItem';
import LottieView from 'lottie-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DriverStackParamList} from '../navigation/DriverStack';

type DriverProps = NativeStackScreenProps<DriverStackParamList, 'Drivers'>;

const Drivers = ({navigation}: DriverProps) => {
  const [standings, setStandings] = useState<DriverStanding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          'https://ergast.com/api/f1/current/driverStandings.json',
        );
        const data = await response.json();
        const driverStandings: DriverStanding[] =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setStandings(driverStandings);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <View >
        <LottieView
          source={require('../assets/Animation - 1735015379125.json')}
          style={{width: '100%', height: '100%', backgroundColor: '#000000'}}
          autoPlay
          loop
        />
      </View>
    );
  }
  //<DriverItem driver={item} />
  return (
    <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <Text style={styles.header}>Drivers' Standings</Text>
      <FlatList
        data={standings}
        keyExtractor={item => item.Driver.driverId}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('DetailsDriver', { driver: item });
            }}
            style={({pressed}) => [
              styles.pressable,
              pressed && styles.pressedItem
            ]}
          >
            <DriverItem driver={item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </SafeAreaView>
);
};
export default Drivers;

const styles = StyleSheet.create({
safeArea: {
  flex: 1,
  backgroundColor: '#000000',
},
container: {
  flex: 1,
  padding: 16,
  paddingBottom:0,
  backgroundColor: '#000000',
},
header: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
  color: '#FFFFFF',
},
pressable: {
  marginBottom: 8,
},
pressedItem: {
  opacity: 0.7,
},
});
