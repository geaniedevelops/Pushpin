import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { tourPoints, tours } from '../../../Components/PracticeTour';

MapboxGL.setAccessToken('pk.eyJ1IjoiZ2VhbmllYmxhbmNvIiwiYSI6ImNqY29jY2ZrYTF5YmEyeG1yZzBiN2lqbjkifQ.0CVhUOdbqql0kQJBFOuXsA');

export default class Map extends Component<{}> {
  state = {
    coordinates: [40.7059, 74.0027]
  }

  renderAnnotations () {
    return (

      <MapboxGL.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[-74.0027, 40.7059]}>
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
            styleURL={('mapbox://styles/geanieblanco/cjdazpzoa5ofq2rqho7sf7o6m')}
            zoomLevel={15}
            centerCoordinate={[-74.0027, 40.7059]}
            style={styles.container}
            showUserLocation={true}
            logoEnabled={false}
            >
            {this.renderAnnotations()}
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1C76B9',
    transform: [{ scale: 0.6 }],
  },
});
