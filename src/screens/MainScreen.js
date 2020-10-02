import 'react-native-gesture-handler';
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationScreen from './NavigationScreen';
import Logout from './Logout';
import Home from './Home';
const MainScreen = () => {
  const DrawerNavigator = createDrawerNavigator();
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerIcon: ({size}) => (
              <Image
                source={require('../../assets/home.png')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
        <DrawerNavigator.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            headerShown: false,
            drawerIcon: ({size}) => (
              <Image
                source={require('../../assets/notification.png')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
        <DrawerNavigator.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: false,
            drawerIcon: ({size}) => (
              <Image
                source={require('../../assets/logout.jpg')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
