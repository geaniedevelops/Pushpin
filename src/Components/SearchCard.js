import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class SearchCard extends Component {
  render() {
    return (
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Body>
            <Text>{this.props.title}</Text>
            <Text>{this.props.city}</Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Body>
          <Image source={require('../Assets/images/NYCtour.jpeg')}
            style={{height: 200, width: 330}}/>
          <Text>{this.props.description}</Text>
        </Body>
      </CardItem>

      <CardItem>
        <Left>
          <Button
            transparent
            onPress={this.props.handlePress}
            textStyle={{color: '#87838B'}}>
            <Text>{this.props.price}</Text>
          </Button>
        </Left>
        <Right>
          <Text>{this.props.category}</Text>
        </Right>
      </CardItem>
    </Card>
    );
  }
}
