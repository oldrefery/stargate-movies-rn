import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STAR GATE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30D0FE',
    height: 116,
    justifyContent: 'center',
    paddingTop: 71,
    paddingLeft: 22,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'AvenirNext-DemiBold',
  },
});

export default App;
