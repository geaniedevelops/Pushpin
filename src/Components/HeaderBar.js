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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6047a1c0a463a2584fc98dfcbe494fc7497ccc97
  }
}

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#0000'
//   }

  // style={styles.header}
// });
