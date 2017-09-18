//361 X 557

import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';

import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router'

import Home from './home.jsx';


const CustomRouter = React.createClass({
  displayName:'CustomRouter',
  childContextTypes: {
   
  },

  getChildContext: function() {
    return {
       
    } 
  },
  getInitialState: function(){
        return {
        }
  },
  componentWillMount: function(){
    console.log("component [CustomRouter] : is mounting " );

  },
  componentWillUnmount: function(){
      console.log("component [CustomRouter] : is unmounting ");
  },
	render: function() {
	    return (
          <Router history={hashHistory}>
            <Route path="/" component={Home} >
			  <IndexRoute component={Home} />
              <Route path="/home" component={Home}/>
            </Route>
          </Router>
			)
	}
});

ReactDOM.render(<CustomRouter />, document.getElementById('app'));