import React, { Component } from 'react';

class Entry extends Component {
  render() {
    return (
    	<div className="entry">
        <div className="title">id: {this.props.post.id}</div>
	    	<div className="title">Title: {this.props.post.title}</div>
	    	<div className="description">description: {this.props.post.description}</div>
	    	<div className="job">jobId: {this.props.post.jobId}</div>
	    	<div className="tags">Tags here.</div>
    	</div>
    )
  }
}

export default Entry; 