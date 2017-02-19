import React, { Component } from 'react';
import Counter from '../data/Counter';

class PostDetail extends Component {
  render() {
    return (
      <div className="post-detail">
	    	<div className="title">{this.props.post.title}</div>
	    	<div className="description">{this.props.post.description}</div>
        <div className="job">job: {this.props.post.job}</div>
	    	<div className="date">date: {this.props.post.date}</div>
	    	<div className="tags">
            {this.props.post.tags.map(tag => (
              <span key={Counter.increment()} className="tag">{tag}</span>
            ))}
        </div>
      </div>
    )
  }
}

export default PostDetail; 