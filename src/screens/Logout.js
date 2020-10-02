import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logout = () => {
  return (
    <View style={styles.main}>
      <Text>Thanks For using Qss demo app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logout;
