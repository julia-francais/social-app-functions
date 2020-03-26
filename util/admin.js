const admin = require("firebase-admin");
require("dotenv").config();

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
});

const db = admin.firestore();

module.exports = { admin, db };
