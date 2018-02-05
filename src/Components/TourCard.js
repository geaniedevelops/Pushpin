import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class TourCard extends Component {
  constructor(){
  super()
  this.state = {
    tourTitle: 'tour.title',
    tourLocation: 'tour.location',
    tourDescription: 'tour.description',
    tourPrice: 'tour.price',
    tourImage: 'tour.image',
    pointNumber: 'tour.pointNumber',
  }
}
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.state.tourTitle}</Text>
                  <Text note>{this.state.tourLocation}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={require('../Assets/images/NYCtour.jpeg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>{this.state.tourDescription}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>{this.state.tourPrice}</Text>
                </Button>
              </Left>
              <Right>
                <Text>{this.state.pointNumber}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
