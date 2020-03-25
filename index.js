require("dotenv").config();
const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/FBAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");

//Screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//Users routes
//Signup route
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("europe-west1").https.onRequest(app);
