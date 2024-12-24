import {StyleSheet, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.line} />;
};

export default Seperator;

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: 'red',
    margin: 1,
  },
});
