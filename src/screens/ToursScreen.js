import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { SearchBar, Header, H1  } from 'react-native-elements';
// import TourCard from '../components/TourCard';

export default class ToursScreen extends React.Component {
  static navigationOptions = {
    title: 'Tours'
  };

  render() {
    return (
      <ScrollView>
        <Header><H1>Find a Tour!</H1></Header>
        <SearchBar
          noIcon
          placeholder='Type Here...' />
      </ScrollView>
    );
  }
}
