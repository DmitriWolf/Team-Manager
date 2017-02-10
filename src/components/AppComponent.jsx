import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ManagerActions from '../data/ManagerActions';

class AppComponent extends Component {

	componentDidMount() {
	  this.socket = io('/');
	  this.socket.on('post message', post => { ManagerActions.addPost( post ); });
		this.getAllPosts();
	}

	addPost(post){
		this.socket.emit('post message', post);
	}

	getAllPosts() {
		ManagerActions.getAllPosts();
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