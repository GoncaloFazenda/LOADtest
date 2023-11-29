import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {TMDB_IMG_BASE_URL} from '../../../utils/utils';

type Props = {
  date: string;
  title: string;
  imageUri: string;
  onPress: () => void;
};

export default function Card(props: Props) {
  const [isPressed, setIsPressed] = useState<Boolean>(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableHighlight
      onPress={props.onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, isPressed && {...styles.container, opacity: 0.9}]}>
      <>
        <View style={styles.releaseDateContainer}>
          <Text style={styles.releaseDate}>{props.date}</Text>
        </View>
        <Image source={{uri: props.imageUri}} style={styles.poster} resizeMode="stretch" />
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {props.title}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191b6b',
    borderRadius: 15,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 3,
    width: 200,
    height: 320,
    marginHorizontal: 12,
  },
  poster: {
    height: 260,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  releaseDateContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
    right: 0,
    zIndex: 1,
    padding: 5,
  },
  releaseDate: {
    paddingLeft: 8,
    paddingRight: 6,
    paddingVertical: 0,
    fontSize: 11,
    fontWeight: 'bold',
  },
});
