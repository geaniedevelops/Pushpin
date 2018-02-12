// Searches tours based on zipcode

zipcodeSearch () {

let zipcode = "" // needs to pull the zipcode from the form
let zipcodeQueryURL = "https://shrouded-sea-19666.herokuapp.com/api/tour/zipcode/" + zipcode

fetch('zipcodeQueryURL')
.then(function(response) {
	for (let i = 0; i < response.length; i++) {
		let tourTitle = response[i].title;
		let tourZipcode = response[i].zipcode;
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
		let tourZipcode = response.tours[i].zipcode;
		let tourCategory = response.tours[i].category;
		let tourDescription = response.tours[i].description;
		let tourPrice = response.tours[i].price;
		let tourPhoto = response.tours[i].photo;

		// render tour info here
	}
})

}