// Route Directory!
const express = require('express');
const ArticleRoutes = require('./articles/articlesRoutes')

// export with Node (vs react 'export default')
module.exports = (app) => {
  app.get("/api/articles", ArticleRoutes.getAll);
  app.get("/api/articles/:articleId", ArticleRoutes.getOne);
  app.put("/api/articles/:articleId", ArticleRoutes.change);
  app.post("/api/articles", ArticleRoutes.makeNew);
  app.delete("/api/articles/delete/:articleId", ArticleRoutes.destroy);
  app.post("/api/articles/comment/:articleId", ArticleRoutes.makeComment)
}
