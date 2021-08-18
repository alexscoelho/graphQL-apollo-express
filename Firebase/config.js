const firebase = require("firebase");
require("dotenv").config();

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

const database = firebase.database();
module.exports = { firebaseClient, database };
