import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import Tag from '../components/Tag';
import GenreResponse from '../../../services/responses/GenreResponse';
import {ActivityIndicator, MD2Colors, MD3Colors} from 'react-native-paper';
import Checkbox from '../../general/components/Checkbox';

type Props = {
  overview: string;
  rating: number;
  genres: GenreResponse[];
  errorMessage: string;
  isLoading: boolean;
  setToggleChecked: () => void;
  checked: boolean;
};

export default function MovieDetailsScreen(props: Props) {
  function renderGenres() {
    return props.genres.map(genre => {
      return (
        <View key={genre.id}>
          <Tag text={genre.name} />
        </View>
      );
    });
  }

  return (
    <View style={[generalStyles.screen, styles.mainConteiner]}>
      <Text style={styles.overview}>{props.overview}</Text>
      <Text style={styles.overview}>{props.rating} ⭐</Text>
      <Checkbox checked={props.checked} setToggleChecked={props.setToggleChecked} />
      {!props.isLoading ? (
        <View style={{width: '100%', flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>{renderGenres()}</View>
      ) : (
        <ActivityIndicator animating={true} color={MD2Colors.purple700} size={'large'} />
      )}
      {props.errorMessage && (
        <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 50, color: MD3Colors.error50}}>{props.errorMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainConteiner: {
    backgroundColor: '#22248f',
    borderWidth: 1,
    marginHorizontal: 25,
    marginVertical: 150,
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 25,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 3,
  },
  overview: {
    textAlign: 'justify',
    color: 'white',
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontWeight: '500',
  },
});
