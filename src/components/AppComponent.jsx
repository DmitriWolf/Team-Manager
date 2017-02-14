import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ManagerActions from '../data/ManagerActions';
import PostStore from '../data/PostStore.js';

class AppComponent extends Component {

	componentDidMount() {
	  this.socket = io('/');
	  this.socket.on('post message', post => { 
	  	ManagerActions.addPost( post );
	  });

	  // initial load. 
		PostStore.getPosts();
	}

	addPost(post){
		this.socket.emit('post message', post);
	}

	render() {
	  var posts = this.props.posts;

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