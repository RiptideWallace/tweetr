"use strict";

// Simulates the kind of delay we see with network or filesystem operations
//const simulateDelay = require("./util/simulate-delay");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('collection').insertOne(newTweet, (err, tweets) => {
        if(err) {
          return callback(err);
        }
        callback(null, tweets);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection('collection').find().toArray((err, tweets) => {
        if (err) {
        return callback(err);
        }
         callback(null, tweets);
     });
    }

  };
}

