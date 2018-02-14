import React, { Component, url } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Image, Navigate, KeyboardAvoidingView } from 'react-native';
import { Text, Container, Card, Tab, Tabs, Button } from 'native-base';
// import TourCard from '../../Components/TourCard';
// import SignInForm from './Components/SignInForm';
import HeaderBar from '../../Components/HeaderBar';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SignInForm from './Components/SignIn';


export default class HomeScreen extends Component {

  render() {
    return (

      <ImageBackground
        source={require('../../Assets/images/launch_background.png')}
        style={styles.image}>
        <KeyboardAvoidingView
        behavior="padding"
        style={{flex:1}}>
        <Image
        source={require('../../Assets/images/homeicon.png')}
        resizeMode='contain'
        style={styles.icon}/>
      <View
        style={styles.form}>
        <SignInForm/>
      </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
//
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null
  },
  form: {
    flex: 1,
    padding: 10,
  },
  icon: {
    flex:1.5,
    height: null,
    width: null
  }
});
