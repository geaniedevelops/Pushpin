import React, { Component, url } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Image, Navigate } from 'react-native';
import { Text, Container, Card, Tab, Tabs } from 'native-base';
import { Button } from 'react-native-elements';
// import TourCard from '../../Components/TourCard';
// import SignInForm from './Components/SignInForm';
import HeaderBar from '../../Components/HeaderBar';
import BackgroundImage from '../../Components/BackgroundImage';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SignUpForm from './Components/SignUp';
import SignInForm from './Components/SignIn';


export default class HomeScreen extends Component {

  render() {
    return (
      <ImageBackground
        source={require("../../Assets/images/bggradient.jpg")}
        style={styles.image}
        >
        <View
          style={styles.view}>
          <Container>
            <Tabs
            initialPage={0}
            tabBarPosition="bottom">
            <Tab heading="Sign In">
              <SignInForm/>
            </Tab>
            <Tab heading="Sign Up">
              <SignUpForm/>
            </Tab>
        </Tabs>
        </Container>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    paddingTop: 10
  },
  logo: {
    paddingTop: 20,
    marginLeft: 60
  },
  image: {
    flex: 1,
    width: null,
    height: null,
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
