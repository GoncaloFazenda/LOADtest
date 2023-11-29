import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import {Button} from 'react-native-paper';
import ApiBase from '../../../services/ApiBase';
import Movie, {Movies} from '../../../services/entities/Movie';
import Card from '../components/Card';
import {TMDB_IMG_BASE_URL} from '../../../utils/utils';

type Props = {
  onPressViewDetails: (movieData: Movie) => void;
};

export default function FeedScreen(props: Props) {
  async function gogo() {
    const resp: Movies = await ApiBase.getInstance().getAllMovies();
    props.onPressViewDetails(resp[0]);
    console.log(resp[0].id);
  }

  return (
    <View style={generalStyles.screen}>
      <Card title={'From the Future'} date={'200-23-234'} imageUri={`${TMDB_IMG_BASE_URL}/5aXG0B3TYTpQsodXzvYCkKQfpB1.jpg`} />
      {/* <Button mode="elevated" onPress={gogo}>
        View Details
      </Button> */}
    </View>
  );
}
