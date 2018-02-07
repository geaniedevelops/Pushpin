import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet, View } from 'react-native';
import SearchCard from '../../../Components/SearchCard';
import SearchForm from './SearchForm';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.background}>
        <SearchForm
        style={styles.background}/>
        <SearchCard
        style={styles.background}/>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent'
    },
  view: {
    flex: 1
    },
  form: {
    flex: 1
    },
  card: {
    flex: 2
   }
});
