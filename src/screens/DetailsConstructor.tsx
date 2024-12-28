import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConstructorStackParamList } from '../navigation/ConstructorStack';
import LottieView from 'lottie-react-native';

type DetailsConstructorProps = NativeStackScreenProps<
  ConstructorStackParamList,
  'DetailsConstructor'
>;

const DetailsConstructor = ({ route }: DetailsConstructorProps) => {
  const { team } = route.params;
  const [loading, setLoading] = useState(true);
  const [careerStats, setCareerStats] = useState({
    totalRounds: 0,
    totalPoints: 0,
    totalWins: 0,
    totalChampionshipWins: 0,
  });
  const [constructorInfo, setConstructorInfo] = useState({
    nationality: '',
    drivers: [] as string[],
  });
  const [color, setColor] = useState<string>('#ffffff');
    
      const teamName = team.Constructor.constructorId;
    
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
    const fetchConstructorStats = async () => {
      try {

        // Fetch career stats
        const careerResponse = await fetch(
          `http://ergast.com/api/f1/constructors/${team.Constructor.constructorId}/constructorStandings.json?limit=1000`
        );
        const careerData = await careerResponse.json();
        const standings = careerData.MRData.StandingsTable.StandingsLists;

        let totalRounds = 0;
        let totalWins = 0;
        let totalPoints = 0;
        let totalChampionshipWins = 0;

        standings.forEach((season: any) => {
          const constructorStanding = season.ConstructorStandings[0];
          totalRounds += parseInt(season.round, 10) || 0;
          totalWins += parseInt(constructorStanding.wins, 10) || 0;
          totalPoints += parseFloat(constructorStanding.points) || 0;
          if (constructorStanding.position === '1') {
            totalChampionshipWins += 1;
          }
        });

        // Fetch constructor information
        const constructorInfoResponse = await fetch(
          `http://ergast.com/api/f1/constructors/${team.Constructor.constructorId}.json`
        );
        const constructorInfoData = await constructorInfoResponse.json();
        const constructorDetails =
          constructorInfoData.MRData.ConstructorTable.Constructors[0];

        setCareerStats({
          totalRounds,
          totalWins,
          totalPoints,
          totalChampionshipWins,
        });

        setConstructorInfo({
          nationality: constructorDetails?.nationality || '',
          drivers: constructorDetails?.drivers || [], // If the API supports driver data here
        });


      } catch (error) {
        console.error('Error fetching constructor stats:', error);
        setLoading(false);
      }finally{
        setLoading(false);
      }
    };

    fetchConstructorStats();
  }, [team.Constructor.constructorId]);

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
        <Text style={[styles.constructorName,{color}]}>{team.Constructor.name}</Text>
        <Text style={styles.nationality}>{constructorInfo.nationality}</Text>
      </View>

      <View style={styles.statsContainer}>
        {/* Current Season Main Stats */}
        <View style={styles.mainStats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Points</Text>
            <Text style={styles.statValue}>{team.points}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Wins</Text>
            <Text style={styles.statValue}>{team.wins}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Position</Text>
            <Text style={styles.statValue}>{team.position}</Text>
          </View>
        </View>

        {/* Career Stats Section */}
        <View style={styles.detailedStats}>
          <Text style={styles.sectionTitle}>Career Statistics</Text>
          <View style={styles.statRow}>
            <Text style={styles.statDetail}>Total Rounds</Text>
            <Text style={styles.statDetail}>{careerStats.totalRounds}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statDetail}>Total Points</Text>
            <Text style={styles.statDetail}>{careerStats.totalPoints}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statDetail}>Total Wins</Text>
            <Text style={styles.statDetail}>{careerStats.totalWins}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statDetail}>Championship Wins</Text>
            <Text style={styles.statDetail}>{careerStats.totalChampionshipWins}</Text>
          </View>
        </View>

        {/* Constructor Info Section */}
        <View style={styles.constructorInfo}>
          <Text style={styles.sectionTitle}>Constructor Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nationality</Text>
            <Text style={styles.infoValue}>{constructorInfo.nationality}</Text>
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
    paddingBottom:65,
  },
  header: {
    padding: 20,
    backgroundColor: '#000',
  },
  constructorName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  nationality: {
    fontSize: 18,
    color: '#ffffff',
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
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    borderRightColor: '#ccc',
    borderRightWidth: 2,
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
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    borderRightColor: '#ccc',
    borderRightWidth: 2,
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
  constructorInfo: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    borderRightColor: '#ccc',
    borderRightWidth: 2,
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

export default DetailsConstructor;