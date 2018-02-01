import React, {Component, StyleSheet} from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

//Screens
import HomeScreen from '../Screens/Home/HomeScreen';
import TourScreen from '../Screens/Tours/TourScreen';
import MapScreen from '../Screens/Maps/MapScreen';
import AccountScreen from '../Screens/Account/AccountScreen';

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  },
  Tours: {
    screen: TourScreen,
  },
  Account: {
    screen: AccountScreen,
  }
});

export default Navigator;
