import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';

class AppView extends Component {
  render() {
		console.log('AppViewClass props: ', this.props);
	    
		return (
			<div id="app">
			  <Header />
			  <Timeline posts={this.props} />
			</div>
		)
  }
}

export default AppViewClass; 




