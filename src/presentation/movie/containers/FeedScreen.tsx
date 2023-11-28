import {View, Text, Button} from 'react-native';
import React from 'react';
import generalStyles from '../../general/generalStyles';

type Props = {
  onPressViewDetails: () => void;
};

export default function FeedScreen(props: Props) {
  return (
    <View style={generalStyles.screen}>
      <Button title="View Details" onPress={props.onPressViewDetails} />
    </View>
  );
}
