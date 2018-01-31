import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Button from 'react-native-elements'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import Navigator from '../components/Navigator/Navigator';
import SignUpForm from '../components/SignUpForm';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <SignUpForm/>
        <Header><H1>TRENDING TOURS</H1></Header>
      </ScrollView>
    )
  }
}
