import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormLabel, FormInput, Card, ListItem, Button } from 'react-native-elements';

export default class TourCard extends React.Component {
  render () {
    return (
      <View>
        <Card title="New York City Tour">
          <Image
          source={require('../assets/images/NYCtour.jpeg')}
          resizeMode='contain'
        />
        </Card>
      </View>
    )
}
}

const styles = StyleSheet.create({
  // image: {
  //   resizeMode: 'contain',
  // }
});
