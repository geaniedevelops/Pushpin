import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default class GoogleMap extends Component {
  render() {
    return (
        <MapView
          provider= 'google'
          mapType= 'standard'
          showUserLocation= {true}
          followUserLocation= {true}
          showsMyLocationButton= {true}
          zoomEnabled= {true}
          rotateEnabled= {true}/>
    );
  }
}


//API Key AIzaSyDx2ZndTzaOFVe0SfXFO6Boo3zFUw3dKeY
//        onMapReady={Loads map points}
//        onMarkerPress={Loads point information}
