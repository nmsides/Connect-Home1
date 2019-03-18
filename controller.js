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
    const url = process.env.MONGODB_URI; 
    const dbName = url.match(/\/([^\/]*)$/)[1];
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    
    
    const express = require('express')
    const app = express()
    app.use(express.static('build'))
    const port = process.env.PORT || 5000

    app.get('/api/users', async (req, res) => {
        const collection = db.collection("users"); 
        const users = await collection.find().toArray();
        res.send(JSON.stringify(users))
    });

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

