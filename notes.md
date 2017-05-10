_### This is here to help me remember and organize my thoughts_

1. `npm install express-generator -g`
  - `-g` for _global!_
  - to use: `express nameOfApp`
2. `express blog`
3. Ignore node_modules: `echo 'node_modules' >> .gitignore` (or create `.gitignore` file in your main folder)
4. Delete unnecessary things created by the express generator
  - ex Views folder, View engine middleware, public directory (check my github history to see the stuff I x'd)
5. `npm install` is a good idea
6. Add a test endpoint to app.js:
```
app.get('/test', function(req,res){
  res.json({message: "app functioning properly"})
});
```
7.update server in bin/www to port 3001
8.
. Test app! Commit if functional
. Checkout into a new branch **before creating the API**
