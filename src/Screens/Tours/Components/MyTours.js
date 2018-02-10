import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';


export default class TourScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TourCard/>
        </ScrollView>
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
