import React, { Component, url } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Image, Navigate } from 'react-native';
import { Text, Container, Card, Tab, Tabs, Button } from 'native-base';
// import TourCard from '../../Components/TourCard';
// import SignInForm from './Components/SignInForm';
import HeaderBar from '../../Components/HeaderBar';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SignUpForm from './Components/SignUp';
import SignInForm from './Components/SignIn';


export default class HomeScreen extends Component {

  render() {
    return (
      <ImageBackground
        source={require('../../Assets/images/mapbackground.png')}
        style={styles.image}>
        <Image
        source={require('../../Assets/images/pushpin.png')}
        style={styles.icon}/>
        <SignInForm
        style={styles.form}/>
        <SignUpForm
        style={styles.form}/>
      </ImageBackground>
    );
  }
}
//
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    alignContent: 'center'
  },
  form: {
    flex: 1
  },
  icon: {
    flex:2
  },
  SUform: {
    paddingTop: 10
  }
});
