 _notes: self explanatory!_  

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
});
```
7. Update server in bin/www to port 3001
 - `var port = normalizePort(process.env.PORT || '3001')`
8. `npm run start`
. Test app! Commit if functional
. Checkout into a new branch **before creating the API**
9. Configure MongoDB
  - Install any dependencies (Mongo & Mongoose)
  - `npm install --save mongoose`
  - Magically connect to Database listener?

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

## Testing
1. `npm install --save Mocha Chai chai-http`, and ` npm install --save dotenv`
2. add to package.json:
```
"test": "NODE_ENV=test mocha --no-deprecation --sort --colors --inline-diffs --bail",
```
3. add to database.config:
```
var mongoose = require('mongoose');
module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://localhost/test-pt-blog");
    console.log("📁 📂 🗄 TEST DATABASE OPERATIONAL 🗄 📂 📁");
  } else {
    mongoose.connect("mongodb://localhost/pt-blog")
    console.log("📁 📂 🗄 DEV DATABASE OPERATIONAL 🗄 📂 📁");
  }}
```
4. Create a test database!
  - create a folder named _test_ and fill with `articles_test.js`
  - create `.env`
  - see `articles_test.js` for content
  - `npm run test` to test

## Configure Build to use Module-less CSS
1. [create-react-app](https://www.npmjs.com/package/react-scripts-custom)
2. add to webpack.config.dev.js:
```
 loader:`style!css?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss`
 ```
3. test css! `import {class} from './styles.css'`
4. in client: `npm install --save react-router@3`
