import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Button from 'react-native-elements'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import SignUpForm from './Components/SignUp';
import TourCard from '../../Components/TourCard';
import HeaderBar from '../../Components/HeaderBar';
import GoogleMap from '../Maps/Components/GoogleMap';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderBar/>
        <GoogleMap/>
      </ScrollView>
    )
  }
}
