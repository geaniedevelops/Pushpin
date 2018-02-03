import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { ScrollView } from 'react-native';
import Map from './Components/Map';
// import GoogleMaps from './Components/GoogleMaps';
import PointList from './Components/PointList';
import HeaderBar from '../../Components/HeaderBar';

export default class MapScreen extends Component {
  render () {
    return (
      <ScrollView>
      <Container>
        <Tabs
          initialPage={0}
          tabBarPosition="bottom"
          >

          <Tab heading="Map">
            <Map/>
          </Tab>

          <Tab heading="List">
            <PointList/>
          </Tab>

        </Tabs>
      </Container>
    </ScrollView>
    )
  }
}
