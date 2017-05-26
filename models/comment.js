var mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema ({
  content: String,
})

CommentSchema.methods.loadData = (data) => {
  this.content = data.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
