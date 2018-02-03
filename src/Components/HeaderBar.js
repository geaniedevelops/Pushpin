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
        <Left>
          <Button/>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button></Button>
        </Right>
      </Header>
    </View>);
  }
}

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#0000'
//   }

  // style={styles.header}
// });
