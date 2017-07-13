"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient   = require("mongodb").MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Code to connect tweeter to MongoDB
MongoClient.connect(MONGODB_URI, (err, db) => {
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  //Registration Page
  app.get("/register", (req, res) => {

    res.sendfile("./public/register.html")
  });

  //Action when a person registers
  app.post("/register", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let handle = req.body.handle;
    let avatar = req.body.avatar;

    if (email == false || password == false || name == false ||
        handle == false || avatar == false) {
        res.status(404).send('Form Data Missing');
        return;
    }
      res.redirect("/");
   });

  //Login Page
  app.get("/login", (req, res) => {

    res.sendfile("./public/login.html")
  });

  //Action when a user logs-in
  app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email == false || password == false) {
      res.status(404).send('Form Data Missing');
      return;
    }
    res.redirect("/");
  });

  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);

  });
});
