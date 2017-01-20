var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
   console.log('New state', store.getState());
});

//store.dispatch(actions.addTodo('Clean the floor'));
//store.dispatch(actions.setSearchText('floor'));
//store.dispatch(actions.toggleShowCompleted());
//load foundations

$(document).foundation();

// Adding custom css section 7 lecture 58
require('style!css!sass!./styles/app.scss')

ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,

    document.getElementById("app")
);
