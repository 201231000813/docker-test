const mongodb = require('mongodb');
const bluebird = require('bluebird');

// const uri = require('../configs').mongodb.uri;
// mongodb.MongoClient.connect(uri, (err, client) => {
//   console.log('-------', client.db('test').collection);
// })

module.exports = {
  async build(configs) {
    // let MongoClient = bluebird.promisifyAll(mongodb.MongoClient);
    return await mongodb.MongoClient.connect(configs.uri, configs.options);
  }
};