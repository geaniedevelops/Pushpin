import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Button from 'react-native-elements'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
// import TourCard from '../../Components/TourCard';
// import SignInForm from './Components/SignInForm';
import HeaderBar from '../../Components/HeaderBar';


export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderBar/>
      </ScrollView>
    )
  }
}
