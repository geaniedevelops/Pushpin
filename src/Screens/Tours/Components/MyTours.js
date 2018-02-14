import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';
import { allTours } from '../../../../Config/Queries';
// import { tours } from '../../../Components/PracticeTour';


export default class MyTours extends Component {
  state = {
    tours: [],
  }

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
