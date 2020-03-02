import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "***",
  authDomain: "kotrak-app.firebaseapp.com",
  databaseURL: "https://kotrak-app.firebaseio.com",
  projectId: "kotrak-app",
  storageBucket: "kotrak-app.appspot.com",
  messagingSenderId: "903885303879",
  appId: "1:903885303879:web:dbcf37a61897be95bbc162"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;
