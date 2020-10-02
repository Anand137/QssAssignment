import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ProductList from '../../components/llistitem/ProductList';
import Dimension from '../../constants/Dimension';
const Products = (props) => {
  const renderItem = ({item}) => (
    <ProductList
      name={item.name}
      url={item['image url']}
      rating={item.rating}
      distance={item.distance}
    />
  );

  return (
    <View style={styles.main}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Dimension.windowWidth,
    alignItems: 'center',
  },
});

export default Products;
