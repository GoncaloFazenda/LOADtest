import {View, Text} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import {Button} from 'react-native-paper';
import ApiBase from '../../../services/ApiBase';
import {Movies} from '../../../services/entities/Movie';

type Props = {
  onPressViewDetails: () => void;
};

export default function FeedScreen(props: Props) {
  async function gogo() {
    const resp: Movies = await ApiBase.getInstance().getAllMovies();
    console.log(resp[0].title);
  }

  return (
    <View style={generalStyles.screen}>
      <Button mode="elevated" onPress={gogo}>
        View Details
      </Button>
    </View>
  );
}
