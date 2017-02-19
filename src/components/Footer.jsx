import React, { Component } from 'react';
import PostForm from './PostForm';
import JobForm from './JobForm';

class Footer extends Component {
	constructor(props) {
    super(props);
    this.state = { 
      displayAddJobForm: false
    };
  }

  displayJobForm(value) {
  	this.setState({ displayAddJobForm: value });
  }

  render() {

  	let newJobForm = null;
    if (this.state.displayAddJobForm) {
      newJobForm = <JobForm displayJobForm={this.displayJobForm.bind(this)} addJob={this.props.addJob} />;
    } 

    return (
    	<div className="footer">	
    		<PostForm {...this.props} addPost={this.props.addPost} displayJobForm={this.displayJobForm.bind(this)} />
    		{newJobForm}
    	</div>
    )
  }
}

export default Footer; 