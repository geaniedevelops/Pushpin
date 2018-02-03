import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Card, Container, Content, H1, Thumbnail } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class TourCard extends Component {
  render () {
    return (
        <Container>
          <Content>
            <Card>
            <H1>GALAXY TOUR</H1>
            <Grid>
<<<<<<< HEAD
                <Col size={35}>
                  <Image  />
=======
                <Col size={30}>
                  <Image
                   large
                   source={require("../Assets/images/dontpanic.png")}
                   onPress={() => alert("Works!")}
                   activeOpacity={0.7}
                   imageProps={{
                     resizeMode:'contain'
                   }}
                  />
>>>>>>> 6047a1c0a463a2584fc98dfcbe494fc7497ccc97
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
