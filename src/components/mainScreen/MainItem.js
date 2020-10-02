import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import UpperListItem from '../../components/llistitem/UpperListItem';

const MainItem = (props) => {
  const renderItem = ({item}) => (
    <UpperListItem
      title={item.name}
      url={item['image url']}
      price={item.price}
    />
  );

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainItem;
