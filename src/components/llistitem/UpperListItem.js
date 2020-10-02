import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import Dimension from '../../constants/Dimension';

const UpperListItem = (props) => {
  return (
    <View style={styles.mainItem}>
      <Image
        source={{uri: props.url}}
        style={styles.ImgStyle}
        resizeMode="cover"
      />
      <View style={styles.DescCont}>
        <Text style={styles.mainTexts}>{props.title}</Text>
        <Text style={styles.mainTexts}>${props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    width: Dimension.windowWidth / 1.5,
    height: 150,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
  },
  ImgStyle: {width: Dimension.windowWidth / 1.5, height: 150},
  DescCont: {
    flexDirection: 'row',
    width: Dimension.windowWidth / 1.5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
  },
  mainTexts: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default UpperListItem;
