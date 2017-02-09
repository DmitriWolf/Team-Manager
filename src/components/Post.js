import React, { Component } from 'react';
import Counter from '../data/Counter';

class Post extends Component {
  render() {
    return (
    	<td>
        <div className="post">
          <div className="id">id: {this.props.post.id}</div>
  	    	<div className="title">Title: {this.props.post.title}</div>
  	    	<div className="description">description: {this.props.post.description}</div>
  	    	<div className="job">job: {this.props.post.job}</div>
  	    	<div className="tags">
              {this.props.post.tags.map(tag => (
                <span key={Counter.increment()} className="tag">{tag}</span>
              ))}
          </div>
        </div>
    	</td>
    )
  }
}

export default Post; 