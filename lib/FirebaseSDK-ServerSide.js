const SDK = {
  firebase: null,
  firebaseApp: null,
  initializeApp(config) {
      SDK.firebase.initializeApp(config);
  }
};

SDK.firebase = require('firebase-admin')
SDK.firebaseApp = firebase;

module.exports = SDK;
