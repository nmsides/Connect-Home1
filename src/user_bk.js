//From App Lab

const { ObjectId } = require('mongodb')

exports.isValid = (thing) =>
    typeof thing === 'object' &&
    thing !== null &&
    thing.hasOwnProperty('name') &&
    thing.hasOwnProperty('username') &&
    thing.hasOwnProperty('password') &&
    thing.hasOwnProperty('tools_auth') &&
    thing.hasOwnProperty('qi_auth') &&
    thing.hasOwnProperty('goal') &&
    thing.hasOwnProperty('participants') &&
    typeof thing.name === 'string' &&
    typeof thing.username === 'string' &&
    typeof thing.password === 'string' &&
    typeof thing.tools_auth === 'object' &&
    typeof thing.qi_auth === 'object' &&
    typeof thing.goal === 'string' &&
    typeof thing.participants === 'string'

exports.userValid = (thing) =>
    typeof thing === 'object' &&
    thing.hasOwnProperty('tools_auth') &&
    thing.hasOwnProperty('qi_auth') &&
    typeof thing.tools_auth === 'object' &&
    typeof thing.qi_auth === 'object'

exports.userCredValid = (thing) =>
    typeof thing === 'object' &&
    thing.hasOwnProperty('username') &&
    thing.hasOwnProperty('password') &&
    typeof thing.username === 'string' &&
    typeof thing.password === 'string'

const users = (db) => db.collection('users')

exports.all = async (db) =>
  await users(db).find().toArray()

exports.findById = async (db, id) =>
  await users(db).findOne(ObjectId(id))

exports.findByUsername = async (db, username) =>
  await users(db).find({username: username}).toArray()


exports.insert = async (db, user) => {
  await users(db).insertOne(user)
  return user
}

exports.insert = async (db, user) => {
  await users(db).insertOne(user)
  return user
}

exports.deleteAll = async (db) =>
  await users(db).deleteMany({})
