import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import {Rating} from 'react-native-ratings';

import Dimension from '../../constants/Dimension';
const ProductList = (props) => {
  return (
    <View style={styles.mainItem}>
      <Image source={{uri: props.url}} style={styles.imgStyle} />
      <View style={styles.mainInfoCont}>
        <Text style={styles.nameTxt}>{props.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/location.png')}
            style={{
              width: 15,
              height: 15,
            }}
          />
          <Text style={styles.distanceTxt}>{props.distance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    alignSelf: 'center',
    width: Dimension.windowWidth / 2.3,
    height: Dimension.windowHeight / 3.2,
    margin: 10,
    overflow: 'hidden',
    elevation: 1,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  imgStyle: {
    width: Dimension.windowWidth / 2.3,
    height: Dimension.windowHeight / 4.3,
    alignSelf: 'center',
  },
  mainInfoCont: {paddingStart: 5},
  nameTxt: {
    fontSize: 18,
    color: '#000000',
  },
  distanceTxt: {
    color: '#999999',
  },
});

export default ProductList;

//  <Text>{props.name}</Text>
//   <Text>{props.url}</Text>
//   <Text>{props.distance}</Text>
//   <Text>{props.rating}</Text>
