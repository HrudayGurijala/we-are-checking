/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import TeamItem from '../components/TeamItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConstructorStackParamList } from '../navigation/ConstructorStack';

type ConsProps = NativeStackScreenProps<ConstructorStackParamList, 'Constructors'>;

const Constructors = ({ navigation }: ConsProps) => {
  const [standings, setStandings] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          'https://ergast.com/api/f1/current/constructorStandings.json'
        );
        const data = await response.json();
        const constructorStandings: ConstructorStanding[] =
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setStandings(constructorStandings);
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
      <Text style={styles.header}>Constructor Standings</Text>
      <FlatList
        data={standings}
        keyExtractor={item => item.Constructor.constructorId}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('DetailsConstructor', { team: item });
            }}
            style={({ pressed }) => [styles.pressable, pressed && styles.pressedItem]}
          >
            <TeamItem team={item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
    paddingBottom:65,
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
    width: '75%',
    height: '75%',
  },
  pressable: {
    marginBottom: 12,
  },
  pressedItem: {
    opacity: 0.7,
  },
});

export default Constructors;
