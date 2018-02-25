import React, { Component, url } from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import HeaderBar from '../../Components/HeaderBar';
import SearchCard from '../../Components/SearchCard';
// import { getAllTours } from '../../../Config/DatabaseCalls';
import axios from 'axios';

var userID = 1

export default class HomeScreen extends Component {
constructor(props) {
  super(props);
  this.state = {
    tours: []
  }
}

handlePress() {
  axios.post('https://shrouded-sea-19666.herokuapp.com/api/user/' + userID + '/downloadtour', {
    data: {
      tourID: 2
    }
  })
  .then(alert('Tour Downloaded'))
}

componentWillMount() {
  axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
  .then((response) => {
    this.setState({
      tours: response.data,
    })
  })
}


render() {
    return (
      <ImageBackground
        source={require('../../Assets/images/launch_background.png')}
        style={styles.image}>
        <HeaderBar/>
        <ScrollView>
        {this.state.tours.map((tour) => {
            return(
            <SearchCard
              key={tour.id}
              title={tour.title}
              city={tour.city}
              photo={tour.photo}
              description={tour.description}
              category={tour.category}
              price={tour.price}
              handlePress={this.handlePress}/>);
            })}
          </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null
  },
  form: {
    flex: 1,
    padding: 10,
  },
  icon: {
    flex:1.5,
    height: null,
    width: null
  }
});
