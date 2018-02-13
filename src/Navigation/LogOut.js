import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import LaunchScreen from './LaunchScreen';

class LogOut extends Component {
    componentWillMount() {
        AsyncStorage.clear();
    }
    render() {
      return (<LaunchScreen/>)
    }
}
export default LogOut;
