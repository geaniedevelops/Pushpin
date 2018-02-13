import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { tours } from './PracticeTour'

export default class TourCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>{this.props.location}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={this.props.photo} 
                  style={{height: 200, width: 200, flex: 1}}/>
                <Text>{this.props.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>{this.props.price}</Text>
                </Button>
              </Left>
              <Right>
                <Button
                  transparent
                  textStyle={{color: '#87838B'}}
                  onPress={(event)=>{
                    const { navigate } = this.props.navigation;
                    navigate('MapScreen', { })
                  }}
                  >
                <Text>Start Tour</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
}
}
