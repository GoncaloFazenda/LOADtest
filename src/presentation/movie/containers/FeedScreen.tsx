import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import {Button} from 'react-native-paper';
import ApiBase from '../../../services/ApiBase';
import Movie, {Movies} from '../../../services/entities/Movie';
import Card from '../components/Card';
import {TMDB_IMG_BASE_URL} from '../../../utils/utils';

type Props = {
  movies: Movies;
  onPressViewDetails: (movieData: Movie) => void;
};

export default function FeedScreen(props: Props) {
  return (
    <View style={generalStyles.screen}>
      <FlatList
        data={props.movies}
        renderItem={({item}: {item: Movie}) => {
          return (
            <Card
              key={item.id}
              onPress={() => props.onPressViewDetails(item)}
              title={item.title}
              date={item.release_date}
              imageUri={`${TMDB_IMG_BASE_URL}${item.poster_path}`}
            />
          );
        }}
        keyExtractor={(item: Movie) => item.id.toString()}
        style={styles.scrollableContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      {/* <Button mode="elevated" onPress={gogo}>
        View Details
      </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollableContainer: {
    paddingLeft: 30,
  },
});
