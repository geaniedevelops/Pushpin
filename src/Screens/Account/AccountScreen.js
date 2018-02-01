import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import HeaderBar from '../../Components/Common/HeaderBar';


export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Card>
          <Text>Future Home of Settings</Text>
        </Card>
      </View>)
  }
}
