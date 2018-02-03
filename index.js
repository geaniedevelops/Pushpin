import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAZi_iIcwghfEIwynXj1u3gL6JR92Jqa1c",
  authDomain: "toursapp-e5f26.firebaseapp.com",
  databaseURL: "https://toursapp-e5f26.firebaseio.com/",
  storageBucket: "toursapp-e5f26.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('ToursApp', () => App);
