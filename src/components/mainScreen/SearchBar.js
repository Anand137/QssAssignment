import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

const SearchBar = (props) => {
  const [searchTxt, setSearchText] = useState('');
  const searchHandler = (text) => {
    props.search(text);
  };

  return (
    <View style={styles.main}>
      <View style={styles.ImgCont}>
        <Image
          style={styles.Img}
          source={require('../../../assets/location.png')}
        />
      </View>
      <TextInput
        style={{paddingBottom: 8}}
        placeholder="Search with name or location"
        onEndEditing={searchHandler(searchTxt)}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    width: '100%',
    overflow: 'hidden',
  },
  Img: {
    width: 15,
    height: 15,
  },
  ImgCont: {
    paddingLeft: 5,
    borderColor: '#000',
    borderEndWidth: 1,
  },
});

export default SearchBar;
