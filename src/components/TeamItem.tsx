import React, { PropsWithChildren, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import Seperator from './Seperator';

type ConstructorProps = PropsWithChildren<{
  team: ConstructorStanding;
}>;

const TeamItem = ({ team }: ConstructorProps) => {
   const [color, setColor] = useState<string>('#e8002d');
  
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
  return (
    <View style={styles.teamItemContainer}>
      {/* Position */}
      <View style={styles.positionContainer}>
        <Text style={styles.positionText}>{team.position}</Text>
      </View>

      {/* Team Info */}
      <View style={styles.teamInfo}>
        <Text style={[styles.teamName,{color}]}>{team.Constructor.name}</Text>
        <Text style={styles.nationality}>{team.Constructor.nationality}</Text>
      </View>

      {/* Points */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsNumber}>{team.points}</Text>
        <Text style={styles.pointsText}>points</Text>
      </View>

      {/* Arrow Icon */}
      <View style={styles.iconContainer}>
        <Icon name="keyboard-arrow-right" size={24} color="#FFFFFF" />
      </View>

      {/* Separator */}
      <Seperator />
    </View>
  );
};

const styles = StyleSheet.create({
  teamItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 8,
    borderBottomColor: '#666666',
    borderBottomWidth:2,
    borderRightColor:'#666666',
    borderRightWidth:2,
  },
  positionContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  positionText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  nationality: {
    color: '#999999',
    fontSize: 14,
    marginTop: 4,
    fontWeight:700,
  },
  pointsContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  pointsNumber: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  pointsText: {
    color: '#999999',
    fontSize: 12,
    fontWeight:700,
  },
  iconContainer: {
    padding: 4,
  },
});

export default TeamItem;
