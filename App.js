/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  BleManager
} from 'react-native-ble-plx';
import {
  View,
  Text
} from 'react-native';

import Bluetooth from './Bluetooth';

const App: () => React$Node = () => {
  return ( <
    View >
    <
    Bluetooth / >
    <
    /View>
  );

};

export default App;
