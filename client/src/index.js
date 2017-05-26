import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import {HomeContainer, AboutContainer, EditContainer, ListContainer, PostContainer, ViewContainer} from './containers';
require ('./App.css');
//import {About} from './containers'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <IndexRoute component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/edit" component={EditContainer} />
      <Route path="/list" component={ListContainer} />
      <Route path="/post" component={PostContainer} />
      <Route path="/view/:articleId" component={ViewContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
