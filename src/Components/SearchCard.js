import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class TourCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>

            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.tourTitle}</Text>
                  <Text note>{this.props.tourZipcode}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={this.props.tourPhoto}/>
                <Text>{this.props.tourDescription}</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>{this.props.tourPrice}</Text>
                </Button>
              </Left>
              <Right>
                <Text>{this.props.tourCategory}</Text>
              </Right>
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}
