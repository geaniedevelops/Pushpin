import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Card, Container, Content, H1, Thumbnail } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class TourCard extends Component {
  render () {
    return (
      <View>
        <Card>
        <H1>GALAXY TOUR</H1>
        <Image
          source={require('../Assets/images/dontpanic.png')}
          style={styles.image}
          />
        <Text>In the beginning the Universe was created.This had made many people very angry and has been widely regarded as a bad move.</Text>
        </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    width: 200
  },
  image: {
    resizeMode: 'contain'
  }
});
