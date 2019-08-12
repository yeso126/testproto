import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/homeScreen'
import DetailsScreen from './screens/detailsScreen'

const MainStack = createStackNavigator(
  {
    home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'home',
    headerLayoutPreset : 'center'
  },
);

const AppContainer = createAppContainer(MainStack)

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

