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
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const users = require('./src/user_bk.js')
    const news = require('./src/news_bk.js')
    
    const express = require('express')
    const app = express()
    app.use(express.static('build'))
    const port = process.env.PORT || 5000
    const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    
    app.get('/api/users', async (req, res) => {
        const collection = db.collection("users"); 
        const users = await collection.find().toArray();
        res.send(JSON.stringify(users))
    });
    
    app.get('/api/news', async (req, res) => {
        console.log('cont');
       const collection = db.collection("news");
        const news = await collection.find().toArray(); 
        res.send(JSON.stringify(news))
    });
    
    app.get('/api/admin/tools', async (req, res) => {
        const collection = db.collection("tools"); 
        const tools = await collection.find().toArray();
        res.send(JSON.stringify(tools)) //Returns array of all tools
  });
    
    app.get('/api/admin/qi', async (req, res) => {
        const collection = db.collection("qi_tools"); 
        const qis = await collection.find().toArray();
        res.send(JSON.stringify(qis)) //Returns array of all tools
  });
    
//    //PUT
//    app.put('/api/admin/user', async (req, res) => {
//    const body = req.body
//    console.log(req.body._id);
//    if (!req.is('json')) {// || !users.userValid(body)) {
//      return res.status(400).end()
//    } else if (!(await users.findById(db, body.id))) {
//      return res.status(404).end()
//    } else {
//      await users.insert(db, body)
//      return res.status(200).json(body)
//    }
//  })

    
    app.post('/api/admin/news', async (req, res) => {
        if (!req.is('json') || !news.isValid(req.body)) { 
      return res.status(400).end()
    } else {
      return res.status(200).json(await news.insert(db, req.body))
    }
  })
    
     app.post('/api/admin/newuser', async (req, res) => {
        if (!req.is('json') || !users.isValid(req.body)) { 
      return res.status(400).end()
    } else {
      return res.status(200).json(await users.insert(db, req.body))
    }
  })

    app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
}
catch(error) {
    console.log('Unable to connect to the mongoDB server. Error:', error);
}
}

main();


