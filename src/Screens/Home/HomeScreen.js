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
        <Grid>
          <Row size={3}>
            <Image
              source={require('../../Assets/images/pushpin.png')}
              style={styles.icon}/>
          </Row>
          <Row size= {2}>
            <SignInForm
              style={styles.form}/>
          </Row>
          <Row size={1}>
            <SignUpForm/>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop:20,
    flex:1
  },
  view: {
    flex: 2,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  },
  form: {
    flex: 1
  },
  icon: {
    height:100,
    width:100
  }
});

// <Image
//   source={require('../../Assets/images/homepageplaceholder.png')}
//   style={styles.logo}
//   />
// <Button
//   outline
//   raised
//   style={styles.button}
//   onPress={()=>Navigate('./Components/SignInForm')}
//   title='Sign In'/>
// <Button
//   outline
//   raised
//   style={styles.button}
//   onPress={()=>Navigate('./Components/SignUpForm')}
//   title='Sign Up'/>



//Component Loads with All/Trending Tours
////componentDidMount() {
//// this.setState({
////    dataSource: 'all-tours';
////  })
////}
//
// <HeaderBar
//   title={'Home'}
//   />
