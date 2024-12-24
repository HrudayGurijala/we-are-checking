/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';
import TeamItem from '../components/TeamItem';


const Constructors: React.FC = () => {
  const [standings, setStandings] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          'https://ergast.com/api/f1/current/constructorStandings.json',
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
          style={{width: '100%', height: '100%',backgroundColor:'#000000'}}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>F1 team' Standings</Text>
      <FlatList
        data={standings}
        keyExtractor={item => item.position}
        renderItem={({item}) => <TeamItem team={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 16,
    color: '#555',
  },
  team: {
    fontSize: 16,
    color: '#888',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Constructors;
