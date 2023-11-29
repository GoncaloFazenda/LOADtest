import {View, Text} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-paper';

export default function Tag(props: {text: string}) {
  return <Chip style={{margin: 5}}>{props.text}</Chip>;
}
