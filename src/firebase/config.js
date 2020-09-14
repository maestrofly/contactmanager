import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA5WBjC1Sz7E7gPTsn_BcM1DgMjc_N2MDM",
    authDomain: "contactmanager-24d67.firebaseapp.com",
    databaseURL: "https://contactmanager-24d67.firebaseio.com",
    projectId: "contactmanager-24d67",
    storageBucket: "contactmanager-24d67.appspot.com",
    messagingSenderId: "187386395916",
    appId: "1:187386395916:web:f449be74aecc1cba365d29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;