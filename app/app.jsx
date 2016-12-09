var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');


//load foundations
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Adding custom css section 7 lecture 58
require('style!css!sass!./styles/app.scss')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>



    </Route>
  </Router>,
  document.getElementById("app")
);
