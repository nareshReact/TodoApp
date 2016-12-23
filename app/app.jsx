var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var Timer = require('./components/Timer.jsx');
var Countdown = require('./components/Countdown.jsx');


//load foundations

$(document).foundation();

// Adding custom css section 7 lecture 58
require('style!css!sass!./styles/app.scss')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown} />
    <IndexRoute component={Timer} />

    </Route>
  </Router>,
  document.getElementById("app")
);
