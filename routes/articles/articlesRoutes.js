//API
var Comment = require('../../models/comment');
var Article = require('../../models/article');

// C for create (POST)
exports.getAll = (req, res) => {
  Article.find()
  .populate('comments')
  .exec((err, data) => {
    if(err) throw err;
    res.send({data})
  })
}

// R for read (GET)
exports.makeNew = (req, res) => {
  var newarticle = new Article();
  newarticle.loadData(req.body);
  newarticle.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      res.json({ data, message: "Post accepted! 👍" });
    }
  })
}

// U for update (PUT)
exports.change = (req,res) => {
  Article.findById(req.params.articleId, function(err,data){
    data.loadData(req.body);
    data.save(function(e){
      if(e){
        res.status(500).send(e);
      } else {
        res.json({ message: "Post updated ✨✏️✨ ", data });
      }
    });
  });
}

// Get by ID
exports.getOne = (req,res) => {
  Article.findById(req.params.articleId)
    .populate('comments')
    .exec((err,data) => {
        if(err) throw err;
        res.send({data: data, message: "Found your article!"});
    })
}

// D for delete
exports.destroy = (req,res) => {
  Article.remove({_id: req.params.articleId}, function(err,data){
    if(err){
      res.send(err);
    } else {
      res.send("Post deleted ✖️")
    }
  });
}

exports.makeComment = (req,res) => {
  Article.findById(req.params.articleId, (err, article) => {
    console.log("ARTICLE: ", article);
    if(err) throw err;
    const newComment = new Comment();
    console.log( "CONSOLE ", req.body);
    newComment.loadData(req.body);

    newComment.save((err, savedComment) => {
      console.log("SAVED COMMENT: ", savedComment);
      if(err) throw err;
      article.comments.push(savedComment);
      article.save((err, savedArticle) => {
        if(err) throw err;
        res.send({ data: savedArticle })
      })
    })
  })
}
