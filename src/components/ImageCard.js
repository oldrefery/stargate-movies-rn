import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {width} from '../helpers/Dimensions';

const ImageCard = ({movie}) => {
  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <Image source={{uri: movie.image}} style={styles.image} />
      </View>
      <Text style={styles.title}>
        {movie.name} ({movie.year})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'AvenirNext-DemiBold',
    alignSelf: 'center',
    textAlign: 'center',
    width: width / 2.4,
  },
  image: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10,
  },
  poster: {
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    elevation: 3,
  },
  container: {
    width: width / 2.1,
    alignItems: 'center',
    marginTop: 30,
  },
});

export {ImageCard};
