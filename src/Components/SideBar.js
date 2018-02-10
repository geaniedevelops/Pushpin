import React, { Component } from 'react';
import { View } from 'react-native';

export default class SideBar extends Component {
  render() {
    return(
      <View
        style={{
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <Image
          source={require('../Assets/images/NYCtour.jpeg')}
          style={{flex:2}}/>
        <View
          style={{flex:3}}>
          <Text
            style={{flex:1}}>
            Tours
          </Text>
          <Text
            style={{flex:1}}>
            Map
          </Text>
          <Text
            style={{flex:1}}>
            Account
          </Text>
        </View>
      </View>
    )
  }
}
