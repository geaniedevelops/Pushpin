import React, {Component} from 'react';
import {View} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiZ2VhbmllYmxhbmNvIiwiYSI6ImNqY29jY2ZrYTF5YmEyeG1yZzBiN2lqbjkifQ.0CVhUOdbqql0kQJBFOuXsA');

const UserCoordinates = [-73.98197650909422, 40.768793007758816];

export default class Map extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
          <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={{flex: 1}}
          zoomLevel={15}
          centerCoordinate={UserCoordinates}
          >
        </MapboxGL.MapView>
      </View>
      );
  }
}
