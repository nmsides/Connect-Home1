//From App Lab

const { ObjectId } = require('mongodb')

exports.isValid = (thing) =>
    typeof thing === 'object' &&
    thing !== null &&
    thing.hasOwnProperty('name_first') &&
    thing.hasOwnProperty('name_last') &&
    thing.hasOwnProperty('username') &&
    thing.hasOwnProperty('password') &&
    thing.hasOwnProperty('tools_auth') &&
    thing.hasOwnProperty('qi_auth') &&
    typeof thing.name_first === 'string' &&
    typeof thing.name_last === 'string' &&
    typeof thing.username === 'string' &&
    typeof thing.password === 'string' &&
    typeof thing.tools_auth === 'object' &&
    typeof thing.qi_auth === 'object'

const users = (db) => db.collection('users')

exports.all = async (db) =>
  await users(db).find().toArray()

exports.findById = async (db, id) =>
  await users(db).findOne(ObjectId(id))

exports.findByUsername = async (db, username) =>
  await users(db).find({username: username}).toArray()

//const addTimestamp = (tweet) => Object.assign({}, tweet, {timestamp: Date.now()})

exports.insert = async (db, user) => {
  //let newUser = addTimestamp(tweet)
  await users(db).insertOne(user)
  return user
}

exports.deleteAll = async (db) =>
  await users(db).deleteMany({})
