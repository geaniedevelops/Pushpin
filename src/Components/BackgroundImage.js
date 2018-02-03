import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    return (
      <Image
        source={require("../Assets/images/background_gradient.jpeg")}
        style={styles.backgroundImage}
        />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
})
