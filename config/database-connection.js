var mongoose = require('mongoose');

module.exports=() => {
 mongoose.connect("mongodb://localhost/blog");
 console.log("db running!");
}
