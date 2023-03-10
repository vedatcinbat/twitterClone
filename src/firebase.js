import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2_a88ym56nPwDBNovEXoCybE4rFSy_90",
    authDomain: "twitter-clone-f0524.firebaseapp.com",
    projectId: "twitter-clone-f0524",
    storageBucket: "twitter-clone-f0524.appspot.com",
    messagingSenderId: "178229403988",
    appId: "1:178229403988:web:7b5b488493eb17f7ece8c1",
    measurementId: "G-502Z1W53W2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default  db;