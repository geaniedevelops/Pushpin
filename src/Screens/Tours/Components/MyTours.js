import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';


export default class TourScreen extends Component {
  render () {
    return (
      <ImageBackground
        source={require('../../../Assets/images/mapbackground.png')}
        style={styles.image}>
        <TourCard/>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
