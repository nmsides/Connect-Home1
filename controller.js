//var express = require('express');
//
//lets require/import the mongodb native drivers.
//var mongodb = require('mongodb');
//
////We need to work with "MongoClient" interface in order to connect to a mongodb server.
//var MongoClient = mongodb.MongoClient;
//
//// Connection URL. This is where your mongodb server is running.
//
////(Focus on This Variable)
//var url = 'mongodb://admin:connecthomeadmin1@ds263791.mlab.com:63791/heroku_xmw48410';      
//(Focus on This Variable)

// Use connect method to connect to the Server
//  MongoClient.connect(url, function (err, db) {
//  if (err) {
//    console.log('Unable to connect to the mongoDB server. Error:', err);
//  } else {
//    console.log('Connection established to', url);
//    // do some work here with the database.
//    
//      function getUsers(res) {
//        mongodb.connect(url, function(err, db) {
//            var collection = db.collection('users');
//            console.log(collection);
//    });
//    }
//
//    //Close connection
//    db.close();
//  }
//});

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))