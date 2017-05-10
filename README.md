# Blog - In the Works
_Blog_ is a weird word

### Project Overview

What we got here is a full-stack JavaScript app! I patched this together with all the knowledge I collected in code bootcamp (very properly named). It's like portfolio and personal statement: a testament to and celebration of my perseverance in learning a programing language.

---
### Run This Project

1. Open your command line
(first, you may want to [navigate to a specific folder/directory](http://www.wikihow.com/Change-Directories-in-Command-Prompt))
2. Type: `git clone https://github.com/asternaut/blog.git`
3. Next...

---
### Backend Overview
Built with:
- NodeJS
- ExpressJS
- MongoDB
- MongoDB

#### API

Document all my endpoints here!

Resources
- Article
  - Title
  - content

Ex. Article Resource
```
{
  title: "First Post",
  content: "La la la"
}
```


---
### Frontend Overview
Built with:
- ReactJS
- React Router
- Bootstrap

Pages
- Home
- Articles
  - View Articles
  - Edit Article
- Contact

---

React Component Hierarchy Tree

#### Stage One
* Create functional Node/Express Application
* Implement CRUD RESTful API for Article Resource
* TDD: Implement at least 3 tests

---
#### Stage Two
* Create functional React App
* Implement Router, to get to each on of your `container` comps
* Implement client side CRUD for Articles

#### Product Roadmap
* Seed Dev DB with fake data using [faker](https://github.com/Marak/faker.js)
* User Auth with [auth0](https://auth0.com)
* Protecting routes / functionality from non-authorized users
* Forming Comments / Articles relationship
* Design home page using [sketch](https://www.sketchapp.com)
* Update Article to have a category & category relationships
* Migrate to production using [heroku](https://heroku.com)
