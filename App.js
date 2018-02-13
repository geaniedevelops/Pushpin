import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
import Navigator from './src/Navigation/Navigator';
import LaunchScreen from './src/Navigation/LaunchScreen';
import firebase from 'firebase';

export default class App extends Component {
  state = {
  authenticated: false,
  user: {}
}

componentWillMount() {
  firebase.initializeApp({
    apiKey: "AIzaSyAZi_iIcwghfEIwynXj1u3gL6JR92Jqa1c",
   authDomain: "toursapp-e5f26.firebaseapp.com",
   databaseURL: "https://toursapp-e5f26.firebaseio.com",
   projectId: "toursapp-e5f26",
   storageBucket: "toursapp-e5f26.appspot.com",
   messagingSenderId: "408414341283"
  });

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({
        authenticated: true,
        user
      });
    } else {
      this.setState({
        authenticated: false,
        user: {}
      });
    }
  });
}

render() {
  switch (this.state.authenticated) {
    case true:
      return <Navigator/>;
    case false:
      return <LaunchScreen/>;
    default:
      return (
        <LaunchScreen/>
      );
  }
}

}
