import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import SignUpContainer from './userAuth/SignUpContainer';
import LoginContainer from './userAuth/LoginContainer';

import App from './App';
import {HomeContainer, AboutContainer, EditContainer, ListContainer, PostContainer, ViewContainer} from './containers';
require ('./App.css');
//import {About} from './containers'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer}/>
      <IndexRoute component={HomeContainer}/>
      <Route path="/about" component={AboutContainer}/>
      <Route path="/edit/:articleId" component={EditContainer}/>
      <Route path="/list" component={ListContainer}/>
      <Route path="/post" component={PostContainer}/>
      <Route path="/view/:articleId" component={ViewContainer}/>
      <Route path="/signup" component={SignUpContainer}/>
      <Route path="/login" component={LoginContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
