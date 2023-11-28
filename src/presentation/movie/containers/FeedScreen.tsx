import {View, Text} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';
import {Button} from 'react-native-paper';

type Props = {
  onPressViewDetails: () => void;
};

export default function FeedScreen(props: Props) {
  return (
    <View style={generalStyles.screen}>
      <Button mode="elevated" onPress={props.onPressViewDetails}>
        View Details
      </Button>
    </View>
  );
}
