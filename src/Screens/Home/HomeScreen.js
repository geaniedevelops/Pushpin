import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Button from 'react-native-elements'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import Navigator from '../../Components/Common/Navigator';
// import SignUpForm from '../components/SignUpForm';
import TourCard from '../Tours/Components/TourCard';
import HeaderBar from '../../Components/Common/HeaderBar';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <HeaderBar/>
      </ScrollView>
    )
  }
}
