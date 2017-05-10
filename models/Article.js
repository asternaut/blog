var mongoose = require('mongoose');

// blueprint constructor
var ArticleSchema = new mongoose.Schema({
  title: {required: true, type: String},
  img: String;
  moodRN: String,
  author: {required: true, type: String},
  body: {required: true, type: String},
  //tags: String
});

// Mongoose methods
ArticleSchema.methods.loadData = function(data){
  this.title  = data.title ? data.title : this.title;
  this.img    = data.img ? data.img : this.img;
  this.moodRN = data.moodRN ? data.moodRN : this.moodRN;
  this.author = data.author ? data.author : this.author;
  this.body   = data.body ? data.body : this.body;
}

module.exports = mongoose.model('Article', ArticleSchema);
