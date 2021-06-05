import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }) {

  return (
    <LinearGradient 
      style={styles.header} 
      colors={background}
    >
      <Text style={styles.date}>{weather.date}</Text>
      <Text style={styles.city}>{weather.city_name}</Text>
      <Ionicons name={icon.name} size={150} color={icon.color} />
      <Text style={styles.temp}>{weather.temp}°</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  date: {
    color: '#fff',
    fontSize: 17
  },
  city: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
  }
})