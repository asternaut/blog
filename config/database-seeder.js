const faker = require('faker');
const Article = require ('../models/article');

// for loop to create 20 new articles

module.exports = () => {

  // Delete Fake articles on new server start
  // Article.remove(err => {
  //   if(err) {
  //     console.log(err, "Error deleting articles")
  //   }else {
  //     console.log("old articles deleted, making new ones")
  //   }
  // })

  for(var i = 0; i < 20; i++){
    var newArticle = new Article({
      title: faker.random.words(),
      img: faker.image.image(),
      moodRN: faker.internet.color(),
      author: faker.name.firstName(),
      body: faker.lorem.paragraphs(),
    });

    newArticle.save();
  }
}
