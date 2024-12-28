import {StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import React, {PropsWithChildren, useEffect, useState} from 'react';

type DriverProps = PropsWithChildren<{
  driver: DriverStanding;
}>;

const DriverItem = ({driver}: DriverProps) => {
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
  return (
    <View style={styles.driverItemContainer}>
      {/* Position Circle */}
      <View style={styles.positionContainer}>
        <Text style={styles.positionText}>{driver.position}</Text>
      </View>

      {/* Driver Info */}
      <View style={styles.driverInfo}>
        <View style={styles.nameContainer}>
          <Text style={styles.givenName}>{driver.Driver.givenName}</Text>
          <Text style={styles.familyName}>{driver.Driver.familyName}</Text>
          <Text style={[styles.constructorName, {color}]}>
            {driver.Constructors[0].name}
          </Text>
        </View>
      </View>

      {/* Points */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsNumber}>{driver.points}</Text>
        <Text style={styles.pointsText}>points</Text>
      </View>

      {/* Arrow Icon */}
      <View style={styles.iconContainer}>
        <Icon name="keyboard-arrow-right" size={24} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default DriverItem;

const styles = StyleSheet.create({
  driverItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginBottom: 8,
    borderBottomColor: '#666666',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderRightColor: '#666666',
  },
  positionContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  driverInfo: {
    flex: 1,
    marginLeft: 16,
  },
  nameContainer: {
    justifyContent: 'center',
  },
  givenName: {
    color: '#999999',
    fontSize: 18,
    fontFamily: 'AfacadFLux-Medium',
    fontWeight: 700,
  },
  familyName: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'AfacadFLux-Medium',
  },
  constructorName: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 400,
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
    marginTop: 2,
    fontWeight: 700,
  },
  iconContainer: {
    padding: 4,
  },
});
