import React, { Component } from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';


export default class TourScreen extends Component {
  render () {
    return (
      <TourCard/>
    )
  }
}

const styles = StyleSheet.create({
 image: {
   flex: 1,
   width: null,
   height: null,
 }
});
