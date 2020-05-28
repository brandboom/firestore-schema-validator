// READ ME: to switch between using the client-side SDK (firebase) vs server-side SDK (firebase-admin),
// edit FirebaseSDK.js and comment in the one you want to use.
// Also, make sure you npm install either the package 'firebase' or 'firebase-admin' accordingly.

const SDK = require('./FirebaseSDK')
const Field = require('./Field')
const Schema = require('./Schema')
const Model = require('./Model')
const StructureError = require('./StructureError')
const ValidationError = require('./ValidationError')

module.exports = {
  field(...args) {
    return new Field(...args)
  },
  schema(...args) {
    return new Schema(...args)
  },
  Field,
  Schema,
  Model,
  StructureError,
  ValidationError,
  intializeApp(config) {
    SDK.initializeApp(config);
  },
  setFirebaseApp(firebaseApp) {
    SDK.setFirebaseApp(firebaseApp);
  },
}
