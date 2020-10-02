import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Launcher = (props) => {
  const [value] = useState(new Animated.Value(0));
  const Timer = 3000;
  useEffect(() => {
    setTimeout(() => {
      props.handler();
    }, Timer);
  });

  Animated.timing(value, {
    toValue: 1,
    duration: Timer,
    useNativeDriver: true,
  }).start();
  return (
    <View>
      <Animated.Image
        style={{transform: [{scale: value}]}}
        source={require('../../../assets/logo.png')}
      />
      <Text>Qss Technosoft pvt Ltd</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Launcher;
