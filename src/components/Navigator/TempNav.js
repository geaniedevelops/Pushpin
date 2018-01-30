import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Card, Button } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import ToursScreen from '../../screens/ToursScreen';
import MapScreen from '../../screens/MapScreen';
import AccountScreen from '../../screens/AccountScreen';
// import Navigator from './Navigator';

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

class TempNav extends React.Component {
  render() {
      return (
        <Container>
              <Button
                onPress={() => this.props.navigation.navigate('Account')}
                title="My Account"/>
              <Button
                onPress={() => this.props.navigation.navigate('Tours')}
                title="Tours"/>
              <Button
                onPress={() => this.props.navigation.navigate('Map')}
                title="Map"/>
              <Button
                onPress={() => this.props.navigation.navigate('Home')}
                title="Home"/>
              <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"/>
            </Container>
      )}
}

export default TempNav;
