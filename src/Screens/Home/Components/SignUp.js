import React, { Component } from 'react';
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

  componentWillMount() {
    <firebaseApp/>;
  }


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
});
