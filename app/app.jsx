var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');


//load foundations

$(document).foundation();

// Adding custom css section 7 lecture 58
require('style!css!sass!./styles/app.scss')

ReactDOM.render(
    <p>React boiler Plate2</p>,  
    document.getElementById("app")
);
