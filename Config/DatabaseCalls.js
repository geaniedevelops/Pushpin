import axios from 'axios';

//add new user to database
//fires from signupform
export function addNewUser() {
  axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/', {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    phoneNumber: this.state.phoneNumber
  })
}

//update user information in DATABASE
//fires from 'Update' button in account HomeScreen
export function updateUserInformation() {
axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/', {
  params: {
    id: this.state.userID
  }
})
}

//add downloaded tour to user array
//fires from "Download" button in SearchCard
export function downloadTour() {
axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/', {
  params: {
    id: this.state.userID
  },
  data: {
    userTours: this.state.tourID
  }
})
.then()
}

//get all tours in user array by user ID
//renders to mytours/populates TourCard
export function getUserTours() {
axios.get('https://shrouded-sea-19666.herokuapp.com/api/user/', {
  params: {
    id: this.state.userID
  }
})
.then()
}

//get all tours in database
//renders to homescreen/populates SearchCard
//launches on screen launch
export function getAllTours(){
axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
.then(function(response){
  console.warn(response.data[0]);
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

//query tours with city/category parameters
//renders to toursearch/populates SearchCard
//fires from onPress search button
export function searchForTour(){
axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour', {
  params: {
    category: this.state.category,
    city: this.state.city
  }
})
.then()
}

//queries for tourpoints in selected tour array
//fires from 'Start Tour' button in TourCard
//renders to map/populates point annotation
//renders to pointlist/populates listitem
export function getTourPoints(){
axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour', {
  params: {
    id: this.state.id
  }
})
}
