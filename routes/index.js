// Route Directory!
const express = require('express');
const ArticleRoutes = require('./articles/articlesRoutes')

// export with Node (vs react 'export default')
module.exports = (app) => {
  app.get("/api/articles", ArticleRoutes.getAll);
  app.get("/api/articles/:article_id", ArticleRoutes.getOne);
  app.put("/api/articles/:article_id", ArticleRoutes.change);
  app.post("/api/articles", ArticleRoutes.makeNew);
  app.delete("/api/articles/:article_id", ArticleRoutes.destroy);
}
