import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZ2VhbmllYmxhbmNvIiwiYSI6ImNqY29jY2ZrYTF5YmEyeG1yZzBiN2lqbjkifQ.0CVhUOdbqql0kQJBFOuXsA');

const PointAnnotation = {
  renderAnnotations () {
      return (
        <Mapbox.PointAnnotation
          id={id}
          title={title}
          coordinates={coordinates}
          onSelected={modal}
          >
          <View style={styles.annotationContainer}>
            <View style={styles.annotationFill}/>
          </View>
        </Mapbox.PointAnnotation>
      )
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
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

export default PointAnnotation;
