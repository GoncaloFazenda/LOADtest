import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  checked: boolean;
  setToggleChecked: () => void;
};

const Checkbox = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Mark as Favorite</Text>
      <TouchableOpacity onPress={props.setToggleChecked} style={styles.checkBox}>
        <View style={[styles.box, props.checked && styles.checkedBox]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkBox: {
    marginLeft: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  checkedBox: {
    backgroundColor: 'green',
  },
});

export default Checkbox;
