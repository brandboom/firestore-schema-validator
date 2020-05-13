const SDK = {
  firebase: null,
  firebaseApp: null,
  initializeApp(config) {
    if(isClientSideApp) {
      SDK.firebaseApp = SDK.firebase.initializeApp(config);
    }
    else {
      SDK.firebase.initializeApp(config);
    }
  }
};

let isClientSideApp = process.env.FIRESTORE_SCHEMA_VALIDATOR_SDK=='firebase';
if(isClientSideApp) {
  SDK.firebase = require('firebase/app')
  require("firebase/firestore");
}
else {
  SDK.firebase = require('firebase-admin')
  SDK.firebaseApp = firebase;
}

module.exports = SDK;
