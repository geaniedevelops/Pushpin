export function zipcodeSearch () {

let city = "New York" // needs to pull the zipcode from the form
let cityQueryURL = "https://shrouded-sea-19666.herokuapp.com/api/tour/city/" + city

return fetch(cityQueryURL)
.then(function(response) {
	for (let i = 0; i < response.length; i++) {
		let tourTitle = response[i].title;
		let tourCity = response[i].city;
		let tourCategory = response[i].category;
		let tourDescription = response[i].description;
		let tourPrice = response[i].price;
		let tourPhoto = response[i].photo;
		render({
			tours: {
				title: tourTitle,
				city: tourCity,
				category: tourCategory,
				description: tourDescription,
				price: tourPrice,
				photo: tourPhoto
			}
		});


		for (let i = 0; i < response.points.length; i++) {
			let pointTitle = response.points[i].title;
			let pointLat = response.points[i].latitude;
			let pointLong = response.points[i].longitude;
			let pointDescription = response.points[i].description;
			render({
				tourPoints: {
					title: pointTitle,
					coordinates: [pointLong, PointLat],
					description: pointDescription
				}
			});
		}
	}

	return {
		tours: [],
		tourPoints: []
		}
	}
)}

// Brings up all downloaded tours for a user

export function allTours() {
alert('connected');
let userQueryURL = "https://shrouded-sea-19666.herokuapp.com/api/tour"

fetch(userQueryURL)
.then(tours => tours.json())
.then(function(response) {
	for (let i = 0; i < reponse.tours.length; i++) {
		let tourTitle = response.tours[i].title;
		let tourZipcode = response.tours[i].zipcode;
		let tourCategory = response.tours[i].category;
		let tourDescription = response.tours[i].description;
		let tourPrice = response.tours[i].price;
		let tourPhoto = response.tours[i].photo;
		render({
			tours: {
				title: tourTitle,
				city: tourCity,
				category: tourCategory,
				description: tourDescription,
				price: tourPrice,
				photo: tourPhoto
			}
		});
	}
	return { tours: [] }
})

}
