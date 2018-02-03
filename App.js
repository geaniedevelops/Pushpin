import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
import Navigator from './src/Components/Navigator';
import SignInForm from './src/Screens/SignInForm';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }
    /**
     * When the App component mounts, we listen for any authentication
     * state changes in Firebase.
     * Once subscribed, the 'user' parameter will either be null 
     * (logged out) or an Object (logged in)
     */
    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }
    /**
     * Don't forget to stop listening for authentication state changes
     * when the component unmounts.
     */
    componentWillUnmount() {
        this.authSubscription();
    }
    render() {
        // The application is initialising
        if (this.state.loading) return null;
        // The user is an Object, so they're logged in
        if (this.state.user) return <Navigator />
        // The user is null, so they're logged out
        return <SignInForm /> ;
    }
}


export default App;