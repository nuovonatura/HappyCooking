import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBUjXhrMBE7L8LgU4YYdBdR8b0K4GvLV78",
    authDomain: "resounding-axe-127723.firebaseapp.com",
    databaseURL: "https://resounding-axe-127723.firebaseio.com",
    projectId: "resounding-axe-127723",
    storageBucket: "resounding-axe-127723.appspot.com",
    messagingSenderId: "480087819535",
    appId: "1:480087819535:web:2d67a920d7a67a471aea7a",
    measurementId: "G-1XDB037GB8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;