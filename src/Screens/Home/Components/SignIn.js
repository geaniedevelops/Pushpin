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
    authenticating: false,
    user: null,
    error: '',
  }

  componentWillMount() {<firebaseApp/>}

onPressSignIn() {
    this.setState({
      authenticating: true,
    });

const { firstName, lastName } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.setState({
        authenticating: false,
        user,
        error: '',
      }))
      .catch(() => {
        // Login was not successful
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => this.setState({
            authenticating: false,
            user,
            error: '',
          }))
          .catch(() => this.setState({
            authenticating: false,
            user: null,
            error: 'Authentication Failure',
          }))
      })
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
     return (
       <View>
         <ActivityIndicator size='large' />
       </View>
     )
   }

   if (this.state.user !== null) {
     return (
       <View>
         <Text>Logged In</Text>
         <Button onPress={() => this.onPressLogOut()}>Log Out</Button>
       </View>
     )
   }
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
