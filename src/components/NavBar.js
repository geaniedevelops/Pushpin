import React, {Component, View, Text, Button } from 'react';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go Home"
      />
  </View>
);

const MapScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Map</Text>
      <Button
        onPress={() => navigation.navigate('Map')}
        title="View Map"
      />
  </View>
);

const ToursScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Tours</Text>
      <Button
        onPress={() => navigation.navigate('Tours')}
        title="Find Tour"
      />
  </View>
);

const AccountScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Account</Text>
      <Button
        onPress={() => navigation.navigate('Account')}
        title="My Account"
      />
  </View>
);



const NavBar = StackNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
      headerTitle: 'Home',
    },
    },
  Map: {
      screen: MapScreen,
      navigationOptions: {
      headerTitle: 'Map',
    },
    },
  Tours: {
    screen: ToursScreen,
    navigationOptions: {
      headerTitle: 'Tours',
    },
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      headerTitle: 'Account',
    },
  }

});

export default NavBar;
