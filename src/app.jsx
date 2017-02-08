import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import ManagerActions from './data/ManagerActions';

// We will remove these lines after implementing real persistence,
// or use them for testing:

ManagerActions.addPost({
	id         : "lkjsfd0932je09jflisdf",
	title      : "Plumbing Leak",
	author     : "Hal Goldsmith",
	jobId      : "1",
	description: "Behind the sink there is a pipe which is leaking very slowly. Corrosion and some framing rot. Requesting Plumber.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "pluber", "demo", "change order" ]
});
ManagerActions.addPost({
	id         : "kjlsdf09823740dfsklnlkdfs",
	title      : "Demo Complete",
	author     : "Jim Janake",
	jobId      : "2",
	description: "Clean demo. No problems.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "demo", "phase" ]
});
ManagerActions.addPost({
	id         : "lksjdf9823489kljsfdl23",
	title      : "Cabinet Door Damaged in Transit",
	author     : "Jason Woods",
	jobId      : "3",
	description: "I opened the cabinet box and the door was cracked. You can see the mark on the box where something hit it.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "kitchen", "order", "shipping", "problem" ]
});

ReactDOM.render(<AppContainer />, document.getElementById('root'));