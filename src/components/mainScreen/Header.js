import React from 'react';
import {View, StyleSheet} from 'react-native';

import Dimension from '../../constants/Dimension';
import TouchableImage from '../../components/mainAppComponents/TouchableImage';
import SearchBar from './SearchBar';

const Header = (props) => {
  const searchHandler = (text) => {
    props.search(text);
  };
  return (
    <View style={styles.mainHeader}>
      <TouchableImage
        func={props.open}
        url={require('../../../assets/menu.png')}
      />
      <View style={styles.searchBar}>
        <SearchBar search={searchHandler} />
      </View>
      <TouchableImage
        func={props.naviagteFun}
        url={require('../../../assets/notification.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    width: Dimension.windowWidth,
    height: Dimension.windowHeight / 11,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 8,
  },

  searchBar: {
    width: Dimension.windowWidth / 1.4,
    height: 35,
    borderRadius: 15,
    backgroundColor: '#c9c9c9',
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default Header;
