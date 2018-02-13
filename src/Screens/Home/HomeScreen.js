import React, { Component, url } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import HeaderBar from '../../Components/HeaderBar';
import TourCard from '../../Components/TourCard';


export default class HomeScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }


  render() {
    return (
      <ImageBackground
        source={require('../../Assets/images/launch_background.png')}
        style={styles.image}>
        <HeaderBar/>
        <TourCard/>
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
