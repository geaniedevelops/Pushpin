import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { ScrollView } from 'react-native';
import ToursScreen from '../../screens/ToursScreen';
import SearchScreen from '../../screens/SearchScreen';
import HeaderBar from '../HeaderBar';


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
            <ToursScreen/>
          </Tab>
          <Tab heading="Find Tours">
            <SearchScreen/>
          </Tab>
        </Tabs>
      </Container>
    </ScrollView>
    );
  }
}
