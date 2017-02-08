import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ManagerActions from '../data/ManagerActions';

class AppComponent extends Component {

	componentDidMount() {
	  this.socket = io('/');
	  this.socket.on('entry message', entry => { ManagerActions.addPost( entry ); });
	}

	render() {
	  var posts = this.props.posts.toArray();

    return (
    	<div className="main">	  
    		<Header />
			  <Timeline  {...this.props} />
			  <Footer />
    	</div>
    )
  }
}

export default AppComponent; 