import React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, ScrollView, Modal } from 'react-native';
import { Container, Content, Card, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
const Item = Picker.Item;

export default class SignUpForm extends Component {
    render() {
        return (
            <Modal
              style={style.modal}
              >
                <Card>
                  <H1>Sign Up</H1>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="First Name" />
                            </InputGroup>
                        </ListItem>
=======
import * as firebase from 'firebase';
import { View, ImageBackground, StyleSheet } from 'react-native';
// import { List, ListItem, InputGroup, Input, Text, Button } from 'native-base';
import Input from './Input';
import Button from './Button';
import firebaseApp from '../../../Utils/Firebase';


export default class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  }
>>>>>>> 6047a1c0a463a2584fc98dfcbe494fc7497ccc97

  componentWillMount() {
    <firebaseApp/>;
  }


<<<<<<< HEAD
                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Phone Number" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button><Text>Sign Up</Text></Button>
                </Card>
            </Modal>
        );
    }
};

const style = StyleSheet.create({
  modal: {
    padding: 5,
  },
=======
  render() {
    return (
      <ImageBackground
        source={require("../../../Assets/images/bggradient.jpg")}
        style={styles.image}
        >
      <View>
        <Input
          placeholder='First Name'
          label='First Name'
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
          />
        <Input
          placeholder='Last Name'
          label='Last Name'
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
          />
        <Input
          placeholder='Email Address'
          label='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
            />
        <Input
          placeholder='Password'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
            />
          <Button>Sign Up</Button>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
 image: {
   flex: 1,
   width: null,
   height: null,
 }
>>>>>>> 6047a1c0a463a2584fc98dfcbe494fc7497ccc97
});
