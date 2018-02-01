import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { ScrollView } from 'react-native';
import MyTours from './Components/MyTours';
import TourSearch from './Components/TourSearch';
import HeaderBar from '../../Components/HeaderBar';


export default class TourTabs extends Component {
  render() {
    return (
      <ScrollView>
      <Container>
        <HeaderBar/>
        <Tabs
          initialPage={0}
          tabBarPosition="bottom"
          >
          <Tab heading="My Tours">
            <MyTours/>
          </Tab>
          <Tab heading="Find Tours">
            <TourSearch/>
          </Tab>
        </Tabs>
      </Container>
    </ScrollView>
    );
  }
}
