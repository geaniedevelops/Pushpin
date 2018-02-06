import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import MyTours from './Components/MyTours';
import TourSearch from './Components/TourSearch';
import HeaderBar from '../../Components/HeaderBar';


export default class TourTabs extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../Assets/images/mapbackground.png')}
        style={styles.image}>
        <HeaderBar
          title="Tours"
          />
          <Container>
            <Tabs
            initialPage={0}
            tabBarPosition="bottom">
            <Tab heading="My Tours">
              <MyTours/>
            </Tab>
            <Tab heading="Find Tours">
              <TourSearch/>
          </Tab>
        </Tabs>
        </Container>
    </ImageBackground>
);
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
