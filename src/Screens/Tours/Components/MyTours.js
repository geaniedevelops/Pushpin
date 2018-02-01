import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
