import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import PointItem from './ListItem';
import HeaderBar from '../../../Components/HeaderBar';

export default class PointList extends Component {
  render() {
    return (
      <Container>
        <HeaderBar
          title="Point List"/>
        <Content>
          <List>
            <PointItem
              title="Chrysler Building"
              description="The Chrysler Building is an Art Deco-style skyscraper located on the East Side of Midtown Manhattan in New York City, at the intersection of 42nd Street and Lexington Avenue in the Turtle Bay neighborhood of Manhattan."/>
            <PointItem
              title="Empire State Building"
              description="The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet tall, including its antenna."/>
            <PointItem
              title="Grand Central Station"
              description="Grand Central Terminal is a commuter and intercity railroad terminal at 42nd Street and Park Avenue in Midtown Manhattan in New York City, United States."/>
          </List>
        </Content>
      </Container>
    );
  }
}
