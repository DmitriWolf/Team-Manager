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

	addPost(post){
		this.socket.emit('entry message', post);
	}

	render() {
	  var posts = this.props.posts.toArray();

    return (
    	<div className="main">	  
    		<Header />
			  <Timeline  {...this.props} />
			  <Footer addPost={this.addPost.bind(this)} />
    	</div>
    )
  }
}

export default AppComponent; 