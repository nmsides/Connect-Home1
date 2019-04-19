//From App Lab

const { ObjectId } = require('mongodb')
//var exports = {};

exports.isValid = (thing) =>
    
    
    thing.hasOwnProperty('name') &&
    thing.hasOwnProperty('type') &&
    thing.hasOwnProperty('size') &&
    thing.hasOwnProperty('key') &&
    thing.hasOwnProperty('base64') &&
    typeof thing.name === 'string' &&
    typeof thing.type === 'string' &&
    typeof thing.size === 'string' &&
    typeof thing.key === 'string' &&
    typeof thing.base64 === 'string'
    

// exports.updateValid = (thing) =>
//     typeof thing === 'object' &&
//     thing.hasOwnProperty('body') &&
//     typeof thing.body === 'string'

const qi_tools = (db) => db.collection('qi')

exports.all = async (db) =>
  await qi_tools(db).find().toArray()

exports.findById = async (db, id) =>
  await qi_tools(db).findOne(ObjectId(id))



exports.insert = async (db, qi_post) => {
 // let newqi = addTimestamp(qi_post)
  await qi_tools(db).insertOne(qi_post)
  return qi_post
}

exports.deleteAll = async (db) =>
  await qi_tools(db).deleteMany({})
