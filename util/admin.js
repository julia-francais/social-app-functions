require("dotenv").config();
const admin = require("firebase-admin");

var serviceAccount = require(process.env.JSON_FILE_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.firestore();

module.exports = { admin, db };
