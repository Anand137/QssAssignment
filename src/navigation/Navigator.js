import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import NavigationScreen from '../screens/NavigationScreen';

const MyStack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <MyStack.Screen name="NavigationScreen" component={NavigationScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
