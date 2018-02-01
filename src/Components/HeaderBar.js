import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';


export default class HeaderBar extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button/>
          </Left>
          <Body>
            <Title><Text>Home</Text></Title>
          </Body>
          <Right>
            <Button>
            <Text>HM</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}
