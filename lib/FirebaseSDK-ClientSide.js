const SDK = {
  firebase: null,
  firebaseApp: null,
  initializeApp(config) {
    SDK.firebaseApp = SDK.firebase.initializeApp(config);
  }
};

SDK.firebase = require('firebase/app');
require("firebase/firestore");

module.exports = SDK;
