import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';


export default class MapPoint extends Component {
render(){
  return (
    <MapboxGL.PointAnnotation
      id= {this.props.id}
      title= {this.props.title}
      coordinate= {this.props.coordinates}
      />
  );
  }
}
