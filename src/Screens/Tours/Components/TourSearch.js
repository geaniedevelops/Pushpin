import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import SearchCard from '../../../Components/SearchCard';

//Component Loads with All Tours
////componentDidMount() {
//// this.setState({
////    dataSource: 'all-tours';
////  })
////}

//on click: SearchForm Modal

//Component Unmounts / Remounts with queried TourCards

export default class SearchScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../../Assets/images/mapbackground.png')}
        style={styles.image}>
      <Text>Hello World!</Text>
      </ImageBackground>
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
