var express = require('express');
var Router = express.Router();
var entry = require('../models/entry');

// C for create (POST)
Router.route('/')

.get(function(req,res){
  entry.find(function(err, data){
    if(err){
      res.send(err);
    } else {
      res.json({ message: "Sourced your posts 🔍😄", data });
    }
  });
}) // R for read (GET)
.post(function(req,res){
  var mentry = new entry();
  mentry.loadData(req.body);

  mentry.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      res.json({ data, message: "Post accepted! 👍" });
    }
  })
});

// U for update (PUT)
Router.route('/:article_id')
.put(function(req,res){
  entry.findById(req.params.article_id, function(err,data){
    data.loadData(req.body);
    data.save(function(e){
      if(e){
        res.status(500).send(e);
      } else {
        res.json({ message: "Post updated ✨✏️✨", data });
      }
    });
  });
})
.get(function(req,res){
  entry.findById(req.params.article_id, function(err,data){
    if(err){
      res.send(err);
    } else {
      res.json(data);
    }
  });
}) // D for delete
.delete(function(req,res){
  entry.remove({_id: req.params.article_id}, function(err,data){
    if(err){
      res.send(err);
    } else {
      res.send("Post deleted ✖️")
    }
  });
});

module.exports = Router;
