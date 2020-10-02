import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import Dimension from '../constants/Dimension';
import Header from '../components/mainScreen/Header';
import MainItem from '../components/mainScreen/MainItem';
import Categories from '../components/mainScreen/Categories';
import Products from '../components/mainScreen/Products';
import ProductsSearch from '../components/mainScreen/ProductSearch';

const MainScreen = ({navigation}) => {
  const [ShowSearchArea, setShowSearchArea] = useState(false);
  const SearchData = [];
  const DrawerOpenHandler = () => {
    navigation.openDrawer();
  };
  const DrawerCloseHandler = () => {
    navigation.openDrawer();
  };

  const upperListData = [
    {
      name: 'Flight',
      price: 1900,
      'image url': 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    },
    {
      name: 'Tour',
      price: 100,
      'image url':
        'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    },
    {
      name: 'Food',
      price: 65,
      'image url': 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
    },
  ];

  const Productsdata = [
    {
      'image url': 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Flight',
      distance: '2km away',
      rating: 4,
    },
    {
      'image url':
        'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      name: 'Tour',
      distance: '1km away',
      rating: 4,
    },
    {
      'image url': 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
      name: 'Food',
      distance: '5km away',
      rating: 4,
    },
  ];

  const searchHandler = (text) => {
    console.log('main Screen', text);
    if (text === '') {
      setShowSearchArea(false);
    } else {
      Productsdata.forEach((element) => {
        if (element.name == text) {
          setShowSearchArea(true);
          SearchData.push(element);
        }
      });
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.main}>
          <Header
            open={DrawerOpenHandler}
            close={DrawerCloseHandler}
            search={searchHandler}
            naviagteFun={() => {
              navigation.navigate('NavigationScreen');
            }}
          />
          {ShowSearchArea ? (
            <ProductsSearch data={SearchData} />
          ) : (
            <View>
              <View style={styles.upperItemsCont}>
                <MainItem data={upperListData} />
              </View>
              <View style={styles.categoriesItemsCont}>
                <Categories />
              </View>
              <Products data={Productsdata} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  upperItemsCont: {
    width: Dimension.windowWidth,
    height:
      Dimension.windowWidth > 485
        ? Dimension.windowHeight / 1.9
        : Dimension.windowHeight / 4,
    justifyContent: 'center',
  },
  categoriesItemsCont: {
    width: Dimension.windowWidth,
    height:
      Dimension.windowWidth > 485
        ? Dimension.windowHeight / 4
        : Dimension.windowHeight / 8,
    justifyContent: 'center',
  },
});

export default MainScreen;
