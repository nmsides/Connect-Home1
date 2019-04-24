//From App Lab

const { ObjectId } = require('mongodb')
//var exports = {};

exports.isValid = (thing) =>
    typeof thing === 'object' &&
    thing !== null &&
    thing.hasOwnProperty('title') &&
    thing.hasOwnProperty('body') &&
    thing.hasOwnProperty('date') &&
    typeof thing.title === 'string' &&
    typeof thing.body === 'string' &&
    typeof thing.date === 'string'

exports.updateValid = (thing) =>
    typeof thing === 'object' &&
    thing.hasOwnProperty('body') &&
    typeof thing.body === 'string'

const news = (db) => db.collection('news')

exports.all = async (db) =>
  await news(db).find().toArray()

exports.findById = async (db, id) =>
  await news(db).findOne(ObjectId(id))

exports.insert = async (db, news_post) => {
  await news(db).insertOne(news_post)
  return news_post
}

exports.deleteAll = async (db) =>
  await news(db).deleteMany({})
