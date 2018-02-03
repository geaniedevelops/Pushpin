import React, { Component, url } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { Text, Container, Card } from 'native-base';
import { Button } from 'react-native-elements';
// import TourCard from '../../Components/TourCard';
// import SignInForm from './Components/SignInForm';
import HeaderBar from '../../Components/HeaderBar';
import BackgroundImage from '../../Components/BackgroundImage';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SignUpForm from './Components/SignUp';
import SignInForm from './Components/SignInForm';


export default class HomeScreen extends Component {

  render() {
    return (
      <ImageBackground
        source={require("../../Assets/images/bggradient.jpg")}
        style={styles.image}
        >
        <View
          style={styles.view}>
          <Image
            source={require('../../Assets/images/homepageplaceholder.png')}
            style={styles.logo}
            />
          <Button
            outline
            raised
            style={styles.button}
            onPress={()=>SignInForm.openModal}
            title='Sign In'/>
          <Button
            outline
            raised
            style={styles.button}
            onPress={()=>SignUpForm.openModal}
            title='Sign Up'/>
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
