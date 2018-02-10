import React, {Component} from 'react';
import {StyleSheet, View, Image } from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title
} from 'native-base';

export default class HeaderBar extends Component {
  render() {
    return (<View>
      <Header
        style={{backgroundColor: 'rgba(254, 250, 236, .9)'}}>
        <Body>
          <Title>
            <Image
            source={require('../Assets/images/header_logo.png')}
            style={styles.header}
            resizeMode="contain"/>
          </Title>
        </Body>
      </Header>
    </View>);
  }
}

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
  }
});
