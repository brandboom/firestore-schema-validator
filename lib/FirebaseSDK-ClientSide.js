const SDK = {
  firebase: null,
  firebaseApp: null,
  initializeApp(config) {
    SDK.setFirebaseApp(SDK.firebase.initializeApp(config));
  },
  setFirebaseApp(firebaseApp) {
  	SDK.firebaseApp = firebaseApp;
  }
};

SDK.firebase = require('firebase/app');
require("firebase/firestore");

module.exports = SDK;
