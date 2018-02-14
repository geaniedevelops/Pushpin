import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Header, H1  } from 'react-native-elements';
import TourCard from '../../../Components/TourCard';
import { tours } from '../../../Components/PracticeTour';


export default class TourScreen extends Component {
  render () {
    return (
      <ScrollView>
        {tours.map( tour => {
        return(
          <TourCard
            title={tour.title}
            location={tour.location}
            description={tour.description}
            price={tour.price}
            tourPoints={tour.tourPoints}
            key={tour.id}/>
        )}
      )}
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
