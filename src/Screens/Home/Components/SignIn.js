import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Image, Text, StyleSheet } from 'react-native';
// import { Button } from 'native-base';
// import { FirebaseApp, firebaseConfig } from '../../../Utils/Firebase';
// import Input from './Input';
import { Button, Input } from 'native-base';
import firebaseApp from '../../../Utils/Firebase';


export default class SignInForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
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
        <View
          style={styles.view}>
          <Input
            placeholder='Email Address'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style={styles.form}
            />
          <Input
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.form}
            />
          <Button
            round
            info
            style={styles.button}>
            <Text>Sign In</Text>
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FEFAEC",
    paddingTop:10
  },
  button: {
    flex: 2,
    width: 350
  },
  form: {
    flex: 4,
    width: 350
  }
});
