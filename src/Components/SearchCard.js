import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class TourCard extends Component {
  constructor(){
  super()
  this.state = {
    tourTitle: 'tour.title',
    tourLocation: 'tour.location',
    tourDescription: 'tour.description',
    tourPrice: 'tour.price',
    tourImage: 'tour.image',
    pointNumber: 'tour.pointNumber',
  }
}

// Searches tours based on zipcode

zipcodeSearch () {

let city = "" // needs to pull the city from the form
let cityQueryURL = "https://shrouded-sea-19666.herokuapp.com/api/tour/zipcode/" + city

fetch('cityQueryURL')
.then(function(response) {
	for (let i = 0; i < response.length; i++) {
		let tourTitle = response[i].title;
		let tourCity = response[i].city;
		let tourCategory = response[i].category;
		let tourDescription = response[i].description;
		let tourPrice = response[i].price;
		let tourPhoto = response[i].photo;

		// render general tour info here	

		for (let i = 0; i < response.points.length; i++) {
			let pointTitle = response.points[i].title;
			let pointLat = response.points[i].latitude;
			let pointLong = response.points[i].longitude;
			let pointDescription = response.points[i].description;

			// render specific point info here
		}
	}
})

}

// Brings up all downloaded tours for a user

allTours () {

let userID = "" // needs to pull the user's ID from somewhere??
let userQueryURL = "https://shrouded-sea-19666.herokuapp.com/api/user/" + userID

fetch('userQueryURL')
.then(function(response) {
	for (let i = 0; i < reponse.tours.length; i++) {
		let tourTitle = response.tours[i].title;
		let tourCity = response.tours[i].city;
		let tourCategory = response.tours[i].category;
		let tourDescription = response.tours[i].description;
		let tourPrice = response.tours[i].price;
		let tourPhoto = response.tours[i].photo;

		// render tour info here
	}
})

}
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>

            <CardItem>
              <Left>
                <Body>
                  <Text>{this.state.tourTitle}</Text>
                  <Text note>{this.state.tourLocation}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={require('../Assets/images/NYCtour.jpeg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>{this.state.tourDescription}</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>{this.state.tourPrice}</Text>
                </Button>
              </Left>
              <Right>
                <Text>{this.state.pointNumber}</Text>
              </Right>
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}
>>>>>>> ba3ec998fb1a3c00a085aa2741453be54b2d6566
