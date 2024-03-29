import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ImageCard, Header} from './src/components';
import {urlData} from './src/const/fetchAPI';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(urlData)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error.message));
  }, []);

  const keyExtractor = item => `id-${item.id}`;

  const renderItem = ({item}) => <ImageCard movie={item} />;

  return (
    <View>
      <Header title={'STAR GATE'} />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 150,
  },
  columnList: {
    justifyContent: 'space-evenly',
  },
});

export default App;
