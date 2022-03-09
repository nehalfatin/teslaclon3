import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import Header from './Components/Header';
import CarsList from './Components/CarsList';

export default function App() {
  return (
    <View style={styles.container}> 
      <Header/>
      <CarsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
