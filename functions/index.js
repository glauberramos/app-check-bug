const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onCall(async (data, context) => {
    let value = await admin
    .database()
    .ref('test').once('value')

    return value.val()
  })
  