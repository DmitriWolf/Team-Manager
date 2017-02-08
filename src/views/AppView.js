import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

function AppView(props) {
	return <div id="app">
	  <Header />
	  <Timeline  {...props} />
	  <Footer />
	</div>;
}

export default AppView;