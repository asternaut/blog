var Article = require('../../models/article');

// C for create (POST)
exports.getAll = (req, res) => {
  Article.find(function(err, data){
    if(err){
      res.send(err);
    } else {
      res.json({ message: "Sourced your posts 🔍😄", data });
    }
  });
}

// R for read (GET)
exports.makeNew = (req, res) => {
  var article = new Article();
  article.loadData(req.body);
  article.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      res.json({ data, message: "Post accepted! 👍" });
    }
  })
}

// U for update (PUT)
exports.change = (req,res) => {
  Article.findById(req.params.article_id, function(err,data){
    data.loadData(req.body);
    data.save(function(e){
      if(e){
        res.status(500).send(e);
      } else {
        res.json({ message: "Post updated ✨✏️✨", data });
      }
    });
  });
}

// Get by ID
exports.getOne = (req,res) => {
  Article.findById(req.params.article_id, function(err,data){
    if(err) throw err;
      res.json(data);
  });
}

// D for delete
exports.destroy = (req,res) => {
  Article.remove({_id: req.params.article_id}, function(err,data){
    if(err){
      res.send(err);
    } else {
      res.send("Post deleted ✖️")
    }
  });
}
