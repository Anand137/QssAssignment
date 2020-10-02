import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import Dimension from '../../constants/Dimension';

const CategoriesList = (props) => {
  return (
    <View style={styles.mainItem}>
      <View style={styles.imgCont}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/home.png')}
          style={styles.itemImg}
        />
      </View>

      <Text style={{color: '#999999'}}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    width: Dimension.windowWidth / 5,
    marginHorizontal: 4,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCont: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  itemImg: {
    width: 40,
    height: 40,
  },
});

export default CategoriesList;
