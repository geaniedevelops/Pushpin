import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Image, Text } from 'react-native';
// import { Button } from 'native-base';
// import { FirebaseApp, firebaseConfig } from '../../../Utils/Firebase';
// import Input from './Input';
import { Button, Input } from 'native-base';
import firebaseApp from '../../../Utils/Firebase';


export default class SignInForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'New User',
      lastName: 'New User',
      email: 'New User',
      password: 'New User',
      authenticating: false,
      user: null,
      error: '',
    }
  }

  componentWillMount() {
    <firebaseApp/>;
  }

  onLoginPress() {
  this.setState({error: '', loading: true});
  const {email, password} = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    this.setState({error: '', loading: false});
  }).catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.setState({error: '', loading: false});
    }).catch(() => {
      this.setState({error: 'Authentication failed.', loading: false});
    });
  });
  }


  render() {
    return (
        <View>
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
          <Button round info><Text>Sign In</Text></Button>
        </View>
    );
  }
}
