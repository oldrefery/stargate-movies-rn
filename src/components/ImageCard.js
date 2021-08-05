import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ImageCard = ({movie}) => {
  return (
    <View style={styles.container}>
      <Text>{movie.name}</Text>
      <Text>{movie.info}</Text>
      <Text>{movie.year}</Text>
      <Image source={{uri: movie.image}} style={{width: 200, height: 200}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});

export {ImageCard};
