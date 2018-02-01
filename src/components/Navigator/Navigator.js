import React, {Component, StyleSheet} from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import TourTabs from './TourTabs';

//Screens
import HomeScreen from '../../screens/HomeScreen';
import ToursScreen from '../../screens/ToursScreen';
import MapScreen from '../../screens/MapScreen';
import AccountScreen from '../../screens/AccountScreen';

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  },
  Tours: {
    screen: TourTabs,
  },
  Account: {
    screen: AccountScreen,
  }
});

export default Navigator;
