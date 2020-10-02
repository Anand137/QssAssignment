import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const TouchableImage = (props) => {
  return (
    <TouchableOpacity
      style={styles.menuTouchArea}
      onPress={() => {
        props.func();
      }}>
      <Image style={styles.menuIcon} source={props.url} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuTouchArea: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
});

export default TouchableImage;
