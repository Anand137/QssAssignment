import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import CategoriesList from '../../components/llistitem/CategoriesList';

const Categories = () => {
  const data = [
    {name: 'Food', id: 1},
    {name: 'Cloths', id: 2},
    {name: 'Travel', id: 3},
    {name: 'Beauty', id: 4},
    {name: 'Gifts', id: 5},
  ];

  const renderItem = ({item}) => <CategoriesList name={item.name} />;

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
