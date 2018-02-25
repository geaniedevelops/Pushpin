import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Modal, Text, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Item, Container, Input } from 'native-base';
import { addNewUser } from '../../Config/DatabaseCalls';


export default class SignUpForm extends Component {
  constructor() {
      super();
      this.handlePress = this.handlePress.bind(this);
    }

    state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      modalVisible: false
    }

onSignUpError(error) {
  const { alert } = Alert;
  alert('Error', 'An error has occurred.');
  let errorMessage;
  switch (error.code) {
    case 'auth/app-deleted':
      errorMessage = 'The authentication server seems to have been deleted.';
      break;
    case 'auth/app-not-authorized':
      errorMessage = 'There\'s an issue with the authentication server domain.';
      break;
    case 'auth/argument-error':
      errorMessage = 'There is a bug with this app, please report it to the developer.';
      break;
    case 'auth/invalid-api-key':
      errorMessage = 'The authentications server didn\'t recognize the API key.';
      break;
    case 'auth/network-request-failed':
      errorMessage = 'Couldn\'t connect to the authentication server,' +
          ' please check if your device is connected to the Internet.';
      break;
    case 'auth/operation-not-allowed':
      errorMessage = 'The authentication server administrator has not enabled this feature.';
      break;
    case 'auth/too-many-requests':
      errorMessage = 'You have tried too many times, please wait before trying again.';
      break;
    case 'auth/user-disabled':
      errorMessage = 'This user has been disabled from the system.' +
          ' Please contact an administrator.';
      break;
    default:
      errorMessage = 'Authentication failed.';
  }

  this.setState({ errorMessage, loading: false });
}

handlePress({ email, password}) {
  const { alert } = Alert;
  this.setState({ loading: true });
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(addNewUser())
      .then(user => alert('Thank you for signing up.'))
      .catch(this.onSignUpError.bind(this));
}

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View>
        <Modal
         visible={this.state.modalVisible}
         animationType={'slide'}
         onRequestClose={() => this.closeModal()}>

         <Container
           style={{marginTop:40}}>
         <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='First Name'
            label='First Name'
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}/>
          </Item>

          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Last Name'
            label='Last Name'
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}/>
          </Item>

          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Email Address'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}/>
          </Item>

          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
          </Item>

          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder="Phone Number"
            label="Phone Number"
            keyboardType="numeric"
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={this.state.phoneNumber}/>
          </Item>

          <Button
            round
            info
            onPress={() => this.handlePress({ ...this.state })}
            style={{width:350}}>
            <Text>Sign Up</Text>
          </Button>

          <Text
            onPress={() => this.closeModal()}>
            Have An Account? Sign In
          </Text>
        </Container>
        </Modal>

        <Button
          round
          onPress={() => this.openModal()}
          style={styles.openButton}>
          <Text
            style={styles.text}>
            Sign Up
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 2,
    width: 350
  },
  form: {
    flex: 4,
  },
  openButton: {
    width: 150,
    backgroundColor:'#3385e5',
    marginTop: 10,
    justifyContent: 'center'
  },
  text: {
    color:'rgb(254, 250, 236)'
  }
});
