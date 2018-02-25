import { ListItem, Thumbnail, Text, Body } from 'native-base';
import React, { Component } from 'React';


export default class PointItem extends Component {
  render() {
    return (
      <ListItem>
        <Thumbnail square size={80} source={require('../../../Assets/images/icon.png')} />
        <Body>
          <Text>{this.props.title}</Text>
          <Text note>{this.props.description}</Text>
        </Body>
      </ListItem>
    )
  }
}


//Logic
