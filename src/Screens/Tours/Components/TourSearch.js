import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import SearchCard from '../../../Components/SearchCard';
import SearchForm from './SearchForm';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../../Assets/images/mapbackground.png')}
        style={styles.image}>
      <SearchForm
        style={styles.form}/>
      <SearchCard
        style={styles.card}/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
 image: {
   flex: 1,
   width: null,
   height: null,
 },
 form: {
   flex: 1
 },
 card: {
   flex: 5
 }
});
