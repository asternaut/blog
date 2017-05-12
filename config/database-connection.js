var mongoose = require('mongoose');
require('dotenv').config()


module.exports = () => {
 if (process.env.NODE_ENV === 'test' ) {
   mongoose.connect("mongodb://127.0.0.1:27017/test-blog");
   console.log("TEST DATABASE OPERATIONAL");
 } else {
   mongoose.connect("mongodb://localhost/blog")
   console.log("DEV DATABASE OPERATIONAL");
 }
}
