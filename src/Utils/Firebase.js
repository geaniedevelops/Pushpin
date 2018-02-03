import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZi_iIcwghfEIwynXj1u3gL6JR92Jqa1c",
  authDomain: "toursapp-e5f26.firebaseapp.com",
  databaseURL: "https://toursapp-e5f26.firebaseio.com/",
  storageBucket: "toursapp-e5f26.appspot.com",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

export default FirebaseApp;
