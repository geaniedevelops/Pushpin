import React from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import SimpleTabs from './tabs';
import StacksOverTabs from './stacks';

//Screens
import HomeScreen from '../../screens/HomeScreen';
import ToursScreen from '../../screens/ToursScreen';
import MapScreen from '../../screens/MapScreen';
import AccountScreen from '../../screens/AccountScreen';

const Drawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawer: () => ({
        label: 'Home',
      }),
    },
  },

  TourSearch: {
    screen: ToursScreen,
    navigationOptions: {
      drawer: () => ({
        label: 'Tours',
      }),
    }
  },

  Maps: {
    screen: MapScreen,
    navigationOptions: {
      drawer: () => ({
        label: 'Map'
      })
    }
  },

  Account: {
    screen: AccountScreen,
    navigationOptions: {
      drawer: () => ({
        label: 'Account'
      })
  }
}
});

export default Drawer;
