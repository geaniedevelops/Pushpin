import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
import Navigator from './src/Components/Navigator';

class App extends Component {
    render() {
      return (
        <Navigator/>
      )}
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


export default App;
