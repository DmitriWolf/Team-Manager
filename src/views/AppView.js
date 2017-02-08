import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';

function AppView(props) {
	return <div id="app">
	  <Header />
	  <Timeline  {...props} />
	</div>;
}

export default AppView;