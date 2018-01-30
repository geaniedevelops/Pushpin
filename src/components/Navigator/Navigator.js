import React, {Component, StyleSheet} from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

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
    screen: ToursScreen,
  },
  Account: {
    screen: AccountScreen,
  }
});

export default Navigator;

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//   };
//
//   render() {
//     return (
//       <HomeScreen/>
//     );
//   }
// }
//
// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//   };
//
//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"/>
//     );
//   }
// }
