import React, { Component } from 'react';
import Header from '../components/Header';
import Jobsview from '../components/Jobsview';
import Footer from '../components/Footer';
import ManagerActions from '../data/ManagerActions';
import PostStore from '../data/PostStore.js';
import JobStore from '../data/JobStore.js';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        sortBy: 'all'
    };
  }

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

	sortBy(event) {
    event.preventDefault()
    var el = event.target;
    if(el.id && el.id.split('-').length) {
    	let category = el.id.split('-')[1];
    	this.setState({ 'sortBy' : category });
    }
  }

	render() {
	  var posts = this.props.posts;
	  var jobs = this.props.jobs;

    return (
    	<div className="main">	  
    		<Header sortBy={this.sortBy.bind(this)} />
			  <Jobsview  {...this.props} sortBy={this.state.sortBy}/>
			  <Footer {...this.props}  addPost={this.addPost.bind(this)} addJob={this.addJob.bind(this)} />
    	</div>
    )
  }
}

export default AppComponent; 