//From App Lab

const { ObjectId } = require('mongodb')
//var exports = {};

exports.isValid = (thing) =>
    typeof thing === 'object' &&
    thing !== null &&
    thing.hasOwnProperty('title') &&
    thing.hasOwnProperty('body') &&
    typeof thing.title === 'string' &&
    typeof thing.body === 'string'

const news = (db) => db.collection('news')

exports.all = async (db) =>
  await news(db).find().toArray()

exports.findById = async (db, id) =>
  await news(db).findOne(ObjectId(id))

const addTimestamp = (news_post) => Object.assign({}, news_post, {date: Date.now()})

exports.insert = async (db, news_post) => {
  let newNews = addTimestamp(news_post)
  await news(db).insertOne(newNews)
  return newNews
}

exports.deleteAll = async (db) =>
  await news(db).deleteMany({})
