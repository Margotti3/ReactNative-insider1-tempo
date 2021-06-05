import React, { useEffect, useState } from 'react';
import { 
  Text, 
  SafeAreaView, 
  View, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator 
} from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';

export default function Home() {
  const [errorMsg, setErrosMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState({name: 'cloud', color: '#fff'});
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      let response;

      if (status !== 'granted') {
        response = await api.get(`weather?key=${key}&lat=-20.1613247&lon=-44.8859781`);

        setErrosMsg('Permissão negada para acessar localização');
        setLoading(false);
        // return;
      }
      else {
        const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({});
        response = await api.get(`weather?key=${key}&lat=${latitude}&lon=${longitude}`);
      }
      const { results } = response.data;

      setWeather(results);
      setLoading(false);
      
      if (results.currently === 'noite') {
        setBackground(['#0c3741', '#0f2f61']);
      }

      switch (results.condition_slug) {
        case 'clear_day':
          setIcon({ name: 'partly-sunny', color: '#ffb300' });
          break;
        case 'rain':
          setIcon({ name: 'rainy', color: '#fff' });
          break;
        case 'storm':
          setIcon({ name: 'rainy', color: '#fff' });
          break;
      }

      setLoading(false);

    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={{marginBottom: 10}} size="large" color="#1ed6ff" />
        <Text style={{ fontSize: 17, fontStyle: 'italic'}}>Carregando dados ...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weather} icon={icon} />
      <Conditions weather={weather} />
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list} 
        data={weather.forecast} 
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