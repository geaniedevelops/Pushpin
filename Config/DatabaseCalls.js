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
//fires from 'Update' button in accountScreen
export function updateUserInformation() {
axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/', {
    id: this.state.userID,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    phoneNumber: this.state.phoneNumber
})
}

//add downloaded tour to user array
//fires from "Download" button in SearchCard
export function downloadTour() {
axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/' + this.state.userID + '/downloadtour', {
  data: {
    tourID: this.state.tourID
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
.then(function (results) {
  return results.tours // this will get you an array of all the tours
  console.warn(results.tours);
})
}

//get all tours in database
//renders to homescreen/populates SearchCard
//launches on screen launch
export function getAllTours(){
axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
.then(function(response){
  return response
  console.warn(response);
})
}

//query tours with city/category parameters
//renders to toursearch/populates SearchCard
//fires from onPress search button
export function searchForTour(){
axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour/city/' + this.state.city + '/category/' + this.state.city)
.then(function (results) {
  return results;
})
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
}).then(function (results) {
  return results.points // this will get you an array of points
})
}
