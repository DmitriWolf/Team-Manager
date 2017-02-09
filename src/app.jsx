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
	job        : "1",
	description: "Behind the sink there is a pipe which is leaking very slowly. Corrosion and some framing rot. Requesting Plumber.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "pluber", "demo", "change order" ]
});
ManagerActions.addPost({
	id         : "kjlsdf09823740dfsklnlkdfs",
	title      : "Demo Complete",
	author     : "Jim Janake",
	job        : "2",
	description: "Clean demo. No problems.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "demo", "phase" ]
});
ManagerActions.addPost({
	id         : "lksjdf9823489kljsfdl23",
	title      : "Cabinet Door Damaged in Transit",
	author     : "Jason Woods",
	job        : "3",
	description: "I opened the cabinet box and the door was cracked. You can see the mark on the box where something hit it.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "kitchen", "order", "shipping", "problem" ]
});
ManagerActions.addPost({
	id         : "928374kl23lkjlj3kljk324",
	title      : "Job Finish",
	author     : "Joaquin Phoenix",
	job        : "4",
	description: "Clinet is very happy. I am too. long drive home.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "kitchen", "complete", "final", "out of here" ]
});
ManagerActions.addPost({
	id         : "928374kl232342kj34kj3kljk324",
	title      : "Setup",
	author     : "Dmtir Wolf",
	job        : "5",
	description: "Lots of plastic to cover up bed. House is dirty. Not very happy.",
	photo      : 'url here',
	date       : Date.now ,
	tags       : [ "bathroom", "dirt", "gross", "pay me more"]
});

ReactDOM.render(<AppContainer />, document.getElementById('root'));