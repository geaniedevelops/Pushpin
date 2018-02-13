pushUserData()

tourSearch()
axios.get('')

userTours()

export function allTours() {
  axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
}
