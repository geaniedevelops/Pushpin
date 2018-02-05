import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
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
      <Header>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    </View>);
  }
}
