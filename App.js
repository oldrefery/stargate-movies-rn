import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import Header from './src/components/Header';
import ImageCard from './src/components/ImageCard';

const url =
  'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error.message));
  }, []);

  const keyExtractor = item => {
    return `id-${item.id}`;
  };

  const renderItem = ({item}) => {
    return <ImageCard movie={item} />;
  };

  return (
    <View>
      <Header title={'STAR GATE'} />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default App;
