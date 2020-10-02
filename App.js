import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Launcher from './src/components/launcher/Launcher';
// import Navigator from './src/navigation/Navigator';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const [launchScreen, setLaunchScreen] = useState(true);
  const launcherHandler = () => {
    setLaunchScreen(false);
  };
  return (
    <>
      {launchScreen ? (
        <View style={styles.MainScreen}>
          <Launcher handler={launcherHandler} />
        </View>
      ) : (
        <MainScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
