import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, ImageBackground, StyleSheet } from 'react-native';
// import { Button } from 'native-base';
// import { FirebaseApp, firebaseConfig } from '../../../Utils/Firebase';
import Input from './Input';
import Button from './Button';
import firebaseApp from '../../../Utils/Firebase';


export default class SignInForm extends Component {
  state = {
  email: '',
  password: '',
  error: '',
  loading: false
};

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
      <ImageBackground
        source={require("../../../Assets/images/bggradient.jpg")}
        style={styles.image}
        >
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
          <Button>Sign In</Button>
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
