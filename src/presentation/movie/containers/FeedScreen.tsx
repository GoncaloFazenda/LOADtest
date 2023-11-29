import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import {ActivityIndicator, Button, MD2Colors, MD3Colors} from 'react-native-paper';
import ApiBase from '../../../services/ApiBase';
import Movie, {Movies} from '../../../services/entities/Movie';
import Card from '../components/Card';
import {TMDB_IMG_BASE_URL} from '../../../utils/utils';

type Props = {
  movies: Movies;
  onPressViewDetails: (movieData: Movie) => void;
  errorMessage: string;
  isLoading: boolean;
};

export default function FeedScreen(props: Props) {
  return (
    <View style={[generalStyles.screen, {justifyContent: 'space-evenly'}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chose your Filme</Text>
      </View>
      {!props.isLoading ? (
        <View style={{flexDirection: 'row'}}>
          {props.movies.length > 0 && !props.errorMessage && (
            <FlatList
              data={props.movies}
              renderItem={({item: movie}: {item: Movie}) => {
                return (
                  <Card
                    onPress={() => props.onPressViewDetails(movie)}
                    title={movie.title}
                    date={movie.release_date}
                    imageUri={`${TMDB_IMG_BASE_URL}${movie.poster_path}`}
                  />
                );
              }}
              keyExtractor={(item: Movie) => item.id.toString()}
              style={styles.scrollableContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        <ActivityIndicator animating={true} color={MD2Colors.purple700} size={'large'} />
      )}
      {props.errorMessage && !props.movies.length && (
        <Text style={{fontWeight: 'bold', fontSize: 18, color: MD3Colors.error50}}>{props.errorMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollableContainer: {
    alignSelf: 'center',
    paddingLeft: 15,
    marginBottom: 140,
  },
  titleContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#191b6b',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
