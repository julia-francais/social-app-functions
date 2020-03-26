require("dotenv").config();

const app = require("express")();
const FBAuth = require("./util/FBAuth");

const functions = require("firebase-functions");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage } = require("./handlers/users");

//Screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//Users routes
//Signup route
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
