const uriUtil  = require('mongodb-uri');
var mongoose = require('mongoose');
require('dotenv').config()

const options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};


module.exports = () => {
 if (process.env.NODE_ENV === 'test' ) {
   mongoose.connect("mongodb://127.0.0.1:27017/test-blog");
   console.log("TEST DATABASE OPERATIONAL");
 } else {
   const mongodbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test-blog";
   const mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);
   console.log("DEV DATABASE OPERATIONAL");
 }
}
