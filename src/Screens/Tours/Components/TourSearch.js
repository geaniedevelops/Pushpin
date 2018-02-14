import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import SearchCard from '../../../Components/SearchCard';
import SearchForm from './SearchForm';
import { zipcodeSearch } from '../../../../Config/Queries';


export default class SearchScreen extends React.Component {

state= {
  tours: []
}

handleOnSearch() {
  console.warn(this.state.category);
  zipcodeSearch().then(function(data)
  {
    this.setState({
      tours: data.tours
    })
  })
}

  render() {
    return (
      <View
        style={styles.view}>
        <SearchForm
          handleOnSearch={this.handleOnSearch}
          style={styles.form}/>
        {this.state.tours.map( tour => {
        return(
          <SearchCard
            style={styles.card}
            title={tour.title}
            location={tour.location}
            description={tour.description}
            price={tour.price}
            tourPoints={tour.tourPoints}
            key={tour.id}
            />
        )}
      )}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent'
    },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
    },
  form: {
    flex: 1
    },
  card: {
    flex: 3,
    marginTop:10
   }
});
