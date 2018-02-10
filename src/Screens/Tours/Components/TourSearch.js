import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import SearchCard from '../../../Components/SearchCard';
import SearchForm from './SearchForm';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View
        style={styles.view}>
        <SearchForm
        style={styles.form}/>
        <SearchCard
        style={styles.card}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent'
    },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
    },
  form: {
    flex: 1
    },
  card: {
    flex: 3,
    marginTop:10
   }
});
