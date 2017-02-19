import React, { Component } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ManagerActions from '../data/ManagerActions';
import PostStore from '../data/PostStore.js';
import JobStore from '../data/JobStore.js';

class AppComponent extends Component {

	componentDidMount() {
	  this.socket = io('/');
	  this.socket.on('post message', post => { 
	  	ManagerActions.addPost( post );
	  });
	  this.socket.on('job message', job => { 
	  	ManagerActions.addJob( job );
	  });

	  // initial load. 
		PostStore.getPosts();
		JobStore.getJobs();
	}

	addPost(post){
		this.socket.emit('post message', post);
	}

	addJob(job){
		this.socket.emit('job message', job);
	}

	render() {
	  var posts = this.props.posts;
	  var jobs = this.props.jobs;

    return (
    	<div className="main">	  
    		<Header />
			  <Timeline  {...this.props} />
			  <Footer {...this.props}  addPost={this.addPost.bind(this)} addJob={this.addJob.bind(this)} />
    	</div>
    )
  }
}

export default AppComponent; 