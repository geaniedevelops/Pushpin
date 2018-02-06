import { ListItem, Thumbnail, Text, Body } from 'native-base';
import React, { Component } from 'React';


export default class PointItem extends Component {
  render() {
    return (
      <ListItem>
        <Thumbnail square size={80} source={require('../../../Assets/images/dontpanic.png')} />
        <Body>
          <Text>Earth</Text>
          <Text note>So long, and thanks for all the fish.</Text>
        </Body>
      </ListItem>
    )
  }
}


//Logic
