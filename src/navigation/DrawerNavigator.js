import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import NavigationScreen from '../screens/NavigationScreen';

const DrawerNavigator = createDrawerNavigator();

export default Drawer = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <DrawerNavigator.Screen
          name="NavigationScreen"
          component={NavigationScreen}
        />
        <DrawerNavigator.Screen name="Logout" component={NavigationScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};
