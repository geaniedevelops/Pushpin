import axios from 'axios';


//POSTS USER DATA TO DATABASE ON SIGN UP
function pushUserData() {
  axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/', {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    phoneNumber: this.state.phoneNumber
  })
  .then(console.warn("user added"))
}

//GETS USER DOWNLOADED TOURS FOR MYTOURS SCREEN
function getUserTours() {
  axios.get('https://shrouded-sea-19666.herokuapp.com/api/user/', {
    params: {
      id: this.state.userID
    }
  })
  .then(function(response) {
    for (var i = 0; i < response.length; i++) {
      //get tourIDs stored in userTours
      var userTours = response[i].userTours;
    for (var i = 0; i < response.userTours.length; i++) {
      //get tour information for each tour
      var tourId = response.userTours.data[i].id;
      var tourTitle = response.userTours.data[i].title;
      var tourCity = response.userTours.data[i].city;
      var tourPhoto = response.userTours.data[i].photo;
      var tourDescription = response.userTours.data[i].description;
      var tourCategory = response.userTours.data[i].category;
    for (let i = 0; i < response.points.length; i++) {
			let pointTitle = response.points[i].title;
			let pointLat = response.points[i].latitude;
			let pointLong = response.points[i].longitude;
			let pointDescription = response.points[i].description;
      }
    }
  }
})

//GETS ALL TOURS IN CATEGORY FOR TOURSEARCH
function tourSearch() {
  axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour/', {
    params: { category: this.state.selectedCategory }
  })
  .then(function(response) {
    console.warn(response.data);
  })
  .catch(function(error) {
    console.warn(error);
  })
}

//GETS ALL TOURS IN DATABASE FOR HOMESCREEN
function allTours() {
  axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
  .then(function(response) {
    console.warn(response.data);
    for (let i = 0; i < response.data.length; i++) {
      var tourId = response.data[i].id;
      var tourTitle = response.data[i].title;
      var tourCity = response.data[i].city;
      var tourPhoto = response.data[i].photo;
      var tourDescription = response.data[i].description;
      var tourCategory = response.data[i].category;
      var tourPrice = response.data[i].price;
    }
    return (
      tour: {
        id: tourId,
        title: tourTitle,
        city: tourCity,
        photo: tourPhoto,
        description: tourDescription,
        category: tourCategory,
        price: tourPrice
    })
  })
}
