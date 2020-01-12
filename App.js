/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import {
  createBottomTabNavigator
} from 'react-navigation-tabs'

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import BluetoothScreen from './src/screens/BluetoothScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Bluetooth: {
      screen: BluetoothScreen}
    //   ,
    // Settings: {
    //   screen: SettingsScreen
    // }
  }
);

const InitialNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {

  render() {
    return (
    <AppContainer />
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
