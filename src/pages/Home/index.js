import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const list = [
  {
    "date": "04/06",
    "weekday": "Sex",
    "max": 25,
    "min": 15,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "05/06",
    "weekday": "Sáb",
    "max": 25,
    "min": 13,
    "description": "Ensolarado",
    "condition": "clear_day"
  },
  {
    "date": "06/06",
    "weekday": "Dom",
    "max": 25,
    "min": 13,
    "description": "Tempo nublado",
    "condition": "cloud"
  },
  {
    "date": "07/06",
    "weekday": "Seg",
    "max": 23,
    "min": 13,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "08/06",
    "weekday": "Ter",
    "max": 21,
    "min": 15,
    "description": "Alguns chuviscos",
    "condition": "rain"
  },
  {
    "date": "09/06",
    "weekday": "Qua",
    "max": 21,
    "min": 15,
    "description": "Alguns chuviscos",
    "condition": "rain"
  },
  {
    "date": "10/06",
    "weekday": "Qui",
    "max": 18,
    "min": 12,
    "description": "Tempo nublado",
    "condition": "cloud"
  },
  {
    "date": "11/06",
    "weekday": "Sex",
    "max": 16,
    "min": 12,
    "description": "Trovoadas dispersas",
    "condition": "storm"
  },
  {
    "date": "12/06",
    "weekday": "Sáb",
    "max": 16,
    "min": 11,
    "description": "Tempo nublado",
    "condition": "cloud"
  },
  {
    "date": "13/06",
    "weekday": "Dom",
    "max": 20,
    "min": 12,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  }
];

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList 
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list} 
        data={list} 
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  }
})