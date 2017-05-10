 _This is here to help me remember and organize my project_  

## Getting Started

1. `npm install express-generator -g`
  - `-g` for _global!_
  - to use: `express nameOfApp`
2. `express blog`
3. Ignore node_modules: `echo 'node_modules' >> .gitignore` (or create `.gitignore` file in your main folder)
4. Delete unnecessary things created by the express generator
  - ex. Views folder, View engine middleware, public directory (check my github history to see the stuff I x'd)
5. `npm install` is a good idea
6. Add a test endpoint to app.js:
```
app.get('/test', function(req,res){
  res.json({message: "app functioning properly"})
});```
7. Update server in bin/www to port 3001
 - `var port = normalizePort(process.env.PORT || '3001')`
8. `npm run start`
. Test app! Commit if functional
. Checkout into a new branch **before creating the API**
9. Configure MongoDB
  - Install any dependencies (Mongo & Mongoose)
  - `npm install --save mongoose`
  - Add magically connect to Database listener
_Yay! All set up!_

## API Phase
1. Checkout to a safe branch
 - `git checkout -b articles`
2. Create article model
3. Create routes folder and `routes/articles.js`
4. Create Endpoints in `routes/articles` one by one and test in Postman
5. Do the git thing when CRUD Works
 - `git add -A`
 - `git commit -m "about my commit"`
 - `git push origin articles` -> pushed to your new branch
 - `git checkout master`
 - `git merge articles` -> brings your new code into articles
 - `git push origin master` -> sync your master branch with new code
