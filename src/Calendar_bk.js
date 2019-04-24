//From App Lab

const { ObjectId } = require('mongodb')
//var exports = {};

exports.isValid = (thing) =>
    
    
    thing.hasOwnProperty('name') &&
    thing.hasOwnProperty('type') &&
    thing.hasOwnProperty('size') &&
    thing.hasOwnProperty('base64') &&
    typeof thing.name === 'string' &&
    typeof thing.type === 'string' &&
    typeof thing.size === 'string' &&
    typeof thing.base64 === 'string'
    

// exports.updateValid = (thing) =>
//     typeof thing === 'object' &&
//     thing.hasOwnProperty('body') &&
//     typeof thing.body === 'string'

const cal = (db) => db.collection('calendar')

exports.all = async (db) =>
  await cal(db).find().toArray()

exports.findById = async (db, id) =>
  await cal(db).findOne(ObjectId(id))



exports.insert = async (db, qi_post) => {
 // let newqi = addTimestamp(qi_post)
  await cal(db).insertOne(qi_post)
  return qi_post
}

exports.deleteAll = async (db) =>
  await cal(db).deleteMany({})
