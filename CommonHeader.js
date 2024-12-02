// src/components/CommonHeader.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommonHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ea',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CommonHeader;
