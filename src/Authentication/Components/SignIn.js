import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import { Button, Item, Form, Container, Input } from 'native-base';
import SignUpForm from './SignUp';



export default class SignInForm extends Component {
  constructor() {
      super();
      this.handlePress = this.handlePress.bind(this);
    }

    state = {
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    }

    onLoginSuccess(user) {
    this.setState({
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    });
    alert('Welcome!', 'Thank you for signing in, ' + user.email);
  }
  

  handlePress({ email, password }) {
    const { alert } = Alert;
    this.setState({ loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {alert('User does not exist!')
        });
  }

  render() {
    return (
      <View
        style={styles.view}>
        <View
          style={styles.formContainer}>
          <Item fixedLabel>
          <Input
            placeholder='Email Address'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style={styles.form}
            /></Item>
          <Item fixedLabel>
          <Input
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.form}
            /></Item>
        </View>
        <View
          style={styles.buttonView}>
        <Button
          round
          info
          onPress={() => this.handlePress({ ...this.state })}
          style={styles.button}>
          <Text
            style={styles.text}>Sign In</Text>
        </Button>

        <SignUpForm
          style={styles.button}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin:5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  formContainer: {
    backgroundColor: 'rgba(254, 250, 236, .8)',
    borderRadius: 10,
    height: 100
  },
  button: {
    width: 150,
    backgroundColor:'#3385e5',
    marginTop: 10,
    justifyContent: 'center'
  },
  form: {
    flex: 1
  },
  buttonView: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  text: {
    color:'rgb(254, 250, 236)'
  }
});
