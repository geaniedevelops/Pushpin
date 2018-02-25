import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';
// import { allTours } from '../../../../Config/Queries';
import axios from 'axios';
// import { tours } from '../../../Components/PracticeTour';


export default class MyTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    }
  }

  componentWillMount() {
    axios.get('https://shrouded-sea-19666.herokuapp.com/api/tour')
    .then((response) => {
      this.setState({
        tours: response.data,
      })
    })
  }


  render () {
    return (
      <ScrollView>
        {this.state.tours.map((tour) => {
            return(
            <TourCard
              key={tour.id}
              title={tour.title}
              city={tour.city}
              photo={tour.photo}
              description={tour.description}
              category={tour.category}
              handlePress={this.handlePress}/>);
            })}
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
