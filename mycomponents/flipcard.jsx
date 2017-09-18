import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History } from 'react-router';
import FlipCard from 'react-flipcard';

const Flipcard = React.createClass({
	displayName:'Flipcard',
	mixins: [ History ],
	contextTypes: {
		
	},
	getInitialState: function(){
        return { 
        	

    	};
    },
    componentWillMount: function(){
        console.log("component [Flipcard] : is mounting " );
    },
    componentWillUnmount: function(){
        console.log("component [Flipcard] : is unmounting ");
    },
	render: function() {
		return(
				<FlipCard>
					<div className="bigPic"><img src={this.props.imgPath} alt="the-couple"/></div>
					
					<div className="peopleDetails">
					<div className="peopleDetailsContainer">
					<h1 className="titles">{this.props.family}</h1>
					<div className="peopleName">{this.props.peopleName}</div>
					<div className="peopleName">{this.props.peopleRelation}</div>
					<div className="peopleName">{this.props.peopleWork}</div>
					</div>
					</div>
					
				</FlipCard>
		)
	}
});

module.exports = Flipcard;