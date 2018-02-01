import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Card, Container, Content, H1 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class TourCard extends Component {
  render () {
    return (
        <Container>
          <Content>
            <Card>
            <H1>GALAXY TOUR</H1>
            <Grid>
                <Col size={35}>
                  <Image  />
                </Col>
                <Col size={65}>
                  <Text>In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.</Text>
                </Col>
            </Grid>
          </Card>
        </Content>
      </Container>
    )
  }
}
