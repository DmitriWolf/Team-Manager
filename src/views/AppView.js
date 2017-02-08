import React, { Component } from 'react';
import AppComponent from '../components/AppComponent';

function AppView(props) {
	return <div id="app">
		<AppComponent {...props} />
	</div>;
}

export default AppView;