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
        <Grid
          style={styles.form}>
          <Row size={3}>
            <Image
              source={require('../../Assets/images/pushpin.png')}
              style={styles.icon}/>
          </Row>
          <Row size= {2}>
            <SignInForm/>
          </Row>
          <Row size={1}>
            <SignUpForm
              style={styles.SUform}/>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignContent: 'center'
  },
  form: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10
  },
  icon: {
    height:400,
    width:400,
    flex:2
  },
  SUform: {
    paddingTop: 10
  }
});
