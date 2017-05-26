var mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema ({
  content: {required: true, type: String},
})

// ES6 WILL NOT WORK BECAUSE IT WILL BIND
CommentSchema.methods.loadData = function(data){
  this.content  = data.content ? data.content : this.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
