import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCZDA6eFNQeGWMY52TOYbmcv2Rro7rtzHA",
    authDomain: "chat-1d0bf.firebaseapp.com",
    projectId: "chat-1d0bf",
    storageBucket: "chat-1d0bf.appspot.com",
    messagingSenderId: "653091415330",
    appId: "1:653091415330:web:abb8e3aa20911f0cb0717b",
    measurementId: "G-LCPVKG0CY7"
  }).auth();
