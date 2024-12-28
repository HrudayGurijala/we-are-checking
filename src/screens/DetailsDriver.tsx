import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LottieView from 'lottie-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DriverStackParamList} from '../navigation/DriverStack';

type DetailsDriverProps = NativeStackScreenProps<
  DriverStackParamList,
  'DetailsDriver'
>;

const DetailsDriver = ({route}: DetailsDriverProps) => {
  const {driver} = route.params;
  const [loading, setLoading] = useState(true);
  const [driverStats, setDriverStats] = useState({
    totalRounds: 0,
    totalWins: 0,
    totalPoints: 0,
    positionOneCount: 0,
  });
    const [color, setColor] = useState<string>('#e8002d');
  
  const teamName = driver.Constructors[0].constructorId;
  
    useEffect(() => {
      const teams: string[] = [
        'mclaren',
        'ferrari',
        'red_bull',
        'mercedes',
        'aston_martin',
        'alpine',
        'haas',
        'rb',
        'williams',
        'sauber',
      ];
      const colors: string[] = [
        '#ff8000',
        '#e8002d',
        '#3671c6',
        '#27f4d2',
        '#229971',
        '#ff87bc',
        '#b6babd',
        '#6692ff',
        '#64c4ff',
        '#52e252',
      ];
      if (teamName) {
        const teamIndex = teams.indexOf(teamName); 
        // console.log(teamIndex);
        // Find the index of the team
        if (teamIndex !== -1) {
          setColor(colors[teamIndex]); // Set color based on the matching index
        } else {
          setColor('#e8002d'); 
        }
      }
    }, [teamName]);

  useEffect(() => {
    const fetchDriverStats = async () => {
      try {
        const response = await fetch(
          `http://ergast.com/api/f1/drivers/${driver.Driver.driverId}/driverStandings.json`
        );
        const data = await response.json();

        const standings = data.MRData.StandingsTable.StandingsLists;

        // Calculate stats
        let totalRounds = 0;
        let totalWins = 0;
        let totalPoints = 0;
        let positionOneCount = 0;

        standings.forEach((season: any) => {
          const driverStanding = season.DriverStandings[0];
          totalRounds += parseInt(season.round, 10) || 0;
          totalWins += parseInt(driverStanding.wins, 10) || 0;
          totalPoints += parseFloat(driverStanding.points) || 0;
          if (driverStanding.position === '1') {
            positionOneCount += 1;
          }
        });

        setDriverStats({totalRounds, totalWins, totalPoints, positionOneCount});
      } catch (error) {
        console.error('Error fetching driver stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDriverStats();
  }, [driver.Driver.driverId]);

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.driverName}>
          {driver.Driver.givenName} {driver.Driver.familyName}
        </Text>
        <Text style={[styles.teamName,{color}]}>{driver.Constructors[0].name}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.mainStats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Position</Text>
            <Text style={styles.statValue}>{driver.position}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Points</Text>
            <Text style={styles.statValue}>{driver.points}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Wins</Text>
            <Text style={styles.statValue}>{driver.wins}</Text>
          </View>
        </View>

        <View style={styles.detailedStats}>
          <Text style={styles.sectionTitle}>Career Statistics</Text>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Total Rounds</Text>
            <Text style={styles.statDetail}>{driverStats.totalRounds}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Total Points</Text>
            <Text style={styles.statDetail}>{driverStats.totalPoints}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Total Wins</Text>
            <Text style={styles.statDetail}>{driverStats.totalWins}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Championships</Text>
            <Text style={styles.statDetail}>{driverStats.positionOneCount}</Text>
          </View>
        </View>

        <View style={styles.driverInfo}>
          <Text style={styles.sectionTitle}>Driver Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Code</Text>
            <Text style={styles.infoValue}>{driver.Driver.code}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Number</Text>
            <Text style={styles.infoValue}>{driver.Driver.permanentNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nationality</Text>
            <Text style={styles.infoValue}>{driver.Driver.nationality}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>{driver.Driver.dateOfBirth}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom:165,
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  driverName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 18,
    color: '#ff0000',
    marginBottom: 16,
  },
  statsContainer: {
    padding: 20,
  },
  mainStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
    borderRightColor:'#ccc',
    borderRightWidth:2,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailedStats: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
    borderRightColor:'#ccc',
    borderRightWidth:2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statDetail: {
    fontSize: 16,
    color: '#fff',
  },
  driverInfo: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
    borderRightColor:'#ccc',
    borderRightWidth:2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loader: {
    width: '75%',
    height: '75%',
  },
});

export default DetailsDriver;