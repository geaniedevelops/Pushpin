import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MapPoint from './MapPoint';
import { tourPoints, tours } from '../../../Components/PracticeTour';

MapboxGL.setAccessToken('pk.eyJ1IjoiZ2VhbmllYmxhbmNvIiwiYSI6ImNqY29jY2ZrYTF5YmEyeG1yZzBiN2lqbjkifQ.0CVhUOdbqql0kQJBFOuXsA');

export default class Map extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
            styleURL={('mapbox://styles/geanieblanco/cjdazpzoa5ofq2rqho7sf7o6m')}
            zoomLevel={15}
            centerCoordinate={[-73.9772, 40.7527]}
            style={styles.container}
            showUserLocation={true}
            logoEnabled={false}
            >
            <MapboxGL.PointAnnotation
              key='0'
              id='0'
              title="Chrysler Building"
              coordinate={[-73.9755, 40.7516]}>
              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
            </MapboxGL.PointAnnotation>

            <MapboxGL.PointAnnotation
              key='1'
              id='1'
              title="Empire State Building"
              coordinate={[-73.9857, 40.7484]}>
              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
            </MapboxGL.PointAnnotation>

            <MapboxGL.PointAnnotation
              key='2'
              id='2'
              title="Grand Central Station"
              coordinate={[-73.9772, 40.7527]}>
              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
            </MapboxGL.PointAnnotation>
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
