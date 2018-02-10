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
            <PointItem/>
          </List>
        </Content>
      </Container>
    );
  }
}
