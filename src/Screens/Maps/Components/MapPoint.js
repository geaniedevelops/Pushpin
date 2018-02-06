import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

var PointA = {
  id:1,
  title: "Washington Monument",
  coordinates: [38.8895, 77.0353°],

}

export default class MapPoint extends Component {
render(){
  return (
    <MapboxGL.PointAnnotation
      id= {PointA.id}
      title= {PointA.title}
      coordinate= {PointA.coordinates}
      />
    ;)
  }
}
