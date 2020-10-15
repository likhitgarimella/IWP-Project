// Replace the following with your app's Firebase project configuration

var firebaseConfig = {

  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "omnifood-likhit2304.firebaseapp.com",
  databaseURL: "https://omnifood-likhit2304.firebaseio.com/",
  projectId: "omnifood-likhit2304",
  storageBucket: "omnifood-likhit2304.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase with a default Firebase project
firebase.initializeApp(firebaseConfig);

// Initialize Firebase with a second Firebase project
var otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");

console.log(firebase.app().omnifood);  // "[DEFAULT]"
console.log(otherProject.omnifood);    // "otherProject"

// Use the shorthand notation to access the default project's Firebase services
var defaultStorage = firebase.auth();
var defaultFirestore = firebase.database();

// Use the otherProject variable to access the second project's Firebase services
var otherStorage = otherProject.auth();
var otherFirestore = otherProject.database();
