//var express = require('express');
//
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//
////We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
//
//// Connection URL. This is where your mongodb server is running.
//
////(Focus on This Variable)
var url = process.env.MONGODB_URI;
//(Focus on This Variable)

async function main() {
try {
  await MongoClient.connect(url);  
    
    const express = require('express')
    const app = express()
    const port = process.env.PORT || 5000

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
catch(error) {
    console.log('Unable to connect to the mongoDB server. Error:', error);
}
}

main();


//// Use connect method to connect to the Server
//  MongoClient.connect(url, function (err, db) {
//  if (err) {
//    console.log('Unable to connect to the mongoDB server. Error:', err);
//  } else {
//    console.log('Connection established to', url);
//    // do some work here with the database.
//    
////      function getUsers(res) {
////        mongodb.connect(url, function(err, db) {
////            var collection = db.collection('users');
////            console.log(collection);
////    });
// //   }
//
//    //Close connection
//    db.close();
//  }
//});

